# Next.js Routing 학습 프로젝트

이 프로젝트에서 학습한 Next.js 전용 기능들을 정리한 문서입니다.

---

## 📁 App Router

Next.js 13+에서 도입된 `app` 디렉토리 기반의 라우팅 시스템입니다.

```
app/
├── page.js      → /
├── layout.js    → 공유 레이아웃
└── news/
    └── page.js  → /news
```

---

## 🗂️ Route Groups `(폴더명)`

**URL 경로에 영향을 주지 않고** 파일을 논리적으로 그룹화할 수 있습니다.

```
app/
├── (marketing)/
│   ├── page.js      → /
│   └── layout.js    → 마케팅 페이지용 레이아웃
├── (content)/
│   ├── news/        → /news
│   └── layout.js    → 콘텐츠 페이지용 레이아웃
```

**장점**: 같은 URL 구조를 유지하면서 다른 레이아웃을 적용할 수 있음

---

## 🔀 Dynamic Routes `[폴더명]`

동적 경로 파라미터를 처리합니다.

```
app/news/[slug]/page.js → /news/ai-news, /news/tech-update 등
```

```javascript
export default function NewsDetailPage({ params }) {
  const newsSlug = params.slug; // URL에서 slug 값 추출
}
```

---

## 🔲 Parallel Routes `@폴더명`

**동일한 레이아웃에서 여러 페이지를 동시에 렌더링**할 수 있습니다.

```
app/archive/
├── @archive/       → archive 슬롯
│   └── page.js
├── @latest/        → latest 슬롯
│   └── default.js
└── layout.js       → 두 슬롯을 함께 렌더링
```

```javascript
// layout.js
export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <section>{archive}</section> {/* @archive 폴더 내용 */}
      <section>{latest}</section> {/* @latest 폴더 내용 */}
    </div>
  );
}
```

### `default.js`

Parallel Route가 현재 URL과 매칭되지 않을 때 **폴백으로 렌더링**되는 파일

---

## 🚦 Intercepting Routes `(.)`, `(..)`, `(...)`

**라우트를 가로채서** 현재 레이아웃 내에서 다른 경로의 콘텐츠를 표시합니다. (모달 구현에 유용)

| 표기    | 의미       |
| ------- | ---------- |
| `(.)`   | 같은 레벨  |
| `(..)`  | 한 레벨 위 |
| `(...)` | 루트 레벨  |

```
app/news/[slug]/
├── @modal/
│   └── (.)image/      → /news/[slug]/image를 인터셉트
│       └── page.js    → 모달로 표시
├── image/
│   └── page.js        → 전체 페이지로 표시 (새로고침 시)
```

---

## 📦 Catch-all Routes `[...폴더명]` / `[[...폴더명]]`

여러 세그먼트를 한 번에 캐치합니다.

| 표기            | 매칭 경로                                                |
| --------------- | -------------------------------------------------------- |
| `[...filter]`   | `/archive/2024`, `/archive/2024/01` (필수)               |
| `[[...filter]]` | `/archive`, `/archive/2024`, `/archive/2024/01` (선택적) |

```javascript
// [[...filter]]/page.js
export default function FilteredNewsPage({ params }) {
  const filter = params.filter; // ['2024'] 또는 ['2024', '01'] 또는 undefined
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
}
```

---

## 🛣️ Route Handlers (API Routes)

`route.js` 파일로 API 엔드포인트를 생성합니다.

```javascript
// app/api/route.js
export function GET(request) {
  return new Response("Hello, World!");
}

export function POST(request) {
  return Response.json({ message: "Created" });
}
```

---

## 🔒 Middleware

모든 요청을 가로채서 처리할 수 있습니다.

```javascript
// middleware.js (프로젝트 루트)
import { NextResponse } from "next/server";

export default function middleware(request) {
  console.log("요청 가로채기:", request.url);
  return NextResponse.next(); // 요청 계속 진행
}

export const config = {
  matcher: ["/api/:path*"], // 특정 경로에만 적용
};
```

---

## 📄 Special Files

### `layout.js`

공유 UI를 정의하고 자식 컴포넌트를 감쌉니다.

```javascript
export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

### `not-found.js`

404 페이지를 커스터마이징합니다.

```javascript
export default function NotFoundPage() {
  return <h1>페이지를 찾을 수 없습니다</h1>;
}
```

### `error.js`

에러 바운더리로 에러를 처리합니다. **반드시 클라이언트 컴포넌트**여야 합니다.

```javascript
"use client";
export default function ErrorPage({ error }) {
  return <h1>에러 발생: {error.message}</h1>;
}
```

---

## 🧭 Navigation

### `Link` 컴포넌트

클라이언트 사이드 네비게이션을 제공합니다.

```javascript
import Link from "next/link";

<Link href="/news">뉴스 보기</Link>;
```

### `usePathname` Hook

현재 경로를 가져옵니다. (클라이언트 컴포넌트 전용)

```javascript
"use client";
import { usePathname } from "next/navigation";

const pathname = usePathname(); // "/news"
```

### `useRouter` Hook

프로그래매틱 네비게이션을 제공합니다. (클라이언트 컴포넌트 전용)

```javascript
"use client";
import { useRouter } from "next/navigation";

const router = useRouter();
router.push("/news"); // 페이지 이동
router.back(); // 뒤로 가기
```

### `notFound()` 함수

프로그래매틱하게 404 페이지를 트리거합니다.

```javascript
import { notFound } from "next/navigation";

if (!data) {
  notFound(); // not-found.js 페이지 렌더링
}
```

---

## 📝 Metadata

페이지의 SEO 메타데이터를 설정합니다.

```javascript
export const metadata = {
  title: "Next.js 라우팅 학습",
  description: "Next.js 라우팅 기능을 학습합니다.",
};
```

---

## 🖥️ Client vs Server Components

### Server Component (기본값)

서버에서 렌더링됩니다.

```javascript
// 별도 지시어 없음
export default function ServerComponent() {
  return <div>서버에서 렌더링</div>;
}
```

### Client Component

`"use client"` 지시어로 클라이언트 컴포넌트로 지정합니다.

```javascript
"use client";
import { useState } from "react";

export default function ClientComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

## 📂 프로젝트 구조 요약

```
app/
├── (content)/                    # Route Group
│   ├── archive/
│   │   ├── @archive/             # Parallel Route
│   │   │   └── [[...filter]]/    # Optional Catch-all
│   │   │       ├── error.js      # Error Boundary
│   │   │       └── page.js
│   │   ├── @latest/              # Parallel Route
│   │   │   └── default.js        # Default Fallback
│   │   └── layout.js
│   ├── news/
│   │   ├── [slug]/               # Dynamic Route
│   │   │   ├── @modal/           # Parallel Route
│   │   │   │   ├── (.)image/     # Intercepting Route
│   │   │   │   │   └── page.js
│   │   │   │   └── default.js
│   │   │   ├── image/
│   │   │   │   └── page.js
│   │   │   ├── layout.js
│   │   │   └── not-found.js
│   │   └── page.js
│   ├── layout.js
│   └── not-found.js
├── (marketing)/                  # Route Group
│   ├── layout.js
│   └── page.js
├── api/
│   └── route.js                  # Route Handler
└── globals.css

middleware.js                     # Middleware
```

---

## 🔗 참고 자료

- [Next.js 공식 문서 - Routing](https://nextjs.org/docs/app/building-your-application/routing)
- [Next.js 공식 문서 - Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Next.js 공식 문서 - Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)

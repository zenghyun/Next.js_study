import "./globals.css";

// 정해진 이름임 => 메타데이터sss
// head에 들어갈 정보를 정의할 수 있음 (title, description, keywords, etc.)
export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};

/**
 * 
 * 배우신 것과 같이 NextJS에는 일부 보호된 파일명이 있습니다.

중요: 이 파일명들은  app/폴더(부 폴더 포함) 내부에서 생성될 때만 보호됩니다.  app/폴더 외부에서 생성될 경우 이 파일명들을 특별한 방식으로 처리하지 않습니다.

다음 목록은 NextJS에서 보호된 파일명이며 이 섹션에서 중요한 파일명을 배울 것입니다:

page.js => 신규 페이지 생성 (예: app/about/page.js은 <your-domain>/about page을 생성)

layout.js => 형제 및 중첩 페이지를 감싸는 신규 레이아웃 생성

not-found.js => ‘Not Found’ 오류에 대한 폴백 페이지(형제 또는 중첩 페이지 또는 레이아웃에서 전달된)

error.js => 기타 오류에 대한 폴백 페이지(형제 또는 중첩 페이지 또는 레이아웃에서 전달된)

loading.js => 형제 또는 중첩 페이지(또는 레이아웃)가 데이터를 가져오는 동안 표시되는 폴백 페이지

route.js => API 경로 생성(즉, JSX 코드가 아닌 데이터를 반환하는 페이지, 예: JSON 형식)
 */

export default function RootLayout({ children }: { children: JSX.Element }) {
  // 이 컴포넌트는 실제로 html 태그와 body 태그를 렌더링 함
  /**
   * 모든 프로젝트는 기본적으로 layout.tsx를 가지고 있음 (이게 page.tsx 를 감싸는 구조)
   * 즉 /about 폴더 내에 layout.tsx를 만들면 /about/page.tsx에 적용됨
   * /about 안에 하위 폴더 만들어도 layout 적용됨
   */
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

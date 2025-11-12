import "./globals.css";

// 정해진 이름임 => 메타데이터sss
// head에 들어갈 정보를 정의할 수 있음 (title, description, keywords, etc.)
export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};

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

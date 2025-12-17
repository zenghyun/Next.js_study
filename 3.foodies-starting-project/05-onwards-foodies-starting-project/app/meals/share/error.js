/**
 * NextJS는 기본적으로 클라이언트 측에서
 * 발생하는 오류를 포함한, 해당 컴포넌트의 모든 오류를 잡을 수 있도록 보장한다.
 */
"use client";
export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An error form occurred</h1>
      <p>Please try again later.</p>
      <p>Error: {error.message}</p>
    </main>
  );
}

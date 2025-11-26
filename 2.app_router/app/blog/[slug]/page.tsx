import { notFound } from "next/navigation";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const validSlugs = ["nextjs", "react", "typescript"];

  // 존재하지 않는 slug면 가장 가까운 not-found.tsx 사용
  if (!validSlugs.includes(params.slug)) {
    notFound(); // → /blog/[slug]/not-found.tsx (🟡 노란색) 사용!
  }

  return (
    <main style={{ padding: "50px" }}>
      <h1>Blog Post</h1>
      {/* 이렇게 하면 url 경로에 입력한 값 빼올 수 있음 */}
      <p>
        <strong>Slug:</strong> {params.slug}
      </p>
      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          backgroundColor: "#f0f0f0",
          borderRadius: "5px",
        }}
      >
        <p>✅ 유효한 slug입니다!</p>
        <p>
          존재하지 않는 slug를 입력하면 🟡 노란색 not-found 페이지가 나옵니다.
        </p>
      </div>
    </main>
  );
}

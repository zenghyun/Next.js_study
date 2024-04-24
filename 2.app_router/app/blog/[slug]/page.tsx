export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>Blog Post</h1>
      {/* 이렇게 하면 url 경로에 입력한 값 빼올 수 있음 */}
      <p>{params.slug}</p>
    </main>
  );
}

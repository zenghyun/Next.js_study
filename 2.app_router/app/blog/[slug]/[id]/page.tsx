/**
 *
 * 동적 라우팅을 중첩해서 사용할 수 있다.
 * 단 두 번째 동적 라우팅 값은 첫 번째 동적 라우팅 값의 하위 폴더에 있어야 한다.
 * 그리고 같은 이름을 사용하면 안된다.
 * [slug]/[id] 처럼 사용할 수 있다.
 * 그러면 첫 번째 동적 라우팅 값은 slug 폴더에 있는 파일을 사용하고,
 * 두 번째 동적 라우팅 값은 id 폴더에 있는 파일을 사용한다.
 * 
 * not-found 파일을 만들면 존재하지 않는 페이지에 대해 404 표시를 할 수 있다.
 * 동적 라우팅의 경우 어떤 path를 입력해도 다 받을 수 있기 때문에 실제 내가 원하는 path가 아니면 404 표시를 할 수 있다.
 *  // 존재하는 포스트 목록 (실제로는 DB나 API에서 가져옴)
  const validSlugs = ["post-1", "post-2", "post-3"];
  const validIds = ["1", "2", "3", "post-4"];

  // 존재하지 않는 slug나 id면 404 표시
  if (!validSlugs.includes(params.slug) || !validIds.includes(params.id)) {
    notFound(); // not-found.tsx 파일을 렌더링
  }
 * 
 */

import { notFound } from "next/navigation";

export default function BlogSlugPostPage({
  params,
}: {
  params: { slug: string; id: string };
}) {
  // 존재하는 포스트 목록 (실제로는 DB나 API에서 가져옴)
  const validSlugs = ["post-1", "post-2", "post-3"];
  const validIds = ["1", "2", "3", "post-4"];

  // 존재하지 않는 slug나 id면 404 표시
  if (!validSlugs.includes(params.slug) || !validIds.includes(params.id)) {
    notFound(); // not-found.tsx 파일을 렌더링
  }

  return (
    <main style={{ padding: "50px" }}>
      <h1>Blog Slug Post</h1>
      <p>
        <strong>Category:</strong> {params.slug}
      </p>
      <p>
        <strong>Post ID:</strong> {params.id}
      </p>
      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          backgroundColor: "#626761",
          borderRadius: "5px",
        }}
      >
        <p>✅ 유효한 URL입니다!</p>
        <p>다른 URL을 시도해보세요:</p>
        <ul>
          <li>/blog/invalid/1 (존재하지 않는 slug)</li>
          <li>/blog/nextjs/999 (존재하지 않는 id)</li>
        </ul>
      </div>
    </main>
  );
}

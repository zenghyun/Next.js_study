/**
 * 이 페이지는 notFound()를 호출하지 않고
 * 직접 커스텀 에러 UI를 렌더링하는 예시입니다.
 *
 * [id] 폴더와 같은 depth에 있지만,
 * not-found.tsx를 사용하지 않습니다!
 */

export default function CommentPage({
  params,
}: {
  params: { slug: string; comment: string };
}) {
  const validComments = ["c1", "c2", "c3"];

  const isValid = validComments.includes(params.comment);

  // notFound() 호출 안 하고 직접 에러 UI 렌더링
  if (!isValid) {
    return (
      <div
        style={{
          padding: "50px",
          textAlign: "center",
          backgroundColor: "#f0e6ff", // 보라색
          minHeight: "400px",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>⚠️</h1>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
          🟣 커스텀 에러 (not-found.tsx 사용 안 함)
        </h2>
        <p style={{ color: "#666", marginBottom: "20px" }}>
          이 페이지는 notFound()를 호출하지 않았습니다.
        </p>
        <p style={{ color: "#666", marginBottom: "30px" }}>
          같은 depth의 [id] 폴더는 🔵 파란색 not-found를 사용하지만,
          <br />이 [comment] 폴더는 직접 에러 UI를 렌더링합니다!
        </p>
        <div
          style={{
            padding: "15px",
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        >
          <p>
            <strong>유효한 comment:</strong> c1, c2, c3
          </p>
          <p>
            <strong>현재 입력:</strong> {params.comment}
          </p>
        </div>
        <a
          href="/blog"
          style={{
            padding: "10px 20px",
            backgroundColor: "#9c27b0",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          블로그 목록으로
        </a>
      </div>
    );
  }

  return (
    <main style={{ padding: "50px" }}>
      <h1>Comment Page</h1>
      <p>
        <strong>Slug:</strong> {params.slug}
      </p>
      <p>
        <strong>Comment ID:</strong> {params.comment}
      </p>
      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          backgroundColor: "#f0e6ff",
          borderRadius: "5px",
        }}
      >
        <p>✅ 유효한 comment입니다!</p>
        <p>
          이 페이지는 [id]와 같은 depth에 있지만,
          <br />
          not-found.tsx를 사용하지 않고 직접 에러 처리를 합니다.
        </p>
        <hr style={{ margin: "15px 0" }} />
        <p>
          <strong>테스트:</strong>
        </p>
        <ul style={{ textAlign: "left", display: "inline-block" }}>
          <li>/blog/nextjs/invalid-comment → 🟣 보라색 커스텀 에러</li>
          <li>/blog/nextjs/999 → 🔵 파란색 not-found (같은 depth!)</li>
        </ul>
      </div>
    </main>
  );
}

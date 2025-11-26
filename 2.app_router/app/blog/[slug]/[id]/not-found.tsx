export default function IdNotFound() {
  return (
    <div style={{ padding: "50px", textAlign: "center", backgroundColor: "#e6f7ff" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>404</h1>
      <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
        🔵 /blog/[slug]/[id] 레벨의 Not Found
      </h2>
      <p style={{ color: "#666", marginBottom: "30px" }}>
        이 파일은 /blog/[slug]/[id] 폴더에 있습니다. (가장 가까운 not-found!)
      </p>
      <a
        href="/blog"
        style={{
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        블로그 목록으로 돌아가기
      </a>
    </div>
  );
}

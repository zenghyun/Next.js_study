export default function SlugNotFound() {
  return (
    <div style={{ padding: "50px", textAlign: "center", backgroundColor: "#fff4e6" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>404</h1>
      <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
        🟡 /blog/[slug] 레벨의 Not Found
      </h2>
      <p style={{ color: "#666", marginBottom: "30px" }}>
        이 파일은 /blog/[slug] 폴더에 있습니다.
      </p>
      <a 
        href="/blog" 
        style={{ 
          padding: "10px 20px", 
          backgroundColor: "#ff9800", 
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


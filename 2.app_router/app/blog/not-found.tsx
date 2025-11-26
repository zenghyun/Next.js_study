export default function BlogNotFound() {
  return (
    <div style={{ padding: "50px", textAlign: "center", backgroundColor: "#ffe6e6" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>404</h1>
      <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
        🔴 /blog 레벨의 Not Found
      </h2>
      <p style={{ color: "#666", marginBottom: "30px" }}>
        이 파일은 /blog 폴더에 있습니다.
      </p>
      <a 
        href="/blog" 
        style={{ 
          padding: "10px 20px", 
          backgroundColor: "#ff4444", 
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


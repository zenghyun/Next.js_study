// import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  /**
   * 서버 컴포넌트에서 데이터를 가져오는 방법
   * 1. fetch 함수를 사용하여 데이터를 가져옴
   * 2. 데이터를 가져온 후 클라이언트 컴포넌트에서 데이터를 사용함
   *
   *  서버 컴포넌트에서 fetch 를 사용할 수 있는 이유는 Next.js가 서버 측 코드를 실행하는 것을 지원하고
   *  Next.js가 이 fetch 함수를 확장하여 몇 가지 추가 캐싱 관련 기능을 추가했기 때문임
   */
  // const response = await fetch("http://localhost:8080/news");

  // if (!response.ok) {
  //   throw new Error("Failed to fetch news");
  // }
  // const news = await response.json();

  /**
   * 이 코드는 클라이언트에서는 접근할 수 없음 ( 서버에서만 실행됨 )
   * 클라이언트에서는 데이터를 가져오기 위해서는 fetch 함수를 사용해야 함
   * 왜냐면 클라이언트에서는 서버 컴포넌트에서 실행된 코드를 접근할 수 없기 때문임 ( 보안상의 이유 )
   */
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}

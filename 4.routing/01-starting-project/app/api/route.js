/**
 * router handler
 * 화면에 렌더링되는 페이지를 반환하지 않는 라우트를 처리하는 핸들러
 * 보통 JSON 데이터를 반환하거나 수신되는 JSON 데이터를 수락하고 JSON 응답을 반환한다.
 * 따라서 라우트 핸들러의 목적은 API 같은 라우트를 설정하여 데이터를 생성, 저장하는 등  필요한 작업을 전부 수행하되 클라이언트 내부적으로 호출함
 * 전체 페이지 콘텐츠를 렌더링 하는 게 아니라 내부적으로 일부 데이터만 저장할 수 있음.
 * 동일한 파일 내부에 라우트 핸들러를 여러 개 설정해서 같은 경로 내 다양한 요청들을 처리할 수 있음
 */
export function GET(request) {
  //   console.log(request);
  // return Response.json()
  return new Response("Hello, World!");
}

import { NextResponse } from "next/server";
/**
 *
 * @param {*} request
 * @returns
 *
 * middleware
 * 요청이 들어올 때 마다 실행되는 함수
 * 요청을 가로채서 수정하거나 처리할 수 있음
 * 요청을 가로채서 수정하거나 처리할 수 있음
 */
export default function middleware(request) {
  console.log("middleware");
  console.log(request);
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};

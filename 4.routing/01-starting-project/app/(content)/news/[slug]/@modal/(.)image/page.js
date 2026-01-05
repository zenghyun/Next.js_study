"use client";

import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";
/**
 *
 * @param {*} param0
 * @returns
 *
 * 인터셉트 라우트 페이지
 * (.)image 는 인터셉트 라우트 페이지임
 * () 안에 .. 이 늘어나면 그만큼 상위 폴더로 이동함
 *
 * useRouter는 클라이언트 컴포넌트에서 사용할 수 있는 라우터 객체를 제공함
 */
export default function ImagePage({ params }) {
  const router = useRouter();
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop" onClick={() => router.back()} />
      <dialog className="modal" open>
        <div id="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}

import { notFound } from "next/navigation";
import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
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
export default async function ImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div id="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}

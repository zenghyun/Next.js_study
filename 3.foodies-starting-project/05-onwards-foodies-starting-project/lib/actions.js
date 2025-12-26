"use server";
import { saveMeal } from "@/lib/meal";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
/**
 *
 * @param {*} formData
 * 이 server action을 통해 이 form이 제출되면
 * NextJS가 요청을 생성하여 웹사이트를 제공하는 NextJS 서버로 보내게 됨
 *
 * 1. Server Actions은 반드시 async 함수여야 한다. ( 비동기 함수 )
 * - Next.js Server Actions는 항상 Promise를 반환해야 합니다.
 * - async 키워드가 없으면 Server Action으로 인식되지 않습니다.
 *
 * use server 키워드는 use client 키워드와 반대로 클라이언트 컴포넌트에서 사용하지 않고 서버 컴포넌트에서 사용합니다.
 * 둘이 동시에 사용할 수 없음
 */

function isInvalidText(text) {
  return !text || text.trim().length === 0;
}

export async function shareMeal(_prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: "Invalid input" };
  }

  await saveMeal(meal);
  /**
   * revalidatePath는 특정 경로의 캐시를 무효화하는 함수입니다. ( 해당 페이지에 연관된 캐시를 지움)
   * 이 함수를 호출하면 해당 경로의 캐시가 무효화되고 새로운 데이터가 로드됩니다.
   * 이 함수는 클라이언트 컴포넌트에서 호출할 수 없고 서버 컴포넌트에서만 호출할 수 있습니다.
   *
   * "page"는 페이지 캐시를 무효화하는 것을 의미합니다.
   * "layout"는 레이아웃 캐시를 무효화하는 것을 의미합니다.
   * 페이지 캐시와 레이아웃 캐시의 차이는 페이지 캐시는 페이지 자체의 캐시를 무효화하는 것이고, 레이아웃 캐시는 레이아웃 자체의 캐시를 무효화하는 것입니다.
   * 
   * 
  * 호출	재검증 범위
--------------------------------
revalidatePath('/meals', 'page') =>	/meals 만
revalidatePath('/meals', 'layout') => 	/meals, /meals/* 전체
revalidatePath('/', 'layout') => 사이트 전체 (루트 레이아웃 아래 모든 페이지)
   */
  revalidatePath("/meals");
  redirect("/meals");
}

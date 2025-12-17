"use server";
import { saveMeal } from "@/lib/meal";
import { redirect } from "next/navigation";
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
  redirect("/meals");
}

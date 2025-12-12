import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meal";
import { Suspense } from "react";
import MealsLoadingPage from "@/app/loading-out";
/**
 * 
 * 왜 'use client' 없이 Suspense를 쓸 수 있나요?
React 18+ 와 Next.js 13+에서 Suspense는 두 가지 모드로 작동합니다:
1. 서버 컴포넌트에서의 Suspense (현재 코드)
Streaming SSR (Server-Side Rendering with Streaming) 사용
서버에서 HTML을 점진적으로 전송
'use client' 불필요! 

2. 클라이언트 컴포넌트에서의 Suspense
React.lazy(), 동적 import 등에 사용
'use client' 필요
 * 
 */
async function Meals() {
  const meals = await getMeals();
  return (
    <>
      <MealsGrid meals={meals} />
    </>
  );
}

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Share your favorite recipes and discover new ones from others.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

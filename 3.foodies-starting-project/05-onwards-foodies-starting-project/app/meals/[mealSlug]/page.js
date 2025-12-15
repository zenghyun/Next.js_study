import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meal";
import { notFound } from "next/navigation";
export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);
  // meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  if (!meal) {
    // 제일 가까운 not-found나 오류 화면을 보여줌
    notFound();
  }
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={meal.image} alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        {/* 
          이렇게 안하고 css로 white-space: pre-wrap; 처리하면 됨 
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p> */}
        <p className={classes.instructions}>{meal.instructions}</p>
      </main>
    </>
  );
}

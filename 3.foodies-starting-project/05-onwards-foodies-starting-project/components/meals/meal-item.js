import Link from "next/link";
import Image from "next/image";

import classes from "./meal-item.module.css";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          {/*
        Image에 fill을 사용하면 부모의 최대 크기만큼 채울 수 있음 
        폭이나 너비를 명시적으로 설정하는 것이 아닌 모를 경우 사용하면 됨 
        https://nextjs.org/docs/app/api-reference/components/image#fill
            */}
          <Image
            src={`https://zenghyun-nextjs-demo-users-image.s3.amazonaws.com/${image}`}
            alt={title}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}

import NewsList from "@/components/news-list";
import {
  getNewsForYear,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
  getAvailableNewsYears,
} from "@/lib/news";
import Link from "next/link";
import { Suspense } from "react";

async function FilteredNewsHeader({ year, month }) {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;

  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("Invalid filter");
  }

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            let href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilteredNews({ year, month }) {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}

/**
 *
 * @param {*} param
 * @returns
 *
 *
 * Catch all router
 * 병렬 라우트에서 어떤 페이지에 들어가도 노출시킬 수 있는 페이지
 * [[...filter]] 는 병렬 라우트에서 어떤 페이지에 들어가도 노출시킬 수 있는 페이지임
 */
export default async function FilteredNewsPage({ params }) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Filter Loading...</p>}>
        <FilteredNewsHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>News Loading...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}

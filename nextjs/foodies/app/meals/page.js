import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: "All Delicious Meals",
  description:
    "Explore a variety of delicious meals created by our community of food lovers.",
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, created{""}
          <span className={classes.highlight}> by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.eta}>
          <Link href="/meals/share">Share Your Faviorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          {/* Suspense는 내부의 컴포넌트가 렌더링이 완료되기 전까지 대체 컨텐츠(fallback)를 제공할 수 있다. */}
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

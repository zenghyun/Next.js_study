export default function MealDetailsPage({ params }) {
  console.log("🚀 ~ MealDetailsPage ~ params:", params);
  return (
    <main>
      <h1>Meal Details</h1>
      <p>{params.mealSlug} Page</p>
    </main>
  );
}

import sql from "better-sqlite3";
const db = sql("meals.db");

export async function getMeals() {
  // .all() 메서드는 모든 데이터를 배열로 반환함
  // .run() 메서드는 데이터를 삽입, 업데이트, 삭제하는 데 사용됨
  // .prepare() 메서드는 쿼리를 준비하는 데 사용됨
  // .prepare("SELECT * FROM meals").all() 쿼리를 준비하고 모든 데이터를 배열로 반환함
  // .prepare("SELECT * FROM meals").get() 쿼리를 준비하고 첫 번째 데이터를 반환함
  // .prepare("SELECT * FROM meals").run() 쿼리를 준비하고 데이터를 삽입, 업데이트, 삭제하는 데 사용됨
  // .prepare("SELECT * FROM meals").run(data) 쿼리를 준비하고 데이터를 삽입, 업데이트, 삭제하는 데 사용됨
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2초 대기
  //   throw new Error("Failed to fetch meals");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  // ? 는 쿼리 매개변수를 의미함
  // 쿼리 매개변수를 사용하면 쿼리를 준비하고 데이터를 삽입, 업데이트, 삭제하는 데 사용됨
  // db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug); 쿼리를 준비하고 데이터를 반환함
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

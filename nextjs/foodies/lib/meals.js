//importing database

import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  //async는 반 필수임
  await new Promise((resolve) => setTimeout(resolve, 2000)); //2초 기다림
  // throw new Error("Failed to fetch meals");
  return db.prepare("SELECT * FROM meals").all(); //run은 데이터를 변경할 때, all은 데이터를 조회할 때 사용
}

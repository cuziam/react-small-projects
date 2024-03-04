//importing database
import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  //async는 반 필수임
  await new Promise((resolve) => setTimeout(resolve, 2000)); //2초 기다림
  // throw new Error("Failed to fetch meals");
  return db.prepare("SELECT * FROM meals").all(); //run은 데이터를 변경할 때, all은 데이터를 조회할 때 사용
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug=?").get(slug); //?을 사용하여 SQL injection을 방지
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  //image는 file system에 저장되어야 함
  const extention = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extention}`;

  //stream을 만들고 image를 한번에 받아서 저장
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Failed to save image");
    }
  });

  //save path to the database
  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals
      (slug, title, image, summary, instructions, creator, creator_email) 
    VALUES (
      @slug,
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email
    )
  `
  ).run(meal); //meal객체에서 키값을 찾아서 스스로 매칭시켜줌
}

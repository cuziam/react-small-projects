"use server";
import { saveMeal } from "@/lib/meals";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function isValidText(text) {
  return text && text.trim().length > 0;
}

export async function shareMeal(prevState, formData) {
  //server action, react-router-dom의 action과 비슷한 역할
  //form을 submit하면 실행되는 함수이다.
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  //server side validation
  if (
    isValidText(meal.title) &&
    isValidText(meal.summary) &&
    isValidText(meal.instructions) &&
    isValidText(meal.creator) &&
    isValidText(meal.creator_email) &&
    meal.creator_email.includes("@")
  ) {
    //saveMeal
    await saveMeal(meal);
    revalidatePath("/meals"); //revalidatePath는 next/cache에서 가져온 함수로, 해당 경로를 다시 fetch한다.
    //meals 경로를 사용하는 모든 경로를 다시 fetch한다.
  } else {
    return {
      message: "Invalid input",
    };
  }
}

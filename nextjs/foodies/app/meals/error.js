"use client";

export default function ErrorPage({ error }) {
  //error는 throw 된 에러를 받아옴
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>{error.message}</p>
    </main>
  );
}

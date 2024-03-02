import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header"; //@는 baseUrl를 의미한다.

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center">
        <h1>welcome to nextjs course</h1>
        <p>Let&apos;s get started</p>
        <p>
          <Link href="/about">about us</Link>
        </p>
      </main>
    </>
  );
}

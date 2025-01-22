"use client";
import Link from "next/link";
export default function Error() {
  return (
    <div>
      <div className="flex w-[100vw] flex-col items-center justify-center p-12">
        <h1 className=" text-3xl p-4 ">Opps.. something went wrong</h1>
        <p>Sorry, there is some technical issue.</p>

        <Link href="/" className="text-[#0070f3] underline">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

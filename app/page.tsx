import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xl text-3xl font-semibold leading-10 tracking-tight text-black">
            This Next.js app is deployed on Firebase App Hosting.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600">
            Done by Retech Labs.
          </p>
          <div className="mt-4 flex w-full flex-col gap-3 text-base sm:text-left">
            <p className="text-zinc-700">Demo pages:</p>
            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
              <Link
                href="/isr"
                className="rounded-lg border border-black/10 p-4 hover:bg-black/5"
              >
                /isr
              </Link>
              <Link
                href="/client-side-fetching"
                className="rounded-lg border border-black/10 p-4 hover:bg-black/5 "
              >
                /client-side-fetching
              </Link>
              <Link
                href="/server-action-demo"
                className="rounded-lg border border-black/10 p-4 hover:bg-black/5"
              >
                /server-action-demo
              </Link>
              <Link
                href="/server-fetching"
                className="rounded-lg border border-black/10 p-4 hover:bg-black/5"
              >
                /server-fetching
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

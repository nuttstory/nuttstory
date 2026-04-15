import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f2e8] p-4 md:p-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl shadow-xl">
        <Image
          src="/hero.png"
          alt="NuttStory promotional image"
          width={1366}
          height={768}
          priority
          className="h-auto w-full"
        />
      </div>
    </main>
  );
}

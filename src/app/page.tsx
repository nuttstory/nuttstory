import Image from "next/image";

export default function Home() {
  const pageUrl = "https://www.facebook.com/people/NuttStory/61574369964207/";

  return (
    <main className="min-h-screen bg-[#f6f2e8] px-2 py-3 sm:p-4 md:p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 md:gap-8">
        <div className="overflow-hidden rounded-xl shadow-lg md:rounded-2xl md:shadow-xl">
          <Image
            src="/hero.png"
            alt="NuttStory promotional image"
            width={1366}
            height={768}
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1366px"
            className="h-auto w-full"
          />
        </div>

        <section className="rounded-2xl bg-white/90 p-5 shadow-lg md:p-8">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8e5a2a]">
                Fresh From Facebook
              </p>
              <h2 className="text-2xl font-bold text-[#2e1f14] md:text-3xl">
                NuttStory Social Highlights
              </h2>
            </div>
            <a
              href={pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit rounded-full bg-[#8e5a2a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#734722]"
            >
              Visit Facebook Page
            </a>
          </div>

          <p className="mb-5 text-sm text-[#5d4736]">
            Follow our Facebook page for the newest product launches, gift box
            ideas, and behind-the-scenes updates from NuttStory.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <a
              href={pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[#eadfcf] bg-[#fdfaf4] p-4 transition hover:shadow-md"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8e5a2a]">
                Product Updates
              </p>
              <h3 className="mb-2 text-lg font-bold text-[#2e1f14]">
                New dry fruit blends and seasonal arrivals
              </h3>
              <p className="text-sm text-[#5d4736]">
                Check out fresh announcements and what is newly available in our
                handcrafted range.
              </p>
            </a>

            <a
              href={pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[#eadfcf] bg-[#fdfaf4] p-4 transition hover:shadow-md"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8e5a2a]">
                Gift Inspiration
              </p>
              <h3 className="mb-2 text-lg font-bold text-[#2e1f14]">
                Premium gift box ideas for every occasion
              </h3>
              <p className="text-sm text-[#5d4736]">
                Discover curated gifting options and celebration-ready nut
                collections.
              </p>
            </a>

            <a
              href={pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[#eadfcf] bg-[#fdfaf4] p-4 transition hover:shadow-md"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8e5a2a]">
                Brand Stories
              </p>
              <h3 className="mb-2 text-lg font-bold text-[#2e1f14]">
                Behind-the-scenes from our NuttStory journey
              </h3>
              <p className="text-sm text-[#5d4736]">
                Follow us to see the care, sourcing, and craftsmanship behind
                every handful.
              </p>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

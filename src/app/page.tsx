import Image from "next/image";

export default function Home() {
  const pageUrl = "https://www.facebook.com/people/NuttStory/61574369964207/";
  const whatsappUrl =
    "https://wa.me/923337819920?text=Hi%20NuttStory%2C%20I%20want%20to%20place%20an%20order.";

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#f6f2e8] px-2 py-3 sm:p-4 md:p-8">
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
              <p className="fb-kicker text-sm font-semibold uppercase tracking-[0.18em] text-[#8e5a2a]">
                Fresh From Facebook
              </p>
              <h2 className="fb-heading text-2xl font-bold text-[#2e1f14] md:text-3xl">
                NuttStory Social Highlights
              </h2>
            </div>
            <a
              href={pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#1877F2] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#166fe0]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 flex-none"
              >
                <circle cx="12" cy="12" r="12" fill="#1877F2" />
                <path
                  fill="#FFFFFF"
                  d="M13.7 8.2h2V5.4h-2.3c-2.7 0-4.4 1.6-4.4 4.2v1.9H7v2.8h2v4.3h2.9v-4.3h2.4l.5-2.8h-2.9V9.9c0-1 .5-1.7 1.8-1.7z"
                />
              </svg>
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
              className="social-card rounded-xl border border-[#eadfcf] bg-[#fdfaf4] p-4 transition hover:shadow-md"
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
              className="social-card rounded-xl border border-[#eadfcf] bg-[#fdfaf4] p-4 transition hover:shadow-md"
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
              className="social-card rounded-xl border border-[#eadfcf] bg-[#fdfaf4] p-4 transition hover:shadow-md"
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

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="fixed bottom-5 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-[#1faa54] md:bottom-7 md:right-7"
      >
        <span aria-hidden="true">WhatsApp</span>
        Order
      </a>
    </main>
  );
}

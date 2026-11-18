import Link from "next/link";

const links = [
  { label: "Menu", href: "/menu" },
  { label: "Our story", href: "/story" },
  { label: "Visit", href: "/visit" },
];

export default function Footer() {
  return (
    <footer className="bg-[#292b22] text-[#f5f1e8]">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 md:grid-cols-[1.3fr_0.7fr_1fr] lg:px-10 lg:py-20">
        <div>
          <Link href="/" className="font-heading text-4xl tracking-tight">
            stillroom<span className="text-[#a8ad8a]">.</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-7 text-[#c4c1b6]">
            Good coffee, thoughtful food, and a little more room in the day.
          </p>
        </div>

        <div>
          <p className="text-[9px] uppercase tracking-[0.24em] text-[#a8ad8a]">Explore</p>
          <div className="mt-6 flex flex-col items-start gap-4 text-sm text-[#e2ded5]">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-[#c7cba9]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[9px] uppercase tracking-[0.24em] text-[#a8ad8a]">Find your way here</p>
          <p className="mt-6 text-sm leading-7 text-[#c4c1b6]">
            A neighbourhood coffee house
            <br />
            London, United Kingdom
          </p>
          <p className="mt-4 text-xs tracking-wide text-[#c4c1b6]">Open daily · 8am — 6pm</p>
          <Link href="/visit" className="mt-6 inline-flex border-b border-[#a8ad8a] pb-2 text-[9px] uppercase tracking-[0.2em] text-[#c7cba9] transition-colors hover:text-white">
            Plan a visit ↗
          </Link>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-[9px] uppercase tracking-[0.16em] text-[#aaa99e] sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Stillroom Coffee</p>
          <p>Made for the neighbourhood.</p>
        </div>
      </div>
    </footer>
  );
}

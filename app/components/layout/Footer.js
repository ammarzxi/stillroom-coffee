import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-3 lg:px-10">
        <div>
          <Link href="/" className="font-heading text-3xl tracking-tight">
            stillroom<span className="text-primary">.</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-7 text-muted-foreground">
            Good coffee, thoughtful food, and a place to slow down.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Explore
          </p>
          <div className="mt-5 flex flex-col items-start gap-3 text-sm">
            <Link href="/menu" className="transition-colors hover:text-primary">Menu</Link>
            <Link href="/story" className="transition-colors hover:text-primary">Our story</Link>
            <Link href="/visit" className="transition-colors hover:text-primary">Visit</Link>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Come by
          </p>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            A neighbourhood coffee house.
            <br />
            Open daily, morning to evening.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Stillroom Coffee</p>
          <p>Made for the neighbourhood.</p>
        </div>
      </div>
    </footer>
  );
}

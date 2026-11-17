import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Our story", href: "/story" },
  { label: "Visit", href: "/visit" },
];

export default function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="font-heading text-3xl leading-none tracking-tight">
          stillroom<span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/visit"
          className="hidden border border-primary px-5 py-3 text-xs uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-background md:inline-flex"
        >
          Find us
        </Link>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none text-sm uppercase tracking-widest">
            Menu
          </summary>
          <nav className="absolute right-0 top-10 z-10 flex min-w-40 flex-col gap-4 border border-border bg-background p-5 shadow-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/visit" className="text-sm text-primary">
              Find us
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

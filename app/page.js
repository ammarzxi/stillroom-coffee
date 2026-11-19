import Link from "next/link";

const coffees = [
  {
    number: "01",
    name: "The Stillroom Flat White",
    description: "A double espresso softened with silky steamed milk.",
    price: "£3.60",
    note: "HOUSE FAVOURITE",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "02",
    name: "Slow Morning Filter",
    description: "A rotating single-origin, brewed gently to bring out its character.",
    price: "£4.20",
    note: "SINGLE ORIGIN",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "03",
    name: "Brown Sugar Latte",
    description: "Espresso, steamed milk and a little house-made brown sugar.",
    price: "£4.10",
    note: "A LITTLE SWEET",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero-section relative flex min-h-[680px] items-end overflow-hidden md:min-h-[760px]">
        <div className="hero-image absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171711]/75 via-[#171711]/35 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-32 text-[#f5f1e8] lg:px-10 lg:pb-28">
          <p className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-[#e2d9c6]">
            <span className="h-px w-9 bg-[#c5b99f]" />
            A neighbourhood coffee house · London
          </p>
          <h1 className="max-w-3xl font-heading text-6xl leading-[0.92] tracking-[-0.045em] sm:text-7xl md:text-8xl lg:text-[104px]">
            A slower kind
            <br />
            of <span className="italic text-[#d8c9a9]">everyday.</span>
          </h1>
          <div className="mt-9 flex max-w-xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xs text-sm leading-7 text-[#e2ded5]">
              Thoughtfully made coffee, something good from the oven, and room
              for one more moment.
            </p>
            <Link
              href="/menu"
              className="group inline-flex w-fit items-center gap-8 border-b border-[#c5b99f] pb-3 text-[10px] uppercase tracking-[0.22em] text-[#f5f1e8] transition-colors hover:text-[#d8c9a9]"
            >
              Explore the menu
              <span className="text-lg transition-transform group-hover:translate-x-1">↗</span>
            </Link>
          </div>
        </div>
        <p className="absolute bottom-8 right-6 hidden text-[9px] uppercase tracking-[0.25em] text-white/70 md:block lg:right-10">
          Good things take a little time
        </p>
      </section>

      <section id="menu" className="bg-background px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-eyebrow">A few good things</p>
              <h2 className="mt-4 max-w-xl font-heading text-5xl leading-[0.98] tracking-tight sm:text-6xl">
                Made with care.
                <br />
                <span className="italic text-primary">Enjoyed slowly.</span>
              </h2>
            </div>
            <Link href="/menu" className="group inline-flex w-fit items-center gap-4 border-b border-border pb-2 text-[10px] uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary">
              View the full menu <span className="text-base transition-transform group-hover:translate-x-1">↗</span>
            </Link>
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-6">
            {coffees.map((coffee) => (
              <article key={coffee.number} className="group">
                <div className="coffee-card-image relative aspect-[4/5] overflow-hidden bg-surface">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url("${coffee.image}")` }}
                  />
                  <span className="absolute left-4 top-4 bg-background/90 px-3 py-2 text-[9px] tracking-[0.18em] text-foreground">
                    {coffee.note}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-border py-5">
                  <div>
                    <p className="mb-2 text-[9px] tracking-[0.2em] text-muted-foreground">{coffee.number} / STILLROOM SELECTION</p>
                    <h3 className="font-heading text-3xl leading-none">{coffee.name}</h3>
                    <p className="mt-3 max-w-xs text-xs leading-6 text-muted-foreground">{coffee.description}</p>
                  </div>
                  <span className="pt-1 text-sm">{coffee.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eae4d8] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-[1fr_0.9fr] md:gap-20">
          <div className="relative">
            <div className="about-image aspect-[5/4] bg-cover bg-center" />
            <p className="absolute -bottom-5 right-5 bg-background px-5 py-4 font-heading text-xl italic text-primary md:right-[-24px]">
              A place to pause.
            </p>
          </div>
          <div className="max-w-lg md:py-8">
            <p className="section-eyebrow">A little about us</p>
            <h2 className="mt-5 font-heading text-5xl leading-[0.98] tracking-tight sm:text-6xl">
              Not just a
              <br />
              <span className="italic text-primary">coffee stop.</span>
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-7 text-muted-foreground">
              <p>
                Stillroom began with a simple thought: the everyday deserves a
                little more attention. A well-made cup, a warm pastry, a familiar
                face across the counter.
              </p>
              <p>
                We bring together carefully sourced coffee, a small changing
                selection from the kitchen, and the kind of welcome that makes
                you want to stay a while.
              </p>
            </div>
            <Link href="/story" className="group mt-9 inline-flex items-center gap-5 border-b border-primary pb-3 text-[10px] uppercase tracking-[0.2em] text-primary">
              Get to know us <span className="text-base transition-transform group-hover:translate-x-1">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="section-eyebrow">From our kitchen</p>
              <h2 className="mt-5 font-heading text-5xl leading-[0.98] tracking-tight sm:text-6xl">
                A little
                <br />
                <span className="italic text-primary">something</span>
                <br />
                alongside.
              </h2>
            </div>
            <div className="grid gap-7 sm:grid-cols-2">
              <div className="pastry-image aspect-[5/4] bg-cover bg-center" />
              <div className="flex flex-col justify-between border-t border-border pt-5 sm:pb-2">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground">Baked here, enjoyed anywhere</p>
                  <h3 className="mt-5 font-heading text-3xl leading-tight">Good things from the oven.</h3>
                  <p className="mt-4 text-xs leading-6 text-muted-foreground">
                    Buttery pastries, seasonal bakes and a few savoury favourites.
                    Made in small batches and ready when you are.
                  </p>
                </div>
                <Link href="/menu" className="group mt-8 inline-flex w-fit items-center gap-5 border-b border-primary pb-3 text-[10px] uppercase tracking-[0.2em] text-primary">
                  See what’s baking <span className="text-base transition-transform group-hover:translate-x-1">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="craft" className="bg-[#eae4d8] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2 md:gap-20">
          <div className="relative">
            <div
              className="aspect-[4/5] bg-cover bg-center"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=1400&q=85")' }}
            />
            <p className="absolute -bottom-5 left-5 bg-background px-5 py-4 font-heading text-xl italic text-primary">
              Thought in every detail.
            </p>
          </div>
          <div className="max-w-xl md:py-8">
            <p className="section-eyebrow">Behind every cup</p>
            <h2 className="mt-5 font-heading text-5xl leading-[0.98] tracking-tight sm:text-6xl">
              Good coffee is
              <br />
              <span className="italic text-primary">worth the care.</span>
            </h2>
            <p className="mt-8 text-sm leading-7 text-muted-foreground">
              We keep things considered, not complicated. From choosing expressive
              beans to giving each cup the time it needs, our approach is guided
              by a simple belief: the details make the difference.
            </p>
            <div className="mt-10 grid gap-6 border-t border-[#d4cbbb] pt-6 sm:grid-cols-3">
              <div>
                <p className="font-heading text-3xl text-primary">01</p>
                <h3 className="mt-3 text-xs uppercase tracking-[0.14em]">Good origins</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">Beans chosen for character and balance.</p>
              </div>
              <div>
                <p className="font-heading text-3xl text-primary">02</p>
                <h3 className="mt-3 text-xs uppercase tracking-[0.14em]">Careful craft</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">Every cup made with patience and attention.</p>
              </div>
              <div>
                <p className="font-heading text-3xl text-primary">03</p>
                <h3 className="mt-3 text-xs uppercase tracking-[0.14em]">Always curious</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">A menu that changes with the seasons.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="space" className="bg-[#292b22] px-6 py-24 text-[#f5f1e8] lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#a8ad8a]">A seat saved for you</p>
              <h2 className="mt-5 font-heading text-5xl leading-[0.98] tracking-tight sm:text-6xl">
                Stay for
                <br />
                <span className="italic text-[#c7cba9]">a little longer.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#c4c1b6] md:justify-self-end">
              Come in for your morning coffee, settle into a corner with a book,
              or catch up with someone you haven’t seen in a while. There’s room
              to make the day your own.
            </p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-[1.4fr_0.8fr]">
            <div
              className="aspect-[5/3] bg-cover bg-center sm:aspect-[16/9]"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1600&q=85")' }}
            />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
              <div
                className="min-h-40 bg-cover bg-center sm:min-h-0"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=85")' }}
              />
              <div
                className="min-h-40 bg-cover bg-center sm:min-h-0"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=85")' }}
              />
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 border-t border-white/15 pt-5 text-[9px] uppercase tracking-[0.2em] text-[#c4c1b6] sm:flex-row sm:justify-between">
            <span>Good coffee, good company</span>
            <span>Make yourself at home</span>
          </div>
        </div>
      </section>

      <section id="visit" className="bg-background px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1fr_1fr] md:items-center md:gap-20">
          <div className="max-w-lg">
            <p className="section-eyebrow">Come by sometime</p>
            <h2 className="mt-5 font-heading text-5xl leading-[0.98] tracking-tight sm:text-6xl">
              Your corner
              <br />
              of <span className="italic text-primary">the day.</span>
            </h2>
            <p className="mt-8 text-sm leading-7 text-muted-foreground">
              We’re here for the first coffee of the morning, a slow afternoon
              break, and everything in between. Drop in when you’re nearby.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-6">
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Find us</p>
                <p className="mt-3 font-heading text-2xl">London, UK</p>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">Your neighbourhood coffee house.</p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Opening hours</p>
                <p className="mt-3 font-heading text-2xl">Every day</p>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">8am — 6pm</p>
              </div>
            </div>
            <a href="#menu" className="group mt-9 inline-flex items-center gap-5 border-b border-primary pb-3 text-[10px] uppercase tracking-[0.2em] text-primary">
              Take a look at the menu <span className="text-base transition-transform group-hover:translate-x-1">↗</span>
            </a>
          </div>
          <div
            className="aspect-[4/5] bg-cover bg-center md:aspect-[5/6]"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=85")' }}
          />
        </div>
      </section>

      <section className="bg-[#dcdcc9] px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="section-eyebrow">A good day starts somewhere</p>
            <h2 className="mt-5 max-w-3xl font-heading text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
              Make a little room
              <br />
              for <span className="italic text-primary">Stillroom.</span>
            </h2>
          </div>
          <div className="max-w-xs md:pb-2">
            <p className="text-sm leading-7 text-muted-foreground">
              Your usual order or something new. Either way, we’ll have a cup
              ready and a place to slow down.
            </p>
            <a href="#visit" className="group mt-7 inline-flex items-center gap-8 bg-[#292b22] px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-[#f5f1e8] transition-colors hover:bg-primary">
              Plan your visit <span className="text-base transition-transform group-hover:translate-x-1">↗</span>
            </a>
          </div>
        </div>
      </section>

    </>
  );
}

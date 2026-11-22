import Link from "next/link";

const menuItems = [
  { name: "Stillroom Flat White", description: "Double espresso, silky steamed milk.", price: "£3.60", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85" },
  { name: "Slow Morning Filter", description: "A rotating single-origin, brewed with care.", price: "£4.20", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85" },
  { name: "Brown Sugar Latte", description: "Espresso, steamed milk and house-made brown sugar.", price: "£4.10", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85" },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-image" />
        <div className="home-hero-content mx-auto flex min-h-[620px] max-w-7xl flex-col justify-end px-6 pb-16 pt-32 md:min-h-[720px] md:pb-24 lg:px-10">
          <p className="eyebrow mb-6">Coffee · Kitchen · Neighbourhood</p>
          <h1 className="max-w-3xl font-heading text-6xl leading-[0.92] tracking-tight sm:text-7xl md:text-8xl">
            A good cup.<br /><span className="italic">A little more time.</span>
          </h1>
          <div className="mt-8 flex max-w-2xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-sm text-sm leading-7 text-background/80">
              Thoughtful coffee, fresh things from the kitchen, and a welcoming corner of the neighbourhood.
            </p>
            <Link href="/menu" className="button-light">Explore the menu <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <div className="mx-auto max-w-7xl">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A few favourites</p>
              <h2 className="section-title">Made with care.<br /><span className="italic text-primary">Served with pleasure.</span></h2>
            </div>
            <Link href="/menu" className="text-link">View the full menu <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item, index) => (
              <article key={item.name}>
                <div className="menu-image">
                  <div className="menu-image-inner" style={{ backgroundImage: `url("${item.image}")` }} />
                  <span className="menu-number">0{index + 1}</span>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-border py-5">
                  <div>
                    <h3 className="font-heading text-2xl">{item.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  </div>
                  <span className="pt-1 text-sm">{item.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-band">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:gap-16 md:py-28 lg:px-10">
          <div className="story-image" />
          <div className="max-w-lg">
            <p className="eyebrow">A little about Stillroom</p>
            <h2 className="section-title mt-5">Your everyday<br /><span className="italic text-primary">place to pause.</span></h2>
            <p className="mt-7 text-sm leading-7 text-muted-foreground">
              We believe the small things are worth doing well. Carefully sourced coffee, good food made in small batches, and a friendly welcome every time you walk through the door.
            </p>
            <Link href="/story" className="text-link mt-8">Get to know us <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="eyebrow">Fresh from the kitchen</p>
            <h2 className="section-title mt-5">Something good<br /><span className="italic text-primary">alongside.</span></h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">
              Buttery pastries, seasonal bakes and savoury favourites. Find something to go with your usual, or try something new.
            </p>
            <Link href="/menu" className="text-link mt-8">Browse the menu <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="kitchen-image" />
        </div>
      </section>

      <section className="visit-band">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1fr_auto] md:items-end md:py-24 lg:px-10">
          <div>
            <p className="eyebrow">Come by sometime</p>
            <h2 className="section-title mt-5">We’ll put the kettle on.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              Find us in the neighbourhood. Drop in for your morning coffee, take a little break, or stay for one more.
            </p>
          </div>
          <div className="flex flex-col gap-5 border-t border-border pt-5 sm:flex-row sm:gap-12 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <div><p className="eyebrow">Find us</p><p className="mt-2 font-heading text-2xl">London, UK</p></div>
            <div><p className="eyebrow">Opening hours</p><p className="mt-2 font-heading text-2xl">Daily, 8am–6pm</p></div>
            <Link href="/visit" className="button-dark self-start">Plan your visit <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}

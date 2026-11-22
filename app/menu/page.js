"use client";

import { useState } from "react";

const categories = [
  {
    name: "Coffee",
    note: "The usuals, made properly.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
    items: [
      { name: "Espresso", description: "A short, rich double shot.", price: "£2.80" },
      { name: "Americano", description: "Espresso topped with hot water.", price: "£3.20" },
      { name: "Flat White", description: "Double espresso and silky steamed milk.", price: "£3.60" },
      { name: "Cappuccino", description: "Espresso, steamed milk and a soft layer of foam.", price: "£3.80" },
      { name: "Latte", description: "Espresso with plenty of steamed milk.", price: "£3.90" },
      { name: "Mocha", description: "Espresso, chocolate and steamed milk.", price: "£4.10" },
    ],
  },
  {
    name: "Cold drinks",
    note: "For slower afternoons and warmer days.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=85",
    items: [
      { name: "Iced Americano", description: "A double espresso poured over ice and water.", price: "£3.40" },
      { name: "Iced Latte", description: "Espresso, cold milk and ice.", price: "£4.00" },
      { name: "Cold Brew", description: "Slow-steeped coffee, served over ice.", price: "£4.20" },
      { name: "Iced Mocha", description: "Chocolate, espresso, cold milk and ice.", price: "£4.40" },
    ],
  },
  {
    name: "Bakery",
    note: "A little something from the counter.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85",
    items: [
      { name: "Butter Croissant", description: "Flaky, golden and baked fresh.", price: "£3.20" },
      { name: "Cinnamon Roll", description: "Soft dough with cinnamon sugar.", price: "£3.80" },
      { name: "Chocolate Cookie", description: "A soft-baked cookie with dark chocolate.", price: "£2.80" },
      { name: "Banana Bread", description: "A slice of our house-baked loaf.", price: "£3.50" },
    ],
  },
  {
    name: "Food",
    note: "Something good to make a meal of.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=85",
    items: [
      { name: "Avocado Toast", description: "Smashed avocado on toasted sourdough.", price: "£7.50" },
      { name: "Grilled Cheese", description: "Melted cheese on toasted sourdough.", price: "£6.80" },
      { name: "Eggs on Toast", description: "Two eggs served on toasted sourdough.", price: "£7.20" },
      { name: "Seasonal Sandwich", description: "Ask us what is on the board today.", price: "£8.00" },
    ],
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Coffee");
  const activeMenu = categories.find((category) => category.name === activeCategory);

  return (
    <main>
      <section className="section-wrap pb-10 md:pb-14">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Stillroom · Food & drink</p>
          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="font-heading text-6xl leading-none tracking-tight sm:text-7xl md:text-8xl">
                The menu<span className="text-primary">.</span>
              </h1>
              <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">
                Good coffee, fresh bakes and a few things to eat. Find your usual, or try something new.
              </p>
            </div>
            <p className="eyebrow md:pb-2">Made fresh · Served daily</p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-10 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex gap-2 overflow-x-auto border-b border-border pb-4" aria-label="Menu categories">
            {categories.map((category) => (
              <button
                key={category.name}
                type="button"
                onClick={() => setActiveCategory(category.name)}
                aria-pressed={activeCategory === category.name}
                className={`shrink-0 px-5 py-3 text-xs uppercase tracking-widest transition-colors ${
                  activeCategory === category.name
                    ? "bg-primary text-background"
                    : "bg-surface text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid gap-10 pt-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:pt-12">
            <div>
              <div
                className="aspect-[4/3] bg-cover bg-center md:aspect-[4/5]"
                style={{ backgroundImage: `url("${activeMenu.image}")` }}
              />
              <p className="eyebrow mt-5">01 / {activeCategory}</p>
              <h2 className="mt-3 font-heading text-4xl tracking-tight">{activeMenu.name}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{activeMenu.note}</p>
            </div>

            <div>
              <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
                <p className="eyebrow">What we’re serving</p>
                <p className="eyebrow">{String(activeMenu.items.length).padStart(2, "0")} items</p>
              </div>
              {activeMenu.items.map((item) => (
                <article key={item.name} className="flex items-start justify-between gap-5 border-b border-border py-6">
                  <div>
                    <h3 className="font-heading text-2xl">{item.name}</h3>
                    <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">{item.description}</p>
                  </div>
                  <p className="shrink-0 pt-1 text-sm">{item.price}</p>
                </article>
              ))}
              <p className="mt-6 text-xs leading-6 text-muted-foreground">
                Please ask our team about ingredients and allergen information before ordering.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import React from 'react';
import { Plus, Check, Sparkles, MessageCircle } from 'lucide-react';
import { MenuItem } from '../types';

interface FeaturedSpecialProps {
  onAddToCart: (item: MenuItem) => void;
  oreoItem?: MenuItem;
  latteItem?: MenuItem;
  burgerItem?: MenuItem;
}

export const FeaturedSpecial: React.FC<FeaturedSpecialProps> = ({
  onAddToCart,
  oreoItem,
  latteItem,
  burgerItem,
}) => {
  const [addedId, setAddedId] = React.useState<string | null>(null);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1400);
  };

  return (
    <section id="signature" className="py-16 bg-stone-900/50 border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>House Specialties &amp; Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-100 font-display">
              The Talk of Okara
            </h2>
          </div>
          <p className="text-sm text-stone-400 max-w-md">
            Customer favorites celebrated for uncompromised indulgence and authentic cafe craft.
          </p>
        </div>

        {/* Featured Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: The Legendary Oreo Shake */}
          {oreoItem && (
            <div className="bg-stone-900 rounded-2xl border border-stone-800 p-5 flex flex-col justify-between hover:border-amber-400/40 transition-colors group">
              <div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-stone-950">
                  <img
                    src={oreoItem.image}
                    alt={oreoItem.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-amber-300 border border-stone-800">
                    5.0 Star Star Favorite
                  </div>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-stone-100 font-display">
                    {oreoItem.name}
                  </h3>
                  <span className="text-base font-semibold text-amber-400 tabular-nums whitespace-nowrap">
                    ₨ {oreoItem.price}
                  </span>
                </div>

                <p className="mt-2 text-xs text-stone-300 leading-relaxed">
                  {oreoItem.description}
                </p>

                {/* Direct Google Review Callout */}
                <div className="mt-3 p-3 rounded-lg bg-stone-950/70 border border-stone-800/80 text-xs text-stone-300 italic">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-amber-400 not-italic mb-1">
                    <MessageCircle className="w-3 h-3" />
                    <span>Abdullah Hassan (Google Maps Review)</span>
                  </div>
                  &ldquo;I have tried Oreo shake last night, it was amazing I really liked it&rdquo;
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-800 flex items-center justify-between">
                <span className="text-xs text-stone-400">Freshly blended</span>
                <button
                  onClick={() => handleAdd(oreoItem)}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 transition-colors cursor-pointer"
                >
                  {addedId === oreoItem.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Card 2: Artisanal Cafe Latte */}
          {latteItem && (
            <div className="bg-stone-900 rounded-2xl border border-stone-800 p-5 flex flex-col justify-between hover:border-amber-400/40 transition-colors group">
              <div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-stone-950">
                  <img
                    src={latteItem.image}
                    alt={latteItem.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-amber-300 border border-stone-800">
                    Specialty Arabica
                  </div>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-stone-100 font-display">
                    {latteItem.name}
                  </h3>
                  <span className="text-base font-semibold text-amber-400 tabular-nums whitespace-nowrap">
                    ₨ {latteItem.price}
                  </span>
                </div>

                <p className="mt-2 text-xs text-stone-300 leading-relaxed">
                  {latteItem.description}
                </p>

                <div className="mt-3 p-3 rounded-lg bg-stone-950/70 border border-stone-800/80 text-xs text-stone-400">
                  <span className="text-stone-300 font-medium">Brew Notes:</span> Double-shot Arabica espresso, textured microfoam, roasted caramel aroma.
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-800 flex items-center justify-between">
                <span className="text-xs text-stone-400">Steamed to order</span>
                <button
                  onClick={() => handleAdd(latteItem)}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 transition-colors cursor-pointer"
                >
                  {addedId === latteItem.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Card 3: Double Smash Burger */}
          {burgerItem && (
            <div className="bg-stone-900 rounded-2xl border border-stone-800 p-5 flex flex-col justify-between hover:border-amber-400/40 transition-colors group">
              <div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-stone-950">
                  <img
                    src={burgerItem.image}
                    alt={burgerItem.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-amber-300 border border-stone-800">
                    Dinner &amp; Midnight
                  </div>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-stone-100 font-display">
                    {burgerItem.name}
                  </h3>
                  <span className="text-base font-semibold text-amber-400 tabular-nums whitespace-nowrap">
                    ₨ {burgerItem.price}
                  </span>
                </div>

                <p className="mt-2 text-xs text-stone-300 leading-relaxed">
                  {burgerItem.description}
                </p>

                <div className="mt-3 p-3 rounded-lg bg-stone-950/70 border border-stone-800/80 text-xs text-stone-300 italic">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-amber-400 not-italic mb-1">
                    <MessageCircle className="w-3 h-3" />
                    <span>Talha Meo (Dinner Review)</span>
                  </div>
                  &ldquo;Meal type: Dinner. Cozy atmosphere and great taste.&rdquo;
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-800 flex items-center justify-between">
                <span className="text-xs text-stone-400">Includes crisp fries</span>
                <button
                  onClick={() => handleAdd(burgerItem)}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 transition-colors cursor-pointer"
                >
                  {addedId === burgerItem.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

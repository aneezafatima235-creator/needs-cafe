import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, Coffee, Flame, CupSoda, Pizza, Sparkles, SlidersHorizontal } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuSectionProps {
  items: MenuItem[];
  onAddToCart: (item: MenuItem, options?: Record<string, string>) => void;
}

type CategoryKey = 'all' | 'shakes' | 'coffee' | 'tea' | 'burgers' | 'savory' | 'desserts';

interface CategoryFilter {
  key: CategoryKey;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CATEGORIES: CategoryFilter[] = [
  { key: 'all', label: 'All Items', icon: Sparkles },
  { key: 'shakes', label: 'Signature Shakes', icon: CupSoda },
  { key: 'coffee', label: 'Coffee & Brews', icon: Coffee },
  { key: 'tea', label: 'Karak Chai & Teas', icon: Flame },
  { key: 'burgers', label: 'Burgers & Club', icon: Pizza },
  { key: 'savory', label: 'Savory & Dinner', icon: Pizza },
  { key: 'desserts', label: 'Desserts & Sweets', icon: Sparkles },
];

const CATEGORY_DEFAULT_IMAGES: Record<string, string> = {
  shakes: '/src/assets/images/signature_oreo_shake_1792825204754.jpg',
  coffee: '/src/assets/images/artisanal_coffee_latte_1792825205385.jpg',
  tea: '/src/assets/images/karak_doodh_patti_chai_1792825655548.jpg',
  burgers: '/src/assets/images/crispy_zinger_burger_1792825945275.jpg',
  savory: '/src/assets/images/loaded_cheesy_fries_1792825657093.jpg',
  desserts: '/src/assets/images/molten_lava_cake_1792825656834.jpg',
};

export const MenuSection: React.FC<MenuSectionProps> = ({ items, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemMap, setAddedItemMap] = useState<Record<string, boolean>>({});
  
  // Customization modal state
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [items, activeCategory, searchQuery]);

  const handleQuickAdd = (item: MenuItem) => {
    if (item.options && item.options.length > 0) {
      // Default to first option for each
      const initial: Record<string, string> = {};
      item.options.forEach((opt) => {
        initial[opt.name] = opt.choices[0];
      });
      setSelectedOptions(initial);
      setCustomizingItem(item);
    } else {
      onAddToCart(item);
      triggerAddedFeedback(item.id);
    }
  };

  const handleConfirmCustomize = () => {
    if (customizingItem) {
      onAddToCart(customizingItem, selectedOptions);
      triggerAddedFeedback(customizingItem.id);
      setCustomizingItem(null);
    }
  };

  const triggerAddedFeedback = (id: string) => {
    setAddedItemMap((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, [id]: false }));
    }, 1200);
  };

  return (
    <section id="menu" className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              Freshly Prepared Every Evening
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-100 font-display">
              The Cafe Menu
            </h2>
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search shakes, coffee, burgers..."
              className="w-full bg-stone-900 border border-stone-800 rounded-lg pl-9 pr-4 py-2.5 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-500 hover:text-stone-300"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs (Segmented Buttons) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-stone-900/80 border border-stone-800/80 rounded-xl overflow-x-auto scrollbar-none mb-10">
          {CATEGORIES.map(({ key, label }) => {
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-stone-950 font-semibold shadow-sm'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
                }`}
              >
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 px-4 bg-stone-900/30 rounded-2xl border border-stone-800/60">
            <p className="text-stone-300 font-medium">No items match your search criteria</p>
            <p className="text-xs text-stone-400 mt-1">Try searching for &quot;Oreo&quot;, &quot;Latte&quot;, &quot;Chai&quot;, or &quot;Burger&quot;</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-amber-400 hover:text-amber-300 border border-amber-400/30 rounded-lg cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isAdded = addedItemMap[item.id];
              return (
                <div
                  key={item.id}
                  className="bg-stone-900/80 rounded-xl border border-stone-800/80 p-5 flex flex-col justify-between hover:border-stone-700 transition-all group"
                >
                  <div>
                    {/* Visual Preview: Guaranteed image for 100% of items with fallback */}
                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-4 bg-stone-950">
                      <img
                        src={item.image || CATEGORY_DEFAULT_IMAGES[item.category] || '/src/assets/images/needs_cafe_hero_1792825203896.jpg'}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = CATEGORY_DEFAULT_IMAGES[item.category] || '/src/assets/images/needs_cafe_hero_1792825203896.jpg';
                        }}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Metadata line: zero-pill unboxed text */}
                    <div className="flex items-center gap-2 text-xs text-stone-400 mb-1.5">
                      <span className="capitalize">{item.category}</span>
                      {item.prepTime && (
                        <>
                          <span aria-hidden="true" className="text-stone-600">·</span>
                          <span>{item.prepTime}</span>
                        </>
                      )}
                      {item.spicy && (
                        <>
                          <span aria-hidden="true" className="text-stone-600">·</span>
                          <span className="text-rose-400">Mild Spice</span>
                        </>
                      )}
                      {item.badge && (
                        <>
                          <span aria-hidden="true" className="text-stone-600">·</span>
                          <span className="text-amber-400">{item.badge}</span>
                        </>
                      )}
                    </div>

                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-sm font-semibold text-amber-400 tabular-nums whitespace-nowrap">
                        ₨ {item.price}
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-stone-400 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-stone-800/60 flex items-center justify-between">
                    <span className="text-[11px] text-stone-400">
                      {item.options ? 'Customizable' : 'Ready to prepare'}
                    </span>

                    <button
                      onClick={() => handleQuickAdd(item)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-stone-800 hover:bg-amber-400 hover:text-stone-950 text-stone-200 transition-colors cursor-pointer"
                      aria-label={`Add ${item.name} to order`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400 group-hover:text-stone-950" />
                          <span>Added</span>
                        </>
                      ) : item.options ? (
                        <>
                          <SlidersHorizontal className="w-3.5 h-3.5" />
                          <span>Options</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Customization Modal */}
      {customizingItem && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 rounded-2xl max-w-md w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Image Header */}
            <div className="relative aspect-[16/9] w-full bg-stone-950">
              <img
                src={customizingItem.image || CATEGORY_DEFAULT_IMAGES[customizingItem.category] || '/src/assets/images/needs_cafe_hero_1792825203896.jpg'}
                alt={customizingItem.name}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = CATEGORY_DEFAULT_IMAGES[customizingItem.category] || '/src/assets/images/needs_cafe_hero_1792825203896.jpg';
                }}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setCustomizingItem(null)}
                className="absolute top-3 right-3 text-stone-200 hover:text-white text-xs px-2.5 py-1.5 rounded-full bg-stone-950/80 backdrop-blur-md border border-stone-800 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-stone-100 font-display">
                    Customize {customizingItem.name}
                  </h3>
                  <p className="text-xs text-amber-400 font-mono mt-0.5">₨ {customizingItem.price}</p>
                </div>
              </div>

              <p className="mt-2 text-xs text-stone-400">
                {customizingItem.description}
              </p>

            <div className="mt-5 space-y-4">
              {customizingItem.options?.map((option) => (
                <div key={option.name}>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                    {option.name}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {option.choices.map((choice) => {
                      const isSelected = selectedOptions[option.name] === choice;
                      return (
                        <button
                          key={choice}
                          onClick={() =>
                            setSelectedOptions((prev) => ({ ...prev, [option.name]: choice }))
                          }
                          className={`px-3 py-2 text-xs font-medium rounded-lg text-left transition-colors cursor-pointer border ${
                            isSelected
                              ? 'bg-amber-400/10 text-amber-300 border-amber-400/60'
                              : 'bg-stone-950/60 text-stone-300 border-stone-800 hover:border-stone-700'
                          }`}
                        >
                          {choice}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setCustomizingItem(null)}
                className="px-4 py-2 text-xs font-medium text-stone-400 hover:text-stone-200 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmCustomize}
                className="px-5 py-2 text-xs font-semibold rounded-lg bg-amber-400 text-stone-950 hover:bg-amber-300 transition-colors cursor-pointer"
              >
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
  </section>
  );
};

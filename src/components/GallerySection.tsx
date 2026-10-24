import React, { useState } from 'react';
import { Camera, Sparkles, X, Plus, Eye } from 'lucide-react';
import { MenuItem } from '../types';

interface GalleryItem {
  id: string;
  title: string;
  category: 'drinks' | 'food' | 'ambience';
  image: string;
  tag: string;
  description: string;
  linkedMenuItemId?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Legendary Oreo Thickshake',
    category: 'drinks',
    image: '/src/assets/images/signature_oreo_shake_1792825204754.jpg',
    tag: '5.0 Star Star Favorite',
    description: 'Fresh dairy ice cream blended with crushed Oreo cookies, rich chocolate drizzle, and whipped cream.',
    linkedMenuItemId: 'shake-oreo',
  },
  {
    id: 'gal-2',
    title: 'Needs Cafe Evening Ambiance',
    category: 'ambience',
    image: '/src/assets/images/needs_cafe_hero_1792825203896.jpg',
    tag: 'MA Jinnah Road, Okara',
    description: 'Cozy atmospheric lighting, rustic wood counters, and warm hangout vibe.',
  },
  {
    id: 'gal-3',
    title: 'Artisanal Cafe Latte & Roast Beans',
    category: 'drinks',
    image: '/src/assets/images/artisanal_coffee_latte_1792825205385.jpg',
    tag: 'Specialty Arabica',
    description: 'Velvety microfoam rosetta art poured over freshly extracted double espresso.',
    linkedMenuItemId: 'coffee-latte',
  },
  {
    id: 'gal-4',
    title: 'Needs Cafe Double Smash Burger & Fries',
    category: 'food',
    image: '/src/assets/images/gourmet_burger_fries_1792825205722.jpg',
    tag: 'Dinner Highlight',
    description: 'Seared double prime beef patties with melted sharp cheddar, brioche bun, and crisp seasoned fries.',
    linkedMenuItemId: 'burger-smash',
  },
  {
    id: 'gal-5',
    title: 'Lotus Biscoff Cream Shake',
    category: 'drinks',
    image: '/src/assets/images/lotus_biscoff_shake_1792825654354.jpg',
    tag: 'Speculoos Cookie Butter',
    description: 'Belgian spiced cookie butter swirl with dairy vanilla gelato and crunchy biscuit crown.',
    linkedMenuItemId: 'shake-lotus',
  },
  {
    id: 'gal-6',
    title: 'Special Doodh Patti Karak Chai in Matka',
    category: 'drinks',
    image: '/src/assets/images/karak_doodh_patti_chai_1792825655548.jpg',
    tag: 'Slow Simmered',
    description: 'Authentic buffalo milk boiled with Danedar tea leaves, cardamom, and aromatic spices in a clay cup.',
    linkedMenuItemId: 'tea-karak',
  },
  {
    id: 'gal-7',
    title: 'Loaded Cheesy Pizza Skillet Fries',
    category: 'food',
    image: '/src/assets/images/loaded_cheesy_fries_1792825657093.jpg',
    tag: 'Late Night Favorite',
    description: 'Hot melted mozzarella and cheddar cheese over seasoned fries with chicken tikka bits and jalapenos.',
    linkedMenuItemId: 'savory-loaded-fries',
  },
  {
    id: 'gal-8',
    title: 'Traditional Pink Kashmiri Chai',
    category: 'drinks',
    image: '/src/assets/images/kashmiri_pink_chai_1792825656356.jpg',
    tag: 'Pistachio & Almond',
    description: 'Silky pink tea aerated for hours, rich with cream, crushed pistachios, and slivered almonds.',
    linkedMenuItemId: 'tea-kashmiri',
  },
  {
    id: 'gal-9',
    title: 'Molten Choco Lava Cake',
    category: 'food',
    image: '/src/assets/images/molten_lava_cake_1792825656834.jpg',
    tag: 'Warm Center',
    description: 'Decadent warm dark chocolate sponge with oozing molten fudge center and cold vanilla bean ice cream.',
    linkedMenuItemId: 'dessert-lava',
  },
  {
    id: 'gal-10',
    title: 'Crispy Crunch Zinger Burger',
    category: 'food',
    image: '/src/assets/images/crispy_zinger_burger_1792825945275.jpg',
    tag: 'Golden Crust',
    description: 'Buttermilk fried chicken breast, spicy aioli, and shredded lettuce on toasted brioche.',
    linkedMenuItemId: 'burger-zinger',
  },
  {
    id: 'gal-11',
    title: 'Nutella & Hazelnut Crunch Waffle',
    category: 'food',
    image: '/src/assets/images/nutella_hazelnut_waffle_1792825946088.jpg',
    tag: 'Sweet Indulgence',
    description: 'Crisp Belgian waffle with warm Nutella spread, toasted hazelnuts, and whipped cream.',
    linkedMenuItemId: 'dessert-waffle',
  },
  {
    id: 'gal-12',
    title: 'Chaunsa Mango Velvet Shake',
    category: 'drinks',
    image: '/src/assets/images/chaunsa_mango_shake_1792825947310.jpg',
    tag: 'Seasonal Sweet',
    description: 'Thick mango pulp whipped with pure dairy milk and topped with fresh fruit cubes.',
    linkedMenuItemId: 'shake-mango',
  },
  {
    id: 'gal-13',
    title: 'Golden Mozzarella Cheese Pull Sticks',
    category: 'food',
    image: '/src/assets/images/crispy_mozzarella_sticks_1792825947130.jpg',
    tag: 'Warm & Crispy',
    description: 'Gooey melted mozzarella cheese sticks with herbed crust and rich Italian marinara dip.',
    linkedMenuItemId: 'savory-mozzarella',
  },
  {
    id: 'gal-14',
    title: 'Peri-Peri Glazed Wings & Ranch',
    category: 'food',
    image: '/src/assets/images/peri_peri_wings_1792825947149.jpg',
    tag: 'Spicy Glaze',
    description: 'Fiery birds-eye chili glazed chicken wings with cool garlic ranch dipping sauce.',
    linkedMenuItemId: 'savory-wings',
  },
];

interface GallerySectionProps {
  onAddToCart: (item: MenuItem) => void;
  menuItems: MenuItem[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onAddToCart, menuItems }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'drinks' | 'food' | 'ambience'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const handleOrderLinkedItem = (linkedId: string) => {
    const item = menuItems.find((m) => m.id === linkedId);
    if (item) {
      onAddToCart(item);
      setSelectedPhoto(null);
    }
  };

  return (
    <section id="gallery" className="py-16 lg:py-20 bg-stone-900/60 border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>Customer &amp; Cafe Photo Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-100 font-display">
              Moments &amp; Bites at Needs Cafe
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-900 border border-stone-800 rounded-xl overflow-x-auto">
            {(
              [
                { key: 'all', label: 'All Photos' },
                { key: 'drinks', label: 'Shakes & Brews' },
                { key: 'food', label: 'Food & Dinner' },
                { key: 'ambience', label: 'Cafe Ambience' },
              ] as const
            ).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  activeFilter === key
                    ? 'bg-amber-400 text-stone-950 font-semibold shadow-sm'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 cursor-pointer shadow-lg hover:border-amber-400/50 transition-all"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-0 inset-x-0 p-4 text-left">
                <span className="inline-block text-[10px] font-semibold tracking-wider text-amber-400 uppercase mb-1">
                  {item.tag}
                </span>
                <h3 className="text-sm font-bold text-stone-100 font-display group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-stone-400 line-clamp-1">
                  {item.description}
                </p>
              </div>

              {/* View Overlay Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-stone-950/80 backdrop-blur-md border border-stone-800 flex items-center justify-center text-stone-300 opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Photo Detail Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="relative aspect-[16/10] bg-stone-950">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-stone-950/80 text-stone-300 hover:text-white border border-stone-800 cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    {selectedPhoto.tag}
                  </span>
                  <h3 className="text-xl font-bold font-display text-stone-100 mt-1">
                    {selectedPhoto.title}
                  </h3>
                </div>

                {selectedPhoto.linkedMenuItemId && (
                  <button
                    onClick={() => handleOrderLinkedItem(selectedPhoto.linkedMenuItemId!)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-bold transition-colors cursor-pointer shrink-0"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </button>
                )}
              </div>

              <p className="mt-3 text-xs sm:text-sm text-stone-300 leading-relaxed">
                {selectedPhoto.description}
              </p>

              <div className="mt-4 pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-500">
                <span>Needs Cafe · MA Jinnah Road, Okara</span>
                <span>Dine-in · Takeout</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

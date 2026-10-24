import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedSpecial } from './components/FeaturedSpecial';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ReservationModal } from './components/ReservationModal';
import { MENU_ITEMS } from './data/menuData';
import { INITIAL_REVIEWS } from './data/reviewsData';
import { CartItem, MenuItem, Review } from './types';
import { MessageCircle, Phone } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('needscafe_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      const saved = localStorage.getItem('needscafe_reviews');
      return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
    } catch {
      return INITIAL_REVIEWS;
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  // Sync cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('needscafe_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  // Sync reviews to local storage
  useEffect(() => {
    try {
      localStorage.setItem('needscafe_reviews', JSON.stringify(reviews));
    } catch {
      // ignore
    }
  }, [reviews]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (item: MenuItem, options?: Record<string, string>) => {
    setCartItems((prev) => {
      // Check if item with identical options already exists
      const existingIndex = prev.findIndex(
        (ci) =>
          ci.menuItem.id === item.id &&
          JSON.stringify(ci.selectedOptions || {}) === JSON.stringify(options || {})
      );

      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += 1;
        return copy;
      } else {
        return [...prev, { menuItem: item, quantity: 1, selectedOptions: options }];
      }
    });
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    setCartItems((prev) => {
      const copy = [...prev];
      if (quantity <= 0) {
        return copy.filter((_, i) => i !== index);
      }
      copy[index].quantity = quantity;
      return copy;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleAddReview = (newReview: Review) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  const handleExploreMenu = () => {
    const el = document.getElementById('menu');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  // Find key showcase items
  const oreoItem = MENU_ITEMS.find((item) => item.id === 'shake-oreo');
  const latteItem = MENU_ITEMS.find((item) => item.id === 'coffee-latte');
  const burgerItem = MENU_ITEMS.find((item) => item.id === 'burger-smash');

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-400 selection:text-stone-950">
      {/* Strict Top Bar Contract Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreMenu={handleExploreMenu}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* Featured Signature Oreo Shake & Highlights */}
        <FeaturedSpecial
          onAddToCart={handleAddToCart}
          oreoItem={oreoItem}
          latteItem={latteItem}
          burgerItem={burgerItem}
        />

        {/* Interactive Menu Section with search and filtering */}
        <MenuSection
          items={MENU_ITEMS}
          onAddToCart={handleAddToCart}
        />

        {/* Customer & Cafe Photo Gallery */}
        <GallerySection
          onAddToCart={handleAddToCart}
          menuItems={MENU_ITEMS}
        />

        {/* Story & Quality Commitment */}
        <AboutSection />

        {/* Verified Google Maps Reviews */}
        <ReviewsSection
          reviews={reviews}
          onAddReview={handleAddReview}
        />

        {/* Location, Plus Code, Hours & Directions */}
        <LocationSection />
      </main>

      {/* Purposeful Quiet Footer */}
      <Footer />

      {/* Slide-over Cart Drawer with WhatsApp Order integration */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Floating Quick WhatsApp Floating CTA (bottom right) */}
      <div className="fixed bottom-5 right-5 z-30 flex items-center gap-2">
        <a
          href="https://wa.me/923317485060?text=Hello%20Needs%20Cafe,%20I%20would%20like%20to%20place%20an%20order%20or%20inquire%20about%20a%20table."
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs shadow-xl shadow-stone-950/80 transition-all hover:scale-105 cursor-pointer"
          aria-label="Order or Chat on WhatsApp with Needs Cafe"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp Cafe</span>
        </a>

        <a
          href="tel:+923317485060"
          className="p-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-amber-400 border border-stone-700 shadow-xl shadow-stone-950/80 transition-all hover:scale-105"
          aria-label="Call Needs Cafe"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

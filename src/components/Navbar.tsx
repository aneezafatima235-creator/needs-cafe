import React, { useState } from 'react';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-stone-950/90 backdrop-blur-md border-b border-stone-800/80 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-18">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#top" 
          className="text-2xl font-bold tracking-tight text-amber-50 font-display whitespace-nowrap shrink-0 hover:text-amber-400 transition-colors"
        >
          Needs Cafe
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
          <a href="#menu" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Menu
          </a>
          <a href="#signature" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Famous Shakes
          </a>
          <a href="#gallery" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Photos
          </a>
          <a href="#reviews" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Reviews
          </a>
          <a href="#visit" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Visit & Hours
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
            aria-label={`View order bag with ${cartCount} items`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Bag</span>
            <span className="tabular-nums font-mono px-1.5 py-0.5 rounded bg-stone-950 text-amber-400 text-[11px]">
              {cartCount}
            </span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-400 hover:text-stone-100 hover:bg-stone-900 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation collapse */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-950 border-b border-stone-800 px-6 py-4 space-y-3">
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-300 hover:text-amber-400 py-1 font-medium text-sm"
          >
            Menu
          </a>
          <a
            href="#signature"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-300 hover:text-amber-400 py-1 font-medium text-sm"
          >
            Famous Shakes
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-300 hover:text-amber-400 py-1 font-medium text-sm"
          >
            Photos
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-300 hover:text-amber-400 py-1 font-medium text-sm"
          >
            Reviews
          </a>
          <a
            href="#visit"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-300 hover:text-amber-400 py-1 font-medium text-sm"
          >
            Visit & Hours
          </a>
        </div>
      )}
    </header>
  );
};

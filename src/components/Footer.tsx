import React from 'react';
import { Phone, MapPin, Clock, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 border-t border-stone-800 text-stone-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-stone-800/80">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold font-display text-stone-100">Needs Cafe</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Okara&apos;s evening retreat for handcrafted Arabica brews, thick dessert shakes, and gourmet dining.
            </p>
            <div className="pt-2 text-xs font-mono text-amber-400">
              Plus Code: RC3J+35 Okara
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold text-stone-200 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Full Menu
                </a>
              </li>
              <li>
                <a href="#signature" className="hover:text-amber-400 transition-colors">
                  Famous Oreo Shake
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-amber-400 transition-colors">
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">
                  Google Maps Reviews
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-amber-400 transition-colors">
                  Visiting &amp; Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold text-stone-200 uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Timings</span>
            </h4>
            <div className="space-y-1.5 text-xs text-stone-300">
              <p className="font-medium">Monday – Sunday</p>
              <p className="text-amber-400 font-mono">5:00 PM – 1:00 AM</p>
              <p className="text-[11px] text-stone-400 pt-1">
                Dine-in, Takeaway &amp; Okara Delivery
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold text-stone-200 uppercase tracking-wider">
              Contact &amp; Orders
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href="tel:+923317485060"
                className="flex items-center gap-2 text-stone-300 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>+92 331 7485060</span>
              </a>
              <div className="flex items-start gap-2 text-stone-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>MA Jinnah Road, Shah Din Road, Okara, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Needs Cafe Okara. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

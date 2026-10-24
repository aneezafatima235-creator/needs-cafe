import React from 'react';
import { ArrowRight, Phone, Clock, MapPin, Star, UtensilsCrossed } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOpenReservation }) => {
  return (
    <section id="top" className="relative pt-6 pb-16 lg:py-20 border-b border-stone-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean unboxed metadata kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-amber-400 mb-4 tracking-wide uppercase">
          <span>MA Jinnah Road, Okara</span>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <span>Opens 5:00 PM</span>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <span className="flex items-center gap-1 text-amber-300">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-stone-200">5.0</span>
            <span className="text-stone-400 lowercase">(3 reviews)</span>
          </span>
        </div>

        {/* 2-column split with hero image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-100 font-display leading-[1.1] max-w-2xl text-balance">
              Okara&apos;s Midnight Brews, Decadent Shakes &amp; Comfort Bites.
            </h1>
            
            <p className="mt-6 text-base sm:text-lg text-stone-300 leading-relaxed max-w-xl">
              From our city-celebrated thick Oreo shakes to rich artisanal espresso and hot gourmet smash burgers, Needs Cafe is your evening sanctuary in Okara Cantonment.
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreMenu}
                className="flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer shadow-lg shadow-amber-950/40"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenReservation}
                className="flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-stone-200 bg-stone-900 hover:bg-stone-800 border border-stone-700/80 rounded-lg transition-colors cursor-pointer"
              >
                <UtensilsCrossed className="w-4 h-4 text-amber-400" />
                <span>Reserve a Table</span>
              </button>

              <a
                href="https://wa.me/923317485060?text=Hello%20Needs%20Cafe,%20I%20would%20like%20to%20place%20an%20order%20or%20inquire%20about%20the%20menu."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-stone-400 hover:text-emerald-400 transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>+92 331 7485060</span>
              </a>
            </div>

            {/* Quick trust metrics row */}
            <div className="mt-10 pt-6 border-t border-stone-800/80 grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-stone-400 uppercase tracking-wider">Service</p>
                <p className="mt-1 text-sm font-semibold text-stone-200">Dine-in · Takeout</p>
              </div>
              <div>
                <p className="text-xs text-stone-400 uppercase tracking-wider">Hours</p>
                <p className="mt-1 text-sm font-semibold text-stone-200">5:00 PM – 1:00 AM</p>
              </div>
              <div>
                <p className="text-xs text-stone-400 uppercase tracking-wider">Signature</p>
                <p className="mt-1 text-sm font-semibold text-stone-200">Oreo Thickshake</p>
              </div>
            </div>
          </div>

          {/* Hero Photography Frame with Fallback Container */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-stone-800/80 shadow-2xl bg-stone-900 group">
            <img
              src="/src/assets/images/needs_cafe_hero_1792825203896.jpg"
              alt="Warm, inviting interior of Needs Cafe on MA Jinnah Road, Okara"
              referrerPolicy="no-referrer"
              className="w-full h-80 lg:h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Scrim overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-stone-950/85 backdrop-blur-md border border-stone-800 text-xs">
              <div className="flex items-center justify-between text-stone-300">
                <span className="flex items-center gap-1.5 font-medium text-stone-100">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Shah Din Road, Okara
                </span>
                <span className="flex items-center gap-1 text-amber-400 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  Opens 5 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

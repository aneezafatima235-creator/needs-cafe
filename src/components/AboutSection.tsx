import React from 'react';
import { Coffee, Heart, Moon, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="story" className="py-16 lg:py-20 border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <Coffee className="w-3.5 h-3.5" />
              <span>Our Story &amp; Passion</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-100 font-display leading-tight text-balance">
              Crafted for Moments That Matter in Okara
            </h2>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              Needs Cafe was born out of a simple aspiration: to bring Okara a true specialty coffee house and dessert bar where flavor is never compromised. Located on MA Jinnah Road, Shah Din Road, we open our doors every evening at 5:00 PM to offer a warm escape from the hustle.
            </p>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Whether you are stopping by for our legendary, thick-as-gelato Oreo shake, savoring a hot cup of cardamom Doodh Patti Karak Chai, or meeting friends for a midnight smash burger dinner, every creation is made to order with pride.
            </p>

            {/* Quality Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-stone-900 border border-stone-800">
                <ShieldCheck className="w-5 h-5 text-amber-400 mb-2" />
                <h3 className="text-xs font-bold text-stone-200">100% Pure Dairy</h3>
                <p className="text-[11px] text-stone-400 mt-1">
                  Rich, full-cream local dairy for velvety texture in every shake and latte.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-900 border border-stone-800">
                <Moon className="w-5 h-5 text-amber-400 mb-2" />
                <h3 className="text-xs font-bold text-stone-200">Evening Sanctuary</h3>
                <p className="text-[11px] text-stone-400 mt-1">
                  Open from 5 PM to 1 AM — the prime evening and late-night gathering spot.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-900 border border-stone-800">
                <Heart className="w-5 h-5 text-amber-400 mb-2" />
                <h3 className="text-xs font-bold text-stone-200">Local Pride</h3>
                <p className="text-[11px] text-stone-400 mt-1">
                  Serving Okara families, students, and professionals with genuine hospitality.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Showcase collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 aspect-[4/5]">
                <img
                  src="/src/assets/images/signature_oreo_shake_1792825204754.jpg"
                  alt="Needs Cafe Signature Thick Milkshake"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 rounded-xl bg-stone-900/90 border border-stone-800 text-center">
                <span className="block text-2xl font-bold font-mono text-amber-400">10k+</span>
                <span className="text-xs text-stone-400">Shakes &amp; Brews Served</span>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-4 rounded-xl bg-stone-900/90 border border-stone-800 text-center">
                <span className="block text-2xl font-bold font-mono text-emerald-400">5.0 ★</span>
                <span className="text-xs text-stone-400">Google Customer Rating</span>
              </div>
              <div className="rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 aspect-[4/5]">
                <img
                  src="/src/assets/images/artisanal_coffee_latte_1792825205385.jpg"
                  alt="Artisanal espresso latte preparation"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Copy, Check, MessageSquare } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  // Check if cafe is currently open (5:00 PM to 1:00 AM Pakistan Time / UTC+5)
  // Let's compute local time in PKT (UTC+5)
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const pktDate = new Date(utc + 3600000 * 5);
  const pktHour = pktDate.getHours();
  // Open between 17:00 (5 PM) and 01:00 (1 AM)
  const isOpen = pktHour >= 17 || pktHour < 1;

  const copyToClipboard = (text: string, type: 'code' | 'address') => {
    navigator.clipboard?.writeText(text);
    if (type === 'code') {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } else {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    }
  };

  return (
    <section id="visit" className="py-16 lg:py-20 bg-stone-900/60 border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Location &amp; Visiting Hours</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-100 font-display">
              Visit Needs Cafe in Okara
            </h2>
          </div>
          <p className="text-sm text-stone-400 max-w-md">
            Easily accessible on MA Jinnah Road, Shah Din Road near Okara Cantonment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Details Card */}
          <div className="lg:col-span-6 bg-stone-900 rounded-2xl border border-stone-800 p-6 sm:p-8 space-y-6">
            {/* Live Status indicator */}
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <div className="flex items-center gap-2">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    isOpen ? 'bg-emerald-400' : 'bg-amber-400'
                  }`}
                />
                <span className="text-xs font-bold text-stone-200">
                  {isOpen ? 'Open Now for Dine-in & Takeout' : 'Closed · Opens 5:00 PM'}
                </span>
              </div>
              <span className="text-xs text-stone-400 font-mono">5:00 PM – 1:00 AM Daily</span>
            </div>

            {/* Address */}
            <div className="space-y-1.5">
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                Physical Address
              </p>
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm text-stone-100 font-medium">
                  MA Jinnah Road, Shah Din Road, Okara, Punjab, Pakistan
                </p>
                <button
                  onClick={() =>
                    copyToClipboard('MA Jinnah Road, Shah Din Road, Okara, Pakistan', 'address')
                  }
                  className="p-1.5 text-stone-400 hover:text-stone-100 hover:bg-stone-800 rounded transition-colors cursor-pointer"
                  title="Copy Address"
                >
                  {copiedAddress ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Plus Code */}
            <div className="space-y-1.5">
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                Google Maps Plus Code
              </p>
              <div className="flex items-center justify-between gap-3 bg-stone-950 p-3 rounded-xl border border-stone-800">
                <span className="font-mono text-xs font-bold text-amber-400">
                  RC3J+35 Okara, Pakistan
                </span>
                <button
                  onClick={() => copyToClipboard('RC3J+35 Okara, Pakistan', 'code')}
                  className="flex items-center gap-1.5 text-[11px] text-stone-300 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Contact & Orders */}
            <div className="space-y-1.5">
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                Direct Contact &amp; Orders
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:+923317485060"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-stone-200 border border-stone-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>+92 331 7485060</span>
                </a>

                <a
                  href="https://wa.me/923317485060?text=Hello%20Needs%20Cafe,%20I%20would%20like%20to%20inquire%20about%20a%20table%20or%20menu."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 text-xs font-bold transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Cafe</span>
                </a>
              </div>
            </div>

            {/* Direct Directions Button */}
            <div className="pt-2">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Needs+Cafe+Okara+Pakistan"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs transition-colors cursor-pointer shadow-lg shadow-amber-950/30"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps for Navigation</span>
              </a>
            </div>
          </div>

          {/* Stylized Interactive Map Card */}
          <div className="lg:col-span-6 bg-stone-900 rounded-2xl border border-stone-800 overflow-hidden flex flex-col justify-between">
            <div className="p-6 border-b border-stone-800 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-stone-100 font-display">
                  Okara Cantonment &amp; City Hub
                </h3>
                <p className="text-xs text-stone-400 mt-0.5">MA Jinnah Road corridor</p>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-stone-950 px-2.5 py-1 rounded border border-stone-800">
                RC3J+35
              </span>
            </div>

            {/* Stylized Map View Graphic */}
            <div className="relative h-64 sm:h-72 bg-stone-950 p-6 flex flex-col items-center justify-center text-center overflow-hidden">
              {/* Background Map Grid lines */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#d97706 1px, transparent 1px), radial-gradient(#d97706 1px, #0c0a09 1px)',
                  backgroundSize: '24px 24px',
                  backgroundPosition: '0 0, 12px 12px'
                }}
              />

              {/* Pin representation */}
              <div className="relative z-10 space-y-3">
                <div className="w-14 h-14 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center shadow-2xl mx-auto animate-bounce">
                  <MapPin className="w-8 h-8 fill-stone-950 text-stone-950" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-amber-300 font-display">Needs Cafe</h4>
                  <p className="text-xs text-stone-300 mt-0.5">MA Jinnah Rd, Shah Din Rd, Okara</p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Needs+Cafe+Okara+Pakistan"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 border border-amber-400/50 text-amber-300 hover:text-amber-200 text-xs font-medium cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Start Live Turn-by-Turn GPS</span>
                </a>
              </div>
            </div>

            {/* Nearby Points of Interest note */}
            <div className="p-5 bg-stone-950/70 border-t border-stone-800 text-xs text-stone-400 space-y-1">
              <p className="text-stone-300 font-semibold">Neighbourhood &amp; Parking:</p>
              <p>
                Convenient street parking available along Shah Din Road and MA Jinnah Road. Safe, family-friendly evening dining environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { Reservation } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<Reservation>({
    name: '',
    phone: '',
    guests: 2,
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [resCode, setResCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `NC-RES-${Math.floor(100 + Math.random() * 900)}`;
    setResCode(code);
    setSubmitted(true);

    // Option to notify via WhatsApp
    const msg = `*🍽️ TABLE RESERVATION - NEEDS CAFE OKARA*\n*Reference:* #${code}\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Party Size:* ${formData.guests} Guests\n*Date:* ${formData.date}\n*Time:* ${formData.time}\n*Notes:* ${formData.notes || 'None'}`;
    const url = `https://wa.me/923317485060?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-stone-900 border border-stone-800 rounded-2xl max-w-md w-full p-6 shadow-2xl text-stone-100 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-3 border-b border-stone-800">
          <div>
            <h3 className="text-lg font-bold font-display text-stone-100">Reserve a Table</h3>
            <p className="text-xs text-stone-400 mt-0.5">Needs Cafe · MA Jinnah Road, Okara</p>
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold font-display text-stone-100">Reservation Confirmed!</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              We&apos;ve reserved a table for <strong className="text-amber-400">{formData.guests} guests</strong> on {formData.date} at {formData.time}. Reference code: <span className="font-mono text-amber-400 font-semibold">{resCode}</span>.
            </p>
            <div className="pt-3">
              <button
                onClick={handleClose}
                className="w-full py-2.5 px-4 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1">
                Full Name
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Talha Meo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1">
                WhatsApp / Mobile Number
              </label>
              <input
                required
                type="tel"
                placeholder="0331 1234567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>Guests</span>
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-100 focus:outline-none focus:border-amber-400"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Time (5 PM - 1 AM)</span>
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-100 focus:outline-none focus:border-amber-400"
                >
                  <option value="17:00">5:00 PM (Opening)</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="19:00">7:00 PM (Evening)</option>
                  <option value="20:00">8:00 PM (Dinner)</option>
                  <option value="21:00">9:00 PM (Dinner)</option>
                  <option value="22:00">10:00 PM (Late Bites)</option>
                  <option value="23:00">11:00 PM (Midnight)</option>
                  <option value="00:00">12:00 AM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Date</span>
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-100 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1">
                Special Occasion or Seating Notes (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Birthday celebration, quiet corner table"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-stone-800 mt-4">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 text-xs font-medium text-stone-400 hover:text-stone-200 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-xs transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Book &amp; Notify Cafe</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

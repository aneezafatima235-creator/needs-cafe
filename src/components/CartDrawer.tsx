import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, CheckCircle2, Phone, ShoppingBag, Send } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'takeout' | 'dinein' | 'delivery'>('takeout');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [addressOrTable, setAddressOrTable] = useState('');
  const [orderNote, setOrderNote] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState('');

  const subtotal = items.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    const orderId = `NC-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmedOrderId(orderId);

    // Build structured WhatsApp message
    let message = `*☕ NEW ORDER - NEEDS CAFE OKARA*\n`;
    message += `*Order ID:* #${orderId}\n`;
    message += `*Service:* ${orderType.toUpperCase()}\n`;
    if (customerName) message += `*Customer:* ${customerName}\n`;
    if (customerPhone) message += `*Phone:* ${customerPhone}\n`;
    if (addressOrTable) {
      message += orderType === 'dinein' ? `*Table Number:* ${addressOrTable}\n` : `*Address / Landmark:* ${addressOrTable}\n`;
    }
    if (orderNote) message += `*Special Instructions:* ${orderNote}\n`;
    message += `\n*Order Items:*\n`;

    items.forEach((item, index) => {
      message += `${index + 1}. ${item.menuItem.name} x${item.quantity} - ₨ ${item.menuItem.price * item.quantity}\n`;
      if (item.selectedOptions && Object.keys(item.selectedOptions).length > 0) {
        const opts = Object.entries(item.selectedOptions)
          .map(([k, v]) => `${k}: ${v}`)
          .join(', ');
        message += `   ↳ (${opts})\n`;
      }
    });

    message += `\n*Total Amount:* ₨ ${subtotal}\n`;
    message += `*Payment:* Cash on Delivery / Counter`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923317485060?text=${encoded}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    setOrderConfirmed(true);
  };

  const handleReset = () => {
    onClearCart();
    setOrderConfirmed(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-stone-900 border-l border-stone-800 text-stone-100 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-5 border-b border-stone-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <h2 className="text-lg font-bold font-display">Your Order Bag</h2>
              <span className="text-xs text-stone-400 tabular-nums font-mono">
                ({items.length} {items.length === 1 ? 'item' : 'items'})
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-5">
            {orderConfirmed ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold font-display text-stone-100">
                  Order Dispatched to WhatsApp!
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Your order <span className="font-mono text-amber-400 font-semibold">#{confirmedOrderId}</span> has been formatted and forwarded to Needs Cafe staff (+92 331 7485060).
                </p>

                <div className="bg-stone-950/80 p-4 rounded-xl border border-stone-800 text-left text-xs space-y-2 mt-4">
                  <div className="flex justify-between text-stone-400">
                    <span>Estimated Prep Time:</span>
                    <span className="text-stone-200 font-medium">15–20 mins</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Cafe Location:</span>
                    <span className="text-stone-200 font-medium">MA Jinnah Rd, Okara</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Total Amount:</span>
                    <span className="text-amber-400 font-semibold font-mono">₨ {subtotal}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col gap-2.5">
                  <a
                    href="tel:+923317485060"
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-stone-200"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Call Cafe Directly: +92 331 7485060</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="py-2.5 px-4 rounded-lg bg-amber-400 hover:bg-amber-300 text-xs font-semibold text-stone-950 cursor-pointer"
                  >
                    Done &amp; Clear Bag
                  </button>
                </div>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center mx-auto text-stone-500">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <p className="text-sm text-stone-300 font-medium">Your bag is currently empty</p>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Add our legendary Oreo shake, fresh espresso latte, or double smash burger to start your evening order.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-amber-400 border border-amber-400/40 rounded-lg hover:bg-amber-400/10 cursor-pointer"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Itemized List */}
                <div className="space-y-3">
                  {items.map((item, index) => (
                    <div
                      key={`${item.menuItem.id}-${index}`}
                      className="p-3 bg-stone-950/60 rounded-xl border border-stone-800/80 flex items-center justify-between gap-3"
                    >
                      {/* Item Thumbnail */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-stone-900 shrink-0 border border-stone-800">
                        <img
                          src={item.menuItem.image || '/src/assets/images/signature_oreo_shake_1792825204754.jpg'}
                          alt={item.menuItem.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-stone-200 truncate">
                          {item.menuItem.name}
                        </h4>
                        <p className="text-[11px] text-amber-400 font-mono mt-0.5">
                          ₨ {item.menuItem.price} each
                        </p>

                        {item.selectedOptions && Object.keys(item.selectedOptions).length > 0 && (
                          <div className="mt-1 text-[10px] text-stone-400">
                            {Object.entries(item.selectedOptions).map(([k, v]) => (
                              <span key={k} className="mr-2">
                                {k}: <span className="text-stone-300">{v}</span>
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-2 bg-stone-900 border border-stone-800 rounded-lg p-1">
                        <button
                          onClick={() => {
                            if (item.quantity > 1) {
                              onUpdateQuantity(index, item.quantity - 1);
                            } else {
                              onRemoveItem(index);
                            }
                          }}
                          className="p-1 hover:text-amber-400 text-stone-400 cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>

                        <span className="text-xs font-mono tabular-nums px-1.5 font-semibold text-stone-100">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="p-1 hover:text-amber-400 text-stone-400 cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>

                        <button
                          onClick={() => onRemoveItem(index)}
                          className="p-1 ml-1 hover:text-rose-400 text-stone-500 cursor-pointer"
                          aria-label="Delete item"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Service Options */}
                <div className="pt-3 border-t border-stone-800 space-y-3">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400">
                    Dining / Delivery Preference
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setOrderType('takeout')}
                      className={`py-2 px-2 text-xs font-medium rounded-lg text-center cursor-pointer border ${
                        orderType === 'takeout'
                          ? 'bg-amber-400 text-stone-950 border-amber-400 font-semibold'
                          : 'bg-stone-950 border-stone-800 text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      Takeout
                    </button>
                    <button
                      onClick={() => setOrderType('dinein')}
                      className={`py-2 px-2 text-xs font-medium rounded-lg text-center cursor-pointer border ${
                        orderType === 'dinein'
                          ? 'bg-amber-400 text-stone-950 border-amber-400 font-semibold'
                          : 'bg-stone-950 border-stone-800 text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      Dine-in
                    </button>
                    <button
                      onClick={() => setOrderType('delivery')}
                      className={`py-2 px-2 text-xs font-medium rounded-lg text-center cursor-pointer border ${
                        orderType === 'delivery'
                          ? 'bg-amber-400 text-stone-950 border-amber-400 font-semibold'
                          : 'bg-stone-950 border-stone-800 text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      Delivery
                    </button>
                  </div>

                  {/* Customer details */}
                  <div className="space-y-2.5 pt-2">
                    <input
                      type="text"
                      placeholder="Your Name (e.g. Abdullah)"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-400"
                    />

                    <input
                      type="tel"
                      placeholder="WhatsApp / Phone (e.g. 0331 1234567)"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-400"
                    />

                    <input
                      type="text"
                      placeholder={
                        orderType === 'dinein'
                          ? 'Table Number (e.g. Table 4)'
                          : orderType === 'delivery'
                          ? 'Delivery Address in Okara (Street, Landmark)'
                          : 'Pickup time preference (e.g. in 20 mins)'
                      }
                      value={addressOrTable}
                      onChange={(e) => setAddressOrTable(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-400"
                    />

                    <input
                      type="text"
                      placeholder="Special instructions (e.g. extra napkins, less sweet)"
                      value={orderNote}
                      onChange={(e) => setOrderNote(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Subtotal & Action */}
          {!orderConfirmed && items.length > 0 && (
            <div className="p-5 border-t border-stone-800 bg-stone-950/70 space-y-3">
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span>Subtotal:</span>
                <span className="text-sm font-semibold font-mono text-stone-100 tabular-nums">
                  ₨ {subtotal}
                </span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-stone-500">
                <span>Payment Method:</span>
                <span className="text-stone-300">Cash on Delivery / Counter</span>
              </div>

              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full py-3 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-emerald-950/30"
              >
                <Send className="w-4 h-4" />
                <span>Send Order to WhatsApp (+92 331 7485060)</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

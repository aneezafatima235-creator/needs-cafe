import React, { useState } from 'react';
import { Star, MessageSquare, ThumbsUp, Camera, Check, PlusCircle } from 'lucide-react';
import { Review } from '../types';

interface ReviewsSectionProps {
  reviews: Review[];
  onAddReview: (review: Review) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews, onAddReview }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [rating, setRating] = useState(5);
  const [mealType, setMealType] = useState('Shakes & Desserts');
  const [reviewContent, setReviewContent] = useState('');
  const [likedReviews, setLikedReviews] = useState<Record<string, number>>({ 'rev-1': 2, 'rev-2': 1 });

  const handleLike = (id: string) => {
    setLikedReviews((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewContent.trim()) return;

    const newRev: Review = {
      id: `rev-user-${Date.now()}`,
      author: authorName.trim(),
      rating,
      timeAgo: 'Just now',
      mealType,
      content: reviewContent.trim(),
      ownerResponse: 'Thank you for your feedback! We look forward to serving you again.',
    };

    onAddReview(newRev);
    setAuthorName('');
    setReviewContent('');
    setShowReviewForm(false);
  };

  return (
    <section id="reviews" className="py-16 lg:py-20 bg-stone-900/40 border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>Google Maps Verified Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-100 font-display">
              Loved by Coffee &amp; Shake Aficionados
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-stone-900 border border-stone-800 px-4 py-2.5 rounded-xl">
              <span className="text-2xl font-bold font-mono tabular-nums text-amber-400">5.0</span>
              <div className="text-left text-xs">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-stone-400">{reviews.length} Verified Reviews</span>
              </div>
            </div>

            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors cursor-pointer"
            >
              <PlusCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>{showReviewForm ? 'Cancel Form' : 'Write a Review'}</span>
            </button>
          </div>
        </div>

        {/* Review Submission Form */}
        {showReviewForm && (
          <form
            onSubmit={handleFormSubmit}
            className="mb-12 p-6 bg-stone-900 rounded-2xl border border-stone-800 max-w-2xl mx-auto space-y-4 animate-in fade-in duration-200"
          >
            <h3 className="text-base font-bold font-display text-stone-100">
              Share Your Needs Cafe Experience
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Hamza Malik"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Meal / Experience Type
                </label>
                <select
                  value={mealType}
                  onChange={(e) => setMealType(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-100 focus:outline-none focus:border-amber-400"
                >
                  <option value="Famous Oreo Shake">Famous Oreo Shake</option>
                  <option value="Evening Coffee & Latte">Evening Coffee &amp; Latte</option>
                  <option value="Dinner Burgers & Fries">Dinner Burgers &amp; Fries</option>
                  <option value="Doodh Patti Karak Chai">Doodh Patti Karak Chai</option>
                  <option value="Late Night Takeout">Late Night Takeout</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1">
                Your Rating
              </label>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 hover:scale-110 transition-transform cursor-pointer"
                  >
                    <Star
                      className={`w-5 h-5 ${
                        star <= rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-stone-600'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs text-amber-400 font-mono ml-2">
                  {rating}.0 / 5.0
                </span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1">
                Review Details
              </label>
              <textarea
                required
                rows={3}
                placeholder="What did you try? How was the Oreo shake, burger, or coffee aroma?"
                value={reviewContent}
                onChange={(e) => setReviewContent(e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 rounded-lg p-3 text-xs text-stone-100 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowReviewForm(false)}
                className="px-4 py-2 text-xs font-medium text-stone-400 hover:text-stone-200 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 cursor-pointer"
              >
                Post Review
              </button>
            </div>
          </form>
        )}

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-stone-900 rounded-2xl border border-stone-800 p-6 flex flex-col justify-between hover:border-stone-700 transition-colors"
            >
              <div>
                {/* Header: Author + Rating */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-sm font-bold text-stone-200">
                      {rev.author}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-stone-400 mt-0.5">
                      <span>{rev.timeAgo}</span>
                      {rev.mealType && (
                        <>
                          <span aria-hidden="true" className="text-stone-600">·</span>
                          <span className="text-amber-400/90">{rev.mealType}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {rev.photosCount && (
                  <div className="flex items-center gap-1.5 text-[11px] text-stone-400 mb-2">
                    <Camera className="w-3 h-3 text-amber-400" />
                    <span>{rev.photosCount} photos shared on Google Maps</span>
                  </div>
                )}

                {/* Content */}
                <p className="text-xs text-stone-300 leading-relaxed italic">
                  &ldquo;{rev.content}&rdquo;
                </p>

                {/* Response from the owner if present */}
                {rev.ownerResponse && (
                  <div className="mt-4 p-3 rounded-xl bg-stone-950/80 border border-stone-800/80 text-[11px] text-stone-400">
                    <div className="flex items-center gap-1 text-amber-400 font-semibold mb-0.5 not-italic">
                      <MessageSquare className="w-3 h-3" />
                      <span>Response from the owner</span>
                    </div>
                    <p className="not-italic text-stone-300">{rev.ownerResponse}</p>
                  </div>
                )}
              </div>

              {/* Like / Helpful button */}
              <div className="mt-5 pt-3.5 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
                <button
                  onClick={() => handleLike(rev.id)}
                  className="flex items-center gap-1.5 text-stone-400 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Helpful ({likedReviews[rev.id] || 0})</span>
                </button>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

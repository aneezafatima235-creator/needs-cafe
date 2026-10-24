import { Review } from '../types';

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Abdullah Hassan',
    rating: 5,
    timeAgo: 'Verified Customer',
    content: 'I have tried Oreo shake last night, it was amazing I really liked it, the thickness and chocolate balance was on point.',
    ownerResponse: 'Thank You! So glad you loved our signature Oreo Shake. Looking forward to hosting you again!'
  },
  {
    id: 'rev-2',
    author: 'Talha Meo',
    rating: 5,
    timeAgo: 'Local Guide',
    mealType: 'Dinner',
    photosCount: 5,
    content: 'Came here for dinner with friends. The ambience is quiet and comfortable, burgers and loaded fries were top tier. Great addition to Okara food scene.',
    ownerResponse: 'Thank you Talha! We appreciate your support and feedback.'
  },
  {
    id: 'rev-3',
    author: 'Aqib Aaib',
    rating: 5,
    timeAgo: 'Regular Visitor',
    mealType: 'Coffee & Snacks',
    content: 'Perfect spot on MA Jinnah Road for fresh hot coffee and late night shakes with colleagues. 5/5 stars hospitality.',
    ownerResponse: 'Thank you for stopping by Aqib! Always a pleasure.'
  }
];

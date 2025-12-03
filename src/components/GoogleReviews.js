import React from 'react';
import { reviews } from './reviewsData';

const Stars = ({ count = 5 }) => (
  <div className="flex" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.379-2.454a1 1 0 00-1.175 0l-3.379 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.287-3.967z" />
      </svg>
    ))}
  </div>
);

const GoogleReviews = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-white to-sky-50" id="reviews" aria-labelledby="reviews-heading">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-100 to-sky-200 mb-6 shadow-lg">
            <svg className="w-8 h-8 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h2 id="reviews-heading" className="text-5xl md:text-6xl font-bold headline-sky mb-6">What Families Say</h2>
          <div className="inline-flex items-center gap-4 glass-card px-8 py-5 rounded-3xl mb-6">
            <Stars />
            <div className="border-l border-slate-300 pl-4">
              <p className="text-4xl font-bold text-slate-800">5.0</p>
              <p className="text-xs text-slate-600 uppercase tracking-wider">Excellence</p>
            </div>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">Residents and families share their experiences with our compassionate, person-centered care.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {reviews.map(r => (
            <article key={r.id} className="card-white p-8 flex flex-col rounded-2xl" aria-label={`Review by ${r.author}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{r.author}</h3>
                  <p className="text-xs text-slate-500">{r.meta}</p>
                </div>
                <Stars count={5} />
              </div>
              <p className="text-xs text-slate-400 mb-3">{r.date}</p>
              <p className="text-slate-700 text-sm leading-relaxed flex-grow">{r.text}</p>
            </article>
          ))}
        </div>

        <div className="glass-card rounded-3xl p-10 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">Experience Exceptional Care</h3>
            <p className="text-slate-600 text-base leading-relaxed">Reach out now for a personalized care consultation. We'll respond promptly to answer all your questions.</p>
          </div>
          <a href="#contact" className="btn-sky shrink-0">Contact Us Today</a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;

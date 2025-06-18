import React from 'react';
import RealmeBanner from '../components/RealmeBanner';
import PromotionGallery from '../components/PromotionGallery';
import PopularSearches from '../components/PopularSearches';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-6">
        <RealmeBanner />
        <PromotionGallery />
        <PopularSearches />
        {/* Các component khác */}
      </main>
    </div>
  );
};

export default HomePage;




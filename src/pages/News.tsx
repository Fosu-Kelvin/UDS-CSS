
import React from 'react';
import MobileNavbar from '@/components/MobileNavbar';
import PageHeader from '@/components/PageHeader';
import NewsUpdates from '@/components/NewsUpdates';

const News = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <MobileNavbar />
      
      <div className="pt-16">
        <PageHeader 
          title="Department News" 
          description="Stay updated with the latest announcements"
        />
        
        <div className="container max-w-md mx-auto px-4">
          <NewsUpdates />
        </div>
      </div>
    </div>
  );
};

export default News;

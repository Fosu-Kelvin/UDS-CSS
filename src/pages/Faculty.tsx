
import React from 'react';
import MobileNavbar from '@/components/MobileNavbar';
import PageHeader from '@/components/PageHeader';
import FacultyDirectory from '@/components/FacultyDirectory';

const Faculty = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <MobileNavbar />
      
      <div className="pt-16">
        <PageHeader 
          title="Faculty Directory" 
          description="Meet our esteemed professors and researchers"
        />
        
        <div className="container max-w-md mx-auto px-4">
          <FacultyDirectory />
        </div>
      </div>
    </div>
  );
};

export default Faculty;


import React from 'react';
import MobileNavbar from '@/components/MobileNavbar';
import PageHeader from '@/components/PageHeader';
import DepartmentInfo from '@/components/DepartmentInfo';
import CourseList from '@/components/CourseList';
import FacultyDirectory from '@/components/FacultyDirectory';
import NewsUpdates from '@/components/NewsUpdates';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <MobileNavbar />
      
      <div className="pt-16">
        <PageHeader 
          title="Computer Science Department" 
          description="Coding for action!"
        />
        
        <div className="container max-w-md mx-auto px-4">
          <DepartmentInfo />
          <CourseList limit={3} />
          <FacultyDirectory limit={2} />
          <NewsUpdates limit={2} />
        </div>
      </div>
    </div>
  );
};

export default Index;

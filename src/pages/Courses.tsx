
import React from 'react';
import MobileNavbar from '@/components/MobileNavbar';
import PageHeader from '@/components/PageHeader';
import CourseList from '@/components/CourseList';

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <MobileNavbar />
      
      <div className="pt-16">
        <PageHeader 
          title="Course Catalog" 
          description="Explore our comprehensive range of courses"
        />
        
        <div className="container max-w-md mx-auto px-4">
          <CourseList />
        </div>
      </div>
    </div>
  );
};

export default Courses;

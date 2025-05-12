import React from 'react'
import MobileNavbar from '@/components/MobileNavbar';
import PageHeader from '@/components/PageHeader';

import TeamList from '@/components/TeamList';


const Team = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <MobileNavbar />
      
      <div className="pt-16">
        <PageHeader 
          title="Team" 
          description="Group five members"
        />
        
        <div className="container max-w-md mx-auto px-4">
         <TeamList/>
        </div>
      </div>
    </div>
  )
}

export default Team
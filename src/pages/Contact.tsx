
import React from 'react';
import MobileNavbar from '@/components/MobileNavbar';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <MobileNavbar />
      
      <div className="pt-16">
        <PageHeader 
          title="Contact Us" 
          description="Have questions? We'd love to hear from you"
        />
        
        <div className="container max-w-md mx-auto px-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;

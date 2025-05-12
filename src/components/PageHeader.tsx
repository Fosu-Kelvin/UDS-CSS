
import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="bg-csblue text-white py-6 px-4 mb-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      {description && <p className="mt-1 opacity-85">{description}</p>}
    </div>
  );
};

export default PageHeader;

import React from 'react';

interface SecondaryBannerProps {
  text: string;
}

const SecondaryBanner: React.FC<SecondaryBannerProps> = ({ text }) => {
  return (
    <div className="bg-[#F5A623] py-8">
      <div className="container mx-auto px-6">
        <p className="text-center text-xl md:text-2xl font-semibold text-white italic">
          {text}
        </p>
      </div>
    </div>
  );
};

export default SecondaryBanner;
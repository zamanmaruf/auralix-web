import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', width = 200, height = 80 }) => {
  return (
    <Image
      src="/auralix_logo.jpeg"
      alt="AURALIX AI Logo"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
};

export default Logo; 
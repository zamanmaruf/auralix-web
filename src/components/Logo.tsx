import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', width = 200, height = 80 }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 200 80" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background */}
      <defs>
        <linearGradient id="hexGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00d4ff', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#ffd700', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="innerHexGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00d4ff', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#00d4ff', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Logo Group */}
      <g transform="translate(10, 5)">
        {/* Outer Hexagon */}
        <polygon 
          points="30,5 50,5 55,15 55,35 50,45 30,45 25,35 25,15" 
          fill="none" 
          stroke="url(#hexGradient)" 
          strokeWidth="2"
        />
        
        {/* Middle Hexagon */}
        <polygon 
          points="32,8 48,8 52,15 52,35 48,42 32,42 28,35 28,15" 
          fill="none" 
          stroke="url(#innerHexGradient)" 
          strokeWidth="1.5"
        />
        
        {/* Inner Hexagon */}
        <polygon 
          points="34,11 46,11 49,15 49,35 46,39 34,39 31,35 31,15" 
          fill="none" 
          stroke="url(#innerHexGradient)" 
          strokeWidth="1"
        />
        
        {/* Inner Arrow */}
        <polygon 
          points="38,20 42,20 42,25 44,23 42,21 42,26 38,26" 
          fill="#00d4ff"
        />
      </g>
      
      {/* Text */}
      <text x="70" y="25" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="white">AURALIX</text>
      <text x="70" y="40" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#ffd700">AI</text>
    </svg>
  );
};

export default Logo; 
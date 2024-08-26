import { useEffect, useState } from 'react';

const LiDARScanner = () => {
    const [dots, setDots] = useState<any>([]);
    const [updateDots, setUpdateDots] = useState(true);

    const animationStyle = {
        '@keyframes spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        animation: 'spin 3s linear infinite',
      };

    const generateDots = () => {
        const newDots = [];
        for (let i = 0; i < 20; i++) {
          const x = Math.random() * 100;
          const y = Math.random() * 70;
          newDots.push({ x, y });
        }
    setDots(newDots);
    setUpdateDots(true);
    };

  
    // Generate random dots on the SVG
    useEffect(() => {
        if(updateDots) {
            setTimeout(generateDots, 3000);
            setUpdateDots(false);
        }
    });
  
    return (
    <div className="border-2 border-dotted border-gray-400 flex items-center justify-center h-60 rounded-xl" >
      <div className="flex justify-center items-center">
        <svg
          className="w-48 h-48"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Circle */}
          <circle cx="50" cy="50" r="50" className="fill-green-800 opacity-10" />
          <circle cx="50" cy="50" r="40" className="fill-green-800 opacity-20" />
          <circle cx="50" cy="50" r="30" className="fill-green-800 opacity-30" />
          <circle cx="50" cy="50" r="20" className="fill-green-800 opacity-40" />
          <circle cx="50" cy="50" r="10" className="fill-green-800 opacity-50" />
  
          {/* Spinning Bar */}
          <line
            x1="50"
            y1="50"
            x2="100"
            y2="50"
            className="stroke-green-400 stroke-2 origin-[50px_50px] animate-spin"
            style={animationStyle}
          />
  
          {/* Random Dots */}
          {dots.map((dot : any, index : number) => (
            <circle
              key={index}
              cx={dot.x}
              cy={dot.y}
              r="1"
              className="fill-green-400"
            />
          ))}
        </svg>
      </div>
      </div>
    );
  };

export default LiDARScanner;
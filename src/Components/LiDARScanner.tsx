import { useEffect, useState } from 'react';

function PolarToCartesianWithScaling(angle : number, radius: number){

  const thetaRadians = angle * (Math.PI / 180);
    // Constants
    const MAX_RADIUS = 8000;
    const SCALE_FACTOR = 200 / MAX_RADIUS;

  let x = radius * Math.cos(thetaRadians) * SCALE_FACTOR;
  let y =  radius * Math.sin(thetaRadians) * SCALE_FACTOR;
  return {x, y}
}

const LiDARScanner = () => {
    const [dots, setDots] = useState<any>([]);
    // const [updateDots, setUpdateDots] = useState(true);

    useEffect(() => {    
      if (window.electronAPI) {
        /*Get dots from socket*/
        window.electronAPI.onUDPMessage((msg) => {            
          let newDots = [];
          let rawData = JSON.parse(msg)
          for (let i = 0; i < rawData.length; i++) {
            const dot = rawData[i];
            const { x, y } = PolarToCartesianWithScaling(dot[0], dot[1]);
            newDots.push({ x: 25 + x, y: 25 + y }); //this is the center of the circle
          }
          console.log("LiDAR Values: ")
          console.log(newDots)
          setDots(newDots)
      })

      }  
  }, [])

    const animationStyle = {
        '@keyframes spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        animation: 'spin 2s linear infinite',
      };

    // demo to see how the thing finally looks like
    // const generateDots = () => {
    //     const newDots = [];
    //     for (let i = 0; i < 20; i++) {
    //       const x = Math.random() * 100;
    //       const y = Math.random() * 70;
    //       newDots.push({ x, y });
    //     }

    // setDots(newDots);
    // setUpdateDots(true);
    // };
  
    // Generate random dots on the SVG
    // useEffect(() => {
    //     if(updateDots) {
    //         setTimeout(generateDots, 3000);
    //         setUpdateDots(false);
    //     }
    // });
  
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
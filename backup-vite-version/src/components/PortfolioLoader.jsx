import React, { useEffect, useRef } from 'react';

const PortfolioLoader = () => {
  const binaryContainerRef = useRef(null);
  
  useEffect(() => {
    if (!binaryContainerRef.current) return;
    
    const createBinaryBackground = () => {
      const container = binaryContainerRef.current;
      const columnCount = Math.floor(window.innerWidth / 20);
      
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      
      for (let i = 0; i < columnCount; i++) {
        const column = document.createElement('div');
        column.classList.add('binary-column');
        
        const speed = 5 + Math.random() * 10;
        column.style.animationDuration = `${speed}s`;
        column.style.left = `${i * 20 + Math.random() * 10}px`;
        column.style.animationDelay = `-${Math.random() * speed}s`;
        
        const digitCount = Math.floor(Math.random() * 10) + 15;
        
        for (let j = 0; j < digitCount; j++) {
          const digit = document.createElement('div');
          digit.classList.add('binary-digit');
          digit.textContent = Math.random() > 0.5 ? '1' : '0';
          
          if (Math.random() > 0.7) {
            digit.classList.add('highlight');
          }
          
          column.appendChild(digit);
        }
        
        container.appendChild(column);
      }
    };
    
    const createParticles = () => {
      document.querySelectorAll('.particle').forEach(p => p.remove());
      
      for (let i = 0; i < 20; i++) {
        let particle = document.createElement("div");
        particle.classList.add("particle");
        document.body.appendChild(particle);

        let randomX = Math.random() * window.innerWidth;
        let randomY = Math.random() * window.innerHeight / 2 + window.innerHeight / 2;
        let randomDelay = Math.random() * 1.5;
        let randomSize = Math.random() * 10 + 5;

        particle.style.left = `${randomX}px`;
        particle.style.top = `${randomY}px`;
        particle.style.animationDelay = `${randomDelay}s`;
        particle.style.width = `${randomSize}px`;
        particle.style.height = `${randomSize}px`;
      }
    };
    
    createBinaryBackground();
    createParticles();
    
    const intervalId = setInterval(() => {
      document.querySelectorAll('.binary-digit').forEach(digit => {
        if (Math.random() > 0.9) {
          digit.textContent = Math.random() > 0.5 ? '1' : '0';
        }
      });
    }, 300);
    
    const handleResize = () => {
      createBinaryBackground();
      createParticles();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
      document.querySelectorAll('.particle').forEach(p => p.remove());
    };
  }, []);
  
  return (
    <div className="portfolio-loader">
      <div className="binary-background" ref={binaryContainerRef}></div>
      
      <div className="container">
        <svg id="name-svg" viewBox="0 0 700 220">
          <defs>
            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#00f2fe", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#4facfe", stopOpacity: 1 }} />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" in="SourceAlpha"/>
              <feFlood floodColor="#4facfe" floodOpacity="0.8" result="glowColor"/>
              <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow_colored"/>
              <feMerge>
                <feMergeNode in="softGlow_colored"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <text id="animated-text" x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
            <tspan>W</tspan><tspan>e</tspan><tspan>l</tspan><tspan>c</tspan><tspan>o</tspan><tspan>m</tspan><tspan>e</tspan>
          </text>
        </svg>
      </div>
      
      <style jsx>{`
        .portfolio-loader {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #09182e;
          margin: 0;
          font-family: 'Montserrat', sans-serif;
          overflow: hidden;
          position: relative;
        }

        .container {
          position: relative;
          text-align: center;
          z-index: 10;
        }

        #name-svg {
          width: 90%;
          max-width: 800px;
          height: auto;
          display: block;
          margin: 20px auto;
          overflow: visible;
        }

        #animated-text {
          font-size: 110px;
          font-weight: 700;
          stroke: url(#textGradient);
          stroke-width: 3;
          fill: none;
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          filter: url(#glow);
          animation: 
            draw 1.5s ease-out forwards,
            glowPulse 1s infinite alternate 1.5s,
            fillIn 0.5s ease-in forwards 2s;
        }

        @keyframes draw {
          0% { stroke-dashoffset: 1200; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes glowPulse {
          0% { filter: drop-shadow(0 0 10px #00f2fe); }
          100% { filter: drop-shadow(0 0 20px #4facfe); }
        }

        @keyframes fillIn {
          0% { fill: transparent; stroke-width: 3; }
          100% { fill: white; stroke-width: 0; }
        }

        @keyframes bounceIn {
          0% { transform: translateY(20px); opacity: 0; }
          60% { transform: translateY(-10px); opacity: 1; }
          100% { transform: translateY(0); }
        }

        #animated-text tspan {
          animation: bounceIn 0.5s ease-out forwards;
          opacity: 0;
        }

        #animated-text tspan:nth-child(1) { animation-delay: 2s; }
        #animated-text tspan:nth-child(2) { animation-delay: 2.1s; }
        #animated-text tspan:nth-child(3) { animation-delay: 2.2s; }
        #animated-text tspan:nth-child(4) { animation-delay: 2.3s; }
        #animated-text tspan:nth-child(5) { animation-delay: 2.4s; }
        #animated-text tspan:nth-child(6) { animation-delay: 2.5s; }
        #animated-text tspan:nth-child(7) { animation-delay: 2.6s; }

        .particle {
          position: absolute;
          width: 8px;
          height: 8px;
          background-color: rgba(0, 242, 254, 0.8);
          border-radius: 50%;
          opacity: 0;
          animation: floatUp 1.5s linear infinite;
          z-index: 5;
        }

        @keyframes floatUp {
          0% { transform: translateY(0) scale(0.5); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100px) scale(1); opacity: 0; }
        }

        .binary-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }

        .binary-column {
          position: absolute;
          font-family: monospace;
          font-size: 14px;
          color: rgba(0, 242, 254, 0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 20px;
          animation: fallDown linear infinite;
        }

        .binary-digit {
          opacity: 0.7;
          text-shadow: 0 0 5px rgba(0, 242, 254, 0.8);
        }

        .binary-digit.highlight {
          color: rgba(0, 242, 254, 0.9);
          text-shadow: 0 0 10px rgba(0, 242, 254, 1);
        }

        @keyframes fallDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
};

export default PortfolioLoader;
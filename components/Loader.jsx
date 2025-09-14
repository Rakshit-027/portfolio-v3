import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const imageUrls = [
  "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/photos/mac3.png",
  "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/photos/mac5.png",
  "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/photos/mac6.png",
  "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/photos/mac7.png"
];

const Loader = () => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = imageUrls.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % imageUrls.length;
        return imageUrls[nextIndex];
      });
    }, 7000); // Matches animation cycle

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledWrapper>
      <div className="macbook">
        <div className="inner">
          <div className="screen">
            <div className="face-one">
              <div className="camera" />
              <div className="display">
                {currentImage && (
                  <img src={currentImage} alt="MacBook screen" className="screen-image" />
                )}
                <div className="shade" />
              </div>
              <span>MacBook Air</span>
            </div>
            <title>Layer 1</title>
          </div>
          <div className="macbody">
            <div className="face-one">
              <div className="touchpad"></div>
              <div className="keyboard">
                {/* ... keyboard keys remain unchanged ... */}
                <div className="key" />
                <div className="key" />
                {/* ... rest of the keys ... */}
              </div>
            </div>
            <div className="pad one" />
            <div className="pad two" />
            <div className="pad three" />
            <div className="pad four" />
          </div>
        </div>
        <div className="shadow" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .macbook {
    width: 300px; /* was 150px */
    height: 192px; /* was 96px */
    position: absolute;
    left: 50%;
    top: 77%;
    margin: -170px 0 0 -156px; /* adjusted from -85px 0 0 -78px */
    perspective: 1000px; /* was 500px */
  }

  .shadow {
    position: absolute;
    width: 120px; /* was 60px */
    height: 0px;
    left: 80px; /* was 40px */
    top: 320px; /* was 160px */
    transform: rotateX(80deg) rotateY(0deg) rotateZ(0deg);
    box-shadow: 0 0 120px 80px rgba(0,0,0,0.3); /* was 60px 40px */
    animation: shadow infinite 7s ease;
  }

  .inner {
    z-index: 20;
    position: absolute;
    width: 300px; /* was 150px */
    height: 192px; /* was 96px */
    left: 0;
    top: 0;
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
    animation: rotate infinite 7s ease;
  }

  .screen {
    width: 300px; /* was 150px */
    height: 192px; /* was 96px */
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 14px; /* was 7px */
    background: #ddd;
    transform-style: preserve-3d;
    transform-origin: 50% 186px; /* was 93px */
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    animation: lid-screen infinite 7s ease;
    background-image: linear-gradient(45deg, rgba(0,0,0,0.34) 0%,rgba(0,0,0,0) 100%);
    background-position: left bottom;
    background-size: 600px 600px; /* was 300px 300px */
    box-shadow: inset 0 6px 14px rgba(255,255,255,0.5); /* was 3px 7px */
  }

  .screen .face-one {
    width: 300px; /* was 150px */
    height: 192px; /* was 96px */
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 14px; /* was 7px */
    background: #d3d3d3;
    transform: translateZ(4px); /* was 2px */
    background-image: linear-gradient(45deg,rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
  }

  .screen .face-one .camera {
    width: 6px; /* was 3px */
    height: 6px; /* was 3px */
    border-radius: 100%;
    background: #000;
    position: absolute;
    left: 50%;
    top: 8px; /* was 4px */
    margin-left: -3px; /* was -1.5px */
  }

  .screen .face-one .display {
    width: 260px; /* was 130px */
    height: 148px; /* was 74px */
    margin: 20px; /* was 10px */
    background-color: #000;
    background-size: 100% 100%;
    border-radius: 2px; /* was 1px */
    position: relative;
    box-shadow: inset 0 0 4px rgba(0,0,0,1); /* was 2px */
  }

  .screen .face-one .display .shade {
    position: absolute;
    left: 0;
    top: 0;
    width: 260px; /* was 130px */
    height: 148px; /* was 74px */
    background: linear-gradient(-135deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0.1) 47%,rgba(255,255,255,0) 48%);
    animation: screen-shade infinite 7s ease;
    background-size: 600px 400px; /* was 300px 200px */
    background-position: 0px 0px;
  }

  .screen .face-one span {
    position: absolute;
    top: 170px; /* was 85px */
    left: 114px; /* was 57px */
    font-size: 12px; /* was 6px */
    color: #666;
  }

  .macbody {
    width: 300px; /* was 150px */
    height: 192px; /* was 96px */
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 14px; /* was 7px */
    background: #cbcbcb;
    transform-style: preserve-3d;
    transform-origin: 50% bottom;
    transform: rotateX(-90deg);
    animation: lid-macbody infinite 7s ease;
    background-image: linear-gradient(45deg, rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
  }

  .macbody .face-one {
    width: 300px; /* was 150px */
    height: 192px; /* was 96px */
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 14px; /* was 7px */
    transform-style: preserve-3d;
    background: #dfdfdf;
    animation: lid-keyboard-area infinite 7s ease;
    transform: translateZ(-4px); /* was -2px */
    background-image: linear-gradient(30deg, rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
  }

  .macbody .touchpad {
    width: 80px; /* was 40px */
    height: 62px; /* was 31px */
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 8px; /* was 4px */
    margin: -88px 0 0 -36px; /* was -44px 0 0 -18px */
    background: #cdcdcd;
    background-image: linear-gradient(30deg, rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
    box-shadow: inset 0 0 6px #888; /* was 3px */
  }

  .macbody .keyboard {
    width: 260px; /* was 130px */
    height: 90px; /* was 45px */
    position: absolute;
    left: 14px; /* was 7px */
    top: 82px; /* was 41px */
    border-radius: 8px; /* was 4px */
    transform-style: preserve-3d;
    background: #cdcdcd;
    background-image: linear-gradient(30deg, rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
    box-shadow: inset 0 0 6px #777; /* was 3px */
    padding: 0 0 0 4px; /* was 2px */
  }

  .keyboard .key {
    width: 12px; /* was 6px */
    height: 12px; /* was 6px */
    background: #444;
    float: left;
    margin: 2px; /* was 1px */
    transform: translateZ(-4px); /* was -2px */
    border-radius: 4px; /* was 2px */
    box-shadow: 0 -4px 0 #222; /* was -2px */
    animation: keys infinite 7s ease;
  }

  .key.space {
    width: 90px; /* was 45px */
  }

  .key.f {
    height: 6px; /* was 3px */
  }

  .macbody .pad {
    width: 10px; /* was 5px */
    height: 10px; /* was 5px */
    background: #333;
    border-radius: 100%;
    position: absolute;
  }

  .pad.one {
    left: 40px; /* was 20px */
    top: 40px; /* was 20px */
  }

  .pad.two {
    right: 40px; /* was 20px */
    top: 40px; /* was 20px */
  }

  .pad.three {
    right: 40px; /* was 20px */
    bottom: 40px; /* was 20px */
  }

  .pad.four {
    left: 40px; /* was 20px */
    bottom: 40px; /* was 20px */
  }

  @keyframes rotate {
    0% {
      transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
    }

    5% {
      transform: rotateX(-20deg) rotateY(-20deg) rotateZ(0deg);
    }

    20% {
      transform: rotateX(30deg) rotateY(200deg) rotateZ(0deg);
    }

    25% {
      transform: rotateX(-60deg) rotateY(150deg) rotateZ(0deg);
    }

    60% {
      transform: rotateX(-20deg) rotateY(130deg) rotateZ(0deg);
    }

    65% {
      transform: rotateX(-20deg) rotateY(120deg) rotateZ(0deg);
    }

    80% {
      transform: rotateX(-20deg) rotateY(375deg) rotateZ(0deg);
    }

    85% {
      transform: rotateX(-20deg) rotateY(357deg) rotateZ(0deg);
    }

    87% {
      transform: rotateX(-20deg) rotateY(360deg) rotateZ(0deg);
    }

    100% {
      transform: rotateX(-20deg) rotateY(360deg) rotateZ(0deg);
    }
  }

  @keyframes lid-screen {
    0% {
      transform: rotateX(0deg);
      background-position: left bottom;
    }

    5% {
      transform: rotateX(50deg);
      background-position: left bottom;
    }

    20% {
      transform: rotateX(-90deg);
      background-position: -150px top;
    }

    25% {
      transform: rotateX(15deg);
      background-position: left bottom;
    }

    30% {
      transform: rotateX(-5deg);
      background-position: right top;
    }

    38% {
      transform: rotateX(5deg);
      background-position: right top;
    }

    48% {
      transform: rotateX(0deg);
      background-position: right top;
    }

    90% {
      transform: rotateX(0deg);
      background-position: right top;
    }

    100% {
      transform: rotateX(0deg);
      background-position: right center;
    }
  }

  @keyframes lid-macbody {
    0% {
      transform: rotateX(-90deg);
    }

    50% {
      transform: rotateX(-90deg);
    }

    100% {
      transform: rotateX(-90deg);
    }
  }

  @keyframes lid-keyboard-area {
    0% {
      background-color: #dfdfdf;
    }

    50% {
      background-color: #bbb;
    }

    100% {
      background-color: #dfdfdf;
    }
  }

  @keyframes screen-shade {
    0% {
      background-position: -20px 0px;
    }

    5% {
      background-position: -40px 0px;
    }

    20% {
      background-position: 200px 0;
    }

    50% {
      background-position: -200px 0;
    }

    80% {
      background-position: 0px 0px;
    }

    85% {
      background-position: -30px 0;
    }

    90% {
      background-position: -20px 0;
    }

    100% {
      background-position: -20px 0px;
    }
  }

  @keyframes keys {
    0% {
      box-shadow: 0 -2px 0 #222;
    }

    5% {
      box-shadow: 1 -1px 0 #222;
    }

    20% {
      box-shadow: -1px 1px 0 #222;
    }

    25% {
      box-shadow: -1px 1px 0 #222;
    }

    60% {
      box-shadow: -1px 1px 0 #222;
    }

    80% {
      box-shadow: 0 -2px 0 #222;
    }

    85% {
      box-shadow: 0 -2px 0 #222;
    }

    87% {
      box-shadow: 0 -2px 0 #222;
    }

    100% {
      box-shadow: 0 -2px 0 #222;
    }
  }

  @keyframes shadow {
    0% {
      transform: rotateX(80deg) rotateY(0deg) rotateZ(0deg);
      box-shadow: 0 0 60px 40px rgba(0,0,0,0.3);
    }

    5% {
      transform: rotateX(80deg) rotateY(10deg) rotateZ(0deg);
      box-shadow: 0 0 60px 40px rgba(0,0,0,0.3);
    }

    20% {
      transform: rotateX(30deg) rotateY(-20deg) rotateZ(-20deg);
      box-shadow: 0 0 50px 30px rgba(0,0,0,0.3);
    }

    25% {
      transform: rotateX(80deg) rotateY(-20deg) rotateZ(50deg);
      box-shadow: 0 0 35px 15px rgba(0,0,0,0.1);
    }

    60% {
      transform: rotateX(80deg) rotateY(0deg) rotateZ(-50deg) translateX(30px);
      box-shadow: 0 0 60px 40px rgba(0,0,0,0.3);
    }

    100% {
      box-shadow: 0 0 60px 40px rgba(0,0,0,0.3);
    }
  }`;

export default Loader;

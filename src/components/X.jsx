import React from 'react';
import styled from 'styled-components';

const X = () => {
  return (
    <StyledWrapper>
      <div className="tooltip-container">
        <div className="tooltip">
          <div className="profile">
            <div className="user">
              <div className="img"><img className='img' src="data:image/jpeg;base64,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" alt="" /></div> {/* Placeholder image; replace with your X profile image */}
              <div className="details">
                <div className="name">User</div>
                <div className="username">@Rakshit072</div> {/* Replace with your X handle */}
              </div>
            </div>
            <div className="about">Sharing Thoughts</div> {/* Modest alternative */}
          </div>
        </div>
        <div className="text">
          <a className="icon" href="https://x.com/Rakshit072"> {/* Replace with your X profile URL */}
            <div className="layer">
              <span />
              <span />
              <span />
              <span />
              <span className="xSVG">
                <svg viewBox="0 0 24 24" height="1em" xmlns="http://www.w3.org/2000/svg" fill="#fff">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </span>
            </div>
            <div className="text">X</div>
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .tooltip-container {
    position: relative;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 14px; /* Smaller size */
    border-radius: 8px;
    width: fit-content; /* Auto-adjusting width */
    margin: 0 auto;
  }

  .tooltip {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    border-radius: 12px;
    width: max-content;
    max-width: 250px; /* Smaller max-width */
    box-shadow: inset 3px 3px 3px rgba(0, 0, 0, 0.2),
      inset -3px -3px 10px rgba(255, 255, 255, 0.1),
      3px 3px 10px rgba(0, 0, 0, 0.3),
      -3px -3px 10px rgba(255, 255, 255, 0.1);
  }

  .profile {
    background: #0a182e; /* Dark background similar to previous components */
    border-radius: 8px 12px;
    padding: 8px;
    border: 1px solid #fff; /* White border for X branding */
    width: 100%;
  }

  .tooltip-container:hover .tooltip {
    top: -120px; /* Smaller hover position */
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .icon {
    text-decoration: none;
    color: #fff;
    display: block;
    position: relative;
    margin: 0 auto;
  }

  .layer {
    width: 40px; /* Smaller size */
    height: 40px;
    transition: transform 0.3s;
    margin: 0 auto;
  }

  .icon:hover .layer {
    transform: rotate(-35deg) skew(20deg);
  }

  .layer span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid #fff;
    border-radius: 5px;
    transition: all 0.3s;
  }

  .layer span,
  .text {
    color: #fff; /* White for X branding */
    border-color: #fff;
  }

  .icon:hover.layer span {
    box-shadow: -1px 1px 2px #fff;
  }

  .icon .text {
    position: absolute;
    left: 50%;
    bottom: -5px;
    opacity: 0;
    font-weight: 500;
    font-size: 12px; /* Smaller text */
    transform: translateX(-50%);
    transition: bottom 0.3s ease, opacity 0.3s ease;
  }

  .icon:hover .text {
    bottom: -25px; /* Smaller hover position */
    opacity: 1;
  }

  .icon:hover .layer span:nth-child(1) { opacity: 0.2; }
  .icon:hover .layer span:nth-child(2) { opacity: 0.4; transform: translate(3px, -3px); }
  .icon:hover .layer span:nth-child(3) { opacity: 0.6; transform: translate(6px, -6px); }
  .icon:hover .layer span:nth-child(4) { opacity: 0.8; transform: translate(9px, -9px); }
  .icon:hover .layer span:nth-child(5) { opacity: 1; transform: translate(12px, -12px); }

  .xSVG {
    font-size: 20px; /* Smaller SVG size */
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000; /* Black background for X logo */
  }

  .user {
    display: flex;
    gap: 8px; /* Smaller gap */
  }

  .img {
    width: 40px; /* Smaller size */
    height: 40px;
    font-size: 20px;
    font-weight: 700;
    border: 1px solid #fff; /* White border */
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    flex-shrink: 0;
  }

  .name {
    font-size: 14px; /* Smaller size */
    font-weight: 700;
    color: #fff; /* White for X branding */
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 0;
    color: #fff;
    overflow: hidden;
  }

  .about {
    color: #ccc;
    padding-top: 4px;
    font-size: 12px; /* Smaller size */
  }
`;

export default X;
import React from 'react';
import styled from 'styled-components';

const Insta = () => {
  return (
    <StyledWrapper>
      <div className="tooltip-container">
        <div className="tooltip">
          <div className="profile">
            <div className="user">
              <div className="img"><img className='img' src="data:image/jpeg;base64,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" alt="" /></div>
              <div className="details">
                <div className="name">User</div>
                <div className="username">rakshit.27_</div>
              </div>
            </div>
            <div className="about">Sharing Moments</div> {/* Replaced "250+ Followers" */}
          </div>
        </div>
        <div className="text">
          <a className="icon" href="https://www.instagram.com/rakshit.27_/">
            <div className="layer">
              <span />
              <span />
              <span />
              <span />
              <span className="instagramSVG">
                <svg fill="white" className="svgIcon" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
            </div>
            <div className="text">Instagram</div>
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
    font-size: 14px; /* Reduced from 17px */
    border-radius: 8px; /* Reduced from 10px */
    width: fit-content;
    margin: 0 auto;
  }

  .tooltip {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px; /* Reduced from 10px */
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    border-radius: 12px; /* Reduced from 15px */
    width: max-content;
    max-width: 250px; /* Reduced from 300px */
    box-shadow: inset 3px 3px 3px rgba(0, 0, 0, 0.2),
      inset -3px -3px 10px rgba(255, 255, 255, 0.1),
      3px 3px 10px rgba(0, 0, 0, 0.3),
      -3px -3px 10px rgba(255, 255, 255, 0.1); /* Reduced shadow sizes */
  }

  .profile {
    background: #0a182e;
    border-radius: 8px 12px; /* Reduced from 10px 15px */
    padding: 8px; /* Reduced from 10px */
    border: 1px solid #52382f;
    width: 100%;
  }

  .tooltip-container:hover .tooltip {
    top: -120px; /* Reduced from -150px */
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
    width: 40px; /* Reduced from 55px */
    height: 40px; /* Reduced from 55px */
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
    border-radius: 10px; /* Reduced from 15px */
    transition: all 0.3s;
  }

  .layer span,
  .text {
    color: #e6683c;
    border-color: #e6683c;
  }

  .icon:hover.layer span {
    box-shadow: -1px 1px 2px #e6683c; /* Reduced shadow */
  }

  .icon .text {
    position: absolute;
    left: 50%;
    bottom: -5px;
    opacity: 0;
    font-weight: 500;
    font-size: 12px; /* Reduced from implied default */
    transform: translateX(-50%);
    transition: bottom 0.3s ease, opacity 0.3s ease;
  }

  .icon:hover .text {
    bottom: -25px; /* Reduced from -35px */
    opacity: 1;
  }

  .icon:hover .layer span:nth-child(1) { opacity: 0.2; }
  .icon:hover .layer span:nth-child(2) { opacity: 0.4; transform: translate(3px, -3px); }
  .icon:hover .layer span:nth-child(3) { opacity: 0.6; transform: translate(6px, -6px); }
  .icon:hover .layer span:nth-child(4) { opacity: 0.8; transform: translate(9px, -9px); }
  .icon:hover .layer span:nth-child(5) { opacity: 1; transform: translate(12px, -12px); }

  .instagramSVG {
    font-size: 20px; /* Reduced from 25px */
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
  }

  .user {
    display: flex;
    gap: 8px; /* Reduced from 10px */
  }

  .img {
    width: 40px; /* Reduced from 50px */
    height: 40px; /* Reduced from 50px */
    font-size: 20px; /* Reduced from 25px */
    font-weight: 700;
    border: 1px solid #e6683c;
    border-radius: 8px; /* Reduced from 10px */
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    flex-shrink: 0;
  }

  .name {
    font-size: 14px; /* Reduced from 17px */
    font-weight: 700;
    color: #e6683c;
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
    padding-top: 4px; /* Reduced from 5px */
    font-size: 12px; /* Added to reduce size */
  }
`;

export default Insta;
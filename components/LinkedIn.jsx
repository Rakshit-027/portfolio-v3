import React from 'react';
import styled from 'styled-components';

const LinkedIn = () => {
  return (
    <StyledWrapper>
      <div className="tooltip-container">
        <div className="tooltip">
          <div className="profile">
            <div className="user">
              <div className="img"><img className='img' src="https://media.licdn.com/dms/image/v2/D5603AQH5jRP73upzwA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1701363157797?e=1746662400&v=beta&t=b73_ihsS3gdL5fwgrnJhJoC9x3nsrHJRLOIG9tQivVc" alt="" /></div>
              <div className="details">
                <div className="name">User</div>
                <div className="username">Rakshit Waghmare</div>
              </div>
            </div>
            <div className="about">Open to Connect</div>
          </div>
        </div>
        <div className="text">
          <a className="icon" href="https://freecodez.com/">
            <div className="layer">
              <span />
              <span />
              <span />
              <span />
              <span className="fab fa-linkedin">
                <svg viewBox="0 0 448 512" height="0.8em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </span>
            </div>
            <div className="text">LinkedIn</div>
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
      -3px -3px 10px rgba(255, 255, 255, 0.1);
  }

  .profile {
    background: #0a182e;
    border-radius: 8px 12px; /* Reduced from 10px 15px */
    padding: 8px; /* Reduced from 10px */
    border: 1px solid rgba(11, 63, 95, 1);
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
    border-radius: 5px;
    transition: all 0.3s;
  }

  .layer span,
  .text {
    color: #1da1f2;
    border-color: #1da1f2;
  }

  .icon:hover.layer span {
    box-shadow: -1px 1px 2px #1da1f2; /* Reduced shadow */
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

  .layer span.fab {
    font-size: 20px; /* Reduced from 30px */
    line-height: 40px; /* Adjusted to match new height */
    text-align: center;
    fill: #1da1f2;
    background: #000;
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
    border: 1px solid #1da1f2;
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
    color: #1da1f2;
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

export default LinkedIn;
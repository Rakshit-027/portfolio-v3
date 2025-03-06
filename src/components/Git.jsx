import React from 'react';
import styled from 'styled-components';

const Git = () => {
  return (
    <StyledWrapper>
      <div className="tooltip-container">
        <div className="tooltip">
          <div className="profile">
            <div className="user">
              <div className="img"><img className='img' src="https://avatars.githubusercontent.com/u/193617288?s=400&u=7297916db57ec9bb11b6cad7cc4ae401c5bca93e&v=4" alt="" /></div>
              <div className="details">
                <div className="name">User</div>
                <div className="username">Rakshit-027</div>
              </div>
            </div>
            <div className="about">Coding Enthusiast</div> {/* Replaced "250+ Commits" */}
          </div>
        </div>
        <div className="text">
          <a href="https://github.com/Rakshit-027" className="icon">
            <div className="layer">
              <span />
              <span />
              <span />
              <span />
              <span className="fab fa-discord">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
                  <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.070C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                </svg>
              </span>
            </div>
            <div className="text">Discord</div>
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
    border: 1px solid #5865f2;
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
    color: #5865f2;
    border-color: #5865f2;
  }

  .icon:hover.layer span {
    box-shadow: -1px 1px 2px #5865f2; /* Reduced shadow */
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
    fill: #5865f2;
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
    border: 1px solid #5865f2;
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
    color: #5865f2;
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

export default Git;
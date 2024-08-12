import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="icon-container">
          <img
            src="https://q3z.d61.myftpupload.com/wp-content/uploads/2022/08/italent-logo-black.svg"
            alt="italent-logo"
            className="logo"
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
            href="https://www.italentdigital.com/contact-us"
          >
            CONTACT US <span> &#8594;</span>
          </a>

          <div className="socialmedia-icons_container">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/iTalentCorp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="18"
                height="18"
                viewBox="0,0,256,256"
              >
                <g
                  className="facebook-icon"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(5.33333,5.33333)">
                    <path d="M20.5,46c-1.378,0 -2.5,-1.121 -2.5,-2.5v-17.5l-4.45,0.003c-1.367,0 -2.489,-1.11 -2.501,-2.476l-0.029,-3.003c-0.006,-0.673 0.25,-1.306 0.724,-1.783c0.472,-0.478 1.103,-0.741 1.776,-0.741h4.48v-4.5c0,-6.746 3.442,-10.462 9.691,-10.462c2.472,0 4.63,0.175 4.65,0.177c0.965,0.086 1.691,0.88 1.691,1.847v4.57c0,1.022 -0.832,1.854 -1.854,1.854h-2.908c-1.217,0 -2.208,0.99 -2.208,2.208l-0.056,4.306h4.438c0.713,0 1.393,0.306 1.867,0.838c0.474,0.532 0.699,1.243 0.616,1.951l-0.349,3c-0.146,1.261 -1.214,2.211 -2.482,2.211h-4.096v17.5c0,1.379 -1.122,2.5 -2.5,2.5z"></path>
                  </g>
                </g>
              </svg>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/italentcorp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="18"
                height="18"
                viewBox="0,0,256,256"
              >
                <g
                  className="twitter-icon"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M6.91992,6l14.2168,20.72656l-14.9082,17.27344h3.17773l13.13867,-15.22266l10.44141,15.22266h10.01367l-14.87695,-21.6875l14.08008,-16.3125h-3.17578l-12.31055,14.26172l-9.7832,-14.26172z"></path>
                  </g>
                </g>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.glassdoor.co.in/Overview/Working-at-iTalent-Corporation-EI_IE803191.11,30.htm"
            >
              <svg width="17" height="17" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="glassdoor-icon"
                  d="M22.859 27.427h-18.286c0 2.526 2.047 4.573 4.568 4.573h13.714c2.526 0 4.573-2.047 4.573-4.573v-18.771c0-0.094-0.073-0.167-0.167-0.167h-4.24c-0.089 0-0.161 0.073-0.161 0.167v18.776zM22.859 0c2.521 0 4.568 2.047 4.568 4.573h-18.281v18.771c0 0.089-0.078 0.167-0.167 0.167h-4.24c-0.094 0-0.167-0.078-0.167-0.167v-18.771c0-2.526 2.047-4.573 4.568-4.573h13.719z"
                />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/italent-corporation/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="18"
                height="18"
                viewBox="0,0,256,256"
              >
                <g
                  className="linkedin-icon"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M8,3.00977c-3.47,0 -5.99023,2.07945 -5.99023,4.93945c0,2.87 2.58023,5.04102 5.99023,5.04102c3.47,0 5.99023,-2.11961 5.99023,-5.09961c-0.16,-2.87 -2.63023,-4.88086 -5.99023,-4.88086zM3,15c-0.55,0 -1,0.45 -1,1v29c0,0.55 0.45,1 1,1h10c0.55,0 1,-0.45 1,-1v-29c0,-0.55 -0.45,-1 -1,-1zM18,15c-0.55,0 -1,0.45 -1,1v29c0,0.55 0.45,1 1,1h9c0.552,0 1,-0.448 1,-1v-15v-0.25v-0.25c0,-2.37 1.82062,-4.30047 4.14063,-4.48047c0.12,-0.02 0.23938,-0.01953 0.35938,-0.01953c0.12,0 0.23938,-0.00047 0.35938,0.01953c2.32,0.18 4.14063,2.11047 4.14063,4.48047v15.5c0,0.552 0.448,1 1,1h9c0.55,0 1,-0.45 1,-1v-17c0,-6.47 -3.47094,-13 -11.50977,-13c-4.23,0 -6.35938,2.30938 -7.49023,4.18945v-3.18945c0,-0.55 -0.45,-1 -1,-1z"></path>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-content">
          <ul className="links">
            <li>
              <a href="https://www.italentdigital.com/">Home</a>
            </li>
            <li>
              <a href="https://www.italentdigital.com/about-us">About Us</a>
            </li>
            <li>
              <a href="https://www.italentdigital.com/it-services">Services</a>
            </li>
            <li>
              <a href="https://www.italentdigital.com/it-solutions">Solutions</a>
            </li>
            <li>
              <a href="https://www.italentdigital.com/news">News</a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;

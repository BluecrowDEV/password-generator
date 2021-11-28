import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-lock-open"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#0d74e7"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <circle cx="12" cy="16" r="1" />
          <path d="M8 11v-5a4 4 0 0 1 8 0" />
        </svg>
        Password Generator
      </div>
      <div className="header-links">
        <Link href="https://github.com/BluecrowDEV/password-generator" passHref>
          <span className="header-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-folder"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
            </svg>
          </span>
        </Link>
        <Link href="https://github.com/BluecrowDEV" passHref>
          <span className="header-icon icon-brand-github">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-github"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="	#0d74e7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;

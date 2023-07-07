import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <div className="width">
        {props.back && (
          <Link to="/" className="back">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="24">
              <path 
              fill="currentColor" 
              d="M655-80 255-480l400-400 56 57-343 343 343 343-56 57Z" />
            </svg> */}
            &#8249;
            &#8249;
          </Link>
        )}
        <h1>
          <Link to="/">Crypker</Link>
        </h1>
      </div>
    </header>
  );
}

export default Header;

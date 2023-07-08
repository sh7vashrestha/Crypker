import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <div className="width">
        {props.back && (
          <Link to="/crypker" className="back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              width="48">
              <path fill='currentColor' d="M561-240 320-481l241-241 43 43-198 198 198 198-43 43Z" />
            </svg>
          </Link>
        )}
        <h1>
          <Link to="/crypker">Crypker</Link>
        </h1>
      </div>
    </header>
  );
}

export default Header;

import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>
        &copy;{currentYear} Shiva Shrestha. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;

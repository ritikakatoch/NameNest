import React from 'react';
import './Header.css';

const Header = ({ headTitle, headerExpanded }) => {
  return (
    <div className="header-container">
      {/* Newly added div for centering */}
      <div className="centered-div">
        <div className="head-content">
          <img
            src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
            alt="head banner"
            className={`head-image ${headerExpanded ? 'head-image-expanded' : 'head-image-contracted'}`}
          /> 
          <h1 className="head-title">NameNest</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
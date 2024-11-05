
import React from 'react';
import './Whatwedo.css'; // Import the CSS file
import incubator from '../photos/incubator.jpg';
import rural from '../photos/rural_business_promotion.jpg';
import incubation from '../photos/incubation.jpg';

const Whatwedo = () => {
  return (
    <div className="container">
      <div className='container-1'>      <h1 className="heade">What We Do</h1></div>

      <div className="grid">
        <div className="section">
          <h5 className="label">TECHNOLOGY DEMONSTRATION CENTRES</h5>
          <img src={incubator} alt="Technology Demonstration" className="image" />
        </div>
        <div className="section">
          <h5 className="label">RURAL BUSINESS PROMOTION CENTRES</h5>
          <img src={rural} alt="Rural Business Promotion" className="image" />
        </div>
        <div className="section">
          <h5 className="label">TECHNOLOGY INCUBATION CENTRES</h5>
          <img src={incubation} alt="Technology Incubation" className="image" />
        </div>
      </div>
    </div>
  );
}

export default Whatwedo;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ag from "../../photos/f.png";
import ag1 from "../../photos/f1.png";
import ag2 from "../../photos/f2.png";
import ag3 from "../../photos/f3.png";
import ag4 from "../../photos/f4.png";
import ag5 from "../../photos/f5.png";
import "./Foodprocessing.css"; // Import the CSS file

const FoodProcessing = () => {
  const images = [ag, ag1, ag2, ag3, ag4, ag5];
  const texts = [
    "Enhancing Safety of food items",
    "Extension of shelf life of perishable food items",
    "Delay in ripening of fruits and vegetables",
    "Cost effective transportation under refrigeration",
    "Supply of Food/ water in emergency situations like flood/landslides",
    "Promotion of self-help groups (SHG) for value addition to domestic products/services by providing support related to packaging, digital market linkages, and quality certification."
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="food-processing-container">
      <header className="food-processing-header">
        <h1>Food Preservation and Food Irradiation</h1>
      </header>
      
      <div className="slider-wrapper">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="slide">
              <img 
                src={src} 
                alt={Slide ${index}} 
                className="slide-image" 
              />
              <h3 className="slide-text">{texts[index]}</h3>
            </div>
          ))}
        </Slider>
      </div>

      <section className="food-processing-description">
        <ul>
          {texts.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default FoodProcessing;




/* General Layout */
.food-processing-container {
    background-color: #f5f5f5; /* Light background for a classic look */
    padding: 40px;
    text-align: center;
    font-family: 'Times New Roman', Times, serif; /* Classic font */
    color: #333; /* Dark text color for readability */
  }
  
  .food-processing-header h1 {
    font-size: 3.5rem;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 30px;
  }
  
  /* Slider Styles */
  .slider-wrapper {
    width: 60%;
    margin: 0 auto 40px auto; /* Centering the slider */
  }
  
  .slide {
    text-align: center;
  }
  
  .slide-image {
    width: 100%;
    height: 400px; /* Uniform height for all images */
    border-radius: 8px;
    object-fit: contain; /* Ensure the entire image is visible */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for images */
  }
  
  .slick-prev:before, .slick-next:before {
    color: #2c3e50; /* Classic dark color for navigation arrows */
  }
  
  .slide-text {
    margin-top: 10px;
    font-size: 18px;
    text-align: center;
    color: #333;
  }
  
  /* Description Styles */
  .food-processing-description {
    margin: 20px auto;
    width: 60%; /* Narrower width for readability */
    text-align: left; /* Left-align text for readability */
  }
  
  .food-processing-description ul {
    padding: 0;
    list-style-type: none;
  }
  
  .food-processing-description li {
    font-size: 16px;
    color: black;
    font-weight: 400;
    margin: 10px 0;
  }

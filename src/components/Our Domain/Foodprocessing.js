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





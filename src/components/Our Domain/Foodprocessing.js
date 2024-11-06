import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About_us from "../About_us";
import ag from "../../photos/f.png"
import ag1 from "../../photos/f1.png"
import ag2 from "../../photos/f2.png"
import ag3 from "../../photos/f3.png"
import ag4 from "../../photos/f4.png"
import ag5 from "../../photos/f5.png"
const FoodProcessing = ()=>{
    const images = [ag, ag1,ag2,ag3,ag4,ag5];
    const texts = [
      "Enhancing Safety of food items",
      " Extension of shelf life of perishable food items",
      " Delay in ripening of fruits and vegetable",
      " Cost effective transportation under refrigeration",
      "Supply of Food/ water in emergency situation like  flood/ land slides",
      " Promotion of self help group (SHG) for value addition to domestic products/services by providing support related to packaging, digital market linkages and quality certification. "
    ];
  
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
    };
  
    return (
      <div>
      <div style={{ backgroundColor: "#e1b470",display:'flex',justify-content:'space-between',gap:'40px',margin:"0px 30px" }}>
        <h1 style={{ textAlign: "center", fontSize: "4rem", fontWeight: "bold", color: "blue" }}>Food Preservation and Food Irradiation</h1>
        <div style={{ width: "80%", margin: "10px auto" }}>
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} style={{ textAlign: "center", color: "#333" }}>
                <img 
    src={src} 
    alt={`Slide ${index}`} 
    style={{ 
      width: '100%',  
      borderRadius: '8px', 
      objectFit:'cover'
    }} 
  />
                <h3 style={{ marginTop: "10px", fontSize: "18px", textAlign: "center" }}>{texts[index]}</h3>
              </div>
            ))}
          </Slider>
        </div>
  
        
        
  
        <ul style={{ textAlign: "left", margin: "20px auto", padding: "0", width: "60%" }}>
          <li style={{ fontSize: "16px", color: "black", fontWeight: "400", margin: "10px 0" }}>
          Enhancing Safety of food items
          </li>
          <li style={{ fontSize: "16px", color: "black", fontWeight: "400", margin: "10px 0" }}>
          Extension of shelf life of perishable food items
          </li>
          <li style={{ fontSize: "16px", color: "black", fontWeight: "400", margin: "10px 0" }}>
          Delay in ripening of fruits and vegetable
          </li>
          <li style={{ fontSize: "16px", color: "black", fontWeight: "400", margin: "10px 0" }}>
          Cost effective transportation under refrigeration
          </li>
          <li style={{ fontSize: "16px", color: "black", fontWeight: "400", margin: "10px 0" }}>
          Supply of Food/ water in emergency situation like  flood/ land slides
          </li>
          <li style={{ fontSize: "16px", color: "black", fontWeight: "400", margin: "10px 0" }}>
          Promotion of self help group (SHG) for value addition to domestic 
products/services by providing support related to packaging, digital 
market linkages and quality certification.
          </li>
        
        </ul>
      </div>
    
      </div>
    )
}
export default FoodProcessing;

import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About_us from "../About_us";
import ag from "../../photos/wa.png"
import ag1 from "../../photos/wa1.png"
const SocialInit = ()=>{
    const images = [ag, ag1];
   const texts = ["Hybrid Bio-Granular SBR Technology",
    " Radiation Technology for Sludge Hygienisation"
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
      
      <div style={{ backgroundColor: "#e1b470", padding: "40px",
        textAlign: "center",
        fontFamily: "'Times New Roman', Times, serif",
        color: "#333", }}>
        <h1 style={{ textAlign: "center", fontSize: "4rem", fontWeight: "bold", color: "blue" }}>Waste Water Treatment 
        & Sewage Sludge Hygenisation </h1>
        <div style={{ width: "60%", margin: "0 auto 40px auto" }}>
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} style={{ textAlign: "center", color: "#333" }}>
                <img 
    src={src} 
    alt={`Slide ${index}`} 
    style={{ 
      width: "100%",
                  height: "400px",
                  borderRadius: "8px",
                  objectFit: "contain",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    }} 
  />
     <h3 style={{ marginTop: "10px", fontSize: "18px", textAlign: "center" }}>{texts[index]}</h3>           
              </div>
            ))}
          </Slider>
        </div>
  
        <h2 style={{ fontSize: "1rem", fontWeight: "400", color: "black", textAlign: "center",margin:'20px 10px' }}>
        Waste Water and Sludge Treatment Technologies will be 
        promoted for Sustainable Living
        </h2>
      
  
       
      </div>
      
      
    )
}
export default SocialInit;

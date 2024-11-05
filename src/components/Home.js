
import React from 'react';
import earthWithHandsImage from '../photos/Devic-Earth.jpg'; // Ensure the path to your image is correct
import tech from '../photos/tech.jpg'; // Update this path to your image with technology icons
import './Home.css';
import Header from './Header';

const Home = () => {
    return (
    
        <div className="home-container">
            <img src={earthWithHandsImage} alt="Earth with Hands" className="background-image" />
            <h1 className='earthText'>Transforming Rural Lives with the Use of Technology</h1>
            <div className="text-container">
                <h1>Our Mission</h1>
            </div>
            <div className="text-contained">
                <div className="image-text-row">
                    <div className="image-container">
                        <img src={tech} alt="Technology Icons" className="tech-image" />
                    </div>
                    <div className="right">
                        <h2>Bringing Technology to Rural India</h2>
                        <ul className='home-ul'><li>Identification of Technologies for Rural India.</li>
                        
                        <li>Maintain the knowhow of all the relevant rural technologies under one roof.</li>
                        <li>Setting up ‘Technology Demonstration/ Incubation Centers’ at Taluka Levels to promote technologies for clean water, solar energy, sanitation, health, agriculture & education. These centres will be called ‘Cillage Centres’.</li>
                        <li>Engaging with Gram Panchayats to convert their villages into “Model Sustainable Villages’</li></ul>
                        <h2>Generating Local Employment by promoting Entrepreneurship in Villages</h2>
                        <ul className='home-ul'>                        <li>.Generating local employment by nurturing local entrepreneurs to start companies/small manufacturing units in the rural area.</li></ul>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;

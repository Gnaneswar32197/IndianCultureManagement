import React, { useState } from 'react';
import './Bihar.css';
import Bihar1 from './images/bh1.jpg';
import Bihar2 from './images/bh4.jpg';
import Bihar3 from './images/bh3.jpg';
import Bihar4 from './images/bh2.jpg';

const space = { height: '10px' };

const Bihar = () => {
    const [showMap, setShowMap] = useState(false);
    const [showFullImage, setShowFullImage] = useState(false);
    const [fullImageUrl, setFullImageUrl] = useState('');

    const handleViewMap = () => {
        setShowMap(true);
        loadMapScript();
    };

    const handleImageClick = (imageSrc) => {
        setShowFullImage(true);
        setFullImageUrl(imageSrc);
    };

    const handleCloseImage = () => {
        setShowFullImage(false);
        setFullImageUrl('');
    };

    const loadMapScript = () => {
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBA2jxZtJo79PHM87dPShu-ZX2BE6RaWzM&callback=initMap`; // Replace YOUR_API_KEY with your actual Google Maps API key
        googleMapScript.async = true;
        googleMapScript.defer = true;
        window.initMap = initMap;
        document.head.appendChild(googleMapScript);
    };

    const initMap = () => {
        const patnaLocation = { lat: 25.5941, lng: 85.1376 }; // Coordinates for Patna
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: patnaLocation,
            zoom: 15
        });
        new window.google.maps.Marker({
            position: patnaLocation,
            map: map,
            title: 'Patna'
        });
    };

    return (
        <div className="Bihar-container">
            <h1>Bihar</h1>
            <div className="Bihar-info">
                <h3>
                    Bihar, located in the eastern part of India, is known for its rich history, diverse culture, and spiritual significance. Here's a glimpse into the cultural heritage of Bihar:
                </h3>
                <h2><h2>Capital City: Patna</h2></h2>
                <img src={Bihar1} alt="Bihar" onClick={() => handleImageClick(Bihar1)} />
                <div style={space}></div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
                <h2><h2>Language and Literature:</h2></h2>
                <p>
                    Bihar is home to a multitude of languages and dialects, reflecting its cultural diversity. Maithili, Bhojpuri, Magahi, and Angika are among the languages spoken in the region. The state has a rich literary tradition, with ancient texts like the Panchatantra and Jataka tales originating from Bihar.
                </p>
                <h2><h2>Gaya</h2></h2>
                <p>
                    Gaya, a city in Bihar, holds immense religious significance for Hindus and Buddhists. It is renowned for the Mahabodhi Temple, a UNESCO World Heritage Site, where Lord Buddha is said to have attained enlightenment. Thousands of pilgrims visit Gaya annually to perform rituals for their ancestors and seek spiritual blessings.
                </p>
                <img src={Bihar2} alt="Gaya, Bihar" onClick={() => handleImageClick(Bihar2)} />
                <h2><h2>Music and Dance:</h2></h2>
                <p>
                Bihar boasts a vibrant tapestry of music and dance, deeply ingrained in its cultural fabric. Music and dance serve as expressions of joy, celebration, and storytelling, reflecting the rich heritage of the region. Traditional folk dances like Jhijhian, Jhumar, and Kathghorwa, accompanied by rhythmic beats of dholak and harmonium, evoke a sense of community and tradition. These artistic forms not only entertain but also preserve the essence of Bihar's cultural identity, passed down through generations with pride and reverence.
                </p>
                <div className="Bihar-images">
                    <img src={Bihar3} alt="Bihar" onClick={() => handleImageClick(Bihar3)} />
                    <img src={Bihar4} alt="Bihar" onClick={() => handleImageClick(Bihar4)} />
                </div>
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Bihar" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Bihar;

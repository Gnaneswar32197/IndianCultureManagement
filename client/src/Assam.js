import React, { useState } from 'react';
import './Assam.css';
import Assam1 from './images/as1.jpg';
import Assam2 from './images/as2.jpeg';
import Assam3 from './images/as3.jpeg';
import Assam4 from './images/as4.jpeg';

const space = { height: '10px' };

const Assam = () => {
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
        const dispurLocation = { lat: 26.1445, lng: 91.7362 }; // Coordinates for Dispur
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: dispurLocation,
            zoom: 15
        });
        new window.google.maps.Marker({
            position: dispurLocation,
            map: map,
            title: 'Dispur'
        });
    };

    return (
        <div className="Assam-container">
            <h1>Assam</h1>
            <div className="Assam-info">
                <h3>
                    Assam, located in northeastern India, is known for its lush landscapes, diverse wildlife, and rich cultural heritage. Here's a glimpse into the beauty and culture of Assam:
                </h3>
                <h2><h2>Capital City: Dispur</h2></h2>
                <img src={Assam1} alt="Assam" onClick={() => handleImageClick(Assam1)} />
                <div style={space}></div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
                <h2><h2>Language and Literature:</h2></h2>
                <p>
                    Assam is a melting pot of cultures and languages. Assamese is the official language, but numerous indigenous languages and dialects are spoken throughout the state. The region boasts a rich literary tradition, with works ranging from ancient epics like the Mahabharata to modern novels and poetry.
                </p>
                <h2><h2>Kaziranga National Park</h2></h2>
                <p>
                    Kaziranga National Park, a UNESCO World Heritage Site, is a haven for wildlife enthusiasts. Located in the Golaghat and Nagaon districts of Assam, Kaziranga is famed for its population of the endangered one-horned rhinoceros. The park is also home to tigers, elephants, and a diverse array of bird species.
                </p>
                <img src={Assam2} alt="Kaziranga National Park" onClick={() => handleImageClick(Assam2)} />
                <h2><h2>Music and Dance:</h2></h2>
                <p>
                    Assam's music and dance forms reflect its cultural diversity and traditions. Bihu is the most celebrated festival, accompanied by vibrant folk music and dance performances. Other traditional dances include Sattriya, Bhortal, and Ojapali, each with its unique style and significance.
                </p>
                <div className="Assam-images">
                    <img src={Assam3} alt="Assam" onClick={() => handleImageClick(Assam3)} />
                    <img src={Assam4} alt="Assam" onClick={() => handleImageClick(Assam4)} />
                </div>
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Assam" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Assam;

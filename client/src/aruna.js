import React, { useState } from 'react';
import './aruna.css';
import Aruna1 from './images/app1.jpg';
import Aruna2 from './images/app2.jpg';
import Aruna3 from './images/app3.jpg';
import Aruna4 from './images/app4.jpg';
const space={height:'10px'}


const APP1 = () => {
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
        const apLocation = { lat: 27.0844, lng: 93.6053 };
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: apLocation,
            zoom: 15
        });
        new window.google.maps.Marker({
            position: apLocation,
            map: map,
            title: 'ArunachalPradesh'
        });
    };

    return (
        <div className="ArunachalPradesh-container">
            <h1>Arunachal Pradesh</h1>
            <div className="ArunachalPradesh-info">
                <h3>
                Arunachal Pradesh, nestled in the northeastern part of India, is a land of unparalleled natural beauty and cultural diversity. Here's a glimpse into the rich cultural system of Arunachal Pradesh:
                </h3>
                <h2><h2>Capital City: Itanagar</h2></h2>
                <img src={Aruna1} alt="ArunachalPradesh" onClick={() => handleImageClick(Aruna1)} />
                <div style={space}></div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
                <h2><h2>Language and Literature:</h2></h2>

                <p>
                Arunachal Pradesh is home to a mosaic of ethnic groups, each with its own distinct language and literature. The state boasts a rich oral tradition, with folklore, myths, and legends passed down through generations. While languages like Nyishi, Adi, Apatani, and Galo are widely spoken, efforts are underway to preserve and promote indigenous languages and literature.
                </p>
                <h2><h2>GOLDEN PAGODA</h2></h2>
                <p>
                The Golden Pagoda of Namsai, also known as Kongmu Kham, in the Tai-Khamti language, is a Burmese-style Buddhist temple that was opened in 2010. It is located on a 20 hectares complex in Namsai District of Arunachal Pradesh, India and at a distance of 68 km from the nearest railway station Tinsukia, Assam.
                </p>
                <img src={Aruna2} alt="ArunachalPradesh Upperview" onClick={() => handleImageClick(Aruna2)} />
                <h2><h2>Music and Dance:</h2></h2>
                <p>
                Music and dance are integral parts of life in Arunachal Pradesh, with each community celebrating its unique cultural expressions. Traditional dances like the Aji Lamu, Ponung, and Popir are performed during festivals and rituals, accompanied by indigenous musical instruments such as bamboo flutes, drums, and gongs. These artistic traditions serve as a medium for storytelling and preserving cultural identities.
                </p>
                <div className="ArunachalPradesh-images">
                    <img src={Aruna3} alt="ArunachalPradesh" onClick={() => handleImageClick(Aruna3)} />
                    <img src={Aruna4} alt="ArunachalPradesh" onClick={() => handleImageClick(Aruna4)} />
                </div>
                {/* {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>} */}
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full ArunachalPradesh" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default APP1;


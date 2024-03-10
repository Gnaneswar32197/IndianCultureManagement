// import React, { useState } from 'react';
// import './jamamasjid.css';
// import JamaMasjidImage1 from './images/jama_masjid1.jpg';
// import JamaMasjidImage2 from './images/jama_masjid2.jpg';
// import JamaMasjidImage3 from './images/jama_masjid3.jpg';

// const JamaMasjid = () => {
//     const [showMap, setShowMap] = useState(false);

//     const handleViewMap = () => {
//         setShowMap(true);
//         loadMapScript();
//     };

//     const loadMapScript = () => {
//         const googleMapScript = document.createElement('script');
//         googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDqOIJO2ldFaC_4O6gaj4mJ4ViSpPlh4uo&callback=initMap`; // Replace YOUR_API_KEY with your actual Google Maps API key
//         googleMapScript.async = true;
//         googleMapScript.defer = true;
//         window.initMap = initMap;
//         document.head.appendChild(googleMapScript);
//     };

//     const initMap = () => {
//         const jamaMasjidLocation = { lat: 28.6539, lng: 77.2355 }; // Coordinates for Jama Masjid
//         const map = new window.google.maps.Map(document.getElementById('map'), {
//             center: jamaMasjidLocation,
//             zoom: 15
//         });
//         new window.google.maps.Marker({
//             position: jamaMasjidLocation,
//             map: map,
//             title: 'Jama Masjid'
//         });
//     };

//     return (
//         <div className="jama-masjid-container">
//             <h1>Jama Masjid</h1>
//             <div className="jama-masjid-info">
//                 <p>
//                     The Jama Masjid is one of the largest mosques in India located in the heart of Old Delhi. It was built by the Mughal Emperor Shah Jahan between 1644 and 1656.
//                 </p>
//                 <p>
//                     The mosque is made of red sandstone and white marble and can accommodate more than 25,000 worshippers at a time. It is known for its grandeur and architectural beauty.
//                 </p>
//                 <p>
//                     The Jama Masjid is an important religious and historical site and attracts tourists and worshippers from all over the world. It is a symbol of the rich cultural heritage of India.
//                 </p>
//                 <div className="jama-masjid-images">
//                     <img src={JamaMasjidImage1} alt="Jama Masjid" />
//                     <img src={JamaMasjidImage2} alt="Jama Masjid Sideview" />
//                     <img src={JamaMasjidImage3} alt="Jama Masjid" />
//                 </div>
//                 {!showMap && <button onClick={handleViewMap}>View Map</button>}
//                 {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
//             </div>
//         </div>
//     );
// }

// export default JamaMasjid;














// jamaMasjid.js
// import React, { useState } from 'react';
// import './jamamasjid.css';
// import JamaMasjidImage1 from './images/jama_masjid1.jpg';
// import JamaMasjidImage2 from './images/jama_masjid2.jpg';
// import JamaMasjidImage3 from './images/jama_masjid3.jpg';

// const JamaMasjid = () => {
//     const [showMap, setShowMap] = useState(false);
//     const [showFullImage, setShowFullImage] = useState(false);
//     const [fullImageUrl, setFullImageUrl] = useState('');

//     const handleViewMap = () => {
//         setShowMap(true);
//         loadMapScript();
//     };

//     const handleImageClick = (imageSrc) => {
//         setShowFullImage(true);
//         setFullImageUrl(imageSrc);
//     };

//     const handleCloseImage = () => {
//         setShowFullImage(false);
//         setFullImageUrl('');
//     };

//     const loadMapScript = () => {
//         const googleMapScript = document.createElement('script');
//         googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDqOIJO2ldFaC_4O6gaj4mJ4ViSpPlh4uo&callback=initMap`; // Replace YOUR_API_KEY with your actual Google Maps API key
//         googleMapScript.async = true;
//         googleMapScript.defer = true;
//         window.initMap = initMap;
//         document.head.appendChild(googleMapScript);
//     };

//     const initMap = () => {
//         const jamaMasjidLocation = { lat: 28.6539, lng: 77.2355 }; // Coordinates for Jama Masjid
//         const map = new window.google.maps.Map(document.getElementById('map'), {
//             center: jamaMasjidLocation,
//             zoom: 15
//         });
//         new window.google.maps.Marker({
//             position: jamaMasjidLocation,
//             map: map,
//             title: 'Jama Masjid'
//         });
//     };

//     return (
//         <div className="jama-masjid-container">
//             <h1>Jama Masjid</h1>
//             <div className="jama-masjid-info">
//                 <p>
//                     The Jama Masjid is one of the largest mosques in India located in the heart of Old Delhi. It was built by the Mughal Emperor Shah Jahan between 1644 and 1656.
//                 </p>
//                 <p>
//                     The mosque is made of red sandstone and white marble and can accommodate more than 25,000 worshippers at a time. It is known for its grandeur and architectural beauty.
//                 </p>
//                 <p>
//                     The Jama Masjid is an important religious and historical site and attracts tourists and worshippers from all over the world. It is a symbol of the rich cultural heritage of India.
//                 </p>
//                 <div className="jama-masjid-images">
//                     <img src={JamaMasjidImage1} alt="Jama Masjid" onClick={() => handleImageClick(JamaMasjidImage1)} />
//                     <img src={JamaMasjidImage2} alt="Jama Masjid Sideview" onClick={() => handleImageClick(JamaMasjidImage2)} />
//                     <img src={JamaMasjidImage3} alt="Jama Masjid" onClick={() => handleImageClick(JamaMasjidImage3)} />
//                 </div>
//                 {!showMap && <button onClick={handleViewMap}>View Map</button>}
//                 {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
//             </div>
//             {showFullImage && (
//                 <div className="full-image-overlay" onClick={handleCloseImage}>
//                     <span className="close-button">&times;</span>
//                     <img src={fullImageUrl} alt="Full Jama Masjid" className="full-image" />
//                 </div>
//             )}
//         </div>
//     );
// }

// export default JamaMasjid;



import React, { useState, useEffect } from 'react';
import './jamamasjid.css';
import JamaMasjidImage1 from './images/jama_masjid1.jpg';
import JamaMasjidImage2 from './images/jama_masjid2.jpg';
import JamaMasjidImage3 from './images/jama_masjid3.jpg';

const JamaMasjid = () => {
    const [showMap, setShowMap] = useState(false);
    const [showFullImage, setShowFullImage] = useState(false);
    const [fullImageUrl, setFullImageUrl] = useState('');
    const [rating, setRating] = useState('');
    const [overallRating, setOverallRating] = useState(null);
    const [userRating, setUserRating] = useState(null);

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

    const handleRatingChange = (e) => {
        const value = e.target.value;
        // Ensure rating is a number between 1 and 5
        if (!isNaN(value) && value >= 1 && value <= 5) {
            setRating(value);
        }
        else
            alert("Rating must be a number between 1 and 5");
    };

    const handleRatingSubmit = () => {
        // Check if a rating is provided
        if (rating) {
            // Here you would send the rating to the server for storage in the database
            // For demonstration, let's just log the rating and clear the text field
            console.log('Rating submitted:', rating);
            setUserRating(rating);
    
            // Clear the rating text field
            setRating('');
    
            // Show alert for successful submission
            alert("Review submitted successfully");
        } else {
            // If no rating is provided, show an alert
            alert("Please provide a rating before submitting.");
        }
    };

    useEffect(() => {
        // Fetch overall rating from the database
        // Here you would add logic to fetch the overall rating from the database
        // For demonstration, let's assume an overall rating of 4.5
        // setOverallRating(4.5);
    }, []);

    const loadMapScript = () => {
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDqOIJO2ldFaC_4O6gaj4mJ4ViSpPlh4uo&callback=initMap`; // Replace YOUR_API_KEY with your actual Google Maps API key
        googleMapScript.async = true;
        googleMapScript.defer = true;
        window.initMap = initMap;
        document.head.appendChild(googleMapScript);
    };

    const initMap = () => {
        const jamaMasjidLocation = { lat: 28.6539, lng: 77.2355 }; // Coordinates for Jama Masjid
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: jamaMasjidLocation,
            zoom: 15
        });
        new window.google.maps.Marker({
            position: jamaMasjidLocation,
            map: map,
            title: 'Jama Masjid'
        });
    };

    return (
        <div className="redfort-container">
            <h1>Jama Masjid</h1>
            <div className="redfort-info">
                <p>
                    The Jama Masjid is one of the largest mosques in India located in the heart of Old Delhi. It was built by the Mughal Emperor Shah Jahan between 1644 and 1656.
                </p>
                <p>
                    The mosque is made of red sandstone and white marble and can accommodate more than 25,000 worshippers at a time. It is known for its grandeur and architectural beauty.
                </p>
                <p>
                    The Jama Masjid is an important religious and historical site and attracts tourists and worshippers from all over the world. It is a symbol of the rich cultural heritage of India.
                </p>
                <div className="redfort-images">
                    <img src={JamaMasjidImage1} alt="Jama Masjid" onClick={() => handleImageClick(JamaMasjidImage1)} />
                    <img src={JamaMasjidImage2} alt="Jama Masjid Sideview" onClick={() => handleImageClick(JamaMasjidImage2)} />
                    <img src={JamaMasjidImage3} alt="Jama Masjid" onClick={() => handleImageClick(JamaMasjidImage3)} />
                </div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
            </div>
            {showFullImage && (
                <div className="full-image-overlay" onClick={handleCloseImage}>
                    <span className="close-button">&times;</span>
                    <img src={fullImageUrl} alt="Full Jama Masjid" className="full-image" />
                </div>
            )}
            <div className="rating-section">
                <label htmlFor="rating">Give Rating:</label>
                <input 
                    type="number" 
                    id="rating" 
                    name="rating" 
                    min="1" 
                    max="5" 
                    value={rating} 
                    onChange={handleRatingChange} 
                />
                <button onClick={handleRatingSubmit}>Submit Rating</button>
            </div>
            {userRating && (
                <div className="your-rating-section">
                    <p>Your Rating: {userRating}</p>
                </div>
            )}
            {overallRating !== null && (
                <div className="overall-rating-section">
                    <p>Overall Rating: {overallRating}</p>
                </div>
            )}
        </div>
    );
}

export default JamaMasjid;



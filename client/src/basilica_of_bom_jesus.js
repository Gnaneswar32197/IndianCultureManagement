// import React, { useState } from 'react';
// import './basilica_of_bom_jesus.css';
// import BasilicaImage1 from './images/basilica1.jpg';
// import BasilicaImage2 from './images/basilica2.jpg';
// import BasilicaImage3 from './images/basilica3.jpg';

// const BasilicaOfBomJesus = () => {
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
//         const basilicaLocation = { lat: 15.5004, lng: 73.9111 }; // Coordinates for Basilica of Bom Jesus
//         const map = new window.google.maps.Map(document.getElementById('map'), {
//             center: basilicaLocation,
//             zoom: 15
//         });
//         new window.google.maps.Marker({
//             position: basilicaLocation,
//             map: map,
//             title: 'Basilica of Bom Jesus'
//         });
//     };

//     return (
//         <div className="basilica-container">
//             <h1>Basilica of Bom Jesus</h1>
//             <div className="basilica-info">
//                 <p>
//                     The Basilica of Bom Jesus is a UNESCO World Heritage Site located in Goa, India. It is known for housing the mortal remains of St. Francis Xavier.
//                 </p>
//                 <p>
//                     The basilica is a fine example of Baroque architecture and is one of the oldest churches in India. It was constructed in the late 16th century and is a popular pilgrimage site for Catholics from around the world.
//                 </p>
//                 <div className="basilica-images">
//                     <img src={BasilicaImage1} alt="Basilica of Bom Jesus" />
//                     <img src={BasilicaImage2} alt="Basilica of Bom Jesus Interior" />
//                     <img src={BasilicaImage3} alt="Basilica of Bom Jesus" />
//                 </div>
//                 {!showMap && <button onClick={handleViewMap}>View Map</button>}
//                 {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
//             </div>
//         </div>
//     );
// }

// export default BasilicaOfBomJesus;


// BasilicaOfBomJesus.js
// import React, { useState } from 'react';
// import './basilica_of_bom_jesus.css';
// import BasilicaImage1 from './images/basilica1.jpg';
// import BasilicaImage2 from './images/basilica2.jpg';
// import BasilicaImage3 from './images/basilica3.jpg';

// const BasilicaOfBomJesus = () => {
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
//         const basilicaLocation = { lat: 15.5004, lng: 73.9111 }; // Coordinates for Basilica of Bom Jesus
//         const map = new window.google.maps.Map(document.getElementById('map'), {
//             center: basilicaLocation,
//             zoom: 15
//         });
//         new window.google.maps.Marker({
//             position: basilicaLocation,
//             map: map,
//             title: 'Basilica of Bom Jesus'
//         });
//     };

//     return (
//         <div className="basilica-container">
//             <h1>Basilica of Bom Jesus</h1>
//             <div className="basilica-info">
//                 <p>
//                     The Basilica of Bom Jesus is a UNESCO World Heritage Site located in Goa, India. It is known for housing the mortal remains of St. Francis Xavier.
//                 </p>
//                 <p>
//                     The basilica is a fine example of Baroque architecture and is one of the oldest churches in India. It was constructed in the late 16th century and is a popular pilgrimage site for Catholics from around the world.
//                 </p>
//                 <div className="basilica-images">
//                     <img src={BasilicaImage1} alt="Basilica of Bom Jesus" onClick={() => handleImageClick(BasilicaImage1)} />
//                     <img src={BasilicaImage2} alt="Basilica of Bom Jesus Interior" onClick={() => handleImageClick(BasilicaImage2)} />
//                     <img src={BasilicaImage3} alt="Basilica of Bom Jesus" onClick={() => handleImageClick(BasilicaImage3)} />
//                 </div>
//                 {!showMap && <button onClick={handleViewMap}>View Map</button>}
//                 {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
//             </div>
//             {showFullImage && (
//                 <div className="full-image-overlay" onClick={handleCloseImage}>
//                     <span className="close-button">&times;</span>
//                     <img src={fullImageUrl} alt="Full Basilica of Bom Jesus" className="full-image" />
//                 </div>
//             )}
//         </div>
//     );
// }

// export default BasilicaOfBomJesus;


import React, { useState, useEffect } from 'react';
import './basilica_of_bom_jesus.css';
import BomJesusImage1 from './images/basilica1.jpg';
import BomJesusImage2 from './images/basilica2.jpg';
import BomJesusImage3 from './images/basilica3.jpg';

const BasilicaOfBomJesus = () => {
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
        const bomJesusLocation = { lat: 15.4989, lng: 73.8258 }; // Coordinates for Basilica of Bom Jesus
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: bomJesusLocation,
            zoom: 15
        });
        new window.google.maps.Marker({
            position: bomJesusLocation,
            map: map,
            title: 'Basilica of Bom Jesus'
        });
    };

    return (
        <div className="basilica-of-bom-jesus-container">
            <h1>Basilica of Bom Jesus</h1>
            <div className="basilica-of-bom-jesus-info">
                <p>
                    The Basilica of Bom Jesus is a UNESCO World Heritage Site located in Goa, India. It is a prime example of baroque architecture and is famous for housing the mortal remains of St. Francis Xavier.
                </p>
                <p>
                    The basilica is one of the oldest churches in India and is a major pilgrimage site for Catholics from around the world. It was constructed in the late 16th century and is known for its elegant design and ornate interiors.
                </p>
                <div className="basilica-of-bom-jesus-images">
                    <img src={BomJesusImage1} alt="Basilica of Bom Jesus" onClick={() => handleImageClick(BomJesusImage1)} />
                    <img src={BomJesusImage2} alt="Basilica of Bom Jesus" onClick={() => handleImageClick(BomJesusImage2)} />
                    <img src={BomJesusImage3} alt="Basilica of Bom Jesus" onClick={() => handleImageClick(BomJesusImage3)} />
                </div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Basilica of Bom Jesus" />
                    </div>
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

export default BasilicaOfBomJesus;

// // import React, { useState } from 'react';
// // import './redfort.css';
// // import RedFortImage1 from './images/redfort1.jpg';
// // import RedFortImage2 from './images/redfort2.jpg';
// // import RedFortImage3 from './images/redfort3.jpg';

// // const RedFort = () => {
// //     const [showMap, setShowMap] = useState(false);

// //     const handleViewMap = () => {
// //         setShowMap(true);
// //         loadMapScript();
// //     };

// //     const loadMapScript = () => {
// //         const googleMapScript = document.createElement('script');
// //         googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDqOIJO2ldFaC_4O6gaj4mJ4ViSpPlh4uo&callback=initMap`; // Replace YOUR_API_KEY with your actual Google Maps API key
// //         googleMapScript.async = true;
// //         googleMapScript.defer = true;
// //         window.initMap = initMap;
// //         document.head.appendChild(googleMapScript);
// //     };

// //     const initMap = () => {
// //         const redFortLocation = { lat: 28.6562, lng: 77.2410 }; // Coordinates for Red Fort
// //         const map = new window.google.maps.Map(document.getElementById('map'), {
// //             center: redFortLocation,
// //             zoom: 15
// //         });
// //         new window.google.maps.Marker({
// //             position: redFortLocation,
// //             map: map,
// //             title: 'Red Fort'
// //         });
// //     };

// //     return (
// //         <div className="redfort-container">
// //             <h1>Red Fort</h1>
// //             <div className="redfort-info">
// //                 <p>
// //                     The Red Fort is a historic fort in the city of Delhi in India. It was the main residence of the emperors of the Mughal dynasty for nearly 200 years, until 1857.
// //                 </p>
// //                 <p>
// //                     The fort represents the peak of Mughal architecture and is designated as a UNESCO World Heritage Site. It is known for its architectural brilliance and served as the ceremonial and political center of the Mughal state.
// //                 </p>
// //                 <p>
// //                     Construction of the Red Fort began in 1638 and was completed in 1648. The fort is made of red sandstone and covers an area of about 254 acres, surrounded by a moat. It is famous for its intricate artwork, including marble inlay and carvings.
// //                 </p>
// //                 <p>
// //                     The Red Fort is a symbol of India's rich cultural heritage and attracts millions of visitors from around the world every year. It remains an important historical monument and a testament to the grandeur of the Mughal era.
// //                 </p>
// //                 <div className="redfort-images">
// //                     <img src={RedFortImage1} alt="Red Fort" />
// //                     <img src={RedFortImage2} alt="Red Fort Upperview" />
// //                     <img src={RedFortImage3} alt="Red Fort" />
// //                 </div>
// //                 {!showMap && <button onClick={handleViewMap}>View Map</button>}
// //                 {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
// //             </div>
// //         </div>
// //     );
// // }

// // export default RedFort;


// // RedFort.js
// import React, { useState } from 'react';
// import './redfort.css';
// import RedFortImage1 from './images/redfort1.jpg';
// import RedFortImage2 from './images/redfort2.jpg';
// import RedFortImage3 from './images/redfort3.jpg';

// const RedFort = () => {
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
//         const redFortLocation = { lat: 28.6562, lng: 77.2410 }; // Coordinates for Red Fort
//         const map = new window.google.maps.Map(document.getElementById('map'), {
//             center: redFortLocation,
//             zoom: 15
//         });
//         new window.google.maps.Marker({
//             position: redFortLocation,
//             map: map,
//             title: 'Red Fort'
//         });
//     };

//     return (
//         <div className="redfort-container">
//             <h1>Red Fort</h1>
//             <div className="redfort-info">
//                 <p>
//                     The Red Fort is a historic fort in the city of Delhi in India. It was the main residence of the emperors of the Mughal dynasty for nearly 200 years, until 1857.
//                 </p>
//                 <p>
//                     The fort represents the peak of Mughal architecture and is designated as a UNESCO World Heritage Site. It is known for its architectural brilliance and served as the ceremonial and political center of the Mughal state.
//                 </p>
//                 <p>
//                     Construction of the Red Fort began in 1638 and was completed in 1648. The fort is made of red sandstone and covers an area of about 254 acres, surrounded by a moat. It is famous for its intricate artwork, including marble inlay and carvings.
//                 </p>
//                 <p>
//                     The Red Fort is a symbol of India's rich cultural heritage and attracts millions of visitors from around the world every year. It remains an important historical monument and a testament to the grandeur of the Mughal era.
//                 </p>
//                 <div className="redfort-images">
//                     <img src={RedFortImage1} alt="Red Fort" onClick={() => handleImageClick(RedFortImage1)} />
//                     <img src={RedFortImage2} alt="Red Fort Upperview" onClick={() => handleImageClick(RedFortImage2)} />
//                     <img src={RedFortImage3} alt="Red Fort" onClick={() => handleImageClick(RedFortImage3)} />
//                 </div>
//                 {!showMap && <button onClick={handleViewMap}>View Map</button>}
//                 {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
//             </div>
//             {showFullImage && (
//                 <div className="full-image-overlay" onClick={handleCloseImage}>
//                     <span className="close-button">&times;</span>
//                     <img src={fullImageUrl} alt="Full Red Fort" className="full-image" />
//                 </div>
//             )}
//         </div>
//     );
// }

// export default RedFort;



import React, { useState, useEffect } from 'react';
import './redfort.css';
import RedFortImage1 from './images/redfort1.jpg';
import RedFortImage2 from './images/redfort2.jpg';
import RedFortImage3 from './images/redfort3.jpg';

const RedFort = () => {
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
        const redFortLocation = { lat: 28.6562, lng: 77.2410 };
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: redFortLocation,
            zoom: 15
        });
        new window.google.maps.Marker({
            position: redFortLocation,
            map: map,
            title: 'Red Fort'
        });
    };

    return (
        <div className="redfort-container">
            <h1>Red Fort</h1>
            <div className="redfort-info">
                <p>
                    The Red Fort is a historic fort in the city of Delhi in India. It was the main residence of the emperors of the Mughal dynasty for nearly 200 years, until 1857. It is now a UNESCO World Heritage Site and a popular tourist attraction.
                </p>
                <p>
                    Construction of the Red Fort began in 1638 and was completed in 1648. It is known for its impressive red sandstone architecture and intricate marble decorations. The fort complex includes palaces, museums, and gardens, offering visitors a glimpse into India's rich history.
                </p>
                <div className="redfort-images">
                    <img src={RedFortImage1} alt="Red Fort" onClick={() => handleImageClick(RedFortImage1)} />
                    <img src={RedFortImage2} alt="Red Fort" onClick={() => handleImageClick(RedFortImage2)} />
                    <img src={RedFortImage3} alt="Red Fort" onClick={() => handleImageClick(RedFortImage3)} />
                </div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Red Fort" />
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

export default RedFort;



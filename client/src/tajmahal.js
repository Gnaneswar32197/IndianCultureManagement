// import React, { useState } from 'react';
// import './tajmahal.css';
// import TajMahalimage1 from './images/tajmahal1.jpg';
// import TajMahalimage2 from './images/tajmahal2.jpg';
// import TajMahalimage3 from './images/tajmahal3.jpg';

// const TajMahal = () => {
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
//         googleMapScript.src = https://maps.googleapis.com/maps/api/js?key=AIzaSyDqOIJO2ldFaC_4O6gaj4mJ4ViSpPlh4uo&callback=initMap; // Replace YOUR_API_KEY with your actual Google Maps API key
//         googleMapScript.async = true;
//         googleMapScript.defer = true;
//         window.initMap = initMap;
//         document.head.appendChild(googleMapScript);
//     };

//     const initMap = () => {
//         const tajMahalLocation = { lat: 27.1751, lng: 78.0421 };
//         const map = new window.google.maps.Map(document.getElementById('map'), {
//             center: tajMahalLocation,
//             zoom: 15
//         });
//         new window.google.maps.Marker({
//             position: tajMahalLocation,
//             map: map,
//             title: 'Taj Mahal'
//         });
//     };

//     return (
//         <div className="tajmahal-container">
//             <h1>Taj Mahal</h1>
//             <div className="tajmahal-info">
//                 <p>
//                     The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1631 by the Mughal emperor, Shah Jahan, to house the tomb of his favorite wife, Mumtaz Mahal.
//                 </p>
//                 <p>
//                     The Taj Mahal is widely recognized as "the jewel of Muslim art in India" and remains a symbol of India's rich history and cultural heritage. It attracts millions of visitors from all over the world every year.
//                 </p>
//                 <p>
//                     Construction of the Taj Mahal began in 1632 and was completed in 1653, employing thousands of artisans and craftsmen. The main mausoleum is flanked by four minarets and is set within a large garden with reflecting pools, making it an architectural masterpiece.
//                 </p>
//                 <p>
//                     The Taj Mahal's design incorporates elements from Persian, Islamic, and Indian architectural styles, making it a symbol of the fusion of cultural influences. It is also a UNESCO World Heritage Site and one of the Seven Wonders of the World.
//                 </p>
//                 <div className="tajmahal-images">
//                     <img src={TajMahalimage1} alt="Taj Mahal" onClick={() => handleImageClick(TajMahalimage1)} />
//                     <img src={TajMahalimage2} alt="Taj Mahal Upperview" onClick={() => handleImageClick(TajMahalimage2)} />
//                     <img src={TajMahalimage3} alt="Taj Mahal" onClick={() => handleImageClick(TajMahalimage3)} />
//                 </div>
//                 {!showMap && <button onClick={handleViewMap}>View Map</button>}
//                 {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
//             </div>
//             {showFullImage && (
//                 <div className="full-image-overlay">
//                     <div className="full-image-content">
//                         <span className="close-button" onClick={handleCloseImage}>&times;</span>
//                         <img src={fullImageUrl} alt="Full Taj Mahal" />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default TajMahal;





import React, { useState, useEffect } from 'react';
import './tajmahal.css';
import TajMahalimage1 from './images/tajmahal1.jpg';
import TajMahalimage2 from './images/tajmahal2.jpg';
import TajMahalimage3 from './images/tajmahal3.jpg';

const TajMahal = () => {
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
            alert("Rating numericals Should be between 0 and 5");
    };

    // const handleRatingSubmit = () => {
    //     // Here you would send the rating to the server for storage in the database
    //     // For demonstration, let's just log the rating and clear the text field
    //     console.log('Rating submitted:', rating);
    //     setUserRating(rating);

    //     // Clear the rating text field
    //     setRating('');
    // };
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

    // Function definitions moved above their usage
    const loadMapScript = () => {
        const googleMapScript = document.createElement('script');
        googleMapScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBA2jxZtJo79PHM87dPShu-ZX2BE6RaWzM&callback=initMap'; // Replace YOUR_API_KEY with your actual Google Maps API key
        googleMapScript.async = true;
        googleMapScript.defer = true;
        window.initMap = initMap;
        document.head.appendChild(googleMapScript);
    };

    const initMap = () => {
        const tajMahalLocation = { lat: 27.1751, lng: 78.0421 };
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: tajMahalLocation,
            zoom: 15
        });
        new window.google.maps.Marker({
            position: tajMahalLocation,
            map: map,
            title: 'Taj Mahal'
        });
    };

    return (
        <div className="tajmahal-container">
            <h1>Taj Mahal</h1>
            <div className="tajmahal-info">
                <p>
                    The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1631 by the Mughal emperor, Shah Jahan, to house the tomb of his favorite wife, Mumtaz Mahal.
                </p>
                <p>
                    The Taj Mahal is widely recognized as "the jewel of Muslim art in India" and remains a symbol of India's rich history and cultural heritage. It attracts millions of visitors from all over the world every year.
                </p>
                <p>
                    Construction of the Taj Mahal began in 1632 and was completed in 1653, employing thousands of artisans and craftsmen. The main mausoleum is flanked by four minarets and is set within a large garden with reflecting pools, making it an architectural masterpiece.
                </p>
                <p>
                    The Taj Mahal's design incorporates elements from Persian, Islamic, and Indian architectural styles, making it a symbol of the fusion of cultural influences. It is also a UNESCO World Heritage Site and one of the Seven Wonders of the World.
                </p>
                <div className="tajmahal-images">
                    <img src={TajMahalimage1} alt="Taj Mahal" onClick={() => handleImageClick(TajMahalimage1)} />
                    <img src={TajMahalimage2} alt="Taj Mahal Upperview" onClick={() => handleImageClick(TajMahalimage2)} />
                    <img src={TajMahalimage3} alt="Taj Mahal" onClick={() => handleImageClick(TajMahalimage3)} />
                </div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Taj Mahal" />
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

export default TajMahal;







// import React, { useState } from 'react';
// import './tajmahal.css';
// import TajMahalimage1 from './images/tajmahal1.jpg';
// import TajMahalimage2 from './images/tajmahal2.jpg';
// import TajMahalimage3 from './images/tajmahal3.jpg';

// const TajMahal = () => {
//     const [showMap, setShowMap] = useState(false);
//     const [showFullImage, setShowFullImage] = useState(false);
//     const [fullImageUrl, setFullImageUrl] = useState('');
//     const [review, setReview] = useState('');
//     const [rating, setRating] = useState(0);

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

//     const handleReviewSubmit = (event) => {
//         event.preventDefault();
//         // You can handle the submission of review and rating here.
//         console.log("Submitted Review:", review);
//         console.log("Submitted Rating:", rating);
//         // You can add logic here to send the review and rating data to your backend or store it locally.
//     };

//     const loadMapScript = () => {
//         const googleMapScript = document.createElement('script');
//         googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBA2jxZtJo79PHM87dPShu-ZX2BE6RaWzM=initMap`; // Replace YOUR_API_KEY with your actual Google Maps API key
//         googleMapScript.async = true;
//         googleMapScript.defer = true;
//         window.initMap = initMap;
//         document.head.appendChild(googleMapScript);
//     };

//     const initMap = () => {
//         const tajMahalLocation = { lat: 27.1751, lng: 78.0421 };
//         const map = new window.google.maps.Map(document.getElementById('map'), {
//             center: tajMahalLocation,
//             zoom: 15
//         });
//         new window.google.maps.Marker({
//             position: tajMahalLocation,
//             map: map,
//             title: 'Taj Mahal'
//         });
//     };

//     return (
//         <div className="tajmahal-container">
//             <h1>Taj Mahal</h1>
//             <div className="tajmahal-info">
//                 <p>
//                     The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1631 by the Mughal emperor, Shah Jahan, to house the tomb of his favorite wife, Mumtaz Mahal.
//                 </p>
//                 <p>
//                     The Taj Mahal is widely recognized as "the jewel of Muslim art in India" and remains a symbol of India's rich history and cultural heritage. It attracts millions of visitors from all over the world every year.
//                 </p>
//                 <p>
//                     Construction of the Taj Mahal began in 1632 and was completed in 1653, employing thousands of artisans and craftsmen. The main mausoleum is flanked by four minarets and is set within a large garden with reflecting pools, making it an architectural masterpiece.
//                 </p>
//                 <p>
//                     The Taj Mahal's design incorporates elements from Persian, Islamic, and Indian architectural styles, making it a symbol of the fusion of cultural influences. It is also a UNESCO World Heritage Site and one of the Seven Wonders of the World.
//                 </p>
//                 <div className="tajmahal-images">
//                     <img src={TajMahalimage1} alt="Taj Mahal" onClick={() => handleImageClick(TajMahalimage1)} />
//                     <img src={TajMahalimage2} alt="Taj Mahal Upperview" onClick={() => handleImageClick(TajMahalimage2)} />
//                     <img src={TajMahalimage3} alt="Taj Mahal" onClick={() => handleImageClick(TajMahalimage3)} />
//                 </div>
//                 {!showMap && <button onClick={handleViewMap}>View Map</button>}
//                 {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
//             </div>
//             <div className="review-section">
//                 <h2>Leave a Review</h2>
//                 <form onSubmit={handleReviewSubmit}>
//                     <textarea
//                         value={review}
//                         onChange={(e) => setReview(e.target.value)}
//                         placeholder="Enter your review..."
//                         rows="4"
//                         cols="50"
//                     />
//                     <label>
//                         Rating:
//                         <input
//                             type="number"
//                             value={rating}
//                             onChange={(e) => setRating(parseInt(e.target.value))}
//                             min="1"
//                             max="5"
//                         />
//                     </label>
//                     <button type="submit">Submit Review</button>
//                 </form>
//             </div>
//             {showFullImage && (
//                 <div className="full-image-overlay">
//                     <div className="full-image-content">
//                         <span className="close-button" onClick={handleCloseImage}>&times;</span>
//                         <img src={fullImageUrl} alt="Full Taj Mahal" />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default TajMahal;

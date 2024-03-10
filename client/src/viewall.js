import React, { useEffect } from 'react';
import './viewall.css';

const ViewAll = () => {
    useEffect(() => {
        const loadMapScript = () => {
            const googleMapScript = document.createElement('script');
            googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBA2jxZtJo79PHM87dPShu-ZX2BE6RaWzM&callback=initMap`; // Replace YOUR_API_KEY with your actual Google Maps API key
            googleMapScript.async = true;
            googleMapScript.defer = true;
            window.initMap = initMap;
            document.head.appendChild(googleMapScript);
        };

        const initMap = () => {
            const monuments = [
                { name: "Taj Mahal", location: { lat: 27.1751, lng: 78.0421 } },
                { name: "Agra Fort", location: { lat: 27.1797, lng: 78.0217 } },
                { name: "Fatehpur Sikri Fort", location: { lat: 27.0941, lng: 77.6682 } },
                { name: "Qutub Minar", location: { lat: 28.5245, lng: 77.1855 } },
                { name: "Jama Masjid", location: { lat: 28.6507, lng: 77.2334 } },
                { name: "Red Fort", location: { lat: 28.6562, lng: 77.2410 } },
                { name: "Lotus Temple", location: { lat: 28.5535, lng: 77.2588 } },
                { name: "India Gate", location: { lat: 28.6129, lng: 77.2295 } },
                { name: "Humayun’s Tomb", location: { lat: 28.5933, lng: 77.2507 } },
                { name: "Golden Temple", location: { lat: 31.6200, lng: 74.8765 } },
                { name: "Amer Fort", location: { lat: 26.9855, lng: 75.8513 } },
                { name: "Jaisalmer Fort", location: { lat: 26.9124, lng: 70.9132 } },
                { name: "City Palace", location: { lat: 24.5766, lng: 73.6791 } },
                { name: "Hawa Mahal", location: { lat: 26.9239, lng: 75.8267 } },
                { name: "Khajuraho Group of Monuments", location: { lat: 24.8392, lng: 79.9248 } },
                { name: "Gateway of India", location: { lat: 18.9220, lng: 72.8347 } },
                { name: "Charminar", location: { lat: 17.3616, lng: 78.4747 } },
                { name: "Group of Monuments, Hampi", location: { lat: 15.3350, lng: 76.4600 } },
                { name: "Brihadishwara Temple", location: { lat: 10.7828, lng: 79.1310 } },
                { name: "Mysore Palace", location: { lat: 12.3051, lng: 76.6551 } },
                { name: "Sun Temple", location: { lat: 19.8876, lng: 86.0920 } },
                { name: "Sanchi Stupa", location: { lat: 23.4821, lng: 77.7381 } },
                { name: "Victoria Memorial", location: { lat: 22.5448, lng: 88.3426 } },
                { name: "Ajanta and Ellora Caves", location: { lat: 20.5511, lng: 75.7011 } },
                { name: "Basilica of Bom Jesus", location: { lat: 15.4989, lng: 73.8278 } }
            ];

            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: 20.5937, lng: 78.9629 }, // Centered at India
                zoom: 5 // Default zoom level
            });

            monuments.forEach(monument => {
                new window.google.maps.Marker({
                    position: monument.location,
                    map: map,
                    title: monument.name
                });
            });
        };

        loadMapScript();

        // Clean up function to remove the script after component unmounts
        return () => {
            const script = document.querySelector('script[src^="https://maps.googleapis.com"]');
            if (script) {
                script.remove();
            }
            delete window.initMap;
        };
    }, []);

    return (
        <div className="view-all-container">
            <h1>Monuments</h1>
            <div id="map" className="map"></div>
        </div>
    );
};

export default ViewAll;

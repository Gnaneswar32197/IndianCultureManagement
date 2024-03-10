import React from 'react';
import './Ramzan.css'; // Make sure to create and import Ramzan.css
import ramzanImage1 from './images/ramzan1.jpg'; // Import your first Ramzan image
import ramzanImage2 from './images/ramzan2.jpg'; // Import your second Ramzan image

class Ramzan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0,
            images: [ramzanImage1, ramzanImage2], // Array of Ramzan images
            showBackground: true // Initially show the Ramzan background
        };
    }

    componentDidMount() {
        this.imageInterval = setInterval(() => {
            this.setState(prevState => ({
                currentImageIndex: (prevState.currentImageIndex + 1) % prevState.images.length
            }));
        }, 1000); // Change image every 3 seconds (adjust as needed)

        // Set timeout to remove background after 5 seconds
    }

    componentWillUnmount() {
        clearInterval(this.imageInterval);
    }

    render() {
        return (
            <div className='ramzan-container'>
                <h1 className='ramzan-header'>Welcome to the Ramzan Page</h1>
                <div className='ramzan-content'>
                    <p>
                        Ramadan, also known as Ramzan, is the ninth month of the Islamic calendar and is observed by Muslims worldwide as a month of fasting, prayer, reflection, and community. It is believed to be the month in which the Quran, the holy book of Islam, was first revealed to the Prophet Muhammad. During Ramadan, Muslims fast from dawn until sunset, refraining from food, drink, smoking, and other physical needs as a form of spiritual discipline. Fasting during Ramadan is one of the Five Pillars of Islam and is obligatory for all adult Muslims, with exceptions for those who are ill, pregnant, nursing, traveling, or menstruating.
                    </p>
                    <img src={this.state.images[this.state.currentImageIndex]} alt="Ramzan Celebration" className="ramzan-image" />
                    <p>
                        Ramadan is not just about abstaining from food and drink; it is also a time for spiritual reflection, self-discipline, and acts of charity and kindness. Muslims use this month to strengthen their relationship with Allah, seek forgiveness for past sins, and purify their hearts and souls. The fast is broken each evening with a meal called iftar, often beginning with dates and water, followed by a larger feast with family and friends. Ramadan is a time of heightened devotion, community spirit, and solidarity with the less fortunate, as Muslims are encouraged to give generously to those in need and perform good deeds throughout the month.
                    </p>
                </div>
            </div>
        );
    }
}

export default Ramzan;

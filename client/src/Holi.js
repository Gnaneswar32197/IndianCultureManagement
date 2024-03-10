import React from 'react';
import './Holi.css'; // Make sure to create and import Holi.css
import holiImage1 from './images/holi1.jpg'; // Import your first Holi image
import holiImage2 from './images/holi2.jpg'; // Import your second Holi image


class Holi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0,
            images: [holiImage1, holiImage2], // Array of Holi images
            showBackground: true // Initially show the Holi background
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
            <div className='holi-container'>
                <h1 className='holi-header'>Welcome to the Holi Page</h1>
                <div className='holi-content'>
                    <p>
                        Holi, also known as the Festival of Colors, is a vibrant and joyous celebration in India. It marks the arrival of spring and the triumph of good over evil. During Holi, people come together to play with colors, drench each other with water, and enjoy festive foods and sweets. It is a time of fun, frolic, and camaraderie, as friends and families gather to celebrate the onset of a new season. The festival also holds cultural and religious significance, with various rituals and traditions observed across different regions of the country. Holi is a time to let go of inhibitions, forgive past grievances, and embrace the spirit of love and unity.
                    </p>
                    <img src={this.state.images[this.state.currentImageIndex]} alt="Holi Celebration" className="holi-image" />
                    <p>
                        Holi is not just about colors; it is also a time for renewal and rejuvenation. The festival encourages individuals to leave behind the darkness of winter and embrace the vibrancy of spring. It is a time to sow seeds of hope and happiness, to let go of negativity and embrace positivity. Holi transcends barriers of caste, creed, and religion, bringing people together in a colorful tapestry of unity and diversity. It is a celebration of life, of laughter, and of the bonds that tie us together as one human family. As the colors fly and the music plays, Holi reminds us to cherish the simple joys of life and to spread love and happiness wherever we go.
                    </p>
                </div>
            </div>
        );
    }
}

export default Holi;

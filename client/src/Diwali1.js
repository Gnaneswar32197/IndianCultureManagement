import React from 'react';
import './Diwali.css';
import diwaliImage1 from './images/diwali1.jpg';
import diwaliImage2 from './images/diwali2.jpg'; // Import your second image
// import fireworksBackground from './videos/diwaligif.gif';

class Diwali extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0,
            images: [diwaliImage1, diwaliImage2] // Array of images
        };
    }


    componentDidMount() {
        this.imageInterval = setInterval(() => {
            this.setState(prevState => ({
                currentImageIndex: (prevState.currentImageIndex + 1) % prevState.images.length
            }));
        }, 1000); // Change image every 3 seconds (adjust as needed)

        // Set timeout to remove background after 5 seconds
        // setTimeout(() => {
        //     this.setState({ showBackground: false });
        // }, 5000);
    }


    componentWillUnmount() {
        clearInterval(this.imageInterval);
    }

    render() {
        return (
            <div className='diwali-container'>
                <h1 className='diwali-header'>Welcome to the Diwali Page</h1>
                {/* <div className='diwali-content' style={{ backgroundImage: `url(${fireworksBackground})` }}> */}
                 <div className='diwali-content'>
                    <p>
                        Diwali, also known as the Festival of Lights, is one of the most widely celebrated festivals in India and across the world. It symbolizes the victory of light over darkness and good over evil. During Diwali, people illuminate their homes with oil lamps, candles, and colorful lights, creating a mesmerizing atmosphere. Families come together to exchange gifts, share sweets, and offer prayers to goddess Lakshmi, the deity of wealth and prosperity. The festival also marks the return of Lord Rama to his kingdom after defeating the demon king Ravana, as depicted in the epic Ramayana. Fireworks light up the night sky, adding to the festive spirit and joyous celebrations. Diwali transcends religious and cultural boundaries, uniting people in the spirit of happiness, harmony, and hope for a brighter future.
                    </p>
                    <img src={this.state.images[this.state.currentImageIndex]} alt="Diwali Celebration" className="diwali-image" />
                    <p>
                    Diwali is not only a time for festivities but also a period of renewal and reflection. It encourages individuals to cleanse their homes and hearts, rid themselves of negativity, and embrace positivity and goodwill towards all. Beyond its religious significance, Diwali holds cultural importance, serving as a time for family reunions, renewing friendships, and strengthening bonds within communities. The exchange of gifts and sweets symbolizes goodwill and prosperity, while the lighting of lamps signifies the dispelling of ignorance and the pursuit of knowledge. Additionally, Diwali serves as an occasion for charitable acts, with many individuals extending a helping hand to those in need, embodying the spirit of compassion and generosity. Ultimately, Diwali stands as a beacon of hope, inspiring people to strive for a brighter future filled with peace, prosperity, and unity.
                    </p>
                </div>
            </div>
        );
    }
}

export default Diwali;

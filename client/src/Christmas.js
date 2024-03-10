import React from 'react';
import './Christmas.css'; // Make sure to create and import Christmas.css
import christmasImage1 from './images/christmas1.jpg'; // Import your first Christmas image
import christmasImage2 from './images/christmas2.jpg'; // Import your second Christmas image

class Christmas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0,
            images: [christmasImage1, christmasImage2], // Array of Christmas images
            showBackground: true // Initially show the Christmas background
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
            <div className='christmas-container'>
                <h1 className='christmas-header'>Welcome to the Christmas Page</h1>
                <div className='christmas-content'>
                    <p>
                        Christmas is a widely celebrated holiday that commemorates the birth of Jesus Christ, observed primarily on December 25 as a religious and cultural celebration among billions of people around the world. It is a time of joy, giving, and gathering with loved ones. During Christmas, people decorate their homes with lights, trees, and ornaments, exchange gifts, and share meals together. The holiday is marked by various traditions, including attending church services, singing carols, and participating in nativity plays. Santa Claus, also known as Father Christmas, is a central figure in many Christmas celebrations, delivering gifts to children around the world.
                    </p>
                    <img src={this.state.images[this.state.currentImageIndex]} alt="Christmas Celebration" className="christmas-image" />
                    <p>
                        Christmas is a time of hope and renewal, symbolizing the promise of peace and goodwill to all. It is a time to reflect on the blessings of the past year and look forward to the opportunities of the year ahead. The holiday brings people together in a spirit of generosity and kindness, reminding us of the importance of compassion and community. Whether celebrating with family, friends, or strangers, Christmas is a time to spread love and joy to those around us, embodying the true meaning of the season.
                    </p>
                </div>
            </div>
        );
    }
}

export default Christmas;

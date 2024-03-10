// import React from 'react';
// import { getSession } from './main';
// import Axios from 'axios';
// import './Myprofile.css'

// class MyProfile extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             firstname: "",
//             lastname: "",
//             contactno: "",
//             emailid: ""
//         };
//     }

//     componentDidMount() {
//         this.fetchProfileInfo();
//     }

//     fetchProfileInfo() {
//         const url = "http://localhost:5000/home/profile";
//         const sid = getSession("sid");
        
//         Axios.post(url, { emailid: sid })
//             .then(res => {
//                 const data = res.data;
//                 this.setState({
//                     firstname: data.firstname,
//                     lastname: data.lastname,
//                     contactno: data.contactno,
//                     emailid: data.emailid
//                 });
//             })
//             .catch(error => {
//                 console.error("Error fetching profile info:", error);
//                 // Handle error, maybe display a message to the user
//             });
//     }

//     render() {
//         return (
//             <div className='profile-container'>
//                 <h3>User Profile</h3>
//                 <table className='profile-table'>
//                     <tbody>
//                         <tr>
//                             <td className='profile-label'>First Name</td>
//                             <td className='profile-value'>{this.state.firstname}</td>
//                         </tr>
//                         <tr>
//                             <td className='profile-label'>Last Name</td>
//                             <td className='profile-value'>{this.state.lastname}</td>
//                         </tr>
//                         <tr>
//                             <td className='profile-label'>Contact No.</td>
//                             <td className='profile-value'>{this.state.contactno}</td>
//                         </tr>
//                         <tr>
//                             <td className='profile-label'>Email Id</td>
//                             <td className='profile-value'>{this.state.emailid}</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }

// export default MyProfile;
import React from 'react';
import { getSession } from './main';
import Axios from 'axios';
import './Myprofile.css'

class MyProfile extends React.Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            lastname: "",
            contactno: "",
            emailid: ""
        };
    }

    componentDidMount() {
        this.fetchProfileInfo();
    }

    fetchProfileInfo() {
        const url = "http://localhost:5000/home/profile";
        const sid = getSession("sid");
        
        Axios.post(url, { emailid: sid })
            .then(res => {
                const data = res.data;
                this.setState({
                    firstname: data.firstname,
                    lastname: data.lastname,
                    contactno: data.contactno,
                    emailid: data.emailid
                });
            })
            .catch(error => {
                console.error("Error fetching profile info:", error);
                // Handle error, maybe display a message to the user
            });
    }

    render() {
        return (
            <div className='profile-container'>
                <h3 className='profile-heading'>User Profile</h3>
                <div className="table-responsive">
                    <table className='profile-table'>
                        <tbody>
                            <tr>
                                <td className='profile-label'>First Name</td>
                                <td className='profile-value'>{this.state.firstname}</td>
                            </tr>
                            <tr>
                                <td className='profile-label'>Last Name</td>
                                <td className='profile-value'>{this.state.lastname}</td>
                            </tr>
                            <tr>
                                <td className='profile-label'>Contact No.</td>
                                <td className='profile-value'>{this.state.contactno}</td>
                            </tr>
                            <tr>
                                <td className='profile-label'>Email Id</td>
                                <td className='profile-value'>{this.state.emailid}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default MyProfile;

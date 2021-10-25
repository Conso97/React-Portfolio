import React, { Component } from 'react';
// import profilepic from '../img/naafi_photo.png';
import Footer from '../components/Footer';

class About extends Component {
    render() {
        return (
        <div className="condiv about">
            {/* <img src={profilepic} className="profilepic"></img> */}
            <p>
                I am a rising star in the coding world, originally from Kenya, born and raised. 
            I have been in the seattle area for the past 8 years, my hobbies include; hiking, investing, meditating 
            and interior designing. What I appreciate most about the northwest is the architectural landmark.

            I graduated from the University of Washington with a bachelors degree in Law, Economics and Public 
            Policy in 2018. I currently work in the aerospace industry as, a logistics specialist at the Boeing 
            company in Mukilteo. My interest in coding emerged from a series of experiences while 
            connecting and interacting with friends who are developers in different tech industries.
            </p>
        </div>
    )
    }
}
export default About
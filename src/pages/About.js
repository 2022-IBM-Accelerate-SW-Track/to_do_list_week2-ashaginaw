import React, { Component } from 'react';
import "./About.css";
import profilepicture_shaginaw from "../assets/profilepicture_shaginaw.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <p> <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src={profilepicture_shaginaw}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Amanda Shaginaw</div>
        <div className="brief_description">
          Hello! I am currently studying Computer Science at Duquesne University. I am also a Service Desk Analyst III, assisting with behind-the-scene applications and student/staff permissions. One day I hope to work at IBM working with Artificial Intelligence. A fun fact: I am internationally ranked for speedrunning Pokemon: The Trading Card Game (currently 61st)!
        </div>
      </div>
    </div>
  </div> </p> 
      </div>
    )
  }
}
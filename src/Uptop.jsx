import React, { Component } from 'react';
class Uptop extends Component {
  
  render() { 
    return (
      <div className='introContent'>
      		<div className='title'>

              <a href="https://liveuptop.com/" target="_blank">
              <img className='uptopImg' src="https://liveuptop.com/img/icons/full-logo.png" role="presentation" title="UpTop"/></a>
              <div className='sub-title'>
              Front-End Engineering
            </div>
          </div>
      		<div className="scrollableContent">
            <div className='blurb'>
            <div className="icn">
            Technical Skills Acquired: 
            <br/>
              <img className="icns" src="http://anneslin.com/img/logos/icon-typescript.png" role="presentation" title="TypeScript"/>
              <img className="icns" src="http://anneslin.com/img/logos/icon-react.png" role="presentation" title="React"/>
              <img className="icns" src="http://anneslin.com/img/logos/icon-redux.png" role="presentation" title="Redux"/>
              <img className="icns" src="http://anneslin.com/img/logos/icon-bootstrap.png" role="presentation" title="Bootstrap"/>
              <img className="icns" src="http://anneslin.com/img/logos/icon-less.png" role="presentation" title="Less"/>
              <br/>
              <br/>
            </div>
            <br/>
            <div>
            I packed myself up after college and moved to Manhattan, NY to begin my software journey, first as an front-end engineer intern at the real estate startup UPTOP. I then became a full-time junior engineer after three months.
            <br/><br/>
            Using the combination of typescript, react, and redux, the project I was mainly assigned to was creating from scratch the responsive <a href="https://manage.liveuptop.com/" target="_blank">website that landlords</a> are now using, which includes over 15 views and over 20 modals.
            Communicated effectively with the product manager and product designer to ensure views were built out as intented with proper integration of features.
            Created standard variables to be used across our landlord and renter websites.
            Intercom and Mixpanel were also integrated to allow communication with and tracking of users.
            I had the opportunity to participate in onboarding landlords by noting user interactions with the web application, bugs, and feature requests,
            which of course helped personally as a developer understand the audience I'm buidling for, and I evidently would apply to conversations with the product manager and product designer and to how I developed.
            Eventually, I began to take on more of a full-stack role after given permission to perform back-end tasks. 
            <br/><br/>
          
            <br/><br/><br/><br/>
            </div>
              </div>


      		</div>
      </div>
    );
  }
}

export default Uptop;

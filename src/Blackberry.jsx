import React, { Component } from 'react';
import "./Blackberry.css"
class Blackberry extends Component {
  
  render() { 
    return (
      <div className='introContent'>
      		<div className='title'>
	      		<div className='title1'>
	      			<a href="http://us.blackberry.com/home.html" target="_blank">
	      			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Blackberry_Logo.svg/500px-Blackberry_Logo.svg.png" role="presentation" title="BlackBerry"/></a>
	      		</div>
	      		<div className='sub-title'>
	      		software development intern
	      		</div>
      		</div>
      		<div className="scrollableContent">
	      		<div className='blurb'>
					<div className="icn">
					Technical Skills Acquired: 
					<br/>
						<img className="icns" src="http://anneslin.com/img/logos/icon-react.png" role="presentation" title="React"/>
						<img className="icns" src="http://anneslin.com/img/logos/icon-bootstrap.png" role="presentation" title="Bootstrap"/>
						<img className="icns jira" src="http://anneslin.com/img/logos/icon-jira1.png" role="presentation" title="JIRA"/>
						<img className="icns" src="http://anneslin.com/img/logos/icon-meteor.png" role="presentation" title="Meteor"/>
						<br/>
						<br/>
					</div>
					<br/>
					<div>
					I spent my summer of 2016 in BlackBerry’s new office in San Mateo, on the first floor of the building in which the recently-acquired company Athoc resided.
		      		<br/><br/>
		      		I worked under a team that was building an enterprise collaboration tool that included an array of functionalities made to make communicating and organizing flow more easily, all in one place. Although I cannot speak more on the whole project, I can talk a little about what I worked on. I was given my own component to build, which was a feedback feature where users are able to send feedback that will go through <a href="https://www.atlassian.com/software/jira" target="_blank">JIRA</a>. This was built with React-Bootstrap, made Meteor calls, and communicated with the JIRA API. The JIRA item would consist of collected data such as information about the user, the browser, and the current page. Some attributes of this feature include the ability to submit anonymously, having the feedback be posted on a specific channel, and the option to withhold data being sent back to JIRA.
		      		<br/><br/>
		      		I wrote unit and integration tests with <a href="https://github.com/airbnb/enzyme" target="_blank">Enzyme</a>, Chai, and Sinon for both client and server sides.
		      		<br/>
					This feature was used immediately by all sub-teams of this project and is to be incorporated into the product’s deployment.
					<br/><br/><br/><br/><br/><br/>
					</div>
	      		</div>

      		</div>
      </div>
    );
  }
}

export default Blackberry;

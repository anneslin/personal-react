import React, { Component } from 'react';
import "./Blackberry.css"
class Blackberry extends Component {
  
  render() { 
    return (
      <div className='introContent'>
      		<div className='title'>
	      		<div className='title1'>
	      			<a href="http://us.blackberry.com/home.html" target="_blank">
	      			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Blackberry_Logo.svg/500px-Blackberry_Logo.svg.png" role="presentation" /></a>
	      		</div>
	      		<br/>
      		</div>
      		<div className="scrollableContent">
	      		<div className='blurb2'>
	      		coming soon
	      		</div>

      		</div>
      </div>
    );
  }
}

export default Blackberry;

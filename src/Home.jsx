import React, { Component } from 'react'
import "./Home.css"
class Home extends Component {
  
  render() { 
    return (
      <div className="homeContainer">
        <div className="about"> 
          Newly graduated from the University of California, Berkeley: 
          majored in Applied Mathematics, major cocentration and minored in Computer Science.
          <br/>
          <a href="http://anneslin.com/files/resume.pdf" download>résumé</a> 
          <br/>
          <div className="icons">

            <a href="https://github.com/anneslin" target="_blank"><i className="fa fa-github linked"/></a>
            <a href="https://www.linkedin.com/in/anneslin/" target="_blank"><i className="fa fa-linkedin linked"/></a>
            <a href="http://www.instagram.com/lumohn/" target="_blank"><i className="fa fa-instagram linked"/></a>
            <a href="mailto:anne.lin@berkeley.edu" target="_top"><i className="fa fa-envelope-o linked"/></a>
          </div>
          <div className="mobile">
          
          <br/>
          View full page on desktop.
          </div>
        </div>
        <div className="photoCredits">
        </div>
      </div>
    );
  }
}

export default Home;

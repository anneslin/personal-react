import React, { Component } from 'react'
import "./Home.css"
class Home extends Component {
  
  render() { 
    return (
      <div className="homeContainer">
        <div className="about"> 
          Currently a fourth year student at the University of California, Berkeley: 
          majoring in Applied Mathematics, minoring in Computer Science, 
          with a heavy concentration on the latter.
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
        <div className="photoCredits"><i className="fa fa-camera-retro"/> photo by
          <a href="http://www.instagram.com/peerphan/" target="_blank"> Peter Phan</a>
        </div>
      </div>
    );
  }
}

export default Home;

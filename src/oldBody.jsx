import React, { Component } from 'react';
import "./oldBody.css"
import ImageSet from './oldImageSet'


class Body extends Component {

  render() { 
    // photographers //
  	var ankur = {name : "Ankur Maniar", site : "http://www.encoreankur.com/"}
    var seb = {name : "Sebastian Ospina", site : "https://www.instagram.com/sebospina/"}
    var charley = {name : "Charley Huang", site : "https://www.instagram.com/charleandoer/"}
    return (
      <div className='introContent'>
      		<div className='title'>
      			The Body
      		</div>
      		<div className="scrollableContent">
	      		<div className='blurb'>
	      		During my college years, I found making fine art to be harder because, unfortunately, other things superceded it in priority-painting, which was my main vocation, required too much time, space, and focus, all of which were funneled into furthing my academics and developing my career path. Consequently, I found a new hobby that fitted snuggly into my schedule, and allowed me to excerise a novel collaborative art form with the medium being my own physical self. However, I personally never felt comfortable calling what I did 'modeling' because the word to me had always held a professional context. So I have been describing it to be more of an artistic expression through the means of my own body...<br/><br/>...but I suppose that is the essence of modeling. <br/><br/>
            </div>

        </div>
      	
      </div>
    
  );}
}

export default Body;

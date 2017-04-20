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
            <div className="photoList">
            <ImageSet imgList={[require("./img/body/cold1.jpg"), require("./img/body/cold2.jpg"), require("./img/body/cold3.jpg"), require("./img/body/cold4.jpg")]} photographer={charley}/>

	      		<ImageSet imgList={[require("./img/body/rosehips1.jpg"), require("./img/body/rosehips2.jpg"), require("./img/body/rosehips3.jpg"), require("./img/body/rosehips4.jpg")]} photographer={ankur} setSite={'http://www.encoreankur.com/blog/2016/8/19/rosehips'}/>

	      	  <ImageSet imgList={[require("./img/body/sebfilm1.jpg"), require("./img/body/sebfilm2.jpg")]} photographer={seb}/>

	      		<ImageSet imgList={[require("./img/body/rooftops1.jpg"), require("./img/body/rooftops2.jpg"), require("./img/body/rooftops3.jpg"), require("./img/body/rooftops4.jpg")]} photographer={ankur} setSite={'http://www.encoreankur.com/blog/2016/6/13/rooftops'}/>

	      		<ImageSet imgList={[require("./img/body/alchemy1.jpg"), require("./img/body/alchemy2.jpg"), require("./img/body/alchemy3.jpg"), require("./img/body/alchemy4.jpg")]} photographer={ankur} setSite={'http://www.encoreankur.com/blog/2016/4/19/alchemy'}/>
	      		

	      		<ImageSet imgList={[require("./img/body/bloom1.jpg"), require("./img/body/bloom2.jpg"), require("./img/body/bloom3.jpg"), require("./img/body/bloom4.jpg")]}photographer={ankur} setSite={'http://www.encoreankur.com/blog/2016/4/22/bloom'}/>

	      		<ImageSet imgList={[require("./img/body/fugitive1.jpg"), require("./img/body/fugitive2.jpg"), require("./img/body/fugitive3.jpg"), require("./img/body/fugitive4.jpg")]}photographer={ankur} setSite={'http://www.encoreankur.com/blog/2016/3/7/fugitive'}/>
            </div>
        </div>
      	
      </div>
    
  );}
}

export default Body;

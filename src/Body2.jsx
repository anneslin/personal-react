import React, { Component } from 'react';
import "./Body2.css"
import ImageSet2 from './ImageSet2'


class Body extends Component {

  render() { 
    // photographers //
  	var ankur = {name : "Ankur Maniar", site : "http://www.encoreankur.com/"}
    var wes = {name : "Wes Ruan", site : "https://www.instagram.com/purshoot/"}

    return (
      <div className='introContentPhoto'>
          <div className='photoSet'>
            <div className="contentBlock spacer"/>
            
            <div className="contentBlock intro">
              <div className='textContainer'>

            		<div className='titlePhoto'>
            			The Body
            		</div>
                <div className='blurb'>
                  During my college years, I found making fine art to be harder because, unfortunately, other things superceded it in priority; painting, which was my main vocation, required too much time, space, and focus, all of which were funneled into furthing my academics and developing my career path. Consequently, I found a new hobby that fitted snuggly into my schedule, and allowed me to excerise a novel collaborative art form with the medium being my own physical self. However, I personally never felt comfortable calling what I did 'modeling' because the word to me had always held a professional context. So I have been describing it to be more of an artistic expression through the means of my own body...<br/><br/>...but I suppose that is the essence of modeling. <br/><br/>
                </div>
              </div>
	      	  </div>
          </div>

          <ImageSet2 imgList={[require("./img/body/nyfw1.jpg")]} photographer={ankur} bottomBar={false}/>

          <ImageSet2 imgList={[require("./img/body/poolside1.jpg")]} photographer={wes} bottomBar={false}/>

          <ImageSet2 imgList={[require("./img/body/eyes1.jpg"), require("./img/body/cabo1.jpg"), require("./img/body/cabo2.jpg")]} photographer={ankur} bottomBar={false}/>

          <ImageSet2 imgList={[require("./img/body/wind1.jpg"), require("./img/body/wind2.jpg")]} photographer={ankur} setSite={'http://www.encoreankur.com/blog/2017/1/9/eye-of-the-storm'} bottomBar={false}/>

          <ImageSet2 imgList={[require("./img/body/rosehips3.jpg"), require("./img/body/rosehips4.jpg")]} photographer={ankur} setSite={'http://www.encoreankur.com/blog/2016/8/19/rosehips'} bottomBar={false}/>

          <ImageSet2 imgList={[require("./img/body/rooftops3.jpg"), require("./img/body/rooftops4.jpg")]} photographer={ankur} setSite={'http://www.encoreankur.com/blog/2016/6/13/rooftops'} bottomBar={false}/>

          <ImageSet2 imgList={[require("./img/body/alchemy2.jpg"), require("./img/body/alchemy3.jpg"), require("./img/body/alchemy4.jpg")]} photographer={ankur} setSite={'http://www.encoreankur.com/blog/2016/4/19/alchemy'} bottomBar={false}/>
          
          <ImageSet2 imgList={[require("./img/body/bloom2.jpg"), require("./img/body/bloom4.jpg")]}photographer={ankur} setSite={'http://www.encoreankur.com/blog/2016/4/22/bloom'} bottomBar={false}/>

          <ImageSet2 imgList={[require("./img/body/fugitive1.jpg"), require("./img/body/fugitive2.jpg")]}photographer={ankur} setSite={'http://www.encoreankur.com/blog/2016/3/7/fugitive'} bottomBar={false}/>
      </div>
    
  );}
}

export default Body;

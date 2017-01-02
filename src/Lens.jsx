import React, { Component } from 'react';
import ImageSet from './ImageSet'

class Lens extends Component {
  
  render() { 
    return (
      <div className='introContent'>
      		<div className='title'>
      		The Lens
      		</div>
      		<div className="scrollableContent">
	      		<div className='blurb1'>
	      		coming soon
            <br/><br/>
	      		</div>
            <div className="photoList">
          {/* 
            <ImageSet imgList={[require("./img/lens/1.gif"), require("./img/lens/3.gif"), require("./img/lens/4.jpg"), require("./img/lens/5.gif"), require("./img/lens/6.jpg"), require("./img/lens/7.gif"), require("./img/lens/8.gif"), require("./img/lens/9.jpg"), require("./img/lens/10.jpg"), require("./img/lens/11.jpg"), require("./img/lens/12.jpg")]}/>
            */}
            </div>
      		</div>
      </div>
    );
  }
}

export default Lens;


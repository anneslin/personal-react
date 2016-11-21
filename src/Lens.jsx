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
	      		<div className='blurb'>
	      		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br/><br/>
	      		</div>
            <ImageSet imgList={[require("./img/lens/1.jpg"), require("./img/lens/2.jpg"), require("./img/lens/3.jpg"), require("./img/lens/4.jpg"), require("./img/lens/5.jpg"), require("./img/lens/6.jpg"), require("./img/lens/7.jpg"), require("./img/lens/8.jpg"), require("./img/lens/9.jpg"), require("./img/lens/10.jpg"), require("./img/lens/11.jpg"), require("./img/lens/12.jpg")]}/>

      		</div>
      </div>
    );
  }
}

export default Lens;


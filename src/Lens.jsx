import React, { Component } from 'react';
import ImageSet2 from './ImageSet2'
class Lens extends Component {

  render() {
    var i = 1
    var lensImgs = []
    while (i<12){
      var imgPath = "./img/lens/" + i.toString() + ".jpg";
      lensImgs.push(require(imgPath));
      i = i+1;
    }
    return (
      <div className='introContentPhoto'>

        <div className='photoSet'>
          <div className="contentBlock spacer"/>
          <div className="contentBlock intro">
            <div className='textContainer'>
              <div className='titlePhoto'>
                The Lens
              </div>
              <div className='blurb'>
                My parents promised me my first DSLR if I got accepted into Berkeley four years ago. And I did, so my father went to Costco to buy me my D3200 with two kit lens. Four years later, this is still the only equipment I own, along with my iPhone6. Here and there, I get lended some other things to further my journey along in telling visual stories. Photography and filmmaking have easily landed themselves among my favorite past-times.
                <br/>
                
              </div>
            </div>
          </div>
        </div>


        <div className="photoSet">
          <div className="contentBlock video">
            <iframe src="https://player.vimeo.com/video/213976634?color=93d6ce" width="800" height="450" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
        </div>

        <ImageSet2 imgList={lensImgs}/>
            
      </div>
    );
  }
}

export default Lens;


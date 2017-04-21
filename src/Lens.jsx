import React, { Component } from 'react';
import ImageSet2 from './ImageSet2'
class Lens extends Component {

  render() {
    var i = 1
    var lensImgs = []
    while (i<17){
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
                My parents promised me my first DSLR if I got accepted into Berkeley four years ago. And I did, so my father went to Costco to buy me my D3200 with two kit lens. Four years later, this is still the only equipment I own, along with my iPhone6. What's different now is that I've made a lot of friends during my college years who share the same interests and, frankly, invested in better quality cameras and lenses. So, here and there, I get lended some things to further along my photo journey in telling visual stories.
                <br/>
                <br/>
                For clarification, photos here of myself that I ask others to take for me are indeed mine, for I set up my camera settings and photo composition prior to having someone else handle the camera and I perform all of the post-production.
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


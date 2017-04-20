import React, { Component } from 'react';
import './App.css';
import Menu from './Menu.jsx';
import ContentContainer from './ContentContainer.jsx';
import Background from './Background.jsx';

class App extends Component {
  constructor() {
    super();
    this.changeContent = this.changeContent.bind(this);
    this.changeBackground = this.changeBackground.bind(this);
    this.state = { 
      page: "home",
      isPhotoContent: false,
      bgImg: true,
      bgImgList: ["home", "currently reading", "related coursework"],
      photoContentList: ["body", "fine", "lens"],
      sbOpacity: 1
    };
  }

  changeContent(item) {
    this.setState({ page: item});
    if (this.state.bgImgList.indexOf(item) > -1){
      this.changeContentContainer(item);
      this.changeBackground(true);
    } else {
      this.changeContentContainer(item);
      this.changeBackground(false);
    };
  }

  changeBackground(toggle){
    this.setState({ bgImg: toggle});
  }

  changeContentContainer(item){
    if (this.state.photoContentList.indexOf(item) > -1){
      this.changePhotoContent(true);
    }else {
    this.changePhotoContent(false);
    };
  }

  changePhotoContent(toggle){
    this.setState({ isPhotoContent: toggle});
  }



  render() {
    return (
      <div>
      <Background bgImg={this.state.bgImg}/>
      
        <div className="sidebar">
          <Menu changeContent={this.changeContent}/>
        </div>
        
        {this.state.isPhotoContent ? <div className="photoContent">
          <ContentContainer page={this.state.page}/>
        </div> : <div className="content">
          <ContentContainer page={this.state.page}/>
        </div>}

       
      </div>

    );
  }
}

export default App;

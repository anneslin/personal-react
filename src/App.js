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
      bgImg: true,
      bgImgList: ["home", "currently reading", "related coursework"]
    };
  }
  changeContent(item) {
    this.setState({ page: item});
    if (this.state.bgImgList.indexOf(item) > -1){
      this.changeBackground(true);
    } else {
      this.changeBackground(false);
    };
  }
  changeBackground(toggle){
    this.setState({ bgImg: toggle});
  }
  render() {
    return (
      <div>
      <Background bgImg={this.state.bgImg}/>
      
        <div className="sidebar">
          <Menu changeContent={this.changeContent}/>
        </div>
        
        <div className="content">
  
        <ContentContainer page={this.state.page}/>
        </div>

       
      </div>

    );
  }
}

export default App;

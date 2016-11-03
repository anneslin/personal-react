import React, { Component } from 'react';
import './App.css';
import Menu from './Menu.jsx';
import ContentContainer from './ContentContainer.jsx';


class App extends Component {
  constructor() {
    super();
    this.changeContent = this.changeContent.bind(this)
    this.state = { page: "home"};
  }
  changeContent(item) {
    console.log(item);
    this.setState({ page: item});
  }
  render() {
    return (
      <div className="whole">
        
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

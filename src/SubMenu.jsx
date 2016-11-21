import React, { Component } from 'react';
import "./SubMenu.css"

class SubMenu extends Component {
  constructor(props) {
    super(props);
    this.rendersubMenuItems = this.rendersubMenuItems.bind(this);
  }
  
  rendersubMenuItems(item) {
    return <div className="item" onClick={this.props.changeContent.bind(this, item)}>{item}</div>;
  }
  render() { 
    return <div className="itemsContainer"> {this.props.subMenuItems.map(this.rendersubMenuItems)} </div>;
  }
}

export default SubMenu;

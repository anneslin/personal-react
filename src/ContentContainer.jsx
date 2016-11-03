import React, { Component } from 'react';
import Home from './Home.jsx';
import Learner from './Learner.jsx';
import Blackberry from './Blackberry.jsx'

class ContentContainer extends Component {
  
  componentDidMount() {
  
  }
  choosePage(page){
    if (page === "home"){
      return (<Home/>);
    }
    if (page === "currently reading" || page === "related coursework"){
      return(<Learner page={page}/>);
    }
    if (page === "blackberry"){
      return(<Blackberry/>);
    }
  }
  render() {
    return (<div>{this.choosePage(this.props.page)}</div>);
  }
}
export default ContentContainer;

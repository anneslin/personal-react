import React, { Component } from 'react';
import Home from './Home.jsx';
import Learner from './Learner.jsx';
import Blackberry from './Blackberry.jsx'
import Body2 from './Body2.jsx'
import Fine from './Fine.jsx'
import Lens from './Lens.jsx'
import Personal from './Personal.jsx'


class ContentContainer extends Component {

  choosePage(page){
    if (page === "home"){
      return (<Home/>);
    }
    /* passing in page because both currently reading and related coursework is handled with Learner */
    if (page === "currently reading" || page === "related coursework"){
      return(<Learner page={page}/>);
    }
    if (page === "blackberry"){
      return(<Blackberry/>);
    }

    if (page === "personal"){
      return(<Personal/>);
    }

    if (page === "body"){
      return(<Body2/>);
    }
    if (page === "fine"){
      return(<Fine/>);
    }
    if (page === "lens"){
      return(<Lens/>);
    }
  }
  render() {
    return (<div>{this.choosePage(this.props.page)}</div>);
  }
}
export default ContentContainer;

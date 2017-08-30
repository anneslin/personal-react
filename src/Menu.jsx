import React, { Component } from 'react';
import './Menu.css';
import SubMenu from './SubMenu.jsx';

const creativeSub = ['fine', 'lens', 'body'];
const sweSub = ['blackberry', 'uptop'];
const learnerSub = ['related coursework', 'currently reading'];
class Menu extends Component {
  constructor(props) {
  	super(props);
  	this.state = { subMenuItems: [] };
	}

  render() {

  	const updateSubMenu = function(section){
	    if (section === "c"){
	      this.setState({subMenuItems: creativeSub});
	    } else if (section === "s"){
	      this.setState({subMenuItems: sweSub});
	    } else if (section === "l"){
	      this.setState({subMenuItems: learnerSub})
	    } else if (section === "n"){
	      this.setState({subMenuItems: []});
	      this.props.changeContent("home");
	    }
  	}
    return (
    	<div>
	    {this.props.bgImg ? <div className="menuUnderlay" style={{opacity: 0}}/> : <div className="menuUnderlay" style={{opacity: 0.5}}/>}
	    <div className="menu">
	      <div className="name" onClick={updateSubMenu.bind(this,"n")}>
	          anne lin
	      </div>
	      <div className="menuItems">
	          <div id="creative" className="menuItem" onClick={updateSubMenu.bind(this,"c")}>creative</div>
	          <div id="swe" className="menuItem" onClick={updateSubMenu.bind(this, "s")}>software engineer</div>
	          <div id="learner" className="menuItem" onClick={updateSubMenu.bind(this, "l")}>learner</div>
	      </div>
	      <SubMenu subMenuItems={this.state.subMenuItems} changeContent={this.props.changeContent}/>
	    </div>
	    </div>
  
    );
  }
}



export default Menu;

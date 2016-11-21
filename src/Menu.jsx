import React, { Component } from 'react';
import './Menu.css';
import SubMenu from './SubMenu.jsx';

class Menu extends Component {
  constructor(props) {
  	super(props);
  	this.state = { subMenuItems: [] };
	}

  render() {

  	const updateSubMenu = function(section){
	    if (section === "c"){
	      this.setState({subMenuItems: ['fine', 'lens', 'body']});
	    } else if (section === "s"){
	      this.setState({subMenuItems: ['blackberry', 'personal']});
	    } else if (section === "l"){
	      this.setState({subMenuItems: ['related coursework', 'currently reading']})
	    } else if (section === "n"){
	      this.setState({subMenuItems: []});
	      this.props.changeContent("home");
	    }
  	}
    return (
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
  
    );
  }
}



export default Menu;

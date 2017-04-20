import React, { Component } from 'react';

class ImageSet2wip extends Component {
	constructor(props){
		super(props);
		this.renderMultImg = this.renderMultImg.bind(this);
		this.toggleSingle = this.toggleSingle.bind(this);
		this.state = { 
			exp: this.props.expanded,
      		width: this.props.expanded ? "auto" : "0px"
  		}
	}

	renderMultImg(img){
		return (<div className="contentBlock"><img src={img} role="presentation"/></div>);
	}


	toggleSingle(toggle){
		this.setState({ 
			exp: toggle,
			width: toggle ? "auto" : "0px"
		});
	}

	render() { 
		const expand=function(toggle){
			console.log("clicked")
			this.toggleSingle(toggle)
			var elmnt = document.getElementByClassName("");
    		elmnt.scrollLeft = 50;
		}

	    return(
	    	<div>
	    	{!this.state.exp?
	    		<div className="photoSet">
		    		<div className="contentBlock set" onClick={expand.bind(this, true)}>
		    			<img src={this.props.imgList[0]} role="presentation"/>
		    			<p className="hoverText"> click to view more </p>
		    		</div>
				</div>

	    	:
	    	<div className="photoSet">
	    		<div className="photoSet">
		    		<div className="contentBlock">
		    			<img src={this.props.imgList[0]} role="presentation"/>
		    		</div>
				</div>
				<div className="expand" style={{width: this.state.width}}>
					{this.props.imgList.slice(1).map(this.renderMultImg)}

			    	<div className="setDetails">
				    	{this.props.photographer ? <div><i className="fa fa-camera-retro"/> photos by
					      <a className="a" href={this.props.photographer.site} target="_blank"> {this.props.photographer.name}</a>
					      <br/></div>: null}
				     	{this.props.setSite ? <a className="a" href={this.props.setSite} target="_blank">See More of This Set</a> : null}
				     	<div onClick={expand.bind(this, false)} >view less</div>
			     	</div>
			     </div>
	    	</div>
	    	}
	    	</div>
	  	)}
  }

export default ImageSet2wip;

import React, { Component } from 'react';
import "./ImageSet2.css"

class ImageSet2 extends Component {

	constructor(props){
		super();
		this.renderMultImg = this.renderMultImg.bind(this);
	}
	renderMultImg(img){
		return (<div className="contentBlock">
				<img src={img} role="presentation"/>
				{this.props.bottomBar ?
					<div className="hoverText">
				    	{this.props.photographer ? <div><i className="fa fa-camera-retro"/> photo by
					      <a className="a" href={this.props.photographer.site} target="_blank"> {this.props.photographer.name}</a>
					      <br/></div>: null}
				     	{this.props.setSite ? <a className="a" href={this.props.setSite} target="_blank">See More From This Set</a> : null}
			     	</div>
			     : null
			 	}
			</div>);
	}

	render() { 

	    return(
	    <div className="photoSet">
			{this.props.imgList.map(this.renderMultImg)}
	    </div>
	  	)}
  }

export default ImageSet2;

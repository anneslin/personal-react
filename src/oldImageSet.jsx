import React, { Component } from 'react';

class ImageSet extends Component {

	renderImg(img){
		return (<img src={img} role="presentation"/>);
	}
	render() { 
	    return(
	    	<div>
		    	{this.props.imgList.map(this.renderImg)}
		    	<div className="setDetails">
		    	{this.props.photographer ? <div><i className="fa fa-camera-retro"/> photos by
			      <a className="a" href={this.props.photographer.site} target="_blank"> {this.props.photographer.name}</a>
			      <br/></div>: null}
		     	{this.props.setSite ? <a className="a" href={this.props.setSite} target="_blank">See More of This Set</a> : null}
		     	</div>
	    	</div>
	  	)}
  }

export default ImageSet;

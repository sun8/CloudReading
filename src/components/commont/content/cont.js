import React, { Component } from 'react';
//    <!--内容列表--start-->
class Content extends Component {
	constructor(props){
    super(props)
  }
	
	
  render() {
    return (
		<li>
	        <a href="bookDetails.html" className="pic">
	        	<img src={this.props.imgUrl}  alt={this.props.name} />
	        </a>
	        <a href=""  className="info">
	            <h4>{this.props.name}</h4>
	            <span>{this.props.username}</span>
	        </a>
    	</li>

    );
  }
}

export default Content;

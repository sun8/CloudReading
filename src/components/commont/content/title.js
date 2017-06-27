import React, { Component } from 'react';
//<!--内容标题-->
class Title extends Component {
	constructor(props){
    super(props)
  }
  render() {
    return (
		<h3 className="clearfix">
	        <strong className="fl">
	        	<em className="sep"></em>
	        	<span className="gradient">{this.props.title}</span>
	        </strong>
	        <a href="/more" className="more" >更多
	        	<em className="m-arrow"></em>
	        </a>
    	</h3> 
    	
    );
  }
}

export default Title;

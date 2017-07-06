import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
	        <Link to="/more" className="more" >更多
	        	<em className="m-arrow"></em>
	        </Link>
    	</h3> 
    	
    );
  }
}

export default Title;

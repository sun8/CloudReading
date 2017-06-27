import React, { Component } from 'react';
//路由
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//<!--内容标题-->
class MoreTitle extends Component {
	constructor(props){
    super(props)
  }
  render() {
    return (
			<header className="level2">
				<section className="title clearfix">
					<a className="mid" href="javascript:;">{this.props.title}</a>
					<a className="left" href="/">
						<span className="ui-leftaw-2"></span>
					</a>
					<Link className="right" to="/">首页</Link>
				</section>
			</header>
		
    	
    );
  }
}

export default MoreTitle;

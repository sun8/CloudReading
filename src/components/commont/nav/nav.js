import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
//头部导航
class Nav extends Component {
  render() {
    return (
    	
			<section className="head clearfix">
        <h1 className="logo">网易云阅读</h1>
        <a href="/client" className="download" >下载APP</a>
        <div className="headR">
        	<a href="search.html"  className="search fl" >搜索</a>
        	<i className="sep fl"></i>
        	<Link to="/account" className="account fl">
        		帐户
        	</Link>
        </div>
    	</section>
    );
  }
}

export default Nav;

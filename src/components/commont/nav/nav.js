import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
//头部导航
class Nav extends Component {
  render() {
    return (
    
    	
			<section className="head clearfix">
        <h1 className="logo">网易云阅读</h1>
        <a href="javascript:;" className="download" >下载APP</a>
        <div className="headR">
        	<Link to="/search/cont" className="search fl" >搜索</Link>
        	<i className="sep fl"></i>
        	<Link to="/myinfo" className="account fl">
        		帐户
        	</Link>
        </div>
    	</section>
    );
  }
}

export default Nav;

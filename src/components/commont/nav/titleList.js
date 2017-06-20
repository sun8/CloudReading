import React, { Component } from 'react';
//头部导航列表
class TitleList extends Component {
	
  render() {
    return (
    	
		<ul className="menu clearfix">
	    	<li>
	        	<a  href="man.html" >男频</a>
	        </li>
	        <li>
	        	<a href="man.html" >女频</a>
	        </li>
	        <li>
	        	<a  href="index.html" >出版</a>
	        </li>
	        <li>
	        	<a  href="classNameify.html" >分类</a>
	        </li>
	        <li>
	        	<a href="free.html" >免费</a>
	        </li>
	        <li>
	        	<a  href="taste.html" >口味</a>
	        </li>
	        <li>
	        	<a  href="ranking.html" >排行</a>
	        </li>
	        <li>
	        	<a href="account.html" className="recharge" >充值</a>
	        </li>           
    	</ul>
    );
  }
}

export default TitleList;

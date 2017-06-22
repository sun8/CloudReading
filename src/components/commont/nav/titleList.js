import React, { Component } from 'react';
//头部导航列表
class Titlelist extends Component {
	
  render() {
  	let arr = ['男频','女频','出版','分类','免费','口味','排行'];
  	let Arr = arr.map((e,i)=>{
  		return <li key={i}><a  href="" >{e}</a></li>
  	})
  	
    return (
    	
		<ul className="menu clearfix">
	    	{Arr}
	        <li key="8">
	        	<a href="account.html" className="recharge" >充值</a>
	        </li>           
    	</ul>
    );
  }
}

export default Titlelist;

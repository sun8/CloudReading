import React, { Component } from 'react';
//路由
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';
//头部导航列表
let arr = [
  		{
  			title:'男频',
  			name:'boy'
  		},
  		{
  			title:'女频',
  			name:'girl'
  		},
  		{
  			title:'出版',
  			name:'publish'
  		},
  		{
  			title:'分类',
  			name:'classification'
  		},
  		{
  			title:'免费',
  			name:'free'
  		},
  		{
  			title:'口味',
  			name:'taste'
  		},
  		{
  			title:'排行',
  			name:'ranking'
  		}
  	]


class Titlelist extends Component {
	constructor(props){
		super(props);
		this.state = {
			arr:arr
		}
	}
	
  render() {
  	
  	let Arr = this.state.arr.map((e,i)=>{
  		
  		return <li key={i}>
		  			<Link to={e.name}
		  			className={this.props.name==e.name?'crt':''}
		  			>{e.title}</Link>
	  			</li>
  	})
  	console.log(this.props.name)
    return (
    	
		<ul className="menu clearfix">
	    	{Arr}
	        <li key="8">
	        	<Link to="/account" className="recharge" >充值</Link>
	        </li>           
    	</ul>
    );
  }
  
}

export default Titlelist;

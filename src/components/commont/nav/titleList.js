import React, { Component } from 'react';
//路由
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';
//头部导航列表
let arr = [
  		{	
			id: Math.random().toString(),
  			title:'男频',
  			name:'/boy',
			data: {q:'python', fields: 'all'}
  		},
  		{
			id: Math.random().toString(),
  			title:'女频',
  			name:'/girl',
			data: {q:'仙剑', fields: 'all'}
  		},
  		{
			id: Math.random().toString(),
  			title:'出版',
  			name:'/'
  		},
  		{
			id: Math.random().toString(),
  			title:'分类',
  			name:'/classification'
  		},
  		{
			id: Math.random().toString(),
  			title:'免费',
  			name:'/free'
  		},
  		{
			id: Math.random().toString(),
  			title:'口味',
  			name:'/taste'
  		},
  		{
			id: Math.random().toString(),
  			title:'排行',
  			name:'/ranking'
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
  	let {history, location:{pathname}} = this.props;
  	let Arr = this.state.arr.map((e,i)=>{

		let {q, fields} = e.data?  e.data : {};

  		return (
		<li key={i}>
			<a 
				onClick={ev=>{
					ev.preventDefault();
					ev.stopPropagation();
					history.push({
						pathname: e.name,
						state:{
							q, fields
						}
					});
				}}
				className={e.name=== pathname ? 'crt': ''}
				href="javascript:;"
			>
				{e.title}
			</a>
		</li>
		);
  	});
    return (
    	
		<ul className="menu clearfix">
	    	{Arr}
	        <li key="8">
	        	<Link to="/myinfo" className="recharge" >充值</Link>
	        </li>           
    	</ul>
    );
  }
  
}

export default Titlelist;

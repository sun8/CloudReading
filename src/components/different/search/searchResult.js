import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import SearchList from './searchList';
import $ from 'jquery';
//头部导航列表
class SeachResult extends Component {
	constructor(props){
	    super(props);
			this.state={
				data: {
					books: null
				}
			}
	    
	}

	componentDidMount(){
		let { value } = this.props.location.state;
		if(!value) return;
		let arr = localStorage.getItem('key') ? JSON.parse(localStorage.getItem('key')) : [];
		$.ajax({
				url:'https://api.douban.com/v2/book/search',
				dataType:'jsonp',
				callback:'search',
				data:{
					q:value
				},
				success:(data)=>{
					//通知父级数据传递
					console.log(data)
					this.setState({data});
					//存储搜索的记录
					arr.push(value);
					//本地存储
					localStorage.setItem('key',JSON.stringify(arr));
					//搜索框清空
					
				}
		});
	}

  render() {
  	let {books} = this.state.data;
		let arr = null;
		if(books){
			arr = books.map((e,i)=>{
  		let j ={
  			key:e.id,
  			title:e.title,
  			img:e.images.medium,
  			summary:e.summary,
  			binding:e.binding,
  			name:e.subtitle,
  			num:e.rating.average

  		}
  		return <SearchList {...j}/>
  	})
		}
  	
  	
  	
  	
    return (
    	
		<div className="g-bd" id="J_content">
			<section>
				<div style={{paddingTop:"5px"}}>
					{arr}
				</div>
			</section>
		</div>
	
	
    );
  }
}

export default SeachResult;

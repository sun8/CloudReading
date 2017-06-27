import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';
//头部导航列表
let arr = [];
class SearchNav extends Component {
	constructor(props){
	    super(props);
			this.state = {
				arr:arr
			}
	    this.search = this.search.bind(this);
	    this.retu = this.retu.bind(this);
	  }
  render() {
  	arr = localStorage.getItem('key') ? JSON.parse(localStorage.getItem('key')) : [];
    return (
    	
		<header className="level2">
			<div className="title clearfix">
				<section className="m-search-book">					 
			    	<Link to="/search" className="left" onClick={this.retu}>
			    		<span className="ui-leftaw-2"></span>
			    	</Link>
			    	<div className="search-input2">
					    <form id="J_Form" className="clearfix" action="" method="get" className="f-cb">
							<div className="inner fl">
								<i onClick={this.search}>搜索</i>
								<input type="search" 
									id="search-input"  
									autoComplete="off"  
									placeholder="欢乐颂" />
							</div>
							<Link to="/" className="fl home">首页</Link>		
						</form>
					</div>
					
				</section>		
			</div>		
		</header>
	
    );
  }
  
  search(){
  	let _this = this;
  	if(!$('#search-input').val())return;
	$.ajax({
	    url:'https://api.douban.com/v2/book/search',
	    dataType:'jsonp',
	    callback:'search',
	    data:{
	      q:$('#search-input').val()
	    },
	    success:function(data){
				//通知父级数据传递
	    	_this.props.tab(data);
				//存储搜索的记录
				arr.push($('#search-input').val());
				//本地存储
				localStorage.setItem('key',JSON.stringify(arr));
				//搜索框清空
				$('#search-input').val('');
	    }
	});
	
  }
  
  retu(){
		//点击返回
  	this.props.retuP();
  }
  
}

export default SearchNav;

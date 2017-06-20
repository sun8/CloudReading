import React, { Component } from 'react';
//头部
import Nav from './components/commont/nav/nav';
//列表
import TitleList from './components/commont/nav/titleList';
//banner
import Banner from './components/commont/banner/banner';
//广告
import Ad from './components/commont/banner/ad';
//标题
import Title from './components/commont/content/title';
class App extends Component {
	constructor(){
		super();
		this.state = {
			
		}
	}
  render() {
//	header--start//导航条  
    return (
  		<div>
			<header>
		        <Nav>注释:头部导航条</Nav>
				<TitleList>注释:头部导航条列表</TitleList>
	    	</header>
	    	
	    	<Banner />
	    	<div className="m-last-book clearfix">  
	        	<span>还没有最近阅读的书籍哟</span>
	          	<a href="" className="j-gap last-book" ></a>
	          	<a href="/shelf/read.do" className="shelf" >书架</a> 
	          	<i className="sep"></i>          
	        </div>
	        <section className="m-list-box">
	        	<Title/>
	        	<div className="m-book-list">
	        		<ul className="clearfix">
	        			
	        		</ul>
	        	</div>
	        </section>
		</div>
    );
//  header--end
  }
}

export default App;

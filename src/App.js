import React, { Component } from 'react';
import Nav from './components/index/nav.js';
import TitleList from './components/index/titleList.js';
import Banner from './components/index/banner.js';
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
		     
				<TitleList />
	    	</header>
	    	
	    	<Banner />
	    	<div className="m-last-book clearfix">  
	        	<span>还没有最近阅读的书籍哟</span>
	          	<a href="" className="j-gap last-book" ></a>
	          	<a href="/shelf/read.do" className="shelf" >书架</a> 
	          	<i className="sep"></i>          
	        </div>
	        
		</div>
    );
//  header--end
  }
}

export default App;

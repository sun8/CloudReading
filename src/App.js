import React, { Component } from 'react';
//头部
import Nav from './components/commont/nav/nav';
//列表
import Titlelist from './components/commont/nav/titleList';
//banner
import Banner from './components/commont/banner/banner';
//广告
import Ad from './components/commont/banner/ad';
//标题
import Title from './components/commont/content/title';
//内容
import Content from './components/commont/content/cont';
//经典排行榜
import Classical from './components/commont/content/Classical';
//专题阅读
import Special from './components/commont/content/special';

//数据
import $ from 'jquery';
//import main from './data/main';
class App extends Component {
	constructor(){
		super();
		this.state = {
			list:null
		}
	}
	
	componentDidMount(){
		let _this = this; 
		$.ajax({
			url:'https://n.bjtrm.com/myproject/Book/GetData',
			dataType:'jsonp',
			callback:'test',
			success:function(data){
				_this.setState({
		          list:data
		       	})
				console.log(data)
			}
		});
		
		
		
	}
	
	
  render() {
  	let arrZbtj = null;
  	if(this.state.list){
  		
		let {zbtj} = this.state.list;
		console.log(zbtj)
		arrZbtj = zbtj.content.map((e,i)=>{
      		let data = {
		        key:e.id,
		        imgUrl:e.img_url,
		        username:e.username,
				name:e.name
	    	}
      	return <Content {...data} />
	    });
  		
  	}
  	
	
//	let {zbtj} = this.state.list;
//	let {zbtj} = this.state.list;
//	let arrZbtj = content.map((e,i)=>{
//    let data = {
//      key:i,
//      imgUrl:e.img_url,
//      username:e.username,
//		name:e.name
//
//    }
//    return <Content {...data} />
//  });
  	

    return (
  		<div>
			<header>
		        <Nav>注释:头部导航条</Nav>
				<Titlelist>注释:头部导航条列表</Titlelist>
	    	</header>
	    	
	    	<Banner />
	    	<div className="m-last-book clearfix">  
	        	<span>还没有最近阅读的书籍哟</span>
	          	<a href="" className="j-gap last-book" ></a>
	          	<a href="javascript:;" className="shelf" >书架</a> 
	          	<i className="sep"></i>          
	        </div>
	        <section className="m-list-box">
	        	<Title />
	        	<div className="m-book-list">
	        		<ul className="clearfix">
						{arrZbtj}
	        		</ul>
	        	</div>
	        </section>
	        
	        <section className="m-list-box clearfix">
	        	<Ad />
	        </section>
	     
	        <section className="m-list-box subject-box">    
	        	<Title/>
	        	<div className="m-book-list">
            		<ul className="clearfix">
	        			<Classical />
	        		</ul>
	        	</div>
	        </section>
	        
	        <section className="m-list-box subject-box">    
	        	<Title />
	        	<Special />
	        </section>
		</div>
    );

  }
}

export default App;

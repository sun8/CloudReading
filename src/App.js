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
//下载客户端
import Down from './components/different/down';
//footer底部
import Footer from './components/commont/footer/footer';

//数据
import $ from 'jquery';
//import main from './data/main';

//路由
//import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


class App extends Component {
	constructor(){
		super();
		this.state = {
			list:null,
			banner:null
		}
	}
	
	componentDidMount(){
		let _this = this; 
		$.ajax({
			url:'https://n.bjtrm.com/myproject/Book/GetData?',
			dataType:'jsonp',
			callback:'list',
			success:function(data){
				_this.setState({
		          list:data
		       	})
				console.log(data)
			}
		});
		
		
		
	}

	cont(data){
		
		let Data = this.state.list[data];
		let title = Data.title;
		
		let arr = Data.content.map((e,i)=>{
      		let dataA = {
		        key:e.id,
		        imgUrl:e.img_url,
		        username:e.username,
				name:e.name
	    	}
      		if(data ==='jdph'){
      			return <Classical {...dataA} />
      		}else{
      			return <Content {...dataA} />
      		}
      		
	    });
		
		return {
			arr:arr,
			title:title
		}
	}
	
  render() {
	let arrZbtj = null;
	let title = null;
	let arrXssj = null;
	let titleX = null;
	let arrJdph = null;
	let titleJ = null;
  	console.log(2)
  	if(this.state.list){
  		console.log(1)
  		
  		arrZbtj = this.cont('zbtj').arr;
		title = this.cont('zbtj').title;
  		
  		arrXssj = this.cont('xssj').arr;
		titleX = this.cont('xssj').title;
  			
  		arrJdph = this.cont('jdph').arr;
		titleJ = this.cont('jdph').title;	
  			
  			
  	}
  	
  	
	


    return (
  		<div>
			<header>
		        <Nav>注释:头部导航条</Nav>
				<Titlelist>注释:头部导航条列表</Titlelist>
	    	</header>
	    	
	    	<Banner>轮播图</Banner>
	    	<div className="m-last-book clearfix">  
	        	<span>还没有最近阅读的书籍哟</span>
	          	<a href="" className="j-gap last-book" ></a>
	          	<a href="javascript:;" className="shelf" >书架</a> 
	          	<i className="sep"></i>          
	        </div>
	        <section className="m-list-box">
	        	<Title title={title}/>
	        	<div className="m-book-list">
	        		<ul className="clearfix">
						{arrZbtj}
	        		</ul>
	        	</div>
	        </section>
	        
	     
	        <Ad>两条广告</Ad>
	     
	     	
	     	<section className="m-list-box">
	        	<Title title={titleX}/>
	        	<div className="m-book-list">
	        		<ul className="clearfix">
						{arrXssj}
	        		</ul>
	        	</div>
	        </section>
	     	
	        <section className="m-list-box subject-box">    
	        	<Title title={titleJ}/>
	        	<div className="m-book-list">
            		<ul className="clearfix">
	        			{arrJdph}
	        		</ul>
	        	</div>
	        </section>
	        
	        <section className="m-list-box subject-box">    
	        	<Title />
	        	<Special />
	        </section>
	        
	        <Down>下载和搜索</Down>
	        
	        <Footer>底部</Footer>
	        
	        
	        <div className="m-dl-tip" id="close">
	        	<img src={require('./img/download.png')} />
	        	<a href="javascript:;" className="close" onClick={this.close}></a>
	        </div>
	        
		</div>
    );

  }

  close(){
  	$('#close').css('display','none');
  }




}

export default App;

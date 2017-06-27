import React, { Component } from 'react';
//头部
import Nav from './components/commont/nav/nav';
//列表
import Titlelist from './components/commont/nav/titleList';
//大盒子内容的切换
import Publish from './root/publish';
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
	constructor(props){
		super(props);
		
	}

	
  render() {
	
	
	
    return (
  		<div>
			<header>
		        <Nav>注释:头部导航条</Nav>
				<Titlelist name={'publish'}>注释:头部导航条列表</Titlelist>
	    	</header>
	    	
	    	
	        <Publish />
	        
	        <Down>下载和搜索</Down>
	        <a id="J_GoTop" className="m-gotop" href="#root"></a>
	        <Footer>底部</Footer>
	        
	        
	        <div className="m-dl-tip" id="close">
	        	<img src={require('./img/download.png')} />
	        	<a href="javascript:;" 
	        	className="close" 
	        	onClick={this.close}>
	        	</a>
	        </div>
	        <img id="loading" src={require('./img/loading.gif')}/>
		</div>
		
	
    );

  }

  close(){
  	//底部固定定位
  	$('#close').css('display','none');
  }




}

export default App;

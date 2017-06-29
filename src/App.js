import React, { Component } from 'react';
//头部
import Nav from './components/commont/nav/nav';
//列表
import Titlelist from './components/commont/nav/titleList';
//大盒子内容的切换
import Publish from './root/publish';




//女频
import Girl from './root/girl';
//分类
import Classification from './root/classification';
//免费
import Free from './root/free';


//口味
import Taste from './root/taste';
//排行
import Ranking from './root/ranking';





//数据
import $ from 'jquery';
//import main from './data/main';

//路由
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

class App extends Component {
	constructor(props){
		super(props);
		
	}

	// componentDidMount(){
		
	// }

	// componentWillUnmount(){
	// 	won.re
	// }



	
  render() {
	 let {match:{path}, history,location, location:{state}} = this.props;
	
    return (
  		<div>
			<header>
		        <Nav>注释:头部导航条</Nav>
				<Titlelist 
				history={history} 
				{...{
					location
				}} >注释:头部导航条列表</Titlelist>
	    	</header>

			<Route exact path={`/`} component={Publish}/>
			<Route  path={`/publish`} component={Publish}/>
			<Route  path={`/ranking`} component={Ranking}/>
			<Route  path={`/taste`} component={Taste}/>
	      	<Route  path={`/free`} component={Free}/>
	      	<Route  path={`/classification`} component={Classification}/>
	      	<Route  path={`/girl`} component={Girl}/>
			<Route  path={`/boy`} component={Girl}/>
	        
	       
	        <div className="m-dl-tip" id="close">
	        	<img src={require('./img/download.png')} />
	        	<a href="javascript:;" 
	        	className="close" 
	        	onClick={this.close}>
	        	</a>
	        </div>
		</div>
		
	
    );

  }

  close(){
  	//底部固定定位
  	$('#close').css('display','none');
  }




}

export default App;

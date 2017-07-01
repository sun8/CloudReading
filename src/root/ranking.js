import React, { Component } from 'react';
//数据
import $ from 'jquery';
//路由
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
//头部
import Nav from '../components/commont/nav/nav';
//列表
import Titlelist from '../components/commont/nav/titleList';
//标题
import Title from '../components/commont/content/title';
//内容
import RankOne from '../components/commont/content/rankOne';
import RankCont from '../components/commont/content/rankCont';
//下载客户端
import Down from '../components/different/down';
//footer底部
import Footer from '../components/commont/footer/footer';

//<!--分类(跳转)--start-->
class Ranking extends Component {
	constructor(props){
		super(props);
		this.state = {
			list:null,
			girl:{
				name:'html',
				count:6,
				star:0
			},
			boy:{
				name:'node',
				count:6,
				star:0
			},
			books:{
				name:'jquery',
				count:6,
				star:0
			}

		}
	}
	
	componentDidMount(){
		
	}
	
	
	
	
	
  render() {
	let {history,location, location:{state}} = this.props;
	
    return (
  		<div className="wrap">
			
	    	<section className="m-list-box"> 
				<Title title={'女生排行榜'}/>
				<div id="u-loading" style={{display:'blcok'}}>
					<b></b> 正在加载...
				</div>
				{/*<ul className="m-rank-list clearfix">
					{arrLove4[15]}
					{arrLove}
				</ul>*/}
				<RankCont
					reqData={this.state.girl}
					history={history} 
					{...{
						location
					}}
				/>
			</section>
    		<section className="m-list-box"> 
				<Title title={'男生排行榜'}/>
				<RankCont
					reqData={this.state.boy}
					history={history} 
					{...{
						location
					}}
				/>
			</section>
	    	<section className="m-list-box"> 
				<Title title={'图书排行榜'}/>
				<RankCont
					reqData={this.state.books}
					history={history} 
					{...{
						location
					}}
				/>
			</section>
        
		
	    	
	    	
	    	<a id="J_GoTop" className="m-gotop" href="#root"></a>
	    	
		    <Down history={history}> 下载和搜索 < /Down>   
		    <Footer>底部</Footer>
		</div>
    );

  }


}

export default Ranking;

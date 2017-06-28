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
			list:null
		}
	}
	
	componentDidMount(){
		let _this = this; 
		$.ajax({
            url: 'https://api.douban.com/v2/book/search',
            type: 'get',
			data:{
				tag:'都市',
				fields:'all'
			},
            dataType: 'jsonp',
            callback: 'love',
            success: function(data) {
                _this.setState({
                    list: data
                })
            }
        });
		
	}
	
	
	
	
	
  render() {
	let arrLove = null;
	let arrLove2 = null;
	let arrLove3 = null;
	let arrLove4 = [];
	if(this.state.list){

		let {books} = this.state.list;
		arrLove = books.map((e,i)=>{ 
			let j ={
				key:e.id,
				title:e.title,
				num:i+2

			}
			if(i>3)return
			return <RankCont {...j}/>
		})
		arrLove2 = books.map((e,i)=>{
			if(i>3&&i<8){
			let j ={
				key:e.id,
				title:e.title,
				num:i-2

			}
			
			return <RankCont {...j}/>}
		})
		arrLove3 = books.map((e,i)=>{ 
			if(i>7&&i<12){
			let j ={
				key:e.id,
				title:e.title,
				num:i-6

			}
			
			return <RankCont {...j}/>}
		})
		arrLove4 = books.map((e,i)=>{
			let j ={
				key:e.id,
				title:e.title,
				img:e.images.medium,
				summary:e.summary,
				name:e.subtitle,
				author:e.author[0]

			}
			
			return <RankOne {...j}/>
		})
	}
	
    return (
  		<div className="wrap">
			
	    	<section className="m-list-box"> 
				<Title title={'女生排行榜'}/>
				<ul className="m-rank-list clearfix">
					{arrLove4[15]}
					{arrLove}
				</ul>
			</section>
    		<section className="m-list-box"> 
				<Title title={'男生排行榜'}/>
				<ul className="m-rank-list clearfix">
					{arrLove4[14]}
					{arrLove2}
				</ul>
			</section>
	    	<section className="m-list-box"> 
				<Title title={'图书排行榜'}/>
				<ul className="m-rank-list clearfix">
					{arrLove4[2]}
					{arrLove3}
				</ul>
			</section>
        
		
	    	
	    	
	    	<a id="J_GoTop" className="m-gotop" href="#root"></a>
	    	
		    <Down > 下载和搜索 < /Down>   
		    <Footer>底部</Footer>
		</div>
    );

  }


}

export default Ranking;

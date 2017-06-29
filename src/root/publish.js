import React, { Component } from 'react';
//banner
import Banner from '../components/commont/banner/banner';
//最近阅读的书籍
import Readed from '../components/different/readed';
//广告
import Ad from '../components/commont/banner/ad';
//标题
import Title from '../components/commont/content/title';
//内容
import Content from '../components/commont/content/cont';
//经典排行榜
import Classical from '../components/commont/content/Classical';
//专题阅读
import Special from '../components/commont/content/special';
//下载down
import Down from '../components/different/down';
//底部footer
import Footer from '../components/commont/footer/footer';



//数据
import $ from 'jquery';
//import main from './data/main';

//路由
//import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


class Publish extends Component {
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
            url: 'https://api.douban.com/v2/book/search',
            type: 'get',
            dataType: 'jsonp',
            callback: 'time',
            data:{
                tag:'javascript',
                fields:'all'
            },
            success: function(data) {
                _this.setState({
                    list: data
                })
            }
        });
		
		
		
	}
	
  render() {
	
	let {history,location, location:{state}} = this.props;

	  //重磅推荐
	let arrZbtj = null;
		//经典排行榜
	let arrJdph = null;
  	if(this.state.list){
		let {books} = this.state.list;
		//重磅推荐
		arrZbtj = books.map((e,i)=>{ 
			if(i<6){
				let j ={
					key:e.id,
					id:e.id,
					title:e.title,
					summary:e.summary,
					binding:e.binding,
					name:e.subtitle,
					img:e.images.medium

				}
				
				return <Content {...j } 
					history={history} 
					{...{
						location
					}}
				/>
			}
		})
		//经典排行榜
		arrJdph = books.map((e,i)=>{ 
			if(i>6&&i<10){
				let j ={
					key:e.id,
					id:e.id,
					title:e.title,
					summary:e.summary,
					binding:e.binding,
					name:e.subtitle,
					img:e.images.medium

				}
				
				return <Classical {...j }
					history={history} 
					{...{
						location
					}}
				/>
			}
		})





  		//loading加载中
  		$('#u-loading').css('display','none');
  	}
  	
  	
	


    return (
  		<div>
			
	    	<Banner>轮播图</Banner>
	    	<Readed />
			
	        <section className="m-list-box">
	        	<Title title={'主编推荐'}/>
				<div id="u-loading" style={{display:'blcok'}}>
					<b></b> 正在加载...
				</div>
	        	<div className="m-book-list">
	        		<ul className="clearfix">
						{arrZbtj}
	        		</ul>
	        	</div>
	        </section>
	        
	     
	        <Ad>两条广告</Ad>
	     
	     	
	     	<section className="m-list-box">
	        	<Title title={'新书上线'}/>
	        	<div className="m-book-list">
	        		<ul className="clearfix">
						{arrZbtj}
	        		</ul>
	        	</div>
	        </section>
	     	
	        <section className="m-list-box subject-box">    
	        	<Title title={'经典排行榜'}/>
	        	<div className="m-book-list">
            		<ul className="clearfix">
	        			{arrJdph}
	        		</ul>
	        	</div>
	        </section>
	        
	        <section className="m-list-box subject-box">    
	        	<Title title={'精彩书单'}/>
	        	<Special />
	        </section>
			
			<Down history={history}>下载和搜索</Down>
	        <a id="J_GoTop" className="m-gotop" href="#root"></a>
	        <Footer>底部</Footer>
	        
	        
	        
		</div>
		
	
    );

  }

  

}

export default Publish;

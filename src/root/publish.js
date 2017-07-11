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
import BookBoard from '../components/commont/content/BookBoard';
//专题阅读
import SpecialRead from '../components/commont/content/SpecialRead';
//下载down
import Down from '../components/different/down';
//底部footer
import Footer from '../components/commont/footer/footer';



//数据
import $ from 'jquery';

//路由
//import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


class Publish extends Component {
	constructor(props){
		super(props);
		this.state = {
			list:null,
			banner:null,
			editor:{
				name:'php',
				count:6
			},
			newBook:{
				name:'javascript',
				count:6
			},
			rankingList:{
				name:'css',
				count:3,
				star:1
			}
			
		}

	}

	componentDidMount(){
		
	}
	
  render() {
	
	let {history,location, location:{state}} = this.props;
  

    return (
  		<div>
			
	    	<Banner history={history}>轮播图</Banner>
	    	<Readed />
			{this.state.bl}
	        <section className="m-list-box">
	        	<Title title={'主编推荐'}/>
				<div id="u-loading" style={{display:'blcok'}}>
					<b></b> 正在加载...
				</div>
	        	<div className="m-book-list">
	        	
					<BookBoard 
						reqData={this.state.editor}
						history={history} 
						{...{
							location
						}}
					/>
	        	</div>
	        </section>
	        
	     
	        <Ad history={history} >两条广告</Ad>
	     
	     	
	     	<section className="m-list-box">
	        	<Title title={'新书上线'}/>
	        	<div className="m-book-list">
	        		<BookBoard 
						reqData={this.state.newBook}
						history={history} 
						{...{
							location
						}}
					/>
	        	</div>
	        </section>
	     	
	        <section className="m-list-box subject-box">    
	        	<Title title={'经典排行榜'}/>
	        	<div className="m-book-list">
            		<BookBoard 
						reqData={this.state.rankingList}
						history={history} 
						{...{
							location
						}}
					/>
	        	</div>
	        </section>
	        
	        <section className="m-list-box subject-box">    
	        	<Title title={'精彩书单'}/>
	        	<SpecialRead history = {history}/>
	        </section>
			
			<Down history={history}>下载和搜索</Down>
	        <a id="J_GoTop" className="m-gotop" href="#root"></a>
	        <Footer>底部</Footer>
	        

		</div>
		
	
    );

  }

}

export default Publish;

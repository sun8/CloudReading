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
			url:'https://n.bjtrm.com/myproject/Book/GetData?',
			dataType:'jsonp',
			callback:'list',
			success:function(data){
				_this.setState({
		          list:data
		       	})
				console.log(111,data)
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
  	if(this.state.list){
  		//主编推荐
  		arrZbtj = this.cont('zbtj').arr;
		title = this.cont('zbtj').title;
  		//新书上架
  		arrXssj = this.cont('xssj').arr;
		titleX = this.cont('xssj').title;
  		//经典推荐	
  		arrJdph = this.cont('jdph').arr;
		titleJ = this.cont('jdph').title;	
  		//loading加载中
  		$('#loading').css('display','none');
  	}
  	
  	
	


    return (
  		<div>
			
	    	<Banner>轮播图</Banner>
	    	<Readed />
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
	        	<Title title={'精彩书单'}/>
	        	<Special />
	        </section>
	       
		</div>
		
	
    );

  }


}

export default Publish;

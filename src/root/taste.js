import React, { Component } from 'react';
//数据
import $ from 'jquery';
//路由
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
//内容
import TasteCont from '../components/commont/content/tasteCont';

//footer底部
import Foot from '../components/commont/footer/Foot';

//<!--分类(跳转)--start-->
class Taste extends Component {
	constructor(props){
		super(props);
		this.state = {
			list:null
		}

		this.hasUnMount = false;
	}
	
	componentDidMount(){
		$.ajax({
            url: 'https://api.douban.com/v2/book/search',
            type: 'get',
			data:{
				tag:'恋爱',
				fields:'all'
			},
            dataType: 'jsonp',
            callback: 'love',
            success: (data)=> {

				if(this.hasUnMount) return;	

                this.setState({
                    list: data
                })
            }
        });
		
	}

	componentWillUnmount(){
		this.hasUnMount = true;
	}
	
	
	
	
	
  render() {
	let arrLove = null;
	let {history,location, location:{state}} = this.props;
	if(this.state.list){
		$('#u-loading').css('display','none');

		let {books} = this.state.list;
		arrLove = books.map((e,i)=>{ 
			let j ={
				key:e.id,
				id:e.id,
				title:e.title,
				img:e.images.medium,
				summary:e.summary,
				name:e.subtitle,
				author:e.author[0]

			}
			
			return <TasteCont {...j}
				history={history} 
					{...{
						location
					}}
			/>
		})
	}
	
    return (
  		<div className="wrap">
	    	<div className="g-bd">
            <div className="m-taste">
                <a className="j-cate" href="/taste/select.do">
                	<span className="m-tip">
        				<b className="m-arrow"></b>
    				</span>
        			<p className="m-status m-status-empty">
        				<b className="u-tag"></b>设定阅读基因，为你私人定制
        			</p>
    			</a>
            </div>
            
            <div id="u-loading" style={{display:'blcok'}}>
            	<b></b> 正在加载...
            </div>
            
            <div className="book-list" id="J_BookList">
				{arrLove}
        	</div>
    	</div>
	    	<a id="J_GoTop" className="m-gotop" href="#root"></a>
		    <Foot>底部</Foot>
		</div>
    );

  }


}

export default Taste;

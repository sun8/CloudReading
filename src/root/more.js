import React, { Component } from 'react';
//数据
import $ from 'jquery';
//路由
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
//头部
import MoreTitle from '../components/commont/more/title';
//列表
import MoreCont from '../components/commont/more/cont';


//<!--分类(跳转)--start-->
class More extends Component {
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
				q:'python',
				fields:'all'
			},
            dataType: 'jsonp',
            callback: 'time',
            success: function(data) {
                _this.setState({
                    list: data
                })
            }
        });
		
	}
	
	
	
	
	
  render() {
	let arrMore =null;
	if(this.state.list){
		let {books} = this.state.list;
		arrMore = books.map((e,i)=>{ 
			let j ={
				key:e.id,
				title:e.title,
				img:e.images.medium,
				summary:e.summary,
				binding:e.binding,
				name:e.subtitle,
				num:e.rating.average

			}
			
			return <MoreCont {...j}/>
		})

	}


	
    return (
  		<div className="g-wrap" >
			<MoreTitle title={'主编推荐'}/>

			<div className="more-bd">
            
            	<div className="book-list" id="J_BookList">
					{arrMore}
				</div>
			</div>
		</div>
    );

  }


}

export default More;

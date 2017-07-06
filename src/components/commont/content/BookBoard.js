import React, { Component } from 'react';
import $ from 'jquery';
import Content from './cont';
//    <!--内容列表--start-->
class BookBoard extends Component {
	constructor(props){
    super(props);
		this.state = {
			list:null
		}
  }
	componentDidMount(){
		let {reqData:{count,name}}= this.props;
		$.ajax({
			url: 'https://api.douban.com/v2/book/search',
			type: 'get',
			dataType: 'jsonp',
			callback: 'time',
			data:{
				tag:name,
				fields:'all',
				count:count
			},
			success: (data)=>{
				this.setState({
					list: data
				})
			}
		});
	}
	
  render() {
		let {id} = this.props; 
		let {history, location:{pathname}} = this.props;
		let arrZbtj = null;
		let {reqData:{star}}= this.props;
		if(this.state.list){
			let {books} = this.state.list;
			//重磅推荐
			arrZbtj = books.map((e,i)=>{ 
			
				let j ={
					key:e.id,
					id:e.id,
					index:i,
					title:e.title,
					summary:e.summary,
					binding:e.binding,
					name:e.subtitle,
					img:e.images.medium

				}
				
				return (
					<li key ={j.key}
						onClick={ev=>{
							history.push({
								pathname: '/bookDetails',
								state:{
									id:j.id
								}
							}); 
						}}
					>
						{star?<em className="classical">{j.index+1}</em>:''}
						<a href="javascript:;" className="pic" >
							<img src={j.img}  alt={j.title} />
						</a>
						<a href="javascript:;"  className="info">
							<h4>{j.title}</h4>
							<span>{j.name}</span>
						</a>
					</li>
				)
				
			})

			$('#u-loading').css('display','none');
		}


    return (
		<ul className="clearfix">
			{arrZbtj}
	    </ul>

    );
  }

}

export default BookBoard;

import React, { Component } from 'react';
import $ from 'jquery';
//    <!--内容列表--start-->
class RankCont extends Component {
	constructor(props){
    super(props);
		this.state = {
			list:null

		}
  }
	
	componentDidMount(){
		let {reqData:{count,name}}= this.props;
		console.log(this.props, 'rank')
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
				success: (data)=> {
						this.setState({
								list:data
						})
				}
		});
	}
	
  render() {
		let {id} = this.props; 
		let {history, location:{pathname}} = this.props;
		let ranking = null;
		if(this.state.list){
			let {books} = this.state.list;
				//排行榜
				ranking = books.map((e,i)=>{ 
				
						let j ={
							key:e.id,
							id:e.id,
							index:i,
							title:e.title,
							summary:e.summary,
							binding:e.binding,
							name:e.subtitle,
							img:e.images.medium,
							author:e.author[0]

						}
						if(i===0){
							return (
								<li 
									key={j.id}
									className="cont"
									onClick={ev=>{
										history.push({
											pathname: '/bookDetails',
											state:{
												id:j.id
											}
										}); 
									}}
								>
									<a href="javascript:;"  title={j.title}>
										<em className="fir">{j.index+1}</em>
										<img src={j.img} alt={j.title}/>
										<h3>{j.title}</h3>
										<p>{j.author}/{j.binding}</p>                    
										<p>{j.summary}</p>
									</a>
								</li>
							)
						}else{
							return (
								<li key = {j.key}
									onClick={ev=>{
										history.push({
											pathname: '/bookDetails',
											state:{
												id:j.id
											}
										}); 
									}}
								>
									<a href="javascript:;">
										<em className="bg2">{j.index+1}</em>
										<span>{j.title} </span>                
									</a>
								</li>
							)
						}
				})

				$('#u-loading').css('display','none');
		}


    return (
			<ul className="m-rank-list clearfix">
				
				{ranking}
			</ul>
    );
  }
}

export default RankCont;

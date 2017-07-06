import React, { Component } from 'react';
import Catalog from '../components/commont/bookDetails/catalog';
import Header from '../components/commont/bookDetails/header';
import Comment from '../components/commont/bookDetails/comment';
import $ from 'jquery';
//    <!--内容列表--start-->
class BookDetails extends Component {
	constructor(props){
    super(props);
	this.state = {
		data:null
	}
  }
	
	componentDidMount(){
		let {id} = this.props.location.state;
		// console.log(id)
		$.ajax({
			url: 'https://api.douban.com/v2/book/'+id+'',
			type: 'get',
			dataType: 'jsonp',
			callback: 'time',
			success: (data)=> {

				// console.log(111,data);
				this.setState({
					data: data
				})
			}
		});

	}

	
  render() {
	  //数据结构
	let {history,location, location:{state}} = this.props;
	let {id} = this.props.location.state;
	
	let catalog = null;
	if(!this.state.data)return (<div></div>)
	let {data} = this.state;
	//判断标题的数据有没有
	let title = data.series?data.series.title:'暂无哟！';
	catalog = data.tags.map((e,i)=>{
		let j={
			key:i,
			name:e.name,
			title:e.title
		}
		return <Catalog {...j}/>
	})
	
	

    return (
		// <!--首页点击图片的(跳转)--start-->
	<div className="g-wrap" >
		{/*<!--header--start-->*/}
		<Header 
			history={history} 
			{...{
				location
			}}
		/>
		{/*<!--header--end-->*/}
		
		{/*<!--书籍内容展示--start-->*/}
		<section className="m-book-info">
			<div className="info">
				<div className="img">
					<img src={data.images.medium} ref="pic" />
				</div>
				<h1>{data.title}</h1>
				<p>作者：{data.author[0]}</p>
				<p>分类：{title}</p>
				<p>点击：{data.rating.average}万</p>
				<p>授权方：{data.publisher}</p>
				<p>
					<span className="w-star2">
						<span>&nbsp;</span>
						<span>&nbsp;</span>
						<span>&nbsp;</span>
						<span>&nbsp;</span>
						<span className="no">&nbsp;</span>
					</span>
				</p>
			</div>
			<div className="j-actions">
				<div className="btns" >						
					<a href="javascript:;"
					onClick={ev=>{
						history.push({
							pathname: '/reading',
							state:{
								id
							}
						}); 
					}} 
					className="ui-blue fl" 
					>立即阅读</a>
					<a href={data.catalog}
					className="ui-blue-light fr"
					download={data.title}
					
					>下载整本</a>
				</div>
				<div className="btns">
					<a href="javascript:;" className="m-shelf ui-grey ">
						<i className="ui-shelf"></i>放入书架
					</a>
				</div>
			</div>
		</section>
		{/*<!--书籍内容展示--end-->*/}
	
		{/*<!--书籍内容简介--start-->*/}
		<section className="m-book-detail j-intro-wrap">
			<h4 className="m-book-title">内容简介</h4>
			<p className="content j-intro">
				&nbsp;&nbsp;{data.summary}　
			</p>
			<p className="showmore j-more">展开<i className="j-more"></i></p>
		</section>
		{/*<!--书籍内容简介--end-->*/}
		
		{/*<!--书籍目录--start-->*/}
		<section className="m-book-directory">
			<h4 className="m-book-title">目录
				<span className="j-cata-length">(共{data.pages}页)</span>
				<a className="sort j-squece">倒序<i></i></a>
			</h4>
			<div className="j-cata catalist">
				<ul className="caul">
					{catalog}
				</ul>
				<a className="more1"  href=""><span>更多目录</span><i></i></a>
			</div>
		</section>
		{/*<!--书籍目录--end-->*/}
	
		{/*<!--精彩评论--start-->*/}
		<section className="m-book-comment m-allcomment">
			{/*<!--标题-->*/}
			<h4 className="m-book-title">
				<i className="j-comment-title">评论</i>
				<span className="j-comment-count">(12)</span>
				<a className="comment j-to-comment" >
					<i className="" ></i>
					<span className="" >写评论</span>
				</a>
			</h4>
			{/*<!--评论内容-->*/}
			<Comment />
			<a className="more1 j-more-comment"  href="#">
				<span>更多评论</span><i></i>
			</a>			
		</section>
		{/*<!--精彩评论--end-->*/}
	
		{/*<!--您可能还喜欢--start-->*/}
		<section className="m-book-likemore">
			<h3 className="m-book-title">您可能还喜欢</h3> 
			<div className="m-book-list">
				<ul className="clearfix">
					<li>
						<a href="" className="pic">
							<img src={require('../img/3.jpg')} alt="24个比利" />
						</a>
						<a href=""  className="info">
							<h4>24个比利</h4>
							<span>【美】丹尼尔·凯斯</span>
						</a>
					</li>
					<li>
						<a href="" className="pic">
							<img src={require('../img/4.jpg')} alt="24个比利" />
						</a>
						<a href=""  className="info">
							<h4>比利战争（《24个比利》续作）</h4>
							<span>【美】丹尼尔·凯斯</span>
						</a>
					</li>
					<li className="margin0">
						<a href="" className="pic">
							<img src={require('../img/6.jpg')} alt="24个比利" />
						</a>
						<a href=""  className="info">
							<h4>时光倒流的女孩（现象级畅销书《岛上书店》作者口碑成名作！</h4>
							<span>【美】加·泽文</span>
						</a>
					</li>
				</ul>
			</div>
		</section>	
		{/*<!--您可能还喜欢--start-->*/}
	</div>
			
    );
  }

}

export default BookDetails;

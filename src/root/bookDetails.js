import React, { Component } from 'react';
import $ from 'jquery';
//    <!--内容列表--start-->
className BookDetails extends Component {
	constructor(props){
    super(props);
		this.state = {
			data:null
		}
  }
	
	componentDidMount(){
		let {id} = this.props.location.state;
		let _this = this ;

		$.ajax({
			url: 'https://api.douban.com/v2/book/'+id+'',
			type: 'get',
			dataType: 'jsonp',
			callback: 'time',
			success: function(data) {
				console.log(data);
				_this.setState({
						data: data
				})
			}
		});

	}

	
  render() {


    return (
		// <!--首页点击图片的(跳转)--start-->
	<div className="g-wrap" >
		{/*<!--header--start-->*/}
		<header className="level2">
			<section className="title clearfix">
				<a className="mid" href="javascript:;">书籍详情</a>
				<a className="left" href="">
					<span className="ui-leftaw-2"></span>
				</a>
					<a className="right" href="/">首页</a>
					<a className="left-search" href="">
						<span className="ui-search"></span>
					</a>
			</section>
		</header>
		{/*<!--header--end-->*/}
		
		{/*<!--书籍内容展示--start-->*/}
		<section className="m-book-info">
			<div className="info">
				<div className="img">
					<img src="img/book.jpg" />
				</div>
				<h1>艰难的制造（《欢乐颂》作者阿耐作品）</h1>
				<p>作者：阿耐</p>
				<p>分类：现当代文学</p>
				<p>点击：26.2万</p>
				<p>授权方：上海读客图书有限公司</p>
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
					<a href="" className="ui-blue fl" >立即阅读</a>
					<a id="J_Offline" href="javascript:;" className="ui-blue-light fr">下载整本</a>
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
					&nbsp;&nbsp;宁炒一座楼，不办一家厂，开厂为啥干不过炒房，做实业的为啥干不过搞金融的？作为立国之本、创造财富的制造业发生了什么？市场的大手，政策的大手，究竟在其中起到什么样的作用？<br/>　　
				<br/>&nbsp;&nbsp;小说以一家中小型机械制造厂切入，以手术解剖的方式娓娓道来秉持实业理想的柳钧和从事金融的好友钱宏明的典型遭遇。无论是山寨模仿、技术剽窃、恶意抢单、黑社会威胁、税务查账、环保穿小鞋还是信用证诈骗、房地产投机、民间高利贷、非法集资，从起步到发展过程中大到政策，小到员工管理的九九八十一难一一为你呈现。<br/>
				<br/>&nbsp;&nbsp;本书作者阿耐曾为浙江某著名民营制造业高管，几十年经营管理经验，写出来的都是“实打实的真材实料”。自连载以来，引发珠三角、长三角众多制造业老板及金融从业者的广泛共鸣。
			</p>
			<p className="showmore j-more">展开<i className="j-more"></i></p>
		</section>
		{/*<!--书籍内容简介--end-->*/}
		
		{/*<!--书籍目录--start-->*/}
		<section className="m-book-directory">
			<h4 className="m-book-title">目录
				<span className="j-cata-length">(共12章)</span>
				<a className="sort j-squece">倒序<i></i></a>
			</h4>
			<div className="j-cata catalist">
				<ul className="caul">
					<li className="grade_01 ">
						<a href="">版权信息<i></i></a>
					</li>
					<li className="grade_01 ">
						<a  href="">1998年 子承父业，回国挑起旧工厂重担<i></i></a>
					</li>
					<li className="grade_01 ">
						<a  href="">1999年 新产品被模仿，陷入恶性竞争<i></i></a>
					</li>
					<li className="grade_01 ">
						<a  href="">2000年 建立新厂，员工管理成大问题<i></i></a>
					</li>
					<li className="grade_01 dis">
						<a  href="">2001年 质量体系认证成为企业的“心病”<i></i></a>
					</li>
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
			<ul className="j-more-comment">
				{/*<!--用户信息-->*/}
				<li className="item j-intro-wrap clearfix">
					<input type="hidden" name="cid" value="">
					<input type="hidden" name="tipstr" value="快樂永随">
					<input type="hidden" name="uid" value="">
					<img src="img/touxiang.jpg" className="headimg j-headimg">
					<p className="user">
						<span className="uname j-uname">
							快樂永随
						</span>
						<span className="time">5月28日  00:27</span>
					</p>		
					<p className="star">
						<span>&nbsp;</span>
						<span>&nbsp;</span>
						<span>&nbsp;</span>
						<span>&nbsp;</span>
						<span>&nbsp;</span>
					</p>								
					<p className="desc j-intro">
						写的是血与泪。为何要发展制造业，因为目前的称不上是制造业。工匠精神，智能制造，都不是无的放矢。
					</p>
					<p className="opt opts clearfix">
						<span className="praise j-praise" data-likes="207"><i></i><span className="likes">207</span> </span>			
					</p>				
				</li>
				<li className="item j-intro-wrap clearfix last">
					<input type="hidden" name="cid" value="">
					<input type="hidden" name="tipstr" value="">
					<input type="hidden" name="uid" value="">
					<img src="img/touxiang.jpg" className="headimg j-headimg">
					<p className="user">
						<span className="uname j-uname">
						手机用户_0836
						</span>
						<span className="time">5月28日  21:53</span>
					</p>		
					<p className="star">
						<span>&nbsp;</span>
						<span className="no">&nbsp;</span>
						<span className="no">&nbsp;</span>
						<span className="no">&nbsp;</span>
						<span className="no">&nbsp;</span>
					</p>								
					<p className="desc j-intro">
						咋那里都有你呀大師來了，是不是就是拉拉隊長呀
					</p>
					<p className="opt opts clearfix">
						<span className="praise j-praise" data-likes="162">
							<i></i><span className="likes">162</span> 
						</span>			
					</p>				
				</li>
			</ul>		
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
												<img src="img/1.jpg" srcset="" alt="24个比利" />
											</a>
											<a href=""  className="info">
													<h4>24个比利</h4>
													<span>【美】丹尼尔·凯斯</span>
											</a>
									</li>
									<li>
											<a href="" className="pic">
												<img src="img/1.jpg" srcset="" alt="24个比利" />
											</a>
											<a href=""  className="info">
													<h4>比利战争（《24个比利》续作）</h4>
													<span>【美】丹尼尔·凯斯</span>
											</a>
									</li>
									<li className="margin0">
											<a href="" className="pic">
												<img src="img/1.jpg" srcset="" alt="24个比利" />
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
			{/*<!--首页点击图片的(跳转)--end-->*/}
    );
  }



}

export default BookDetails;

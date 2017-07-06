import React, { Component } from 'react';
//目录
import ReadingCatalog from '../components/commont/bookDetails/Readingcatalog';
//读书样式的组件(字体，夜间。下载，目录按钮)
import Icon from '../components/commont/bookDetails/icon';
//书的核心页面
import bookContent from '../data/book';
//数据
import $ from 'jquery';
class Reading extends Component {
	constructor(props){
		super(props);
		this.state = {
			list:null,
			down:null,
			start:null,
			move:null,
			atNeight:false,
			font:false,
			tab:false,
			lent:0,
			noCont:true,
			top:0,
			categoryIndx:0,
			onOff:true
		}
		this.touchstart = this.touchstart.bind(this);
		this.touchmove = this.touchmove.bind(this);
		this.touchend = this.touchend.bind(this);
		this.neightF = this.neightF.bind(this);
		this.fontF = this.fontF.bind(this);
		this.catalogF = this.catalogF.bind(this);
		this.gotoCategory = this.gotoCategory.bind(this);
		
	}
	//点击目录的时候拿到当前点击的索引
	gotoCategory( indx ){
		this.setState({
			categoryIndx: indx
		});
	}
	
	componentDidMount(){
		let {id} = this.props.location.state;
		$.ajax({
            url: 'https://api.douban.com/v2/book/'+id+'',
            type: 'get',
            dataType: 'jsonp',
            callback: 'book',
            success: (data) =>{
				// console.log(data);

                this.setState({
                    list: data,
					down:{
						catalog:data.catalog,
						title:data.title
					},
					noCont:data.catalog,
					onOff:false
                })
            }
        });
		
	}
	
	//按下
  touchstart(ev){
	let xs = ev.changedTouches[0].pageX;
	//设置目录的top值
	
	this.setState({
		start:xs
	})
  }
  //移动
  touchmove(ev){
	let xm = ev.changedTouches[0].pageX;
	this.setState({
		move:xm
	})
  }
  //抬起
  touchend(){
	let X = window.innerWidth/2;
	let ScrollY = window.pageYOffset/40;
	console.log(ScrollY)
	if(this.state.move-this.state.start>X){
		//左滑
		this.setState({
			tab:true,
			top:ScrollY
		})
		
	}else{
		//右滑
		this.setState({
			tab:false,
			top:ScrollY
		})
	}
  }

  // 夜间模式
	neightF(ev){
		this.setState({
			atNeight:!this.state.atNeight
		})
	}
	// 字体
	fontF(ev){
		this.setState({
			font:!this.state.font
		})
	}
	//目录
	catalogF(ev){
		let ScrollY = window.pageYOffset/40;
		this.setState({
			tab:!this.state.tab,
			top:ScrollY
		})
	}


  render() {
	let {id} = this.props.location.state;
	let {categoryIndx} = this.state;
	let callback = {
		neightF:this.neightF,
		fontF:this.fontF,
		catalogF:this.catalogF
	}
	let contComp = null;
	let content = {
		name:null
	};
	if(this.state.onOff){
		return(<div></div>);
	}else{
	// 书的章节及内容,传入索引值
	content = bookContent[categoryIndx];
	//书的内容
	contComp = content.cont.split(/\n/).map((e,i)=>{
		return (
			<p
				key={i}
			>{e}</p>
		)
	})
	}
	//返回
	let {history:{goBack,push}} = this.props;
    return (
  		<div className={`g-wrap reader mode-light 
  			${this.state.atNeight ? 'bg':''} 
  			${this.state.font ? 'font':''}
  		`}>
	
	{/*<!--state-opened左滑动位移-->*/}
	<section className={`g-main 
		${this.state.tab ? 'ui-main':''}
	`}
	onTouchStart={this.touchstart}
	onTouchMove={this.touchmove}
	onTouchEnd={this.touchend}
	>
		<div className="content j-content" >
			<div>
				{/*<!--下拉出现刷新界面-->*/}
				<div className="up-hint">
					<div className="ui-loading j-loading" >	
					</div>
					<p>上一章：第一卷　正文</p>
				</div>
				<div className="g-book">  
					<div className="m-mb">  
						<div className="m-content"> 
							
							<h1><span>{content.name}</span></h1>
							{contComp}
							
						</div>  
					</div>  
				</div>
				<div className="holdplace">
					<p>上拉阅读下一章</p>
				</div>
			</div>
		</div>
	</section>								
   	<aside className={`ui-panel ${this.state.tab ? 'ui-main1':''}`}
	   style={{top:this.state.top+'rem'}}
	   >
   		<section className="m-cata" >
   			<div className="sort-btn clearfix">
   				<span>{this.state.lent}</span>
   				<button className="j-squece">倒序 
   					<span className="caret  reverse "><i></i></span>
   				</button>
			</div>   
   			
   			<div className="aside-btn" >
   				<button className="dir-btn dir-btn-disable">上100章</button>
   				<button className="dir-btn j-next-100">下100章</button>
   			</div>

			   {/*目录*/}
			   
			{this.state.noCont?
			   <ReadingCatalog 
				data={this.state}
				lent={this.lent}
				gotoCategory={this.gotoCategory}
				/>:''}
   			
   			<div className="aside-btn">
   				<button className="dir-btn dir-btn-disable">上100章</button>
   				<button className="dir-btn j-next-100">下100章</button>
   			</div>
   		</section>
   	</aside>

			
			{/*<!--底部图标-->*/}
			<Icon {...callback}
				down={this.state.down}
			/>
		
   
   	<section className="guide" 
	   ref="opc"
	   onClick={ev=>{
		ev.preventDefault();
		ev.stopPropagation();
		this.refs.opc.style.display = 'none';
	   }}
		   >
		<p>上一页</p>
		<p><i></i>显示/隐藏操作栏</p>
		<p>下一页</p>
	</section>
	<section 
	className={`unsupport ${this.state.noCont ? '':'support'}`}
	>
		<p><img src={require('../img/face-error.png')} /></p>
		<p>本地书需要先放入书架才能阅读</p>
		<p><a 
		className="btn btn-primary block j-put-shelf" 
		href="javascript:;"
		onClick={ev=>{
			ev.stopPropagation();
			ev.preventDefault();
			push('/myinfo');
		}}
		>放入书架</a></p>
		<p><a href=""
			onClick={ev=>{
				ev.stopPropagation();
				ev.preventDefault();
				goBack();
			}}
		>&lt;&lt;返回</a></p>
	</section>
   
   </div>
	
    );

  }
  
}

export default Reading;

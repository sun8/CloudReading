import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
//    <!--banner--start-->

let bannerArr = [
	{
		name:'白鹿原',
		img:require('../../../img/banner1.jpg'),
		id:'1200846'
	},
	{
		name:'纽约客',
		img:require('../../../img/banner3.jpg'),
		id:'26253698'
	},
	{
		name:'欢乐颂',
		img:require('../../../img/banner6.jpg'),
		id:'26757148'
	}
]

let dura = '0.25s'
class Banner extends Component {
	constructor(){
		super();
		this.state = {
			down:null,
			move:null,
			boxW:48,
			boxL:-16,
			bannerArr:bannerArr,
			indxArr: [0,1,2],
			transition: '1s'
			
		}
		this.start=null;
		this.move=null;
		this.timer = null;
		this.timerOut = null;
		this.boxL = 0;

		this.touchstart = this.touchstart.bind(this);
		this.touchmove = this.touchmove.bind(this);
		this.touchend = this.touchend.bind(this);
		this.transitionEnd = this.transitionEnd.bind(this);
		this.resetPosition = this.resetPosition.bind(this);
		this.autoPlay = this.autoPlay.bind(this);
		
	}

	resetPosition(){
		let {bannerArr, indxArr } = this.state;
		//图片的长度
		let l = bannerArr.length;
		//拿到当前图片的索引012
		indxArr = indxArr.map(elt=>{
			//是图片最后一张的时候，变成第0个
			if(elt+1===l){
				return 0;
			}
			//让他索引加1
			return elt + 1;
		});
		
		this.setState({
			indxArr,
			boxL: -16,
			transition: '0s'
		});

	}

	//transition 结束后触发
	transitionEnd(){

		console.log('9')

		let { boxL, bannerArr, indxArr } = this.state;
		
		let l = bannerArr.length;
		let X = window.innerWidth/80;
		//判断左滑右滑
		let isLeftScroll = this.move-this.start<=0;
		//是否能滑动成功
		let canSwitch = Math.abs(this.move-this.start)>=X;
		//如果没有成功就return
		if(!canSwitch) return;

		indxArr = indxArr.map(elt=>{
			//左滑 当前索引加1
			if(isLeftScroll){
				if(elt+1===l){
					return 0;
				}
				return elt + 1;
			}else{
				//右滑 当前索引减1
				if(elt===0){
					return l-1;
				}
				return elt-1;
			}
		});

		this.setState({
			indxArr,
			boxL: -16,
			transition: '0s'
		},// ev=>this.autoPlay()
		);//回调当数据更新后需要掉自动轮播的函数
	}

	//自动播放
	autoPlay(){
		//清除定时器
		clearInterval(this.timer);
		this.timer = setInterval(()=>{
			//让图片右滑
			this.setState({
				boxL: -32,
				transition: '1s'
			});
		clearTimeout(this.timerOut);
		//滑动结束后执行让图片左滑
		this.timerOut = setTimeout( ev=> this.resetPosition(), 1000);
		},3000)
	}
	//装载前调用自动轮播
	componentDidMount(){
		//this.autoPlay();
		
	}
	//卸载之前要把定时器关掉
	componentWillUnmount(){
		clearInterval(this.timer);
		clearTimeout(this.timerOut);

	}

	//按下
  touchstart(ev){
	 //关掉定时器
	clearInterval(this.timer);
	clearTimeout(this.timerOut);
	//按下的坐标
	let xs = ev.changedTouches[0].pageX/40;
	this.start=xs;
	//元素宽
	let	W = this.refs.banList.getBoundingClientRect().width*this.state.bannerArr.length/40;
	//存住当前图片的定位父级的left值
	this.boxL = this.refs.boxBan.offsetLeft/40;
	this.setState({
		boxW:W,
		transition: '0s'
	})
console.log(this.boxL)

  }

  //移动
  touchmove(ev){
	//鼠标移动的点
	let xm = ev.changedTouches[0].pageX/40;
	//移动的距离+之前存的距离
	this.move=xm;
	let l = -16 +xm -this.start;
	console.log(this.boxL,xm,this.start)
	this.setState({
		boxL:l,
		transition: '0s'
	})
	this.props.bl(l);
	console.log(l)
  }


  //抬起
  touchend(ev){
	  //可视区的宽的一半
	let X = window.innerWidth/80;
	//判断是够是左右滑动
	let isLeftScroll = this.move-this.start<=0;
	//滑动是够可以生效
	let canSwitch = Math.abs(this.move-this.start)>=X;

	this.setState({
		boxL:-16,
		transition:'0s'
	});
	//滑动生效
	if(!canSwitch) return;
	if(isLeftScroll){
		//左滑
		this.setState({
			boxL:-32,
			transition: dura
		});
	}else{
		//有滑
		this.setState({
			boxL:0,
			transition: dura
		});
	}
  }


  render() {
	let {history:{push}} = this.props;
	
	let {bannerArr:ar, indxArr, transition} = this.state;
		//循环的是布局3个图片的索引
    let BanArr = [ ar[indxArr[0]], ar[indxArr[1]], ar[indxArr[2]] ].map((e,i)=>{
		return (
			<li key={i} ref="banList"
			onClick={ev=>{
				ev.preventDefault();
				ev.stopPropagation();
				/*push({
					pathname: '/bookDetails',
					state: {
							id:e.id
					}
				});  */
			}}
			>
				<img src={e.img} alt={e.name}/>
			</li>
		)
	})
		
		return (
			
    	<div className="banner"
				onTouchStart={this.touchstart}
				onTouchMove={this.touchmove}
				onTouchEnd={this.touchend}
			>
				<ul 
					onTransitionEnd = {this.transitionEnd}
					className="ban_list clearfix"
					ref="boxBan"
					style={
						{
							width:this.state.boxW +'rem',
							left:this.state.boxL+'rem',
							transition: transition
						}
					}
					
				>
					{BanArr}
					
				</ul>
				{this.state.boxL}
			</div> 

    );
  }


}

export default Banner;

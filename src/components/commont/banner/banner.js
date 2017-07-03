import React, { Component } from 'react';
//    <!--banner--start-->
class Banner extends Component {
	constructor(){
		super();
		this.touchstart = this.touchstart.bind(this);
		this.touchmove = this.touchmove.bind(this);
		this.touchend = this.touchend.bind(this);
	}
  render() {
		let {history:{push}} = this.props;
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
    let BanArr = bannerArr.map((e,i)=>{
				return (
					<li key={i}>
						<a href="" 
							onClick={ev=>{
								ev.preventDefault();
								ev.stopPropagation();
								push({
										pathname: '/bookDetails',
										state: {
												id:e.id
										}
								});  
							}}
						alt={e.name}
						>
						<img src={e.img} />
						</a>
					</li>
				)
			})
		
		return (
			
    	<div className="banner"
				onTouchStart={this.touchstart}
				onTouchMove={this.touchmove}
				onTouchEnd={this.touchend}
			>
				<ul className="ban_list clearfix">
					{BanArr}
					
				</ul>
			</div> 

    );
  }

	//按下
  touchstart(ev){

  }
  //移动
  touchmove(ev){

  }
  //抬起
  touchend(){
	  
  }
}

export default Banner;

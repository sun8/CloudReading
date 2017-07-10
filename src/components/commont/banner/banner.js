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
export default function(props) {
	let {history:{push}} = props;
		//循环的是布局3个图片的索引
    let BanArr = bannerArr.map((e,i)=>{
		return (
			<div key={i}
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
			>
				<img src={e.img} alt={e.name}/>
			</div>
		)
	})
		
	return (

	<ReactSwipe
		className="banner"
		swipeOptions={{
			continuous: true,
			auto: 2000
		}}
	>
		{BanArr}
	</ReactSwipe>

    );
}



import React, { Component } from 'react';
import $ from 'jquery';
//存取localStorage中的数据

//本地存储数据

//头部导航列表
class SeachCont extends Component {
	constructor(props){
	    super(props);
	    this.state = {
			list:null
		}
		this.dele = this.dele.bind(this);
	}
	
 dele(){
	//本地数据存储清空
  	localStorage.setItem('key',JSON.stringify([]));
	this.setState({
  		list:[]
  	})
	
  }

  render() {
  	//热门搜索
  	let arrD = ['永恒的边缘','阿耐','欢乐颂','白鹿原','宠爱入骨，首席的意外新妻','人民的名义','侯沧海商路笔记','婚浅情深：总裁诱妻上瘾','一代医后','月关'];
  	let Arr = arrD.map((e,i)=>{
  		return  <a href="javascript:;" key={i}>
  					<em className={i%2?'new':'hot'}></em>{e}
  				</a>
  	})
  	//搜素记录，从本地存储中取数据
  	localStorage.setItem('key',localStorage.getItem('key')?localStorage.getItem('key'):JSON.stringify([]));
	let cookic = JSON.parse(localStorage.getItem('key'));
//	console.log(cookic)
  	if(cookic.length){
		this.state.list = cookic.map((e,i)=>{
			return 	<a href="javascript:;" key={i}>{e}</a>
		})
	}else{
		//清空
		this.state.list = [];
	}
	
    return (
    	
		<section className="m-search-key" id="J_content">	
			<dl className="m-hotkey">
				<dt>大家都在搜</dt>
				<dd>
					{Arr}						
				</dd>
			</dl>
			<dl className="m-historykey">
				<dt>
					最近搜索
					<span
					className="clear" 
					id="clearHistory"
					onClick={this.dele}>
					</span>
				</dt>					
				<dd id="searchHistory">
					{this.state.list}
				</dd>
			</dl>			
		</section>
	
	
    );
  }
  
 
}

export default SeachCont;

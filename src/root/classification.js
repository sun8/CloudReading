import React, { Component } from 'react';
//数据
import $ from 'jquery';
//路由
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
//头部
import Nav from '../components/commont/nav/nav';
//列表
import Titlelist from '../components/commont/nav/titleList';

//下载客户端
import Down from '../components/different/down';
//footer底部
import Footer from '../components/commont/footer/footer';

//<!--分类(跳转)--start-->
class Classification extends Component {
	constructor(props){
		super(props);
		this.state = {
			list:null
		}
	}
	
	componentDidMount(){
		let _this = this; 
//		$.ajax({
//			url:'https://n.bjtrm.com/myproject/Book/GetData?',
//			dataType:'jsonp',
//			callback:'boy',
//			success:function(data){
//				_this.setState({
//		          list:data
//		       })
//			}
//		});
		
	}
	
	
	
	
	
  render() {

	
    return (
  		<div className="wrap">
		<section className="m-lib men">
			<h3><a href=""><em className="sep"></em>男生小说</a></h3>
			<table><tbody>
				<tr>
					<td><a href="" className='hot' >都市生活</a></td>
					<td><a href="" className='hot' >官场职场</a></td>
					<td><a href=""  >玄幻仙侠</a></td>
				</tr>
				<tr>
					<td><a href=""  >悬疑探险</a></td>
					<td><a href=""  >军事谍战</a></td>
					<td><a href=""  >科幻奇幻</a></td>
				</tr>
				<tr>
					<td><a href=""  >同人网游</a></td>
					<td><a href=""  >灵异恐怖</a></td>
					<td><a href=""  >历史传奇</a></td>
				</tr>
				<tr>
					<td><a href=""  >短篇小说</a></td>
				</tr>
			</tbody></table>
		</section>
		
		<section className="m-lib women">
			<h3><a href=""><em className="sep"></em>女生小说</a></h3>
			<table><tbody>
				<tr>
					<td><a href=""  >都市言情</a></td>
					<td><a href=""  >穿越架空</a></td>
					<td><a href="" className='hot' >宫斗宅斗</a></td>
				</tr>
				<tr>
					<td><a href=""  >古风古韵</a></td>
					<td><a href="" >种田重生</a></td>
					<td><a href=""  >浪漫青春</a></td>
				</tr>
				<tr>
					<td><a href=""  >同人网游</a></td>
					<td><a href=""  >仙侠幻情</a></td>
					<td><a href=""  >灵异推理</a></td>
				</tr>
				<tr>
					<td><a href=""  >短篇美文</a></td>
				</tr>
			</tbody></table>
		</section>

		<section className="m-lib">
			<h3><a href=""><em className="sep"></em>图书书库</a></h3>
			<table><tbody>
				<tr>
					<td><a href="" className='hot' >小说作品</a></td>
					<td><a href="" className='hot' >人文社科</a></td>
					<td><a href=""  >品质生活</a></td>
				</tr>
				<tr>
					<td><a href=""  >两性情感</a></td>
					<td><a href=""  >成功励志</a></td>
					<td><a href=""  >经济管理</a></td>
				</tr>
				<tr>
					<td><a href=""  >文学作品</a></td>
					<td><a href=""  >文化艺术</a></td>
					<td><a href=""  >自然科学</a></td>
				</tr>
				<tr>
					<td><a href=""  >亲子少儿</a></td>
					<td><a href=""  >计算机</a></td>
					<td><a href=""  >培训考试</a></td>
				</tr>
				<tr>
					<td><a href=""  >杂志期刊</a></td>
					<td><a href=""  >外文外版</a></td>
				</tr>
			</tbody></table>
		</section>
	    	
	    	
	    	<a id="J_GoTop" className="m-gotop" href="#root"></a>
	    	<Down>下载和搜索</Down>
		        
		    <Footer>底部</Footer>
		</div>
    );

  }


}

export default Classification;

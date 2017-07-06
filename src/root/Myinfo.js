import React, { Component } from 'react';
import $ from 'jquery';
import MoreTitle from '../components/commont/more/title';
import Foot from '../components/commont/footer/Foot'; 
import {Link} from 'react-router-dom';
//头部导航列表
class Myinfo extends Component {
	constructor(props){
	    super(props);
			 
	}

	componentDidMount(){
		let {history:{push}, userInfo} = this.props;

		if(!userInfo){
			setTimeout(ev=>{
				push('/account');
			}, 1000);
		}
	}

	

  render() {

		let {userInfo} = this.props;
		if(!userInfo){
			return (<div>跳转到登录页面</div>)
		}

    return (
			
    	<div>
			<header className="level2">
				<section className="title clearfix">
					<a className="mid" href="javascript:;">用户</a>
					
					<Link className="right" to="/">首页</Link>
				</section>
			</header>
			
			<section className="m-acinfo">
				<img width="70" height="70" src={require('../img/tx-default.png')}/>
				<h2>{userInfo.username}
							<span className="gender gender-f"></span>
					<span className="lv">Lv 1</span>
				</h2>
				<p>登录账号：{userInfo.username}</p>
			</section>
			<section className="m-acmore">
				<div className="group">
					<p><a href="/recharge/list.do">
						<span className="label">余额</span><span className="value">充值送红包</span>
						<span className="fr"><span className="ui-red-light btn-x" id="J_recharge" >充值</span></span>
					</a></p>
					<p className="notfirst"><a href="/grant/hongbao.do">
						<span className="label">红包</span><span className="value">红包抵阅点</span>
						<span className="fr"><span className="ui-red-light btn-x" id="J_exchange" >兑换</span></span>
					</a></p>
					<p className="notfirst"><a href="/myinfo/point.do">
						<span className="label">积分</span><span className="value">还没有积分哦</span>
					</a></p>
				</div>

				<div className="group">
					<p className="notfirst"><a href="/shelf/read.do">
						<span className="label">我的书架</span><span className="value">0本</span>
						<span className="fr"><span className="ui-rightaw">&gt;</span></span>
					</a></p>
				</div>

				<div className="group group-bottom">
					<a href="javascript:;" className="ui-red-light" >下载网易云阅读客户端</a>
					<a 
						href="/logout" 
						className="ui-gray-dark logout"
						onClick={ev=>{
							ev.stopPropagation();
							ev.preventDefault();
							this.props.logout();
							
						}}
					>退出登录</a>
				</div>
			</section>
			<Foot />
		</div>
		)
  }
}

export default Myinfo;

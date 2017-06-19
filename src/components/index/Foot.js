import React, { Component } from 'react';
class Foot extends Component {
  render() {
    return (
//				<!--footer--start-->
		   	<footer>
				<nav className="channel">
					<a href="/yc">男生</a>
					<a href="/ycmm">女生</a>
					<a href="/book">出版</a>
					<a href="/help/about.do">客服</a>
					<a href="/help/weixin.do">微信</a>
				</nav>
				<nav>
					<a href="/client">客户端</a>
					<a href="/help">帮助</a>
					<a href="https://fankui.163.com/ft/comment.fb?pid=11001">反馈</a>
					<a href="/" className="cur">触屏版</a>
					<a href="https://yuedu.163.com/index">电脑版</a>
				</nav>
				<div className="m-right"><p>网易公司版权所有©1997-2017</p></div>
			</footer>
// 	<!--footer--end-->
    );
  }
}

export default Foot;

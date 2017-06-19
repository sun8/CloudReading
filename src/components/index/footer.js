import React, { Component } from 'react';
class Footer extends Component {
  render() {
    return (
//		<!--footer--start-->
	   	<footer>
		    <nav>
		        <a href="/client">客户端</a>
		        <a href="/help">帮助</a>
		        <a href="">反馈</a>
		        <a href="/" className="cur">触屏版</a>
		        <a href="">电脑版</a>
		    </nav>
		    <div className="m-right"><p>网易公司版权所有&#169;1997-2017<span id="J_Copyright"></span></p></div>
		</footer>
//	<!--footer--end-->
    );
  }
}

export default Footer;

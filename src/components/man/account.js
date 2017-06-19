import React, { Component } from 'react';
class List extends Component {
  render() {
    return (
			<div className="m-login-container">
        <input type="hidden" id="csrf_token" name="csrf_token" value="" />
        <input type="hidden" id="backUrl" name="backUrl" value="" />
        <div className="m-login-header">
	        <a className="left back" id="goBack" href="index.html"></a>
	        <span>用户名快速登录</span>
	        <a className="right" href="index.html" id="goHome">首页</a>
        </div>
        <div className="m-login-content">
	        <div className="getCode-block">
            <input type="number" pattern="\d*" placeholder="用户名可为数字、字母、下划线" className="u-input phone-number" tabindex="1">
            <i className="clear-icon" style="display: block;"></i>
            <input type="number" pattern="\d*" placeholder="6-16位密码，区分大小写" className="u-input phone-number" tabindex="1">
            <a href="javascript:;" id="getCode" className="u-button disable" tabindex="2">注册</a>
            <a href="javascript:;" id="logCode" className="u-button disable" tabindex="2">登录</a>
	        </div>
        </div>
        <div className="m-login-switch">
	        <div className="line-title">
            <h4>
                以下帐号直接登录
            </h4>
	        </div>
        	<ul className="f-cb">
            <li className="mail" >
              <a href="/"><span></span>网易邮箱</a>
            </li>
            <li className="weibo" >
              <a href="/"><span></span>新浪微博</a>
            </li>
            <li className="tx-weibo" >
              <a href="/"><span></span>腾讯微博</a>
            </li>
          </ul>
	      </div>
	    </div>
    );
  }
}

export default List;

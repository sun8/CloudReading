import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';
//头部导航列表
class Notlogin extends Component {
	constructor(props){
	    super(props);
		this.add = this.add.bind(this);
    this.login = this.login.bind(this);
	}
  render() {
  	let {history:{push, goBack}} = this.props;
	
    return (
    	<div className="m-login-container">
	        
	        <div className="m-login-header">
		        <a className="left back"
						 id="goBack" 
						 href="/"
						 onClick={ev=>{
								ev.stopPropagation();
								ev.preventDefault();
								goBack();
							}}
						></a>
		        <span>用户名快速登录</span>
		        <Link to="/" className="right" id="goHome"> 首页 </Link>
	        </div>
	        <div className="m-login-content">
		        <div className="getCode-block">
	            <input type="text" 
		            placeholder="用户名可为数字、字母、下划线" 
		            className="u-input"
		            id="user"/>
	            <i className="clear-icon" style={{display: "block"}}></i>
	            <input type="number" 
		            pattern="\d*" 
		            placeholder="6-16位密码，必须为数字" 
		            className="u-input" 
		            id="pass"/>
	            <a href="javascript:;" 
		            id="getCode" 
		            className="u-button disable" 
		            style={{marginRight:"2%"}}
		            onClick = {this.add}
	            >注册</a>
	            <a href="javascript:;" 
                id="logCode" 
                className="u-button disable"
                onClick = {this.login}
	            >登录</a>
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
					<p id="erro">用户名或密码错误</p>
		    </div>
		    
		
		)
  }

	add(){
  	//注册
  	this.act('register');
  }
  
  login(){
  	//登录
  	this.act('login');
  }
  
  act(acco){
		let {history:{push}} = this.props;
  	//value值为空的情况下
  	if(!$('#user').val()||!$('#pass').val()){
  		$('#erro').html('用户名或密码不能为空！')
  		$('#erro').css('display','block');
      this.shake($('#erro')[0],'left',function(){
      	$('#erro').animate({
						opacity:0
					},3000,'linear',function(){
						$('#erro').css({
							display:'none',
							opacity:1
							});
					})
      })
      return;
  	}
  	//不为空请求数据
  	$.ajax({
      url:'http://api.noods.me/'+acco,
      data:{
        username:$('#user').val(),
        passw:$('#pass').val(),
				cfPassw:$('#pass').val()
      },
			type:'post',
      success:(data)=>{
				console.log(data)
				if(data.code){
					//失败
				}else{
					//成功
					push({
							pathname: '/myinfo',
							state: {
									user:data.data.username
							}
            });
				}
        // if(data[0]){
          //成功跳转
					// push({
          //       pathname: '/account/Login',
          //       state: {
          //           user:data[0].username
          //       }
          //   }); 
          // alert('欢迎'+data[0].username)
          // window.location.href = 'http://localhost:3000/';

        // }else{
          //失败
          // $('#erro').html((acco==='Login')?'用户名或密码错误！':'用户已注册');
          
          // $('#erro').css('display','block');
          // this.shake($('#erro')[0],'left',function(){
          // 	$('#erro').animate({
					// 		opacity:0
					// 	},3000,'linear',function(){
					// 		$('#erro').css({
					// 			display:'none',
					// 			opacity:1
					// 		});
					// 	})
          	
          // })
        //   console.log('失败')
        // }
      }
    });
  }
  
  
  
  
  
	shake(obj,attr,endFn){
	//抖动函数
    var arr=[];
    var timer=null;
    var n=0;
    if(!obj.num){
        obj.num=parseFloat(getComputedStyle(obj)[attr]);
    }
    //拿到一组数字，抖动的幅度。
    for(var i=20;i>0;i-=2){
        arr.push(i,-i);
    }
    arr.push(0);
    //用定时器来实现抖动效果。
    clearInterval(timer);
    timer=setInterval(function(){
        n++;
        if(n>arr.length-1){
            clearInterval(timer);
            endFn&&endFn();
        }
        obj.style[attr]=arr[n]+obj.num+'px';
    },30);
}
}

export default Notlogin;

import React, { Component } from 'react';
//头部导航
class Readed extends Component {
  render() {
    return (
    	<div className="m-last-book clearfix">  
	    	<span>还没有最近阅读的书籍哟</span>
	      	<a href="" className="j-gap last-book" ></a>
	      	<a href="javascript:;" className="shelf" >书架</a> 
	      	<i className="sep"></i>          
	    </div>
    );
  }
}

export default Readed;

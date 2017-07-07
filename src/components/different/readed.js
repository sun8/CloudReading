import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//头部导航
class Readed extends Component {
  render() {
    return (
    	<div className="m-last-book clearfix">  
	    	<span>还没有最近阅读的书籍哟</span>
	      	<Link to="/myinfo" className="shelf" >书架</Link> 
	      	<i className="sep"></i>          
	    </div>
    );
  }
}

export default Readed;

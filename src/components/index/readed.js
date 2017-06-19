import React, { Component } from 'react';
class Readed extends Component {
  render() {
    return (
//			<!--阅读的书籍--start-->
        <div className="m-last-book clearfix">  
        	<span>还没有最近阅读的书籍哟</span>
          <a href="" className="j-gap last-book" ></a>
          <a href="/shelf/read.do" className="shelf" >书架</a> 
          <i className="sep"></i>          
        </div>
//   	<!--阅读的书籍--end-->
    );
  }
}

export default Readed;

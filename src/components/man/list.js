import React, { Component } from 'react';
class List extends Component {
  render() {
    return (
//			<!--列表-->
        <div className="book-list" id="J_BookList">
    		<div className="taste-bookele">
            	<a className="wrap1 clearfix" href="">
	                <img className="bookcover" src="img/11.jpg" alt="30岁前，最好的修行是恋爱">
	                <h3>30岁前，最好的修行是恋爱</h3>
	                <p>苏芩/两性关系</p>
	                <span className="abstract">苏芩与迷茫都市人心灵对话：“你最该去的地方，是自己的内心，去看看那颗心，你要做你的一心之主。然后，所有的一切，从这里开始！”作者以此传达给大家：心境变了，世界就变了，你变好，世界跟着变好！
	 一本风靡都市白领间充满正向能量的情感励。
	                </span>
	            </a>
        	</div>
    	</div>
    );
  }
}

export default List;

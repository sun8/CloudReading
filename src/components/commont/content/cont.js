import React, { Component } from 'react';
//    <!--内容列表--start-->
class Content extends Component {
  render() {
    return (
			<li>
        <a href="bookDetails.html" className="pic">
        	<img src={require('../../../img/1.jpg')}  alt="24个比利" />
        </a>
        <a href=""  className="info">
            <h4>24个比利</h4>
            <span>【美】丹尼尔·凯斯</span>
        </a>
    	</li>

    );
  }
}

export default Content;

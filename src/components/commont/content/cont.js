import React, { Component } from 'react';
//    <!--内容列表--start-->
class Banner extends Component {
  render() {
    return (
			<li>
        <a href="bookDetails.html" class="pic">
        	<img src="img/1.jpg" srcset="" alt="24个比利" />
        </a>
        <a href=""  class="info">
            <h4>24个比利</h4>
            <span>【美】丹尼尔·凯斯</span>
        </a>
    	</li>

    );
  }
}

export default Banner;

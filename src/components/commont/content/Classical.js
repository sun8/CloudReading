import React, { Component } from 'react';
//    <!--经典排行榜--start-->
class Classical extends Component {
  render() {
    return (
    	
    	<li>
				<em className="classical">1</em>
        <a href="" className="pic">
        	<img src={require('../../../img/5.jpg')}  alt="24个比利" />
        </a>
        <a href=""  className="info">
            <h4>24个比利</h4>
            <span>【美】丹尼尔·凯斯</span>
        </a>
    	</li>
			
    );
  }
}

export default Classical;

import React, { Component } from 'react';
//    <!--banner--start-->
class Banner extends Component {
  render() {
    return (

    	<div className="banner">
				<ul className="ban_list clearfix">
					<li><a href="" alt="《欢乐颂》作者阿耐经典代表作"><img src={require('../../../img/banner1.jpg')} alt="" /></a></li>
					<li><a href="" alt="《欢乐颂》作者阿耐经典代表作"><img src={require('../../../img/banner2.jpg')} alt="" /></a></li>
					<li><a href="" alt="《欢乐颂》作者阿耐经典代表作"><img src={require('../../../img/banner3.jpg')} alt="" /></a></li>
					<li><a href="" alt="《欢乐颂》作者阿耐经典代表作"><img src={require('../../../img/banner4.jpg')} alt="" /></a></li>
					<li><a href="" alt="《欢乐颂》作者阿耐经典代表作"><img src={require('../../../img/banner5.jpg')} alt="" /></a></li>
					<li><a href="" alt="《欢乐颂》作者阿耐经典代表作"><img src={require('../../../img/banner6.jpg')} alt="" /></a></li>
				</ul>
			</div> 

    );
  }
}

export default Banner;

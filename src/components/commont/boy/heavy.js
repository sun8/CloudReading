import React, { Component } from 'react';
//    <!--内容列表--start-->
class Heavy extends Component {
	constructor(props){
    super(props)
  }
	
	
  render() {
    return (
    	<ul>
		<li>
            <a href="" className="j-gap">
                <h4>[权力]桃运仕途：我的美女领导</h4>
                <p>被打压流放却开始真正的仕途之路，美女接踵而至！</p>
            </a>
        </li>	
		<li>
            <a href="" className="j-gap">
                <h4>[玄幻]灭世武修</h4>
                <p>未婚妻下毒手，他一夜之间天才变为废柴！</p>
            </a>
        </li>
        <li>
            <a href="" className="j-gap">
                <h4>[热血]奇门弄宝</h4>
                <p>偶得奇门之术和阴阳透视眼，踏上别样人生征途。</p>
            </a>
        </li>
        <li>
            <a href="" className="j-gap">
                <h4>[悬疑]我当算命先生那几年</h4>
                <p>以我算卦的那些年，向你展示中国传统文化魅力。</p>
            </a>
        </li>
        </ul>
    );
  }
}

export default Heavy;

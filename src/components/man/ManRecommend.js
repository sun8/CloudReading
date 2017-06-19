import React, { Component } from 'react';
class ManRecommend extends Component {
  render() {
    return (
//<!--重磅推荐--start-->
        <section className="m-list-box">
        	<!--标题-->
            <h3 className="clearfix">
                <strong className="fl">
                	<em className="sep"></em>
                	<span className="gradient">重磅推荐</span>
                </strong>
                <a href="more.html" className="more" >更多<em className="m-arrow"></em></a>
            </h3> 
            <!--内容-->
            <div className="m-book-list">
            	<ul className="clearfix">
            		<li>
	                    <a href="" className="pic">
	                    	<img src="img/1.jpg" srcset="" alt="24个比利" />
	                    </a>
	                    <a href=""  className="info">
	                        <h4>一号红人</h4>
	                        <span>山间老寺</span>
	                    </a>
	                </li>
	                <li>
	                    <a href="" className="pic">
	                    	<img src="img/1.jpg" srcset="" alt="24个比利" />
	                    </a>
	                    <a href=""  className="info">
	                        <h4>绝世高手</h4>
	                        <span>我自对天笑</span>
	                    </a>
	                </li>
	                <li className="margin0">
	                    <a href="" className="pic">
	                    	<img src="img/1.jpg" srcset="" alt="24个比利" />
	                    </a>
	                    <a href=""  className="info">
	                        <h4>绝世武神</h4>
	                        <span>净无痕</span>
	                    </a>
	                </li>
            	</ul>
            </div>   
        	<div className="m-book-item">
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
            </div>
        </section> 
//      <!--重磅推荐--end-->
    );
  }
}

export default ManRecommend;

import React, { Component } from 'react';
class classical extends Component {
  render() {
    return (
//<!--经典排行榜--start-->
        <section className="m-list-box subject-box">            
            <!--标题-->
            <h3 className="clearfix">
                <strong className="fl">
                	<em className="sep"></em>
                	<span className="gradient">经典排行榜</span>
                </strong>
                <a href="/column/1.do" className="more" >更多<em className="m-arrow"></em></a>
            </h3> 
            <div className="m-book-list">
            	<ul className="clearfix">
            		<li>
            			<em className="classNameical">1</em>
	                    <a href="" className="pic">
	                    	<img src="img/5.jpg" srcset="" alt="24个比利" />
	                    </a>
	                    <a href=""  className="info">
	                        <h4>24个比利</h4>
	                        <span>【美】丹尼尔·凯斯</span>
	                    </a>
	                </li>
	                <li>
	                	<em className="classNameical">2</em>
	                    <a href="" className="pic">
	                    	<img src="img/5.jpg" srcset="" alt="24个比利" />
	                    </a>
	                    <a href=""  className="info">
	                        <h4>比利战争（《24个比利》续作）</h4>
	                        <span>【美】丹尼尔·凯斯</span>
	                    </a>
	                </li>
	                <li className="margin0">
	                	<em className="classNameical">3</em>
	                    <a href="" className="pic">
	                    	<img src="img/5.jpg" srcset="" alt="24个比利" />
	                    </a>
	                    <a href=""  className="info">
	                        <h4>时光倒流的女孩（现象级畅销书《岛上书店》作者口碑成名作！</h4>
	                        <span>【美】加·泽文</span>
	                    </a>
	                </li>
            	</ul>
            </div> 
        </section>
//     <!--经典排行榜--end-->
    );
  }
}

export default classical;

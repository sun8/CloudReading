import React, { Component } from 'react';
class special extends Component {
  render() {
    return (
//			<!--专题阅读--start-->
        <section className="m-list-box"> 
            <h3 className="clearfix">
                <strong className="fl">
                	<em className="sep"></em>
                	<span className="gradient">专题阅读</span>
                </strong>
            </h3>         
            <div className="m-subject">
                 <a href="special.html" className="j-gap" title="重磅好书六一欢乐促  献礼永远的大儿童">
                    <img src="img/child.jpg" alt="重磅好书六一欢乐促  献礼永远的大儿童">
                    <h3>重磅好书六一欢乐促  献礼永远的大儿童</h3>
                    <p>假如你仍童心未泯,快来一起加入狂欢！重磅好书六一欢乐促，献礼永远的大儿童。</p>   
                </a>
            </div>               
            <div className="m-book-item">
                <a href="special.html" title="重磅好书六一欢乐促  献礼永远的大儿童" className="j-gap">点击阅读专题图书<em className="m-arrow"></em></a>
            </div>
        </section>
//      <!--专题阅读--end-->
    );
  }
}

export default special;

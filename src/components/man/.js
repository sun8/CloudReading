import React, { Component } from 'react';
class Timelimit extends Component {
  render() {
    return (
//			<!--限时畅读--start-->
        <section className="m-list-box">
        	<h3 className="clearfix">
                <strong className="fl">
                	<em className="sep"></em>
                	<span className="gradient">限时畅读</span>
                </strong>
                <div className="m-freecount"  date="2017-06-05 12:00">
                	<b>00</b>:<b>00</b>:<b>00</b>
                </div>
                <a href="more.html" className="more" >更多<em className="m-arrow"></em></a>
                
           </h3>      
            <ul className="m-free-list">
                <li>
                    <a href="" className="clearfix" title=" 妖孽兵王">
                         <img src="img/man.jpg" alt=" 妖孽兵王">
                         <h3> 妖孽兵王</h3>
                         <p>笔仙在梦游/都市生活</p>                    
                         <p>重回都市，本想安逸生活，却卷进地下势力倾轧之中！</p>
                         <p>限时畅读<del>3300阅点</del></p>
                    </a> 
                </li>
                <li>
                    <a href="" className="clearfix" title="仙噬">
                         <img src="img/man.jpg" alt="仙噬">
                         <h3>仙噬</h3>
                         <p>颓废的烟121/玄幻仙侠</p>                    
                         <p>凭借着逆天的吞噬灵根，他步步为营，朝着天道最顶端靠近！</p>
                         <p>限时畅读<del>14000阅点</del></p>
                    </a> 
                </li>
                <li>
                    <a href="" className="clearfix" title="深圳迷城">
                         <img src="img/man.jpg" alt="深圳迷城">
                         <h3>深圳迷城</h3>
                         <p>仰者观望于天/官场职场</p>                    
                         <p>我们的爱欲情仇，挣扎，奋斗，梦想……都发生在这里。</p>
                         <p>限时畅读<del>11000阅点</del></p>
                    </a> 
                </li>                      
            </ul>          
        </section>
//      <!--限时畅读--end-->
    );
  }
}

export default Timelimit;

import React, { Component } from 'react';
class Ranking extends Component {
  render() {
    return (
//			<!--图书排行榜(排行跳转)--start-->
        <section className="m-list-box">           
            <h3 className="clearfix">
                <strong className="fl">
                	<em className="sep"></em>
                	<span className="gradient">图书排行榜</span>
                </strong>
                <a href="move1.html" className="more" >更多<em className="m-arrow"></em></a>
            </h3> 
            <ul className="m-rank-list clearfix">
 							<li className="cont">
            		<a href="bookDetails.html" className="" title="一念钟情：墨少的专属娇妻">
	               		<em className="fir">1</em>
		                <img src="img/sort.jpg" alt="一念钟情：墨少的专属娇妻">
		                <h3>一念钟情：墨少的专属娇妻</h3>
		                <p>清平小调/都市言情</p>                    
		                <p>四年前陶意莫名其妙的失了身狼狈不堪被退了婚被威胁着生下了孩子最后……连孩子看都没看上一眼，就弄丢了四年前陶意莫名其妙的失了身狼狈不堪被退了婚被威胁着生下了孩子最后……连孩子看都没看上一眼，</p>
	            	</a>
		        </li>
		        <li>
		            <a href="bookDetails.html">
		               <em className="bg2">2</em>
		               <span>少帅你老婆又跑了 </span>                
		            </a>
		        </li>  
		        <li>
		            <a href="bookDetails.html">
		               <em className="bg3">3</em>
		               <span>怦然心动 </span>                
		            </a>
		       	</li>  
		        <li>
		            <a href="bookDetails.html">
		               <em>4</em>
		               <span>一夜成欢：邪恶总裁坏坏爱 </span>                
		            </a>
		       	</li> 
		        <li>
		            <a href="bookDetails.html">
		               <em>5</em>
		               <span>契约婚姻，娶一赠一 </span>                
		            </a>
		       </li>                
     		</ul>
        </section>
//      <!--图书排行榜--end-->
    );
  }
}

export default Ranking;

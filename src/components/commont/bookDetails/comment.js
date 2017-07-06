import React, { Component } from 'react';
//用户评论内容
class Comment extends Component {
	constructor(props){
		super(props);
	}

  render() {
    return (
		<ul className="j-more-comment">
			{/*<!--用户信息-->*/}
			<li className="item j-intro-wrap clearfix">
				<input type="hidden" name="cid" value=""/>
				<input type="hidden" name="tipstr" value="快樂永随"/>
				<input type="hidden" name="uid" value=""/>
				<img src={require('../../../img/touxiang.jpg')} className="headimg j-headimg"/>
				<p className="user">
					<span className="uname j-uname">
						快樂永随
					</span>
					<span className="time">5月28日  00:27</span>
				</p>		
				<p className="star">
					<span>&nbsp;</span>
					<span>&nbsp;</span>
					<span>&nbsp;</span>
					<span>&nbsp;</span>
					<span>&nbsp;</span>
				</p>								
				<p className="desc j-intro">
					写的是血与泪。为何要发展制造业，因为目前的称不上是制造业。工匠精神，智能制造，都不是无的放矢。
				</p>
				<p className="opt opts clearfix">
					<span className="praise j-praise" data-likes="207"><i></i><span className="likes">207</span> </span>			
				</p>				
			</li>
			<li className="item j-intro-wrap clearfix last">
				<input type="hidden" name="cid" value=""/>
				<input type="hidden" name="tipstr" value=""/>
				<input type="hidden" name="uid" value=""/>
				<img src={require('../../../img/touxiang.jpg')} className="headimg j-headimg"/>
				<p className="user">
					<span className="uname j-uname">
					手机用户_0836
					</span>
					<span className="time">5月28日  21:53</span>
				</p>		
				<p className="star">
					<span>&nbsp;</span>
					<span className="no">&nbsp;</span>
					<span className="no">&nbsp;</span>
					<span className="no">&nbsp;</span>
					<span className="no">&nbsp;</span>
				</p>								
				<p className="desc j-intro">
					咋那里都有你呀大師來了，是不是就是拉拉隊長呀
				</p>
				<p className="opt opts clearfix">
					<span className="praise j-praise" data-likes="162">
						<i></i><span className="likes">162</span> 
					</span>			
				</p>				
			</li>
		</ul>		
    );
  }
}

export default Comment;

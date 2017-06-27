import React, { Component } from 'react';
//    <!--内容列表--start-->
class RankCont extends Component {
	constructor(props){
    super(props)
  }
	
	
  render() {
    return (
			<li>
				<a href="/bookDetails">
					<em className="bg2">{this.props.num}</em>
					<span>{this.props.title} </span>                
				</a>
			</li>
    );
  }
}

export default RankCont;

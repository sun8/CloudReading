import React, { Component } from 'react';
//    <!--内容列表--start-->
class RankCont extends Component {
	constructor(props){
    super(props)
  }
	
	
  render() {
		let {id} = this.props; 
		let {history, location:{pathname}} = this.props;
    return (
			<li 
				onClick={ev=>{
					history.push({
						pathname: '/bookDetails',
						state:{
							id
						}
					}); 
				}}
			>
				<a href="javascript:;">
					<em className="bg2">{this.props.num}</em>
					<span>{this.props.title} </span>                
				</a>
			</li>
    );
  }
}

export default RankCont;

import React, { Component } from 'react';
//    <!--内容列表--start-->
class RankOne extends Component {
	constructor(props){
    super(props)
  }
	
	
  render() {
		let {id} = this.props; 
		let {history, location:{pathname}} = this.props;
    return (
			<li className="cont"
				onClick={ev=>{
					history.push({
						pathname: '/bookDetails',
						state:{
							id
						}
					}); 
				}}
			>
				<a href="javascript:;"  title={this.props.title}>
					<em className="fir">1</em>
					<img src={this.props.img} alt={this.props.title}/>
					<h3>{this.props.title}</h3>
					<p>{this.props.author}/{this.props.name}</p>                    
					<p>{this.props.summary}</p>
				</a>
			</li>
    );
  }
}

export default RankOne;

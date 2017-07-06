import React, { Component } from 'react';
import $ from 'jquery';
//    <!--内容列表--start-->
class Content extends Component {
	constructor(props){
    super(props);
	
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
			<a href="javascript:;" className="pic" >
				<img src={this.props.img}  alt={this.props.title} />
			</a>
			<a href="javascript:;"  className="info">
					<h4>{this.props.title}</h4>
					<span>{this.props.name}</span>
			</a>
		</li>

    );
  }

}

export default Content;

import React, { Component } from 'react';
//    <!--内容列表--start-->
class Heavy extends Component {
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
      <a href="javascript:;" className="j-gap">
          <h4>[{this.props.binding}]{this.props.name}：{this.props.title}</h4>
          <p>{this.props.summary}</p>
      </a>
    </li>	
       
    );
  }
}

export default Heavy;

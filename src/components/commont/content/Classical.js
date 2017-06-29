import React, { Component } from 'react';
//    <!--经典排行榜--start-->
class Classical extends Component {
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
				<em className="classical">1</em>
        <a href="javascript:;" className="pic">
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

export default Classical;

import React, { Component } from 'react';
//    <!--经典排行榜--start-->
class Classical extends Component {
  render() {
    return (
    	
    	<li>
				<em className="classical">1</em>
        <a href="" className="pic">
        	<img src={this.props.img}  alt={this.props.title} />
        </a>
        <a href=""  className="info">
            <h4>{this.props.title}</h4>
            <span>{this.props.name}</span>
        </a>
    	</li>
			
    );
  }
}

export default Classical;

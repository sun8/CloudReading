import React, { Component } from 'react';
//路由
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//<!--内容标题-->
class MoreCont extends Component {
	constructor(props){
    super(props)
  }
  render() {
    return (
			<div className="taste-bookele mar">
				<a className="wrap1 clearfix" href="javascrip:;">
						<img className="bookcover" src={this.props.img} alt={this.props.title}/>
						<h3>{this.props.title}</h3>
				    <p>{this.props.binding} / {this.props.name}</p> 
						<span className="abstract">{this.props.summary}</span>
				</a>
			</div>
		
    	
    );
  }
}

export default MoreCont;

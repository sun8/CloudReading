import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
//头部导航列表
class SearchList extends Component {
	constructor(props){
	    super(props);
	    
	}
  render() {
    return (
    	<div className="search-bookele">
			<a className="wrap1 clearfix" href="">
				<img className="img" src={this.props.img} alt={this.props.title} />
				<h3>{this.props.title}</h3>
				<p>{this.props.binding} | {this.props.name}</p>
				<p>{this.props.num}万人阅读</p>
				<span className="abstract1">{this.props.summary}</span>
			</a>
		</div>
    );
  }
}

export default SearchList;

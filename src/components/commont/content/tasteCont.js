import React, { Component } from 'react';
//    <!--内容列表--start-->
class TasteCont extends Component {
	constructor(props){
    super(props)
  }
	
	
  render() {
    return (
			<div className="taste-bookele">
				<a className="wrap1 clearfix" href="javascript:;">
						<img className="bookcover" src={this.props.img} alt={this.props.title} />
						<h3>{this.props.title}</h3>
						<p>{this.props.author}/{this.props.name}</p>
						<span className="abstract">{this.props.summary}</span>
				</a>
			</div>
    );
  }
}

export default TasteCont;

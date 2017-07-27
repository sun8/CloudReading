import React, { Component } from 'react';
//目录
class Catalog extends Component {
	constructor(props){
		super(props);
	}

  render() {
    return (

			<li className="grade_01 dis">
				<a  href="javascript:;">{this.props.name} / {this.props.title}<i></i></a>
			</li>
			
    );
  }
}

export default Catalog;

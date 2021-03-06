import React, { Component } from 'react';
//限时畅读
class TimeCont extends Component {
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
            <a href="javascript:;" className="clearfix" title={this.props.title}>
                <img src={this.props.img} alt={this.props.title}/>
                <h3>{this.props.title}</h3>
                <p>{this.props.binding} / {this.props.name}</p>                  
                <p>{this.props.summary}</p>
                <p>限时畅读<del>{this.props.num}阅点</del></p>
            </a> 
        </li>
        
    );
  }
}

export default TimeCont;

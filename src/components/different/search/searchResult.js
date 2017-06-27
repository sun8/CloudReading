import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import SearchList from './searchList';
//头部导航列表
class SeachResult extends Component {
	constructor(props){
	    super(props);
	    
	}
  render() {
  	let {books} = this.props.data;
  	let arr = books.map((e,i)=>{
  		let j ={
  			key:e.id,
  			title:e.title,
  			img:e.images.medium,
  			summary:e.summary,
  			binding:e.binding,
  			name:e.subtitle,
  			num:e.rating.average

  		}
  		return <SearchList {...j}/>
  	})
  	
  	
  	
    return (
    	
		<div className="g-bd" id="J_content">
			<section>
				<div style={{paddingTop:"5px"}}>
					{arr}
				</div>
			</section>
		</div>
	
	
    );
  }
}

export default SeachResult;

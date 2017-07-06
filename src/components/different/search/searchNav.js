import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';
//头部导航列表

class SearchNav extends Component {
	constructor(props){
	    super(props);
			this.state = {
				
			}
	  }

  render() {
//	console.log(this.props.history)
	let {tab, history:{push, goBack}} = this.props;
    return (
    	
		<header className="level2">
			<div className="title clearfix">
				<section className="m-search-book">					 
			    	<Link to="/search/cont" className="left" 
						onClick={ev=>{
							ev.stopPropagation();
							ev.preventDefault();
							goBack();
						}}
						>
			    		<span className="ui-leftaw-2"></span>
			    	</Link>
			    	<div className="search-input2">
					    <form id="J_Form" className="clearfix" action="" method="get" className="f-cb">
							<div className="inner fl">
								<i onClick={ev=>{
									ev.preventDefault();
									ev.stopPropagation();
									push({
										pathname: '/search/ret',
										state: {value: this.refs.ipt.value}
									});
									this.refs.ipt.value = '';
									}}>搜索</i>
								<input type="search" 
									id="search-input"  
									autoComplete="off"  
									placeholder="欢乐颂"
									ref="ipt"
									/>
							</div>
							<Link to="/" className="fl home">首页</Link>		
						</form>
					</div>
					
				</section>		
			</div>		
		</header>
	
    );
  }

}

export default SearchNav;

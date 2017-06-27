import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';

//seach搜索
import SearchNav from '../components/different/search/searchNav';
import SearchCont from '../components/different/search/searchCont';
import SeachResult from '../components/different/search/searchResult';

class Search extends Component {
	constructor(props){
    super(props);
    this.state = {
      data:null,
      arr:null
    }
    this.tab = this.tab.bind(this);
    this.retuP = this.retuP.bind(this);
  }
  render() {
    return (
    	<div className="g-wrap">
    		<SearchNav tab={this.tab} 
    		retuP={this.retuP}/>
    		{this.state.data?
    			<SeachResult data={this.state.data}/>
    			:<SearchCont retuP={this.retuP}/>}
    		
    		
		</div>
    );
  }
  
  tab(data,val){
  	this.setState({
  		data:data
  	})
  }
  
  retuP(){
		//返回切换
  	this.setState({
  		data:null
  	})
  }
 
}

export default Search;

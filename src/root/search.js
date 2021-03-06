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
      arr:null,
      value:null
    }
    this.tab = this.tab.bind(this);
    this.retuP = this.retuP.bind(this);
  }

  //回调函数，拿到子组件的控件的value
  tab(val){
  	this.setState({
  		value: val
  	})
  }
  
  retuP(){
		//返回切换
  	this.setState({
  		data:null
  	})
  }

  render() {
    let {match:{path}, history} = this.props;
    let {value} = this.state;

    return (
    	<div className="g-wrap">
    		<SearchNav 
          history={history} 
          tab={this.tab} 
    		/>
        <Route path={`${path}/ret`} component={SeachResult} />
        <Route path={`${path}/cont`} component={SearchCont} />
		</div>
    );
  }
 
}

export default Search;

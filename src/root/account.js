import React, { Component } from 'react';
//foot底部
import Foot from '../components/commont/footer/Foot';
import Notlogin from '../components/different/login/Notlogin';
class Account extends Component {
	constructor(props){
    super(props);
    
    
  }
  render() {
		let {history, login, signup} = this.props;
    return (
    	<div className="g-wrap">
    		<header className="level1">
	        <section className="clearfix">
	            <h1 className="logo"></h1>
	            <a href="Javascript:;" 
	            className="download" 
	            style={{float: "right"}}
	            >下载APP</a>
	        </section>
	    	</header>
        <Notlogin 
					history={history}
					{...{
						login,
						signup
					}}
				/>
		    <Foot />
		  </div>
    );
  }
  
  
}

export default Account;

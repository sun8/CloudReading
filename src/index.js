//依赖的跟目录
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
//主页出版
import App from './App';
//注册
import Account from './root/account';
//搜索
import Search from './root/search';

//搜索
// import BookDetails from './root/bookDetails';

//更多
import More from './root/more';
import registerServiceWorker from './registerServiceWorker';

require('./css/reset.css');
require('./css/index.css');
require('./css/account.css');
require('./css/bookDetails.css');
require('./css/comment.css');
require('./css/different.css');
require('./css/Read.css');

ReactDOM.render(
	<Router>
	    <div>
	      <Switch>
			{/*<Route  path="/ranking" component={Ranking}/>
			<Route  path="/taste" component={Taste}/>
			<Route  path="/special" component={Special}/>
			
	      	<Route  path="/free" component={Free}/>
	      	<Route  path="/classification" component={Classification}/>
	      	<Route  path="/girl" component={Girl}/>
	      	<Route  path="/boy" component={Boy}/>
	      	
	      	*/}
			  
			{/*<Route  path="/bookDetails" component={BookDetails}/>*/}
			<Route  path="/more" component={More}/>
			<Route  path="/account" component={Account}/>
			<Route  path="/search" component={Search}/>
			<Route  path="/" component={App}/>
	      </Switch>
		  	
	    </div>
  	</Router>
  ,
  document.getElementById('root')
);


//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();//热

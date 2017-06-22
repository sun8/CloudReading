//依赖的跟目录
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import App from './App';
import Account from './root/account';
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
	      <Route path="/" component={App}/>
	      <Route path="/account" component={Account}/>
	    </div>
  	</Router>
  ,
  document.getElementById('root')
);


//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();//热

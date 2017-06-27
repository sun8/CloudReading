//依赖的跟目录
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
//主页出版
import App from './App';
//注册
import Account from './root/account';
//搜索
import Search from './root/search';
//男频
import Boy from './root/boy';
//分类
import Classification from './root/classification';
//免费
import Free from './root/free';
//更多
import More from './root/more';
//专题
import Special from './root/special';
//口味
import Taste from './root/taste';
//排行
import Ranking from './root/ranking';
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
	      <switch>
			<Route  path="/ranking" component={Ranking}/>
			<Route  path="/taste" component={Taste}/>
			<Route  path="/special" component={Special}/>
			<Route  path="/more" component={More}/>
	      	<Route  path="/free" component={Free}/>
	      	<Route  path="/classification" component={Classification}/>
	      	<Route  path="/girl" component={Boy}/>
	      	<Route  path="/boy" component={Boy}/>
	      	<Route  path="/search" component={Search}/>
	      	<Route  path="/account" component={Account}/>
	      	<Route  path="/publish" component={App}/>
	      	<Route exact path="/" component={App}/>
	      </switch>
	    </div>
  	</Router>
  ,
  document.getElementById('root')
);


//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();//热

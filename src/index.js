//依赖的跟目录
import $ from 'jquery';
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
import BookDetails from './root/bookDetails';

//专题
import Special from './root/special';

//读书
import Reading from './root/reading';

//登陆成功
import Myinfo from './root/Myinfo';

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

$.ajaxSetup({
    xhrFields: { withCredentials: true }
});

export default class Index extends React.Component{

	constructor(props){
		super(props);
		this.state={
			userInfo: null
		}
		this.logout = this.logout.bind(this);
	}

	logout(){

		let {history:{push}, } = this.props;
		$.post('http://api.noods.me/logout')
		.done(
			data => {
				if(data.code===0){
					this.setState({
						userInfo: null
					});
					push('/')
				}
			}
		);
	}

	componentDidMount(){
		$.post('http://api.noods.me/autologin')
		.done(data=>{
			this.setState({userInfo: data});
		})
	}

	render(){

		let {userInfo} = this.state;

		let {logout} = this;


		return (
			<Switch>
				<Route  path="/myinfo" render={({history}) => (
					<Myinfo  
						{...{
							userInfo,
							history,
							logout						
						}}

					/>
				)}/>
				<Route  path="/reading" component={Reading}/>
				<Route  path="/bookDetails" component={BookDetails}/>
				<Route  path="/special" component={Special}/>
				<Route  path="/more" component={More}/>
				<Route  path="/account" component={Account}/>
				<Route  path="/search" component={Search}/>
				<Route  path="/" component={App}/>
	      </Switch>
		);
	}
}

ReactDOM.render(
	<Router>
	    <Route path="/" component={Index}/>
  	</Router>
  ,
  document.getElementById('root')
);


//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();//热

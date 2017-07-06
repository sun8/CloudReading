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
import './css/reset.css';
// require('./css/reset.css');
require('./css/index.less');
require('./css/account.less');
require('./css/bookDetails.less');
require('./css/comment.less');
require('./css/different.less');
require('./css/Read.less');

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
		this.login = this.login.bind(this);
		this.signup = this.signup.bind(this);
	}

	login(reqData){
		let {history:{push}, } = this.props;
		$.post('http://api.noods.me/login', reqData)
		.done(
			data => {
				if(data.code===0){
					this.setState({
						userInfo: data.data
					});
					push('/')
				}
			}
		);
	}

	signup(reqData){
		let {history:{push} } = this.props;
		$.post('http://api.noods.me/register', reqData)
		.done(
			data => {
				if(data.code===0){
					this.setState({
						userInfo: data.data
					});
					push('/')
				}
			}
		);
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
			if(data.code===0){
				this.setState({userInfo: data.data});
			}
			
		})
	}

	render(){

		let {userInfo} = this.state;

		let {logout, login, signup} = this;

		// console.log(userInfo)

		return (
			<Switch>
				<Route  path="/myinfo" render={({ history }) => (
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
				<Route  path="/account" render={ 
					({history})=> (
						<Account
							{...{
								history,
								login,
								signup
							}}
						/>
					)
				}/>
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

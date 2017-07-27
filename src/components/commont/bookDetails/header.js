import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
//阅读页面的头部
class Header extends Component {
  render() {
    let {history:{push, goBack}} = this.props;

    return (
			<header className="level2">
        <section className="title clearfix">
          <a className="mid" href="javascript:;">书籍详情</a>
          <a className="left"
            onClick={ev=>{
								ev.stopPropagation();
								ev.preventDefault();
								goBack();
						}}
          >
            <span className="ui-leftaw-2"></span>
          </a>
            <Link className="right" to="/">首页</Link>
            <Link to="/search/cont" className="left-search">
              <span className="ui-search"></span>
            </Link>
        </section>
      </header>
    );
  }
}

export default Header;

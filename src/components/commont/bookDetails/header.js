import React, { Component } from 'react';
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
            <a className="right" href="/">首页</a>
            <a className="left-search" href="/search/cont">
              <span className="ui-search"></span>
            </a>
        </section>
      </header>
    );
  }
}

export default Header;

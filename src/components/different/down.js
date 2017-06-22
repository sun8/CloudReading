import React, { Component } from 'react';
//头部导航
class Down extends Component {
  render() {
    return (
    	
			<div className="m-bottom-wrap">
        <section className="m-search">
            <form id="J_Form_bottom" action="" method="get">
                <div className="search-input">
                    <div className="inner">  
                        <input name="key" id="search-input-bottom" autoComplete="off" placeholder="搜索资讯源、书籍、杂志" />
                        <button>搜索</button> 
                        <a className="delete" href="/"></a>
                    </div>
                </div>
            </form>
        </section>
        <div className="ui-line"></div>
        <div className="m-down-btn">
            <a href="javascript:;" className="ui-red-light">下载网易云阅读客户端</a>
        </div>
    	</div>
    );
  }
}

export default Down;

import React, { Component } from 'react';
class Searchbox extends Component {
  render() {
    return (
//			<!--搜索框-->
        <div class="m-bottom-wrap">
            <section class="m-search">
                <form id="J_Form_bottom" action="" method="get">
	                <div class="search-input">
	                    <div class="inner">  
	                        <input name="key" id="search-input-bottom" autocomplete="off" placeholder="搜索资讯源、书籍、杂志" />
	                        <button>搜索</button> 
	                        <a class="delete" href="/"></a>
	                    </div>
	                </div>
                </form>
            </section>
            <div class="ui-line"></div>
            <div class="m-down-btn">
                <a href="/download" class="ui-red-light">下载网易云阅读客户端</a>
            </div>
        </div>
    );
  }
}

export default Searchbox;

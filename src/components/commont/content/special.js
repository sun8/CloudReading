import React, { Component } from 'react';
//			<!--专题阅读--start-->
class Special extends Component {
    render() {
        return (

            <div >
                <div className = "m-subject" >
                    <a href = "/special"
                        className = "j-gap"
                        title = "重磅好书六一欢乐促  献礼永远的大儿童" >
                        <img src = { require('../../../img/child.jpg') }
                        alt = "重磅好书六一欢乐促  献礼永远的大儿童" / >
                        <h3 > 重磅好书六一欢乐促 献礼永远的大儿童 < /h3> 
                        <p > 假如你仍童心未泯, 快来一起加入狂欢！ 重磅好书六一欢乐促， 献礼永远的大儿童。 < /p>    
                    </a> 
                </div>                
                <div className = "m-book-item" >
           
                    <a href = "/special"
                    title = "重磅好书六一欢乐促  献礼永远的大儿童"
                    className = "j-gap" > 点击阅读专题图书 
                        < em className = "m-arrow" > < /em>
                    </a >
                </div> 
            </div>

        );
    }
}

export default Special;
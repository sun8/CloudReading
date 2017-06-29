import React, { Component } from 'react';
//数据
import $ from 'jquery';
//路由
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//头部
import Nav from '../components/commont/nav/nav';
//列表
import Titlelist from '../components/commont/nav/titleList';
//限时阅读
import TimeTitle from '../components/commont/boy/timeTitle';
//限时阅读
import TimeCont from '../components/commont/boy/timeCont';


//下载客户端
import Down from '../components/different/down';
//footer底部
import Footer from '../components/commont/footer/footer';

//<!--分类(跳转)--start-->
class Free extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: null,
            time: {
                name: 'Python限时畅读',
                h: 47,
                m: 52,
                s: 14
            }
        }
    }

    componentDidMount() {
        let _this = this;
        $.ajax({
            url: 'https://api.douban.com/v2/book/search?q=python&fields=all',
            type: 'get',
            dataType: 'jsonp',
            callback: 'free',
            success: function(data) {
                _this.setState({
                    timer: data
                })
            }
        });

    }





    render() {
        let arrTimer = null;
        let {history,location, location:{state}} = this.props;
        if (this.state.timer) {
            //限时畅读
            let {books} = this.state.timer;
            arrTimer = books.map((e,i)=>{
                if(i>=3&&i<9){
                let j ={
                    key:e.id,
                    id:e.id,
                    title:e.title,
                    img:e.images.medium,
                    summary:e.summary,
                    binding:e.binding,
                    name:e.subtitle,
                    num:e.rating.average

                }
                return <TimeCont {...j}
                    history={history} 
					{...{
						location
					}}
                />}
            })
        //loading加载中
  		$('#u-loading').css('display','none');

        }



        return ( 
            <div className = "wrap" >
                <section className = "m-list-box" >
                    <TimeTitle title = { this.state.time }/ > 
                    <div id="u-loading" style={{display:'blcok'}}>
                        <b></b> 正在加载...
                    </div>
                    <ul className = "m-free-list" >
                        {arrTimer}
                    </ul> 
                < /section >



                <a id="J_GoTop" className="m-gotop" href="#root"></a> 
                <Down history={history}> 下载和搜索 < /Down>

                <Footer > 底部 < /Footer> 
            < /div >
        );

    }


}

export default Free;
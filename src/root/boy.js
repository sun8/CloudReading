import React, { Component } from 'react';
//数据
import $ from 'jquery';
//路由
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//头部
import Nav from '../components/commont/nav/nav';
//列表
import Titlelist from '../components/commont/nav/titleList';
//最近阅读的书籍
import Readed from '../components/different/readed';
//内容
import Content from '../components/commont/content/cont';
//重磅推荐
import Heavy from '../components/commont/boy/heavy';
//banner
import Banner from '../components/commont/banner/banner';
//限时阅读
import TimeTitle from '../components/commont/boy/timeTitle';
//限时阅读
import TimeCont from '../components/commont/boy/timeCont';




//广告
import Ad from '../components/commont/banner/ad';

//标题
import Title from '../components/commont/content/title';



//经典排行榜
import Classical from '../components/commont/content/Classical';
//精彩书单
import Special from '../components/commont/content/special';
//下载客户端
import Down from '../components/different/down';
//footer底部
import Footer from '../components/commont/footer/footer';


class Boy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null,
            time: {
                name: '限时畅读',
                h: 55,
                m: 48,
                s: 19
            },
            timer: null
        }
    }

    componentDidMount() {
        let _this = this;
        $.ajax({
            url: 'https://n.bjtrm.com/myproject/Book/GetData?',
            dataType: 'jsonp',
            callback: 'boy',
            success: function(data) {
                _this.setState({
                    list: data
                })
            }
        });
        $.ajax({
            url: 'https://api.douban.com/v2/book/search?q=python&fields=all',
            type: 'get',
            dataType: 'jsonp',
            callback: 'time',
            success: function(data) {
                _this.setState({
                    timer: data
                })
            }
        });

    }

    cont(data, n) {

        let Data = this.state.list[data];
        let title = Data.title;

        let arr = Data.content.map((e, i) => {
            let dataA = {
                key: e.id,
                imgUrl: e.img_url,
                username: e.username,
                name: e.name
            }

            if (n) {
                return <Classical {...dataA }
                />
            } else {
                return <Content {...dataA }
                />
            }


        });

        return {
            arr: arr,
            title: title
        }
    }


    render() {
        let arrJdph = null;
        let titleJ = null;
        let arrZbtj = null;
        let titleZ = null;

        if (this.state.list) {
            //经典排行
            arrJdph = this.cont('jdph', 1).arr;
            titleJ = this.cont('jdph', 1).title;
            //经典排行
            arrZbtj = this.cont('jdph', 0).arr;
            titleZ = this.cont('jdph', 0).title;
        }
        let arrTimer = null;
        if(this.state.timer){
            let {books} = this.state.timer;
            arrTimer = books.map((e,i)=>{ 
                if(i<3){
                let j ={
                    key:e.id,
                    title:e.title,
                    img:e.images.medium,
                    summary:e.summary,
                    binding:e.binding,
                    name:e.subtitle,
                    num:e.rating.average

                }
                
                return <TimeCont {...j}/>}
            })
        }


        return (


            <div className = "wrap" >
                <header >
                    <Nav > 注释: 头部导航条 < /Nav> 
                    <Titlelist name = { 'boy' } > 注释: 头部导航条列表 < /Titlelist>
                </header > 
                <Readed / >
                <section className = "m-list-box" >
                    <Title title = { '重磅推荐' }/> 
                    <div className = "m-book-list" >
                        <ul className = "clearfix" > 
                            { arrZbtj } 
                        </ul> 
                    < /div >

                    <div className = "m-book-item" >

                        <Heavy / >

                    </div> 
                < /section >
                
                <Banner > 轮播图 < /Banner>

                <section className = "m-list-box" >
                    <TimeTitle title = { this.state.time } /> 
                    <ul className = "m-free-list" >
                        {arrTimer}
                    </ul> 
                < /section >




                <Ad > 两条广告 < /Ad>



                <section className = "m-list-box subject-box" >
                    <Title title = { '经典排行榜' }/> 
                    <div className = "m-book-list" >
                        <ul className = "clearfix" >
                            { arrJdph } 
                        </ul> 
                    < / div > 
                </section>

                <section className = "m-list-box subject-box" >
                    <Title title = { '精彩书单' }/> 
                    <Special / >
                </section>

                < div id = "J_GoTop" className = "m-gotop" > < /div>

                <Down > 下载和搜索 < /Down>
                <a id="J_GoTop" className="m-gotop" href="#root"></a>
                <Footer > 底部 < /Footer> 
            < /div >
        );

    }


}

export default Boy;
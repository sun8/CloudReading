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
import SpecialRead from '../components/commont/content/SpecialRead';
//下载客户端
import Down from '../components/different/down';
//footer底部
import Footer from '../components/commont/footer/footer';


class Girl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: {
                name: '限时畅读',
                h: 55,
                m: 48,
                s: 19
            },
            timer: null
        }
        this.hasUnMount = false;
    }

    componentWillReceiveProps(){
        let {q, fields} = this.props.location.state;
        
        $.ajax({
            url: 'https://api.douban.com/v2/book/search',
            type: 'get',
            dataType: 'jsonp',
            callback: 'time',
            data:{
                q,
                fields
            },
            success: (data)=> {
                if(this.hasUnMount) return;	
                this.setState({
                    timer: data
                })
            }
        });
        this.hasUnMount = true;
    }



    componentDidMount() {
        if(!this.props.location.state) return;
        let {q, fields} = this.props.location.state;

      
        
        $.ajax({
            url: 'https://api.douban.com/v2/book/search',
            type: 'get',
            dataType: 'jsonp',
            callback: 'time',
            data:{
                q,
                fields
            },
            success: (data)=> {
                if(this.hasUnMount) return;	
                this.setState({
                    timer: data
                })
            }
        });

    }


    render() {
        let {history,location, location:{state}} = this.props;
        //经典排行榜
        let arrJdph = null;
        //重磅推荐
        let arrZbtj = null;
        //重磅推荐列表
        let arrTimer = null;
        //限时畅读列表
        let arrTimer2 = null;
        if(this.state.timer){
            let {books} = this.state.timer;
            //重磅推荐列表
            arrTimer = books.map((e,i)=>{ 
                if(i<4){
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
                    />
                }
            })
            //限时畅读列表
            arrTimer2 = books.map((e,i)=>{ 
                if(i>4&&i<9){
                    let j ={
                        key:e.id,
                        id:e.id,
                        title:e.title,
                        summary:e.summary,
                        binding:e.binding,
                        name:e.subtitle

                    }
                    
                    return <Heavy {...j}
                        history={history} 
                        {...{
                            location
                        }}
                    / >
                }
            })
            //重磅推荐
            arrZbtj = books.map((e,i)=>{ 
                if(i>9&&i<13){
                    let j ={
                        key:e.id,
                        id:e.id,
                        title:e.title,
                        summary:e.summary,
                        binding:e.binding,
                        name:e.subtitle,
                        img:e.images.medium

                    }
                    
                    return <Content {...j }
                        history={history} 
                        {...{
                            location
                        }}
                    />
                }
            })
            //经典排行榜
            arrJdph = books.map((e,i)=>{ 
                if(i>13&&i<17){
                    let j ={
                        key:e.id,
                        id:e.id,
                        title:e.title,
                        summary:e.summary,
                        binding:e.binding,
                        name:e.subtitle,
                        img:e.images.medium

                    }
                    
                    return <Classical {...j }
                        history={history} 
                        {...{
                            location
                        }}
                    />
                }
            })
            $('#u-loading').css('display','none');
        }
        let {path} = this.props.match;

        return (


            <div className = "wrap" >
                
                <Readed / >
                <div id="u-loading" style={{display:'blcok'}}>
                    <b></b> 正在加载...
                </div>
                <section className = "m-list-box" >
                    <Title title = { '重磅推荐' }/> 
                    <div className = "m-book-list" >
                        <ul className = "clearfix" > 
                            { arrZbtj } 
                        </ul> 
                    < /div >

                    <div className = "m-book-item" >
                        <ul>
                            {arrTimer2}
                        </ul>
                        

                    </div> 
                < /section >
                
                <section className = "m-list-box subject-box" >
                    <Title title = { '经典排行榜' }/> 
                    <div className = "m-book-list" >
                        <ul className = "clearfix" >
                            { arrJdph } 
                        </ul> 
                    < / div > 
                </section>

                <section className = "m-list-box" >
                    <TimeTitle title = { this.state.time } /> 
                    <ul className = "m-free-list" >
                        {arrTimer}
                    </ul> 
                < /section >

                <section className = "m-list-box" >
                    <Title title = { '都市爽文' }/> 
                    <div className = "m-book-list" >
                        <ul className = "clearfix" > 
                            { arrZbtj } 
                        </ul> 
                    < /div >

                    <div className = "m-book-item" >
                        <ul>
                            {arrTimer2}
                        </ul>
                        

                    </div> 
                < /section >
                <section className = "m-list-box" >
                    <Title title = { '官场职场' }/> 
                    <div className = "m-book-list" >
                        <ul className = "clearfix" > 
                            { arrZbtj } 
                        </ul> 
                    < /div >

                    <div className = "m-book-item" >
                        <ul>
                            {arrTimer2}
                        </ul>
                        

                    </div> 
                < /section >

                <section className = "m-list-box subject-box" >
                    <Title title = { '精彩书单' }/> 
                    <SpecialRead history={history} / >
                </section>

                < div id = "J_GoTop" className = "m-gotop" > < /div>

                <Down history={history}> 下载和搜索 < /Down>
                <a id="J_GoTop" className="m-gotop" href="#root"></a>
                <Footer > 底部 < /Footer> 
            < /div >
        );

    }


}

export default Girl;
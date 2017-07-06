import React, { Component } from 'react';
//数据
import $ from 'jquery';

//内容
import SpecialCont from '../components/commont/content/specialCont';

//<!--分类(跳转)--start-->
class Special extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null
        }
    }

    componentDidMount() {
        let {val} = this.props.location.state;
        console.log(val)
        $.ajax({
            url: 'https://api.douban.com/v2/book/search',
            type: 'get',
            dataType: 'jsonp',
            data:{
                q:val
            },
            callback: 'spec',
            success: (data)=> {
                this.setState({
                    list: data
                })
            }
        });

    }





    render() {
        let arrList = null;
        if (this.state.list) {
            //专题推荐
            let {books} = this.state.list;
            arrList = books.map((e,i)=>{
                let j ={
                    key:e.id,
                    title:e.title,
                    img:e.images.medium,
                    summary:e.summary,
                    binding:e.binding,
                    name:e.subtitle,
                    num:e.rating.average

                }
                return <SpecialCont {...j}/>
            
            })


        }


        return ( 
            <div className="g-wrap" >
                <section className="m-banner" style={{height: "5.2rem"}}>			
                    <img src={require('../img/child.jpg')}  style={{height: "5.2rem"}}/>
                </section>
                <section className="m-introduction">
                    <p className="content j-intro">假如你仍童心未泯,快来一起加入狂欢！重磅好书六一欢乐促，献礼永远的大儿童。</p>
                    <p className="showmore j-more">展开<i className=""></i></p>
                </section>
                <section className="m-booklist">
                    {arrList}
                </section>
            </div>
        );

    }


}

export default Special;
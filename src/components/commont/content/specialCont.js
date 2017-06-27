import React, { Component } from 'react';
//			<!--专题阅读--start-->
class SpecialCont extends Component {
    render() {
        return (

            <div className="book">
                       
                <div className="clearfix up">
                    <img className="cover" src={this.props.img}/>
                    <div className="night-mask"></div>
                    <h3 className="title1">{this.props.title}</h3>
                    <p className="info1">{this.props.binding}/{this.props.name}<span className="num">{this.props.num}万</span>人阅读</p>
                    <p className="desc1">{this.props.summary}</p>				
                </div>
                
                <div className="down">
                    <p>主编推荐：“充满谎言、背叛与复仇的人性之旅。”</p>
                </div> 
                
            </div>

        );
    }
}

export default SpecialCont;
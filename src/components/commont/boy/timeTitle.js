import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// 时间和更多标头
class TimeTitle extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let { title } = this.props;
        return ( 
            <h3 className = "clearfix">
                <strong className = "fl">
                    <em className = "sep"> </em> 
                    <span className = "gradient" > { title.name } </span>
                </strong > 
                <div className = "m-freecount" >
                <b> { title.h } </b>:<b>{title.m}</b>: <b> { title.s } </b> 
                </div> 
                <Link to = "/more" className = "more" > 更多 
                    < em className = "m-arrow" > </em>
                </Link>

            </h3>  
        );
    }
}

export default TimeTitle;
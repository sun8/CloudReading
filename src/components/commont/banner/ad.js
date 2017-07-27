import React, { Component } from 'react';
//<!--作品欣赏--start-->
class Ad extends Component {
  constructor(props){
		super(props);
  }
  render() {
    let {history:{push}} = this.props;
    return (
    	<section className="m-list-box clearfix">
        <a href=""
          onClick={ev=>{
            ev.preventDefault();
            ev.stopPropagation();
            push({
                pathname: '/special',
                state: {
                    val:'琼瑶'
                }
            });  
          }}
         title="盘点：那些充满正能量的官场小说" className="sbanner" >
    			<img src={require('./../../../img/special.jpg')}  alt="盘点：那些充满正能量的官场小说" />
        </a>
        <a href="" 
          onClick={ev=>{
            ev.preventDefault();
            ev.stopPropagation();
            push({
                pathname: '/special',
                state: {
                    val:'东野圭吾'
                }
            });  
          }}
        title="盘点：那些充满正能量的官场小说" className="sbanner" >
        	<img src={require('./../../../img/special2.jpg')}  alt="盘点：那些充满正能量的官场小说" />
        </a>
    	</section>
        
    );
  }
}

export default Ad;

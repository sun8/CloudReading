import React, { Component } from 'react';
//目录
class Icon extends Component {
	constructor(props){
		super(props);
		this.state = {
			onOff:true
		}
		this.neight = this.neight.bind(this);
		this.font = this.font.bind(this);
		this.catalog = this.catalog.bind(this);
	}

  render() {
		
		let {down} = this.props;
    return (
			<div className="nav_bot">
				<a href="javascript:;"
					onClick = {this.catalog}
				
				>
					<img src={require('../../../img/icon01.png')} />
					<strong>目录</strong>
				</a>
				<a href="javascript:;"
					onClick = {this.font}
				>  
					<img src={require('../../../img/icon022.png')} />
					<strong>字体</strong>
				</a>
				<a href="javascript:;"
					onClick = {this.neight}
				>
					<img src={this.state.onOff?require('../../../img/icon03.png'):require('../../../img/icon032.png')} ref="neight"/>
					<strong>{this.state.onOff?'白天':'夜间'}</strong>
				</a>
				<a href={down?down.catalog:'123'}
					download={down?down.title:'123'}
				>
					<img src={require('../../../img/icon04.png')}/>
					<strong>下载</strong>
				</a>
			</div>
    );
  }
	// 夜间模式
	neight(ev){
		ev.preventDefault();
		ev.stopPropagation();
		this.props.neightF();
		this.setState({
			onOff:!this.state.onOff
		})
	}
	// 字体
	font(ev){
		ev.preventDefault();
		ev.stopPropagation();
		this.props.fontF();
	}
	//目录
	catalog(ev){
		ev.preventDefault();
		ev.stopPropagation();
		this.props.catalogF();
	}
}

export default Icon;

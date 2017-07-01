import React, { Component } from 'react';
//目录
class ReadingCatalog extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		
	}

  render() {
	  let { gotoCategory} = this.props;
	  let readingCatalog = null;
	  let {list} = this.props.data;
	  if(list){
		  let {catalog} = list;
		  if(catalog){
			let totle = catalog.split(/\n/);
			
			let tempArr = []

			totle.forEach(e=>{
				if(/^\d/.test(e))return;
				tempArr.push(e);
			});

			readingCatalog = tempArr.map((e,i)=>{
				
				let j={
					key:i,
					index:i,
					name:e
				};
				return (
					<li
					className="grade_02 "
					key={i}
					onClick={ev=>gotoCategory(i)}
					>
						<span>{j.name}</span>
					</li>
				)
			})
			console.log(readingCatalog.length)
			// this.props.lent(readingCatalog.length)
			
		  }else{
			this.props.noCont();
		  }
	  }
    return (

			<ul>
                {readingCatalog}
   			</ul>
			
    );
  }
}

export default ReadingCatalog;

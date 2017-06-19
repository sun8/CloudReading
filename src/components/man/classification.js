import React, { Component } from 'react';
class classification extends Component {
  render() {
    return (
//			 <!--分类(跳转)--start-->
			<section className="m-lib men">
				<h3><a href=""><em className="sep"></em>男生小说</a></h3>
				<table>
					<tr>
						<td><a href="" className='hot' >都市生活</a></td>
						<td><a href="" className='hot' >官场职场</a></td>
						<td><a href=""  >玄幻仙侠</a></td>
					</tr>
					<tr>
						<td><a href=""  >悬疑探险</a></td>
						<td><a href=""  >军事谍战</a></td>
						<td><a href=""  >科幻奇幻</a></td>
					</tr>
					<tr>
						<td><a href=""  >同人网游</a></td>
						<td><a href=""  >灵异恐怖</a></td>
						<td><a href=""  >历史传奇</a></td>
					</tr>
					<tr>
						<td><a href=""  >短篇小说</a></td>
					<tr>
				</table>
			</section>
    );
  }
}

export default classification;

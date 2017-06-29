import React, { Component } from 'react';
import ReadingCatalog from '../components/commont/bookDetails/Readingcatalog';



//数据
import $ from 'jquery';
//import main from './data/main';

//路由
//import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


class Reading extends Component {
	constructor(){
		super();
		this.state = {
			list:null,
			banner:null
		}
	}
	
	componentDidMount(){

		$.ajax({
            url: 'https://api.douban.com/v2/book/search',
            type: 'get',
            dataType: 'jsonp',
            callback: 'time',
            data:{
                tag:'javascript',
                fields:'all'
            },
            success: (data) =>{
                this.setState({
                    list: data
                })
            }
        });
		
		
		
	}
	
  render() {
	
    return (
  		<div className="g-wrap reader mode-light">
	
	{/*<!--state-opened左滑动位移--><!--state-opened-->" style="display: block;"style={{fontSize='1rem'  opacity: 1 height: 'auto'}}*/}
	<section className="g-main ui-main >
		<div className="content j-content" >
			<div>
				{/*<!--下拉出现刷新界面--> <!--style="display:none;"-->*/}
				<div className="up-hint">
					<div className="ui-loading j-loading" style={marginTop='3px'}>	
					</div>
					<p>上一章：第一卷　正文</p>
				</div>
				<div className="g-book">  
					<div className="m-mb">  
						<div className="m-content">    
							<h1><span>第1章 应聘</span></h1>    
							<p>夜幕低垂，仿佛将闷热的暑气赶出九霄云外。</p> 
							<p>东昌市，这个华夏新开放的港口城市，此刻已万家灯火，好像要和穹苍上所缀满的繁星互相辉映。</p>
							<p> 群英夜总会，是东昌市南街区很有名的一家夜总会，里面声音震耳欲聋，重金属音乐和里面喧嚣的声音夹杂在一起混乱不堪，清凉的美女们装束几乎精简以展示自己那曼妙的身材，无数的眼神在美女的身上疯狂的扫荡，美女们一边享受着这种无形的侵犯，一边摆动身体，引得阵阵唏嘘以满足自己对美丽的虚荣。</p>    
							<p> 夜总会门口，一个平头男子，身高约有一米七八，年纪约有23岁左右，面色刚毅，一身很普通的帆布服，身边停着一手二手电动车，此刻站在那里，手里拿着一张招聘简历，轻轻皱了一下眉头，最后还是走了进去。</p>    
							<p>穿过嘈杂不堪，如同群魔乱舞的一楼大厅，洛天扫视了一下，然后走接就往二楼而去。</p>    
							<p>“站住，找谁？”洛天刚抬脚，这时一个声音传来，一个身穿西装约有三十岁左右的男子拦住了他的去路！一脸警惕的望着洛天。</p>    
							<p>“兄弟别紧张，那！”洛天咧嘴一笑，扬了扬手中的简历：“我是来应聘的……”</p>    
							<p> “紧张？嗤！你还不配！”西装男子鼻子里轻哼了一下，毫不掩饰对洛天的鄙视，他可是这保安经理，功夫不弱，退役的军人，不知道打跑了多少闹事的家伙，看着洛天那其貌不扬，甚至有些削瘦的身材，不由的撇撇嘴。</p>    
							<p> “呵呵，是啊，兄弟好功夫，一看就是练家子”洛天淡淡的一笑，眼中的寒光一闪而失，一股凌厉，彪悍的气息轻微的散发出来，惊的这个保安经理不由的后退了一步，差点一屁股坐在楼梯上，不知道是错觉还是直觉，他突然感觉面前的这个男人就像一头封在剑鞘里的利剑一般，一旦出鞘，必将血流成流，尸骨遍野。</p>    
							<p>“兄弟，我可以上去吧”洛天再一次笑眯眯的问道，然后扬了扬手中的应聘简历。</p>    <p>“啊！好好，我带你去”保安经理回过神来，不由的擦了一把冷汗，忙不失迭的说道。</p>    <p>“谢了！”洛天点头。</p>    
							<p>“容姐，有人应聘！”西装男子把洛天带到二楼，敲开一间办公室的门，恭敬的说着，同时双手把简历放在了被称为容姐的办公桌上。</p>    
							<p>“知道了，你出去吧”叫容姐的女人声音清冷，头都没有抬，正在写着什么东西，只是挥了挥手。</p>    
							<p>“是！”那个保安经理恭敬的一点头，后退一步，这才转身小心的走了出去，同时轻轻的关上了门。</p>    
							<p>这个容姐并没有马上看简历，甚至招呼都不招呼洛天一下，只是忙着自己的事，房间里很静。</p>    
							<p> 洛天站在那里，也没有说话，好奇的打量着这里的一切，这是一间不大的办公室，却是以黑色调为主，显得更加的庄重严肃，给人一种不敢造次的感觉，说实话一个女人的办公室布置成这样，倒是很少见。</p>    
							<p>
								最后洛天把目光落在面前的女人身上，心里一动，其实他不是没有见过漂亮女人，不过像眼前这种绝色还真是不多。</p>    
							<p> 淡淡的眼影，波浪披肩，鹅蛋形
									的美艳俏脸上白璧无瑕，两弯新月柳眉之下那双杏眼妩媚而性感。鼻子细细高高的，一件高开衩旗袍下雪白的大腿。</p>    
									<p>洛天没来由的心里的砰砰直跳，呆站在那里，傻傻的看着面前的女人，目光瞅向这个女人的大腿，口水都差点没有流出来。</p>    
									<p> 这还是其次，更主要的是这个女人有种让洛天心折的气场，似乎不像是夜总会的大姐，倒像是某个集团的总裁，雅而不俗，妖而不治，洛天微微收起了自己浮夸的心思。</p>    
									<p>“你叫洛天？”</p>    
									<p> 叫容姐的女人终于拿起了那份简历，扫了一眼，随意的问道，声音动听，温柔中透着一股威严，仿佛就是高高在上的女王在询问她的臣民一般。</p>    
									<p>“是！”洛天微笑着答道。</p>    
							
							
							
						</div>  
					</div>  
				</div>
				<div className="holdplace">
					<p>上拉阅读下一章</p>
				</div>
			</div>
		</div>
	</section>								
   	<aside className="ui-panel">
           {/*style="transition-property: -webkit-transform; transform-origin: 0 0 0; transform: translate(0, 0) scale(1) translateZ(0);"*/}
   		<section className="m-cata" >
   			<div className="sort-btn clearfix">
   				<span>共2297章</span>
   				<button className="j-squece">倒序 
   					<span className="caret  reverse "><i></i></span>
   				</button>
   			</div>
   			<div className="aside-btn" style={borderBottom='#D1CFCD solid 0.05rem'}>
   				<button className="dir-btn dir-btn-disable">上100章</button>
   				<button className="dir-btn j-next-100">下100章</button>
   			</div>
  			
   			<ul>
                <ReadingCatalog />
   				{/*<li data-index="1" className="grade_01 ">
   					<span>第一卷　正文</span>
   				</li>
   				<li data-index="2" className="grade_02 cur">
   					<span>第1章　应聘</span>
   				</li>
   				<li data-index="3" className="grade_02 ">
   					<span>第2章　真相</span>
   				</li>
   				<li data-index="4" className="grade_02 ">
   					<span>第3章　严惩恶少</span>
   				</li>
   				<li data-index="5" className="grade_02 ">
   					<span>第4章　送你回去</span>
   				</li>
   				<li data-index="6" className="grade_02 ">
   					<span>第5章　容姐进来吧</span>
   				</li>
   				<li data-index="7" className="grade_02 ">
   					<span>第6章　尴尬</span>
   				</li>
   				<li data-index="8" className="grade_02 ">
   					<span>第7章　大晚上，你兼职啊</span>
   				</li>
   				<li data-index="9" className="grade_02 ">
   					<span>第8章　保车</span>
   				</li>
   				<li data-index="10" className="grade_02 ">
   					<span>第9章　三哥</span>
   				</li>
   				<li data-index="11" className="grade_02 ">
   					<span>第10章　醉酒女孩</span>
   				</li>
   				<li data-index="12" className="grade_02 ">
   					<span>第11章　搞定</span>
   				</li>
   				<li data-index="13" className="grade_02 ">
   					<span>第12章　人品和魅力</span>
   				</li>
   				<li data-index="14" className="grade_02 ">
   					<span>第13章　三十块的套餐</span>
   				</li>
   				<li data-index="15" className="grade_02 ">
   					<span>第14章　盛世豪庭</span>
   				</li>
   				<li data-index="16" className="grade_02 ">
   					<span>第15章　容姐受辱</span>
   				</li>
   				<li data-index="17" className="grade_02 ">
   					<span>第16章　怒为红颜</span>
   				</li>
   				<li data-index="18" className="grade_02 ">
   					<span>第17章　神秘的兰兰</span>
   				</li>
   				<li data-index="19" className="grade_02 ">
   					<span>第18章　他是我的兄弟</span>
   				</li>
   				<li data-index="20" className="grade_02 ">
   					<span>第19章　当前形势</span>
   				</li>
   				<li data-index="21" className="grade_02 ">
   					<span>第20章　找事</span>
   				</li>
   				<li data-index="22" className="grade_02 ">
   					<span>第21章　转机</span>
   				</li>
   				<li data-index="23" className="grade_02 ">
   					<span>第22章　高手龙七</span>
   				</li>
   				<li data-index="24" className="grade_02 ">
   					<span>第23章　南家惊恐</span>
   				</li>
   				<li data-index="25" className="grade_02 ">
   					<span>第24章　东昌周奉天</span>
   				</li>
   				<li data-index="26" className="grade_02 ">
   					<span>第25章　想和解</span>
   				</li>
   				<li data-index="27" className="grade_02 ">
   					<span>第26章　跪下</span>
   				</li>
   				<li data-index="28" className="grade_02 ">
   					<span>第27章　出气</span>
   				</li>
   				<li data-index="29" className="grade_02 ">
   					<span>第28章　黑五子投靠</span>
   				</li>
   				<li data-index="30" className="grade_02 ">
   					<span>第29章　天使之泪</span>
   				</li>
   				<li data-index="100" className="grade_02 vip dis">
   					<span>第99章　杀机现</span>
   				</li>*/}
   			</ul>
   			
   			<div className="aside-btn">
   				<button className="dir-btn dir-btn-disable">上100章</button>
   				<button className="dir-btn j-next-100">下100章</button>
   			</div>
   		</section>
   	</aside>

			
			{/*<!--底部图标-->*/}
			<div className="nav_bot" id="nav_bot">
				<a href="javascript:;" id="btn_menu">
					<img src="img/icon01.png" alt="" />
					<strong>目录</strong>
				</a>
				<a href="javascript:;" id="btn_font">  
					<img src="img/icon022.png" alt="" id="font_img"/>
					<strong>字体</strong>
				</a>
				<a href="javascript:;" id="btn_model">
					<img src="img/icon03.png" alt="" id="night_img"/>
					<strong id="night_txt">夜间</strong>
				</a>
				<a href="javascript:;" id="btn_load">
					<img src="img/icon04.png" alt=""/>
					<strong>下载</strong>
				</a>
			</div>
		
   
   	<section className="guide">
		<p>上一页</p>
		<p><i></i>显示/隐藏操作栏</p>
		<p>下一页</p>
	</section>
   
   
   </div>
	
    );

  }

  

}

export default Reading;

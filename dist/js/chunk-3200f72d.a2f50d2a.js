(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3200f72d"],{"08f7":function(A,t,e){A.exports=e.p+"img/00008355.6180f61e.jpg"},"177b":function(A,t,e){A.exports=e.p+"img/00007713.d0681b4e.jpg"},"2dea":function(A,t,e){},3095:function(A,t,e){"use strict";var i=e("3e2e"),a=e.n(i);a.a},3295:function(A,t,e){},"3e2e":function(A,t,e){},"42d0":function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAqCAMAAAAZKoJqAAADAFBMVEUAAAAQKWMmHBpSKSljWpRrY62Ee62MMQicvfetxve8mGe9czHEn27RrHve9//vtVrvvWv/znP//8b///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAjFXdAAAACXBIWXMAABJ0AAASdAHeZh94AAAAB3RJTUUH4wMdBAgUbN3AtwAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAABiklEQVQ4jY3VgXKDIAwGYFwzU8ZmXXn/d11+kkDQs+t/N1ePr4AQbMrv5fMj1feSSSTR+jpEIpdU6a4h5N4z35isuMmEQWhEb9BUIWX0tTnABY3N259cc0bz2mVuLYv2ZJ+rfSdHmeu2WZ96HZ+2DdQl4GbjxtGpSVCXgKCSjQ5BSz3I6xxk7OQfaXM7jR2lPtFYGRqPts1P1Glfw6tVaivvKx6udF55203foTB6Pu6ml1IMtNfSJI+Zqu6lnHKW09G5lmhlTi3MJeJJ5lyE7U/PrvokpTdTu6XdpHKqeS6z61r6nWqem3s89sJq/D9srHmBtYoT4VH5i6G4V4jB1tUFNYmhO7ypu0W6c5BPl0llmju9kJjtlSy2PCXMUyVgCTLQ7gbcuySWOfuqs6WvvUyGySWhVz7tkG4R4JCgYrltqBwKKxKGAyR9KxLKW4fD9EaKzgbF77KdId/pKc2Rv5P7a8O72b1I1Onpa9JC2rNWvXzJyPjtiCfncI6n36OvRMtyOurHCPn5/gPEtUn6FbLdwAAAAABJRU5ErkJggg=="},"5d56":function(A,t,e){
/*! pagemap v0.5.0 - https://larsjung.de/pagemap/ */
!function(t,e){A.exports=e()}(0,function(){return function(A){function t(i){if(e[i])return e[i].exports;var a=e[i]={exports:{},id:i,loaded:!1};return A[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var e={};return t.m=A,t.c=e,t.p="",t(0)}([function(A,t){(function(t){"use strict";var e=t.window,i=e.document,a=i.documentElement,n=i.querySelector("body"),s=function(A){return"rgba(0,0,0,"+A/100+")"},o={viewport:null,styles:{"header,footer,section,article":s(8),"h1,a":s(10),"h2,h3,h4":s(8)},back:s(2),view:s(5),drag:s(10),interval:null},r=function(A,t,e,i){return e.split(/\s+/).forEach(function(e){return A[t](e,i)})},c=function(A,t,e){return r(A,"addEventListener",t,e)},l=function(A,t,e){return r(A,"removeEventListener",t,e)},u=function(A,t,e,i){return{x:A,y:t,w:e,h:i}},d=function(A){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:0,y:0};return u(A.x-t.x,A.y-t.y,A.w,A.h)},f=function(){return u(0,0,a.scrollWidth,a.scrollHeight)},v=function(){return u(e.pageXOffset,e.pageYOffset,a.clientWidth,a.clientHeight)},g=function(A){var t=A.getBoundingClientRect();return{x:t.left+e.pageXOffset,y:t.top+e.pageYOffset}},p=function(A){var t=g(A),e=t.x,i=t.y;return u(e,i,A.offsetWidth,A.offsetHeight)},m=function(A){var t=g(A),e=t.x,i=t.y;return u(e+A.clientLeft,i+A.clientTop,A.clientWidth,A.clientHeight)},h=function(A){var t=g(A),e=t.x,i=t.y;return u(e+A.clientLeft-A.scrollLeft,i+A.clientTop-A.scrollTop,A.scrollWidth,A.scrollHeight)};A.exports=function(A,t){var a=Object.assign({},o,t),s=A.getContext("2d"),r=function(){var t=A.clientWidth,e=A.clientHeight;return function(A,i){return Math.min(t/A,e/i)}}(),u=function(t,e){A.width=t,A.height=e,A.style.width=t+"px",A.style.height=e+"px"},g=a.viewport,b=function(A){return Array.from((g||i).querySelectorAll(A))},C=!1,x=void 0,w=void 0,y=void 0,k=void 0,_=void 0,E=function(A,t){t&&(s.beginPath(),s.rect(A.x,A.y,A.w,A.h),s.fillStyle=t,s.fill())},S=function(A){Object.keys(A).forEach(function(t){var e=A[t];b(t).forEach(function(A){E(d(p(A),x),e)})})},R=function(){x=g?h(g):f(),w=g?m(g):v(),y=r(x.w,x.h),u(x.w*y,x.h*y),s.setTransform(1,0,0,1,0,0),s.clearRect(0,0,A.width,A.height),s.scale(y,y),E(d(x,x),a.back),S(a.styles),E(d(w,x),C?a.drag:a.view)},j=function(t){t.preventDefault();var i=m(A),a=(t.pageX-i.x)/y-w.w*k,n=(t.pageY-i.y)/y-w.h*_;g?(g.scrollLeft=a,g.scrollTop=n):e.scrollTo(a,n),R()},B=function t(i){C=!1,A.style.cursor="pointer",n.style.cursor="auto",l(e,"mousemove",j),l(e,"mouseup",t),j(i)},W=function(t){C=!0;var i=m(A),a=d(w,x);k=((t.pageX-i.x)/y-a.x)/a.w,_=((t.pageY-i.y)/y-a.y)/a.h,(k<0||k>1||_<0||_>1)&&(k=.5,_=.5),A.style.cursor="crosshair",n.style.cursor="crosshair",c(e,"mousemove",j),c(e,"mouseup",B),j(t)},M=function(){A.style.cursor="pointer",c(A,"mousedown",W),c(g||e,"load resize scroll",R),a.interval>0&&setInterval(function(){return R()},a.interval),R()};return M(),{redraw:R}}}).call(t,function(){return this}())}])})},"6faa":function(A,t,e){"use strict";var i=e("3295"),a=e.n(i);a.a},"76f4":function(A,t,e){A.exports=e.p+"img/00007667.d5d87890.jpg"},"7a32":function(A,t,e){"use strict";var i=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[e("audio",{attrs:{id:"roBGM",loop:"",muted:"","webkit-playsinline":"true",playsinline:"true"}},[e("source",{attrs:{src:A.audioSrc,type:"audio/mpeg"}})])])},a=[],n={props:{nowIndex:{type:String}},data:function(){return{audioSrc:""}},methods:{autoPlayMusic:function(){var A=document.getElementById("roBGM");switch(this.nowIndex){case"index":this.audioSrc="https://raw.githubusercontent.com/hsiangfeng/RagnarokShop/gh-pages/static/08.mp3";break;case"products":this.audioSrc="https://raw.githubusercontent.com/hsiangfeng/RagnarokShop/gh-pages/static/login%402.mp3";break;case"aboutRo":this.audioSrc="https://raw.githubusercontent.com/hsiangfeng/RagnarokShop/gh-pages/static/12.mp3";break;case"login":this.audioSrc="https://raw.githubusercontent.com/hsiangfeng/RagnarokShop/gh-pages/static/01.mp3";break;default:this.audioSrc="";break}A.paused&&setTimeout(function(){A.play(),A.volume=.2},1e3)}},mounted:function(){this.autoPlayMusic()}},s=n,o=e("2877"),r=Object(o["a"])(s,i,a,!1,null,null,null);t["a"]=r.exports},"7a38":function(A,t,e){"use strict";var i=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[e("a",{attrs:{id:"clickTop",href:"#",title:"TOP"}},[e("font-awesome-icon",{attrs:{icon:["fas","arrow-circle-up"],size:"3x"}})],1)])},a=[],n={mounted:function(){$(function(){$(window).scroll(function(){$(window).scrollTop()>=50?$("#clickTop").fadeIn():$("#clickTop").fadeOut()})}),$("#clickTop").click(function(A){event.preventDefault(),$("html,body").animate({scrollTop:0},500)})}},s=n,o=(e("6faa"),e("2877")),r=Object(o["a"])(s,i,a,!1,null,null,null);t["a"]=r.exports},"81d3":function(A,t,e){"use strict";var i=function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",{staticClass:"d-none d-lg-block"},[i("router-link",{attrs:{to:{name:"Products",params:{data:"全部商品"}}}},[i("img",{attrs:{id:"cashShop",src:e("42d0"),tag:"商城",title:"商城"}})]),i("canvas",{attrs:{id:"map"}})],1)},a=[],n=e("5d56"),s=e.n(n),o={data:function(){return{}},mounted:function(){s()(document.querySelector("#map"))}},r=o,c=(e("3095"),e("2877")),l=Object(c["a"])(r,i,a,!1,null,null,null);t["a"]=l.exports},"96d2":function(A,t,e){A.exports=e.p+"img/00007339.a64c4bfb.jpg"},a000:function(A,t,e){A.exports=e.p+"img/00006880.b083af32.jpg"},a415:function(A,t,e){A.exports=e.p+"img/00007711.c2909298.jpg"},d053:function(A,t,e){"use strict";var i=e("2dea"),a=e.n(i);a.a},d526:function(A,t,e){A.exports=e.p+"img/6e33eh-1.171fefe3.jpg"},dad7:function(A,t,e){"use strict";e.r(t);var i=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"p-top"},[A._m(0),e("h3",{staticClass:"text-center pt-5 text-ro-dark"},[A._v("冒險之旅開始於五個城市")]),A._m(1),A._m(2),A._m(3),A._m(4),A._m(5),e("PageMap"),e("ScrollTopComponent"),e("BgMusicComponent",{attrs:{nowIndex:"aboutRo"}})],1)},a=[function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("img",{staticClass:"img-fluid",attrs:{src:e("d526")}})]),i("div",{staticClass:"col-md-6 d-flex justify-content-center align-items-center text-ro-dark"},[A._v("《仙境傳說》的世界觀是一個劍與魔法的幻想世界，原作以北歐神話為基本，所以使用許多與北歐神話有關的用語和物品。此外，本作還安排了部份像僵屍和忍者等東方文化的產物。《仙境傳說》以盧恩米德加爾特大陸（Rune-Midgarts）為舞台。大陸分為3個國家，分別以普隆德拉（Prontera）為首都的盧恩米德加爾特王國，以朱諾（Juno）為首都的秀發茲發德共和國（Schwaltzvald Republic）和以拉赫（Rachel）為首都的阿盧納貝茲教國（Arunafeltz）。仙境傳說的故事是因為人類文明世界的和平受到威脅，冒險者為了尋找被認為支撐著和平的「巨人伊美樂的心臟」而出發旅行。")])]),i("h3",{staticClass:"text-center pt-5 text-ro-dark"},[A._v("仙境傳說中的世界")]),i("div",{staticClass:"row flex-row-reverse"},[i("div",{staticClass:"col-md-6"},[i("img",{staticClass:"img-fluid",attrs:{src:e("a000")}})]),i("div",{staticClass:"col-md-6 d-flex justify-content-center align-items-center text-ro-dark"},[A._v("為了表現出『仙境傳說』中的龐大世界觀，負責研發的Gravity公司，採用了融合東方與西方色彩的3D圖像。遊戲畫面以全3D構成，以45度角呈現，玩家可以自由選擇喜歡的角度；在城鎮地圖中和草原上皆可旋轉360度，其中的建築物與自然景觀也具有相當的立體感。\n『仙境傳說』的世界位於「塵世」中的盧恩─米德加爾特王國 ，也是人類居住的地方。整個世界分為三個區域，分別為人類、諸神、魔鬼所居住；隨著故事情節的發展，這三個種族將循序漸進地進入到遊戲中。")])])])},function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("section",{staticClass:"my-10"},[i("div",{staticClass:"bg-ro-light about-bg-ro"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("img",{staticClass:"img-fluid about-img",attrs:{src:e("a415")}})]),i("div",{staticClass:"col-md-6 d-flex justify-content-center"},[i("div",{staticClass:"about-content"},[i("div",{staticClass:"title text-ro-dark h4 text-center font-weight-bold"},[A._v("中央之城『普隆德拉』")]),i("div",{staticClass:"about-text text-ro-dark font-weight-bold"},[i("p",[A._v("是盧恩米德加爾特王國的中心，經過高度開發，成立「斯楚瓦爾茲貝特」共和國。")]),i("p",[A._v("在城中有很多的設施如大教堂、武士公會、新手訓練中心，還有一個可以容納為數眾多玩家的大公園。")])])])])])])])])},function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("section",{staticClass:"margin-about-top"},[i("div",{staticClass:"bg-ro-light about-bg-ro"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row flex-md-row-reverse"},[i("div",{staticClass:"col-md-6"},[i("img",{staticClass:"img-fluid about-img",attrs:{src:e("96d2")}})]),i("div",{staticClass:"col-md-6 d-flex justify-content-center"},[i("div",{staticClass:"about-content"},[i("div",{staticClass:"title text-ro-dark h4 text-center font-weight-bold"},[A._v("魔法之都『吉芬』")]),i("div",{staticClass:"about-text text-ro-dark font-weight-bold"},[i("p",[A._v("位於的西北方，「斯楚瓦爾茲貝特」共和國的邊界上。從很久以前，「瑪娜神力」的力量吸引了許多魔法修習者，也造就了『吉芬』今日的樣貌。")]),i("p",[A._v("傳說在城市的地底下有一座古老的遺跡，但並沒有人可以證實它的存在與否；唯一存在的是有關建來封印遺跡的高塔的傳奇故事。")])])])])])])])])},function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("section",{staticClass:"margin-about-top"},[i("div",{staticClass:"bg-ro-light about-bg-ro"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("img",{staticClass:"img-fluid about-img",attrs:{src:e("177b")}})]),i("div",{staticClass:"col-md-6 d-flex justify-content-center"},[i("div",{staticClass:"about-content"},[i("div",{staticClass:"title text-ro-dark h4 text-center font-weight-bold"},[A._v("邊陲之城『夢蘿克』")]),i("div",{staticClass:"about-text text-ro-dark font-weight-bold"},[i("p",[A._v("位於『普隆德拉』的西南方，『夢蘿克』沙漠的一個綠洲裡，又稱為沙漠之城。")]),i("p",[A._v("由於它強烈的地理特性，共和國政府的力量無法影響此地，無能的地方首長，使得整個城市為盜賊所支配。")]),i("p",[A._v("謠傳說，羅奇，盜賊的導師，也躲藏在此城的某處。")])])])])])])])])},function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("section",{staticClass:"margin-about-top"},[i("div",{staticClass:"bg-ro-light about-bg-ro"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row flex-md-row-reverse"},[i("div",{staticClass:"col-md-6"},[i("img",{staticClass:"img-fluid about-img",attrs:{src:e("08f7")}})]),i("div",{staticClass:"col-md-6 d-flex justify-content-center"},[i("div",{staticClass:"about-content"},[i("div",{staticClass:"title text-ro-dark h4 text-center font-weight-bold"},[A._v("山中之城『斐揚』")]),i("div",{staticClass:"about-text text-ro-dark font-weight-bold"},[i("p",[A._v("是深林裡的一個小村莊，也是漫畫中主要人物愛勒絲的家鄉，與外面世界的隔絕，使得依然『斐揚』得以保留它的傳統和地方特色，並未受到盧恩─米德加爾特王國的影響。")]),i("p",[A._v("在這裡修練的弓箭手，也在村後搭建了他們自己的村落。玩家可以在此進行『弓箭手』的技能修行。")])])])])])])])])},function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("section",{staticClass:"margin-about-top"},[i("div",{staticClass:"bg-ro-light about-bg-ro"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("img",{staticClass:"img-fluid about-img",attrs:{src:e("76f4")}})]),i("div",{staticClass:"col-md-6 d-flex justify-content-center"},[i("div",{staticClass:"about-content"},[i("div",{staticClass:"title text-ro-dark h4 text-center font-weight-bold"},[A._v("海港之城『艾爾貝塔』")]),i("div",{staticClass:"about-text text-ro-dark font-weight-bold"},[i("p",[A._v("位於『普隆德拉』東南方的港灣，也是盧恩─米德加爾特王國的商業中心；但激變的天氣形成兇猛的暴風和海嘯，常使得船隻無法離港。")]),i("p",[A._v("「斯楚瓦爾茲貝特」的寶藏沈船，使得寶物獵人和商人大量聚集於此。以商人為職業的玩家須在此地修練。")])])])])])])])])}],n=e("81d3"),s=e("7a38"),o=e("7a32"),r={data:function(){return{}},components:{PageMap:n["a"],ScrollTopComponent:s["a"],BgMusicComponent:o["a"]}},c=r,l=(e("d053"),e("2877")),u=Object(l["a"])(c,i,a,!1,null,"e54d5a7c",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-3200f72d.a2f50d2a.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-958b5516"],{"03e3":function(e,t,a){"use strict";var r=a("a199"),n=a.n(r);n.a},"1e7c":function(e,t,a){e.exports=a.p+"img/fbcover.d57d4b23.png"},2153:function(e,t,a){e.exports=a.p+"img/TeaTime_1920_1080.972dfa25.jpg"},"2afd":function(e,t,a){e.exports=a.p+"img/ROS_1920x1080.3d99bbe9.jpg"},"35bc":function(e,t,a){e.exports=a.p+"img/RTC_1920_1080.503c85c0.jpg"},"3fdb":function(e,t,a){},"454f":function(e,t,a){a("46a7");var r=a("584a").Object;e.exports=function(e,t,a){return r.defineProperty(e,t,a)}},"456d":function(e,t,a){var r=a("4bf8"),n=a("0d58");a("5eda")("keys",function(){return function(e){return n(r(e))}})},"46a7":function(e,t,a){var r=a("63b6");r(r.S+r.F*!a("8e60"),"Object",{defineProperty:a("d9f6").f})},4943:function(e,t,a){e.exports=a.p+"img/53e069f6aa80d.3b32d3db.jpg"},"5eda":function(e,t,a){var r=a("5ca1"),n=a("8378"),s=a("79e5");e.exports=function(e,t){var a=(n.Object||{})[e]||Object[e],i={};i[e]=t(a),r(r.S+r.F*s(function(){a(1)}),"Object",i)}},"85f2":function(e,t,a){e.exports=a("454f")},"8e6e":function(e,t,a){var r=a("5ca1"),n=a("990b"),s=a("6821"),i=a("11e9"),o=a("f1ae");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){var t,a,r=s(e),c=i.f,u=n(r),l={},d=0;while(u.length>d)a=c(r,t=u[d++]),void 0!==a&&o(l,t,a);return l}})},"990b":function(e,t,a){var r=a("9093"),n=a("2621"),s=a("cb7c"),i=a("7726").Reflect;e.exports=i&&i.ownKeys||function(e){var t=r.f(s(e)),a=n.f;return a?t.concat(a(e)):t}},a199:function(e,t,a){},a55b:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-section d-flex justify-content-center align-items-center flex-column",style:{backgroundImage:"url("+e.bgimgUrl+")"}},[a("LoadingPage",{attrs:{isLoading:e.isLoading}}),a("div",{directives:[{name:"dragged",rawName:"v-dragged",value:e.onDragged,expression:"onDragged"}],staticClass:"login-logo",attrs:{id:"login-logo",title:"可以拖曳唷!"}}),a("div",{directives:[{name:"dragged",rawName:"v-dragged",value:e.onDragged,expression:"onDragged"}],staticClass:"login-bg",attrs:{id:"login-bg",title:"視窗可以拖曳唷!"}},[a("form",{on:{submit:function(t){return t.preventDefault(),e.signin(t)}}},[a("label",{staticClass:"lable-name",attrs:{for:"email"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],attrs:{id:"email",type:"email",required:"",autofocus:""},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),a("label",{staticClass:"lable-password",attrs:{for:"password"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{id:"password",type:"password",required:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),a("label",{staticClass:"lable-saved",attrs:{for:"saved"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.saved,expression:"saved"}],attrs:{id:"saved",type:"checkbox"},domProps:{checked:Array.isArray(e.saved)?e._i(e.saved,null)>-1:e.saved},on:{change:function(t){var a=e.saved,r=t.target,n=!!r.checked;if(Array.isArray(a)){var s=null,i=e._i(a,s);r.checked?i<0&&(e.saved=a.concat([s])):i>-1&&(e.saved=a.slice(0,i).concat(a.slice(i+1)))}else e.saved=n}}}),a("button",{staticClass:"btn-play",attrs:{id:"musicPlay",type:"button"},on:{click:function(t){return e.musicStatus()}}},[e._v("stop")]),a("button",{staticClass:"btn-login",attrs:{type:"submit"}},[e._v("登入")]),a("router-link",{attrs:{to:{name:"Index"}}},[a("button",{staticClass:"btn-end"},[e._v("結束")])])],1)]),a("AlertMessage"),e._m(0)],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("audio",{attrs:{id:"roBGM",loop:"",muted:"","webkit-playsinline":"true",playsinline:"true"}},[a("source",{attrs:{src:"https://raw.githubusercontent.com/hsiangfeng/RagnarokShop/gh-pages/static/01.mp3",type:"audio/mpeg"}})])}],s=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),i=a("2f62"),o=a("e699"),c=a("add3");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach(function(t){Object(s["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var d=a("af6c"),g=a("1e7c"),f=a("2afd"),p=a("35bc"),m=a("2153"),b=a("4943"),v={components:{LoadingPage:o["a"],AlertMessage:c["a"]},data:function(){return{user:{username:"",password:""},bgimgUrl:"",saved:!0}},computed:l({},Object(i["c"])(["isLoading"])),mounted:function(){var e=this;e.autoPlayMusic(),e.randomBGImg(),e.user.username=JSON.parse(localStorage.getItem("saveAccount"))||""},methods:{signin:function(){var e=this;e.saved&&localStorage.setItem("saveAccount",JSON.stringify(e.user.username)),e.$store.dispatch("signin",e.user)},randomBGImg:function(){var e=this,t=Math.floor(6*Math.random());switch(t){case 0:e.bgimgUrl=d;break;case 1:e.bgimgUrl=g;break;case 2:e.bgimgUrl=f;break;case 3:e.bgimgUrl=p;break;case 4:e.bgimgUrl=m;break;case 5:e.bgimgUrl=b;break;default:e.bgimgUrl=f;break}},autoPlayMusic:function(){var e=document.getElementById("roBGM");e.paused&&(e.play(),e.volume=.2)},musicStatus:function(){var e=document.getElementById("musicPlay"),t=document.getElementById("roBGM");t.paused?(t.play(),e.innerHTML="stop"):(t.pause(),e.textContent="play")},onDragged:function(e){var t=e.el,a=e.deltaX,r=e.deltaY,n=e.first,s=e.last;if(n)this.dragged=!0;else if(s)this.dragged=!1;else{var i=+window.getComputedStyle(t).left.slice(0,-2)||0,o=+window.getComputedStyle(t).top.slice(0,-2)||0,c=t;c.style.left="".concat(i+a,"px"),c.style.top="".concat(o+r,"px")}}}},y=v,O=(a("03e3"),a("2877")),j=Object(O["a"])(y,r,n,!1,null,"02884d2a",null);t["default"]=j.exports},add3:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"message-alert"},e._l(e.messages,function(t,r){return a("div",{key:r,staticClass:"alert alert-dismissible",class:"alert-"+t.status},[e._v(e._s(t.message)),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){return e.removeMessage(r)}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])}),0)},n=[],s=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),i=a("2f62");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach(function(t){Object(s["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var u={name:"Alert",data:function(){return{}},computed:c({},Object(i["c"])(["messages"])),methods:{updateMessage:function(e,t){this.$store.dispatch("updateMessage",{message:e,status:t})},removeMessage:function(e){this.$store.dispatch("removeMessages",e)}}},l=u,d=(a("eafc"),a("2877")),g=Object(d["a"])(l,r,n,!1,null,null,null);t["a"]=g.exports},af6c:function(e,t,a){e.exports=a.p+"img/169058.9c01d04e.jpg"},bd86:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var r=a("85f2"),n=a.n(r);function s(e,t,a){return t in e?n()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},e699:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-section d-flex justify-content-center align-items-center flex-column"},[r("loading",{attrs:{active:e.isLoading,opacity:.85},on:{"update:active":function(t){e.isLoading=t}}},[r("img",{attrs:{src:a("f8b2"),alt:"",srcset:""}}),r("vue-typed-js",{staticClass:"justify-content-center align-items-center",attrs:{strings:["波利加載中…"]}},[r("small",{staticClass:"font-weight-normal typing"})])],1)],1)},n=[],s={props:{isLoading:{type:Boolean}},data:function(){return{}}},i=s,o=a("2877"),c=Object(o["a"])(i,r,n,!1,null,null,null);t["a"]=c.exports},eafc:function(e,t,a){"use strict";var r=a("3fdb"),n=a.n(r);n.a},f1ae:function(e,t,a){"use strict";var r=a("86cc"),n=a("4630");e.exports=function(e,t,a){t in e?r.f(e,t,n(0,a)):e[t]=a}},f8b2:function(e,t,a){e.exports=a.p+"img/loading.0c0dd86f.gif"}}]);
//# sourceMappingURL=chunk-958b5516.8ffacdb8.js.map
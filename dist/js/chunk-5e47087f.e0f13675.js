(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e47087f"],{3295:function(t,s,e){},"6faa":function(t,s,e){"use strict";var a=e("3295"),i=e.n(a);i.a},"7a38":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("a",{attrs:{id:"clickTop",href:"#",title:"TOP"}},[e("font-awesome-icon",{attrs:{icon:["fas","arrow-circle-up"],size:"3x"}})],1)])},i=[],n={mounted:function(){$(function(){$(window).scroll(function(){$(window).scrollTop()>=50?$("#clickTop").fadeIn():$("#clickTop").fadeOut()})}),$("#clickTop").click(function(t){event.preventDefault(),$("html,body").animate({scrollTop:0},500)})}},r=n,o=(e("6faa"),e("2877")),c=Object(o["a"])(r,a,i,!1,null,null,null);s["a"]=c.exports},b869:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("loading",{attrs:{active:t.isLoading,opacity:.85},on:{"update:active":function(s){t.isLoading=s}}},[a("img",{attrs:{src:e("cf1c"),alt:"",srcset:""}}),a("vue-typed-js",{staticClass:"justify-content-center align-items-center",attrs:{strings:["波利加載中…"]}},[a("small",{staticClass:"font-weight-normal typing"})])],1),a("div",{staticClass:"container"},[a("h3",{staticClass:"text-center my-2"},[t._v("結帳確認")]),a("div",{staticClass:"my-5 row justify-content-center"},[a("form",{staticClass:"col-md-6",on:{submit:function(s){return s.preventDefault(),t.payOrder()}}},[a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.order.products,function(s){return a("tr",{key:s.id},[a("td",{staticClass:"align-middle"},[t._v(t._s(s.product.title))]),a("td",{staticClass:"align-middle"},[t._v(t._s(s.qty)+"/"+t._s(s.product.unit))]),a("td",{staticClass:"align-middle text-right"},[t._v(t._s(s.final_total))])])}),0),a("tfoot",[a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),a("td",{staticClass:"text-right"},[t._v(t._s(t.order.total))])])])]),a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",{attrs:{width:"100"}},[t._v("Email")]),a("td",[t._v(t._s(t.order.user.email))])]),a("tr",[a("th",[t._v("姓名")]),a("td",[t._v(t._s(t.order.user.name))])]),a("tr",[a("th",[t._v("收件人電話")]),a("td",[t._v(t._s(t.order.user.tel))])]),a("tr",[a("th",[t._v("收件人地址")]),a("td",[t._v(t._s(t.order.user.address))])]),a("tr",[a("th",[t._v("付款狀態")]),a("td",[t.order.is_paid?a("span",{staticClass:"text-success"},[t._v("付款完成")]):a("span",[t._v("尚未付款")])])])])]),!1===t.order.is_paid?a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-danger"},[t._v("確認付款去")])]):t._e()])])]),a("ScrollTopComponent")],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",[t._v("品名")]),e("th",[t._v("數量")]),e("th",[t._v("單價")])])])}],n=e("7a38"),r={data:function(){return{orderId:"",order:{user:{}},isLoading:!1}},methods:{getOrder:function(){var t=this,s=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/order/").concat(s.orderId);s.isLoading=!0,this.$http.get(e).then(function(e){e.data.success?(s.order=e.data.order,s.isLoading=!1):(s.isLoading=!1,t.$bus.$emit("message:push","出現錯誤惹，好糗Σ( ° △ °|||)︴\n            ".concat(e.data.message),"danger"))})},payOrder:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/pay/").concat(t.orderId);t.isLoading=!0,t.$http.post(s).then(function(s){s.data.success?(t.isLoading=!1,t.getOrder(),t.$bus.$emit("message:push","感謝你的購買(*ゝ∀･)v","success")):(t.isLoading=!1,t.$bus.$emit("message:push","出現錯誤惹，好糗Σ( ° △ °|||)︴\n            ".concat(s.data.message),"danger"))})}},components:{ScrollTopComponent:n["a"]},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()}},o=r,c=e("2877"),d=Object(c["a"])(o,a,i,!1,null,null,null);s["default"]=d.exports},cf1c:function(t,s,e){t.exports=e.p+"img/loading.0c0dd86f.gif"}}]);
//# sourceMappingURL=chunk-5e47087f.e0f13675.js.map
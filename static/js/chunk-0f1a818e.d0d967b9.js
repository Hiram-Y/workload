(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f1a818e"],{"5f87":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var r=i("a78e"),s=i.n(r);function a(t){return s.a.get(t)}},"63b5":function(t,e,i){"use strict";i("fe74")},"708f":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login_index"},[i("div",{attrs:{id:"wx_qrcode"}}),i("div",{staticClass:"contianer"},[i("div",{staticClass:"footer"},[i("div",{staticClass:"inside"},[i("a",{attrs:{href:"#"}},[t._v("Copyright")]),i("i",{staticClass:"fa fa-copyright"}),i("a",{attrs:{href:"#"}},[t._v("2018-2021")]),i("a",{attrs:{href:"#"}},[t._v("教务处 All Rights Reserved")])])])])])}],a=(i("d3b7"),i("ac1f"),i("25f0"),i("5319"),i("5f87")),n={name:"login_index",data:function(){return{loading:"",data:""}},methods:{checkisauditor:function(){var t=this,e={corpid:t.$store.state.corpid,userid:t.$store.state.userid},i=t.$createObj(e),r=t.$apilist["checkisauditor"];t.$server.post(r,i["fd"]).then((function(e){t.$store.dispatch("check",e.data.toString()).then((function(){var t="/fill/list";window.location.replace(t)})).catch((function(t){}))}))},getCode:function(){var t=this.$route.query["code"],e=(this.$store.getters.userid?this.$store.getters.userid:Object(a["a"])("userid"),this.$store.state.appid);if(void 0==t){var i=this.$store.state.url+"server/login",r="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+e+"&redirect_uri="+i+"&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect";return window.location.replace(r),!1}var s={auth_code:t,app_name:"dlnu_jwc_workload"};this.$createObj(s),this.$apilist["getloginuser"];return!1}},mounted:function(){var t=this;window.WwLogin({id:"wx_qrcode",appid:t.$store.state.appid,agentid:t.$store.state.agentid,redirect_uri:t.$store.state.url+"login_transit",state:"",href:""})}},o=n,c=(i("63b5"),i("2877")),d=Object(c["a"])(o,r,s,!1,null,null,null);e["default"]=d.exports},fe74:function(t,e,i){}}]);
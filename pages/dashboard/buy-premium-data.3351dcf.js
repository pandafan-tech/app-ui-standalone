(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1055:function(e,t,r){"use strict";var n=r(995);r.n(n).a},1056:function(e,t,r){(t=r(51)(!1)).push([e.i,".buy-premium-data-container{height:100vh;padding:1.5rem .5rem 0;position:relative}.buy-premium-data-container h1,.buy-premium-data-container h2,.buy-premium-data-container h3,.buy-premium-data-container h4,.buy-premium-data-container h5,.buy-premium-data-container p,.buy-premium-data-container span{color:#f4f7fc}.buy-premium-data-container .all-pre{display:flex;align:middle;justify:center;font-size:1rem;position:absolute;right:0}.buy-premium-data-container .all-pre span{margin-right:.5rem;display:inline-block}.buy-premium-data-container .selection .el-row{margin-bottom:2rem}.buy-premium-data-container .el-input{margin-top:2rem;width:100%;margin-bottom:1rem;border:none}.buy-premium-data-container .el-input input{text-align:center;border:none;border-bottom:1px solid #95a5a6;padding:1.5rem 0 2rem;border-radius:0;background:#fff;color:#fff;font-size:3rem;background:transparent}.buy-premium-data-container .el-input input:focus,.buy-premium-data-container .el-input input:hover{border-color:#1abc9c}.buy-premium-data-container .el-input input:focus:disabled,.buy-premium-data-container .el-input input:hover:disabled{background:transparent}.buy-premium-data-container .round-margin{margin:.3rem}.buy-premium-data-container .dashboard-link,.buy-premium-data-container .switch-service{position:fixed;bottom:.5rem;z-index:999}.buy-premium-data-container .dashboard-link{right:.5rem}.buy-premium-data-container hr{margin-top:1rem;margin-bottom:1rem}.buy-premium-data-container hr.short{margin-left:5rem;margin-right:5rem}",""]),e.exports=t},1223:function(e,t,r){"use strict";r.r(t);r(96),r(27),r(23),r(80),r(130),r(16),r(267),r(66);var n=r(4),o=r(39),c=(r(184),r(17),r(1029),r(973),r(1045)),l=r(65);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={middleware:["load-rt-data","authenticated"],components:{Payment:c.a},data:function(){return console.log("this:",void 0),{confirmed_extend_info:{fee:0},gbToBuy:10,confirming:!1,all_pre:!1,confirmedInfo:null,currency:"rmb"}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({tableData:function(){return[{a:this.$t("buy_premium_data.price_table.a"),b:this.$t("buy_premium_data.price_table.b"),c:this.$t("buy_premium_data.price_table.c")}]}},Object(l.b)(["buyServiceResult"])),beforeMount:function(){this.$store.dispatch("setConfirmedInfo",{}),this.$store.dispatch("setBuyServiceResult",!1)},mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("buy-premium-data...");case 1:case"end":return e.stop()}}),e)})))()},methods:{confirmPrice:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(t.gbToBuy<=0)){r.next=2;break}return r.abrupt("return");case 2:t.confirming=!0,n=t,o={plan_id:"pre",buy_length:Number(t.gbToBuy),promocode:null,dry_run:e,all_pre:t.all_pre},console.log(o),t.$store.dispatch("confirmPrice",o).then((function(e){console.log("confirmPrice:",e),n.$message({type:"success",message:"操作成功！您已购买 ".concat(t.gbToBuy,"GB 高级流量")})})).catch((function(e){var r,c,l,m;console.log(e);var d="抱歉，服务器开小差了，请稍后再试..."+((null==e||null===(r=e.data)||void 0===r?void 0:r.message)||e);"not valid"==(null===(c=e.data)||void 0===c?void 0:c.message)&&(d="您已获得无限高级流量，无需购买"),(null===(l=e.data)||void 0===l||null===(m=l.message)||void 0===m?void 0:m.startsWith("moneyNotEnough"))?(o.selected_plan_id="pre",o.eur_amount=e.data.eur_amount,o.rmb_amount=e.data.rmb_amount,o.rmb_amount=Math.ceil(e.data.rmb_amount-t.user.money),t.$store.dispatch("setConfirmedInfo",o),t.$store.dispatch("setBuyServiceResult",!0),n.confirmed_extend_info=o,n.confirmedInfo=o):n.$message({type:"error",message:d})})).finally((function(){n.confirming=!1}));case 7:case"end":return r.stop()}}),r)})))()}}},f=(r(1055),r(38)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"buy-premium-data-container"},[e.buyServiceResult?e._e():r("div",{staticClass:"selection"},[r("el-row",[r("h3",[e._v(e._s(e.$t("buy_premium_data.input_title")))]),r("el-input",{attrs:{type:"number",disabled:e.all_pre},model:{value:e.gbToBuy,callback:function(t){e.gbToBuy=e._n(t)},expression:"gbToBuy"}}),r("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:e.$t("buy_premium_data.all_pre_condition"),placement:"top"}},[r("p",{staticClass:"all-pre"},[r("span",[e._v(e._s(e.$t("buy_premium_data.all_pre_hint")))]),r("el-switch",{model:{value:e.all_pre,callback:function(t){e.all_pre=t},expression:"all_pre"}})],1)])],1),r("el-row",[r("el-button",{staticClass:"cal-fee full-width",attrs:{disabled:e.gbToBuy<=0,type:"success",loading:e.confirming},on:{click:function(t){return e.confirmPrice(!0)}}},[e._v(e._s(e.$t("billing.purchase")))])],1),r("el-row",[r("h5",[e._v("1. "+e._s(e.$t("buy_premium_data.explains.a")))]),r("h5",[e._v("2. "+e._s(e.$t("buy_premium_data.explains.b")))]),r("h5",[e._v("3. "+e._s(e.$t("buy_premium_data.explains.c")))]),r("h5",[e._v("4. "+e._s(e.$t("buy_premium_data.explains.d")))]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,fit:!0}},[r("el-table-column",{attrs:{prop:"a",label:""}}),r("el-table-column",{attrs:{prop:"b",label:e.$t("plan_names.2")}}),r("el-table-column",{attrs:{prop:"c",label:e.$t("plan_names.4")}})],1),r("br"),r("h4",{staticClass:"right warning"},[e._v(e._s(e.$t("buy_premium_data.all_pre_condition")))])],1)],1),e.buyServiceResult?r("div",{staticClass:"payment"},[r("Payment")],1):e._e(),e.buyServiceResult?e._e():r("nuxt-link",{staticClass:"dashboard-link smooth",attrs:{to:"/dashboard/"}},[e._v(e._s(e.$t("back")))])],1)}),[],!1,null,null,null);t.default=component.exports},995:function(e,t,r){var content=r(1056);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(52).default)("4e77b671",content,!0,{sourceMap:!1})}}]);
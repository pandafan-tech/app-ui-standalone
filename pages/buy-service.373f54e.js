(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1048:function(e,t,r){"use strict";var n=r(991);r.n(n).a},1049:function(e,t,r){(t=r(50)(!1)).push([e.i,".buy-service-container{height:100vh;padding:.5rem .5rem 0;position:relative}.buy-service-container .el-form-item,.buy-service-container .el-form-item *,.buy-service-container h1,.buy-service-container h1 *,.buy-service-container h2,.buy-service-container h2 *,.buy-service-container h3,.buy-service-container h3 *,.buy-service-container h4,.buy-service-container h4 *,.buy-service-container h5,.buy-service-container h5 *,.buy-service-container input,.buy-service-container input *,.buy-service-container p,.buy-service-container p *{color:#f4f7fc}.buy-service-container .round-margin{margin:.3rem}.buy-service-container .small-text{font-size:1.2rem}.buy-service-container .small-text .warning{background:#f4f7fc}.buy-service-container .discount{margin-left:.5rem}.buy-service-container .warning-div{border:1px solid #d35400;padding:.5rem;margin-top:0;margin-bottom:1rem;border-radius:5px}.buy-service-container .el-radio-group{padding-top:.4rem}.buy-service-container .el-input{padding-left:1rem;width:17rem}.buy-service-container .el-input input{text-align:center;border:none;border-bottom:1px solid #95a5a6;padding:0;border-radius:0;background:transparent;font-size:1rem}.buy-service-container .el-input input:focus,.buy-service-container .el-input input:hover{border-color:#1abc9c}.buy-service-container .dashboard-link,.buy-service-container .switch-service{position:fixed;bottom:.5rem;z-index:999}.buy-service-container .dashboard-link{right:.5rem}.buy-service-container .switch-service{left:.5rem}.buy-service-container .checkout{margin-bottom:1rem}.buy-service-container .cal-fee{margin-bottom:3rem}.buy-service-container hr{margin-top:1rem;margin-bottom:1rem}.buy-service-container hr.short{margin-left:5rem;margin-right:5rem}.buy-service-container .el-radio{margin-left:1rem;display:block;margin-bottom:.5rem}.buy-service-container .price{color:#34495e;padding:.2rem;font-size:1rem}.buy-service-container .downgrade-warning span,.buy-service-container .price span{font-size:1rem}.buy-service-container .service-cate-warning{margin-top:1rem}.buy-service-container .plan-container.selected .select-plan-button{background:#67c23a;border-color:#67c23a}.buy-service-container .plan-container.selected .desc{padding:.2rem 1rem}.buy-service-container .plan-container.selected .select-plan-button{position:absolute;bottom:40px;left:0}.buy-service-container .plan-container.selected .price{color:#f4f7fc;margin:.5rem 0}.buy-service-container .plan-container.selected .feature{margin-top:0}.buy-service-container .plan-container.selected .extra-feature{margin-top:1rem}.buy-service-container .plan-container.selected .extra-feature h4{margin-bottom:1rem}.buy-service-container .plan-container.selected .extra-feature h4 .el-col{margin-bottom:.1rem}.buy-service-container .el-carousel .el-carousel__container{height:50vh}.buy-service-container .el-carousel__item p{color:#f4f7fc}",""]),e.exports=t},1219:function(e,t,r){"use strict";r.r(t);r(42),r(40),r(41),r(30),r(31),r(97),r(27),r(23),r(80),r(15),r(267),r(28),r(66);var n=r(4),c=r(39),o=r(182),l=r(17),d=r(1028),_=r(972),v=r(1044),m=r(65),f=r(188),h=r.n(f);function y(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){l=!0,c=e},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw c}}}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var $={middleware:["load-rt-data","authenticated"],components:{Payment:v.a},data:function(){return{extend_info:{buy_length:"12"},confirmed_extend_info:{fee:0},showCurrencyWarning:!1,confirming:!1,currency:"rmb",selectedPlanId:null,selectServiceDialogFormVisible:!1,service_cate_to_buy:"",raw_service_data:null,paymentPoll:null,expireTimeout:null,expired:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({need_to_pay:function(){return Math.ceil(this.confirmed_extend_info.fee-this.confirmed_extend_info.user_balance)},need_to_pay_usd:function(){return this.confirmed_extend_info.usd_amount},need_to_pay_eur:function(){return this.confirmed_extend_info.eur_amount},selectedPlan:function(){var e,t=y(this.plans[this.service_cate_to_buy]);try{for(t.s();!(e=t.n()).done;){var r=e.value;if(r.id==this.selectedPlanId)return r}}catch(e){t.e(e)}finally{t.f()}return{}},rebuyHint:function(){if(2!==this.selectedPlanId)return!1;if(!this.raw_service_data)return!1;var e,t=y(this.raw_service_data.raw);try{for(t.s();!(e=t.n()).done;){var s=e.value;if("allplatform"==s.cate)return"on"!=s.status&&(2===s.plan_id&&(1!=s.extra.buy_length&&!!h.a.isSame(s.extra.buy_time,"month")))}}catch(e){t.e(e)}finally{t.f()}return!1}},Object(m.b)(["buyServiceResult"])),beforeMount:function(){this.$store.dispatch("setConfirmedInfo",{}),this.$store.dispatch("setBuyServiceResult",!1)},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("buy-service..."),r=o.Loading.service({text:"刷新服务信息..."}),t.next=4,e.reloadUserData(!0);case 4:if(r.close(),console.log(1),e.service_to_buy){console.log(2),n=y(e.plans[e.service_cate_to_buy]);try{for(n.s();!(c=n.n()).done;)(l=c.value).id==e.service_to_buy.plan_id&&e.selectPlan(l)}catch(e){n.e(e)}finally{n.f()}}else console.log(3),e.service_cate_to_buy&&e.selectPlan(e.plans[e.service_cate_to_buy][0]);case 7:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){this.paymentPoll&&Object(_.clearInterval)(this.paymentPoll),this.expireTimeout&&Object(_.clearTimeout)(this.expireTimeout)},methods:{reset:function(){this.paymentPoll&&Object(_.clearInterval)(this.paymentPoll),this.expireTimeout&&Object(_.clearTimeout)(this.expireTimeout),this.$store.dispatch("setBuyServiceResult",!1),this.expired=!1},selectPlan:function(e,t){(this.selectedPlanId=e.id,this.selectedPlan.name&&this.$refs.carousel&&this.$refs.carousel.setActiveItem(this.selectedPlan.name),t)&&Object(d.a)()(".cal-fee")},switchService:function(e){console.log(e),this.service_cate_to_buy=e,this.selectServiceDialogFormVisible=!1,this.selectPlan(this.plans[this.service_cate_to_buy][0])},reloadUserData:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",t.$store.dispatch("getUserAndService").then((function(r){console.log("got data."),console.log(r[1]),t.raw_service_data=r[1],t.$store.dispatch("runTimeState",{selected_line:{}}),l.ipcRenderer.send("user-info-update",2),1==r[1].raw.length?t.service_cate_to_buy=r[1].raw[0].cate:e&&(console.log("please choose which cate of service to buy"),t.selectServiceDialogFormVisible=!0)})).catch((function(e){return console.log("get user&service e-----\x3e",e),"found no valid service"==e?(t.$alert(t.$t("select_service.suspend.time"),t.$t("select_service.suspend.title"),{confirmButtonText:"OK",dangerouslyUseHTMLString:!0}),t.selectServiceDialogFormVisible=!0):"service data suspended"==e?(t.$alert(t.$t("select_service.suspend.data"),t.$t("select_service.suspend.title"),{confirmButtonText:"OK",dangerouslyUseHTMLString:!0}),t.selectServiceDialogFormVisible=!0):"no service purchased"==e?t.selectServiceDialogFormVisible=!0:t.$message({message:"刷新服务信息失败，请稍后重试...",type:"error"})})));case 1:case"end":return r.stop()}}),r)})))()},confirmPrice:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.confirming=!0,n=t,c={plan_id:t.selectedPlanId,buy_length:Number(n.extend_info.buy_length),promocode:n.extend_info.promo_code,dry_run:e},console.log(c),t.$store.dispatch("confirmPrice",c).then((function(r){if(console.log("confirmPrice:",r),e)return r.selected_plan_id=t.selectedPlanId,r.promo_code=t.extend_info.promo_code,r.rmb_amount=Math.ceil(r.rmb_amount-r.user_balance),r.service_cate_to_buy=t.service_cate_to_buy,t.$store.dispatch("setConfirmedInfo",r),t.$store.dispatch("setBuyServiceResult",!0),n.confirmed_extend_info=r;n.$message({type:"success",message:"操作成功！"}),n.reloadUserData()})).catch((function(e){var t;console.log(e);var r="抱歉，服务器开小差了，请稍后再试..."+((null==e||null===(t=e.data)||void 0===t?void 0:t.message)||e);e.data&&"invalidPromo"==e.data.message&&(r="优惠码无效"),n.$message({type:"error",message:r})})).finally((function(){n.confirming=!1}));case 5:case"end":return r.stop()}}),r)})))()}}},C=(r(1048),r(38)),component=Object(C.a)($,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"buy-service-container"},[r("el-dialog",{staticClass:"serviceCateSelector",attrs:{title:e.$t("select_service.title"),visible:e.selectServiceDialogFormVisible,center:"",width:"100%","append-to-body":!0,fullscreen:!0,"close-on-press-escape":!1,"show-close":!1},on:{"update:visible":function(t){e.selectServiceDialogFormVisible=t}}},[r("el-card",{nativeOn:{click:function(t){return e.switchService("allplatform")}}},[r("center",[r("h1",[e._v(e._s(e.$t("services.allplatform.name")))]),r("h3",{staticClass:"subheader"},[e._v(e._s(e.$t("services.allplatform.desc")))])])],1),r("el-card",{nativeOn:{click:function(t){return e.switchService("home")}}},[r("center",[r("h1",[e._v(e._s(e.$t("services.home.name")))]),r("h3",{staticClass:"subheader"},[e._v(e._s(e.$t("services.home.desc")))])])],1),r("center",[r("p",{staticClass:"subheader"},[e._v(e._s(e.$t("select_service.hint",{place:e.$t("select_service.bottom_left")}))+" ")]),r("br"),r("p",[e._v(e._s(e.$t("login.email"))+" "),r("span",{staticClass:"underline"},[e._v(e._s(e.user.email))]),r("br"),e._v(e._s(e.$t("menu.id"))+" "),r("span",{staticClass:"underline"},[e._v(e._s(e.user.id))])])])],1),e.buyServiceResult?e._e():r("el-row",[r("el-carousel",{ref:"carousel",attrs:{autoplay:!1,trigger:"hover",arrow:"always","indicator-position":"none"}},e._l(e.plans[e.service_cate_to_buy],(function(t,n){return r("el-carousel-item",{key:t.id,staticClass:"plan-container",class:{selected:t.id==e.selectedPlanId},attrs:{name:t.name}},[r("center",[r("h1",{staticClass:"name"},[e._v(e._s(e.$t("plan_names."+t.id)))]),r("h1",{staticClass:"price thin"},[e._v("¥"+e._s(t.full_price)),r("span",[e._v("/"+e._s(e.$t("plan_desc.month")))])]),t.quota?r("el-row",{staticClass:"feature"},[r("el-col",{staticClass:"title",attrs:{span:12}},[r("center",[r("h4",[e._v(e._s(e.$t("plan_desc.quota")))])])],1),r("el-col",{staticClass:"content",attrs:{span:12}},[r("center",[r("h4",[e._v(e._s(e.$t(t.quota))+" "),t.quota>0?r("span",[e._v("GB")]):e._e()])])],1)],1):e._e(),t.pre_quota?r("el-row",{staticClass:"feature"},[r("el-col",{staticClass:"title",attrs:{span:12}},[r("center",[r("h4",[e._v(e._s(e.$t("plan_desc.pre_quota")))])])],1),r("el-col",{staticClass:"content",attrs:{span:12}},[r("center",[r("h4",[e._v(e._s(e.$t(t.pre_quota))+" "),r("span",[e._v("GB")])])])],1)],1):e._e(),t.device_limit?r("el-row",{staticClass:"feature"},[r("el-col",{staticClass:"title",attrs:{span:12}},[r("center",[r("h4",[e._v(e._s(e.$t("plan_desc.device_limit")))])])],1),r("el-col",{staticClass:"content",attrs:{span:12}},[r("center",[r("h4",[e._v(e._s(e.$t(t.device_limit))+" ")])])],1)],1):e._e(),t.extra?r("el-row",{staticClass:"extra-feature"},[r("h4",{staticClass:"underline"},[e._v(e._s(e.$t("plan_desc.extras")))]),e._l(t.extra,(function(t){return r("div",{staticClass:"extra-feature-row"},[r("el-col",{attrs:{span:24}},[r("h5",[r("i",{staticClass:"el-icon-check"}),e._v(" \n"+e._s(e.$t("plan_desc."+t)))])])],1)}))],2):e._e()],1)],1)})),1),r("el-form",{ref:"form",attrs:{"label-width":"80px",size:"mini"},nativeOn:{submit:function(t){return t.preventDefault(),e.confirmPrice(!0)}}},[r("el-form-item",{attrs:{label:e.$t("plan_names.title")}},[r("el-radio-group",{attrs:{size:"medium"},model:{value:e.selectedPlanId,callback:function(t){e.selectedPlanId=t},expression:"selectedPlanId"}},e._l(e.plans[e.service_cate_to_buy],(function(t,n){return r("el-radio",{key:t.id,attrs:{label:t.id},nativeOn:{click:function(r){return e.selectPlan(t,!0)}}},[e._v(e._s(e.$t("plan_names."+t.id))),e.service_to_buy&&t.id==e.service_to_buy.plan_id?r("span",{staticClass:"label success small round round-margin"},[e._v(e._s(e.$t("current_plan")))]):e._e()])})),1)],1),e.rebuyHint?r("div",{staticClass:"warning-div"},[r("center",[r("h2",[r("span",{staticClass:"warning"},[e._v("请注意")])]),r("p",[e._v("您本月的流量已耗尽，"),r("b",{staticClass:"underline"},[e._v("如需立即恢复服务")]),e._v(" 请购买升级至 "),r("b",{staticClass:"underline"},[e._v("超能熊猫")]),e._v("，或者等待至次月1日自动恢复流量"),r("span",{staticClass:"subheader"}),r("br"),e._v("系统会一并升级您本月以及余下月数的服务并计算差价"),r("br")]),r("p",[e._v("购买学术熊猫将会 "),r("b",{staticClass:"underline"},[e._v("作为续费处理")]),r("br"),e._v("延长到期时间但不会立即启用当前服务，您仍需等待至 "),r("b",{staticClass:"underline"},[e._v("次月1日")]),e._v(" 自动恢复流量")])])],1):e._e(),e.service_to_buy&&"off"!=e.service_to_buy.status&&e.selectedPlanId!=e.service_to_buy.plan_id?e._e():r("div",[r("el-form-item",{attrs:{label:e.$t("buy_length.title")}},[r("el-radio-group",{attrs:{size:"medium"},model:{value:e.extend_info.buy_length,callback:function(t){e.$set(e.extend_info,"buy_length",t)},expression:"extend_info.buy_length"}},[r("el-radio",{attrs:{label:"12"}},[e._v(e._s(e.$tc("buy_length.12"))),r("span",{staticClass:"label success round discount"},[e._v(e._s(e.$t("discount",{n:20})))])]),r("el-radio",{attrs:{label:"6"}},[e._v(e._s(e.$tc("buy_length.6"))),r("span",{staticClass:"label success round discount"},[e._v(e._s(e.$t("discount",{n:10})))])]),r("el-radio",{attrs:{label:"1"}},[e._v(e._s(e.$tc("buy_length.1")))])],1)],1),r("el-form-item",{attrs:{label:e.$t("promo.title")}},[r("el-input",{attrs:{type:"text",placeholder:e.$t("promo.hint")},model:{value:e.extend_info.promo_code,callback:function(t){e.$set(e.extend_info,"promo_code",t)},expression:"extend_info.promo_code"}})],1)],1),e.buyServiceResult?e._e():r("el-row",[r("el-button",{staticClass:"cal-fee full-width",attrs:{type:"success",loading:e.confirming},on:{click:function(t){return e.confirmPrice(!0)}}},[e._v(e._s(e.$t("check_price")))])],1)],1)],1),e.buyServiceResult?r("div",[r("Payment")],1):e._e(),e.buyServiceResult?e._e():r("a",{staticClass:"switch-service smooth",on:{click:function(t){e.selectServiceDialogFormVisible=!0}}},[e._v(e._s(e.$t("switch_service")))]),e.buyServiceResult?e._e():r("nuxt-link",{staticClass:"dashboard-link smooth",attrs:{to:"/dashboard/dashboard/"}},[e._v(e._s(e.$t("back")))])],1)}),[],!1,null,null,null);t.default=component.exports},991:function(e,t,r){var content=r(1049);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(51).default)("4bea2705",content,!0,{sourceMap:!1})}}]);
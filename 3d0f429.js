(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1046:function(t,e,r){"use strict";r.d(e,"a",(function(){return H}));const n="3.6.0",o="function"==typeof atob,c="function"==typeof btoa,l="function"==typeof Buffer,f="function"==typeof TextDecoder?new TextDecoder:void 0,_="function"==typeof TextEncoder?new TextEncoder:void 0,d=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="],h=(a=>{let t={};return a.forEach(((e,i)=>t[e]=i)),t})(d),v=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,m=String.fromCharCode.bind(String),y="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(t,e=(t=>t))=>new Uint8Array(Array.prototype.slice.call(t,0).map(e)),w=t=>t.replace(/[+\/]/g,(t=>"+"==t?"-":"_")).replace(/=+$/m,""),C=s=>s.replace(/[^A-Za-z0-9\+\/]/g,""),A=t=>{let e,r,n,o,c="";const l=t.length%3;for(let i=0;i<t.length;){if((r=t.charCodeAt(i++))>255||(n=t.charCodeAt(i++))>255||(o=t.charCodeAt(i++))>255)throw new TypeError("invalid character found");e=r<<16|n<<8|o,c+=d[e>>18&63]+d[e>>12&63]+d[e>>6&63]+d[63&e]}return l?c.slice(0,l-3)+"===".substring(l):c},k=c?t=>btoa(t):l?t=>Buffer.from(t,"binary").toString("base64"):A,S=l?t=>Buffer.from(t).toString("base64"):t=>{let e=[];for(let i=0,r=t.length;i<r;i+=4096)e.push(m.apply(null,t.subarray(i,i+4096)));return k(e.join(""))},x=(t,e=!1)=>e?w(S(t)):S(t),E=t=>{if(t.length<2)return(e=t.charCodeAt(0))<128?t:e<2048?m(192|e>>>6)+m(128|63&e):m(224|e>>>12&15)+m(128|e>>>6&63)+m(128|63&e);var e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return m(240|e>>>18&7)+m(128|e>>>12&63)+m(128|e>>>6&63)+m(128|63&e)},F=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,O=u=>u.replace(F,E),B=l?s=>Buffer.from(s,"utf8").toString("base64"):_?s=>S(_.encode(s)):s=>k(O(s)),P=(t,e=!1)=>e?w(B(t)):B(t),U=t=>P(t,!0),j=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,D=t=>{switch(t.length){case 4:var e=((7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3))-65536;return m(55296+(e>>>10))+m(56320+(1023&e));case 3:return m((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return m((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},$=b=>b.replace(j,D),R=t=>{if(t=t.replace(/\s+/g,""),!v.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(3&t.length));let e,r,n,o="";for(let i=0;i<t.length;)e=h[t.charAt(i++)]<<18|h[t.charAt(i++)]<<12|(r=h[t.charAt(i++)])<<6|(n=h[t.charAt(i++)]),o+=64===r?m(e>>16&255):64===n?m(e>>16&255,e>>8&255):m(e>>16&255,e>>8&255,255&e);return o},T=o?t=>atob(C(t)):l?t=>Buffer.from(t,"base64").toString("binary"):R,I=l?a=>y(Buffer.from(a,"base64")):a=>y(T(a),(t=>t.charCodeAt(0))),z=a=>I(Z(a)),L=l?a=>Buffer.from(a,"base64").toString("utf8"):f?a=>f.decode(I(a)):a=>$(T(a)),Z=a=>C(a.replace(/[-_]/g,(t=>"-"==t?"+":"/"))),G=t=>L(Z(t)),N=t=>({value:t,enumerable:!1,writable:!0,configurable:!0}),Q=function(){const t=(t,body)=>Object.defineProperty(String.prototype,t,N(body));t("fromBase64",(function(){return G(this)})),t("toBase64",(function(t){return P(this,t)})),t("toBase64URI",(function(){return P(this,!0)})),t("toBase64URL",(function(){return P(this,!0)})),t("toUint8Array",(function(){return z(this)}))},W=function(){const t=(t,body)=>Object.defineProperty(Uint8Array.prototype,t,N(body));t("toBase64",(function(t){return x(this,t)})),t("toBase64URI",(function(){return x(this,!0)})),t("toBase64URL",(function(){return x(this,!0)}))},H={version:n,VERSION:"3.6.0",atob:T,atobPolyfill:R,btoa:k,btoaPolyfill:A,fromBase64:G,toBase64:P,encode:P,encodeURI:U,encodeURL:U,utob:O,btou:$,decode:G,isValid:t=>{if("string"!=typeof t)return!1;const s=t.replace(/\s+/g,"").replace(/=+$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(s)||!/[^\s0-9a-zA-Z\-_]/.test(s)},fromUint8Array:x,toUint8Array:z,extendString:Q,extendUint8Array:W,extendBuiltins:()=>{Q(),W()}}},1073:function(t,e,r){t.exports=r.p+"img/shadowrocket_real.3981b28.jpg"},1074:function(t,e,r){t.exports=r.p+"img/1.e146761.png"},1075:function(t,e,r){t.exports=r.p+"img/2.42fb77b.png"},1076:function(t,e,r){var content=r(1122);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("c94b6b1c",content,!0,{sourceMap:!1})},1117:function(t,e,r){t.exports=r.p+"img/shadowrocket_fake.a8a3b4d.jpg"},1118:function(t,e,r){t.exports=r.p+"img/0.76312bf.jpeg"},1119:function(t,e,r){t.exports=r.p+"img/3.f31ec14.png"},1120:function(t,e,r){t.exports=r.p+"img/4.9bc02c1.png"},1121:function(t,e,r){"use strict";r(1076)},1122:function(t,e,r){var n=r(55)((function(i){return i[1]}));n.push([t.i,"",""]),t.exports=n},1169:function(t,e,r){"use strict";r.r(e);r(57),r(21),r(19),r(8),r(43);var n=r(15),o=r(44),c=r(1046);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={middleware:["load-rt-data","authenticated"],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({surge_config_link:function(){return console.log("--\x3e",this.current_service_cate),this.current_service?"https://".concat(this.staticFileDomain,"/surge/").concat(this.current_service.id,"/").concat(this.current_service.extra.pac_name):""},sub_qrlink:function(){if(!this.current_service)return"";var t="https://".concat(this.staticFileDomain,"/apsr/").concat(this.current_service.id,"/").concat(this.current_service.extra.pac_name),e="PandaFan User ".concat(this.current_service.user_id);return"sub://".concat(c.a.encode(t),"?remarks=").concat(encodeURI(e))},rule_qrlink:function(){return this.surge_config_link+"?ruleonly"}},Object(o.b)(["staticFileDomain"])),mounted:function(){console.log("[LOG] from shadowrocket.vue",this.current_service_cate)},methods:{}},_=(r(1121),r(42)),component=Object(_.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shadowrocket-container"},["zh"===t.$i18n.locale?n("div",[n("ol",[n("li",[n("span",{staticClass:"title"},[t._v("下载 Shadowrocket")]),n("p",[t._v("前往 App Store 下载 Shadowrocket"),n("br"),n("br"),n("center",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.openSite("https://itunes.apple.com/us/app/shadowrocket/id932747118")}}},[t._v("前往 AppStore")])],1),n("br"),n("el-row",{attrs:{gutter:20}},[n("center",[n("b",{staticClass:"small"},[t._v("目前AppStore存在众多山寨App，请认准正版")])]),n("el-col",{attrs:{span:12}},[n("center",[n("b",[t._v("真 👍🏻")]),n("br"),n("a",{on:{click:function(e){return t.openSite("https://itunes.apple.com/us/app/shadowrocket/id932747118")}}},[n("img",{staticClass:"app-icon",attrs:{src:r(1073)}})])])],1),n("el-col",{attrs:{span:12}},[n("center",[n("b",[t._v("假!!! 😡")]),n("br"),n("img",{staticClass:"app-icon",attrs:{src:r(1117)}})])],1)],1),n("br"),n("i",[t._v("Shadowrocket为第三方开发者发布的通用型客户端，目前为收费App")])],1)]),n("li",[n("span",{staticClass:"title"},[t._v("导入线路")]),t._m(0),n("h4",{staticClass:"warning"},[t._v("请确认使用最新版App，否则可能无法导入")]),t.sub_qrlink?n("center",[n("qrcode",{attrs:{value:t.sub_qrlink}}),n("p",[n("b",[t._v("线路二维码")])])],1):t._e(),n("br"),n("center",[n("img",{staticClass:"screenshot",attrs:{src:r(1118)}})]),n("p",[t._v("成功后，您可以看到首页已显示所有线路")]),t._m(1)],1),n("li",[n("span",{staticClass:"title"},[t._v("导入路由规则")]),t._m(2),t.rule_qrlink?n("center",[n("qrcode",{attrs:{value:t.rule_qrlink}}),n("p",[n("b",[t._v("路由规则二维码")])])],1):t._e(),n("br"),n("center",[n("img",{staticClass:"screenshot",attrs:{src:r(1074)}}),n("br"),n("img",{staticClass:"screenshot",attrs:{src:r(1075)}})])],1),n("li",[n("span",{staticClass:"title"},[t._v("连接线路")]),t._m(3),t._m(4),t._m(5),n("p",[t._v("请继续阅读本页剩余内容，了解其他注意事项")]),n("center",[n("img",{staticClass:"screenshot",attrs:{src:r(1119)}})])],1),n("li",[n("span",{staticClass:"title"},[t._v("注意事项")]),t._m(6),n("p",[t._v("Shadowrocket 非PandaFan开发/提供，若有关于App本身的问题，请联系App开发者获取支持")]),n("p"),n("center",[n("img",{staticClass:"screenshot",attrs:{src:r(1120)}})])],1)])]):n("div",[n("ol",[n("li",[n("span",{staticClass:"title"},[t._v("Download Shadowrocket")]),n("p",[t._v("Download Shadowrocket from the App Store"),n("br"),n("br"),n("center",[n("a",{on:{click:function(e){return t.openSite("https://itunes.apple.com/us/app/shadowrocket/id932747118")}}},[n("img",{staticClass:"app-icon",attrs:{src:r(1073)}}),n("br"),n("br"),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.openSite("https://itunes.apple.com/us/app/shadowrocket/id932747118")}}},[t._v("Download")])],1)]),n("br"),n("i",[t._v("Shadowrocket is a paid app developed by third-party")]),n("br"),n("i",[t._v("If you would like a ")]),n("b",[t._v("FREE ")]),n("i",[t._v("app with less features, use "),n("a",{on:{click:function(e){return t.switchGuideTab("apGuideTab","potatso_lite")}}},[t._v("Potatso Lite")])])],1)]),n("li",[n("span",{staticClass:"title"},[t._v("Import Servers")]),t._m(7),n("center",[n("qrcode",{attrs:{value:t.sub_qrlink}}),n("p",[n("b",[t._v("QR code for server list")])])],1),n("p",[t._v("When imported successfully, you will see the server list immediately.")]),t._m(8)],1),n("li",[n("span",{staticClass:"title"},[t._v("Import Routing Rules")]),t._m(9),n("center",[n("qrcode",{attrs:{value:t.rule_qrlink}}),n("p",[n("b",[t._v("QR code for routing rules")])])],1),n("br"),n("center",[n("img",{staticClass:"screenshot",attrs:{src:r(1074)}}),n("br"),n("img",{staticClass:"screenshot",attrs:{src:r(1075)}})])],1),n("li",[n("span",{staticClass:"title"},[t._v("Connect!")]),t._m(10),n("p",[t._v("You may choose different servers from the Home tab")]),t._m(11),n("ul",[t._m(12),n("p",[n("Code",[t._v("Direct")]),t._v("mode will send no data through our servers.")],1),t._m(13)])]),t._m(14)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("打开 Shadowrocket，在"),r("code",[t._v("首页")]),t._v("界面，点左上角的 扫码 图标")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"question"},[r("b",{staticClass:"larger"},[t._v("没有看到导入的线路？")]),r("br"),t._v("请尝试将Shadowrocket彻底关闭（从屏幕底部向上轻扫并在屏幕中间稍作停顿，在Shadowrocket App预览上向上轻扫来关闭），然后再重新打开Shadowrocket")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" 进入"),r("code",[t._v("配置")]),t._v("界面（必须先进入此界面），然后再点左上角的 扫码 图标"),r("br"),t._v("扫码完成后在"),r("code",[t._v("远程文件")]),t._v("下方将出现新的配置文件地址，点一下它，然后选择"),r("code",[t._v("使用配置 Use Config")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("回到"),r("code",[t._v("首页")]),t._v("界面，您可以在此自由选择要使用的线路，被选中的线路左侧会有橙色小点  ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("p",[t._v("- 请确保"),r("code",[t._v("全局路由")]),t._v("选项已设为"),r("code",[t._v("配置")])]),r("p",[t._v("- 选择"),r("code",[t._v("直连")]),t._v("将无法使用服务")]),r("p",[t._v("- 选择"),r("code",[t._v("代理")]),t._v("则是全部流量都通过PandaFan的服务器，适合在公共场合的 Wi-Fi 下加密流量保护隐私")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("打开最上方"),r("code",[t._v("未连接")]),t._v("右侧的开关便开始使用啦。首次连接会需要安装部分配置到系统，需要进行Face ID/Touch ID/密码验证")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("当您在PandaFan的网站上修改了自定义代理列表，或者PandaFan提供的线路发生变动时候，您需要更新您的配置"),r("br"),t._v("更新办法：重新导入线路配置即可")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("Open Shadowrocket, at the "),r("code",[t._v("Home")]),t._v("tab, tap the scanner icon in the upper left corner")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"question"},[r("b",{staticClass:"larger"},[t._v("No Servers Appeared?")]),r("br"),t._v("Quit Shadowrocket and re-launch the app to see changes.")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" Go to "),r("code",[t._v("Config")]),t._v("tab, tap the scanner icon in the upper left and scan the QR code below."),r("br"),t._v("Now a link should appear under the "),r("code",[t._v("REMOTE FILES")]),t._v("section. Tap the link and select"),r("code",[t._v("Use Config")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("Back to the"),r("code",[t._v("Home")]),t._v("tab. Use the switch button at the top to turn on/off the VPN.")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("The "),r("code",[t._v("Global Route")]),t._v("allows you to change the routing policy:")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("code",[t._v("Config")]),t._v("should be the default option.")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("code",[t._v("Proxy")]),t._v("mode will send everything through our servers, regardless if the site is blocked. This can be used to protect your privacy when using public Wi-Fi.")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("span",{staticClass:"title"},[t._v("Additional Notes")]),r("p",[t._v("When you have modified the custom proxy list, or if the server provided by Panda has changes, you need to update your configuration.")]),r("p",[t._v("To update your configurations, simply tap the configuration file from Step 3, and select Update")])])}],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1046:function(t,e,r){"use strict";r.d(e,"a",(function(){return H}));const n="3.6.0",o="function"==typeof atob,c="function"==typeof btoa,l="function"==typeof Buffer,d="function"==typeof TextDecoder?new TextDecoder:void 0,f="function"==typeof TextEncoder?new TextEncoder:void 0,_=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="],v=(a=>{let t={};return a.forEach(((e,i)=>t[e]=i)),t})(_),h=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,m=String.fromCharCode.bind(String),y="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(t,e=(t=>t))=>new Uint8Array(Array.prototype.slice.call(t,0).map(e)),A=t=>t.replace(/[+\/]/g,(t=>"+"==t?"-":"_")).replace(/=+$/m,""),w=s=>s.replace(/[^A-Za-z0-9\+\/]/g,""),x=t=>{let e,r,n,o,c="";const l=t.length%3;for(let i=0;i<t.length;){if((r=t.charCodeAt(i++))>255||(n=t.charCodeAt(i++))>255||(o=t.charCodeAt(i++))>255)throw new TypeError("invalid character found");e=r<<16|n<<8|o,c+=_[e>>18&63]+_[e>>12&63]+_[e>>6&63]+_[63&e]}return l?c.slice(0,l-3)+"===".substring(l):c},C=c?t=>btoa(t):l?t=>Buffer.from(t,"binary").toString("base64"):x,P=l?t=>Buffer.from(t).toString("base64"):t=>{let e=[];for(let i=0,r=t.length;i<r;i+=4096)e.push(m.apply(null,t.subarray(i,i+4096)));return C(e.join(""))},L=(t,e=!1)=>e?A(P(t)):P(t),S=t=>{if(t.length<2)return(e=t.charCodeAt(0))<128?t:e<2048?m(192|e>>>6)+m(128|63&e):m(224|e>>>12&15)+m(128|e>>>6&63)+m(128|63&e);var e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return m(240|e>>>18&7)+m(128|e>>>12&63)+m(128|e>>>6&63)+m(128|63&e)},O=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,B=u=>u.replace(O,S),k=l?s=>Buffer.from(s,"utf8").toString("base64"):f?s=>P(f.encode(s)):s=>C(B(s)),F=(t,e=!1)=>e?A(k(t)):k(t),U=t=>F(t,!0),E=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,j=t=>{switch(t.length){case 4:var e=((7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3))-65536;return m(55296+(e>>>10))+m(56320+(1023&e));case 3:return m((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return m((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},D=b=>b.replace(E,j),T=t=>{if(t=t.replace(/\s+/g,""),!h.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(3&t.length));let e,r,n,o="";for(let i=0;i<t.length;)e=v[t.charAt(i++)]<<18|v[t.charAt(i++)]<<12|(r=v[t.charAt(i++)])<<6|(n=v[t.charAt(i++)]),o+=64===r?m(e>>16&255):64===n?m(e>>16&255,e>>8&255):m(e>>16&255,e>>8&255,255&e);return o},R=o?t=>atob(w(t)):l?t=>Buffer.from(t,"base64").toString("binary"):T,$=l?a=>y(Buffer.from(a,"base64")):a=>y(R(a),(t=>t.charCodeAt(0))),G=a=>$(z(a)),N=l?a=>Buffer.from(a,"base64").toString("utf8"):d?a=>d.decode($(a)):a=>D(R(a)),z=a=>w(a.replace(/[-_]/g,(t=>"-"==t?"+":"/"))),Z=t=>N(z(t)),I=t=>({value:t,enumerable:!1,writable:!0,configurable:!0}),M=function(){const t=(t,body)=>Object.defineProperty(String.prototype,t,I(body));t("fromBase64",(function(){return Z(this)})),t("toBase64",(function(t){return F(this,t)})),t("toBase64URI",(function(){return F(this,!0)})),t("toBase64URL",(function(){return F(this,!0)})),t("toUint8Array",(function(){return G(this)}))},V=function(){const t=(t,body)=>Object.defineProperty(Uint8Array.prototype,t,I(body));t("toBase64",(function(t){return L(this,t)})),t("toBase64URI",(function(){return L(this,!0)})),t("toBase64URL",(function(){return L(this,!0)}))},H={version:n,VERSION:"3.6.0",atob:R,atobPolyfill:T,btoa:C,btoaPolyfill:x,fromBase64:Z,toBase64:F,encode:F,encodeURI:U,encodeURL:U,utob:B,btou:D,decode:Z,isValid:t=>{if("string"!=typeof t)return!1;const s=t.replace(/\s+/g,"").replace(/=+$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(s)||!/[^\s0-9a-zA-Z\-_]/.test(s)},fromUint8Array:L,toUint8Array:G,extendString:M,extendUint8Array:V,extendBuiltins:()=>{M(),V()}}},1163:function(t,e,r){var content=r(1318);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("a38245ec",content,!0,{sourceMap:!1})},1316:function(t,e,r){t.exports=r.p+"img/potatso_lite.3707bc5.png"},1317:function(t,e,r){"use strict";r(1163)},1318:function(t,e,r){var n=r(55)((function(i){return i[1]}));n.push([t.i,".potatso-container .el-select{width:100%}.potatso-container .qr{margin-top:2rem}.potatso-container .qr canvas{width:60vw}.potatso-container .server-details,.potatso-container .server-details .el-row{margin-top:1rem}.potatso-container .server-details .el-row .el-input__inner{border:none}",""]),t.exports=n},1339:function(t,e,r){"use strict";r.r(e);r(57),r(21),r(19),r(8),r(43),r(25);var n=r(15),o=r(44),c=r(1046);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{selectedLine:{},lineName:""}},computed:d(d({},Object(o.b)(["staticFileDomain","siteURL"])),{},{ssSubLink:function(){return this.current_service?"https://".concat(this.staticFileDomain,"/ss-sub/").concat(this.current_service.id,"/").concat(this.current_service.extra.pac_name):""},ssLink:function(){var s=this.current_service,t=s.extra,e="ss";s.is_ssr&&(e="ssr");var link="";link="ss"===e?"".concat(t.ss_method||"aes-256-cfb",":").concat(t.sspwd||t.pac_name,"@").concat(this.selectedLine.server,":").concat(t.ss_port):"".concat(this.selectedLine.server,":").concat(t.ss_port,":").concat(t.ss_proto||"origin",":").concat(t.ss_method,":").concat(t.ss_obfs,":").concat(c.a.encode(t.sspwd||t.pac_name),"/?protoparam=").concat(c.a.encode(t.ss_proto_param),"&obfsparam=#{Base64.encode(e.ss_obfs_param)}&remarks=#{Base64.encode(").concat(this.siteURL,"+ ' | ' + this.selectedLine.pac_name.toUpperCase())}"),console.log(link);var r="".concat(e,"://").concat(c.a.encode(link));return console.log(r),r},sslServers:function(){return this.current_lines.filter((function(s){return s.ssltide}))}}),mounted:function(){console.log("[LOG] from potatso.vue",this.current_service_cate)},methods:{changeGuideLine:function(line){this.lineName=line.name,this.selectedLine=line}}},_=(r(1317),r(42)),component=Object(_.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"potatso-container"},[n("ol",[n("li",[n("span",{staticClass:"title"},[t._v("下载 Potatso Lite")]),n("p",[t._v("前往 App Store 下载 Potatso Lite"),n("br"),n("br"),n("center",[n("a",{on:{click:function(e){return t.openSite("https://itunes.apple.com/us/app/potatso-lite/id1239860606")}}},[n("img",{staticClass:"app-icon",attrs:{src:r(1316)}}),n("br"),n("br"),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.openSite("https://itunes.apple.com/us/app/potatso-lite/id1239860606")}}},[t._v("前往 AppStore")])],1)]),n("br"),n("br"),n("center",[n("h3",[t._v("Potatso Lite 目前并不支持 VMess 协议，仅支持SSLTide和Shadowsocks协议")]),n("br")]),n("i",[t._v("Potatso Lite为第三方开发者发布的通用型客户端，目前为免费App。")]),n("br"),n("i",[t._v("如果您需要功能更强大、方便的软件，我们推荐您使用"),n("a",{on:{click:function(e){return t.switchGuideTab("apGuideTab","shadowrocket")}}},[t._v("Shadowrocket")])])],1),n("h4",[n("b",[t._v("近期收到较多反馈Potatso Lite无法正常使用的问题，我们已经与Potatso Lite作者进行反馈。")]),n("br"),t._v("如果您也无法通过Potatso Lite使用服务，我们建议您换用"),n("a",{on:{click:function(e){return t.switchGuideTab("apGuideTab","shadowrocket")}}},[t._v("Shadowrocket 配置服务")])]),n("p")]),n("li",[n("span",{staticClass:"title"},[t._v("导入线路")]),t._m(0),n("p",[t._v("如果已经有添加过线路，请点击主界面右上角的 + 号再选择 Add 添加")]),t._m(1),t._m(2),n("p",[t._v("其余部分各线路不同，请在下方选择线路，并按照对应线路信息填写：")]),n("br"),n("el-select",{attrs:{placeholder:"点此选择线路"},model:{value:t.lineName,callback:function(e){t.lineName=e},expression:"lineName"}},t._l(t.sslServers,(function(line){return n("el-option",{key:line.name,attrs:{label:line.name,value:line.name},nativeOn:{click:function(e){return t.changeGuideLine(line)}}})})),1),t.lineName?n("div",{staticClass:"server-details"},[n("el-row",[n("el-col",{attrs:{span:5}},[n("p",[t._v("Host")])]),n("el-col",{attrs:{span:19}},[n("el-input",{attrs:{type:"text",value:t.selectedLine.host,readonly:""}})],1)],1),n("el-row",[n("el-col",{attrs:{span:5}},[n("p",[t._v("Port")])]),n("el-col",{attrs:{span:19}},[n("el-input",{attrs:{type:"text",value:t.selectedLine.ssltide_port,readonly:""}})],1)],1),n("el-row",[n("el-col",{attrs:{span:5}},[n("p",[t._v("User")])]),n("el-col",{attrs:{span:19}},[n("el-input",{attrs:{type:"text",value:this.current_service.user_id,readonly:""}})],1)],1),n("el-row",[n("el-col",{attrs:{span:5}},[n("p",[t._v("Password")])]),n("el-col",{attrs:{span:19}},[n("el-input",{attrs:{type:"text",value:this.current_service.extra.sslpwd||this.current_service.extra.pac_name,readonly:""}})],1)],1),n("el-row",[n("el-col",{attrs:{span:5}},[n("p",[t._v("Remark")])]),n("el-col",{attrs:{span:19}},[n("el-input",{attrs:{type:"text",value:t.selectedLine.name,readonly:""}})],1)],1)],1):n("div",[n("center",[n("i",{staticClass:"small"},[t._v("请先选择线路")])])],1),n("br"),n("br"),t._m(3),n("p",[t._v("保存后会自动跳回到软件主界面，再次点击主界面右上角的 + 号可继续添加线路，建议您先添加完所有线路")])],1),t._m(4),t._m(5),t._m(6)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("打开 Potatso Lite，点击屏幕最下方的"),r("code",[t._v("Add a Proxy")]),t._v("然后选择Manual Input下面的"),r("code",[t._v("Add")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("1. 修改"),r("code",[t._v("Type")]),t._v("为 "),r("code",[t._v("HTTPS")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("2. 修改"),r("code",[t._v("Authentication")]),t._v("为"),r("code",[t._v("PASSWORD")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("填写完成后点击右上角的"),r("code",[t._v("Done")]),t._v("即可保存此线路")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("span",{staticClass:"title"},[t._v("调整软件设定")]),r("p",[t._v("在App最下方点击"),r("code",[t._v("Settings")]),t._v("进入设置页面，开启"),r("code",[t._v("智能路由")])]),r("p",[t._v("开启后只有墙外流量会流经PandaFan的服务器，不影响访问国内的站点")]),r("p",[t._v("关闭智能路由，则所有流量都会被加密转发给PandaFan的服务器，可以在公共网络下保护您的数据安全和个人隐私")]),r("p",{staticClass:"question"},[t._v("开启智能路由时出现错误信息？偶尔会发生这样的情况，属于Potatso Lite的软件问题，您可以无视此提示，暂时关闭Smart Routing使用即可。"),r("br"),t._v("若持续出现此现象，您可以向软件作者反馈。")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("span",{staticClass:"title"},[t._v("完成，开始使用")]),r("p",[t._v("在主界面中点击最下方的"),r("code",[t._v("开始")]),t._v("便连接上服务啦")]),r("p",[t._v("请继续阅读本页剩余内容，了解其他注意事项")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("span",{staticClass:"title"},[t._v("注意事项")]),r("p",[t._v("- Potatso Lite 为免费软件，稳定性、功能不如其他App强大，有条件建议购买 Shadowrocket")]),r("p",[t._v("偶尔软件使用出现问题，请尝试更换线路和关闭"),r("code",[t._v("智能路由")])]),r("p",[t._v("- Potatso Lite 非PandaFan开发/提供，若有关于App本身的问题，请联系App开发者获取支持")])])}],!1,null,null,null);e.default=component.exports}}]);
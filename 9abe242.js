(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1053:function(e,t,r){"use strict";r.d(t,"a",(function(){return V}));const n="3.6.0",o="function"==typeof atob,c="function"==typeof btoa,l="function"==typeof Buffer,d="function"==typeof TextDecoder?new TextDecoder:void 0,f="function"==typeof TextEncoder?new TextEncoder:void 0,h=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="],v=(a=>{let e={};return a.forEach(((t,i)=>e[t]=i)),e})(h),_=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,m=String.fromCharCode.bind(String),y="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(e,t=(e=>e))=>new Uint8Array(Array.prototype.slice.call(e,0).map(t)),w=e=>e.replace(/[+\/]/g,(e=>"+"==e?"-":"_")).replace(/=+$/m,""),A=s=>s.replace(/[^A-Za-z0-9\+\/]/g,""),x=e=>{let t,r,n,o,c="";const l=e.length%3;for(let i=0;i<e.length;){if((r=e.charCodeAt(i++))>255||(n=e.charCodeAt(i++))>255||(o=e.charCodeAt(i++))>255)throw new TypeError("invalid character found");t=r<<16|n<<8|o,c+=h[t>>18&63]+h[t>>12&63]+h[t>>6&63]+h[63&t]}return l?c.slice(0,l-3)+"===".substring(l):c},C=c?e=>btoa(e):l?e=>Buffer.from(e,"binary").toString("base64"):x,S=l?e=>Buffer.from(e).toString("base64"):e=>{let t=[];for(let i=0,r=e.length;i<r;i+=4096)t.push(m.apply(null,e.subarray(i,i+4096)));return C(t.join(""))},O=(e,t=!1)=>t?w(S(e)):S(e),k=e=>{if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?m(192|t>>>6)+m(128|63&t):m(224|t>>>12&15)+m(128|t>>>6&63)+m(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return m(240|t>>>18&7)+m(128|t>>>12&63)+m(128|t>>>6&63)+m(128|63&t)},B=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,P=u=>u.replace(B,k),U=l?s=>Buffer.from(s,"utf8").toString("base64"):f?s=>S(f.encode(s)):s=>C(P(s)),F=(e,t=!1)=>t?w(U(e)):U(e),j=e=>F(e,!0),L=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,E=e=>{switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return m(55296+(t>>>10))+m(56320+(1023&t));case 3:return m((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return m((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},D=b=>b.replace(L,E),R=e=>{if(e=e.replace(/\s+/g,""),!_.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(3&e.length));let t,r,n,o="";for(let i=0;i<e.length;)t=v[e.charAt(i++)]<<18|v[e.charAt(i++)]<<12|(r=v[e.charAt(i++)])<<6|(n=v[e.charAt(i++)]),o+=64===r?m(t>>16&255):64===n?m(t>>16&255,t>>8&255):m(t>>16&255,t>>8&255,255&t);return o},G=o?e=>atob(A(e)):l?e=>Buffer.from(e,"base64").toString("binary"):R,N=l?a=>y(Buffer.from(a,"base64")):a=>y(G(a),(e=>e.charCodeAt(0))),$=a=>N(I(a)),z=l?a=>Buffer.from(a,"base64").toString("utf8"):d?a=>d.decode(N(a)):a=>D(G(a)),I=a=>A(a.replace(/[-_]/g,(e=>"-"==e?"+":"/"))),T=e=>z(I(e)),Z=e=>({value:e,enumerable:!1,writable:!0,configurable:!0}),H=function(){const e=(e,body)=>Object.defineProperty(String.prototype,e,Z(body));e("fromBase64",(function(){return T(this)})),e("toBase64",(function(e){return F(this,e)})),e("toBase64URI",(function(){return F(this,!0)})),e("toBase64URL",(function(){return F(this,!0)})),e("toUint8Array",(function(){return $(this)}))},J=function(){const e=(e,body)=>Object.defineProperty(Uint8Array.prototype,e,Z(body));e("toBase64",(function(e){return O(this,e)})),e("toBase64URI",(function(){return O(this,!0)})),e("toBase64URL",(function(){return O(this,!0)}))},V={version:n,VERSION:"3.6.0",atob:G,atobPolyfill:R,btoa:C,btoaPolyfill:x,fromBase64:T,toBase64:F,encode:F,encodeURI:j,encodeURL:j,utob:P,btou:D,decode:T,isValid:e=>{if("string"!=typeof e)return!1;const s=e.replace(/\s+/g,"").replace(/=+$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(s)||!/[^\s0-9a-zA-Z\-_]/.test(s)},fromUint8Array:O,toUint8Array:$,extendString:H,extendUint8Array:J,extendBuiltins:()=>{H(),J()}}},1171:function(e,t,r){var content=r(1327);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(58).default)("d0f2a1f8",content,!0,{sourceMap:!1})},1326:function(e,t,r){"use strict";r(1171)},1327:function(e,t,r){var n=r(57)((function(i){return i[1]}));n.push([e.i,".android-ss-container .el-select{width:100%}.android-ss-container .qr{margin-top:2rem}.android-ss-container .qr canvas{width:60vw}",""]),e.exports=n},1347:function(e,t,r){"use strict";r.r(t);r(59),r(23),r(20),r(8),r(45),r(27);var n=r(16),o=r(46),c=r(1053);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={data:function(){return{androidGuideLine:{},lineName:""}},computed:d(d({},Object(o.b)(["staticFileDomain","siteURL"])),{},{surge_config_link:function(){return console.log("--\x3e",this.current_service_cate),this.current_service?"https://".concat(this.staticFileDomain,"/surge/").concat(this.current_service.id,"/").concat(this.current_service.extra.pac_name):""},ssLink:function(){var s=this.current_service,e=s.extra,t="ss";s.is_ssr&&(t="ssr");var link="";link="ss"===t?"".concat(e.ss_method||"aes-256-cfb",":").concat(e.sspwd||e.pac_name,"@").concat(this.androidGuideLine.server,":").concat(e.ss_port):"".concat(this.androidGuideLine.server,":").concat(e.ss_port,":").concat(e.ss_proto||"origin",":").concat(e.ss_method,":").concat(e.ss_obfs,":").concat(c.a.encode(e.sspwd||e.pac_name),"/?protoparam=").concat(c.a.encode(e.ss_proto_param),"&obfsparam=#{Base64.encode(e.ss_obfs_param)}&remarks=#{Base64.encode(").concat(this.siteURL,"+ ' | ' + this.androidGuideLine.pac_name.toUpperCase())}"),console.log(link);var r="".concat(t,"://").concat(c.a.encode(link));return console.log(r),r},ssServers:function(){return this.current_lines.filter((function(s){return s.ss}))}}),mounted:function(){console.log("[LOG] from shadowrocket.vue",this.current_service_cate)},methods:{changeGuideLine:function(line){this.lineName=line.name,this.androidGuideLine=line}}},h=(r(1326),r(44)),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"android-ss-container"},[r("ol",[r("li",[r("span",{staticClass:"title"},[e._v("下载 Shadowsocks")]),r("p",[e._v("前往 GitHub 下载最新版 Shadowsocks for Android"),r("br"),e._v("您可以下载到电脑上再导入至手机安装，或者在手机上输入短链接地址直接下载安装"),r("br"),r("br"),r("span",{staticClass:"small"},[e._v("4.7.3 Universal 版本 短链接：")]),r("el-input",{attrs:{type:"text",value:"https://mrw.so/4SRuiB",readonly:""}}),r("br"),r("br"),r("center",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.openSite("https://github.com/shadowsocks/shadowsocks-android/releases")}}},[e._v("前往 GitHub 下载")]),r("p",{staticClass:"small"},[r("i",[e._v("不知道选哪个版本？请选择有 universal 字样的即可")])])],1),r("center"),r("br"),r("i",[e._v("Shadowsocks for Android 为开源社区开发的的免费通用型客户端")]),r("br"),r("i",[e._v("基础配置外的功能请自行参考网络资料进行了解")])],1)]),r("li",[r("span",{staticClass:"title"},[e._v("导入线路配置")]),r("p",[e._v("打开 Shadowsocks，\b您可能会看到软件里已经有一个线路，地址是 198.xxxx 。此为软件自带的线路，无法使用，请无视或者删除它。")]),e._m(0),r("br"),r("p",[e._v("请在下方选择需要导入的线路")]),r("el-select",{attrs:{placeholder:"点此选择线路"},model:{value:e.lineName,callback:function(t){e.lineName=t},expression:"lineName"}},e._l(e.ssServers,(function(line){return r("el-option",{key:line.name,attrs:{label:line.name,value:line.name},nativeOn:{click:function(t){return e.changeGuideLine(line)}}})})),1),r("center",{staticClass:"qr"},[e.lineName?r("qrcode",{attrs:{value:e.ssLink}}):e._e()],1),r("br"),r("br"),r("p",{staticClass:"question"},[e._v("提示需要Play框架？无法扫描二维码？您可能是国产安卓系统的受害者，请先尝试安装GitHub中的老版本 Shadowsocks（4.1.5或更老）。如果无法解决，则必需安装Play框架。Play框架安装方法需您自行搜索\b\b对应机型，我们无法提供这方面的细节协助。"),r("a",{on:{click:function(t){return e.openSite("https://www.baidu.com/s?wd=华为P20%20play框架")}}},[e._v("点此搜索对应机型安装办法")])]),r("br"),r("p",{staticClass:"question"},[e._v("不方便扫码？您还可以用手机打开PandaFan的官网"),r("a",{on:{click:function(t){return e.openSite()}}},[e._v(e._s(e.siteURL))]),r("br"),e._v("登录后进入Android配置页面，点击对应线路的导入链接即可导入线路")])],1),e._m(1),e._m(2),e._m(3)])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("点击右上方的"),r("code",[e._v("+")]),e._v("号按钮，然后选择Scan QR code（扫描二维码），扫一扫下面的二维码即可导入对应的线路")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("span",{staticClass:"title"},[e._v("调整软件设定")]),r("p",[e._v("点击刚导入的线路最右侧 ✎ 样式图标，进入编辑界面（每条线路的配置都独立，所以需要对各线路单独修改）")]),r("p",[e._v("关闭"),r("code",[e._v("IPv6 路由")]),e._v("IPv6 Route，开启"),r("code",[e._v("DNS 转发")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("span",{staticClass:"title"},[e._v("完成，开始使用")]),r("p",[e._v("在Shadowsocks主界面选中您要使用的线路，然后点击右下方的小飞机按钮便可以开始使用了")]),r("p",[e._v("请继续阅读本页剩余内容，了解其他注意事项")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("span",{staticClass:"title"},[e._v("注意事项")]),r("p",[e._v("- 更多关于 Shadowsocks 的用法您可以在网上 Google，可以找到非常多的配置教程")]),r("p",[e._v("- Shadowsocks for Android 非PandaFan开发/提供，若有关于App本身的问题，请联系App开发者获取支持")])])}],!1,null,null,null);t.default=component.exports}}]);
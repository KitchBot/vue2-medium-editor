(function(e){function t(t){for(var n,r,a=t[0],l=t[1],A=t[2],u=0,d=[];u<a.length;u++)r=a[u],s[r]&&d.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(d.length)d.shift()();return o.push.apply(o,A||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,a=1;a<i.length;a++){var l=i[a];0!==s[l]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=i[0]))}return e}var n={},s={app:0},o=[];function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vue2-medium-editor/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var A=0;A<a.length;A++)t(a[A]);var c=l;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var n=i("1356"),s=i.n(n);s.a},1356:function(e,t,i){},"40ca":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYJpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZG7SwNBEIc/EyU+IhG0sLAIviqVqBC0EUwQFYKEGMGoTXJ5CXkcdxEJtoJtQEG08VXoX6CtYC0IiiKIhZW1oo2Gcy4JRMTMMjvf/nZn2J0FSzClpPV6F6QzOS0w7XEuhpacthdsNNNIEz1hRVcn/X4fNe3znjoz3g6atWqf+9daojFdgbpG4QlF1XLCM8K+9Zxq8o5wh5IMR4XPhAc0uaDwnalHyvxqcqLM3yZrwYAXLG3CzsQvjvxiJamlheXl9KZTa0rlPuZL7LHMwrzEbvEudAJM48HJLFN4cTPMuMxuBhlhSFbUyHeV8ufISq4is0oejVUSJMkxIOqaVI9JjIsek5Eib/b/b1/1+OhIubrdAw3PhvHeB7ZtKBYM4+vIMIrHYH2Cy0w1P3sIYx+iF6pa7wE4NuH8qqpFduFiCzof1bAWLklWcUs8Dm+n0BqC9htoXi73rLLPyQMEN+SrrmFvH/rlvGPlBwaVZ7qUIlpUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABcUlEQVR4nO3ZsW0bQQBE0aHNgLD7cS4wEGDHrkCK2IBrUAOM1IFyZYRz9mNDiQElbGH35J33CthZHH5y2AQAAAAAAAAAAAAAgP/YbvjC5fQlyWH4zprecjz/HTmwH3n4zUuS7xN2VvSa5MfIgU8jD7/5PGFjVcO/3YwA+MAEUE4A5QRQbsZfwO8kfybsrOi69QUAAAAAgBXscjk9bH0JtrNP8rz1JdiO18ByAigngHICKCeAcgIoJ4ByAigngHICKCeAcgIoJ4ByAigngHICKCeAcgIoJ4ByAigngHICKCeAcgIoJ4ByAigngHICKCeAcgIoJ4ByAigngHICKCeAcgIoJ4ByAigngHICKCeAcgIoJ4By+ySPW18CAAAAAICRdsMXLqdfSb4N31nTNcfz08iB/cjDb+6S3E/YWdHXJEMD8BpYTgDlBFBOAOVmBPBvwsaqhn+7GX8BP5McJuys6G3rCwAAAAAAAAAAAAAA8KG9A156E/UO6fQWAAAAAElFTkSuQmCC"},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),s=i("bb71");i("da64");n["a"].use(s["a"],{iconfont:"fa"});var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("medium-editor",{attrs:{readOnly:!1,prefill:e.defaultValue,options:e.options,onChange:e.onChange},on:{uploaded:e.uploadCallback},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)},r=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[e.readOnly?e._e():i("div",{staticClass:"medium-editor-container"},[e.editor?i("insert-embed",{attrs:{uploadFunction:e.options.uploadFunction,onChange:e.triggerChange,editorRef:e.$refs.editor,editor:e.editor},on:{uploaded:e.uploadedCallback}}):e._e(),e.editor?i("list-handler",{attrs:{editor:e.editor,onChange:e.triggerChange}}):e._e(),i("div",{ref:"editor",staticClass:"editor",class:e.editorClass,domProps:{innerHTML:e._s(e.prefill)}})],1),e.readOnly?i("read-mode",{attrs:{content:e.prefill}}):e._e()],1)},l=[],A=i("673f"),c=i.n(A),u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"image-handler-container"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.insert.isShow,expression:"insert.isShow"}],staticClass:"insert-image-container",style:e.insert.position},[i("div",{staticClass:"insert-image-toggle"},[i("span",{directives:[{name:"show",rawName:"v-show",value:!this.insert.isToggle,expression:"!this.insert.isToggle"}]},[i("button",{staticClass:"btn-toggle",on:{click:e.toggle}},[i("font-awesome-icon",{attrs:{icon:"plus"}})],1)]),i("span",{directives:[{name:"show",rawName:"v-show",value:this.insert.isToggle,expression:"this.insert.isToggle"}]},[i("button",{staticClass:"btn-toggle",on:{click:e.toggle}},[i("font-awesome-icon",{attrs:{icon:"times"}})],1)])]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.insert.isToggle,expression:"insert.isToggle"}],staticClass:"insert-image-menu"},[i("insert-image",{attrs:{editor:e.editor,insert:e.insert,editorRef:e.editorRef,uploadFunction:e.uploadFunction,handler:e.handler},on:{uploaded:e.uploadCallback,imageClick:e.imageClickHandler}}),i("insert-instagram",{attrs:{editor:e.editor,insert:e.insert,editorRef:e.editorRef},on:{onChange:e.onChange}})],1)]),i("image-position",{attrs:{handler:e.handler},on:{onPositionChange:e.onChange}})],1)},d=[],h=i("cebc"),p=(i("a481"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("file-upload",{ref:"upload",staticClass:"btn-toggle",attrs:{extensions:"gif,jpg,jpeg,png,webp",accept:"image/png,image/gif,image/jpeg,image/webp","custom-action":e.uploadFunction,multiple:!0,size:10485760},on:{"input-filter":e.inputFilter,"input-file":e.inputFile},model:{value:e.insert.files,callback:function(t){e.$set(e.insert,"files",t)},expression:"insert.files"}},[i("font-awesome-icon",{attrs:{icon:["far","images"]}})],1)}),m=[],g=(i("7f7f"),i("8019")),f=i.n(g),b=i("ecee"),w=i("ad3d"),E=i("b702"),v=i("17fb"),B=i.n(v);b["c"].add(E["a"]);var I={props:["editor","insert","uploadFunction","editorRef","handler"],components:{FontAwesomeIcon:w["a"],"file-upload":f.a},data:function(){return{currentLine:null,currentImg:null,currentSize:"is-normal",position:{top:"0"},isShow:!1}},methods:{initializeExisting:function(){var e=this,t=this;setTimeout(function(){var i=e.editor.getFocusedElement();if(!i)return!1;var n=i.getElementsByClassName("editor-image");B.a.map(n,function(e){e.onclick=function(){var e=this;setTimeout(function(){t.sizingHandler(e)})}})})},addImage:function(e){if(this.$emit("uploaded",e),this.insert.isToggle){var t=this;this.editorRef.focus(),this.editor.selectElement(this.insert.focusLine),this.editor.pasteHTML('<div class="editor-image">\n                        <img src="'.concat(e,'" />\n                    </div>\n                    <div class="editor-image-description"><br></div>\n                    <br />'),{cleanAttrs:[],cleanTags:[],unwrapTags:[]}),this.currentLine=this.editor.getSelectedParentElement().previousElementSibling.previousElementSibling,this.currentImg=this.currentLine.querySelector("img");var i=this.currentImg.getBoundingClientRect();this.window.scrollTo(0,i.top-i.x),this.currentLine.onclick=function(){var e=this;setTimeout(function(){t.sizingHandler(e)})},this.insert.isShow=!1}},sizingHandler:function(e){var t=e.className;e.className=t.replace("is-focus","")+" is-focus",t.indexOf("expand")>-1?this.currentSize="is-expand":t.indexOf("full")>-1?this.currentSize="is-full":this.currentSize="is-normal";var i=e.querySelector("img");this.currentLine=e,this.isShow=!0;var n=i.getBoundingClientRect();this.position.top=n.top+"px",this.$emit("imageClick",{position:this.position,currentLine:this.currentLine,isShow:this.isShow,currentSize:this.currentSize})},inputFilter:function(e,t,i){if(e&&!t){if(/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(e.name))return i();if(/\.(php5?|html?|jsx?)$/i.test(e.name))return i()}},inputFile:function(e,t){e&&!t&&(this.$refs.upload.active=!0),e&&e.success&&this.addImage(e.response.url)}},mounted:function(){this.initializeExisting()},beforeMount:function(){this.window=window,window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},C=I,L=i("2877"),y=Object(L["a"])(C,p,m,!1,null,null,null),S=y.exports,Q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){t.on;return[i("span",{staticClass:"btn-toggle",on:{click:e.init}},[i("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)]}}]),model:{value:e.isShow,callback:function(t){e.isShow=t},expression:"isShow"}},[i("span",{on:{mouseleave:e.init}},[i("v-layout",{attrs:{row:""}},[i("v-text-field",{attrs:{color:"white",light:"",label:"Instagram url"},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}}),i("v-btn",{staticStyle:{"margin-top":"15px"},attrs:{icon:"",color:"green"},on:{click:e.getIframe}},[i("v-icon",[e._v("fas fa-check-circle")])],1)],1)],1)])},Z=[],H=i("795b"),P=i.n(H),J=i("42b9"),k=(i("96cf"),i("3b8d")),M=i("bc3a"),N=i.n(M),X="https://api.instagram.com/oembed/",O=function(e){return z.apply(this,arguments)};function z(){return z=Object(k["a"])(regeneratorRuntime.mark(function e(t){var i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N()({method:"GET",url:X,params:{url:t,omitscript:!0,hidecaption:!0,maxwidth:"900"}});case 2:return i=e.sent,e.abrupt("return",i.data.html);case 4:case"end":return e.stop()}},e)})),z.apply(this,arguments)}var T=i("5118");function j(e){return new P.a(function(t){Object(T["setTimeout"])(function(){t()},e)})}b["c"].add(J["a"]);var x={props:["editor","editorRef","insert"],components:{FontAwesomeIcon:w["a"]},data:function(){return{isShow:!1,url:"",instagramHtml:"",embedElm:null}},methods:{init:function(){this.isShow=!this.isShow,this.url=""},getIframe:function(){var e=this;O(this.url).then(function(t){e.instagramHtml=t,e.addIframe(t)})},addIframe:function(e){var t=this;if(this.editorRef.focus(),this.editor.selectElement(this.insert.focusLine),this.editor.pasteHTML('<div class="instagram--container"><div class="instagram--content">'+e+"</div></div>",{cleanAttrs:[],cleanTags:[],unwrapTags:[]}),this.embedElm=this.editor.getSelectedParentElement(),void 0===window.instgrm){var i=document.createElement("script");i.src="https://platform.instagram.com/en_US/embeds.js",i.async=!0,this.embedElm.appendChild(i)}else window.instgrm.Embeds.process();j(1e3).then(function(){t.editor.pasteHTML("<span></span>",{cleanAttrs:[],cleanTags:[],unwrapTags:[]}),j(1e3).then(function(){t.insert.isToggle=!1,t.insert.isShow=!1})})},detectEmbed:function(e){if(13===e.keyCode&&this.embedElm){var t=this.embedElm.innerHTML.replace("<br>","");this.renderEmbed(t,this.embedElm),this.embedElm=null,this.insert.isShow=!1}}}},G=x,R=i("6544"),U=i.n(R),Y=i("8336"),D=i("132d"),F=i("a722"),W=i("2677"),q=i("3a2f"),V=Object(L["a"])(G,Q,Z,!1,null,null,null),K=V.exports;U()(V,{VBtn:Y["a"],VIcon:D["a"],VLayout:F["a"],VTextField:W["a"],VTooltip:q["a"]});var _=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.handler.isShow?n("div",{staticClass:"image-handler",style:e.handler.position},[n("div",{staticClass:"image-hander-menu"},[n("button",{staticClass:"btn-toggle",on:{click:function(t){return e.imageSizing("is-normal")}}},["is-normal"==e.handler.currentSize?n("img",{attrs:{src:i("8b06")}}):e._e(),"is-normal"!=e.handler.currentSize?n("img",{attrs:{src:i("9c9c")}}):e._e()]),n("button",{staticClass:"btn-toggle",on:{click:function(t){return e.imageSizing("is-expand")}}},["is-expand"==e.handler.currentSize?n("img",{attrs:{src:i("7653")}}):e._e(),"is-expand"!=e.handler.currentSize?n("img",{attrs:{src:i("d292")}}):e._e()]),n("button",{staticClass:"btn-toggle",on:{click:function(t){return e.imageSizing("is-full")}}},["is-full"==e.handler.currentSize?n("img",{attrs:{src:i("40ca")}}):e._e(),"is-full"!=e.handler.currentSize?n("img",{attrs:{src:i("ae91")}}):e._e()])])]):e._e()},$=[],ee={props:["handler"],methods:{imageSizing:function(e){this.handler.currentSize=e,this.handler.currentLine.className="editor-image "+e,this.$emit("onPositionChange")}}},te=ee,ie=Object(L["a"])(te,_,$,!1,null,null,null),ne=ie.exports,se=i("c074");b["c"].add([se["a"],se["b"]]);var oe={components:{FontAwesomeIcon:w["a"],InsertImage:S,ImagePosition:ne,InsertInstagram:K},data:function(){return{insert:{position:{top:"0",left:"0"},isShow:!1,isToggle:!1,embedElm:null,files:[],focusLine:null},handler:{currentLine:null,currentImg:null,currentSize:"is-normal",position:{top:"0"},isShow:!1}}},props:["editor","uploadFunction","editorRef","onChange"],methods:{subscribe:function(){this.editor.subscribe("editableKeyup",this.detectShowToggle),this.editor.subscribe("editableClick",this.detectShowToggle),this.editor.subscribe("editableKeyup",this.detectImageDescription),this.editor.subscribe("editableClick",this.detectImageDescription)},unsubscribe:function(){this.editor.unsubscribe("editableKeyup",this.detectShowToggle),this.editor.unsubscribe("editableClick",this.detectShowToggle),this.editor.unsubscribe("editableKeyup",this.detectImageDescription),this.editor.unsubscribe("editableClick",this.detectImageDescription)},detectImageDescription:function(){var e=this.editor.getFocusedElement();if(e){var t=e.getElementsByClassName("editor-image-description");B.a.map(t,function(e){var t=e.innerHTML.trim();e.className=t&&"<br>"!=t?"editor-image-description":"editor-image-description is-empty"})}},detectShowToggle:function(e){if(this.insert.isShow&&this.insert.isToggle&&this.toggle(),13==e.keyCode){var t=this.editor.getSelectedParentElement(),i=t.nextElementSibling,n=t.previousElementSibling;i&&n&&i.className.indexOf("editor-image-description")>-1&&n.className.indexOf("editor-image")>-1&&i.parentNode.insertBefore(i,t)}if(this.handler.isShow=!1,e.target.className.indexOf("editor-image-description")<=-1){var s=this.editor.getFocusedElement().getElementsByClassName("editor-image");B.a.map(s,function(e){e.className=e.className.replace("is-focus","")})}var o=this.editor.getSelectedParentElement(),r=o.outerHTML,a=r.indexOf("<li>")>-1,l=o.innerHTML.replace(/^(<br\s*\/?>)+/,"").trim();if(l||a)this.insert.isShow=!1,this.insert.isToggle=!1,this.insert.focusLine=null;else{var A=o.getBoundingClientRect();this.insert.position.top=A.top+"px",this.insert.position.left=A.left+"px",this.insert.isShow=!0,this.insert.focusLine=o}},toggle:function(){this.insert.isToggle=!this.insert.isToggle},imageClickHandler:function(e){this.handler=e},uploadCallback:function(e){this.$emit("uploaded",e)},handleScroll:function(){if(this.handler.isShow=!1,this.insert.isShow){var e=this.editor.getSelectedParentElement(),t=e.getBoundingClientRect();this.insert=Object(h["a"])({},this.insert,{isShow:!0,focusLine:e,position:{top:t.top+"px",left:t.left+"px"}})}}},mounted:function(){this.subscribe()},destroyed:function(){this.unsubscribe()},beforeMount:function(){this.window=window,window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},re=oe,ae=Object(L["a"])(re,u,d,!1,null,null,null),le=ae.exports,Ae=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"list-handler"})},ce=[],ue=(i("4917"),{components:{},data:function(){return{focusLine:null,currentLine:null,isLastBeforeLi:!1}},props:["editor"],methods:{subscribe:function(){this.editor.subscribe("editableKeydown",this.detectList),this.editor.subscribe("editableKeyup",this.detectList)},unsubscribe:function(){this.editor.unsubscribe("editableKeydown",this.detectList),this.editor.subscribe("editableKeyup",this.detectList)},detectList:function(e){this.currentLine=this.editor.getSelectedParentElement();var t=this.currentLine.innerHTML.match(/^(-&nbsp;).*/g);if(t&&t.length>0){var i=this.currentLine.innerHTML.replace(/^(-&nbsp;)/g,"");this.currentLine.innerHTML="<ul><li>"+i+"</li></ul>"}var n=this.currentLine.innerHTML.match(/^(\d+.&nbsp;)/g);if(n&&n.length>0){var s=this.currentLine.innerHTML.replace(/^(\d+.&nbsp;)/g,"");this.currentLine.innerHTML="<ol><li>"+s+"</li></ol>"}var o=e.keyCode||e.charCode;8!=o&&46!=o||("<li><br></li>"==this.currentLine.outerHTML?this.isLastBeforeLi=!0:this.isLastBeforeLi=!1,this.isLastBeforeLi&&(this.currentLine.outerHTML="",this.editor.pasteHTML("<p><br><br></p>",{cleanAttrs:[],cleanTags:[],unwrapTags:[]})))}},mounted:function(){this.subscribe()},destroyed:function(){this.unsubscribe()}}),de=ue,he=Object(L["a"])(de,Ae,ce,!1,null,null,null),pe=he.exports,me=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"medium-editor-container"},[i("div",{ref:"content",staticClass:"editor read-only has-content",domProps:{innerHTML:e._s(e.content)}})])},ge=[],fe=i("f341"),be=i.n(fe),we={props:["content"],methods:{render:function(){this.renderEmbed()},renderEmbed:function(){var e=this,t=this.$refs.content.getElementsByClassName("editor-embed");B.a.map(t,function(t){var i=t.getElementsByTagName("a")[0],n=t.nextElementSibling;if(n.className.indexOf("gist-embed-iframe")>-1&&(n.outerHTML=""),i){var s=i.getAttribute("href");e.renderEmbedElm(s,t)}})},renderEmbedElm:function(e,t){be.a.embed(e,t)}},mounted:function(){this.render()}},Ee=we,ve=Object(L["a"])(Ee,me,ge,!1,null,null,null),Be=ve.exports,Ie={name:"medium-editor",data:function(){return{editor:null,defaultOptions:{forcePlainText:!1,placeholder:{text:"Write something great!!"},toolbar:{buttons:["bold","italic","quote","h1","h2","h3","h4","h5"]}},hasContent:!1}},props:["options","onChange","prefill","readOnly"],computed:{editorOptions:function(){return B.a.extend(this.defaultOptions,this.options)},editorClass:function(){return{"has-content":this.hasContent}}},components:{InsertEmbed:le,ListHandler:pe,ReadMode:Be},mounted:function(){this.readOnly||this.createElm()},methods:{createElm:function(){this.editor=new c.a(this.$refs.editor,this.editorOptions),this.prefill&&(/<[a-z][\s\S]*>/i.test(this.prefill)?this.hasContent=!0:this.hasContent=!1,this.$refs.editor.focus()),this.editor.subscribe("editableInput",this.triggerChange)},destroyElm:function(){this.editor.destroy()},triggerChange:function(){var e=this,t=this.editor.getContent();setTimeout(function(){/<[a-z][\s\S]*>/i.test(t)?e.hasContent=!0:e.hasContent=!1},0),this.$emit("input",t),this.onChange&&this.onChange(t)},uploadedCallback:function(e){this.$emit("uploaded",e)}},destroyed:function(){this.destroyElm()}},Ce=Ie,Le=i("7496"),ye=Object(L["a"])(Ce,a,l,!1,null,null,null),Se=ye.exports;U()(ye,{VApp:Le["a"]});var Qe={name:"app",data:function(){return{content:"",defaultValue:'<h1>Vue2 <b>Medium Editor</b></h1>\n          <div class="editor-image is-full"><img src="https://source.unsplash.com/yxNURc8he3o/2000x600"></div>\n          <div class="editor-image-description">righteous indignation and dislike</div>\n          <p>But I must explain to you how all this mistaken idea of denouncing <b>pleasure and praising pain was born and I will give you</b> a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes</p><div class="instagram--container"><div class="instagram--content"><iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/BwM5w9njP7f/embed/?cr=1&amp;v=12&amp;wp=652&amp;rd=http%3A%2F%2F192.168.0.100%3A8081&amp;rp=%2Fvue2-medium-editor%2F#%7B%22ci%22%3A0%2C%22os%22%3A9374.295000001439%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="692" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" style="background: white; max-width: 658px; width: calc(100% - 2px); border-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px 0px 12px; min-width: 326px; padding: 0px;"></iframe></div></div><p class="editor-embed">\n                      </p><p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will</p><p><br></p><p class="editor-embed">\n                        </p><p></p>\n            <p></p><p class="editor-embed"><br></p>\n          <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariaturasdasdasdasd<br></p>\n          <h2>Section 1.10.33</h2>\n          <div class="editor-image is-normal"><img src="https://source.unsplash.com/DKnXlH_r3x4/2000x800"></div>\n          <div class="editor-image-description">you how all this mistaken idea of denouncing pleasure</div>\n          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus</p><p class="editor-embed">\n                        </p><p></p>\n            <p></p><p class="editor-embed"><br></p><p></p><ol><li>cum soluta nobis est eligendi optio cumque</li><li>righteous indignation and dislike</li></ol><p></p><h3>odio dignissimos ducimus</h3>\n          <p></p>\n          <div class="editor-image is-expand"><img src="https://source.unsplash.com/-g7axSVst6Y/1600x600">\n          </div>\n          <div class="editor-image-description">I will give you a complete account of the system</div>\n          <p></p>\n          <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of wills</p>',options:{uploadFunction:function(){return null}}}},components:{"medium-editor":Se},methods:{onChange:function(){console.log(this.content)},uploadCallback:function(e){console.log("uploaded url",e)}}},Ze=Qe,He=(i("034f"),Object(L["a"])(Ze,o,r,!1,null,null,null)),Pe=He.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(Pe)}}).$mount("#app")},7653:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYJpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZG7SwNBEIc/EyU+IhG0sLAIviqVqBC0EUwQFYKEGMGoTXJ5CXkcdxEJtoJtQEG08VXoX6CtYC0IiiKIhZW1oo2Gcy4JRMTMMjvf/nZn2J0FSzClpPV6F6QzOS0w7XEuhpacthdsNNNIEz1hRVcn/X4fNe3znjoz3g6atWqf+9daojFdgbpG4QlF1XLCM8K+9Zxq8o5wh5IMR4XPhAc0uaDwnalHyvxqcqLM3yZrwYAXLG3CzsQvjvxiJamlheXl9KZTa0rlPuZL7LHMwrzEbvEudAJM48HJLFN4cTPMuMxuBhlhSFbUyHeV8ufISq4is0oejVUSJMkxIOqaVI9JjIsek5Eib/b/b1/1+OhIubrdAw3PhvHeB7ZtKBYM4+vIMIrHYH2Cy0w1P3sIYx+iF6pa7wE4NuH8qqpFduFiCzof1bAWLklWcUs8Dm+n0BqC9htoXi73rLLPyQMEN+SrrmFvH/rlvGPlBwaVZ7qUIlpUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABtElEQVR4nO3dLa5TQRzG4ZePBAKKhYDEEASpIIEg2UQ3wBrYQDeBJOAaDOpKWAgKUgQJoldiOumcW877PH76n5z8zMmcdBIAAAAAAAAAAAAAAP5jt6ZP2G8fJLk/fc46HbLZ/Zo54O7MH7/2IcmrBeas0eckr2cOuD3zx6/dWWDGWk1/dksEwAUTQDkBlBNAuSXeAr4k+bnAnDW6uukNAAAAAABrMPZF0H77KMcPFe6ddTeM+p3kUza7H6cuHD0L+Jjk2eBa5via5Pmpi0ZPAx8PrmOeJyOLHAeXE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBsN4PtZd8E5fBtZNPpfwW9yvBHctfCX4ZDjTeMAAAAAAP8wdm/gKfbbd0meTp+zTlfZ7N7PHDB6FnCKF0leLjBnjR4mmRqA4+ByAigngHICKLdEAH8WmLFW05/dEm8Bb+PLoVGHm94AAAAAAAAAAAAAAAAX7S+LiRynJRkZxgAAAABJRU5ErkJggg=="},"8b06":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYJpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZG7SwNBEIc/EyU+IhG0sLAIviqVqBC0EUwQFYKEGMGoTXJ5CXkcdxEJtoJtQEG08VXoX6CtYC0IiiKIhZW1oo2Gcy4JRMTMMjvf/nZn2J0FSzClpPV6F6QzOS0w7XEuhpacthdsNNNIEz1hRVcn/X4fNe3znjoz3g6atWqf+9daojFdgbpG4QlF1XLCM8K+9Zxq8o5wh5IMR4XPhAc0uaDwnalHyvxqcqLM3yZrwYAXLG3CzsQvjvxiJamlheXl9KZTa0rlPuZL7LHMwrzEbvEudAJM48HJLFN4cTPMuMxuBhlhSFbUyHeV8ufISq4is0oejVUSJMkxIOqaVI9JjIsek5Eib/b/b1/1+OhIubrdAw3PhvHeB7ZtKBYM4+vIMIrHYH2Cy0w1P3sIYx+iF6pa7wE4NuH8qqpFduFiCzof1bAWLklWcUs8Dm+n0BqC9htoXi73rLLPyQMEN+SrrmFvH/rlvGPlBwaVZ7qUIlpUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpklEQVR4nO3dPYoUURiF4eMPMmjoOjQ0lw4Ejd2EsWhgbCDmvQnzyWQikwl1HYbKIAgGMxsQud+M9zzPAuoUxZs0t6hOAAAAAAAAAAAAAAD4j91avvD51f0kJ8t39nSRw/HnyoG7Ky9+5VOS5wM7OzpN8mLlwO2VF79yZ2BjV8uf3UQA3GACKCeAcgIoN/Er4CzJj4GdHZ1f9w0AAAAAADuYeCPoXi5fCHm4fGsv35Oc5nD8tXJk4izgfZLXAzs7+pjkzcqBidPARwMbu3q8esBxcDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0C5iQC+DWzs6uvqgYlvBb9L8iU+Fv23Lj8WDQAAAADwzyb+N/BtkifLd/Z0nsPxw8qBibOAp0meDezs6EGSpQE4Di4ngHICKCeAchMB/B7Y2NXyZzfxK+BlkpOBnR1dXPcNAAAAAAAAAAAAAABwo/0Bz2IdW3KlJRsAAAAASUVORK5CYII="},"9c9c":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYJpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZG7SwNBEIc/EyU+IhG0sLAIviqVqBC0EUwQFYKEGMGoTXJ5CXkcdxEJtoJtQEG08VXoX6CtYC0IiiKIhZW1oo2Gcy4JRMTMMjvf/nZn2J0FSzClpPV6F6QzOS0w7XEuhpacthdsNNNIEz1hRVcn/X4fNe3znjoz3g6atWqf+9daojFdgbpG4QlF1XLCM8K+9Zxq8o5wh5IMR4XPhAc0uaDwnalHyvxqcqLM3yZrwYAXLG3CzsQvjvxiJamlheXl9KZTa0rlPuZL7LHMwrzEbvEudAJM48HJLFN4cTPMuMxuBhlhSFbUyHeV8ufISq4is0oejVUSJMkxIOqaVI9JjIsek5Eib/b/b1/1+OhIubrdAw3PhvHeB7ZtKBYM4+vIMIrHYH2Cy0w1P3sIYx+iF6pa7wE4NuH8qqpFduFiCzof1bAWLklWcUs8Dm+n0BqC9htoXi73rLLPyQMEN+SrrmFvH/rlvGPlBwaVZ7qUIlpUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABl0lEQVR4nO3cMU5VURSF4X2UEIKl45CSnspEp2N0DIbxaEtPieOwhBAS8yxgCnvzOOv7BnDXzc3fvHdPbhUAAAAAAAAAAAAAAG/Y6h44HA7nVXXWvbOpx7XWQ+fARAC/qupL986mfq+1vnYOvOu8+Iv3Axu7an92EwFwxAQQTgDhBBDuZGDjpqruB3Z2dPvaNwAAAAAA7GDiQMhpPR8I+di9tZm/9Xwg5KlzZCKA66r61r2zqeu11vfOgYm3gZ8GNnZ10T3gdXA4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAuIkA/gxs7Oque8DHoo/XyMeiAQAAAIAEE38F/6iqy+6dTd2utX52Dpx0XvzFVVV9HtjZ0Yeqag3A6+BwAggngHACCDcRwL+BjV21P7uJn4HnVXXWvbOpx7XWw2vfBAAAAAAAAAAAAAAAR+s/WyMtFJhHwuAAAAAASUVORK5CYII="},ae91:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYJpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZG7SwNBEIc/EyU+IhG0sLAIviqVqBC0EUwQFYKEGMGoTXJ5CXkcdxEJtoJtQEG08VXoX6CtYC0IiiKIhZW1oo2Gcy4JRMTMMjvf/nZn2J0FSzClpPV6F6QzOS0w7XEuhpacthdsNNNIEz1hRVcn/X4fNe3znjoz3g6atWqf+9daojFdgbpG4QlF1XLCM8K+9Zxq8o5wh5IMR4XPhAc0uaDwnalHyvxqcqLM3yZrwYAXLG3CzsQvjvxiJamlheXl9KZTa0rlPuZL7LHMwrzEbvEudAJM48HJLFN4cTPMuMxuBhlhSFbUyHeV8ufISq4is0oejVUSJMkxIOqaVI9JjIsek5Eib/b/b1/1+OhIubrdAw3PhvHeB7ZtKBYM4+vIMIrHYH2Cy0w1P3sIYx+iF6pa7wE4NuH8qqpFduFiCzof1bAWLklWcUs8Dm+n0BqC9htoXi73rLLPyQMEN+SrrmFvH/rlvGPlBwaVZ7qUIlpUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZ0lEQVR4nO3ZsU3FQBBF0Rn4AYJ+yImQoAzogRooCFJy+gGRoCWhhV3DvnMK8BtZN7FcBQAAAAAAAAAAAADAP9azB8YYl1V1MXtnU1/d/TlzYEUAL1V1N3tnU6/dfT9z4Gzmw3+dL9jY1fR3tyIA/jABhBNAOAGEOy3YeKuqjwU7O3o/+gAAAAAAYAc9xng4+giO02OMcfQRHMffwHACCCeAcAIIJ4BwAggngHACCCeAcAIIJ4BwAggngHACCCeAcAIIJ4BwAggngHACCCeAcAIIJ4BwAggngHACCCeAcAIIJ4BwAggngHACCCeAcAIIJ4BwAggngHACCCeAcAIIJ4BwAggngHCnqno8+ggAAAAAAGbq2QNjjKequp69s6n37n6eOXCa+fBfN1V1u2BnR1dVNTUAfwPDCSCcAMIJINyKAL4XbOxq+rtb8Rl4WVUXs3c29dXdn0cfAQAAAAAAAAAAAADAn/UDSmUh115NxS0AAAAASUVORK5CYII="},d292:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYJpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZG7SwNBEIc/EyU+IhG0sLAIviqVqBC0EUwQFYKEGMGoTXJ5CXkcdxEJtoJtQEG08VXoX6CtYC0IiiKIhZW1oo2Gcy4JRMTMMjvf/nZn2J0FSzClpPV6F6QzOS0w7XEuhpacthdsNNNIEz1hRVcn/X4fNe3znjoz3g6atWqf+9daojFdgbpG4QlF1XLCM8K+9Zxq8o5wh5IMR4XPhAc0uaDwnalHyvxqcqLM3yZrwYAXLG3CzsQvjvxiJamlheXl9KZTa0rlPuZL7LHMwrzEbvEudAJM48HJLFN4cTPMuMxuBhlhSFbUyHeV8ufISq4is0oejVUSJMkxIOqaVI9JjIsek5Eib/b/b1/1+OhIubrdAw3PhvHeB7ZtKBYM4+vIMIrHYH2Cy0w1P3sIYx+iF6pa7wE4NuH8qqpFduFiCzof1bAWLklWcUs8Dm+n0BqC9htoXi73rLLPyQMEN+SrrmFvH/rlvGPlBwaVZ7qUIlpUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABtElEQVR4nO3dPW7VQBSG4XMgEihIIDZDgyiokJIFsQYWFFqaVClhIQikRJcCOUWyAQ93nIu/5+nHZ2S9jX9kVwEAAAAAAAAAAAAA8B/r2QOWZTmvqpez5+zUobvvZg7YIoCrqrqYPWenvnb35cwBz2Ye/NHzDWbs1fRzt0UAnDABhBNAOAGEO9tgxrequt1gzh7dPPUGAAAAAIA9GHohZFmWt1V1WVUvjrsdBv2pqqvu/rl24WgA11X1fmQt01x394e1i0YD+FVVr0fWMs3v7n6zdpHHweEEEE4A4QQQTgDhBBBOAOEEEE4A4QQQTgDhBBBOAOEEEE4A4QQQTgDhBBBOAOEEEE4A4QQQTgDhBBBOAOEEEE4A4QQQTgDhBBBOAOEEEE4A4QQQTgDhBBBOAOEEEE4A4QQQTgDhRgP4cdRdcAzfRxb9y8eiL8pv4U/FoR7+NL76Y9EAAAAAQIKhW8FrLMvyuarezZ6zUzfd/WXmgLOZB3/0sao+bTBnj15V1dQAPA4OJ4BwAggngHBbBPB3gxl7Nf3cbXEZeF7eHBp16O67p94EAAAAAAAAAAAAAAAn6x5zUjG4lkG0MAAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.ca56ae8d.js.map
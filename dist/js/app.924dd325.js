(function(e){function i(i){for(var n,r,A=i[0],a=i[1],l=i[2],u=0,d=[];u<A.length;u++)r=A[u],s[r]&&d.push(s[r][0]),s[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);c&&c(i);while(d.length)d.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,i=0;i<o.length;i++){for(var t=o[i],n=!0,A=1;A<t.length;A++){var a=t[A];0!==s[a]&&(n=!1)}n&&(o.splice(i--,1),e=r(r.s=t[0]))}return e}var n={},s={1:0},o=[];function r(i){if(n[i])return n[i].exports;var t=n[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=n,r.d=function(e,i,t){r.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,i){if(1&i&&(e=r(e)),8&i)return e;if(4&i&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var n in e)r.d(t,n,function(i){return e[i]}.bind(null,n));return t},r.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(i,"a",i),i},r.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},r.p="/vue2-medium-editor/";var A=window["webpackJsonp"]=window["webpackJsonp"]||[],a=A.push.bind(A);A.push=i,A=A.slice();for(var l=0;l<A.length;l++)i(A[l]);var c=a;o.push([5,0]),t()})({"0pKM":function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYJpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZG7SwNBEIc/EyU+IhG0sLAIviqVqBC0EUwQFYKEGMGoTXJ5CXkcdxEJtoJtQEG08VXoX6CtYC0IiiKIhZW1oo2Gcy4JRMTMMjvf/nZn2J0FSzClpPV6F6QzOS0w7XEuhpacthdsNNNIEz1hRVcn/X4fNe3znjoz3g6atWqf+9daojFdgbpG4QlF1XLCM8K+9Zxq8o5wh5IMR4XPhAc0uaDwnalHyvxqcqLM3yZrwYAXLG3CzsQvjvxiJamlheXl9KZTa0rlPuZL7LHMwrzEbvEudAJM48HJLFN4cTPMuMxuBhlhSFbUyHeV8ufISq4is0oejVUSJMkxIOqaVI9JjIsek5Eib/b/b1/1+OhIubrdAw3PhvHeB7ZtKBYM4+vIMIrHYH2Cy0w1P3sIYx+iF6pa7wE4NuH8qqpFduFiCzof1bAWLklWcUs8Dm+n0BqC9htoXi73rLLPyQMEN+SrrmFvH/rlvGPlBwaVZ7qUIlpUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABtElEQVR4nO3dPW7VQBSG4XMgEihIIDZDgyiokJIFsQYWFFqaVClhIQikRJcCOUWyAQ93nIu/5+nHZ2S9jX9kVwEAAAAAAAAAAAAA8B/r2QOWZTmvqpez5+zUobvvZg7YIoCrqrqYPWenvnb35cwBz2Ye/NHzDWbs1fRzt0UAnDABhBNAOAGEO9tgxrequt1gzh7dPPUGAAAAAIA9GHohZFmWt1V1WVUvjrsdBv2pqqvu/rl24WgA11X1fmQt01x394e1i0YD+FVVr0fWMs3v7n6zdpHHweEEEE4A4QQQTgDhBBBOAOEEEE4A4QQQTgDhBBBOAOEEEE4A4QQQTgDhBBBOAOEEEE4A4QQQTgDhBBBOAOEEEE4A4QQQTgDhBBBOAOEEEE4A4QQQTgDhBBBOAOEEEE4A4QQQTgDhRgP4cdRdcAzfRxb9y8eiL8pv4U/FoR7+NL76Y9EAAAAAQIKhW8FrLMvyuarezZ6zUzfd/WXmgLOZB3/0sao+bTBnj15V1dQAPA4OJ4BwAggngHBbBPB3gxl7Nf3cbXEZeF7eHBp16O67p94EAAAAAAAAAAAAAAAn6x5zUjG4lkG0MAAAAABJRU5ErkJggg=="},5:function(e,i,t){e.exports=t("Vtdi")},QMqB:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYJpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZG7SwNBEIc/EyU+IhG0sLAIviqVqBC0EUwQFYKEGMGoTXJ5CXkcdxEJtoJtQEG08VXoX6CtYC0IiiKIhZW1oo2Gcy4JRMTMMjvf/nZn2J0FSzClpPV6F6QzOS0w7XEuhpacthdsNNNIEz1hRVcn/X4fNe3znjoz3g6atWqf+9daojFdgbpG4QlF1XLCM8K+9Zxq8o5wh5IMR4XPhAc0uaDwnalHyvxqcqLM3yZrwYAXLG3CzsQvjvxiJamlheXl9KZTa0rlPuZL7LHMwrzEbvEudAJM48HJLFN4cTPMuMxuBhlhSFbUyHeV8ufISq4is0oejVUSJMkxIOqaVI9JjIsek5Eib/b/b1/1+OhIubrdAw3PhvHeB7ZtKBYM4+vIMIrHYH2Cy0w1P3sIYx+iF6pa7wE4NuH8qqpFduFiCzof1bAWLklWcUs8Dm+n0BqC9htoXi73rLLPyQMEN+SrrmFvH/rlvGPlBwaVZ7qUIlpUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABcUlEQVR4nO3ZsW0bQQBE0aHNgLD7cS4wEGDHrkCK2IBrUAOM1IFyZYRz9mNDiQElbGH35J33CthZHH5y2AQAAAAAAAAAAAAAgP/YbvjC5fQlyWH4zprecjz/HTmwH3n4zUuS7xN2VvSa5MfIgU8jD7/5PGFjVcO/3YwA+MAEUE4A5QRQbsZfwO8kfybsrOi69QUAAAAAgBXscjk9bH0JtrNP8rz1JdiO18ByAigngHICKCeAcgIoJ4ByAigngHICKCeAcgIoJ4ByAigngHICKCeAcgIoJ4ByAigngHICKCeAcgIoJ4ByAigngHICKCeAcgIoJ4ByAigngHICKCeAcgIoJ4ByAigngHICKCeAcgIoJ4By+ySPW18CAAAAAICRdsMXLqdfSb4N31nTNcfz08iB/cjDb+6S3E/YWdHXJEMD8BpYTgDlBFBOAOVmBPBvwsaqhn+7GX8BP5McJuys6G3rCwAAAAAAAAAAAAAA8KG9A156E/UO6fQWAAAAAElFTkSuQmCC"},Vtdi:function(e,i,t){"use strict";t.r(i);t("VRzm");var n=t("Kw5r"),s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{attrs:{id:"app"}},[t("medium-editor",{attrs:{readOnly:!0,prefill:e.defaultValue,options:e.options,onChange:e.onChange},on:{uploaded:e.uploadCallback},model:{value:e.content,callback:function(i){e.content=i},expression:"content"}})],1)},o=[],r=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[e.readOnly?e._e():t("div",{staticClass:"medium-editor-container"},[e.editor?t("insert-embed",{attrs:{uploadFunction:e.options.uploadFunction,onChange:e.triggerChange,editorRef:e.$refs.editor,editor:e.editor},on:{uploaded:e.uploadedCallback}}):e._e(),e.editor?t("list-handler",{attrs:{editor:e.editor,onChange:e.triggerChange}}):e._e(),t("div",{ref:"editor",staticClass:"editor",class:e.editorClass,domProps:{innerHTML:e._s(e.prefill)}})],1),e.readOnly?t("read-mode",{attrs:{content:e.prefill}}):e._e()],1)},A=[],a=t("Zz8k"),l=t.n(a),c=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"image-handler-container"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.insert.isShow,expression:"insert.isShow"}],staticClass:"insert-image-container",style:e.insert.position},[t("div",{staticClass:"insert-image-toggle"},[t("button",{staticClass:"btn-toggle",on:{click:e.toggle}},[t("font-awesome-icon",{attrs:{icon:"plus"}})],1)]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.insert.isToggle,expression:"insert.isToggle"}],staticClass:"insert-image-menu"},[t("insert-image",{attrs:{editor:e.editor,insert:e.insert,editorRef:e.editorRef,uploadFunction:e.uploadFunction,handler:e.handler},on:{uploaded:e.uploadCallback,imageClick:e.imageClickHandler}})],1)]),t("image-position",{attrs:{handler:e.handler},on:{onPositionChange:e.onChange}})],1)},u=[],d=t("yT7P"),h=(t("pIFo"),function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("file-upload",{ref:"upload",staticClass:"btn-toggle",attrs:{extensions:"gif,jpg,jpeg,png,webp",accept:"image/png,image/gif,image/jpeg,image/webp","custom-action":e.uploadFunction,multiple:!0,size:10485760},on:{"input-filter":e.inputFilter,"input-file":e.inputFile},model:{value:e.insert.files,callback:function(i){e.$set(e.insert,"files",i)},expression:"insert.files"}},[t("font-awesome-icon",{attrs:{icon:["far","images"]}})],1)}),p=[],g=(t("f3/d"),t("gBkH")),m=t.n(g),f=t("7O5W"),b=t("elWB"),E=t("twK/"),B=t("F/us"),I=t.n(B);f["library"].add(E["a"]);var w={props:["editor","insert","uploadFunction","editorRef","handler"],components:{FontAwesomeIcon:b["FontAwesomeIcon"],"file-upload":m.a},data:function(){return{currentLine:null,currentImg:null,currentSize:"is-normal",position:{top:"0"},isShow:!1}},methods:{initializeExisting:function(){var e=this,i=this;setTimeout(function(){var t=e.editor.getFocusedElement();if(!t)return!1;var n=t.getElementsByClassName("editor-image");I.a.map(n,function(e){e.onclick=function(){var e=this;setTimeout(function(){i.sizingHandler(e)})}})})},addImage:function(e){if(this.$emit("uploaded",e),this.insert.isToggle){var i=this;this.editorRef.focus(),this.editor.selectElement(this.insert.focusLine),this.editor.pasteHTML('<div class="editor-image">\n                        <img src="'.concat(e,'" />\n                    </div>\n                    <div class="editor-image-description"><br></div>\n                    <br />'),{cleanAttrs:[],cleanTags:[],unwrapTags:[]}),this.currentLine=this.editor.getSelectedParentElement().previousElementSibling.previousElementSibling,this.currentImg=this.currentLine.querySelector("img");var t=this.currentImg.getBoundingClientRect();this.window.scrollTo(0,t.top-t.x),this.currentLine.onclick=function(){var e=this;setTimeout(function(){i.sizingHandler(e)})},this.insert.isShow=!1}},sizingHandler:function(e){var i=e.className;e.className=i.replace("is-focus","")+" is-focus",i.indexOf("expand")>-1?this.currentSize="is-expand":i.indexOf("full")>-1?this.currentSize="is-full":this.currentSize="is-normal";var t=e.querySelector("img");this.currentLine=e,this.isShow=!0;var n=t.getBoundingClientRect();this.position.top=n.top+"px",this.$emit("imageClick",{position:this.position,currentLine:this.currentLine,isShow:this.isShow,currentSize:this.currentSize})},inputFilter:function(e,i,t){if(e&&!i){if(/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(e.name))return t();if(/\.(php5?|html?|jsx?)$/i.test(e.name))return t()}},inputFile:function(e,i){e&&!i&&(this.$refs.upload.active=!0),e&&e.success&&this.addImage(e.response.url)}},mounted:function(){this.initializeExisting()},beforeMount:function(){this.window=window,window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},C=w,v=t("KHd+"),L=Object(v["a"])(C,h,p,!1,null,null,null),y=L.exports,S=function(){var e=this,i=e.$createElement,n=e._self._c||i;return e.handler.isShow?n("div",{staticClass:"image-handler",style:e.handler.position},[n("div",{staticClass:"image-hander-menu"},[n("button",{staticClass:"btn-toggle",on:{click:function(i){e.imageSizing("is-normal")}}},["is-normal"==e.handler.currentSize?n("img",{attrs:{src:t("iwZU")}}):e._e(),"is-normal"!=e.handler.currentSize?n("img",{attrs:{src:t("nJy0")}}):e._e()]),n("button",{staticClass:"btn-toggle",on:{click:function(i){e.imageSizing("is-expand")}}},["is-expand"==e.handler.currentSize?n("img",{attrs:{src:t("dlPf")}}):e._e(),"is-expand"!=e.handler.currentSize?n("img",{attrs:{src:t("0pKM")}}):e._e()]),n("button",{staticClass:"btn-toggle",on:{click:function(i){e.imageSizing("is-full")}}},["is-full"==e.handler.currentSize?n("img",{attrs:{src:t("QMqB")}}):e._e(),"is-full"!=e.handler.currentSize?n("img",{attrs:{src:t("rpHo")}}):e._e()])])]):e._e()},Q=[],Z={props:["handler"],methods:{imageSizing:function(e){this.handler.currentSize=e,this.handler.currentLine.className="editor-image "+e,this.$emit("onPositionChange")}}},P=Z,H=Object(v["a"])(P,S,Q,!1,null,null,null),J=H.exports,M=t("wHSu");f["library"].add(M["a"]);var N={components:{FontAwesomeIcon:b["FontAwesomeIcon"],InsertImage:y,ImagePosition:J},data:function(){return{insert:{position:{top:"0",left:"0"},isShow:!1,isToggle:!1,embedElm:null,files:[],focusLine:null},handler:{currentLine:null,currentImg:null,currentSize:"is-normal",position:{top:"0"},isShow:!1}}},props:["editor","uploadFunction","editorRef","onChange"],methods:{subscribe:function(){this.editor.subscribe("editableKeyup",this.detectShowToggle),this.editor.subscribe("editableClick",this.detectShowToggle),this.editor.subscribe("editableKeyup",this.detectImageDescription),this.editor.subscribe("editableClick",this.detectImageDescription)},unsubscribe:function(){this.editor.unsubscribe("editableKeyup",this.detectShowToggle),this.editor.unsubscribe("editableClick",this.detectShowToggle),this.editor.unsubscribe("editableKeyup",this.detectImageDescription),this.editor.unsubscribe("editableClick",this.detectImageDescription)},detectImageDescription:function(){var e=this.editor.getFocusedElement();if(e){var i=e.getElementsByClassName("editor-image-description");I.a.map(i,function(e){var i=e.innerHTML.trim();e.className=i&&"<br>"!=i?"editor-image-description":"editor-image-description is-empty"})}},detectShowToggle:function(e){if(this.insert.isShow&&this.insert.isToggle&&this.toggle(),13==e.keyCode){var i=this.editor.getSelectedParentElement(),t=i.nextElementSibling,n=i.previousElementSibling;t&&n&&t.className.indexOf("editor-image-description")>-1&&n.className.indexOf("editor-image")>-1&&t.parentNode.insertBefore(t,i)}if(this.handler.isShow=!1,e.target.className.indexOf("editor-image-description")<=-1){var s=this.editor.getFocusedElement().getElementsByClassName("editor-image");I.a.map(s,function(e){e.className=e.className.replace("is-focus","")})}var o=this.editor.getSelectedParentElement(),r=o.outerHTML,A=r.indexOf("<li>")>-1,a=o.innerHTML.replace(/^(<br\s*\/?>)+/,"").trim();if(a||A)this.insert.isShow=!1,this.insert.isToggle=!1,this.insert.focusLine=null;else{var l=o.getBoundingClientRect();this.insert.position.top=l.top+"px",this.insert.position.left=l.left+"px",this.insert.isShow=!0,this.insert.focusLine=o}},toggle:function(){this.insert.isToggle=!this.insert.isToggle},imageClickHandler:function(e){this.handler=e},uploadCallback:function(e){this.$emit("uploaded",e)},handleScroll:function(){if(this.handler.isShow=!1,this.insert.isShow){var e=this.editor.getSelectedParentElement(),i=e.getBoundingClientRect();this.insert=Object(d["a"])({},this.insert,{isShow:!0,focusLine:e,position:{top:i.top+"px",left:i.left+"px"}})}}},mounted:function(){this.subscribe()},destroyed:function(){this.unsubscribe()},beforeMount:function(){this.window=window,window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},X=N,z=Object(v["a"])(X,c,u,!1,null,null,null),k=z.exports,O=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"list-handler"})},j=[],G=(t("SRfc"),{components:{},data:function(){return{focusLine:null,currentLine:null,isLastBeforeLi:!1}},props:["editor"],methods:{subscribe:function(){this.editor.subscribe("editableKeydown",this.detectList),this.editor.subscribe("editableKeyup",this.detectList)},unsubscribe:function(){this.editor.unsubscribe("editableKeydown",this.detectList),this.editor.subscribe("editableKeyup",this.detectList)},detectList:function(e){this.currentLine=this.editor.getSelectedParentElement();var i=this.currentLine.innerHTML.match(/^(-&nbsp;).*/g);if(i&&i.length>0){var t=this.currentLine.innerHTML.replace(/^(-&nbsp;)/g,"");this.currentLine.innerHTML="<ul><li>"+t+"</li></ul>"}var n=this.currentLine.innerHTML.match(/^(\d+.&nbsp;)/g);if(n&&n.length>0){var s=this.currentLine.innerHTML.replace(/^(\d+.&nbsp;)/g,"");this.currentLine.innerHTML="<ol><li>"+s+"</li></ol>"}var o=e.keyCode||e.charCode;8!=o&&46!=o||("<li><br></li>"==this.currentLine.outerHTML?this.isLastBeforeLi=!0:this.isLastBeforeLi=!1,this.isLastBeforeLi&&(this.currentLine.outerHTML="",this.editor.pasteHTML("<p><br><br></p>",{cleanAttrs:[],cleanTags:[],unwrapTags:[]})))}},mounted:function(){this.subscribe()},destroyed:function(){this.unsubscribe()}}),T=G,R=Object(v["a"])(T,O,j,!1,null,null,null),x=R.exports,Y=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"medium-editor-container"},[t("div",{ref:"content",staticClass:"editor read-only has-content",domProps:{innerHTML:e._s(e.content)}})])},U=[],D=t("80Gr"),q=t.n(D),W={props:["content"],methods:{render:function(){this.renderEmbed()},renderEmbed:function(){var e=this,i=this.$refs.content.getElementsByClassName("editor-embed");I.a.map(i,function(i){var t=i.getElementsByTagName("a")[0],n=i.nextElementSibling;if(n.className.indexOf("gist-embed-iframe")>-1&&(n.outerHTML=""),t){var s=t.getAttribute("href");e.renderEmbedElm(s,i)}})},renderEmbedElm:function(e,i){q.a.embed(e,i)}},mounted:function(){this.render()}},F=W,V=Object(v["a"])(F,Y,U,!1,null,null,null),K=V.exports,_={name:"medium-editor",data:function(){return{editor:null,defaultOptions:{forcePlainText:!1,placeholder:{text:"Write something great!!"},toolbar:{buttons:["bold","italic","quote","h1","h2","h3","h4","h5"]}},hasContent:!1}},props:["options","onChange","prefill","readOnly"],computed:{editorOptions:function(){return I.a.extend(this.defaultOptions,this.options)},editorClass:function(){return{"has-content":this.hasContent}}},components:{InsertEmbed:k,ListHandler:x,ReadMode:K},mounted:function(){this.readOnly||this.createElm()},methods:{createElm:function(){this.editor=new l.a(this.$refs.editor,this.editorOptions),this.prefill&&(/<[a-z][\s\S]*>/i.test(this.prefill)?this.hasContent=!0:this.hasContent=!1,this.$refs.editor.focus()),this.editor.subscribe("editableInput",this.triggerChange)},destroyElm:function(){this.editor.destroy()},triggerChange:function(){var e=this,i=this.editor.getContent();setTimeout(function(){/<[a-z][\s\S]*>/i.test(i)?e.hasContent=!0:e.hasContent=!1},0),this.$emit("input",i),this.onChange&&this.onChange(i)},uploadedCallback:function(e){this.$emit("uploaded",e)}},destroyed:function(){this.destroyElm()}},$=_,ee=Object(v["a"])($,r,A,!1,null,null,null),ie=ee.exports,te={name:"app",data:function(){return{content:"",defaultValue:'<h1>Vue2 <b>Medium Editor</b></h1>\n          <div class="editor-image is-full"><img src="https://source.unsplash.com/yxNURc8he3o/2000x600"></div>\n          <div class="editor-image-description">righteous indignation and dislike</div>\n          <p>But I must explain to you how all this mistaken idea of denouncing <b>pleasure and praising pain was born and I will give you</b> a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes</p><p class="editor-embed">\n            <a href="https://gist.github.com/Culttm/a8c3ca85032c4b0cc67037425f150c44">https://gist.github.com/Culttm/a8c3ca85032c4b0cc67037425f150c44</a>\n            <div class="gist-embed-iframe"><iframe id="A8Tm2Y76Cuy9dtVRdxnaIRKgI2weZB8R" height="573px"></iframe></div>\n            </p><p class="editor-embed"><br></p><p></p><ul><li>But I must explain to you how all this mistaken idea of denouncing</li><li>of pleasure of the moment, so blinded by desire</li></ul><p></p>\n          <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will</p><p class="editor-embed">\n            <a href="https://gist.github.com/Culttm/a8c3ca85032c4b0cc67037425f150c44">https://gist.github.com/Culttm/a8c3ca85032c4b0cc67037425f150c44</a>\n            <div class="gist-embed-iframe"><iframe id="QnJ6PY8hYZAdPw4ynC0ryAYsl9oVnZYr" height="573px"></iframe></div>\n            </p>\n            <p></p>\n            <p></p><p class="editor-embed"><br></p>\n          <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariaturasdasdasdasd<br></p>\n          <h2>Section 1.10.33</h2>\n          <div class="editor-image is-normal"><img src="https://source.unsplash.com/DKnXlH_r3x4/2000x800"></div>\n          <div class="editor-image-description">you how all this mistaken idea of denouncing pleasure</div>\n          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus</p><p class="editor-embed">\n            <a href="https://gist.github.com/Culttm/a8c3ca85032c4b0cc67037425f150c44">https://gist.github.com/Culttm/a8c3ca85032c4b0cc67037425f150c44</a>\n            <div class="gist-embed-iframe"><iframe id="JbGNtl0kDTqJ1x1D4bNghxdFKNqpmuGJ" height="573px"></iframe></div>\n            </p>\n            <p></p>\n            <p></p><p class="editor-embed"><br></p><p></p><ol><li>cum soluta nobis est eligendi optio cumque</li><li>righteous indignation and dislike</li></ol><p></p><h3>odio dignissimos ducimus</h3>\n          <p></p>\n          <div class="editor-image is-expand"><img src="https://source.unsplash.com/-g7axSVst6Y/1600x600">\n          </div>\n          <div class="editor-image-description">I will give you a complete account of the system</div>\n          <p></p>\n          <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of wills</p>',options:{uploadFunction:"http://localhost:3000/api/v1/upload/image"}}},components:{"medium-editor":ie},methods:{onChange:function(){console.log(this.content)},uploadCallback:function(e){console.log("uploaded url",e)}}},ne=te,se=(t("ZL7j"),Object(v["a"])(ne,s,o,!1,null,null,null)),oe=se.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(oe)}}).$mount("#app")},ZL7j:function(e,i,t){"use strict";var n=t("slcd"),s=t.n(n);s.a},dlPf:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYJpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZG7SwNBEIc/EyU+IhG0sLAIviqVqBC0EUwQFYKEGMGoTXJ5CXkcdxEJtoJtQEG08VXoX6CtYC0IiiKIhZW1oo2Gcy4JRMTMMjvf/nZn2J0FSzClpPV6F6QzOS0w7XEuhpacthdsNNNIEz1hRVcn/X4fNe3znjoz3g6atWqf+9daojFdgbpG4QlF1XLCM8K+9Zxq8o5wh5IMR4XPhAc0uaDwnalHyvxqcqLM3yZrwYAXLG3CzsQvjvxiJamlheXl9KZTa0rlPuZL7LHMwrzEbvEudAJM48HJLFN4cTPMuMxuBhlhSFbUyHeV8ufISq4is0oejVUSJMkxIOqaVI9JjIsek5Eib/b/b1/1+OhIubrdAw3PhvHeB7ZtKBYM4+vIMIrHYH2Cy0w1P3sIYx+iF6pa7wE4NuH8qqpFduFiCzof1bAWLklWcUs8Dm+n0BqC9htoXi73rLLPyQMEN+SrrmFvH/rlvGPlBwaVZ7qUIlpUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABtElEQVR4nO3dLa5TQRzG4ZePBAKKhYDEEASpIIEg2UQ3wBrYQDeBJOAaDOpKWAgKUgQJoldiOumcW877PH76n5z8zMmcdBIAAAAAAAAAAAAAAP5jt6ZP2G8fJLk/fc46HbLZ/Zo54O7MH7/2IcmrBeas0eckr2cOuD3zx6/dWWDGWk1/dksEwAUTQDkBlBNAuSXeAr4k+bnAnDW6uukNAAAAAABrMPZF0H77KMcPFe6ddTeM+p3kUza7H6cuHD0L+Jjk2eBa5via5Pmpi0ZPAx8PrmOeJyOLHAeXE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBsN4PtZd8E5fBtZNPpfwW9yvBHctfCX4ZDjTeMAAAAAAP8wdm/gKfbbd0meTp+zTlfZ7N7PHDB6FnCKF0leLjBnjR4mmRqA4+ByAigngHICKLdEAH8WmLFW05/dEm8Bb+PLoVGHm94AAAAAAAAAAAAAAAAX7S+LiRynJRkZxgAAAABJRU5ErkJggg=="},iwZU:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYJpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZG7SwNBEIc/EyU+IhG0sLAIviqVqBC0EUwQFYKEGMGoTXJ5CXkcdxEJtoJtQEG08VXoX6CtYC0IiiKIhZW1oo2Gcy4JRMTMMjvf/nZn2J0FSzClpPV6F6QzOS0w7XEuhpacthdsNNNIEz1hRVcn/X4fNe3znjoz3g6atWqf+9daojFdgbpG4QlF1XLCM8K+9Zxq8o5wh5IMR4XPhAc0uaDwnalHyvxqcqLM3yZrwYAXLG3CzsQvjvxiJamlheXl9KZTa0rlPuZL7LHMwrzEbvEudAJM48HJLFN4cTPMuMxuBhlhSFbUyHeV8ufISq4is0oejVUSJMkxIOqaVI9JjIsek5Eib/b/b1/1+OhIubrdAw3PhvHeB7ZtKBYM4+vIMIrHYH2Cy0w1P3sIYx+iF6pa7wE4NuH8qqpFduFiCzof1bAWLklWcUs8Dm+n0BqC9htoXi73rLLPyQMEN+SrrmFvH/rlvGPlBwaVZ7qUIlpUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpklEQVR4nO3dPYoUURiF4eMPMmjoOjQ0lw4Ejd2EsWhgbCDmvQnzyWQikwl1HYbKIAgGMxsQud+M9zzPAuoUxZs0t6hOAAAAAAAAAAAAAAD4j91avvD51f0kJ8t39nSRw/HnyoG7Ky9+5VOS5wM7OzpN8mLlwO2VF79yZ2BjV8uf3UQA3GACKCeAcgIoN/Er4CzJj4GdHZ1f9w0AAAAAADuYeCPoXi5fCHm4fGsv35Oc5nD8tXJk4izgfZLXAzs7+pjkzcqBidPARwMbu3q8esBxcDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0C5iQC+DWzs6uvqgYlvBb9L8iU+Fv23Lj8WDQAAAADwzyb+N/BtkifLd/Z0nsPxw8qBibOAp0meDezs6EGSpQE4Di4ngHICKCeAchMB/B7Y2NXyZzfxK+BlkpOBnR1dXPcNAAAAAAAAAAAAAABwo/0Bz2IdW3KlJRsAAAAASUVORK5CYII="},nJy0:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYJpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZG7SwNBEIc/EyU+IhG0sLAIviqVqBC0EUwQFYKEGMGoTXJ5CXkcdxEJtoJtQEG08VXoX6CtYC0IiiKIhZW1oo2Gcy4JRMTMMjvf/nZn2J0FSzClpPV6F6QzOS0w7XEuhpacthdsNNNIEz1hRVcn/X4fNe3znjoz3g6atWqf+9daojFdgbpG4QlF1XLCM8K+9Zxq8o5wh5IMR4XPhAc0uaDwnalHyvxqcqLM3yZrwYAXLG3CzsQvjvxiJamlheXl9KZTa0rlPuZL7LHMwrzEbvEudAJM48HJLFN4cTPMuMxuBhlhSFbUyHeV8ufISq4is0oejVUSJMkxIOqaVI9JjIsek5Eib/b/b1/1+OhIubrdAw3PhvHeB7ZtKBYM4+vIMIrHYH2Cy0w1P3sIYx+iF6pa7wE4NuH8qqpFduFiCzof1bAWLklWcUs8Dm+n0BqC9htoXi73rLLPyQMEN+SrrmFvH/rlvGPlBwaVZ7qUIlpUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABl0lEQVR4nO3cMU5VURSF4X2UEIKl45CSnspEp2N0DIbxaEtPieOwhBAS8yxgCnvzOOv7BnDXzc3fvHdPbhUAAAAAAAAAAAAAAG/Y6h44HA7nVXXWvbOpx7XWQ+fARAC/qupL986mfq+1vnYOvOu8+Iv3Axu7an92EwFwxAQQTgDhBBDuZGDjpqruB3Z2dPvaNwAAAAAA7GDiQMhpPR8I+di9tZm/9Xwg5KlzZCKA66r61r2zqeu11vfOgYm3gZ8GNnZ10T3gdXA4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAuIkA/gxs7Oque8DHoo/XyMeiAQAAAIAEE38F/6iqy+6dTd2utX52Dpx0XvzFVVV9HtjZ0Yeqag3A6+BwAggngHACCDcRwL+BjV21P7uJn4HnVXXWvbOpx7XWw2vfBAAAAAAAAAAAAAAAR+s/WyMtFJhHwuAAAAAASUVORK5CYII="},rpHo:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYJpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZG7SwNBEIc/EyU+IhG0sLAIviqVqBC0EUwQFYKEGMGoTXJ5CXkcdxEJtoJtQEG08VXoX6CtYC0IiiKIhZW1oo2Gcy4JRMTMMjvf/nZn2J0FSzClpPV6F6QzOS0w7XEuhpacthdsNNNIEz1hRVcn/X4fNe3znjoz3g6atWqf+9daojFdgbpG4QlF1XLCM8K+9Zxq8o5wh5IMR4XPhAc0uaDwnalHyvxqcqLM3yZrwYAXLG3CzsQvjvxiJamlheXl9KZTa0rlPuZL7LHMwrzEbvEudAJM48HJLFN4cTPMuMxuBhlhSFbUyHeV8ufISq4is0oejVUSJMkxIOqaVI9JjIsek5Eib/b/b1/1+OhIubrdAw3PhvHeB7ZtKBYM4+vIMIrHYH2Cy0w1P3sIYx+iF6pa7wE4NuH8qqpFduFiCzof1bAWLklWcUs8Dm+n0BqC9htoXi73rLLPyQMEN+SrrmFvH/rlvGPlBwaVZ7qUIlpUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZ0lEQVR4nO3ZsU3FQBBF0Rn4AYJ+yImQoAzogRooCFJy+gGRoCWhhV3DvnMK8BtZN7FcBQAAAAAAAAAAAADAP9azB8YYl1V1MXtnU1/d/TlzYEUAL1V1N3tnU6/dfT9z4Gzmw3+dL9jY1fR3tyIA/jABhBNAOAGEOy3YeKuqjwU7O3o/+gAAAAAAYAc9xng4+giO02OMcfQRHMffwHACCCeAcAIIJ4BwAggngHACCCeAcAIIJ4BwAggngHACCCeAcAIIJ4BwAggngHACCCeAcAIIJ4BwAggngHACCCeAcAIIJ4BwAggngHACCCeAcAIIJ4BwAggngHACCCeAcAIIJ4BwAggngHCnqno8+ggAAAAAAGbq2QNjjKequp69s6n37n6eOXCa+fBfN1V1u2BnR1dVNTUAfwPDCSCcAMIJINyKAL4XbOxq+rtb8Rl4WVUXs3c29dXdn0cfAQAAAAAAAAAAAADAn/UDSmUh115NxS0AAAAASUVORK5CYII="},slcd:function(e,i,t){}});
//# sourceMappingURL=app.924dd325.js.map
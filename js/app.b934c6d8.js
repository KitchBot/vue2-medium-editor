(function(e){function i(i){for(var n,A,r=i[0],a=i[1],l=i[2],u=0,d=[];u<r.length;u++)A=r[u],s[A]&&d.push(s[A][0]),s[A]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);c&&c(i);while(d.length)d.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,i=0;i<o.length;i++){for(var t=o[i],n=!0,r=1;r<t.length;r++){var a=t[r];0!==s[a]&&(n=!1)}n&&(o.splice(i--,1),e=A(A.s=t[0]))}return e}var n={},s={1:0},o=[];function A(i){if(n[i])return n[i].exports;var t=n[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,A),t.l=!0,t.exports}A.m=e,A.c=n,A.d=function(e,i,t){A.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},A.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,i){if(1&i&&(e=A(e)),8&i)return e;if(4&i&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(A.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var n in e)A.d(t,n,function(i){return e[i]}.bind(null,n));return t},A.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return A.d(i,"a",i),i},A.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},A.p="/vue2-medium-editor/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=i,r=r.slice();for(var l=0;l<r.length;l++)i(r[l]);var c=a;o.push([8,0]),t()})({"0pKM":function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYJpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZG7SwNBEIc/EyU+IhG0sLAIviqVqBC0EUwQFYKEGMGoTXJ5CXkcdxEJtoJtQEG08VXoX6CtYC0IiiKIhZW1oo2Gcy4JRMTMMjvf/nZn2J0FSzClpPV6F6QzOS0w7XEuhpacthdsNNNIEz1hRVcn/X4fNe3znjoz3g6atWqf+9daojFdgbpG4QlF1XLCM8K+9Zxq8o5wh5IMR4XPhAc0uaDwnalHyvxqcqLM3yZrwYAXLG3CzsQvjvxiJamlheXl9KZTa0rlPuZL7LHMwrzEbvEudAJM48HJLFN4cTPMuMxuBhlhSFbUyHeV8ufISq4is0oejVUSJMkxIOqaVI9JjIsek5Eib/b/b1/1+OhIubrdAw3PhvHeB7ZtKBYM4+vIMIrHYH2Cy0w1P3sIYx+iF6pa7wE4NuH8qqpFduFiCzof1bAWLklWcUs8Dm+n0BqC9htoXi73rLLPyQMEN+SrrmFvH/rlvGPlBwaVZ7qUIlpUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABtElEQVR4nO3dPW7VQBSG4XMgEihIIDZDgyiokJIFsQYWFFqaVClhIQikRJcCOUWyAQ93nIu/5+nHZ2S9jX9kVwEAAAAAAAAAAAAA8B/r2QOWZTmvqpez5+zUobvvZg7YIoCrqrqYPWenvnb35cwBz2Ye/NHzDWbs1fRzt0UAnDABhBNAOAGEO9tgxrequt1gzh7dPPUGAAAAAIA9GHohZFmWt1V1WVUvjrsdBv2pqqvu/rl24WgA11X1fmQt01x394e1i0YD+FVVr0fWMs3v7n6zdpHHweEEEE4A4QQQTgDhBBBOAOEEEE4A4QQQTgDhBBBOAOEEEE4A4QQQTgDhBBBOAOEEEE4A4QQQTgDhBBBOAOEEEE4A4QQQTgDhBBBOAOEEEE4A4QQQTgDhBBBOAOEEEE4A4QQQTgDhRgP4cdRdcAzfRxb9y8eiL8pv4U/FoR7+NL76Y9EAAAAAQIKhW8FrLMvyuarezZ6zUzfd/WXmgLOZB3/0sao+bTBnj15V1dQAPA4OJ4BwAggngHBbBPB3gxl7Nf3cbXEZeF7eHBp16O67p94EAAAAAAAAAAAAAAAn6x5zUjG4lkG0MAAAAABJRU5ErkJggg=="},"10Re":function(e,i,t){"use strict";var n=t("hA2R"),s=t.n(n);s.a},8:function(e,i,t){e.exports=t("Vtdi")},QMqB:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYJpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZG7SwNBEIc/EyU+IhG0sLAIviqVqBC0EUwQFYKEGMGoTXJ5CXkcdxEJtoJtQEG08VXoX6CtYC0IiiKIhZW1oo2Gcy4JRMTMMjvf/nZn2J0FSzClpPV6F6QzOS0w7XEuhpacthdsNNNIEz1hRVcn/X4fNe3znjoz3g6atWqf+9daojFdgbpG4QlF1XLCM8K+9Zxq8o5wh5IMR4XPhAc0uaDwnalHyvxqcqLM3yZrwYAXLG3CzsQvjvxiJamlheXl9KZTa0rlPuZL7LHMwrzEbvEudAJM48HJLFN4cTPMuMxuBhlhSFbUyHeV8ufISq4is0oejVUSJMkxIOqaVI9JjIsek5Eib/b/b1/1+OhIubrdAw3PhvHeB7ZtKBYM4+vIMIrHYH2Cy0w1P3sIYx+iF6pa7wE4NuH8qqpFduFiCzof1bAWLklWcUs8Dm+n0BqC9htoXi73rLLPyQMEN+SrrmFvH/rlvGPlBwaVZ7qUIlpUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABcUlEQVR4nO3ZsW0bQQBE0aHNgLD7cS4wEGDHrkCK2IBrUAOM1IFyZYRz9mNDiQElbGH35J33CthZHH5y2AQAAAAAAAAAAAAAgP/YbvjC5fQlyWH4zprecjz/HTmwH3n4zUuS7xN2VvSa5MfIgU8jD7/5PGFjVcO/3YwA+MAEUE4A5QRQbsZfwO8kfybsrOi69QUAAAAAgBXscjk9bH0JtrNP8rz1JdiO18ByAigngHICKCeAcgIoJ4ByAigngHICKCeAcgIoJ4ByAigngHICKCeAcgIoJ4ByAigngHICKCeAcgIoJ4ByAigngHICKCeAcgIoJ4ByAigngHICKCeAcgIoJ4ByAigngHICKCeAcgIoJ4By+ySPW18CAAAAAICRdsMXLqdfSb4N31nTNcfz08iB/cjDb+6S3E/YWdHXJEMD8BpYTgDlBFBOAOVmBPBvwsaqhn+7GX8BP5McJuys6G3rCwAAAAAAAAAAAAAA8KG9A156E/UO6fQWAAAAAElFTkSuQmCC"},"V24+":function(e,i,t){"use strict";var n=t("g449"),s=t.n(n);s.a},Vtdi:function(e,i,t){"use strict";t.r(i);t("VRzm");var n=t("Kw5r"),s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{attrs:{id:"app"}},[t("medium-editor",{attrs:{readOnly:!1,prefill:e.defaultValue,options:e.options,onChange:e.onChange},model:{value:e.content,callback:function(i){e.content=i},expression:"content"}})],1)},o=[],A=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[e.readOnly?e._e():t("div",{staticClass:"medium-editor-container"},[e.editor?t("insert-image",{attrs:{uploadUrl:e.options.uploadUrl,editorRef:e.$refs.editor,editor:e.editor}}):e._e(),e.editor?t("list-handler",{attrs:{editor:e.editor}}):e._e(),t("div",{ref:"editor",staticClass:"editor",class:{"has-content":e.hasContent},domProps:{innerHTML:e._s(e.prefill)}})],1),e.readOnly?t("div",{staticClass:"medium-editor-container"},[t("div",{staticClass:"editor read-only has-content",domProps:{innerHTML:e._s(e.prefill)}})]):e._e()])},r=[],a=t("Zz8k"),l=t.n(a),c=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",{staticClass:"image-handler-container"},[e.insert.isShow?n("div",{staticClass:"insert-image-container",style:e.insert.position},[n("div",{staticClass:"insert-image-toggle"},[n("button",{staticClass:"btn-toggle",on:{click:e.toggle}},[n("font-awesome-icon",{attrs:{icon:"plus"}})],1)]),e.insert.isToggle?n("div",{staticClass:"insert-image-menu"},[n("file-upload",{ref:"upload",staticClass:"btn-toggle",attrs:{"post-action":e.uploadUrl,extensions:"gif,jpg,jpeg,png,webp",accept:"image/png,image/gif,image/jpeg,image/webp",multiple:!0,size:10485760},on:{"input-filter":e.inputFilter,"input-file":e.inputFile},model:{value:e.insert.files,callback:function(i){e.$set(e.insert,"files",i)},expression:"insert.files"}},[n("font-awesome-icon",{attrs:{icon:["far","images"]}})],1),n("button",{staticClass:"btn-toggle",on:{click:e.addEmbed}},[n("font-awesome-icon",{attrs:{icon:["fas","code"]}})],1)],1):e._e()]):e._e(),e.handler.isShow?n("div",{staticClass:"image-handler",style:e.handler.position},[n("div",{staticClass:"image-hander-menu"},[n("button",{staticClass:"btn-toggle",on:{click:function(i){e.imageSizing("is-normal")}}},["is-normal"==e.handler.currentSize?n("img",{attrs:{src:t("iwZU")}}):e._e(),"is-normal"!=e.handler.currentSize?n("img",{attrs:{src:t("nJy0")}}):e._e()]),n("button",{staticClass:"btn-toggle",on:{click:function(i){e.imageSizing("is-expand")}}},["is-expand"==e.handler.currentSize?n("img",{attrs:{src:t("dlPf")}}):e._e(),"is-expand"!=e.handler.currentSize?n("img",{attrs:{src:t("0pKM")}}):e._e()]),n("button",{staticClass:"btn-toggle",on:{click:function(i){e.imageSizing("is-full")}}},["is-full"==e.handler.currentSize?n("img",{attrs:{src:t("QMqB")}}):e._e(),"is-full"!=e.handler.currentSize?n("img",{attrs:{src:t("rpHo")}}):e._e()])])]):e._e()])},u=[],d=(t("f3/d"),t("pIFo"),t("gBkH")),h=t.n(d),g=t("7O5W"),p=t("elWB"),m=t("twK/"),b=t("wHSu"),f=t("XhWj"),E=t.n(f),B=t("aQyL"),I=t("zUkW");g["library"].add(b["a"]),g["library"].add(m["a"]);var w={components:{FontAwesomeIcon:p["FontAwesomeIcon"],"file-upload":h.a},data:function(){return{insert:{position:{top:"0",left:"0"},isShow:!1,isToggle:!1,embedElm:null,files:[],focusLine:null},handler:{currentLine:null,currentImg:null,currentSize:"is-normal",position:{top:"0"},isShow:!1}}},props:["editor","uploadUrl","editorRef"],methods:{subscribe:function(){this.editor.subscribe("editableKeyup",this.detectShowToggle),this.editor.subscribe("editableKeyup",this.detectEmbed),this.editor.subscribe("editableClick",this.detectShowToggle),this.editor.subscribe("editableKeyup",this.detectImageDescription),this.editor.subscribe("editableClick",this.detectImageDescription),this.subscribeImageInitial(),this.subscribeEmbedInitial()},unsubscribe:function(){this.editor.unsubscribe("editableKeyup",this.detectShowToggle),this.editor.unsubscribe("editableKeyup",this.detectEmbed),this.editor.unsubscribe("editableClick",this.detectShowToggle),this.editor.unsubscribe("editableKeyup",this.detectImageDescription),this.editor.unsubscribe("editableClick",this.detectImageDescription)},subscribeImageInitial:function(){var e=this,i=this;setTimeout(function(){for(var t=e.editor.getFocusedElement().getElementsByClassName("editor-image"),n=0;n<t.length;n++)t[n].onclick=function(){var e=this;setTimeout(function(){var t=e.className;e.className=t.replace("is-focus","")+" is-focus",t.indexOf("expand")>-1?i.handler.currentSize="is-expand":t.indexOf("full")>-1?i.handler.currentSize="is-full":i.handler.currentSize="is-normal";var n=e.querySelector("img");i.handler.currentLine=e,i.handler.isShow=!i.handler.isShow;var s=n.getBoundingClientRect();i.handler.position.top=s.top+"px"})}})},subscribeEmbedInitial:function(){var e=this;setTimeout(function(){for(var i=e.editor.getFocusedElement().getElementsByClassName("editor-embed"),t=0;t<i.length;t++){var n=i[0].nextElementSibling,s=n.getAttribute("data-src");n.outerHTML="",i[0].innerHTML=s,e.renderEmbed(i[0])}})},detectImageDescription:function(){for(var e=this.editor.getFocusedElement().getElementsByClassName("editor-image-description"),i=0;i<e.length;i++){var t=e[i],n=t.innerHTML.trim();t.className=n&&"<br>"!=n?"editor-image-description":"editor-image-description is-empty"}},detectShowToggle:function(e){if(this.insert.isShow&&this.insert.isToggle&&this.toggle(),this.handler.isShow=!1,e.target.className.indexOf("editor-image-description")<=-1)for(var i=this.editor.getFocusedElement().getElementsByClassName("editor-image"),t=0;t<i.length;t++)i[t].className=i[t].className.replace("is-focus","");var n=this.editor.getSelectedParentElement(),s=n.innerHTML.replace(/^(<br\s*\/?>)+/,"").trim();if(s)this.insert.isShow=!1,this.insert.isToggle=!1,this.insert.focusLine=null;else{var o=n.getBoundingClientRect();this.insert.position.top=o.top+"px",this.insert.position.left=o.left+"px",this.insert.isShow=!0,this.insert.focusLine=n}},toggle:function(){this.insert.isToggle=!this.insert.isToggle},addImage:function(e){if(this.insert.isToggle){var i=this;this.editorRef.focus(),this.editor.selectElement(this.insert.focusLine),this.editor.pasteHTML('<div class="editor-image">\n                        <img src="'.concat(e,'" />\n                    </div>\n                    <div class="editor-image-description"><br></div>\n                    <br />'),{cleanAttrs:[],cleanTags:[],unwrapTags:[]}),this.handler.currentLine=this.editor.getSelectedParentElement().previousElementSibling.previousElementSibling,this.handler.currentImg=this.editor.getSelectedParentElement().previousElementSibling.previousElementSibling.querySelector("img");var t=this.handler.currentImg.getBoundingClientRect();this.window.scrollTo(0,t.top-t.x),this.handler.currentLine.onclick=function(){var e=this.className;e.indexOf("expand")>-1?i.handler.currentSize="is-expand":e.indexOf("full")>-1?i.handler.currentSize="is-full":i.handler.currentSize="is-normal";var t=this.querySelector("img");i.handler.currentLine=this,i.handler.isShow=!i.handler.isShow;var n=t.getBoundingClientRect();i.handler.position.top=n.top+"px"},this.insert.isToggle=!1,this.insert.isShow=!1,this.insert.focusLine=null}},imageSizing:function(e){this.handler.currentSize=e,this.handler.currentLine.className="editor-image "+e},addEmbed:function(){this.insert.isToggle&&(this.editor.pasteHTML('<p class="editor-embed"><br></p>',{cleanAttrs:[],cleanTags:[],unwrapTags:[]}),this.insert.embedElm=this.editor.getSelectedParentElement(),this.insert.isToggle=!1,this.insert.isShow=!1)},detectEmbed:function(e){13===e.keyCode&&this.insert.embedElm&&(this.insert.embedElm.innerHTML=this.insert.embedElm.innerHTML.replace("<br>",""),this.renderEmbed(this.insert.embedElm),this.insert.embedElm=null)},renderEmbed:function(e){var i=new E.a({input:e,plugins:[Object(B["a"])(),Object(I["a"])()],inlineEmbed:"all"});i.render()},inputFilter:function(e,i,t){if(e&&!i){if(/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(e.name))return t();if(/\.(php5?|html?|jsx?)$/i.test(e.name))return t()}},inputFile:function(e,i){e&&!i&&(this.$refs.upload.active=!0),e&&e.success&&this.addImage(e.response.url)},handleScroll:function(){if(this.handler.isShow=!1,this.insert.isShow){var e=this.editor.getSelectedParentElement(),i=e.getBoundingClientRect();this.insert.position.top=i.top+"px",this.insert.position.left=i.left+"px",this.insert.isShow=!0,this.insert.focusLine=e}}},mounted:function(){this.subscribe()},destroyed:function(){this.unsubscribe()},beforeMount:function(){this.window=window,window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},L=w,v=(t("uoyr"),t("KHd+")),C=Object(v["a"])(L,c,u,!1,null,null,null),y=C.exports,S=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"list-handler"})},Q=[],Z=(t("SRfc"),{components:{},data:function(){return{focusLine:null,currentLine:null,isLastBeforeLi:!1}},props:["editor"],methods:{subscribe:function(){this.editor.subscribe("editableKeydown",this.detectList),this.editor.subscribe("editableKeyup",this.detectList)},unsubscribe:function(){this.editor.unsubscribe("editableKeydown",this.detectList),this.editor.subscribe("editableKeyup",this.detectList)},detectList:function(e){this.currentLine=this.editor.getSelectedParentElement();var i=this.currentLine.innerHTML.match(/^(-&nbsp;).*/g);if(i&&i.length>0){var t=this.currentLine.innerHTML.replace(/^(-&nbsp;)/g,"");this.currentLine.innerHTML="<ul><li>"+t+"</li></ul>"}var n=this.currentLine.innerHTML.match(/^(\d+.&nbsp;)/g);if(n&&n.length>0){var s=this.currentLine.innerHTML.replace(/^(\d+.&nbsp;)/g,"");this.currentLine.innerHTML="<ol><li>"+s+"</li></ol>"}var o=e.keyCode||e.charCode;8!=o&&46!=o||("<li><br></li>"==this.currentLine.outerHTML?this.isLastBeforeLi=!0:this.isLastBeforeLi=!1,this.isLastBeforeLi&&(this.currentLine.outerHTML="",this.editor.pasteHTML("<p><br><br></p>",{cleanAttrs:[],cleanTags:[],unwrapTags:[]})))}},mounted:function(){this.subscribe()},destroyed:function(){this.unsubscribe()}}),H=Z,M=(t("V24+"),Object(v["a"])(H,S,Q,!1,null,null,null)),P=M.exports,J=t("F/us"),X=t.n(J),z={name:"medium-editor",data:function(){return{editor:null,defaultOptions:{forcePlainText:!1,placeholder:{text:"Write something great!!"},toolbar:{buttons:["bold","italic","quote","h1","h2","h3","h4","h5"]}},hasContent:!1}},props:["options","onChange","prefill","readOnly"],computed:{editorOptions:function(){return X.a.extend(this.defaultOptions,this.options)}},components:{InsertImage:y,ListHandler:P},mounted:function(){this.readOnly||this.createElm()},methods:{createElm:function(){var e=this;this.editor=new l.a(this.$refs.editor,this.editorOptions),this.prefill&&(this.hasContent=!0,this.$refs.editor.focus()),this.editor.subscribe("editableInput",function(){var i=e.editor.getContent();setTimeout(function(){e.hasContent=!!i},1e3),e.$emit("input",i),e.onChange&&e.onChange(i)})},destroyElm:function(){this.editor.destroy()}},destroyed:function(){this.destroyElm()}},N=z,O=(t("10Re"),Object(v["a"])(N,A,r,!1,null,null,null)),k=O.exports,j={name:"app",data:function(){return{content:"",defaultValue:'<h1>Vue2 <b>Medium Editor</b></h1>\n          <div class="editor-image is-full"><img src="https://source.unsplash.com/yxNURc8he3o/2000x600"></div>\n          <div class="editor-image-description">righteous indignation and dislike</div>\n          <p>But I must explain to you how all this mistaken idea of denouncing <b>pleasure and praising pain was born and I will give you</b> a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes</p><p></p><ul><li>But I must explain to you how all this mistaken idea of denouncing</li><li>of pleasure of the moment, so blinded by desire</li></ul><p></p>\n          <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will</p><p class="editor-embed embed-js-applied embed-js-applied"><a href="https://gist.github.com/tui2tone/294af316b8ac09ea440c8743b97baa27" rel="" target="self">https://gist.github.com/tui2tone/294af316b8ac09ea440c8743b97baa27</a><div class="ejs-gist" data-src="https://gist.github.com/tui2tone/294af316b8ac09ea440c8743b97baa27"><iframe width="100%" id="ejs-gist-0" style="height: 285px;"></iframe></div></p><blockquote><span style="font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 1.2rem; font-weight: 400;">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire</span></blockquote><p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariaturasdasdasdasd<br></p>\n          <h2>Section 1.10.33</h2>\n          <div class="editor-image is-normal"><img src="https://source.unsplash.com/DKnXlH_r3x4/2000x800"></div>\n          <div class="editor-image-description">you how all this mistaken idea of denouncing pleasure</div>\n          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus</p><p></p><ol><li>cum soluta nobis est eligendi optio cumque</li><li>righteous indignation and dislike</li></ol><p></p><h3>odio dignissimos ducimus</h3>\n          <p></p>\n          <div class="editor-image is-expand"><img src="https://source.unsplash.com/-g7axSVst6Y/1600x600">\n          </div>\n          <div class="editor-image-description">I will give you a complete account of the system</div>\n          <p></p>\n          <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will</p>',options:{uploadUrl:"http://localhost:3000/v1/upload/image"}}},components:{"medium-editor":k},methods:{onChange:function(){console.log("change",this.content)}}},T=j,G=(t("ZL7j"),Object(v["a"])(T,s,o,!1,null,null,null)),R=G.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(R)}}).$mount("#app")},ZL7j:function(e,i,t){"use strict";var n=t("slcd"),s=t.n(n);s.a},dlPf:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYJpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZG7SwNBEIc/EyU+IhG0sLAIviqVqBC0EUwQFYKEGMGoTXJ5CXkcdxEJtoJtQEG08VXoX6CtYC0IiiKIhZW1oo2Gcy4JRMTMMjvf/nZn2J0FSzClpPV6F6QzOS0w7XEuhpacthdsNNNIEz1hRVcn/X4fNe3znjoz3g6atWqf+9daojFdgbpG4QlF1XLCM8K+9Zxq8o5wh5IMR4XPhAc0uaDwnalHyvxqcqLM3yZrwYAXLG3CzsQvjvxiJamlheXl9KZTa0rlPuZL7LHMwrzEbvEudAJM48HJLFN4cTPMuMxuBhlhSFbUyHeV8ufISq4is0oejVUSJMkxIOqaVI9JjIsek5Eib/b/b1/1+OhIubrdAw3PhvHeB7ZtKBYM4+vIMIrHYH2Cy0w1P3sIYx+iF6pa7wE4NuH8qqpFduFiCzof1bAWLklWcUs8Dm+n0BqC9htoXi73rLLPyQMEN+SrrmFvH/rlvGPlBwaVZ7qUIlpUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABtElEQVR4nO3dLa5TQRzG4ZePBAKKhYDEEASpIIEg2UQ3wBrYQDeBJOAaDOpKWAgKUgQJoldiOumcW877PH76n5z8zMmcdBIAAAAAAAAAAAAAAP5jt6ZP2G8fJLk/fc46HbLZ/Zo54O7MH7/2IcmrBeas0eckr2cOuD3zx6/dWWDGWk1/dksEwAUTQDkBlBNAuSXeAr4k+bnAnDW6uukNAAAAAABrMPZF0H77KMcPFe6ddTeM+p3kUza7H6cuHD0L+Jjk2eBa5via5Pmpi0ZPAx8PrmOeJyOLHAeXE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBsN4PtZd8E5fBtZNPpfwW9yvBHctfCX4ZDjTeMAAAAAAP8wdm/gKfbbd0meTp+zTlfZ7N7PHDB6FnCKF0leLjBnjR4mmRqA4+ByAigngHICKLdEAH8WmLFW05/dEm8Bb+PLoVGHm94AAAAAAAAAAAAAAAAX7S+LiRynJRkZxgAAAABJRU5ErkJggg=="},g449:function(e,i,t){},hA2R:function(e,i,t){},iwZU:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYJpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZG7SwNBEIc/EyU+IhG0sLAIviqVqBC0EUwQFYKEGMGoTXJ5CXkcdxEJtoJtQEG08VXoX6CtYC0IiiKIhZW1oo2Gcy4JRMTMMjvf/nZn2J0FSzClpPV6F6QzOS0w7XEuhpacthdsNNNIEz1hRVcn/X4fNe3znjoz3g6atWqf+9daojFdgbpG4QlF1XLCM8K+9Zxq8o5wh5IMR4XPhAc0uaDwnalHyvxqcqLM3yZrwYAXLG3CzsQvjvxiJamlheXl9KZTa0rlPuZL7LHMwrzEbvEudAJM48HJLFN4cTPMuMxuBhlhSFbUyHeV8ufISq4is0oejVUSJMkxIOqaVI9JjIsek5Eib/b/b1/1+OhIubrdAw3PhvHeB7ZtKBYM4+vIMIrHYH2Cy0w1P3sIYx+iF6pa7wE4NuH8qqpFduFiCzof1bAWLklWcUs8Dm+n0BqC9htoXi73rLLPyQMEN+SrrmFvH/rlvGPlBwaVZ7qUIlpUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpklEQVR4nO3dPYoUURiF4eMPMmjoOjQ0lw4Ejd2EsWhgbCDmvQnzyWQikwl1HYbKIAgGMxsQud+M9zzPAuoUxZs0t6hOAAAAAAAAAAAAAAD4j91avvD51f0kJ8t39nSRw/HnyoG7Ky9+5VOS5wM7OzpN8mLlwO2VF79yZ2BjV8uf3UQA3GACKCeAcgIoN/Er4CzJj4GdHZ1f9w0AAAAAADuYeCPoXi5fCHm4fGsv35Oc5nD8tXJk4izgfZLXAzs7+pjkzcqBidPARwMbu3q8esBxcDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0A5AZQTQDkBlBNAOQGUE0C5iQC+DWzs6uvqgYlvBb9L8iU+Fv23Lj8WDQAAAADwzyb+N/BtkifLd/Z0nsPxw8qBibOAp0meDezs6EGSpQE4Di4ngHICKCeAchMB/B7Y2NXyZzfxK+BlkpOBnR1dXPcNAAAAAAAAAAAAAABwo/0Bz2IdW3KlJRsAAAAASUVORK5CYII="},meME:function(e,i,t){},nJy0:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYJpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZG7SwNBEIc/EyU+IhG0sLAIviqVqBC0EUwQFYKEGMGoTXJ5CXkcdxEJtoJtQEG08VXoX6CtYC0IiiKIhZW1oo2Gcy4JRMTMMjvf/nZn2J0FSzClpPV6F6QzOS0w7XEuhpacthdsNNNIEz1hRVcn/X4fNe3znjoz3g6atWqf+9daojFdgbpG4QlF1XLCM8K+9Zxq8o5wh5IMR4XPhAc0uaDwnalHyvxqcqLM3yZrwYAXLG3CzsQvjvxiJamlheXl9KZTa0rlPuZL7LHMwrzEbvEudAJM48HJLFN4cTPMuMxuBhlhSFbUyHeV8ufISq4is0oejVUSJMkxIOqaVI9JjIsek5Eib/b/b1/1+OhIubrdAw3PhvHeB7ZtKBYM4+vIMIrHYH2Cy0w1P3sIYx+iF6pa7wE4NuH8qqpFduFiCzof1bAWLklWcUs8Dm+n0BqC9htoXi73rLLPyQMEN+SrrmFvH/rlvGPlBwaVZ7qUIlpUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABl0lEQVR4nO3cMU5VURSF4X2UEIKl45CSnspEp2N0DIbxaEtPieOwhBAS8yxgCnvzOOv7BnDXzc3fvHdPbhUAAAAAAAAAAAAAAG/Y6h44HA7nVXXWvbOpx7XWQ+fARAC/qupL986mfq+1vnYOvOu8+Iv3Axu7an92EwFwxAQQTgDhBBDuZGDjpqruB3Z2dPvaNwAAAAAA7GDiQMhpPR8I+di9tZm/9Xwg5KlzZCKA66r61r2zqeu11vfOgYm3gZ8GNnZ10T3gdXA4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAuIkA/gxs7Oque8DHoo/XyMeiAQAAAIAEE38F/6iqy+6dTd2utX52Dpx0XvzFVVV9HtjZ0Yeqag3A6+BwAggngHACCDcRwL+BjV21P7uJn4HnVXXWvbOpx7XWw2vfBAAAAAAAAAAAAAAAR+s/WyMtFJhHwuAAAAAASUVORK5CYII="},rpHo:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYJpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZG7SwNBEIc/EyU+IhG0sLAIviqVqBC0EUwQFYKEGMGoTXJ5CXkcdxEJtoJtQEG08VXoX6CtYC0IiiKIhZW1oo2Gcy4JRMTMMjvf/nZn2J0FSzClpPV6F6QzOS0w7XEuhpacthdsNNNIEz1hRVcn/X4fNe3znjoz3g6atWqf+9daojFdgbpG4QlF1XLCM8K+9Zxq8o5wh5IMR4XPhAc0uaDwnalHyvxqcqLM3yZrwYAXLG3CzsQvjvxiJamlheXl9KZTa0rlPuZL7LHMwrzEbvEudAJM48HJLFN4cTPMuMxuBhlhSFbUyHeV8ufISq4is0oejVUSJMkxIOqaVI9JjIsek5Eib/b/b1/1+OhIubrdAw3PhvHeB7ZtKBYM4+vIMIrHYH2Cy0w1P3sIYx+iF6pa7wE4NuH8qqpFduFiCzof1bAWLklWcUs8Dm+n0BqC9htoXi73rLLPyQMEN+SrrmFvH/rlvGPlBwaVZ7qUIlpUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZ0lEQVR4nO3ZsU3FQBBF0Rn4AYJ+yImQoAzogRooCFJy+gGRoCWhhV3DvnMK8BtZN7FcBQAAAAAAAAAAAADAP9azB8YYl1V1MXtnU1/d/TlzYEUAL1V1N3tnU6/dfT9z4Gzmw3+dL9jY1fR3tyIA/jABhBNAOAGEOy3YeKuqjwU7O3o/+gAAAAAAYAc9xng4+giO02OMcfQRHMffwHACCCeAcAIIJ4BwAggngHACCCeAcAIIJ4BwAggngHACCCeAcAIIJ4BwAggngHACCCeAcAIIJ4BwAggngHACCCeAcAIIJ4BwAggngHACCCeAcAIIJ4BwAggngHACCCeAcAIIJ4BwAggngHCnqno8+ggAAAAAAGbq2QNjjKequp69s6n37n6eOXCa+fBfN1V1u2BnR1dVNTUAfwPDCSCcAMIJINyKAL4XbOxq+rtb8Rl4WVUXs3c29dXdn0cfAQAAAAAAAAAAAADAn/UDSmUh115NxS0AAAAASUVORK5CYII="},slcd:function(e,i,t){},uoyr:function(e,i,t){"use strict";var n=t("meME"),s=t.n(n);s.a}});
//# sourceMappingURL=app.b934c6d8.js.map
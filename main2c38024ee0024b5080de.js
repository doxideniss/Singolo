!function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],d=0,m=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(t);m.length;)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={0:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([121,1]),n()}({121:function(e,t,n){n(122),n(309),e.exports=n(308)},308:function(e,t,n){},309:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var i={ru:{title:"Письмо отправлено",subject:"Тема:",withoutSubject:"Без темы",desc:"Описание:",withoutDesc:"Без описания"},en:{title:"The letter was sent",subject:"Subject:",withoutSubject:"Without subject",desc:"Description:",withoutDesc:"Without description"}},o=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.lang=t,this.data=r,this.overlay="",this.modal="",this.form=n}var t,n,o;return t=e,(n=[{key:"buildModal",value:function(){var e=this;this.overlay=this.createDomNode("div","overlay"),this.modal=this.createDomNode("div","modal");var t=this.createDomNode("div","modal__header"),n=this.createDomNode("div","modal__content"),r=this.createDomNode("div","modal__footer");for(var o in t.innerHTML='\n        <div class="modal__title">'.concat(i[this.lang].title,"</div>\n    "),this.data){var a=this.createDomNode("p","modal__text");a.innerHTML=this.data[o]?"".concat(i[this.lang][o]," ").concat(this.data[o]):i[this.lang]["without"+(o.charAt(0).toUpperCase()+o.slice(1))],n.append(a)}return r.innerHTML='\n    <button class="modal__btn" type="submit">OK</button>\n    ',this.overlay.addEventListener("click",(function(t){return e.close(t)})),this.modal.addEventListener("click",(function(t){return e.close(t)})),this.modal.append(t),this.modal.append(n),this.modal.append(r),this.overlay.append(this.modal),this.overlay}},{key:"createDomNode",value:function(e){for(var t,n=document.createElement(e),r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return(t=n.classList).add.apply(t,i),n}},{key:"open",value:function(){var e=this.buildModal();document.body.append(e)}},{key:"close",value:function(e){var t=e.target.classList;this.overlay&&(t.contains("overlay")||t.contains("modal__btn"))&&(this.form.reset(),this.overlay.remove())}}])&&r(t.prototype,n),o&&r(t,o),e}();function a(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.nodeSlider=t,this.sliderItems=a(t.children),this.controlBox=null,this.isEnabled=!0,this.currentItem=0,this.length=this.sliderItems.length}var t,n,r;return t=e,(n=[{key:"init",value:function(){this.nodeSlider.classList.add("myslider"),this.createControlBtn(),this.sliderItems.forEach((function(e){e.classList.add("myslider__item")})),this.sliderItems[this.currentItem].classList.add("myslider__active"),this.swipeDetect()}},{key:"createControlBtn",value:function(){var e=this;this.controlBox=document.createElement("div"),this.controlBox.classList.add("myslider__control");var t=document.createElement("div");t.classList.add("myslider__btn-left");var n=document.createElement("div");n.classList.add("myslider__btn-right"),t.addEventListener("click",(function(){e.isEnabled&&e.previousItem(e.currentItem)})),n.addEventListener("click",(function(){e.isEnabled&&e.nextItem(e.currentItem)})),this.controlBox.append(t),this.controlBox.append(n),this.nodeSlider.append(this.controlBox)}},{key:"changeCurrentItem",value:function(e){this.currentItem=(e+this.length)%this.length,(this.currentItem+1)%2==0?this.nodeSlider.parentNode.parentNode.parentNode.classList.add("slider_colored"):this.nodeSlider.parentNode.parentNode.parentNode.classList.remove("slider_colored")}},{key:"hideItem",value:function(e){this.isEnabled=!1,this.sliderItems[this.currentItem].classList.add(e),this.sliderItems[this.currentItem].addEventListener("animationend",(function(){this.classList.remove("myslider__active",e)}))}},{key:"showItem",value:function(e){var t=this;this.sliderItems[this.currentItem].classList.add("myslider__next",e),this.sliderItems[this.currentItem].addEventListener("animationend",(function(){t.sliderItems[t.currentItem].classList.remove("myslider__next",e),t.sliderItems[t.currentItem].classList.add("myslider__active"),t.isEnabled=!0}))}},{key:"previousItem",value:function(){this.hideItem("to-right"),this.changeCurrentItem(this.currentItem-1),this.showItem("from-left")}},{key:"nextItem",value:function(){this.hideItem("to-left"),this.changeCurrentItem(this.currentItem+1),this.showItem("from-right")}},{key:"swipeDetect",value:function(){var e=this,t=0,n=0,r=0,i=0,o=0;this.nodeSlider.addEventListener("mousedown",(function(e){t=e.pageX,n=e.pageY,o=(new Date).getTime(),e.preventDefault()})),this.nodeSlider.addEventListener("mouseup",(function(a){r=a.pageX-t,i=a.pageY-n,(new Date).getTime()-o<=300&&e.isEnabled&&Math.abs(r)>150&&Math.abs(i)<=100&&(r>0?e.previousItem():e.nextItem()),a.preventDefault()})),this.nodeSlider.addEventListener("touchstart",(function(r){(r.target.classList.contains("myslider__btn-left")||r.target.classList.contains("myslider__btn-right"))&&e.isEnabled&&(r.target.classList.contains("myslider__btn-left")?e.previousItem():r.target.classList.contains("myslider__btn-right")&&e.nextItem());var i=r.changedTouches[0];t=i.pageX,n=i.pageY,o=(new Date).getTime(),r.preventDefault()})),this.nodeSlider.addEventListener("touchmove",(function(e){e.preventDefault()})),this.nodeSlider.addEventListener("touchend",(function(a){var s=a.changedTouches[0];r=s.pageX-t,i=s.pageY-n,(new Date).getTime()-o<=300&&e.isEnabled&&Math.abs(r)>150&&Math.abs(i)<=100&&(r>0?e.previousItem():e.nextItem()),a.preventDefault()}))}}])&&c(t.prototype,n),r&&c(t,r),e}();window.onload=function(){u(),d(),m(),h(),f(),v(),p(),g()};var u=function(){var e=document.querySelector(".sliders");new l(e).init()},d=function(){document.addEventListener("scroll",(function(e){var t=pageYOffset;document.querySelectorAll("[id]").forEach((function(e){e.offsetTop-.3*e.offsetHeight<t&&e.offsetTop+.7*e.offsetHeight>t&&(document.querySelector(".nav__item_active")&&document.querySelector(".nav__item_active").classList.remove("nav__item_active"),document.querySelector('[href="#'.concat(e.id,'"]')).parentElement.classList.add("nav__item_active"))}))}))},m=function(){var e=document.querySelector(".burger-menu"),t=document.querySelector(".nav"),n=document.querySelector(".logo");e.addEventListener("touchend",(function(){e.classList.toggle("burger-menu_active"),t.classList.toggle("nav_burger"),n.classList.toggle("logo_burger")})),t.addEventListener("touchend",(function(n){t.classList.contains("nav_burger")&&(n.target.classList.contains("nav_burger")||n.target.classList.contains("nav__link"))&&(e.classList.toggle("burger-menu_active"),t.classList.toggle("nav_burger"),console.log(n.target))}))},f=function(){document.querySelector(".sliders").addEventListener("click",(function(e){e.preventDefault(),e.target.closest(".phone__btn")&&e.target.parentNode.classList.toggle("phone_off")}))},h=function(){document.querySelector(".nav__list").addEventListener("click",(function(e){e.target.closest(".nav__item")&&(document.querySelectorAll(".nav__item_active").forEach((function(e){e.classList.remove("nav__item_active")})),e.target.closest(".nav__item").classList.add("nav__item_active"))}))},v=function(){var e=document.querySelector(".portfolios");document.querySelector(".tags").addEventListener("click",(function(t){t.target.closest(".tag")&&!t.target.closest(".tag_active")&&(document.querySelectorAll(".tag_active").forEach((function(e){e.classList.remove("tag_active")})),t.target.closest(".tag").classList.add("tag_active"),function(e){for(var t=e.children.length;t>=0;t--)e.appendChild(e.children[Math.random()*t|0])}(e))}))},p=function(){document.querySelector(".portfolios").addEventListener("click",(function(e){if(e.target.closest(".portfolios__item")){var t=e.target.closest(".portfolios__item");t.classList.toggle("portfolios__item_active"),document.querySelectorAll(".portfolios__item_active").forEach((function(e){e!==t&&e.classList.remove("portfolios__item_active")}))}}))},g=function(){var e=document.querySelector("form");e.addEventListener("click",(function(t){if("BUTTON"===t.target.tagName){var n=e.querySelector("[name=name]").value,r=e.querySelector("[name=email]").value,i=e.querySelector("[name=subject]").value,a=e.querySelector("[name=desc]").value;if(n&&r)t.preventDefault(),new o("ru",e,{subject:i,desc:a}).open()}}))}}});
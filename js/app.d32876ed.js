(function(t){function i(i){for(var e,s,u=i[0],d=i[1],a=i[2],l=0,f=[];l<u.length;l++)s=u[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(e in d)Object.prototype.hasOwnProperty.call(d,e)&&(t[e]=d[e]);c&&c(i);while(f.length)f.shift()();return r.push.apply(r,a||[]),n()}function n(){for(var t,i=0;i<r.length;i++){for(var n=r[i],e=!0,u=1;u<n.length;u++){var d=n[u];0!==o[d]&&(e=!1)}e&&(r.splice(i--,1),t=s(s.s=n[0]))}return t}var e={},o={app:0},r=[];function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,i,n){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var e in t)s.d(n,e,function(i){return t[i]}.bind(null,e));return n},s.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="/vue-todolist/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=i,u=u.slice();for(var a=0;a<u.length;a++)i(u[a]);var c=d;r.push([0,"chunk-vendors"]),n()})({0:function(t,i,n){t.exports=n("56d7")},"034f":function(t,i,n){"use strict";var e=n("85ec"),o=n.n(e);o.a},"56d7":function(t,i,n){"use strict";n.r(i);n("e260"),n("e6cf"),n("cca6"),n("a79d");var e=n("2b0e"),o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),e("div",[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputStr,expression:"inputStr"}],staticClass:"input-box",attrs:{type:"text"},domProps:{value:t.inputStr},on:{keyup:function(i){return i.type.indexOf("key")||13===i.keyCode?t.addItem():null},input:function(i){i.target.composing||(t.inputStr=i.target.value)}}}),e("button",{staticClass:"btn create",on:{click:function(i){return t.addItem()}}},[t._v("新增")])]),e("TodoList",{attrs:{"todo-list":t.list,"input-str":t.inputStr}})],1)])},r=[],s=(n("4160"),n("159b"),function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("ul",[t._v(" "+t._s(t.inputStr)+" "),t._m(0),t._l(t.todoList,(function(i){return n("li",{key:i.id},[n("div",{directives:[{name:"show",rawName:"v-show",value:0==i.isEdit,expression:"item.isEdit == false"}]},[n("div",{staticClass:"things",class:{isFinished:i.finished},on:{click:function(n){return t.toggleFinish(i.id)}}},[t._v(t._s(i.thing))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:1==i.isEdit,expression:"item.isEdit == true"}]},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.modifyText,expression:"modifyText"}],staticClass:"input-box",attrs:{type:"text"},domProps:{value:t.modifyText},on:{keyup:function(n){return n.type.indexOf("key")||13===n.keyCode?t.modifyItem(i.id):null},input:function(i){i.target.composing||(t.modifyText=i.target.value)}}})]),n("div",{staticClass:"function-btn"},[n("button",{staticClass:"btn delete",on:{click:function(n){return t.deleteItem(i.id)}}},[t._v("刪除")]),n("button",{staticClass:"btn finish",on:{click:function(n){return t.toggleFinish(i.id)}}},[t._v("完成")]),n("button",{staticClass:"btn modify",on:{click:function(n){return t.modifyToInput(i.id)}}},[t._v("更改")])])])}))],2)}),u=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("li",[n("div",{staticClass:"li-title"},[t._v("事情")]),n("div",{staticClass:"li-title no-import"},[t._v("功能")])])}],d=(n("a434"),{name:"TodoList",props:["todoList","inputStr"],data:function(){return{haveAnyModify:!1,modifyText:""}},methods:{toggleFinish:function(t){this.todoList.forEach((function(i){i.id==t&&(i.finished=!i.finished)}))},deleteItem:function(t){var i=this.todoList;this.todoList.forEach((function(n,e){if(n.id==t){var o=e;i.splice(o,1)}})),this.todoList=i},modifyToInput:function(t){var i=this;0==this.haveAnyModify?this.todoList.forEach((function(n){n.id==t&&(n.isEdit=!n.isEdit,i.haveAnyModify=!i.haveAnyModify,1==n.isEdit&&(i.modifyText=n.thing))})):this.modifyItem(t)},modifyItem:function(t){var i=this;this.todoList.forEach((function(n){n.id==t&&(n.thing=i.modifyText,i.modifyText="",n.isEdit=!n.isEdit,i.haveAnyModify=!i.haveAnyModify)}))}}}),a=d,c=n("2877"),l=Object(c["a"])(a,s,u,!1,null,null,null),f=l.exports,p={name:"App",components:{TodoList:f},data:function(){return{inputStr:"",list:[{id:0,thing:"吃飯",finished:!1,isEdit:!1},{id:1,thing:"睡覺",finished:!1,isEdit:!1},{id:2,thing:"打東東",finished:!1,isEdit:!1}]}},methods:{addItem:function(){var t=0;this.list.forEach((function(i){t<i.id&&(t=i.id)})),this.list.push({id:t+1,thing:this.inputStr,finished:!1,isEdit:!1}),this.inputStr=""}}},h=p,v=(n("034f"),Object(c["a"])(h,o,r,!1,null,null,null)),m=v.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(m)}}).$mount("#app")},"85ec":function(t,i,n){},cf05:function(t,i,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.d32876ed.js.map
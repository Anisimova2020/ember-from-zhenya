"use strict"
define("ember-by-zhenya/app",["exports","ember-by-zhenya/resolver","ember-load-initializers","ember-by-zhenya/config/environment"],function(e,t,n,o){Object.defineProperty(e,"__esModule",{value:!0})
var a=Ember.Application.extend({modulePrefix:o.default.modulePrefix,podModulePrefix:o.default.podModulePrefix,Resolver:t.default});(0,n.default)(a,o.default.modulePrefix),e.default=a}),define("ember-by-zhenya/components/book-form",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({actions:{submitForm:function(e){e.preventDefault(),this.onsubmit({id:this.get("idBook"),bookName:this.get("bookName"),author:this.get("author"),numberOfPages:this.get("numberOfPages"),bookImage:this.get("bookImage"),bookLink:this.get("bookLink"),averageRate:this.get("averageRate"),tags:this.get("tags")})}},didReceiveAttrs:function(){this._super.apply(this,arguments)
var e=this.get("book.id")
this.setProperties({idBook:e||void 0,bookName:this.get("book.bookName"),author:this.get("book.author"),numberOfPages:this.get("book.numberOfPages"),bookImage:this.get("book.bookImage"),bookLink:this.get("book.bookLink"),averageRate:this.get("book.averageRate"),tags:this.get("book.tags")})}})}),define("ember-by-zhenya/controllers/book/create",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({dataService:Ember.inject.service("data"),actions:{saveBook:function(){var e,t=(e=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("dataService").createBook(t)
case 2:this.get("model").set("bookName",t.bookName),this.get("model").set("author",t.author),this.get("model").set("numberOfPages",t.numberOfPages),this.get("model").set("bookImage",t.bookImage),this.get("model").set("bookLink",t.bookLink),this.get("model").set("averageRate",t.averageRate),this.get("model").set("tags",t.tags),this.transitionToRoute("book.index")
case 10:case"end":return e.stop()}},e,this)}),function(){var t=e.apply(this,arguments)
return new Promise(function(e,n){return function o(a,r){try{var i=t[a](r),s=i.value}catch(l){return void n(l)}if(!i.done)return Promise.resolve(s).then(function(e){o("next",e)},function(e){o("throw",e)})
e(s)}("next")})})
return function(e){return t.apply(this,arguments)}}()}})}),define("ember-by-zhenya/controllers/book/detail",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({dataService:Ember.inject.service("data"),actions:{deleteBook:function(){var e,t=(e=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.get("dataService").deleteBook(t)
case 3:this.transitionToRoute("book.index"),e.next=9
break
case 6:e.prev=6,e.t0=e.catch(0),this.send("error",new Error("Connection failed"))
case 9:case"end":return e.stop()}},e,this,[[0,6]])}),function(){var t=e.apply(this,arguments)
return new Promise(function(e,n){return function o(a,r){try{var i=t[a](r),s=i.value}catch(l){return void n(l)}if(!i.done)return Promise.resolve(s).then(function(e){o("next",e)},function(e){o("throw",e)})
e(s)}("next")})})
return function(e){return t.apply(this,arguments)}}()}})}),define("ember-by-zhenya/controllers/book/edit",["exports"],function(e){function t(e){return function(){var t=e.apply(this,arguments)
return new Promise(function(e,n){return function o(a,r){try{var i=t[a](r),s=i.value}catch(l){return void n(l)}if(!i.done)return Promise.resolve(s).then(function(e){o("next",e)},function(e){o("throw",e)})
e(s)}("next")})}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({dataService:Ember.inject.service("data"),actions:{saveBook:function(){var e=t(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("dataService").updateBook(t)
case 2:this.transitionToRoute("book.index")
case 3:case"end":return e.stop()}},e,this)}))
return function(t){return e.apply(this,arguments)}}(),deleteBook:function(){var e=t(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.get("dataService").deleteBook(t)
case 3:this.transitionToRoute("book.index"),e.next=9
break
case 6:e.prev=6,e.t0=e.catch(0),this.send("error",new Error("Connection failed"))
case 9:case"end":return e.stop()}},e,this,[[0,6]])}))
return function(t){return e.apply(this,arguments)}}()}})}),define("ember-by-zhenya/helpers/app-version",["exports","ember-by-zhenya/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n){function o(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.default.APP.version,r=o.versionOnly||o.hideSha,i=o.shaOnly||o.hideVersion,s=null
return r&&(o.showExtended&&(s=a.match(n.versionExtendedRegExp)),s||(s=a.match(n.versionRegExp))),i&&(s=a.match(n.shaRegExp)),s?s[0]:a}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=o,e.default=Ember.Helper.helper(o)}),define("ember-by-zhenya/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ember-by-zhenya/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ember-by-zhenya/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-by-zhenya/config/environment"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0})
var o=void 0,a=void 0
n.default.APP&&(o=n.default.APP.name,a=n.default.APP.version),e.default={name:"App Version",initialize:(0,t.default)(o,a)}}),define("ember-by-zhenya/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("ember-by-zhenya/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("ember-by-zhenya/initializers/export-application-global",["exports","ember-by-zhenya/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var o,a=t.default.exportApplicationGlobal
o="string"==typeof a?a:Ember.String.classify(t.default.modulePrefix),n[o]||(n[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[o]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("ember-by-zhenya/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("ember-by-zhenya/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ember-by-zhenya/router",["exports","ember-by-zhenya/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){this.route("book",{path:"/books"},function(){this.route("detail",{path:"/:id"}),this.route("create"),this.route("edit",{path:"/:id/edit"})}),this.route("error",{path:"/:error"}),this.route("404",{path:"*path"}),this.route("reporter",function(){this.route("detail",{path:"/:id"})})}),e.default=n}),define("ember-by-zhenya/routes/404",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({})}),define("ember-by-zhenya/routes/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({actions:{error:function(e,t){t&&t.abort(),this.intermediateTransitionTo("error",{error:e.message})}}})}),define("ember-by-zhenya/routes/book",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({dataService:Ember.inject.service("data"),model:function(){var e=this
return new Ember.RSVP.Promise(function(t,n){var o
Ember.run.later((o=regeneratorRuntime.mark(function o(){var a
return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,e.get("dataService").getBooks()
case 3:a=o.sent,t(a),o.next=10
break
case 7:o.prev=7,o.t0=o.catch(0),n("Что-то пошло не так при загрузке данных.")
case 10:case"end":return o.stop()}},o,e,[[0,7]])}),function(){var e=o.apply(this,arguments)
return new Promise(function(t,n){return function o(a,r){try{var i=e[a](r),s=i.value}catch(l){return void n(l)}if(!i.done)return Promise.resolve(s).then(function(e){o("next",e)},function(e){o("throw",e)})
t(s)}("next")})}),1e3)})},actions:{refreshBooks:function(){this.refresh()}}})}),define("ember-by-zhenya/routes/book/create",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({model:function(){return Ember.Object.create({bookName:"",author:"",numberOfPages:"",bookImage:"",bookLink:"",averageRate:"",tags:""})}})}),define("ember-by-zhenya/routes/book/detail",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({dataService:Ember.inject.service("data"),model:function(e){var t=e.id
return this.get("dataService").getBook(t)}})}),define("ember-by-zhenya/routes/book/edit",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({dataService:Ember.inject.service("data"),model:function(e){var t=e.id
return this.get("dataService").getBook(t)}})}),define("ember-by-zhenya/routes/book/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({beforeModel:function(e){var t=this,n=e.router.currentHandlerInfos,o=this.get("routeName"),a=""
if(n&&n.length>0){var r=n[n.length-1].name
a="loading"===r?n[n.length-2].name:r}a!=o&&"application"!==a&&e.promise.then(function(){t.send("refreshBooks")})}})}),define("ember-by-zhenya/routes/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({})}),define("ember-by-zhenya/routes/reporter",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({})}),define("ember-by-zhenya/routes/reporter/detail",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({})}),define("ember-by-zhenya/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-by-zhenya/services/data",["exports","ember-by-zhenya/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Service.extend({getBooks:function(){return fetch(t.default.backendURL+"/books").then(function(e){return e.json()})},getBook:function(e){return fetch(t.default.backendURL+"/books/"+e).then(function(e){return e.json()})},deleteBook:function(e){return fetch(t.default.backendURL+"/books/"+e.id,{method:"DELETE"})},createBook:function(e){return fetch(t.default.backendURL+"/books",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},updateBook:function(e){return fetch(t.default.backendURL+"/books/"+e.id,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},getReporters:function(){return fetch(t.default.backendURL+"/reporters").then(function(e){return e.json()})}})}),define("ember-by-zhenya/templates/404",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"CQBwXcr1",block:'{"symbols":[],"statements":[[6,"div"],[8],[0,"\\n  ПУТЬ НЕ НАЙДЕН.\\n  Путь Вас увёл в неизвестные дали. Сей путь неведом нам.\\n"],[9]],"hasEval":false}',meta:{moduleName:"ember-by-zhenya/templates/404.hbs"}})}),define("ember-by-zhenya/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"UB0nfGe8",block:'{"symbols":[],"statements":[[6,"div"],[10,"class","ui grid"],[8],[0,"\\n  "],[6,"div"],[10,"class","four wide column"],[8],[0,"\\n    "],[6,"div"],[10,"class","ui vertical attached stackable menu"],[8],[0,"\\n      "],[6,"div"],[10,"class","ui container"],[8],[0,"\\n"],[4,"link-to",["index"],[["class"],["item"]],{"statements":[[0,"          "],[6,"i"],[10,"class","home icon"],[8],[9],[0," Главная\\n"]],"parameters":[]},null],[4,"link-to",["book.index"],[["class"],["item"]],{"statements":[[0,"          "],[6,"i"],[10,"class","book icon"],[8],[9],[0," Книги\\n"]],"parameters":[]},null],[4,"link-to",["reporter.index"],[["class"],["item"]],{"statements":[[0,"          "],[6,"i"],[10,"class","user icon"],[8],[9],[0," Докладчики\\n"]],"parameters":[]},null],[0,"      "],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n  "],[6,"div"],[10,"class","twelve wide stretched column"],[8],[0,"\\n    "],[6,"div"],[10,"class","ui segment"],[8],[0,"\\n      "],[1,[20,"outlet"],false],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"ember-by-zhenya/templates/application.hbs"}})}),define("ember-by-zhenya/templates/book",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"zJNDD3be",block:'{"symbols":["book"],"statements":[[6,"div"],[10,"class","panel-content"],[8],[0,"\\n"],[4,"link-to",["book.create"],[["class"],["ui button"]],{"statements":[[0,"      "],[6,"i"],[10,"class","plus icon"],[8],[9],[0,"\\n"]],"parameters":[]},null],[0,"  "],[6,"h3"],[10,"class","panel-title"],[8],[0,"Книги"],[9],[0,"\\n  "],[6,"ul"],[10,"class","collection"],[8],[0,"\\n"],[4,"each",[[22,["model"]]],null,{"statements":[[0,"        "],[6,"li"],[8],[0,"\\n"],[4,"link-to",["book.detail",[21,1,["id"]]],null,{"statements":[[0,"            "],[1,[21,1,["bookName"]],false],[0,"\\n"]],"parameters":[]},null],[0,"        "],[9],[0,"\\n"]],"parameters":[1]},null],[0,"  "],[9],[0,"\\n  "],[1,[20,"outlet"],false],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"ember-by-zhenya/templates/book.hbs"}})})
define("ember-by-zhenya/templates/book/create",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"N3PYheLP",block:'{"symbols":[],"statements":[[6,"div"],[10,"class","panel-content"],[8],[0,"\\n    "],[6,"div"],[10,"class","ui icon buttons"],[8],[0,"\\n"],[4,"link-to",["book.index"],[["class"],["ui button"]],{"statements":[[0,"            "],[6,"i"],[10,"class","window close icon"],[8],[9],[0,"\\n"]],"parameters":[]},null],[0,"    "],[9],[0,"\\n    "],[6,"h3"],[10,"class","panel-title"],[8],[0,"Новая книга"],[9],[0,"\\n    "],[6,"div"],[8],[0,"\\n      "],[1,[26,"book-form",null,[["book","onsubmit"],[[22,["model"]],[26,"action",[[21,0,[]],"saveBook"],null]]]],false],[0,"\\n    "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"ember-by-zhenya/templates/book/create.hbs"}})}),define("ember-by-zhenya/templates/book/detail",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"Y4zuwmBz",block:'{"symbols":[],"statements":[[6,"div"],[10,"class","panel-content"],[8],[0,"\\n    "],[6,"div"],[10,"class","ui icon buttons"],[8],[0,"\\n"],[4,"link-to",["book.index"],[["class"],["ui button"]],{"statements":[[0,"            "],[6,"i"],[10,"class","window close icon"],[8],[9],[0,"\\n"]],"parameters":[]},null],[4,"link-to",["book.edit",[22,["model","id"]]],[["class"],["ui button"]],{"statements":[[0,"            "],[6,"i"],[10,"class","edit icon"],[8],[9],[0,"\\n"]],"parameters":[]},null],[0,"        "],[6,"button"],[10,"class","ui button"],[11,"onclick",[26,"action",[[21,0,[]],"deleteBook",[22,["model"]]],null],null],[8],[0,"\\n            "],[6,"i"],[10,"class","trash icon"],[8],[9],[0,"\\n        "],[9],[0,"\\n    "],[9],[0,"\\n    "],[6,"h3"],[10,"class","panel-title"],[8],[1,[22,["model","bookName"]],false],[9],[0,"\\n   "],[1,[20,"outlet"],false],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"ember-by-zhenya/templates/book/detail.hbs"}})}),define("ember-by-zhenya/templates/book/edit",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"KMVyIf9S",block:'{"symbols":[],"statements":[[6,"div"],[10,"class","panel-content"],[8],[0,"\\n    "],[6,"div"],[10,"class","ui icon buttons"],[8],[0,"\\n"],[4,"link-to",["book.index"],[["class"],["ui button"]],{"statements":[[0,"            "],[6,"i"],[10,"class","window close icon"],[8],[9],[0,"\\n"]],"parameters":[]},null],[0,"         "],[6,"button"],[10,"class","ui button"],[11,"onclick",[26,"action",[[21,0,[]],"deleteBook",[22,["model"]]],null],null],[8],[0,"\\n            "],[6,"i"],[10,"class","trash icon"],[8],[9],[0,"\\n        "],[9],[0,"\\n    "],[9],[0,"\\n    "],[6,"h3"],[10,"class","panel-title"],[8],[0,"Книга: "],[1,[22,["model","bookName"]],false],[9],[0,"\\n    "],[6,"div"],[8],[0,"\\n      "],[1,[26,"book-form",null,[["book","onsubmit"],[[22,["model"]],[26,"action",[[21,0,[]],"saveBook"],null]]]],false],[0,"\\n    "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"ember-by-zhenya/templates/book/edit.hbs"}})}),define("ember-by-zhenya/templates/book/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"wWE+2cuF",block:'{"symbols":[],"statements":[[1,[20,"outlet"],false]],"hasEval":false}',meta:{moduleName:"ember-by-zhenya/templates/book/index.hbs"}})}),define("ember-by-zhenya/templates/components/book-form",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"ws9oFVWK",block:'{"symbols":[],"statements":[[6,"form"],[11,"onsubmit",[26,"action",[[21,0,[]],"submitForm"],null],null],[10,"class","ui form"],[8],[0,"\\n    "],[6,"div"],[10,"class","field"],[8],[0,"\\n        "],[6,"label"],[8],[0,"Название: "],[9],[0,"\\n        "],[1,[26,"input",null,[["type","placeholder","value"],["text","Book Name",[22,["bookName"]]]]],false],[0,"\\n    "],[9],[0,"\\n\\n    "],[6,"div"],[10,"class","field"],[8],[0,"\\n        "],[6,"label"],[8],[0,"Автор:"],[9],[0,"\\n        "],[1,[26,"input",null,[["type","placeholder","value"],["text","Author",[22,["author"]]]]],false],[0,"\\n    "],[9],[0,"\\n\\n    "],[6,"div"],[10,"class","field"],[8],[0,"\\n        "],[6,"label"],[8],[0,"Количество страниц:"],[9],[0,"\\n        "],[1,[26,"input",null,[["type","placeholder","value"],["text","Number Of Pages",[22,["numberOfPages"]]]]],false],[0,"\\n    "],[9],[0,"\\n\\n    "],[6,"div"],[10,"class","field"],[8],[0,"\\n        "],[6,"label"],[8],[0,"Картинка:"],[9],[0,"\\n        "],[1,[26,"input",null,[["type","placeholder","value"],["text","Book Image",[22,["bookImage"]]]]],false],[0,"\\n    "],[9],[0,"\\n\\n    "],[6,"div"],[10,"class","field"],[8],[0,"\\n        "],[6,"label"],[8],[0,"Ссылка:"],[9],[0,"\\n        "],[1,[26,"input",null,[["type","placeholder","value"],["text","Book Link",[22,["bookLink"]]]]],false],[0,"\\n    "],[9],[0,"\\n\\n    "],[6,"div"],[10,"class","field"],[8],[0,"\\n        "],[6,"label"],[8],[0,"Средний рейтинг:"],[9],[0,"\\n        "],[1,[26,"input",null,[["type","placeholder","value"],["text","Average Rate",[22,["averageRate"]]]]],false],[0,"\\n    "],[9],[0,"\\n\\n    "],[6,"div"],[10,"class","field"],[8],[0,"\\n        "],[6,"label"],[8],[0,"Тэги:"],[9],[0,"\\n        "],[1,[26,"input",null,[["type","placeholder","value"],["text","Tags",[22,["tags"]]]]],false],[0,"\\n    "],[9],[0,"\\n\\n  "],[6,"div"],[10,"class","form-footer"],[8],[0,"\\n    "],[6,"button"],[10,"class","ui button"],[10,"type","submit"],[8],[0,"Сохранить"],[9],[0,"\\n  "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"ember-by-zhenya/templates/components/book-form.hbs"}})}),define("ember-by-zhenya/templates/error",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"Or6ZEcgZ",block:'{"symbols":[],"statements":[[6,"div"],[8],[0,"\\n  Произошла ошибка.\\n"],[4,"if",[[22,["model","error"]]],null,{"statements":[[0,"    "],[6,"h2"],[8],[0,"Error: "],[1,[22,["model","error"]],false],[9],[0,"\\n"]],"parameters":[]},null],[9]],"hasEval":false}',meta:{moduleName:"ember-by-zhenya/templates/error.hbs"}})}),define("ember-by-zhenya/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"doP6qMEZ",block:'{"symbols":[],"statements":[[6,"div"],[8],[0,"Hello world"],[9]],"hasEval":false}',meta:{moduleName:"ember-by-zhenya/templates/index.hbs"}})}),define("ember-by-zhenya/templates/loading",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"fFKyySzw",block:'{"symbols":[],"statements":[[6,"div"],[8],[0,"\\n  ВНИМАНИЕ! Идёт загрузка данных....\\n"],[9]],"hasEval":false}',meta:{moduleName:"ember-by-zhenya/templates/loading.hbs"}})}),define("ember-by-zhenya/templates/reporter",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"woqpCQFZ",block:'{"symbols":[],"statements":[[1,[20,"outlet"],false]],"hasEval":false}',meta:{moduleName:"ember-by-zhenya/templates/reporter.hbs"}})}),define("ember-by-zhenya/templates/reporter/detail",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"HvTX/l/E",block:'{"symbols":[],"statements":[[1,[20,"outlet"],false]],"hasEval":false}',meta:{moduleName:"ember-by-zhenya/templates/reporter/detail.hbs"}})}),define("ember-by-zhenya/config/environment",[],function(){try{var e="ember-by-zhenya/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(o){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("ember-by-zhenya/app").default.create({name:"ember-by-zhenya",version:"0.0.0+0336f047"})

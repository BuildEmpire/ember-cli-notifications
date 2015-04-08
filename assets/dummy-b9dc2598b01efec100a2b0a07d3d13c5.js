define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,i,a){"use strict";t["default"].MODEL_FACTORY_INJECTIONS=!0;var r=t["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:n["default"]});i["default"](r,a["default"].modulePrefix),e["default"]=r}),define("dummy/components/notification-message",["exports","ember-cli-notifications/components/notification-message"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/controllers/application",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].ObjectController.extend({actions:{showSuccess:function(){this.notifications.addNotification({message:"A success notification",type:"success",autoClear:!0})},showInfo:function(){this.notifications.addNotification({message:"An info notification",type:"info"})},showError:function(){this.notifications.addNotification({message:"An error notification",type:"error"})},showWarning:function(){this.notifications.addNotification({message:"A warning notification",type:"warning"})}}})}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,n){"use strict";var i=n["default"].String.classify;e["default"]={name:"App Version",initialize:function(e,a){var r=i(a.toString());n["default"].libraries.register(r,t["default"].APP.version)}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";function i(e,i){var a=t["default"].String.classify(n["default"].modulePrefix);n["default"].exportApplicationGlobal&&!window[a]&&(window[a]=i)}e.initialize=i,e["default"]={name:"export-application-global",initialize:i}}),define("dummy/initializers/notifications",["exports","ember-cli-notifications/services/notification-messages-service"],function(e,t){"use strict";e["default"]={name:"notification-messages-service",initialize:function(e,n){n.register("notification-messages:service",t["default"]),["controller","component","route","router"].forEach(function(e){n.inject(e,"notifications","notification-messages:service")})}}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";var i=t["default"].Router.extend({location:n["default"].locationType});i.map(function(){}),e["default"]=i}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(e,t,n){var i=t.dom,a=t.hooks,r=a.get,o=a.inline;i.detectNamespace(n);var c;t.useFragmentCache&&i.canClone?(null===this.cachedFragment&&(c=this.build(i),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=i.cloneNode(this.cachedFragment,!0))):c=this.build(i);var d=i.createMorphAt(c,0,1,n);return o(t,d,e,"notification-message",[],{notification:r(t,e,"notification")}),c}}}();return{isHTMLBars:!0,blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","notifications-container");var i=e.createTextNode("\n");e.appendChild(n,i),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("h2"),i=e.createTextNode("ember-cli-notifications");e.appendChild(n,i),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("p"),i=e.createTextNode("Push a button below to trigger a notification");e.appendChild(n,i),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("button");e.setAttribute(n,"title","Show a success notification");var i=e.createTextNode("Success (auto clear)");e.appendChild(n,i),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("button");e.setAttribute(n,"title","Show an info notification");var i=e.createTextNode("Info");e.appendChild(n,i),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("button");e.setAttribute(n,"title","Show an error notification");var i=e.createTextNode("Error");e.appendChild(n,i),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("button");e.setAttribute(n,"title","Show a warning notification");var i=e.createTextNode("Warning");e.appendChild(n,i),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(t,n,i){var a=n.dom,r=n.hooks,o=r.get,c=r.block,d=r.element,s=r.content;a.detectNamespace(i);var l;n.useFragmentCache&&a.canClone?(null===this.cachedFragment&&(l=this.build(a),this.hasRendered?this.cachedFragment=l:this.hasRendered=!0),this.cachedFragment&&(l=a.cloneNode(this.cachedFragment,!0))):l=this.build(a);var u=a.childAt(l,[6]),h=a.childAt(l,[8]),m=a.childAt(l,[10]),p=a.childAt(l,[12]),f=a.createMorphAt(a.childAt(l,[0]),0,-1),v=a.createMorphAt(l,13,14,i);return c(n,f,t,"each",[o(n,t,"notifications")],{keyword:"notification"},e,null),d(n,u,t,"action",["showSuccess"],{}),d(n,h,t,"action",["showInfo"],{}),d(n,m,t,"action",["showError"],{}),d(n,p,t,"action",["showWarning"],{}),s(n,v,t,"outlet"),l}}}())}),define("dummy/templates/components/notification-message",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","notification-countdown"),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(e,t,n){var i=t.dom,a=t.hooks,r=a.element;i.detectNamespace(n);var o;t.useFragmentCache&&i.canClone?(null===this.cachedFragment&&(o=this.build(i),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=i.cloneNode(this.cachedFragment,!0))):o=this.build(i);var c=i.childAt(o,[1]);return r(t,c,e,"bind-attr",[],{style:"notificationClearDuration"}),o}}}();return{isHTMLBars:!0,blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","notification-icon");var i=e.createTextNode("\n  ");e.appendChild(n,i);var i=e.createElement("span"),a=e.createTextNode("\n    ");e.appendChild(i,a);var a=e.createElement("i");e.appendChild(i,a);var a=e.createTextNode("\n  ");e.appendChild(i,a),e.appendChild(n,i);var i=e.createTextNode("\n");e.appendChild(n,i),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("div"),i=e.createTextNode("\n  ");e.appendChild(n,i);var i=e.createTextNode("\n");e.appendChild(n,i),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","notification-close"),e.setAttribute(n,"title","Dismiss this notification");var i=e.createTextNode("\n  ");e.appendChild(n,i);var i=e.createElement("i");e.setAttribute(i,"class","fa fa-times"),e.appendChild(n,i);var i=e.createTextNode("\n");e.appendChild(n,i),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(t,n,i){var a=n.dom,r=n.hooks,o=r.element,c=r.content,d=r.get,s=r.block;a.detectNamespace(i);var l;n.useFragmentCache&&a.canClone?(null===this.cachedFragment&&(l=this.build(a),this.hasRendered?this.cachedFragment=l:this.hasRendered=!0),this.cachedFragment&&(l=a.cloneNode(this.cachedFragment,!0))):l=this.build(a);var u=a.childAt(l,[0,1,1]),h=a.childAt(l,[2]),m=a.childAt(l,[4]),p=a.createMorphAt(h,0,1),f=a.createMorphAt(l,3,4,i);return o(n,u,t,"bind-attr",[],{"class":":fa notificationIcon"}),o(n,h,t,"bind-attr",[],{"class":":notification-content autoClear::dismissable"}),c(n,p,t,"notification.message"),s(n,f,t,"if",[d(n,t,"notification.autoClear")],{},e,null),o(n,m,t,"action",["removeNotification"],{}),l}}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",i=e["default"].$('meta[name="'+n+'"]').attr("content"),a=JSON.parse(unescape(i));return{"default":a}}catch(r){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-cli-notifications",version:"1.1.4.5e31df33"});
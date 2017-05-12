/*! (c) Philipp König under GPL-3.0 */
"use strict";!function(a){window.ModelHelper=function(a){var b=this,c={u:{openStates:{},hiddenEntries:{},scrollPos:{},entriesLocked:!1,sort:{name:"custom",dir:"ASC"},mostViewedPerMonth:!1,viewAsTree:!0},b:{pxTolerance:{windowed:20,maximized:1},scrollSensitivity:{mouse:1,trackpad:1},openAction:"mousedown",newTab:"foreground",linkAction:"current",dirAccordion:!1,rememberState:"all",rememberSearch:!0,dirOpenDuration:.5,openDelay:0,closeTimeout:1,initialOpenOnNewTab:!0},a:{sidebarPosition:"left",language:"default",showIndicator:!0,showIndicatorIcon:!0,showBookmarkIcons:!0,styles:{colorScheme:"rgb(0,137,123)",textColor:"rgb(102,102,102)",indicatorWidth:"50px",indicatorIconSize:"40px",indicatorIconColor:"rgb(255,255,255)",indicatorColor:"rgba(0,0,0,0.5)",sidebarWidth:"350px",sidebarMaskColor:"rgba(255,255,255,0.8)",bookmarksFontSize:"14px",bookmarksIconSize:"16px",bookmarksLineHeight:"40px",bookmarksDirIcon:"dir-1",bookmarksDirColor:"rgb(102,102,102)",bookmarksDirIndentation:"25px",bookmarksHorizontalPadding:"16px",overlayMaskColor:"rgba(0,0,0,0.5)",fontFamily:"default"}}},d={};this.init=function(a){var b=["utility","behaviour","appearance"];chrome.storage.sync.get(b,function(c){d=c,b.forEach(function(a){void 0===d[a]&&(d[a]={})}),"function"==typeof a&&a()})},this.getData=function(b){var e=b;"string"==typeof e&&(e=[e]);var f={};if(e.forEach(function(b){var e=b.split("/")[0],g=b.split("/")[1],h=null,i=null;switch(e){case"u":i=d.utility;break;case"b":i=d.behaviour;break;case"a":i=d.appearance}if(null!==i&&(void 0===i[g]?"rememberState"===g&&void 0!==i.rememberScroll?h=!1===i.rememberScroll?"openStates":"all":void 0!==c[e]&&void 0!==c[e][g]&&(h=c[e][g]):h=i[g]),"a/styles"===b&&(h=Object.assign({},c.a.styles,h),a.helper.font&&a.helper.font.isLoaded())){var j=a.helper.font.getFontInfo();h.fontFamily=j.name,Object.assign(h,j.fontWeights)}"a/showIndicator"===b&&!0===h&&void 0!==d.behaviour.openAction&&"mousemove"===d.behaviour.openAction&&(h=!1),f[g]=h}),"string"==typeof b){var g=b.split("/")[1];f=f[g]}return f},this.setData=function(a,c){b.init(function(){Object.keys(a).forEach(function(b){var c=b.split("/")[0],e=b.split("/")[1],f=a[b];switch(c){case"u":d.utility[e]=f,d.utility;break;case"b":d.behaviour[e]=f;break;case"a":d.appearance[e]=f}});try{chrome.storage.sync.set(d,function(){"function"==typeof c&&c()})}catch(a){"function"==typeof c&&c()}})},this.call=function(a,b,c){"function"==typeof b&&(c=b,b={}),b.type=a,chrome.extension.sendMessage(b,function(a){"function"==typeof c&&c(a)})}}}(jsu);
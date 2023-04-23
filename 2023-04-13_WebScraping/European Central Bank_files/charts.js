/*! ecb - v2.0.0 - European Central Bank */

if(!AmCharts)var AmCharts={themes:{},maps:{},inheriting:{},charts:[],onReadyArray:[],useUTC:!1,updateRate:40,uid:0,lang:{},translations:{},mapTranslations:{}};
AmCharts.Class=function(a){var b=function(){arguments[0]!==AmCharts.inheriting&&(this.events={},this.construct.apply(this,arguments))};a.inherits?(b.prototype=new a.inherits(AmCharts.inheriting),b.base=a.inherits.prototype,delete a.inherits):(b.prototype.createEvents=function(){for(var a=0,b=arguments.length;a<b;a++)this.events[arguments[a]]=[]},b.prototype.listenTo=function(a,b,c){this.removeListener(a,b,c);a.events[b].push({handler:c,scope:this})},b.prototype.addListener=function(a,b,c){this.removeListener(this,
a,b);this.events[a].push({handler:b,scope:c})},b.prototype.removeListener=function(a,b,c){if(a&&a.events)for(a=a.events[b],b=a.length-1;0<=b;b--)a[b].handler===c&&a.splice(b,1)},b.prototype.fire=function(a,b){for(var c=this.events[a],g=0,h=c.length;g<h;g++){var k=c[g];k.handler.call(k.scope,b)}});for(var c in a)b.prototype[c]=a[c];return b};AmCharts.addChart=function(a){AmCharts.charts.push(a)};AmCharts.removeChart=function(a){for(var b=AmCharts.charts,c=b.length-1;0<=c;c--)b[c]==a&&b.splice(c,1)};
AmCharts.isModern=!0;AmCharts.getIEVersion=function(){var a=0;if("Microsoft Internet Explorer"==navigator.appName){var b=navigator.userAgent,c=/MSIE ([0-9]{1,}[.0-9]{0,})/;null!=c.exec(b)&&(a=parseFloat(RegExp.$1))}else"Netscape"==navigator.appName&&(b=navigator.userAgent,c=/Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/,null!=c.exec(b)&&(a=parseFloat(RegExp.$1)));return a};
AmCharts.applyLang=function(a){var b=AmCharts.translations;b&&(a=b[a])&&(AmCharts.lang=a,a.monthNames&&(AmCharts.dayNames=a.dayNames,AmCharts.shortDayNames=a.shortDayNames,AmCharts.monthNames=a.monthNames,AmCharts.shortMonthNames=a.shortMonthNames))};AmCharts.IEversion=AmCharts.getIEVersion();9>AmCharts.IEversion&&0<AmCharts.IEversion&&(AmCharts.isModern=!1,AmCharts.isIE=!0);AmCharts.dx=0;AmCharts.dy=0;
if(document.addEventListener||window.opera)AmCharts.isNN=!0,AmCharts.isIE=!1,AmCharts.dx=.5,AmCharts.dy=.5;document.attachEvent&&(AmCharts.isNN=!1,AmCharts.isIE=!0,AmCharts.isModern||(AmCharts.dx=0,AmCharts.dy=0));window.chrome&&(AmCharts.chrome=!0);AmCharts.handleResize=function(){for(var a=AmCharts.charts,b=0;b<a.length;b++){var c=a[b];c&&c.div&&c.handleResize()}};AmCharts.handleMouseUp=function(a){for(var b=AmCharts.charts,c=0;c<b.length;c++){var d=b[c];d&&d.handleReleaseOutside(a)}};
AmCharts.handleMouseMove=function(a){for(var b=AmCharts.charts,c=0;c<b.length;c++){var d=b[c];d&&d.handleMouseMove(a)}};AmCharts.resetMouseOver=function(){for(var a=AmCharts.charts,b=0;b<a.length;b++){var c=a[b];c&&(c.mouseIsOver=!1)}};AmCharts.ready=function(a){AmCharts.onReadyArray.push(a)};AmCharts.handleLoad=function(){AmCharts.isReady=!0;for(var a=AmCharts.onReadyArray,b=0;b<a.length;b++){var c=a[b];isNaN(AmCharts.processDelay)?c():setTimeout(c,AmCharts.processDelay*b)}};
AmCharts.getUniqueId=function(){AmCharts.uid++;return"AmChartsEl-"+AmCharts.uid};AmCharts.isNN&&(document.addEventListener("mousemove",AmCharts.handleMouseMove,!0),window.addEventListener("resize",AmCharts.handleResize,!0),document.addEventListener("mouseup",AmCharts.handleMouseUp,!0),window.addEventListener("load",AmCharts.handleLoad,!0));
AmCharts.isIE&&(document.attachEvent("onmousemove",AmCharts.handleMouseMove),window.attachEvent("onresize",AmCharts.handleResize),document.attachEvent("onmouseup",AmCharts.handleMouseUp),window.attachEvent("onload",AmCharts.handleLoad));
AmCharts.clear=function(){var a=AmCharts.charts;if(a)for(var b=0;b<a.length;b++)a[b].clear();AmCharts.charts=null;AmCharts.isNN&&(document.removeEventListener("mousemove",AmCharts.handleMouseMove,!0),window.removeEventListener("resize",AmCharts.handleResize,!0),document.removeEventListener("mouseup",AmCharts.handleMouseUp,!0),window.removeEventListener("load",AmCharts.handleLoad,!0));AmCharts.isIE&&(document.detachEvent("onmousemove",AmCharts.handleMouseMove),window.detachEvent("onresize",AmCharts.handleResize),
document.detachEvent("onmouseup",AmCharts.handleMouseUp),window.detachEvent("onload",AmCharts.handleLoad))};
AmCharts.makeChart=function(a,b,c){var d=b.type,e=b.theme;AmCharts.isString(e)&&(e=AmCharts.themes[e],b.theme=e);var f;switch(d){case "serial":f=new AmCharts.AmSerialChart(e);break;case "xy":f=new AmCharts.AmXYChart(e);break;case "pie":f=new AmCharts.AmPieChart(e);break;case "radar":f=new AmCharts.AmRadarChart(e);break;case "gauge":f=new AmCharts.AmAngularGauge(e);break;case "funnel":f=new AmCharts.AmFunnelChart(e);break;case "map":f=new AmCharts.AmMap(e);break;case "stock":f=new AmCharts.AmStockChart(e)}AmCharts.extend(f,
b);AmCharts.isReady?isNaN(c)?f.write(a):setTimeout(function(){AmCharts.realWrite(f,a)},c):AmCharts.ready(function(){isNaN(c)?f.write(a):setTimeout(function(){AmCharts.realWrite(f,a)},c)});return f};AmCharts.realWrite=function(a,b){a.write(b)};AmCharts.toBoolean=function(a,b){if(void 0===a)return b;switch(String(a).toLowerCase()){case "true":case "yes":case "1":return!0;case "false":case "no":case "0":case null:return!1;default:return Boolean(a)}};AmCharts.removeFromArray=function(a,b){var c;for(c=a.length-1;0<=c;c--)a[c]==b&&a.splice(c,1)};AmCharts.getDecimals=function(a){var b=0;isNaN(a)||(a=String(a),-1!=a.indexOf("e-")?b=Number(a.split("-")[1]):-1!=a.indexOf(".")&&(b=a.split(".")[1].length));return b};
AmCharts.wrappedText=function(a,b,c,d,e,f,g,h,k){var l=AmCharts.text(a,b,c,d,e,f,g),m="\n";AmCharts.isModern||(m="<br>");if(10<k)return l;if(l){var n=l.getBBox();if(n.width>h){l.remove();for(var l=[],p=0;-1<(index=b.indexOf(" ",p));)l.push(index),p=index+1;for(var q=Math.round(b.length/2),r=1E3,s,p=0;p<l.length;p++){var v=Math.abs(l[p]-q);v<r&&(s=l[p],r=v)}if(isNaN(s)){h=Math.ceil(n.width/h);for(p=1;p<h;p++)s=Math.round(b.length/h*p),b=b.substr(0,s)+m+b.substr(s);return AmCharts.text(a,b,c,d,e,f,
g)}b=b.substr(0,s)+m+b.substr(s+1);return AmCharts.wrappedText(a,b,c,d,e,f,g,h,k+1)}return l}};AmCharts.getStyle=function(a,b){var c="";document.defaultView&&document.defaultView.getComputedStyle?c=document.defaultView.getComputedStyle(a,"").getPropertyValue(b):a.currentStyle&&(b=b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=a.currentStyle[b]);return c};AmCharts.removePx=function(a){if(void 0!=a)return Number(a.substring(0,a.length-2))};
AmCharts.getURL=function(a,b){if(a)if("_self"!=b&&b)if("_top"==b&&window.top)window.top.location.href=a;else if("_parent"==b&&window.parent)window.parent.location.href=a;else{var c=document.getElementsByName(b)[0];c?c.src=a:window.open(a)}else window.location.href=a};AmCharts.ifArray=function(a){return a&&0<a.length?!0:!1};AmCharts.callMethod=function(a,b){var c;for(c=0;c<b.length;c++){var d=b[c];if(d){if(d[a])d[a]();var e=d.length;if(0<e){var f;for(f=0;f<e;f++){var g=d[f];if(g&&g[a])g[a]()}}}}};
AmCharts.toNumber=function(a){return"number"==typeof a?a:Number(String(a).replace(/[^0-9\-.]+/g,""))};AmCharts.toColor=function(a){if(""!==a&&void 0!==a)if(-1!=a.indexOf(",")){a=a.split(",");var b;for(b=0;b<a.length;b++){var c=a[b].substring(a[b].length-6,a[b].length);a[b]="#"+c}}else a=a.substring(a.length-6,a.length),a="#"+a;return a};
AmCharts.toCoordinate=function(a,b,c){var d;void 0!==a&&(a=String(a),c&&c<b&&(b=c),d=Number(a),-1!=a.indexOf("!")&&(d=b-Number(a.substr(1))),-1!=a.indexOf("%")&&(d=b*Number(a.substr(0,a.length-1))/100));return d};AmCharts.fitToBounds=function(a,b,c){a<b&&(a=b);a>c&&(a=c);return a};AmCharts.isDefined=function(a){return void 0===a?!1:!0};AmCharts.stripNumbers=function(a){return a.replace(/[0-9]+/g,"")};AmCharts.roundTo=function(a,b){if(0>b)return a;var c=Math.pow(10,b);return Math.round(a*c)/c};
AmCharts.toFixed=function(a,b){var c=String(Math.round(a*Math.pow(10,b)));if(0<b){var d=c.length;if(d<b){var e;for(e=0;e<b-d;e++)c="0"+c}d=c.substring(0,c.length-b);""===d&&(d=0);return d+"."+c.substring(c.length-b,c.length)}return String(c)};
AmCharts.formatDuration=function(a,b,c,d,e,f){var g=AmCharts.intervals,h=f.decimalSeparator;if(a>=g[b].contains){var k=a-Math.floor(a/g[b].contains)*g[b].contains;"ss"==b&&(k=AmCharts.formatNumber(k,f),1==k.split(h)[0].length&&(k="0"+k));("mm"==b||"hh"==b)&&10>k&&(k="0"+k);c=k+""+d[b]+""+c;a=Math.floor(a/g[b].contains);b=g[b].nextInterval;return AmCharts.formatDuration(a,b,c,d,e,f)}"ss"==b&&(a=AmCharts.formatNumber(a,f),1==a.split(h)[0].length&&(a="0"+a));("mm"==b||"hh"==b)&&10>a&&(a="0"+a);c=a+""+
d[b]+""+c;if(g[e].count>g[b].count)for(a=g[b].count;a<g[e].count;a++)b=g[b].nextInterval,"ss"==b||"mm"==b||"hh"==b?c="00"+d[b]+""+c:"DD"==b&&(c="0"+d[b]+""+c);":"==c.charAt(c.length-1)&&(c=c.substring(0,c.length-1));return c};
AmCharts.formatNumber=function(a,b,c,d,e){a=AmCharts.roundTo(a,b.precision);isNaN(c)&&(c=b.precision);var f=b.decimalSeparator;b=b.thousandsSeparator;var g;g=0>a?"-":"";a=Math.abs(a);var h=String(a),k=!1;-1!=h.indexOf("e")&&(k=!0);0<=c&&!k&&(h=AmCharts.toFixed(a,c));var l="";if(k)l=h;else{var h=h.split("."),k=String(h[0]),m;for(m=k.length;0<=m;m-=3)l=m!=k.length?0!==m?k.substring(m-3,m)+b+l:k.substring(m-3,m)+l:k.substring(m-3,m);void 0!==h[1]&&(l=l+f+h[1]);void 0!==c&&0<c&&"0"!=l&&(l=AmCharts.addZeroes(l,
f,c))}l=g+l;""===g&&!0===d&&0!==a&&(l="+"+l);!0===e&&(l+="%");return l};AmCharts.addZeroes=function(a,b,c){a=a.split(b);void 0===a[1]&&0<c&&(a[1]="0");return a[1].length<c?(a[1]+="0",AmCharts.addZeroes(a[0]+b+a[1],b,c)):void 0!==a[1]?a[0]+b+a[1]:a[0]};
AmCharts.scientificToNormal=function(a){var b;a=String(a).split("e");var c;if("-"==a[1].substr(0,1)){b="0.";for(c=0;c<Math.abs(Number(a[1]))-1;c++)b+="0";b+=a[0].split(".").join("")}else{var d=0;b=a[0].split(".");b[1]&&(d=b[1].length);b=a[0].split(".").join("");for(c=0;c<Math.abs(Number(a[1]))-d;c++)b+="0"}return b};
AmCharts.toScientific=function(a,b){if(0===a)return"0";var c=Math.floor(Math.log(Math.abs(a))*Math.LOG10E);Math.pow(10,c);mantissa=String(mantissa).split(".").join(b);return String(mantissa)+"e"+c};AmCharts.randomColor=function(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6)};
AmCharts.hitTest=function(a,b,c){var d=!1,e=a.x,f=a.x+a.width,g=a.y,h=a.y+a.height,k=AmCharts.isInRectangle;d||(d=k(e,g,b));d||(d=k(e,h,b));d||(d=k(f,g,b));d||(d=k(f,h,b));d||!0===c||(d=AmCharts.hitTest(b,a,!0));return d};AmCharts.isInRectangle=function(a,b,c){return a>=c.x-5&&a<=c.x+c.width+5&&b>=c.y-5&&b<=c.y+c.height+5?!0:!1};AmCharts.isPercents=function(a){if(-1!=String(a).indexOf("%"))return!0};
AmCharts.findPosX=function(a){var b=a,c=a.offsetLeft;if(a.offsetParent){for(;a=a.offsetParent;)c+=a.offsetLeft;for(;(b=b.parentNode)&&b!=document.body;)c-=b.scrollLeft||0}return c};AmCharts.findPosY=function(a){var b=a,c=a.offsetTop;if(a.offsetParent){for(;a=a.offsetParent;)c+=a.offsetTop;for(;(b=b.parentNode)&&b!=document.body;)c-=b.scrollTop||0}return c};AmCharts.findIfFixed=function(a){if(a.offsetParent)for(;a=a.offsetParent;)if("fixed"==AmCharts.getStyle(a,"position"))return!0;return!1};
AmCharts.findIfAuto=function(a){return a.style&&"auto"==AmCharts.getStyle(a,"overflow")?!0:a.parentNode?AmCharts.findIfAuto(a.parentNode):!1};AmCharts.findScrollLeft=function(a,b){a.scrollLeft&&(b+=a.scrollLeft);return a.parentNode?AmCharts.findScrollLeft(a.parentNode,b):b};AmCharts.findScrollTop=function(a,b){a.scrollTop&&(b+=a.scrollTop);return a.parentNode?AmCharts.findScrollTop(a.parentNode,b):b};
AmCharts.formatValue=function(a,b,c,d,e,f,g,h){if(b){void 0===e&&(e="");var k;for(k=0;k<c.length;k++){var l=c[k],m=b[l];void 0!==m&&(m=f?AmCharts.addPrefix(m,h,g,d):AmCharts.formatNumber(m,d),a=a.replace(new RegExp("\\[\\["+e+""+l+"\\]\\]","g"),m))}}return a};AmCharts.formatDataContextValue=function(a,b){if(a){var c=a.match(/\[\[.*?\]\]/g),d;for(d=0;d<c.length;d++){var e=c[d],e=e.substr(2,e.length-4);void 0!==b[e]&&(a=a.replace(new RegExp("\\[\\["+e+"\\]\\]","g"),b[e]))}}return a};
AmCharts.massReplace=function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];void 0===d&&(d="");a=a.replace(c,d)}return a};AmCharts.cleanFromEmpty=function(a){return a.replace(/\[\[[^\]]*\]\]/g,"")};
AmCharts.addPrefix=function(a,b,c,d,e){var f=AmCharts.formatNumber(a,d),g="",h,k,l;if(0===a)return"0";0>a&&(g="-");a=Math.abs(a);if(1<a)for(h=b.length-1;-1<h;h--){if(a>=b[h].number&&(k=a/b[h].number,l=Number(d.precision),1>l&&(l=1),c=AmCharts.roundTo(k,l),l=AmCharts.formatNumber(c,{precision:-1,decimalSeparator:d.decimalSeparator,thousandsSeparator:d.thousandsSeparator}),!e||k==c)){f=g+""+l+""+b[h].prefix;break}}else for(h=0;h<c.length;h++)if(a<=c[h].number){k=a/c[h].number;l=Math.abs(Math.round(Math.log(k)*
Math.LOG10E));k=AmCharts.roundTo(k,l);f=g+""+k+""+c[h].prefix;break}return f};AmCharts.remove=function(a){a&&a.remove()};AmCharts.recommended=function(){var a="js";document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")||swfobject&&swfobject.hasFlashPlayerVersion("8")&&(a="flash");return a};AmCharts.getEffect=function(a){">"==a&&(a="easeOutSine");"<"==a&&(a="easeInSine");"elastic"==a&&(a="easeOutElastic");return a};
AmCharts.getObjById=function(a,b){var c,d;for(d=0;d<a.length;d++){var e=a[d];e.id==b&&(c=e)}return c};AmCharts.applyTheme=function(a,b,c){b||(b=AmCharts.theme);b&&b[c]&&AmCharts.extend(a,b[c])};AmCharts.isString=function(a){return"string"==typeof a?!0:!1};AmCharts.extend=function(a,b,c){for(var d in b)c?a.hasOwnProperty(d)||(a[d]=b[d]):a[d]=b[d];return a};
AmCharts.copyProperties=function(a,b){for(var c in a)a.hasOwnProperty(c)&&"events"!=c&&void 0!==a[c]&&"function"!=typeof a[c]&&"cname"!=c&&(b[c]=a[c])};AmCharts.processObject=function(a,b,c){!1===a instanceof b&&(a=AmCharts.extend(new b(c),a));return a};AmCharts.fixNewLines=function(a){var b=RegExp("\\n","g");a&&(a=a.replace(b,"<br />"));return a};AmCharts.fixBrakes=function(a){if(AmCharts.isModern){var b=RegExp("<br>","g");a&&(a=a.replace(b,"\n"))}else a=AmCharts.fixNewLines(a);return a};
AmCharts.deleteObject=function(a,b){if(a){if(void 0===b||null===b)b=20;if(0!==b)if("[object Array]"===Object.prototype.toString.call(a))for(var c=0;c<a.length;c++)AmCharts.deleteObject(a[c],b-1),a[c]=null;else if(a&&!a.tagName)try{for(c in a)a[c]&&("object"==typeof a[c]&&AmCharts.deleteObject(a[c],b-1),"function"!=typeof a[c]&&(a[c]=null))}catch(d){}}};
AmCharts.bounce=function(a,b,c,d,e){return(b/=e)<1/2.75?7.5625*d*b*b+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c};AmCharts.easeInSine=function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c};AmCharts.easeOutSine=function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c};
AmCharts.easeOutElastic=function(a,b,c,d,e){a=1.70158;var f=0,g=d;if(0===b)return c;if(1==(b/=e))return c+d;f||(f=.3*e);g<Math.abs(d)?(g=d,a=f/4):a=f/(2*Math.PI)*Math.asin(d/g);return g*Math.pow(2,-10*b)*Math.sin(2*(b*e-a)*Math.PI/f)+d+c};AmCharts.AxisBase=AmCharts.Class({construct:function(a){this.createEvents("clickItem","rollOverItem","rollOutItem");this.viY=this.viX=this.y=this.x=this.dy=this.dx=0;this.axisThickness=1;this.axisColor="#000000";this.axisAlpha=1;this.gridCount=this.tickLength=5;this.gridAlpha=.15;this.gridThickness=1;this.gridColor="#000000";this.dashLength=0;this.labelFrequency=1;this.showLastLabel=this.showFirstLabel=!0;this.fillColor="#FFFFFF";this.fillAlpha=0;this.labelsEnabled=!0;this.labelRotation=0;this.autoGridCount=
!0;this.valueRollOverColor="#CC0000";this.offset=0;this.guides=[];this.visible=!0;this.counter=0;this.guides=[];this.ignoreAxisWidth=this.inside=!1;this.minHorizontalGap=75;this.minVerticalGap=35;this.titleBold=!0;this.minorGridEnabled=!1;this.minorGridAlpha=.07;this.autoWrap=!1;this.titleAlign="middle";this.labelOffset=0;AmCharts.applyTheme(this,a,"AxisBase")},zoom:function(a,b){this.start=a;this.end=b;this.dataChanged=!0;this.draw()},fixAxisPosition:function(){var a=this.position;"H"==this.orientation?
("left"==a&&(a="bottom"),"right"==a&&(a="top")):("bottom"==a&&(a="left"),"top"==a&&(a="right"));this.position=a},draw:function(){var a=this.chart;this.allLabels=[];this.counter=0;this.destroy();this.fixAxisPosition();this.labels=[];var b=a.container,c=b.set();a.gridSet.push(c);this.set=c;b=b.set();a.axesLabelsSet.push(b);this.labelsSet=b;this.axisLine=new this.axisRenderer(this);this.autoGridCount?("V"==this.orientation?(a=this.height/this.minVerticalGap,3>a&&(a=3)):a=this.width/this.minHorizontalGap,
this.gridCountR=Math.max(a,1)):this.gridCountR=this.gridCount;this.axisWidth=this.axisLine.axisWidth;this.addTitle()},setOrientation:function(a){this.orientation=a?"H":"V"},addTitle:function(){var a=this.title;if(a){var b=this.chart,c=this.titleColor;void 0===c&&(c=b.color);var d=this.titleFontSize;isNaN(d)&&(d=b.fontSize+1);this.titleLabel=AmCharts.text(b.container,a,c,b.fontFamily,d,this.titleAlign,this.titleBold)}},positionTitle:function(){var a=this.titleLabel;if(a){var b,c,d=this.labelsSet,e=
{};0<d.length()?e=d.getBBox():(e.x=0,e.y=0,e.width=this.viW,e.height=this.viH);d.push(a);var d=e.x,f=e.y;AmCharts.VML&&(this.rotate?d-=this.x:f-=this.y);var g=e.width,e=e.height,h=this.viW,k=this.viH,l=0,m=a.getBBox().height/2,n=this.inside,p=this.titleAlign;switch(this.position){case "top":b="left"==p?-1:"right"==p?h:h/2;c=f-10-m;break;case "bottom":b="left"==p?-1:"right"==p?h:h/2;c=f+e+10+m;break;case "left":b=d-10-m;n&&(b-=5);c="left"==p?k+1:"right"==p?-1:k/2;l=-90;break;case "right":b=d+g+10+
m-3,n&&(b+=7),c="left"==p?k+2:"right"==p?-2:k/2,l=-90}this.marginsChanged?(a.translate(b,c),this.tx=b,this.ty=c):a.translate(this.tx,this.ty);this.marginsChanged=!1;0!==l&&a.rotate(l)}},pushAxisItem:function(a,b){var c=this,d=a.graphics();0<d.length()&&(b?c.labelsSet.push(d):c.set.push(d));if(d=a.getLabel())this.labelsSet.push(d),d.click(function(b){c.handleMouse(b,a,"clickItem")}).mouseover(function(b){c.handleMouse(b,a,"rollOverItem")}).mouseout(function(b){c.handleMouse(b,a,"rollOutItem")})},handleMouse:function(a,
b,c){this.fire(c,{type:c,value:b.value,serialDataItem:b.serialDataItem,axis:this,target:b.label,chart:this.chart,event:a})},addGuide:function(a){for(var b=this.guides,c=!1,d=0;d<b.length;d++)b[d]==a&&(c=!0);c||b.push(a)},removeGuide:function(a){var b=this.guides,c;for(c=0;c<b.length;c++)b[c]==a&&b.splice(c,1)},handleGuideOver:function(a){clearTimeout(this.chart.hoverInt);var b=a.graphics.getBBox(),c=b.x+b.width/2,b=b.y+b.height/2,d=a.fillColor;void 0===d&&(d=a.lineColor);this.chart.showBalloon(a.balloonText,
d,!0,c,b)},handleGuideOut:function(a){this.chart.hideBalloon()},addEventListeners:function(a,b){var c=this;a.mouseover(function(){c.handleGuideOver(b)});a.mouseout(function(){c.handleGuideOut(b)})},getBBox:function(){var a=this.labelsSet.getBBox();AmCharts.VML||(a={x:a.x+this.x,y:a.y+this.y,width:a.width,height:a.height});return a},destroy:function(){AmCharts.remove(this.set);AmCharts.remove(this.labelsSet);var a=this.axisLine;a&&AmCharts.remove(a.set);AmCharts.remove(this.grid0)}});AmCharts.ValueAxis=AmCharts.Class({inherits:AmCharts.AxisBase,construct:function(a){this.cname="ValueAxis";this.createEvents("axisChanged","logarithmicAxisFailed","axisSelfZoomed","axisZoomed");AmCharts.ValueAxis.base.construct.call(this,a);this.dataChanged=!0;this.stackType="none";this.position="left";this.unitPosition="right";this.recalculateToPercents=this.includeHidden=this.includeGuidesInMinMax=this.integersOnly=!1;this.durationUnits={DD:"d. ",hh:":",mm:":",ss:""};this.scrollbar=!1;this.baseValue=
0;this.radarCategoriesEnabled=!0;this.gridType="polygons";this.useScientificNotation=!1;this.axisTitleOffset=10;this.minMaxMultiplier=1;this.logGridLimit=2;AmCharts.applyTheme(this,a,this.cname)},updateData:function(){0>=this.gridCountR&&(this.gridCountR=1);this.totals=[];this.data=this.chart.chartData;var a=this.chart;"xy"!=a.type&&(this.stackGraphs("smoothedLine"),this.stackGraphs("line"),this.stackGraphs("column"),this.stackGraphs("step"));this.recalculateToPercents&&this.recalculate();this.synchronizationMultiplier&&
this.synchronizeWith?(AmCharts.isString(this.synchronizeWith)&&(this.synchronizeWith=a.getValueAxisById(this.synchronizeWith)),this.synchronizeWith&&(this.synchronizeWithAxis(this.synchronizeWith),this.foundGraphs=!0)):(this.foundGraphs=!1,this.getMinMax())},draw:function(){AmCharts.ValueAxis.base.draw.call(this);var a=this.chart,b=this.set;"duration"==this.type&&(this.duration="ss");!0===this.dataChanged&&(this.updateData(),this.dataChanged=!1);if(this.logarithmic&&(0>=this.getMin(0,this.data.length-
1)||0>=this.minimum))this.fire("logarithmicAxisFailed",{type:"logarithmicAxisFailed",chart:a});else{this.grid0=null;var c,d,e=a.dx,f=a.dy,g=!1,h=this.logarithmic;if(isNaN(this.min)||isNaN(this.max)||!this.foundGraphs||Infinity==this.min||-Infinity==this.max)g=!0;else{var k=this.labelFrequency,l=this.showFirstLabel,m=this.showLastLabel,n=1,p=0,q=Math.round((this.max-this.min)/this.step)+1,r;!0===h?(r=Math.log(this.max)*Math.LOG10E-Math.log(this.minReal)*Math.LOG10E,this.stepWidth=this.axisWidth/r,
r>this.logGridLimit&&(q=Math.ceil(Math.log(this.max)*Math.LOG10E)+1,p=Math.round(Math.log(this.minReal)*Math.LOG10E),q>this.gridCountR&&(n=Math.ceil(q/this.gridCountR)))):this.stepWidth=this.axisWidth/(this.max-this.min);var s=0;1>this.step&&-1<this.step&&(s=AmCharts.getDecimals(this.step));this.integersOnly&&(s=0);s>this.maxDecCount&&(s=this.maxDecCount);var v=this.precision;isNaN(v)||(s=v);this.max=AmCharts.roundTo(this.max,this.maxDecCount);this.min=AmCharts.roundTo(this.min,this.maxDecCount);
var w={};w.precision=s;w.decimalSeparator=a.nf.decimalSeparator;w.thousandsSeparator=a.nf.thousandsSeparator;this.numberFormatter=w;var t,u=this.guides,y=u.length;if(0<y){c=this.fillAlpha;for(d=this.fillAlpha=0;d<y;d++){var E=u[d],A=NaN,z=E.above;isNaN(E.toValue)||(A=this.getCoordinate(E.toValue),t=new this.axisItemRenderer(this,A,"",!0,NaN,NaN,E),this.pushAxisItem(t,z));var K=NaN;isNaN(E.value)||(K=this.getCoordinate(E.value),t=new this.axisItemRenderer(this,K,E.label,!0,NaN,(A-K)/2,E),this.pushAxisItem(t,
z));isNaN(A-K)||(t=new this.guideFillRenderer(this,K,A,E),this.pushAxisItem(t,z),t=t.graphics(),E.graphics=t,E.balloonText&&this.addEventListeners(t,E))}this.fillAlpha=c}u=!1;for(d=p;d<q;d+=n)y=AmCharts.roundTo(this.step*d+this.min,s),-1!=String(y).indexOf("e")&&(u=!0,String(y).split("e"));this.duration&&(this.maxInterval=AmCharts.getMaxInterval(this.max,this.duration));var s=this.step,I,y=this.minorGridAlpha;this.minorGridEnabled&&(I=this.getMinorGridStep(s,this.stepWidth*s));for(d=p;d<q;d+=n)if(p=
s*d+this.min,h&&this.max-this.min>5*this.min&&(p-=this.min),p=AmCharts.roundTo(p,this.maxDecCount+1),!this.integersOnly||Math.round(p)==p)if(isNaN(v)||Number(AmCharts.toFixed(p,v))==p){!0===h&&(0===p&&(p=this.minReal),r>this.logGridLimit&&(p=Math.pow(10,d)),u=-1!=String(p).indexOf("e")?!0:!1);this.useScientificNotation&&(u=!0);this.usePrefixes&&(u=!1);u?(t=-1==String(p).indexOf("e")?p.toExponential(15):String(p),c=t.split("e"),t=Number(c[0]),c=Number(c[1]),t=AmCharts.roundTo(t,14),10==t&&(t=1,c+=
1),t=t+"e"+c,0===p&&(t="0"),1==p&&(t="1")):(h&&(t=String(p).split("."),t[1]?(w.precision=t[1].length,0>d&&(w.precision=Math.abs(d))):w.precision=-1),t=this.usePrefixes?AmCharts.addPrefix(p,a.prefixesOfBigNumbers,a.prefixesOfSmallNumbers,w,!0):AmCharts.formatNumber(p,w,w.precision));this.duration&&(t=AmCharts.formatDuration(p,this.duration,"",this.durationUnits,this.maxInterval,w));this.recalculateToPercents?t+="%":(c=this.unit)&&(t="left"==this.unitPosition?c+t:t+c);Math.round(d/k)!=d/k&&(t=void 0);
if(0===d&&!l||d==q-1&&!m)t=" ";c=this.getCoordinate(p);this.labelFunction&&(t=this.labelFunction(p,t,this).toString());t=new this.axisItemRenderer(this,c,t,void 0,void 0,void 0,void 0,this.boldLabels);this.pushAxisItem(t);if(p==this.baseValue&&"radar"!=a.type){var F,H,z=this.viW,A=this.viH;t=this.viX;E=this.viY;"H"==this.orientation?0<=c&&c<=z+1&&(F=[c,c,c+e],H=[A,0,f]):0<=c&&c<=A+1&&(F=[0,z,z+e],H=[c,c,c+f]);F&&(c=AmCharts.fitToBounds(2*this.gridAlpha,0,1),c=AmCharts.line(a.container,F,H,this.gridColor,
c,1,this.dashLength),c.translate(t,E),this.grid0=c,a.axesSet.push(c),c.toBack())}if(!isNaN(I)&&0<y&&d<q-1){t=this.gridAlpha;this.gridAlpha=this.minorGridAlpha;for(c=1;c<s/I;c++)E=this.getCoordinate(p+I*c),E=new this.axisItemRenderer(this,E,"",!1,0,0,!1,!1,0,!0),this.pushAxisItem(E);this.gridAlpha=t}}d=this.baseValue;this.min>this.baseValue&&this.max>this.baseValue&&(d=this.min);this.min<this.baseValue&&this.max<this.baseValue&&(d=this.max);h&&d<this.minReal&&(d=this.minReal);this.baseCoord=this.getCoordinate(d);
d={type:"axisChanged",target:this,chart:a};d.min=h?this.minReal:this.min;d.max=this.max;this.fire("axisChanged",d);this.axisCreated=!0}h=this.axisLine.set;d=this.labelsSet;this.positionTitle();"radar"!=a.type?(a=this.viX,e=this.viY,b.translate(a,e),d.translate(a,e)):h.toFront();!this.visible||g?(b.hide(),h.hide(),d.hide()):(b.show(),h.show(),d.show());this.axisY=this.y-this.viY;this.axisX=this.x-this.viX}},getMinorGridStep:function(a,b){var c=[5,4,2];60>b&&c.shift();for(var d=Math.floor(Math.log(Math.abs(a))*
Math.LOG10E),e=0;e<c.length;e++){var f=a/c[e],g=Math.floor(Math.log(Math.abs(f))*Math.LOG10E);if(!(0<Math.abs(d-g)))if(1>a){if(g=Math.pow(10,-g)*f,g==Math.round(g))return f}else if(f==Math.round(f))return f}},stackGraphs:function(a){var b=this.stackType;"stacked"==b&&(b="regular");"line"==b&&(b="none");"100% stacked"==b&&(b="100%");this.stackType=b;var c=[],d=[],e=[],f=[],g,h=this.chart.graphs,k,l,m,n,p=this.baseValue,q=!1;if("line"==a||"step"==a||"smoothedLine"==a)q=!0;if(q&&("regular"==b||"100%"==
b))for(n=0;n<h.length;n++)m=h[n],m.hidden||(l=m.type,m.chart==this.chart&&m.valueAxis==this&&a==l&&m.stackable&&(k&&(m.stackGraph=k),k=m));for(k=this.start;k<=this.end;k++){var r=0;for(n=0;n<h.length;n++)if(m=h[n],m.hidden)m.newStack&&(e[k]=NaN,d[k]=NaN);else if(l=m.type,m.chart==this.chart&&m.valueAxis==this&&a==l&&m.stackable)if(l=this.data[k].axes[this.id].graphs[m.id],g=l.values.value,isNaN(g))m.newStack&&(e[k]=NaN,d[k]=NaN);else{var s=AmCharts.getDecimals(g);r<s&&(r=s);isNaN(f[k])?f[k]=Math.abs(g):
f[k]+=Math.abs(g);f[k]=AmCharts.roundTo(f[k],r);s=m.fillToGraph;q&&s&&(s=this.data[k].axes[this.id].graphs[s.id])&&(l.values.open=s.values.value);"regular"==b&&(q&&(isNaN(c[k])?(c[k]=g,l.values.close=g,l.values.open=this.baseValue):(isNaN(g)?l.values.close=c[k]:l.values.close=g+c[k],l.values.open=c[k],c[k]=l.values.close)),"column"==a&&(m.newStack&&(e[k]=NaN,d[k]=NaN),l.values.close=g,0>g?(l.values.close=g,isNaN(d[k])?l.values.open=p:(l.values.close+=d[k],l.values.open=d[k]),d[k]=l.values.close):
(l.values.close=g,isNaN(e[k])?l.values.open=p:(l.values.close+=e[k],l.values.open=e[k]),e[k]=l.values.close)))}}for(k=this.start;k<=this.end;k++)for(n=0;n<h.length;n++)(m=h[n],m.hidden)?m.newStack&&(e[k]=NaN,d[k]=NaN):(l=m.type,m.chart==this.chart&&m.valueAxis==this&&a==l&&m.stackable&&(l=this.data[k].axes[this.id].graphs[m.id],g=l.values.value,isNaN(g)||(c=g/f[k]*100,l.values.percents=c,l.values.total=f[k],m.newStack&&(e[k]=NaN,d[k]=NaN),"100%"==b&&(isNaN(d[k])&&(d[k]=0),isNaN(e[k])&&(e[k]=0),0>
c?(l.values.close=AmCharts.fitToBounds(c+d[k],-100,100),l.values.open=d[k],d[k]=l.values.close):(l.values.close=AmCharts.fitToBounds(c+e[k],-100,100),l.values.open=e[k],e[k]=l.values.close)))))},recalculate:function(){var a=this.chart,b=a.graphs,c;for(c=0;c<b.length;c++){var d=b[c];if(d.valueAxis==this){var e="value";if("candlestick"==d.type||"ohlc"==d.type)e="open";var f,g,h=this.end+2,h=AmCharts.fitToBounds(this.end+1,0,this.data.length-1),k=this.start;0<k&&k--;var l;g=this.start;d.compareFromStart&&
(g=0);if(!isNaN(a.startTime)&&(l=a.categoryAxis)){minDuration=l.minDuration();var m=new Date(a.startTime+minDuration/2),n=AmCharts.resetDateToMin(new Date(a.startTime),l.minPeriod).getTime();AmCharts.resetDateToMin(new Date(m),l.minPeriod).getTime()>n&&g++}if(l=a.recalculateFromDate)a.dataDateFormat&&(l=AmCharts.stringToDate(l,a.dataDateFormat)),g=a.getClosestIndex(a.chartData,"time",l.getTime(),!0,0,a.chartData.length),h=a.chartData.length-1;for(l=g;l<=h&&(g=this.data[l].axes[this.id].graphs[d.id],
f=g.values[e],isNaN(f));l++);this.recBaseValue=f;for(e=k;e<=h;e++){g=this.data[e].axes[this.id].graphs[d.id];g.percents={};var k=g.values,p;for(p in k)g.percents[p]="percents"!=p?k[p]/f*100-100:k[p]}}}},getMinMax:function(){var a=!1,b=this.chart,c=b.graphs,d;for(d=0;d<c.length;d++){var e=c[d].type;("line"==e||"step"==e||"smoothedLine"==e)&&this.expandMinMax&&(a=!0)}a&&(0<this.start&&this.start--,this.end<this.data.length-1&&this.end++);"serial"==b.type&&(!0!==b.categoryAxis.parseDates||a||this.end<
this.data.length-1&&this.end++);a=this.minMaxMultiplier;this.min=this.getMin(this.start,this.end);this.max=this.getMax();a=(this.max-this.min)*(a-1);this.min-=a;this.max+=a;a=this.guides.length;if(this.includeGuidesInMinMax&&0<a)for(b=0;b<a;b++)c=this.guides[b],c.toValue<this.min&&(this.min=c.toValue),c.value<this.min&&(this.min=c.value),c.toValue>this.max&&(this.max=c.toValue),c.value>this.max&&(this.max=c.value);isNaN(this.minimum)||(this.min=this.minimum);isNaN(this.maximum)||(this.max=this.maximum);
this.min>this.max&&(a=this.max,this.max=this.min,this.min=a);isNaN(this.minTemp)||(this.min=this.minTemp);isNaN(this.maxTemp)||(this.max=this.maxTemp);this.minReal=this.min;this.maxReal=this.max;0===this.min&&0===this.max&&(this.max=9);this.min>this.max&&(this.min=this.max-1);a=this.min;b=this.max;c=this.max-this.min;d=0===c?Math.pow(10,Math.floor(Math.log(Math.abs(this.max))*Math.LOG10E))/10:Math.pow(10,Math.floor(Math.log(Math.abs(c))*Math.LOG10E))/10;isNaN(this.maximum)&&isNaN(this.maxTemp)&&(this.max=
Math.ceil(this.max/d)*d+d);isNaN(this.minimum)&&isNaN(this.minTemp)&&(this.min=Math.floor(this.min/d)*d-d);0>this.min&&0<=a&&(this.min=0);0<this.max&&0>=b&&(this.max=0);"100%"==this.stackType&&(this.min=0>this.min?-100:0,this.max=0>this.max?0:100);c=this.max-this.min;d=Math.pow(10,Math.floor(Math.log(Math.abs(c))*Math.LOG10E))/10;this.step=Math.ceil(c/this.gridCountR/d)*d;c=Math.pow(10,Math.floor(Math.log(Math.abs(this.step))*Math.LOG10E));c=this.fixStepE(c);d=Math.ceil(this.step/c);5<d&&(d=10);5>=
d&&2<d&&(d=5);this.step=Math.ceil(this.step/(c*d))*c*d;1>c?(this.maxDecCount=Math.abs(Math.log(Math.abs(c))*Math.LOG10E),this.maxDecCount=Math.round(this.maxDecCount),this.step=AmCharts.roundTo(this.step,this.maxDecCount+1)):this.maxDecCount=0;this.min=this.step*Math.floor(this.min/this.step);this.max=this.step*Math.ceil(this.max/this.step);0>this.min&&0<=a&&(this.min=0);0<this.max&&0>=b&&(this.max=0);1<this.minReal&&1<this.max-this.minReal&&(this.minReal=Math.floor(this.minReal));c=Math.pow(10,Math.floor(Math.log(Math.abs(this.minReal))*
Math.LOG10E));0===this.min&&(this.minReal=c);0===this.min&&1<this.minReal&&(this.minReal=1);0<this.min&&0<this.minReal-this.step&&(this.minReal=this.min+this.step<this.minReal?this.min+this.step:this.min);c=Math.log(b)*Math.LOG10E-Math.log(a)*Math.LOG10E;this.logarithmic&&(2<c?(this.minReal=this.min=Math.pow(10,Math.floor(Math.log(Math.abs(a))*Math.LOG10E)),this.max=Math.pow(10,Math.ceil(Math.log(Math.abs(b))*Math.LOG10E))):(b=Math.pow(10,Math.floor(Math.log(Math.abs(this.min))*Math.LOG10E))/10,a=
Math.pow(10,Math.floor(Math.log(Math.abs(a))*Math.LOG10E))/10,b<a&&(this.minReal=this.min=10*a)))},fixStepE:function(a){a=a.toExponential(0).split("e");var b=Number(a[1]);9==Number(a[0])&&b++;return this.generateNumber(1,b)},generateNumber:function(a,b){var c="",d;d=0>b?Math.abs(b)-1:Math.abs(b);var e;for(e=0;e<d;e++)c+="0";return 0>b?Number("0."+c+String(a)):Number(String(a)+c)},getMin:function(a,b){var c,d;for(d=a;d<=b;d++){var e=this.data[d].axes[this.id].graphs,f;for(f in e)if(e.hasOwnProperty(f)){var g=
this.chart.getGraphById(f);if(g.includeInMinMax&&(!g.hidden||this.includeHidden)){isNaN(c)&&(c=Infinity);this.foundGraphs=!0;g=e[f].values;this.recalculateToPercents&&(g=e[f].percents);var h;if(this.minMaxField)h=g[this.minMaxField],h<c&&(c=h);else for(var k in g)g.hasOwnProperty(k)&&"percents"!=k&&"total"!=k&&(h=g[k],h<c&&(c=h))}}}return c},getMax:function(){var a,b;for(b=this.start;b<=this.end;b++){var c=this.data[b].axes[this.id].graphs,d;for(d in c)if(c.hasOwnProperty(d)){var e=this.chart.getGraphById(d);
if(e.includeInMinMax&&(!e.hidden||this.includeHidden)){isNaN(a)&&(a=-Infinity);this.foundGraphs=!0;e=c[d].values;this.recalculateToPercents&&(e=c[d].percents);var f;if(this.minMaxField)f=e[this.minMaxField],f>a&&(a=f);else for(var g in e)e.hasOwnProperty(g)&&"percents"!=g&&"total"!=g&&(f=e[g],f>a&&(a=f))}}}return a},dispatchZoomEvent:function(a,b){var c={type:"axisZoomed",startValue:a,endValue:b,target:this,chart:this.chart};this.fire(c.type,c)},zoomToValues:function(a,b){if(b<a){var c=b;b=a;a=c}a<
this.min&&(a=this.min);b>this.max&&(b=this.max);c={type:"axisSelfZoomed"};c.chart=this.chart;c.valueAxis=this;c.multiplier=this.axisWidth/Math.abs(this.getCoordinate(b)-this.getCoordinate(a));c.position="V"==this.orientation?this.reversed?this.getCoordinate(a):this.getCoordinate(b):this.reversed?this.getCoordinate(b):this.getCoordinate(a);this.fire(c.type,c)},coordinateToValue:function(a){if(isNaN(a))return NaN;var b=this.axisWidth,c=this.stepWidth,d=this.reversed,e=this.rotate,f=this.min,g=this.minReal;
return!0===this.logarithmic?Math.pow(10,(e?!0===d?(b-a)/c:a/c:!0===d?a/c:(b-a)/c)+Math.log(g)*Math.LOG10E):!0===d?e?f-(a-b)/c:a/c+f:e?a/c+f:f-(a-b)/c},getCoordinate:function(a){if(isNaN(a))return NaN;var b=this.rotate,c=this.reversed,d=this.axisWidth,e=this.stepWidth,f=this.min,g=this.minReal;!0===this.logarithmic?(a=Math.log(a)*Math.LOG10E-Math.log(g)*Math.LOG10E,b=b?!0===c?d-e*a:e*a:!0===c?e*a:d-e*a):b=!0===c?b?d-e*(a-f):e*(a-f):b?e*(a-f):d-e*(a-f);b=this.rotate?b+(this.x-this.viX):b+(this.y-this.viY);
1E7<Math.abs(b)&&(b=1E7*(b/Math.abs(b)));return Math.round(b)},synchronizeWithAxis:function(a){this.synchronizeWith=a;this.listenTo(this.synchronizeWith,"axisChanged",this.handleSynchronization)},handleSynchronization:function(a){var b=this.synchronizeWith;a=b.min;var c=b.max,b=b.step,d=this.synchronizationMultiplier;d&&(this.min=a*d,this.max=c*d,this.step=b*d,a=Math.pow(10,Math.floor(Math.log(Math.abs(this.step))*Math.LOG10E)),a=Math.abs(Math.log(Math.abs(a))*Math.LOG10E),this.maxDecCount=a=Math.round(a),
this.draw())}});AmCharts.RecAxis=AmCharts.Class({construct:function(a){var b=a.chart,c=a.axisThickness,d=a.axisColor,e=a.axisAlpha,f=a.offset,g=a.dx,h=a.dy,k=a.viX,l=a.viY,m=a.viH,n=a.viW,p=b.container;"H"==a.orientation?(d=AmCharts.line(p,[0,n],[0,0],d,e,c),this.axisWidth=a.width,"bottom"==a.position?(a=c/2+f+m+l-1,c=k):(a=-c/2-f+l+h,c=g+k)):(this.axisWidth=a.height,"right"==a.position?(d=AmCharts.line(p,[0,0,-g],[0,m,m-h],d,e,c),a=l+h,c=c/2+f+g+n+k-1):(d=AmCharts.line(p,[0,0],[0,m],d,e,c),a=l,c=-c/2-f+k));d.translate(c,
a);b.axesSet.push(d);this.set=d}});AmCharts.RecItem=AmCharts.Class({construct:function(a,b,c,d,e,f,g,h,k,l,m){b=Math.round(b);this.value=c;void 0==c&&(c="");k||(k=0);void 0==d&&(d=!0);var n=a.chart.fontFamily,p=a.fontSize;void 0==p&&(p=a.chart.fontSize);var q=a.color;void 0==q&&(q=a.chart.color);void 0!==m&&(q=m);var r=a.chart.container,s=r.set();this.set=s;var v=a.axisThickness,w=a.axisColor,t=a.axisAlpha,u=a.tickLength,y=a.gridAlpha,E=a.gridThickness,A=a.gridColor,z=a.dashLength,K=a.fillColor,I=a.fillAlpha,F=a.labelsEnabled;m=a.labelRotation;
var H=a.counter,L=a.inside,ha=a.labelOffset,ba=a.dx,$=a.dy,Ra=a.orientation,na=a.position,ta=a.previousCoord,V=a.viH,X=a.viW,Z=a.offset,oa,R;g?(F=!0,isNaN(g.tickLength)||(u=g.tickLength),void 0!=g.lineColor&&(A=g.lineColor),void 0!=g.color&&(q=g.color),isNaN(g.lineAlpha)||(y=g.lineAlpha),isNaN(g.dashLength)||(z=g.dashLength),isNaN(g.lineThickness)||(E=g.lineThickness),!0===g.inside&&(L=!0),isNaN(g.labelRotation)||(m=g.labelRotation),isNaN(g.fontSize)||(p=g.fontSize),g.position&&(na=g.position),void 0!==
g.boldLabel&&(h=g.boldLabel),isNaN(g.labelOffset)||(ha=g.labelOffset)):""===c&&(u=0);R="start";e&&(R="middle");var Y=m*Math.PI/180,qa,G=0,B=0,W=0,ca=qa=0,ja=0;"V"==Ra&&(m=0);var x;F&&(x=a.autoWrap&&0===m?AmCharts.wrappedText(r,c,q,n,p,R,h,e,0):AmCharts.text(r,c,q,n,p,R,h),R=x.getBBox(),ca=R.width,ja=R.height);if("H"==Ra){if(0<=b&&b<=X+1&&(0<u&&0<t&&b+k<=X+1&&(oa=AmCharts.line(r,[b+k,b+k],[0,u],w,t,E),s.push(oa)),0<y&&(R=AmCharts.line(r,[b,b+ba,b+ba],[V,V+$,$],A,y,E,z),s.push(R))),B=0,G=b,g&&90==m&&
L&&(G-=p),!1===d?(R="start",B="bottom"==na?L?B+u:B-u:L?B-u:B+u,G+=3,e&&(G+=e/2-3,R="middle"),0<m&&(R="middle")):R="middle",1==H&&0<I&&!g&&!l&&ta<X&&(d=AmCharts.fitToBounds(b,0,X),ta=AmCharts.fitToBounds(ta,0,X),qa=d-ta,0<qa&&(fill=AmCharts.rect(r,qa,a.height,K,I),fill.translate(d-qa+ba,$),s.push(fill))),"bottom"==na?(B+=V+p/2+Z,L?(0<m?(B=V-ca/2*Math.sin(Y)-u-3,G+=ca/2*Math.cos(Y)-4+2):0>m?(B=V+ca*Math.sin(Y)-u-3+2,G+=-ca*Math.cos(Y)-ja*Math.sin(Y)-4):B-=u+p+3+3,B-=ha):(0<m?(B=V+ca/2*Math.sin(Y)+u+
3,G-=ca/2*Math.cos(Y)):0>m?(B=V+u+3-ca/2*Math.sin(Y)+2,G+=ca/2*Math.cos(Y)):B+=u+v+3+3,B+=ha)):(B+=$+p/2-Z,G+=ba,L?(0<m?(B=ca/2*Math.sin(Y)+u+3,G-=ca/2*Math.cos(Y)):B+=u+3,B+=ha):(0<m?(B=-(ca/2)*Math.sin(Y)-u-6,G+=ca/2*Math.cos(Y)):B-=u+p+3+v+3,B-=ha)),"bottom"==na?qa=(L?V-u-1:V+v-1)+Z:(W=ba,qa=(L?$:$-u-v+1)-Z),f&&(G+=f),f=G,0<m&&(f+=ca/2*Math.cos(Y)),x&&(p=0,L&&(p=ca/2*Math.cos(Y)),f+p>X+2||0>f))x.remove(),x=null}else{0<=b&&b<=V+1&&(0<u&&0<t&&b+k<=V+1&&(oa=AmCharts.line(r,[0,u],[b+k,b+k],w,t,E),
s.push(oa)),0<y&&(R=AmCharts.line(r,[0,ba,X+ba],[b,b+$,b+$],A,y,E,z),s.push(R)));R="end";if(!0===L&&"left"==na||!1===L&&"right"==na)R="start";B=b-p/2;1==H&&0<I&&!g&&!l&&(d=AmCharts.fitToBounds(b,0,V),ta=AmCharts.fitToBounds(ta,0,V),Y=d-ta,fill=AmCharts.polygon(r,[0,a.width,a.width,0],[0,0,Y,Y],K,I),fill.translate(ba,d-Y+$),s.push(fill));B+=p/2;"right"==na?(G+=ba+X+Z,B+=$,L?(f||(B-=p/2+3),G=G-(u+4)-ha):(G+=u+4+v,B-=2,G+=ha)):L?(G+=u+4-Z,f||(B-=p/2+3),g&&(G+=ba,B+=$),G+=ha):(G+=-u-v-4-2-Z,B-=2,G-=ha);
oa&&("right"==na?(W+=ba+Z+X,qa+=$,W=L?W-v:W+v):(W-=Z,L||(W-=u+v)));f&&(B+=f);L=-3;"right"==na&&(L+=$);x&&(B>V+1||B<L)&&(x.remove(),x=null)}oa&&oa.translate(W,qa);!1===a.visible&&(oa&&oa.remove(),x&&(x.remove(),x=null));x&&(x.attr({"text-anchor":R}),x.translate(G,B),0!==m&&x.rotate(-m,a.chart.backgroundColor),a.allLabels.push(x)," "!=c&&(this.label=x));l||(a.counter=0===H?1:0,a.previousCoord=b);0===this.set.node.childNodes.length&&this.set.remove()},graphics:function(){return this.set},getLabel:function(){return this.label}});AmCharts.RecFill=AmCharts.Class({construct:function(a,b,c,d){var e=a.dx,f=a.dy,g=a.orientation,h=0;if(c<b){var k=b;b=c;c=k}var l=d.fillAlpha;isNaN(l)&&(l=0);k=a.chart.container;d=d.fillColor;"V"==g?(b=AmCharts.fitToBounds(b,0,a.viH),c=AmCharts.fitToBounds(c,0,a.viH)):(b=AmCharts.fitToBounds(b,0,a.viW),c=AmCharts.fitToBounds(c,0,a.viW));c-=b;isNaN(c)&&(c=4,h=2,l=0);0>c&&"object"==typeof d&&(d=d.join(",").split(",").reverse());"V"==g?(a=AmCharts.rect(k,a.width,c,d,l),a.translate(e,b-h+f)):(a=AmCharts.rect(k,
c,a.height,d,l),a.translate(b-h+e,f));this.set=k.set([a])},graphics:function(){return this.set},getLabel:function(){}});AmCharts.AmChart=AmCharts.Class({construct:function(a){this.theme=a;this.version="3.10.1";AmCharts.addChart(this);this.createEvents("dataUpdated","init","rendered","drawn","failed");this.height=this.width="100%";this.dataChanged=!0;this.chartCreated=!1;this.previousWidth=this.previousHeight=0;this.backgroundColor="#FFFFFF";this.borderAlpha=this.backgroundAlpha=0;this.color=this.borderColor="#000000";this.fontFamily="Verdana";this.fontSize=11;this.usePrefixes=!1;this.precision=-1;this.percentPrecision=
2;this.decimalSeparator=".";this.thousandsSeparator=",";this.labels=[];this.allLabels=[];this.titles=[];this.marginRight=this.marginLeft=this.autoMarginOffset=0;this.timeOuts=[];this.creditsPosition="top-left";var b=document.createElement("div"),c=b.style;c.overflow="hidden";c.position="relative";c.textAlign="left";this.chartDiv=b;b=document.createElement("div");c=b.style;c.overflow="hidden";c.position="relative";c.textAlign="left";this.legendDiv=b;this.titleHeight=0;this.hideBalloonTime=150;this.handDrawScatter=
2;this.handDrawThickness=1;this.prefixesOfBigNumbers=[{number:1E3,prefix:"k"},{number:1E6,prefix:"M"},{number:1E9,prefix:"G"},{number:1E12,prefix:"T"},{number:1E15,prefix:"P"},{number:1E18,prefix:"E"},{number:1E21,prefix:"Z"},{number:1E24,prefix:"Y"}];this.prefixesOfSmallNumbers=[{number:1E-24,prefix:"y"},{number:1E-21,prefix:"z"},{number:1E-18,prefix:"a"},{number:1E-15,prefix:"f"},{number:1E-12,prefix:"p"},{number:1E-9,prefix:"n"},{number:1E-6,prefix:"\u03bc"},{number:.001,prefix:"m"}];this.panEventsEnabled=
!0;AmCharts.bezierX=3;AmCharts.bezierY=6;this.product="amcharts";this.animations=[];this.balloon=new AmCharts.AmBalloon(this.theme);this.balloon.chart=this;AmCharts.applyTheme(this,a,"AmChart")},drawChart:function(){this.drawBackground();this.redrawLabels();this.drawTitles();this.brr()},drawBackground:function(){AmCharts.remove(this.background);var a=this.container,b=this.backgroundColor,c=this.backgroundAlpha,d=this.set;AmCharts.isModern||0!==c||(c=.001);var e=this.updateWidth();this.realWidth=e;
var f=this.updateHeight();this.realHeight=f;this.background=b=AmCharts.polygon(a,[0,e-1,e-1,0],[0,0,f-1,f-1],b,c,1,this.borderColor,this.borderAlpha);d.push(b);if(b=this.backgroundImage)this.path&&(b=this.path+b),this.bgImg=a=a.image(b,0,0,e,f),d.push(a)},drawTitles:function(){var a=this.titles;if(AmCharts.ifArray(a)){var b=20,c;for(c=0;c<a.length;c++){var d=a[c],e=d.color;void 0===e&&(e=this.color);var f=d.size;isNaN(f)&&(f=this.fontSize+2);isNaN(d.alpha);var g=this.marginLeft,e=AmCharts.text(this.container,
d.text,e,this.fontFamily,f);e.translate(g+(this.realWidth-this.marginRight-g)/2,b);g=!0;void 0!==d.bold&&(g=d.bold);g&&e.attr({"font-weight":"bold"});e.attr({opacity:d.alpha});b+=f+6;this.freeLabelsSet.push(e)}}},write:function(a){if(a="object"!=typeof a?document.getElementById(a):a){a.innerHTML="";this.div=a;a.style.overflow="hidden";a.style.textAlign="left";var b=this.chartDiv,c=this.legendDiv,d=this.legend,e=c.style,f=b.style;this.measure();var g,h=document.createElement("div");g=h.style;g.position=
"relative";this.containerDiv=h;a.appendChild(h);var k=this.exportConfig;k&&AmCharts.AmExport&&!this.AmExport&&(this.AmExport=new AmCharts.AmExport(this,k));this.amExport&&AmCharts.AmExport&&(this.AmExport=AmCharts.extend(this.amExport,new AmCharts.AmExport(this),!0));this.AmExport&&this.AmExport.init&&this.AmExport.init();if(d)switch(d=this.addLegend(d,d.divId),d.position){case "bottom":h.appendChild(b);h.appendChild(c);break;case "top":h.appendChild(c);h.appendChild(b);break;case "absolute":g.width=
a.style.width;g.height=a.style.height;e.position="absolute";f.position="absolute";void 0!==d.left&&(e.left=d.left+"px");void 0!==d.right&&(e.right=d.right+"px");void 0!==d.top&&(e.top=d.top+"px");void 0!==d.bottom&&(e.bottom=d.bottom+"px");d.marginLeft=0;d.marginRight=0;h.appendChild(b);h.appendChild(c);break;case "right":g.width=a.style.width;g.height=a.style.height;e.position="relative";f.position="absolute";h.appendChild(b);h.appendChild(c);break;case "left":g.width=a.style.width;g.height=a.style.height;
e.position="absolute";f.position="relative";h.appendChild(b);h.appendChild(c);break;case "outside":h.appendChild(b)}else h.appendChild(b);this.listenersAdded||(this.addListeners(),this.listenersAdded=!0);this.initChart()}},createLabelsSet:function(){AmCharts.remove(this.labelsSet);this.labelsSet=this.container.set();this.freeLabelsSet.push(this.labelsSet)},initChart:function(){AmCharts.applyLang(this.language);var a=this.numberFormatter;a&&(isNaN(a.precision)||(this.precision=a.precision),void 0!==
a.thousandsSeparator&&(this.thousandsSeparator=a.thousandsSeparator),void 0!==a.decimalSeparator&&(this.decimalSeparator=a.decimalSeparator));(a=this.percentFormatter)&&!isNaN(a.precision)&&(this.percentPrecision=a.precision);this.nf={precision:this.precision,thousandsSeparator:this.thousandsSeparator,decimalSeparator:this.decimalSeparator};this.pf={precision:this.percentPrecision,thousandsSeparator:this.thousandsSeparator,decimalSeparator:this.decimalSeparator};this.divIsFixed=AmCharts.findIfFixed(this.chartDiv);
this.previousHeight=this.divRealHeight;this.previousWidth=this.divRealWidth;this.destroy();this.startInterval();a=0;document.attachEvent&&!window.opera&&(a=1);this.dmouseX=this.dmouseY=0;var b=document.getElementsByTagName("html")[0];b&&window.getComputedStyle&&(b=window.getComputedStyle(b,null))&&(this.dmouseY=AmCharts.removePx(b.getPropertyValue("margin-top")),this.dmouseX=AmCharts.removePx(b.getPropertyValue("margin-left")));this.mouseMode=a;(a=this.container)?(a.container.innerHTML="",this.chartDiv.appendChild(a.container),
a.setSize(this.realWidth,this.realHeight)):a=new AmCharts.AmDraw(this.chartDiv,this.realWidth,this.realHeight,this);AmCharts.VML||AmCharts.SVG?(a.handDrawn=this.handDrawn,a.handDrawScatter=this.handDrawScatter,a.handDrawThickness=this.handDrawThickness,this.container=a,this.set&&this.set.remove(),this.set=a.set(),this.gridSet&&this.gridSet.remove(),this.gridSet=a.set(),this.cursorLineSet&&this.cursorLineSet.remove(),this.cursorLineSet=a.set(),this.graphsBehindSet&&this.graphsBehindSet.remove(),this.graphsBehindSet=
a.set(),this.bulletBehindSet&&this.bulletBehindSet.remove(),this.bulletBehindSet=a.set(),this.columnSet&&this.columnSet.remove(),this.columnSet=a.set(),this.graphsSet&&this.graphsSet.remove(),this.graphsSet=a.set(),this.trendLinesSet&&this.trendLinesSet.remove(),this.trendLinesSet=a.set(),this.axesLabelsSet&&this.axesLabelsSet.remove(),this.axesLabelsSet=a.set(),this.axesSet&&this.axesSet.remove(),this.axesSet=a.set(),this.cursorSet&&this.cursorSet.remove(),this.cursorSet=a.set(),this.scrollbarsSet&&
this.scrollbarsSet.remove(),this.scrollbarsSet=a.set(),this.bulletSet&&this.bulletSet.remove(),this.bulletSet=a.set(),this.freeLabelsSet&&this.freeLabelsSet.remove(),this.freeLabelsSet=a.set(),this.balloonsSet&&this.balloonsSet.remove(),this.balloonsSet=a.set(),this.zoomButtonSet&&this.zoomButtonSet.remove(),this.zoomButtonSet=a.set(),this.linkSet&&this.linkSet.remove(),this.linkSet=a.set(),this.renderFix()):this.fire("failed",{type:"failed",chart:this})},measure:function(){var a=this.div;if(a){var b=
this.chartDiv,c=a.offsetWidth,d=a.offsetHeight,e=this.container;a.clientHeight&&(c=a.clientWidth,d=a.clientHeight);var f=AmCharts.removePx(AmCharts.getStyle(a,"padding-left")),g=AmCharts.removePx(AmCharts.getStyle(a,"padding-right")),h=AmCharts.removePx(AmCharts.getStyle(a,"padding-top")),k=AmCharts.removePx(AmCharts.getStyle(a,"padding-bottom"));isNaN(f)||(c-=f);isNaN(g)||(c-=g);isNaN(h)||(d-=h);isNaN(k)||(d-=k);f=a.style;a=f.width;f=f.height;-1!=a.indexOf("px")&&(c=AmCharts.removePx(a));-1!=f.indexOf("px")&&
(d=AmCharts.removePx(f));a=AmCharts.toCoordinate(this.width,c);f=AmCharts.toCoordinate(this.height,d);this.balloon=AmCharts.processObject(this.balloon,AmCharts.AmBalloon,this.theme);this.balloon.chart=this;(a!=this.previousWidth||f!=this.previousHeight)&&0<a&&0<f&&(b.style.width=a+"px",b.style.height=f+"px",e&&e.setSize(a,f));this.balloon.setBounds(2,2,a-2,f);this.realWidth=a;this.realHeight=f;this.divRealWidth=c;this.divRealHeight=d}},destroy:function(){this.chartDiv.innerHTML="";this.clearTimeOuts();
this.interval&&clearInterval(this.interval);this.interval=NaN},clearTimeOuts:function(){var a=this.timeOuts;if(a){var b;for(b=0;b<a.length;b++)clearTimeout(a[b])}this.timeOuts=[]},clear:function(a){AmCharts.callMethod("clear",[this.chartScrollbar,this.scrollbarV,this.scrollbarH,this.chartCursor]);this.chartCursor=this.scrollbarH=this.scrollbarV=this.chartScrollbar=null;this.clearTimeOuts();this.interval&&clearInterval(this.interval);this.container&&(this.container.remove(this.chartDiv),this.container.remove(this.legendDiv));
a||AmCharts.removeChart(this)},setMouseCursor:function(a){"auto"==a&&AmCharts.isNN&&(a="default");this.chartDiv.style.cursor=a;this.legendDiv.style.cursor=a},redrawLabels:function(){this.labels=[];var a=this.allLabels;this.createLabelsSet();var b;for(b=0;b<a.length;b++)this.drawLabel(a[b])},drawLabel:function(a){if(this.container){var b=a.y,c=a.text,d=a.align,e=a.size,f=a.color,g=a.rotation,h=a.alpha,k=a.bold,l=AmCharts.toCoordinate(a.x,this.realWidth),b=AmCharts.toCoordinate(b,this.realHeight);l||
(l=0);b||(b=0);void 0===f&&(f=this.color);isNaN(e)&&(e=this.fontSize);d||(d="start");"left"==d&&(d="start");"right"==d&&(d="end");"center"==d&&(d="middle",g?b=this.realHeight-b+b/2:l=this.realWidth/2-l);void 0===h&&(h=1);void 0===g&&(g=0);b+=e/2;c=AmCharts.text(this.container,c,f,this.fontFamily,e,d,k,h);c.translate(l,b);0!==g&&c.rotate(g);a.url&&(c.setAttr("cursor","pointer"),c.click(function(){AmCharts.getURL(a.url)}));this.labelsSet.push(c);this.labels.push(c)}},addLabel:function(a,b,c,d,e,f,g,
h,k,l){a={x:a,y:b,text:c,align:d,size:e,color:f,alpha:h,rotation:g,bold:k,url:l};this.container&&this.drawLabel(a);this.allLabels.push(a)},clearLabels:function(){var a=this.labels,b;for(b=a.length-1;0<=b;b--)a[b].remove();this.labels=[];this.allLabels=[]},updateHeight:function(){var a=this.divRealHeight,b=this.legend;if(b){var c=this.legendDiv.offsetHeight,b=b.position;if("top"==b||"bottom"==b){a-=c;if(0>a||isNaN(a))a=0;this.chartDiv.style.height=a+"px"}}return a},updateWidth:function(){var a=this.divRealWidth,
b=this.divRealHeight,c=this.legend;if(c){var d=this.legendDiv,e=d.offsetWidth;isNaN(c.width)||(e=c.width);var f=d.offsetHeight,d=d.style,g=this.chartDiv.style,c=c.position;if("right"==c||"left"==c){a-=e;if(0>a||isNaN(a))a=0;g.width=a+"px";"left"==c?g.left=e+"px":d.left=a+"px";b>f&&(d.top=(b-f)/2+"px")}}return a},getTitleHeight:function(){var a=0,b=this.titles;if(0<b.length){var a=15,c;for(c=0;c<b.length;c++){var d=b[c].size;isNaN(d)&&(d=this.fontSize+2);a+=d+6}}return a},addTitle:function(a,b,c,d,
e){isNaN(b)&&(b=this.fontSize+2);a={text:a,size:b,color:c,alpha:d,bold:e};this.titles.push(a);return a},addMouseWheel:function(){var a=this;window.addEventListener&&!a.wheelAdded&&(window.addEventListener("DOMMouseScroll",function(b){a.handleWheel.call(a,b)},!1),document.addEventListener("mousewheel",function(b){a.handleWheel.call(a,b)},!1),a.wheelAdded=!0)},handleWheel:function(a){if(this.mouseIsOver){var b=0;a||(a=window.event);a.wheelDelta?b=a.wheelDelta/120:a.detail&&(b=-a.detail/3);b&&this.handleWheelReal(b,
a.shiftKey);a.preventDefault&&a.preventDefault()}},handleWheelReal:function(a){},addListeners:function(){var a=this,b=a.chartDiv;document.addEventListener?(a.panEventsEnabled&&"ontouchstart"in document.documentElement&&(b.addEventListener("touchstart",function(b){a.handleTouchMove.call(a,b);a.handleTouchStart.call(a,b)},!0),b.addEventListener("touchmove",function(b){a.handleTouchMove.call(a,b)},!0),b.addEventListener("touchend",function(b){a.handleTouchEnd.call(a,b)},!0)),b.addEventListener("mousedown",
function(b){a.handleMouseDown.call(a,b)},!0),b.addEventListener("mouseover",function(b){a.handleMouseOver.call(a,b)},!0),b.addEventListener("mouseout",function(b){a.handleMouseOut.call(a,b)},!0)):(b.attachEvent("onmousedown",function(b){a.handleMouseDown.call(a,b)}),b.attachEvent("onmouseover",function(b){a.handleMouseOver.call(a,b)}),b.attachEvent("onmouseout",function(b){a.handleMouseOut.call(a,b)}))},dispDUpd:function(){var a;this.dispatchDataUpdated&&(this.dispatchDataUpdated=!1,a="dataUpdated",
this.fire(a,{type:a,chart:this}));this.chartCreated||(a="init",this.fire(a,{type:a,chart:this}));this.chartRendered||(a="rendered",this.fire(a,{type:a,chart:this}),this.chartRendered=!0);a="drawn";this.fire(a,{type:a,chart:this})},validateSize:function(){var a=this;a.measure();var b=a.legend;if((a.realWidth!=a.previousWidth||a.realHeight!=a.previousHeight)&&0<a.realWidth&&0<a.realHeight){a.sizeChanged=!0;if(b){clearTimeout(a.legendInitTO);var c=setTimeout(function(){b.invalidateSize()},100);a.timeOuts.push(c);
a.legendInitTO=c}a.marginsUpdated="xy"!=a.type?!1:!0;clearTimeout(a.initTO);c=setTimeout(function(){a.initChart()},150);a.timeOuts.push(c);a.initTO=c}a.renderFix();b&&b.renderFix()},invalidateSize:function(){this.previousHeight=this.previousWidth=NaN;this.invalidateSizeReal()},invalidateSizeReal:function(){var a=this;a.marginsUpdated=!1;clearTimeout(a.validateTO);var b=setTimeout(function(){a.validateSize()},5);a.timeOuts.push(b);a.validateTO=b},validateData:function(a){this.chartCreated&&(this.dataChanged=
!0,this.marginsUpdated="xy"!=this.type?!1:!0,this.initChart(a))},validateNow:function(){this.chartRendered=this.listenersAdded=!1;this.write(this.div)},showItem:function(a){a.hidden=!1;this.initChart()},hideItem:function(a){a.hidden=!0;this.initChart()},hideBalloon:function(){var a=this;clearInterval(a.hoverInt);clearTimeout(a.balloonTO);a.hoverInt=setTimeout(function(){a.hideBalloonReal.call(a)},a.hideBalloonTime)},cleanChart:function(){},hideBalloonReal:function(){var a=this.balloon;a&&a.hide()},
showBalloon:function(a,b,c,d,e){var f=this;clearTimeout(f.balloonTO);clearInterval(f.hoverInt);f.balloonTO=setTimeout(function(){f.showBalloonReal.call(f,a,b,c,d,e)},1)},showBalloonReal:function(a,b,c,d,e){this.handleMouseMove();var f=this.balloon;f.enabled&&(f.followCursor(!1),f.changeColor(b),!c||f.fixedPosition?(f.setPosition(d,e),f.followCursor(!1)):f.followCursor(!0),a&&f.showBalloon(a))},handleTouchMove:function(a){this.hideBalloon();var b=this.chartDiv;a.touches&&(a=a.touches.item(0),this.mouseX=
a.pageX-AmCharts.findPosX(b),this.mouseY=a.pageY-AmCharts.findPosY(b))},handleMouseOver:function(a){AmCharts.resetMouseOver();this.mouseIsOver=!0},handleMouseOut:function(a){AmCharts.resetMouseOver();this.mouseIsOver=!1},handleMouseMove:function(a){if(this.mouseIsOver){var b=this.chartDiv;a||(a=window.event);var c,d;if(a){this.posX=AmCharts.findPosX(b);this.posY=AmCharts.findPosY(b);switch(this.mouseMode){case 1:c=a.clientX-this.posX;d=a.clientY-this.posY;if(!this.divIsFixed){var b=document.body,
e,f;b&&(e=b.scrollLeft,y1=b.scrollTop);if(b=document.documentElement)f=b.scrollLeft,y2=b.scrollTop;e=Math.max(e,f);f=Math.max(y1,y2);c+=e;d+=f}break;case 0:this.divIsFixed?(c=a.clientX-this.posX,d=a.clientY-this.posY):(c=a.pageX-this.posX,d=a.pageY-this.posY)}a.touches&&(a=a.touches.item(0),c=a.pageX-this.posX,d=a.pageY-this.posY);this.mouseX=c-this.dmouseX;this.mouseY=d-this.dmouseY}}},handleTouchStart:function(a){this.handleMouseDown(a)},handleTouchEnd:function(a){AmCharts.resetMouseOver();this.handleReleaseOutside(a)},
handleReleaseOutside:function(a){},handleMouseDown:function(a){AmCharts.resetMouseOver();this.mouseIsOver=!0;a&&a.preventDefault&&a.preventDefault()},addLegend:function(a,b){a=AmCharts.processObject(a,AmCharts.AmLegend,this.theme);a.divId=b;var c;c="object"!=typeof b&&b?document.getElementById(b):b;this.legend=a;a.chart=this;c?(a.div=c,a.position="outside",a.autoMargins=!1):a.div=this.legendDiv;c=this.handleLegendEvent;this.listenTo(a,"showItem",c);this.listenTo(a,"hideItem",c);this.listenTo(a,"clickMarker",
c);this.listenTo(a,"rollOverItem",c);this.listenTo(a,"rollOutItem",c);this.listenTo(a,"rollOverMarker",c);this.listenTo(a,"rollOutMarker",c);this.listenTo(a,"clickLabel",c);return a},removeLegend:function(){this.legend=void 0;this.legendDiv.innerHTML=""},handleResize:function(){(AmCharts.isPercents(this.width)||AmCharts.isPercents(this.height))&&this.invalidateSizeReal();this.renderFix()},renderFix:function(){if(!AmCharts.VML){var a=this.container;a&&a.renderFix()}},getSVG:function(){if(AmCharts.hasSVG)return this.container},
animate:function(a,b,c,d,e,f,g){a["an_"+b]&&AmCharts.removeFromArray(this.animations,a["an_"+b]);c={obj:a,frame:0,attribute:b,from:c,to:d,time:e,effect:f,suffix:g};a["an_"+b]=c;this.animations.push(c);return c},setLegendData:function(a){var b=this.legend;b&&b.setData(a)},startInterval:function(){var a=this;clearInterval(a.interval);a.interval=setInterval(function(){a.updateAnimations.call(a)},AmCharts.updateRate)},stopAnim:function(a){AmCharts.removeFromArray(this.animations,a)},updateAnimations:function(){var a;
this.container&&this.container.update();for(a=this.animations.length-1;0<=a;a--){var b=this.animations[a],c=1E3*b.time/AmCharts.updateRate,d=b.frame+1,e=b.obj,f=b.attribute;if(d<=c){b.frame++;var g=Number(b.from),h=Number(b.to)-g,c=AmCharts[b.effect](0,d,g,h,c);0===h?(this.animations.splice(a,1),e.node.style[f]=Number(b.to)+b.suffix):e.node.style[f]=c+b.suffix}else e.node.style[f]=Number(b.to)+b.suffix,this.animations.splice(a,1)}},inIframe:function(){try{return window.self!==window.top}catch(a){return!0}},
brr:function(){}});AmCharts.Slice=AmCharts.Class({construct:function(){}});AmCharts.SerialDataItem=AmCharts.Class({construct:function(){}});AmCharts.GraphDataItem=AmCharts.Class({construct:function(){}});AmCharts.Guide=AmCharts.Class({construct:function(a){this.cname="Guide";AmCharts.applyTheme(this,a,this.cname)}});AmCharts.AmGraph=AmCharts.Class({construct:function(a){this.cname="AmGraph";this.createEvents("rollOverGraphItem","rollOutGraphItem","clickGraphItem","doubleClickGraphItem","rightClickGraphItem","clickGraph","rollOverGraph","rollOutGraph");this.type="line";this.stackable=!0;this.columnCount=1;this.columnIndex=0;this.centerCustomBullets=this.showBalloon=!0;this.maxBulletSize=50;this.minBulletSize=4;this.balloonText="[[value]]";this.hidden=this.scrollbar=this.animationPlayed=!1;this.pointPosition="middle";
this.depthCount=1;this.includeInMinMax=!0;this.negativeBase=0;this.visibleInLegend=!0;this.showAllValueLabels=!1;this.showBulletsAt=this.showBalloonAt="close";this.lineThickness=1;this.dashLength=0;this.connect=!0;this.lineAlpha=1;this.bullet="none";this.bulletBorderThickness=2;this.bulletBorderAlpha=0;this.bulletAlpha=1;this.bulletSize=8;this.hideBulletsCount=this.bulletOffset=0;this.labelPosition="top";this.cornerRadiusTop=0;this.cursorBulletAlpha=1;this.gradientOrientation="vertical";this.dy=this.dx=
0;this.periodValue="";this.clustered=!0;this.periodSpan=1;this.y=this.x=0;this.switchable=!0;this.tcc=this.minDistance=1;AmCharts.applyTheme(this,a,this.cname)},draw:function(){var a=this.chart;isNaN(this.precision)||(this.numberFormatter?this.numberFormatter.precision=this.precision:this.numberFormatter={precision:this.precision,decimalSeparator:a.decimalSeparator,thousandsSeparator:a.thousandsSeparator});var b=a.container;this.container=b;this.destroy();var c=b.set(),d=b.set();this.behindColumns?
(a.graphsBehindSet.push(c),a.bulletBehindSet.push(d)):(a.graphsSet.push(c),a.bulletSet.push(d));var e=this.bulletAxis;AmCharts.isString(e)&&(this.bulletAxis=a.getValueAxisById(e));this.bulletSet=d;this.scrollbar||(e=a.marginLeftReal,a=a.marginTopReal,c.translate(e,a),d.translate(e,a));b=b.set();AmCharts.remove(this.columnsSet);c.push(b);this.set=c;this.columnsSet=b;this.columnsArray=[];this.ownColumns=[];this.allBullets=[];this.animationArray=[];AmCharts.ifArray(this.data)&&(c=!1,"xy"==this.chart.type?
this.xAxis.axisCreated&&this.yAxis.axisCreated&&(c=!0):this.valueAxis.axisCreated&&(c=!0),!this.hidden&&c&&this.createGraph())},createGraph:function(){var a=this,b=a.chart;"inside"==a.labelPosition&&"column"!=a.type&&(a.labelPosition="bottom");a.startAlpha=b.startAlpha;a.seqAn=b.sequencedAnimation;a.baseCoord=a.valueAxis.baseCoord;void 0===a.fillAlphas&&(a.fillAlphas=0);a.bulletColorR=a.bulletColor;void 0===a.bulletColorR&&(a.bulletColorR=a.lineColorR,a.bulletColorNegative=a.negativeLineColor);void 0===
a.bulletAlpha&&(a.bulletAlpha=a.lineAlpha);clearTimeout(a.playedTO);if(!isNaN(a.valueAxis.min)&&!isNaN(a.valueAxis.max)){switch(b.type){case "serial":a.categoryAxis&&(a.createSerialGraph(),"candlestick"==a.type&&1>a.valueAxis.minMaxMultiplier&&a.positiveClip(a.set));break;case "radar":a.createRadarGraph();break;case "xy":a.createXYGraph(),a.positiveClip(a.set)}a.playedTO=setTimeout(function(){a.setAnimationPlayed.call(a)},500*a.chart.startDuration)}},setAnimationPlayed:function(){this.animationPlayed=
!0},createXYGraph:function(){var a=[],b=[],c=this.xAxis,d=this.yAxis;this.pmh=d.viH+1;this.pmw=c.viW+1;this.pmy=this.pmx=0;var e;for(e=this.start;e<=this.end;e++){var f=this.data[e].axes[c.id].graphs[this.id],g=f.values,h=g.x,k=g.y,g=c.getCoordinate(h),l=d.getCoordinate(k);!isNaN(h)&&!isNaN(k)&&(a.push(g),b.push(l),(h=this.createBullet(f,g,l,e))||(h=0),k=this.labelText)&&(f=this.createLabel(f,g,l,k),this.allBullets.push(f),this.positionLabel(g,l,f,this.labelPosition,h))}this.drawLineGraph(a,b);this.launchAnimation()},
createRadarGraph:function(){var a=this.valueAxis.stackType,b=[],c=[],d,e,f;for(f=this.start;f<=this.end;f++){var g=this.data[f].axes[this.valueAxis.id].graphs[this.id],h;h="none"==a||"3d"==a?g.values.value:g.values.close;if(isNaN(h))this.drawLineGraph(b,c),b=[],c=[];else{var k=this.y-(this.valueAxis.getCoordinate(h)-this.height),l=180-360/(this.end-this.start+1)*f;h=k*Math.sin(l/180*Math.PI);k*=Math.cos(l/180*Math.PI);b.push(h);c.push(k);(l=this.createBullet(g,h,k,f))||(l=0);var m=this.labelText;
m&&(g=this.createLabel(g,h,k,m),this.allBullets.push(g),this.positionLabel(h,k,g,this.labelPosition,l));isNaN(d)&&(d=h);isNaN(e)&&(e=k)}}b.push(d);c.push(e);this.drawLineGraph(b,c);this.launchAnimation()},positionLabel:function(a,b,c,d,e){var f=c.getBBox();switch(d){case "left":a-=(f.width+e)/2+2;break;case "top":b-=(e+f.height)/2+1;break;case "right":a+=(f.width+e)/2+2;break;case "bottom":b+=(e+f.height)/2+1}c.translate(a,b)},getGradRotation:function(){var a=270;"horizontal"==this.gradientOrientation&&
(a=0);return this.gradientRotation=a},createSerialGraph:function(){this.dashLengthSwitched=this.fillColorsSwitched=this.lineColorSwitched=void 0;var a=this.chart,b=this.id,c=this.index,d=this.data,e=this.chart.container,f=this.valueAxis,g=this.type,h=this.columnWidthReal,k=this.showBulletsAt;isNaN(this.columnWidth)||(h=this.columnWidth);isNaN(h)&&(h=.8);var l=this.useNegativeColorIfDown,m=this.width,n=this.height,p=this.y,q=this.rotate,r=this.columnCount,s=AmCharts.toCoordinate(this.cornerRadiusTop,
h/2),v=this.connect,w=[],t=[],u,y,E,A,z=this.chart.graphs.length,K,I=this.dx/this.tcc,F=this.dy/this.tcc,H=f.stackType,L=this.labelPosition,ha=this.start,ba=this.end,$=this.scrollbar,Ra=this.categoryAxis,na=this.baseCoord,ta=this.negativeBase,V=this.columnIndex,X=this.lineThickness,Z=this.lineAlpha,oa=this.lineColorR,R=this.dashLength,Y=this.set,qa=L,G=this.getGradRotation(),B=this.chart.columnSpacing,W=Ra.cellWidth,ca=(W*h-r)/r;B>ca&&(B=ca);var ja,x,ab,jb=n+1,kb=m+1,bb=0,lb=0,mb,nb,cb,db,ob=this.fillColorsR,
Da=this.negativeFillColors,wa=this.negativeLineColor,Sa=this.fillAlphas,Ta=this.negativeFillAlphas;"object"==typeof Sa&&(Sa=Sa[0]);"object"==typeof Ta&&(Ta=Ta[0]);var eb=f.getCoordinate(f.min);f.logarithmic&&(eb=f.getCoordinate(f.minReal));this.minCoord=eb;this.resetBullet&&(this.bullet="none");if(!($||"line"!=g&&"smoothedLine"!=g&&"step"!=g||(1==d.length&&"step"!=g&&"none"==this.bullet&&(this.bullet="round",this.resetBullet=!0),!Da&&void 0==wa||l))){var La=ta;La>f.max&&(La=f.max);La<f.min&&(La=f.min);
f.logarithmic&&(La=f.minReal);var Aa=f.getCoordinate(La),Fb=f.getCoordinate(f.max);q?(jb=n,kb=Math.abs(Fb-Aa),mb=n,nb=Math.abs(eb-Aa),db=lb=0,f.reversed?(bb=0,cb=Aa):(bb=Aa,cb=0)):(kb=m,jb=Math.abs(Fb-Aa),nb=m,mb=Math.abs(eb-Aa),cb=bb=0,f.reversed?(db=p,lb=Aa):db=Aa+1)}var Ba=Math.round;this.pmx=Ba(bb);this.pmy=Ba(lb);this.pmh=Ba(jb);this.pmw=Ba(kb);this.nmx=Ba(cb);this.nmy=Ba(db);this.nmh=Ba(mb);this.nmw=Ba(nb);AmCharts.isModern||(this.nmy=this.nmx=0,this.nmh=this.height);h="column"==g?(W*h-B*(r-
1))/r:W*h;1>h&&(h=1);var J;if("line"==g||"step"==g||"smoothedLine"==g){if(0<ha){for(J=ha-1;-1<J;J--)if(ja=d[J],x=ja.axes[f.id].graphs[b],ab=x.values.value,!isNaN(ab)){ha=J;break}if(this.lineColorField)for(J=ha;-1<J;J--)if(ja=d[J],x=ja.axes[f.id].graphs[b],x.lineColor){this.bulletColorSwitched=this.lineColorSwitched=x.lineColor;break}if(this.fillColorsField)for(J=ha;-1<J;J--)if(ja=d[J],x=ja.axes[f.id].graphs[b],x.fillColors){this.fillColorsSwitched=x.fillColors;break}if(this.dashLengthField)for(J=
ha;-1<J;J--)if(ja=d[J],x=ja.axes[f.id].graphs[b],!isNaN(x.dashLength)){this.dashLengthSwitched=x.dashLength;break}}if(ba<d.length-1)for(J=ba+1;J<d.length;J++)if(ja=d[J],x=ja.axes[f.id].graphs[b],ab=x.values.value,!isNaN(ab)){ba=J;break}}ba<d.length-1&&ba++;var O=[],P=[],Ea=!1;if("line"==g||"step"==g||"smoothedLine"==g)if(this.stackable&&"regular"==H||"100%"==H||this.fillToGraph)Ea=!0;var Gb=this.noStepRisers,fb=-1E3,gb=-1E3,hb=this.minDistance,Ma=!0,Ua=!1;for(J=ha;J<=ba;J++){ja=d[J];x=ja.axes[f.id].graphs[b];
x.index=J;var Va,Na=NaN;if(l&&void 0==this.openField)for(var pb=J+1;pb<d.length&&(!d[pb]||!(Va=d[J+1].axes[f.id].graphs[b])||!Va.values||(Na=Va.values.value,isNaN(Na)));pb++);var S,T,Q,da,la=NaN,D=NaN,C=NaN,N=NaN,M=NaN,Fa=NaN,xa=NaN,Ga=NaN,ya=NaN,aa=NaN,ia=NaN,ea=NaN,fa=NaN,U=NaN,qb=NaN,rb=NaN,ka=NaN,ra=void 0,Ca=ob,Wa=Sa,ua=oa,pa,sa,Xa=this.pattern;void 0!=x.pattern&&(Xa=x.pattern);void 0!=x.color&&(Ca=x.color);x.fillColors&&(Ca=x.fillColors);isNaN(x.alpha)||(Wa=x.alpha);isNaN(x.dashLength)||(R=
x.dashLength);var va=x.values;f.recalculateToPercents&&(va=x.percents);if(va){U=this.stackable&&"none"!=H&&"3d"!=H?va.close:va.value;if("candlestick"==g||"ohlc"==g)U=va.close,rb=va.low,xa=f.getCoordinate(rb),qb=va.high,ya=f.getCoordinate(qb);ka=va.open;C=f.getCoordinate(U);isNaN(ka)||(M=f.getCoordinate(ka),l&&(Na=ka,ka=M=NaN));l&&(void 0==this.openField?Va&&(Va.isNegative=Na<U?!0:!1):x.isNegative=Na>U?!0:!1);if(!$)switch(this.showBalloonAt){case "close":x.y=C;break;case "open":x.y=M;break;case "high":x.y=
ya;break;case "low":x.y=xa}var la=ja.x[Ra.id],Oa=this.periodSpan-1,ma=Math.floor(W/2)+Math.floor(Oa*W/2),za=ma,Hb=0;"left"==this.stepDirection&&(Hb=(2*W+Oa*W)/2,la-=Hb);"start"==this.pointPosition&&(la-=W/2+Math.floor(Oa*W/2),ma=0,za=Math.floor(W)+Math.floor(Oa*W));"end"==this.pointPosition&&(la+=W/2+Math.floor(Oa*W/2),ma=Math.floor(W)+Math.floor(Oa*W),za=0);if(Gb){var sb=this.columnWidth;isNaN(sb)||(ma*=sb,za*=sb)}$||(x.x=la);-1E5>la&&(la=-1E5);la>m+1E5&&(la=m+1E5);q?(D=C,N=M,M=C=la,isNaN(ka)&&!this.fillToGraph&&
(N=na),Fa=xa,Ga=ya):(N=D=la,isNaN(ka)&&!this.fillToGraph&&(M=na));U<ka&&(x.isNegative=!0,Da&&(Ca=Da),Ta&&(Wa=Ta),void 0!=wa&&(ua=wa));Ua=!1;isNaN(U)||(l?U>Na?(Ma&&(Ua=!0),Ma=!1):(Ma||(Ua=!0),Ma=!0):x.isNegative=U<ta?!0:!1);switch(g){case "line":if(isNaN(U))v||(this.drawLineGraph(w,t,O,P),w=[],t=[],O=[],P=[]);else{if(Math.abs(D-fb)>=hb||Math.abs(C-gb)>=hb)w.push(D),t.push(C),fb=D,gb=C;aa=D;ia=C;ea=D;fa=C;!Ea||isNaN(M)||isNaN(N)||(O.push(N),P.push(M));if(Ua||void 0!=x.lineColor||void 0!=x.fillColors||
!isNaN(x.dashLength))this.drawLineGraph(w,t,O,P),w=[D],t=[C],O=[],P=[],!Ea||isNaN(M)||isNaN(N)||(O.push(N),P.push(M)),l?Ma?(this.lineColorSwitched=oa,this.fillColorsSwitched=ob):(this.lineColorSwitched=wa,this.fillColorsSwitched=Da):(this.lineColorSwitched=x.lineColor,this.fillColorsSwitched=x.fillColors),this.dashLengthSwitched=x.dashLength;x.gap&&(this.drawLineGraph(w,t,O,P),w=[],t=[],O=[],P=[])}break;case "smoothedLine":if(isNaN(U))v||(this.drawSmoothedGraph(w,t,O,P),w=[],t=[],O=[],P=[]);else{if(Math.abs(D-
fb)>=hb||Math.abs(C-gb)>=hb)w.push(D),t.push(C),fb=D,gb=C;aa=D;ia=C;ea=D;fa=C;!Ea||isNaN(M)||isNaN(N)||(O.push(N),P.push(M));void 0==x.lineColor&&void 0==x.fillColors&&isNaN(x.dashLength)||(this.drawSmoothedGraph(w,t,O,P),w=[D],t=[C],O=[],P=[],!Ea||isNaN(M)||isNaN(N)||(O.push(N),P.push(M)),this.lineColorSwitched=x.lineColor,this.fillColorsSwitched=x.fillColors,this.dashLengthSwitched=x.dashLength);x.gap&&(this.drawSmoothedGraph(w,t,O,P),w=[],t=[],O=[],P=[])}break;case "step":if(!isNaN(U)){if(void 0==
x.lineColor&&void 0==x.fillColors&&isNaN(x.dashLength)||(this.drawLineGraph(w,t,O,P),w=[],t=[],O=[],P=[],this.lineColorSwitched=x.lineColor,this.fillColorsSwitched=x.fillColors,this.dashLengthSwitched=x.dashLength),q?(isNaN(u)||(w.push(u),t.push(C-ma)),t.push(C-ma),w.push(D),t.push(C+za),w.push(D),!Ea||isNaN(M)||isNaN(N)||(O.push(E),P.push(M-ma),O.push(N),P.push(M-ma),O.push(N),P.push(M+za))):(isNaN(y)||(t.push(y),w.push(u),t.push(y),w.push(D-ma)),w.push(D-ma),t.push(C),w.push(D+za),t.push(C),!Ea||
isNaN(M)||isNaN(N)||(O.push(N-ma),P.push(A),O.push(N-ma),P.push(M),O.push(N+za),P.push(M))),u=D,y=C,E=N,A=M,aa=D,ia=C,ea=D,fa=C,Ua&&(this.drawLineGraph(w,t,O,P),w=[],t=[],O=[],P=[],l&&(Ma?(this.lineColorSwitched=oa,this.fillColorsSwitched=ob):(this.lineColorSwitched=wa,this.fillColorsSwitched=Da))),Gb||x.gap)u=y=NaN,this.drawLineGraph(w,t,O,P),w=[],t=[],O=[],P=[]}else if(!v){if(1>=this.periodSpan||1<this.periodSpan&&D-u>ma+za)u=y=NaN;this.drawLineGraph(w,t,O,P);w=[];t=[];O=[];P=[]}break;case "column":pa=
ua;void 0!=x.lineColor&&(pa=x.lineColor);if(!isNaN(U)){l||(x.isNegative=U<ta?!0:!1);x.isNegative&&(Da&&(Ca=Da),void 0!=wa&&(pa=wa));var Ib=f.min,Jb=f.max;if(!(U<Ib&&ka<Ib||U>Jb&&ka>Jb))if(q){"3d"==H?(T=C-(r/2-this.depthCount+1)*(h+B)+B/2+F*V,S=N+I*V):(T=Math.floor(C-(r/2-V)*(h+B)+B/2),S=N);Q=h;aa=D;ia=T+h/2;ea=D;fa=T+h/2;T+Q>n&&(Q=n-T);0>T&&(Q+=T,T=0);da=D-N;var Vb=S;S=AmCharts.fitToBounds(S,0,m);da+=Vb-S;da=AmCharts.fitToBounds(da,-S,m-S+I*V);T<n&&0<Q&&(ra=new AmCharts.Cuboid(e,da,Q,I-a.d3x,F-a.d3y,
Ca,Wa,X,pa,Z,G,s,q,R,Xa),"bottom"!=L&&"inside"!=L&&"middle"!=L&&(L=f.reversed?"left":"right",0>U&&(L=f.reversed?"right":"left")),"regular"==H||"100%"==H)&&(aa+=this.dx)}else{"3d"==H?(S=D-(r/2-this.depthCount+1)*(h+B)+B/2+I*V,T=M+F*V):(S=D-(r/2-V)*(h+B)+B/2,T=M);Q=h;aa=S+h/2;ia=C;ea=S+h/2;fa=C;S+Q>m+V*I&&(Q=m-S+V*I);0>S&&(Q+=S,S=0);da=C-M;var Wb=T;T=AmCharts.fitToBounds(T,this.dy,n);da+=Wb-T;da=AmCharts.fitToBounds(da,-T+F*V,n-T);if(S<m+V*I&&0<Q)if(ra=new AmCharts.Cuboid(e,Q,da,I-a.d3x,F-a.d3y,Ca,
Wa,X,pa,this.lineAlpha,G,s,q,R,Xa),0>U&&"middle"!=L&&"inside"!=L)L="bottom";else if(L=qa,"regular"==H||"100%"==H)ia+=this.dy}if(ra&&(sa=ra.set,x.columnGraphics=sa,sa.translate(S,T),this.columnsSet.push(sa),(x.url||this.showHandOnHover)&&sa.setAttr("cursor","pointer"),!$)){"none"==H&&(K=q?(this.end+1-J)*z-c:z*J+c);"3d"==H&&(q?(K=(this.end+1-J)*z-c-1E3*this.depthCount,aa+=I*this.columnIndex,ea+=I*this.columnIndex,x.y+=I*this.columnIndex):(K=(z-c)*(J+1)+1E3*this.depthCount,aa+=3,ia+=F*this.columnIndex+
7,fa+=F*this.columnIndex,x.y+=F*this.columnIndex));if("regular"==H||"100%"==H)"inside"!=L&&(L="middle"),K=q?0<va.value?(this.end+1-J)*z+c:(this.end+1-J)*z-c:0<va.value?z*J+c:z*J-c;this.columnsArray.push({column:ra,depth:K});x.x=q?T+Q/2:S+Q/2;this.ownColumns.push(ra);this.animateColumns(ra,J,D,N,C,M);this.addListeners(sa,x)}}break;case "candlestick":if(!isNaN(ka)&&!isNaN(U)){var ib,tb;pa=ua;void 0!=x.lineColor&&(pa=x.lineColor);if(q){if(T=C-h/2,S=N,Q=h,T+Q>n&&(Q=n-T),0>T&&(Q+=T,T=0),T<n&&0<Q){var ub,
vb;U>ka?(ub=[D,Ga],vb=[N,Fa]):(ub=[N,Ga],vb=[D,Fa]);!isNaN(Ga)&&!isNaN(Fa)&&C<n&&0<C&&(ib=AmCharts.line(e,ub,[C,C],pa,Z,X),tb=AmCharts.line(e,vb,[C,C],pa,Z,X));da=D-N;ra=new AmCharts.Cuboid(e,da,Q,I,F,Ca,Sa,X,pa,Z,G,s,q,R,Xa)}}else if(S=D-h/2,T=M+X/2,Q=h,S+Q>m&&(Q=m-S),0>S&&(Q+=S,S=0),da=C-M,S<m&&0<Q){var ra=new AmCharts.Cuboid(e,Q,da,I,F,Ca,Wa,X,pa,Z,G,s,q,R,Xa),wb,xb;U>ka?(wb=[C,ya],xb=[M,xa]):(wb=[M,ya],xb=[C,xa]);!isNaN(ya)&&!isNaN(xa)&&D<m&&0<D&&(ib=AmCharts.line(e,[D,D],wb,pa,Z,X),tb=AmCharts.line(e,
[D,D],xb,pa,Z,X))}ra&&(sa=ra.set,x.columnGraphics=sa,Y.push(sa),sa.translate(S,T-X/2),(x.url||this.showHandOnHover)&&sa.setAttr("cursor","pointer"),ib&&(Y.push(ib),Y.push(tb)),aa=D,ia=C,q?(fa=C,ea=D,"open"==k&&(ea=N),"high"==k&&(ea=Ga),"low"==k&&(ea=Fa)):(fa=C,"open"==k&&(fa=M),"high"==k&&(fa=ya),"low"==k&&(fa=xa),ea=D),$||(x.x=q?T+Q/2:S+Q/2,this.animateColumns(ra,J,D,N,C,M),this.addListeners(sa,x)))}break;case "ohlc":if(!(isNaN(ka)||isNaN(qb)||isNaN(rb)||isNaN(U))){U<ka&&(x.isNegative=!0,void 0!=
wa&&(ua=wa));var yb,zb,Ab;if(q){var Bb=C-h/2,Bb=AmCharts.fitToBounds(Bb,0,n),Kb=AmCharts.fitToBounds(C,0,n),Cb=C+h/2,Cb=AmCharts.fitToBounds(Cb,0,n);zb=AmCharts.line(e,[N,N],[Bb,Kb],ua,Z,X,R);0<C&&C<n&&(yb=AmCharts.line(e,[Fa,Ga],[C,C],ua,Z,X,R));Ab=AmCharts.line(e,[D,D],[Kb,Cb],ua,Z,X,R);fa=C;ea=D;"open"==k&&(ea=N);"high"==k&&(ea=Ga);"low"==k&&(ea=Fa)}else{var Db=D-h/2,Db=AmCharts.fitToBounds(Db,0,m),Lb=AmCharts.fitToBounds(D,0,m),Eb=D+h/2,Eb=AmCharts.fitToBounds(Eb,0,m);zb=AmCharts.line(e,[Db,Lb],
[M,M],ua,Z,X,R);0<D&&D<m&&(yb=AmCharts.line(e,[D,D],[xa,ya],ua,Z,X,R));Ab=AmCharts.line(e,[Lb,Eb],[C,C],ua,Z,X,R);fa=C;"open"==k&&(fa=M);"high"==k&&(fa=ya);"low"==k&&(fa=xa);ea=D}Y.push(zb);Y.push(yb);Y.push(Ab);aa=D;ia=C}}if(!$&&!isNaN(U)){var Mb=this.hideBulletsCount;if(this.end-this.start<=Mb||0===Mb){var Ha=this.createBullet(x,ea,fa,J);Ha||(Ha=0);var Nb=this.labelText;if(Nb){var ga=this.createLabel(x,0,0,Nb),Ia=0,Ja=0,Ob=ga.getBBox(),Pa=Ob.width,Ka=Ob.height;switch(L){case "left":Ia=-(Pa/2+Ha/
2+3);break;case "top":Ja=-(Ka/2+Ha/2+3);break;case "right":Ia=Ha/2+2+Pa/2;break;case "bottom":q&&"column"==g?(aa=na,0>U||0<U&&f.reversed?(Ia=-6,ga.attr({"text-anchor":"end"})):(Ia=6,ga.attr({"text-anchor":"start"}))):(Ja=Ha/2+Ka/2,ga.x=-(Pa/2+2));break;case "middle":"column"==g&&(q?(Ja=-(Ka/2)+this.fontSize/2,Ia=-(D-N)/2-I,Math.abs(D-N)<Pa&&!this.showAllValueLabels&&(ga.remove(),ga=null)):(Ja=-(C-M)/2-F,Math.abs(C-M)<Ka&&!this.showAllValueLabels&&(ga.remove(),ga=null)));break;case "inside":q?(Ja=
-(Ka/2)+this.fontSize/2,Ia=0>da?Pa/2+6:-Pa/2-6):Ja=0>da?Ka:-Ka}if(ga){if(isNaN(ia)||isNaN(aa))ga.remove(),ga=null;else if(aa+=Ia,ia+=Ja,ga.translate(aa,ia),q){if(0>ia||ia>n)ga.remove(),ga=null}else{var Pb=0;"3d"==H&&(Pb=I*V);if(0>aa||aa>m+Pb)ga.remove(),ga=null}ga&&this.allBullets.push(ga)}}if("regular"==H||"100%"==H){var Qb=f.totalText;if(Qb){var Qa=this.createLabel(x,0,0,Qb,f.totalTextColor);this.allBullets.push(Qa);var Rb=Qa.getBBox(),Sb=Rb.width,Tb=Rb.height,Ya,Za,Ub=f.totals[J];Ub&&Ub.remove();
var $a=0;"column"!=g&&($a=Ha);q?(Za=C,Ya=0>U?D-Sb/2-2-$a:D+Sb/2+3+$a):(Ya=D,Za=0>U?C+Tb/2+$a:C-Tb/2-3-$a);Qa.translate(Ya,Za);f.totals[J]=Qa;q?(0>Za||Za>n)&&Qa.remove():(0>Ya||Ya>m)&&Qa.remove()}}}}}}if("line"==g||"step"==g||"smoothedLine"==g)"smoothedLine"==g?this.drawSmoothedGraph(w,t,O,P):this.drawLineGraph(w,t,O,P),$||this.launchAnimation();this.bulletsHidden&&this.hideBullets()},animateColumns:function(a,b,c,d,e,f){var g=this;c=g.chart.startDuration;0<c&&!g.animationPlayed&&(g.seqAn?(a.set.hide(),
g.animationArray.push(a),a=setTimeout(function(){g.animate.call(g)},c/(g.end-g.start+1)*(b-g.start)*1E3),g.timeOuts.push(a)):g.animate(a))},createLabel:function(a,b,c,d,e){var f=this.chart,g=a.labelColor;g||(g=this.color);g||(g=f.color);e&&(g=e);e=this.fontSize;void 0===e&&(this.fontSize=e=f.fontSize);var h=this.labelFunction;d=f.formatString(d,a);d=AmCharts.cleanFromEmpty(d);h&&(d=h(a,d));a=AmCharts.text(this.container,d,g,f.fontFamily,e);a.node.style.pointerEvents="none";a.translate(b,c);this.bulletSet.push(a);
return a},positiveClip:function(a){a.clipRect(this.pmx,this.pmy,this.pmw,this.pmh)},negativeClip:function(a){a.clipRect(this.nmx,this.nmy,this.nmw,this.nmh)},drawLineGraph:function(a,b,c,d){var e=this;if(1<a.length){var f=e.set,g=e.chart,h=e.container,k=h.set(),l=h.set();f.push(l);f.push(k);var m=e.lineAlpha,n=e.lineThickness,f=e.fillAlphas,p=e.lineColorR,q=e.negativeLineAlpha;isNaN(q)&&(q=m);var r=e.lineColorSwitched;r&&(p=r);var r=e.fillColorsR,s=e.fillColorsSwitched;s&&(r=s);var v=e.dashLength;
(s=e.dashLengthSwitched)&&(v=s);var s=e.negativeLineColor,w=e.negativeFillColors,t=e.negativeFillAlphas,u=e.baseCoord;0!==e.negativeBase&&(u=e.valueAxis.getCoordinate(e.negativeBase));m=AmCharts.line(h,a,b,p,m,n,v,!1,!0);k.push(m);k.click(function(a){e.handleGraphEvent(a,"clickGraph")}).mouseover(function(a){e.handleGraphEvent(a,"rollOverGraph")}).mouseout(function(a){e.handleGraphEvent(a,"rollOutGraph")});void 0===s||e.useNegativeColorIfDown||(n=AmCharts.line(h,a,b,s,q,n,v,!1,!0),l.push(n));if(0<
f||0<t)if(n=a.join(";").split(";"),q=b.join(";").split(";"),m=g.type,"serial"==m?0<c.length?(c.reverse(),d.reverse(),n=a.concat(c),q=b.concat(d)):e.rotate?(q.push(q[q.length-1]),n.push(u),q.push(q[0]),n.push(u),q.push(q[0]),n.push(n[0])):(n.push(n[n.length-1]),q.push(u),n.push(n[0]),q.push(u),n.push(a[0]),q.push(q[0])):"xy"==m&&(b=e.fillToAxis)&&(AmCharts.isString(b)&&(b=g.getValueAxisById(b)),"H"==b.orientation?(u="top"==b.position?0:b.viH,n.push(n[n.length-1]),q.push(u),n.push(n[0]),q.push(u),n.push(a[0]),
q.push(q[0])):(u="left"==b.position?0:b.viW,q.push(q[q.length-1]),n.push(u),q.push(q[0]),n.push(u),q.push(q[0]),n.push(n[0]))),a=e.gradientRotation,0<f&&(g=AmCharts.polygon(h,n,q,r,f,1,"#000",0,a),g.pattern(e.pattern),k.push(g)),w||void 0!==s)isNaN(t)&&(t=f),w||(w=s),h=AmCharts.polygon(h,n,q,w,t,1,"#000",0,a),h.pattern(e.pattern),l.push(h),l.click(function(a){e.handleGraphEvent(a,"clickGraph")}).mouseover(function(a){e.handleGraphEvent(a,"rollOverGraph")}).mouseout(function(a){e.handleGraphEvent(a,
"rollOutGraph")});e.applyMask(l,k)}},applyMask:function(a,b){var c=a.length();"serial"!=this.chart.type||this.scrollbar||(this.positiveClip(b),0<c&&this.negativeClip(a))},drawSmoothedGraph:function(a,b,c,d){if(1<a.length){var e=this.set,f=this.container,g=f.set(),h=f.set();e.push(h);e.push(g);var k=this.lineAlpha,l=this.lineThickness,e=this.dashLength,m=this.fillAlphas,n=this.lineColorR,p=this.fillColorsR,q=this.negativeLineColor,r=this.negativeFillColors,s=this.negativeFillAlphas,v=this.baseCoord,
w=this.lineColorSwitched;w&&(n=w);(w=this.fillColorsSwitched)&&(p=w);w=this.negativeLineAlpha;isNaN(w)&&(w=k);k=new AmCharts.Bezier(f,a,b,n,k,l,p,0,e);g.push(k.path);void 0!==q&&(l=new AmCharts.Bezier(f,a,b,q,w,l,p,0,e),h.push(l.path));0<m&&(k=a.join(";").split(";"),n=b.join(";").split(";"),l="",0<c.length?(c.push("M"),d.push("M"),c.reverse(),d.reverse(),k=a.concat(c),n=b.concat(d)):(this.rotate?(l+=" L"+v+","+b[b.length-1],l+=" L"+v+","+b[0]):(l+=" L"+a[a.length-1]+","+v,l+=" L"+a[0]+","+v),l+=" L"+
a[0]+","+b[0]),c=new AmCharts.Bezier(f,k,n,NaN,0,0,p,m,e,l),c.path.pattern(this.pattern),g.push(c.path),r||void 0!==q)&&(s||(s=m),r||(r=q),a=new AmCharts.Bezier(f,a,b,NaN,0,0,r,s,e,l),a.path.pattern(this.pattern),h.push(a.path));this.applyMask(h,g)}},launchAnimation:function(){var a=this,b=a.chart.startDuration;if(0<b&&!a.animationPlayed){var c=a.set,d=a.bulletSet;AmCharts.VML||(c.attr({opacity:a.startAlpha}),d.attr({opacity:a.startAlpha}));c.hide();d.hide();a.seqAn?(b=setTimeout(function(){a.animateGraphs.call(a)},
a.index*b*1E3),a.timeOuts.push(b)):a.animateGraphs()}},animateGraphs:function(){var a=this.chart,b=this.set,c=this.bulletSet,d=this.x,e=this.y;b.show();c.show();var f=a.startDuration,a=a.startEffect;b&&(this.rotate?(b.translate(-1E3,e),c.translate(-1E3,e)):(b.translate(d,-1E3),c.translate(d,-1E3)),b.animate({opacity:1,translate:d+","+e},f,a),c.animate({opacity:1,translate:d+","+e},f,a))},animate:function(a){var b=this.chart,c=this.animationArray;!a&&0<c.length&&(a=c[0],c.shift());c=AmCharts[AmCharts.getEffect(b.startEffect)];
b=b.startDuration;a&&(this.rotate?a.animateWidth(b,c):a.animateHeight(b,c),a.set.show())},legendKeyColor:function(){var a=this.legendColor,b=this.lineAlpha;void 0===a&&(a=this.lineColorR,0===b&&(b=this.fillColorsR)&&(a="object"==typeof b?b[0]:b));return a},legendKeyAlpha:function(){var a=this.legendAlpha;void 0===a&&(a=this.lineAlpha,this.fillAlphas>a&&(a=this.fillAlphas),0===a&&(a=this.bulletAlpha),0===a&&(a=1));return a},createBullet:function(a,b,c,d){d=this.container;var e=this.bulletOffset,f=
this.bulletSize;isNaN(a.bulletSize)||(f=a.bulletSize);var g=a.values.value,h=this.maxValue,k=this.minValue,l=this.maxBulletSize,m=this.minBulletSize;isNaN(h)||(isNaN(g)||(f=(g-k)/(h-k)*(l-m)+m),k==h&&(f=l));h=f;this.bulletAxis&&(f=a.values.error,isNaN(f)||(g=f),f=this.bulletAxis.stepWidth*g);f<this.minBulletSize&&(f=this.minBulletSize);this.rotate?b=a.isNegative?b-e:b+e:c=a.isNegative?c+e:c-e;var n,m=this.bulletColorR;a.lineColor&&(this.bulletColorSwitched=a.lineColor);this.bulletColorSwitched&&(m=
this.bulletColorSwitched);a.isNegative&&void 0!==this.bulletColorNegative&&(m=this.bulletColorNegative);void 0!==a.color&&(m=a.color);var p;"xy"==this.chart.type&&this.valueField&&(p=this.pattern,a.pattern&&(p=a.pattern));e=this.bullet;a.bullet&&(e=a.bullet);var g=this.bulletBorderThickness,k=this.bulletBorderColorR,l=this.bulletBorderAlpha,q=this.bulletAlpha;k||(k=m);this.useLineColorForBulletBorder&&(k=this.lineColorR);var r=a.alpha;isNaN(r)||(q=r);if("none"!=this.bullet||a.bullet)n=AmCharts.bullet(d,
e,f,m,q,g,k,l,h,0,p);if(this.customBullet||a.customBullet)p=this.customBullet,a.customBullet&&(p=a.customBullet),p&&(n&&n.remove(),"function"==typeof p?(n=new p,n.chart=this.chart,a.bulletConfig&&(n.availableSpace=c,n.graph=this,n.graphDataItem=a,n.bulletY=c,a.bulletConfig.minCoord=this.minCoord-c,n.bulletConfig=a.bulletConfig),n.write(d),n=n.set):(this.chart.path&&(p=this.chart.path+p),n=d.set(),d=d.image(p,0,0,f,f),n.push(d),this.centerCustomBullets&&d.translate(-f/2,-f/2)));n&&((a.url||this.showHandOnHover)&&
n.setAttr("cursor","pointer"),"serial"==this.chart.type&&(0>b-0||b-0>this.width||c<-f/2||c-0>this.height)&&(n.remove(),n=null),n&&(this.bulletSet.push(n),n.translate(b,c),this.addListeners(n,a),this.allBullets.push(n)),a.bx=b,a.by=c);a.bulletGraphics=n;return f},showBullets:function(){var a=this.allBullets,b;this.bulletsHidden=!1;for(b=0;b<a.length;b++)a[b].show()},hideBullets:function(){var a=this.allBullets,b;this.bulletsHidden=!0;for(b=0;b<a.length;b++)a[b].hide()},addListeners:function(a,b){var c=
this;a.mouseover(function(a){c.handleRollOver(b,a)}).mouseout(function(a){c.handleRollOut(b,a)}).touchend(function(a){c.handleRollOver(b,a);c.chart.panEventsEnabled&&c.handleClick(b,a)}).touchstart(function(a){c.handleRollOver(b,a)}).click(function(a){c.handleClick(b,a)}).dblclick(function(a){c.handleDoubleClick(b,a)}).contextmenu(function(a){c.handleRightClick(b,a)})},handleRollOver:function(a,b){if(a){var c=this.chart,d={type:"rollOverGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,
event:b};this.fire("rollOverGraphItem",d);c.fire("rollOverGraphItem",d);clearTimeout(c.hoverInt);d=this.showBalloon;c.chartCursor&&"serial"==c.type&&(d=!1,!c.chartCursor.valueBalloonsEnabled&&this.showBalloon&&(d=!0));if(d){var d=c.formatString(this.balloonText,a,!0),e=this.balloonFunction;e&&(d=e(a,a.graph));d=AmCharts.cleanFromEmpty(d);e=c.getBalloonColor(this,a);c.balloon.showBullet=!1;c.balloon.pointerOrientation="V";var f=a.x,g=a.y;c.rotate&&(f=a.y,g=a.x);c.showBalloon(d,e,!0,f+c.marginLeftReal,
g+c.marginTopReal)}}this.handleGraphEvent(b,"rollOverGraph")},handleRollOut:function(a,b){this.chart.hideBalloon();if(a){var c={type:"rollOutGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire("rollOutGraphItem",c);this.chart.fire("rollOutGraphItem",c)}this.handleGraphEvent(b,"rollOutGraph")},handleClick:function(a,b){if(a){var c={type:"clickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire("clickGraphItem",c);this.chart.fire("clickGraphItem",
c);AmCharts.getURL(a.url,this.urlTarget)}this.handleGraphEvent(b,"clickGraph")},handleGraphEvent:function(a,b){var c={type:b,graph:this,target:this,chart:this.chart,event:a};this.fire(b,c);this.chart.fire(b,c)},handleRightClick:function(a,b){if(a){var c={type:"rightClickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire("rightClickGraphItem",c);this.chart.fire("rightClickGraphItem",c)}},handleDoubleClick:function(a,b){if(a){var c={type:"doubleClickGraphItem",
item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire("doubleClickGraphItem",c);this.chart.fire("doubleClickGraphItem",c)}},zoom:function(a,b){this.start=a;this.end=b;this.draw()},changeOpacity:function(a){var b=this.set;b&&b.setAttr("opacity",a);if(b=this.ownColumns){var c;for(c=0;c<b.length;c++){var d=b[c].set;d&&d.setAttr("opacity",a)}}(b=this.bulletSet)&&b.setAttr("opacity",a)},destroy:function(){AmCharts.remove(this.set);AmCharts.remove(this.bulletSet);var a=this.timeOuts;
if(a){var b;for(b=0;b<a.length;b++)clearTimeout(a[b])}this.timeOuts=[]}});AmCharts.ChartCursor=AmCharts.Class({construct:function(a){this.cname="ChartCursor";this.createEvents("changed","zoomed","onHideCursor","draw","selected","moved");this.enabled=!0;this.cursorAlpha=1;this.selectionAlpha=.2;this.cursorColor="#CC0000";this.categoryBalloonAlpha=1;this.color="#FFFFFF";this.type="cursor";this.zoomed=!1;this.zoomable=!0;this.pan=!1;this.categoryBalloonDateFormat="MMM DD, YYYY";this.categoryBalloonEnabled=this.valueBalloonsEnabled=!0;this.rolledOver=!1;this.cursorPosition=
"middle";this.bulletsEnabled=this.skipZoomDispatch=!1;this.bulletSize=8;this.selectWithoutZooming=this.oneBalloonOnly=!1;this.graphBulletSize=1.7;this.animationDuration=.3;this.zooming=!1;this.adjustment=0;this.avoidBalloonOverlapping=!0;AmCharts.applyTheme(this,a,this.cname)},draw:function(){var a=this;a.destroy();var b=a.chart,c=b.container;a.rotate=b.rotate;a.container=c;c=c.set();c.translate(a.x,a.y);a.set=c;b.cursorSet.push(c);c=new AmCharts.AmBalloon;c.chart=b;a.categoryBalloon=c;AmCharts.copyProperties(b.balloon,
c);c.cornerRadius=0;c.shadowAlpha=0;c.borderThickness=1;c.borderAlpha=1;c.showBullet=!1;var d=a.categoryBalloonColor;void 0===d&&(d=a.cursorColor);c.fillColor=d;c.fillAlpha=a.categoryBalloonAlpha;c.borderColor=d;c.color=a.color;a.rotate&&(c.pointerOrientation="H");a.extraWidth=0;a.prevX=[];a.prevY=[];a.prevTX=[];a.prevTY=[];if(a.valueBalloonsEnabled)for(c=0;c<b.graphs.length;c++)d=new AmCharts.AmBalloon,d.chart=b,AmCharts.copyProperties(b.balloon,d),b.graphs[c].valueBalloon=d;"cursor"==a.type?a.createCursor():
a.createCrosshair();a.interval=setInterval(function(){a.detectMovement.call(a)},40)},updateData:function(){var a=this.chart;this.data=a.chartData;this.firstTime=a.firstTime;this.lastTime=a.lastTime},createCursor:function(){var a=this.chart,b=this.cursorAlpha,c=a.categoryAxis,d=c.position,e=c.inside,f=c.axisThickness,g=this.categoryBalloon,h,k,l=a.dx,m=a.dy,n=this.x,p=this.y,q=this.width,r=this.height,a=a.rotate,s=c.tickLength;g.pointerWidth=s;a?(h=[0,q,q+l],k=[0,0,m]):(h=[l,0,0],k=[m,0,r]);this.line=
b=AmCharts.line(this.container,h,k,this.cursorColor,b,1);(h=this.fullRectSet)?(h.push(b),h.translate(this.x,this.y)):this.set.push(b);a?(e&&(g.pointerWidth=0),"right"==d?e?g.setBounds(n,p+m,n+q+l,p+r+m):g.setBounds(n+q+l+f,p+m,n+q+1E3,p+r+m):e?g.setBounds(n,p,q+n,r+p):g.setBounds(-1E3,-1E3,n-s-f,p+r+15)):(g.maxWidth=q,c.parseDates&&(s=0,g.pointerWidth=0),"top"==d?e?g.setBounds(n+l,p+m,q+l+n,r+p):g.setBounds(n+l,-1E3,q+l+n,p+m-s-f):e?g.setBounds(n,p,q+n,r+p-s):g.setBounds(n,p+r+s+f-1,n+q,p+r+s+f));
this.hideCursor()},createCrosshair:function(){var a=this.cursorAlpha,b=this.container,c=AmCharts.line(b,[0,0],[0,this.height],this.cursorColor,a,1),a=AmCharts.line(b,[0,this.width],[0,0],this.cursorColor,a,1);this.set.push(c);this.set.push(a);this.vLine=c;this.hLine=a;this.hideCursor()},detectMovement:function(){var a=this.chart;if(a.mouseIsOver){var b=a.mouseX-this.x,c=a.mouseY-this.y;-.5<b&&b<this.width+1&&0<c&&c<this.height?(this.drawing?this.rolledOver||a.setMouseCursor("crosshair"):this.pan&&
(this.rolledOver||a.setMouseCursor("move")),this.rolledOver=!0,this.setPosition()):this.rolledOver&&(this.handleMouseOut(),this.rolledOver=!1)}else this.rolledOver&&(this.handleMouseOut(),this.rolledOver=!1)},getMousePosition:function(){var a,b=this.width,c=this.height;a=this.chart;this.rotate?(a=a.mouseY-this.y,0>a&&(a=0),a>c&&(a=c)):(a=a.mouseX-this.x-1,0>a&&(a=0),a>b&&(a=b));return a},updateCrosshair:function(){var a=this.chart,b=a.mouseX-this.x,c=a.mouseY-this.y,d=this.vLine,e=this.hLine,b=AmCharts.fitToBounds(b,
0,this.width),c=AmCharts.fitToBounds(c,0,this.height);0<this.cursorAlpha&&(d.show(),e.show(),d.translate(b,0),e.translate(0,c));this.zooming&&(a.hideXScrollbar&&(b=NaN),a.hideYScrollbar&&(c=NaN),this.updateSelectionSize(b,c));this.fireMoved();a.mouseIsOver||this.zooming||this.hideCursor()},fireMoved:function(){var a=this.chart,b={type:"moved",target:this};b.chart=a;b.zooming=this.zooming;b.x=a.mouseX-this.x;b.y=a.mouseY-this.y;this.fire("moved",b)},updateSelectionSize:function(a,b){AmCharts.remove(this.selection);
var c=this.selectionPosX,d=this.selectionPosY,e=0,f=0,g=this.width,h=this.height;isNaN(a)||(c>a&&(e=a,g=c-a),c<a&&(e=c,g=a-c),c==a&&(e=a,g=0),g+=this.extraWidth,e-=this.extraWidth/2);isNaN(b)||(d>b&&(f=b,h=d-b),d<b&&(f=d,h=b-d),d==b&&(f=b,h=0),h+=this.extraWidth,f-=this.extraWidth/2);0<g&&0<h&&(c=AmCharts.rect(this.container,g,h,this.cursorColor,this.selectionAlpha),c.translate(e+this.x,f+this.y),this.selection=c)},arrangeBalloons:function(){var a=this.valueBalloons,b=this.x,c=this.y,d=this.height+
c;a.sort(this.compareY);var e;for(e=0;e<a.length;e++){var f=a[e].balloon;f.setBounds(b,c,b+this.width,d);f.prevX=this.prevX[e];f.prevY=this.prevY[e];f.prevTX=this.prevTX[e];f.prevTY=this.prevTY[e];f.draw();d=f.yPos-3}this.arrangeBalloons2()},compareY:function(a,b){return a.yy<b.yy?1:-1},arrangeBalloons2:function(){var a=this.valueBalloons;a.reverse();var b,c=this.x,d,e,f=a.length;for(e=0;e<f;e++){var g=a[e].balloon;b=g.bottom;var h=g.bottom-g.yPos,k=f-e-1;0<e&&b-h<d+3&&(g.setBounds(c,d+3,c+this.width,
d+h+3),g.prevX=this.prevX[k],g.prevY=this.prevY[k],g.prevTX=this.prevTX[k],g.prevTY=this.prevTY[k],g.draw());g.set&&g.set.show();this.prevX[k]=g.prevX;this.prevY[k]=g.prevY;this.prevTX[k]=g.prevTX;this.prevTY[k]=g.prevTY;d=g.bottom}},showBullets:function(){AmCharts.remove(this.allBullets);var a=this.container,b=a.set();this.set.push(b);this.set.show();this.allBullets=b;var b=this.chart.graphs,c;for(c=0;c<b.length;c++){var d=b[c];if(!d.hidden&&d.balloonText){var e=this.data[this.index].axes[d.valueAxis.id].graphs[d.id],
f=e.y;if(!isNaN(f)){var g,h;g=e.x;this.rotate?(h=f,f=g):h=g;d=AmCharts.circle(a,this.bulletSize/2,this.chart.getBalloonColor(d,e,!0),d.cursorBulletAlpha);d.translate(h,f);this.allBullets.push(d)}}}},destroy:function(){this.clear();AmCharts.remove(this.selection);this.selection=null;var a=this.categoryBalloon;a&&a.destroy();this.destroyValueBalloons();AmCharts.remove(this.set)},clear:function(){clearInterval(this.interval)},destroyValueBalloons:function(){var a=this.valueBalloons;if(a){var b;for(b=
0;b<a.length;b++)a[b].balloon.hide()}},zoom:function(a,b,c,d){var e=this.chart;this.destroyValueBalloons();this.zooming=!1;var f;this.rotate?this.selectionPosY=f=e.mouseY:this.selectionPosX=f=e.mouseX;this.start=a;this.end=b;this.startTime=c;this.endTime=d;this.zoomed=!0;d=e.categoryAxis;e=this.rotate;b=this.width;c=this.height;a=d.stepWidth;this.fullWidth&&(f=1,d.parseDates&&!d.equalSpacing&&(f=d.minDuration()),e?this.extraWidth=c=a*f:(this.extraWidth=b=a*f,this.categoryBalloon.minWidth=b),this.line&&
this.line.remove(),this.line=AmCharts.rect(this.container,b,c,this.cursorColor,this.cursorAlpha,0),this.fullRectSet&&this.fullRectSet.push(this.line));this.stepWidth=a;this.tempVal=this.valueBalloonsEnabled;this.valueBalloonsEnabled=!1;this.setPosition();this.valueBalloonsEnabled=this.tempVal;this.hideCursor()},hideObj:function(a){a&&a.hide()},hideCursor:function(a){void 0===a&&(a=!0);this.hideObj(this.set);this.hideObj(this.categoryBalloon);this.hideObj(this.line);this.hideObj(this.vLine);this.hideObj(this.hLine);
this.hideObj(this.allBullets);this.destroyValueBalloons();this.selectWithoutZooming||AmCharts.remove(this.selection);this.previousIndex=NaN;a&&this.fire("onHideCursor",{type:"onHideCursor",chart:this.chart,target:this});this.drawing||this.chart.setMouseCursor("auto");this.normalizeBulletSize()},setPosition:function(a,b,c){void 0===b&&(b=!0);if("cursor"==this.type){if(this.tempPosition=NaN,AmCharts.ifArray(this.data))isNaN(a)&&(a=this.getMousePosition()),(a!=this.previousMousePosition||!0===this.zoomed||
this.oneBalloonOnly)&&!isNaN(a)&&("mouse"==this.cursorPosition&&(this.tempPosition=a),isNaN(c)&&(c=this.chart.categoryAxis.xToIndex(a)),c!=this.previousIndex||this.zoomed||"mouse"==this.cursorPosition||this.oneBalloonOnly)&&(this.updateCursor(c,b),this.zoomed=!1),this.previousMousePosition=a}else this.updateCrosshair()},normalizeBulletSize:function(){var a=this.resizedBullets;if(a)for(var b=0;b<a.length;b++){var c=a[b],d=c.bulletGraphics;d&&(d.translate(c.bx,c.by,1),c=c.graph,isNaN(this.graphBulletAlpha)||
(d.setAttr("fill-opacity",c.bulletAlpha),d.setAttr("stroke-opacity",c.bulletBorderAlpha)))}},updateCursor:function(a,b){var c=this.chart,d=this.fullWidth,e=c.mouseX-this.x,f=c.mouseY-this.y;this.drawingNow&&(AmCharts.remove(this.drawingLine),this.drawingLine=AmCharts.line(this.container,[this.x+this.drawStartX,this.x+e],[this.y+this.drawStartY,this.y+f],this.cursorColor,1,1));if(this.enabled){void 0===b&&(b=!0);this.index=a+=this.adjustment;var g=c.categoryAxis,h=c.dx,k=c.dy,l=this.x+1,m=this.y+1,
n=this.width,p=this.height,q=this.data[a];this.fireMoved();if(q){var r=q.x[g.id],s=c.rotate,v=g.inside,w=this.stepWidth,t=this.categoryBalloon,u=this.firstTime,y=this.lastTime,E=this.cursorPosition,A=g.position,z=this.zooming,K=this.panning,I=c.graphs,F=g.axisThickness;if(c.mouseIsOver||z||K||this.forceShow)if(this.forceShow=!1,K){var h=this.panClickPos,c=this.panClickEndTime,z=this.panClickStartTime,H=this.panClickEnd,l=this.panClickStart,e=(s?h-f:h-e)/w;if(!g.parseDates||g.equalSpacing)e=Math.round(e);
0!==e&&(h={type:"zoomed",target:this},h.chart=this.chart,g.parseDates&&!g.equalSpacing?(c+e>y&&(e=y-c),z+e<u&&(e=u-z),h.start=Math.round(z+e),h.end=Math.round(c+e),this.fire(h.type,h)):H+e>=this.data.length||0>l+e||(h.start=l+e,h.end=H+e,this.fire(h.type,h)))}else{"start"==E?r-=g.cellWidth/2:"mouse"==E&&(c.mouseIsOver?r=s?f-2:e-2:isNaN(this.tempPosition)||(r=this.tempPosition-2));if(s){if(0>r)if(z)r=0;else{this.hideCursor();return}if(r>p+1)if(z)r=p+1;else{this.hideCursor();return}}else{if(0>r)if(z)r=
0;else{this.hideCursor();return}if(r>n)if(z)r=n;else{this.hideCursor();return}}if(0<this.cursorAlpha){var L=this.line;s?(u=0,y=r+k,d&&(y-=g.cellWidth/2)):(u=r,y=0,d&&(u-=g.cellWidth/2));w=this.animationDuration;0<w&&!this.zooming?isNaN(this.previousX)?L.translate(u,y):(L.translate(this.previousX,this.previousY),L.animate({translate:u+","+y},w,"easeOutSine")):L.translate(u,y);this.previousX=u;this.previousY=y;L.show()}this.linePos=s?r+k:r;z&&(d&&L.hide(),s?this.updateSelectionSize(NaN,r):this.updateSelectionSize(r,
NaN));w=!0;z&&(w=!1);this.categoryBalloonEnabled&&w?(s?(v&&("right"==A?t.setBounds(l,m+k,l+n+h,m+r+k):t.setBounds(l,m+k,l+n+h,m+r)),"right"==A?v?t.setPosition(l+n+h,m+r+k):t.setPosition(l+n+h+F,m+r+k):v?t.setPosition(l,m+r):t.setPosition(l-F,m+r)):"top"==A?v?t.setPosition(l+r+h,m+k):t.setPosition(l+r+h,m+k-F+1):v?t.setPosition(l+r,m+p):t.setPosition(l+r,m+p+F-1),(u=this.categoryBalloonFunction)?t.showBalloon(u(q.category)):g.parseDates?(g=AmCharts.formatDate(q.category,this.categoryBalloonDateFormat),
-1!=g.indexOf("fff")&&(g=AmCharts.formatMilliseconds(g,q.category)),t.showBalloon(g)):t.showBalloon(AmCharts.fixNewLines(q.category))):t.hide();I&&this.bulletsEnabled&&this.showBullets();if(this.oneBalloonOnly){k=Infinity;for(g=0;g<I.length;g++)u=I[g],u.showBalloon&&!u.hidden&&u.balloonText&&(y=q.axes[u.valueAxis.id].graphs[u.id],t=y.y,isNaN(t)||(s?Math.abs(e-t)<k&&(k=Math.abs(e-t),H=u):Math.abs(f-t)<k&&(k=Math.abs(f-t),H=u)));this.mostCloseGraph&&(H=this.mostCloseGraph)}if(a!=this.previousIndex||
H!=this.previousMostCloseGraph)if(this.normalizeBulletSize(),this.destroyValueBalloons(),this.resizedBullets=[],I&&this.valueBalloonsEnabled&&w&&c.balloon.enabled){this.valueBalloons=w=[];for(g=0;g<I.length;g++)if(u=I[g],t=NaN,(!this.oneBalloonOnly||u==H)&&u.showBalloon&&!u.hidden&&u.balloonText&&("step"==u.type&&"left"==u.stepDirection&&(q=this.data[a+1]),q)){if(y=q.axes[u.valueAxis.id].graphs[u.id])t=y.y;if(this.showNextAvailable&&isNaN(t)&&a+1<this.data.length)for(k=a+1;k<this.data.length;k++)if(r=
this.data[k])if(y=r.axes[u.valueAxis.id].graphs[u.id],t=y.y,!isNaN(t))break;if(!isNaN(t)){r=y.x;v=!0;if(s){if(k=t,0>r||r>p)v=!1}else if(k=r,r=t,0>k||k>n+h+1)v=!1;v&&(1!=this.graphBulletSize&&AmCharts.isModern&&(v=y.bulletGraphics)&&(v.getBBox(),v.translate(y.bx,y.by,this.graphBulletSize),this.resizedBullets.push(y),A=this.graphBulletAlpha,isNaN(A)||(v.setAttr("fill-opacity",A),v.setAttr("stroke-opacity",A))),v=u.valueBalloon,A=c.getBalloonColor(u,y),v.setBounds(l,m,l+n,m+p),v.pointerOrientation="H",
F=this.balloonPointerOrientation,"vertical"==F&&(v.pointerOrientation="V"),"horizontal"==F&&(v.pointerOrientation="H"),v.changeColor(A),void 0!==u.balloonAlpha&&(v.fillAlpha=u.balloonAlpha),void 0!==u.balloonTextColor&&(v.color=u.balloonTextColor),v.setPosition(k+l,r+m),k=c.formatString(u.balloonText,y,!0),(r=u.balloonFunction)&&(k=r(y,u).toString()),""!==k&&(s?v.showBalloon(k):(v.text=k,v.show=!0),w.push({yy:t,balloon:v})),!s&&v.set&&(v.set.hide(),u=v.textDiv)&&(u.style.visibility="hidden"))}}this.avoidBalloonOverlapping&&
this.arrangeBalloons()}b?(h={type:"changed"},h.index=a,h.chart=this.chart,h.zooming=z,h.mostCloseGraph=H,h.position=s?f:e,h.target=this,c.fire("changed",h),this.fire("changed",h),this.skipZoomDispatch=!1):(this.skipZoomDispatch=!0,c.updateLegendValues(a));this.previousIndex=a;this.previousMostCloseGraph=H}}}else this.hideCursor()},enableDrawing:function(a){this.enabled=!a;this.hideCursor();this.rolledOver=!1;this.drawing=a},isZooming:function(a){a&&a!=this.zooming&&this.handleMouseDown("fake");a||
a==this.zooming||this.handleMouseUp()},handleMouseOut:function(){if(this.enabled)if(this.zooming)this.setPosition();else{this.index=void 0;var a={type:"changed",index:void 0,target:this};a.chart=this.chart;this.fire("changed",a);this.hideCursor()}},handleReleaseOutside:function(){this.handleMouseUp()},handleMouseUp:function(){var a=this.chart,b=this.data,c;if(a){var d=a.mouseX-this.x,e=a.mouseY-this.y;if(this.drawingNow){this.drawingNow=!1;AmCharts.remove(this.drawingLine);c=this.drawStartX;var f=
this.drawStartY;if(2<Math.abs(c-d)||2<Math.abs(f-e))c={type:"draw",target:this,chart:a,initialX:c,initialY:f,finalX:d,finalY:e},this.fire(c.type,c)}if(this.enabled&&0<b.length){if(this.pan)this.rolledOver=!1;else if(this.zoomable&&this.zooming){c=this.selectWithoutZooming?{type:"selected"}:{type:"zoomed"};c.target=this;c.chart=a;if("cursor"==this.type)this.rotate?this.selectionPosY=e:this.selectionPosX=e=d,2>Math.abs(e-this.initialMouse)&&this.fromIndex==this.index||(this.index<this.fromIndex?(c.end=
this.fromIndex,c.start=this.index):(c.end=this.index,c.start=this.fromIndex),e=a.categoryAxis,e.parseDates&&!e.equalSpacing&&(c.start=b[c.start].time,c.end=a.getEndTime(b[c.end].time)),this.skipZoomDispatch||this.fire(c.type,c));else{var g=this.initialMouseX,h=this.initialMouseY;3>Math.abs(d-g)&&3>Math.abs(e-h)||(b=Math.min(g,d),f=Math.min(h,e),d=Math.abs(g-d),e=Math.abs(h-e),a.hideXScrollbar&&(b=0,d=this.width),a.hideYScrollbar&&(f=0,e=this.height),c.selectionHeight=e,c.selectionWidth=d,c.selectionY=
f,c.selectionX=b,this.skipZoomDispatch||this.fire(c.type,c))}this.selectWithoutZooming||AmCharts.remove(this.selection)}this.panning=this.zooming=this.skipZoomDispatch=!1}}},showCursorAt:function(a){var b=this.chart.categoryAxis;a=b.parseDates?b.dateToCoordinate(a):b.categoryToCoordinate(a);this.previousMousePosition=NaN;this.forceShow=!0;this.setPosition(a,!1)},clearSelection:function(){AmCharts.remove(this.selection)},handleMouseDown:function(a){if(this.zoomable||this.pan||this.drawing){var b=this.rotate,
c=this.chart,d=c.mouseX-this.x,e=c.mouseY-this.y;if(0<d&&d<this.width&&0<e&&e<this.height||"fake"==a)this.setPosition(),this.selectWithoutZooming&&AmCharts.remove(this.selection),this.drawing?(this.drawStartY=e,this.drawStartX=d,this.drawingNow=!0):this.pan?(this.zoomable=!1,c.setMouseCursor("move"),this.panning=!0,this.panClickPos=b?e:d,this.panClickStart=this.start,this.panClickEnd=this.end,this.panClickStartTime=this.startTime,this.panClickEndTime=this.endTime):this.zoomable&&("cursor"==this.type?
(this.fromIndex=this.index,b?(this.initialMouse=e,this.selectionPosY=this.linePos):(this.initialMouse=d,this.selectionPosX=this.linePos)):(this.initialMouseX=d,this.initialMouseY=e,this.selectionPosX=d,this.selectionPosY=e),this.zooming=!0)}}});AmCharts.SimpleChartScrollbar=AmCharts.Class({construct:function(a){this.createEvents("zoomed");this.backgroundColor="#D4D4D4";this.backgroundAlpha=1;this.selectedBackgroundColor="#EFEFEF";this.scrollDuration=this.selectedBackgroundAlpha=1;this.resizeEnabled=!0;this.hideResizeGrips=!1;this.scrollbarHeight=20;this.updateOnReleaseOnly=!1;9>document.documentMode&&(this.updateOnReleaseOnly=!0);this.dragIconWidth=18;this.dragIconHeight=25;AmCharts.applyTheme(this,a,"SimpleChartScrollbar")},draw:function(){var a=
this;a.destroy();a.interval=setInterval(function(){a.updateScrollbar.call(a)},40);var b=a.chart.container,c=a.rotate,d=a.chart,e=b.set();a.set=e;d.scrollbarsSet.push(e);var f,g;c?(f=a.scrollbarHeight,g=d.plotAreaHeight):(g=a.scrollbarHeight,f=d.plotAreaWidth);a.width=f;if((a.height=g)&&f){var h=AmCharts.rect(b,f,g,a.backgroundColor,a.backgroundAlpha,1,a.backgroundColor,a.backgroundAlpha);a.bg=h;e.push(h);h=AmCharts.rect(b,f,g,"#000",.005);e.push(h);a.invisibleBg=h;h.click(function(){a.handleBgClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()}).touchend(function(){a.handleBgClick()});
h=AmCharts.rect(b,f,g,a.selectedBackgroundColor,a.selectedBackgroundAlpha);a.selectedBG=h;e.push(h);f=AmCharts.rect(b,f,g,"#000",.005);a.dragger=f;e.push(f);f.mousedown(function(b){a.handleDragStart(b)}).mouseup(function(){a.handleDragStop()}).mouseover(function(){a.handleDraggerOver()}).mouseout(function(){a.handleMouseOut()}).touchstart(function(b){a.handleDragStart(b)}).touchend(function(){a.handleDragStop()});f=d.pathToImages;c?(h=f+"dragIconH.gif",f=a.dragIconWidth,c=a.dragIconHeight):(h=f+"dragIcon.gif",
c=a.dragIconWidth,f=a.dragIconHeight);g=b.image(h,0,0,c,f);var h=b.image(h,0,0,c,f),k=10,l=20;d.panEventsEnabled&&(k=25,l=a.scrollbarHeight);var m=AmCharts.rect(b,k,l,"#000",.005),n=AmCharts.rect(b,k,l,"#000",.005);n.translate(-(k-c)/2,-(l-f)/2);m.translate(-(k-c)/2,-(l-f)/2);c=b.set([g,n]);b=b.set([h,m]);a.iconLeft=c;a.iconRight=b;c.mousedown(function(){a.leftDragStart()}).mouseup(function(){a.leftDragStop()}).mouseover(function(){a.iconRollOver()}).mouseout(function(){a.iconRollOut()}).touchstart(function(b){a.leftDragStart()}).touchend(function(){a.leftDragStop()});
b.mousedown(function(){a.rightDragStart()}).mouseup(function(){a.rightDragStop()}).mouseover(function(){a.iconRollOver()}).mouseout(function(){a.iconRollOut()}).touchstart(function(b){a.rightDragStart()}).touchend(function(){a.rightDragStop()});AmCharts.ifArray(d.chartData)?e.show():e.hide();a.hideDragIcons();a.clipDragger(!1)}e.translate(a.x,a.y)},updateScrollbarSize:function(a,b){var c=this.dragger,d,e,f,g;this.rotate?(d=0,e=a,f=this.width+1,g=b-a,c.setAttr("height",b-a),c.setAttr("y",e)):(d=a,
e=0,f=b-a,g=this.height+1,c.setAttr("width",b-a),c.setAttr("x",d));this.clipAndUpdate(d,e,f,g)},updateScrollbar:function(){var a,b=!1,c,d,e=this.x,f=this.y,g=this.dragger,h=this.getDBox();c=h.x+e;d=h.y+f;var k=h.width,h=h.height,l=this.rotate,m=this.chart,n=this.width,p=this.height,q=m.mouseX,r=m.mouseY;a=this.initialMouse;m.mouseIsOver&&(this.dragging&&(m=this.initialCoord,l?(a=m+(r-a),0>a&&(a=0),m=p-h,a>m&&(a=m),g.setAttr("y",a)):(a=m+(q-a),0>a&&(a=0),m=n-k,a>m&&(a=m),g.setAttr("x",a))),this.resizingRight&&
(l?(a=r-d,a+d>p+f&&(a=p-d+f),0>a?(this.resizingRight=!1,b=this.resizingLeft=!0):(0===a&&(a=.1),g.setAttr("height",a))):(a=q-c,a+c>n+e&&(a=n-c+e),0>a?(this.resizingRight=!1,b=this.resizingLeft=!0):(0===a&&(a=.1),g.setAttr("width",a)))),this.resizingLeft&&(l?(c=d,d=r,d<f&&(d=f),d>p+f&&(d=p+f),a=!0===b?c-d:h+c-d,0>a?(this.resizingRight=!0,this.resizingLeft=!1,g.setAttr("y",c+h-f)):(0===a&&(a=.1),g.setAttr("y",d-f),g.setAttr("height",a))):(d=q,d<e&&(d=e),d>n+e&&(d=n+e),a=!0===b?c-d:k+c-d,0>a?(this.resizingRight=
!0,this.resizingLeft=!1,g.setAttr("x",c+k-e)):(0===a&&(a=.1),g.setAttr("x",d-e),g.setAttr("width",a)))),this.clipDragger(!0))},clipDragger:function(a){var b=this.getDBox();if(b){var c=b.x,d=b.y,e=b.width,b=b.height,f=!1;if(this.rotate){if(c=0,e=this.width+1,this.clipY!=d||this.clipH!=b)f=!0}else if(d=0,b=this.height+1,this.clipX!=c||this.clipW!=e)f=!0;f&&(this.clipAndUpdate(c,d,e,b),a&&(this.updateOnReleaseOnly||this.dispatchScrollbarEvent()))}},maskGraphs:function(){},clipAndUpdate:function(a,b,
c,d){this.clipX=a;this.clipY=b;this.clipW=c;this.clipH=d;this.selectedBG.clipRect(a,b,c,d);this.updateDragIconPositions();this.maskGraphs(a,b,c,d)},dispatchScrollbarEvent:function(){if(this.skipEvent)this.skipEvent=!1;else{var a=this.chart;a.hideBalloon();var b=this.getDBox(),c=b.x,d=b.y,e=b.width,b=b.height;this.rotate?(c=d,e=this.height/b):e=this.width/e;a={type:"zoomed",position:c,chart:a,target:this,multiplier:e};this.fire(a.type,a)}},updateDragIconPositions:function(){var a=this.getDBox(),b=
a.x,c=a.y,d=this.iconLeft,e=this.iconRight,f,g,h=this.scrollbarHeight;this.rotate?(f=this.dragIconWidth,g=this.dragIconHeight,d.translate(this.x+(h-g)/2,this.y+c-f/2),e.translate(this.x+(h-g)/2,this.y+c+a.height-f/2)):(f=this.dragIconHeight,g=this.dragIconWidth,d.translate(this.x+b-g/2,this.y+(h-f)/2),e.translate(this.x+b-g/2+a.width,this.y+(h-f)/2))},showDragIcons:function(){this.resizeEnabled&&(this.iconLeft.show(),this.iconRight.show())},hideDragIcons:function(){if(!this.resizingLeft&&!this.resizingRight&&
!this.dragging){if(this.hideResizeGrips||!this.resizeEnabled)this.iconLeft.hide(),this.iconRight.hide();this.removeCursors()}},removeCursors:function(){this.chart.setMouseCursor("auto")},relativeZoom:function(a,b){this.dragger.stop();this.multiplier=a;this.position=b;this.updateScrollbarSize(b,this.rotate?b+this.height/a:b+this.width/a)},destroy:function(){this.clear();AmCharts.remove(this.set);AmCharts.remove(this.iconRight);AmCharts.remove(this.iconLeft)},clear:function(){clearInterval(this.interval)},
handleDragStart:function(){var a=this.chart;this.dragger.stop();this.removeCursors();this.dragging=!0;var b=this.getDBox();this.rotate?(this.initialCoord=b.y,this.initialMouse=a.mouseY):(this.initialCoord=b.x,this.initialMouse=a.mouseX)},handleDragStop:function(){this.updateOnReleaseOnly&&(this.updateScrollbar(),this.skipEvent=!1,this.dispatchScrollbarEvent());this.dragging=!1;this.mouseIsOver&&this.removeCursors();this.updateScrollbar()},handleDraggerOver:function(){this.handleMouseOver()},leftDragStart:function(){this.dragger.stop();
this.resizingLeft=!0},leftDragStop:function(){this.resizingLeft=!1;this.mouseIsOver||this.removeCursors();this.updateOnRelease()},rightDragStart:function(){this.dragger.stop();this.resizingRight=!0},rightDragStop:function(){this.resizingRight=!1;this.mouseIsOver||this.removeCursors();this.updateOnRelease()},iconRollOut:function(){this.removeCursors()},iconRollOver:function(){this.rotate?this.chart.setMouseCursor("n-resize"):this.chart.setMouseCursor("e-resize");this.handleMouseOver()},getDBox:function(){if(this.dragger)return this.dragger.getBBox()},
handleBgClick:function(){if(!this.resizingRight&&!this.resizingLeft){this.zooming=!0;var a,b,c=this.scrollDuration,d=this.dragger;a=this.getDBox();var e=a.height,f=a.width;b=this.chart;var g=this.y,h=this.x,k=this.rotate;k?(a="y",b=b.mouseY-e/2-g,b=AmCharts.fitToBounds(b,0,this.height-e)):(a="x",b=b.mouseX-f/2-h,b=AmCharts.fitToBounds(b,0,this.width-f));this.updateOnReleaseOnly?(this.skipEvent=!1,d.setAttr(a,b),this.dispatchScrollbarEvent(),this.clipDragger()):(b=Math.round(b),k?d.animate({y:b},c,
">"):d.animate({x:b},c,">"))}},updateOnRelease:function(){this.updateOnReleaseOnly&&(this.updateScrollbar(),this.skipEvent=!1,this.dispatchScrollbarEvent())},handleReleaseOutside:function(){if(this.set){if(this.resizingLeft||this.resizingRight||this.dragging)this.updateOnRelease(),this.removeCursors();this.mouseIsOver=this.dragging=this.resizingRight=this.resizingLeft=!1;this.hideDragIcons();this.updateScrollbar()}},handleMouseOver:function(){this.mouseIsOver=!0;this.showDragIcons()},handleMouseOut:function(){this.mouseIsOver=
!1;this.hideDragIcons()}});AmCharts.ChartScrollbar=AmCharts.Class({inherits:AmCharts.SimpleChartScrollbar,construct:function(a){this.cname="ChartScrollbar";AmCharts.ChartScrollbar.base.construct.call(this,a);this.graphLineColor="#BBBBBB";this.graphLineAlpha=0;this.graphFillColor="#BBBBBB";this.graphFillAlpha=1;this.selectedGraphLineColor="#888888";this.selectedGraphLineAlpha=0;this.selectedGraphFillColor="#888888";this.selectedGraphFillAlpha=1;this.gridCount=0;this.gridColor="#FFFFFF";this.gridAlpha=.7;this.skipEvent=this.autoGridCount=
!1;this.color="#FFFFFF";this.scrollbarCreated=!1;this.offset=0;AmCharts.applyTheme(this,a,this.cname)},init:function(){var a=this.categoryAxis,b=this.chart;a||(this.categoryAxis=a=new AmCharts.CategoryAxis);a.chart=b;a.id="scrollbar";a.dateFormats=b.categoryAxis.dateFormats;a.markPeriodChange=b.categoryAxis.markPeriodChange;a.boldPeriodBeginning=b.categoryAxis.boldPeriodBeginning;a.axisItemRenderer=AmCharts.RecItem;a.axisRenderer=AmCharts.RecAxis;a.guideFillRenderer=AmCharts.RecFill;a.inside=!0;a.fontSize=
this.fontSize;a.tickLength=0;a.axisAlpha=0;AmCharts.isString(this.graph)&&(this.graph=AmCharts.getObjById(b.graphs,this.graph));if(a=this.graph){var c=this.valueAxis;c||(this.valueAxis=c=new AmCharts.ValueAxis,c.visible=!1,c.scrollbar=!0,c.axisItemRenderer=AmCharts.RecItem,c.axisRenderer=AmCharts.RecAxis,c.guideFillRenderer=AmCharts.RecFill,c.labelsEnabled=!1,c.chart=b);b=this.unselectedGraph;b||(b=new AmCharts.AmGraph,b.scrollbar=!0,this.unselectedGraph=b,b.negativeBase=a.negativeBase,b.noStepRisers=
a.noStepRisers);b=this.selectedGraph;b||(b=new AmCharts.AmGraph,b.scrollbar=!0,this.selectedGraph=b,b.negativeBase=a.negativeBase,b.noStepRisers=a.noStepRisers)}this.scrollbarCreated=!0},draw:function(){var a=this;AmCharts.ChartScrollbar.base.draw.call(a);a.scrollbarCreated||a.init();var b=a.chart,c=b.chartData,d=a.categoryAxis,e=a.rotate,f=a.x,g=a.y,h=a.width,k=a.height,l=b.categoryAxis,m=a.set;d.setOrientation(!e);d.parseDates=l.parseDates;d.rotate=e;d.equalSpacing=l.equalSpacing;d.minPeriod=l.minPeriod;
d.startOnAxis=l.startOnAxis;d.viW=h;d.viH=k;d.width=h;d.height=k;d.gridCount=a.gridCount;d.gridColor=a.gridColor;d.gridAlpha=a.gridAlpha;d.color=a.color;d.tickLength=0;d.axisAlpha=0;d.autoGridCount=a.autoGridCount;d.parseDates&&!d.equalSpacing&&d.timeZoom(b.firstTime,b.lastTime);d.zoom(0,c.length-1);if(l=a.graph){var n=a.valueAxis,p=l.valueAxis;n.id=p.id;n.rotate=e;n.setOrientation(e);n.width=h;n.height=k;n.viW=h;n.viH=k;n.dataProvider=c;n.reversed=p.reversed;n.logarithmic=p.logarithmic;n.gridAlpha=
0;n.axisAlpha=0;m.push(n.set);e?(n.y=g,n.x=0):(n.x=f,n.y=0);var f=Infinity,g=-Infinity,q;for(q=0;q<c.length;q++){var r=c[q].axes[p.id].graphs[l.id].values,s;for(s in r)if(r.hasOwnProperty(s)&&"percents"!=s&&"total"!=s){var v=r[s];v<f&&(f=v);v>g&&(g=v)}}Infinity!=f&&(n.minimum=f);-Infinity!=g&&(n.maximum=g+.1*(g-f));f==g&&(n.minimum-=1,n.maximum+=1);void 0!==a.minimum&&(n.minimum=a.minimum);void 0!==a.maximum&&(n.maximum=a.maximum);n.zoom(0,c.length-1);s=a.unselectedGraph;s.id=l.id;s.rotate=e;s.chart=
b;s.data=c;s.valueAxis=n;s.chart=l.chart;s.categoryAxis=a.categoryAxis;s.periodSpan=l.periodSpan;s.valueField=l.valueField;s.openField=l.openField;s.closeField=l.closeField;s.highField=l.highField;s.lowField=l.lowField;s.lineAlpha=a.graphLineAlpha;s.lineColorR=a.graphLineColor;s.fillAlphas=a.graphFillAlpha;s.fillColorsR=a.graphFillColor;s.connect=l.connect;s.hidden=l.hidden;s.width=h;s.height=k;s.pointPosition=l.pointPosition;s.stepDirection=l.stepDirection;s.periodSpan=l.periodSpan;p=a.selectedGraph;
p.id=l.id;p.rotate=e;p.chart=b;p.data=c;p.valueAxis=n;p.chart=l.chart;p.categoryAxis=d;p.periodSpan=l.periodSpan;p.valueField=l.valueField;p.openField=l.openField;p.closeField=l.closeField;p.highField=l.highField;p.lowField=l.lowField;p.lineAlpha=a.selectedGraphLineAlpha;p.lineColorR=a.selectedGraphLineColor;p.fillAlphas=a.selectedGraphFillAlpha;p.fillColorsR=a.selectedGraphFillColor;p.connect=l.connect;p.hidden=l.hidden;p.width=h;p.height=k;p.pointPosition=l.pointPosition;p.stepDirection=l.stepDirection;
p.periodSpan=l.periodSpan;b=a.graphType;b||(b=l.type);s.type=b;p.type=b;c=c.length-1;s.zoom(0,c);p.zoom(0,c);p.set.click(function(){a.handleBackgroundClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()});s.set.click(function(){a.handleBackgroundClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()});m.push(s.set);m.push(p.set)}m.push(d.set);m.push(d.labelsSet);a.bg.toBack();a.invisibleBg.toFront();a.dragger.toFront();a.iconLeft.toFront();
a.iconRight.toFront()},timeZoom:function(a,b,c){this.startTime=a;this.endTime=b;this.timeDifference=b-a;this.skipEvent=!AmCharts.toBoolean(c);this.zoomScrollbar();this.skipEvent||this.dispatchScrollbarEvent()},zoom:function(a,b){this.start=a;this.end=b;this.skipEvent=!0;this.zoomScrollbar()},dispatchScrollbarEvent:function(){if(this.skipEvent)this.skipEvent=!1;else{var a=this.chart.chartData,b,c,d=this.dragger.getBBox();b=d.x;var e=d.y,f=d.width;c=d.height;d=this.chart;this.rotate?b=e:c=f;f={type:"zoomed",
target:this};f.chart=d;var g=this.categoryAxis,h=this.stepWidth,e=d.minSelectedTime;if(g.parseDates&&!g.equalSpacing){if(a=d.lastTime,d=d.firstTime,g.minDuration(),g=Math.round(b/h)+d,b=this.dragging?g+this.timeDifference:Math.round((b+c)/h)+d,g>b&&(g=b),0<e&&b-g<e&&(b=Math.round(g+(b-g)/2),c=Math.round(e/2),g=b-c,b+=c),b>a&&(b=a),b-e<g&&(g=b-e),g<d&&(g=d),g+e>b&&(b=g+e),g!=this.startTime||b!=this.endTime)this.startTime=g,this.endTime=b,f.start=g,f.end=b,f.startDate=new Date(g),f.endDate=new Date(b),
this.fire(f.type,f)}else if(g.startOnAxis||(b+=h/2),c-=this.stepWidth/2,e=g.xToIndex(b),b=g.xToIndex(b+c),e!=this.start||this.end!=b)g.startOnAxis&&(this.resizingRight&&e==b&&b++,this.resizingLeft&&e==b&&(0<e?e--:b=1)),this.start=e,this.end=this.dragging?this.start+this.difference:b,f.start=this.start,f.end=this.end,g.parseDates&&(a[this.start]&&(f.startDate=new Date(a[this.start].time)),a[this.end]&&(f.endDate=new Date(a[this.end].time))),this.fire(f.type,f)}this.zoomScrollbar()},zoomScrollbar:function(){var a,
b;a=this.chart;var c=a.chartData,d=this.categoryAxis;d.parseDates&&!d.equalSpacing?(c=d.stepWidth,d=a.firstTime,a=c*(this.startTime-d),b=c*(this.endTime-d)):(a=c[this.start].x[d.id],b=c[this.end].x[d.id],c=d.stepWidth,d.startOnAxis||(d=c/2,a-=d,b+=d));this.stepWidth=c;this.updateScrollbarSize(a,b)},maskGraphs:function(a,b,c,d){var e=this.selectedGraph;e&&e.set.clipRect(a,b,c,d)},handleDragStart:function(){AmCharts.ChartScrollbar.base.handleDragStart.call(this);this.difference=this.end-this.start;
this.timeDifference=this.endTime-this.startTime;0>this.timeDifference&&(this.timeDifference=0)},handleBackgroundClick:function(){AmCharts.ChartScrollbar.base.handleBackgroundClick.call(this);this.dragging||(this.difference=this.end-this.start,this.timeDifference=this.endTime-this.startTime,0>this.timeDifference&&(this.timeDifference=0))}});AmCharts.AmBalloon=AmCharts.Class({construct:function(a){this.cname="AmBalloon";this.enabled=!0;this.fillColor="#FFFFFF";this.fillAlpha=.8;this.borderThickness=2;this.borderColor="#FFFFFF";this.borderAlpha=1;this.cornerRadius=0;this.maximumWidth=220;this.horizontalPadding=8;this.verticalPadding=4;this.pointerWidth=6;this.pointerOrientation="V";this.color="#000000";this.adjustBorderColor=!0;this.show=this.follow=this.showBullet=!1;this.bulletSize=3;this.shadowAlpha=.4;this.shadowColor="#000000";this.fadeOutDuration=
this.animationDuration=.3;this.fixedPosition=!1;this.offsetY=6;this.offsetX=1;this.textAlign="center";AmCharts.isModern||(this.offsetY*=1.5);AmCharts.applyTheme(this,a,this.cname)},draw:function(){var a=this.pointToX,b=this.pointToY;this.deltaSignX=this.deltaSignY=1;var c=this.chart;AmCharts.VML&&(this.fadeOutDuration=0);this.xAnim&&c.stopAnim(this.xAnim);this.yAnim&&c.stopAnim(this.yAnim);if(!isNaN(a)){var d=this.follow,e=c.container,f=this.set;AmCharts.remove(f);this.removeDiv();f=e.set();f.node.style.pointerEvents=
"none";this.set=f;c.balloonsSet.push(f);if(this.show){var g=this.l,h=this.t,k=this.r,l=this.b,m=this.balloonColor,n=this.fillColor,p=this.borderColor,q=n;void 0!=m&&(this.adjustBorderColor?q=p=m:n=m);var r=this.horizontalPadding,s=this.verticalPadding,v=this.pointerWidth,w=this.pointerOrientation,t=this.cornerRadius,u=c.fontFamily,y=this.fontSize;void 0==y&&(y=c.fontSize);var m=document.createElement("div"),E=m.style;E.pointerEvents="none";E.position="absolute";var A=this.minWidth,z="";isNaN(A)||
(z="min-width:"+(A-2*r)+"px; ");m.innerHTML='<div style="text-align:'+this.textAlign+"; "+z+"max-width:"+this.maxWidth+"px; font-size:"+y+"px; color:"+this.color+"; font-family:"+u+'">'+this.text+"</div>";c.chartDiv.appendChild(m);this.textDiv=m;y=m.offsetWidth;u=m.offsetHeight;m.clientHeight&&(y=m.clientWidth,u=m.clientHeight);u+=2*s;z=y+2*r;!isNaN(A)&&z<A&&(z=A);window.opera&&(u+=2);var K=!1,y=this.offsetY;c.handDrawn&&(y+=c.handDrawScatter+2);"H"!=w?(A=a-z/2,b<h+u+10&&"down"!=w?(K=!0,d&&(b+=y),
y=b+v,this.deltaSignY=-1):(d&&(b-=y),y=b-u-v,this.deltaSignY=1)):(2*v>u&&(v=u/2),y=b-u/2,a<g+(k-g)/2?(A=a+v,this.deltaSignX=-1):(A=a-z-v,this.deltaSignX=1));y+u>=l&&(y=l-u);y<h&&(y=h);A<g&&(A=g);A+z>k&&(A=k-z);var h=y+s,l=A+r,s=this.shadowAlpha,I=this.shadowColor,r=this.borderThickness,F=this.bulletSize,H;0<t||0===v?(0<s&&(a=AmCharts.rect(e,z,u,n,0,r+1,I,s,this.cornerRadius),AmCharts.isModern?a.translate(1,1):a.translate(4,4),f.push(a)),n=AmCharts.rect(e,z,u,n,this.fillAlpha,r,p,this.borderAlpha,
this.cornerRadius),this.showBullet&&(H=AmCharts.circle(e,F,q,this.fillAlpha),f.push(H))):(q=[],t=[],"H"!=w?(g=a-A,g>z-v&&(g=z-v),g<v&&(g=v),q=[0,g-v,a-A,g+v,z,z,0,0],t=K?[0,0,b-y,0,0,u,u,0]:[u,u,b-y,u,u,0,0,u]):(q=b-y,q>u-v&&(q=u-v),q<v&&(q=v),t=[0,q-v,b-y,q+v,u,u,0,0],q=a<g+(k-g)/2?[0,0,A<a?0:a-A,0,0,z,z,0]:[z,z,A+z>a?z:a-A,z,z,0,0,z]),0<s&&(a=AmCharts.polygon(e,q,t,n,0,r,I,s),a.translate(1,1),f.push(a)),n=AmCharts.polygon(e,q,t,n,this.fillAlpha,r,p,this.borderAlpha));this.bg=n;f.push(n);n.toFront();
e=1*this.deltaSignX;E.left=l+"px";E.top=h+"px";f.translate(A-e,y);n=n.getBBox();this.bottom=y+u+1;this.yPos=n.y+y;H&&H.translate(this.pointToX-A+e,b-y);b=this.animationDuration;0<this.animationDuration&&!d&&!isNaN(this.prevX)&&(f.translate(this.prevX,this.prevY),f.animate({translate:A-e+","+y},b,"easeOutSine"),m&&(E.left=this.prevTX+"px",E.top=this.prevTY+"px",this.xAnim=c.animate({node:m},"left",this.prevTX,l,b,"easeOutSine","px"),this.yAnim=c.animate({node:m},"top",this.prevTY,h,b,"easeOutSine",
"px")));this.prevX=A-e;this.prevY=y;this.prevTX=l;this.prevTY=h}}},followMouse:function(){if(this.follow&&this.show){var a=this.chart.mouseX-this.offsetX*this.deltaSignX,b=this.chart.mouseY;this.pointToX=a;this.pointToY=b;if(a!=this.previousX||b!=this.previousY)if(this.previousX=a,this.previousY=b,0===this.cornerRadius)this.draw();else{var c=this.set;if(c){var d=c.getBBox(),a=a-d.width/2,e=b-d.height-10;a<this.l&&(a=this.l);a>this.r-d.width&&(a=this.r-d.width);e<this.t&&(e=b+10);c.translate(a,e);
b=this.textDiv.style;b.left=a+this.horizontalPadding+"px";b.top=e+this.verticalPadding+"px"}}}},changeColor:function(a){this.balloonColor=a},setBounds:function(a,b,c,d){this.l=a;this.t=b;this.r=c;this.b=d;this.destroyTO&&clearTimeout(this.destroyTO)},showBalloon:function(a){this.text=a;this.show=!0;this.destroyTO&&clearTimeout(this.destroyTO);a=this.chart;this.fadeAnim1&&a.stopAnim(this.fadeAnim1);this.fadeAnim2&&a.stopAnim(this.fadeAnim2);this.draw()},hide:function(){var a=this,b=a.fadeOutDuration,
c=a.chart;if(0<b){a.destroyTO=setTimeout(function(){a.destroy.call(a)},1E3*b);a.follow=!1;a.show=!1;var d=a.set;d&&(d.setAttr("opacity",a.fillAlpha),a.fadeAnim1=d.animate({opacity:0},b,"easeInSine"));a.textDiv&&(a.fadeAnim2=c.animate({node:a.textDiv},"opacity",1,0,b,"easeInSine",""))}else a.show=!1,a.follow=!1,a.destroy()},setPosition:function(a,b,c){this.pointToX=a;this.pointToY=b;c&&(a==this.previousX&&b==this.previousY||this.draw());this.previousX=a;this.previousY=b},followCursor:function(a){var b=
this;(b.follow=a)?(b.pShowBullet=b.showBullet,b.showBullet=!1):void 0!==b.pShowBullet&&(b.showBullet=b.pShowBullet);clearInterval(b.interval);var c=b.chart.mouseX,d=b.chart.mouseY;!isNaN(c)&&a&&(b.pointToX=c-b.offsetX*b.deltaSignX,b.pointToY=d,b.followMouse(),b.interval=setInterval(function(){b.followMouse.call(b)},40))},removeDiv:function(){if(this.textDiv){var a=this.textDiv.parentNode;a&&a.removeChild(this.textDiv)}},destroy:function(){clearInterval(this.interval);AmCharts.remove(this.set);this.removeDiv();
this.set=null}});AmCharts.AmCoordinateChart=AmCharts.Class({inherits:AmCharts.AmChart,construct:function(a){AmCharts.AmCoordinateChart.base.construct.call(this,a);this.theme=a;this.createEvents("rollOverGraphItem","rollOutGraphItem","clickGraphItem","doubleClickGraphItem","rightClickGraphItem","clickGraph","rollOverGraph","rollOutGraph");this.startAlpha=1;this.startDuration=0;this.startEffect="elastic";this.sequencedAnimation=!0;this.colors="#FF6600 #FCD202 #B0DE09 #0D8ECF #2A0CD0 #CD0D74 #CC0000 #00CC00 #0000CC #DDDDDD #999999 #333333 #990000".split(" ");
this.balloonDateFormat="MMM DD, YYYY";this.valueAxes=[];this.graphs=[];this.guides=[];this.gridAboveGraphs=!1;AmCharts.applyTheme(this,a,"AmCoordinateChart")},initChart:function(){AmCharts.AmCoordinateChart.base.initChart.call(this);var a=this.categoryAxis;a&&(this.categoryAxis=AmCharts.processObject(a,AmCharts.CategoryAxis,this.theme));this.processValueAxes();this.createValueAxes();this.processGraphs();this.processGuides();AmCharts.VML&&(this.startAlpha=1);this.setLegendData(this.graphs);this.gridAboveGraphs&&
this.gridSet.toFront()},createValueAxes:function(){if(0===this.valueAxes.length){var a=new AmCharts.ValueAxis;this.addValueAxis(a)}},parseData:function(){this.processValueAxes();this.processGraphs()},parseSerialData:function(){var a=this.graphs,b,c={},d=this.seriesIdField;d||(d=this.categoryField);this.chartData=[];var e=this.dataProvider;if(e){var f=!1,g,h=this.categoryAxis,k,l;h&&(f=h.parseDates,k=h.forceShowField,l=h.labelColorField,g=h.categoryFunction);var m,n,p={},q;f&&(b=AmCharts.extractPeriod(h.minPeriod),
m=b.period,n=b.count,q=AmCharts.getPeriodDuration(m,n));var r={};this.lookupTable=r;var s,v=this.dataDateFormat,w={};for(s=0;s<e.length;s++){var t={},u=e[s];b=u[this.categoryField];t.dataContext=u;t.category=g?g(b,u,h):String(b);k&&(t.forceShow=u[k]);l&&(t.labelColor=u[l]);r[u[d]]=t;if(f&&(b=h.categoryFunction?h.categoryFunction(b,u,h):b instanceof Date?AmCharts.newDate(b,h.minPeriod):v?AmCharts.stringToDate(b,v):new Date(b),b=AmCharts.resetDateToMin(b,m,n,h.firstDayOfWeek),t.category=b,t.time=b.getTime(),
isNaN(t.time)))continue;var y=this.valueAxes;t.axes={};t.x={};var E;for(E=0;E<y.length;E++){var A=y[E].id;t.axes[A]={};t.axes[A].graphs={};var z;for(z=0;z<a.length;z++){b=a[z];var K=b.id,I=b.periodValue;if(b.valueAxis.id==A){t.axes[A].graphs[K]={};var F={};F.index=s;var H=u;b.dataProvider&&(H=c);F.values=this.processValues(H,b,I);!b.connect&&w&&w[K]&&t.time-p[K]>1.1*q&&(w[K].gap=!0);this.processFields(b,F,H);F.category=t.category;F.serialDataItem=t;F.graph=b;t.axes[A].graphs[K]=F;p[K]=t.time;w[K]=
F}}}this.chartData[s]=t}}for(c=0;c<a.length;c++)b=a[c],b.dataProvider&&this.parseGraphData(b)},processValues:function(a,b,c){var d={},e,f=!1;"candlestick"!=b.type&&"ohlc"!=b.type||""===c||(f=!0);e=Number(a[b.valueField+c]);isNaN(e)||(d.value=e);e=Number(a[b.errorField+c]);isNaN(e)||(d.error=e);f&&(c="Open");e=Number(a[b.openField+c]);isNaN(e)||(d.open=e);f&&(c="Close");e=Number(a[b.closeField+c]);isNaN(e)||(d.close=e);f&&(c="Low");e=Number(a[b.lowField+c]);isNaN(e)||(d.low=e);f&&(c="High");e=Number(a[b.highField+
c]);isNaN(e)||(d.high=e);return d},parseGraphData:function(a){var b=a.dataProvider,c=a.seriesIdField;c||(c=this.seriesIdField);c||(c=this.categoryField);var d;for(d=0;d<b.length;d++){var e=b[d],f=this.lookupTable[String(e[c])],g=a.valueAxis.id;f&&(g=f.axes[g].graphs[a.id],g.serialDataItem=f,g.values=this.processValues(e,a,a.periodValue),this.processFields(a,g,e))}},addValueAxis:function(a){a.chart=this;this.valueAxes.push(a);this.validateData()},removeValueAxesAndGraphs:function(){var a=this.valueAxes,
b;for(b=a.length-1;-1<b;b--)this.removeValueAxis(a[b])},removeValueAxis:function(a){var b=this.graphs,c;for(c=b.length-1;0<=c;c--){var d=b[c];d&&d.valueAxis==a&&this.removeGraph(d)}b=this.valueAxes;for(c=b.length-1;0<=c;c--)b[c]==a&&b.splice(c,1);this.validateData()},addGraph:function(a){this.graphs.push(a);this.chooseGraphColor(a,this.graphs.length-1);this.validateData()},removeGraph:function(a){var b=this.graphs,c;for(c=b.length-1;0<=c;c--)b[c]==a&&(b.splice(c,1),a.destroy());this.validateData()},
processValueAxes:function(){var a=this.valueAxes,b;for(b=0;b<a.length;b++){var c=a[b],c=AmCharts.processObject(c,AmCharts.ValueAxis,this.theme);a[b]=c;c.chart=this;c.id||(c.id="valueAxisAuto"+b+"_"+(new Date).getTime());void 0===c.usePrefixes&&(c.usePrefixes=this.usePrefixes)}},processGuides:function(){var a=this.guides,b=this.categoryAxis;if(a)for(var c=0;c<a.length;c++){var d=a[c];(void 0!==d.category||void 0!==d.date)&&b&&b.addGuide(d);var e=d.valueAxis;e?(AmCharts.isString(e)&&(e=this.getValueAxisById(e)),
e?e.addGuide(d):this.valueAxes[0].addGuide(d)):isNaN(d.value)||this.valueAxes[0].addGuide(d)}},processGraphs:function(){var a=this.graphs,b;for(b=0;b<a.length;b++){var c=a[b],c=AmCharts.processObject(c,AmCharts.AmGraph,this.theme);a[b]=c;this.chooseGraphColor(c,b);c.chart=this;AmCharts.isString(c.valueAxis)&&(c.valueAxis=this.getValueAxisById(c.valueAxis));c.valueAxis||(c.valueAxis=this.valueAxes[0]);c.id||(c.id="graphAuto"+b+"_"+(new Date).getTime())}},formatString:function(a,b,c){var d=b.graph,
e=d.valueAxis;e.duration&&b.values.value&&(e=AmCharts.formatDuration(b.values.value,e.duration,"",e.durationUnits,e.maxInterval,e.numberFormatter),a=a.split("[[value]]").join(e));a=AmCharts.massReplace(a,{"[[title]]":d.title,"[[description]]":b.description});a=c?AmCharts.fixNewLines(a):AmCharts.fixBrakes(a);return a=AmCharts.cleanFromEmpty(a)},getBalloonColor:function(a,b,c){var d=a.lineColor,e=a.balloonColor;c&&(e=d);c=a.fillColorsR;"object"==typeof c?d=c[0]:void 0!==c&&(d=c);b.isNegative&&(c=a.negativeLineColor,
a=a.negativeFillColors,"object"==typeof a?c=a[0]:void 0!==a&&(c=a),void 0!==c&&(d=c));void 0!==b.color&&(d=b.color);void 0===e&&(e=d);return e},getGraphById:function(a){return AmCharts.getObjById(this.graphs,a)},getValueAxisById:function(a){return AmCharts.getObjById(this.valueAxes,a)},processFields:function(a,b,c){if(a.itemColors){var d=a.itemColors,e=b.index;b.color=e<d.length?d[e]:AmCharts.randomColor()}d="lineColor color alpha fillColors description bullet customBullet bulletSize bulletConfig url labelColor dashLength pattern".split(" ");
for(e=0;e<d.length;e++){var f=d[e],g=a[f+"Field"];g&&(g=c[g],AmCharts.isDefined(g)&&(b[f]=g))}b.dataContext=c},chooseGraphColor:function(a,b){if(a.lineColor)a.lineColorR=a.lineColor;else{var c;c=this.colors.length>b?this.colors[b]:AmCharts.randomColor();a.lineColorR=c}a.fillColorsR=a.fillColors?a.fillColors:a.lineColorR;a.bulletBorderColorR=a.bulletBorderColor?a.bulletBorderColor:a.useLineColorForBulletBorder?a.lineColorR:a.bulletColor;a.bulletColorR=a.bulletColor?a.bulletColor:a.lineColorR;if(c=
this.patterns)a.pattern=c[b]},handleLegendEvent:function(a){var b=a.type;a=a.dataItem;if(!this.legend.data&&a){var c=a.hidden,d=a.showBalloon;switch(b){case "clickMarker":this.textClickEnabled&&(d?this.hideGraphsBalloon(a):this.showGraphsBalloon(a));break;case "clickLabel":d?this.hideGraphsBalloon(a):this.showGraphsBalloon(a);break;case "rollOverItem":c||this.highlightGraph(a);break;case "rollOutItem":c||this.unhighlightGraph();break;case "hideItem":this.hideGraph(a);break;case "showItem":this.showGraph(a)}}},
highlightGraph:function(a){var b=this.graphs,c,d=.2;this.legend&&(d=this.legend.rollOverGraphAlpha);if(1!=d)for(c=0;c<b.length;c++){var e=b[c];e!=a&&e.changeOpacity(d)}},unhighlightGraph:function(){var a;this.legend&&(a=this.legend.rollOverGraphAlpha);if(1!=a){a=this.graphs;var b;for(b=0;b<a.length;b++)a[b].changeOpacity(1)}},showGraph:function(a){a.switchable&&(a.hidden=!1,this.dataChanged=!0,"xy"!=this.type&&(this.marginsUpdated=!1),this.chartCreated&&this.initChart())},hideGraph:function(a){a.switchable&&
(this.dataChanged=!0,"xy"!=this.type&&(this.marginsUpdated=!1),a.hidden=!0,this.chartCreated&&this.initChart())},hideGraphsBalloon:function(a){a.showBalloon=!1;this.updateLegend()},showGraphsBalloon:function(a){a.showBalloon=!0;this.updateLegend()},updateLegend:function(){this.legend&&this.legend.invalidateSize()},resetAnimation:function(){var a=this.graphs;if(a){var b;for(b=0;b<a.length;b++)a[b].animationPlayed=!1}},animateAgain:function(){this.resetAnimation();this.validateNow()}});AmCharts.AmSlicedChart=AmCharts.Class({inherits:AmCharts.AmChart,construct:function(a){this.createEvents("rollOverSlice","rollOutSlice","clickSlice","pullOutSlice","pullInSlice","rightClickSlice");AmCharts.AmSlicedChart.base.construct.call(this,a);this.colors="#FF0F00 #FF6600 #FF9E01 #FCD202 #F8FF01 #B0DE09 #04D215 #0D8ECF #0D52D1 #2A0CD0 #8A0CCF #CD0D74 #754DEB #DDDDDD #999999 #333333 #000000 #57032A #CA9726 #990000 #4B0C25".split(" ");this.alpha=1;this.groupPercent=0;this.groupedTitle="Other";this.groupedPulled=
!1;this.groupedAlpha=1;this.marginLeft=0;this.marginBottom=this.marginTop=10;this.marginRight=0;this.hoverAlpha=1;this.outlineColor="#FFFFFF";this.outlineAlpha=0;this.outlineThickness=1;this.startAlpha=0;this.startDuration=1;this.startEffect="bounce";this.sequencedAnimation=!0;this.pullOutDuration=1;this.pullOutEffect="bounce";this.pullOnHover=this.pullOutOnlyOne=!1;this.labelsEnabled=!0;this.labelTickColor="#000000";this.labelTickAlpha=.2;this.hideLabelsPercent=0;this.urlTarget="_self";this.autoMarginOffset=
10;this.gradientRatio=[];this.maxLabelWidth=200;AmCharts.applyTheme(this,a,"AmSlicedChart")},initChart:function(){AmCharts.AmSlicedChart.base.initChart.call(this);this.dataChanged&&(this.parseData(),this.dispatchDataUpdated=!0,this.dataChanged=!1,this.setLegendData(this.chartData));this.drawChart()},handleLegendEvent:function(a){var b=a.type;a=a.dataItem;if(!this.legend.data&&a){var c=a.hidden;switch(b){case "clickMarker":c||this.clickSlice(a);break;case "clickLabel":c||this.clickSlice(a);break;case "rollOverItem":c||
this.rollOverSlice(a,!1);break;case "rollOutItem":c||this.rollOutSlice(a);break;case "hideItem":this.hideSlice(a);break;case "showItem":this.showSlice(a)}}},invalidateVisibility:function(){this.recalculatePercents();this.initChart();var a=this.legend;a&&a.invalidateSize()},addEventListeners:function(a,b){var c=this;a.mouseover(function(a){c.rollOverSlice(b,!0,a)}).mouseout(function(a){c.rollOutSlice(b,a)}).touchend(function(a){c.rollOverSlice(b,a);c.panEventsEnabled&&c.clickSlice(b,a)}).touchstart(function(a){c.rollOverSlice(b,
a)}).click(function(a){c.clickSlice(b,a)}).contextmenu(function(a){c.handleRightClick(b,a)})},formatString:function(a,b,c){a=AmCharts.formatValue(a,b,["value"],this.nf,"",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers);a=AmCharts.formatValue(a,b,["percents"],this.pf);a=AmCharts.massReplace(a,{"[[title]]":b.title,"[[description]]":b.description});-1!=a.indexOf("[[")&&(a=AmCharts.formatDataContextValue(a,b.dataContext));a=c?AmCharts.fixNewLines(a):AmCharts.fixBrakes(a);return a=
AmCharts.cleanFromEmpty(a)},startSlices:function(){var a;for(a=0;a<this.chartData.length;a++)0<this.startDuration&&this.sequencedAnimation?this.setStartTO(a):this.startSlice(this.chartData[a])},setStartTO:function(a){var b=this;a=setTimeout(function(){b.startSequenced.call(b)},b.startDuration/b.chartData.length*500*a);b.timeOuts.push(a)},pullSlices:function(a){var b=this.chartData,c;for(c=0;c<b.length;c++){var d=b[c];d.pulled&&this.pullSlice(d,1,a)}},startSequenced:function(){var a=this.chartData,
b;for(b=0;b<a.length;b++)if(!a[b].started){this.startSlice(this.chartData[b]);break}},startSlice:function(a){a.started=!0;var b=a.wedge,c=this.startDuration;b&&0<c&&(0<a.alpha&&b.show(),b.translate(a.startX,a.startY),b.animate({opacity:1,translate:"0,0"},c,this.startEffect))},showLabels:function(){var a=this.chartData,b;for(b=0;b<a.length;b++){var c=a[b];if(0<c.alpha){var d=c.label;d&&d.show();(c=c.tick)&&c.show()}}},showSlice:function(a){isNaN(a)?a.hidden=!1:this.chartData[a].hidden=!1;this.invalidateVisibility()},
hideSlice:function(a){isNaN(a)?a.hidden=!0:this.chartData[a].hidden=!0;this.hideBalloon();this.invalidateVisibility()},rollOverSlice:function(a,b,c){isNaN(a)||(a=this.chartData[a]);clearTimeout(this.hoverInt);if(!a.hidden){this.pullOnHover&&this.pullSlice(a,1);1>this.hoverAlpha&&a.wedge&&a.wedge.attr({opacity:this.hoverAlpha});var d=a.balloonX,e=a.balloonY;a.pulled&&(d+=a.pullX,e+=a.pullY);var f=this.formatString(this.balloonText,a,!0),g=this.balloonFunction;g&&(f=g(a,f));g=AmCharts.adjustLuminosity(a.color,
-.15);this.showBalloon(f,g,b,d,e);a={type:"rollOverSlice",dataItem:a,chart:this,event:c};this.fire(a.type,a)}},rollOutSlice:function(a,b){isNaN(a)||(a=this.chartData[a]);a.wedge&&a.wedge.attr({opacity:1});this.hideBalloon();var c={type:"rollOutSlice",dataItem:a,chart:this,event:b};this.fire(c.type,c)},clickSlice:function(a,b){isNaN(a)||(a=this.chartData[a]);a.pulled?this.pullSlice(a,0):this.pullSlice(a,1);AmCharts.getURL(a.url,this.urlTarget);var c={type:"clickSlice",dataItem:a,chart:this,event:b};
this.fire(c.type,c)},handleRightClick:function(a,b){isNaN(a)||(a=this.chartData[a]);var c={type:"rightClickSlice",dataItem:a,chart:this,event:b};this.fire(c.type,c)},drawTicks:function(){var a=this.chartData,b;for(b=0;b<a.length;b++){var c=a[b];if(c.label){var d=c.ty,d=AmCharts.line(this.container,[c.tx0,c.tx,c.tx2],[c.ty0,d,d],this.labelTickColor,this.labelTickAlpha);c.tick=d;c.wedge.push(d)}}},initialStart:function(){var a=this,b=a.startDuration,c=setTimeout(function(){a.showLabels.call(a)},1E3*
b);a.timeOuts.push(c);a.chartCreated?a.pullSlices(!0):(a.startSlices(),0<b?(b=setTimeout(function(){a.pullSlices.call(a)},1200*b),a.timeOuts.push(b)):a.pullSlices(!0))},pullSlice:function(a,b,c){var d=this.pullOutDuration;!0===c&&(d=0);(c=a.wedge)&&(0<d?c.animate({translate:b*a.pullX+","+b*a.pullY},d,this.pullOutEffect):c.translate(b*a.pullX,b*a.pullY));1==b?(a.pulled=!0,this.pullOutOnlyOne&&this.pullInAll(a.index),a={type:"pullOutSlice",dataItem:a,chart:this}):(a.pulled=!1,a={type:"pullInSlice",
dataItem:a,chart:this});this.fire(a.type,a)},pullInAll:function(a){var b=this.chartData,c;for(c=0;c<this.chartData.length;c++)c!=a&&b[c].pulled&&this.pullSlice(b[c],0)},pullOutAll:function(a){a=this.chartData;var b;for(b=0;b<a.length;b++)a[b].pulled||this.pullSlice(a[b],1)},parseData:function(){var a=[];this.chartData=a;var b=this.dataProvider;isNaN(this.pieAlpha)||(this.alpha=this.pieAlpha);if(void 0!==b){var c=b.length,d=0,e,f,g;for(e=0;e<c;e++){f={};var h=b[e];f.dataContext=h;f.value=Number(h[this.valueField]);
(g=h[this.titleField])||(g="");f.title=g;f.pulled=AmCharts.toBoolean(h[this.pulledField],!1);(g=h[this.descriptionField])||(g="");f.description=g;f.labelRadius=Number(h[this.labelRadiusField]);f.switchable=!0;f.url=h[this.urlField];g=h[this.patternField];!g&&this.patterns&&(g=this.patterns[e]);f.pattern=g;f.visibleInLegend=AmCharts.toBoolean(h[this.visibleInLegendField],!0);g=h[this.alphaField];f.alpha=void 0!==g?Number(g):this.alpha;g=h[this.colorField];void 0!==g&&(f.color=AmCharts.toColor(g));
f.labelColor=AmCharts.toColor(h[this.labelColorField]);d+=f.value;f.hidden=!1;a[e]=f}for(e=b=0;e<c;e++)f=a[e],f.percents=f.value/d*100,f.percents<this.groupPercent&&b++;1<b&&(this.groupValue=0,this.removeSmallSlices(),a.push({title:this.groupedTitle,value:this.groupValue,percents:this.groupValue/d*100,pulled:this.groupedPulled,color:this.groupedColor,url:this.groupedUrl,description:this.groupedDescription,alpha:this.groupedAlpha,pattern:this.groupedPattern,dataContext:{}}));c=this.baseColor;c||(c=
this.pieBaseColor);d=this.brightnessStep;d||(d=this.pieBrightnessStep);for(e=0;e<a.length;e++)c?g=AmCharts.adjustLuminosity(c,e*d/100):(g=this.colors[e],void 0===g&&(g=AmCharts.randomColor())),void 0===a[e].color&&(a[e].color=g);this.recalculatePercents()}},recalculatePercents:function(){var a=this.chartData,b=0,c,d;for(c=0;c<a.length;c++)d=a[c],!d.hidden&&0<d.value&&(b+=d.value);for(c=0;c<a.length;c++)d=this.chartData[c],d.percents=!d.hidden&&0<d.value?100*d.value/b:0},removeSmallSlices:function(){var a=
this.chartData,b;for(b=a.length-1;0<=b;b--)a[b].percents<this.groupPercent&&(this.groupValue+=a[b].value,a.splice(b,1))},animateAgain:function(){var a=this;a.startSlices();for(var b=0;b<a.chartData.length;b++){var c=a.chartData[b];c.started=!1;var d=c.wedge;d&&d.translate(c.startX,c.startY)}b=a.startDuration;0<b?(b=setTimeout(function(){a.pullSlices.call(a)},1200*b),a.timeOuts.push(b)):a.pullSlices()},measureMaxLabel:function(){var a=this.chartData,b=0,c;for(c=0;c<a.length;c++){var d=a[c],e=this.formatString(this.labelText,
d),f=this.labelFunction;f&&(e=f(d,e));d=AmCharts.text(this.container,e,this.color,this.fontFamily,this.fontSize);e=d.getBBox().width;e>b&&(b=e);d.remove()}return b}});AmCharts.AmRectangularChart=AmCharts.Class({inherits:AmCharts.AmCoordinateChart,construct:function(a){AmCharts.AmRectangularChart.base.construct.call(this,a);this.theme=a;this.createEvents("zoomed");this.marginRight=this.marginBottom=this.marginTop=this.marginLeft=20;this.verticalPosition=this.horizontalPosition=this.depth3D=this.angle=0;this.heightMultiplier=this.widthMultiplier=1;this.plotAreaFillColors="#FFFFFF";this.plotAreaFillAlphas=0;this.plotAreaBorderColor="#000000";this.plotAreaBorderAlpha=
0;this.zoomOutButtonImageSize=17;this.zoomOutButtonImage="lens.png";this.zoomOutText="Show all";this.zoomOutButtonColor="#e5e5e5";this.zoomOutButtonAlpha=0;this.zoomOutButtonRollOverAlpha=1;this.zoomOutButtonPadding=8;this.trendLines=[];this.autoMargins=!0;this.marginsUpdated=!1;this.autoMarginOffset=10;AmCharts.applyTheme(this,a,"AmRectangularChart")},initChart:function(){AmCharts.AmRectangularChart.base.initChart.call(this);this.updateDxy();var a=!0;!this.marginsUpdated&&this.autoMargins&&(this.resetMargins(),
a=!1);this.processScrollbars();this.updateMargins();this.updatePlotArea();this.updateScrollbars();this.updateTrendLines();this.updateChartCursor();this.updateValueAxes();a&&(this.scrollbarOnly||this.updateGraphs())},drawChart:function(){AmCharts.AmRectangularChart.base.drawChart.call(this);this.drawPlotArea();if(AmCharts.ifArray(this.chartData)){var a=this.chartCursor;a&&a.draw();a=this.zoomOutText;""!==a&&a&&this.drawZoomOutButton()}},resetMargins:function(){var a={},b;if("serial"==this.type){var c=
this.valueAxes;for(b=0;b<c.length;b++){var d=c[b];d.ignoreAxisWidth||(d.setOrientation(this.rotate),d.fixAxisPosition(),a[d.position]=!0)}(b=this.categoryAxis)&&!b.ignoreAxisWidth&&(b.setOrientation(!this.rotate),b.fixAxisPosition(),b.fixAxisPosition(),a[b.position]=!0)}else{d=this.xAxes;c=this.yAxes;for(b=0;b<d.length;b++){var e=d[b];e.ignoreAxisWidth||(e.setOrientation(!0),e.fixAxisPosition(),a[e.position]=!0)}for(b=0;b<c.length;b++)d=c[b],d.ignoreAxisWidth||(d.setOrientation(!1),d.fixAxisPosition(),
a[d.position]=!0)}a.left&&(this.marginLeft=0);a.right&&(this.marginRight=0);a.top&&(this.marginTop=0);a.bottom&&(this.marginBottom=0);this.fixMargins=a},measureMargins:function(){var a=this.valueAxes,b,c=this.autoMarginOffset,d=this.fixMargins,e=this.realWidth,f=this.realHeight,g=c,h=c,k=e;b=f;var l;for(l=0;l<a.length;l++)b=this.getAxisBounds(a[l],g,k,h,b),g=Math.round(b.l),k=Math.round(b.r),h=Math.round(b.t),b=Math.round(b.b);if(a=this.categoryAxis)b=this.getAxisBounds(a,g,k,h,b),g=Math.round(b.l),
k=Math.round(b.r),h=Math.round(b.t),b=Math.round(b.b);d.left&&g<c&&(this.marginLeft=Math.round(-g+c));d.right&&k>=e-c&&(this.marginRight=Math.round(k-e+c));d.top&&h<c+this.titleHeight&&(this.marginTop=Math.round(this.marginTop-h+c+this.titleHeight));d.bottom&&b>f-c&&(this.marginBottom=Math.round(this.marginBottom+b-f+c));this.initChart()},getAxisBounds:function(a,b,c,d,e){if(!a.ignoreAxisWidth){var f=a.labelsSet,g=a.tickLength;a.inside&&(g=0);if(f)switch(f=a.getBBox(),a.position){case "top":a=f.y;
d>a&&(d=a);break;case "bottom":a=f.y+f.height;e<a&&(e=a);break;case "right":a=f.x+f.width+g+3;c<a&&(c=a);break;case "left":a=f.x-g,b>a&&(b=a)}}return{l:b,t:d,r:c,b:e}},drawZoomOutButton:function(){var a=this,b=a.container.set();a.zoomButtonSet.push(b);var c=a.color,d=a.fontSize,e=a.zoomOutButtonImageSize,f=a.zoomOutButtonImage,g=AmCharts.lang.zoomOutText||a.zoomOutText,h=a.zoomOutButtonColor,k=a.zoomOutButtonAlpha,l=a.zoomOutButtonFontSize,m=a.zoomOutButtonPadding;isNaN(l)||(d=l);(l=a.zoomOutButtonFontColor)&&
(c=l);var l=a.zoomOutButton,n;l&&(l.fontSize&&(d=l.fontSize),l.color&&(c=l.color),l.backgroundColor&&(h=l.backgroundColor),isNaN(l.backgroundAlpha)||(a.zoomOutButtonRollOverAlpha=l.backgroundAlpha));var p=l=0;void 0!==a.pathToImages&&f&&(n=a.container.image(a.pathToImages+f,0,0,e,e),b.push(n),n=n.getBBox(),l=n.width+5);void 0!==g&&(c=AmCharts.text(a.container,g,c,a.fontFamily,d,"start"),d=c.getBBox(),p=n?n.height/2-3:d.height/2,c.translate(l,p),b.push(c));n=b.getBBox();c=1;AmCharts.isModern||(c=0);
h=AmCharts.rect(a.container,n.width+2*m+5,n.height+2*m-2,h,1,1,h,c);h.setAttr("opacity",k);h.translate(-m,-m);b.push(h);h.toBack();a.zbBG=h;n=h.getBBox();b.translate(a.marginLeftReal+a.plotAreaWidth-n.width+m,a.marginTopReal+m);b.hide();b.mouseover(function(){a.rollOverZB()}).mouseout(function(){a.rollOutZB()}).click(function(){a.clickZB()}).touchstart(function(){a.rollOverZB()}).touchend(function(){a.rollOutZB();a.clickZB()});for(k=0;k<b.length;k++)b[k].attr({cursor:"pointer"});a.zbSet=b},rollOverZB:function(){this.zbBG.setAttr("opacity",
this.zoomOutButtonRollOverAlpha)},rollOutZB:function(){this.zbBG.setAttr("opacity",this.zoomOutButtonAlpha)},clickZB:function(){this.zoomOut()},zoomOut:function(){this.updateScrollbar=!0;this.zoom()},drawPlotArea:function(){var a=this.dx,b=this.dy,c=this.marginLeftReal,d=this.marginTopReal,e=this.plotAreaWidth-1,f=this.plotAreaHeight-1,g=this.plotAreaFillColors,h=this.plotAreaFillAlphas,k=this.plotAreaBorderColor,l=this.plotAreaBorderAlpha;this.trendLinesSet.clipRect(c,d,e,f);"object"==typeof h&&
(h=h[0]);g=AmCharts.polygon(this.container,[0,e,e,0,0],[0,0,f,f,0],g,h,1,k,l,this.plotAreaGradientAngle);g.translate(c+a,d+b);this.set.push(g);0!==a&&0!==b&&(g=this.plotAreaFillColors,"object"==typeof g&&(g=g[0]),g=AmCharts.adjustLuminosity(g,-.15),e=AmCharts.polygon(this.container,[0,a,e+a,e,0],[0,b,b,0,0],g,h,1,k,l),e.translate(c,d+f),this.set.push(e),a=AmCharts.polygon(this.container,[0,0,a,a,0],[0,f,f+b,b,0],g,h,1,k,l),a.translate(c,d),this.set.push(a));(c=this.bbset)&&this.scrollbarOnly&&c.remove()},
updatePlotArea:function(){var a=this.updateWidth(),b=this.updateHeight(),c=this.container;this.realWidth=a;this.realWidth=b;c&&this.container.setSize(a,b);a=a-this.marginLeftReal-this.marginRightReal-this.dx;b=b-this.marginTopReal-this.marginBottomReal;1>a&&(a=1);1>b&&(b=1);this.plotAreaWidth=Math.round(a);this.plotAreaHeight=Math.round(b)},updateDxy:function(){this.dx=Math.round(this.depth3D*Math.cos(this.angle*Math.PI/180));this.dy=Math.round(-this.depth3D*Math.sin(this.angle*Math.PI/180));this.d3x=
Math.round(this.columnSpacing3D*Math.cos(this.angle*Math.PI/180));this.d3y=Math.round(-this.columnSpacing3D*Math.sin(this.angle*Math.PI/180))},updateMargins:function(){var a=this.getTitleHeight();this.titleHeight=a;this.marginTopReal=this.marginTop-this.dy+a;this.marginBottomReal=this.marginBottom;this.marginLeftReal=this.marginLeft;this.marginRightReal=this.marginRight},updateValueAxes:function(){var a=this.valueAxes,b=this.marginLeftReal,c=this.marginTopReal,d=this.plotAreaHeight,e=this.plotAreaWidth,
f;for(f=0;f<a.length;f++){var g=a[f];g.axisRenderer=AmCharts.RecAxis;g.guideFillRenderer=AmCharts.RecFill;g.axisItemRenderer=AmCharts.RecItem;g.dx=this.dx;g.dy=this.dy;g.viW=e-1;g.viH=d-1;g.marginsChanged=!0;g.viX=b;g.viY=c;this.updateObjectSize(g)}},updateObjectSize:function(a){a.width=(this.plotAreaWidth-1)*this.widthMultiplier;a.height=(this.plotAreaHeight-1)*this.heightMultiplier;a.x=this.marginLeftReal+this.horizontalPosition;a.y=this.marginTopReal+this.verticalPosition},updateGraphs:function(){var a=
this.graphs,b;for(b=0;b<a.length;b++){var c=a[b];c.x=this.marginLeftReal+this.horizontalPosition;c.y=this.marginTopReal+this.verticalPosition;c.width=this.plotAreaWidth*this.widthMultiplier;c.height=this.plotAreaHeight*this.heightMultiplier;c.index=b;c.dx=this.dx;c.dy=this.dy;c.rotate=this.rotate}},updateChartCursor:function(){var a=this.chartCursor;a&&(a=AmCharts.processObject(a,AmCharts.ChartCursor,this.theme),this.addChartCursor(a),a.x=this.marginLeftReal,a.y=this.marginTopReal,a.width=this.plotAreaWidth-
1,a.height=this.plotAreaHeight-1,a.chart=this)},processScrollbars:function(){var a=this.chartScrollbar;a&&(a=AmCharts.processObject(a,AmCharts.ChartScrollbar,this.theme),this.addChartScrollbar(a))},updateScrollbars:function(){},addChartCursor:function(a){AmCharts.callMethod("destroy",[this.chartCursor]);a&&(this.listenTo(a,"changed",this.handleCursorChange),this.listenTo(a,"zoomed",this.handleCursorZoom));this.chartCursor=a},removeChartCursor:function(){AmCharts.callMethod("destroy",[this.chartCursor]);
this.chartCursor=null},zoomTrendLines:function(){var a=this.trendLines,b;for(b=0;b<a.length;b++){var c=a[b];c.valueAxis.recalculateToPercents?c.set&&c.set.hide():(c.x=this.marginLeftReal+this.horizontalPosition,c.y=this.marginTopReal+this.verticalPosition,c.draw())}},addTrendLine:function(a){this.trendLines.push(a)},removeTrendLine:function(a){var b=this.trendLines,c;for(c=b.length-1;0<=c;c--)b[c]==a&&b.splice(c,1)},adjustMargins:function(a,b){var c=a.scrollbarHeight+a.offset;"top"==a.position?b?
this.marginLeftReal+=c:this.marginTopReal+=c:b?this.marginRightReal+=c:this.marginBottomReal+=c},getScrollbarPosition:function(a,b,c){a.position=b?"bottom"==c||"left"==c?"bottom":"top":"top"==c||"right"==c?"bottom":"top"},updateChartScrollbar:function(a,b){if(a){a.rotate=b;var c=this.marginTopReal,d=this.marginLeftReal,e=a.scrollbarHeight,f=this.dx,g=this.dy,h=a.offset;"top"==a.position?b?(a.y=c,a.x=d-e-h):(a.y=c-e+g-1-h,a.x=d+f):b?(a.y=c+g,a.x=d+this.plotAreaWidth+f+h):(a.y=c+this.plotAreaHeight+
h,a.x=this.marginLeftReal)}},showZB:function(a){var b=this.zbSet;b&&(a?b.show():b.hide(),this.rollOutZB())},handleReleaseOutside:function(a){AmCharts.AmRectangularChart.base.handleReleaseOutside.call(this,a);(a=this.chartCursor)&&a.handleReleaseOutside()},handleMouseDown:function(a){AmCharts.AmRectangularChart.base.handleMouseDown.call(this,a);var b=this.chartCursor;b&&b.handleMouseDown(a)},handleCursorChange:function(a){}});AmCharts.TrendLine=AmCharts.Class({construct:function(a){this.cname="TrendLine";this.createEvents("click");this.isProtected=!1;this.dashLength=0;this.lineColor="#00CC00";this.lineThickness=this.lineAlpha=1;AmCharts.applyTheme(this,a,this.cname)},draw:function(){var a=this;a.destroy();var b=a.chart,c=b.container,d,e,f,g,h=a.categoryAxis,k=a.initialDate,l=a.initialCategory,m=a.finalDate,n=a.finalCategory,p=a.valueAxis,q=a.valueAxisX,r=a.initialXValue,s=a.finalXValue,v=a.initialValue,w=a.finalValue,
t=p.recalculateToPercents,u=b.dataDateFormat;h&&(k&&(k instanceof Date||(k=u?AmCharts.stringToDate(k,u):new Date(k)),a.initialDate=k,d=h.dateToCoordinate(k)),l&&(d=h.categoryToCoordinate(l)),m&&(m instanceof Date||(m=u?AmCharts.stringToDate(m,u):new Date(m)),a.finalDate=m,e=h.dateToCoordinate(m)),n&&(e=h.categoryToCoordinate(n)));q&&!t&&(isNaN(r)||(d=q.getCoordinate(r)),isNaN(s)||(e=q.getCoordinate(s)));p&&!t&&(isNaN(v)||(f=p.getCoordinate(v)),isNaN(w)||(g=p.getCoordinate(w)));isNaN(d)||isNaN(e)||
isNaN(f)||isNaN(f)||(b.rotate?(h=[f,g],e=[d,e]):(h=[d,e],e=[f,g]),f=a.lineColor,d=AmCharts.line(c,h,e,f,a.lineAlpha,a.lineThickness,a.dashLength),g=h,k=e,n=h[1]-h[0],p=e[1]-e[0],0===n&&(n=.01),0===p&&(p=.01),l=n/Math.abs(n),m=p/Math.abs(p),p=n*p/Math.abs(n*p)*Math.sqrt(Math.pow(n,2)+Math.pow(p,2)),n=Math.asin(n/p),p=90*Math.PI/180-n,n=Math.abs(5*Math.cos(p)),p=Math.abs(5*Math.sin(p)),g.push(h[1]-l*p,h[0]-l*p),k.push(e[1]+m*n,e[0]+m*n),h=AmCharts.polygon(c,g,k,f,.005,0),c=c.set([h,d]),c.translate(b.marginLeftReal,
b.marginTopReal),b.trendLinesSet.push(c),a.line=d,a.set=c,h.mouseup(function(){a.handleLineClick()}).mouseover(function(){a.handleLineOver()}).mouseout(function(){a.handleLineOut()}),h.touchend&&h.touchend(function(){a.handleLineClick()}))},handleLineClick:function(){var a={type:"click",trendLine:this,chart:this.chart};this.fire(a.type,a)},handleLineOver:function(){var a=this.rollOverColor;void 0!==a&&this.line.attr({stroke:a})},handleLineOut:function(){this.line.attr({stroke:this.lineColor})},destroy:function(){AmCharts.remove(this.set)}});AmCharts.circle=function(a,b,c,d,e,f,g,h){if(void 0==e||0===e)e=.01;void 0===f&&(f="#000000");void 0===g&&(g=0);d={fill:c,stroke:f,"fill-opacity":d,"stroke-width":e,"stroke-opacity":g};a=a.circle(0,0,b).attr(d);h&&a.gradient("radialGradient",[c,AmCharts.adjustLuminosity(c,-.6)]);return a};
AmCharts.text=function(a,b,c,d,e,f,g,h){f||(f="middle");"right"==f&&(f="end");isNaN(h)&&(h=1);void 0!==b&&(b=String(b),AmCharts.isIE&&!AmCharts.isModern&&(b=b.replace("&amp;","&"),b=b.replace("&","&amp;")));c={fill:c,"font-family":d,"font-size":e,opacity:h};!0===g&&(c["font-weight"]="bold");c["text-anchor"]=f;return a.text(b,c)};
AmCharts.polygon=function(a,b,c,d,e,f,g,h,k,l,m){isNaN(f)&&(f=.01);isNaN(h)&&(h=e);var n=d,p=!1;"object"==typeof n&&1<n.length&&(p=!0,n=n[0]);void 0===g&&(g=n);e={fill:n,stroke:g,"fill-opacity":e,"stroke-width":f,"stroke-opacity":h};void 0!==m&&0<m&&(e["stroke-dasharray"]=m);m=AmCharts.dx;f=AmCharts.dy;a.handDrawn&&(c=AmCharts.makeHD(b,c,a.handDrawScatter),b=c[0],c=c[1]);g=Math.round;l&&(g=AmCharts.doNothing);l="M"+(g(b[0])+m)+","+(g(c[0])+f);for(h=1;h<b.length;h++)l+=" L"+(g(b[h])+m)+","+(g(c[h])+
f);a=a.path(l+" Z").attr(e);p&&a.gradient("linearGradient",d,k);return a};
AmCharts.rect=function(a,b,c,d,e,f,g,h,k,l,m){isNaN(f)&&(f=0);void 0===k&&(k=0);void 0===l&&(l=270);isNaN(e)&&(e=0);var n=d,p=!1;"object"==typeof n&&(n=n[0],p=!0);void 0===g&&(g=n);void 0===h&&(h=e);b=Math.round(b);c=Math.round(c);var q=0,r=0;0>b&&(b=Math.abs(b),q=-b);0>c&&(c=Math.abs(c),r=-c);q+=AmCharts.dx;r+=AmCharts.dy;e={fill:n,stroke:g,"fill-opacity":e,"stroke-opacity":h};void 0!==m&&0<m&&(e["stroke-dasharray"]=m);a=a.rect(q,r,b,c,k,f).attr(e);p&&a.gradient("linearGradient",d,l);return a};
AmCharts.bullet=function(a,b,c,d,e,f,g,h,k,l,m){var n;"circle"==b&&(b="round");switch(b){case "round":n=AmCharts.circle(a,c/2,d,e,f,g,h);break;case "square":n=AmCharts.polygon(a,[-c/2,c/2,c/2,-c/2],[c/2,c/2,-c/2,-c/2],d,e,f,g,h,l-180);break;case "rectangle":n=AmCharts.polygon(a,[-c,c,c,-c],[c/2,c/2,-c/2,-c/2],d,e,f,g,h,l-180);break;case "diamond":n=AmCharts.polygon(a,[-c/2,0,c/2,0],[0,-c/2,0,c/2],d,e,f,g,h);break;case "triangleUp":n=AmCharts.triangle(a,c,0,d,e,f,g,h);break;case "triangleDown":n=AmCharts.triangle(a,
c,180,d,e,f,g,h);break;case "triangleLeft":n=AmCharts.triangle(a,c,270,d,e,f,g,h);break;case "triangleRight":n=AmCharts.triangle(a,c,90,d,e,f,g,h);break;case "bubble":n=AmCharts.circle(a,c/2,d,e,f,g,h,!0);break;case "line":n=AmCharts.line(a,[-c/2,c/2],[0,0],d,e,f,g,h);break;case "yError":n=a.set();n.push(AmCharts.line(a,[0,0],[-c/2,c/2],d,e,f));n.push(AmCharts.line(a,[-k,k],[-c/2,-c/2],d,e,f));n.push(AmCharts.line(a,[-k,k],[c/2,c/2],d,e,f));break;case "xError":n=a.set(),n.push(AmCharts.line(a,[-c/
2,c/2],[0,0],d,e,f)),n.push(AmCharts.line(a,[-c/2,-c/2],[-k,k],d,e,f)),n.push(AmCharts.line(a,[c/2,c/2],[-k,k],d,e,f))}n&&n.pattern(m);return n};
AmCharts.triangle=function(a,b,c,d,e,f,g,h){if(void 0===f||0===f)f=1;void 0===g&&(g="#000");void 0===h&&(h=0);d={fill:d,stroke:g,"fill-opacity":e,"stroke-width":f,"stroke-opacity":h};b/=2;var k;0===c&&(k=" M"+-b+","+b+" L0,"+-b+" L"+b+","+b+" Z");180==c&&(k=" M"+-b+","+-b+" L0,"+b+" L"+b+","+-b+" Z");90==c&&(k=" M"+-b+","+-b+" L"+b+",0 L"+-b+","+b+" Z");270==c&&(k=" M"+-b+",0 L"+b+","+b+" L"+b+","+-b+" Z");return a.path(k).attr(d)};
AmCharts.line=function(a,b,c,d,e,f,g,h,k,l,m){if(a.handDrawn&&!m)return AmCharts.handDrawnLine(a,b,c,d,e,f,g,h,k,l,m);f={fill:"none","stroke-width":f};void 0!==g&&0<g&&(f["stroke-dasharray"]=g);isNaN(e)||(f["stroke-opacity"]=e);d&&(f.stroke=d);d=Math.round;l&&(d=AmCharts.doNothing);l=AmCharts.dx;e=AmCharts.dy;g="M"+(d(b[0])+l)+","+(d(c[0])+e);for(h=1;h<b.length;h++)g+=" L"+(d(b[h])+l)+","+(d(c[h])+e);if(AmCharts.VML)return a.path(g,void 0,!0).attr(f);k&&(g+=" M0,0 L0,0");return a.path(g).attr(f)};
AmCharts.makeHD=function(a,b,c){for(var d=[],e=[],f=1;f<a.length;f++)for(var g=Number(a[f-1]),h=Number(b[f-1]),k=Number(a[f]),l=Number(b[f]),m=Math.sqrt(Math.pow(k-g,2)+Math.pow(l-h,2)),m=Math.round(m/50)+1,k=(k-g)/m,l=(l-h)/m,n=0;n<=m;n++){var p=g+n*k+Math.random()*c,q=h+n*l+Math.random()*c;d.push(p);e.push(q)}return[d,e]};
AmCharts.handDrawnLine=function(a,b,c,d,e,f,g,h,k,l,m){var n=a.set();for(m=1;m<b.length;m++)for(var p=[b[m-1],b[m]],q=[c[m-1],c[m]],q=AmCharts.makeHD(p,q,a.handDrawScatter),p=q[0],q=q[1],r=1;r<p.length;r++)n.push(AmCharts.line(a,[p[r-1],p[r]],[q[r-1],q[r]],d,e,f+Math.random()*a.handDrawThickness-a.handDrawThickness/2,g,h,k,l,!0));return n};AmCharts.doNothing=function(a){return a};
AmCharts.wedge=function(a,b,c,d,e,f,g,h,k,l,m,n){var p=Math.round;f=p(f);g=p(g);h=p(h);var q=p(g/f*h),r=AmCharts.VML,s=359.5+f/100;359.94<s&&(s=359.94);e>=s&&(e=s);var v=1/180*Math.PI,s=b+Math.sin(d*v)*h,w=c-Math.cos(d*v)*q,t=b+Math.sin(d*v)*f,u=c-Math.cos(d*v)*g,y=b+Math.sin((d+e)*v)*f,E=c-Math.cos((d+e)*v)*g,A=b+Math.sin((d+e)*v)*h,v=c-Math.cos((d+e)*v)*q,z={fill:AmCharts.adjustLuminosity(l.fill,-.2),"stroke-opacity":0,"fill-opacity":l["fill-opacity"]},K=0;180<Math.abs(e)&&(K=1);d=a.set();var I;
r&&(s=p(10*s),t=p(10*t),y=p(10*y),A=p(10*A),w=p(10*w),u=p(10*u),E=p(10*E),v=p(10*v),b=p(10*b),k=p(10*k),c=p(10*c),f*=10,g*=10,h*=10,q*=10,1>Math.abs(e)&&1>=Math.abs(y-t)&&1>=Math.abs(E-u)&&(I=!0));e="";var F;n&&(z["fill-opacity"]=0,z["stroke-opacity"]=l["stroke-opacity"]/2,z.stroke=l.stroke);0<k&&(r?(F=" M"+s+","+(w+k)+" L"+t+","+(u+k),I||(F+=" A"+(b-f)+","+(k+c-g)+","+(b+f)+","+(k+c+g)+","+t+","+(u+k)+","+y+","+(E+k)),F+=" L"+A+","+(v+k),0<h&&(I||(F+=" B"+(b-h)+","+(k+c-q)+","+(b+h)+","+(k+c+q)+
","+A+","+(k+v)+","+s+","+(k+w)))):(F=" M"+s+","+(w+k)+" L"+t+","+(u+k)+(" A"+f+","+g+",0,"+K+",1,"+y+","+(E+k)+" L"+A+","+(v+k)),0<h&&(F+=" A"+h+","+q+",0,"+K+",0,"+s+","+(w+k))),F+=" Z",F=a.path(F,void 0,void 0,"1000,1000").attr(z),d.push(F),F=a.path(" M"+s+","+w+" L"+s+","+(w+k)+" L"+t+","+(u+k)+" L"+t+","+u+" L"+s+","+w+" Z",void 0,void 0,"1000,1000").attr(z),k=a.path(" M"+y+","+E+" L"+y+","+(E+k)+" L"+A+","+(v+k)+" L"+A+","+v+" L"+y+","+E+" Z",void 0,void 0,"1000,1000").attr(z),d.push(F),d.push(k));
r?(I||(e=" A"+p(b-f)+","+p(c-g)+","+p(b+f)+","+p(c+g)+","+p(t)+","+p(u)+","+p(y)+","+p(E)),f=" M"+p(s)+","+p(w)+" L"+p(t)+","+p(u)+e+" L"+p(A)+","+p(v)):f=" M"+s+","+w+" L"+t+","+u+(" A"+f+","+g+",0,"+K+",1,"+y+","+E)+" L"+A+","+v;0<h&&(r?I||(f+=" B"+(b-h)+","+(c-q)+","+(b+h)+","+(c+q)+","+A+","+v+","+s+","+w):f+=" A"+h+","+q+",0,"+K+",0,"+s+","+w);a.handDrawn&&(b=AmCharts.line(a,[s,t],[w,u],l.stroke,l.thickness*Math.random()*a.handDrawThickness,l["stroke-opacity"]),d.push(b));a=a.path(f+" Z",void 0,
void 0,"1000,1000").attr(l);if(m){b=[];for(c=0;c<m.length;c++)b.push(AmCharts.adjustLuminosity(l.fill,m[c]));0<b.length&&a.gradient("linearGradient",b)}a.pattern(n);d.push(a);return d};
AmCharts.adjustLuminosity=function(a,b){a=String(a).replace(/[^0-9a-f]/gi,"");6>a.length&&(a=String(a[0])+String(a[0])+String(a[1])+String(a[1])+String(a[2])+String(a[2]));b=b||0;var c="#",d,e;for(e=0;3>e;e++)d=parseInt(a.substr(2*e,2),16),d=Math.round(Math.min(Math.max(0,d+d*b),255)).toString(16),c+=("00"+d).substr(d.length);return c};AmCharts.Bezier=AmCharts.Class({construct:function(a,b,c,d,e,f,g,h,k,l){"object"==typeof g&&(g=g[0]);"object"==typeof h&&(h=h[0]);f={fill:g,"fill-opacity":h,"stroke-width":f};void 0!==k&&0<k&&(f["stroke-dasharray"]=k);isNaN(e)||(f["stroke-opacity"]=e);d&&(f.stroke=d);d="M"+Math.round(b[0])+","+Math.round(c[0]);e=[];for(k=0;k<b.length;k++)e.push({x:Number(b[k]),y:Number(c[k])});1<e.length&&(b=this.interpolate(e),d+=this.drawBeziers(b));l?d+=l:AmCharts.VML||(d+="M0,0 L0,0");this.path=a.path(d).attr(f)},
interpolate:function(a){var b=[];b.push({x:a[0].x,y:a[0].y});var c=a[1].x-a[0].x,d=a[1].y-a[0].y,e=AmCharts.bezierX,f=AmCharts.bezierY;b.push({x:a[0].x+c/e,y:a[0].y+d/f});var g;for(g=1;g<a.length-1;g++){var h=a[g-1],k=a[g],d=a[g+1];isNaN(d.x)&&(d=k);isNaN(k.x)&&(k=h);isNaN(h.x)&&(h=k);c=d.x-k.x;d=d.y-h.y;h=k.x-h.x;h>c&&(h=c);b.push({x:k.x-h/e,y:k.y-d/f});b.push({x:k.x,y:k.y});b.push({x:k.x+h/e,y:k.y+d/f})}d=a[a.length-1].y-a[a.length-2].y;c=a[a.length-1].x-a[a.length-2].x;b.push({x:a[a.length-1].x-
c/e,y:a[a.length-1].y-d/f});b.push({x:a[a.length-1].x,y:a[a.length-1].y});return b},drawBeziers:function(a){var b="",c;for(c=0;c<(a.length-1)/3;c++)b+=this.drawBezierMidpoint(a[3*c],a[3*c+1],a[3*c+2],a[3*c+3]);return b},drawBezierMidpoint:function(a,b,c,d){var e=Math.round,f=this.getPointOnSegment(a,b,.75),g=this.getPointOnSegment(d,c,.75),h=(d.x-a.x)/16,k=(d.y-a.y)/16,l=this.getPointOnSegment(a,b,.375);a=this.getPointOnSegment(f,g,.375);a.x-=h;a.y-=k;b=this.getPointOnSegment(g,f,.375);b.x+=h;b.y+=
k;c=this.getPointOnSegment(d,c,.375);h=this.getMiddle(l,a);f=this.getMiddle(f,g);g=this.getMiddle(b,c);l=" Q"+e(l.x)+","+e(l.y)+","+e(h.x)+","+e(h.y);l+=" Q"+e(a.x)+","+e(a.y)+","+e(f.x)+","+e(f.y);l+=" Q"+e(b.x)+","+e(b.y)+","+e(g.x)+","+e(g.y);return l+=" Q"+e(c.x)+","+e(c.y)+","+e(d.x)+","+e(d.y)},getMiddle:function(a,b){return{x:(a.x+b.x)/2,y:(a.y+b.y)/2}},getPointOnSegment:function(a,b,c){return{x:a.x+(b.x-a.x)*c,y:a.y+(b.y-a.y)*c}}});AmCharts.AmDraw=AmCharts.Class({construct:function(a,b,c,d){AmCharts.SVG_NS="http://www.w3.org/2000/svg";AmCharts.SVG_XLINK="http://www.w3.org/1999/xlink";AmCharts.hasSVG=!!document.createElementNS&&!!document.createElementNS(AmCharts.SVG_NS,"svg").createSVGRect;1>b&&(b=10);1>c&&(c=10);this.div=a;this.width=b;this.height=c;this.rBin=document.createElement("div");if(AmCharts.hasSVG){AmCharts.SVG=!0;var e=this.createSvgElement("svg");e.style.position="absolute";e.style.width=b+"px";e.style.height=c+
"px";b=this.createSvgElement("desc");b.appendChild(document.createTextNode("JavaScript chart by amCharts "+d.version));e.appendChild(b);AmCharts.rtl&&(e.setAttribute("direction","rtl"),e.style.left="auto",e.style.right="0px");e.setAttribute("version","1.1");a.appendChild(e);this.container=e;this.R=new AmCharts.SVGRenderer(this)}else AmCharts.isIE&&AmCharts.VMLRenderer&&(AmCharts.VML=!0,AmCharts.vmlStyleSheet||(document.namespaces.add("amvml","urn:schemas-microsoft-com:vml"),31>document.styleSheets.length?
(e=document.createStyleSheet(),e.addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true"),AmCharts.vmlStyleSheet=e):document.styleSheets[0].addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true")),this.container=a,this.R=new AmCharts.VMLRenderer(this,d),this.R.disableSelection(a))},createSvgElement:function(a){return document.createElementNS(AmCharts.SVG_NS,a)},circle:function(a,b,c,d){var e=new AmCharts.AmDObject("circle",this);e.attr({r:c,
cx:a,cy:b});this.addToContainer(e.node,d);return e},setSize:function(a,b){0<a&&0<b&&(this.container.style.width=a+"px",this.container.style.height=b+"px")},rect:function(a,b,c,d,e,f,g){var h=new AmCharts.AmDObject("rect",this);AmCharts.VML&&(e=100*e/Math.min(c,d),c+=2*f,d+=2*f,h.bw=f,h.node.style.marginLeft=-f,h.node.style.marginTop=-f);1>c&&(c=1);1>d&&(d=1);h.attr({x:a,y:b,width:c,height:d,rx:e,ry:e,"stroke-width":f});this.addToContainer(h.node,g);return h},image:function(a,b,c,d,e,f){var g=new AmCharts.AmDObject("image",
this);g.attr({x:b,y:c,width:d,height:e});this.R.path(g,a);this.addToContainer(g.node,f);return g},addToContainer:function(a,b){b||(b=this.container);b.appendChild(a)},text:function(a,b,c){return this.R.text(a,b,c)},path:function(a,b,c,d){var e=new AmCharts.AmDObject("path",this);d||(d="100,100");e.attr({cs:d});c?e.attr({dd:a}):e.attr({d:a});this.addToContainer(e.node,b);return e},set:function(a){return this.R.set(a)},remove:function(a){if(a){var b=this.rBin;b.appendChild(a);b.innerHTML=""}},renderFix:function(){var a=
this.container,b=a.style,c;try{c=a.getScreenCTM()||a.createSVGMatrix()}catch(d){c=a.createSVGMatrix()}a=1-c.e%1;c=1-c.f%1;.5<a&&(a-=1);.5<c&&(c-=1);a&&(b.left=a+"px");c&&(b.top=c+"px")},update:function(){this.R.update()}});AmCharts.AmDObject=AmCharts.Class({construct:function(a,b){this.D=b;this.R=b.R;this.node=this.R.create(this,a);this.y=this.x=0;this.scale=1},attr:function(a){this.R.attr(this,a);return this},getAttr:function(a){return this.node.getAttribute(a)},setAttr:function(a,b){this.R.setAttr(this,a,b);return this},clipRect:function(a,b,c,d){this.R.clipRect(this,a,b,c,d)},translate:function(a,b,c,d){d||(a=Math.round(a),b=Math.round(b));this.R.move(this,a,b,c);this.x=a;this.y=b;this.scale=c;this.angle&&this.rotate(this.angle)},
rotate:function(a,b){this.R.rotate(this,a,b);this.angle=a},animate:function(a,b,c){for(var d in a)if(a.hasOwnProperty(d)){var e=d,f=a[d];c=AmCharts.getEffect(c);this.R.animate(this,e,f,b,c)}},push:function(a){if(a){var b=this.node;b.appendChild(a.node);var c=a.clipPath;c&&b.appendChild(c);(a=a.grad)&&b.appendChild(a)}},text:function(a){this.R.setText(this,a)},remove:function(){this.R.remove(this)},clear:function(){var a=this.node;if(a.hasChildNodes())for(;1<=a.childNodes.length;)a.removeChild(a.firstChild)},
hide:function(){this.setAttr("visibility","hidden")},show:function(){this.setAttr("visibility","visible")},getBBox:function(){return this.R.getBBox(this)},toFront:function(){var a=this.node;if(a){this.prevNextNode=a.nextSibling;var b=a.parentNode;b&&b.appendChild(a)}},toPrevious:function(){var a=this.node;a&&this.prevNextNode&&(a=a.parentNode)&&a.insertBefore(this.prevNextNode,null)},toBack:function(){var a=this.node;if(a){this.prevNextNode=a.nextSibling;var b=a.parentNode;if(b){var c=b.firstChild;
c&&b.insertBefore(a,c)}}},mouseover:function(a){this.R.addListener(this,"mouseover",a);return this},mouseout:function(a){this.R.addListener(this,"mouseout",a);return this},click:function(a){this.R.addListener(this,"click",a);return this},dblclick:function(a){this.R.addListener(this,"dblclick",a);return this},mousedown:function(a){this.R.addListener(this,"mousedown",a);return this},mouseup:function(a){this.R.addListener(this,"mouseup",a);return this},touchstart:function(a){this.R.addListener(this,
"touchstart",a);return this},touchend:function(a){this.R.addListener(this,"touchend",a);return this},contextmenu:function(a){this.node.addEventListener?this.node.addEventListener("contextmenu",a,!0):this.R.addListener(this,"contextmenu",a);return this},stop:function(a){(a=this.animationX)&&AmCharts.removeFromArray(this.R.animations,a);(a=this.animationY)&&AmCharts.removeFromArray(this.R.animations,a)},length:function(){return this.node.childNodes.length},gradient:function(a,b,c){this.R.gradient(this,
a,b,c)},pattern:function(a,b){a&&this.R.pattern(this,a,b)}});AmCharts.VMLRenderer=AmCharts.Class({construct:function(a,b){this.chart=b;this.D=a;this.cNames={circle:"oval",rect:"roundrect",path:"shape"};this.styleMap={x:"left",y:"top",width:"width",height:"height","font-family":"fontFamily","font-size":"fontSize",visibility:"visibility"}},create:function(a,b){var c;if("group"==b)c=document.createElement("div"),a.type="div";else if("text"==b)c=document.createElement("div"),a.type="text";else if("image"==b)c=document.createElement("img"),a.type="image";else{a.type=
"shape";a.shapeType=this.cNames[b];c=document.createElement("amvml:"+this.cNames[b]);var d=document.createElement("amvml:stroke");c.appendChild(d);a.stroke=d;var e=document.createElement("amvml:fill");c.appendChild(e);a.fill=e;e.className="amvml";d.className="amvml";c.className="amvml"}c.style.position="absolute";c.style.top=0;c.style.left=0;return c},path:function(a,b){a.node.setAttribute("src",b)},setAttr:function(a,b,c){if(void 0!==c){var d;8===document.documentMode&&(d=!0);var e=a.node,f=a.type,
g=e.style;"r"==b&&(g.width=2*c,g.height=2*c);"roundrect"!=a.shapeType||"width"!=b&&"height"!=b||(c-=1);"cursor"==b&&(g.cursor=c);"cx"==b&&(g.left=c-AmCharts.removePx(g.width)/2);"cy"==b&&(g.top=c-AmCharts.removePx(g.height)/2);var h=this.styleMap[b];void 0!==h&&(g[h]=c);"text"==f&&("text-anchor"==b&&(a.anchor=c,h=e.clientWidth,"end"==c&&(g.marginLeft=-h+"px"),"middle"==c&&(g.marginLeft=-(h/2)+"px",g.textAlign="center"),"start"==c&&(g.marginLeft="0px")),"fill"==b&&(g.color=c),"font-weight"==b&&(g.fontWeight=
c));if(g=a.children)for(h=0;h<g.length;h++)g[h].setAttr(b,c);if("shape"==f){"cs"==b&&(e.style.width="100px",e.style.height="100px",e.setAttribute("coordsize",c));"d"==b&&e.setAttribute("path",this.svgPathToVml(c));"dd"==b&&e.setAttribute("path",c);f=a.stroke;a=a.fill;"stroke"==b&&(d?f.color=c:f.setAttribute("color",c));"stroke-width"==b&&(d?f.weight=c:f.setAttribute("weight",c));"stroke-opacity"==b&&(d?f.opacity=c:f.setAttribute("opacity",c));"stroke-dasharray"==b&&(g="solid",0<c&&3>c&&(g="dot"),
3<=c&&6>=c&&(g="dash"),6<c&&(g="longdash"),d?f.dashstyle=g:f.setAttribute("dashstyle",g));if("fill-opacity"==b||"opacity"==b)0===c?d?a.on=!1:a.setAttribute("on",!1):d?a.opacity=c:a.setAttribute("opacity",c);"fill"==b&&(d?a.color=c:a.setAttribute("color",c));"rx"==b&&(d?e.arcSize=c+"%":e.setAttribute("arcsize",c+"%"))}}},attr:function(a,b){for(var c in b)b.hasOwnProperty(c)&&this.setAttr(a,c,b[c])},text:function(a,b,c){var d=new AmCharts.AmDObject("text",this.D),e=d.node;e.style.whiteSpace="pre";e.innerHTML=
a;this.D.addToContainer(e,c);this.attr(d,b);return d},getBBox:function(a){return this.getBox(a.node)},getBox:function(a){var b=a.offsetLeft,c=a.offsetTop,d=a.offsetWidth,e=a.offsetHeight,f;if(a.hasChildNodes()){var g,h,k;for(k=0;k<a.childNodes.length;k++){f=this.getBox(a.childNodes[k]);var l=f.x;isNaN(l)||(isNaN(g)?g=l:l<g&&(g=l));var m=f.y;isNaN(m)||(isNaN(h)?h=m:m<h&&(h=m));l=f.width+l;isNaN(l)||(d=Math.max(d,l));f=f.height+m;isNaN(f)||(e=Math.max(e,f))}0>g&&(b+=g);0>h&&(c+=h)}return{x:b,y:c,width:d,
height:e}},setText:function(a,b){var c=a.node;c&&(c.innerHTML=b);this.setAttr(a,"text-anchor",a.anchor)},addListener:function(a,b,c){a.node["on"+b]=c},move:function(a,b,c){var d=a.node,e=d.style;"text"==a.type&&(c-=AmCharts.removePx(e.fontSize)/2-1);"oval"==a.shapeType&&(b-=AmCharts.removePx(e.width)/2,c-=AmCharts.removePx(e.height)/2);a=a.bw;isNaN(a)||(b-=a,c-=a);isNaN(b)||isNaN(c)||(d.style.left=b+"px",d.style.top=c+"px")},svgPathToVml:function(a){var b=a.split(" ");a="";var c,d=Math.round,e;for(e=
0;e<b.length;e++){var f=b[e],g=f.substring(0,1),f=f.substring(1),h=f.split(","),k=d(h[0])+","+d(h[1]);"M"==g&&(a+=" m "+k);"L"==g&&(a+=" l "+k);"Z"==g&&(a+=" x e");if("Q"==g){var l=c.length,m=c[l-1],n=h[0],p=h[1],k=h[2],q=h[3];c=d(c[l-2]/3+2/3*n);m=d(m/3+2/3*p);n=d(2/3*n+k/3);p=d(2/3*p+q/3);a+=" c "+c+","+m+","+n+","+p+","+k+","+q}"A"==g&&(a+=" wa "+f);"B"==g&&(a+=" at "+f);c=h}return a},animate:function(a,b,c,d,e){var f=a.node,g=this.chart;if("translate"==b){b=c.split(",");c=b[1];var h=f.offsetTop;
g.animate(a,"left",f.offsetLeft,b[0],d,e,"px");g.animate(a,"top",h,c,d,e,"px")}},clipRect:function(a,b,c,d,e){a=a.node;0===b&&0===c?(a.style.width=d+"px",a.style.height=e+"px",a.style.overflow="hidden"):a.style.clip="rect("+c+"px "+(b+d)+"px "+(c+e)+"px "+b+"px)"},rotate:function(a,b,c){if(0!==Number(b)){var d=a.node;a=d.style;c||(c=this.getBGColor(d.parentNode));a.backgroundColor=c;a.paddingLeft=1;c=b*Math.PI/180;var e=Math.cos(c),f=Math.sin(c),g=AmCharts.removePx(a.left),h=AmCharts.removePx(a.top),
k=d.offsetWidth,d=d.offsetHeight;b/=Math.abs(b);a.left=g+k/2-k/2*Math.cos(c)-b*d/2*Math.sin(c)+3;a.top=h-b*k/2*Math.sin(c)+b*d/2*Math.sin(c);a.cssText=a.cssText+"; filter:progid:DXImageTransform.Microsoft.Matrix(M11='"+e+"', M12='"+-f+"', M21='"+f+"', M22='"+e+"', sizingmethod='auto expand');"}},getBGColor:function(a){var b="#FFFFFF";if(a.style){var c=a.style.backgroundColor;""!==c?b=c:a.parentNode&&(b=this.getBGColor(a.parentNode))}return b},set:function(a){var b=new AmCharts.AmDObject("group",this.D);
this.D.container.appendChild(b.node);if(a){var c;for(c=0;c<a.length;c++)b.push(a[c])}return b},gradient:function(a,b,c,d){var e="";"radialGradient"==b&&(b="gradientradial",c.reverse());"linearGradient"==b&&(b="gradient");var f;for(f=0;f<c.length;f++){var g=Math.round(100*f/(c.length-1)),e=e+(g+"% "+c[f]);f<c.length-1&&(e+=",")}a=a.fill;90==d?d=0:270==d?d=180:180==d?d=90:0===d&&(d=270);8===document.documentMode?(a.type=b,a.angle=d):(a.setAttribute("type",b),a.setAttribute("angle",d));e&&(a.colors.value=
e)},remove:function(a){a.clipPath&&this.D.remove(a.clipPath);this.D.remove(a.node)},disableSelection:function(a){void 0!==typeof a.onselectstart&&(a.onselectstart=function(){return!1});a.style.cursor="default"},pattern:function(a,b){var c=a.node,d=a.fill,e="none";b.color&&(e=b.color);c.fillColor=e;8===document.documentMode?(d.type="tile",d.src=b.url):(d.setAttribute("type","tile"),d.setAttribute("src",b.url))},update:function(){}});AmCharts.SVGRenderer=AmCharts.Class({construct:function(a){this.D=a;this.animations=[]},create:function(a,b){return document.createElementNS(AmCharts.SVG_NS,b)},attr:function(a,b){for(var c in b)b.hasOwnProperty(c)&&this.setAttr(a,c,b[c])},setAttr:function(a,b,c){void 0!==c&&a.node.setAttribute(b,c)},animate:function(a,b,c,d,e){var f=a.node;a["an_"+b]&&AmCharts.removeFromArray(this.animations,a["an_"+b]);"translate"==b?(f=(f=f.getAttribute("transform"))?String(f).substring(10,f.length-1):"0,0",f=
f.split(", ").join(" "),f=f.split(" ").join(","),0===f&&(f="0,0")):f=Number(f.getAttribute(b));c={obj:a,frame:0,attribute:b,from:f,to:c,time:d,effect:e};this.animations.push(c);a["an_"+b]=c},update:function(){var a,b=this.animations;for(a=b.length-1;0<=a;a--){var c=b[a],d=1E3*c.time/AmCharts.updateRate,e=c.frame+1,f=c.obj,g=c.attribute,h,k,l;e<=d?(c.frame++,"translate"==g?(h=c.from.split(","),g=Number(h[0]),h=Number(h[1]),isNaN(h)&&(h=0),k=c.to.split(","),l=Number(k[0]),k=Number(k[1]),l=0===l-g?l:
Math.round(AmCharts[c.effect](0,e,g,l-g,d)),c=0===k-h?k:Math.round(AmCharts[c.effect](0,e,h,k-h,d)),g="transform",c="translate("+l+","+c+")"):(k=Number(c.from),h=Number(c.to),l=h-k,c=AmCharts[c.effect](0,e,k,l,d),isNaN(c)&&(c=h),0===l&&this.animations.splice(a,1)),this.setAttr(f,g,c)):("translate"==g?(k=c.to.split(","),l=Number(k[0]),k=Number(k[1]),f.translate(l,k)):(h=Number(c.to),this.setAttr(f,g,h)),this.animations.splice(a,1))}},getBBox:function(a){if(a=a.node)try{return a.getBBox()}catch(b){}return{width:0,
height:0,x:0,y:0}},path:function(a,b){a.node.setAttributeNS(AmCharts.SVG_XLINK,"xlink:href",b)},clipRect:function(a,b,c,d,e){var f=a.node,g=a.clipPath;g&&this.D.remove(g);var h=f.parentNode;h&&(f=document.createElementNS(AmCharts.SVG_NS,"clipPath"),g=AmCharts.getUniqueId(),f.setAttribute("id",g),this.D.rect(b,c,d,e,0,0,f),h.appendChild(f),b="#",AmCharts.baseHref&&!AmCharts.isIE&&(b=window.location.href+b),this.setAttr(a,"clip-path","url("+b+g+")"),this.clipPathC++,a.clipPath=f)},text:function(a,b,
c){var d=new AmCharts.AmDObject("text",this.D);a=String(a).split("\n");var e=b["font-size"],f;for(f=0;f<a.length;f++){var g=this.create(null,"tspan");g.appendChild(document.createTextNode(a[f]));g.setAttribute("y",(e+2)*f+Math.round(e/2));g.setAttribute("x",0);d.node.appendChild(g)}d.node.setAttribute("y",Math.round(e/2));this.attr(d,b);this.D.addToContainer(d.node,c);return d},setText:function(a,b){var c=a.node;c&&(c.removeChild(c.firstChild),c.appendChild(document.createTextNode(b)))},move:function(a,
b,c,d){b="translate("+b+","+c+")";d&&(b=b+" scale("+d+")");this.setAttr(a,"transform",b)},rotate:function(a,b){var c=a.node.getAttribute("transform"),d="rotate("+b+")";c&&(d=c+" "+d);this.setAttr(a,"transform",d)},set:function(a){var b=new AmCharts.AmDObject("g",this.D);this.D.container.appendChild(b.node);if(a){var c;for(c=0;c<a.length;c++)b.push(a[c])}return b},addListener:function(a,b,c){a.node["on"+b]=c},gradient:function(a,b,c,d){var e=a.node,f=a.grad;f&&this.D.remove(f);b=document.createElementNS(AmCharts.SVG_NS,
b);f=AmCharts.getUniqueId();b.setAttribute("id",f);if(!isNaN(d)){var g=0,h=0,k=0,l=0;90==d?k=100:270==d?l=100:180==d?g=100:0===d&&(h=100);b.setAttribute("x1",g+"%");b.setAttribute("x2",h+"%");b.setAttribute("y1",k+"%");b.setAttribute("y2",l+"%")}for(d=0;d<c.length;d++)g=document.createElementNS(AmCharts.SVG_NS,"stop"),h=100*d/(c.length-1),0===d&&(h=0),g.setAttribute("offset",h+"%"),g.setAttribute("stop-color",c[d]),b.appendChild(g);e.parentNode.appendChild(b);c="#";AmCharts.baseHref&&!AmCharts.isIE&&
(c=window.location.href+c);e.setAttribute("fill","url("+c+f+")");a.grad=b},pattern:function(a,b,c){var d=a.node;isNaN(c)&&(c=1);var e=a.patternNode;e&&this.D.remove(e);var e=document.createElementNS(AmCharts.SVG_NS,"pattern"),f=AmCharts.getUniqueId(),g=b;b.url&&(g=b.url);var h=Number(b.width);isNaN(h)&&(h=4);var k=Number(b.height);isNaN(k)&&(k=4);h/=c;k/=c;c=b.x;isNaN(c)&&(c=0);var l=-Math.random()*Number(b.randomX);isNaN(l)||(c=l);l=b.y;isNaN(l)&&(l=0);var m=-Math.random()*Number(b.randomY);isNaN(m)||
(l=m);e.setAttribute("id",f);e.setAttribute("width",h);e.setAttribute("height",k);e.setAttribute("patternUnits","userSpaceOnUse");e.setAttribute("xlink:href",g);b.color&&(m=document.createElementNS(AmCharts.SVG_NS,"rect"),m.setAttributeNS(null,"height",h),m.setAttributeNS(null,"width",k),m.setAttributeNS(null,"fill",b.color),e.appendChild(m));this.D.image(g,0,0,h,k,e).translate(c,l);g="#";AmCharts.baseHref&&!AmCharts.isIE&&(g=window.location.href+g);d.setAttribute("fill","url("+g+f+")");a.patternNode=
e;d.parentNode.appendChild(e)},remove:function(a){a.clipPath&&this.D.remove(a.clipPath);a.grad&&this.D.remove(a.grad);a.patternNode&&this.D.remove(a.patternNode);this.D.remove(a.node)}});AmCharts.AmDSet=AmCharts.Class({construct:function(a){this.create("g")},attr:function(a){this.R.attr(this.node,a)},move:function(a,b){this.R.move(this.node,a,b)}});AmCharts.AmLegend=AmCharts.Class({construct:function(a){this.cname="AmLegend";this.createEvents("rollOverMarker","rollOverItem","rollOutMarker","rollOutItem","showItem","hideItem","clickMarker","rollOverItem","rollOutItem","clickLabel");this.position="bottom";this.borderColor=this.color="#000000";this.borderAlpha=0;this.markerLabelGap=5;this.verticalGap=10;this.align="left";this.horizontalGap=0;this.spacing=10;this.markerDisabledColor="#AAB3B3";this.markerType="square";this.markerSize=16;this.markerBorderThickness=
this.markerBorderAlpha=1;this.marginBottom=this.marginTop=0;this.marginLeft=this.marginRight=20;this.autoMargins=!0;this.valueWidth=50;this.switchable=!0;this.switchType="x";this.switchColor="#FFFFFF";this.rollOverColor="#CC0000";this.reversedOrder=!1;this.labelText="[[title]]";this.valueText="[[value]]";this.useMarkerColorForLabels=!1;this.rollOverGraphAlpha=1;this.textClickEnabled=!1;this.equalWidths=!0;this.dateFormat="DD-MM-YYYY";this.backgroundColor="#FFFFFF";this.backgroundAlpha=0;this.useGraphSettings=
!1;this.showEntries=!0;AmCharts.applyTheme(this,a,this.cname)},setData:function(a){this.legendData=a;this.invalidateSize()},invalidateSize:function(){this.destroy();this.entries=[];this.valueLabels=[];(AmCharts.ifArray(this.legendData)||AmCharts.ifArray(this.data))&&this.drawLegend()},drawLegend:function(){var a=this.chart,b=this.position,c=this.width,d=a.divRealWidth,e=a.divRealHeight,f=this.div,g=this.legendData;this.data&&(g=this.data);isNaN(this.fontSize)&&(this.fontSize=a.fontSize);if("right"==
b||"left"==b)this.maxColumns=1,this.autoMargins&&(this.marginLeft=this.marginRight=10);else if(this.autoMargins){this.marginRight=a.marginRight;this.marginLeft=a.marginLeft;var h=a.autoMarginOffset;"bottom"==b?(this.marginBottom=h,this.marginTop=0):(this.marginTop=h,this.marginBottom=0)}var k;void 0!==c?k=AmCharts.toCoordinate(c,d):"right"!=b&&"left"!=b&&(k=a.realWidth);"outside"==b?(k=f.offsetWidth,e=f.offsetHeight,f.clientHeight&&(k=f.clientWidth,e=f.clientHeight)):(isNaN(k)||(f.style.width=k+"px"),
f.className="amChartsLegend");this.divWidth=k;(b=this.container)?(b.container.innerHTML="",f.appendChild(b.container),b.setSize(k,e)):b=new AmCharts.AmDraw(f,k,e,a);this.container=b;this.lx=0;this.ly=8;e=this.markerSize;e>this.fontSize&&(this.ly=e/2-1);0<e&&(this.lx+=e+this.markerLabelGap);this.titleWidth=0;if(e=this.title)a=AmCharts.text(this.container,e,this.color,a.fontFamily,this.fontSize,"start",!0),a.translate(this.marginLeft,this.marginTop+this.verticalGap+this.ly+1),a=a.getBBox(),this.titleWidth=
a.width+15,this.titleHeight=a.height+6;this.index=this.maxLabelWidth=0;if(this.showEntries){for(a=0;a<g.length;a++)this.createEntry(g[a]);for(a=this.index=0;a<g.length;a++)this.createValue(g[a])}this.arrangeEntries();this.updateValues()},arrangeEntries:function(){var a=this.position,b=this.marginLeft+this.titleWidth,c=this.marginRight,d=this.marginTop,e=this.marginBottom,f=this.horizontalGap,g=this.div,h=this.divWidth,k=this.maxColumns,l=this.verticalGap,m=this.spacing,n=h-c-b,p=0,q=0,r=this.container;
this.set&&this.set.remove();var s=r.set();this.set=s;r=r.set();s.push(r);var v=this.entries,w,t;for(t=0;t<v.length;t++){w=v[t].getBBox();var u=w.width;u>p&&(p=u);w=w.height;w>q&&(q=w)}var u=q=0,y=f,E=0,A=0;for(t=0;t<v.length;t++){var z=v[t];this.reversedOrder&&(z=v[v.length-t-1]);w=z.getBBox();var K;this.equalWidths?K=f+u*(p+m+this.markerLabelGap):(K=y,y=y+w.width+f+m);w.height>A&&(A=w.height);K+w.width>n&&0<t&&0!==u&&(q++,u=0,K=f,y=K+w.width+f+m,E=E+A+l,A=0);z.translate(K,E);u++;!isNaN(k)&&u>=k&&
(u=0,q++,E=E+A+l,A=0);r.push(z)}w=r.getBBox();k=w.height+2*l-1;"left"==a||"right"==a?(h=w.width+2*f,g.style.width=h+b+c+"px"):h=h-b-c-1;c=AmCharts.polygon(this.container,[0,h,h,0],[0,0,k,k],this.backgroundColor,this.backgroundAlpha,1,this.borderColor,this.borderAlpha);s.push(c);s.translate(b,d);c.toBack();b=f;if("top"==a||"bottom"==a||"absolute"==a||"outside"==a)"center"==this.align?b=f+(h-w.width)/2:"right"==this.align&&(b=f+h-w.width);r.translate(b,l+1);this.titleHeight>k&&(k=this.titleHeight);
a=k+d+e+1;0>a&&(a=0);g.style.height=Math.round(a)+"px"},createEntry:function(a){if(!1!==a.visibleInLegend){var b=this.chart,c=a.markerType;c||(c=this.markerType);var d=a.color,e=a.alpha;a.legendKeyColor&&(d=a.legendKeyColor());a.legendKeyAlpha&&(e=a.legendKeyAlpha());var f;!0===a.hidden&&(f=d=this.markerDisabledColor);var g=a.pattern,h=a.customMarker;h||(h=this.customMarker);var k=this.container,l=this.markerSize,m=0,n=0,p=l/2;if(this.useGraphSettings)if(m=a.type,this.switchType=void 0,"line"==m||
"step"==m||"smoothedLine"==m||"ohlc"==m)g=k.set(),a.hidden||(d=a.lineColorR,f=a.bulletBorderColorR),n=AmCharts.line(k,[0,2*l],[l/2,l/2],d,a.lineAlpha,a.lineThickness,a.dashLength),g.push(n),a.bullet&&(a.hidden||(d=a.bulletColorR),n=AmCharts.bullet(k,a.bullet,a.bulletSize,d,a.bulletAlpha,a.bulletBorderThickness,f,a.bulletBorderAlpha))&&(n.translate(l+1,l/2),g.push(n)),p=0,m=l,n=l/3;else{var q;a.getGradRotation&&(q=a.getGradRotation());m=a.fillColorsR;!0===a.hidden&&(m=d);if(g=this.createMarker("rectangle",
m,a.fillAlphas,a.lineThickness,d,a.lineAlpha,q,g))p=l,g.translate(p,l/2);m=l}else h?(b.path&&(h=b.path+h),g=k.image(h,0,0,l,l)):(g=this.createMarker(c,d,e,void 0,void 0,void 0,void 0,g))&&g.translate(l/2,l/2);this.addListeners(g,a);k=k.set([g]);this.switchable&&a.switchable&&k.setAttr("cursor","pointer");(f=this.switchType)&&"none"!=f&&("x"==f?(q=this.createX(),q.translate(l/2,l/2)):q=this.createV(),q.dItem=a,!0!==a.hidden?"x"==f?q.hide():q.show():"x"!=f&&q.hide(),this.switchable||q.hide(),this.addListeners(q,
a),a.legendSwitch=q,k.push(q));f=this.color;a.showBalloon&&this.textClickEnabled&&void 0!==this.selectedColor&&(f=this.selectedColor);this.useMarkerColorForLabels&&(f=d);!0===a.hidden&&(f=this.markerDisabledColor);d=AmCharts.massReplace(this.labelText,{"[[title]]":a.title});q=this.fontSize;g&&l<=q&&g.translate(p,l/2+this.ly-q/2+(q+2-l)/2-n);var r;d&&(d=AmCharts.fixBrakes(d),a.legendTextReal=d,r=this.labelWidth,r=isNaN(r)?AmCharts.text(this.container,d,f,b.fontFamily,q,"start"):AmCharts.wrappedText(this.container,
d,f,b.fontFamily,q,"start",!1,r,0),r.translate(this.lx+m,this.ly),k.push(r),b=r.getBBox().width,this.maxLabelWidth<b&&(this.maxLabelWidth=b));this.entries[this.index]=k;a.legendEntry=this.entries[this.index];a.legendLabel=r;this.index++}},addListeners:function(a,b){var c=this;a&&a.mouseover(function(){c.rollOverMarker(b)}).mouseout(function(){c.rollOutMarker(b)}).click(function(){c.clickMarker(b)})},rollOverMarker:function(a){this.switchable&&this.dispatch("rollOverMarker",a);this.dispatch("rollOverItem",
a)},rollOutMarker:function(a){this.switchable&&this.dispatch("rollOutMarker",a);this.dispatch("rollOutItem",a)},clickMarker:function(a){this.switchable&&(!0===a.hidden?this.dispatch("showItem",a):this.dispatch("hideItem",a));this.dispatch("clickMarker",a)},rollOverLabel:function(a){a.hidden||(this.textClickEnabled&&a.legendLabel&&a.legendLabel.attr({fill:this.rollOverColor}),this.dispatch("rollOverItem",a))},rollOutLabel:function(a){if(!a.hidden){if(this.textClickEnabled&&a.legendLabel){var b=this.color;
void 0!==this.selectedColor&&a.showBalloon&&(b=this.selectedColor);this.useMarkerColorForLabels&&(b=a.lineColor,void 0===b&&(b=a.color));a.legendLabel.attr({fill:b})}this.dispatch("rollOutItem",a)}},clickLabel:function(a){this.textClickEnabled?a.hidden||this.dispatch("clickLabel",a):this.switchable&&(!0===a.hidden?this.dispatch("showItem",a):this.dispatch("hideItem",a))},dispatch:function(a,b){this.fire(a,{type:a,dataItem:b,target:this,chart:this.chart})},createValue:function(a){var b=this,c=b.fontSize;
if(!1!==a.visibleInLegend){var d=b.maxLabelWidth;b.equalWidths||(b.valueAlign="left");"left"==b.valueAlign&&(d=a.legendEntry.getBBox().width);var e=d;if(b.valueText&&0<b.valueWidth){var f=b.color;b.useMarkerColorForValues&&(f=a.color,a.legendKeyColor&&(f=a.legendKeyColor()));!0===a.hidden&&(f=b.markerDisabledColor);var g=b.valueText,d=d+b.lx+b.markerLabelGap+b.valueWidth,h="end";"left"==b.valueAlign&&(d-=b.valueWidth,h="start");f=AmCharts.text(b.container,g,f,b.chart.fontFamily,c,h);f.translate(d,
b.ly);b.entries[b.index].push(f);e+=b.valueWidth+2*b.markerLabelGap;f.dItem=a;b.valueLabels.push(f)}b.index++;f=b.markerSize;f<c+7&&(f=c+7,AmCharts.VML&&(f+=3));c=b.container.rect(b.markerSize,0,e,f,0,0).attr({stroke:"none",fill:"#ffffff","fill-opacity":.005});c.dItem=a;b.entries[b.index-1].push(c);c.mouseover(function(){b.rollOverLabel(a)}).mouseout(function(){b.rollOutLabel(a)}).click(function(){b.clickLabel(a)})}},createV:function(){var a=this.markerSize;return AmCharts.polygon(this.container,
[a/5,a/2,a-a/5,a/2],[a/3,a-a/5,a/5,a/1.7],this.switchColor)},createX:function(){var a=(this.markerSize-4)/2,b={stroke:this.switchColor,"stroke-width":3},c=this.container,d=AmCharts.line(c,[-a,a],[-a,a]).attr(b),a=AmCharts.line(c,[-a,a],[a,-a]).attr(b);return this.container.set([d,a])},createMarker:function(a,b,c,d,e,f,g,h){var k=this.markerSize,l=this.container;e||(e=this.markerBorderColor);e||(e=b);isNaN(d)&&(d=this.markerBorderThickness);isNaN(f)&&(f=this.markerBorderAlpha);return AmCharts.bullet(l,
a,k,b,c,d,e,f,k,g,h)},validateNow:function(){this.invalidateSize()},updateValues:function(){var a=this.valueLabels,b=this.chart,c,d=this.data;for(c=0;c<a.length;c++){var e=a[c],f=e.dItem,g=" ";if(d)f.value?e.text(f.value):e.text("");else{if(void 0!==f.type){var h=f.currentDataItem,k=this.periodValueText;f.legendPeriodValueText&&(k=f.legendPeriodValueText);h?(g=this.valueText,f.legendValueText&&(g=f.legendValueText),g=b.formatString(g,h)):k&&(g=b.formatPeriodString(k,f))}else g=b.formatString(this.valueText,
f);if(k=this.valueFunction)h&&(f=h),g=k(f,g);e.text(g)}}},renderFix:function(){if(!AmCharts.VML){var a=this.container;a&&a.renderFix()}},destroy:function(){this.div.innerHTML="";AmCharts.remove(this.set)}});AmCharts.formatMilliseconds=function(a,b){if(-1!=a.indexOf("fff")){var c=b.getMilliseconds(),d=String(c);10>c&&(d="00"+c);10<=c&&100>c&&(d="0"+c);a=a.replace(/fff/g,d)}return a};AmCharts.extractPeriod=function(a){var b=AmCharts.stripNumbers(a),c=1;b!=a&&(c=Number(a.slice(0,a.indexOf(b))));return{period:b,count:c}};
AmCharts.newDate=function(a,b){return date="fff"==b?AmCharts.useUTC?new Date(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds()):new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()):new Date(a)};
AmCharts.resetDateToMin=function(a,b,c,d){void 0===d&&(d=1);var e,f,g,h,k,l,m;AmCharts.useUTC?(e=a.getUTCFullYear(),f=a.getUTCMonth(),g=a.getUTCDate(),h=a.getUTCHours(),k=a.getUTCMinutes(),l=a.getUTCSeconds(),m=a.getUTCMilliseconds(),a=a.getUTCDay()):(e=a.getFullYear(),f=a.getMonth(),g=a.getDate(),h=a.getHours(),k=a.getMinutes(),l=a.getSeconds(),m=a.getMilliseconds(),a=a.getDay());switch(b){case "YYYY":e=Math.floor(e/c)*c;f=0;g=1;m=l=k=h=0;break;case "MM":f=Math.floor(f/c)*c;g=1;m=l=k=h=0;break;case "WW":0===
a&&0<d&&(a=7);g=g-a+d;m=l=k=h=0;break;case "DD":m=l=k=h=0;break;case "hh":h=Math.floor(h/c)*c;m=l=k=0;break;case "mm":k=Math.floor(k/c)*c;m=l=0;break;case "ss":l=Math.floor(l/c)*c;m=0;break;case "fff":m=Math.floor(m/c)*c}AmCharts.useUTC?(a=new Date,a.setUTCFullYear(e,f,g),a.setUTCHours(h,k,l,m)):a=new Date(e,f,g,h,k,l,m);return a};
AmCharts.getPeriodDuration=function(a,b){void 0===b&&(b=1);var c;switch(a){case "YYYY":c=316224E5;break;case "MM":c=26784E5;break;case "WW":c=6048E5;break;case "DD":c=864E5;break;case "hh":c=36E5;break;case "mm":c=6E4;break;case "ss":c=1E3;break;case "fff":c=1}return c*b};AmCharts.intervals={s:{nextInterval:"ss",contains:1E3},ss:{nextInterval:"mm",contains:60,count:0},mm:{nextInterval:"hh",contains:60,count:1},hh:{nextInterval:"DD",contains:24,count:2},DD:{nextInterval:"",contains:Infinity,count:3}};
AmCharts.getMaxInterval=function(a,b){var c=AmCharts.intervals;return a>=c[b].contains?(a=Math.round(a/c[b].contains),b=c[b].nextInterval,AmCharts.getMaxInterval(a,b)):"ss"==b?c[b].nextInterval:b};AmCharts.dayNames="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ");AmCharts.shortDayNames="Sun Mon Tue Wed Thu Fri Sat".split(" ");AmCharts.monthNames="January February March April May June July August September October November December".split(" ");AmCharts.shortMonthNames="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
AmCharts.getWeekNumber=function(a){a=new Date(a);a.setHours(0,0,0);a.setDate(a.getDate()+4-(a.getDay()||7));var b=new Date(a.getFullYear(),0,1);return Math.ceil(((a-b)/864E5+1)/7)};
AmCharts.stringToDate=function(a,b){var c={},d=[{pattern:"YYYY",period:"year"},{pattern:"YY",period:"year"},{pattern:"MM",period:"month"},{pattern:"M",period:"month"},{pattern:"DD",period:"date"},{pattern:"D",period:"date"},{pattern:"JJ",period:"hours"},{pattern:"J",period:"hours"},{pattern:"HH",period:"hours"},{pattern:"H",period:"hours"},{pattern:"KK",period:"hours"},{pattern:"K",period:"hours"},{pattern:"LL",period:"hours"},{pattern:"L",period:"hours"},{pattern:"NN",period:"minutes"},{pattern:"N",
period:"minutes"},{pattern:"SS",period:"seconds"},{pattern:"S",period:"seconds"},{pattern:"QQQ",period:"milliseconds"},{pattern:"QQ",period:"milliseconds"},{pattern:"Q",period:"milliseconds"}],e=!0,f=b.indexOf("AA");-1!=f&&(a.substr(f,2),"pm"==a.toLowerCase&&(e=!1));var f=b,g,h,k;for(k=0;k<d.length;k++)h=d[k].period,c[h]=0,"date"==h&&(c[h]=1);for(k=0;k<d.length;k++)if(g=d[k].pattern,h=d[k].period,-1!=b.indexOf(g)){var l=AmCharts.getFromDateString(g,a,f);b=b.replace(g,"");if("KK"==g||"K"==g||"LL"==
g||"L"==g)e||(l+=12);c[h]=l}return new Date(c.year,c.month,c.date,c.hours,c.minutes,c.seconds,c.milliseconds)};AmCharts.getFromDateString=function(a,b,c){if(void 0!==b)return c=c.indexOf(a),b=b.substr(c,a.length),"0"==b.charAt(0)&&(b=b.substr(1,b.length-1)),b=Number(b),isNaN(b)&&(b=0),-1!=a.indexOf("M")&&b--,b};
AmCharts.formatDate=function(a,b){var c,d,e,f,g,h,k,l,m=AmCharts.getWeekNumber(a);AmCharts.useUTC?(c=a.getUTCFullYear(),d=a.getUTCMonth(),e=a.getUTCDate(),f=a.getUTCDay(),g=a.getUTCHours(),h=a.getUTCMinutes(),k=a.getUTCSeconds(),l=a.getUTCMilliseconds()):(c=a.getFullYear(),d=a.getMonth(),e=a.getDate(),f=a.getDay(),g=a.getHours(),h=a.getMinutes(),k=a.getSeconds(),l=a.getMilliseconds());var n=String(c).substr(2,2),p=d+1;9>d&&(p="0"+p);var q="0"+f;b=b.replace(/W/g,m);m=g;24==m&&(m=0);var r=m;10>r&&(r=
"0"+r);b=b.replace(/JJ/g,r);b=b.replace(/J/g,m);r=g;0===r&&(r=24,-1!=b.indexOf("H")&&e--);m=e;10>e&&(m="0"+e);var s=r;10>s&&(s="0"+s);b=b.replace(/HH/g,s);b=b.replace(/H/g,r);r=g;11<r&&(r-=12);s=r;10>s&&(s="0"+s);b=b.replace(/KK/g,s);b=b.replace(/K/g,r);r=g;0===r&&(r=12);12<r&&(r-=12);s=r;10>s&&(s="0"+s);b=b.replace(/LL/g,s);b=b.replace(/L/g,r);r=h;10>r&&(r="0"+r);b=b.replace(/NN/g,r);b=b.replace(/N/g,h);h=k;10>h&&(h="0"+h);b=b.replace(/SS/g,h);b=b.replace(/S/g,k);k=l;10>k&&(k="00"+k);100>k&&(k="0"+
k);h=l;10>h&&(h="00"+h);b=b.replace(/QQQ/g,k);b=b.replace(/QQ/g,h);b=b.replace(/Q/g,l);b=12>g?b.replace(/A/g,"am"):b.replace(/A/g,"pm");b=b.replace(/YYYY/g,"@IIII@");b=b.replace(/YY/g,"@II@");b=b.replace(/MMMM/g,"@XXXX@");b=b.replace(/MMM/g,"@XXX@");b=b.replace(/MM/g,"@XX@");b=b.replace(/M/g,"@X@");b=b.replace(/DD/g,"@RR@");b=b.replace(/D/g,"@R@");b=b.replace(/EEEE/g,"@PPPP@");b=b.replace(/EEE/g,"@PPP@");b=b.replace(/EE/g,"@PP@");b=b.replace(/E/g,"@P@");b=b.replace(/@IIII@/g,c);b=b.replace(/@II@/g,
n);b=b.replace(/@XXXX@/g,AmCharts.monthNames[d]);b=b.replace(/@XXX@/g,AmCharts.shortMonthNames[d]);b=b.replace(/@XX@/g,p);b=b.replace(/@X@/g,d+1);b=b.replace(/@RR@/g,m);b=b.replace(/@R@/g,e);b=b.replace(/@PPPP@/g,AmCharts.dayNames[f]);b=b.replace(/@PPP@/g,AmCharts.shortDayNames[f]);b=b.replace(/@PP@/g,q);return b=b.replace(/@P@/g,f)};
AmCharts.changeDate=function(a,b,c,d,e){var f=-1;void 0===d&&(d=!0);void 0===e&&(e=!1);!0===d&&(f=1);switch(b){case "YYYY":a.setFullYear(a.getFullYear()+c*f);d||e||a.setDate(a.getDate()+1);break;case "MM":b=a.getMonth();a.setMonth(a.getMonth()+c*f);a.getMonth()>b+c*f&&a.setDate(a.getDate()-1);d||e||a.setDate(a.getDate()+1);break;case "DD":a.setDate(a.getDate()+c*f);break;case "WW":a.setDate(a.getDate()+c*f*7);break;case "hh":a.setHours(a.getHours()+c*f);break;case "mm":a.setMinutes(a.getMinutes()+
c*f);break;case "ss":a.setSeconds(a.getSeconds()+c*f);break;case "fff":a.setMilliseconds(a.getMilliseconds()+c*f)}return a};
AmCharts.AmSerialChart=AmCharts.Class({inherits:AmCharts.AmRectangularChart,construct:function(a){this.type="serial";AmCharts.AmSerialChart.base.construct.call(this,a);this.cname="AmSerialChart";this.theme=a;this.createEvents("changed");this.columnSpacing=5;this.columnSpacing3D=0;this.columnWidth=.8;this.updateScrollbar=!0;var b=new AmCharts.CategoryAxis(a);b.chart=this;this.categoryAxis=b;this.zoomOutOnDataUpdate=!0;this.mouseWheelZoomEnabled=this.mouseWheelScrollEnabled=this.rotate=this.skipZoom=
!1;this.minSelectedTime=0;AmCharts.applyTheme(this,a,this.cname)},initChart:function(){AmCharts.AmSerialChart.base.initChart.call(this);this.updateCategoryAxis(this.categoryAxis,this.rotate,"categoryAxis");this.dataChanged&&(this.updateData(),this.dataChanged=!1,this.dispatchDataUpdated=!0);var a=this.chartCursor;a&&(a.updateData(),a.fullWidth&&(a.fullRectSet=this.cursorLineSet));var a=this.countColumns(),b=this.graphs,c;for(c=0;c<b.length;c++)b[c].columnCount=a;this.updateScrollbar=!0;this.drawChart();
this.autoMargins&&!this.marginsUpdated&&(this.marginsUpdated=!0,this.measureMargins());(this.mouseWheelScrollEnabled||this.mouseWheelZoomEnabled)&&this.addMouseWheel()},handleWheelReal:function(a,b){if(!this.wheelBusy){var c=this.categoryAxis,d=c.parseDates,c=c.minDuration(),e=1;this.mouseWheelZoomEnabled?b||(e=-1):b&&(e=-1);0>a?d?(d=this.startTime+e*c,c=this.endTime+1*c,this.zoomToDates(new Date(d),new Date(c))):(d=this.start+e,c=this.end+1,this.zoomToIndexes(d,c)):d?(d=this.startTime-e*c,c=this.endTime-
1*c,this.zoomToDates(new Date(d),new Date(c))):(d=this.start-e,c=this.end-1,this.zoomToIndexes(d,c))}},validateData:function(a){this.marginsUpdated=!1;this.zoomOutOnDataUpdate&&!a&&(this.endTime=this.end=this.startTime=this.start=NaN);AmCharts.AmSerialChart.base.validateData.call(this)},drawChart:function(){AmCharts.AmSerialChart.base.drawChart.call(this);var a=this.chartData;if(AmCharts.ifArray(a)){var b=this.chartScrollbar;b&&b.draw();if(0<this.realWidth&&0<this.realHeight){var a=a.length-1,c,b=
this.categoryAxis;if(b.parseDates&&!b.equalSpacing){if(b=this.startTime,c=this.endTime,isNaN(b)||isNaN(c))b=this.firstTime,c=this.lastTime}else if(b=this.start,c=this.end,isNaN(b)||isNaN(c))b=0,c=a;this.endTime=this.startTime=this.end=this.start=void 0;this.zoom(b,c)}}else this.cleanChart();this.dispDUpd();this.chartCreated=!0},cleanChart:function(){AmCharts.callMethod("destroy",[this.valueAxes,this.graphs,this.categoryAxis,this.chartScrollbar,this.chartCursor])},updateCategoryAxis:function(a,b,c){a.chart=
this;a.id=c;a.rotate=b;a.axisRenderer=AmCharts.RecAxis;a.guideFillRenderer=AmCharts.RecFill;a.axisItemRenderer=AmCharts.RecItem;a.setOrientation(!this.rotate);a.x=this.marginLeftReal;a.y=this.marginTopReal;a.dx=this.dx;a.dy=this.dy;a.width=this.plotAreaWidth-1;a.height=this.plotAreaHeight-1;a.viW=this.plotAreaWidth-1;a.viH=this.plotAreaHeight-1;a.viX=this.marginLeftReal;a.viY=this.marginTopReal;a.marginsChanged=!0},updateValueAxes:function(){AmCharts.AmSerialChart.base.updateValueAxes.call(this);
var a=this.valueAxes,b;for(b=0;b<a.length;b++){var c=a[b],d=this.rotate;c.rotate=d;c.setOrientation(d);d=this.categoryAxis;if(!d.startOnAxis||d.parseDates)c.expandMinMax=!0}},updateData:function(){this.parseData();var a=this.graphs,b,c=this.chartData;for(b=0;b<a.length;b++)a[b].data=c;0<c.length&&(this.firstTime=this.getStartTime(c[0].time),this.lastTime=this.getEndTime(c[c.length-1].time))},getStartTime:function(a){var b=this.categoryAxis;return AmCharts.resetDateToMin(new Date(a),b.minPeriod,1,
b.firstDayOfWeek).getTime()},getEndTime:function(a){var b=AmCharts.extractPeriod(this.categoryAxis.minPeriod);return AmCharts.changeDate(new Date(a),b.period,b.count,!0).getTime()-1},updateMargins:function(){AmCharts.AmSerialChart.base.updateMargins.call(this);var a=this.chartScrollbar;a&&(this.getScrollbarPosition(a,this.rotate,this.categoryAxis.position),this.adjustMargins(a,this.rotate))},updateScrollbars:function(){AmCharts.AmSerialChart.base.updateScrollbars.call(this);this.updateChartScrollbar(this.chartScrollbar,
this.rotate)},zoom:function(a,b){var c=this.categoryAxis;c.parseDates&&!c.equalSpacing?this.timeZoom(a,b):this.indexZoom(a,b);this.updateLegendValues()},timeZoom:function(a,b){var c=this.maxSelectedTime;isNaN(c)||(b!=this.endTime&&b-a>c&&(a=b-c,this.updateScrollbar=!0),a!=this.startTime&&b-a>c&&(b=a+c,this.updateScrollbar=!0));var d=this.minSelectedTime;if(0<d&&b-a<d){var e=Math.round(a+(b-a)/2),d=Math.round(d/2);a=e-d;b=e+d}var f=this.chartData,e=this.categoryAxis;if(AmCharts.ifArray(f)&&(a!=this.startTime||
b!=this.endTime)){var l=e.minDuration(),d=this.firstTime,n=this.lastTime;a||(a=d,isNaN(c)||(a=n-c));b||(b=n);a>n&&(a=n);b<d&&(b=d);a<d&&(a=d);b>n&&(b=n);b<a&&(b=a+l);b-a<l/5&&(b<n?b=a+l/5:a=b-l/5);this.startTime=a;this.endTime=b;c=f.length-1;l=this.getClosestIndex(f,"time",a,!0,0,c);f=this.getClosestIndex(f,"time",b,!1,l,c);e.timeZoom(a,b);e.zoom(l,f);this.start=AmCharts.fitToBounds(l,0,c);this.end=AmCharts.fitToBounds(f,0,c);this.zoomAxesAndGraphs();this.zoomScrollbar();a!=d||b!=n?this.showZB(!0):
this.showZB(!1);this.updateColumnsDepth();this.dispatchTimeZoomEvent()}},indexZoom:function(a,b){var c=this.maxSelectedSeries;isNaN(c)||(b!=this.end&&b-a>c&&(a=b-c,this.updateScrollbar=!0),a!=this.start&&b-a>c&&(b=a+c,this.updateScrollbar=!0));if(a!=this.start||b!=this.end){var d=this.chartData.length-1;isNaN(a)&&(a=0,isNaN(c)||(a=d-c));isNaN(b)&&(b=d);b<a&&(b=a);b>d&&(b=d);a>d&&(a=d-1);0>a&&(a=0);this.start=a;this.end=b;this.categoryAxis.zoom(a,b);this.zoomAxesAndGraphs();this.zoomScrollbar();0!==
a||b!=this.chartData.length-1?this.showZB(!0):this.showZB(!1);this.updateColumnsDepth();this.dispatchIndexZoomEvent()}},updateGraphs:function(){AmCharts.AmSerialChart.base.updateGraphs.call(this);var a=this.graphs,b;for(b=0;b<a.length;b++){var c=a[b];c.columnWidthReal=this.columnWidth;c.categoryAxis=this.categoryAxis;AmCharts.isString(c.fillToGraph)&&(c.fillToGraph=this.getGraphById(c.fillToGraph))}},updateColumnsDepth:function(){var a,b=this.graphs,c;AmCharts.remove(this.columnsSet);this.columnsArray=
[];for(a=0;a<b.length;a++){c=b[a];var d=c.columnsArray;if(d){var e;for(e=0;e<d.length;e++)this.columnsArray.push(d[e])}}this.columnsArray.sort(this.compareDepth);if(0<this.columnsArray.length){b=this.container.set();this.columnSet.push(b);for(a=0;a<this.columnsArray.length;a++)b.push(this.columnsArray[a].column.set);c&&b.translate(c.x,c.y);this.columnsSet=b}},compareDepth:function(a,b){return a.depth>b.depth?1:-1},zoomScrollbar:function(){var a=this.chartScrollbar,b=this.categoryAxis;a&&this.updateScrollbar&&
(b.parseDates&&!b.equalSpacing?a.timeZoom(this.startTime,this.endTime):a.zoom(this.start,this.end),this.updateScrollbar=!0)},updateTrendLines:function(){var a=this.trendLines,b;for(b=0;b<a.length;b++){var c=a[b],c=AmCharts.processObject(c,AmCharts.TrendLine,this.theme);a[b]=c;c.chart=this;AmCharts.isString(c.valueAxis)&&(c.valueAxis=this.getValueAxisById(c.valueAxis));c.valueAxis||(c.valueAxis=this.valueAxes[0]);c.categoryAxis=this.categoryAxis}},zoomAxesAndGraphs:function(){if(!this.scrollbarOnly){var a=
this.valueAxes,b;for(b=0;b<a.length;b++)a[b].zoom(this.start,this.end);a=this.graphs;for(b=0;b<a.length;b++)a[b].zoom(this.start,this.end);this.zoomTrendLines();(b=this.chartCursor)&&b.zoom(this.start,this.end,this.startTime,this.endTime)}},countColumns:function(){var a=0,b=this.valueAxes.length,c=this.graphs.length,d,e,f=!1,l,n;for(n=0;n<b;n++){e=this.valueAxes[n];var k=e.stackType;if("100%"==k||"regular"==k)for(f=!1,l=0;l<c;l++)d=this.graphs[l],d.tcc=1,d.valueAxis==e&&"column"==d.type&&(!f&&d.stackable&&
(a++,f=!0),(!d.stackable&&d.clustered||d.newStack)&&a++,d.columnIndex=a-1,d.clustered||(d.columnIndex=0));if("none"==k||"3d"==k)for(l=0;l<c;l++)d=this.graphs[l],d.valueAxis==e&&"column"==d.type&&d.clustered&&(d.tcc=1,d.newStack&&(a=0),d.hidden||(d.columnIndex=a,a++));if("3d"==k){e=1;for(n=0;n<c;n++)d=this.graphs[n],d.newStack&&e++,d.depthCount=e,d.tcc=a;a=e}}return a},parseData:function(){AmCharts.AmSerialChart.base.parseData.call(this);this.parseSerialData()},getCategoryIndexByValue:function(a){var b=
this.chartData,c,d;for(d=0;d<b.length;d++)b[d].category==a&&(c=d);return c},handleCursorChange:function(a){this.updateLegendValues(a.index)},handleCursorZoom:function(a){this.updateScrollbar=!0;this.zoom(a.start,a.end)},handleScrollbarZoom:function(a){this.updateScrollbar=!1;this.zoom(a.start,a.end)},dispatchTimeZoomEvent:function(){if(this.prevStartTime!=this.startTime||this.prevEndTime!=this.endTime){var a={type:"zoomed"};a.startDate=new Date(this.startTime);a.endDate=new Date(this.endTime);a.startIndex=
this.start;a.endIndex=this.end;this.startIndex=this.start;this.endIndex=this.end;this.startDate=a.startDate;this.endDate=a.endDate;this.prevStartTime=this.startTime;this.prevEndTime=this.endTime;var b=this.categoryAxis,c=AmCharts.extractPeriod(b.minPeriod).period,b=b.dateFormatsObject[c];a.startValue=AmCharts.formatDate(a.startDate,b);a.endValue=AmCharts.formatDate(a.endDate,b);a.chart=this;a.target=this;this.fire(a.type,a)}},dispatchIndexZoomEvent:function(){if(this.prevStartIndex!=this.start||this.prevEndIndex!=
this.end){this.startIndex=this.start;this.endIndex=this.end;var a=this.chartData;if(AmCharts.ifArray(a)&&!isNaN(this.start)&&!isNaN(this.end)){var b={chart:this,target:this,type:"zoomed"};b.startIndex=this.start;b.endIndex=this.end;b.startValue=a[this.start].category;b.endValue=a[this.end].category;this.categoryAxis.parseDates&&(this.startTime=a[this.start].time,this.endTime=a[this.end].time,b.startDate=new Date(this.startTime),b.endDate=new Date(this.endTime));this.prevStartIndex=this.start;this.prevEndIndex=
this.end;this.fire(b.type,b)}}},updateLegendValues:function(a){var b=this.graphs,c;for(c=0;c<b.length;c++){var d=b[c];isNaN(a)?d.currentDataItem=void 0:d.currentDataItem=this.chartData[a].axes[d.valueAxis.id].graphs[d.id]}this.legend&&this.legend.updateValues()},getClosestIndex:function(a,b,c,d,e,f){0>e&&(e=0);f>a.length-1&&(f=a.length-1);var l=e+Math.round((f-e)/2),n=a[l][b];if(1>=f-e){if(d)return e;d=a[f][b];return Math.abs(a[e][b]-c)<Math.abs(d-c)?e:f}return c==n?l:c<n?this.getClosestIndex(a,b,
c,d,e,l):this.getClosestIndex(a,b,c,d,l,f)},zoomToIndexes:function(a,b){this.updateScrollbar=!0;var c=this.chartData;if(c){var d=c.length;0<d&&(0>a&&(a=0),b>d-1&&(b=d-1),d=this.categoryAxis,d.parseDates&&!d.equalSpacing?this.zoom(c[a].time,this.getEndTime(c[b].time)):this.zoom(a,b))}},zoomToDates:function(a,b){this.updateScrollbar=!0;var c=this.chartData;if(this.categoryAxis.equalSpacing){var d=this.getClosestIndex(c,"time",a.getTime(),!0,0,c.length);b=AmCharts.resetDateToMin(b,this.categoryAxis.minPeriod,
1);c=this.getClosestIndex(c,"time",b.getTime(),!1,0,c.length);this.zoom(d,c)}else this.zoom(a.getTime(),b.getTime())},zoomToCategoryValues:function(a,b){this.updateScrollbar=!0;this.zoom(this.getCategoryIndexByValue(a),this.getCategoryIndexByValue(b))},formatPeriodString:function(a,b){if(b){var c=["value","open","low","high","close"],d="value open low high close average sum count".split(" "),e=b.valueAxis,f=this.chartData,l=b.numberFormatter;l||(l=this.nf);for(var n=0;n<c.length;n++){for(var k=c[n],
g=0,h=0,m,u,r,s,p,v=0,q=0,x,t,y,w,C,B=this.start;B<=this.end;B++){var z=f[B];if(z&&(z=z.axes[e.id].graphs[b.id])){if(z.values){var A=z.values[k];if(!isNaN(A)){isNaN(m)&&(m=A);u=A;if(isNaN(r)||r>A)r=A;if(isNaN(s)||s<A)s=A;p=AmCharts.getDecimals(g);var D=AmCharts.getDecimals(A),g=g+A,g=AmCharts.roundTo(g,Math.max(p,D));h++;p=g/h}}if(z.percents&&(z=z.percents[k],!isNaN(z))){isNaN(x)&&(x=z);t=z;if(isNaN(y)||y>z)y=z;if(isNaN(w)||w<z)w=z;C=AmCharts.getDecimals(v);A=AmCharts.getDecimals(z);v+=z;v=AmCharts.roundTo(v,
Math.max(C,A));q++;C=v/q}}}v={open:x,close:t,high:w,low:y,average:C,sum:v,count:q};a=AmCharts.formatValue(a,{open:m,close:u,high:s,low:r,average:p,sum:g,count:h},d,l,k+"\\.",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers);a=AmCharts.formatValue(a,v,d,this.pf,"percents\\."+k+"\\.")}}return a},formatString:function(a,b,c){var d=b.graph;if(-1!=a.indexOf("[[category]]")){var e=b.serialDataItem.category;if(this.categoryAxis.parseDates){var f=this.balloonDateFormat,l=this.chartCursor;
l&&(f=l.categoryBalloonDateFormat);-1!=a.indexOf("[[category]]")&&(f=AmCharts.formatDate(e,f),-1!=f.indexOf("fff")&&(f=AmCharts.formatMilliseconds(f,e)),e=f)}a=a.replace(/\[\[category\]\]/g,String(e))}d=d.numberFormatter;d||(d=this.nf);e=b.graph.valueAxis;(f=e.duration)&&!isNaN(b.values.value)&&(e=AmCharts.formatDuration(b.values.value,f,"",e.durationUnits,e.maxInterval,d),a=a.replace(RegExp("\\[\\[value\\]\\]","g"),e));e="value open low high close total".split(" ");f=this.pf;a=AmCharts.formatValue(a,
b.percents,e,f,"percents\\.");a=AmCharts.formatValue(a,b.values,e,d,"",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers);a=AmCharts.formatValue(a,b.values,["percents"],f);-1!=a.indexOf("[[")&&(a=AmCharts.formatDataContextValue(a,b.dataContext));return a=AmCharts.AmSerialChart.base.formatString.call(this,a,b,c)},addChartScrollbar:function(a){AmCharts.callMethod("destroy",[this.chartScrollbar]);a&&(a.chart=this,this.listenTo(a,"zoomed",this.handleScrollbarZoom));this.rotate?void 0===
a.width&&(a.width=a.scrollbarHeight):void 0===a.height&&(a.height=a.scrollbarHeight);this.chartScrollbar=a},removeChartScrollbar:function(){AmCharts.callMethod("destroy",[this.chartScrollbar]);this.chartScrollbar=null},handleReleaseOutside:function(a){AmCharts.AmSerialChart.base.handleReleaseOutside.call(this,a);AmCharts.callMethod("handleReleaseOutside",[this.chartScrollbar])}});AmCharts.Cuboid=AmCharts.Class({construct:function(a,b,c,d,e,f,l,n,k,g,h,m,u,r,s){this.set=a.set();this.container=a;this.h=Math.round(c);this.w=Math.round(b);this.dx=d;this.dy=e;this.colors=f;this.alpha=l;this.bwidth=n;this.bcolor=k;this.balpha=g;this.colors=f;this.dashLength=r;this.pattern=s;u?0>b&&0===h&&(h=180):0>c&&270==h&&(h=90);this.gradientRotation=h;0===d&&0===e&&(this.cornerRadius=m);this.draw()},draw:function(){var a=this.set;a.clear();var b=this.container,c=this.w,d=this.h,e=this.dx,f=
this.dy,l=this.colors,n=this.alpha,k=this.bwidth,g=this.bcolor,h=this.balpha,m=this.gradientRotation,u=this.cornerRadius,r=this.dashLength,s=this.pattern,p=l,v=l;"object"==typeof l&&(p=l[0],v=l[l.length-1]);var q,x,t,y,w,C,B,z,A,D=n;s&&(n=0);if(0<e||0<f)B=v,v=AmCharts.adjustLuminosity(p,-.2),v=AmCharts.adjustLuminosity(p,-.2),q=AmCharts.polygon(b,[0,e,c+e,c,0],[0,f,f,0,0],v,n,1,g,0,m),0<h&&(A=AmCharts.line(b,[0,e,c+e],[0,f,f],g,h,k,r)),x=AmCharts.polygon(b,[0,0,c,c,0],[0,d,d,0,0],v,n,1,g,0,m),x.translate(e,
f),0<h&&(t=AmCharts.line(b,[e,e],[f,f+d],g,h,k,r)),y=AmCharts.polygon(b,[0,0,e,e,0],[0,d,d+f,f,0],v,n,1,g,0,m),w=AmCharts.polygon(b,[c,c,c+e,c+e,c],[0,d,d+f,f,0],v,n,1,g,0,m),0<h&&(C=AmCharts.line(b,[c,c+e,c+e,c],[0,f,d+f,d],g,h,k,r)),v=AmCharts.adjustLuminosity(B,.2),B=AmCharts.polygon(b,[0,e,c+e,c,0],[d,d+f,d+f,d,d],v,n,1,g,0,m),0<h&&(z=AmCharts.line(b,[0,e,c+e],[d,d+f,d+f],g,h,k,r));n=D;1>Math.abs(d)&&(d=0);1>Math.abs(c)&&(c=0);b=0===d?AmCharts.line(b,[0,c],[0,0],g,h,k,r):0===c?AmCharts.line(b,
[0,0],[0,d],g,h,k,r):0<u?AmCharts.rect(b,c,d,l,n,k,g,h,u,m,r):AmCharts.polygon(b,[0,0,c,c,0],[0,d,d,0,0],l,n,k,g,h,m,!1,r);d=0>d?[q,A,x,t,y,w,C,B,z,b]:[B,z,x,t,y,w,q,A,C,b];for(q=0;q<d.length;q++)(x=d[q])&&a.push(x);s&&b.pattern(s)},width:function(a){this.w=a;this.draw()},height:function(a){this.h=a;this.draw()},animateHeight:function(a,b){var c=this;c.easing=b;c.totalFrames=Math.round(1E3*a/AmCharts.updateRate);c.rh=c.h;c.frame=0;c.height(1);setTimeout(function(){c.updateHeight.call(c)},AmCharts.updateRate)},
updateHeight:function(){var a=this;a.frame++;var b=a.totalFrames;a.frame<=b&&(b=a.easing(0,a.frame,1,a.rh-1,b),a.height(b),setTimeout(function(){a.updateHeight.call(a)},AmCharts.updateRate))},animateWidth:function(a,b){var c=this;c.easing=b;c.totalFrames=Math.round(1E3*a/AmCharts.updateRate);c.rw=c.w;c.frame=0;c.width(1);setTimeout(function(){c.updateWidth.call(c)},AmCharts.updateRate)},updateWidth:function(){var a=this;a.frame++;var b=a.totalFrames;a.frame<=b&&(b=a.easing(0,a.frame,1,a.rw-1,b),a.width(b),
setTimeout(function(){a.updateWidth.call(a)},AmCharts.updateRate))}});AmCharts.CategoryAxis=AmCharts.Class({inherits:AmCharts.AxisBase,construct:function(a){this.cname="CategoryAxis";AmCharts.CategoryAxis.base.construct.call(this,a);this.minPeriod="DD";this.equalSpacing=this.parseDates=!1;this.position="bottom";this.startOnAxis=!1;this.firstDayOfWeek=1;this.gridPosition="middle";this.markPeriodChange=this.boldPeriodBeginning=!0;this.safeDistance=30;this.centerLabelOnFullPeriod=!0;this.periods=[{period:"ss",count:1},{period:"ss",count:5},{period:"ss",count:10},{period:"ss",
count:30},{period:"mm",count:1},{period:"mm",count:5},{period:"mm",count:10},{period:"mm",count:30},{period:"hh",count:1},{period:"hh",count:3},{period:"hh",count:6},{period:"hh",count:12},{period:"DD",count:1},{period:"DD",count:2},{period:"DD",count:3},{period:"DD",count:4},{period:"DD",count:5},{period:"WW",count:1},{period:"MM",count:1},{period:"MM",count:2},{period:"MM",count:3},{period:"MM",count:6},{period:"YYYY",count:1},{period:"YYYY",count:2},{period:"YYYY",count:5},{period:"YYYY",count:10},
{period:"YYYY",count:50},{period:"YYYY",count:100}];this.dateFormats=[{period:"fff",format:"JJ:NN:SS"},{period:"ss",format:"JJ:NN:SS"},{period:"mm",format:"JJ:NN"},{period:"hh",format:"JJ:NN"},{period:"DD",format:"MMM DD"},{period:"WW",format:"MMM DD"},{period:"MM",format:"MMM"},{period:"YYYY",format:"YYYY"}];this.nextPeriod={};this.nextPeriod.fff="ss";this.nextPeriod.ss="mm";this.nextPeriod.mm="hh";this.nextPeriod.hh="DD";this.nextPeriod.DD="MM";this.nextPeriod.MM="YYYY";AmCharts.applyTheme(this,
a,this.cname)},draw:function(){AmCharts.CategoryAxis.base.draw.call(this);this.generateDFObject();var a=this.chart.chartData;this.data=a;if(AmCharts.ifArray(a)){var b,c=this.chart,d=this.start,e=this.labelFrequency,f=0;b=this.end-d+1;var l=this.gridCountR,n=this.showFirstLabel,k=this.showLastLabel,g,h="",m=AmCharts.extractPeriod(this.minPeriod);g=AmCharts.getPeriodDuration(m.period,m.count);var u,r,s,p,v,q;u=this.rotate;var x=this.firstDayOfWeek,t=this.boldPeriodBeginning,a=AmCharts.resetDateToMin(new Date(a[a.length-
1].time+1.05*g),this.minPeriod,1,x).getTime(),y;this.endTime>a&&(this.endTime=a);q=this.minorGridEnabled;var w,a=this.gridAlpha,C;if(this.parseDates&&!this.equalSpacing){this.timeDifference=this.endTime-this.startTime;d=this.choosePeriod(0);e=d.period;u=d.count;r=AmCharts.getPeriodDuration(e,u);r<g&&(e=m.period,u=m.count,r=g);s=e;"WW"==s&&(s="DD");this.stepWidth=this.getStepWidth(this.timeDifference);var l=Math.ceil(this.timeDifference/r)+5,B=h=AmCharts.resetDateToMin(new Date(this.startTime-r),e,
u,x).getTime();s==e&&1==u&&this.centerLabelOnFullPeriod&&(v=r*this.stepWidth);this.cellWidth=g*this.stepWidth;b=Math.round(h/r);d=-1;b/2==Math.round(b/2)&&(d=-2,h-=r);var z=c.firstTime,A=0;q&&1<u&&(w=this.chooseMinorFrequency(u),C=AmCharts.getPeriodDuration(e,w));if(0<this.gridCountR)for(b=d;b<=l;b++){m=z+r*(b+Math.floor((B-z)/r))-A;"DD"==e&&(m+=36E5);m=AmCharts.resetDateToMin(new Date(m),e,u,x).getTime();"MM"==e&&(q=(m-h)/r,1.5<=(m-h)/r&&(m=m-(q-1)*r+AmCharts.getPeriodDuration("DD",3),m=AmCharts.resetDateToMin(new Date(m),
e,1).getTime(),A+=r));g=(m-this.startTime)*this.stepWidth;q=!1;this.nextPeriod[s]&&(q=this.checkPeriodChange(this.nextPeriod[s],1,m,h,s));y=!1;q&&this.markPeriodChange?(q=this.dateFormatsObject[this.nextPeriod[s]],this.twoLineMode&&(q=this.dateFormatsObject[s]+"\n"+q,q=AmCharts.fixBrakes(q)),y=!0):q=this.dateFormatsObject[s];t||(y=!1);h=AmCharts.formatDate(new Date(m),q);if(b==d&&!n||b==l&&!k)h=" ";this.labelFunction&&(h=this.labelFunction(h,new Date(m),this,e,u,p).toString());this.boldLabels&&(y=
!0);p=new this.axisItemRenderer(this,g,h,!1,v,0,!1,y);this.pushAxisItem(p);p=h=m;if(!isNaN(w))for(g=1;g<u;g+=w)this.gridAlpha=this.minorGridAlpha,q=m+C*g,q=AmCharts.resetDateToMin(new Date(q),e,w,x).getTime(),q=new this.axisItemRenderer(this,(q-this.startTime)*this.stepWidth),this.pushAxisItem(q);this.gridAlpha=a}}else if(!this.parseDates){if(this.cellWidth=this.getStepWidth(b),b<l&&(l=b),f+=this.start,this.stepWidth=this.getStepWidth(b),0<l)for(t=Math.floor(b/l),w=this.chooseMinorFrequency(t),g=
f,g/2==Math.round(g/2)&&g--,0>g&&(g=0),l=0,this.end-g+1>=this.autoRotateCount&&(this.labelRotation=this.autoRotateAngle),b=g;b<=this.end+2;b++){p=!1;0<=b&&b<this.data.length?(s=this.data[b],h=s.category,p=s.forceShow):h="";if(q&&!isNaN(w))if(b/w==Math.round(b/w)||p)b/t==Math.round(b/t)||p||(this.gridAlpha=this.minorGridAlpha,h=void 0);else continue;else if(b/t!=Math.round(b/t)&&!p)continue;g=this.getCoordinate(b-f);p=0;"start"==this.gridPosition&&(g-=this.cellWidth/2,p=this.cellWidth/2);x=!0;tickShift=
p;"start"==this.tickPosition&&(tickShift=0,x=!1,p=0);if(b==d&&!n||b==this.end&&!k)h=void 0;Math.round(l/e)!=l/e&&(h=void 0);l++;B=this.cellWidth;u&&(B=NaN);this.labelFunction&&s&&(h=this.labelFunction(h,s,this));h=AmCharts.fixBrakes(h);y=!1;this.boldLabels&&(y=!0);b>this.end&&"start"==this.tickPosition&&(h=" ");p=new this.axisItemRenderer(this,g,h,x,B,p,void 0,y,tickShift,!1,s.labelColor);p.serialDataItem=s;this.pushAxisItem(p);this.gridAlpha=a}}else if(this.parseDates&&this.equalSpacing){f=this.start;
this.startTime=this.data[this.start].time;this.endTime=this.data[this.end].time;this.timeDifference=this.endTime-this.startTime;d=this.choosePeriod(0);e=d.period;u=d.count;r=AmCharts.getPeriodDuration(e,u);r<g&&(e=m.period,u=m.count,r=g);s=e;"WW"==s&&(s="DD");this.stepWidth=this.getStepWidth(b);l=Math.ceil(this.timeDifference/r)+1;h=AmCharts.resetDateToMin(new Date(this.startTime-r),e,u,x).getTime();this.cellWidth=this.getStepWidth(b);b=Math.round(h/r);d=-1;b/2==Math.round(b/2)&&(d=-2,h-=r);g=this.start;
g/2==Math.round(g/2)&&g--;0>g&&(g=0);v=this.end+2;v>=this.data.length&&(v=this.data.length);C=!1;C=!n;this.previousPos=-1E3;20<this.labelRotation&&(this.safeDistance=5);r=g;if(this.data[g].time!=AmCharts.resetDateToMin(new Date(this.data[g].time),e,u,x).getTime())for(x=0,y=h,b=g;b<v;b++)m=this.data[b].time,this.checkPeriodChange(e,u,m,y)&&(x++,2<=x&&(r=b,b=v),y=m);q&&1<u&&(w=this.chooseMinorFrequency(u),AmCharts.getPeriodDuration(e,w));if(0<this.gridCountR)for(b=g;b<v;b++)if(m=this.data[b].time,this.checkPeriodChange(e,
u,m,h)&&b>=r){g=this.getCoordinate(b-this.start);q=!1;this.nextPeriod[s]&&(q=this.checkPeriodChange(this.nextPeriod[s],1,m,h,s));y=!1;q&&this.markPeriodChange?(q=this.dateFormatsObject[this.nextPeriod[s]],y=!0):q=this.dateFormatsObject[s];h=AmCharts.formatDate(new Date(m),q);if(b==d&&!n||b==l&&!k)h=" ";C?C=!1:(t||(y=!1),g-this.previousPos>this.safeDistance*Math.cos(this.labelRotation*Math.PI/180)&&(this.labelFunction&&(h=this.labelFunction(h,new Date(m),this,e,u,p)),this.boldLabels&&(y=!0),p=new this.axisItemRenderer(this,
g,h,void 0,void 0,void 0,void 0,y),x=p.graphics(),this.pushAxisItem(p),p=x.getBBox().width,AmCharts.isModern||(p-=g),this.previousPos=g+p));p=h=m}else isNaN(w)||(this.checkPeriodChange(e,w,m,B)&&(this.gridAlpha=this.minorGridAlpha,g=this.getCoordinate(b-this.start),q=new this.axisItemRenderer(this,g),this.pushAxisItem(q),B=m),this.gridAlpha=a)}for(b=0;b<this.data.length;b++)if(n=this.data[b])k=this.parseDates&&!this.equalSpacing?Math.round((n.time-this.startTime)*this.stepWidth+this.cellWidth/2):
this.getCoordinate(b-f),n.x[this.id]=k;n=this.guides.length;for(b=0;b<n;b++)k=this.guides[b],t=t=t=a=d=NaN,w=k.above,k.toCategory&&(t=c.getCategoryIndexByValue(k.toCategory),isNaN(t)||(d=this.getCoordinate(t-f),k.expand&&(d+=this.cellWidth/2),p=new this.axisItemRenderer(this,d,"",!0,NaN,NaN,k),this.pushAxisItem(p,w))),k.category&&(t=c.getCategoryIndexByValue(k.category),isNaN(t)||(a=this.getCoordinate(t-f),k.expand&&(a-=this.cellWidth/2),t=(d-a)/2,p=new this.axisItemRenderer(this,a,k.label,!0,NaN,
t,k),this.pushAxisItem(p,w))),k.toDate&&(k.toDate instanceof Date||(k.toDate=AmCharts.stringToDate(k.toDate,c.dataDateFormat)),this.equalSpacing?(t=c.getClosestIndex(this.data,"time",k.toDate.getTime(),!1,0,this.data.length-1),isNaN(t)||(d=this.getCoordinate(t-f))):d=(k.toDate.getTime()-this.startTime)*this.stepWidth,p=new this.axisItemRenderer(this,d,"",!0,NaN,NaN,k),this.pushAxisItem(p,w)),k.date&&(k.date instanceof Date||(k.date=AmCharts.stringToDate(k.date,c.dataDateFormat)),this.equalSpacing?
(t=c.getClosestIndex(this.data,"time",k.date.getTime(),!1,0,this.data.length-1),isNaN(t)||(a=this.getCoordinate(t-f))):a=(k.date.getTime()-this.startTime)*this.stepWidth,t=(d-a)/2,p="H"==this.orientation?new this.axisItemRenderer(this,a,k.label,!1,2*t,NaN,k):new this.axisItemRenderer(this,a,k.label,!1,NaN,t,k),this.pushAxisItem(p,w)),(0<d||0<a)&&(d<this.width||a<this.width)&&(d=new this.guideFillRenderer(this,a,d,k),a=d.graphics(),this.pushAxisItem(d,w),k.graphics=a,a.index=b,k.balloonText&&this.addEventListeners(a,
k))}this.axisCreated=!0;c=this.x;f=this.y;this.set.translate(c,f);this.labelsSet.translate(c,f);this.positionTitle();(c=this.axisLine.set)&&c.toFront();c=this.getBBox().height;2<c-this.previousHeight&&this.autoWrap&&!this.parseDates&&(this.axisCreated=this.chart.marginsUpdated=!1);this.previousHeight=c},chooseMinorFrequency:function(a){for(var b=10;0<b;b--)if(a/b==Math.round(a/b))return a/b},choosePeriod:function(a){var b=AmCharts.getPeriodDuration(this.periods[a].period,this.periods[a].count),c=
Math.ceil(this.timeDifference/b),d=this.periods;return this.timeDifference<b&&0<a?d[a-1]:c<=this.gridCountR?d[a]:a+1<d.length?this.choosePeriod(a+1):d[a]},getStepWidth:function(a){var b;this.startOnAxis?(b=this.axisWidth/(a-1),1==a&&(b=this.axisWidth)):b=this.axisWidth/a;return b},getCoordinate:function(a){a*=this.stepWidth;this.startOnAxis||(a+=this.stepWidth/2);return Math.round(a)},timeZoom:function(a,b){this.startTime=a;this.endTime=b},minDuration:function(){var a=AmCharts.extractPeriod(this.minPeriod);
return AmCharts.getPeriodDuration(a.period,a.count)},checkPeriodChange:function(a,b,c,d,e){c=new Date(c);var f=new Date(d),l=this.firstDayOfWeek;d=b;"DD"==a&&(b=1);c=AmCharts.resetDateToMin(c,a,b,l).getTime();b=AmCharts.resetDateToMin(f,a,b,l).getTime();return"DD"==a&&"hh"!=e&&c-b<=AmCharts.getPeriodDuration(a,d)?!1:c!=b?!0:!1},generateDFObject:function(){this.dateFormatsObject={};var a;for(a=0;a<this.dateFormats.length;a++){var b=this.dateFormats[a];this.dateFormatsObject[b.period]=b.format}},xToIndex:function(a){var b=
this.data,c=this.chart,d=c.rotate,e=this.stepWidth;this.parseDates&&!this.equalSpacing?(a=this.startTime+Math.round(a/e)-this.minDuration()/2,c=c.getClosestIndex(b,"time",a,!1,this.start,this.end+1)):(this.startOnAxis||(a-=e/2),c=this.start+Math.round(a/e));var c=AmCharts.fitToBounds(c,0,b.length-1),f;b[c]&&(f=b[c].x[this.id]);d?f>this.height+1&&c--:f>this.width+1&&c--;0>f&&c++;return c=AmCharts.fitToBounds(c,0,b.length-1)},dateToCoordinate:function(a){return this.parseDates&&!this.equalSpacing?(a.getTime()-
this.startTime)*this.stepWidth:this.parseDates&&this.equalSpacing?(a=this.chart.getClosestIndex(this.data,"time",a.getTime(),!1,0,this.data.length-1),this.getCoordinate(a-this.start)):NaN},categoryToCoordinate:function(a){return this.chart?(a=this.chart.getCategoryIndexByValue(a),this.getCoordinate(a-this.start)):NaN},coordinateToDate:function(a){return this.equalSpacing?(a=this.xToIndex(a),new Date(this.data[a].time)):new Date(this.startTime+a/this.stepWidth)}});
AmCharts.AmStockChart=AmCharts.Class({construct:function(a){this.type="stock";this.cname="AmStockChart";this.version="3.10.1";this.theme=a;this.createEvents("zoomed","rollOverStockEvent","rollOutStockEvent","clickStockEvent","panelRemoved","dataUpdated","init","rendered","drawn");this.colors="#FF6600 #FCD202 #B0DE09 #0D8ECF #2A0CD0 #CD0D74 #CC0000 #00CC00 #0000CC #DDDDDD #999999 #333333 #990000".split(" ");this.firstDayOfWeek=1;this.glueToTheEnd=!1;this.dataSetCounter=-1;this.zoomOutOnDataSetChange=
!1;this.panels=[];this.dataSets=[];this.chartCursors=[];this.comparedDataSets=[];this.categoryAxesSettings=new AmCharts.CategoryAxesSettings(a);this.valueAxesSettings=new AmCharts.ValueAxesSettings(a);this.panelsSettings=new AmCharts.PanelsSettings(a);this.chartScrollbarSettings=new AmCharts.ChartScrollbarSettings(a);this.chartCursorSettings=new AmCharts.ChartCursorSettings(a);this.stockEventsSettings=new AmCharts.StockEventsSettings(a);this.legendSettings=new AmCharts.LegendSettings(a);this.balloon=
new AmCharts.AmBalloon(a);this.previousEndDate=new Date(0);this.previousStartDate=new Date(0);this.dataSetCount=this.graphCount=0;this.chartCreated=!1;this.extendToFullPeriod=!0;AmCharts.applyTheme(this,a,this.cname)},write:function(a){var b=this.theme;AmCharts.applyLang(this.language);var c=this.exportConfig;c&&AmCharts.AmExport&&!this.AmExport&&(this.AmExport=new AmCharts.AmExport(this,c));this.amExport&&AmCharts.AmExport&&(this.AmExport=AmCharts.extend(this.amExport,new AmCharts.AmExport(this),
!0));this.AmExport&&this.AmExport.init();this.chartRendered=!1;a="object"!=typeof a?document.getElementById(a):a;this.zoomOutOnDataSetChange&&(this.endDate=this.startDate=void 0);this.categoryAxesSettings=AmCharts.processObject(this.categoryAxesSettings,AmCharts.CategoryAxesSettings,b);this.valueAxesSettings=AmCharts.processObject(this.valueAxesSettings,AmCharts.ValueAxesSettings,b);this.chartCursorSettings=AmCharts.processObject(this.chartCursorSettings,AmCharts.ChartCursorSettings,b);this.chartScrollbarSettings=
AmCharts.processObject(this.chartScrollbarSettings,AmCharts.ChartScrollbarSettings,b);this.legendSettings=AmCharts.processObject(this.legendSettings,AmCharts.LegendSettings,b);this.panelsSettings=AmCharts.processObject(this.panelsSettings,AmCharts.PanelsSettings,b);this.stockEventsSettings=AmCharts.processObject(this.stockEventsSettings,AmCharts.StockEventsSettings,b);this.dataSetSelector&&(this.dataSetSelector=AmCharts.processObject(this.dataSetSelector,AmCharts.DataSetSelector,b));this.periodSelector&&
(this.periodSelector=AmCharts.processObject(this.periodSelector,AmCharts.PeriodSelector,b));a.innerHTML="";this.div=a;this.measure();this.createLayout();this.updateDataSets();this.addDataSetSelector();this.addPeriodSelector();this.addPanels();this.updatePanels();this.addChartScrollbar();this.updateData();this.skipDefault||this.setDefaultPeriod()},setDefaultPeriod:function(a){var b=this.periodSelector;b&&(this.animationPlayed=!1,b.setDefaultPeriod(a))},validateSize:function(){var a,b=this.panels;this.measurePanels();
for(a=0;a<b.length;a++)panel=b[a],panel.invalidateSize()},updateDataSets:function(){var a=this.mainDataSet,b=this.dataSets,c;for(c=0;c<b.length;c++){var d=b[c],d=AmCharts.processObject(d,AmCharts.DataSet);b[c]=d;d.id||(this.dataSetCount++,d.id="ds"+this.dataSetCount);void 0===d.color&&(d.color=this.colors.length-1>c?this.colors[c]:AmCharts.randomColor())}!a&&AmCharts.ifArray(b)&&(this.mainDataSet=this.dataSets[0])},updateEvents:function(a){AmCharts.ifArray(a.stockEvents)&&AmCharts.parseEvents(a,this.panels,
this.stockEventsSettings,this.firstDayOfWeek,this,this.dataDateFormat)},getLastDate:function(a){var b=this.dataDateFormat;a=a instanceof Date?new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()):b?AmCharts.stringToDate(a,b):new Date(a);return new Date(AmCharts.changeDate(a,this.categoryAxesSettings.minPeriod,1,!0).getTime()-1)},getFirstDate:function(a){var b=this.dataDateFormat;a=a instanceof Date?new Date(a.getFullYear(),a.getMonth(),a.getDate(),
a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()):b?AmCharts.stringToDate(a,b):new Date(a);return new Date(AmCharts.resetDateToMin(a,this.categoryAxesSettings.minPeriod,1,this.firstDayOfWeek))},updateData:function(){var a=this.mainDataSet;if(a){var b=this.categoryAxesSettings;-1==AmCharts.getItemIndex(b.minPeriod,b.groupToPeriods)&&b.groupToPeriods.unshift(b.minPeriod);var c=a.dataProvider;if(AmCharts.ifArray(c)){var d=a.categoryField;this.firstDate=this.getFirstDate(c[0][d]);this.lastDate=
this.getLastDate(c[c.length-1][d]);this.periodSelector&&this.periodSelector.setRanges(this.firstDate,this.lastDate);a.dataParsed||(AmCharts.parseStockData(a,b.minPeriod,b.groupToPeriods,this.firstDayOfWeek,this.dataDateFormat),a.dataParsed=!0);this.updateComparingData();this.updateEvents(a)}else this.lastDate=this.firstDate=void 0;this.glueToTheEnd&&this.startDate&&this.endDate&&this.lastDate&&(AmCharts.getPeriodDuration(b.minPeriod),this.startDate=new Date(this.startDate.getTime()+(this.lastDate.getTime()-
this.endDate.getTime())),this.endDate=this.lastDate,this.updateScrollbar=!0);this.updatePanelsWithNewData()}a={type:"dataUpdated",chart:this};this.fire(a.type,a)},updateComparingData:function(){var a=this.comparedDataSets,b=this.categoryAxesSettings,c;for(c=0;c<a.length;c++){var d=a[c];d.dataParsed||(AmCharts.parseStockData(d,b.minPeriod,b.groupToPeriods,this.firstDayOfWeek,this.dataDateFormat),d.dataParsed=!0);this.updateEvents(d)}},createLayout:function(){var a=this.div,b,c,d=document.createElement("div");
d.style.position="relative";this.containerDiv=d;a.appendChild(d);if(a=this.periodSelector)b=a.position;if(a=this.dataSetSelector)c=a.position;if("left"==b||"left"==c)a=document.createElement("div"),a.style.cssFloat="left",a.style.styleFloat="left",a.style.width="0px",a.style.position="absolute",d.appendChild(a),this.leftContainer=a;if("right"==b||"right"==c)b=document.createElement("div"),b.style.cssFloat="right",b.style.styleFloat="right",b.style.width="0px",d.appendChild(b),this.rightContainer=
b;b=document.createElement("div");d.appendChild(b);this.centerContainer=b;d=document.createElement("div");b.appendChild(d);this.panelsContainer=d},addPanels:function(){this.measurePanels();for(var a=this.panels,b=0;b<a.length;b++){var c=a[b],c=AmCharts.processObject(c,AmCharts.StockPanel,this.theme);a[b]=c;this.addStockPanel(c,b)}this.panelsAdded=!0},measurePanels:function(){this.measure();var a=this.chartScrollbarSettings,b=this.divRealHeight,c=this.panelsSettings.panelSpacing;a.enabled&&(b-=a.height);
(a=this.periodSelector)&&!a.vertical&&(a=a.offsetHeight,b-=a+c);(a=this.dataSetSelector)&&!a.vertical&&(a=a.offsetHeight,b-=a+c);a=this.panels;this.panelsContainer.style.height=b+"px";this.chartCursors=[];var d=0,e,h;for(e=0;e<a.length;e++){h=a[e];var f=h.percentHeight;isNaN(f)&&(f=100/a.length,h.percentHeight=f);d+=f}this.panelsHeight=Math.max(b-c*(a.length-1),0);for(e=0;e<a.length;e++)h=a[e],h.percentHeight=h.percentHeight/d*100,h.panelBox&&(h.panelBox.style.height=Math.round(h.percentHeight*this.panelsHeight/
100)+"px")},addStockPanel:function(a,b){var c=this.panelsSettings,d=document.createElement("div");d.className="amChartsPanel";0<b&&!this.panels[b-1].showCategoryAxis&&(d.style.marginTop=c.panelSpacing+"px");a.panelBox=d;a.stockChart=this;a.id||(a.id="stockPanel"+b);a.pathToImages=this.pathToImages;d.style.height=Math.round(a.percentHeight*this.panelsHeight/100)+"px";d.style.width="100%";this.panelsContainer.appendChild(d);0<c.backgroundAlpha&&(d.style.backgroundColor=c.backgroundColor);if(d=a.stockLegend)d.container=
void 0,d.title=a.title,d.marginLeft=c.marginLeft,d.marginRight=c.marginRight,d.verticalGap=3,d.position="top",AmCharts.copyProperties(this.legendSettings,d),a.addLegend(d,d.divId);a.zoomOutText="";a.removeChartCursor();this.addCursor(a)},enableCursors:function(a){var b=this.chartCursors,c;for(c=0;c<b.length;c++)b[c].enabled=a},updatePanels:function(){var a=this.panels,b;for(b=0;b<a.length;b++)this.updatePanel(a[b]);this.mainDataSet&&this.updateGraphs();this.currentPeriod=void 0},updatePanel:function(a){a.seriesIdField=
"amCategoryIdField";a.dataProvider=[];a.chartData=[];a.graphs=[];var b=a.categoryAxis,c=this.categoryAxesSettings;AmCharts.copyProperties(this.panelsSettings,a);AmCharts.copyProperties(c,b);b.parseDates=!0;a.zoomOutOnDataUpdate=!1;a.mouseWheelScrollEnabled=this.mouseWheelScrollEnabled;a.dataDateFormat=this.dataDateFormat;a.language=this.language;a.showCategoryAxis?"top"==b.position?a.marginTop=c.axisHeight:a.marginBottom=c.axisHeight:(a.categoryAxis.labelsEnabled=!1,a.chartCursor&&(a.chartCursor.categoryBalloonEnabled=
!1));var c=a.valueAxes,d=c.length,e;0===d&&(e=new AmCharts.ValueAxis(this.theme),a.addValueAxis(e));b=new AmCharts.AmBalloon(this.theme);AmCharts.copyProperties(this.balloon,b);a.balloon=b;c=a.valueAxes;d=c.length;for(b=0;b<d;b++)e=c[b],AmCharts.copyProperties(this.valueAxesSettings,e);a.listenersAdded=!1;a.write(a.panelBox)},zoom:function(a,b){this.zoomChart(a,b)},zoomOut:function(){this.zoomChart(this.firstDate,this.lastDate)},updatePanelsWithNewData:function(){var a=this.mainDataSet,b=this.scrollbarChart;
if(a){var c=this.panels;this.currentPeriod=void 0;var d;for(d=0;d<c.length;d++){var e=c[d];e.categoryField=a.categoryField;0===a.dataProvider.length&&(e.dataProvider=[]);e.scrollbarChart=b}b&&(c=this.categoryAxesSettings,d=c.minPeriod,b.categoryField=a.categoryField,0<a.dataProvider.length?(e=this.chartScrollbarSettings.usePeriod,b.dataProvider=e?a.agregatedDataProviders[e]:a.agregatedDataProviders[d]):b.dataProvider=[],e=b.categoryAxis,e.minPeriod=d,e.firstDayOfWeek=this.firstDayOfWeek,e.equalSpacing=
c.equalSpacing,e.axisAlpha=0,e.markPeriodChange=c.markPeriodChange,b.bbsetr=!0,b.validateData(),c=this.panelsSettings,b.maxSelectedTime=c.maxSelectedTime,b.minSelectedTime=c.minSelectedTime);0<a.dataProvider.length&&this.zoomChart(this.startDate,this.endDate)}this.panelDataInvalidated=!1},addChartScrollbar:function(){var a=this.chartScrollbarSettings,b=this.scrollbarChart;b&&(b.clear(),b.destroy());if(a.enabled){var c=this.panelsSettings,d=this.categoryAxesSettings,b=new AmCharts.AmSerialChart(this.theme);
b.pathToImages=this.pathToImages;b.autoMargins=!1;this.scrollbarChart=b;b.id="scrollbarChart";b.scrollbarOnly=!0;b.zoomOutText="";b.panEventsEnabled=this.panelsSettings.panEventsEnabled;b.marginLeft=c.marginLeft;b.marginRight=c.marginRight;b.marginTop=0;b.marginBottom=0;var c=d.dateFormats,e=b.categoryAxis;e.boldPeriodBeginning=d.boldPeriodBeginning;c&&(e.dateFormats=d.dateFormats);e.labelsEnabled=!1;e.parseDates=!0;d=a.graph;if(AmCharts.isString(d)){c=this.panels;for(e=0;e<c.length;e++){var h=AmCharts.getObjById(c[e].stockGraphs,
a.graph);h&&(d=h)}a.graph=d}var f;d&&(f=new AmCharts.AmGraph(this.theme),f.valueField=d.valueField,f.periodValue=d.periodValue,f.type=d.type,f.connect=d.connect,f.minDistance=a.minDistance,b.addGraph(f));d=new AmCharts.ChartScrollbar(this.theme);b.addChartScrollbar(d);AmCharts.copyProperties(a,d);d.scrollbarHeight=a.height;d.graph=f;this.listenTo(d,"zoomed",this.handleScrollbarZoom);f=document.createElement("div");f.style.height=a.height+"px";d=this.periodSelectorContainer;c=this.periodSelector;e=
this.centerContainer;"bottom"==a.position?c?"bottom"==c.position?e.insertBefore(f,d):e.appendChild(f):e.appendChild(f):c?"top"==c.position?e.insertBefore(f,d.nextSibling):e.insertBefore(f,e.firstChild):e.insertBefore(f,e.firstChild);b.write(f)}},handleScrollbarZoom:function(a){if(this.skipScrollbarEvent)this.skipScrollbarEvent=!1;else{var b=a.endDate,c={};c.startDate=a.startDate;c.endDate=b;this.updateScrollbar=!1;this.handleZoom(c)}},addPeriodSelector:function(){var a=this.periodSelector;if(a){var b=
this.categoryAxesSettings.minPeriod;a.minDuration=AmCharts.getPeriodDuration(b);a.minPeriod=b;a.chart=this;var c=this.dataSetSelector,d,b=this.dssContainer;c&&(d=c.position);var c=this.panelsSettings.panelSpacing,e=document.createElement("div");this.periodSelectorContainer=e;var h=this.leftContainer,f=this.rightContainer,g=this.centerContainer,k=this.panelsContainer,p=a.width+2*c+"px";switch(a.position){case "left":h.style.width=a.width+"px";h.appendChild(e);g.style.paddingLeft=p;break;case "right":g.style.marginRight=
p;f.appendChild(e);f.style.width=a.width+"px";break;case "top":k.style.clear="both";g.insertBefore(e,k);e.style.paddingBottom=c+"px";e.style.overflow="hidden";break;case "bottom":e.style.marginTop=c+"px","bottom"==d?g.insertBefore(e,b):g.appendChild(e)}this.listenTo(a,"changed",this.handlePeriodSelectorZoom);a.write(e)}},addDataSetSelector:function(){var a=this.dataSetSelector;if(a){a.chart=this;a.dataProvider=this.dataSets;var b=a.position,c=this.panelsSettings.panelSpacing,d=document.createElement("div");
this.dssContainer=d;var e=this.leftContainer,h=this.rightContainer,f=this.centerContainer,g=this.panelsContainer,c=a.width+2*c+"px";switch(b){case "left":e.style.width=a.width+"px";e.appendChild(d);f.style.paddingLeft=c;break;case "right":f.style.marginRight=c;h.appendChild(d);h.style.width=a.width+"px";break;case "top":g.style.clear="both";f.insertBefore(d,g);d.style.overflow="hidden";break;case "bottom":f.appendChild(d)}a.write(d)}},handlePeriodSelectorZoom:function(a){var b=this.scrollbarChart;
b&&(b.updateScrollbar=!0);a.predefinedPeriod?(this.predefinedStart=a.startDate,this.predefinedEnd=a.endDate):this.predefinedEnd=this.predefinedStart=null;this.zoomChart(a.startDate,a.endDate)},addCursor:function(a){var b=this.chartCursorSettings;if(b.enabled){var c=new AmCharts.ChartCursor(this.theme);AmCharts.copyProperties(b,c);a.removeChartCursor();a.addChartCursor(c);this.listenTo(c,"changed",this.handleCursorChange);this.listenTo(c,"onHideCursor",this.hideChartCursor);this.listenTo(c,"zoomed",
this.handleCursorZoom);this.chartCursors.push(c)}},hideChartCursor:function(){var a=this.chartCursors,b;for(b=0;b<a.length;b++){var c=a[b];c.hideCursor(!1);(c=c.chart)&&c.updateLegendValues()}},handleCursorZoom:function(a){var b=this.scrollbarChart;b&&(b.updateScrollbar=!0);var b={},c;if(this.categoryAxesSettings.equalSpacing){var d=this.mainDataSet.categoryField,e=this.mainDataSet.agregatedDataProviders[this.currentPeriod];c=new Date(e[a.start][d]);a=new Date(e[a.end][d])}else c=new Date(a.start),
a=new Date(a.end);b.startDate=c;b.endDate=a;this.handleZoom(b)},handleZoom:function(a){this.zoomChart(a.startDate,a.endDate)},zoomChart:function(a,b){var c=new Date(a),d=this,e=d.firstDate,h=d.lastDate,f=d.currentPeriod,g=d.categoryAxesSettings,k=g.minPeriod,p=d.panelsSettings,n=d.periodSelector,u=d.panels,t=d.comparedGraphs,y=d.scrollbarChart,w=d.firstDayOfWeek;if(e&&h){a||(a=e);b||(b=h);if(f){var l=AmCharts.extractPeriod(f);a.getTime()==b.getTime()&&l!=k&&(b=AmCharts.changeDate(b,l.period,l.count),
b.setTime(b.getTime()-1))}a.getTime()<e.getTime()&&(a=e);a.getTime()>h.getTime()&&(a=h);b.getTime()<e.getTime()&&(b=e);b.getTime()>h.getTime()&&(b=h);l=AmCharts.getItemIndex(k,g.groupToPeriods);g=f;f=d.choosePeriod(l,a,b);d.currentPeriod=f;var l=AmCharts.extractPeriod(f),x=AmCharts.getPeriodDuration(l.period,l.count);AmCharts.getPeriodDuration(k);1>b.getTime()-a.getTime()&&(a=new Date(b.getTime()-1));k=AmCharts.newDate(a);d.extendToFullPeriod&&(k.getTime()-e.getTime()<.1*x&&(k=AmCharts.resetDateToMin(a,
l.period,l.count,w)),h.getTime()-b.getTime()<.1*x&&(b=AmCharts.resetDateToMin(h,l.period,l.count,w),b=AmCharts.changeDate(b,l.period,l.count,!0)));for(e=0;e<u.length;e++)h=u[e],h.chartCursor&&h.chartCursor.panning&&(k=c);for(e=0;e<u.length;e++){h=u[e];if(f!=g){for(c=0;c<t.length;c++)x=t[c].graph,x.dataProvider=x.dataSet.agregatedDataProviders[f];c=h.categoryAxis;c.firstDayOfWeek=w;c.minPeriod=f;h.dataProvider=d.mainDataSet.agregatedDataProviders[f];if(c=h.chartCursor)c.categoryBalloonDateFormat=d.chartCursorSettings.categoryBalloonDateFormat(l.period),
h.showCategoryAxis||(c.categoryBalloonEnabled=!1);h.startTime=k.getTime();h.endTime=b.getTime();h.validateData(!0)}c=!1;h.chartCursor&&h.chartCursor.panning&&(c=!0);c||(h.startTime=void 0,h.endTime=void 0,h.zoomToDates(k,b));0<p.startDuration&&d.animationPlayed&&!c?(h.startDuration=0,h.animateAgain()):0<p.startDuration&&!c&&h.animateAgain()}d.animationPlayed=!0;AmCharts.extractPeriod(f);p=new Date(b);y&&d.updateScrollbar&&(y.zoomToDates(a,p),d.skipScrollbarEvent=!0,setTimeout(function(){d.resetSkip.call(d)},
100));d.updateScrollbar=!0;d.startDate=a;d.endDate=b;n&&n.zoom(a,b);if(a.getTime()!=d.previousStartDate.getTime()||b.getTime()!=d.previousEndDate.getTime())n={type:"zoomed"},n.startDate=a,n.endDate=b,n.chart=d,n.period=f,d.fire(n.type,n),d.previousStartDate=new Date(a),d.previousEndDate=new Date(b)}d.eventsHidden&&d.showHideEvents(!1);d.chartCreated||(f="init",d.fire(f,{type:f,chart:d}));d.chartRendered||(f="rendered",d.fire(f,{type:f,chart:d}),d.chartRendered=!0);f="drawn";d.fire(f,{type:f,chart:d});
d.chartCreated=!0;d.animationPlayed=!0},resetSkip:function(){this.skipScrollbarEvent=!1},updateGraphs:function(){this.getSelections();if(0<this.dataSets.length){var a=this.panels;this.comparedGraphs=[];var b;for(b=0;b<a.length;b++){var c=a[b],d=c.valueAxes,e;for(e=0;e<d.length;e++){var h=d[e];h.prevLog&&(h.logarithmic=h.prevLog);h.recalculateToPercents="always"==c.recalculateToPercents?!0:!1}d=this.mainDataSet;e=this.comparedDataSets;h=c.stockGraphs;c.graphs=[];var f;for(f=0;f<h.length;f++){var g=
h[f],g=AmCharts.processObject(g,AmCharts.StockGraph,this.theme);h[f]=g;if(!g.title||g.resetTitleOnDataSetChange)g.title=d.title,g.resetTitleOnDataSetChange=!0;g.useDataSetColors&&(g.lineColor=d.color,g.fillColors=void 0,g.bulletColor=void 0);c.addGraph(g);var k=!1;"always"==c.recalculateToPercents&&(k=!0);var p=c.stockLegend,n,u,t,y;p&&(p=AmCharts.processObject(p,AmCharts.StockLegend,this.theme),c.stockLegend=p,n=p.valueTextComparing,u=p.valueTextRegular,t=p.periodValueTextComparing,y=p.periodValueTextRegular);
if(g.comparable){var w=e.length;0<w&&g.valueAxis.logarithmic&&"never"!=c.recalculateToPercents&&(g.valueAxis.logarithmic=!1,g.valueAxis.prevLog=!0);0<w&&"whenComparing"==c.recalculateToPercents&&(g.valueAxis.recalculateToPercents=!0);p&&g.valueAxis&&!0===g.valueAxis.recalculateToPercents&&(k=!0);var l;for(l=0;l<w;l++){var x=e[l],q=g.comparedGraphs[x.id];q||(q=new AmCharts.AmGraph(this.theme),q.id="comparedGraph"+l+"_"+f+x.id);q.periodValue=g.periodValue;q.dataSet=x;q.behindColumns=g.behindColumns;
g.comparedGraphs[x.id]=q;q.seriesIdField="amCategoryIdField";q.connect=g.connect;var m=g.compareField;m||(m=g.valueField);var D=!1,A=x.fieldMappings,z;for(z=0;z<A.length;z++)A[z].toField==m&&(D=!0);if(D){q.valueField=m;q.title=x.title;q.lineColor=x.color;g.compareGraphType&&(q.type=g.compareGraphType);m=g.compareGraphLineThickness;isNaN(m)||(q.lineThickness=m);m=g.compareGraphDashLength;isNaN(m)||(q.dashLength=m);m=g.compareGraphLineAlpha;isNaN(m)||(q.lineAlpha=m);m=g.compareGraphCornerRadiusTop;
isNaN(m)||(q.cornerRadiusTop=m);m=g.compareGraphCornerRadiusBottom;isNaN(m)||(q.cornerRadiusBottom=m);m=g.compareGraphBalloonColor;isNaN(m)||(q.balloonColor=m);m=g.compareGraphBulletColor;isNaN(m)||(q.bulletColor=m);if(m=g.compareGraphFillColors)q.fillColors=m;if(m=g.compareGraphNegativeFillColors)q.negativeFillColors=m;if(m=g.compareGraphFillAlphas)q.fillAlphas=m;if(m=g.compareGraphNegativeFillAlphas)q.negativeFillAlphas=m;if(m=g.compareGraphBullet)q.bullet=m;if(m=g.compareGraphNumberFormatter)q.numberFormatter=
m;m=g.compareGraphPrecision;isNaN(m)||(q.precision=m);if(m=g.compareGraphBalloonText)q.balloonText=m;m=g.compareGraphBulletSize;isNaN(m)||(q.bulletSize=m);m=g.compareGraphBulletAlpha;isNaN(m)||(q.bulletAlpha=m);m=g.compareGraphBulletBorderAlpha;isNaN(m)||(q.bulletBorderAlpha=m);if(m=g.compareGraphBulletBorderColor)q.bulletBorderColor=m;m=g.compareGraphBulletBorderThickness;isNaN(m)||(q.bulletBorderThickness=m);q.visibleInLegend=g.compareGraphVisibleInLegend;q.balloonFunction=g.compareGraphBalloonFunction;
q.hideBulletsCount=g.hideBulletsCount;q.valueAxis=g.valueAxis;p&&(k&&n?(q.legendValueText=n,q.legendPeriodValueText=t):(u&&(q.legendValueText=u),y&&(q.legendPeriodValueText=y)));c.showComparedOnTop?c.graphs.push(q):c.graphs.unshift(q);this.comparedGraphs.push({graph:q,dataSet:x})}}}p&&(k&&n?(g.legendValueText=n,g.legendPeriodValueText=t):(u&&(g.legendValueText=u),y&&(g.legendPeriodValueText=y)))}}}},choosePeriod:function(a,b,c){var d=this.categoryAxesSettings,e=d.groupToPeriods,h=e[a],e=e[a+1],f=
AmCharts.extractPeriod(h),f=AmCharts.getPeriodDuration(f.period,f.count),g=b.getTime(),k=c.getTime(),d=d.maxSeries;return(k-g)/f>d&&0<d&&e?this.choosePeriod(a+1,b,c):h},handleCursorChange:function(a){var b=a.target,c=a.position,d=a.zooming;a=a.index;var e=this.chartCursors,h;for(h=0;h<e.length;h++){var f=e[h];f!=b&&c&&(f.isZooming(d),f.previousMousePosition=NaN,f.forceShow=!0,f.initialMouse=b.initialMouse,f.selectionPosX=b.selectionPosX,f.setPosition(c,!1,a))}},getSelections:function(){var a=[],b=
this.dataSets,c;for(c=0;c<b.length;c++){var d=b[c];d.compared&&a.push(d)}this.comparedDataSets=a;b=this.panels;for(c=0;c<b.length;c++)d=b[c],"never"!=d.recalculateToPercents&&0<a.length?d.hideDrawingIcons(!0):d.drawingIconsEnabled&&d.hideDrawingIcons(!1)},addPanel:function(a){this.panels.push(a);AmCharts.removeChart(a);AmCharts.addChart(a)},addPanelAt:function(a,b){this.panels.splice(b,0,a);AmCharts.removeChart(a);AmCharts.addChart(a)},removePanel:function(a){var b=this.panels,c;for(c=b.length-1;0<=
c;c--)if(b[c]==a){var d={type:"panelRemoved",panel:a,chart:this};this.fire(d.type,d);b.splice(c,1);a.destroy();a.clear()}},validateData:function(){this.resetDataParsed();this.updateDataSets();this.mainDataSet.compared=!1;this.updateGraphs();this.updateData();var a=this.dataSetSelector;a&&a.write(a.div)},resetDataParsed:function(){var a=this.dataSets,b;for(b=0;b<a.length;b++)a[b].dataParsed=!1},validateNow:function(){this.skipDefault=!0;this.chartRendered=!1;this.clear(!0);this.write(this.div)},hideStockEvents:function(){this.showHideEvents(!1);
this.eventsHidden=!0},showStockEvents:function(){this.showHideEvents(!0);this.eventsHidden=!1},showHideEvents:function(a){var b=this.panels,c;for(c=0;c<b.length;c++){var d=b[c].graphs,e;for(e=0;e<d.length;e++){var h=d[e];!0===a?h.showBullets():h.hideBullets()}}},invalidateSize:function(){var a=this;clearTimeout(a.validateTO);var b=setTimeout(function(){a.validateNow()},5);a.validateTO=b},measure:function(){var a=this.div,b=a.offsetWidth,c=a.offsetHeight;a.clientHeight&&(b=a.clientWidth,c=a.clientHeight);
this.divRealWidth=b;this.divRealHeight=c},clear:function(a){var b=this.panels,c;if(b)for(c=0;c<b.length;c++){var d=b[c];a||(d.cleanChart(),d.destroy());d.clear(a)}(b=this.scrollbarChart)&&b.clear();if(b=this.div)b.innerHTML="";a||(this.div=null,AmCharts.deleteObject(this))}});AmCharts.StockEvent=AmCharts.Class({construct:function(){}});AmCharts.DataSet=AmCharts.Class({construct:function(){this.cname="DataSet";this.fieldMappings=[];this.dataProvider=[];this.agregatedDataProviders=[];this.stockEvents=[];this.compared=!1;this.showInCompare=this.showInSelect=!0}});AmCharts.PeriodSelector=AmCharts.Class({construct:function(a){this.cname="PeriodSelector";this.theme=a;this.createEvents("changed");this.inputFieldsEnabled=!0;this.position="bottom";this.width=180;this.fromText="From: ";this.toText="to: ";this.periodsText="Zoom: ";this.periods=[];this.inputFieldWidth=100;this.dateFormat="DD-MM-YYYY";this.hideOutOfScopePeriods=!0;AmCharts.applyTheme(this,a,this.cname)},zoom:function(a,b){this.inputFieldsEnabled&&(this.startDateField.value=AmCharts.formatDate(a,this.dateFormat),
this.endDateField.value=AmCharts.formatDate(b,this.dateFormat));this.markButtonAsSelected()},write:function(a){var b=this;a.className="amChartsPeriodSelector";var c=b.width,d=b.position;b.width=void 0;b.position=void 0;AmCharts.applyStyles(a.style,b);b.width=c;b.position=d;b.div=a;a.innerHTML="";c=b.theme;d=b.position;d="top"==d||"bottom"==d?!1:!0;b.vertical=d;var e=0,h=0;if(b.inputFieldsEnabled){var f=document.createElement("div");a.appendChild(f);var g=document.createTextNode(AmCharts.lang.fromText||
b.fromText);f.appendChild(g);d?AmCharts.addBr(f):(f.style.styleFloat="left",f.style.display="inline");var k=document.createElement("input");k.className="amChartsInputField";c&&AmCharts.applyStyles(k.style,c.PeriodInputField);k.style.textAlign="center";k.onblur=function(a){b.handleCalChange(a)};AmCharts.isNN&&k.addEventListener("keypress",function(a){b.handleCalendarChange.call(b,a)},!0);AmCharts.isIE&&k.attachEvent("onkeypress",function(a){b.handleCalendarChange.call(b,a)});f.appendChild(k);b.startDateField=
k;if(d)g=b.width-6+"px",AmCharts.addBr(f);else{var g=b.inputFieldWidth+"px",p=document.createTextNode(" ");f.appendChild(p)}k.style.width=g;k=document.createTextNode(AmCharts.lang.toText||b.toText);f.appendChild(k);d&&AmCharts.addBr(f);k=document.createElement("input");k.className="amChartsInputField";c&&AmCharts.applyStyles(k.style,c.PeriodInputField);k.style.textAlign="center";k.onblur=function(){b.handleCalChange()};AmCharts.isNN&&k.addEventListener("keypress",function(a){b.handleCalendarChange.call(b,
a)},!0);AmCharts.isIE&&k.attachEvent("onkeypress",function(a){b.handleCalendarChange.call(b,a)});f.appendChild(k);b.endDateField=k;d?AmCharts.addBr(f):e=k.offsetHeight+2;g&&(k.style.width=g)}f=b.periods;if(AmCharts.ifArray(f)){g=document.createElement("div");d||(g.style.cssFloat="right",g.style.styleFloat="right",g.style.display="inline");a.appendChild(g);d&&AmCharts.addBr(g);a=document.createTextNode(AmCharts.lang.periodsText||b.periodsText);g.appendChild(a);b.periodContainer=g;var n;for(a=0;a<f.length;a++)k=
f[a],n=document.createElement("input"),n.type="button",n.value=k.label,n.period=k.period,n.count=k.count,n.periodObj=k,n.className="amChartsButton",c&&AmCharts.applyStyles(n.style,c.PeriodButton),d&&(n.style.width=b.width-1+"px"),n.style.boxSizing="border-box",g.appendChild(n),b.addEventListeners(n),k.button=n;!d&&n&&(h=n.offsetHeight);b.offsetHeight=Math.max(e,h)}},addEventListeners:function(a){var b=this;AmCharts.isNN&&a.addEventListener("click",function(a){b.handlePeriodChange.call(b,a)},!0);AmCharts.isIE&&
a.attachEvent("onclick",function(a){b.handlePeriodChange.call(b,a)})},getPeriodDates:function(){var a=this.periods,b;for(b=0;b<a.length;b++)this.selectPeriodButton(a[b],!0)},handleCalendarChange:function(a){13==a.keyCode&&this.handleCalChange(a)},handleCalChange:function(a){var b=this.dateFormat,c=AmCharts.stringToDate(this.startDateField.value,b),b=this.chart.getLastDate(AmCharts.stringToDate(this.endDateField.value,b));try{this.startDateField.blur(),this.endDateField.blur()}catch(d){}if(c&&b){var e=
{type:"changed"};e.startDate=c;e.endDate=b;e.chart=this.chart;e.event=a;this.fire(e.type,e)}},handlePeriodChange:function(a){this.selectPeriodButton((a.srcElement?a.srcElement:a.target).periodObj,!1,a)},setRanges:function(a,b){this.firstDate=a;this.lastDate=b;this.getPeriodDates()},selectPeriodButton:function(a,b,c){var d=a.button,e=d.count,h=d.period,f,g,k=this.firstDate,p=this.lastDate,n,u=this.theme;k&&p&&("MAX"==h?(f=k,g=p):"YTD"==h?(f=new Date,f.setMonth(0,1),f.setHours(0,0,0,0),0===e&&f.setDate(f.getDate()-
1),g=this.lastDate):"YYYY"==h||"MM"==h?this.selectFromStart?(f=k,g=new Date(k),g.setMonth(g.getMonth()+e)):(f=new Date(p),AmCharts.changeDate(f,h,e,!1),f.setDate(f.getDate()-1),g=p):(n=AmCharts.getPeriodDuration(h,e),this.selectFromStart?(f=k,g=new Date(k.getTime()+n-1)):(f=new Date(p.getTime()-n+1),g=p)),a.startTime=f.getTime(),this.hideOutOfScopePeriods&&(b&&a.startTime<k.getTime()?d.style.display="none":d.style.display="inline"),f.getTime()>p.getTime()&&(n=AmCharts.getPeriodDuration("DD",1),f=
new Date(p.getTime()-n)),f.getTime()<k.getTime()&&(f=k),"YTD"==h&&(a.startTime=f.getTime()),a.endTime=g.getTime(),b||(this.skipMark=!0,this.unselectButtons(),d.className="amChartsButtonSelected",u&&AmCharts.applyStyles(d.style,u.PeriodButtonSelected),a={type:"changed"},a.startDate=f,a.endDate=g,a.predefinedPeriod=h,a.chart=this.chart,a.count=e,a.event=c,this.fire(a.type,a)))},markButtonAsSelected:function(){if(!this.skipMark){var a=this.chart,b=this.periods,c=a.startDate.getTime(),a=a.endDate.getTime(),
d=this.theme;this.unselectButtons();var e;for(e=b.length-1;0<=e;e--){var h=b[e],f=h.button;h.startTime&&h.endTime&&c==h.startTime&&a==h.endTime&&(this.unselectButtons(),f.className="amChartsButtonSelected",d&&AmCharts.applyStyles(f.style,d.PeriodButtonSelected))}}this.skipMark=!1},unselectButtons:function(){var a=this.periods,b,c=this.theme;for(b=a.length-1;0<=b;b--){var d=a[b].button;d.className="amChartsButton";c&&AmCharts.applyStyles(d.style,c.PeriodButton)}},setDefaultPeriod:function(){var a=
this.periods,b;for(b=0;b<a.length;b++){var c=a[b];c.selected&&this.selectPeriodButton(c)}}});AmCharts.StockGraph=AmCharts.Class({inherits:AmCharts.AmGraph,construct:function(a){AmCharts.StockGraph.base.construct.call(this,a);this.cname="StockGraph";this.useDataSetColors=!0;this.periodValue="Close";this.compareGraphType="line";this.compareGraphVisibleInLegend=!0;this.comparable=this.resetTitleOnDataSetChange=!1;this.comparedGraphs={};this.showEventsOnComparedGraphs=!1;AmCharts.applyTheme(this,a,this.cname)}});AmCharts.StockPanel=AmCharts.Class({inherits:AmCharts.AmSerialChart,construct:function(a){AmCharts.StockPanel.base.construct.call(this,a);this.cname="StockPanel";this.theme=a;this.showCategoryAxis=this.showComparedOnTop=!0;this.recalculateToPercents="whenComparing";this.panelHeaderPaddingBottom=this.panelHeaderPaddingLeft=this.panelHeaderPaddingRight=this.panelHeaderPaddingTop=0;this.trendLineAlpha=1;this.trendLineColor="#00CC00";this.trendLineColorHover="#CC0000";this.trendLineThickness=2;this.trendLineDashLength=
0;this.stockGraphs=[];this.drawingIconsEnabled=!1;this.iconSize=18;this.autoMargins=this.allowTurningOff=this.eraseAll=this.erasingEnabled=this.drawingEnabled=!1;AmCharts.applyTheme(this,a,this.cname)},initChart:function(a){AmCharts.StockPanel.base.initChart.call(this,a);this.drawingIconsEnabled&&this.createDrawIcons();(a=this.chartCursor)&&this.listenTo(a,"draw",this.handleDraw)},addStockGraph:function(a){this.stockGraphs.push(a);return a},removeStockGraph:function(a){var b=this.stockGraphs,c;for(c=
b.length-1;0<=c;c--)b[c]==a&&b.splice(c,1)},createDrawIcons:function(){var a=this,b=a.iconSize,c=a.container,d=a.pathToImages,e=a.realWidth-2*b-1-a.marginRight,h=AmCharts.rect(c,b,b,"#000",.005),f=AmCharts.rect(c,b,b,"#000",.005);f.translate(b+1,0);var g=c.image(d+"pencilIcon.gif",0,0,b,b);a.pencilButton=g;f.setAttr("cursor","pointer");h.setAttr("cursor","pointer");h.mouseup(function(){a.handlePencilClick()});var k=c.image(d+"pencilIconH.gif",0,0,b,b);a.pencilButtonPushed=k;a.drawingEnabled||k.hide();
var p=c.image(d+"eraserIcon.gif",b+1,0,b,b);a.eraserButton=p;f.mouseup(function(){a.handleEraserClick()});h.touchend&&(h.touchend(function(){a.handlePencilClick()}),f.touchend(function(){a.handleEraserClick()}));b=c.image(d+"eraserIconH.gif",b+1,0,b,b);a.eraserButtonPushed=b;a.erasingEnabled||b.hide();c=c.set([g,k,p,b,h,f]);c.translate(e,1);this.hideIcons&&c.hide()},handlePencilClick:function(){var a=!this.drawingEnabled;this.disableDrawing(!a);this.erasingEnabled=!1;var b=this.eraserButtonPushed;
b&&b.hide();b=this.pencilButtonPushed;a?b&&b.show():(b&&b.hide(),this.setMouseCursor("auto"))},disableDrawing:function(a){this.drawingEnabled=!a;var b=this.chartCursor;this.stockChart.enableCursors(a);b&&b.enableDrawing(!a)},handleEraserClick:function(){this.disableDrawing(!0);var a=this.pencilButtonPushed;a&&a.hide();a=this.eraserButtonPushed;if(this.eraseAll){var a=this.trendLines,b;for(b=a.length-1;0<=b;b--){var c=a[b];c.isProtected||this.removeTrendLine(c)}this.validateNow()}else(this.erasingEnabled=
b=!this.erasingEnabled)?(a&&a.show(),this.setTrendColorHover(this.trendLineColorHover),this.setMouseCursor("auto")):(a&&a.hide(),this.setTrendColorHover())},setTrendColorHover:function(a){var b=this.trendLines,c;for(c=b.length-1;0<=c;c--){var d=b[c];d.isProtected||(d.rollOverColor=a)}},handleDraw:function(a){var b=this.drawOnAxis;AmCharts.isString(b)&&(b=this.getValueAxisById(b));b||(b=this.valueAxes[0]);this.drawOnAxis=b;var c=this.categoryAxis,d=a.initialX,e=a.finalX,h=a.initialY;a=a.finalY;var f=
new AmCharts.TrendLine(this.theme);f.initialDate=c.coordinateToDate(d);f.finalDate=c.coordinateToDate(e);f.initialValue=b.coordinateToValue(h);f.finalValue=b.coordinateToValue(a);f.lineAlpha=this.trendLineAlpha;f.lineColor=this.trendLineColor;f.lineThickness=this.trendLineThickness;f.dashLength=this.trendLineDashLength;f.valueAxis=b;f.categoryAxis=c;this.addTrendLine(f);this.listenTo(f,"click",this.handleTrendClick);this.validateNow()},hideDrawingIcons:function(a){(this.hideIcons=a)&&this.disableDrawing(a)},
handleTrendClick:function(a){this.erasingEnabled&&(a=a.trendLine,this.eraseAll||a.isProtected||this.removeTrendLine(a),this.validateNow())},handleWheelReal:function(a,b){var c=this.scrollbarChart;if(!this.wheelBusy&&c){var d=1;b&&(d=-1);var c=c.chartScrollbar,e=this.categoryAxis.minDuration();0>a?(d=this.startTime+d*e,e=this.endTime+1*e):(d=this.startTime-d*e,e=this.endTime-1*e);d<this.firstTime&&(d=this.firstTime);e>this.lastTime&&(e=this.lastTime);d<e&&c.timeZoom(d,e,!0)}}});AmCharts.CategoryAxesSettings=AmCharts.Class({construct:function(a){this.cname="CategoryAxesSettings";this.minPeriod="DD";this.equalSpacing=!1;this.axisHeight=28;this.tickLength=this.axisAlpha=0;this.gridCount=10;this.maxSeries=150;this.groupToPeriods="ss 10ss 30ss mm 10mm 30mm hh DD WW MM YYYY".split(" ");this.markPeriodChange=this.autoGridCount=!0;AmCharts.applyTheme(this,a,this.cname)}});AmCharts.ChartCursorSettings=AmCharts.Class({construct:function(a){this.cname="ChartCursorSettings";this.enabled=!0;this.bulletsEnabled=this.valueBalloonsEnabled=!1;this.categoryBalloonDateFormats=[{period:"YYYY",format:"YYYY"},{period:"MM",format:"MMM, YYYY"},{period:"WW",format:"MMM DD, YYYY"},{period:"DD",format:"MMM DD, YYYY"},{period:"hh",format:"JJ:NN"},{period:"mm",format:"JJ:NN"},{period:"ss",format:"JJ:NN:SS"},{period:"fff",format:"JJ:NN:SS"}];AmCharts.applyTheme(this,a,this.cname)},categoryBalloonDateFormat:function(a){var b=
this.categoryBalloonDateFormats,c,d;for(d=0;d<b.length;d++)b[d].period==a&&(c=b[d].format);return c}});AmCharts.ChartScrollbarSettings=AmCharts.Class({construct:function(a){this.cname="ChartScrollbarSettings";this.height=40;this.enabled=!0;this.color="#FFFFFF";this.updateOnReleaseOnly=this.autoGridCount=!0;this.hideResizeGrips=!1;this.position="bottom";this.minDistance=1;AmCharts.applyTheme(this,a,this.cname)}});AmCharts.LegendSettings=AmCharts.Class({construct:function(a){this.cname="LegendSettings";this.marginBottom=this.marginTop=0;this.usePositiveNegativeOnPercentsOnly=!0;this.positiveValueColor="#00CC00";this.negativeValueColor="#CC0000";this.autoMargins=this.equalWidths=this.textClickEnabled=!1;AmCharts.applyTheme(this,a,this.cname)}});AmCharts.PanelsSettings=AmCharts.Class({construct:function(a){this.cname="PanelsSettings";this.marginBottom=this.marginTop=this.marginRight=this.marginLeft=0;this.backgroundColor="#FFFFFF";this.backgroundAlpha=0;this.panelSpacing=8;this.panEventsEnabled=!0;this.creditsPosition="top-right";AmCharts.applyTheme(this,a,this.cname)}});AmCharts.StockEventsSettings=AmCharts.Class({construct:function(a){this.cname="StockEventsSettings";this.type="sign";this.backgroundAlpha=1;this.backgroundColor="#DADADA";this.borderAlpha=1;this.borderColor="#888888";this.balloonColor=this.rollOverColor="#CC0000";AmCharts.applyTheme(this,a,this.cname)}});AmCharts.ValueAxesSettings=AmCharts.Class({construct:function(a){this.cname="ValueAxesSettings";this.tickLength=0;this.showFirstLabel=this.autoGridCount=this.inside=!0;this.showLastLabel=!1;this.axisAlpha=0;AmCharts.applyTheme(this,a,this.cname)}});AmCharts.getItemIndex=function(a,b){var c=-1,d;for(d=0;d<b.length;d++)a==b[d]&&(c=d);return c};AmCharts.addBr=function(a){a.appendChild(document.createElement("br"))};AmCharts.applyStyles=function(a,b){if(b&&a)for(var c in a){var d=c,e=b[d];if(void 0!==e)try{a[d]=e}catch(h){}}};
AmCharts.parseStockData=function(a,b,c,d,e){(new Date).getTime();var h={},f=a.dataProvider,g=a.categoryField;if(g){var k=AmCharts.getItemIndex(b,c),p=c.length,n,u=f.length,t,y={};for(n=k;n<p;n++)t=c[n],h[t]=[];var w={},l=a.fieldMappings,x=l.length;for(n=0;n<u;n++){var q=f[n],m=q[g],m=m instanceof Date?AmCharts.newDate(m,b):e?AmCharts.stringToDate(m,e):new Date(m),D=m.getTime(),A={};for(t=0;t<x;t++)A[l[t].toField]=q[l[t].fromField];var z;for(z=k;z<p;z++){t=c[z];var s=AmCharts.extractPeriod(t),B=s.period,
E=s.count,v,r;if(z==k||D>=y[t]||!y[t]){w[t]={};w[t].amCategoryIdField=String(AmCharts.resetDateToMin(m,B,E,d).getTime());var C;for(C=0;C<x;C++)s=l[C].toField,v=w[t],r=Number(A[s]),v[s+"Count"]=0,v[s+"Sum"]=0,isNaN(r)||(v[s+"Open"]=r,v[s+"Sum"]=r,v[s+"High"]=r,v[s+"Low"]=r,v[s+"Close"]=r,v[s+"Count"]=1,v[s+"Average"]=r);v.dataContext=q;h[t].push(w[t]);z>k&&(s=AmCharts.newDate(m,b),s=AmCharts.changeDate(s,B,E,!0),s=AmCharts.resetDateToMin(s,B,E,d),y[t]=s.getTime());if(z==k)for(var F in q)q.hasOwnProperty(F)&&
(w[t][F]=q[F]);w[t][g]=AmCharts.newDate(m,b)}else for(B=0;B<x;B++)s=l[B].toField,v=w[t],n==u-1&&(v[g]=AmCharts.newDate(m,b)),r=Number(A[s]),isNaN(r)||(isNaN(v[s+"Low"])&&(v[s+"Low"]=r),r<v[s+"Low"]&&(v[s+"Low"]=r),isNaN(v[s+"High"])&&(v[s+"High"]=r),r>v[s+"High"]&&(v[s+"High"]=r),v[s+"Close"]=r,E=AmCharts.getDecimals(v[s+"Sum"]),C=AmCharts.getDecimals(r),v[s+"Sum"]+=r,v[s+"Sum"]=AmCharts.roundTo(v[s+"Sum"],Math.max(E,C)),v[s+"Count"]++,v[s+"Average"]=v[s+"Sum"]/v[s+"Count"])}}}a.agregatedDataProviders=
h};
AmCharts.parseEvents=function(a,b,c,d,e,h){var f=a.stockEvents,g=a.agregatedDataProviders,k=b.length,p,n,u,t,y,w,l,x;for(p=0;p<k;p++){w=b[p];y=w.graphs;u=y.length;var q;for(n=0;n<u;n++)t=y[n],t.customBulletField="amCustomBullet"+t.id+"_"+w.id,t.bulletConfigField="amCustomBulletConfig"+t.id+"_"+w.id;for(var m=0;m<f.length;m++)if(l=f[m],q=l.graph,AmCharts.isString(q)&&(q=AmCharts.getObjById(y,q)))l.graph=q}for(var D in g)if(g.hasOwnProperty(D)){q=g[D];var A=AmCharts.extractPeriod(D),z=q.length,s;for(s=
0;s<z;s++){var B=q[s];p=B[a.categoryField];x=p instanceof Date;h&&!x&&(p=AmCharts.stringToDate(p,h));var E=p.getTime();y=A.period;var m=A.count,v;v="fff"==y?p.getTime()+1:AmCharts.resetDateToMin(AmCharts.changeDate(new Date(p),A.period,A.count),y,m,d).getTime();for(p=0;p<k;p++)for(w=b[p],y=w.graphs,u=y.length,n=0;n<u;n++){t=y[n];var r={};r.eventDispatcher=e;r.eventObjects=[];r.letters=[];r.descriptions=[];r.shapes=[];r.backgroundColors=[];r.backgroundAlphas=[];r.borderColors=[];r.borderAlphas=[];
r.colors=[];r.rollOverColors=[];r.showOnAxis=[];r.values=[];r.showAts=[];for(m=0;m<f.length;m++){l=f[m];x=l.date instanceof Date;h&&!x&&(l.date=AmCharts.stringToDate(l.date,h));x=l.date.getTime();var C=!1;l.graph&&(l.graph.showEventsOnComparedGraphs&&l.graph.comparedGraphs[a.id]&&(C=!0),(t==l.graph||C)&&x>=E&&x<v&&(r.eventObjects.push(l),r.letters.push(l.text),r.descriptions.push(l.description),l.type?r.shapes.push(l.type):r.shapes.push(c.type),void 0!==l.backgroundColor?r.backgroundColors.push(l.backgroundColor):
r.backgroundColors.push(c.backgroundColor),isNaN(l.backgroundAlpha)?r.backgroundAlphas.push(c.backgroundAlpha):r.backgroundAlphas.push(l.backgroundAlpha),isNaN(l.borderAlpha)?r.borderAlphas.push(c.borderAlpha):r.borderAlphas.push(l.borderAlpha),void 0!==l.borderColor?r.borderColors.push(l.borderColor):r.borderColors.push(c.borderColor),void 0!==l.rollOverColor?r.rollOverColors.push(l.rollOverColor):r.rollOverColors.push(c.rollOverColor),void 0!==l.showAt?r.showAts.push(l.showAt):r.showAts.push(c.showAt),
r.colors.push(l.color),r.values.push(l.value),!l.panel&&l.graph&&(l.panel=l.graph.chart),r.showOnAxis.push(l.showOnAxis),r.date=new Date(l.date)));0<r.shapes.length&&(l="amCustomBullet"+t.id+"_"+w.id,x="amCustomBulletConfig"+t.id+"_"+w.id,B[l]=AmCharts.StackedBullet,B[x]=r)}}}}};AmCharts.StockLegend=AmCharts.Class({inherits:AmCharts.AmLegend,construct:function(a){AmCharts.StockLegend.base.construct.call(this,a);this.cname="StockLegend";this.valueTextComparing="[[percents.value]]%";this.valueTextRegular="[[value]]";AmCharts.applyTheme(this,a,this.cname)},drawLegend:function(){var a=this;AmCharts.StockLegend.base.drawLegend.call(a);var b=a.chart;if(b.allowTurningOff){var c=a.container,d=c.image(b.pathToImages+"xIcon.gif",b.realWidth-17,3,17,17),b=c.image(b.pathToImages+"xIconH.gif",
b.realWidth-17,3,17,17);b.hide();a.xButtonHover=b;d.mouseup(function(){a.handleXClick()}).mouseover(function(){a.handleXOver()});b.mouseup(function(){a.handleXClick()}).mouseout(function(){a.handleXOut()})}},handleXOver:function(){this.xButtonHover.show()},handleXOut:function(){this.xButtonHover.hide()},handleXClick:function(){var a=this.chart,b=a.stockChart;b.removePanel(a);b.validateNow()}});AmCharts.DataSetSelector=AmCharts.Class({construct:function(a){this.cname="DataSetSelector";this.theme=a;this.createEvents("dataSetSelected","dataSetCompared","dataSetUncompared");this.position="left";this.selectText="Select:";this.comboBoxSelectText="Select...";this.compareText="Compare to:";this.width=180;this.dataProvider=[];this.listHeight=150;this.listCheckBoxSize=14;this.rollOverBackgroundColor="#b2e1ff";this.selectedBackgroundColor="#7fceff";AmCharts.applyTheme(this,a,this.cname)},write:function(a){var b=
this,c,d=b.theme;a.className="amChartsDataSetSelector";var e=b.width;c=b.position;b.width=void 0;b.position=void 0;AmCharts.applyStyles(a.style,b);b.div=a;b.width=e;b.position=c;a.innerHTML="";var e=b.position,h;h="top"==e||"bottom"==e?!1:!0;b.vertical=h;var f;h&&(f=b.width+"px");var e=b.dataProvider,g,k;if(1<b.countDataSets("showInSelect")){c=document.createTextNode(AmCharts.lang.selectText||b.selectText);a.appendChild(c);h&&AmCharts.addBr(a);var p=document.createElement("select");f&&(p.style.width=
f);b.selectCB=p;d&&AmCharts.applyStyles(p.style,d.DataSetSelect);a.appendChild(p);AmCharts.isNN&&p.addEventListener("change",function(a){b.handleDataSetChange.call(b,a)},!0);AmCharts.isIE&&p.attachEvent("onchange",function(a){b.handleDataSetChange.call(b,a)});for(c=0;c<e.length;c++)if(g=e[c],!0===g.showInSelect){k=document.createElement("option");k.text=g.title;k.value=c;g==b.chart.mainDataSet&&(k.selected=!0);try{p.add(k,null)}catch(n){p.add(k)}}b.offsetHeight=p.offsetHeight}if(0<b.countDataSets("showInCompare")&&
1<e.length)if(h?(AmCharts.addBr(a),AmCharts.addBr(a)):(c=document.createTextNode(" "),a.appendChild(c)),c=document.createTextNode(AmCharts.lang.compareText||b.compareText),a.appendChild(c),k=b.listCheckBoxSize,h){AmCharts.addBr(a);f=document.createElement("div");a.appendChild(f);f.className="amChartsCompareList";d&&AmCharts.applyStyles(f.style,d.DataSetCompareList);f.style.overflow="auto";f.style.overflowX="hidden";f.style.width=b.width-2+"px";f.style.maxHeight=b.listHeight+"px";for(c=0;c<e.length;c++)g=
e[c],!0===g.showInCompare&&g!=b.chart.mainDataSet&&(d=document.createElement("div"),d.style.padding="4px",d.style.position="relative",d.name="amCBContainer",d.dataSet=g,d.style.height=k+"px",g.compared&&(d.style.backgroundColor=b.selectedBackgroundColor),f.appendChild(d),h=document.createElement("div"),h.style.width=k+"px",h.style.height=k+"px",h.style.position="absolute",h.style.backgroundColor=g.color,d.appendChild(h),h=document.createElement("div"),h.style.width="100%",h.style.position="absolute",
h.style.left=k+10+"px",d.appendChild(h),g=document.createTextNode(g.title),h.style.whiteSpace="nowrap",h.style.cursor="default",h.appendChild(g),b.addEventListeners(d));AmCharts.addBr(a);AmCharts.addBr(a)}else{d=document.createElement("select");b.compareCB=d;f&&(d.style.width=f);a.appendChild(d);AmCharts.isNN&&d.addEventListener("change",function(a){b.handleCBSelect.call(b,a)},!0);AmCharts.isIE&&d.attachEvent("onchange",function(a){b.handleCBSelect.call(b,a)});k=document.createElement("option");k.text=
AmCharts.lang.comboBoxSelectText||b.comboBoxSelectText;try{d.add(k,null)}catch(u){d.add(k)}for(c=0;c<e.length;c++)if(g=e[c],!0===g.showInCompare&&g!=b.chart.mainDataSet){k=document.createElement("option");k.text=g.title;k.value=c;g.compared&&(k.selected=!0);try{d.add(k,null)}catch(t){d.add(k)}}b.offsetHeight=d.offsetHeight}},addEventListeners:function(a){var b=this;AmCharts.isNN&&(a.addEventListener("mouseover",function(a){b.handleRollOver.call(b,a)},!0),a.addEventListener("mouseout",function(a){b.handleRollOut.call(b,
a)},!0),a.addEventListener("click",function(a){b.handleClick.call(b,a)},!0));AmCharts.isIE&&(a.attachEvent("onmouseout",function(a){b.handleRollOut.call(b,a)}),a.attachEvent("onmouseover",function(a){b.handleRollOver.call(b,a)}),a.attachEvent("onclick",function(a){b.handleClick.call(b,a)}))},handleDataSetChange:function(){var a=this.selectCB,a=this.dataProvider[a.options[a.selectedIndex].value],b=this.chart;b.mainDataSet=a;b.zoomOutOnDataSetChange&&(b.startDate=void 0,b.endDate=void 0);b.validateData();
a={type:"dataSetSelected",dataSet:a,chart:this.chart};this.fire(a.type,a)},handleRollOver:function(a){a=this.getRealDiv(a);a.dataSet.compared||(a.style.backgroundColor=this.rollOverBackgroundColor)},handleRollOut:function(a){a=this.getRealDiv(a);a.dataSet.compared||(a.style.removeProperty&&a.style.removeProperty("background-color"),a.style.removeAttribute&&a.style.removeAttribute("backgroundColor"))},handleCBSelect:function(a){var b=this.compareCB,c=this.dataProvider,d,e;for(d=0;d<c.length;d++)e=
c[d],e.compared&&(a={type:"dataSetUncompared",dataSet:e}),e.compared=!1;c=b.selectedIndex;0<c&&(e=this.dataProvider[b.options[c].value],e.compared||(a={type:"dataSetCompared",dataSet:e}),e.compared=!0);b=this.chart;b.validateData();a.chart=b;this.fire(a.type,a)},handleClick:function(a){a=this.getRealDiv(a).dataSet;!0===a.compared?(a.compared=!1,a={type:"dataSetUncompared",dataSet:a}):(a.compared=!0,a={type:"dataSetCompared",dataSet:a});var b=this.chart;b.validateData();a.chart=b;this.fire(a.type,
a)},getRealDiv:function(a){a||(a=window.event);a=a.currentTarget?a.currentTarget:a.srcElement;"amCBContainer"==a.parentNode.name&&(a=a.parentNode);return a},countDataSets:function(a){var b=this.dataProvider,c=0,d;for(d=0;d<b.length;d++)!0===b[d][a]&&c++;return c}});AmCharts.StackedBullet=AmCharts.Class({construct:function(){this.fontSize=11;this.stackDown=!1;this.mastHeight=8;this.shapes=[];this.backgroundColors=[];this.backgroundAlphas=[];this.borderAlphas=[];this.borderColors=[];this.colors=[];this.rollOverColors=[];this.showOnAxiss=[];this.values=[];this.showAts=[];this.textColor="#000000";this.nextY=0;this.size=16},parseConfig:function(){var a=this.bulletConfig;this.eventObjects=a.eventObjects;this.letters=a.letters;this.shapes=a.shapes;this.backgroundColors=
a.backgroundColors;this.backgroundAlphas=a.backgroundAlphas;this.borderColors=a.borderColors;this.borderAlphas=a.borderAlphas;this.colors=a.colors;this.rollOverColors=a.rollOverColors;this.date=a.date;this.showOnAxiss=a.showOnAxis;this.axisCoordinate=a.minCoord;this.showAts=a.showAts;this.values=a.values},write:function(a){this.parseConfig();this.container=a;this.bullets=[];if(this.graph){var b=this.graph.fontSize;b&&(this.fontSize=b)}b=this.letters.length;(this.mastHeight+2*(this.fontSize/2+2))*
b>this.availableSpace&&(this.stackDown=!0);this.set=a.set();a=0;var c;for(c=0;c<b;c++)this.shape=this.shapes[c],this.backgroundColor=this.backgroundColors[c],this.backgroundAlpha=this.backgroundAlphas[c],this.borderAlpha=this.borderAlphas[c],this.borderColor=this.borderColors[c],this.rollOverColor=this.rollOverColors[c],this.showOnAxis=this.showOnAxiss[c],this.color=this.colors[c],this.value=this.values[c],this.showAt=this.showAts[c],this.addLetter(this.letters[c],a,c),this.showOnAxis||a++},addLetter:function(a,
b,c){var d=this.container;b=d.set();var e=-1,h=this.stackDown,f=this.graph.valueAxis;this.showOnAxis&&(this.stackDown=f.reversed?!0:!1);this.stackDown&&(e=1);var g=0,k=0,p=0,n,u=this.fontSize,t=this.mastHeight,y=this.shape,w=this.textColor;void 0!==this.color&&(w=this.color);void 0===a&&(a="");a=AmCharts.text(d,a,w,this.chart.fontFamily,this.fontSize);a.node.style.pointerEvents="none";d=a.getBBox();this.labelWidth=w=d.width;this.labelHeight=d.height;var l,d=0;switch(y){case "sign":l=this.drawSign(b);
g=t+4+u/2;d=t+u+4;1==e&&(g-=4);break;case "flag":l=this.drawFlag(b);k=w/2+3;g=t+4+u/2;d=t+u+4;1==e&&(g-=4);break;case "pin":l=this.drawPin(b);g=6+u/2;d=u+8;break;case "triangleUp":l=this.drawTriangleUp(b);g=-u-1;d=u+4;e=-1;break;case "triangleDown":l=this.drawTriangleDown(b);g=u+1;d=u+4;e=-1;break;case "triangleLeft":l=this.drawTriangleLeft(b);k=u;d=u+4;e=-1;break;case "triangleRight":l=this.drawTriangleRight(b);k=-u;e=-1;d=u+4;break;case "arrowUp":l=this.drawArrowUp(b);a.hide();break;case "arrowDown":l=
this.drawArrowDown(b);a.hide();d=u+4;break;case "text":e=-1;l=this.drawTextBackground(b,a);g=this.labelHeight+3;d=u+10;break;case "round":l=this.drawCircle(b)}this.bullets[c]=l;this.showOnAxis?(n=isNaN(this.nextAxisY)?this.axisCoordinate:this.nextY,p=g*e,this.nextAxisY=n+e*d):this.value?(n=this.value,f.recalculateToPercents&&(n=n/f.recBaseValue*100-100),n=f.getCoordinate(n)-this.bulletY,p=g*e):this.showAt?(l=this.graphDataItem.values,f.recalculateToPercents&&(l=this.graphDataItem.percents),l&&(n=
f.getCoordinate(l[this.showAt])-this.bulletY,p=g*e)):(n=this.nextY,p=g*e);a.translate(k,p);b.push(a);b.translate(0,n);this.addEventListeners(b,c);this.nextY=n+e*d;this.stackDown=h},addEventListeners:function(a,b){var c=this;a.click(function(){c.handleClick(b)}).mouseover(function(){c.handleMouseOver(b)}).touchend(function(){c.handleMouseOver(b,!0)}).mouseout(function(){c.handleMouseOut(b)})},drawPin:function(a){var b=-1;this.stackDown&&(b=1);var c=this.fontSize+4;return this.drawRealPolygon(a,[0,
c/2,c/2,-c/2,-c/2,0],[0,b*c/4,b*(c+c/4),b*(c+c/4),b*c/4,0])},drawSign:function(a){var b=-1;this.stackDown&&(b=1);var c=this.mastHeight*b,d=this.fontSize/2+2,e=AmCharts.line(this.container,[0,0],[0,c],this.borderColor,this.borderAlpha,1),h=AmCharts.circle(this.container,d,this.backgroundColor,this.backgroundAlpha,1,this.borderColor,this.borderAlpha);h.translate(0,c+d*b);a.push(e);a.push(h);this.set.push(a);return h},drawFlag:function(a){var b=-1;this.stackDown&&(b=1);var c=this.fontSize+4,d=this.labelWidth+
6,e=this.mastHeight,b=1==b?b*e:b*e-c,e=AmCharts.line(this.container,[0,0],[0,b],this.borderColor,this.borderAlpha,1),c=AmCharts.polygon(this.container,[0,d,d,0],[0,0,c,c],this.backgroundColor,this.backgroundAlpha,1,this.borderColor,this.borderAlpha);c.translate(0,b);a.push(e);a.push(c);this.set.push(a);return c},drawTriangleUp:function(a){var b=this.fontSize+7;return this.drawRealPolygon(a,[0,b/2,-b/2,0],[0,b,b,0])},drawArrowUp:function(a){var b=this.size,c=b/2,d=b/4;return this.drawRealPolygon(a,
[0,c,d,d,-d,-d,-c,0],[0,c,c,b,b,c,c,0])},drawArrowDown:function(a){var b=this.size,c=b/2,d=b/4;return this.drawRealPolygon(a,[0,c,d,d,-d,-d,-c,0],[0,-c,-c,-b,-b,-c,-c,0])},drawTriangleDown:function(a){var b=this.fontSize+7;return this.drawRealPolygon(a,[0,b/2,-b/2,0],[0,-b,-b,0])},drawTriangleLeft:function(a){var b=this.fontSize+7;return this.drawRealPolygon(a,[0,b,b,0],[0,-b/2,b/2])},drawTriangleRight:function(a){var b=this.fontSize+7;return this.drawRealPolygon(a,[0,-b,-b,0],[0,-b/2,b/2,0])},drawRealPolygon:function(a,
b,c){b=AmCharts.polygon(this.container,b,c,this.backgroundColor,this.backgroundAlpha,1,this.borderColor,this.borderAlpha);a.push(b);this.set.push(a);return b},drawCircle:function(a){shape=AmCharts.circle(this.container,this.fontSize/2,this.backgroundColor,this.backgroundAlpha,1,this.borderColor,this.borderAlpha);a.push(shape);this.set.push(a);return shape},drawTextBackground:function(a,b){var c=b.getBBox(),d=-c.width/2-5,e=c.width/2+5,c=-c.height-12;return this.drawRealPolygon(a,[d,-5,0,5,e,e,d,d],
[-5,-5,0,-5,-5,c,c,-5])},handleMouseOver:function(a,b){b||this.bullets[a].attr({fill:this.rollOverColors[a]});var c=this.eventObjects[a],d={type:"rollOverStockEvent",eventObject:c,graph:this.graph,date:this.date},e=this.bulletConfig.eventDispatcher;d.chart=e;e.fire(d.type,d);c.url&&this.bullets[a].setAttr("cursor","pointer");this.chart.showBalloon(AmCharts.fixNewLines(c.description),e.stockEventsSettings.balloonColor,!0)},handleClick:function(a){a=this.eventObjects[a];var b={type:"clickStockEvent",
eventObject:a,graph:this.graph,date:this.date},c=this.bulletConfig.eventDispatcher;b.chart=c;c.fire(b.type,b);b=a.urlTarget;b||(b=c.stockEventsSettings.urlTarget);AmCharts.getURL(a.url,b)},handleMouseOut:function(a){this.bullets[a].attr({fill:this.backgroundColors[a]});a={type:"rollOutStockEvent",eventObject:this.eventObjects[a],graph:this.graph,date:this.date};var b=this.bulletConfig.eventDispatcher;a.chart=b;b.fire(a.type,a)}});
AmCharts.themes.light = {

	themeName:"light",

	AmChart: {
		color: "#000000", 
		backgroundColor: "#FFFFFF"
	},

	AmCoordinateChart: {
		colors: ["#67b7dc", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#b9783f", "#b93e3d", "#913167"]
	},

	AmStockChart: {
		colors: ["#67b7dc", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#b9783f", "#b93e3d", "#913167"]
	},

	AmSlicedChart: {
		colors: ["#67b7dc", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#b9783f", "#b93e3d", "#913167"],
		outlineAlpha: 1,
		outlineThickness: 2,
		labelTickColor: "#000000",
		labelTickAlpha: 0.3
	},

	AmRectangularChart: {
		zoomOutButtonColor: '#000000',
		zoomOutButtonRollOverAlpha: 0.15,
		zoomOutButtonImage: "lens.png"
	},

	AxisBase: {
		axisColor: "#000000",
		axisAlpha: 0.3,
		gridAlpha: 0.1,
		gridColor: "#000000"
	},

	ChartScrollbar: {
		backgroundColor: "#000000",
		backgroundAlpha: 0.12,
		graphFillAlpha: 0.5,
		graphLineAlpha: 0,
		selectedBackgroundColor: "#FFFFFF",
		selectedBackgroundAlpha: 0.4,
		gridAlpha: 0.15
	},

	ChartCursor: {
		cursorColor: "#000000",
		color: "#FFFFFF",
		cursorAlpha: 0.5
	},

	AmLegend: {
		color: "#000000"
	},

	AmGraph: {
		lineAlpha: 0.9
	},
	GaugeArrow: {
		color: "#000000",
		alpha: 0.8,
		nailAlpha: 0,
		innerRadius: "40%",
		nailRadius: 15,
		startWidth: 15,
		borderAlpha: 0.8,
		nailBorderAlpha: 0
	},

	GaugeAxis: {
		tickColor: "#000000",
		tickAlpha: 1,
		tickLength: 15,
		minorTickLength: 8,
		axisThickness: 3,
		axisColor: '#000000',
		axisAlpha: 1,
		bandAlpha: 0.8
	},

	TrendLine: {
		lineColor: "#c03246",
		lineAlpha: 0.8
	},

	// ammap
	AreasSettings: {
		alpha: 0.8,
		color: "#67b7dc",
		colorSolid: "#003767",
		unlistedAreasAlpha: 0.4,
		unlistedAreasColor: "#000000",
		outlineColor: "#FFFFFF",
		outlineAlpha: 0.5,
		outlineThickness: 0.5,
		rollOverColor: "#3c5bdc",
		rollOverOutlineColor: "#FFFFFF",
		selectedOutlineColor: "#FFFFFF",
		selectedColor: "#f15135",
		unlistedAreasOutlineColor: "#FFFFFF",
		unlistedAreasOutlineAlpha: 0.5
	},

	LinesSettings: {
		color: "#000000",
		alpha: 0.8
	},

	ImagesSettings: {
		alpha: 0.8,
		labelColor: "#000000",
		color: "#000000",
		labelRollOverColor: "#3c5bdc"
	},

	ZoomControl: {
		buttonRollOverColor: "#3c5bdc",
		buttonFillColor: "#3994e2",
		buttonBorderColor: "#3994e2",
		buttonFillAlpha: 0.8,
		gridBackgroundColor: "#FFFFFF",
		buttonBorderAlpha:0,
		buttonCornerRadius:2,
		gridColor:"#FFFFFF",
		gridBackgroundColor:"#000000",
		buttonIconAlpha:0.6,
		gridAlpha: 0.6,
		buttonSize:20
	},

	SmallMap: {
		mapColor: "#000000",
		rectangleColor: "#f15135",
		backgroundColor: "#FFFFFF",
		backgroundAlpha: 0.7,
		borderThickness: 1,
		borderAlpha: 0.8
	},

	// the defaults below are set using CSS syntax, you can use any existing css property
	// if you don't use Stock chart, you can delete lines below
	PeriodSelector: {
		color: "#000000"
	},

	PeriodButton: {
		color: "#000000",
		background: "transparent",
		opacity: 0.7,
		border: "1px solid rgba(0, 0, 0, .3)",
		MozBorderRadius: "5px",
		borderRadius: "5px",
		margin: "1px",
		outline: "none",
		boxSizing: "border-box"
	},

	PeriodButtonSelected: {
		color: "#000000",
		backgroundColor: "#b9cdf5",
		border: "1px solid rgba(0, 0, 0, .3)",
		MozBorderRadius: "5px",
		borderRadius: "5px",
		margin: "1px",
		outline: "none",
		opacity: 1,
		boxSizing: "border-box"
	},

	PeriodInputField: {
		color: "#000000",
		background: "transparent",
		border: "1px solid rgba(0, 0, 0, .3)",
		outline: "none"
	},

	DataSetSelector: {

		color: "#000000",
		selectedBackgroundColor: "#b9cdf5",
		rollOverBackgroundColor: "#a8b0e4"
	},

	DataSetCompareList: {
		color: "#000000",
		lineHeight: "100%",
		boxSizing: "initial",
		webkitBoxSizing: "initial",
		border: "1px solid rgba(0, 0, 0, .3)"
	},

	DataSetSelect: {
		border: "1px solid rgba(0, 0, 0, .3)",
		outline: "none"
	}

};
function RGBColor(a){this.ok=!1,"#"==a.charAt(0)&&(a=a.substr(1,6)),a=a.replace(/ /g,""),a=a.toLowerCase();var b={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(var c in b)a==c&&(a=b[c]);for(var d=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(a){return[parseInt(a[1]),parseInt(a[2]),parseInt(a[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}}],e=0;e<d.length;e++){var f=d[e].re,g=d[e].process,h=f.exec(a);h&&(channels=g(h),this.r=channels[0],this.g=channels[1],this.b=channels[2],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toHex=function(){var a=this.r.toString(16),b=this.g.toString(16),c=this.b.toString(16);return 1==a.length&&(a="0"+a),1==b.length&&(b="0"+b),1==c.length&&(c="0"+c),"#"+a+b+c},this.getHelpXML=function(){for(var a=new Array,c=0;c<d.length;c++)for(var e=d[c].example,f=0;f<e.length;f++)a[a.length]=e[f];for(var g in b)a[a.length]=g;var h=document.createElement("ul");h.setAttribute("id","rgbcolor-examples");for(var c=0;c<a.length;c++)try{var i=document.createElement("li"),j=new RGBColor(a[c]),k=document.createElement("div");k.style.cssText="margin: 3px; border: 1px solid black; background:"+j.toHex()+"; "+"color:"+j.toHex(),k.appendChild(document.createTextNode("test"));var l=document.createTextNode(" "+a[c]+" -> "+j.toRGB()+" -> "+j.toHex());i.appendChild(k),i.appendChild(l),h.appendChild(i)}catch(m){}return h}}if(AmCharts.AmExport=AmCharts.Class({construct:function(a,b,c){var d=this;d.DEBUG=!1,d.chart=a,d.canvas=null,d.svgs=[],d.userCFG=b,d.buttonIcon="export.png",d.exportPNG=!0,d.exportPDF=!1,d.exportJPG=!1,d.exportSVG=!1,d.right=0,d.top=0,d.buttonRollOverColor="#EFEFEF",d.textRollOverColor="#CC0000",d.buttonTitle="Save chart as an image",d.buttonAlpha=.75,d.imageFileName="amChart",d.imageBackgroundColor="#FFFFFF",c&&d.init()},toCoordinate:function(a){return void 0===a?"auto":-1!=String(a).indexOf("%")?a:a+"px"},init:function(){var a=this,b=[];a.exportPNG&&b.push("png"),a.exportPDF&&b.push("pdf"),a.exportJPG&&b.push("jpg"),a.exportSVG&&b.push("svg");var c=[];if(1==b.length){var d=b[0];c.push({format:d,iconTitle:a.buttonTitle,icon:a.chart.pathToImages+a.buttonIcon})}else if(b.length>1){for(var e=[],f=0;f<b.length;f++)e.push({format:b[f],title:b[f].toUpperCase()});c.push({onclick:function(){},icon:a.chart.pathToImages+a.buttonIcon,items:e})}var g=a.color;void 0===g&&(g=a.chart.color);var h=a.buttonColor;void 0===h&&(h="transparent"),a.cfg={menuTop:a.toCoordinate(a.top),menuLeft:a.toCoordinate(a.left),menuRight:a.toCoordinate(a.right),menuBottom:a.toCoordinate(a.bottom),menuItems:c,menuItemStyle:{backgroundColor:h,opacity:a.buttonAlpha,rollOverBackgroundColor:a.buttonRollOverColor,color:g,rollOverColor:a.textRollOverColor,paddingTop:"6px",paddingRight:"6px",paddingBottom:"6px",paddingLeft:"6px",marginTop:"0px",marginRight:"0px",marginBottom:"0px",marginLeft:"0px",textAlign:"left",textDecoration:"none",fontFamily:a.chart.fontFamily,fontSize:a.chart.fontSize+"px"},menuItemOutput:{backgroundColor:a.imageBackgroundColor,fileName:a.imageFileName,format:"png",output:"dataurlnewwindow",render:"browser",dpi:90,onclick:function(a,b,c){c.preventDefault(),a.output(b)}},removeImagery:!0},a.processing={buffer:[],drawn:0,timer:0},"undefined"!=typeof window.canvg&&"undefined"!=typeof window.RGBColor&&(a.cfg.menuItemOutput.render="canvg"),"undefined"!=typeof window.saveAs&&(a.cfg.menuItemOutput.output="save"),AmCharts.isIE&&AmCharts.IEversion<10&&(a.cfg.menuItemOutput.output="dataurlnewwindow");var i=a.userCFG;i&&(i.menuItemOutput=AmCharts.extend(a.cfg.menuItemOutput,i.menuItemOutput||{}),i.menuItemStyle=AmCharts.extend(a.cfg.menuItemStyle,i.menuItemStyle||{}),a.cfg=AmCharts.extend(a.cfg,i)),a.chart.AmExport=a,a.chart.addListener("rendered",function(){a.setup()}),a.DEBUG&&(window.AmExport=a)},log:function(){console.log("AmExport: ",arguments)},setup:function(){var a=this;10==a.DEBUG&&a.log("SETUP START"),!AmCharts.isIE||AmCharts.isIE&&AmCharts.IEversion>9?(a.generateButtons(),10==a.DEBUG&&a.log("SETUP END")):10==a.DEBUG&&a.log("< IE10 NOT SUPPORTED")},generateBinaryArray:function(a){for(var i,j,k,b=a.length,c=new Uint8Array(0|3*(b/4)),d=0,e=0,f=[0,0],g=0,h=0,l=new Uint8Array([62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,0,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);b--;)j=a.charCodeAt(d++),i=l[j-43],255!==i&&i!==k&&(f[1]=f[0],f[0]=j,h=h<<6|i,g++,4===g&&(c[e++]=h>>>16,61!==f[1]&&(c[e++]=h>>>8),61!==f[0]&&(c[e++]=h),g=0));return c},generateBlob:function(a,b){var c=this,d="image/svg+xml"!=b?a.indexOf(",")+1:0,e=a.substring(0,d),f=a,g=new Blob;return-1!=e.indexOf("base64")&&(f=c.generateBinaryArray(a.substring(d))),AmCharts.isIE&&AmCharts.IEversion<10?(g.data=f,g.size=f.length,g.type=b,g.encoding="base64"):g=new Blob([f],{type:b}),g},generatePDF:function(a){var b=this,c={output:function(){return""}},d=b.canvas.toDataURL("image/jpeg"),e=25.4*b.canvas.width/a.dpi,f=25.4*b.canvas.height/a.dpi;return window.jsPDF?(c=new jsPDF,c.addImage?c.addImage(d,"JPEG",0,0,e,f):alert("Missing jsPDF plugin; Please add the 'addImage' plugin.")):alert("Missing jsPDF lib; Don't forget to add the addImage plugin."),c},output:function(a,b){function d(){var e,d=null;10==c.DEBUG&&c.log("OUTPUT",a.format),"image/svg+xml"==a.format||"svg"==a.format?(d=c.generateSVG(),e=c.generateBlob(d,"image/svg+xml"),"save"==a.output?saveAs(e,a.fileName+".svg"):"datastring"==a.output||"datauristring"==a.output||"dataurlstring"==a.output?e="data:image/svg+xml;base64,"+btoa(d):"dataurlnewwindow"==a.output?window.open("data:image/svg+xml;base64,"+btoa(d)):"datauri"==a.output||"dataurl"==a.output?location.href="data:image/svg+xml;base64,"+btoa(d):"datastream"==a.output&&(location.href="data:image/octet-stream;base64,"+d),b&&b.apply(c,[e])):"application/pdf"==a.format||"pdf"==a.format?(d=c.generatePDF(a).output("dataurlstring"),e=c.generateBlob(d,"application/pdf"),"save"==a.output?saveAs(e,a.fileName+".pdf"):"datastring"==a.output||"datauristring"==a.output||"dataurlstring"==a.output?e=d:"dataurlnewwindow"==a.output?window.open(d):"datauri"==a.output||"dataurl"==a.output?location.href=d:"datastream"==a.output&&(location.href=d.replace("application/pdf","application/octet-stream")),b&&b.apply(c,[e])):"image/png"==a.format||"png"==a.format?(d=c.canvas.toDataURL("image/png"),e=c.generateBlob(d,"image/png"),"save"==a.output?saveAs(e,a.fileName+".png"):"datastring"==a.output||"datauristring"==a.output||"dataurlstring"==a.output?e=d:"dataurlnewwindow"==a.output?window.open(d):"datauri"==a.output||"dataurl"==a.output?location.href=d:"datastream"==a.output&&(location.href=d.replace("image/png","image/octet-stream")),b&&b.apply(c,[e])):("image/jpeg"==a.format||"jpeg"==a.format||"jpg"==a.format)&&(d=c.canvas.toDataURL("image/jpeg"),e=c.generateBlob(d,"image/jpeg"),"save"==a.output?saveAs(e,a.fileName+".jpg"):"datastring"==a.output||"datauristring"==a.output||"dataurlstring"==a.output?e=d:"dataurlnewwindow"==a.output?window.open(d):"datauri"==a.output||"dataurl"==a.output?location.href=d:"datastream"==a.output&&(location.href=d.replace("image/jpeg","image/octet-stream")),b&&b.apply(c,[e]))}var c=this;return a=AmCharts.extend(AmCharts.extend({},c.cfg.menuItemOutput),a||{}),c.chart.prepareForExport&&c.chart.prepareForExport(),c.generateOutput(a,d)},polifySVG:function(a){function c(a,c){for(var d=a.getElementsByTagName(c),e=d.length;e--;){if(b.cfg.removeImagery)d[e].parentNode.removeChild(d[e]);else{var f=document.createElement("img"),g=document.createElement("canvas"),h=g.getContext("2d");g.width=d[e].getAttribute("width"),g.height=d[e].getAttribute("height"),f.src=d[e].getAttribute("xlink:href"),f.width=d[e].getAttribute("width"),f.height=d[e].getAttribute("height");try{h.drawImage(f,0,0,f.width,f.height),datastring=g.toDataURL()}catch(i){throw datastring=f.src,b.log("Tainted canvas, reached browser CORS security; origin from imagery must be equal to the server!"),new Error(i)}d[e].setAttribute("xlink:href",datastring)}10==b.DEBUG&&b.log("POLIFIED",d[e])}}var b=this;return 0==AmCharts.IEversion&&(a.setAttribute("xmlns","http://www.w3.org/2000/svg"),b.cfg.removeImagery||a.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink")),10==b.DEBUG&&b.log("POLIFIED",a),c(a,"pattern"),c(a,"image"),b.svgs.push(a),a},generateSVG:function(){var a=this,b=document.createElement("svg");b.setAttribute("xmlns","http://www.w3.org/2000/svg"),b.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink");for(var c=0;c<a.processing.buffer.length;c++){var d=document.createElement("g"),e=a.processing.buffer[c];e[0].setAttribute("xmlns","http://www.w3.org/2000/svg"),e[0].setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),d.setAttribute("transform","translate("+e[1].x+","+e[1].y+")"),d.appendChild(e[0]),b.appendChild(d)}return(new XMLSerializer).serializeToString(b)},generateOutput:function(a,b){function o(){var d,g,h,i;return c.processing.buffer.length==c.processing.drawn||"svg"==a.format?(10==c.DEBUG&&c.log("END DRAWING"),b()):(10==c.DEBUG&&c.log("DRAW",c.processing.drawn+1,"OF",c.processing.buffer.length),g=c.processing.buffer[c.processing.drawn],i=(new XMLSerializer).serializeToString(g[0]),h=g[1],10==c.DEBUG&&c.log("SOURCE",i),"browser"==a.render?(d=new Image,d.id=AmCharts.getUniqueId(),i="data:image/svg+xml;base64,"+btoa(i),d.onload=function(){f.drawImage(this,g[1].x,g[1].y),c.processing.drawn++,10==c.DEBUG&&c.log("ONLOAD",this),o()},d.onerror=function(){10==c.DEBUG&&c.log("ONERROR",this),f.drawImage(this,g[1].x,g[1].y),c.processing.drawn++,o()},d.src=i,10==c.DEBUG&&c.log("ADD",d),(d.complete||"undefined"==typeof d.complete||void 0===d.complete)&&(10==c.DEBUG&&c.log("FORCE ONLOAD",d),d.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",d.src=i)):"canvg"==a.render&&canvg(e,i,{offsetX:h.x,offsetY:h.y,ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0,ignoreClear:!0,renderCallback:function(){c.processing.drawn++,o()}}),void 0)}var c=this,d=c.chart.div.getElementsByTagName("svg"),e=document.createElement("canvas"),f=e.getContext("2d"),g={y:0,x:0},h={};c.processing.buffer=[],c.processing.drawn=0,c.canvas=e,c.svgs=[],10==c.DEBUG&&c.log("START EXPORT"),10==c.DEBUG&&c.log("START BUFFERING");for(var i=0;i<d.length;i++){var j=d[i].parentNode,k=Number(j.style.left.slice(0,-2)),l=Number(j.style.top.slice(0,-2)),m=c.polifySVG(d[i].cloneNode(!0)),h=AmCharts.extend({},g);"relative"==j.style.position?(g.x=k?k:g.x,g.y=l?l:g.y):(g.x=k,g.y=l),c.processing.buffer.push([m,AmCharts.extend({},g)]),l&&k?g=h:g.y+=l?0:j.offsetHeight,10==c.DEBUG&&c.log("BUFFERED",d[i],g)}10==c.DEBUG&&c.log("END BUFFERING"),10==c.DEBUG&&c.log("START DRAWING",a.render),10==c.DEBUG&&c.log("FILL BACKGROUND"),e.id=AmCharts.getUniqueId(),e.width=c.chart.divRealWidth,e.height=c.chart.divRealHeight;var n={width:!1,height:!1};return c.chart.periodSelector&&(-1!=["left","right"].indexOf(c.chart.periodSelector.position)?(e.width-=c.chart.periodSelector.div.offsetWidth+16,n.width=!0):(e.height-=c.chart.periodSelector.div.offsetHeight,n.height=!0)),c.chart.dataSetSelector&&(-1!=["left","right"].indexOf(c.chart.dataSetSelector.position)?n.width||(e.width-=c.chart.dataSetSelector.div.offsetWidth+16):e.height-=c.chart.dataSetSelector.div.offsetHeight),(a.backgroundColor||"image/jpeg"==a.format)&&(f.fillStyle=a.backgroundColor||"#FFFFFF",f.fillRect(0,0,e.width,e.height)),o()},generateButtons:function(){function d(b){var e=document.createElement("ul");e.setAttribute("style","list-style: none; margin: 0; padding: 0;");for(var f=0;f<b.length;f++){var g=document.createElement("li"),h=document.createElement("img"),i=document.createElement("a"),j=b[f],k=null,l=AmCharts.extend(AmCharts.extend({},a.cfg.menuItemStyle),b[f]);j=AmCharts.extend(AmCharts.extend({},a.cfg.menuItemOutput),j),j.icon&&(h.alt="",h.src=j.icon,h.setAttribute("style","margin: 0 auto;border: none;outline: none"),j.iconTitle&&(h.title=j.iconTitle),i.appendChild(h)),i.href="#",j.title&&(h.setAttribute("style","margin-right: 5px;"),i.innerHTML+=j.title),i.setAttribute("style","display: block;"),AmCharts.extend(i.style,l),i.onclick=j.onclick.bind(i,a,j),g.appendChild(i),j.items&&(k=d(j.items),g.appendChild(k),g.onmouseover=function(){k.style.display="block"},g.onmouseout=function(){k.style.display="none"},k.style.display="none"),e.appendChild(g),i.onmouseover=function(){this.style.backgroundColor=l.rollOverBackgroundColor,this.style.color=l.rollOverColor,this.style.borderColor=l.rollOverBorderColor},i.onmouseout=function(){this.style.backgroundColor=l.backgroundColor,this.style.color=l.color,this.style.borderColor=l.borderColor}}return c++,10==a.DEBUG&&a.log("MENU",e),e}var a=this,b=document.createElement("div"),c=0;b.setAttribute("style","width:39px; height:28px; position: absolute;top:"+a.cfg.menuTop+";right:"+a.cfg.menuRight+";bottom:"+a.cfg.menuBottom+";left:"+a.cfg.menuLeft+";box-shadow:0px 0px 1px 0px rgba(0,0,0,0);"),b.setAttribute("class","amExportButton"),b.appendChild(d(a.cfg.menuItems)),a.chart.containerDiv.appendChild(b)}}),function(){function a(){var a={};return a.FRAMERATE=30,a.MAX_VIRTUAL_PIXELS=3e4,a.init=function(b){var c=0;a.UniqueId=function(){return c++,"canvg"+c},a.Definitions={},a.Styles={},a.Animations=[],a.Images=[],a.ctx=b,a.ViewPort=new function(){this.viewPorts=[],this.Clear=function(){this.viewPorts=[]},this.SetCurrent=function(a,b){this.viewPorts.push({width:a,height:b})},this.RemoveCurrent=function(){this.viewPorts.pop()},this.Current=function(){return this.viewPorts[this.viewPorts.length-1]},this.width=function(){return this.Current().width},this.height=function(){return this.Current().height},this.ComputeSize=function(a){return null!=a&&"number"==typeof a?a:"x"==a?this.width():"y"==a?this.height():Math.sqrt(Math.pow(this.width(),2)+Math.pow(this.height(),2))/Math.sqrt(2)}}},a.init(),a.ImagesLoaded=function(){for(var b=0;b<a.Images.length;b++)if(!a.Images[b].loaded)return!1;return!0},a.trim=function(a){return a.replace(/^\s+|\s+$/g,"")},a.compressSpaces=function(a){return a.replace(/[\s\r\t\n]+/gm," ")},a.ajax=function(a){var b;return b=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),b?(b.open("GET",a,!1),b.send(null),b.responseText):null},a.parseXml=function(a){if(window.DOMParser){var b=new DOMParser;return b.parseFromString(a,"text/xml")}a=a.replace(/<!DOCTYPE svg[^>]*>/,"");var c=new ActiveXObject("Microsoft.XMLDOM");return c.async="false",c.loadXML(a),c},a.Property=function(a,b){this.name=a,this.value=b},a.Property.prototype.getValue=function(){return this.value},a.Property.prototype.hasValue=function(){return null!=this.value&&""!==this.value},a.Property.prototype.numValue=function(){if(!this.hasValue())return 0;var a=parseFloat(this.value);return(this.value+"").match(/%$/)&&(a/=100),a},a.Property.prototype.valueOrDefault=function(a){return this.hasValue()?this.value:a},a.Property.prototype.numValueOrDefault=function(a){return this.hasValue()?this.numValue():a},a.Property.prototype.addOpacity=function(b){var c=this.value;if(null!=b&&""!=b&&"string"==typeof this.value){var d=new RGBColor(this.value);d.ok&&(c="rgba("+d.r+", "+d.g+", "+d.b+", "+b+")")}return new a.Property(this.name,c)},a.Property.prototype.getDefinition=function(){var b=this.value.match(/#([^\)'"]+)/);return b&&(b=b[1]),b||(b=this.value),a.Definitions[b]},a.Property.prototype.isUrlDefinition=function(){return 0==this.value.indexOf("url(")},a.Property.prototype.getFillStyleDefinition=function(b,c){var d=this.getDefinition();if(null!=d&&d.createGradient)return d.createGradient(a.ctx,b,c);if(null!=d&&d.createPattern){if(d.getHrefAttribute().hasValue()){var e=d.attribute("patternTransform");d=d.getHrefAttribute().getDefinition(),e.hasValue()&&(d.attribute("patternTransform",!0).value=e.value)}return d.createPattern(a.ctx,b)}return null},a.Property.prototype.getDPI=function(){return 96},a.Property.prototype.getEM=function(b){var c=12,d=new a.Property("fontSize",a.Font.Parse(a.ctx.font).fontSize);return d.hasValue()&&(c=d.toPixels(b)),c},a.Property.prototype.getUnits=function(){var a=this.value+"";return a.replace(/[0-9\.\-]/g,"")},a.Property.prototype.toPixels=function(b,c){if(!this.hasValue())return 0;var d=this.value+"";if(d.match(/em$/))return this.numValue()*this.getEM(b);if(d.match(/ex$/))return this.numValue()*this.getEM(b)/2;if(d.match(/px$/))return this.numValue();if(d.match(/pt$/))return this.numValue()*this.getDPI(b)*(1/72);if(d.match(/pc$/))return 15*this.numValue();if(d.match(/cm$/))return this.numValue()*this.getDPI(b)/2.54;if(d.match(/mm$/))return this.numValue()*this.getDPI(b)/25.4;if(d.match(/in$/))return this.numValue()*this.getDPI(b);if(d.match(/%$/))return this.numValue()*a.ViewPort.ComputeSize(b);var e=this.numValue();return c&&1>e?e*a.ViewPort.ComputeSize(b):e},a.Property.prototype.toMilliseconds=function(){if(!this.hasValue())return 0;var a=this.value+"";return a.match(/s$/)?1e3*this.numValue():a.match(/ms$/)?this.numValue():this.numValue()},a.Property.prototype.toRadians=function(){if(!this.hasValue())return 0;var a=this.value+"";return a.match(/deg$/)?this.numValue()*(Math.PI/180):a.match(/grad$/)?this.numValue()*(Math.PI/200):a.match(/rad$/)?this.numValue():this.numValue()*(Math.PI/180)},a.Font=new function(){this.Styles="normal|italic|oblique|inherit",this.Variants="normal|small-caps|inherit",this.Weights="normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit",this.CreateFont=function(b,c,d,e,f,g){var h=null!=g?this.Parse(g):this.CreateFont("","","","","",a.ctx.font);return{fontFamily:f||h.fontFamily,fontSize:e||h.fontSize,fontStyle:b||h.fontStyle,fontWeight:d||h.fontWeight,fontVariant:c||h.fontVariant,toString:function(){return[this.fontStyle,this.fontVariant,this.fontWeight,this.fontSize,this.fontFamily].join(" ")}}};var b=this;this.Parse=function(c){for(var d={},e=a.trim(a.compressSpaces(c||"")).split(" "),f={fontSize:!1,fontStyle:!1,fontWeight:!1,fontVariant:!1},g="",h=0;h<e.length;h++)f.fontStyle||-1==b.Styles.indexOf(e[h])?f.fontVariant||-1==b.Variants.indexOf(e[h])?f.fontWeight||-1==b.Weights.indexOf(e[h])?f.fontSize?"inherit"!=e[h]&&(g+=e[h]):("inherit"!=e[h]&&(d.fontSize=e[h].split("/")[0]),f.fontStyle=f.fontVariant=f.fontWeight=f.fontSize=!0):("inherit"!=e[h]&&(d.fontWeight=e[h]),f.fontStyle=f.fontVariant=f.fontWeight=!0):("inherit"!=e[h]&&(d.fontVariant=e[h]),f.fontStyle=f.fontVariant=!0):("inherit"!=e[h]&&(d.fontStyle=e[h]),f.fontStyle=!0);return""!=g&&(d.fontFamily=g),d}},a.ToNumberArray=function(b){for(var c=a.trim(a.compressSpaces((b||"").replace(/,/g," "))).split(" "),d=0;d<c.length;d++)c[d]=parseFloat(c[d]);return c},a.Point=function(a,b){this.x=a,this.y=b},a.Point.prototype.angleTo=function(a){return Math.atan2(a.y-this.y,a.x-this.x)},a.Point.prototype.applyTransform=function(a){var b=this.x*a[0]+this.y*a[2]+a[4],c=this.x*a[1]+this.y*a[3]+a[5];this.x=b,this.y=c},a.CreatePoint=function(b){var c=a.ToNumberArray(b);return new a.Point(c[0],c[1])},a.CreatePath=function(b){for(var c=a.ToNumberArray(b),d=[],e=0;e<c.length;e+=2)d.push(new a.Point(c[e],c[e+1]));return d},a.BoundingBox=function(a,b,c,d){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN,this.x=function(){return this.x1},this.y=function(){return this.y1},this.width=function(){return this.x2-this.x1},this.height=function(){return this.y2-this.y1},this.addPoint=function(a,b){null!=a&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=a,this.x2=a),a<this.x1&&(this.x1=a),a>this.x2&&(this.x2=a)),null!=b&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=b,this.y2=b),b<this.y1&&(this.y1=b),b>this.y2&&(this.y2=b))},this.addX=function(a){this.addPoint(a,null)},this.addY=function(a){this.addPoint(null,a)},this.addBoundingBox=function(a){this.addPoint(a.x1,a.y1),this.addPoint(a.x2,a.y2)},this.addQuadraticCurve=function(a,b,c,d,e,f){var g=a+2/3*(c-a),h=b+2/3*(d-b),i=g+1/3*(e-a),j=h+1/3*(f-b);this.addBezierCurve(a,b,g,i,h,j,e,f)},this.addBezierCurve=function(a,b,c,d,e,f,g,h){var j=[a,b],k=[c,d],l=[e,f],m=[g,h];for(this.addPoint(j[0],j[1]),this.addPoint(m[0],m[1]),i=0;1>=i;i++){var n=function(a){return Math.pow(1-a,3)*j[i]+3*Math.pow(1-a,2)*a*k[i]+3*(1-a)*Math.pow(a,2)*l[i]+Math.pow(a,3)*m[i]},o=6*j[i]-12*k[i]+6*l[i],p=-3*j[i]+9*k[i]-9*l[i]+3*m[i],q=3*k[i]-3*j[i];if(0!=p){var s=Math.pow(o,2)-4*q*p;if(!(0>s)){var t=(-o+Math.sqrt(s))/(2*p);t>0&&1>t&&(0==i&&this.addX(n(t)),1==i&&this.addY(n(t)));var u=(-o-Math.sqrt(s))/(2*p);u>0&&1>u&&(0==i&&this.addX(n(u)),1==i&&this.addY(n(u)))}}else{if(0==o)continue;var r=-q/o;r>0&&1>r&&(0==i&&this.addX(n(r)),1==i&&this.addY(n(r)))}}},this.isPointInBox=function(a,b){return this.x1<=a&&a<=this.x2&&this.y1<=b&&b<=this.y2},this.addPoint(a,b),this.addPoint(c,d)},a.Transform=function(b){var c=this;this.Type={},this.Type.translate=function(b){this.p=a.CreatePoint(b),this.apply=function(a){a.translate(this.p.x||0,this.p.y||0)},this.unapply=function(a){a.translate(-1*this.p.x||0,-1*this.p.y||0)},this.applyToPoint=function(a){a.applyTransform([1,0,0,1,this.p.x||0,this.p.y||0])}},this.Type.rotate=function(b){var c=a.ToNumberArray(b);this.angle=new a.Property("angle",c[0]),this.cx=c[1]||0,this.cy=c[2]||0,this.apply=function(a){a.translate(this.cx,this.cy),a.rotate(this.angle.toRadians()),a.translate(-this.cx,-this.cy)},this.unapply=function(a){a.translate(this.cx,this.cy),a.rotate(-1*this.angle.toRadians()),a.translate(-this.cx,-this.cy)},this.applyToPoint=function(a){var b=this.angle.toRadians();a.applyTransform([1,0,0,1,this.p.x||0,this.p.y||0]),a.applyTransform([Math.cos(b),Math.sin(b),-Math.sin(b),Math.cos(b),0,0]),a.applyTransform([1,0,0,1,-this.p.x||0,-this.p.y||0])}},this.Type.scale=function(b){this.p=a.CreatePoint(b),this.apply=function(a){a.scale(this.p.x||1,this.p.y||this.p.x||1)},this.unapply=function(a){a.scale(1/this.p.x||1,1/this.p.y||this.p.x||1)},this.applyToPoint=function(a){a.applyTransform([this.p.x||0,0,0,this.p.y||0,0,0])}},this.Type.matrix=function(b){this.m=a.ToNumberArray(b),this.apply=function(a){a.transform(this.m[0],this.m[1],this.m[2],this.m[3],this.m[4],this.m[5])},this.applyToPoint=function(a){a.applyTransform(this.m)}},this.Type.SkewBase=function(b){this.base=c.Type.matrix,this.base(b),this.angle=new a.Property("angle",b)},this.Type.SkewBase.prototype=new this.Type.matrix,this.Type.skewX=function(a){this.base=c.Type.SkewBase,this.base(a),this.m=[1,0,Math.tan(this.angle.toRadians()),1,0,0]},this.Type.skewX.prototype=new this.Type.SkewBase,this.Type.skewY=function(a){this.base=c.Type.SkewBase,this.base(a),this.m=[1,Math.tan(this.angle.toRadians()),0,1,0,0]},this.Type.skewY.prototype=new this.Type.SkewBase,this.transforms=[],this.apply=function(a){for(var b=0;b<this.transforms.length;b++)this.transforms[b].apply(a)},this.unapply=function(a){for(var b=this.transforms.length-1;b>=0;b--)this.transforms[b].unapply(a)},this.applyToPoint=function(a){for(var b=0;b<this.transforms.length;b++)this.transforms[b].applyToPoint(a)};for(var d=a.trim(a.compressSpaces(b)).replace(/\)(\s?,\s?)/g,") ").split(/\s(?=[a-z])/),e=0;e<d.length;e++){var f=a.trim(d[e].split("(")[0]),g=d[e].split("(")[1].replace(")",""),h=new this.Type[f](g);h.type=f,this.transforms.push(h)}},a.AspectRatio=function(b,c,d,e,f,g,h,i,j,k){c=a.compressSpaces(c),c=c.replace(/^defer\s/,"");var l=c.split(" ")[0]||"xMidYMid",m=c.split(" ")[1]||"meet",n=d/e,o=f/g,p=Math.min(n,o),q=Math.max(n,o);"meet"==m&&(e*=p,g*=p),"slice"==m&&(e*=q,g*=q),j=new a.Property("refX",j),k=new a.Property("refY",k),j.hasValue()&&k.hasValue()?b.translate(-p*j.toPixels("x"),-p*k.toPixels("y")):(l.match(/^xMid/)&&("meet"==m&&p==o||"slice"==m&&q==o)&&b.translate(d/2-e/2,0),l.match(/YMid$/)&&("meet"==m&&p==n||"slice"==m&&q==n)&&b.translate(0,f/2-g/2),l.match(/^xMax/)&&("meet"==m&&p==o||"slice"==m&&q==o)&&b.translate(d-e,0),l.match(/YMax$/)&&("meet"==m&&p==n||"slice"==m&&q==n)&&b.translate(0,f-g)),"none"==l?b.scale(n,o):"meet"==m?b.scale(p,p):"slice"==m&&b.scale(q,q),b.translate(null==h?0:-h,null==i?0:-i)},a.Element={},a.EmptyProperty=new a.Property("EMPTY",""),a.Element.ElementBase=function(b){if(this.attributes={},this.styles={},this.children=[],this.attribute=function(b,c){var d=this.attributes[b];return null!=d?d:(1==c&&(d=new a.Property(b,""),this.attributes[b]=d),d||a.EmptyProperty)},this.getHrefAttribute=function(){for(var b in this.attributes)if(b.match(/:href$/))return this.attributes[b];return a.EmptyProperty},this.style=function(b,c){var d=this.styles[b];if(null!=d)return d;var e=this.attribute(b);if(null!=e&&e.hasValue())return this.styles[b]=e,e;var f=this.parent;if(null!=f){var g=f.style(b);if(null!=g&&g.hasValue())return g}return 1==c&&(d=new a.Property(b,""),this.styles[b]=d),d||a.EmptyProperty},this.render=function(a){if("none"!=this.style("display").value&&"hidden"!=this.attribute("visibility").value){if(a.save(),this.attribute("mask").hasValue()){var b=this.attribute("mask").getDefinition();null!=b&&b.apply(a,this)}else if(this.style("filter").hasValue()){var c=this.style("filter").getDefinition();null!=c&&c.apply(a,this)}else this.setContext(a),this.renderChildren(a),this.clearContext(a);a.restore()}},this.setContext=function(){},this.clearContext=function(){},this.renderChildren=function(a){for(var b=0;b<this.children.length;b++)this.children[b].render(a)},this.addChild=function(b,c){var d=b;c&&(d=a.CreateElement(b)),d.parent=this,this.children.push(d)},null!=b&&1==b.nodeType){for(var c=0;c<b.childNodes.length;c++){var d=b.childNodes[c];if(1==d.nodeType&&this.addChild(d,!0),this.captureTextNodes&&3==d.nodeType){var e=d.nodeValue||d.text||"";""!=a.trim(a.compressSpaces(e))&&this.addChild(new a.Element.tspan(d),!1)}}for(var c=0;c<b.attributes.length;c++){var f=b.attributes[c];this.attributes[f.nodeName]=new a.Property(f.nodeName,f.nodeValue)}var g=a.Styles[b.nodeName];if(null!=g)for(var h in g)this.styles[h]=g[h];if(this.attribute("class").hasValue())for(var i=a.compressSpaces(this.attribute("class").value).split(" "),j=0;j<i.length;j++){if(g=a.Styles["."+i[j]],null!=g)for(var h in g)this.styles[h]=g[h];if(g=a.Styles[b.nodeName+"."+i[j]],null!=g)for(var h in g)this.styles[h]=g[h]}if(this.attribute("id").hasValue()){var g=a.Styles["#"+this.attribute("id").value];if(null!=g)for(var h in g)this.styles[h]=g[h]}if(this.attribute("style").hasValue())for(var g=this.attribute("style").value.split(";"),c=0;c<g.length;c++)if(""!=a.trim(g[c])){var k=g[c].split(":"),h=a.trim(k[0]),l=a.trim(k[1]);this.styles[h]=new a.Property(h,l)}this.attribute("id").hasValue()&&null==a.Definitions[this.attribute("id").value]&&(a.Definitions[this.attribute("id").value]=this)}},a.Element.RenderedElementBase=function(b){this.base=a.Element.ElementBase,this.base(b),this.setContext=function(b){if(this.style("fill").isUrlDefinition()){var c=this.style("fill").getFillStyleDefinition(this,this.style("fill-opacity"));null!=c&&(b.fillStyle=c)}else if(this.style("fill").hasValue()){var d=this.style("fill");"currentColor"==d.value&&(d.value=this.style("color").value),b.fillStyle="none"==d.value?"rgba(0,0,0,0)":d.value}if(this.style("fill-opacity").hasValue()){var d=new a.Property("fill",b.fillStyle);d=d.addOpacity(this.style("fill-opacity").value),b.fillStyle=d.value}if(this.style("stroke").isUrlDefinition()){var c=this.style("stroke").getFillStyleDefinition(this,this.style("stroke-opacity"));null!=c&&(b.strokeStyle=c)}else if(this.style("stroke").hasValue()){var e=this.style("stroke");"currentColor"==e.value&&(e.value=this.style("color").value),b.strokeStyle="none"==e.value?"rgba(0,0,0,0)":e.value}if(this.style("stroke-opacity").hasValue()){var e=new a.Property("stroke",b.strokeStyle);e=e.addOpacity(this.style("stroke-opacity").value),b.strokeStyle=e.value}if(this.style("stroke-width").hasValue()){var f=this.style("stroke-width").toPixels();b.lineWidth=0==f?.001:f}if(this.style("stroke-linecap").hasValue()&&(b.lineCap=this.style("stroke-linecap").value),this.style("stroke-linejoin").hasValue()&&(b.lineJoin=this.style("stroke-linejoin").value),this.style("stroke-miterlimit").hasValue()&&(b.miterLimit=this.style("stroke-miterlimit").value),this.style("stroke-dasharray").hasValue()){var g=a.ToNumberArray(this.style("stroke-dasharray").value);"undefined"!=typeof b.setLineDash?b.setLineDash(g):"undefined"!=typeof b.webkitLineDash?b.webkitLineDash=g:"undefined"!=typeof b.mozDash&&(b.mozDash=g);var h=this.style("stroke-dashoffset").numValueOrDefault(1);"undefined"!=typeof b.lineDashOffset?b.lineDashOffset=h:"undefined"!=typeof b.webkitLineDashOffset?b.webkitLineDashOffset=h:"undefined"!=typeof b.mozDashOffset&&(b.mozDashOffset=h)}if("undefined"!=typeof b.font&&(b.font=a.Font.CreateFont(this.style("font-style").value,this.style("font-variant").value,this.style("font-weight").value,this.style("font-size").hasValue()?this.style("font-size").toPixels()+"px":"",this.style("font-family").value).toString()),this.attribute("transform").hasValue()){var i=new a.Transform(this.attribute("transform").value);
i.apply(b)}if(this.style("clip-path").hasValue()){var j=this.style("clip-path").getDefinition();null!=j&&j.apply(b)}this.style("opacity").hasValue()&&(b.globalAlpha=this.style("opacity").numValue())}},a.Element.RenderedElementBase.prototype=new a.Element.ElementBase,a.Element.PathElementBase=function(b){this.base=a.Element.RenderedElementBase,this.base(b),this.path=function(b){return null!=b&&b.beginPath(),new a.BoundingBox},this.renderChildren=function(b){this.path(b),a.Mouse.checkPath(this,b),""!=b.fillStyle&&(this.attribute("fill-rule").hasValue()?b.fill(this.attribute("fill-rule").value):b.fill()),""!=b.strokeStyle&&b.stroke();var c=this.getMarkers();if(null!=c){if(this.style("marker-start").isUrlDefinition()){var d=this.style("marker-start").getDefinition();d.render(b,c[0][0],c[0][1])}if(this.style("marker-mid").isUrlDefinition())for(var d=this.style("marker-mid").getDefinition(),e=1;e<c.length-1;e++)d.render(b,c[e][0],c[e][1]);if(this.style("marker-end").isUrlDefinition()){var d=this.style("marker-end").getDefinition();d.render(b,c[c.length-1][0],c[c.length-1][1])}}},this.getBoundingBox=function(){return this.path()},this.getMarkers=function(){return null}},a.Element.PathElementBase.prototype=new a.Element.RenderedElementBase,a.Element.svg=function(b){this.base=a.Element.RenderedElementBase,this.base(b),this.baseClearContext=this.clearContext,this.clearContext=function(b){this.baseClearContext(b),a.ViewPort.RemoveCurrent()},this.baseSetContext=this.setContext,this.setContext=function(b){b.strokeStyle="rgba(0,0,0,0)",b.lineCap="butt",b.lineJoin="miter",b.miterLimit=4,this.baseSetContext(b),this.attribute("x").hasValue()||(this.attribute("x",!0).value=0),this.attribute("y").hasValue()||(this.attribute("y",!0).value=0),b.translate(this.attribute("x").toPixels("x"),this.attribute("y").toPixels("y"));var c=a.ViewPort.width(),d=a.ViewPort.height();if(this.attribute("width").hasValue()||(this.attribute("width",!0).value="100%"),this.attribute("height").hasValue()||(this.attribute("height",!0).value="100%"),"undefined"==typeof this.root){c=this.attribute("width").toPixels("x"),d=this.attribute("height").toPixels("y");var e=0,f=0;this.attribute("refX").hasValue()&&this.attribute("refY").hasValue()&&(e=-this.attribute("refX").toPixels("x"),f=-this.attribute("refY").toPixels("y")),b.beginPath(),b.moveTo(e,f),b.lineTo(c,f),b.lineTo(c,d),b.lineTo(e,d),b.closePath(),b.clip()}if(a.ViewPort.SetCurrent(c,d),this.attribute("viewBox").hasValue()){var g=a.ToNumberArray(this.attribute("viewBox").value),h=g[0],i=g[1];c=g[2],d=g[3],a.AspectRatio(b,this.attribute("preserveAspectRatio").value,a.ViewPort.width(),c,a.ViewPort.height(),d,h,i,this.attribute("refX").value,this.attribute("refY").value),a.ViewPort.RemoveCurrent(),a.ViewPort.SetCurrent(g[2],g[3])}}},a.Element.svg.prototype=new a.Element.RenderedElementBase,a.Element.rect=function(b){this.base=a.Element.PathElementBase,this.base(b),this.path=function(b){var c=this.attribute("x").toPixels("x"),d=this.attribute("y").toPixels("y"),e=this.attribute("width").toPixels("x"),f=this.attribute("height").toPixels("y"),g=this.attribute("rx").toPixels("x"),h=this.attribute("ry").toPixels("y");return this.attribute("rx").hasValue()&&!this.attribute("ry").hasValue()&&(h=g),this.attribute("ry").hasValue()&&!this.attribute("rx").hasValue()&&(g=h),g=Math.min(g,e/2),h=Math.min(h,f/2),null!=b&&(b.beginPath(),b.moveTo(c+g,d),b.lineTo(c+e-g,d),b.quadraticCurveTo(c+e,d,c+e,d+h),b.lineTo(c+e,d+f-h),b.quadraticCurveTo(c+e,d+f,c+e-g,d+f),b.lineTo(c+g,d+f),b.quadraticCurveTo(c,d+f,c,d+f-h),b.lineTo(c,d+h),b.quadraticCurveTo(c,d,c+g,d),b.closePath()),new a.BoundingBox(c,d,c+e,d+f)}},a.Element.rect.prototype=new a.Element.PathElementBase,a.Element.circle=function(b){this.base=a.Element.PathElementBase,this.base(b),this.path=function(b){var c=this.attribute("cx").toPixels("x"),d=this.attribute("cy").toPixels("y"),e=this.attribute("r").toPixels();return null!=b&&(b.beginPath(),b.arc(c,d,e,0,2*Math.PI,!0),b.closePath()),new a.BoundingBox(c-e,d-e,c+e,d+e)}},a.Element.circle.prototype=new a.Element.PathElementBase,a.Element.ellipse=function(b){this.base=a.Element.PathElementBase,this.base(b),this.path=function(b){var c=4*((Math.sqrt(2)-1)/3),d=this.attribute("rx").toPixels("x"),e=this.attribute("ry").toPixels("y"),f=this.attribute("cx").toPixels("x"),g=this.attribute("cy").toPixels("y");return null!=b&&(b.beginPath(),b.moveTo(f,g-e),b.bezierCurveTo(f+c*d,g-e,f+d,g-c*e,f+d,g),b.bezierCurveTo(f+d,g+c*e,f+c*d,g+e,f,g+e),b.bezierCurveTo(f-c*d,g+e,f-d,g+c*e,f-d,g),b.bezierCurveTo(f-d,g-c*e,f-c*d,g-e,f,g-e),b.closePath()),new a.BoundingBox(f-d,g-e,f+d,g+e)}},a.Element.ellipse.prototype=new a.Element.PathElementBase,a.Element.line=function(b){this.base=a.Element.PathElementBase,this.base(b),this.getPoints=function(){return[new a.Point(this.attribute("x1").toPixels("x"),this.attribute("y1").toPixels("y")),new a.Point(this.attribute("x2").toPixels("x"),this.attribute("y2").toPixels("y"))]},this.path=function(b){var c=this.getPoints();return null!=b&&(b.beginPath(),b.moveTo(c[0].x,c[0].y),b.lineTo(c[1].x,c[1].y)),new a.BoundingBox(c[0].x,c[0].y,c[1].x,c[1].y)},this.getMarkers=function(){var a=this.getPoints(),b=a[0].angleTo(a[1]);return[[a[0],b],[a[1],b]]}},a.Element.line.prototype=new a.Element.PathElementBase,a.Element.polyline=function(b){this.base=a.Element.PathElementBase,this.base(b),this.points=a.CreatePath(this.attribute("points").value),this.path=function(b){var c=new a.BoundingBox(this.points[0].x,this.points[0].y);null!=b&&(b.beginPath(),b.moveTo(this.points[0].x,this.points[0].y));for(var d=1;d<this.points.length;d++)c.addPoint(this.points[d].x,this.points[d].y),null!=b&&b.lineTo(this.points[d].x,this.points[d].y);return c},this.getMarkers=function(){for(var a=[],b=0;b<this.points.length-1;b++)a.push([this.points[b],this.points[b].angleTo(this.points[b+1])]);return a.push([this.points[this.points.length-1],a[a.length-1][1]]),a}},a.Element.polyline.prototype=new a.Element.PathElementBase,a.Element.polygon=function(b){this.base=a.Element.polyline,this.base(b),this.basePath=this.path,this.path=function(a){var b=this.basePath(a);return null!=a&&(a.lineTo(this.points[0].x,this.points[0].y),a.closePath()),b}},a.Element.polygon.prototype=new a.Element.polyline,a.Element.path=function(b){this.base=a.Element.PathElementBase,this.base(b);var c=this.attribute("d").value;c=c.replace(/,/gm," "),c=c.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2"),c=c.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2"),c=c.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm,"$1 $2"),c=c.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2"),c=c.replace(/([0-9])([+\-])/gm,"$1 $2"),c=c.replace(/(\.[0-9]*)(\.)/gm,"$1 $2"),c=c.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm,"$1 $3 $4 "),c=a.compressSpaces(c),c=a.trim(c),this.PathParser=new function(b){this.tokens=b.split(" "),this.reset=function(){this.i=-1,this.command="",this.previousCommand="",this.start=new a.Point(0,0),this.control=new a.Point(0,0),this.current=new a.Point(0,0),this.points=[],this.angles=[]},this.isEnd=function(){return this.i>=this.tokens.length-1},this.isCommandOrEnd=function(){return this.isEnd()?!0:null!=this.tokens[this.i+1].match(/^[A-Za-z]$/)},this.isRelativeCommand=function(){switch(this.command){case"m":case"l":case"h":case"v":case"c":case"s":case"q":case"t":case"a":case"z":return!0}return!1},this.getToken=function(){return this.i++,this.tokens[this.i]},this.getScalar=function(){return parseFloat(this.getToken())},this.nextCommand=function(){this.previousCommand=this.command,this.command=this.getToken()},this.getPoint=function(){var b=new a.Point(this.getScalar(),this.getScalar());return this.makeAbsolute(b)},this.getAsControlPoint=function(){var a=this.getPoint();return this.control=a,a},this.getAsCurrentPoint=function(){var a=this.getPoint();return this.current=a,a},this.getReflectedControlPoint=function(){if("c"!=this.previousCommand.toLowerCase()&&"s"!=this.previousCommand.toLowerCase()&&"q"!=this.previousCommand.toLowerCase()&&"t"!=this.previousCommand.toLowerCase())return this.current;var b=new a.Point(2*this.current.x-this.control.x,2*this.current.y-this.control.y);return b},this.makeAbsolute=function(a){return this.isRelativeCommand()&&(a.x+=this.current.x,a.y+=this.current.y),a},this.addMarker=function(a,b,c){null!=c&&this.angles.length>0&&null==this.angles[this.angles.length-1]&&(this.angles[this.angles.length-1]=this.points[this.points.length-1].angleTo(c)),this.addMarkerAngle(a,null==b?null:b.angleTo(a))},this.addMarkerAngle=function(a,b){this.points.push(a),this.angles.push(b)},this.getMarkerPoints=function(){return this.points},this.getMarkerAngles=function(){for(var a=0;a<this.angles.length;a++)if(null==this.angles[a])for(var b=a+1;b<this.angles.length;b++)if(null!=this.angles[b]){this.angles[a]=this.angles[b];break}return this.angles}}(c),this.path=function(b){var c=this.PathParser;c.reset();var d=new a.BoundingBox;for(null!=b&&b.beginPath();!c.isEnd();)switch(c.nextCommand(),c.command){case"M":case"m":var e=c.getAsCurrentPoint();for(c.addMarker(e),d.addPoint(e.x,e.y),null!=b&&b.moveTo(e.x,e.y),c.start=c.current;!c.isCommandOrEnd();){var e=c.getAsCurrentPoint();c.addMarker(e,c.start),d.addPoint(e.x,e.y),null!=b&&b.lineTo(e.x,e.y)}break;case"L":case"l":for(;!c.isCommandOrEnd();){var f=c.current,e=c.getAsCurrentPoint();c.addMarker(e,f),d.addPoint(e.x,e.y),null!=b&&b.lineTo(e.x,e.y)}break;case"H":case"h":for(;!c.isCommandOrEnd();){var g=new a.Point((c.isRelativeCommand()?c.current.x:0)+c.getScalar(),c.current.y);c.addMarker(g,c.current),c.current=g,d.addPoint(c.current.x,c.current.y),null!=b&&b.lineTo(c.current.x,c.current.y)}break;case"V":case"v":for(;!c.isCommandOrEnd();){var g=new a.Point(c.current.x,(c.isRelativeCommand()?c.current.y:0)+c.getScalar());c.addMarker(g,c.current),c.current=g,d.addPoint(c.current.x,c.current.y),null!=b&&b.lineTo(c.current.x,c.current.y)}break;case"C":case"c":for(;!c.isCommandOrEnd();){var h=c.current,i=c.getPoint(),j=c.getAsControlPoint(),k=c.getAsCurrentPoint();c.addMarker(k,j,i),d.addBezierCurve(h.x,h.y,i.x,i.y,j.x,j.y,k.x,k.y),null!=b&&b.bezierCurveTo(i.x,i.y,j.x,j.y,k.x,k.y)}break;case"S":case"s":for(;!c.isCommandOrEnd();){var h=c.current,i=c.getReflectedControlPoint(),j=c.getAsControlPoint(),k=c.getAsCurrentPoint();c.addMarker(k,j,i),d.addBezierCurve(h.x,h.y,i.x,i.y,j.x,j.y,k.x,k.y),null!=b&&b.bezierCurveTo(i.x,i.y,j.x,j.y,k.x,k.y)}break;case"Q":case"q":for(;!c.isCommandOrEnd();){var h=c.current,j=c.getAsControlPoint(),k=c.getAsCurrentPoint();c.addMarker(k,j,j),d.addQuadraticCurve(h.x,h.y,j.x,j.y,k.x,k.y),null!=b&&b.quadraticCurveTo(j.x,j.y,k.x,k.y)}break;case"T":case"t":for(;!c.isCommandOrEnd();){var h=c.current,j=c.getReflectedControlPoint();c.control=j;var k=c.getAsCurrentPoint();c.addMarker(k,j,j),d.addQuadraticCurve(h.x,h.y,j.x,j.y,k.x,k.y),null!=b&&b.quadraticCurveTo(j.x,j.y,k.x,k.y)}break;case"A":case"a":for(;!c.isCommandOrEnd();){var h=c.current,l=c.getScalar(),m=c.getScalar(),n=c.getScalar()*(Math.PI/180),o=c.getScalar(),p=c.getScalar(),k=c.getAsCurrentPoint(),q=new a.Point(Math.cos(n)*(h.x-k.x)/2+Math.sin(n)*(h.y-k.y)/2,-Math.sin(n)*(h.x-k.x)/2+Math.cos(n)*(h.y-k.y)/2),r=Math.pow(q.x,2)/Math.pow(l,2)+Math.pow(q.y,2)/Math.pow(m,2);r>1&&(l*=Math.sqrt(r),m*=Math.sqrt(r));var s=(o==p?-1:1)*Math.sqrt((Math.pow(l,2)*Math.pow(m,2)-Math.pow(l,2)*Math.pow(q.y,2)-Math.pow(m,2)*Math.pow(q.x,2))/(Math.pow(l,2)*Math.pow(q.y,2)+Math.pow(m,2)*Math.pow(q.x,2)));isNaN(s)&&(s=0);var t=new a.Point(s*l*q.y/m,s*-m*q.x/l),u=new a.Point((h.x+k.x)/2+Math.cos(n)*t.x-Math.sin(n)*t.y,(h.y+k.y)/2+Math.sin(n)*t.x+Math.cos(n)*t.y),v=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2))},w=function(a,b){return(a[0]*b[0]+a[1]*b[1])/(v(a)*v(b))},x=function(a,b){return(a[0]*b[1]<a[1]*b[0]?-1:1)*Math.acos(w(a,b))},y=x([1,0],[(q.x-t.x)/l,(q.y-t.y)/m]),z=[(q.x-t.x)/l,(q.y-t.y)/m],A=[(-q.x-t.x)/l,(-q.y-t.y)/m],B=x(z,A);w(z,A)<=-1&&(B=Math.PI),w(z,A)>=1&&(B=0);var C=1-p?1:-1,D=y+C*(B/2),E=new a.Point(u.x+l*Math.cos(D),u.y+m*Math.sin(D));if(c.addMarkerAngle(E,D-C*Math.PI/2),c.addMarkerAngle(k,D-C*Math.PI),d.addPoint(k.x,k.y),null!=b){var w=l>m?l:m,F=l>m?1:l/m,G=l>m?m/l:1;b.translate(u.x,u.y),b.rotate(n),b.scale(F,G),b.arc(0,0,w,y,y+B,1-p),b.scale(1/F,1/G),b.rotate(-n),b.translate(-u.x,-u.y)}}break;case"Z":case"z":null!=b&&b.closePath(),c.current=c.start}return d},this.getMarkers=function(){for(var a=this.PathParser.getMarkerPoints(),b=this.PathParser.getMarkerAngles(),c=[],d=0;d<a.length;d++)c.push([a[d],b[d]]);return c}},a.Element.path.prototype=new a.Element.PathElementBase,a.Element.pattern=function(b){this.base=a.Element.ElementBase,this.base(b),this.createPattern=function(b){var d=this.attribute("width").toPixels("x",!0),e=this.attribute("height").toPixels("y",!0),f=new a.Element.svg;f.attributes.viewBox=new a.Property("viewBox",this.attribute("viewBox").value),f.attributes.width=new a.Property("width",d+"px"),f.attributes.height=new a.Property("height",e+"px"),f.attributes.transform=new a.Property("transform",this.attribute("patternTransform").value),f.children=this.children;var g=document.createElement("canvas");g.width=d,g.height=e;var h=g.getContext("2d");this.attribute("x").hasValue()&&this.attribute("y").hasValue()&&h.translate(this.attribute("x").toPixels("x",!0),this.attribute("y").toPixels("y",!0));for(var i=-1;1>=i;i++)for(var j=-1;1>=j;j++)h.save(),h.translate(i*g.width,j*g.height),f.render(h),h.restore();var k=b.createPattern(g,"repeat");return k}},a.Element.pattern.prototype=new a.Element.ElementBase,a.Element.marker=function(b){this.base=a.Element.ElementBase,this.base(b),this.baseRender=this.render,this.render=function(b,c,d){b.translate(c.x,c.y),"auto"==this.attribute("orient").valueOrDefault("auto")&&b.rotate(d),"strokeWidth"==this.attribute("markerUnits").valueOrDefault("strokeWidth")&&b.scale(b.lineWidth,b.lineWidth),b.save();var e=new a.Element.svg;e.attributes.viewBox=new a.Property("viewBox",this.attribute("viewBox").value),e.attributes.refX=new a.Property("refX",this.attribute("refX").value),e.attributes.refY=new a.Property("refY",this.attribute("refY").value),e.attributes.width=new a.Property("width",this.attribute("markerWidth").value),e.attributes.height=new a.Property("height",this.attribute("markerHeight").value),e.attributes.fill=new a.Property("fill",this.attribute("fill").valueOrDefault("black")),e.attributes.stroke=new a.Property("stroke",this.attribute("stroke").valueOrDefault("none")),e.children=this.children,e.render(b),b.restore(),"strokeWidth"==this.attribute("markerUnits").valueOrDefault("strokeWidth")&&b.scale(1/b.lineWidth,1/b.lineWidth),"auto"==this.attribute("orient").valueOrDefault("auto")&&b.rotate(-d),b.translate(-c.x,-c.y)}},a.Element.marker.prototype=new a.Element.ElementBase,a.Element.defs=function(b){this.base=a.Element.ElementBase,this.base(b),this.render=function(){}},a.Element.defs.prototype=new a.Element.ElementBase,a.Element.GradientBase=function(b){this.base=a.Element.ElementBase,this.base(b),this.gradientUnits=this.attribute("gradientUnits").valueOrDefault("objectBoundingBox"),this.stops=[];for(var c=0;c<this.children.length;c++){var d=this.children[c];"stop"==d.type&&this.stops.push(d)}this.getGradient=function(){},this.createGradient=function(b,c,d){var e=this;this.getHrefAttribute().hasValue()&&(e=this.getHrefAttribute().getDefinition());var f=function(b){if(d.hasValue()){var c=new a.Property("color",b);return c.addOpacity(d.value).value}return b},g=this.getGradient(b,c);if(null==g)return f(e.stops[e.stops.length-1].color);for(var h=0;h<e.stops.length;h++)g.addColorStop(e.stops[h].offset,f(e.stops[h].color));if(this.attribute("gradientTransform").hasValue()){var i=a.ViewPort.viewPorts[0],j=new a.Element.rect;j.attributes.x=new a.Property("x",-a.MAX_VIRTUAL_PIXELS/3),j.attributes.y=new a.Property("y",-a.MAX_VIRTUAL_PIXELS/3),j.attributes.width=new a.Property("width",a.MAX_VIRTUAL_PIXELS),j.attributes.height=new a.Property("height",a.MAX_VIRTUAL_PIXELS);var k=new a.Element.g;k.attributes.transform=new a.Property("transform",this.attribute("gradientTransform").value),k.children=[j];var l=new a.Element.svg;l.attributes.x=new a.Property("x",0),l.attributes.y=new a.Property("y",0),l.attributes.width=new a.Property("width",i.width),l.attributes.height=new a.Property("height",i.height),l.children=[k];var m=document.createElement("canvas");m.width=i.width,m.height=i.height;var n=m.getContext("2d");return n.fillStyle=g,l.render(n),n.createPattern(m,"no-repeat")}return g}},a.Element.GradientBase.prototype=new a.Element.ElementBase,a.Element.linearGradient=function(b){this.base=a.Element.GradientBase,this.base(b),this.getGradient=function(a,b){var c=b.getBoundingBox();this.attribute("x1").hasValue()||this.attribute("y1").hasValue()||this.attribute("x2").hasValue()||this.attribute("y2").hasValue()||(this.attribute("x1",!0).value=0,this.attribute("y1",!0).value=0,this.attribute("x2",!0).value=1,this.attribute("y2",!0).value=0);var d="objectBoundingBox"==this.gradientUnits?c.x()+c.width()*this.attribute("x1").numValue():this.attribute("x1").toPixels("x"),e="objectBoundingBox"==this.gradientUnits?c.y()+c.height()*this.attribute("y1").numValue():this.attribute("y1").toPixels("y"),f="objectBoundingBox"==this.gradientUnits?c.x()+c.width()*this.attribute("x2").numValue():this.attribute("x2").toPixels("x"),g="objectBoundingBox"==this.gradientUnits?c.y()+c.height()*this.attribute("y2").numValue():this.attribute("y2").toPixels("y");return d==f&&e==g?null:a.createLinearGradient(d,e,f,g)}},a.Element.linearGradient.prototype=new a.Element.GradientBase,a.Element.radialGradient=function(b){this.base=a.Element.GradientBase,this.base(b),this.getGradient=function(a,b){var c=b.getBoundingBox();this.attribute("cx").hasValue()||(this.attribute("cx",!0).value="50%"),this.attribute("cy").hasValue()||(this.attribute("cy",!0).value="50%"),this.attribute("r").hasValue()||(this.attribute("r",!0).value="50%");var d="objectBoundingBox"==this.gradientUnits?c.x()+c.width()*this.attribute("cx").numValue():this.attribute("cx").toPixels("x"),e="objectBoundingBox"==this.gradientUnits?c.y()+c.height()*this.attribute("cy").numValue():this.attribute("cy").toPixels("y"),f=d,g=e;this.attribute("fx").hasValue()&&(f="objectBoundingBox"==this.gradientUnits?c.x()+c.width()*this.attribute("fx").numValue():this.attribute("fx").toPixels("x")),this.attribute("fy").hasValue()&&(g="objectBoundingBox"==this.gradientUnits?c.y()+c.height()*this.attribute("fy").numValue():this.attribute("fy").toPixels("y"));var h="objectBoundingBox"==this.gradientUnits?(c.width()+c.height())/2*this.attribute("r").numValue():this.attribute("r").toPixels();return a.createRadialGradient(f,g,0,d,e,h)}},a.Element.radialGradient.prototype=new a.Element.GradientBase,a.Element.stop=function(b){this.base=a.Element.ElementBase,this.base(b),this.offset=this.attribute("offset").numValue(),this.offset<0&&(this.offset=0),this.offset>1&&(this.offset=1);var c=this.style("stop-color");this.style("stop-opacity").hasValue()&&(c=c.addOpacity(this.style("stop-opacity").value)),this.color=c.value},a.Element.stop.prototype=new a.Element.ElementBase,a.Element.AnimateBase=function(b){this.base=a.Element.ElementBase,this.base(b),a.Animations.push(this),this.duration=0,this.begin=this.attribute("begin").toMilliseconds(),this.maxDuration=this.begin+this.attribute("dur").toMilliseconds(),this.getProperty=function(){var a=this.attribute("attributeType").value,b=this.attribute("attributeName").value;return"CSS"==a?this.parent.style(b,!0):this.parent.attribute(b,!0)},this.initialValue=null,this.initialUnits="",this.removed=!1,this.calcValue=function(){return""},this.update=function(a){if(null==this.initialValue&&(this.initialValue=this.getProperty().value,this.initialUnits=this.getProperty().getUnits()),this.duration>this.maxDuration){if("indefinite"!=this.attribute("repeatCount").value&&"indefinite"!=this.attribute("repeatDur").value)return"remove"!=this.attribute("fill").valueOrDefault("remove")||this.removed?!1:(this.removed=!0,this.getProperty().value=this.initialValue,!0);this.duration=0}this.duration=this.duration+a;var b=!1;if(this.begin<this.duration){var c=this.calcValue();if(this.attribute("type").hasValue()){var d=this.attribute("type").value;c=d+"("+c+")"}this.getProperty().value=c,b=!0}return b},this.from=this.attribute("from"),this.to=this.attribute("to"),this.values=this.attribute("values"),this.values.hasValue()&&(this.values.value=this.values.value.split(";")),this.progress=function(){var b={progress:(this.duration-this.begin)/(this.maxDuration-this.begin)};if(this.values.hasValue()){var c=b.progress*(this.values.value.length-1),d=Math.floor(c),e=Math.ceil(c);b.from=new a.Property("from",parseFloat(this.values.value[d])),b.to=new a.Property("to",parseFloat(this.values.value[e])),b.progress=(c-d)/(e-d)}else b.from=this.from,b.to=this.to;return b}},a.Element.AnimateBase.prototype=new a.Element.ElementBase,a.Element.animate=function(b){this.base=a.Element.AnimateBase,this.base(b),this.calcValue=function(){var a=this.progress(),b=a.from.numValue()+(a.to.numValue()-a.from.numValue())*a.progress;return b+this.initialUnits}},a.Element.animate.prototype=new a.Element.AnimateBase,a.Element.animateColor=function(b){this.base=a.Element.AnimateBase,this.base(b),this.calcValue=function(){var a=this.progress(),b=new RGBColor(a.from.value),c=new RGBColor(a.to.value);if(b.ok&&c.ok){var d=b.r+(c.r-b.r)*a.progress,e=b.g+(c.g-b.g)*a.progress,f=b.b+(c.b-b.b)*a.progress;return"rgb("+parseInt(d,10)+","+parseInt(e,10)+","+parseInt(f,10)+")"}return this.attribute("from").value}},a.Element.animateColor.prototype=new a.Element.AnimateBase,a.Element.animateTransform=function(b){this.base=a.Element.AnimateBase,this.base(b),this.calcValue=function(){for(var b=this.progress(),c=a.ToNumberArray(b.from.value),d=a.ToNumberArray(b.to.value),e="",f=0;f<c.length;f++)e+=c[f]+(d[f]-c[f])*b.progress+" ";return e}},a.Element.animateTransform.prototype=new a.Element.animate,a.Element.font=function(b){this.base=a.Element.ElementBase,this.base(b),this.horizAdvX=this.attribute("horiz-adv-x").numValue(),this.isRTL=!1,this.isArabic=!1,this.fontFace=null,this.missingGlyph=null,this.glyphs=[];for(var c=0;c<this.children.length;c++){var d=this.children[c];"font-face"==d.type?(this.fontFace=d,d.style("font-family").hasValue()&&(a.Definitions[d.style("font-family").value]=this)):"missing-glyph"==d.type?this.missingGlyph=d:"glyph"==d.type&&(""!=d.arabicForm?(this.isRTL=!0,this.isArabic=!0,"undefined"==typeof this.glyphs[d.unicode]&&(this.glyphs[d.unicode]=[]),this.glyphs[d.unicode][d.arabicForm]=d):this.glyphs[d.unicode]=d)}},a.Element.font.prototype=new a.Element.ElementBase,a.Element.fontface=function(b){this.base=a.Element.ElementBase,this.base(b),this.ascent=this.attribute("ascent").value,this.descent=this.attribute("descent").value,this.unitsPerEm=this.attribute("units-per-em").numValue()},a.Element.fontface.prototype=new a.Element.ElementBase,a.Element.missingglyph=function(b){this.base=a.Element.path,this.base(b),this.horizAdvX=0},a.Element.missingglyph.prototype=new a.Element.path,a.Element.glyph=function(b){this.base=a.Element.path,this.base(b),this.horizAdvX=this.attribute("horiz-adv-x").numValue(),this.unicode=this.attribute("unicode").value,this.arabicForm=this.attribute("arabic-form").value},a.Element.glyph.prototype=new a.Element.path,a.Element.text=function(b){this.captureTextNodes=!0,this.base=a.Element.RenderedElementBase,this.base(b),this.baseSetContext=this.setContext,this.setContext=function(a){this.baseSetContext(a),this.style("dominant-baseline").hasValue()&&(a.textBaseline=this.style("dominant-baseline").value),this.style("alignment-baseline").hasValue()&&(a.textBaseline=this.style("alignment-baseline").value)},this.getBoundingBox=function(){return new a.BoundingBox(this.attribute("x").toPixels("x"),this.attribute("y").toPixels("y"),0,0)},this.renderChildren=function(a){this.x=this.attribute("x").toPixels("x"),this.y=this.attribute("y").toPixels("y"),this.x+=this.getAnchorDelta(a,this,0);for(var b=0;b<this.children.length;b++)this.renderChild(a,this,b)},this.getAnchorDelta=function(a,b,c){var d=this.style("text-anchor").valueOrDefault("start");if("start"!=d){for(var e=0,f=c;f<b.children.length;f++){var g=b.children[f];if(f>c&&g.attribute("x").hasValue())break;e+=g.measureTextRecursive(a)}return-1*("end"==d?e:e/2)}return 0},this.renderChild=function(a,b,c){var d=b.children[c];d.attribute("x").hasValue()?d.x=d.attribute("x").toPixels("x")+this.getAnchorDelta(a,b,c):(this.attribute("dx").hasValue()&&(this.x+=this.attribute("dx").toPixels("x")),d.attribute("dx").hasValue()&&(this.x+=d.attribute("dx").toPixels("x")),d.x=this.x),this.x=d.x+d.measureText(a),d.attribute("y").hasValue()?d.y=d.attribute("y").toPixels("y"):(this.attribute("dy").hasValue()&&(this.y+=this.attribute("dy").toPixels("y")),d.attribute("dy").hasValue()&&(this.y+=d.attribute("dy").toPixels("y")),d.y=this.y),this.y=d.y,d.render(a);for(var c=0;c<d.children.length;c++)this.renderChild(a,d,c)}},a.Element.text.prototype=new a.Element.RenderedElementBase,a.Element.TextElementBase=function(b){this.base=a.Element.RenderedElementBase,this.base(b),this.getGlyph=function(a,b,c){var d=b[c],e=null;if(a.isArabic){var f="isolated";(0==c||" "==b[c-1])&&c<b.length-2&&" "!=b[c+1]&&(f="terminal"),c>0&&" "!=b[c-1]&&c<b.length-2&&" "!=b[c+1]&&(f="medial"),c>0&&" "!=b[c-1]&&(c==b.length-1||" "==b[c+1])&&(f="initial"),"undefined"!=typeof a.glyphs[d]&&(e=a.glyphs[d][f],null==e&&"glyph"==a.glyphs[d].type&&(e=a.glyphs[d]))}else e=a.glyphs[d];return null==e&&(e=a.missingGlyph),e},this.renderChildren=function(b){var c=this.parent.style("font-family").getDefinition();if(null==c)""!=b.fillStyle&&b.fillText(a.compressSpaces(this.getText()),this.x,this.y),""!=b.strokeStyle&&b.strokeText(a.compressSpaces(this.getText()),this.x,this.y);else{var d=this.parent.style("font-size").numValueOrDefault(a.Font.Parse(a.ctx.font).fontSize),e=this.parent.style("font-style").valueOrDefault(a.Font.Parse(a.ctx.font).fontStyle),f=this.getText();c.isRTL&&(f=f.split("").reverse().join(""));for(var g=a.ToNumberArray(this.parent.attribute("dx").value),h=0;h<f.length;h++){var i=this.getGlyph(c,f,h),j=d/c.fontFace.unitsPerEm;b.translate(this.x,this.y),b.scale(j,-j);var k=b.lineWidth;b.lineWidth=b.lineWidth*c.fontFace.unitsPerEm/d,"italic"==e&&b.transform(1,0,.4,1,0,0),i.render(b),"italic"==e&&b.transform(1,0,-.4,1,0,0),b.lineWidth=k,b.scale(1/j,-1/j),b.translate(-this.x,-this.y),this.x+=d*(i.horizAdvX||c.horizAdvX)/c.fontFace.unitsPerEm,"undefined"==typeof g[h]||isNaN(g[h])||(this.x+=g[h])}}},this.getText=function(){},this.measureTextRecursive=function(a){for(var b=this.measureText(a),c=0;c<this.children.length;c++)b+=this.children[c].measureTextRecursive(a);return b},this.measureText=function(b){var c=this.parent.style("font-family").getDefinition();if(null!=c){var d=this.parent.style("font-size").numValueOrDefault(a.Font.Parse(a.ctx.font).fontSize),e=0,f=this.getText();c.isRTL&&(f=f.split("").reverse().join(""));for(var g=a.ToNumberArray(this.parent.attribute("dx").value),h=0;h<f.length;h++){var i=this.getGlyph(c,f,h);e+=(i.horizAdvX||c.horizAdvX)*d/c.fontFace.unitsPerEm,"undefined"==typeof g[h]||isNaN(g[h])||(e+=g[h])}return e}var j=a.compressSpaces(this.getText());if(!b.measureText)return 10*j.length;b.save(),this.setContext(b);var k=b.measureText(j).width;return b.restore(),k}},a.Element.TextElementBase.prototype=new a.Element.RenderedElementBase,a.Element.tspan=function(b){this.captureTextNodes=!0,this.base=a.Element.TextElementBase,this.base(b),this.text=b.nodeValue||b.text||"",this.getText=function(){return this.text}},a.Element.tspan.prototype=new a.Element.TextElementBase,a.Element.tref=function(b){this.base=a.Element.TextElementBase,this.base(b),this.getText=function(){var a=this.getHrefAttribute().getDefinition();return null!=a?a.children[0].getText():void 0}},a.Element.tref.prototype=new a.Element.TextElementBase,a.Element.a=function(b){this.base=a.Element.TextElementBase,this.base(b),this.hasText=!0;for(var c=0;c<b.childNodes.length;c++)3!=b.childNodes[c].nodeType&&(this.hasText=!1);this.text=this.hasText?b.childNodes[0].nodeValue:"",this.getText=function(){return this.text},this.baseRenderChildren=this.renderChildren,this.renderChildren=function(b){if(this.hasText){this.baseRenderChildren(b);var c=new a.Property("fontSize",a.Font.Parse(a.ctx.font).fontSize);a.Mouse.checkBoundingBox(this,new a.BoundingBox(this.x,this.y-c.toPixels("y"),this.x+this.measureText(b),this.y))}else{var d=new a.Element.g;d.children=this.children,d.parent=this,d.render(b)}},this.onclick=function(){window.open(this.getHrefAttribute().value)},this.onmousemove=function(){a.ctx.canvas.style.cursor="pointer"}},a.Element.a.prototype=new a.Element.TextElementBase,a.Element.image=function(b){this.base=a.Element.RenderedElementBase,this.base(b);var c=this.getHrefAttribute().value,d=c.match(/\.svg$/);if(a.Images.push(this),this.loaded=!1,d)this.img=a.ajax(c),this.loaded=!0;else{this.img=document.createElement("img");var e=this;this.img.onload=function(){e.loaded=!0},this.img.onerror=function(){"undefined"!=typeof console&&(console.log('ERROR: image "'+c+'" not found'),e.loaded=!0)},this.img.src=c}this.renderChildren=function(b){var c=this.attribute("x").toPixels("x"),e=this.attribute("y").toPixels("y"),f=this.attribute("width").toPixels("x"),g=this.attribute("height").toPixels("y");0!=f&&0!=g&&(b.save(),d?b.drawSvg(this.img,c,e,f,g):(b.translate(c,e),a.AspectRatio(b,this.attribute("preserveAspectRatio").value,f,this.img.width,g,this.img.height,0,0),b.drawImage(this.img,0,0)),b.restore())},this.getBoundingBox=function(){var b=this.attribute("x").toPixels("x"),c=this.attribute("y").toPixels("y"),d=this.attribute("width").toPixels("x"),e=this.attribute("height").toPixels("y");return new a.BoundingBox(b,c,b+d,c+e)}},a.Element.image.prototype=new a.Element.RenderedElementBase,a.Element.g=function(b){this.base=a.Element.RenderedElementBase,this.base(b),this.getBoundingBox=function(){for(var b=new a.BoundingBox,c=0;c<this.children.length;c++)b.addBoundingBox(this.children[c].getBoundingBox());return b}},a.Element.g.prototype=new a.Element.RenderedElementBase,a.Element.symbol=function(b){this.base=a.Element.RenderedElementBase,this.base(b),this.baseSetContext=this.setContext,this.setContext=function(b){if(this.baseSetContext(b),this.attribute("viewBox").hasValue()){var c=a.ToNumberArray(this.attribute("viewBox").value),d=c[0],e=c[1];width=c[2],height=c[3],a.AspectRatio(b,this.attribute("preserveAspectRatio").value,this.attribute("width").toPixels("x"),width,this.attribute("height").toPixels("y"),height,d,e),a.ViewPort.SetCurrent(c[2],c[3])}}},a.Element.symbol.prototype=new a.Element.RenderedElementBase,a.Element.style=function(b){this.base=a.Element.ElementBase,this.base(b);for(var c="",d=0;d<b.childNodes.length;d++)c+=b.childNodes[d].nodeValue;c=c.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,""),c=a.compressSpaces(c);for(var e=c.split("}"),d=0;d<e.length;d++)if(""!=a.trim(e[d]))for(var f=e[d].split("{"),g=f[0].split(","),h=f[1].split(";"),i=0;i<g.length;i++){var j=a.trim(g[i]);if(""!=j){for(var k={},l=0;l<h.length;l++){var m=h[l].indexOf(":"),n=h[l].substr(0,m),o=h[l].substr(m+1,h[l].length-m);null!=n&&null!=o&&(k[a.trim(n)]=new a.Property(a.trim(n),a.trim(o)))}if(a.Styles[j]=k,"@font-face"==j)for(var p=k["font-family"].value.replace(/"/g,""),q=k.src.value.split(","),r=0;r<q.length;r++)if(q[r].indexOf('format("svg")')>0)for(var s=q[r].indexOf("url"),t=q[r].indexOf(")",s),u=q[r].substr(s+5,t-s-6),v=a.parseXml(a.ajax(u)),w=v.getElementsByTagName("font"),x=0;x<w.length;x++){var y=a.CreateElement(w[x]);a.Definitions[p]=y}}}},a.Element.style.prototype=new a.Element.ElementBase,a.Element.use=function(b){this.base=a.Element.RenderedElementBase,this.base(b),this.baseSetContext=this.setContext,this.setContext=function(a){this.baseSetContext(a),this.attribute("x").hasValue()&&a.translate(this.attribute("x").toPixels("x"),0),this.attribute("y").hasValue()&&a.translate(0,this.attribute("y").toPixels("y"))
},this.getDefinition=function(){var a=this.getHrefAttribute().getDefinition();return this.attribute("width").hasValue()&&(a.attribute("width",!0).value=this.attribute("width").value),this.attribute("height").hasValue()&&(a.attribute("height",!0).value=this.attribute("height").value),a},this.path=function(a){var b=this.getDefinition();null!=b&&b.path(a)},this.getBoundingBox=function(){var a=this.getDefinition();return null!=a?a.getBoundingBox():void 0},this.renderChildren=function(a){var b=this.getDefinition();if(null!=b){var c=b.parent;b.parent=null,b.render(a),b.parent=c}}},a.Element.use.prototype=new a.Element.RenderedElementBase,a.Element.mask=function(b){this.base=a.Element.ElementBase,this.base(b),this.apply=function(b,c){var d=this.attribute("x").toPixels("x"),e=this.attribute("y").toPixels("y"),f=this.attribute("width").toPixels("x"),g=this.attribute("height").toPixels("y");if(0==f&&0==g){for(var h=new a.BoundingBox,i=0;i<this.children.length;i++)h.addBoundingBox(this.children[i].getBoundingBox());var d=Math.floor(h.x1),e=Math.floor(h.y1),f=Math.floor(h.width()),g=Math.floor(h.height())}var j=c.attribute("mask").value;c.attribute("mask").value="";var k=document.createElement("canvas");k.width=d+f,k.height=e+g;var l=k.getContext("2d");this.renderChildren(l);var m=document.createElement("canvas");m.width=d+f,m.height=e+g;var n=m.getContext("2d");c.render(n),n.globalCompositeOperation="destination-in",n.fillStyle=l.createPattern(k,"no-repeat"),n.fillRect(0,0,d+f,e+g),b.fillStyle=n.createPattern(m,"no-repeat"),b.fillRect(0,0,d+f,e+g),c.attribute("mask").value=j},this.render=function(){}},a.Element.mask.prototype=new a.Element.ElementBase,a.Element.clipPath=function(b){this.base=a.Element.ElementBase,this.base(b),this.apply=function(b){for(var c=0;c<this.children.length;c++){var d=this.children[c];if("undefined"!=typeof d.path){var e=null;d.attribute("transform").hasValue()&&(e=new a.Transform(d.attribute("transform").value),e.apply(b)),d.path(b),b.clip(),e&&e.unapply(b)}}},this.render=function(){}},a.Element.clipPath.prototype=new a.Element.ElementBase,a.Element.filter=function(b){this.base=a.Element.ElementBase,this.base(b),this.apply=function(a,b){var c=b.getBoundingBox(),d=Math.floor(c.x1),e=Math.floor(c.y1),f=Math.floor(c.width()),g=Math.floor(c.height()),h=b.style("filter").value;b.style("filter").value="";for(var i=0,j=0,k=0;k<this.children.length;k++){var l=this.children[k].extraFilterDistance||0;i=Math.max(i,l),j=Math.max(j,l)}var m=document.createElement("canvas");m.width=f+2*i,m.height=g+2*j;var n=m.getContext("2d");n.translate(-d+i,-e+j),b.render(n);for(var k=0;k<this.children.length;k++)this.children[k].apply(n,0,0,f+2*i,g+2*j);a.drawImage(m,0,0,f+2*i,g+2*j,d-i,e-j,f+2*i,g+2*j),b.style("filter",!0).value=h},this.render=function(){}},a.Element.filter.prototype=new a.Element.ElementBase,a.Element.feMorphology=function(b){this.base=a.Element.ElementBase,this.base(b),this.apply=function(){}},a.Element.feMorphology.prototype=new a.Element.ElementBase,a.Element.feColorMatrix=function(b){function c(a,b,c,d,e,f){return a[4*c*d+4*b+f]}function d(a,b,c,d,e,f,g){a[4*c*d+4*b+f]=g}this.base=a.Element.ElementBase,this.base(b),this.apply=function(a,b,e,f,g){for(var h=a.getImageData(0,0,f,g),e=0;g>e;e++)for(var b=0;f>b;b++){var i=c(h.data,b,e,f,g,0),j=c(h.data,b,e,f,g,1),k=c(h.data,b,e,f,g,2),l=(i+j+k)/3;d(h.data,b,e,f,g,0,l),d(h.data,b,e,f,g,1,l),d(h.data,b,e,f,g,2,l)}a.clearRect(0,0,f,g),a.putImageData(h,0,0)}},a.Element.feColorMatrix.prototype=new a.Element.ElementBase,a.Element.feGaussianBlur=function(b){this.base=a.Element.ElementBase,this.base(b),this.blurRadius=Math.floor(this.attribute("stdDeviation").numValue()),this.extraFilterDistance=this.blurRadius,this.apply=function(b,c,d,e,f){return"undefined"==typeof stackBlurCanvasRGBA?("undefined"!=typeof console&&console.log("ERROR: StackBlur.js must be included for blur to work"),void 0):(b.canvas.id=a.UniqueId(),b.canvas.style.display="none",document.body.appendChild(b.canvas),stackBlurCanvasRGBA(b.canvas.id,c,d,e,f,this.blurRadius),document.body.removeChild(b.canvas),void 0)}},a.Element.feGaussianBlur.prototype=new a.Element.ElementBase,a.Element.title=function(){},a.Element.title.prototype=new a.Element.ElementBase,a.Element.desc=function(){},a.Element.desc.prototype=new a.Element.ElementBase,a.Element.MISSING=function(a){"undefined"!=typeof console&&console.log("ERROR: Element '"+a.nodeName+"' not yet implemented.")},a.Element.MISSING.prototype=new a.Element.ElementBase,a.CreateElement=function(b){var c=b.nodeName.replace(/^[^:]+:/,"");c=c.replace(/\-/g,"");var d=null;return d="undefined"!=typeof a.Element[c]?new a.Element[c](b):new a.Element.MISSING(b),d.type=b.nodeName,d},a.load=function(b,c){a.loadXml(b,a.ajax(c))},a.loadXml=function(b,c){a.loadXmlDoc(b,a.parseXml(c))},a.loadXmlDoc=function(b,c){a.init(b);var d=function(a){for(var c=b.canvas;c;)a.x-=c.offsetLeft,a.y-=c.offsetTop,c=c.offsetParent;return window.scrollX&&(a.x+=window.scrollX),window.scrollY&&(a.y+=window.scrollY),a};1!=a.opts.ignoreMouse&&(b.canvas.onclick=function(b){var c=d(new a.Point(null!=b?b.clientX:event.clientX,null!=b?b.clientY:event.clientY));a.Mouse.onclick(c.x,c.y)},b.canvas.onmousemove=function(b){var c=d(new a.Point(null!=b?b.clientX:event.clientX,null!=b?b.clientY:event.clientY));a.Mouse.onmousemove(c.x,c.y)});var e=a.CreateElement(c.documentElement);e.root=!0;var f=!0,g=function(){a.ViewPort.Clear(),b.canvas.parentNode&&a.ViewPort.SetCurrent(b.canvas.parentNode.clientWidth,b.canvas.parentNode.clientHeight),1!=a.opts.ignoreDimensions&&(e.style("width").hasValue()&&(b.canvas.width=e.style("width").toPixels("x"),b.canvas.style.width=b.canvas.width+"px"),e.style("height").hasValue()&&(b.canvas.height=e.style("height").toPixels("y"),b.canvas.style.height=b.canvas.height+"px"));var d=b.canvas.clientWidth||b.canvas.width,g=b.canvas.clientHeight||b.canvas.height;if(1==a.opts.ignoreDimensions&&e.style("width").hasValue()&&e.style("height").hasValue()&&(d=e.style("width").toPixels("x"),g=e.style("height").toPixels("y")),a.ViewPort.SetCurrent(d,g),null!=a.opts.offsetX&&(e.attribute("x",!0).value=a.opts.offsetX),null!=a.opts.offsetY&&(e.attribute("y",!0).value=a.opts.offsetY),null!=a.opts.scaleWidth&&null!=a.opts.scaleHeight){var h=1,i=1,j=a.ToNumberArray(e.attribute("viewBox").value);e.attribute("width").hasValue()?h=e.attribute("width").toPixels("x")/a.opts.scaleWidth:isNaN(j[2])||(h=j[2]/a.opts.scaleWidth),e.attribute("height").hasValue()?i=e.attribute("height").toPixels("y")/a.opts.scaleHeight:isNaN(j[3])||(i=j[3]/a.opts.scaleHeight),e.attribute("width",!0).value=a.opts.scaleWidth,e.attribute("height",!0).value=a.opts.scaleHeight,e.attribute("viewBox",!0).value="0 0 "+d*h+" "+g*i,e.attribute("preserveAspectRatio",!0).value="none"}1!=a.opts.ignoreClear&&b.clearRect(0,0,d,g),e.render(b),f&&(f=!1,"function"==typeof a.opts.renderCallback&&a.opts.renderCallback(c))},h=!0;a.ImagesLoaded()&&(h=!1,g()),a.intervalID=setInterval(function(){var b=!1;if(h&&a.ImagesLoaded()&&(h=!1,b=!0),1!=a.opts.ignoreMouse&&(b|=a.Mouse.hasEvents()),1!=a.opts.ignoreAnimation)for(var c=0;c<a.Animations.length;c++)b|=a.Animations[c].update(1e3/a.FRAMERATE);"function"==typeof a.opts.forceRedraw&&1==a.opts.forceRedraw()&&(b=!0),b&&(g(),a.Mouse.runEvents())},1e3/a.FRAMERATE)},a.stop=function(){a.intervalID&&clearInterval(a.intervalID)},a.Mouse=new function(){this.events=[],this.hasEvents=function(){return 0!=this.events.length},this.onclick=function(a,b){this.events.push({type:"onclick",x:a,y:b,run:function(a){a.onclick&&a.onclick()}})},this.onmousemove=function(a,b){this.events.push({type:"onmousemove",x:a,y:b,run:function(a){a.onmousemove&&a.onmousemove()}})},this.eventElements=[],this.checkPath=function(a,b){for(var c=0;c<this.events.length;c++){var d=this.events[c];b.isPointInPath&&b.isPointInPath(d.x,d.y)&&(this.eventElements[c]=a)}},this.checkBoundingBox=function(a,b){for(var c=0;c<this.events.length;c++){var d=this.events[c];b.isPointInBox(d.x,d.y)&&(this.eventElements[c]=a)}},this.runEvents=function(){a.ctx.canvas.style.cursor="";for(var b=0;b<this.events.length;b++)for(var c=this.events[b],d=this.eventElements[b];d;)c.run(d),d=d.parent;this.events=[],this.eventElements=[]}},a}this.canvg=function(b,c,d){if(null!=b||null!=c||null!=d){d=d||{},"string"==typeof b&&(b=document.getElementById(b)),null!=b.svg&&b.svg.stop();var j=a();(1!=b.childNodes.length||"OBJECT"!=b.childNodes[0].nodeName)&&(b.svg=j),j.opts=d;var k=b.getContext("2d");"undefined"!=typeof c.documentElement?j.loadXmlDoc(k,c):"<"==c.substr(0,1)?j.loadXml(k,c):j.load(k,c)}else for(var e=document.getElementsByTagName("svg"),f=0;f<e.length;f++){var g=e[f],h=document.createElement("canvas");h.width=g.clientWidth,h.height=g.clientHeight,g.parentNode.insertBefore(h,g),g.parentNode.removeChild(g);var i=document.createElement("div");i.appendChild(g),canvg(h,i.innerHTML)}}}(),"undefined"!=typeof CanvasRenderingContext2D&&(CanvasRenderingContext2D.prototype.drawSvg=function(a,b,c,d,e){canvg(this.canvas,a,{ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0,ignoreClear:!0,offsetX:b,offsetY:c,scaleWidth:d,scaleHeight:e})}),AmCharts.isModern){var saveAs=saveAs||"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob&&navigator.msSaveOrOpenBlob.bind(navigator)||function(a){"use strict";var b=a.document,c=function(){return a.URL||a.webkitURL||a},d=a.URL||a.webkitURL||a,e=b.createElementNS("http://www.w3.org/1999/xhtml","a"),f=!a.externalHost&&"download"in e,h=a.webkitRequestFileSystem,i=a.requestFileSystem||h||a.mozRequestFileSystem,j=function(b){(a.setImmediate||a.setTimeout)(function(){throw b},0)},k="application/octet-stream",l=0,m=[],n=function(){for(var a=m.length;a--;){var b=m[a];"string"==typeof b?d.revokeObjectURL(b):b.remove()}m.length=0},o=function(a,b,c){b=[].concat(b);for(var d=b.length;d--;){var e=a["on"+b[d]];if("function"==typeof e)try{e.call(a,c||a)}catch(f){j(f)}}},p=function(d,g){var q,r,x,j=this,n=d.type,p=!1,s=function(){var a=c().createObjectURL(d);return m.push(a),a},t=function(){o(j,"writestart progress write writeend".split(" "))},u=function(){(p||!q)&&(q=s(d)),r?r.location.href=q:window.open(q,"_blank"),j.readyState=j.DONE,t()},v=function(a){return function(){return j.readyState!==j.DONE?a.apply(this,arguments):void 0}},w={create:!0,exclusive:!1};if(j.readyState=j.INIT,g||(g="download"),f){q=s(d),b=a.document,e=b.createElementNS("http://www.w3.org/1999/xhtml","a"),e.href=q,e.download=g;var y=b.createEvent("MouseEvents");return y.initMouseEvent("click",!0,!1,a,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(y),j.readyState=j.DONE,t(),void 0}return a.chrome&&n&&n!==k&&(x=d.slice||d.webkitSlice,d=x.call(d,0,d.size,k),p=!0),h&&"download"!==g&&(g+=".download"),(n===k||h)&&(r=a),i?(l+=d.size,i(a.TEMPORARY,l,v(function(a){a.root.getDirectory("saved",w,v(function(a){var b=function(){a.getFile(g,w,v(function(a){a.createWriter(v(function(b){b.onwriteend=function(b){r.location.href=a.toURL(),m.push(a),j.readyState=j.DONE,o(j,"writeend",b)},b.onerror=function(){var a=b.error;a.code!==a.ABORT_ERR&&u()},"writestart progress write abort".split(" ").forEach(function(a){b["on"+a]=j["on"+a]}),b.write(d),j.abort=function(){b.abort(),j.readyState=j.DONE},j.readyState=j.WRITING}),u)}),u)};a.getFile(g,{create:!1},v(function(a){a.remove(),b()}),v(function(a){a.code===a.NOT_FOUND_ERR?b():u()}))}),u)}),u),void 0):(u(),void 0)},q=p.prototype,r=function(a,b){return new p(a,b)};return q.abort=function(){var a=this;a.readyState=a.DONE,o(a,"abort")},q.readyState=q.INIT=0,q.WRITING=1,q.DONE=2,q.error=q.onwritestart=q.onprogress=q.onwrite=q.onabort=q.onerror=q.onwriteend=null,a.addEventListener("unload",n,!1),r}(this.self||this.window||this.content);"undefined"!=typeof module&&(module.exports=saveAs)}
/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},S=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||S).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.3",E=function(e,t){return new E.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:f,constructor:E,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(E.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||E.isPlainObject(n)?n:{},i=!1,a[t]=E.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},E.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?E.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,S,y,s,c,v,E="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,S)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=E)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{if(d.cssSupportsSelector&&!CSS.supports("selector(:is("+c+"))"))throw new Error;return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===E&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[E]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,S=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.cssSupportsSelector=ce(function(){return CSS.supports("selector(*)")&&C.querySelectorAll(":is(:jqfake)")&&!CSS.supports("selector(:is(*,:jqfake))")}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=E,!C.getElementsByName||!C.getElementsByName(E).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&S)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+E+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+E+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),d.cssSupportsSelector||y.push(":has"),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&S&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!S):void 0;return void 0!==r?r:d.attributes||!S?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[E]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[E]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=S?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[E]||(e[E]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[E]&&(y=Ce(y)),v&&!v[E]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Se(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[E]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Se(e.slice(s,n)),n<r&&Se(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Se(t[n]))[E]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!S);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&S&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!S,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=E.split("").sort(j).join("")===E,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);E.find=d,E.expr=d.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=d.uniqueSort,E.text=d.getText,E.isXMLDoc=d.isXML,E.contains=d.contains,E.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=E.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?E.grep(e,function(e){return e===n!==r}):"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==r}):E.filter(n,e,r)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?E(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:S,!0)),N.test(r[1])&&E.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=S.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,D=E(S);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(E(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(H[r]||E.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(P)||[],function(e,t){n[t]=!0}),n):E.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){E.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return E.each(arguments,function(e,t){var n;while(-1<(n=E.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<E.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),C.setTimeout(t))}}return E.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?E.extend(e,a):a}},s={};return E.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=E.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){C.setTimeout(function(){throw e})};var F=E.Deferred();function $(){S.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),E.ready()}E.fn.ready=function(e){return F.then(e)["catch"](function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||F.resolveWith(S,[E])}}),E.ready.then=F.then,"complete"===S.readyState||"loading"!==S.readyState&&!S.documentElement.doScroll?C.setTimeout(E.ready):(S.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(E(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=E.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:E.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=S.documentElement,ie=function(e){return E.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===E.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=s(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&te.exec(E.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)E.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,E.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=E.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}E.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?E(this).show():E(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=S.createDocumentFragment().appendChild(S.createElement("div")),(fe=S.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?E.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))E.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;E.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<E.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return S.activeElement}catch(e){}}()==("focus"===t)}function Se(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Se(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}function Ee(e,i,o){o?(Y.set(e,i,!1),E.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(E.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:E.event.trigger(E.extend(r[0],E.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&E.event.add(e,i,we)}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(re,i),n.guid||(n.guid=E.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=E.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=E.event.special[d]||{},c=E.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),E.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=E.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||E.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)E.event.remove(e,d+t[l],n,r,!0);E.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=E.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=E.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=E.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(t,e){E.event.special[t]={setup:function(){return Ee(this,t,Ce),!1},trigger:function(){return Ee(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,r){return Se(this,e,t,n,r)},one:function(e,t,n,r){return Se(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){E.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)E.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=E.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=E.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=E.clone(u,!0,!0),s&&E.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&!u.noModule&&E._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace($e,"$1")||void 0),""!==a||ie(e)||(a=E.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=S.createElement("div"),l=S.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,E.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=S.createElement("table"),t=S.createElement("tr"),n=S.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=S.createElement("div").style,Xe={};function Ve(e){var t=E.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+ne[a]+"Width",!0,i))):(u+=E.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=E.css(e,"border"+ne[a]+"Width",!0,i):s+=E.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,u){E.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===E.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=E.css(e,u)),Je(0,t,s)}}}),E.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(E.cssHooks[i+o].set=Je)}),E.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),((E.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||!E.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=et.prototype.init,E.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===S.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,E.fx.interval),E.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=E.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=E.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=E.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(E._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return E.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),E.fx.timer(E.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}E.Animation=E.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=E._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,E.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||E.style(e,r)}if((u=!E.isEmptyObject(t))||!E.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=E.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=E.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===E.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)E.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=E.isEmptyObject(t),o=E.speed(e,n,r),a=function(){var e=ft(this,E.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=E.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||E.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=E.timers,o=n?n.length:0;for(t.finish=!0,E.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),E.each(["toggle","show","hide"],function(e,r){var i=E.fn[r];E.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),E.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){E.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),tt=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){nt||(nt=!0,st())},E.fx.stop=function(){nt=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=S.createElement("input"),it=S.createElement("select").appendChild(S.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=S.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return B(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||E.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}E.fn.extend({prop:function(e,t){return B(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){E(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=E(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;E.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),(r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:yt(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=E(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=E.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},v.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||S],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||S,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+E.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[E.expando]?e:new E.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),c=E.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||S)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),E.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),E.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),v.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){E.event.simulate(r,e.target,E.event.fix(e))};E.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},St=/\?/;E.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||E.error("Invalid XML: "+(n?E.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Et=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))E.each(e,function(e,t){r||Et.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=S.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,E.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&E.extend(!0,e,r),e}Wt.href=Tt.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,E.ajaxSettings),t):Bt(E.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=E.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?E(v):E.event,x=E.Deferred(),b=E.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=S.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=E.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=E.event&&y.global)&&0==E.active++&&E.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(St.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(St.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(E.lastModified[f]&&T.setRequestHeader("If-Modified-Since",E.lastModified[f]),E.etag[f]&&T.setRequestHeader("If-None-Match",E.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<E.inArray("script",y.dataTypes)&&E.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(E.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(E.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--E.active||E.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,i){E[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),E.ajax(E.extend({url:e,type:i,dataType:r,data:t,success:n},E.isPlainObject(e)&&e))}}),E.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),E._evalUrl=function(e,t,n){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){E.globalEval(e,t,n)}})},E.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=E.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,E.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),E.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=E("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),S.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||E.expando+"_"+Ct.guid++;return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||E.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?E(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=S.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=S.implementation.createHTMLDocument("")).createElement("base")).href=S.location.href,t.head.appendChild(r)):t=S),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o},E.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.expr.pseudos.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem}).length},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=E.css(e,"position"),c=E(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===E.css(e,"position"))e=e.offsetParent;return e||re})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?E.css(e,t,i):E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;E.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=A,E.isFunction=m,E.isWindow=x,E.camelCase=X,E.type=w,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},E.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var Yt=C.jQuery,Qt=C.$;return E.noConflict=function(e){return C.$===E&&(C.$=Qt),e&&C.jQuery===E&&(C.jQuery=Yt),E},"undefined"==typeof e&&(C.jQuery=C.$=E),E});

// Written by Tom Sanders - March, 2015
// ------------------------------------------------------


// Main functions
// -----------------------------------------


// Load data from Statistical warehouse
function loadGraph(firstLoad) {
    if (typeof statsBoxes != 'undefined' && statsBoxes != null && statsBoxes) {
        generateStatsTable();

        return;
    }

    if (!firstLoad) {
        chart.clear();
        resetChart();

        //Remove table
        $('#chart-container .ecb-tableHolder').remove();

        //Why is this here?
        //$('#chart-container .ecb-tabNavs ul li span').removeAttr('class');
    }

    //get total number of charts
    var getNum = function (list) {
        var num = 0;

        for (var n = 0; n < Object.keys(list).length; n++) {
            var value = list[Object.keys(list)[n]];
            if (typeof value === 'object') {
                num += getNum(value);
            } else {
                num++;
            }
        }

        return num;
    };

    if (typeof (current_state) == 'undefined') {
        current_state = null;
    }

    var filenames = get_filename(current_state);

    var numElements = getNum(filenames);


    var id_function = function (id, filenames) {
        return function (responseText) {

            var xml_doc = responseText.documentElement;
            var points = getElementByTagName(xml_doc, 'generic', 'Obs');

            chartData = XMLtoJSON(chartData, points, id);
            numLoaded++;

            if (numLoaded == numElements) {
                whenDataLoaded(firstLoad);
            }
        };
    };

    var read_files = function (filenames, pre_id) {
        for (var id = 0; id < Object.keys(filenames).length; id++) {

            var key = Object.keys(filenames)[id];

            if (typeof filenames[key] === 'object') {

                read_files(filenames[key], pre_id + id + "_");
            }
            if (key != 'parent') {

                $.ajax({ url: key, success: id_function(pre_id + id, filenames) });
            }

        }
    };

    var numLoaded = 0;

    read_files(filenames, '');
}



// After all data has been loaded, draw the graph
function whenDataLoaded(firstLoad) {
    var filenames = get_filename();

    // If there is only 1 line, there should be no legend
    if (Object.keys(filenames).length == 1) {
        $("#chart-canvas").attr("class", "no-legend");
    }


    var periodSelector = new AmCharts.PeriodSelector();
    periodSelector.periods = [{
        period: "MM",
        count: 3,
        label: "3m"
    }, {
        period: "MM",
        count: 6,
        label: "6m"
    }, {
        period: "YYYY",
        selected: true,
        count: 1,
        label: "1y"
    }, {
        period: "YYYY",
        count: 2,
        label: "2y"
    }, {
        period: "YYYY",
        count: 5,
        label: "5y"
    }, {
        period: "YYYY",
        count: 10,
        label: "10y"
    }, {
        period: "MAX",
        label: "all",
        selected: true
    }];
    periodSelector.position = "top";
    periodSelector.inputFieldsEnabled = true;
    periodSelector.inputFieldWidth = 110;
    if (typeof addPeriodSelector === 'undefined' || addPeriodSelector == null) {
        addPeriodSelector = true;
    }

    if (addPeriodSelector) {
        chart.periodSelector = periodSelector;
    }



    if (typeof maxNumPoints === 'undefined' || maxNumPoints == null) {
        maxNumPoints = 500;
    }

    //chart.type='stock';
    chart.categoryAxesSettings.maxSeries = maxNumPoints;


    var numFiles = Object.keys(filenames).length;

    if (typeof dateFormat === 'undefined' || dateFormat == null) {
        dateFormat = "YYYY-MM";
    }

    chart.dataDateFormat = dateFormat;
    chart.pathToImages = options['pathToImages'];

    chart.fontFamily = options.amExport.menuItemStyle['fontFamily'];
    chart.fontSize = options.amExport.menuItemStyle['fontSize'];


    var dataSet = new AmCharts.DataSet();
    dataSet.fieldMappings = [{
        fromField: "point_date",
        toField: "point_date",
    }];

    // do recursive fieldmapping here :)
    var setFieldMappings = function (list, prevID) {
        for (var i = 0; i < Object.keys(list).length; i++) {
            var key = Object.keys(list)[i];
            var value = list[key];
            if (key != 'parent') {
                if (typeof value === 'object') {
                    setFieldMappings(value, prevID + i + '_');
                }
                dataSet.fieldMappings[dataSet.fieldMappings.length] = { fromField: "line" + prevID + i, toField: "line" + prevID + i };
            }

        }
    }

    setFieldMappings(filenames, '');




    dataSet.dataProvider = chartData;
    dataSet.categoryField = "point_date";
    dataSet.showInCompare = false;
    chart.dataSets = [dataSet];

    //inverse dataset
    if (!(typeof (addInverseOption) === 'undefined' || addInverseOption == null) && addInverseOption) {
        dataSet.title = 'EUR vs. ' + currencyCode.toUpperCase();
        generateInverseData();
        var inverseDataSet = new AmCharts.DataSet();
        inverseDataSet.title = currencyCode.toUpperCase() + ' vs. EUR';
        inverseDataSet.fieldMappings = [{
            fromField: "point_date",
            toField: "point_date",
        }];

        for (var i = 0; i < numFiles; i++) {
            inverseDataSet.fieldMappings[i] = { fromField: "line" + i, toField: "line" + i };
        }

        inverseDataSet.dataProvider = chartDataInverse;
        inverseDataSet.categoryField = "point_date";
        inverseDataSet.showInCompare = false;
        chart.dataSets[1] = inverseDataSet;

        var dataSetSelector = new AmCharts.DataSetSelector();

        dataSetSelector.selectText = "Show: "
        dataSetSelector.position = "bottom";
        chart.dataSetSelector = dataSetSelector;
    }



    if (typeof lineWidth === 'undefined' || lineWidth == null) {
        lineWidth = 2;
    }

    if (typeof homePageStyling === 'undefined' || homePageStyling == null) {
        homePageStyling = false;
    }

    var generateGraph = function (list, addToChart, prevID, rootID) {
        for (var id = 0; id < Object.keys(list).length; id++) {
            var key = Object.keys(list)[id];

            var title = list[key];
            if (title != 'parent') {
                if (typeof title === 'object') {

                    //Create graphs of all children and add them to graphs                        
                    generateGraph(title, false, prevID + id + "_", rootID == -1 ? id : rootID);
                    title = title['parent'];

                }
                var graph = new AmCharts.StockGraph();
                graph.valueField = "line" + prevID + id;
                graph.type = "line";
                //graph.balloonText = "[[category]]: <b>[[value]]</b> ("+title+")";
                graph.balloonText = "[[category]]: <b>[[value]]</b>";
                graph.lineThickness = lineWidth;
                graph.useDataSetColors = false;
                graph.lineColor = generateColor(rootID != -1 ? rootID : id);

                if (homePageStyling) {
                    graph.balloonFunction = adjustBalloonText;
                } else {
                    graph.balloonText = "[[category]]: <b>[[value]]</b> (" + title + ")";
                }



                if (rootID != -1) {
                    graph.dashLength = 2.5 + 10 * (id - 1);
                }
                if (addToChart) {
                    stockPanel.addStockGraph(graph);
                }

                graphs["line" + prevID + id] = graph;
            }
        }
    }

    //Loop over all files
    generateGraph(filenames, true, '', -1);

    chart.panels = [stockPanel];


    //Styling
    if (homePageStyling) {
        var MyAxisColor = "#7F7F7F";
        var MyFontSize = 9;

        var va = new AmCharts.ValueAxis();

        if (typeof valueGridAlpha == 'undefined') {
            valueGridAlpha = 0;
        }

        va.gridAlpha = valueGridAlpha;
        //va.axisColor = "#dddddd";
        va.axisColor = "#4D70B8";
        va.color = MyAxisColor;
        va.fontSize = MyFontSize;
        va.axisThickness = 1;
        //va.labelOffset = -5;
        va.labelOffset = 0;
        va.tickLength = 2;
        var ca = new AmCharts.CategoryAxis();
        ca.gridAlpha = 0;
        //ca.axisColor = "#dddddd";
        ca.axisColor = "#4D70B8";
        ca.ignoreAxisWidth = 0;
        ca.parseDates = true;
        ca.color = MyAxisColor;
        ca.fontSize = MyFontSize;
        ca.labelRotation = 0;
        ca.tickLength = 2;
        ca.labelOffset = -5;
        ca.axisThickness = 1;
        ca.gridPosition = "start";



        ca.boldPeriodBeginning = 0;
        stockPanel.addValueAxis(va);
        stockPanel.categoryAxis = ca;
        stockPanel.showCategoryAxis = true;

        stockPanel.autoMargins = 1;

        chart.categoryAxesSettings.axisAlpha = 1;
        chart.categoryAxesSettings.tickLength = 5
        chart.categoryAxesSettings.equalSpacing = 1;


        chart.valueAxesSettings.axisAlpha = 1;
        chart.valueAxesSettings.tickLength = 5
        chart.valueAxesSettings.equalSpacing = 1;
        chart.valueAxesSettings.inside = false;

        chart.categoryAxesSettings.minPeriod = "MM";


        if (typeof showAverage != 'undefined' && showAverage) {
            var average = new AmCharts.Guide();

            average.date = averageBeginDate;
            average.lineAlpha = 0.5;
            average.lineColor = "#000000";
            ca.addGuide(average);

            var averageValue = getAverageOfLine('line0');

            var f = new AmCharts.TrendLine()
            f.initialDate = averageBeginDate;
            f.finalDate = new Date();
            f.initialValue = averageValue;
            f.finalValue = averageValue;
            f.valueAxis = va;
            f.categoryAxis = ca;
            f.lineColor = "#ff0000";
            stockPanel.addTrendLine(f);



        }


    }


    var sbsettings = new AmCharts.ChartScrollbarSettings();
    sbsettings.graph = graphs['line0'];
    sbsettings.graphType = "line";
    sbsettings.usePeriod = "WW";
    sbsettings.enabled = addChartSelector;
    chart.chartScrollbarSettings = sbsettings;


    if (typeof showBalloons === 'undefined' || showBalloons == null) {
        showBalloons = true;
    }

    if (typeof isDraggable === 'undefined' || isDraggable == null) {
        isDraggable = true;
    }

    if (showBalloons) {
        var cursorSettings = new AmCharts.ChartCursorSettings();
        cursorSettings.valueBalloonsEnabled = true;
        cursorSettings.categoryBalloonEnabled = false;
        cursorSettings.categoryBalloonDateFormats = [
            { period: "YYYY", format: "YYYY" },
            { period: "MM", format: "MMM, YYYY" },
            { period: "WW", format: "MMM, YYYY" },
            { period: "DD", format: "MMM, YYYY" },
            { period: "hh", format: "JJ:NN" },
            { period: "mm", format: "JJ:NN" },
            { period: "ss", format: "JJ:NN:SS" },
            { period: "fff", format: "JJ:NN:SS" }
        ];

        if (!isDraggable) {
            cursorSettings.pan = false;
            cursorSettings.zoomable = false;

        }


        chart.chartCursorSettings = cursorSettings;
    }

    if (typeof addExport === 'undefined' || addExport == null) {
        addExport = true;
    }

    if (addExport) {
        chart.amExport = {
            menuItemStyle: {
                fontFamily: 'droid_sans, Verdana, Helvetica, sans-serif;',
                fontSize: '11'
            },
            top: 0,
            exportJPG: true,
            exportPNG: true,
            exportPDF: false,
            buttonColor: '#e3e9e3',
            buttonRollOverColor: '#ffffff',
            textRollOverColor: '#000000'
        };
    }


    //stockPanel.categoryAxis.axisAlpha=1;

    $('#chart-container .loading').remove();

    chart.write('chart-canvas');


    if (firstLoad && filters.length > 1) {
        generateFiltersMenu();
    }

    generateLegend(filenames);

    if (filters.length > 1) {
        generateTable(filenames);
    }






    if (addHeader) {
        generateHeading();
        chart.addListener('drawn', function (event) {
            generateHeading();
        });
    }

    switchChartTableVisibilty();
    setOneBalloonOnly();


    if (homePageStyling) {
        chart.chartCursors[0].categoryBalloonEnabled = false;

        chart.chartCursors[0].cursorAlpha = 0;

        if (typeof showAverage != 'undefined' && showAverage && typeof averageBeginDate != 'undefined' && typeof averageBeginDateLabel != 'undefined') {


            stockPanel.addLabel(stockPanel.categoryAxis.dateToCoordinate(new Date()) + 30, stockPanel.valueAxes[0].getCoordinate(averageValue) - 15, averageValue.toFixed(2) + "%", "right", 11, "#ff0000");
            stockPanel.addLabel(stockPanel.categoryAxis.dateToCoordinate(averageBeginDate) + 40, 10, averageBeginDateLabel, "left");

        }
    }


    if (typeof showLastThreeValues != 'undefined' && showLastThreeValues != null && showLastThreeValues) {
        generateLastThreeValues();
    }

    if (typeof (doneLoading) === 'function') {
        doneLoading();
    }


}

//Generate table
function generateTable(filenames) {
    if ($('#chart-container .ecb-contentTable').size() > 0) {
        $('#chart-container .ecb-contentTable').remove();
    }

    var table = '<div class="ecb-tableHolder"><table class="ecb-contentTable">';

    //Heading
    table += '<tr>';
    table += '<th>Date</th>';
    for (var key in filenames) {
        var v = filenames[key];
        if (typeof v === 'object') {
            v = v['parent'];
        }
        table += '<th>' + v + '</th>';
    }
    table += '</tr>';

    //Values
    for (var i = 0; i < chartData.length; i++) {
        date = chartData[i]['point_date'].split('-');
        table += '<tr>';
        table += '<td>' + ((date.length > 2) ? (date[2] + ' ') : '') + monthNames[parseInt(date[1]) - 1] + ' ' + date[0] + '</td>';

        for (var j = 0; j < Object.keys(filenames).length; j++) {
            table += '<td>' + addThousandSeparator(chartData[i]['line' + j]) + '</td>';
        }

        table += '</tr>';
    }

    table += '</table></div>';

    $('#chart-container').append(table);
}

function adjustBalloonText(graphDataItem, graph) {
    var value = graphDataItem.values.value;


    var extra = '';
    // add 1 to go from 0 starting to 1 starting
    var m = (graphDataItem.category.getMonth() + 1);
    m = m < 10 && m > 0 ? '0' + m : m;
    var d = graphDataItem.category.getFullYear() + '-' + m;

    if ($.inArray(d, p_dates) != -1) {
        //We have a provisional value
        extra = ' Provisional';
    }
    if ($.inArray(d, e_dates) != -1) {
        //We have a provisional value
        extra = ' Estimated';
    }
    var month = monthNames[graphDataItem.category.getMonth()];
    var year = graphDataItem.category.getFullYear() + '';
    year = year.substr(2);
    return value.toFixed(1) + '% (' + month + ' \'' + year + ')' + extra;
}

function stringToDate(myString) {

    var arr = myString.split('-');
    if (arr.length == 3) {
        var res = new Date(arr[2] + "-" + arr[1] + "-" + arr[0]);
    } else {
        var res = new Date(arr[1] + "-" + arr[0]);
    }
    return res;
}

function addThousandSeparator(n) {
    var result = "";
    var t = (n + "").split('.');
    var nT = t[0];


    for (var i = 0; i < nT.length; i++) {
        result = nT.charAt(nT.length - i - 1) + result;
        if ((i + 1) % 3 == 0 && i < (nT.length - 1)) {
            result = ',' + result;
        }

    }

    if (t.length > 1) {
        result += "." + t[1];
    }

    return result;
}

function generateHeading() {
    //Select correct dataSet
    var data = chartData;
    var ds = chart.dataSets;
    var inverse = false;

    for (var i = 0; i < ds.length; i++) {
        var set = ds[i];
        if (set.dataParsed) {
            //We found the correct one
            inverse = set.title.substr(0, 3) === 'EUR' ? false : true;

            data = set.dataProvider;
        }
    }

    var header = $("#chart-container div.header");
    if (header.length > 0) {
        header.remove();
    }

    $('#chart-container .ecb-tabContainer').after('<div class="header"></div>');

    //go over data
    var nrDec = 4;
    rateLatest = parseFloat(data[data.length - 1].line0).toFixed(nrDec);
    rateDiff = (parseFloat(rateLatest) - parseFloat(data[data.length - 2].line0)).toFixed(nrDec);
    dateLatest = new Date(data[data.length - 1].point_date);
    dateLatest = (dateLatest.getDate() + " " + monthNames[dateLatest.getMonth()] + " " + dateLatest.getFullYear());

    percentage = (100 * rateDiff / parseFloat(rateLatest)).toFixed(1) + "%";
    diffClass = 'pos';
    var dt = $("input.amChartsInputField");

    if (rateDiff < 0) diffClass = 'neg';

    var rateString = 'EUR 1 = ' + rateLatest + ' ' + currencyCode.toUpperCase();

    if (inverse) {
        rateString = currencyCode.toUpperCase() + ' 1 = ' + rateLatest + ' EUR';
    }

    $('#chart-container .header').append('<h4><span class="fxreflabel">Latest (' + dateLatest + '):</span> ' + rateString + ', <span class="' + diffClass + '"><span class="diff">' + rateDiff + '</span> (<span class="percent">' + percentage + ')</span></span></h4>');
    $('#chart-container .header').append('<div id="min-max-avg-data" class="minmax">Change from <span id="map-start-date"></span> to <span id="map-end-date"></span> <br/><div id="map-min-max-avg"></div></div>');

    var startDate = stringToDate(dt[0].value);
    var endDate = stringToDate(dt[1].value);

    $('#chart-container #map-start-date').html(startDate.getDate() + " " + monthNames[startDate.getMonth()] + " " + startDate.getFullYear());
    $('#chart-container #map-end-date').html(endDate.getDate() + " " + monthNames[endDate.getMonth()] + " " + endDate.getFullYear());

    var indexStart = GetJSONIndex(data, startDate, "start");
    var indexEnd = GetJSONIndex(data, endDate, "end");

    var resultMinMaxAvg = minMaxAvgRate(data, indexStart, indexEnd);

    if (indexEnd >= indexStart) {
        $('#chart-container #map-min-max-avg').html("<span>Minimum (" + resultMinMaxAvg.min_date + "): <strong>" + resultMinMaxAvg.min.toFixed(nrDec) + "</strong></span> <span>Maximum (" + resultMinMaxAvg.max_date + "): <strong>" + resultMinMaxAvg.max.toFixed(nrDec) + "</strong></span> <span>Average: <strong>" + resultMinMaxAvg.avg.toFixed(nrDec) + "</strong></span>");
    } else {//short time period we do not have rates for, like 21-12-2013 / 22-12-2013
        $('#chart-container #map-min-max-avg').html("<strong>ECB did not publish any reference exchange rate for the period selected.</strong>");
    }
}

function generateInverseData() {

    var keys = Object.keys(chartData[0]);
    for (var i = 0; i < chartData.length; i++) {
        chartDataInverse[i] = {};

        for (var j = 0; j < keys.length; j++) {
            var key = keys[j];
            if (key == "point_date") {
                chartDataInverse[i][key] = chartData[i][key];
            } else {
                chartDataInverse[i][key] = (1 / parseFloat(chartData[i][key]));
            }

        }
    }
}

// Copied from Sorin
function minMaxAvgRate(myChartData, index0, index1) {
    var res = [];

    res.min = parseFloat(myChartData[index0].line0);
    res.min_date = '';

    res.max = parseFloat(myChartData[index0].line0);
    res.max_date = '';

    res.avg = 0;

    var nrNans = 0;

    for (i = index0; i <= index1; i++) {
        var d = new Date(myChartData[i].point_date);
        var value = parseFloat(myChartData[i].line0);
        if (value <= res.min) {
            res.min = value;
            res.min_date = d.getDate() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear();
        }
        if (value >= res.max) {
            res.max = value;
            res.max_date = d.getDate() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear();
        }

        if (isNaN(value)) {
            nrNans++;
        } else {
            res.avg += value;
        }

    }

    res.avg = res.avg / (1 + index1 - index0 - nrNans);
    return res;
}

function addDaysToDate(someDate, days) {
    someDate.setDate(someDate.getDate() + days);
    return someDate;
}


function dateToString(date) {
    ds = date.split("-");
    result = '';
    if (ds.length == 3) {
        result += ds[2] + ' ';
    }
    if (isNaN(ds[1])) {
        result += ds[1] + ' ';
    } else {
        result += fullMonthNames[parseInt(ds[1]) - 1] + ' ';
    }
    result += ds[0];

    return result;
}

function generateStatsTable() {
    var container = $('#statsKeyIndicators');

    var elements = [];

    var counter = 0;
    var failed = [];

    var done = function () {

        for (i = 0; i < failed.length; i++) {
            elements.splice(failed[i], 1);
        }
        for (id = 0; id < elements.length; id++) {
            if (id % 4 == 0) {
                container.append('<div class="ecb-columns ecb-fourCol clearFix keyStatistics"></div>');
            }

            container.find('.ecb-columns').last().append(elements[id]);
        }

    }

    var f = function (name, id, l) {
        return function (responseText) {

            var xml_doc = responseText.documentElement;
            var points = getElementByTagName(xml_doc, 'generic', 'Obs');
            chartData = [];
            chartData = XMLtoJSON(chartData, points, id);


            var lastElement = chartData[Object.keys(chartData).length - 1];
            var prevElement = chartData[Object.keys(chartData).length - 2];

            var value = parseFloat(lastElement['line' + id]);
            var prevValue = parseFloat(prevElement['line' + id]);


            elements[id] = '<div class="ecb-column"> <a href="' + linkUrls[id] + '"><div class="title">' + name + '</div><div class="value arrow-' + (value > prevValue ? 'up' : 'down') + '"> ' + valueFunctions[id](value) + '</div><div class="refDate">' + dateToString(lastElement['point_date']) + '</div></a> </div>';

            counter++;

            if (counter == l) {
                done();
            }

        };


    }

    var fail = function (id) {

        return function () {
            counter++;
            failed.push(id);
        }
    }


    //for each indicator load separately!
    var filenames = get_filename();
    var l = Object.keys(filenames).length;

    for (var id = 0; id < l; id++) {
        var key = Object.keys(filenames)[id];

        $.ajax({ url: key, success: f(filenames[key], id, l) }).fail(fail(id));

    }

}

function GetJSONIndex(obj, valToFind, fromToType) {
    var i = 0, key = 0;

    var min = new Date(obj[0].point_date);
    var max = new Date(obj[obj.length - 1].point_date);

    if (valToFind < min) {
        return -1;
    }

    //append after last thing
    if (valToFind > max) {
        return obj.length - 1;
    }


    for (key in obj) {
        var d = new Date(obj[key].point_date);
        if (d.getDate() == valToFind.getDate() && d.getMonth() == valToFind.getMonth() && d.getFullYear() == valToFind.getFullYear()) {
            return i;
        }
        i++;
    }

    valToFind = (fromToType === "start") ? addDaysToDate(valToFind, 1) : addDaysToDate(valToFind, -1);

    return GetJSONIndex(obj, valToFind, fromToType);
}


function getLineID(key) {
    var gl = function (key, list, prevID) {
        for (var i = 0; i < Object.keys(list).length; i++) {
            var tkey = Object.keys(list)[i];
            var value = list[tkey];
            if (key == tkey) {
                return 'line' + prevID + i;
            }
            if (typeof value === 'object') {
                var t = gl(key, value, i + '_');

                if (t != null) {
                    return t;
                }
            }
        }

        return null;
    }

    return gl(key, get_filename(), '');

}


// Generate legend and switch for each line (e.g. the different denominations)
function generateLegend(filenames) {
    if (Object.keys(filenames).length > 1) {
        var generateItems = function (items, checked) {
            var result = '';
            var id = 0;

            for (var key in items) {
                var colorSpan = "";
                if (checked) {
                    colorSpan = '<span style="margin-right:5px;background-color:' + generateColor(id) + '">&nbsp;&nbsp;</span>'
                }
                var value = items[key];
                if (key != 'parent') {
                    var checkedString = checked ? 'checked="true" ' : '';
                    if (typeof value === 'object') {
                        values = generateItems(value, false);

                        result += '<li class="double-level"><label><input ' + checkedString + 'type="checkbox" lineid="' + getLineID(key) + '">' + colorSpan + value['parent'] + '</label><ul>' + values + '</ul></li>';
                    } else {
                        result += '<li><label><input ' + checkedString + 'type="checkbox" lineid="' + getLineID(key) + '">' + colorSpan + value + '</label></li>';
                    }
                }
                id++;
            }

            return result;
        };

        $('#chart-container').append('<ul class="chart-legend"></ul>');

        $('#chart-container .chart-legend').append(generateItems(filenames, true));



        $('label').click(function (e) {
            var el = $(this);

            if (el.prop('tagName') == 'INPUT') {
                el = el.parent();
            }

            var value = el.children().first().attr('lineid');
            var state = el.children().is(":checked");


            if (state) {
                stockPanel.addGraph(graphs[value]);
            } else {
                stockPanel.removeGraph(graphs[value]);
            }
        });
    }
}

// Generate tabs with filters/dimensions (e.g. coins/banknotes)
function generateFiltersMenu() {
    var tabs = "";
    for (var i = 0; i < filters.length; i++) {
        var menuItems = "";

        for (var j = 0; j < filters[i].length; j++) {
            var activeLink = (filters[i][j] == current_state[i]) ? ' class="active"' : '';

            menuItems += '<li><span onClick="javascript:switchDimension(' + i + ',' + j + ');"' + activeLink + ' >' + filters[i][j] + '</span></li>';
        }

        tabs += '<div class="ecb-tabNavs"><ul>' + menuItems + '</ul></div>';
    };

    $('#chart-container').prepend('<div class="ecb-tabContainer">' + tabs + '</div>');
}

// Change dimension of graph (e.g. coins to banknotes)
function switchDimension(i, j) {
    var label = filters[i][j];

    var elements = $("#chart-container .ecb-tabNavs:nth-child(" + (i + 1) + ") li span");


    if (current_state[i] != label) {
        current_state[i] = label;

        elements.removeAttr("class");
        var elements = $(elements[j]);
        elements.attr("class", "active");

        if (i < (filters.length - 1)) {
            //We are switing a regular dimension

            //Add loading bar
            addLoadingBox();

            //Delete current chart
            //for(i=0;i<Object.keys(graphs).length;i++)
            //{
            //  stockPanel.removeGraph(graphs[Object.keys(graphs)[i]]);
            //}

            // delete legend
            $('.chart-legend').remove();

            //Now redraw chart
            loadGraph(false);
        } else {
            //We are switching from table to chart or vice verca
            switchChartTableVisibilty();
            setOneBalloonOnly();
        }
    }
}

function setOneBalloonOnly() {
    var cc = chart.chartCursors[0];
    cc.oneBalloonOnly = oneBalloonOnly;
}

function fixCSS() {
    $('#chart-container input.amChartsInputField').attr('type', 'text');
    $('#chart-container div.amChartsPeriodSelector>div').removeAttr('style');
    $('#chart-container div.amChartsDataSetSelector').prependTo('#chart-container #chart-canvas>div:nth-of-type(1)');
}

function switchChartTableVisibilty() {
    if (current_state[current_state.length - 1] == filters[filters.length - 1][0]) {
        //first element should be chart
        $('#chart-container .ecb-contentTable').css({ 'display': 'none' });
        $('#chart-container .ecb-tableHolder').css({ 'display': 'none' });

        $('#chart-container #chart-canvas').css({ 'display': 'block' });
        $('#chart-container .chart-legend').css({ 'display': 'block' });
        if (addHeader) {
            $('#chart-container .header').css({ 'display': 'block' });
        }

        chart.validateNow();
        fixCSS();
    } else {
        $('#chart-container .ecb-contentTable').css({ 'display': 'table' });
        $('#chart-container .ecb-tableHolder').css({ 'display': 'block' });
        $('#chart-container #chart-canvas').css({ 'display': 'none' });
        $('#chart-container .chart-legend').css({ 'display': 'none' });
        if (addHeader) {
            $('#chart-container .header').css({ 'display': 'none' });
        }
    }
}

//Script variables, DO NOT EDIT!
function resetChart() {
    self.chartData = [{}];
    self.chartDataInverse = [];
    self.graphs = {};
    self.chart = new AmCharts.AmStockChart();
    self.stockPanel = new AmCharts.StockPanel();
    self.p_dates = [];
    self.e_dates = [];
}

resetChart();

var options = {
    pathToImages: "/shared/js/amcharts/images/",
    amExport: {
        menuItemStyle: {
            fontFamily: 'droid_sans, Verdana, Helvetica, sans-serif;',
            fontSize: '11'
        },
        top: 0,
        exportJPG: true,
        exportPNG: true,
        exportPDF: false,
        buttonColor: '#e3e9e3',
        buttonRollOverColor: '#ffffff',
        textRollOverColor: '#000000'
    }
};

if (typeof addHeader === 'undefined' || addHeader == null) {
    var addHeader = false;
}


// -------------------------------------------
// Helper functions



// Convert XML output from FAME to JSON
function XMLtoJSON(chartData, points, id) {

    var point_number = 0;
    var start_index = 0;
    var temp = [];
    var hasSeenNeg = false;
    var date_min_date;

    if (typeof (beginDate) === 'undefined') {
        beginDate = null;
    }

    var date_split = beginDate == null ? null : beginDate.split('-');


    min_date = beginDate == null ? null : new Date(date_split[0], date_split[1], date_split[2]);

    $(points).each(function (point) {
        var point_date = getElementByTagName(points[point], 'generic', 'ObsDimension')[0].getAttribute('value');
        var point_value = getElementByTagName(points[point], 'generic', 'ObsValue')[0].getAttribute('value');
        var status = getElementByTagName(points[point], 'generic', 'Value')[0].getAttribute('value');

        if (status == "P") {
            p_dates[p_dates.length] = point_date;
        }
        if (status == "E") {
            e_dates[e_dates.length] = point_date;
        }
        //<generic:Value id="OBS_STATUS" value="P"/>

        var date_point_date = new Date(point_date);





        if (beginDate == null || date_point_date > min_date) {
            if (start_index >= 0 && (chartData[start_index + point_number] == undefined || Object.keys(chartData[start_index + point_number]).length == 0)) {

                chartData[start_index + point_number] = {};
                chartData[start_index + point_number]['point_date'] = point_date;

            } else {
                if (point_number == 0) {

                    date_min_date = new Date(chartData[0]['point_date']);
                    start_index = GetJSONIndex(chartData, date_point_date, 'start');
                    //start_index=0;
                }

            }


            if (start_index < 0 && date_point_date < date_min_date) {
                //use temporary list
                temp[point_number] = {};
                temp[point_number]['point_date'] = point_date;
                temp[point_number]["line" + id] = point_value;
            } else {
                if (temp.length > 0) {
                    //prepend

                    Array.prototype.unshift.apply(chartData, temp);
                    temp = [];
                    start_index = 0;
                }


                chartData[start_index + point_number]["line" + id] = point_value;
            }



            point_number++;
        }


    });

    if (temp.length > 0) {
        //Array.prototype.unshift.apply(chartData, temp);
    }

    return chartData
}

// Add leading zero to single digit numbers
function pad(r) {
    if (r.length == 1)
        r = "0" + r;
    return r;
}

//Generate color for line
function generateColor(id) {

    if (typeof colors === 'undefined' || colors == null) {

        if (id == 0) {
            return "#BD541F";
        }

        var r = (Math.round(id / 10 * 150));
        var g = (Math.round((10 - id) / 10 * 150));
        var b = 255 - r;
        r = pad(r.toString(16));
        g = pad(g.toString(16));
        b = pad(b.toString(16));

        return '#' + r + g + b;
    }
    else {
        return colors[id % colors.length];
    }
}

// Return IE version
function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

//cross browser version of getElementByTagName
function getElementByTagName(xml, ns, tag) {
    var a = xml.getElementsByTagName(ns + ":" + tag);
    return a.length > 0 ? a : xml.getElementsByTagName(tag);
}

//get last three data points
function getLastNDataPoints(n) {
    var results = [];
    for (i = 0; i < n; i++) {
        var point = chartData[chartData.length - 1 - i];
        var date = point['point_date'].split("-");
        var extra = "";

        if ($.inArray(point['point_date'], p_dates) != -1) {
            //We have a provisional value
            extra = 'Provisional';
        }
        if ($.inArray(point['point_date'], e_dates) != -1) {
            //We have an estimated value
            extra = 'Estimated';
        }

        results[i] = { year: date[0], month: fullMonthNames[parseInt(date[1]) - 1], value: point['line0'], extra: extra };

    }
    return results;
}

function generateLastThreeValues() {

    var elements = "";
    $(getLastNDataPoints(3)).each(function (i, v) {
        var number = parseFloat(v['value']).toFixed(1);
        number = number < 0 ? "&minus;" + (-1 * number) : number;
        var extra = v['extra'];
        var extra_short = extra == 'Provisional' ? " (Prov.)" : extra == "Estimated" ? " (Est.)" : "";
        extra = extra == "" ? "" : " title=\"" + extra + "\"";
        elements = "<div class=\"item-container\"><div class=\"item\" " + extra + ">" +
            number + "%<br><span class=\"ecb-small\">" + v['month'] + " '" +
            (v['year'].substr(2)) + extra_short + "</span></div></div>" + elements;
    });

    $("#chart-load").after("<div class=\"ecb-inflationData cf\">" + elements + "</div>")
}

function getAverageOfLine(id) {
    average = 0;
    numPoints = 0;
    $.each(chartData, function (i, v) {

        var d = new Date(v['point_date']);

        if (typeof (averageBeginDate) == 'undefined' || d > averageBeginDate) {
            numPoints++;
            average += parseFloat(v[id]);
        }

    });

    return average / numPoints;
}

var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
];
var fullMonthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

// var colorPalette = [
// "#007bd2",
// "#d20052",
// "#7bd200",
// "#5700d2",
// "#c100d2",
// "#880012",
// "#00d2c1",
// "#d2c100",
// "#0012d2",
// "#d25700",
// "#00d257"
// ];

//52 -> 7B
//d2 -> D2
//57 -> 57
//12 -> 12
//c1 -> C1



// Written by Tom Sanders - March, 2015
// ------------------------------------------------------


// Main functions
// -----------------------------------------

function ChartWrapper(settings, chartHandler, chartCounter) {
    var wrapper = this;

    if (typeof (settings.xName) === 'undefined') {
        settings.xName = 'point_date';
    }


    this.parseSettings = function () {
        if (settings.type == 'xy') {
            settings.xyChart = true;
        } else if (settings.type == 'serialChart') {
            settings.serialChart = true;
        }
    }

    // Load data from Statistical warehouse
    this.loadGraph = function (firstLoad) {


        if (typeof statsBoxes != 'undefined' && statsBoxes != null && statsBoxes) {
            generateStatsTable();

            return;
        }

        if (!firstLoad) {
            this.chart.clear();
            this.resetChart();

            //Remove table
            $('#chart-container .ecb-tableHolder').remove();

            //Why is this here?
            //$('#chart-container .ecb-tabNavs ul li span').removeAttr('class');
        }

        //get total number of charts
        var getNum = function (list) {
            var num = 0;

            for (var n = 0; n < Object.keys(list).length; n++) {
                var value = list[Object.keys(list)[n]];
                if (typeof value === 'object') {
                    num += getNum(value);
                } else {
                    num++;
                }
            }

            return num;
        };

        if (typeof (current_state) == 'undefined') {
            current_state = null;
        }

        var filenames = chartHandler.get_filename(current_state);

        var numElements = getNum(filenames);


        var id_function = function (id, filenames) {
            return function (responseText) {

                wrapper.xml_doc = responseText.documentElement;
                var points = wrapper.xml_doc.querySelectorAll('Obs');


                chartHandler.chartData = wrapper.XMLtoJSON(chartHandler.chartData, points, id);
                numLoaded++;

                if (numLoaded == numElements) {
                    wrapper.chartData = chartHandler.chartData;
                    wrapper.whenDataLoaded.call(wrapper, firstLoad);
                }
            };
        };

        var read_files = function (filenames, pre_id) {
            for (var id = 0; id < Object.keys(filenames).length; id++) {

                var key = Object.keys(filenames)[id];

                if (typeof filenames[key] === 'object') {

                    read_files(filenames[key], pre_id + id + "_");
                }
                if (key != 'parent') {

                    $.ajax({ url: key, success: id_function(pre_id + id, filenames) });
                }

            }
        };

        var numLoaded = 0;

        read_files(filenames, '');
    }





    // After all data has been loaded, draw the graph
    this.whenDataLoaded = function (firstLoad) {
        wrapper = this;
        var filenames = chartHandler.get_filename();

        // If there is only 1 line, there should be no legend
        if (Object.keys(filenames).length == 1) {
            $("#chart-canvas").addClass("no-legend");
        }

        if (settings.addPeriodSelector && !settings.serialChart && !settings.xyChart) {
            var periodSelector = new AmCharts.PeriodSelector();
            periodSelector.periods = [{
                period: "MM",
                count: 1,
                label: "1m"
            }, {
                period: "MM",
                count: 3,
                label: "3m"
            }, {
                period: "MM",
                count: 6,
                label: "6m"
            }, {
                period: "YYYY",
                selected: true,
                count: 1,
                label: "1y"
            }, {
                period: "YYYY",
                count: 2,
                label: "2y"
            }, {
                period: "YYYY",
                count: 5,
                label: "5y"
            }, {
                period: "YYYY",
                count: 10,
                label: "10y"
            }, {
                period: "MAX",
                label: "all",
                selected: true
            }];
            periodSelector.position = "top";
            periodSelector.inputFieldsEnabled = true;
            periodSelector.inputFieldWidth = 110;
        }

        //Fix touch issue where users can not scroll!
        this.chart.panEventsEnabled = false;

        if (settings.addPeriodSelector) {
            this.chart.periodSelector = periodSelector;
        }



        if (typeof maxNumPoints === 'undefined' || maxNumPoints == null) {
            maxNumPoints = 500;
        }

        //chart.type='stock';
        if (!settings.serialChart && !settings.xyChart) {
            this.chart.categoryAxesSettings.maxSeries = maxNumPoints;
        }


        var numFiles = Object.keys(filenames).length;

        if (typeof (settings.dateFormat) === 'undefined') {
            settings.dateFormat = "YYYY-MM";
        }

        this.chart.pathToImages = this.options['pathToImages'];

        if (settings.serialChart || settings.xyChart) {
            this.chart.dataProvider = this.chartData;
        } else {
            dataSet = new AmCharts.DataSet();
            dataSet.fieldMappings = [{
                fromField: settings.xName,
                toField: settings.xName,
            }];


            // do recursive fieldmapping here :)
            var setFieldMappings = function (list, prevID) {
                for (var i = 0; i < Object.keys(list).length; i++) {
                    var key = Object.keys(list)[i];
                    var value = list[key];
                    if (key != 'parent') {
                        if (typeof value === 'object') {
                            setFieldMappings(value, prevID + i + '_');
                        }

                        var name = Object.keys(wrapper.chartData[0])[i + 1];
                        dataSet.fieldMappings[dataSet.fieldMappings.length] = { fromField: name, toField: name };
                    }

                }
            }

            setFieldMappings(filenames, '');



            dataSet.title = 'EUR ';
            dataSet.dataProvider = this.chartData;
            dataSet.categoryField = settings.xName;
            dataSet.showInCompare = false;
            this.chart.dataSets = [dataSet];
        }


        //inverse dataset
        if (!(typeof (settings.addInverseOption) === 'undefined' || settings.addInverseOption == null) && settings.addInverseOption) {
            dataSet.title = 'EUR vs. ' + currencyCode.toUpperCase();
            generateInverseData();
            var inverseDataSet = new AmCharts.DataSet();
            inverseDataSet.title = currencyCode.toUpperCase() + ' vs. EUR';
            inverseDataSet.fieldMappings = [{
                fromField: settings.xName,
                toField: settings.xName,
            }];

            for (var i = 0; i < numFiles; i++) {
                inverseDataSet.fieldMappings[i] = { fromField: "line" + i, toField: "line" + i };
            }

            inverseDataSet.dataProvider = chartDataInverse;
            inverseDataSet.categoryField = settings.xName;
            inverseDataSet.showInCompare = false;
            chart.dataSets[1] = inverseDataSet;

            var dataSetSelector = new AmCharts.DataSetSelector();

            dataSetSelector.selectText = "Show: "
            dataSetSelector.position = "bottom";
            this.chart.dataSetSelector = dataSetSelector;
        }


        if (settings.lineWidth) {
            lineWidth = settings.lineWidth;
        } else {
            if (typeof lineWidth === 'undefined' || lineWidth == null) {
                lineWidth = 2;
            }
        }


        if (settings.serialChart) {
            this.chart.categoryField = settings.xName;
        }

        var generateGraph = function (list, addToChart, prevID, rootID) {
            for (var id = 0; id < Object.keys(list).length; id++) {
                var key = Object.keys(list)[id];

                var title = list[key];
                if (title != 'parent') {
                    if (typeof title === 'object') {

                        //Create graphs of all children and add them to graphs                        
                        generateGraph.call(this, title, false, prevID + id + "_", rootID == -1 ? id : rootID);
                        title = title['parent'];

                    }

                    if (settings.serialChart) {
                        graph = new AmCharts.AmGraph();
                        var name = Object.keys(this.chartData[0])[id + 1]
                        graph.valueField = name;

                        if (typeof (settings.getBalloonText) !== 'undefined') {
                            graph.balloonFunction = settings.getBalloonText(id, title, i);

                        }
                        //graph.balloonText = "[[category]]: <b>[[value]]</b> ("+title+")";  
                    } else if (settings.xyChart) {
                        graph = new AmCharts.AmGraph();
                        graph.xField = settings.xName;
                        graph.yField = "line" + prevID + id;
                        graph.lineAlpha = 1;

                        graph.balloonFunction = settings.getBalloonText(id, title, i);
                        graph.bullet = "circle";
                        graph.bulletAlpha = 0;


                        //Get correct line type
                        graph.dashLength = settings.lineTypeFunction(id);

                    } else {
                        graph = new AmCharts.StockGraph();
                        graph.valueField = "line" + prevID + id;
                        graph.useDataSetColors = false;
                        graph.type = "line";
                        graph.balloonFunction = settings.getBalloonText(id, title, i);



                        if (settings.homePageStyling) {
                            graph.balloonFunction = this.adjustBalloonText;
                        } else {
                            graph.balloonText = "[[category]]: <b>[[value]]</b> (" + title + ")";
                        }
                    }

                    if (settings.graphType) {
                        if (settings.graphType.constructor === Array) {
                            for (var j = 0; j < settings.filters[0].length; j++) {
                                if (settings.filters[0][j] == settings.current_state[0]) {
                                    graph.type = settings.graphType[j];
                                }
                            }

                        } else {
                            graph.type = settings.graphType;
                        }

                    }



                    //graph.balloonText = "[[category]]: <b>[[value]]</b> ("+title+")";

                    graph.lineThickness = lineWidth;


                    if (typeof (settings.colorFunction) == 'undefined') {
                        graph.lineColor = this.generateColor(rootID != -1 ? rootID : id);
                    } else {
                        var d = new Date(title);
                        if (isNaN(d.getTime())) {
                            graph.lineColor = settings.colorFunction(title);
                            graph.fillColor = settings.colorFunction(title);
                        } else {
                            graph.lineColor = settings.colorFunction(d);
                        }
                    }


                    var fillAlphas = (settings.fillAlphas ? settings.fillAlphas : 0);
                    graph.fillAlphas = fillAlphas;

                    if (typeof settings.lineAlpha != 'undefined') {
                        graph.lineAlpha = settings.lineAlpha;
                    }


                    if (rootID != -1) {
                        graph.dashLength = 2.5 + 10 * (id - 1);
                    }
                    if (addToChart) {
                        if (settings.serialChart || settings.xyChart) {
                            this.chart.addGraph(graph);
                            this.chart.precision = -1;

                        } else {
                            this.stockPanel.addStockGraph(graph);
                        }
                    }

                    this.graphs["line" + prevID + id] = graph;
                }
            }
        }

        if (typeof (settings.onMove) === 'function') {
            this.chart.chartCursor = new AmCharts.ChartCursor();
            this.chart.chartCursor.valueBalloonsEnabled = false;
            this.chart.chartCursor.addListener('moved', function (e) {
                settings.onMove(e);
            });
        }
        //Loop over all files
        generateGraph.call(this, filenames, true, '', -1);


        if (settings.xyChart || settings.serialChart) {
            if (settings.xyChart) {
                var vx = new AmCharts.ValueAxis;
                vx.id = "x";
                vx.position = "bottom";
                vx.title = settings.xTitle;
                vx.titleFontSize = 14;
                vx.maximum = settings.xMaximum;
                this.chart.addValueAxis(vx);
            } else {
                var ca = this.chart.categoryAxis;
                ca.title = settings.xTitle;
                ca.titleFontSize = 14;
            }

            var vy = new AmCharts.ValueAxis;
            vy.id = "y";
            vy.noRounding = settings.smoothCurve;
            vy.title = settings.yTitle;
            vy.position = "left";
            vy.titleFontSize = 14;

            if (settings.isStacked && settings.isStacked.constructor === Array) {
                for (var j = 0; j < settings.filters[0].length; j++) {
                    if (settings.filters[0][j] == settings.current_state[0]) {
                        if (settings.isStacked[j]) {
                            vy.stackType = 'regular';
                        }
                    }
                }
            } else {
                if (settings.isStacked) {
                    vy.stackType = 'regular';
                }
            }




            this.chart.valueAxes = [];

            if (vx !== undefined)
                this.chart.addValueAxis(vx);
            this.chart.addValueAxis(vy);

            this.chart.chartScrollbar = { offset: 60, oppositeAxis: false };
            this.chart.hideYScrollbar = true;

        } else {
            this.chart.panels = [this.stockPanel];
            var ca = new AmCharts.CategoryAxis();
            ca.parseDates = false;
            if (settings.serialChart) {
                ca.labelFrequency = settings.categoryLabelFrequency;
                this.chart.categoryAxis = ca;
            } else {
                this.stockPanel.categoryAxis = ca;
            }
        }



        //Styling
        if (settings.homePageStyling) {
            var MyAxisColor = "#7F7F7F";
            var MyFontSize = 9;

            var va = new AmCharts.ValueAxis();

            if (typeof valueGridAlpha == 'undefined') {
                valueGridAlpha = 0;
            }

            va.gridAlpha = valueGridAlpha;
            va.axisColor = "#dddddd";
            va.color = MyAxisColor;
            va.fontSize = MyFontSize;
            va.axisThickness = 2;
            va.labelOffset = -5;
            va.tickLength = 2;

            var ca = new AmCharts.CategoryAxis();
            ca.gridAlpha = 0;
            ca.axisColor = "#dddddd";
            ca.ignoreAxisWidth = 0;
            ca.parseDates = true;
            ca.color = MyAxisColor;
            ca.fontSize = MyFontSize;
            ca.labelRotation = 0;
            ca.tickLength = 2;
            ca.labelOffset = -5;
            ca.axisThickness = 2;
            ca.gridPosition = "start";



            ca.boldPeriodBeginning = 0;
            this.stockPanel.addValueAxis(va);
            this.stockPanel.categoryAxis = ca;

            this.stockPanel.showCategoryAxis = true;

            this.stockPanel.autoMargins = 1;

            this.chart.categoryAxesSettings.axisAlpha = 1;
            this.chart.categoryAxesSettings.tickLength = 5

            this.chart.categoryAxesSettings.equalSpacing = 1;


            this.chart.valueAxesSettings.axisAlpha = 1;
            this.chart.valueAxesSettings.tickLength = 5
            this.chart.valueAxesSettings.equalSpacing = 1;
            this.chart.valueAxesSettings.inside = false;

            this.chart.categoryAxesSettings.minPeriod = "MM";


            if (typeof showAverage != 'undefined' && settings.showAverage) {
                var average = new AmCharts.Guide();

                average.date = averageBeginDate;
                average.lineAlpha = 0.5;
                average.lineColor = "#000000";
                ca.addGuide(average);

                var averageValue = getAverageOfLine('line0');

                var f = new AmCharts.TrendLine()
                f.initialDate = averageBeginDate;
                f.finalDate = new Date();
                f.initialValue = averageValue;
                f.finalValue = averageValue;
                f.valueAxis = va;
                f.categoryAxis = ca;
                f.lineColor = "#ff0000";
                this.stockPanel.addTrendLine(f);



            }


        }


        var sbsettings = new AmCharts.ChartScrollbarSettings();
        sbsettings.graph = this.graphs['line0'];
        sbsettings.graphType = "line";
        //sbsettings.usePeriod = "WW";        
        sbsettings.enabled = settings.addChartSelector;
        this.chart.chartScrollbarSettings = sbsettings;


        if (typeof showBalloons === 'undefined' || showBalloons == null) {
            showBalloons = true;
        }

        if (typeof isDraggable === 'undefined' || isDraggable == null) {
            isDraggable = true;
        }

        if (showBalloons) {
            var cursorSettings = new AmCharts.ChartCursorSettings();
            cursorSettings.bulletsEnabled = false;
            cursorSettings.valueBalloonsEnabled = true;
            cursorSettings.categoryBalloonEnabled = false;

            if (!isDraggable) {
                cursorSettings.pan = false;
                cursorSettings.zoomable = false;

            }


            this.chart.chartCursorSettings = cursorSettings;
        }

        if (typeof settings.addExport === 'undefined') {
            settings.addExport = true;
        }

        if (settings.addExport) {
            settings.export = settings.export ? settings.export : { 'enabled': true };

            this.chart.export = settings.export;

            this.chart.responsive = {
                "enabled": true
            };

        }


        //stockPanel.categoryAxis.axisAlpha=1;

        $('#chart-container .loading').remove();

        this.chart.write('chart-canvas');


        if (firstLoad && (settings.filters.length > 1 || settings.alwaysShowFilters)) {
            this.generateFiltersMenu();
        }

        this.generateLegend(filenames);



        if (settings.addHeader) {
            this.generateHeading();
            var wrapper = this;
            this.chart.addListener('drawn', function (event) {
                wrapper.generateHeading();
            });
        }

        this.switchChartTableVisibilty(false);
        this.setOneBalloonOnly();


        if (settings.homePageStyling) {
            this.chart.chartCursors[0].categoryBalloonEnabled = false;

            this.chart.chartCursors[0].cursorAlpha = 0;

            if (settings.showAverage && typeof averageBeginDate != 'undefined' && typeof averageBeginDateLabel != 'undefined') {


                this.stockPanel.addLabel(stockPanel.categoryAxis.dateToCoordinate(new Date()) + 30, stockPanel.valueAxes[0].getCoordinate(averageValue) - 15, averageValue.toFixed(2) + "%", "right", 11, "#ff0000");
                this.stockPanel.addLabel(stockPanel.categoryAxis.dateToCoordinate(averageBeginDate) + 40, 10, averageBeginDateLabel, "left");

            }
        }


        if (typeof showLastThreeValues != 'undefined' && showLastThreeValues != null && showLastThreeValues) {
            generateLastThreeValues();
        }

        if (typeof (chartHandler.chartHasSwitched) === 'function') {
            chartHandler.chartHasSwitched();
        }


        //ensure switch to default period occurs
        // set defautl period
        // if (this.chart.defaultPeriodSet === undefined) {
        // this.chart.defaultPeriodSet = true;
        //this.chart.periodSelector.setDefaultPeriod();
        // }

    }


    this.getXFromValue = function (value) {
        var x = settings.xName;
        var d = this.chartData;
        i = 0;
        while (d[i][x] < value && i < d.length) {
            i++;
        }
        return i;
    }

    this.getMinMaxFromValue = function (axis, min, max) {
        a = this.getXFromValue(min);
        b = this.getXFromValue(max);
        return this.getMinMax(axis, a, b);
    }

    this.xyZoom = function (minX, maxX) {
        xAxis = this.chart.valueAxes[0];
        yAxis = this.chart.valueAxes[1];
        xAxis.min = minX;
        xAxis.max = maxX;
        yv = this.getMinMaxFromValue(yAxis, minX, maxX);
        yAxis.min = yv[0];
        yAxis.max = yv[1];
        this.chart.zoomOut();
    }

    this.resetXyZoom = function () {
        this.chart.valueAxes[0].getMinMax();
        yAxis = this.chart.valueAxes[1].getMinMax();
        this.chart.zoomOut();
    }

    this.getMinMax = function (axis, a, b) {
        d = this.chartData;
        x = settings.xName;
        var filenames = chartHandler.get_filename();
        max = -Infinity;
        min = Infinity;
        for (i = a; i <= b; i++) {
            for (j = 0; j < (k = Object.keys((p = d[i]))).length; j++) {
                if ((l = k[j]) != x) {
                    v = parseFloat(p[l]);
                    max = v > max ? v : max;
                    min = v < min ? v : min;
                }
            }
        }
        return [min, max];
    }

    this.generateGenericFlippedTable = function (headerSettings, header, data, rawxColumn) {
        if ($('#chart-container .ecb-tableHolder').size() > 0) {
            $('#chart-container .ecb-tableHolder').remove();
        }

        var table = '<div class="ecb-tableHolder"><table class="ecb-contentTable oddeven">';

        //Heading
        table += '<thead><tr>';

        table += '<th></th><th></th>';

        var numPoints = 3;

        for (var i = 0; i < data.length; i++) {

            if (rawxColumn) {
                table += '<th>' + data[i][headerSettings[0]] + '</th>';
            } else {
                if (!settings.noDates) {

                    date = data[i][headerSettings[0]];
                    if (!isFinite(date)) {
                        date = date.split('-');
                        table += '<th>' + ((date.length > 2) ? (date[2] + ' ') : '') + monthNames[parseInt(date[1])] + ' ' + date[0] + '</th>';
                    } else {
                        table += '<th>' + date + '</th>';
                    }
                } else {
                    str = chartHandler.prettyDate(data[i][headerSettings[0]]);

                    table += '<th>' + str + '</th>';
                }
            }
        }

        table += '</tr></thead><tbody>';

        for (var j = 0; j < Object.keys(header).length; j++) {
            var name = Object.keys(data[0])[j + 1];

            table += '<tr>';
            var v = header[Object.keys(header)[j]];
            if (typeof v === 'object') {
                v = v['parent'];
            }

            var firstItem = '<td>' + v + '</td>';
            var extra = [];
            var isFirst = true;


            for (var i = 0; i < data.length; i++) {
                var dataPoint = data[i][name];
                var expandButton = '<td></td>';

                if (typeof (dataPoint) === 'object') {

                    expandButton = '<td><img id="r' + (j) + '" src="/shared/img/ico_plus_new.gif" alt="+" class="floatleft expandButton"></td>';
                    var keys = Object.keys(dataPoint['children']);
                    for (k = 0; k < keys.length; k++) {
                        if (i == 0) {
                            extra[k] = '<tr class="hidden subrow r' + (j) + 's"><td></td><td>' + v + '.' + (k + 1) + '</td>';
                        }
                        extra[k] += '<td class="number">' + this.addThousandSeparator(dataPoint['children'][keys[k]]) + '</td>'
                    }


                    dataPoint = dataPoint['value'];

                }

                if (isFirst) {
                    table += expandButton + firstItem;
                    isFirst = false;
                }
                table += '<td class="number">' + this.addThousandSeparator(dataPoint) + '</td>';
            }
            table += '</tr>';

            for (k = 0; k < extra.length; k++) {
                table += extra[k] + '</tr>';
            }
        }



        table += '</tbody></table></div>';
        $('#chart-container').append(table);
        this.handleExpandingTables();

    }

    this.handleExpandingTables = function () {
        $('.ecb-contentTable img.expandButton').click(
            function () {
                id = $(this).attr('id');
                if (id == 'rall') {
                    var tableOpen = $(this).toggleClass("open").hasClass("open");

                    if (tableOpen) {
                        $('.subrow').removeClass("hidden");
                        $(this).closest('table').find('img.expandButton').attr('src', '/shared/img/ico_minus_new.gif');
                    } else {
                        $('.subrow').addClass("hidden");
                        $(this).closest('table').find('img.expandButton').attr('src', '/shared/img/ico_plus_new.gif');
                    }

                }
                else {
                    var isHidden = $('.' + id + 's').toggleClass("hidden").hasClass("hidden");
                    if (isHidden) {
                        $(this).attr('src', '/shared/img/ico_plus_new.gif');
                    }
                    else {
                        $(this).attr('src', '/shared/img/ico_minus_new.gif');
                    }
                }
            }
        )
    }

    this.generateGenericTable = function (headerSettings, header, data, rawxColumn, rawYColumn) {
        if ($('#chart-container .ecb-tableHolder').size() > 0) {
            $('#chart-container .ecb-tableHolder').remove();
        }

        var table = '<div class="ecb-tableHolder"><table class="ecb-contentTable oddeven">';

        //Heading
        table += '<thead>';
        table += '<tr>';



        table += '<th>' + headerSettings[1] + '</th>';
        for (var key in header) {
            var v = header[key];
            if (typeof v === 'object') {
                v = v['parent'];
            }
            table += '<th>' + v + '</th>';
        }
        table += '</tr>';
        table += '</thead>';
        table += '<tbody>';
        //Values
        for (var i = 0; i < data.length; i++) {

            if (!rawxColumn && settings.noDates && typeof (settings.validTableDates) != 'undefined') {
                if (!settings.validTableDates(data[i][headerSettings[0]])) {
                    continue;
                }
            }

            table += '<tr>';
            if (rawxColumn) {
                table += '<td>' + data[i][headerSettings[0]] + '</td>';
            } else {
                if (!settings.noDates) {
                    date = data[i][headerSettings[0]].split('-');
                    table += '<td>' + ((date.length > 2) ? (date[2] + ' ') : '') + monthNames[parseInt(date[1]) - 1] + ' ' + date[0] + '</td>';
                } else {
                    str = chartHandler.prettyDate(data[i][headerSettings[0]]);

                    table += '<td>' + str + '</td>';
                }
            }


            for (var j = 0; j < Object.keys(header).length; j++) {
                if (rawYColumn) {
                    table += '<td>' + data[i]['line' + j] + '</td>';
                } else {
                    table += '<td>' + this.addThousandSeparator(parseFloat(data[i]['line' + j]).toFixed(6)) + '</td>';
                }
            }

            table += '</tr>';
        }

        table += '</tbody></table></div>';

        $('#chart-container').append(table);
    }

    //Generate table
    this.generateTable = function (filenames) {
        if (typeof (settings.TableXLabel) == 'undefined') { settings.TableXLabel = 'Date'; }

        if (settings.tableFunction && typeof (settings.tableFunction) === 'function') {
            settings.tableFunction();
        } else {
            if (settings.flippedTable) {
                this.generateGenericFlippedTable([settings.xName, settings.TableXLabel], filenames, this.chartData, settings.rawXColumn, false);
            } else {
                this.generateGenericTable([settings.xName, settings.TableXLabel], filenames, this.chartData, settings.rawXColumn, false);
            }
        }
    }



    this.adjustBalloonText = function (graphDataItem, graph) {
        var value = graphDataItem.values.value;


        var extra = '';
        // add 1 to go from 0 starting to 1 starting
        var m = (graphDataItem.category.getMonth() + 1);
        m = m < 10 && m > 0 ? '0' + m : m;
        var d = graphDataItem.category.getFullYear() + '-' + m;

        if ($.inArray(d, this.p_dates) != -1) {
            //We have a provisional value
            extra = ' Provisional';
        }
        if ($.inArray(d, this.e_dates) != -1) {
            //We have a provisional value
            extra = ' Estimated';
        }
        var month = monthNames[graphDataItem.category.getMonth()];
        var year = graphDataItem.category.getFullYear() + '';
        year = year.substr(2);
        return value.toFixed(1) + '% (' + month + ' \'' + year + ')' + extra;
    }

    this.stringToDate = function (myString) {

        var arr = myString.split('-');
        if (arr.length == 3) {
            var res = new Date(arr[2] + "-" + arr[1] + "-" + arr[0]);
        } else {
            var res = new Date(arr[1] + "-" + arr[0]);
        }
        return res;
    }

    this.addThousandSeparator = function (n) {
        var result = "";
        var t = (n + "").split('.');
        var isNegative = false;
        if (t[0].substr(0, 1) == '-') {
            isNegative = true;
            t[0] = t[0].substr(1);
        }
        var nT = t[0];


        for (var i = 0; i < nT.length; i++) {
            result = nT.charAt(nT.length - i - 1) + result;
            if ((i + 1) % 3 == 0 && i < (nT.length - 1)) {
                result = ',' + result;
            }

        }

        if (t.length > 1) {
            result += "." + t[1];
        }
        if (isNegative) {
            result = '-' + result;
        }

        return result;
    }

    this.stringToDate = function (myString) {

        var arr = myString.split('-');
        if (arr.length == 3) {
            var res = new Date(arr[2] + "-" + arr[1] + "-" + arr[0]);
        } else {
            var res = new Date(arr[1] + "-" + arr[0]);
        }
        return res;
    }

    this.generateHeading = function () {
        //Select correct dataSet
        var data = chartHandler.chartData;
        var ds = this.chart.dataSets;
        var inverse = false;

        for (var i = 0; i < ds.length; i++) {
            var set = ds[i];
            if (set.dataParsed) {
                //We found the correct one
                inverse = set.title.substr(0, 3) === 'EUR' ? false : true;

                data = set.dataProvider;
            }
        }

        var header = $("#chart-container div.header");
        var dt = $("input.amChartsInputField");
        if (dt.length > 0) {

            if (header.length > 0) {
                header.remove();
            }

            $('#chart-container .ecb-tabContainer').after('<div class="header"></div>');

            //go over data
            var nrDec = 4;
            rateLatest = parseFloat(data[data.length - 1].line0).toFixed(nrDec);
            rateDiff = (parseFloat(rateLatest) - parseFloat(data[data.length - 2].line0)).toFixed(nrDec);
            dateLatest = new Date(data[data.length - 1][settings.xName]);
            dateLatest = (dateLatest.getDate() + " " + monthNames[dateLatest.getMonth()] + " " + dateLatest.getFullYear());

            percentage = (100 * rateDiff / parseFloat(rateLatest)).toFixed(1) + "%";
            diffClass = 'pos';


            if (rateDiff < 0) diffClass = 'neg';

            var rateString = 'EUR 1 = ' + rateLatest + ' ';

            if (inverse) {
                rateString = currencyCode.toUpperCase() + ' 1 = ' + rateLatest + ' EUR';
            }

            $('#chart-container .header').append('<h4><span class="fxreflabel">Latest (' + dateLatest + '):</span> ' + rateString + ', <span class="' + diffClass + '"><span class="diff">' + rateDiff + '</span> (<span class="percent">' + percentage + ')</span></span></h4>');
            $('#chart-container .header').append('<div id="min-max-avg-data" class="minmax">Change from <span id="map-start-date"></span> to <span id="map-end-date"></span> <br/><div id="map-min-max-avg"></div></div>');

            var startDate = this.stringToDate(dt[0].value);
            var endDate = this.stringToDate(dt[1].value);

            $('#chart-container #map-start-date').html(startDate.getDate() + " " + monthNames[startDate.getMonth()] + " " + startDate.getFullYear());
            $('#chart-container #map-end-date').html(endDate.getDate() + " " + monthNames[endDate.getMonth()] + " " + endDate.getFullYear());

            var indexStart = this.getJSONIndex(data, startDate, "start");
            var indexEnd = this.getJSONIndex(data, endDate, "end");

            var resultMinMaxAvg = this.minMaxAvgRate(data, indexStart, indexEnd);

            if (indexEnd >= indexStart) {
                $('#chart-container #map-min-max-avg').html("<span>Minimum (" + resultMinMaxAvg.min_date + "): <strong>" + resultMinMaxAvg.min.toFixed(nrDec) + "</strong></span> <span>Maximum (" + resultMinMaxAvg.max_date + "): <strong>" + resultMinMaxAvg.max.toFixed(nrDec) + "</strong></span> <span>Average: <strong>" + resultMinMaxAvg.avg.toFixed(nrDec) + "</strong></span>");
            } else {//short time period we do not have rates for, like 21-12-2013 / 22-12-2013
                $('#chart-container #map-min-max-avg').html("<strong>ECB did not publish any reference exchange rate for the period selected.</strong>");
            }
        }
    }

    this.generateInverseData = function () {

        var keys = Object.keys(chartData[0]);
        for (var i = 0; i < chartData.length; i++) {
            chartDataInverse[i] = {};

            for (var j = 0; j < keys.length; j++) {
                var key = keys[j];
                if (key == settings.xName) {
                    chartDataInverse[i][key] = chartData[i][key];
                } else {
                    chartDataInverse[i][key] = (1 / parseFloat(chartData[i][key]));
                }

            }
        }
    }

    // Copied from Sorin
    this.minMaxAvgRate = function (myChartData, index0, index1) {
        var res = [];

        res.min = parseFloat(myChartData[index0].line0);
        res.min_date = '';

        res.max = parseFloat(myChartData[index0].line0);
        res.max_date = '';

        res.avg = 0;

        var nrNans = 0;

        for (i = index0; i <= index1; i++) {
            var d = new Date(myChartData[i][settings.xName]);
            var value = parseFloat(myChartData[i].line0);
            if (value <= res.min) {
                res.min = value;
                res.min_date = d.getDate() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear();
            }
            if (value >= res.max) {
                res.max = value;
                res.max_date = d.getDate() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear();
            }

            if (isNaN(value)) {
                nrNans++;
            } else {
                res.avg += value;
            }

        }

        res.avg = res.avg / (1 + index1 - index0 - nrNans);
        return res;
    }

    this.addDaysToDate = function (someDate, days) {
        someDate.setDate(someDate.getDate() + days);
        return someDate;
    }


    this.dateToString = function (date) {
        ds = date.split("-");
        result = '';
        if (ds.length == 3) {
            result += ds[2] + ' ';
        }
        if (isNaN(ds[1])) {
            result += ds[1] + ' ';
        } else {
            result += fullMonthNames[parseInt(ds[1]) - 1] + ' ';
        }
        result += ds[0];

        return result;
    }

    this.generateStatsTable = function () {
        var container = $('#statsKeyIndicators');

        var elements = [];

        var counter = 0;
        var failed = [];

        var done = function () {

            for (i = 0; i < failed.length; i++) {
                elements.splice(failed[i], 1);
            }
            for (id = 0; id < elements.length; id++) {
                if (id % 4 == 0) {
                    container.append('<div class="ecb-columns ecb-fourCol clearFix keyStatistics"></div>');
                }

                container.find('.ecb-columns').last().append(elements[id]);
            }

        }

        var f = function (name, id, l) {
            return function (responseText) {

                var xml_doc = responseText.documentElement;
                var points = getElementByTagName(xml_doc, 'generic', 'Obs');
                chartData = [];
                chartData = XMLtoJSON(chartData, points, id);


                var lastElement = chartData[Object.keys(chartData).length - 1];
                var prevElement = chartData[Object.keys(chartData).length - 2];

                var value = parseFloat(lastElement['line' + id]);
                var prevValue = parseFloat(prevElement['line' + id]);


                elements[id] = '<div class="ecb-column"> <a href="' + linkUrls[id] + '"><div class="title">' + name + '</div><div class="value arrow-' + (value > prevValue ? 'up' : 'down') + '"> ' + valueFunctions[id](value) + '</div><div class="refDate">' + dateToString(lastElement[settings.xName]) + '</div></a> </div>';

                counter++;

                if (counter == l) {
                    done();
                }

            };


        }

        var fail = function (id) {

            return function () {
                counter++;
                failed.push(id);
            }
        }


        //for each indicator load separately!
        var filenames = chartHandler.get_filename();
        var l = Object.keys(filenames).length;

        for (var id = 0; id < l; id++) {
            var key = Object.keys(filenames)[id];

            $.ajax({ url: key, success: f(filenames[key], id, l) }).fail(fail(id));

        }

    }

    this.getJSONIndex = function (obj, valToFind, fromToType) {
        var i = 0, key = 0;

        var min = new Date(obj[0][settings.xName]);
        var max = new Date(obj[obj.length - 1][settings.xName]);

        if (valToFind < min) {
            return -1;
        }

        //append after last thing
        if (valToFind > max) {
            return obj.length - 1;
        }


        for (key in obj) {
            var d = new Date(obj[key][settings.xName]);
            if (d.getDate() == valToFind.getDate() && d.getMonth() == valToFind.getMonth() && d.getFullYear() == valToFind.getFullYear()) {
                return i;
            }
            i++;
        }

        valToFind = (fromToType === "start") ? this.addDaysToDate(valToFind, 1) : this.addDaysToDate(valToFind, -1);

        return this.getJSONIndex(obj, valToFind, fromToType);
    }


    this.getLineID = function (key) {
        var gl = function (key, list, prevID) {
            for (var i = 0; i < Object.keys(list).length; i++) {
                var tkey = Object.keys(list)[i];
                var value = list[tkey];
                if (key == tkey) {
                    return 'line' + prevID + i;
                }
                if (typeof value === 'object') {
                    var t = gl(key, value, i + '_');

                    if (t != null) {
                        return t;
                    }
                }
            }

            return null;
        }

        return gl(key, chartHandler.get_filename(), '');

    }


    // Generate legend and switch for each line (e.g. the different denominations)
    this.generateLegend = function (filenames) {

        if (Object.keys(filenames).length > 1 || settings.alwaysShowLegend) {
            var generateItems = function (items, checked, onlyEven) {
                var result = '';
                var id = 0;

                for (var key in items) {
                    if (settings.singleLegendColumn || (id % 2 == 0 && onlyEven) || (id % 2 == 1 && !onlyEven)) {
                        if (typeof (settings.showInLegend) != 'undefined') {
                            if (!settings.showInLegend(id)) {
                                continue;
                            }
                        }

                        var colorSpan = "";
                        var color = '#000000';
                        var value = items[key];
                        if (checked) {
                            if (typeof (settings.colorFunction) == 'undefined') {
                                color = this.generateColor(id);
                            } else {
                                var d = new Date(value);
                                if (isNaN(d.getTime())) {
                                    color = settings.colorFunction(value);
                                } else {
                                    color = settings.colorFunction(d);
                                }
                            }

                            var colorR = typeof (color) === 'undefined' ? 0 : parseInt(color.substr(1, 2), 16);
                            var colorG = typeof (color) === 'undefined' ? 0 : parseInt(color.substr(3, 2), 16);
                            var colorB = typeof (color) === 'undefined' ? 0 : parseInt(color.substr(5, 2), 16);

                            //colorSpan = '<span style="margin-right:5px;background-color:'+color+'">&nbsp;&nbsp;</span>';
                            colorSpan = '<div class="colorBlock" style="background-color:rgba(' + colorR + ',' + colorG + ',' + colorB + ',0.6);border:1px solid ' + color + ';"></div>'
                            if (settings.simpleLegend) {
                                colorSpan = '<div class="colorBlock" style="background-color:' + color + '"></div>';
                            }
                        }

                        if (key != 'parent') {
                            var checkedString = checked ? 'checked="true" ' : '';
                            label = settings.simpleLegend ? '' : '<label><input ' + checkedString + 'type="checkbox" lineid="' + this.getLineID(key) + '">';
                            labelClose = settings.simpleLegend ? '' : '</label>';
                            if (typeof value === 'object') {
                                values = this.generateItems(value, false);


                                result += '<li class="double-level">' + label + colorSpan + value['parent'] + labelClose + '<ul>' + values + '</ul></li>';
                            } else {
                                result += '<li>' + label + colorSpan + value + labelClose + '</li>';
                            }
                        }
                    }


                    id++;
                }

                return result;
            };

            $('.chart-legend-wrapper').remove();
            extra = settings.simpleLegend ? ' simpleLegend' : '';
            var extraLine = '';
            if (typeof (settings.extraLegendLine) != 'undefined') {
                extraLine = settings.extraLegendLine();
            }

            var twoColsOpening = '<div class="ecb-column">';
            var twoColsClosing = '</div>';

            var ul = '<ul class="chart-legend' + extra + '"></ul>';
            var ulColumn = twoColsOpening + ul + twoColsClosing;
            var ulWrapper = settings.singleLegendColumn ? ul : '<div class="ecb-columns ecb-twoCol clearFix">' + ulColumn + ulColumn + '</div>';
            $('#chart-container').append('<div class="chart-legend-wrapper">' + extraLine + ulWrapper + '<div>');

            $('#chart-container .chart-legend').eq(0).append(generateItems.call(this, filenames, true, true));
            if (!settings.singleLegendColumn) {
                $('#chart-container .chart-legend').eq(1).append(generateItems.call(this, filenames, true, false));
            }


            var wrapper = this;
            $('#chart-container .chart-legend label').click(function (e) {
                var el = $(this);

                if (el.prop('tagName') == 'INPUT') {
                    el = el.parent();
                }

                var value = el.children().first().attr('lineid');
                var state = el.children().is(":checked");


                if (state) {
                    if (settings.xyChart || settings.serialChart) {
                        wrapper.chart.addGraph(wrapper.graphs[value]);
                    } else {
                        wrapper.stockPanel.addGraph(wrapper.graphs[value]);
                    }

                } else {
                    if (settings.xyChart || settings.serialChart) {
                        wrapper.chart.removeGraph(wrapper.graphs[value]);
                    } else {
                        wrapper.stockPanel.removeGraph(wrapper.graphs[value]);
                    }
                }
            });
        }
    }

    // Generate tabs with filters/dimensions (e.g. coins/banknotes)
    this.generateFiltersMenu = function () {
        var tabs = "";
        for (var i = 0; i < settings.filters.length; i++) {
            var menuItems = "";

            for (var j = 0; j < settings.filters[i].length; j++) {
                var activeLink = (settings.filters[i][j] == settings.current_state[i]) ? ' class="active"' : '';

                menuItems += '<li><span onClick="javascript:charts[' + chartCounter + '].switchDimension(' + i + ',' + j + ');"' + activeLink + ' >' + settings.filters[i][j] + '</span></li>';
            }

            tabs += '<div class="ecb-tabNavs"><ul>' + menuItems + '</ul></div>';
        };

        $('#chart-container').prepend('<div class="ecb-tabContainer">' + tabs + '</div>');
    }

    this.getSettings = function () {
        return settings;
    }

    // Change dimension of graph (e.g. coins to banknotes)
    this.switchDimension = function (i, j) {
        var label = settings.filters[i][j];

        var elements = $("#chart-container .ecb-tabNavs:nth-child(" + (i + 1) + ") li span");


        if (settings.current_state[i] != label) {
            settings.current_state[i] = label;

            elements.removeAttr("class");
            var elements = $(elements[j]);
            elements.attr("class", "active");

            if (i < (settings.filters.length - 1)) {
                //We are switing a regular dimension

                //Add loading bar
                var loader = new ChartLoader(settings);
                loader.addLoadingBox();

                //Delete current chart
                //for(i=0;i<Object.keys(graphs).length;i++)
                //{
                //  stockPanel.removeGraph(graphs[Object.keys(graphs)[i]]);
                //}

                // delete legend
                $('.chart-legend-wrapper').remove();

                if (!settings.externalDataSet) {
                    //Now redraw chart
                    this.loadGraph(false);
                } else {

                    this.switchChart();

                }

            } else {
                //We are switching from table to chart or vice verca
                this.switchChartTableVisibilty(true);
                this.setOneBalloonOnly();
            }
        }
    }

    this.switchChart = function () {
        chartHandler.switchDataSet();
        this.chart.clear();
        this.resetChart();

        //Remove table
        $('#chart-container .ecb-tableHolder').remove();

        this.whenDataLoaded(false);
    }

    this.setOneBalloonOnly = function () {

        if (settings.serialChart || settings.xyChart) {
            cc = new AmCharts.ChartCursor();
        } else {
            cc = this.chart.chartCursors[0];
        }
        cc.valueBalloonsEnabled = true;
        cc.oneBalloonOnly = settings.oneBalloonOnly;

        if (settings.serialChart || settings.xyChart) {
            //this.chart.addChartCursor(cc);
        }
    }

    this.fixCSS = function () {
        $('#chart-container input.amChartsInputField').attr('type', 'text');
        $('#chart-container div.amChartsPeriodSelector>div').removeAttr('style');
        $('#chart-container div.amChartsDataSetSelector').prependTo('#chart-container #chart-canvas>div:nth-of-type(1)');
    }

    this.switchChartTableVisibilty = function (switchingView) {
        if (settings.current_state[settings.current_state.length - 1] == settings.filters[settings.filters.length - 1][0]) {

            //first element should be chart
            $('#chart-container .ecb-contentTable').css({ 'display': 'none' });
            $('#chart-container .ecb-tableHolder').css({ 'display': 'none' });

            $('#chart-container #chart-canvas').css({ 'display': 'block' });
            $('#chart-container .chart-legend-wrapper').css({ 'display': 'block' });
            if (settings.addHeader) {
                $('#chart-container .header').css({ 'display': 'block' });
            }

            if (switchingView) {

                this.switchChart();
            }


        } else if (settings.current_state[settings.current_state.length - 1] == settings.filters[settings.filters.length - 1][1]) {


            this.generateTable(chartHandler.get_filename(settings.current_state));

            $('#chart-container .ecb-contentTable').css({ 'display': 'table' });
            $('#chart-container .ecb-tableHolder').css({ 'display': 'block' });
            $('#chart-container #chart-canvas').css({ 'display': 'none' });
            $('#chart-container .chart-legend-wrapper').css({ 'display': 'none' });
            if (settings.addHeader) {
                //$('#chart-container .header').css({'display':'none'});
            }
        } else {

            var a = settings.filters[settings.filters.length - 1];
            var b = settings.current_state[settings.current_state.length - 1];
            var f = settings.extraSecondaryDimension[a.indexOf(b) - 2];
            f();
        }
    }

    this.getChartHandler = function () {
        return chartHandler;
    }

    //Script variables, DO NOT EDIT!
    this.resetChart = function () {
        if (typeof (chartHandler.chartData) == 'undefined' || chartHandler.chartData == null) {
            this.chartData = [{}];
        } else {
            this.chartData = chartHandler.chartData;
        }
        this.chartDataInverse = [];
        this.graphs = {};
        if (settings.serialChart) {
            this.chart = new AmCharts.AmSerialChart();
        } else if (settings.xyChart) {
            this.chart = new AmCharts.AmXYChart();
        } else {
            this.chart = new AmCharts.AmStockChart();
            this.stockPanel = new AmCharts.StockPanel();
            this.p_dates = [];
            this.e_dates = [];
        }


    }

    this.parseSettings();
    this.resetChart();

    this.options = {
        pathToImages: "/shared/js/amcharts_3.16/amcharts/images/",
        amExport: {
            "enabled": true
        }

    };

    if (!settings.hasOwnProperty('addHeader')) {
        settings.addHeader = false;
    }

    // -------------------------------------------
    // Helper functions



    // Convert XML output from FAME to JSON
    this.XMLtoJSON = function (chartData, points, id) {

        var point_number = 0;
        var start_index = 0;
        var temp = [];
        var hasSeenNeg = false;
        var date_min_date;

        if (!settings.hasOwnProperty('beginDate')) {
            settings.beginDate = null;
        }
        var beginDate = settings.beginDate;

        var date_split = beginDate == null ? null : beginDate.split('-');


        min_date = beginDate == null ? null : new Date(date_split[0], date_split[1], date_split[2]);

        $(points).each(function (point) {
            var point_date = points[point].querySelectorAll('ObsDimension')[0].getAttribute('value');
            var point_value = points[point].querySelectorAll('ObsValue')[0].getAttribute('value');
            var status = points[point].querySelectorAll('Value')[0].getAttribute('value');

            if (status == "P") {
                p_dates[p_dates.length] = point_date;
            }
            if (status == "E") {
                e_dates[e_dates.length] = point_date;
            }

            var date_point_date = new Date(point_date);

            if (beginDate == null || date_point_date > min_date) {
                if (start_index >= 0 && (chartData[start_index + point_number] == undefined || Object.keys(chartData[start_index + point_number]).length == 0)) {

                    chartData[start_index + point_number] = {};
                    chartData[start_index + point_number][settings.xName] = point_date;

                } else {
                    if (point_number == 0) {

                        date_min_date = new Date(chartData[0][settings.xName]);
                        start_index = wrapper.getJSONIndex(chartData, date_point_date, 'start');
                        //start_index=0;
                    }

                }


                if (start_index < 0 && date_point_date < date_min_date) {
                    //use temporary list
                    temp[point_number] = {};
                    temp[point_number][settings.xName] = point_date;
                    temp[point_number]["line" + id] = point_value;
                } else {
                    if (temp.length > 0) {
                        //prepend

                        Array.prototype.unshift.apply(chartData, temp);
                        temp = [];
                        start_index = 0;
                    }


                    chartData[start_index + point_number]["line" + id] = point_value;
                }



                point_number++;
            }


        });

        if (temp.length > 0) {
            //Array.prototype.unshift.apply(chartData, temp);
        }

        return chartData
    }

    // Add leading zero to single digit numbers
    this.pad = function (r) {
        if (r.length == 1)
            r = "0" + r;
        return r;
    }

    //Generate color for line
    this.generateColor = function (id) {

        if (!settings.hasOwnProperty('colors')) {

            if (id == 0) {
                return "#BD541F";
            }

            var r = (Math.round(id / 10 * 150));
            var g = (Math.round((10 - id) / 10 * 150));
            var b = 255 - r;
            r = pad(r.toString(16));
            g = pad(g.toString(16));
            b = pad(b.toString(16));

            return '#' + r + g + b;
        }
        else {
            return settings.colors[id % settings.colors.length];
        }
    }

    // Return IE version
    this.isIE = function () {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
    }

    //cross browser version of getElementByTagName
    this.getElementByTagName = function (xml, ns, tag) {
        var a = xml.getElementsByTagName(ns + ":" + tag);
        return a.length > 0 ? a : xml.getElementsByTagName(tag);
    }

    //get last three data points
    this.getLastNDataPoints = function (n) {
        var results = [];
        for (i = 0; i < n; i++) {
            var point = this.chartData[chartData.length - 1 - i];
            var date = point[settings.xName].split("-");
            var extra = "";

            if ($.inArray(point[settings.xName], p_dates) != -1) {
                //We have a provisional value
                extra = 'Provisional';
            }
            if ($.inArray(point[settings.xName], e_dates) != -1) {
                //We have an estimated value
                extra = 'Estimated';
            }

            results[i] = { year: date[0], month: fullMonthNames[parseInt(date[1]) - 1], value: point['line0'], extra: extra };

        }
        return results;
    }

    this.generateLastThreeValues = function () {

        var elements = "";
        $(this.getLastNDataPoints(3)).each(function (i, v) {
            var number = parseFloat(v['value']).toFixed(1);
            number = number < 0 ? "&minus;" + (-1 * number) : number;
            var extra = v['extra'];
            var extra_short = extra == 'Provisional' ? " (Prov.)" : extra == "Estimated" ? " (Est.)" : "";
            extra = extra == "" ? "" : " title=\"" + extra + "\"";
            elements = "<div class=\"item-container\"><div class=\"item\" " + extra + ">" +
                number + "%<br><span class=\"ecb-small\">" + v['month'] + " '" +
                (v['year'].substr(2)) + extra_short + "</span></div></div>" + elements;
        });

        $("#chart-load").after("<div class=\"ecb-inflationData cf\">" + elements + "</div>")
    }

    this.getAverageOfLine = function (id) {
        average = 0;
        numPoints = 0;
        $.each(chartData, function (i, v) {

            var d = new Date(v[settings.xName]);

            if (!settings.hasOwnProperty('averageBeginDate') || d > settings.averageBeginDate) {
                numPoints++;
                average += parseFloat(v[id]);
            }

        });

        return average / numPoints;
    }
}


var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
];
var fullMonthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

// var colorPalette = [
// "#007bd2",
// "#d20052",
// "#7bd200",
// "#5700d2",
// "#c100d2",
// "#880012",
// "#00d2c1",
// "#d2c100",
// "#0012d2",
// "#d25700",
// "#00d257"
// ];

//52 -> 7B
//d2 -> D2
//57 -> 57
//12 -> 12
//c1 -> C1



var CHART = window.CHART || {};
var ECB = window.ECB || {};


CHART.loadChart = (function () {
    //Helper function
    function isIE() {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
    }

    function addLoadingBox() {

        /*  var container = document.getElementById('chart-container');
         if (container) container.parentNode.insertBefore('<div class="loading">' + loadingText + '</div>', container); */
        $('#chart-container').prepend('<div class="loading">' + loadingText + '</div>');
    }

    function drawChart(updateInstance) {
        if (typeof height === 'undefined' || height == null) {
            height = 500;
        }

        /* var container = document.getElementById('chart-container');
        if (container) container.appendChild('<div id="chart-canvas" style="width: 100%; min-height:' + height + 'px; "></div>'); */
        $('#chart-container').append('<div id="chart-canvas" style="width: 100%; min-height:' + height + 'px; "></div>');

        // html5_chart: load the data and draw the chart
        if (updateInstance)
            loadGraph(false);
        else
            loadGraph(true);
    }   


    function load(updateInstance) {
        /*  var chart = document.getElementById('chart-load');
         if (chart) {
             chart.innerHTML = ('<div id="chart-container" ></div>');
         } */
        $('#chart-load').html('<div id="chart-container" ></div>');
        addLoadingBox();

        drawChart(updateInstance);

    }


    return {
        'init': load
    }
})();
var CHART = window.CHART || {};

/*
 ** Charts
 ** -------------------------------------------- */
var ECB = window.ECB || {};
ECB.componentList = ECB.componentList || [];

{
    // Add all components to componentList
    ECB.componentList = ECB.componentList.concat([
        CHART.loadChart
    ]);
}
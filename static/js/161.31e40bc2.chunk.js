(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{7161:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});n(2791);var r=n(1523),i=n(6842),s=n(7892),a=n.n(s),u=n(184),o=function(t){var e=t.data;return(0,u.jsx)("div",{className:"cell-container",children:(0,u.jsxs)("article",{className:"mini-post",children:[(0,u.jsxs)("header",{children:[(0,u.jsx)("h3",{children:(0,u.jsx)("a",{href:e.link,children:e.title})}),(0,u.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,u.jsx)("a",{href:e.link,className:"image",children:(0,u.jsx)("img",{src:"".concat("/personal-site").concat(e.image),alt:e.title})}),(0,u.jsx)("div",{className:"description",children:(0,u.jsx)("p",{children:e.desc})})]})})},c=[{title:"mhl Android App Framework",subtitle:"Won 3rd. place in 2015 Techcrunch Disrupt SF Hackathon",link:"https://github.com/reml-lab/mhl-framework",image:"/images/projects/framework-overview.png",date:"2022-07-01",desc:"Framework for the mHealth Lab streaming data collection. In addition to being a study coordinator, I modified the interface to make the study application more intuitive and updated the logic to increase the productivity of the orientations"}],h=function(){return(0,u.jsx)(i.Z,{title:"Projects",description:"Learn about Erin Melia's projects.",children:(0,u.jsxs)("article",{className:"post",id:"projects",children:[(0,u.jsx)("header",{children:(0,u.jsx)("div",{className:"title",children:(0,u.jsx)("h2",{"data-testid":"heading",children:(0,u.jsx)(r.rU,{to:"/projects",children:"Projects"})})})}),c.map((function(t){return(0,u.jsx)(o,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",u="day",o="week",c="month",h="quarter",d="year",f="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},M=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:M,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+M(r,2,"0")+":"+M(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,a=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:o,d:u,D:f,h:a,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",y={};y[v]=p;var D=function(t){return t instanceof x},S=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var s=e.toLowerCase();y[s]&&(i=s),n&&(y[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var u=e.name;y[u]=e,i=u}return!r&&i&&(v=i),i||!r&&v},w=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},j=g;j.l=S,j.i=D,j.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function p(t){this.$L=S(t.locale,null,!0),this.parse(t)}var M=p.prototype;return M.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(j.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},M.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},M.$utils=function(){return j},M.isValid=function(){return!(this.$d.toString()===l)},M.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},M.isAfter=function(t,e){return w(t)<this.startOf(e)},M.isBefore=function(t,e){return this.endOf(e)<w(t)},M.$g=function(t,e,n){return j.u(t)?this[e]:this.set(n,t)},M.unix=function(){return Math.floor(this.valueOf()/1e3)},M.valueOf=function(){return this.$d.getTime()},M.startOf=function(t,e){var n=this,r=!!j.u(e)||e,h=j.p(t),l=function(t,e){var i=j.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(u)},$=function(t,e){return j.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,p=this.$M,M=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case d:return r?l(1,0):l(31,11);case c:return r?l(1,p):l(0,p+1);case o:var v=this.$locale().weekStart||0,y=(m<v?m+7:m)-v;return l(r?M-y:M+(6-y),p);case u:case f:return $(g+"Hours",0);case a:return $(g+"Minutes",1);case s:return $(g+"Seconds",2);case i:return $(g+"Milliseconds",3);default:return this.clone()}},M.endOf=function(t){return this.startOf(t,!1)},M.$set=function(t,e){var n,o=j.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[u]=h+"Date",n[f]=h+"Date",n[c]=h+"Month",n[d]=h+"FullYear",n[a]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],$=o===u?this.$D+(e-this.$W):e;if(o===c||o===d){var m=this.clone().set(f,1);m.$d[l]($),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},M.set=function(t,e){return this.clone().$set(t,e)},M.get=function(t){return this[j.p(t)]()},M.add=function(r,h){var f,l=this;r=Number(r);var $=j.p(h),m=function(t){var e=w(l);return j.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===d)return this.set(d,this.$y+r);if($===u)return m(1);if($===o)return m(7);var p=(f={},f[s]=e,f[a]=n,f[i]=t,f)[$]||1,M=this.$d.getTime()+r*p;return j.w(M,this)},M.subtract=function(t,e){return this.add(-1*t,e)},M.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=j.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return j.s(s%12||12,t,"0")},f=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:j.s(u+1,2,"0"),MMM:h(n.monthsShort,u,c,3),MMMM:h(c,u),D:this.$D,DD:j.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:j.s(s,2,"0"),h:d(1),hh:d(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:j.s(a,2,"0"),s:String(this.$s),ss:j.s(this.$s,2,"0"),SSS:j.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(t,e){return e||$[t]||i.replace(":","")}))},M.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},M.diff=function(r,f,l){var $,m=j.p(f),p=w(r),M=(p.utcOffset()-this.utcOffset())*e,g=this-p,v=j.m(this,p);return v=($={},$[d]=v/12,$[c]=v,$[h]=v/3,$[o]=(g-M)/6048e5,$[u]=(g-M)/864e5,$[a]=g/n,$[s]=g/e,$[i]=g/t,$)[m]||g,l?v:j.a(v)},M.daysInMonth=function(){return this.endOf(c).$D},M.$locale=function(){return y[this.$L]},M.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},M.clone=function(){return j.w(this.$d,this)},M.toDate=function(){return new Date(this.valueOf())},M.toJSON=function(){return this.isValid()?this.toISOString():null},M.toISOString=function(){return this.$d.toISOString()},M.toString=function(){return this.$d.toUTCString()},p}(),O=x.prototype;return w.prototype=O,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",u],["$M",c],["$y",d],["$D",f]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,x,w),t.$i=!0),w},w.locale=S,w.isDayjs=D,w.unix=function(t){return w(1e3*t)},w.en=y[v],w.Ls=y,w.p={},w}()}}]);
//# sourceMappingURL=161.31e40bc2.chunk.js.map
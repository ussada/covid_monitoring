(this["webpackJsonpcovid-monitoring"]=this["webpackJsonpcovid-monitoring"]||[]).push([[0],{21:function(t,e,n){},22:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"sortData",(function(){return b})),n.d(r,"toNumber",(function(){return h})),n.d(r,"formatCurrency",(function(){return v}));var a={};n.r(a),n.d(a,"isDate",(function(){return y})),n.d(a,"dateToString",(function(){return D})),n.d(a,"stringToDate",(function(){return S})),n.d(a,"curDate",(function(){return k})),n.d(a,"dateAdd",(function(){return w}));var c={};n.r(c),n.d(c,"useAPI",(function(){return T}));var i=n(1),o=n(0),u=n.n(o),s=n(12),d=n.n(s),l=(n(21),n(22),n(5)),f=n(3),j=n(2),b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(n,r){var c=function(t){if("object"!==typeof n||a.isDate(n)){if(n<r)return-1;if(n>r)return 1}else{if(n[t]<r[t])return-1;if(n[t]>r[t])return 1}},i=0;return Array.isArray(t)?t.map((function(t){return i=c(t)})):"string"===typeof t&&(i=c(t)),"asc"===e?i:-i}},h=function(t){switch(typeof t){case"string":return Number.isNaN(Number(t))?t:Number(t);default:return t}},v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;isNaN(t)&&(t=0);var n=h(t);return n.toFixed(e).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")},O=n(4),m=n.n(O),g="DD/MM/YYYY",p="M/D/YY",x="https://disease.sh/v3/covid-19/historical",y=function(t){var e=[m.a.ISO_8601,g];return m()(t,e,!0).isValid()},D=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g;return y(t)?m()(t).format(e):t},S=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g;return m()(t,e).toDate()},k=function(){return m()().toDate()},w=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"days";return m()(t).add(e,n).toDate()},C=a.isDate,F=a.dateToString,T=function(t,e,n){var r,a=n.queryParam,c=n.bodyParam,i=n.pathParam;e+=i?"/"+i:"",e+=a?(r=a,"?"+Object.keys(r).map((function(t){var e;return e=C(r[t])?F(r[t]):r[t],"".concat(t,"=").concat(e)})).join("&")):"";var u={method:t,headers:new Headers({"Content-Type":"application/json"})};"GET"!==t&&c&&(u.body=JSON.stringify(c));var s=Object(o.useState)({loading:!1,data:[],error:""}),d=Object(j.a)(s,2),l=d[0],b=d[1],h=Object(o.useState)(!1),v=Object(j.a)(h,2),O=v[0],m=v[1];return Object(o.useEffect)((function(){return b(Object(f.a)(Object(f.a)({},l),{},{loading:!0})),fetch(e,u).then((function(t){if(t.ok)return 204!==t.status?t.json():{success:!0};var e="";throw t.status&&(e+="[".concat(t.status,"]")),t.statusText&&(e+=" ".concat(t.statusText)),new Error(e)})).then((function(t){b({loading:!1,success:!0,data:t})})).catch((function(t){if("error"===t.status)throw t;return{loading:!1,success:!1,error:t}})),function(){b({}),m(!1)}}),[O]),[Object(f.a)(Object(f.a)({},l),{},{refreshData:function(){return m(!0)}})]},Y=n(6),M=n(7);function E(){var t=Object(Y.a)(["\n    white-space: nowrap;\n    color: white;\n    font-weight: bold;\n    padding: 0 10px;\n"]);return E=function(){return t},t}function L(){var t=Object(Y.a)(["\n    margin-top: 10px;\n    width: ","%;\n    background-color: ",";\n    padding: 10px 0;\n"]);return L=function(){return t},t}function N(){var t=Object(Y.a)(["\n    padding: 10px;\n"]);return N=function(){return t},t}function A(){var t=Object(Y.a)(["\n    width: 100%;\n    background-color: #bdbdbd;\n"]);return A=function(){return t},t}var I=M.a.div(A()),P=M.a.div(N()),R=M.a.div(L(),(function(t){return t.width}),(function(t){return t.color})),q=M.a.div(E()),B=function(t){var e={};return u.a.Children.forEach(t,(function(t){var n=t.ref.current,r=null!==n?n.getBoundingClientRect():void 0;e[t.key]=r})),e},J=function(t){var e=t.children,n=t.options,r=void 0===n?{}:n,a=Object(o.useState)({}),c=Object(j.a)(a,2),i=c[0],s=c[1],d=Object(o.useState)({}),l=Object(j.a)(d,2),f=l[0],b=l[1],h=function(t){var e=Object(o.useRef)();return Object(o.useEffect)((function(){e.current=t}),[t]),e.current}(e),v=r.motionDelay,O=void 0===v?500:v;return Object(o.useEffect)((function(){var t=B(e);s(t)}),[e]),Object(o.useEffect)((function(){var t=B(h);b(t)}),[h]),Object(o.useEffect)((function(){Object.keys(f).length&&u.a.Children.forEach(e,(function(t){var e=f[t.key],n=i[t.key];if(e&&n){var r=e.top-n.top;if(r){var a=t.ref.current;requestAnimationFrame((function(){a.style.transform="translateY(".concat(r,"px)"),a.style.transition="transform 0s",requestAnimationFrame((function(){a.style.transform="",a.style.transition="transform ".concat(O,"ms")}))}))}}}))}),[i,f,e]),e},G=a.dateAdd,H=a.dateToString,K=a.stringToDate,V=r.sortData,$=r.formatCurrency,_=function(t){var e=t.data,n=void 0===e?[]:e,r=t.startDate,a=t.endDate,c=Object(o.useState)({interval:.5,limit:20}),u=Object(j.a)(c,2),s=u[0],d=u[1],b=function(t){var e=t.target,n=e.name,r=e.value;return d(Object(f.a)(Object(f.a)({},s),{},Object(l.a)({},n,r)))},h=Object(o.useState)(r),v=Object(j.a)(h,2),O=v[0],m=v[1],g=n.map((function(t){return{id:t.id,country:t.country,cases:t.cases[O]||0,color:t.color}})).sort(V("cases","desc")).slice(0,s.limit),x=g.length>0&&g[0].cases||1,y=Object(o.useState)(!1),D=Object(j.a)(y,2),S=D[0],k=D[1],w=Object(o.useState)(!1),C=Object(j.a)(w,2),F=C[0],T=C[1];Object(o.useEffect)((function(){if(S){var t,e=1e3*(s.interval||0);return e>0&&(t=setInterval((function(){(function(){if(O===a){if(!F)return!0;m(r)}else{var t=H(G(K(O,p),-1),p);m(t)}})()&&(k(!1),clearInterval(t))}),e)),function(){return clearInterval(t)}}}));var Y={motionDelay:s.interval>.5?500:1e3*s.interval};return Object(i.jsx)(i.Fragment,{children:O?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"limit",children:"Rows display"}),Object(i.jsx)("select",{id:"limit",name:"limit",value:s.limit,onChange:b,style:{marginLeft:"5px"},children:[10,20,30,40,50].map((function(t){return Object(i.jsx)("option",{value:t,children:t},t)}))}),Object(i.jsx)("label",{htmlFor:"interval",style:{marginLeft:"10px"},children:"Interval(Second)"}),Object(i.jsx)("select",{id:"interval",name:"interval",value:s.interval,onChange:b,style:{marginLeft:"5px"},children:[.1,.3,.5,1,2,5].map((function(t){return Object(i.jsx)("option",{value:t,children:t},t)}))}),Object(i.jsx)("input",{type:"checkbox",id:"timer",name:"timer",checked:S,onChange:function(){O!==r&&m(r),k(!S)},style:{marginLeft:"10px"}}),Object(i.jsx)("label",{htmlFor:"timer",children:"Animate"}),Object(i.jsx)("input",{type:"checkbox",id:"repeat",name:"repeat",checked:F,onChange:function(){return T(!F)},style:{marginLeft:"10px"}}),Object(i.jsx)("label",{htmlFor:"repeat",children:"Repeat"})]}),Object(i.jsx)("br",{}),Object(i.jsx)(I,{children:Object(i.jsxs)(P,{children:[Object(i.jsxs)("strong",{children:["Date: ",H(K(O,"M/D/YY"),"DD/MM/YYYY")]}),Object(i.jsx)(J,{options:Y,children:g.map((function(t){var e=t.id,n=t.country,r=t.cases,a=t.color,c=100*r/x;return Object(i.jsx)(R,{id:e,width:c,color:a,ref:Object(o.createRef)(),children:Object(i.jsx)(q,{children:"".concat(n," (").concat($(r,0),")")})},e)}))})]})})]}):Object(i.jsx)("div",{children:"Not found result"})})},z=c.useAPI,Q=a.dateToString,U=a.stringToDate,W=r.sortData,X=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=[256*Math.random(),256*Math.random(),256*Math.random()],n=[85*t,85*t,85*t],r=[e[0]+n[0],e[1]+n[1],e[2]+n[2]].map((function(t){return Math.round(t/2)}));return"rgb("+r.join(",")+")"},Z=function(){var t=Object(o.useState)({lastdays:30}),e=Object(j.a)(t,2),n=e[0],r=e[1],a=z("get",x,{queryParam:n}),c=Object(j.a)(a,1)[0],u=c.data,s=c.loading,d=c.refreshData,b=Object(o.useState)([]),h=Object(j.a)(b,2),v=h[0],O=h[1],m=function(){return d()};Object(o.useMemo)((function(){var t=u.map((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return{id:e+1,country:t.country,cases:t.timeline&&t.timeline.cases||{},color:X()}}));O(t)}),[u]);var g=v&&v.length>0?Object.keys(v[0].cases).map((function(t){return U(t,p)})).sort(W("","desc")):[],y=g.length>0?Q(g[0],p):void 0,D=g.length>0?Q(g[g.length-1],p):void 0;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"lastdays",children:"Lastdays"}),Object(i.jsx)("input",{id:"lastdays",name:"lastdays",onChange:function(t){var e=t.target,a=e.name,c=e.value;return r(Object(f.a)(Object(f.a)({},n),{},Object(l.a)({},a,c)))},onKeyPress:function(t){13===t.charCode&&(t.preventDefault(),m())},value:n.lastdays,style:{marginLeft:"5px"}}),Object(i.jsx)("button",{id:"search",type:"button",onClick:m,style:{marginLeft:"5px",cursor:"pointer"},children:"Search"})]}),Object(i.jsx)("br",{}),s?Object(i.jsx)("p",{children:"Loading..."}):Object(i.jsx)(_,{data:v,startDate:y,endDate:D})]})};var tt=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(Z,{})})},et=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),c(t),i(t)}))};d.a.render(Object(i.jsx)(u.a.StrictMode,{children:Object(i.jsx)(tt,{})}),document.getElementById("root")),et()}},[[26,1,2]]]);
//# sourceMappingURL=main.15132e08.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(61)},31:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(20),c=(n(31),n(2)),o=n(9),l=n.n(o),s=n(21),u=n(4),m=n(22),p=n.n(m),d=Object({NODE_ENV:"production",PUBLIC_URL:"/kitchen-helper"}).UNSPLASH_API_KEY,f=p.a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:d}}),b=n(1),g=Object(b.b)({listStyleType:"none",position:"relative",top:"0",left:"0",width:"300px",height:"300px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",overflow:"hidden",margin:"20px auto"}),h=Object(b.b)({fontSize:"2rem",letterSpacing:"2px",zIndex:2,textTransform:"uppercase",color:"white",background:"rgba(0,0,0,0.2)",padding:"10px"}),x=Object(b.b)({position:"absolute",width:"100%",maxWidth:"300px"}),E=function(e){var t=e.ingredient,n=t.ingrName,a=t.ingrImg,i=t.time;return r.a.createElement("li",{className:g},r.a.createElement("h2",{className:h},n," ",i?"| ".concat(i):""),r.a.createElement("img",{className:x,src:a,alt:"ingredient"}))},v=["#00a8ff","#9c88ff","#fbc531","#4cd137","#e84118","#f5f6fa","#0097e6","#8c7ae6","#e1b12c","#e1b12c","#44bd32","#40739e"],j=Object(b.b)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}),O=Object(b.b)({position:"relative",display:"flex",flexDirection:"column",maxWidth:"90vw",margin:"0 auto",alignItems:"center",justifyContent:"center",overflow:"hidden",background:"rgba(0,0,0,0.2)",$nest:{"& button":{padding:"15px",display:"block"},"& input":{width:"50%",fontSize:"2rem",boxShadow:"none",border:"none",margin:"10px auto",textAlign:"center",color:"white",$nest:{"&:focus":{background:"lightblue"}}},"& label":{color:"white"}}},Object(b.a)({maxWidth:600},{maxWidth:"100%"})),y=Object(b.b)({display:"flex",flexWrap:"wrap",justifyContent:"center"}),N=Object(b.b)({boxShadow:"none",border:"none",background:"lightblue",color:"white",margin:"20px",padding:"10px",textTransform:"uppercase",cursor:"pointer",$nest:{"&--red":{color:"red"}}}),w=function(e){var t=Object(a.useContext)(F),n=t.dispatch,i=t.store,o=Object(a.useState)({timeValue:""}),l=Object(c.a)(o,2),s=l[0],m=l[1],p=e.changeSteps,d=function(e,t){e.preventDefault();var a=i.timers.map(function(e){return e.id===t&&(e.time=s.timeValue,e.color=v[Math.floor(Math.random()*v.length-1)+1]),e});n({type:"ADD_TIME",payload:a})};return r.a.createElement("div",null,r.a.createElement("h1",null,"Add Your Timings"),i.timers.map(function(e){var t=e.id;return r.a.createElement("div",{className:j,key:t},r.a.createElement(E,{ingredient:Object(u.a)({},e)}),r.a.createElement("form",{className:O,onSubmit:function(e){return d(e,t)}},r.a.createElement("label",{htmlFor:"time"},"Your Time:"),r.a.createElement("input",{min:"1",type:"time",name:"time",onChange:function(e){return function(e){m({timeValue:e.currentTarget.value})}(e)},defaultValue:e.time,style:{background:"rgba(0,0,0,0.3)",outline:"none"}}),r.a.createElement("button",{className:N,type:"submit"},"Add / Change Time"),r.a.createElement("button",{className:N,style:{color:"red"},type:"button",onClick:function(e){return function(e,t){var a=i.timers.filter(function(e){return e.id!==t});n({type:"DEL_TIME",payload:a})}(0,t)}},"Delete Ingredient"),r.a.createElement("p",null,"(Hit enter or click the 'add time' button to confirm)")))}),r.a.createElement("div",{className:y},r.a.createElement("button",{className:N,onClick:function(){return p("-")}},"Prev Step"),r.a.createElement("button",{className:N,onClick:function(){return p("+")}},"Next Step")))},S=n(52),k=Object(b.b)({color:"red"}),I=Object(b.b)({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}),C=Object(b.b)({width:"90%",display:"flex",flexDirection:"column",alignItems:"center",$nest:{"& input":{width:"50%",background:"rgba(0,0,0,.3)",fontSize:"2rem",border:"none",margin:" 10px 0",textAlign:"center",letterSpacing:"3px",color:"white",outline:"none"}}}),D=Object(b.b)({padding:"0 10px"}),T=function(e){var t=e.changeSteps,n=Object(a.useState)({ingrName:"",ingrImg:""}),i=Object(c.a)(n,2),o=i[0],m=i[1],p=Object(a.useState)(""),d=Object(c.a)(p,2),b=d[0],g=d[1],h=Object(a.useContext)(F).dispatch,x=function(){var e=Object(s.a)(l.a.mark(function e(t){var n,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/search/photos",{params:{query:t}});case 2:return n=e.sent,a=n.data.results[0].urls.small,e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:I},r.a.createElement("h1",{className:D},"Add Your Ingredients"),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),o.id=S(),x(o.ingrName).then(function(e){o.ingrImg=e}).then(function(){g(""),h({type:"ADD_INGR",payload:o})}).then(function(){return m({ingrName:"",ingrImg:""})}).catch(function(e){console.error(e),g("Ingredient is not in a base, try with another search")})}(e)},className:C},r.a.createElement("input",{type:"text",name:"field",onChange:function(e){return function(e){m(Object(u.a)({},o,{ingrName:e.currentTarget.value}))}(e)},value:o.ingrName}),r.a.createElement("label",{htmlFor:"field",className:b?k:""},b||"Type your ingredient Here"),r.a.createElement("p",null,"(Hit enter to confirm)")),r.a.createElement("button",{className:N,type:"button",onClick:function(){return t("+")}},"Next Step"))},A=function(){var e=Object(a.useContext)(F).store;return r.a.createElement("ul",null,e.timers.map(function(e){return r.a.createElement(E,{key:e.id,ingredient:e})}))},W=function(e){var t=e.changeSteps;return r.a.createElement("div",{style:{margin:"0 auto"}},r.a.createElement("h1",null,"Timers Summary"),r.a.createElement(A,null),r.a.createElement("button",{className:N,onClick:function(){return t("-")}},"Prev Step"),r.a.createElement("button",{className:N,onClick:function(){return t("+")}},"Let's Cook"))},_=n(55).default,z=Object(b.b)({display:"grid",gridTemplateColumns:"4fr 1fr",gridGap:"15px",margin:"10px auto",alignItems:"center",width:"40vmin"}),R=function(e){var t=e.time,n=e.color,i=e.ingrName,o=t.split(":"),l=60*parseInt(o[0])+parseInt(o[1]),s=Object(a.useState)(""),u=Object(c.a)(s,2),m=u[0],p=u[1],d=Object(a.useState)(l),f=Object(c.a)(d,2),g=f[0],h=f[1],x=new _,E=[1e3,3e3,1e3,3e3,1e3,3e3,1e3,3e3,1e3,3e3,1e3,3e3,1e3,3e3,1e3,3e3,1e3,3e3,1e3,3e3,1e3,3e3,1e3,3e3];Object(a.useEffect)(function(){x.start(1e3*l,[1e3]),x.on("tick",function(e){h(x.time)}),x.on("done",function(){p("DONE!"),window.navigator.vibrate(E)})},[]);var v=Object(b.b)({margin:"0 10px",background:n,width:"15px",height:"10px"}),j=Object(b.b)({color:n,justifySelf:"flex-start",fontSize:"3.4vmin"});return r.a.createElement("div",{className:z,onClick:function(){"DONE!"===m&&window.navigator.vibrate(0)}},r.a.createElement("p",{className:j},i," : ",m||function(){var e=g/1e3;return"".concat(Math.floor(e/60).toFixed(0)," min ").concat((e%60).toFixed(0)," sec")}()),r.a.createElement("div",{className:v}))},M=n(56),P=function(e){var t=e.color,n=e.time,i=e.strokeWidth,o=e.zIndex,l=Object(a.useState)(""),s=Object(c.a)(l,2);s[0],s[1];Object(a.useEffect)(function(){var e=n.split(":"),a=60*parseInt(e[0])+parseInt(e[1]);if(u.current){var r=new M.Circle(u.current,{duration:1e3*a,easing:"linear",strokeWidth:i,step:function(e,t,n){t.path.setAttribute("stroke",e.color)}}),c={from:{color:t},to:{color:t}};r.animate(1,c)}},[]);var u=r.a.createRef(),m=Object(b.b)({position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"90vmin",height:"90vmin",zIndex:o,boxShadow:"0 0 3px 3px rgba(255,255,255,0.2)",borderRadius:"50%"});return r.a.createElement("div",{ref:u,className:m})},L=Object(b.b)({position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"50%",height:"auto"}),H=Object(b.b)({position:"fixed",bottom:"5%",left:"50%",transform:"translateX(-50%)"}),V=function(e){var t=e.appReset,n=Object(a.useContext)(F).store,i=1,c=10,o=n.timers.sort(function(e,t){return parseInt(e.time)>parseInt(t.time)?1:-1});return console.log(n),r.a.createElement("div",null,r.a.createElement("div",{className:L},o.map(function(e){var t=e.id,n=e.time,a=e.color;return r.a.createElement(P,{key:t,time:n,strokeWidth:i+=2,zIndex:c--,color:a})})),r.a.createElement("div",{className:L},o.map(function(e){return r.a.createElement(R,{key:e.id,time:e.time,ingrName:e.ingrName,color:e.color})})),r.a.createElement("button",{onClick:t,style:{position:"fixed",top:"5%",right:"5%",padding:"10px 15px"},className:N},"Go Back To Main Panel"),r.a.createElement("p",{className:H},"(When done, tap on the ingredient to stop vibrations)"))},Y=n(24),$={timers:[]},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGR":return Object(u.a)({},e,{timers:[].concat(Object(Y.a)(e.timers),[t.payload])});case"ADD_TIME":case"DEL_TIME":return Object(u.a)({},e,{timers:t.payload});default:return e}},F=(n(60),r.a.createContext({})),G=function(){var e=Object(a.useReducer)(B,$),t=Object(c.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)({step:1,timers:[]}),l=Object(c.a)(o,2),s=l[0],u=l[1],m=s.step,p=function(){return u({timers:[],step:1})},d=function(e){u("+"===e?function(e){return{step:m+1}}:function(e){return{step:m-1}})};return r.a.createElement(F.Provider,{value:{dispatch:i,store:n}},r.a.createElement("div",{className:"App"},4===m?null:r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Kitchen Helper"),r.a.createElement("p",null,"Precise Your Kitchen Timing "),r.a.createElement("h4",null,"Step ",m)),function(){switch(m){case 1:return r.a.createElement(T,{changeSteps:d});case 2:return r.a.createElement(w,{changeSteps:d});case 3:return r.a.createElement(W,{changeSteps:d});case 4:return r.a.createElement(V,{appReset:p});default:return r.a.createElement(T,{changeSteps:d})}}()))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.render(a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.446c917e.chunk.js.map
(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{115:function(t,e,n){},116:function(t,e,n){},145:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(10),r=n.n(i);n(115),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(116);var o,s,d=n(192),u=n(193),l=n(148),j=n(147),b=n(184),O=n(95),f=n.n(O),h=n(191),T=n(194),m=n(195),g=n(17),p=n(65),v=n(8),x=n(71),k=n.n(x),I=k.a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/todo-lists",withCredentials:!0,headers:{"API-KEY":"63e080d1-f004-48f7-ae2d-df9d85d2ae65"}}),S=k.a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/auth/",withCredentials:!0,headers:{"API-KEY":"63e080d1-f004-48f7-ae2d-df9d85d2ae65"}});!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(o||(o={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(s||(s={}));var L=function(t){return S.post("login",t)},E=function(){return S.get("me")},y=function(t,e){return I.put("/".concat(t),{title:e})},C=function(){return I.get("")},A=function(t){return I.delete("/".concat(t))},D=function(t){return I.post("",{title:t})},w=function(t){return I.get("/".concat(t,"/tasks"))},N=function(t,e){return I.post("/".concat(t,"/tasks"),{title:e})},P=function(t,e){return I.delete("/".concat(t,"/tasks/").concat(e))},R=function(t,e,n){return I.put("/".concat(t,"/tasks/").concat(e),n)},F=function(t,e){t.messages.length?e(z(t.messages[0])):e(z("Some error occurred")),e(M("failed"))},G=function(t,e){e(z(t.message)),e(M("failed"))},K={isLoggedIn:!1},U=function(t){return{type:"login/SET-IS-LOGGED-IN",value:t}},H={status:"idle",error:null,isInitialized:!1},M=function(t){return{type:"APP/SET-STATUS",status:t}},z=function(t){return{type:"APP/SET-ERROR",error:t}},V=function(t){return{type:"APP/SET-INITIALIZED",isInitialized:t}},Z=[],Y=function(t,e){return{type:"CHANGE-TODOLIST-ENTITY-STATUS",todoListId:t,entityStatus:e}},B=n(36),q={},J=function(t,e,n){return function(a,c){var i=c().tasks[n].find((function(e){return e.id===t}));i&&(a(M("loading")),R(n,t,Object(v.a)({title:i.title,startDate:i.startDate,priority:i.priority,description:i.description,deadline:i.deadline,status:i.status},e)).then((function(){a(function(t,e,n){return{type:"UPDATE-TASK",taskId:t,model:e,todolistId:n}}(t,e,n)),a(M("succeeded"))})).catch((function(t){G(t,a)})))}},W=n(188),$=n(146),_=n(49),Q=n(196),X=n(185),tt=n(3),et=c.a.memo((function(t){var e=Object(a.useState)(""),n=Object(_.a)(e,2),c=n[0],i=n[1],r=Object(a.useState)(null),o=Object(_.a)(r,2),s=o[0],d=o[1],u=function(){var e=c.trim();e?t.addItem(e):d("Title is required!"),i("")};return Object(tt.jsxs)("div",{children:[Object(tt.jsx)(Q.a,{value:c,onChange:function(t){d(null),i(t.currentTarget.value)},onKeyPress:function(t){null!==s&&d(null),"Enter"===t.key&&u()},variant:"outlined",error:!!s,label:"Input your title",helperText:s,disabled:"loading"===t.entityStatus}),Object(tt.jsx)(b.a,{color:"primary",onClick:u,disabled:"loading"===t.entityStatus,children:Object(tt.jsx)(X.a,{})})]})})),nt=c.a.memo((function(t){var e=Object(a.useState)(!1),n=Object(_.a)(e,2),c=n[0],i=n[1],r=Object(a.useState)(t.value),o=Object(_.a)(r,2),s=o[0],d=o[1];return c?Object(tt.jsx)(Q.a,{variant:"outlined",value:s,onBlur:function(){i(!1),s.trim()&&t.getNewTitle(s.trim())},autoFocus:!0,onChange:function(t){d(t.currentTarget.value)}}):Object(tt.jsx)("span",{onDoubleClick:function(){return i(!0)},children:t.value})})),at=n(187),ct=n(186),it=n(198),rt=c.a.memo((function(t){var e=Object(a.useCallback)((function(){return t.removeTask(t.task.id,t.todoListId)}),[t.removeTask,t.task.id,t.todoListId]),n=Object(a.useCallback)((function(e){t.changeStatus(t.task.id,e.currentTarget.checked?o.Completed:o.New,t.todoListId)}),[t.changeStatus,t.task.id,t.todoListId]),c=Object(a.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todoListId)}),[t.changeTaskTitle,t.task.id,t.todoListId]);return Object(tt.jsxs)("li",{className:t.task.status===o.Completed?"is-done":"",children:[Object(tt.jsx)(it.a,{onChange:n,color:"primary",checked:t.task.status===o.Completed}),Object(tt.jsx)(nt,{value:t.task.title,getNewTitle:c}),Object(tt.jsx)(b.a,{onClick:e,children:Object(tt.jsx)(ct.a,{})})]},t.task.id)})),ot=c.a.memo((function(t){var e=Object(g.b)();Object(a.useEffect)((function(){var n;e((n=t.id,function(t){t(M("loading")),w(n).then((function(e){t(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(e.data.items,n)),t(M("succeeded"))})).catch((function(e){G(e,t)}))}))}),[]);var n=t.tasks;"active"===t.filter&&(n=t.tasks.filter((function(t){return t.status===o.New}))),"completed"===t.filter&&(n=t.tasks.filter((function(t){return t.status===o.Completed})));var c=n.map((function(e){return Object(tt.jsx)(rt,{todoListId:t.id,changeStatus:t.changeStatus,removeTask:t.removeTask,changeTaskTitle:t.changeTaskTitle,task:e},t.id)})),i=Object(a.useCallback)((function(){return t.removeTodoList(t.id)}),[t.removeTodoList,t.id]),r=Object(a.useCallback)((function(){return t.changeFilter("all",t.id)}),[t.changeFilter,t.id]),s=Object(a.useCallback)((function(){return t.changeFilter("active",t.id)}),[t.changeFilter,t.id]),d=Object(a.useCallback)((function(){return t.changeFilter("completed",t.id)}),[t.changeFilter,t.id]),u=Object(a.useCallback)((function(e){t.addTask(e,t.id)}),[t.addTask,t.id]),l=Object(a.useCallback)((function(e){t.changeTodoListTitle(e,t.id)}),[t.changeTodoListTitle,t.id]);return Object(tt.jsxs)("div",{children:[Object(tt.jsxs)("h3",{children:[Object(tt.jsx)(nt,{value:t.title,getNewTitle:l}),Object(tt.jsx)(j.a,{onClick:i,disabled:"loading"===t.entityStatus,children:Object(tt.jsx)(ct.a,{})})]}),Object(tt.jsx)(et,{addItem:u,entityStatus:t.entityStatus}),Object(tt.jsx)("div",{children:c}),Object(tt.jsx)("div",{children:Object(tt.jsxs)(at.a,{size:"small",children:[Object(tt.jsx)(j.a,{variant:"all"===t.filter?"contained":"outlined",onClick:r,children:"All"}),Object(tt.jsx)(j.a,{color:"primary",variant:"active"===t.filter?"contained":"outlined",onClick:s,children:"Active"}),Object(tt.jsx)(j.a,{color:"secondary",variant:"completed"===t.filter?"contained":"outlined",onClick:d,children:"Completed"})]})})]})})),st=n(15),dt=c.a.memo((function(){var t=Object(g.c)((function(t){return t.todoLists})),e=Object(g.c)((function(t){return t.tasks})),n=Object(g.c)((function(t){return t.auth.isLoggedIn})),c=Object(g.b)();Object(a.useEffect)((function(){n&&c((function(t){t(M("loading")),C().then((function(e){t({type:"SET-TODOLIST",todolist:e.data}),t(M("succeeded"))})).catch((function(e){G(e,t)}))}))}),[]);var i=Object(a.useCallback)((function(t,e){var n,a;c((n=t,a=e,function(t){t(M("loading")),P(a,n).then((function(){t(function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(n,a)),t(M("succeeded"))})).catch((function(e){G(e,t)}))}))}),[c]),r=Object(a.useCallback)((function(t,e){c(function(t,e){return function(n){n(M("loading")),N(e,t).then((function(t){0===t.data.resultCode?(n({type:"ADD-TASK",task:t.data.data.item}),n(M("succeeded"))):F(t.data,n)})).catch((function(t){G(t,n)}))}}(t,e))}),[c]),o=Object(a.useCallback)((function(t,e,n){c(J(t,{status:e},n))}),[c]),s=Object(a.useCallback)((function(t,e,n){c(J(t,{title:e},n))}),[c]),d=Object(a.useCallback)((function(t){var e;c((e=t,function(t){t(Y(e,"loading")),t(M("loading")),A(e).then((function(){t({type:"REMOVE-TODOLIST",id:e}),t(M("succeeded")),t(Y(e,"succeeded"))})).catch((function(e){G(e,t)}))}))}),[c]),u=Object(a.useCallback)((function(t){c(function(t){return function(e){e(M("loading")),D(t).then((function(t){0===t.data.resultCode?(e({type:"ADD-TODOLIST",todoList:t.data.data.item}),e(M("succeeded"))):F(t.data,e)})).catch((function(t){G(t,e)}))}}(t))}),[c]),l=Object(a.useCallback)((function(t,e){c(function(t,e){return function(n){n(M("loading")),y(e,t).then((function(){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",title:t,todoListId:e}}(t,e)),n(M("succeeded"))})).catch((function(t){G(t,n)}))}}(t,e))}),[c]),j=Object(a.useCallback)((function(t,e){c(function(t,e){return{type:"CHANGE-TODOLIST-FILTER",filter:t,todoListId:e}}(t,e))}),[c]);return n?Object(tt.jsxs)(tt.Fragment,{children:[Object(tt.jsx)(W.a,{container:!0,style:{padding:"20px"},children:Object(tt.jsx)(et,{addItem:u})}),Object(tt.jsx)(W.a,{container:!0,spacing:3,children:t.map((function(t){var n=e[t.id];return Object(tt.jsx)(W.a,{item:!0,children:Object(tt.jsx)($.a,{style:{padding:"10px"},children:Object(tt.jsx)(ot,{id:t.id,title:t.title,entityStatus:t.entityStatus,tasks:n,removeTask:i,removeTodoList:d,changeFilter:j,addTask:r,changeStatus:o,filter:t.filter,changeTaskTitle:s,changeTodoListTitle:l},t.id)},t.id)},t.id)}))})]}):Object(tt.jsx)(st.a,{to:"/login"})})),ut=n(200),lt=n(197);function jt(t){return Object(tt.jsx)(lt.a,Object(v.a)({elevation:6,variant:"filled"},t))}function bt(){var t=Object(g.c)((function(t){return t.app.error})),e=Object(g.b)(),n=function(t,n){"clickaway"!==n&&e(z(null))};return Object(tt.jsx)(ut.a,{open:null!==t,autoHideDuration:6e3,onClose:n,children:Object(tt.jsx)(jt,{onClose:n,severity:"error",children:t})})}var Ot=n(182),ft=n(183),ht=n(189),Tt=n(190),mt=n(98),gt=function(){var t=Object(g.c)((function(t){return t.auth.isLoggedIn})),e=Object(g.b)(),n=Object(mt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",e},onSubmit:function(t){var a;n.resetForm(),e((a=t,function(t){t(M("loading")),L(a).then((function(e){0===e.data.resultCode?(t(U(!0)),t(M("succeeded"))):F(e.data,t)})).catch((function(e){G(e,t)}))}))}});return t?Object(tt.jsx)(st.a,{to:"/"}):Object(tt.jsx)(W.a,{container:!0,justify:"center",children:Object(tt.jsx)(W.a,{item:!0,xs:4,children:Object(tt.jsx)("form",{onSubmit:n.handleSubmit,children:Object(tt.jsxs)(Ot.a,{children:[Object(tt.jsxs)(ft.a,{children:[Object(tt.jsxs)("p",{children:["To log in get registered",Object(tt.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:"here"})]}),Object(tt.jsx)("p",{children:"or use common test account credentials:"}),Object(tt.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(tt.jsx)("p",{children:"Password: free"})]}),Object(tt.jsxs)(ht.a,{children:[Object(tt.jsx)(Q.a,Object(v.a)({label:"Email",margin:"normal"},n.getFieldProps("email"))),Object(tt.jsx)(Q.a,Object(v.a)({type:"password",label:"Password",margin:"normal"},n.getFieldProps("password"))),n.touched.email&&n.errors.email?Object(tt.jsxs)("div",{style:{color:"red"},children:[" ",n.errors.email]}):null,Object(tt.jsx)(Tt.a,{label:"Remember me",control:Object(tt.jsx)(it.a,{})}),Object(tt.jsx)(j.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})},pt=c.a.memo((function(){var t=Object(g.b)();Object(a.useEffect)((function(){t((function(t){E().then((function(e){0===e.data.resultCode?(t(V(!0)),t(U(!0))):(t(V(!1)),t(U(!1)),F(e.data,t))})).catch((function(e){G(e,t)}))}))}),[]);var e=Object(g.c)((function(t){return t.app.status}));return Object(g.c)((function(t){return t.app.isInitialized}))?Object(tt.jsxs)("div",{className:"App",children:[Object(tt.jsxs)(d.a,{position:"static",children:[Object(tt.jsx)(bt,{}),Object(tt.jsxs)(u.a,{children:[Object(tt.jsx)(b.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(tt.jsx)(f.a,{})}),Object(tt.jsx)(l.a,{variant:"h6",children:"News"}),Object(tt.jsx)(j.a,{color:"inherit",children:"Login"})]})]}),"loading"===e&&Object(tt.jsx)(T.a,{}),Object(tt.jsx)(m.a,{fixed:!0,children:Object(tt.jsxs)(st.d,{children:[Object(tt.jsx)(st.b,{exact:!0,path:"/",render:function(){return Object(tt.jsx)(dt,{})}}),Object(tt.jsx)(st.b,{path:"/login",render:function(){return Object(tt.jsx)(gt,{})}}),Object(tt.jsx)(st.b,{path:"/404",render:function(){return Object(tt.jsx)("h1",{children:"404: PAGE NOT FOUND"})}}),Object(tt.jsx)(st.a,{from:"*",to:"/404"})]})})]}):Object(tt.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(tt.jsx)(h.a,{})})})),vt=n(46),xt=n(96),kt=Object(vt.c)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET-TASKS":return Object(v.a)(Object(v.a)({},t),{},Object(B.a)({},e.todolistId,e.tasks));case"SET-TODOLIST":var n=Object(v.a)({},t);return e.todolist.forEach((function(t){n[t.id]=[]})),n;case"REMOVE-TASK":return Object(v.a)(Object(v.a)({},t),{},Object(B.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(v.a)(Object(v.a)({},t),{},Object(B.a)({},e.task.todoListId,[e.task].concat(Object(p.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(v.a)(Object(v.a)({},t),{},Object(B.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(v.a)(Object(v.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(v.a)(Object(v.a)({},t),{},Object(B.a)({},e.todoList.id,[]));case"REMOVE-TODOLIST":var a=Object(v.a)({},t);return delete a[e.id],a;default:return t}},todoLists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET-TODOLIST":return e.todolist.map((function(t){return Object(v.a)(Object(v.a)({},t),{},{filter:"all",entityStatus:"idle"})}));case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[Object(v.a)(Object(v.a)({},e.todoList),{},{filter:"all",entityStatus:"idle"})].concat(Object(p.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.todoListId?Object(v.a)(Object(v.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.todoListId?Object(v.a)(Object(v.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.todoListId?Object(v.a)(Object(v.a)({},t),{},{entityStatus:e.entityStatus}):t}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(v.a)(Object(v.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(v.a)(Object(v.a)({},t),{},{error:e.error});case"APP/SET-INITIALIZED":return Object(v.a)(Object(v.a)({},t),{},{isInitialized:e.isInitialized});default:return t}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"login/SET-IS-LOGGED-IN":return Object(v.a)(Object(v.a)({},t),{},{isLoggedIn:e.value});default:return t}}}),It=Object(vt.d)(kt,Object(vt.a)(xt.a));window.store=It;var St=n(50);r.a.render(Object(tt.jsx)(g.a,{store:It,children:Object(tt.jsx)(St.a,{children:Object(tt.jsx)(pt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[145,1,2]]]);
//# sourceMappingURL=main.0f62d5f5.chunk.js.map
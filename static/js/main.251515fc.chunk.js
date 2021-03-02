(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{115:function(t,e,n){},116:function(t,e,n){},145:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),i=n(10),r=n.n(i);n(115),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(116);var o,s,d=n(192),u=n(193),l=n(148),j=n(147),b=n(184),O=n(95),f=n.n(O),h=n(191),T=n(194),m=n(195),g=n(17),p=n(65),v=n(8),x=n(71),k=n.n(x),I=k.a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/todo-lists",withCredentials:!0,headers:{"API-KEY":"63e080d1-f004-48f7-ae2d-df9d85d2ae65"}}),S=k.a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/auth/",withCredentials:!0,headers:{"API-KEY":"63e080d1-f004-48f7-ae2d-df9d85d2ae65"}});!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(o||(o={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(s||(s={}));var L=function(t){return S.post("login",t)},E=function(){return S.get("me")},y=function(){return S.delete("login")},C=function(t,e){return I.put("/".concat(t),{title:e})},A=function(){return I.get("")},D=function(t){return I.delete("/".concat(t))},w=function(t){return I.post("",{title:t})},N=function(t){return I.get("/".concat(t,"/tasks"))},P=function(t,e){return I.post("/".concat(t,"/tasks"),{title:e})},R=function(t,e){return I.delete("/".concat(t,"/tasks/").concat(e))},F=function(t,e,n){return I.put("/".concat(t,"/tasks/").concat(e),n)},G=function(t,e){t.messages.length?e(V(t.messages[0])):e(V("Some error occurred")),e(z("failed"))},K=function(t,e){e(V(t.message)),e(z("failed"))},U={isLoggedIn:!1},H=function(t){return{type:"login/SET-IS-LOGGED-IN",value:t}},M={status:"idle",error:null,isInitialized:!1},z=function(t){return{type:"APP/SET-STATUS",status:t}},V=function(t){return{type:"APP/SET-ERROR",error:t}},Z=function(t){return{type:"APP/SET-INITIALIZED",isInitialized:t}},Y=[],B=function(t,e){return{type:"CHANGE-TODOLIST-ENTITY-STATUS",todoListId:t,entityStatus:e}},q=n(36),J={},W=function(t,e,n){return function(c,a){var i=a().tasks[n].find((function(e){return e.id===t}));i&&(c(z("loading")),F(n,t,Object(v.a)({title:i.title,startDate:i.startDate,priority:i.priority,description:i.description,deadline:i.deadline,status:i.status},e)).then((function(){c(function(t,e,n){return{type:"UPDATE-TASK",taskId:t,model:e,todolistId:n}}(t,e,n)),c(z("succeeded"))})).catch((function(t){K(t,c)})))}},$=n(188),_=n(146),Q=n(49),X=n(196),tt=n(185),et=n(3),nt=a.a.memo((function(t){var e=Object(c.useState)(""),n=Object(Q.a)(e,2),a=n[0],i=n[1],r=Object(c.useState)(null),o=Object(Q.a)(r,2),s=o[0],d=o[1],u=function(){var e=a.trim();e?t.addItem(e):d("Title is required!"),i("")};return Object(et.jsxs)("div",{children:[Object(et.jsx)(X.a,{value:a,onChange:function(t){d(null),i(t.currentTarget.value)},onKeyPress:function(t){null!==s&&d(null),"Enter"===t.key&&u()},variant:"outlined",error:!!s,label:"Input your title",helperText:s,disabled:"loading"===t.entityStatus}),Object(et.jsx)(b.a,{color:"primary",onClick:u,disabled:"loading"===t.entityStatus,children:Object(et.jsx)(tt.a,{})})]})})),ct=a.a.memo((function(t){var e=Object(c.useState)(!1),n=Object(Q.a)(e,2),a=n[0],i=n[1],r=Object(c.useState)(t.value),o=Object(Q.a)(r,2),s=o[0],d=o[1];return a?Object(et.jsx)(X.a,{variant:"outlined",value:s,onBlur:function(){i(!1),s.trim()&&t.getNewTitle(s.trim())},autoFocus:!0,onChange:function(t){d(t.currentTarget.value)}}):Object(et.jsx)("span",{onDoubleClick:function(){return i(!0)},children:t.value})})),at=n(187),it=n(186),rt=n(198),ot=a.a.memo((function(t){var e=Object(c.useCallback)((function(){return t.removeTask(t.task.id,t.todoListId)}),[t.removeTask,t.task.id,t.todoListId]),n=Object(c.useCallback)((function(e){t.changeStatus(t.task.id,e.currentTarget.checked?o.Completed:o.New,t.todoListId)}),[t.changeStatus,t.task.id,t.todoListId]),a=Object(c.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todoListId)}),[t.changeTaskTitle,t.task.id,t.todoListId]);return Object(et.jsxs)("li",{className:t.task.status===o.Completed?"is-done":"",children:[Object(et.jsx)(rt.a,{onChange:n,color:"primary",checked:t.task.status===o.Completed}),Object(et.jsx)(ct,{value:t.task.title,getNewTitle:a}),Object(et.jsx)(b.a,{onClick:e,children:Object(et.jsx)(it.a,{})})]},t.task.id)})),st=a.a.memo((function(t){var e=Object(g.b)();Object(c.useEffect)((function(){var n;e((n=t.id,function(t){t(z("loading")),N(n).then((function(e){t(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(e.data.items,n)),t(z("succeeded"))})).catch((function(e){K(e,t)}))}))}),[]);var n=t.tasks;"active"===t.filter&&(n=t.tasks.filter((function(t){return t.status===o.New}))),"completed"===t.filter&&(n=t.tasks.filter((function(t){return t.status===o.Completed})));var a=n.map((function(e){return Object(et.jsx)(ot,{todoListId:t.id,changeStatus:t.changeStatus,removeTask:t.removeTask,changeTaskTitle:t.changeTaskTitle,task:e},t.id)})),i=Object(c.useCallback)((function(){return t.removeTodoList(t.id)}),[t.removeTodoList,t.id]),r=Object(c.useCallback)((function(){return t.changeFilter("all",t.id)}),[t.changeFilter,t.id]),s=Object(c.useCallback)((function(){return t.changeFilter("active",t.id)}),[t.changeFilter,t.id]),d=Object(c.useCallback)((function(){return t.changeFilter("completed",t.id)}),[t.changeFilter,t.id]),u=Object(c.useCallback)((function(e){t.addTask(e,t.id)}),[t.addTask,t.id]),l=Object(c.useCallback)((function(e){t.changeTodoListTitle(e,t.id)}),[t.changeTodoListTitle,t.id]);return Object(et.jsxs)("div",{children:[Object(et.jsxs)("h3",{children:[Object(et.jsx)(ct,{value:t.title,getNewTitle:l}),Object(et.jsx)(j.a,{onClick:i,disabled:"loading"===t.entityStatus,children:Object(et.jsx)(it.a,{})})]}),Object(et.jsx)(nt,{addItem:u,entityStatus:t.entityStatus}),Object(et.jsx)("div",{children:a}),Object(et.jsx)("div",{children:Object(et.jsxs)(at.a,{size:"small",children:[Object(et.jsx)(j.a,{variant:"all"===t.filter?"contained":"outlined",onClick:r,children:"All"}),Object(et.jsx)(j.a,{color:"primary",variant:"active"===t.filter?"contained":"outlined",onClick:s,children:"Active"}),Object(et.jsx)(j.a,{color:"secondary",variant:"completed"===t.filter?"contained":"outlined",onClick:d,children:"Completed"})]})})]})})),dt=n(15),ut=a.a.memo((function(){var t=Object(g.c)((function(t){return t.todoLists})),e=Object(g.c)((function(t){return t.tasks})),n=Object(g.c)((function(t){return t.auth.isLoggedIn})),a=Object(g.b)();Object(c.useEffect)((function(){n&&a((function(t){t(z("loading")),A().then((function(e){t({type:"SET-TODOLIST",todolist:e.data}),t(z("succeeded"))})).catch((function(e){K(e,t)}))}))}),[]);var i=Object(c.useCallback)((function(t,e){var n,c;a((n=t,c=e,function(t){t(z("loading")),R(c,n).then((function(){t(function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(n,c)),t(z("succeeded"))})).catch((function(e){K(e,t)}))}))}),[a]),r=Object(c.useCallback)((function(t,e){a(function(t,e){return function(n){n(z("loading")),P(e,t).then((function(t){0===t.data.resultCode?(n({type:"ADD-TASK",task:t.data.data.item}),n(z("succeeded"))):G(t.data,n)})).catch((function(t){K(t,n)}))}}(t,e))}),[a]),o=Object(c.useCallback)((function(t,e,n){a(W(t,{status:e},n))}),[a]),s=Object(c.useCallback)((function(t,e,n){a(W(t,{title:e},n))}),[a]),d=Object(c.useCallback)((function(t){var e;a((e=t,function(t){t(B(e,"loading")),t(z("loading")),D(e).then((function(){t({type:"REMOVE-TODOLIST",id:e}),t(z("succeeded")),t(B(e,"succeeded"))})).catch((function(e){K(e,t)}))}))}),[a]),u=Object(c.useCallback)((function(t){a(function(t){return function(e){e(z("loading")),w(t).then((function(t){0===t.data.resultCode?(e({type:"ADD-TODOLIST",todoList:t.data.data.item}),e(z("succeeded"))):G(t.data,e)})).catch((function(t){K(t,e)}))}}(t))}),[a]),l=Object(c.useCallback)((function(t,e){a(function(t,e){return function(n){n(z("loading")),C(e,t).then((function(){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",title:t,todoListId:e}}(t,e)),n(z("succeeded"))})).catch((function(t){K(t,n)}))}}(t,e))}),[a]),j=Object(c.useCallback)((function(t,e){a(function(t,e){return{type:"CHANGE-TODOLIST-FILTER",filter:t,todoListId:e}}(t,e))}),[a]);return n?Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)($.a,{container:!0,style:{padding:"20px"},children:Object(et.jsx)(nt,{addItem:u})}),Object(et.jsx)($.a,{container:!0,spacing:3,children:t.map((function(t){var n=e[t.id];return Object(et.jsx)($.a,{item:!0,children:Object(et.jsx)(_.a,{style:{padding:"10px"},children:Object(et.jsx)(st,{id:t.id,title:t.title,entityStatus:t.entityStatus,tasks:n,removeTask:i,removeTodoList:d,changeFilter:j,addTask:r,changeStatus:o,filter:t.filter,changeTaskTitle:s,changeTodoListTitle:l},t.id)},t.id)},t.id)}))})]}):Object(et.jsx)(dt.a,{to:"/login"})})),lt=n(200),jt=n(197);function bt(t){return Object(et.jsx)(jt.a,Object(v.a)({elevation:6,variant:"filled"},t))}function Ot(){var t=Object(g.c)((function(t){return t.app.error})),e=Object(g.b)(),n=function(t,n){"clickaway"!==n&&e(V(null))};return Object(et.jsx)(lt.a,{open:null!==t,autoHideDuration:6e3,onClose:n,children:Object(et.jsx)(bt,{onClose:n,severity:"error",children:t})})}var ft=n(182),ht=n(183),Tt=n(189),mt=n(190),gt=n(98),pt=function(){var t=Object(g.c)((function(t){return t.auth.isLoggedIn})),e=Object(g.b)(),n=Object(gt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",e},onSubmit:function(t){var c;n.resetForm(),e((c=t,function(t){t(z("loading")),L(c).then((function(e){0===e.data.resultCode?(t(H(!0)),t(z("succeeded"))):G(e.data,t)})).catch((function(e){K(e,t)}))}))}});return t?Object(et.jsx)(dt.a,{to:"/todolist"}):Object(et.jsx)($.a,{container:!0,justify:"center",children:Object(et.jsx)($.a,{item:!0,xs:4,children:Object(et.jsx)("form",{onSubmit:n.handleSubmit,children:Object(et.jsxs)(ft.a,{children:[Object(et.jsxs)(ht.a,{children:[Object(et.jsxs)("p",{children:["To log in get registered",Object(et.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:"here"})]}),Object(et.jsx)("p",{children:"or use common test account credentials:"}),Object(et.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(et.jsx)("p",{children:"Password: free"})]}),Object(et.jsxs)(Tt.a,{children:[Object(et.jsx)(X.a,Object(v.a)({label:"Email",margin:"normal"},n.getFieldProps("email"))),Object(et.jsx)(X.a,Object(v.a)({type:"password",label:"Password",margin:"normal"},n.getFieldProps("password"))),n.touched.email&&n.errors.email?Object(et.jsxs)("div",{style:{color:"red"},children:[" ",n.errors.email]}):null,Object(et.jsx)(mt.a,{label:"Remember me",control:Object(et.jsx)(rt.a,{})}),Object(et.jsx)(j.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})},vt=a.a.memo((function(){var t=Object(g.b)();Object(c.useEffect)((function(){t((function(t){E().then((function(e){0===e.data.resultCode?(t(H(!0)),t(Z(!0))):G(e.data,t),t(Z(!0))})).catch((function(e){K(e,t)}))}))}),[]);var e=Object(g.c)((function(t){return t.app.status})),n=Object(g.c)((function(t){return t.app.isInitialized})),a=Object(g.c)((function(t){return t.auth.isLoggedIn})),i=Object(c.useCallback)((function(){t((function(t){t(z("loading")),y().then((function(e){0===e.data.resultCode?(t(H(!1)),t(z("succeeded"))):G(e.data,t)})).catch((function(e){K(e,t)}))}))}),[t]);return n?Object(et.jsxs)("div",{className:"App",children:[Object(et.jsxs)(d.a,{position:"static",children:[Object(et.jsx)(Ot,{}),Object(et.jsxs)(u.a,{children:[Object(et.jsx)(b.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(et.jsx)(f.a,{})}),Object(et.jsx)(l.a,{variant:"h6",children:"News"}),a&&Object(et.jsx)(j.a,{color:"inherit",onClick:i,children:"Log out"})]})]}),"loading"===e&&Object(et.jsx)(T.a,{}),Object(et.jsx)(m.a,{fixed:!0,children:Object(et.jsxs)(dt.d,{children:[Object(et.jsx)(dt.b,{exact:!0,path:"/todolist",render:function(){return Object(et.jsx)(ut,{})}}),Object(et.jsx)(dt.b,{path:"/login",render:function(){return Object(et.jsx)(pt,{})}}),Object(et.jsx)(dt.b,{path:"/404",render:function(){return Object(et.jsx)("h1",{children:"404: PAGE NOT FOUND"})}}),Object(et.jsx)(dt.a,{from:"*",to:"/404"})]})})]}):Object(et.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(et.jsx)(h.a,{})})})),xt=n(46),kt=n(96),It=Object(xt.c)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET-TASKS":return Object(v.a)(Object(v.a)({},t),{},Object(q.a)({},e.todolistId,e.tasks));case"SET-TODOLIST":var n=Object(v.a)({},t);return e.todolist.forEach((function(t){n[t.id]=[]})),n;case"REMOVE-TASK":return Object(v.a)(Object(v.a)({},t),{},Object(q.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(v.a)(Object(v.a)({},t),{},Object(q.a)({},e.task.todoListId,[e.task].concat(Object(p.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(v.a)(Object(v.a)({},t),{},Object(q.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(v.a)(Object(v.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(v.a)(Object(v.a)({},t),{},Object(q.a)({},e.todoList.id,[]));case"REMOVE-TODOLIST":var c=Object(v.a)({},t);return delete c[e.id],c;default:return t}},todoLists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET-TODOLIST":return e.todolist.map((function(t){return Object(v.a)(Object(v.a)({},t),{},{filter:"all",entityStatus:"idle"})}));case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[Object(v.a)(Object(v.a)({},e.todoList),{},{filter:"all",entityStatus:"idle"})].concat(Object(p.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.todoListId?Object(v.a)(Object(v.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.todoListId?Object(v.a)(Object(v.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.todoListId?Object(v.a)(Object(v.a)({},t),{},{entityStatus:e.entityStatus}):t}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(v.a)(Object(v.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(v.a)(Object(v.a)({},t),{},{error:e.error});case"APP/SET-INITIALIZED":return Object(v.a)(Object(v.a)({},t),{},{isInitialized:e.isInitialized});default:return t}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"login/SET-IS-LOGGED-IN":return Object(v.a)(Object(v.a)({},t),{},{isLoggedIn:e.value});default:return t}}}),St=Object(xt.d)(It,Object(xt.a)(kt.a));window.store=St;var Lt=n(50);r.a.render(Object(et.jsx)(g.a,{store:St,children:Object(et.jsx)(Lt.a,{children:Object(et.jsx)(vt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[145,1,2]]]);
//# sourceMappingURL=main.251515fc.chunk.js.map
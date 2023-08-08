"use strict";(self.webpackChunkidentity_express_manager_ui=self.webpackChunkidentity_express_manager_ui||[]).push([[333],{7333:(ae,m,o)=>{o.r(m),o.d(m,{ViewRolesModule:()=>se});var g=o(6895),p=o(4006),h=o(8185),d=o(2979),c=o(9383),R=o(5503),S=o(927),C=o(4022),U=o(8265),y=o(1230),Z=o(9650),v=o(5785),A=o(4091),V=o(5971),L=o(5084),b=o(2976),O=o(7235),P=o(9655),e=o(4650),T=o(9883),z=o(1481),J=o(7608),M=o(2830);const f=function(s){return[s]};let N=(()=>{class s{constructor(t,n,r){this.rolesService=t,this.titleService=n,this.translate=r}ngOnInit(){this.getCachedRoleSubscription=this.rolesService.getCachedRole().subscribe(t=>{this.role=t,this.roleReadOnlyDictionary=new O.$(this.role);const n=this.translate.instant("Roles.Role")+" "+this.role.name+" - "+b.de.SITE_TITLE;this.titleService.setTitle(n)})}ngOnDestroy(){this.getCachedRoleSubscription.unsubscribe()}get ReadOnlyFieldType(){return P.O}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(T.f),e.Y36(z.Dx),e.Y36(c.sK))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-view-role-details"]],decls:6,vars:11,consts:[["id","viewRoleDetails",1,"tw-container","tw-mx-auto"],[3,"label"],[3,"values","fieldType"],[3,"label","isLast"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"form")(2,"app-form-row",1),e._UZ(3,"app-readonly",2),e.qZA(),e.TgZ(4,"app-form-row",3),e._UZ(5,"app-readonly",2),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("label","Common.Name"),e.xp6(1),e.Q6J("values",e.VKq(7,f,n.roleReadOnlyDictionary.name))("fieldType",n.ReadOnlyFieldType.Single),e.xp6(1),e.Q6J("label","Common.Description")("isLast",!0),e.xp6(1),e.Q6J("values",e.VKq(9,f,n.roleReadOnlyDictionary.description))("fieldType",n.ReadOnlyFieldType.Single))},dependencies:[J.L,p._Y,p.JL,p.F,M.f],styles:["[_nghost-%COMP%]{width:100%;display:block;position:relative}"]}),s})();var w=o(7579),Y=o(590),x=o(4004),u=o(5683),F=o(8675),I=o(5577),Q=o(1005),D=o(9046),K=o(7185),j=o(4889),G=o(4961),E=o(7696),H=o(5925),$=o(8163);function B(s,l){if(1&s){const t=e.EpF();e.ynx(0,12),e.TgZ(1,"div",13)(2,"label",14),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"select",15),e.NdJ("ngModelChange",function(r){e.CHM(t);const i=e.oxw(2);return e.KtG(i.pageSize=r)})("change",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.setPageLength(+r.pageSize))}),e.TgZ(6,"option",16),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.TgZ(9,"option",17),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.TgZ(12,"option",18),e._uU(13),e.ALo(14,"translate"),e.qZA()()(),e.BQk()}if(2&s){const t=e.oxw(2);e.xp6(3),e.AsE("",t.pageSize," ",e.lcZ(4,6,"Nav.PerPage"),""),e.xp6(2),e.Q6J("ngModel",t.pageSize),e.xp6(2),e.hij("25 ",e.lcZ(8,8,"Nav.PerPage"),""),e.xp6(3),e.hij("50 ",e.lcZ(11,10,"Nav.PerPage"),""),e.xp6(3),e.hij("100 ",e.lcZ(14,12,"Nav.PerPage"),"")}}function X(s,l){if(1&s&&(e.TgZ(0,"app-action-bar"),e.YNc(1,B,15,14,"ng-container",11),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",(null==t.pagedResult?null:t.pagedResult.results.length)>0)}}function W(s,l){1&s&&e._UZ(0,"app-simple-loader")}function _(s,l){1&s&&(e.TgZ(0,"div",19)(1,"div"),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&s&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"Users.NoUsersFound")))}function q(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"tr")(1,"td",25),e.NdJ("click",function(){const i=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.goToUser(i))}),e.TgZ(2,"b",26),e._uU(3),e.qZA()(),e.TgZ(4,"td",27),e.NdJ("click",function(){const i=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.goToUser(i))}),e._uU(5),e.qZA(),e.TgZ(6,"td",27),e.NdJ("click",function(){const i=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.goToUser(i))}),e._uU(7),e.qZA()()}if(2&s){const t=l.$implicit;e.xp6(3),e.Oqu(t.username),e.xp6(2),e.hij(" ",t.firstName," "),e.xp6(2),e.hij(" ",t.lastName," ")}}function k(s,l){if(1&s&&(e.TgZ(0,"table",20)(1,"thead")(2,"tr")(3,"th",21),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"th",22),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.TgZ(9,"th",22),e._uU(10),e.ALo(11,"translate"),e.qZA()()(),e.TgZ(12,"tbody",23),e.YNc(13,q,8,3,"tr",24),e.qZA()()),2&s){const t=e.oxw();e.xp6(4),e.Oqu(e.lcZ(5,4,"Users.Username")),e.xp6(3),e.Oqu(e.lcZ(8,6,"Users.FirstName")),e.xp6(3),e.Oqu(e.lcZ(11,8,"Users.LastName")),e.xp6(3),e.Q6J("ngForOf",t.users)}}function ee(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"app-pager",28),e.NdJ("onGoToPage",function(r){e.CHM(t);const i=e.oxw();return e.KtG(i.goToPage(r))}),e.qZA()}if(2&s){const t=e.oxw();e.Q6J("totalResults",null==t.pagedResult?null:t.pagedResult.totalCount)("currentPage",t.page)("lastPage",null==t.pagedResult?null:t.pagedResult.pageCount)}}const te=[{path:"",redirectTo:"details",pathMatch:"full"},{path:"details",component:N},{path:"users",component:(()=>{class s extends D.bk{constructor(t,n,r,i,a,oe,ne){super(a,n,!0),this.rolesService=t,this.localize=r,this.router=i,this.errorService=oe,this.userService=ne,this.pageStream=new w.x,this.pageSizeStream=new w.x,this.userToRemove=null,this.removeSummaryTranslation="",this.removeSummary="",this.page=1,this.pageSize=25}ngOnInit(){this.isLoading=!0,this.rolesService.getCachedRole().pipe((0,Y.P)()).subscribe(t=>{this.role=t,this.removeSummaryTranslation=this.removeSummaryTranslation.replace("{1}",this.role.name);const n=this.pageStream.pipe((0,x.U)(a=>(this.page=a,{searchTerm:this.searchTerm,page:a,pageSize:this.pageSize}))),r=this.pageSizeStream.pipe((0,x.U)(a=>(this.pageSize=a,{searchTerm:this.searchTerm,page:this.page,pageSize:a})));n.pipe((0,u.T)(r),(0,u.T)(this.searchSource),(0,u.T)(this.enterKeySource),(0,F.O)({searchTerm:this.searchTerm,page:this.page,pageSize:this.pageSize}),(0,I.z)(a=>(this.isLoading=!0,this.rolesService.getUsersInRole(t.id,a.page,a.pageSize,a.searchTerm).pipe((0,Q.g)(200))))).subscribe(a=>{this.pagedResult=a,this.users=a.results,this.isLoading=!1},a=>{this.errorService.handleError(a),this.isLoading=!1})})}mapSearchTerm(t){return this.searchTerm=t,{searchTerm:this.searchTerm,page:1,pageSize:this.pageSize}}onSubmit(t){this.pageStream.next(1)}goToPage(t){this.pageStream.next(t)}setPageLength(t){this.page=1,this.pageSizeStream.next(t)}goToUser(t){const n=[this.localize.translateRoute("/users/view/"),t.subject,"roles"];this.router.navigate(n)}removeUser(t){this.removeSummary=this.removeSummaryTranslation.replace("{0}",t.username),this.userToRemove=t}delete(){this.isLoading=!0,this.userService.deleteUserRoles(this.userToRemove.subject,[this.role.name]).subscribe(t=>{let n=this.users&&1===this.users.length&&this.page>1?this.page-1:this.page;n<1&&(n=1),this.goToPage(n),this.toastr.success(this.translate.instant("Roles.Success"),this.translate.instant("Notifications.Success")),this.userToRemove=null},t=>{this.isLoading=!1,"401"===t.status&&this.toastr.warning(this.translate.instant("Roles.UnassignUnauthorized"),this.translate.instant("Notifications.Unauthorized")),this.userToRemove=null})}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(T.f),e.Y36(c.sK),e.Y36(d.An),e.Y36(h.F0),e.Y36(K._W),e.Y36(j.T),e.Y36(G.K))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-role-users"]],features:[e.qOj],decls:14,vars:9,consts:[[1,"tw-container","tw-mx-auto"],["id","searchContainer",1,"tw-mb-2"],[1,"tw-flex","tw-bg-white","tw-border","tw-border-grey-300","tw-opacity-75","tw-cursor-text","tw-rounded","focus-within:tw-opacity-100","focus-within:tw-border-blue-400","trans"],["for","searchTerm",1,"tw-flex","tw-items-center","tw-text-grey-500","tw-m-0","tw-ml-3"],["aria-hidden","true",1,"far","fa-search","tw-text-sm"],[1,"sr-only"],["id","searchRole","type","search","minlength","2","maxlength","25","required","","autocomplete","off",1,"tw-bg-transparent","tw-border-0","tw-text-base","tw-leading-tight","tw-px-2","tw-py-2","tw-w-full","focus:tw-outline-none","trans",3,"ngModel","ngModelChange","keyup"],[4,"ngIf"],["class","tw-alert","role","alert",4,"ngIf"],["id","roleUsersTable","class","datatable selectable hover",4,"ngIf"],[3,"totalResults","currentPage","lastPage","onGoToPage",4,"ngIf"],["left","",4,"ngIf"],["left",""],[1,"tw-form-select","tw-w-auto"],["for","pageSizeToggle",1,"sr-only"],["id","pageSizeToggle",1,"tw-form-control","tw-form-control-small",3,"ngModel","ngModelChange","change"],["value","25"],["value","50"],["value","100"],["role","alert",1,"tw-alert"],["id","roleUsersTable",1,"datatable","selectable","hover"],[1,"sm:tw-w-1/3","md:tw-w-1/2"],[1,"tw-hidden","sm:tw-table-cell"],["id","usersInRoleTable"],[4,"ngFor","ngForOf"],[1,"tw-max-w-0","tw-truncate",3,"click"],[1,"tw-text-blue-500"],[1,"tw-hidden","tw-max-w-0","tw-truncate","sm:tw-table-cell",3,"click"],[3,"totalResults","currentPage","lastPage","onGoToPage"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"label",3),e._UZ(4,"span",4),e.TgZ(5,"span",5),e._uU(6),e.ALo(7,"translate"),e.qZA()(),e.TgZ(8,"input",6),e.NdJ("ngModelChange",function(i){return n.searchTerm=i})("keyup",function(i){return n.search(i)}),e.qZA()()(),e.YNc(9,X,2,1,"app-action-bar",7),e.YNc(10,W,1,0,"app-simple-loader",7),e.YNc(11,_,4,3,"div",8),e.YNc(12,k,14,10,"table",9),e.YNc(13,ee,1,3,"app-pager",10),e.qZA()),2&t&&(e.xp6(6),e.Oqu(e.lcZ(7,7,"Common.Search")),e.xp6(2),e.Q6J("ngModel",n.searchTerm),e.xp6(1),e.Q6J("ngIf",!n.isLoading),e.xp6(1),e.Q6J("ngIf",n.isLoading),e.xp6(1),e.Q6J("ngIf",n.users&&0==n.users.length&&!n.isLoading),e.xp6(1),e.Q6J("ngIf",n.users&&n.users.length>0&&!n.isLoading),e.xp6(1),e.Q6J("ngIf",(null==n.pagedResult?null:n.pagedResult.results.length)>0&&!n.isLoading))},dependencies:[g.sg,g.O5,E.P,H.w,$.K,p.YN,p.Kr,p.Fj,p.EJ,p.JJ,p.Q7,p.wO,p.nD,p.On,c.X$],styles:["[_nghost-%COMP%]{width:100%;display:block;position:relative}"]}),s})()}];let se=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({providers:[S.O],imports:[g.ez,h.Bz.forChild(te),c.aw.forChild({extend:!0}),R.D,L.y,v.U,d.fQ,Z.I,U.j,y.M,V.s,v.U,C.p,p.u5,A.G]}),s})()}}]);
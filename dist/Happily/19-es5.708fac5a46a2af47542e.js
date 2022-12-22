function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{F4UR:function(e,t,n){"use strict";n.r(t);var o=n("tyNb"),r=n("ofXK"),i=n("d2mR"),a=n("mrSG"),s=n("3Pt+"),l=n("PSD3"),c=n.n(l),g=n("fXoL"),u=n("oB38"),p=n("H+bZ"),m=n("QpCR"),d=n("aKWF");function b(e,t){1&e&&(g.Xb(0,"div",18),g.Sb(1,"img",19),g.Wb())}function f(e,t){1&e&&(g.Xb(0,"div",20),g.Pc(1," Please enter pincode "),g.Wb())}function h(e,t){1&e&&(g.Xb(0,"div",20),g.Pc(1," Pin Code must be at least 6 characters long. "),g.Wb())}function C(e,t){1&e&&(g.Xb(0,"div",20),g.Pc(1," Please enter user name "),g.Wb())}function v(e,t){1&e&&g.Sb(0,"input",21)}var P,_=((P=function(){function e(t,n,o,r){_classCallCheck(this,e),this.formService=t,this.formBuilder=n,this.apiService=o,this.router=r,this.submitted=!1,this.sendBtnDisabled=!1,this.imageLoader=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.loginForm=this.formBuilder.group({username:["",s.v.required],pinCode:["",[s.v.required,s.v.minLength(6)]]});try{localStorage.getItem("happily_user")&&this.router.navigateByUrl("/network-verify")}catch(e){console.log(e)}}},{key:"pinCode",get:function(){return this.loginForm.get("pinCode")}},{key:"password",get:function(){return this.loginForm.get("password")}},{key:"loginFormControl",get:function(){return this.loginForm.controls}},{key:"onSubmit",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.submitted=!0,!this.loginForm.valid){e.next=15;break}return this.sendBtnDisabled=!0,e.prev=2,this.imageLoader=!0,e.next=6,this.apiService.post("user/login",this.loginForm.value);case 6:t=e.sent,console.log(t),this.imageLoader=!1,this.loginObj=t.results,this.message=t.statusMessage,t.statusMessage&&"Success"===t.statusMessage?(c.a.fire({position:"center",icon:"success",title:"Login Successfully!",showConfirmButton:!1,timer:2e3}),localStorage.setItem("happily_user",JSON.stringify(this.loginObj)),this.router.navigateByUrl("pages/network"),""===localStorage.getItem("happily_user")&&void 0===localStorage.getItem("happily_user")||(this.storeValue=JSON.parse(localStorage.getItem("happily_user")),console.log(this.storeValue," this.storeValue"),this.router.navigateByUrl("/network-verify")),this.loginForm.reset(),localStorage.removeItem("tempUserDetails"),localStorage.removeItem("user_pin")):t.statusMessage&&"Success"!==t.statusMessage&&(c.a.fire(t.statusCode&&"HP999"===t.statusCode?{position:"center",icon:"error",title:"Refreshing page is taking too long. Please click on OK, move out of this page, and return to try again. Or try closing browser and re-opening the website. Sorry for the inconvenience.",showConfirmButton:!0}:{position:"center",icon:"error",title:this.message,showConfirmButton:!0}),this.message=t.error,this.sendBtnDisabled=!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),this.message=e.t0,console.log(this.message);case 13:e.next=16;break;case 15:c.a.fire({position:"center",icon:"error",title:"Incorrect or incomplete information. Contact Us for help if you forgot password.  We cannot retrieve your privacy protected user name or PIN CODE.  If you forgot them, then you will have to re-register.",showConfirmButton:!0}),this.sendBtnDisabled=!1;case 16:case"end":return e.stop()}}),e,this,[[2,10]])})))}}]),e}()).\u0275fac=function(e){return new(e||P)(g.Rb(u.a),g.Rb(s.d),g.Rb(p.a),g.Rb(o.b))},P.\u0275cmp=g.Lb({type:P,selectors:[["app-login"]],decls:30,vars:6,consts:[["class","image-loader",4,"ngIf"],[1,"know_section","contact_text"],[1,"container"],[1,"know_text"],[1,"title-box"],[1,"page-title"],["src","./assets/images/border_center.png","alt","img"],[1,"data-privacy-box","mt-5"],[1,"your-data-text"],[1,"row"],[1,"col-md-5","col-sm-7","col-xs-12","center"],[1,"contacy_form","login_form"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"col-md-12","col-sm-12","col-xs-12"],["type","password","required","","minlength","6","maxlength","10","formControlName","pinCode","placeholder","Pin Code"],["class","invalid-feed",4,"ngIf"],["type","password","name","username","formControlName","username","placeholder","Public User Name","required",""],["type","submit","value","Submit","class","webBtn",4,"ngIf"],[1,"image-loader"],["src","./assets/images/1477.gif"],[1,"invalid-feed"],["type","submit","value","Submit",1,"webBtn"]],template:function(e,t){1&e&&(g.Nc(0,b,2,0,"div",0),g.Sb(1,"app-header"),g.Xb(2,"div",1),g.Xb(3,"div",2),g.Xb(4,"div",3),g.Xb(5,"div",4),g.Xb(6,"h1",5),g.Pc(7,"Login Here"),g.Wb(),g.Sb(8,"img",6),g.Xb(9,"div",7),g.Xb(10,"p",8),g.Xb(11,"b"),g.Pc(12," Your data is privacy protected and anonymous. We never ask for your ID. "),g.Wb(),g.Wb(),g.Wb(),g.Wb(),g.Wb(),g.Xb(13,"div",9),g.Xb(14,"div",10),g.Xb(15,"div",11),g.Xb(16,"form",12),g.fc("ngSubmit",(function(){return t.onSubmit()})),g.Xb(17,"div",9),g.Xb(18,"div",13),g.Sb(19,"input",14),g.Nc(20,f,2,0,"div",15),g.Nc(21,h,2,0,"div",15),g.Wb(),g.Wb(),g.Xb(22,"div",9),g.Xb(23,"div",13),g.Sb(24,"input",16),g.Nc(25,C,2,0,"div",15),g.Wb(),g.Wb(),g.Xb(26,"div",9),g.Xb(27,"div",13),g.Nc(28,v,1,0,"input",17),g.Wb(),g.Wb(),g.Wb(),g.Wb(),g.Wb(),g.Wb(),g.Wb(),g.Wb(),g.Sb(29,"app-footer")),2&e&&(g.sc("ngIf",t.imageLoader),g.Db(16),g.sc("formGroup",t.loginForm),g.Db(4),g.sc("ngIf",(t.loginFormControl.pinCode.touched||t.submitted)&&(null==t.loginFormControl.pinCode.errors?null:t.loginFormControl.pinCode.errors.required)),g.Db(1),g.sc("ngIf",null==t.pinCode.errors?null:t.pinCode.errors.minlength),g.Db(4),g.sc("ngIf",(t.loginFormControl.username.touched||t.submitted)&&(null==t.loginFormControl.username.errors?null:t.loginFormControl.username.errors.required)),g.Db(3),g.sc("ngIf",!t.sendBtnDisabled))},directives:[r.m,m.a,s.x,s.n,s.f,s.c,s.t,s.i,s.h,s.m,s.e,d.a],styles:[".page-section#login[_ngcontent-%COMP%]{background-color:#efefef;width:100%;padding-bottom:3rem!important}.mx-auto[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin:0 0 1rem}.mx-auto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}.mx-auto[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#101010;text-align:center;text-transform:uppercase;font-family:Lato,sans-serif!important;font-style:normal}.card-signin[_ngcontent-%COMP%]{border:0;border-radius:1rem;box-shadow:0 .5rem 1rem 0 rgba(0,0,0,.1)}.card-signin[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{margin-bottom:2rem;font-weight:300;font-size:1.5rem}.card-signin[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:2rem}.card-footer[_ngcontent-%COMP%]{background-color:#efefef!important}.form-signin[_ngcontent-%COMP%]{width:100%}.form-signin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:80%;border-radius:5rem;letter-spacing:.1rem;font-weight:700;padding:1rem;transition:all .2s;border-color:#47a762!important;background-color:#47a762!important;opacity:1!important}.form-label-group[_ngcontent-%COMP%]{position:relative;margin-bottom:1.5rem}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{min-height:52px;border-radius:2rem}.form-label-group[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{padding:1rem}.form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{padding:var(--input-padding-y) var(--input-padding-x);position:absolute;top:2px;left:16px;display:block;width:100%;margin-bottom:0;line-height:2.5;color:#495057;border:1px solid transparent;border-radius:.25rem;transition:all .1s ease-in-out}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#333;margin-bottom:0;line-height:2.5;border:1px solid transparent;border-radius:.25rem;transition:all .1s ease-in-out;font-size:14px!important}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown){padding-top:calc(var(--input-padding-y) + var(--input-padding-y)*0.66667);padding-bottom:calc(var(--input-padding-y)/3)}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ label[_ngcontent-%COMP%]{font-size:12px;color:#777;top:-24px!important;left:16px!important}.btn-google[_ngcontent-%COMP%]{color:#fff;background-color:#ea4335}.btn-facebook[_ngcontent-%COMP%]{color:#fff;background-color:#3b5998}.your-data-text[_ngcontent-%COMP%]{margin-bottom:15px;font-size:20px;color:#808184}.register-before-login[_ngcontent-%COMP%]{text-align:center;background-color:grey;padding:10px;font-weight:600}.save-result-text-box[_ngcontent-%COMP%]{margin-top:25px;margin-bottom:40px}.save-and-see-text[_ngcontent-%COMP%]{text-align:center;font-size:20px;color:#808184}.visitor-box[_ngcontent-%COMP%]{margin-bottom:50px;text-align:center}@supports (-ms-ime-align:auto){.form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{display:none}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#777}}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{display:none}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#777}}@media (max-width:768px){.page-section#login[_ngcontent-%COMP%]{height:auto!important}.mx-auto[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin:0!important}}"]}),P);n.d(t,"LogInModule",(function(){return M}));var O,y=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:_}],M=((O=function e(){_classCallCheck(this,e)}).\u0275mod=g.Pb({type:O}),O.\u0275inj=g.Ob({factory:function(e){return new(e||O)},imports:[[o.f.forChild(y),r.b,s.s,s.g,i.a],o.f]}),O)}}]);
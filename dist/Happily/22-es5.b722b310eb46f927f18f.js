function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{yTL2:function(e,t,i){"use strict";i.r(t);var r=i("tyNb"),o=i("ofXK"),s=i("d2mR"),n=i("mrSG"),a=i("j8vv"),c=i("3Pt+"),l=i("PSD3"),u=i.n(l),b=i("6Pyk"),d=i("EVdn"),p=i("fXoL"),m=i("H+bZ"),g=i("xHyB"),v=i("QpCR"),f=i("Egam"),h=i("aKWF");function y(e,t){1&e&&(p.Xb(0,"div",29),p.Sb(1,"img",30),p.Wb())}function w(e,t){1&e&&(p.Xb(0,"label"),p.Pc(1,"Age in Years"),p.Wb())}function S(e,t){1&e&&(p.Xb(0,"div",31),p.Pc(1," Please enter age "),p.Wb())}function W(e,t){1&e&&(p.Xb(0,"label"),p.Pc(1,"Country"),p.Wb())}function X(e,t){if(1&e&&(p.Xb(0,"option",32),p.Pc(1),p.Wb()),2&e){var i=t.$implicit;p.sc("value",i),p.Db(1),p.Rc(" ",i," ")}}function C(e,t){1&e&&(p.Xb(0,"div",31),p.Pc(1," Please select country "),p.Wb())}function P(e,t){1&e&&(p.Xb(0,"label"),p.Pc(1,"Language"),p.Wb())}function k(e,t){if(1&e&&(p.Xb(0,"option",32),p.Pc(1),p.Wb()),2&e){var i=t.$implicit;p.sc("value",i.name),p.Db(1),p.Rc(" ",i.name," ")}}function x(e,t){1&e&&(p.Xb(0,"div",31),p.Pc(1," Please select language "),p.Wb())}function T(e,t){1&e&&(p.Xb(0,"label"),p.Pc(1,"Religion"),p.Wb())}function D(e,t){if(1&e&&(p.Xb(0,"option",32),p.Pc(1),p.Wb()),2&e){var i=t.$implicit;p.sc("value",i),p.Db(1),p.Rc(" ",i," ")}}function N(e,t){1&e&&(p.Xb(0,"div",31),p.Pc(1," Please select religion "),p.Wb())}function q(e,t){1&e&&(p.Xb(0,"div",31),p.Pc(1," Please enter description "),p.Wb())}function I(e,t){1&e&&(p.Xb(0,"div",31),p.Pc(1," Please enter review "),p.Wb())}function F(e,t){if(1&e&&(p.Xb(0,"option",32),p.Pc(1),p.Wb()),2&e){var i=t.$implicit;p.sc("value",i.id),p.Db(1),p.Rc(" ",i.problem," ")}}var L,R=((L=function(){function e(t,i,r,o){_classCallCheck(this,e),this.router=t,this.formBuilder=i,this.apiService=r,this.customValidator=o,this.mindTestData={},this.userLogin=!1,this.imageLoader=!1,this.withoutPin=!0,this.countryData=[],this.submitted=!1,this.questionsdropdownSettings={},this.languageList=a,this.labelShow=!1,this.religionList=["None","African Traditional & Diasporic","Agnostic","Atheist","Bah\xe1\u2019\xed","Buddhism","Christianity","Confucianism","Druze","Gnosticism","Hinduism","Indigenous American Religions","Islam","Jainism","Judaism","Juche","Neo-Paganism","Nonreligious","primal-indigenous","Rastafarianism","Secular","Shinto","Sikhism","Tenrikyo","Traditional African Religions","Unitarian-Universalism","Zoroastrianism"],this.countryData=b.a}return _createClass(e,[{key:"ngOnInit",value:function(){var e=JSON.parse(localStorage.getItem("tempUserDetails"));this.problemListData();try{localStorage.getItem("happily_user")&&(this.userName=JSON.parse(localStorage.getItem("happily_user")).username,this.userID=JSON.parse(localStorage.getItem("happily_user")).userId,this.userLogin=!0)}catch(t){console.log(t)}this.privacyTestForm=this.formBuilder.group({problems:[""],generalFeeling:[""],mindPower:[""],age:["",c.v.required],country:["",c.v.required],religion:["",c.v.required],language:["",c.v.required],description:["",c.v.required],review:["",c.v.required]}),e&&(this.labelShow=!0,this.privacyTestForm.patchValue(e)),this.questions=[],this.deleteQuestions=[],this.questionsdropdownSettings={singleSelection:!1,idField:"id",textField:"problem",selectAllText:"Select All",unSelectAllText:"UnSelect All",itemsShowLimit:4,enableCheckAll:!1,allowSearchFilter:!0}}},{key:"privacyTestControl",get:function(){return this.privacyTestForm.controls}},{key:"trigger",value:function(e,t){var i=d("#"+t).val(),r=i.length;switch(t){case"description":if(this.remain=(1e3-r).toString(),+this.remain<=0&&0!==e.which&&0!==e.charCode)return d("#"+t).val(i.substring(0,r-1)),!1;break;case"review":if(this.remainReview=(1e3-r).toString(),+this.remainReview<=0&&0!==e.which&&0!==e.charCode)return d("#"+t).val(i.substring(0,r-1)),!1}}},{key:"problemListData",value:function(){return Object(n.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.apiService.get("problems");case 3:(t=e.sent).statusMessage&&"Success"===t.statusMessage&&(this.problemList=t.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.error);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})))}},{key:"onQuestionsItemSelect",value:function(e){var t=this.deleteQuestions.findIndex((function(t){return t.question_id===e.question_id}));-1!==t&&this.deleteQuestions.splice(t,1),this.questions.push(e)}},{key:"onQuestionsDeSelect",value:function(e){this.questions.splice(this.questions.findIndex((function(t){return t.question_id===e.question_id})),1);var t=this.serverQuestions.find((function(t){return t.question_id===e.question_id}));t&&this.deleteQuestions.push(t)}},{key:"onSubmit",value:function(){return Object(n.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,i,r,o,s,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.submitted=!0,!this.privacyTestForm.valid){e.next=43;break}if(""!=this.privacyTestForm.value.problems||""!=this.privacyTestForm.value.generalFeeling||""!=this.privacyTestForm.value.mindPower){e.next=5;break}u.a.fire({position:"center",icon:"error",title:"Please select atleast one checkbox!",showConfirmButton:!0}),e.next=41;break;case 5:if(""==this.privacyTestForm.value.problems&&""==this.privacyTestForm.value.generalFeeling&&""==this.privacyTestForm.value.mindPower){e.next=41;break}if(""==this.privacyTestForm.value.problems&&(this.privacyTestForm.value.problems=[]),t="",!0!==this.userLogin){e.next=27;break}return console.log("withLogin"),e.prev=10,this.imageLoader=!0,i={user:{id:this.userID}},i=Object.assign(i,this.privacyTestForm.value),e.next=16,this.apiService.post("user/details",i);case 16:r=e.sent,this.imageLoader=!1,t=r.statusMessage,o=r.results,r.statusMessage&&"Success"===r.statusMessage?(u.a.fire({position:"center",icon:"success",title:"User data submitted successfully!",showConfirmButton:!1,timer:2e3}),localStorage.setItem("tempUserDetails",JSON.stringify(o)),this.router.navigateByUrl("/how-happy-you-details")):r.statusMessage&&"Success"!==r.statusMessage&&(u.a.fire({position:"center",icon:"info",title:t,showConfirmButton:!1,timer:2e3}),this.router.navigateByUrl("/how-happy-you-details"),t=r.Error),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(10),t=e.t0.error,console.log(t);case 25:e.next=41;break;case 27:return console.log("withoutLogin"),e.prev=28,this.imageLoader=!0,e.next=32,this.apiService.post("user/details",this.privacyTestForm.value);case 32:s=e.sent,this.imageLoader=!1,t=s.statusMessage,n=s.results,s.statusMessage&&"Success"===s.statusMessage?(u.a.fire({position:"center",icon:"success",title:"User data submitted successfully!",showConfirmButton:!1,timer:2e3}),localStorage.setItem("tempUserDetails",JSON.stringify(n)),this.router.navigateByUrl("/how-happy-you-details")):s.statusMessage&&"Success"!==s.statusMessage&&(t=s.Error,u.a.fire(s.statusCode&&"HP999"===s.statusCode?{position:"center",icon:"error",title:"Refreshing page is taking too long. Please click on OK, move out of this page, and return to try again. Or try closing browser and re-opening the website. Sorry for the inconvenience.",showConfirmButton:!0}:{position:"center",icon:"info",title:t,showConfirmButton:!1,timer:2e3}),this.router.navigateByUrl("/how-happy-you-details")),e.next=41;break;case 38:e.prev=38,e.t1=e.catch(28),t=e.t1.error,console.log(t);case 41:e.next=44;break;case 43:u.a.fire({position:"center",icon:"error",title:"Please enter all information.",showConfirmButton:!0});case 44:case"end":return e.stop()}}),e,this,[[10,22],[28,38]])})))}}]),e}()).\u0275fac=function(e){return new(e||L)(p.Rb(r.b),p.Rb(c.d),p.Rb(m.a),p.Rb(g.a))},L.\u0275cmp=p.Lb({type:L,selectors:[["app-privacy-protected-test"]],decls:77,vars:20,consts:[["class","image-loader",4,"ngIf"],[1,"know_section","contact_text","userinfo_page"],[1,"container"],[1,"know_text"],[1,"title-box"],[1,"page-title"],["src","./assets/images/border_center.png","alt","img"],[1,"row"],[1,"col-md-10","col-sm-10","col-xs-12","center"],[1,"contacy_form"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"col-md-6","col-sm-6","col-xs-12"],[4,"ngIf"],["type","text","required","","placeholder","Age in Years","formControlName","age","minlength","1","maxlength","3","onkeypress","return event.charCode >= 48 && event.charCode <= 57 ||event.charCode == '.' || event.charCode == 250 "],["class","text-danger",4,"ngIf"],["required","","formControlName","country",1,"form-control"],["value","","selected",""],[3,"value",4,"ngFor","ngForOf"],["id","languages","required","","formControlName","language",1,"form-control"],["required","","formControlName","religion",1,"form-control"],[1,"col-md-12","col-sm-12","col-xs-12"],[2,"text-align","right","font-size","15px","margin","0","color","#ffffff"],["required","","maxlength","1000","id","description","formControlName","description","rows","5","placeholder","Summarize what you want to improve or problems to solve, in less than 250 words.","data-validation-required-message","Please enter a message.",3,"keyup"],["required","","maxlength","1000","id","review","formControlName","review","rows","5","placeholder","Which solutions have you tried already?  How effective were the solutions? Give details of specific services, products, sources and your rating: Very Satisfied \u2013 OK \u2013 Very Unsatisfied.","data-validation-required-message","Please enter a message.",3,"keyup"],["type","checkbox","formControlName","generalFeeling"],["type","checkbox","formControlName","mindPower"],["placeholder","Solve specific problems (drop down list to select from)","formControlName","problems",3,"data","settings","onSelect","onDeSelect"],[1,"col-md-12","col-sm-12","col-xs-12","text-center"],["id","submitBtn",1,"webBtn"],[1,"image-loader"],["src","./assets/images/1477.gif"],[1,"text-danger"],[3,"value"]],template:function(e,t){1&e&&(p.Nc(0,y,2,0,"div",0),p.Sb(1,"app-header"),p.Xb(2,"div",1),p.Xb(3,"div",2),p.Xb(4,"div",3),p.Xb(5,"div",4),p.Xb(6,"h1",5),p.Pc(7,"Enter your basic information. Talk about what difficulties you are facing, what have you done to overcome them, and what help you need to strengthen your mind."),p.Wb(),p.Sb(8,"img",6),p.Wb(),p.Xb(9,"p"),p.Pc(10,"Your data is confidential and privacy protected. No one will know your identity, not even HAPPILY!"),p.Wb(),p.Wb(),p.Xb(11,"div",7),p.Xb(12,"div",8),p.Xb(13,"div",9),p.Xb(14,"form",10),p.fc("ngSubmit",(function(){return t.onSubmit()})),p.Xb(15,"div",7),p.Xb(16,"div",11),p.Nc(17,w,2,0,"label",12),p.Sb(18,"input",13),p.Nc(19,S,2,0,"div",14),p.Wb(),p.Xb(20,"div",11),p.Nc(21,W,2,0,"label",12),p.Xb(22,"select",15),p.Xb(23,"option",16),p.Pc(24,"Select Country"),p.Wb(),p.Nc(25,X,2,2,"option",17),p.Wb(),p.Nc(26,C,2,0,"div",14),p.Wb(),p.Wb(),p.Xb(27,"div",7),p.Xb(28,"div",11),p.Nc(29,P,2,0,"label",12),p.Xb(30,"select",18),p.Xb(31,"option",16),p.Pc(32," Select Language"),p.Wb(),p.Nc(33,k,2,2,"option",17),p.Wb(),p.Nc(34,x,2,0,"div",14),p.Wb(),p.Xb(35,"div",11),p.Nc(36,T,2,0,"label",12),p.Xb(37,"select",19),p.Xb(38,"option",16),p.Pc(39,"Select Religion"),p.Wb(),p.Nc(40,D,2,2,"option",17),p.Wb(),p.Nc(41,N,2,0,"div",14),p.Xb(42,"p"),p.Xb(43,"i"),p.Pc(44,"\u201cRequired if you want to see faith specific solutions.\u201d "),p.Wb(),p.Wb(),p.Wb(),p.Wb(),p.Xb(45,"div",7),p.Xb(46,"div",20),p.Xb(47,"p",21),p.Pc(48),p.Wb(),p.Xb(49,"textarea",22),p.fc("keyup",(function(e){return t.trigger(e,"description")})),p.Wb(),p.Nc(50,q,2,0,"div",14),p.Wb(),p.Wb(),p.Xb(51,"div",7),p.Xb(52,"div",20),p.Xb(53,"p",21),p.Pc(54),p.Wb(),p.Xb(55,"textarea",23),p.fc("keyup",(function(e){return t.trigger(e,"review")})),p.Wb(),p.Nc(56,I,2,0,"div",14),p.Wb(),p.Wb(),p.Xb(57,"div",7),p.Xb(58,"div",20),p.Xb(59,"label"),p.Sb(60,"input",24),p.Pc(61," Improve general feeling of well-being "),p.Wb(),p.Wb(),p.Wb(),p.Xb(62,"div",7),p.Xb(63,"div",20),p.Xb(64,"label"),p.Sb(65,"input",25),p.Pc(66," Make my mind powerful for career and life. Popular among high school and college students! "),p.Wb(),p.Wb(),p.Wb(),p.Sb(67,"br"),p.Xb(68,"div",7),p.Xb(69,"div",20),p.Xb(70,"ng-multiselect-dropdown",26),p.fc("onSelect",(function(e){return t.onQuestionsItemSelect(e)}))("onDeSelect",(function(e){return t.onQuestionsDeSelect(e)})),p.Nc(71,F,2,2,"option",17),p.Wb(),p.Wb(),p.Wb(),p.Xb(72,"div",7),p.Xb(73,"div",27),p.Xb(74,"button",28),p.Pc(75,"Next"),p.Wb(),p.Wb(),p.Wb(),p.Wb(),p.Wb(),p.Wb(),p.Wb(),p.Wb(),p.Wb(),p.Sb(76,"app-footer")),2&e&&(p.sc("ngIf",t.imageLoader),p.Db(14),p.sc("formGroup",t.privacyTestForm),p.Db(3),p.sc("ngIf",t.labelShow),p.Db(2),p.sc("ngIf",(t.privacyTestControl.age.touched||t.submitted)&&(null==t.privacyTestControl.age.errors?null:t.privacyTestControl.age.errors.required)),p.Db(2),p.sc("ngIf",t.labelShow),p.Db(4),p.sc("ngForOf",t.countryData),p.Db(1),p.sc("ngIf",(t.privacyTestControl.country.touched||t.submitted)&&(null==t.privacyTestControl.country.errors?null:t.privacyTestControl.country.errors.required)),p.Db(3),p.sc("ngIf",t.labelShow),p.Db(4),p.sc("ngForOf",t.languageList),p.Db(1),p.sc("ngIf",(t.privacyTestControl.language.touched||t.submitted)&&(null==t.privacyTestControl.language.errors?null:t.privacyTestControl.language.errors.required)),p.Db(2),p.sc("ngIf",t.labelShow),p.Db(4),p.sc("ngForOf",t.religionList),p.Db(1),p.sc("ngIf",(t.privacyTestControl.religion.touched||t.submitted)&&(null==t.privacyTestControl.religion.errors?null:t.privacyTestControl.religion.errors.required)),p.Db(7),p.Qc(t.remain),p.Db(2),p.sc("ngIf",(t.privacyTestControl.description.touched||t.submitted)&&(null==t.privacyTestControl.description.errors?null:t.privacyTestControl.description.errors.required)),p.Db(4),p.Qc(t.remainReview),p.Db(2),p.sc("ngIf",(t.privacyTestControl.review.touched||t.submitted)&&(null==t.privacyTestControl.review.errors?null:t.privacyTestControl.review.errors.required)),p.Db(14),p.sc("data",t.problemList)("settings",t.questionsdropdownSettings),p.Db(1),p.sc("ngForOf",t.problemList))},directives:[o.m,v.a,c.x,c.n,c.f,c.c,c.t,c.m,c.e,c.i,c.h,c.u,c.q,c.w,o.l,c.a,f.a,h.a],styles:[""]}),L);i.d(t,"PrivacyProtectedTestModule",(function(){return B}));var _,O=[{path:"",component:R}],B=((_=function e(){_classCallCheck(this,e)}).\u0275mod=p.Pb({type:_}),_.\u0275inj=p.Ob({factory:function(e){return new(e||_)},imports:[[r.f.forChild(O),f.b.forRoot(),o.b,s.a],r.f]}),_)}}]);
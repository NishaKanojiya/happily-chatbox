(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{gE7a:function(t,e,a){"use strict";a.r(e);var n=a("tyNb"),o=a("ofXK"),i=a("d2mR"),r=a("mrSG"),s=a("PSD3"),b=a.n(s),l=a("i680"),c=a("wOnQ"),d=a.n(c),h=a("fXoL"),g=a("H+bZ"),p=a("QpCR"),m=a("LPYB"),u=a("aKWF");const P=["contentToConvert"];function C(t,e){1&t&&(h.Xb(0,"div",43),h.Sb(1,"img",44),h.Wb())}function v(t,e){if(1&t&&(h.Xb(0,"tr"),h.Xb(1,"td",45),h.Pc(2),h.Wb(),h.Xb(3,"td"),h.Xb(4,"ul"),h.Xb(5,"li"),h.Pc(6),h.Wb(),h.Wb(),h.Wb(),h.Xb(7,"td"),h.Xb(8,"ul"),h.Xb(9,"li"),h.Xb(10,"b"),h.Pc(11),h.Wb(),h.Wb(),h.Wb(),h.Wb(),h.Xb(12,"td"),h.Xb(13,"ul"),h.Xb(14,"li"),h.Pc(15),h.Wb(),h.Wb(),h.Wb(),h.Wb()),2&t){const t=e.$implicit;h.Db(2),h.Rc(" ",t.emotionalState," "),h.Db(4),h.Rc(" ",t.negativeLabel,""),h.Db(5),h.Rc(" ",t.answer,""),h.Db(4),h.Rc(" ",t.positiveLabel,"")}}const f=function(){return["/solutions"]};let W=(()=>{class t{constructor(t,e){this.router=t,this.apiService=e,this.status="",this.userlogin=!1,this.currentIndex=0,this.questionList=[],this.emotionalState=[],this.rating=0,this.answerDetails=[],this.imageLoader=!1,this.questionData=[],this.value=0,this.options={floor:-50,ceil:50},this.barLeftSideValue=["Anger","Hatred","Fear","Jealousy","Greed","Desire","Discontent","Egotism","Sadness","Fatigue"],this.barRightSideValue=["Calm","Love","Confidence","Admiration","Generosity","Indifference","Content","Humility","Cheerfulness","Zestfulness"],this.barChartType="horizontalBar",this.barChartOptions={},this.barChartLabels=[],this.barChartPlugins=[],this.barChartData=[{data:[],backgroundColor:"",hoverBackgroundColor:"",barPercentage:.6,maxBarThickness:20}],this.emotionalStateList=[]}ngOnInit(){try{localStorage.getItem("happily_user")&&(this.userlogin=!0,this.userID=JSON.parse(localStorage.getItem("happily_user")).userId)}catch(t){console.log(t)}this.getEmotionalGraphData(),this.barChartOptions={responsive:!0,legend:{display:!1,position:"top",labels:{fontSize:20}},tooltips:{enabled:!0,backgroundColor:"rgba(255,255,255,0.9)",bodyFontColor:"#333",borderColor:"#999",borderWidth:1,caretPadding:15,displayColors:!1,intersect:!0,mode:"index",titleFontColor:"#000",titleMarginBottom:10,xPadding:15,yPadding:15,titleFontSize:20,bodyFontSize:20},scales:{xAxes:[{stacked:!0,ticks:{max:100,min:-100,fontSize:16},gridLines:{display:!0,color:"rgba(255,99,132,0.2)"}}],yAxes:[{display:!1,ticks:{max:100,min:-100,fontSize:16}}]}}}getEmotionalGraphData(){return Object(r.a)(this,void 0,void 0,(function*(){if(this.userID)try{this.imageLoader=!0;let t=yield this.apiService.get("emotional-state/"+this.userID);if(this.imageLoader=!1,t.statusMessage&&"Success"===t.statusMessage){this.emotionGraphData=t.results,this.emotionGraphData.categories.forEach(t=>{this.barChartData[0].data.push(t.emotionalStateValue),this.emotionalState.push(t),this.barChartLabels.push(t.emotionalState)}),this.emotionGraphData.categories.forEach(t=>{t.questionAnswers.forEach(e=>{this.answerDetails.push(Object.assign({},{categoriesId:t.categoriesId,emotionalState:t.allEmotionalState.join("/"),emotionalStateValue:t.emotionalStateValue,answer:2*e.answer,positiveLabel:e.positiveLabel,negativeLabel:e.negativeLabel,questionId:e.id}))})}),console.log(this.answerDetails),this.answerDetails.sort((function(t,e){return t.questionId-e.questionId}));let e=[];e=this.barChartData[0].data.map(t=>t<0?"red":"green");let a=[];a=this.barChartData[0].data.map(t=>t<0?"red":"green"),this.barChartData[0].backgroundColor=e,this.barChartData[0].hoverBackgroundColor=a}else b.a.fire({position:"center",icon:"error",title:"Something went wrong server not working!",showConfirmButton:!0}),this.router.navigateByUrl("/privacy-protected-test")}catch(t){console.log(t)}else if(this.userID||this.NewPinID){if(!this.userID)try{this.imageLoader=!0;let t=yield this.apiService.get("emotional-state/"+this.NewPinID);if(this.imageLoader=!1,t.statusMessage&&"Success"===t.statusMessage){this.emotionGraphData=t.results,this.emotionGraphData.categories.forEach(t=>{this.barChartData[0].data.push(t.emotionalStateValue),this.emotionalState.push(t),this.barChartLabels.push(t.emotionalState)}),this.emotionGraphData.categories.forEach(t=>{t.questionAnswers.forEach(e=>{this.answerDetails.push(Object.assign({},{categoriesId:t.categoriesId,emotionalState:t.emotionalState,emotionalStateValue:t.emotionalStateValue,answer:2*e.answer,positiveLabel:e.positiveLabel,negativeLabel:e.negativeLabel,questionId:e.id}))})}),this.answerDetails.sort((function(t,e){return t.questionId-e.questionId}));let e=[];e=this.barChartData[0].data.map(t=>t<0?"red":"green");let a=[];a=this.barChartData[0].data.map(t=>t<0?"red":"green"),this.barChartData[0].backgroundColor=e,this.barChartData[0].hoverBackgroundColor=a}else b.a.fire({position:"center",icon:"error",title:"Something went wrong server not working!",showConfirmButton:!0}),this.router.navigateByUrl("/privacy-protected-test")}catch(t){console.log(t)}}else try{this.imageLoader=!0;let t=yield this.apiService.get("emotional-state");if(this.imageLoader=!1,t.statusMessage&&"Success"===t.statusMessage){this.emotionGraphData=t.results,this.emotionGraphData.categories.forEach(t=>{this.barChartData[0].data.push(t.emotionalStateValue),this.emotionalState.push(t)}),this.emotionGraphData.categories.forEach(t=>{t.questionAnswers.forEach(e=>{this.answerDetails.push(Object.assign({},{categoriesId:t.categoriesId,emotionalState:t.emotionalState,emotionalStateValue:t.emotionalStateValue,answer:2*e.answer,positiveLabel:e.positiveLabel,negativeLabel:e.negativeLabel,questionId:e.id}))})}),this.answerDetails.sort((function(t,e){return t.questionId-e.questionId}));let e=[];e=this.barChartData[0].data.map(t=>t<0?"red":"green");let a=[];a=this.barChartData[0].data.map(t=>t<0?"red":"green"),this.barChartData[0].backgroundColor=e,this.barChartData[0].hoverBackgroundColor=a}else b.a.fire({position:"center",icon:"error",title:"Something went wrong server not working!",showConfirmButton:!0}),this.router.navigateByUrl("/privacy-protected-test")}catch(t){console.log(t)}}))}getVal(t){this.rating=t}generateHtmltoPDF(){console.log(this.el.nativeElement),d()(this.el.nativeElement).then(t=>{const e=t.toDataURL("image/jpeg");let a=new l.a({orientation:"portrait"});const n=a.getImageProperties(e),o=a.internal.pageSize.getWidth();console.log(o);const i=n.height*o/n.width;console.log(i),a.addImage(e,"PNG",1,2,o,i),a.save("your_self_test_result_graph.pdf")})}htmltoPdfDetails(){this.apiService.generateHtmltoPDF()}}return t.\u0275fac=function(e){return new(e||t)(h.Rb(n.b),h.Rb(g.a))},t.\u0275cmp=h.Lb({type:t,selectors:[["app-result-emotional"]],viewQuery:function(t,e){var a;1&t&&h.Lc(P,!0),2&t&&h.Cc(a=h.gc())&&(e.el=a.first)},decls:134,vars:9,consts:[["class","image-loader",4,"ngIf"],[1,"emotionHealthPg"],[1,"pdf-btn-top"],[1,"btn_yellow",3,"click"],["id","contentToConvert",1,"resultSec","know_section"],["contentToConvert",""],[1,"container"],[1,"secHead"],[1,""],[1,"title-box"],[1,"page-title"],["src","./assets/images/border_center.png","alt","img"],[1,"graph-title","text-align"],[1,"left"],[1,"right"],[1,"chart"],[1,"row"],[1,"col-md-2"],[1,"left-table"],[1,"table-content-element"],[1,"col-md-8"],[1,"dx-viewport","demo-container"],["id","chart",2,"display","block","width","780px !important","height","400px","position","relative"],["baseChart","","width","300","height","150",3,"datasets","labels","options","plugins","chartType"],[1,"right-table"],[1,"buttons"],[1,"col-md-6","col-sm-6","col-xs-12","center"],[1,"multiBtns"],["href","#","data-toggle","modal","data-target","#detailModal",1,"webBtn"],[1,"webBtn",3,"routerLink"],["id","detailModal","tabindex","-1","role","dialog","aria-labelledby","basicModal","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"btn-right","center"],[1,"modal-content"],["id","contentToConvertPDF",1,"modal-body"],[1,"table-responsive","detail-responsive-table"],[1,"table","text-center"],["scope","col",1,"col-md-2"],["scope","col",1,"col-md-4"],["scope","col",1,"col-md-1"],[4,"ngFor","ngForOf"],[1,"image-loader"],["src","./assets/images/1477.gif"],[2,"text-transform","capitalize"]],template:function(t,e){1&t&&(h.Nc(0,C,2,0,"div",0),h.Sb(1,"app-header"),h.Xb(2,"div",1),h.Xb(3,"div",2),h.Xb(4,"button",3),h.fc("click",(function(){return e.generateHtmltoPDF()})),h.Pc(5,"Download pdf/print"),h.Wb(),h.Wb(),h.Xb(6,"div",4,5),h.Xb(8,"div",6),h.Xb(9,"div",7),h.Xb(10,"div",8),h.Xb(11,"div",9),h.Xb(12,"h1",10),h.Pc(13,"Your emotional health"),h.Wb(),h.Sb(14,"img",11),h.Wb(),h.Wb(),h.Xb(15,"p"),h.Pc(16,"Be constantly aware of your emotions! Awareness is the foundation for improvement. We have grouped your answers in the self-test into 10 states of emotional health. Know which ones to avoid and which ones to leverage."),h.Wb(),h.Xb(17,"div",12),h.Xb(18,"span",13),h.Pc(19,"Unhealthy Emotional "),h.Xb(20,"span"),h.Pc(21,"States"),h.Wb(),h.Wb(),h.Xb(22,"span",14),h.Pc(23,"Healthy Emotional "),h.Xb(24,"span"),h.Pc(25,"States"),h.Wb(),h.Wb(),h.Wb(),h.Wb(),h.Xb(26,"div",15),h.Xb(27,"div",16),h.Xb(28,"div",17),h.Xb(29,"div",18),h.Xb(30,"div",19),h.Xb(31,"p"),h.Pc(32," Anger"),h.Wb(),h.Wb(),h.Xb(33,"div",19),h.Xb(34,"p"),h.Pc(35,"Hatred"),h.Wb(),h.Wb(),h.Xb(36,"div",19),h.Xb(37,"p"),h.Pc(38,"Fear"),h.Wb(),h.Wb(),h.Xb(39,"div",19),h.Xb(40,"p"),h.Pc(41,"Jealousy"),h.Wb(),h.Wb(),h.Xb(42,"div",19),h.Xb(43,"p"),h.Pc(44,"Greed"),h.Wb(),h.Wb(),h.Xb(45,"div",19),h.Xb(46,"p"),h.Pc(47,"Desire "),h.Wb(),h.Wb(),h.Xb(48,"div",19),h.Xb(49,"p"),h.Pc(50,"Discontent"),h.Wb(),h.Wb(),h.Xb(51,"div",19),h.Xb(52,"p"),h.Pc(53,"Egotism"),h.Wb(),h.Wb(),h.Xb(54,"div",19),h.Xb(55,"p"),h.Pc(56,"Sadness"),h.Wb(),h.Wb(),h.Xb(57,"div",19),h.Xb(58,"p"),h.Pc(59,"Fatigue"),h.Wb(),h.Wb(),h.Wb(),h.Wb(),h.Xb(60,"div",20),h.Xb(61,"div",21),h.Xb(62,"div",22),h.Sb(63,"canvas",23),h.Wb(),h.Wb(),h.Wb(),h.Xb(64,"div",17),h.Xb(65,"div",24),h.Xb(66,"div",19),h.Xb(67,"p"),h.Pc(68,"Calm"),h.Wb(),h.Wb(),h.Xb(69,"div",19),h.Xb(70,"p"),h.Pc(71,"Love"),h.Wb(),h.Wb(),h.Xb(72,"div",19),h.Xb(73,"p"),h.Pc(74,"Confidence"),h.Wb(),h.Wb(),h.Xb(75,"div",19),h.Xb(76,"p"),h.Pc(77,"Admiration"),h.Wb(),h.Wb(),h.Xb(78,"div",19),h.Xb(79,"p"),h.Pc(80,"Generosity"),h.Wb(),h.Wb(),h.Xb(81,"div",19),h.Xb(82,"p"),h.Pc(83,"Indifference"),h.Wb(),h.Wb(),h.Xb(84,"div",19),h.Xb(85,"p"),h.Pc(86,"Content"),h.Wb(),h.Wb(),h.Xb(87,"div",19),h.Xb(88,"p"),h.Pc(89,"Humility"),h.Wb(),h.Wb(),h.Xb(90,"div",19),h.Xb(91,"p"),h.Pc(92,"Cheerfulness"),h.Wb(),h.Wb(),h.Xb(93,"div",19),h.Xb(94,"p"),h.Pc(95,"Zestfulness"),h.Wb(),h.Wb(),h.Wb(),h.Wb(),h.Wb(),h.Wb(),h.Xb(96,"div",25),h.Xb(97,"div",16),h.Xb(98,"div",26),h.Xb(99,"div",27),h.Xb(100,"a",28),h.Pc(101,"Details"),h.Wb(),h.Sb(102,"br"),h.Xb(103,"a",29),h.Pc(104,"Which solutions are best for me? "),h.Wb(),h.Wb(),h.Xb(105,"p"),h.Pc(106,"Mind changes. Take your self-reflection test monthly. "),h.Wb(),h.Wb(),h.Wb(),h.Wb(),h.Wb(),h.Wb(),h.Wb(),h.Sb(107,"app-footer"),h.Xb(108,"div",30),h.Xb(109,"div",31),h.Xb(110,"button",32),h.Xb(111,"span",33),h.Pc(112,"\xd7"),h.Wb(),h.Wb(),h.Xb(113,"div",34),h.Xb(114,"button",3),h.fc("click",(function(){return e.htmltoPdfDetails()})),h.Pc(115,"Download pdf/print"),h.Wb(),h.Wb(),h.Xb(116,"div",35),h.Xb(117,"div",36),h.Xb(118,"h2"),h.Pc(119,"Your answers to different questions in the self-reflection test"),h.Wb(),h.Xb(120,"div",37),h.Xb(121,"table",38),h.Xb(122,"thead"),h.Xb(123,"tr"),h.Xb(124,"th",39),h.Pc(125,"Emotional State"),h.Wb(),h.Xb(126,"th",40),h.Pc(127,"Unhealthy Feelings"),h.Wb(),h.Xb(128,"th",41),h.Pc(129,"Answer Rating"),h.Wb(),h.Xb(130,"th",40),h.Pc(131,"Healthy Feelings"),h.Wb(),h.Wb(),h.Wb(),h.Xb(132,"tbody"),h.Nc(133,v,16,4,"tr",42),h.Wb(),h.Wb(),h.Wb(),h.Wb(),h.Wb(),h.Wb(),h.Wb()),2&t&&(h.sc("ngIf",e.imageLoader),h.Db(63),h.sc("datasets",e.barChartData)("labels",e.barChartLabels)("options",e.barChartOptions)("plugins",e.barChartPlugins)("chartType",e.barChartType),h.Db(40),h.sc("routerLink",h.uc(8,f)),h.Db(30),h.sc("ngForOf",e.answerDetails))},directives:[o.m,p.a,m.a,n.e,u.a,o.l],styles:['.pdf-btn-top[_ngcontent-%COMP%]{text-align:end}.pdf-btn-top[_ngcontent-%COMP%]   .btn_yellow[_ngcontent-%COMP%]{margin:0 20px!important;display:inline-block;border:0}.emotionHealthPg[_ngcontent-%COMP%]   .resultSec[_ngcontent-%COMP%]{padding:0!important}div#chart[_ngcontent-%COMP%]{margin-left:0}.right-table[_ngcontent-%COMP%]   .table-content-element[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:6px!important;font-size:16px;text-align:left}.left-table[_ngcontent-%COMP%]   .table-content-element[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:6px!important;font-size:16px;text-align:right}.emotionHealthPg[_ngcontent-%COMP%]   .resultSec[_ngcontent-%COMP%]   .secHead[_ngcontent-%COMP%]{margin-bottom:30px}.chart[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%]{padding:1px}.chart[_ngcontent-%COMP%]   .col-md-8[_ngcontent-%COMP%]{padding-left:1px}.graph-title[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:40%}.graph-title[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .graph-title[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{padding-top:30px;position:relative;text-align:center!important}.graph-title[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{width:70%}.resultSec[_ngcontent-%COMP%]   .btn_yellow[_ngcontent-%COMP%]{position:relative;z-index:2}#contentToConvert[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:0;right:0;background-image:url(sun_img1.a21e4f4b7c35c917a025.png);background-position:100% 100%;background-repeat:no-repeat;background-size:9%;height:100%;width:100%}@media (max-width:991px){.pdf-btn-top[_ngcontent-%COMP%]   .btn_yellow[_ngcontent-%COMP%]{margin:0 20px 10px!important;display:inline-block;border:0}body[_ngcontent-%COMP%]{padding:100px 0 0!important}.chart[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;width:1040px}.chart[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-8[_ngcontent-%COMP%]{width:50%}.chart[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-8[_ngcontent-%COMP%]   #chart[_ngcontent-%COMP%], .chart[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-8[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{width:100%!important}.chart[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%]{min-width:125px!important}.right-table[_ngcontent-%COMP%]{position:absolute;right:-258px}span.left[_ngcontent-%COMP%]{width:50%!important}.graph-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-size:15px;margin:0}span.right[_ngcontent-%COMP%]{width:50%!important}}*[_ngcontent-%COMP%]{color-adjust:exact!important;-webkit-print-color-adjust:exact!important}']}),t})();var X=a("EsRS");let w=(()=>{class t{}return t.\u0275mod=h.Pb({type:t}),t.\u0275inj=h.Ob({factory:function(e){return new(e||t)},imports:[[]]}),t})();a.d(e,"ResultEmotionalModule",(function(){return _}));const O=[{path:"",component:W}];let _=(()=>{class t{}return t.\u0275mod=h.Pb({type:t}),t.\u0275inj=h.Ob({factory:function(e){return new(e||t)},imports:[[n.f.forChild(O),o.b,i.a,m.b,X.a,w],n.f]}),t})()}}]);
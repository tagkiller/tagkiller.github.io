(this["webpackJsonpcnde-csv-consolidator-web"]=this["webpackJsonpcnde-csv-consolidator-web"]||[]).push([[0],{12:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),l=a.n(r),o=(a(12),a(13),a(6)),s=a(5);a(17);var i=function(){var e=a(18),t=!1,n=Object(o.a)({accept:"text/csv"}),r=n.acceptedFiles,l=n.rejectedFiles,i=n.getRootProps,u=n.getInputProps,d=r.map((function(e){return c.a.createElement("li",{key:e.path},e.path," - ",e.size," bytes")})),p=l.map((function(e){return c.a.createElement("li",{key:e.path},e.path," - ",e.size," bytes")}));return c.a.createElement("div",{className:"App",style:{height:500}},c.a.createElement("div",{className:"container",style:{height:300}},c.a.createElement("div",i({className:"dropzone",style:{height:500}}),c.a.createElement("input",u()),c.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files"),c.a.createElement("em",null,"(Only *.csv and *.txt will be accepted)")),c.a.createElement("aside",null,c.a.createElement("h4",null,"Accepted files"),c.a.createElement("ul",null,d),c.a.createElement("h4",null,"Rejected files"),c.a.createElement("ul",null,p)),c.a.createElement("h3",{style:{display:t?"block":"none"}},"Please wait, the file is being prepared"),c.a.createElement("button",{type:"button",onClick:function(a){a.preventDefault(),t=!0;var n={},c=0;r.forEach((function(t){e.parse(t,{delimiter:"\t",header:!0,complete:function(t){var a=t.data[0].answer.match(/(.*)_\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2}\.csv/)[1],l=t.data.map((function(e){return e.answer}));if(!n[a]){var o=t.data.map((function(e){return e.Qn}));n[a]={fields:o,data:[]}}n[a].data.push(l),++c===r.length&&Object.keys(n).forEach((function(t){var a=e.unparse(n[t],{delimiter:"\t"}),c=new Blob([a],{type:"text/csv;charset=utf-8"});Object(s.saveAs)(c,"CNDE_".concat(t,".csv"),{type:"text/csv;charset=utf-8"})}))}})}))}},"Submit")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(i,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(19)}},[[7,1,2]]]);
//# sourceMappingURL=main.9deeb47d.chunk.js.map
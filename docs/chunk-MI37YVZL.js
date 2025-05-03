import{a as L}from"./chunk-OFS4WN6N.js";import{a as I}from"./chunk-E5D4GYLV.js";import{$a as B,Ba as C,Ib as O,Ka as y,Ma as h,Na as w,Oa as U,Pa as _,Qa as x,Ra as i,S as b,Sa as a,Ta as k,Va as z,Xa as T,Y as M,Ya as g,Z as N,ab as o,bb as p,cb as S,db as j,ka as F,na as v,pb as E,qa as r,xa as D}from"./chunk-HUDXLEYY.js";var P=class n{_domSanitizer=b(O);_appConfigService=b(I);filename="README.md";_downloadLink=F(null);downloadLink=this._downloadLink.asReadonly();config=E(()=>this._appConfigService.config());_readmeContent=F("");readmeContent=this._readmeContent.asReadonly();ngOnInit(){this.initialize()}initialize(){this.generateReadmy()}generateReadmy(){let t=this.generateReadmeContent();this._readmeContent.set(t);let e=new Blob([t],{type:"text/markdown;charset=utf-8"}),l=window.URL.createObjectURL(e);this._downloadLink.set(this._domSanitizer.bypassSecurityTrustUrl(l))}generateReadmeContent(){let t=this._appConfigService.config();if(!t)return"";let e=m=>`public/static/img/tecnologies/${m.toLowerCase().replaceAll(".","-").replaceAll("#","sharp")}.png`,l=`${t.personalData.name} ${t.personalData.surnames.first} ${t.personalData.surnames.second}`;return`
<div align="center">

<h1 align="left">Hola \u{1F44B}, soy <a href="${t.personalData.nickname}">
<span>
    <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=32&duration=2500&pause=500&width=435&lines=${l.replaceAll(" ","+")};${t.personalData.position.replace(" ","+")}" alt="${l}" title="${l}"
  style="margin-bottom: -26.5px;background: transparent;max-width: 100%;margin-left: 5px;" />
  </span>
  </a>

</h1>

</div>
<a href="${t.personalData.portfolio}" target="_blank">
    <img src="public/static/img/readmy/background.png" title="${t.personalData.name} (${t.personalData.position})" alt="${t.personalData.name} (${t.personalData.position})">
</a>
<p align="left">

<a href="${t.personalData.socialNetworks.linkedIn}" target="blank">
    <img align="center"
        src="public/static/img/readmy/linkedin.png"
        alt="linkedIn" height="40" width="40" />
</a>
</p>
<br>

## Sobre mi

<!-- - \u{1F331} Actualmente estoy aprendiendo **java** -->
- \u{1F468}\u200D\u{1F4BB} Todos mis proyectos est\xE1n disponibles en [${t.personalData.portfolio}](${t.personalData.portfolio})
- \u{1F4EB} Puedes contactarme con **${t.personalData.email}**
<br>

## Tecnolog\xEDas

<img src="https://github-readme-stats.vercel.app/api/top-langs?username=${t.personalData.nickname}&show_icons=true&locale=es&layout=compact&line_height=20&title_color=7A7ADB&icon_color=2234AE&text_color=D3D3D3&bg_color=0,000000,130F40" width="375" alt="${t.personalData.nickname}" title="${t.personalData.nickname}"/>

<p align="left">
    ${(()=>{let m="";return t.skills.forEach(s=>{m+=`
### ${s.name}
`,s.technologies.forEach(f=>{m+=`<img src="${e(f)}" alt="${f}" width="40" height="40" style="margin-right: 10px;"/>`}),m+=`
`}),m})()}
</p>

<br>

## Mis proyectos
${(()=>{let m="";for(let s=0;s<t.projects.length;s+=2){let f=[t.projects[s],t.projects[s+1]],c=0;for(let d of f)c++,d&&(m+=`${c===1?"<table><tr>":""}<td width="50%">
                    <h3 align="center">${d.name}</h3>
                    <div align="center">
                        <img src="public/static/img/projects/${d.image}" width="300" alt="${d.name}" title="${d.name}">
                        <p align="left">${d.description}</p>
                            ${(()=>{let $="";return d.technologies.forEach(A=>{$+=`<img src="${e(A)}" alt="${A}" width="30" height="30" style="margin-right: 10px;" />&nbsp;`}),d.actions.gitHub&&($+=`<p>
                          <a href="${d.actions.gitHub}" target="_blank">
                              <img src="https://img.shields.io/badge/GITHUB-white?style=for-the-badge&logo=github&logoColor=black">
                          </a>
                        </p>`),d.actions.npm&&($+=`<p>
                          <a href="${d.actions.npm}" target="_blank">
                              <img src="https://img.shields.io/badge/NPM-red?style=for-the-badge&logo=npm&logoColor=white">
                          </a>
                        </p>`),$})()}
                    </div>
                </td> ${c===2?"</tr></table>":""}`,c===2&&(c=0))}return"<table><tr>"+m})()}

<br>
<!--
### \u2699\uFE0F &nbsp;GitHub Analytics

<p align="center">
<a href="https://github.com/guillercm/">
  <img height="180em" src="https://github-readme-stats-eight-theta.vercel.app/api?username=${t.personalData.name}&show_icons=true&theme=algolia&include_all_commits=true&count_private=true"/>
  <img height="180em" src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${t.personalData.name}&layout=compact&langs_count=8&theme=algolia"/>
</a>
</p>
-->
`}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["core-readmy-generator"]],decls:7,vars:3,consts:[["download",""],["for","message",1,"w-100","block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","button",1,"mt-4","cursor-pointer","bg-blue-600","hover:bg-blue-700","text-white","font-semibold","rounded-lg","text-lg","px-6","py-3","shadow-md","transition","duration-300",3,"click"],["rows","4",1,"block","p-2.5","w-full","text-sm","text-gray-900","bg-gray-50","rounded-lg","border","border-gray-300","focus:ring-blue-500","focus:border-blue-500","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["download","README.md",3,"href","hidden"]],template:function(e,l){if(e&1){let u=z();i(0,"label",1)(1,"button",2),T("click",function(){M(u);let s=B(6);return N(s.click())}),o(2,` Descargar README.md
`),a()(),i(3,"textarea",3),o(4),a(),k(5,"a",4,0)}e&2&&(r(4),p(l.readmeContent()),r(),y("href",l.downloadLink(),v)("hidden",!0))},encapsulation:2})};function V(n,t){if(n&1&&(i(0,"li",22),o(1),a()),n&2){let e=t.$implicit;r(),p(e)}}function W(n,t){if(n&1&&_(0,V,2,1,"li",22,w),n&2){let e=g().$implicit;x(e.technologies)}}function q(n,t){if(n&1&&C(0,W,2,0),n&2){let e=t.$implicit;h(e.show!==!1?0:-1)}}function J(n,t){if(n&1&&(i(0,"div",23)(1,"h3",24),o(2),a(),i(3,"p",25),o(4),a(),i(5,"p",26),o(6),a()()),n&2){let e=g().$implicit;r(2),p(e.name),r(2),p(e.date),r(2),p(e.description)}}function K(n,t){if(n&1&&C(0,J,7,3,"div",23),n&2){let e=t.$implicit;h(e.show!==!1?0:-1)}}function Q(n,t){if(n&1&&(i(0,"p",29),o(1),a()),n&2){let e=g(3).$implicit;r(),p(e.description)}}function X(n,t){if(n&1&&(i(0,"h3",27),o(1),a(),i(2,"p",28),o(3),a(),C(4,Q,2,1,"p",29)),n&2){let e=g(2).$implicit;r(),p(e.company),r(2),j("",e.position," \xB7 ",e.date,""),r(),h(e.description?4:-1)}}function Y(n,t){if(n&1&&(i(0,"h3",27),o(1),i(2,"span",28),o(3),a()()),n&2){let e=g(2).$implicit;r(),p(e.company),r(2),S(" ",e.date,"")}}function Z(n,t){if(n&1&&(i(0,"div"),C(1,X,5,4)(2,Y,4,2,"h3",27),a()),n&2){let e=g().$implicit;r(),h(e.position?1:2)}}function ee(n,t){if(n&1&&(i(0,"div",30)(1,"h4",31),o(2),a(),i(3,"p",28),o(4),a(),i(5,"p",32),o(6),a()()),n&2){let e=t.$implicit;r(2),p(e.name),r(2),j("",e.position," \xB7 ",e.date,""),r(2),p(e.description)}}function te(n,t){if(n&1&&(i(0,"div",21),_(1,ee,7,4,"div",30,U),a()),n&2){let e=g().$implicit;r(),x(e.projects)}}function ie(n,t){if(n&1&&C(0,Z,3,1,"div")(1,te,3,0,"div",21),n&2){let e=t.$implicit;h(e.show!==!1?0:-1),r(),h(e.projects!=null&&e.projects.length?1:-1)}}function ne(n,t){if(n&1&&(i(0,"div")(1,"h3",24),o(2),a(),i(3,"p",28),o(4),i(5,"span",33),o(6,"|"),a(),o(7),a()()),n&2){let e=t.$implicit;r(2),p(e.name),r(2),S("",e.institute," "),r(3),S(" ",e.date,"")}}var R=class n{_window=b(L);_appConfigService=b(I);config=E(()=>this._appConfigService.config());personalData=E(()=>this.config().personalData);fullName=E(()=>`${this.personalData().name} ${this.personalData().surnames.first} ${this.personalData().surnames.second}`);printCurriculum(){this._window.print()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["core-tools-page"]],decls:69,vars:11,consts:[[1,"print:hidden","flex","flex-col","items-center","gap-4","mb-6"],[1,"grid","grid-cols-[20%_80%]","overflow-hidden"],[1,"print:hidden","text-center"],["type","button",1,"mb-4","cursor-pointer","bg-blue-600","hover:bg-blue-700","text-white","font-semibold","rounded-lg","text-lg","px-6","py-3","shadow-md","transition","duration-300",3,"click"],["src","static/img/curriculum/demo-print.png",1,"w-200","rounded-lg","shadow-lg"],[1,"grid","grid-cols-2","overflow-hidden","print-page"],[1,"bg-white","p-8"],[1,"mb-4"],[1,"text-2xl","font-semibold","border-b-2","border-indigo-200","mb-2"],[1,"space-y-2"],[1,"text-indigo-500","hover:underline",3,"href"],["href","tel:+34123456789",1,"text-indigo-500","hover:underline"],[1,"flex","flex-wrap","gap-2"],[1,"text-2xl","font-semibold","border-b-2","border-orange-300","mb-2"],[1,"bg-orange-100","p-8"],[1,"flex","items-center","mb-4"],[1,"flex","flex-col","justify-center"],[1,"text-3xl","font-bold","leading-tight"],[1,"text-xl","text-indigo-600","leading-tight"],[1,"flex-shrink-0","w-30","h-30","rounded-full","overflow-hidden","bg-white","border","border-gray-300"],["src","static/img/me-resume.png","alt","Foto de Perfil",1,"w-full","h-full","object-cover"],[1,"space-y-3"],[1,"bg-indigo-100","text-indigo-800","px-3","py-1","rounded-full","text-sm"],[1,"mt-2"],[1,"font-semibold","text-md"],[1,"text-sm","text-gray-600","ml-3"],[1,"text-sm","ml-3"],[1,"font-semibold","text-lg"],[1,"text-sm","text-gray-600"],[1,"text-sm","mt-2"],[1,"border-l-3","border-orange-300","pl-4"],[1,"text-md","font-semibold"],[1,"text-sm","mt-1"],[1,"mx-2"]],template:function(e,l){if(e&1&&(i(0,"div",0),k(1,"core-readmy-generator"),a(),i(2,"div",1)(3,"div",2)(4,"button",3),T("click",function(){return l.printCurriculum()}),o(5," Descargar curriculum "),a(),k(6,"img",4),a(),i(7,"div",5)(8,"div",6)(9,"section",7)(10,"h2",8),o(11,"Sobre m\xED"),a(),i(12,"p"),o(13),a()(),i(14,"section",7)(15,"h2",8),o(16,"Contacto"),a(),i(17,"ul",9)(18,"li"),o(19,"Email: "),i(20,"a",10),o(21),a()(),i(22,"li"),o(23,"Tel\xE9fono: "),i(24,"a",11),o(25),a()(),i(26,"li"),o(27),a(),i(28,"li"),o(29,"GitHub: "),i(30,"a",10),o(31),a()(),i(32,"li"),o(33,"Portfolio: "),i(34,"a",10),o(35),a()()()(),i(36,"section",7)(37,"h2",8),o(38,"Tecnolog\xEDas"),a(),i(39,"ul",12),_(40,q,1,1,null,null,w),a()(),i(42,"section",7)(43,"h2",13),o(44,"Certificados"),a(),i(45,"div"),_(46,K,1,1,null,null,w),a()()(),i(48,"div",14)(49,"section",15)(50,"div",16)(51,"h1",17),o(52),a(),i(53,"p",18),o(54),a()(),i(55,"div",19),k(56,"img",20),a()(),i(57,"section",7)(58,"h2",13),o(59,"Experiencia Laboral"),a(),i(60,"div",9),_(61,ie,2,2,null,null,w),a()(),i(63,"section",7)(64,"h2",13),o(65,"Formaci\xF3n"),a(),i(66,"div",21),_(67,ne,8,3,"div",null,w),a()()()()()),e&2){let u,m,s,f,c;r(13),p((u=l.config())==null||u.resume==null?null:u.resume.description),r(7),y("href","mailto:"+l.personalData().email,v),r(),p(l.personalData().email),r(4),p(l.personalData().phone),r(2),S("Ubicaci\xF3n: ",l.personalData().location,""),r(3),y("href",l.personalData().socialNetworks.gitHub,v),r(),p(l.personalData().socialNetworks.gitHub),r(3),y("href",l.personalData().portfolio,v),r(),p(l.personalData().portfolio),r(5),x((m=l.config())==null?null:m.skills),r(6),x((s=l.config())==null?null:s.certificates),r(6),p(l.fullName()),r(2),p(l.personalData().position),r(7),x((f=l.config())==null?null:f.workExperience),r(6),x((c=l.config())==null?null:c.training)}},dependencies:[P],styles:[".print-page[_ngcontent-%COMP%]{width:21cm;height:29.7cm}@media print{.print-page[_ngcontent-%COMP%]{overflow:hidden;page-break-after:auto}*[_ngcontent-%COMP%]{page-break-after:avoid;page-break-inside:avoid}.hidden-print[_ngcontent-%COMP%]{display:none}}@page{size:A4;margin:0}"]})};export{R as default};

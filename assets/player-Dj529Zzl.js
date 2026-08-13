import{$ as e,A as t,At as n,B as r,C as i,Ct as a,D as o,Dt as s,E as c,Ft as l,I as u,L as d,M as f,Mt as p,N as m,Nt as h,O as g,Ot as _,P as v,Q as y,R as b,S as ee,St as x,T as te,V as ne,Vt as S,Z as C,_ as w,_t as re,a as T,b as E,bt as D,c as ie,d as ae,et as oe,f as se,ft as O,g as ce,gt as k,h as le,i as ue,j as A,jt as de,k as j,kt as M,l as fe,lt as pe,m as me,mt as N,n as P,o as F,p as he,pt as I,r as ge,rt as L,s as _e,t as R,tt as ve,u as ye,v as be,vt as z,w as B,x as V,xt as H,y as U,yt as W}from"./control-BNlmSIlL.js";import"./modulepreload-polyfill-Dezn_h7o.js";var G=S(l()),xe=S(h(),1),K={v:[]},Se=()=>K.v.forEach(e=>e()),Ce=e=>(K.v.push(e)===1&&addEventListener(`hashchange`,Se),()=>{K.v=K.v.filter(t=>t!==e),K.v.length||removeEventListener(`hashchange`,Se)}),we=()=>`/`+location.hash.replace(/^#?\/?/,``),Te=(e,{state:t=null,replace:n=!1}={})=>{let r=location.href,[i,a]=e.replace(/^#?\/?/,``).split(`?`),o=new URL(location.href);o.hash=`/${i}`,a&&(o.search=a);let s=o.href;n?history.replaceState(t,``,s):history.pushState(t,``,s);let c=typeof HashChangeEvent<`u`?new HashChangeEvent(`hashchange`,{oldURL:r,newURL:s}):new Event(`hashchange`,{detail:{oldURL:r,newURL:s}});dispatchEvent(c)},Ee=({ssrPath:e=`/`}={})=>[(0,n.useSyncExternalStore)(Ce,we,()=>e),Te];Ee.hrefs=e=>`#`+e;var q;(function(e){e.maroon=`#800000`,e.red=`#FF0000`,e.orange=`#FFA500`,e.yellow=`#FFFF00`,e.olive=`#808000`,e.green=`#008000`,e.purple=`#800080`,e.fuchsia=`#FF00FF`,e.lime=`#00FF00`,e.teal=`#008080`,e.aqua=`#00FFFF`,e.blue=`#0000FF`,e.navy=`#000080`,e.black=`#000000`,e.gray=`#808080`,e.silver=`#C0C0C0`,e.white=`#FFFFFF`})(q||={});var De=function(e,t){if(e.includes(`/`))return e.replace(`rgb(`,`rgba(`);var n=e.substring(e.startsWith(`rgba(`)?5:4,e.length-1).trim(),r=n.split(`,`);return r.length===4?e.replace(`rgb(`,`rgba(`):r.length===3?`rgba(${n}, ${t})`:`rgba(${n} / ${t})`},Oe=function(e,t){if(e.startsWith(`rgb`))return De(e,t);if(Object.keys(q).includes(e)&&(e=q[e]),e[0]===`#`&&(e=e.slice(1)),e.length===3){var n=``;e.split(``).forEach(function(e){n+=e,n+=e}),e=n}return`rgba(${(e.match(/.{2}/g)||[]).map(function(e){return parseInt(e,16)}).join(`, `)}, ${t})`},ke={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function Ae(e){if(typeof e==`number`)return{value:e,unit:`px`};var t,n=(e.match(/^[0-9.]*/)||``).toString();t=n.includes(`.`)?parseFloat(n):parseInt(n,10);var r=(e.match(/[^0-9]*$/)||``).toString();return ke[r]?{value:t,unit:r}:(console.warn(`React Spinners: ${e} is not a valid css value. Defaulting to ${t}px.`),{value:t,unit:`px`})}function J(e){var t=Ae(e);return`${t.value}${t.unit}`}var je=function(e,t,n){var r=`react-spinners-${e}-${n}`;if(typeof window>`u`||!window.document)return r;var i=document.createElement(`style`);document.head.appendChild(i);var a=i.sheet,o=`
    @keyframes ${r} {
      ${t}
    }
  `;return a&&a.insertRule(o,0),r},Y=function(){return Y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Y.apply(this,arguments)},Me=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Ne(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,i=r===void 0?`#000000`:r,a=e.speedMultiplier,o=a===void 0?1:a,s=e.cssOverride,c=s===void 0?{}:s,l=e.size,u=l===void 0?50:l,d=Me(e,[`loading`,`color`,`speedMultiplier`,`cssOverride`,`size`]),f=Ae(u),p=f.value,m=f.unit,h=Y({display:`inherit`,position:`relative`,width:J(u),height:J(u),transform:`rotate(165deg)`},c),g=p/5,_=(p-g)/2,v=_-g,y=Oe(i,.75),b=je(`HashLoader`,`0% {width: ${g}px; box-shadow: ${_}px ${-v}px ${y}, ${-_}px ${v}px ${y}}
    35% {width: ${J(u)}; box-shadow: 0 ${-v}px ${y}, 0 ${v}px ${y}}
    70% {width: ${g}px; box-shadow: ${-_}px ${-v}px ${y}, ${_}px ${v}px ${y}}
    100% {box-shadow: ${_}px ${-v}px ${y}, ${-_}px ${v}px ${y}}`,`before`),ee=je(`HashLoader`,`0% {height: ${g}px; box-shadow: ${v}px ${_}px ${i}, ${-v}px ${-_}px ${i}}
    35% {height: ${J(u)}; box-shadow: ${v}px 0 ${i}, ${-v}px 0 ${i}}
    70% {height: ${g}px; box-shadow: ${v}px ${-_}px ${i}, ${-v}px ${_}px ${i}}
    100% {box-shadow: ${v}px ${_}px ${i}, ${-v}px ${-_}px ${i}}`,`after`),x=function(e){return{position:`absolute`,top:`50%`,left:`50%`,display:`block`,width:`${p/5}${m}`,height:`${p/5}${m}`,borderRadius:`${p/10}${m}`,transform:`translate(-50%, -50%)`,animationFillMode:`none`,animation:`${e===1?b:ee} ${2/o}s infinite`}};return n?G.createElement(`span`,Y({style:h},d),G.createElement(`span`,{style:x(1)}),G.createElement(`span`,{style:x(2)})):null}var X=S(ve());function Pe(){let e=I,t=e.basic.overview,n=e.basic.general,r=T.hooks.usePath(1),i=t.information,a=R.check.debugMode();return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(w,{path:r,background:`world`,children:[(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(j,{}),(0,X.jsx)(U,{base:z(r).information})]}),(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(c,{text:`world`,path:r,children:[(0,X.jsx)(U,{base:i,color:t.information.color}),(0,X.jsx)(g,{title:[`preset`,`version`],explanation:[`text`,t.version.toString()]}),(0,X.jsx)(g,{title:[`preset`,`updated`],explanation:[`text`,e.basic.development.timestamp.published]}),(0,X.jsx)(g,{title:[`preset`,`author`],explanation:[`text`,t.author],event:`hint`}),t.homepage&&(0,X.jsx)(g,{title:[`preset`,`homepage`],explanation:[`url`,t.homepage],event:`hint`}),(0,X.jsx)(g,{title:[`preset`,`estimated-playing-time`],explanation:[`text`,`${t.estimatedPlayingTime.value} ${H(t.estimatedPlayingTime.unit).information.name}`],event:`hint`})]})}),(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(c,{text:`detail`,path:r,children:[(0,X.jsx)(E,{title:[`preset`,`default-language`],explanation:[`text`,T.component.getLanguageLabel()],text:[`preset`,R.check.enableChangeLanguage()?`language-change-enable-general`:`language-change-unenable`]}),(0,X.jsx)(g,{title:[`preset`,`max-category-level`],explanation:[`text`,F.primitive.toLevel(n.maxCategoryLevels)],event:`hint`}),(0,X.jsx)(g,{title:[`preset`,`level-common-ratio`],explanation:[`text`,n.levelCommonRatio.toString()],event:`hint`})]})}),(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(c,{text:`console`,path:r,children:[(0,X.jsx)(U,{base:H(`console`).information}),(0,X.jsx)(g,{title:[`preset`,`version`],explanation:[`text`,`0.0.1608`]}),(0,X.jsx)(g,{title:[`preset`,`updated`],explanation:[`text`,F.primitive.toDateTimeText(`2026-08-13T10:30:51.336Z`)]}),(0,X.jsx)(g,{title:[`preset`,`author`],explanation:[`text`,`Yutori`]}),(0,X.jsx)(g,{title:[`preset`,`homepage`],explanation:[`url`,`https://idle.yu-to-ri.net/document/index.html`]})]})}),!a&&(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(c,{text:`iconify`,path:r,children:[(0,X.jsx)(U,{base:H(`iconify`).information}),Object.entries(x).map(([e,t])=>(0,X.jsx)(be,{summary:t},e))]})})]}),(0,X.jsx)(M,{children:T.hooks.useDefaultRoutes(r)})]})}function Fe(){let e=T.hooks.usePath(1),t=P.progress.getCoins(),[n]=G.useState(()=>(Date.now()-O.playing.time.initialized)/1e3),r=R.check.visibleList(D(!0).items).reduce((e,t)=>(e.now+=t.user.countNow,e.record+=t.user.countRecord,e),{now:0,record:0}),i=F.primitive.toLevel(R.check.visibleList(D(!0).categories).reduce((e,t)=>t.world.numeric?e+Math.floor(t.user.level):e,0)),a=R.check.visibleList(D(!0).actions).reduce((e,t)=>(e+=t.user.count,e),0);return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(w,{path:e,background:`world`,children:[(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(j,{}),(0,X.jsx)(U,{base:z(e).information})]}),(0,X.jsx)(X.Fragment,{children:(0,X.jsx)(c,{text:`coin`,path:e,children:t.map(e=>(0,X.jsxs)(G.Fragment,{children:[(0,X.jsx)(g,{title:[`basic`,e],explanation:[`text`,e.user.countNow.toString()]}),(0,X.jsx)(g,{title:[`preset`,`amount-earned`],explanation:[`text`,e.user.countRecord.toString()]})]},e.id))})}),(0,X.jsx)(X.Fragment,{children:(0,X.jsx)(c,{text:`time`,path:e,children:(0,X.jsx)(g,{title:[`preset`,`playing-time`],explanation:[`seconds`,n]})})}),(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(c,{text:`item`,path:e,children:[(0,X.jsx)(g,{title:[`preset`,`count-now`],explanation:[`text`,r.now.toString()]}),(0,X.jsx)(g,{title:[`preset`,`count-gained`],explanation:[`text`,r.record.toString()]})]})}),(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(c,{text:`action`,path:e,children:[(0,X.jsx)(g,{title:[`preset`,`total-level`],explanation:[`text`,i]}),(0,X.jsx)(g,{title:[`preset`,`count-actioned`],explanation:[`text`,a.toString()]})]})})]}),(0,X.jsx)(M,{children:T.hooks.useDefaultRoutes(e)})]})}function Ie(){let e=T.hooks.usePath(1),t=e=>T.component.sortGroup(e,e=>e.world.group).flat().map(e=>{let t=P.event.getArchived(e).flag??!1;return{basic:e,explanation:``,explanationIcon:H(t?`yes`:`no`).information,flagColor:t,link:`${e.id}.event`,ribbon:P.event.checkUnclaimed(e)}}),n=R.check.visibleList(a),r=P.event.getAchievedSummary(n),i=t(n.filter(e=>e.categoryId===``)),o=[];for(let e of R.check.visibleList(D(!0).categories)){let n=R.check.visibleList(e.tasks);n.length!=0&&o.push({category:e,indexes:t(n)})}return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(w,{path:e,background:`world`,children:[(0,X.jsx)(j,{}),(0,X.jsx)(U,{base:z(e).information}),(0,X.jsx)(g,{title:[`preset`,`achieved`],explanation:[`text`,r.text],flagColor:r.flag}),i.length>0&&(0,X.jsx)(c,{text:`missions`,path:e,children:(0,X.jsx)(V,{indexes:i,layerDepth:1})}),o.map(e=>(0,X.jsx)(V,{categoryId:e.category.id,indexes:e.indexes,layerDepth:1},e.category.id))]}),(0,X.jsx)(M,{children:T.hooks.useDefaultRoutes(e)})]})}function Le(){let e=T.hooks.usePath(1),t=[];for(let e of R.check.visibleList(D(!0).categories)){let n=R.check.visibleList(e.actions);if(n.length==0)continue;let r=e.user.progressing?k(e.user.progressing.general.id):void 0,i=n.map(e=>({basic:e,explanation:F.primitive.toLevel(e.world.level),flagColor:R.check.matchedLevel(e),link:`${e.id}.action`,ribbon:P.progress.checkSingleCompleted(void 0,e.id)||e.id===r?.id})),a=P.progress.checkSingleCompleted(e.id);t.push({category:e,actions:i,progress:r,ribbonCategory:a})}let n;try{n=W(I.basic.general.queue.information.id)}catch{n=null}let r=R.trade.getQueueSummary(),i=P.progress.getSingletonProgressing(),a=i?k(i.general.id):void 0;return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(w,{path:e,background:`world`,children:[(0,X.jsx)(j,{}),(0,X.jsx)(U,{base:z(e).information}),n&&n.user&&R.trade.getMaxQueue()>=1&&(0,X.jsx)(v,{href:`${e.path}/${a?.id}.action`,active:!!a,children:(0,X.jsx)(g,{title:[`basic`,n],explanation:[`text`,r.text],color:n.information.color,flagColor:r.flag})}),(0,X.jsx)(X.Fragment,{children:t.map(t=>(0,X.jsx)(V,{categoryId:t.category.id,indexes:t.actions,layerDepth:1,event:[`hold`,P.progress.toggleAct],children:t.progress&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(v,{href:`${e.path}/${t.progress.id}.action`,children:[(0,X.jsx)(g,{title:[`basic`,t.progress],ribbon:t.ribbonCategory,event:[`hold`,P.progress.toggleAct]}),(0,X.jsx)(te,{categoryId:t.category.id,type:`progress`})]}),(0,X.jsx)(j,{height:N.md})]})},t.category.id))})]}),(0,X.jsx)(M,{children:T.hooks.useDefaultRoutes(e)})]})}function Re(){let e=T.hooks.usePath(2),[t,n]=G.useState(new globalThis.Set),r=D(!0).items.filter(e=>e.user.countNow>=1&&e.world.sellingValue>0&&R.check.locked(e)===`released`),i=e=>{n(t=>{let n=new globalThis.Set(t);return n.has(e.id)?n.delete(e.id):n.add(e.id),n})},a=r.map(e=>{let n=e.world.sellingValue*e.user.countNow;return{basic:e,explanation:F.primitive.toStandardCount(n),flagColor:!0,link:void 0,ribbon:t.has(e.id)}}),o=r.filter(e=>t.has(e.id)),s=o.length,l=o.reduce((e,t)=>e+t.user.countNow,0),u=new globalThis.Map;for(let e of o){let t=R.trade.resolveCoin(e),n=e.world.sellingValue*e.user.countNow,r=u.get(t.id);r?r.value+=n:u.set(t.id,{coin:t,value:n})}let d=()=>{let e=[];for(let t of o){let n=t.world.sellingValue,r=t.user.countNow;if(r<=0||n===0)continue;let i=R.trade.resolveCoin(t),a=R.trade.addAcquisitions([{id:i.id,count:n,chance:1,type:`item`}],r),o=R.trade.reduceRequirements([{type:`item`,id:t.id,count:1,chance:1,equipment:!1}],r);e=[...e,...a,...o]}P.progress.unequipZeroItems(),T.component.forceUpdate(),e.length>0&&T.toaster.showTrade(R.trade.summarizeTrades(e)),n(new globalThis.Set)},[f,p]=T.hooks.useConfirm(e=>!e&&d());return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(w,{path:e,children:[(0,X.jsx)(j,{}),(0,X.jsx)(U,{base:z(e).information}),(0,X.jsx)(c,{text:`items`,path:e,children:(0,X.jsx)(V,{indexes:a,layerDepth:2,event:[`click`,i]})}),(0,X.jsxs)(c,{text:`selected`,path:e,children:[(0,X.jsx)(g,{title:[`preset`,`kind`],explanation:[`text`,s.toString()]}),(0,X.jsx)(g,{title:[`preset`,`count`],explanation:[`text`,l.toString()]}),[...u.values()].map(({coin:e,value:t})=>(0,X.jsx)(g,{title:[`preset`,`value`],explanation:[`text`,F.primitive.toStandardCount(t)],inlineIcon:[`information`,e.information],flagColor:!0},e.id)),(0,X.jsx)(A,{id:`sell`,event:[`click`,()=>p(),f],active:s>0})]})]}),(0,X.jsx)(M,{children:T.hooks.useDefaultRoutes(e)})]})}function ze(){let e=T.hooks.usePath(1),t=[];for(let e of R.check.visibleList(D(!0).categories)){let n=R.check.visibleList(e.items);if(n.length==0)continue;let r=T.component.sortGroup(n,e=>e.world.group).map(t=>{let n=t[0].world.group,r=e.world.equipmentGroups.includes(n),i=e.user.equipments.find(e=>t.some(t=>t.id===e));return{nodes:t.map(e=>({basic:e,explanation:e.user.countNow.toString(),link:`${e.id}.item`,ribbon:i===e.id})),groupId:n,equipmentable:r,equippingId:i}});t.push({category:e,groups:r})}let n=P.progress.getCoins(),r;try{let e=I.basic.general.capacity.information.id;r=W(e)}catch{r=null}let i;try{let e=I.basic.general.queue.information.id;i=W(e)}catch{i=null}let a=R.trade.getCapacitySummary(),o=R.trade.getQueueSummary();return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(w,{path:e,background:`world`,children:[(0,X.jsx)(j,{}),(0,X.jsx)(U,{base:z(e).information}),n.map((t,n)=>(n==0||t.user.countRecord>0)&&(0,X.jsx)(v,{href:`${e.path}/${t.id}.item`,children:(0,X.jsx)(g,{title:[`basic`,t],explanation:[`text`,t.user.countNow.toString()],color:t.information.color})},t.id)),r&&r.user&&R.trade.getMaxCapacity()>0&&(0,X.jsx)(v,{href:`${e.path}/${r.id}.item`,children:(0,X.jsx)(g,{title:[`basic`,r],explanation:[`text`,a.text],color:r.information.color,flagColor:a.flag})}),i&&i.user&&(0,X.jsx)(v,{href:`${e.path}/${i.id}.item`,children:(0,X.jsx)(g,{title:[`basic`,i],explanation:[`text`,o.text],color:i.information.color,flagColor:o.flag})}),(0,X.jsx)(v,{href:`${e.path}/selling.character`,children:(0,X.jsx)(g,{title:[`preset`,`selling`]})}),t.map(t=>(0,X.jsx)(c,{text:t.category,path:e,children:t.groups.map((n,r)=>(0,X.jsx)(V,{indexes:n.nodes,layerDepth:1,event:[`hold`,P.progress.toggleEquip],children:F.primitive.switches([n.equippingId!==void 0,n.equipmentable,!0],[n.equippingId&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(v,{href:`${e.path}/${n.equippingId}.item`,children:(0,X.jsx)(g,{title:[`type`,n.equippingId,`item`],explanation:[`preset`,`equipping`],inlineIcon:`explanation`,event:[`hold`,P.progress.toggleEquip],flagColor:!0})}),(0,X.jsx)(j,{height:N.md})]}),(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(g,{title:[`preset`,`equipment`],explanation:[`preset`,`unequipping`],inlineIcon:`explanation`,flagColor:!1}),(0,X.jsx)(j,{height:N.md})]}),void 0])},`${t.category.id}-${r}`))},t.category.id))]}),(0,X.jsxs)(M,{children:[(0,X.jsx)(s,{path:`${e.path}/selling.character/*?`,children:(0,X.jsx)(Re,{})}),T.hooks.useDefaultRoutes(e)]})]})}function Be(){let e=T.hooks.usePath(1),t=[];for(let e of R.check.visibleList(D(!0).categories)){let n=e.summerizedProperties;if(n.size==0)continue;let r=[];for(let e of n.values()){if(e.value==0)continue;let t={basic:H(e.id),explanation:F.primitive.getWithSign(e.value),flagColor:T.style.getSignFlag(e.value),link:`${e.categoryId}_${e.id}.correction`,ribbon:!1};r.push(t)}r.sort((e,t)=>pe.indexOf(e.basic.id)-pe.indexOf(t.basic.id)),t.push({category:e,indexes:r})}return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(w,{path:e,background:`world`,children:[(0,X.jsx)(j,{}),(0,X.jsx)(U,{base:z(e).information}),t.length>0?(0,X.jsx)(X.Fragment,{children:t.map(e=>(0,X.jsx)(V,{categoryId:e.category.id,indexes:e.indexes,layerDepth:1},e.category.id))}):(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(j,{}),(0,X.jsx)(o,{id:`no-status`})]})]}),(0,X.jsxs)(M,{children:[(0,X.jsx)(s,{path:`${e.path}/:type.correction/*?`,children:(0,X.jsx)(ce,{layerDepth:2})}),T.hooks.useDefaultRoutes(e)]})]})}function Ve(){let e=T.hooks.usePath(1),t=R.check.debugMode();return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(w,{path:e,background:`world`,children:[(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(j,{}),(0,X.jsx)(U,{base:z(e).information})]}),(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(c,{text:`display`,path:e,children:[(0,X.jsx)(He,{path:e}),(0,X.jsx)(Ue,{}),(0,X.jsx)(We,{}),(0,X.jsx)(Ge,{})]})}),(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(c,{text:`performance`,path:e,children:[(0,X.jsx)(Ke,{}),!t&&(0,X.jsx)(Je,{})]})}),(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(c,{text:`data`,path:e,children:[(0,X.jsx)(qe,{}),(0,X.jsx)(Ye,{})]})})]}),(0,X.jsxs)(M,{children:[(0,X.jsx)(s,{path:`${e.path}/language.world/*?`,children:(0,X.jsx)(le,{layerDepth:2})}),T.hooks.useDefaultRoutes(e)]})]})}function He({path:e}){let t=R.check.enableChangeLanguage();return(0,X.jsx)(v,{href:`${e.path}/language.world`,active:t,children:(0,X.jsx)(E,{title:[`preset`,`language`],explanation:[`text`,T.component.getLanguageLabel()],text:[`preset`,t?`language-change-enable`:`language-change-unenable`],inlineIcon:[`preset`,`language-${O.config.language}`]})})}function Ue(){let[e,t]=(0,G.useState)(O.config.categoryShortcut);return(0,X.jsx)(E,{title:[`preset`,`category-shortcut`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{O.config.categoryShortcut=!e,t(!e),T.component.forceUpdate()}],text:[`preset`,`category-shortcut`],inlineIcon:`explanation`})}function We(){let[e,t]=(0,G.useState)(O.config.showingHint);return(0,X.jsx)(E,{title:[`preset`,`showing-hint`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{O.config.showingHint=!e,t(!e),T.component.forceUpdate()}],text:[`preset`,`showing-hint`],inlineIcon:`explanation`})}function Ge(){let[e,t]=(0,G.useState)(O.config.showingNavigation);return(0,X.jsx)(E,{title:[`preset`,`showing-navigation`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{O.config.showingNavigation=!e,t(!e),T.component.forceUpdate()}],text:[`preset`,`showing-navigation`],inlineIcon:`explanation`})}function Ke(){let[e,t]=(0,G.useState)(O.config.performingHighly);return(0,X.jsx)(E,{title:[`preset`,`performing-highly`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{O.config.performingHighly=!e,t(!e)}],text:[`preset`,`performing-highly`],inlineIcon:`explanation`})}function qe(){let e=()=>{let e=JSON.parse(JSON.stringify(O)).world,t=JSON.stringify(O,null,2),n=new Blob([t],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`),a=H(`export-game`);i.href=r,i.download=`yutori-idle-${e.id}-${e.version}.json`,i.click(),URL.revokeObjectURL(r),T.toaster.showTip(a.information.explanation,a,!1)},t=()=>{let e=H(`import-mistake`);T.toaster.showTip(e.information.explanation,e,!1)};return(0,X.jsxs)(B,{children:[(0,X.jsx)(A,{id:`export-game`,event:[`click`,e,!1]}),(0,X.jsx)(A,{id:`import-game`,event:[`click`,()=>{let e=document.createElement(`input`);e.type=`file`,e.accept=`.json`,e.onchange=e=>{let n=e.target.files?.[0];if(n){let e=new FileReader;e.onload=e=>{try{let n=JSON.parse(e.target?.result);if(n.world?.id!==I.basic.overview.information.id||n.world?.version!==I.basic.overview.version){t();return}ue.userData.handle.importUserData(n),window.location.hash=`/`,window.location.reload()}catch{t()}},e.readAsText(n)}},e.click()},!1]})]})}function Je(){let[e,t]=(0,G.useState)(null);return(0,G.useEffect)(()=>{let e=e=>{e.preventDefault(),t(e)};return window.addEventListener(`beforeinstallprompt`,e),()=>{window.removeEventListener(`beforeinstallprompt`,e)}},[]),(0,X.jsxs)(B,{children:[(0,X.jsx)(A,{id:`pwa`,event:[`click`,async()=>{if(!e){T.toaster.showResult(!1);return}try{await e.prompt();let{outcome:n}=await e.userChoice;T.toaster.showResult(n===`accepted`),t(null)}catch{T.toaster.showResult(!1)}},!1]}),(0,X.jsx)(o,{id:`pwa`})]})}function Ye(){let[e,n]=(0,G.useState)(`*`),r=e=>{n(e)},[i,a]=T.hooks.useConfirm(t=>{if(t){let e=H(`reset-alert`);T.toaster.showTip(e.information.explanation,e)}else{if(e!=`DELETE`&&!R.check.debugMode())return;ge.player.disableUnloadAndReset(),ue.userData.handle.resetLocal(),T.toaster.hideAll(!0),window.location.hash=``,window.location.reload()}}),s=R.check.debugMode();return(0,X.jsxs)(B,{children:[(0,X.jsx)(A,{id:`reset-game`,event:[`click`,()=>a(),i]}),(0,X.jsx)(t,{id:`reset-really`,value:e,changeHandler:r,placeholder:`*`}),(0,X.jsx)(o,{id:`reset-game`}),s&&(0,X.jsx)(o,{id:`reset-debug-mode`})]})}function Xe(){let e=T.hooks.usePath(1);return R.check.debugMode()?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(w,{path:e,background:`world`,children:[(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(j,{}),(0,X.jsx)(U,{base:z(e).information})]}),(0,X.jsx)(X.Fragment,{children:(0,X.jsx)(c,{text:`acceleration`,path:e,children:(0,X.jsx)(Qe,{})})}),(0,X.jsx)(X.Fragment,{children:(0,X.jsx)(c,{text:`skip`,path:e,children:(0,X.jsx)($e,{})})}),(0,X.jsx)(X.Fragment,{children:(0,X.jsx)(c,{text:`adjustment`,path:e,children:(0,X.jsx)(et,{})})}),(0,X.jsx)(X.Fragment,{children:(0,X.jsx)(c,{text:`restart`,path:e,children:(0,X.jsx)(tt,{})})})]}),(0,X.jsx)(M,{children:T.hooks.useDefaultRoutes(e)})]}):(0,X.jsx)(X.Fragment,{})}var Ze=3600*1e3;function Qe(){let[e,t]=(0,G.useState)(O.config.acceleration.multiplier),[n,r]=(0,G.useState)(O.config.acceleration.active);return(0,X.jsxs)(B,{children:[(0,X.jsx)(E,{title:[`preset`,`acceleration`],explanation:[`preset`,n?`yes`:`no`],event:[`click`,()=>{let e=O.config.acceleration.active;O.config.acceleration.active=!e,r(!e)}],text:`title`,inlineIcon:`explanation`,flagColor:n}),(0,X.jsx)(i,{id:`multiplier`,value:e,changeHandler:e=>{t(e),O.config.acceleration.multiplier=e},placeholder:`-`,max:100,min:1})]})}function $e(){return(0,X.jsx)(B,{children:(0,X.jsx)(A,{id:`skip-hour`,event:[`click`,()=>{let e=P.update.skipOffline(Ze);T.component.forceUpdate();let t=H(`skip-hour`);T.toaster.showTip(t.information.name,t,!0),T.toaster.showTrade(e)},!1]})})}function et(){let[e,n]=(0,G.useState)(`category`),r=()=>{n(L[(L.indexOf(e)+1)%L.length])},[a,s]=(0,G.useState)(``),c=e=>{s(e)},[l,u]=(0,G.useState)(`plus`),d=()=>{u(e=>e===`plus`?`minus`:`plus`)},[f,p]=(0,G.useState)(1),m=e=>{p(e)},[h,g]=T.hooks.useConfirm(t=>!t&&R.trade.adjust(e,a,l,f));return(0,X.jsxs)(B,{children:[(0,X.jsx)(E,{title:[`preset`,`adjustment-type`],explanation:[`preset`,`adjustment-${e}`],inlineIcon:[`preset`,e],event:[`click`,r],bold:!0,text:`explanation`}),(0,X.jsx)(t,{id:`adjustment-id`,value:a,changeHandler:c,placeholder:`all`}),(0,X.jsx)(o,{id:`adjustment-id`}),(0,X.jsx)(E,{title:[`preset`,`adjustment-sign`],explanation:[`preset`,`adjustment-${l}`],inlineIcon:`explanation`,event:[`click`,d],bold:!0,text:`explanation`}),(0,X.jsx)(i,{id:`adjustment-count`,value:f,changeHandler:m,placeholder:`1`,max:1e3}),(0,X.jsx)(o,{id:`adjustment-count`}),(0,X.jsx)(A,{id:`adjustment-adjust`,event:[`click`,()=>g(),h]})]})}function tt(){let[e,t]=T.hooks.useConfirm(e=>{e||(T.viewport.normalize(),window.location.hash=``,requestAnimationFrame(()=>window.location.reload()))});return(0,X.jsxs)(B,{children:[(0,X.jsx)(g,{title:[`preset`,`updated`],explanation:[`text`,F.primitive.toDateTimeText(`2026-08-13T10:30:51.336Z`)]}),(0,X.jsx)(A,{id:`restart`,event:[`click`,()=>t(),e]})]})}function nt(){let e=R.check.debugMode(),t=T.hooks.usePath(0),n=z(t),r=T.component.sortGroup(R.check.visibleList(D(!0).categories),e=>e.world.group),i=R.trade.getQueueSummary(),o=R.trade.getCapacitySummary(),l=R.check.visibleList(a),u=P.event.getAchievedSummary(l),d=P.property.getStatusSummary();return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(w,{path:t,background:`world`,children:[(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(j,{}),(0,X.jsx)(U,{base:n.information,color:n.information.color})]}),(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(c,{text:`character`,path:t,children:[(0,X.jsx)(v,{href:`/activity.character`,children:(0,X.jsx)(g,{title:[`preset`,`activity`],explanation:[`text`,i.text],bold:!0,flagColor:i.flag})}),(0,X.jsx)(v,{href:`/inventory.character`,children:(0,X.jsx)(g,{title:[`preset`,`inventory`],explanation:[`text`,o.text],bold:!0,flagColor:o.flag})}),(0,X.jsx)(v,{href:`/status.character`,children:(0,X.jsx)(g,{title:[`preset`,`status`],explanation:[`text`,d.text],bold:!0,flagColor:d.flag})}),l.length>0&&(0,X.jsx)(v,{href:`/missions.character`,children:(0,X.jsx)(g,{title:[`preset`,`missions`],explanation:[`text`,u.text],bold:!0,flagColor:u.flag})})]})}),(0,X.jsx)(X.Fragment,{children:r.map(e=>(0,X.jsx)(ee,{categories:e,path:t},e[0].world.group))}),(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(c,{text:`world`,path:t,children:[(0,X.jsx)(v,{href:`/overview.world`,children:(0,X.jsx)(g,{title:[`preset`,`overview`],bold:!0})}),(0,X.jsx)(v,{href:`/statistics.world`,children:(0,X.jsx)(g,{title:[`preset`,`statistics`],bold:!0})}),(0,X.jsx)(v,{href:`/config.world`,children:(0,X.jsx)(g,{title:[`preset`,`config`],bold:!0})}),e&&(0,X.jsx)(v,{href:`/debug.world`,children:(0,X.jsx)(g,{title:[`preset`,`debug`],bold:!0})})]})})]}),(0,X.jsxs)(M,{children:[(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(s,{path:`/activity.character/*?`,children:(0,X.jsx)(Le,{})}),(0,X.jsx)(s,{path:`/inventory.character/*?`,children:(0,X.jsx)(ze,{})}),(0,X.jsx)(s,{path:`/status.character/*?`,children:(0,X.jsx)(Be,{})}),(0,X.jsx)(s,{path:`/missions.character/*?`,children:(0,X.jsx)(Ie,{})})]}),(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(s,{path:`/overview.world/*?`,children:(0,X.jsx)(Pe,{})}),(0,X.jsx)(s,{path:`/statistics.world/*?`,children:(0,X.jsx)(Fe,{})}),(0,X.jsx)(s,{path:`/config.world/*?`,children:(0,X.jsx)(Ve,{})}),(0,X.jsx)(s,{path:`/debug.world/*?`,children:(0,X.jsx)(Xe,{})})]}),T.hooks.useDefaultRoutes(t)]})]})}function rt({children:e}){let t=it();return d(`span`,{id:`grider`,css:[t.base,t.scrollbarStyle],children:e})}function it(){return{base:p`
			width: 100svw;
			/* 高さは後勝ちで下ほど優先される。dvh対応ブラウザでは 100dvh が勝ち、ブラウザ自身が
			   アドレスバーの伸縮に追従する（iOS Safariではソフトキーボードでdvhは縮まない）。
			   dvh非対応ブラウザでは 100dvh がパースに失敗して落ち、JS実測の --vh が使われる。
			   var() 未対応の古いブラウザ向けの最終フォールバックが 100vh。
			   --vh の設定処理: player/control/ui/viewport.ts の updateHeight() */
			height: 100vh;
			height: calc(var(--vh, 1vh) * 100);
			height: 100dvh;
			display: flex;
			flex-direction: row;
			overflow: auto;
			scroll-snap-type: x mandatory;
			/* z-index: 10; */
			/* flex: 1; */
		`,scrollbarStyle:p`
			/* Firefox対応: auto（標準）スタイル、色はbarColorと透明トラック */
			scrollbar-width: auto;
			scrollbar-color: ${C.colors.bar} transparent;

			/* Chrome, Safari, Edge対応 */
			::-webkit-scrollbar-thumb {
				background: ${C.colors.bar};
			}
			::-webkit-scrollbar-thumb:hover {
				background: ${C.colors.actived};
			}
		`}}var at={duration:300,snappingDown:!0};function ot(){let e=(0,G.useRef)(null),t=T.hooks.useSmoothRef(()=>{let e=P.progress.getSingletonProgressing();return e?re(k(e.general.id).categoryId).user.level%1:0},at);return T.hooks.useUpdate(()=>{let n=e.current;if(!n)return;let r=P.progress.getSingletonProgressing(),i=F.primitive.clamp(t.current,0,1);n.style.setProperty(`--header-percentage`,`${i*100}%`),n.style.setProperty(`--header-color`,r?T.style.geFadedColor(k(r.general.id).information.color):`transparent`)}),d(`div`,{css:st(),ref:e})}function st(){return p`
		position: fixed;
		top: ${C.constants.barHeight}px;
		left: 0;
		width: 100svw;
		height: ${C.constants.headerLineHeight}px;
		--header-percentage: 0%;
		--header-color: transparent;
		background: linear-gradient(to right, var(--header-color) var(--header-percentage), transparent var(--header-percentage));
		z-index: 20;
	`}var ct={},lt={duration:300};function ut(){let[e,t]=(0,G.useState)(()=>T.scroll.getScrolledPosition().x>0),[n,r]=(0,G.useState)(()=>P.progress.getSingletonProgressing()?.general.id),i=(0,G.useRef)(null),[,a]=T.hooks.useLocation(),o=()=>{T.scroll.slideTop()},s=()=>{let e=T.component.getSingletonProgressingPath();e&&(a(e),T.scroll.slideBottom())},c=T.hooks.useSmoothRef(()=>{let e=P.progress.getSingletonProgressing();return e?P.progress.caluculateBarProgresing(e):0},()=>P.progress.getSingletonProgressing()?.combat?lt:ct);return T.hooks.useUpdate(()=>{r(P.progress.getSingletonProgressing()?.general.id),t(T.scroll.getScrolledPosition().x>0);let e=i.current;e&&(e.style.transform=`scaleX(${F.primitive.clamp(c.current,0,1)})`)}),b(`span`,{css:[dt(8).base],children:[d(m,{height:8,fillRef:i,color:n?T.style.getActionProgressColor(n):void 0}),e&&d(f,{id:`go-top`,leftern:!0,handler:o,size:26}),n&&d(f,{id:n,leftern:!1,handler:s,size:26})]})}function dt(e){return{base:p`
			/* display: flex; */
			position: relative;
			width: 100svw;
			height: ${e}px;
			/* bottom: 0; */
			z-index: 20;
			background-color: transparent;
		`}}var ft,pt,mt=2/3,ht=.15;function gt(){let[e]=T.hooks.useLocation();return ft?null:(T.component.setBackgroundHandler(_t),_t(vt(e)),null)}function _t(e){if(yt(ft,e))return;ft=e;let t=(e==`world`?``:re(e[1]).world.background)||I.basic.design.background||``;if(pt===t)return;pt=t;let n=C.colors.background,{h:r,s:i,l:a}=y(n).hsl().object(),o=bt(r*(1-ht),i*(1-ht),a*(1-ht)),s=bt(r*1.15,i*1.15,a*1.15),c=e=>`linear-gradient(
		to top,
		${y(o).alpha(e).rgb().string()},
		${y(n).alpha(e).rgb().string()},
		${y(s).alpha(e).rgb().string()}
	)`;window.document.body.style.background=t?`${c(mt)}, url(${t}) center / cover no-repeat fixed`:c(1),window.document.body.style.backgroundColor=C.colors.bar}function vt(e){let t=e.split(`/`).reverse();for(let e of t){let[t,n]=e.split(`.`);if(!(!t||!n)){if(n==`category`)return[`category`,t];if(n==`action`)return[`category`,k(t).categoryId];if(n==`item`){let e=W(t).categoryId;return e?[`category`,e]:`world`}}}return`world`}function yt(e,t){return e?e==`world`?t==`world`:t==`world`?!1:e[1]==t[1]:!1}function bt(e,t,n){return`hsl(${e}, ${t}%, ${n}%)`}function xt(){let[t,n]=(0,G.useState)(!1),r=(0,G.useRef)(!1);(0,G.useEffect)(()=>{(async()=>{if(!r.current){r.current=!0;try{await ie(),ye(),ae(),P.event.check(),n(!0)}catch(e){console.error(`Initialization error:`,e)}}})()},[]);let[i,a]=T.hooks.useLocation();(0,G.useEffect)(()=>{if(!t)return;let e=he(i);e&&a(e)},[t,i,a]),(0,G.useEffect)(()=>{t&&(_e(),se())},[t]);let o=()=>{if(R.check.debugMode())return{background:`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,color:`white`};let e=document.querySelector(`meta[name="bar-color"]`),t=document.querySelector(`meta[name="text-color"]`);return{background:e?.content||`#667eea`,color:t?.content||`white`}};if(!t){let e=o();return b(`div`,{css:Jt(e.background,e.color),children:[d(Ne,{color:e.color,size:80,cssOverride:{display:`block`}}),d(`h2`,{children:`Loading Game...`}),d(`p`,{children:`Initializing world data and assets`})]})}return d(e,{children:d(St,{})})}function St(){return oe(),b(u,{children:[d(`div`,{style:{display:fe?`block`:`none`},children:`This game was interrupted because it was opened in another tab.`}),b(`div`,{style:{display:fe?`none`:`block`},children:[d(de,{styles:Kt}),d(_,{base:`/`,hook:Ee,children:b(`div`,{css:qt,children:[d(ot,{}),d(rt,{children:d(nt,{})}),d(ut,{})]})}),d(Ct,{}),d(me,{}),d(gt,{})]})]})}function Ct(){let{toasts:e,handlers:t}=ne(zt),n=new Map;for(let t of e){let e=t.position||Dt,r=n.get(e);r?r.push(t):n.set(e,[t])}let r=n.has(`bottom-left`)||n.has(`bottom-right`);return d(`div`,{className:Et,style:Ot,children:[...n].map(([e,n])=>d(`div`,{style:Nt(e,r&&e==`bottom-center`),children:(e.startsWith(`top`)?n:[...n].reverse()).map(n=>d(wt,{item:n,position:e,onHeightUpdate:t.updateHeight},n.id))},e))})}function wt({item:e,position:t,onHeightUpdate:n}){return d(`div`,{ref:(0,G.useCallback)(t=>{t&&n(e.id,t.getBoundingClientRect().height)},[e.id,n]),style:e.className==T.toaster.inlineClassName?At:jt(t),children:d(r,{toast:e,style:Gt(e)})})}var Z={fontSize:`12px`,padding:`5px 7px`},Tt=5,Et=`playerToaster`,Dt=`top-center`,Q=16,Ot={position:`fixed`,zIndex:9999,top:Q,left:Q,right:Q,bottom:Q,pointerEvents:`none`},kt=100,At={display:`flex`};function jt(e){return{display:`flex`,flexBasis:`100%`,justifyContent:Mt(e)}}function Mt(e){return e.endsWith(`left`)?`flex-start`:e.endsWith(`right`)?`flex-end`:`center`}function Nt(e,t){return{position:`absolute`,left:0,right:0,...e.startsWith(`top`)?{top:0}:{bottom:0},display:`flex`,flexFlow:`row wrap`,alignItems:`center`,justifyContent:Mt(e),gap:`${Tt}px`,...t?{paddingLeft:`${kt}px`,paddingRight:`${kt}px`}:{}}}var Pt=`playerToastFadeIn`,Ft=`playerToastFadeOut`,It=`playerToastPopInTop`,Lt=`playerToastPopInBottom`,Rt=300,$=`${Rt}ms`,zt={removeDelay:Rt},Bt=3e3,Vt={...Z,pointerEvents:`auto`,animation:`${Pt} ${$} ease-in-out forwards`},Ht={...Z,pointerEvents:`none`,animation:`${Ft} ${$} ease-in-out forwards`},Ut={...Z,pointerEvents:`auto`,animation:`${It} ${$} ease-in-out forwards`},Wt={...Z,pointerEvents:`auto`,animation:`${Lt} ${$} ease-in-out forwards`};function Gt(e){return e.visible?(e.duration??0)<Bt?Vt:(e.position??`top-center`).startsWith(`top`)?Ut:Wt:Ht}var Kt=p`
	/* overflow はルート要素(html)のものだけがビューポートへ伝播する。bodyだけに指定しても
	   文書スクロールは止まらず、iOSが入力欄をscrollIntoViewする際にページ全体がずれる。
	   htmlにも指定してスクロール自体を構造的に発生させない */
	html,
	body {
		background-color: #ddd;
		margin: 0;
		overflow: hidden;
	}

	/* スマホの長押しでOSが文字選択・コールアウト（コピー／調べる）を始めるのを止める。
	   ホールド操作（control/ui/hooks.tsx の useHold: 500ms）とOSの長押し判定は
	   ほぼ同時に成立するため、抑止しないと選択やドラッグの開始でポインタ列が
	   キャンセルされ、ホールドが取りこぼされる。
	   -webkit-touch-callout はiOS専用。Androidのメニューは contextmenu 側で止める
	   （control/lifecycle/player.ts の setEvents()） */
	body {
		-webkit-user-select: none;
		user-select: none;
		-webkit-touch-callout: none;
		/* タップ時にAndroidが出す灰色のフラッシュ。バーの配色が一瞬崩れて見える */
		-webkit-tap-highlight-color: transparent;
	}

	/* 入力欄だけは選択・コピー・貼り付けを残す（numberBar / stringBar / sliderBar） */
	input,
	textarea {
		-webkit-user-select: auto;
		user-select: auto;
	}

	/* アイコン画像（parts/iconPart.tsx の img）の長押し保存・ドラッグを止める */
	img {
		-webkit-user-drag: none;
	}

	@keyframes ${Pt} {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes ${Ft} {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	/* 画面上側に出るトースト（showLeveled / showAchieved）の登場。上の画面外から降りてくる */
	@keyframes ${It} {
		from {
			opacity: 0;
			transform: translate3d(0, -120%, 0) scale(0.6);
		}
		to {
			opacity: 1;
			transform: translate3d(0, 0, 0) scale(1);
		}
	}

	/* 画面下側に出るトースト（showTip / showStatus）の登場。下の画面外からせり上がる */
	@keyframes ${Lt} {
		from {
			opacity: 0;
			transform: translate3d(0, 120%, 0) scale(0.6);
		}
		to {
			opacity: 1;
			transform: translate3d(0, 0, 0) scale(1);
		}
	}

	/* 本文まわりの余白（ライブラリ標準は margin 4px 10px）。本文はライブラリ内部の要素で
	   style を渡せないため、要素セレクタを重ねて標準のクラス指定より詳細度を上げる。
	   DOM構造は コンテナ > 表示位置ごとの箱 > トースト1枚の枠 > トースト本体 > 本文（本文は常に最後の子） */
	.${Et} > div > div > div > div:last-child {
		margin: 3px 7px;
	}

	/* 本文以外の子＝showResult の成功/失敗アイコン。ライブラリ内で 20px 固定なので、
	   他のアイコンに合わせて縮小する */
	.${Et} > div > div > div > div:not(:last-child) {
		transform: scale(0.67);
	}
`,qt=p`
	width: 100svw;
	/* 高さは後勝ちで下ほど優先される。dvh対応ブラウザでは 100dvh が勝ち、ブラウザ自身が
	   アドレスバーの伸縮に追従する（iOS Safariではソフトキーボードでdvhは縮まない）。
	   dvh非対応ブラウザでは 100dvh がパースに失敗して落ち、JS実測の --vh が使われる。
	   var() 未対応の古いブラウザ向けの最終フォールバックが 100vh。
	   --vh の設定処理: player/control/ui/viewport.ts の updateHeight() */
	height: 100vh;
	height: calc(var(--vh, 1vh) * 100);
	height: 100dvh;
	display: flex;
	flex-direction: column;
	/* overflow: hidden; */
	// flex-direction: row;
	/* overflow: scroll; */
	/* scroll-snap-type: x mandatory; */
	/* z-index: 10; */
	/* IE, Edge 対応 */
`,Jt=(e,t)=>p`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: ${e};
	color: ${t};
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	z-index: 9999;

	h2 {
		margin-top: 2rem;
		font-size: 1.5rem;
		font-weight: 600;
		letter-spacing: 0.5px;
	}

	p {
		margin-top: 0.75rem;
		font-size: 0.95rem;
		opacity: 0.85;
		font-weight: 300;
	}
`;console.log(`🎮 Player Build Version: 0.0.1608`),console.log(`📅 Player Build Date: ${new Date(`2026-08-13T10:30:51.336Z`).toLocaleString(`ja-JP`)}`),xe.createRoot(document.getElementById(`root`)).render((0,X.jsx)(G.StrictMode,{children:(0,X.jsx)(xt,{})}));
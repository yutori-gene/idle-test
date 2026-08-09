import{$ as e,A as t,At as n,B as r,C as i,D as a,Dt as o,E as s,Et as c,I as l,L as u,M as d,N as f,Nt as p,O as m,Ot as h,P as g,Q as _,R as v,S as y,T as ee,Tt as b,V as x,Z as S,_ as C,_t as w,a as T,b as E,bt as te,c as ne,d as re,et as ie,f as ae,ft as D,g as oe,gt as se,h as ce,ht as O,i as le,j as k,jt as ue,k as A,kt as de,l as fe,lt as pe,m as me,n as j,o as M,p as he,pt as N,r as ge,rt as P,s as _e,t as F,tt as ve,u as ye,v as be,vt as I,w as L,x as R,xt as xe,y as z,yt as B,zt as V}from"./control-BOJaHxrC.js";import"./modulepreload-polyfill-Dezn_h7o.js";var H=V(p()),Se=V(ue(),1),U={v:[]},Ce=()=>U.v.forEach(e=>e()),we=e=>(U.v.push(e)===1&&addEventListener(`hashchange`,Ce),()=>{U.v=U.v.filter(t=>t!==e),U.v.length||removeEventListener(`hashchange`,Ce)}),Te=()=>`/`+location.hash.replace(/^#?\/?/,``),Ee=(e,{state:t=null,replace:n=!1}={})=>{let r=location.href,[i,a]=e.replace(/^#?\/?/,``).split(`?`),o=new URL(location.href);o.hash=`/${i}`,a&&(o.search=a);let s=o.href;n?history.replaceState(t,``,s):history.pushState(t,``,s);let c=typeof HashChangeEvent<`u`?new HashChangeEvent(`hashchange`,{oldURL:r,newURL:s}):new Event(`hashchange`,{detail:{oldURL:r,newURL:s}});dispatchEvent(c)},De=({ssrPath:e=`/`}={})=>[(0,h.useSyncExternalStore)(we,Te,()=>e),Ee];De.hrefs=e=>`#`+e;var W;(function(e){e.maroon=`#800000`,e.red=`#FF0000`,e.orange=`#FFA500`,e.yellow=`#FFFF00`,e.olive=`#808000`,e.green=`#008000`,e.purple=`#800080`,e.fuchsia=`#FF00FF`,e.lime=`#00FF00`,e.teal=`#008080`,e.aqua=`#00FFFF`,e.blue=`#0000FF`,e.navy=`#000080`,e.black=`#000000`,e.gray=`#808080`,e.silver=`#C0C0C0`,e.white=`#FFFFFF`})(W||={});var Oe=function(e,t){if(e.includes(`/`))return e.replace(`rgb(`,`rgba(`);var n=e.substring(e.startsWith(`rgba(`)?5:4,e.length-1).trim(),r=n.split(`,`);return r.length===4?e.replace(`rgb(`,`rgba(`):r.length===3?`rgba(${n}, ${t})`:`rgba(${n} / ${t})`},ke=function(e,t){if(e.startsWith(`rgb`))return Oe(e,t);if(Object.keys(W).includes(e)&&(e=W[e]),e[0]===`#`&&(e=e.slice(1)),e.length===3){var n=``;e.split(``).forEach(function(e){n+=e,n+=e}),e=n}return`rgba(${(e.match(/.{2}/g)||[]).map(function(e){return parseInt(e,16)}).join(`, `)}, ${t})`},Ae={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function je(e){if(typeof e==`number`)return{value:e,unit:`px`};var t,n=(e.match(/^[0-9.]*/)||``).toString();t=n.includes(`.`)?parseFloat(n):parseInt(n,10);var r=(e.match(/[^0-9]*$/)||``).toString();return Ae[r]?{value:t,unit:r}:(console.warn(`React Spinners: ${e} is not a valid css value. Defaulting to ${t}px.`),{value:t,unit:`px`})}function G(e){var t=je(e);return`${t.value}${t.unit}`}var Me=function(e,t,n){var r=`react-spinners-${e}-${n}`;if(typeof window>`u`||!window.document)return r;var i=document.createElement(`style`);document.head.appendChild(i);var a=i.sheet,o=`
    @keyframes ${r} {
      ${t}
    }
  `;return a&&a.insertRule(o,0),r},K=function(){return K=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},K.apply(this,arguments)},Ne=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Pe(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,i=r===void 0?`#000000`:r,a=e.speedMultiplier,o=a===void 0?1:a,s=e.cssOverride,c=s===void 0?{}:s,l=e.size,u=l===void 0?50:l,d=Ne(e,[`loading`,`color`,`speedMultiplier`,`cssOverride`,`size`]),f=je(u),p=f.value,m=f.unit,h=K({display:`inherit`,position:`relative`,width:G(u),height:G(u),transform:`rotate(165deg)`},c),g=p/5,_=(p-g)/2,v=_-g,y=ke(i,.75),ee=Me(`HashLoader`,`0% {width: ${g}px; box-shadow: ${_}px ${-v}px ${y}, ${-_}px ${v}px ${y}}
    35% {width: ${G(u)}; box-shadow: 0 ${-v}px ${y}, 0 ${v}px ${y}}
    70% {width: ${g}px; box-shadow: ${-_}px ${-v}px ${y}, ${_}px ${v}px ${y}}
    100% {box-shadow: ${_}px ${-v}px ${y}, ${-_}px ${v}px ${y}}`,`before`),b=Me(`HashLoader`,`0% {height: ${g}px; box-shadow: ${v}px ${_}px ${i}, ${-v}px ${-_}px ${i}}
    35% {height: ${G(u)}; box-shadow: ${v}px 0 ${i}, ${-v}px 0 ${i}}
    70% {height: ${g}px; box-shadow: ${v}px ${-_}px ${i}, ${-v}px ${_}px ${i}}
    100% {box-shadow: ${v}px ${_}px ${i}, ${-v}px ${-_}px ${i}}`,`after`),x=function(e){return{position:`absolute`,top:`50%`,left:`50%`,display:`block`,width:`${p/5}${m}`,height:`${p/5}${m}`,borderRadius:`${p/10}${m}`,transform:`translate(-50%, -50%)`,animationFillMode:`none`,animation:`${e===1?ee:b} ${2/o}s infinite`}};return n?H.createElement(`span`,K({style:h},d),H.createElement(`span`,{style:x(1)}),H.createElement(`span`,{style:x(2)})):null}var q=V(ve());function Fe(){let e=N.basic.general,t=T.hooks.usePath(1);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(C,{path:t,background:`world`,children:(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(A,{}),(0,q.jsx)(E,{title:[`preset`,`default-language`],explanation:[`text`,T.component.getLanguageLabel()],text:[`preset`,F.check.enableChangeLanguage()?`language-change-enable-general`:`language-change-unenable`]}),(0,q.jsx)(m,{title:[`preset`,`max-category-level`],explanation:[`text`,M.primitive.toLevel(e.maxCategoryLevels)],event:`hint`}),(0,q.jsx)(m,{title:[`preset`,`level-common-ratio`],explanation:[`text`,e.levelCommonRatio.toString()],event:`hint`})]})}),(0,q.jsx)(o,{children:T.hooks.useDefaultRoutes(t)})]})}function Ie(){let e=N,t=e.basic.overview,n=T.hooks.usePath(1),r=t.information,i=F.check.debugMode();return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(C,{path:n,background:`world`,children:[(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(s,{text:`world`,path:n,children:[(0,q.jsx)(z,{base:r,color:t.information.color}),(0,q.jsx)(m,{title:[`preset`,`version`],explanation:[`text`,t.version.toString()]}),(0,q.jsx)(m,{title:[`preset`,`updated`],explanation:[`text`,e.basic.development.timestamp.published]}),(0,q.jsx)(m,{title:[`preset`,`author`],explanation:[`text`,t.author],event:`hint`}),t.homepage&&(0,q.jsx)(m,{title:[`preset`,`homepage`],explanation:[`url`,t.homepage],event:`hint`}),(0,q.jsx)(m,{title:[`preset`,`estimated-playing-time`],explanation:[`text`,`${t.estimatedPlayingTime.value} ${B(t.estimatedPlayingTime.unit).information.name}`],event:`hint`})]})}),(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(s,{text:`console`,path:n,children:[(0,q.jsx)(z,{base:B(`console`).information}),(0,q.jsx)(m,{title:[`preset`,`version`],explanation:[`text`,`0.0.1536`]}),(0,q.jsx)(m,{title:[`preset`,`updated`],explanation:[`text`,Re(`2026-08-09T06:47:16.068Z`)]}),(0,q.jsx)(m,{title:[`preset`,`author`],explanation:[`text`,`Yutori`]}),(0,q.jsx)(m,{title:[`preset`,`homepage`],explanation:[`url`,`https://idle.yu-to-ri.net/document/index.html`]}),(0,q.jsx)(Le,{})]})}),!i&&(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(s,{text:`iconify`,path:n,children:[(0,q.jsx)(z,{base:B(`iconify`).information}),Object.entries(te).map(([e,t])=>(0,q.jsx)(be,{summary:t},e))]})})]}),(0,q.jsx)(o,{children:T.hooks.useDefaultRoutes(n)})]})}function Le(){let[e,t]=T.hooks.useConfirm(e=>{e||(T.viewport.normalize(),window.location.hash=``,requestAnimationFrame(()=>window.location.reload()))});return(0,q.jsxs)(L,{children:[(0,q.jsx)(k,{id:`force-restart`,event:[`click`,()=>t(),e]}),(0,q.jsx)(a,{id:`force-restart`})]})}function Re(e){let t=new Date(e);return`${t.getFullYear()}/${String(t.getMonth()+1).padStart(2,`0`)}/${String(t.getDate()).padStart(2,`0`)} ${String(t.getHours()).padStart(2,`0`)}:${String(t.getMinutes()).padStart(2,`0`)}:${String(t.getSeconds()).padStart(2,`0`)}`}function ze(){let e=T.hooks.usePath(1),t=j.progress.getCoins(),[n]=H.useState(()=>(Date.now()-D.playing.time.initialized)/1e3),r=F.check.visibleList(I(!0).items).reduce((e,t)=>(e.now+=t.user.countNow,e.record+=t.user.countRecord,e),{now:0,record:0}),i=M.primitive.toLevel(F.check.visibleList(I(!0).categories).reduce((e,t)=>t.world.numeric?e+Math.floor(t.user.level):e,0)),a=F.check.visibleList(I(!0).actions).reduce((e,t)=>(e+=t.user.count,e),0);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(C,{path:e,background:`world`,children:[(0,q.jsx)(q.Fragment,{children:(0,q.jsx)(s,{text:`coin`,path:e,children:t.map(e=>(0,q.jsxs)(H.Fragment,{children:[(0,q.jsx)(m,{title:[`basic`,e],explanation:[`text`,e.user.countNow.toString()]}),(0,q.jsx)(m,{title:[`preset`,`amount-earned`],explanation:[`text`,e.user.countRecord.toString()]})]},e.id))})}),(0,q.jsx)(q.Fragment,{children:(0,q.jsx)(s,{text:`time`,path:e,children:(0,q.jsx)(m,{title:[`preset`,`playing-time`],explanation:[`seconds`,n]})})}),(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(s,{text:`item`,path:e,children:[(0,q.jsx)(m,{title:[`preset`,`count-now`],explanation:[`text`,r.now.toString()]}),(0,q.jsx)(m,{title:[`preset`,`count-gained`],explanation:[`text`,r.record.toString()]})]})}),(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(s,{text:`action`,path:e,children:[(0,q.jsx)(m,{title:[`preset`,`total-level`],explanation:[`text`,i]}),(0,q.jsx)(m,{title:[`preset`,`count-actioned`],explanation:[`text`,a.toString()]})]})})]}),(0,q.jsx)(o,{children:T.hooks.useDefaultRoutes(e)})]})}function Be(){let e=T.hooks.usePath(1),t=e=>T.component.sortGroup(e,e=>e.world.group).flat().map(e=>{let t=j.event.getArchived(e).flag??!1;return{basic:e,explanation:``,explanationIcon:B(t?`yes`:`no`).information,flagColor:t,link:`${e.id}.event`,ribbon:j.event.checkUnclaimed(e)}}),n=t(F.check.visibleList(xe).filter(e=>e.categoryId===``)),r=[];for(let e of F.check.visibleList(I(!0).categories)){let n=F.check.visibleList(e.tasks);n.length!=0&&r.push({category:e,indexes:t(n)})}return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(C,{path:e,background:`world`,children:[n.length>0&&(0,q.jsx)(s,{text:`missions`,path:e,children:(0,q.jsx)(R,{indexes:n,layerDepth:1})}),r.map(e=>(0,q.jsx)(R,{categoryId:e.category.id,indexes:e.indexes,layerDepth:1},e.category.id))]}),(0,q.jsx)(o,{children:T.hooks.useDefaultRoutes(e)})]})}function Ve(){let e=T.hooks.usePath(1),t=[];for(let e of F.check.visibleList(I(!0).categories)){let n=F.check.visibleList(e.actions);if(n.length==0)continue;let r=e.user.progressing?O(e.user.progressing.general.id):void 0,i=n.map(e=>({basic:e,explanation:M.primitive.toLevel(e.world.level),flagColor:F.check.matchedLevel(e),link:`${e.id}.action`,ribbon:j.progress.checkSingleCompleted(void 0,e.id)||e.id===r?.id})),a=j.progress.checkSingleCompleted(e.id);t.push({category:e,actions:i,progress:r,ribbonCategory:a})}let n;try{n=w(N.basic.general.queue.information.id)}catch{n=null}let r=j.progress.getSingletonProgressing(),i=r?O(r.general.id):void 0;return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(C,{path:e,background:`world`,children:[n&&n.user&&F.trade.getMaxQueue()>=1&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(A,{}),(0,q.jsx)(g,{href:`${e.path}/${i?.id}.action`,active:!!i,children:(0,q.jsx)(m,{title:[`basic`,n],explanation:[`text`,`${F.trade.getWaitingCount()} / ${F.trade.getMaxQueue()}`],color:n.information.color,flagColor:F.trade.hasQueueRoom()})})]}),(0,q.jsx)(q.Fragment,{children:t.map(t=>(0,q.jsx)(R,{categoryId:t.category.id,indexes:t.actions,layerDepth:1,event:[`hold`,j.progress.toggleAct],children:t.progress&&(0,q.jsxs)(g,{href:`${e.path}/${t.progress.id}.action`,children:[(0,q.jsx)(m,{title:[`basic`,t.progress],ribbon:t.ribbonCategory,event:[`hold`,j.progress.toggleAct]}),(0,q.jsx)(ee,{categoryId:t.category.id,type:`progress`})]})},t.category.id))})]}),(0,q.jsx)(o,{children:T.hooks.useDefaultRoutes(e)})]})}function He(){let e=T.hooks.usePath(2),[t,n]=H.useState(new globalThis.Set),r=I(!0).items.filter(e=>e.user.countNow>=1&&e.world.sellingValue>0&&F.check.locked(e)===`released`),i=e=>{n(t=>{let n=new globalThis.Set(t);return n.has(e.id)?n.delete(e.id):n.add(e.id),n})},a=r.map(e=>{let n=e.world.sellingValue*e.user.countNow;return{basic:e,explanation:M.primitive.toStandardCount(n),flagColor:!0,link:void 0,ribbon:t.has(e.id)}}),c=r.filter(e=>t.has(e.id)),l=c.length,u=c.reduce((e,t)=>e+t.user.countNow,0),d=new globalThis.Map;for(let e of c){let t=F.trade.resolveCoin(e),n=e.world.sellingValue*e.user.countNow,r=d.get(t.id);r?r.value+=n:d.set(t.id,{coin:t,value:n})}let f=()=>{let e=[];for(let t of c){let n=t.world.sellingValue,r=t.user.countNow;if(r<=0||n===0)continue;let i=F.trade.resolveCoin(t),a=F.trade.addAcquisitions([{id:i.id,count:n,chance:1,type:`item`}],r),o=F.trade.reduceRequirements([{type:`item`,id:t.id,count:1,chance:1,equipment:!1}],r);e=[...e,...a,...o]}j.progress.unequipZeroItems(),T.component.forceUpdate(),e.length>0&&T.toaster.showTrade(F.trade.summarizeTrades(e)),n(new globalThis.Set)},[p,h]=T.hooks.useConfirm(e=>!e&&f());return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(C,{path:e,children:[(0,q.jsx)(s,{text:`items`,path:e,children:(0,q.jsx)(R,{indexes:a,layerDepth:2,event:[`click`,i]})}),(0,q.jsxs)(s,{text:`selected`,path:e,children:[(0,q.jsx)(m,{title:[`preset`,`kind`],explanation:[`text`,l.toString()]}),(0,q.jsx)(m,{title:[`preset`,`count`],explanation:[`text`,u.toString()]}),[...d.values()].map(({coin:e,value:t})=>(0,q.jsx)(m,{title:[`preset`,`value`],explanation:[`text`,M.primitive.toStandardCount(t)],inlineIcon:[`information`,e.information],flagColor:!0},e.id)),(0,q.jsx)(k,{id:`sell`,event:[`click`,()=>h(),p],active:l>0})]})]}),(0,q.jsx)(o,{children:T.hooks.useDefaultRoutes(e)})]})}function Ue(){let e=T.hooks.usePath(1),t=[];for(let e of F.check.visibleList(I(!0).categories)){let n=F.check.visibleList(e.items);if(n.length==0)continue;let r=T.component.sortGroup(n,e=>e.world.group).map(t=>{let n=t[0].world.group,r=e.world.equipmentGroups.includes(n),i=e.user.equipments.find(e=>t.some(t=>t.id===e));return{nodes:t.map(e=>({basic:e,explanation:e.user.countNow.toString(),link:`${e.id}.item`,ribbon:i===e.id})),groupId:n,equipmentable:r,equippingId:i}});t.push({category:e,groups:r})}let n=j.progress.getCoins(),r;try{let e=N.basic.general.capacity.information.id;r=w(e)}catch{r=null}let i;try{let e=N.basic.general.queue.information.id;i=w(e)}catch{i=null}return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(C,{path:e,background:`world`,children:[(0,q.jsx)(A,{}),n.map((t,n)=>(n==0||t.user.countRecord>0)&&(0,q.jsx)(g,{href:`${e.path}/${t.id}.item`,children:(0,q.jsx)(m,{title:[`basic`,t],explanation:[`text`,t.user.countNow.toString()],color:t.information.color})},t.id)),r&&r.user&&F.trade.getMaxCapacity()>0&&(0,q.jsx)(g,{href:`${e.path}/${r.id}.item`,children:(0,q.jsx)(m,{title:[`basic`,r],explanation:[`text`,`${F.trade.getCurrentItemTypesCount()} / ${F.trade.getMaxCapacity()}`],color:r.information.color,flagColor:F.trade.hasCapacityRoom()})}),i&&i.user&&(0,q.jsx)(g,{href:`${e.path}/${i.id}.item`,children:(0,q.jsx)(m,{title:[`basic`,i],explanation:[`text`,`${F.trade.getWaitingCount()} / ${F.trade.getMaxQueue()}`],color:i.information.color,flagColor:F.trade.hasQueueRoom()})}),(0,q.jsx)(g,{href:`${e.path}/selling.character`,children:(0,q.jsx)(m,{title:[`preset`,`selling`]})}),t.map(t=>(0,q.jsx)(s,{text:t.category,path:e,children:t.groups.map((n,r)=>(0,q.jsx)(R,{indexes:n.nodes,layerDepth:1,event:[`hold`,j.progress.toggleEquip],children:M.primitive.switches([n.equippingId!==void 0,n.equipmentable,!0],[n.equippingId&&(0,q.jsx)(g,{href:`${e.path}/${n.equippingId}.item`,children:(0,q.jsx)(m,{title:[`type`,n.equippingId,`item`],explanation:[`preset`,`equipping`],inlineIcon:`explanation`,event:[`hold`,j.progress.toggleEquip],flagColor:!0})}),(0,q.jsx)(m,{title:[`preset`,`equipment`],explanation:[`preset`,`unequipping`],inlineIcon:`explanation`,flagColor:!1}),(0,q.jsx)(q.Fragment,{})])},`${t.category.id}-${r}`))},t.category.id))]}),(0,q.jsxs)(o,{children:[(0,q.jsx)(b,{path:`${e.path}/selling.character/*?`,children:(0,q.jsx)(He,{})}),T.hooks.useDefaultRoutes(e)]})]})}function We(){let e=T.hooks.usePath(1),t=[];for(let e of F.check.visibleList(I(!0).categories)){let n=e.summerizedProperties;if(n.size==0)continue;let r=[];for(let e of n.values()){if(e.value==0)continue;let t={basic:B(e.id),explanation:M.primitive.getWithSign(e.value),flagColor:T.style.getSignFlag(e.value),link:`${e.categoryId}_${e.id}.correction`,ribbon:!1};r.push(t)}r.sort((e,t)=>pe.indexOf(e.basic.id)-pe.indexOf(t.basic.id)),t.push({category:e,indexes:r})}return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(C,{path:e,background:`world`,children:t.length>0?(0,q.jsx)(q.Fragment,{children:t.map(e=>(0,q.jsx)(R,{categoryId:e.category.id,indexes:e.indexes,layerDepth:1},e.category.id))}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(A,{}),(0,q.jsx)(a,{id:`no-status`})]})}),(0,q.jsxs)(o,{children:[(0,q.jsx)(b,{path:`${e.path}/:type.correction/*?`,children:(0,q.jsx)(oe,{layerDepth:2})}),T.hooks.useDefaultRoutes(e)]})]})}function Ge(){let e=T.hooks.usePath(1),t=F.check.debugMode();return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(C,{path:e,background:`world`,children:(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(A,{}),(0,q.jsx)(Ke,{path:e}),(0,q.jsx)(A,{}),(0,q.jsx)(qe,{}),(0,q.jsx)(A,{}),(0,q.jsx)(Je,{}),(0,q.jsx)(A,{}),(0,q.jsx)(Ye,{}),(0,q.jsx)(A,{}),(0,q.jsx)(Xe,{}),(0,q.jsx)(A,{}),!t&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Qe,{}),(0,q.jsx)(A,{})]}),(0,q.jsx)(Ze,{}),(0,q.jsx)(A,{}),(0,q.jsx)($e,{})]})}),(0,q.jsxs)(o,{children:[(0,q.jsx)(b,{path:`${e.path}/language.world/*?`,children:(0,q.jsx)(ce,{layerDepth:2})}),T.hooks.useDefaultRoutes(e)]})]})}function Ke({path:e}){let t=F.check.enableChangeLanguage();return(0,q.jsx)(g,{href:`${e.path}/language.world`,active:t,children:(0,q.jsx)(E,{title:[`preset`,`language`],explanation:[`text`,T.component.getLanguageLabel()],text:[`preset`,t?`language-change-enable`:`language-change-unenable`],inlineIcon:[`preset`,`language-${D.config.language}`]})})}function qe(){let[e,t]=(0,H.useState)(D.config.categoryShortcut);return(0,q.jsx)(E,{title:[`preset`,`category-shortcut`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{D.config.categoryShortcut=!e,t(!e),T.component.forceUpdate()}],text:[`preset`,`category-shortcut`],inlineIcon:`explanation`})}function Je(){let[e,t]=(0,H.useState)(D.config.showingHint);return(0,q.jsx)(E,{title:[`preset`,`showing-hint`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{D.config.showingHint=!e,t(!e),T.component.forceUpdate()}],text:[`preset`,`showing-hint`],inlineIcon:`explanation`})}function Ye(){let[e,t]=(0,H.useState)(D.config.showingNavigation);return(0,q.jsx)(E,{title:[`preset`,`showing-navigation`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{D.config.showingNavigation=!e,t(!e),T.component.forceUpdate()}],text:[`preset`,`showing-navigation`],inlineIcon:`explanation`})}function Xe(){let[e,t]=(0,H.useState)(D.config.performingHighly);return(0,q.jsx)(E,{title:[`preset`,`performing-highly`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{D.config.performingHighly=!e,t(!e)}],text:[`preset`,`performing-highly`],inlineIcon:`explanation`})}function Ze(){let e=()=>{let e=JSON.parse(JSON.stringify(D)).world,t=JSON.stringify(D,null,2),n=new Blob([t],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`),a=B(`export-game`);i.href=r,i.download=`yutori-idle-${e.id}-${e.version}.json`,i.click(),URL.revokeObjectURL(r),T.toaster.showTip(a.information.explanation,a,!1)},t=()=>{let e=B(`import-mistake`);T.toaster.showTip(e.information.explanation,e,!1)};return(0,q.jsxs)(L,{children:[(0,q.jsx)(k,{id:`export-game`,event:[`click`,e,!1]}),(0,q.jsx)(k,{id:`import-game`,event:[`click`,()=>{let e=document.createElement(`input`);e.type=`file`,e.accept=`.json`,e.onchange=e=>{let n=e.target.files?.[0];if(n){let e=new FileReader;e.onload=e=>{try{let n=JSON.parse(e.target?.result);if(n.world?.id!==N.basic.overview.information.id||n.world?.version!==N.basic.overview.version){t();return}le.userData.handle.importUserData(n),window.location.hash=`/`,window.location.reload()}catch{t()}},e.readAsText(n)}},e.click()},!1]})]})}function Qe(){let[e,t]=(0,H.useState)(null);return(0,H.useEffect)(()=>{let e=e=>{e.preventDefault(),t(e)};return window.addEventListener(`beforeinstallprompt`,e),()=>{window.removeEventListener(`beforeinstallprompt`,e)}},[]),(0,q.jsxs)(L,{children:[(0,q.jsx)(k,{id:`pwa`,event:[`click`,async()=>{if(!e){T.toaster.showResult(!1);return}try{await e.prompt();let{outcome:n}=await e.userChoice;T.toaster.showResult(n===`accepted`),t(null)}catch{T.toaster.showResult(!1)}},!1]}),(0,q.jsx)(a,{id:`pwa`})]})}function $e(){let[e,n]=(0,H.useState)(`*`),r=e=>{n(e)},[i,o]=T.hooks.useConfirm(t=>{if(t){let e=B(`reset-alert`);T.toaster.showTip(e.information.explanation,e)}else{if(e!=`DELETE`&&!F.check.debugMode())return;ge.player.disableUnloadAndReset(),le.userData.handle.resetLocal(),T.toaster.hideAll(!0),window.location.hash=``,window.location.reload()}}),s=F.check.debugMode();return(0,q.jsxs)(L,{children:[(0,q.jsx)(k,{id:`reset-game`,event:[`click`,()=>o(),i]}),(0,q.jsx)(t,{id:`reset-really`,value:e,changeHandler:r,placeholder:`*`}),(0,q.jsx)(a,{id:`reset-game`}),s&&(0,q.jsx)(a,{id:`reset-debug-mode`})]})}function et(){let e=T.hooks.usePath(1);return F.check.debugMode()?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(C,{path:e,background:`world`,children:[(0,q.jsx)(A,{}),(0,q.jsx)(tt,{}),(0,q.jsx)(A,{}),(0,q.jsx)(nt,{})]}),(0,q.jsx)(o,{children:T.hooks.useDefaultRoutes(e)})]}):(0,q.jsx)(q.Fragment,{})}function tt(){let[e,t]=(0,H.useState)(D.config.acceleration.multiplier),[n,r]=(0,H.useState)(D.config.acceleration.active);return(0,q.jsxs)(L,{children:[(0,q.jsx)(E,{title:[`preset`,`acceleration`],explanation:[`preset`,n?`yes`:`no`],event:[`click`,()=>{let e=D.config.acceleration.active;D.config.acceleration.active=!e,r(!e)}],text:`title`,inlineIcon:`explanation`,flagColor:n}),(0,q.jsx)(i,{id:`multiplier`,value:e,changeHandler:e=>{t(e),D.config.acceleration.multiplier=e},placeholder:`-`,max:100,min:1})]})}function nt(){let[e,n]=(0,H.useState)(`category`),r=()=>{n(P[(P.indexOf(e)+1)%P.length])},[o,s]=(0,H.useState)(``),c=e=>{s(e)},[l,u]=(0,H.useState)(`plus`),d=()=>{u(e=>e===`plus`?`minus`:`plus`)},[f,p]=(0,H.useState)(1),m=e=>{p(e)},[h,g]=T.hooks.useConfirm(t=>!t&&F.trade.adjust(e,o,l,f));return(0,q.jsxs)(L,{children:[(0,q.jsx)(E,{title:[`preset`,`adjustment`],text:`title`}),(0,q.jsx)(E,{title:[`preset`,`adjustment-type`],explanation:[`preset`,`adjustment-${e}`],inlineIcon:[`preset`,e],event:[`click`,r],bold:!0,text:`explanation`}),(0,q.jsx)(t,{id:`adjustment-id`,value:o,changeHandler:c,placeholder:`all`}),(0,q.jsx)(a,{id:`adjustment-id`}),(0,q.jsx)(E,{title:[`preset`,`adjustment-sign`],explanation:[`preset`,`adjustment-${l}`],inlineIcon:`explanation`,event:[`click`,d],bold:!0,text:`explanation`}),(0,q.jsx)(i,{id:`adjustment-count`,value:f,changeHandler:m,placeholder:`1`,max:1e3}),(0,q.jsx)(a,{id:`adjustment-count`}),(0,q.jsx)(k,{id:`adjustment-adjust`,event:[`click`,()=>g(),h]})]})}function rt(){let e=F.check.debugMode(),t=T.hooks.usePath(0),n=T.component.sortGroup(F.check.visibleList(I(!0).categories),e=>e.world.group);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(C,{path:t,background:`world`,children:[(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(s,{text:`character`,path:t,children:[(0,q.jsx)(g,{href:`/activity.character`,children:(0,q.jsx)(m,{title:[`preset`,`activity`],bold:!0})}),(0,q.jsx)(g,{href:`/inventory.character`,children:(0,q.jsx)(m,{title:[`preset`,`inventory`],bold:!0})}),(0,q.jsx)(g,{href:`/status.character`,children:(0,q.jsx)(m,{title:[`preset`,`status`],bold:!0})}),F.check.visibleList(xe).length>0&&(0,q.jsx)(g,{href:`/missions.character`,children:(0,q.jsx)(m,{title:[`preset`,`missions`],bold:!0})})]})}),(0,q.jsx)(q.Fragment,{children:n.map(e=>(0,q.jsx)(y,{categories:e,path:t},e[0].world.group))}),(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(s,{text:`world`,path:t,children:[(0,q.jsx)(g,{href:`/overview.world`,children:(0,q.jsx)(m,{title:[`preset`,`overview`],bold:!0})}),(0,q.jsx)(g,{href:`/general.world`,children:(0,q.jsx)(m,{title:[`preset`,`general`],bold:!0})}),(0,q.jsx)(g,{href:`/statistics.world`,children:(0,q.jsx)(m,{title:[`preset`,`statistics`],bold:!0})}),(0,q.jsx)(g,{href:`/config.world`,children:(0,q.jsx)(m,{title:[`preset`,`config`],bold:!0})}),e&&(0,q.jsx)(g,{href:`/debug.world`,children:(0,q.jsx)(m,{title:[`preset`,`debug`],bold:!0})})]})})]}),(0,q.jsxs)(o,{children:[(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(b,{path:`/activity.character/*?`,children:(0,q.jsx)(Ve,{})}),(0,q.jsx)(b,{path:`/inventory.character/*?`,children:(0,q.jsx)(Ue,{})}),(0,q.jsx)(b,{path:`/status.character/*?`,children:(0,q.jsx)(We,{})}),(0,q.jsx)(b,{path:`/missions.character/*?`,children:(0,q.jsx)(Be,{})})]}),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(b,{path:`/overview.world/*?`,children:(0,q.jsx)(Ie,{})}),(0,q.jsx)(b,{path:`/general.world/*?`,children:(0,q.jsx)(Fe,{})}),(0,q.jsx)(b,{path:`/statistics.world/*?`,children:(0,q.jsx)(ze,{})}),(0,q.jsx)(b,{path:`/config.world/*?`,children:(0,q.jsx)(Ge,{})}),(0,q.jsx)(b,{path:`/debug.world/*?`,children:(0,q.jsx)(et,{})})]}),T.hooks.useDefaultRoutes(t)]})]})}function it({children:e}){let t=at();return u(`span`,{id:`grider`,css:[t.base,t.scrollbarStyle],children:e})}function at(){return{base:n`
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
		`,scrollbarStyle:n`
			/* Firefox対応: auto（標準）スタイル、色はbarColorと透明トラック */
			scrollbar-width: auto;
			scrollbar-color: ${S.colors.bar} transparent;

			/* Chrome, Safari, Edge対応 */
			::-webkit-scrollbar-thumb {
				background: ${S.colors.bar};
			}
			::-webkit-scrollbar-thumb:hover {
				background: ${S.colors.actived};
			}
		`}}var ot={duration:300,snappingDown:!0};function st(){let e=(0,H.useRef)(null),t=T.hooks.useSmoothRef(()=>{let e=j.progress.getSingletonProgressing();return e?se(O(e.general.id).categoryId).user.level%1:0},ot);return T.hooks.useUpdate(()=>{let n=e.current;if(!n)return;let r=j.progress.getSingletonProgressing(),i=M.primitive.clamp(t.current,0,1);n.style.setProperty(`--header-percentage`,`${i*100}%`),n.style.setProperty(`--header-color`,r?T.style.geFadedColor(O(r.general.id).information.color):`transparent`)}),u(`div`,{css:ct(),ref:e})}function ct(){return n`
		position: fixed;
		top: ${S.constants.barHeight}px;
		left: 0;
		width: 100svw;
		height: ${S.constants.headerLineHeight}px;
		--header-percentage: 0%;
		--header-color: transparent;
		background: linear-gradient(to right, var(--header-color) var(--header-percentage), transparent var(--header-percentage));
		z-index: 20;
	`}var lt={},ut={duration:300};function dt(){let[e,t]=(0,H.useState)(()=>T.scroll.getScrolledPosition().x>0),[n,r]=(0,H.useState)(()=>j.progress.getSingletonProgressing()?.general.id),i=(0,H.useRef)(null),[,a]=T.hooks.useLocation(),o=()=>{T.scroll.slideTop()},s=()=>{let e=T.component.getSingletonProgressingPath();e&&(a(e),T.scroll.slideBottom())},c=T.hooks.useSmoothRef(()=>{let e=j.progress.getSingletonProgressing();return e?j.progress.caluculateBarProgresing(e):0},()=>j.progress.getSingletonProgressing()?.combat?ut:lt);return T.hooks.useUpdate(()=>{r(j.progress.getSingletonProgressing()?.general.id),t(T.scroll.getScrolledPosition().x>0);let e=i.current;e&&(e.style.transform=`scaleX(${M.primitive.clamp(c.current,0,1)})`)}),v(`span`,{css:[ft(8).base],children:[u(f,{height:8,fillRef:i,color:n?T.style.getActionProgressColor(n):void 0}),e&&u(d,{id:`go-top`,leftern:!0,handler:o,size:26}),n&&u(d,{id:n,leftern:!1,handler:s,size:26})]})}function ft(e){return{base:n`
			/* display: flex; */
			position: relative;
			width: 100svw;
			height: ${e}px;
			/* bottom: 0; */
			z-index: 20;
			background-color: transparent;
		`}}var J,pt,mt=2/3,Y=.15;function ht(){let[e]=T.hooks.useLocation();return J?null:(T.component.setBackgroundHandler(gt),gt(_t(e)),null)}function gt(e){if(vt(J,e))return;J=e;let t=(e==`world`?``:se(e[1]).world.background)||N.basic.design.background||``;if(pt===t)return;pt=t;let n=S.colors.background,{h:r,s:i,l:a}=_(n).hsl().object(),o=yt(r*(1-Y),i*(1-Y),a*(1-Y)),s=yt(r*1.15,i*1.15,a*1.15),c=e=>`linear-gradient(
		to top,
		${_(o).alpha(e).rgb().string()},
		${_(n).alpha(e).rgb().string()},
		${_(s).alpha(e).rgb().string()}
	)`;window.document.body.style.background=t?`${c(mt)}, url(${t}) center / cover no-repeat fixed`:c(1),window.document.body.style.backgroundColor=S.colors.bar}function _t(e){let t=e.split(`/`).reverse();for(let e of t){let[t,n]=e.split(`.`);if(!(!t||!n)){if(n==`category`)return[`category`,t];if(n==`action`)return[`category`,O(t).categoryId];if(n==`item`){let e=w(t).categoryId;return e?[`category`,e]:`world`}}}return`world`}function vt(e,t){return e?e==`world`?t==`world`:t==`world`?!1:e[1]==t[1]:!1}function yt(e,t,n){return`hsl(${e}, ${t}%, ${n}%)`}function bt(){let[t,n]=(0,H.useState)(!1),r=(0,H.useRef)(!1);(0,H.useEffect)(()=>{(async()=>{if(!r.current){r.current=!0;try{await ne(),ye(),re(),j.event.check(),n(!0)}catch(e){console.error(`Initialization error:`,e)}}})()},[]);let[i,a]=T.hooks.useLocation();(0,H.useEffect)(()=>{if(!t)return;let e=he(i);e&&a(e)},[t,i,a]),(0,H.useEffect)(()=>{t&&(_e(),ae())},[t]);let o=()=>{if(F.check.debugMode())return{background:`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,color:`white`};let e=document.querySelector(`meta[name="bar-color"]`),t=document.querySelector(`meta[name="text-color"]`);return{background:e?.content||`#667eea`,color:t?.content||`white`}};if(!t){let e=o();return v(`div`,{css:Kt(e.background,e.color),children:[u(Pe,{color:e.color,size:80,cssOverride:{display:`block`}}),u(`h2`,{children:`Loading Game...`}),u(`p`,{children:`Initializing world data and assets`})]})}return u(e,{children:u(xt,{})})}function xt(){return ie(),v(l,{children:[u(`div`,{style:{display:fe?`block`:`none`},children:`This game was interrupted because it was opened in another tab.`}),v(`div`,{style:{display:fe?`none`:`block`},children:[u(de,{styles:Wt}),u(c,{base:`/`,hook:De,children:v(`div`,{css:Gt,children:[u(st,{}),u(it,{children:u(rt,{})}),u(dt,{})]})}),u(St,{}),u(me,{}),u(ht,{})]})]})}function St(){let{toasts:e,handlers:t}=x(Lt),n=new Map;for(let t of e){let e=t.position||Tt,r=n.get(e);r?r.push(t):n.set(e,[t])}let r=n.has(`bottom-left`)||n.has(`bottom-right`);return u(`div`,{className:Z,style:Et,children:[...n].map(([e,n])=>u(`div`,{style:jt(e,r&&e==`bottom-center`),children:(e.startsWith(`top`)?n:[...n].reverse()).map(n=>u(Ct,{item:n,position:e,onHeightUpdate:t.updateHeight},n.id))},e))})}function Ct({item:e,position:t,onHeightUpdate:n}){return u(`div`,{ref:(0,H.useCallback)(t=>{t&&n(e.id,t.getBoundingClientRect().height)},[e.id,n]),style:e.className==T.toaster.inlineClassName?Ot:kt(t),children:u(r,{toast:e,style:Ut(e)})})}var X={fontSize:`12px`,padding:`5px 7px`},wt=5,Z=`playerToaster`,Tt=`top-center`,Q=16,Et={position:`fixed`,zIndex:9999,top:Q,left:Q,right:Q,bottom:Q,pointerEvents:`none`},Dt=100,Ot={display:`flex`};function kt(e){return{display:`flex`,flexBasis:`100%`,justifyContent:At(e)}}function At(e){return e.endsWith(`left`)?`flex-start`:e.endsWith(`right`)?`flex-end`:`center`}function jt(e,t){return{position:`absolute`,left:0,right:0,...e.startsWith(`top`)?{top:0}:{bottom:0},display:`flex`,flexFlow:`row wrap`,alignItems:`center`,justifyContent:At(e),gap:`${wt}px`,...t?{paddingLeft:`${Dt}px`,paddingRight:`${Dt}px`}:{}}}var Mt=`playerToastFadeIn`,Nt=`playerToastFadeOut`,Pt=`playerToastPopInTop`,Ft=`playerToastPopInBottom`,It=300,$=`${It}ms`,Lt={removeDelay:It},Rt=3e3,zt={...X,pointerEvents:`auto`,animation:`${Mt} ${$} ease-in-out forwards`},Bt={...X,pointerEvents:`none`,animation:`${Nt} ${$} ease-in-out forwards`},Vt={...X,pointerEvents:`auto`,animation:`${Pt} ${$} ease-in-out forwards`},Ht={...X,pointerEvents:`auto`,animation:`${Ft} ${$} ease-in-out forwards`};function Ut(e){return e.visible?(e.duration??0)<Rt?zt:(e.position??`top-center`).startsWith(`top`)?Vt:Ht:Bt}var Wt=n`
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

	@keyframes ${Mt} {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes ${Nt} {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	/* 画面上側に出るトースト（showLeveled / showAchieved）の登場。上の画面外から降りてくる */
	@keyframes ${Pt} {
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
	@keyframes ${Ft} {
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
	.${Z} > div > div > div > div:last-child {
		margin: 3px 7px;
	}

	/* 本文以外の子＝showResult の成功/失敗アイコン。ライブラリ内で 20px 固定なので、
	   他のアイコンに合わせて縮小する */
	.${Z} > div > div > div > div:not(:last-child) {
		transform: scale(0.67);
	}
`,Gt=n`
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
`,Kt=(e,t)=>n`
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
`;console.log(`🎮 Player Build Version: 0.0.1536`),console.log(`📅 Player Build Date: ${new Date(`2026-08-09T06:47:16.068Z`).toLocaleString(`ja-JP`)}`),Se.createRoot(document.getElementById(`root`)).render((0,q.jsx)(H.StrictMode,{children:(0,q.jsx)(bt,{})}));
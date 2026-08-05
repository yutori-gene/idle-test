import{A as e,At as t,B as n,C as r,D as i,Dt as a,E as o,Et as s,I as c,L as l,M as u,Mt as d,N as f,O as p,Ot as m,P as h,Q as g,R as _,Rt as v,S as y,T as ee,Tt as te,X as b,Z as ne,_ as x,_t as re,a as S,b as C,bt as w,c as ie,d as ae,et as T,f as oe,ft as E,g as se,gt as D,h as ce,ht as O,i as le,j as k,k as A,kt as j,l as ue,lt as M,m as de,mt as N,n as P,o as F,ot as fe,p as pe,pt as me,r as he,s as ge,t as I,u as _e,ut as L,v as ve,vt as ye,w as R,wt as z,x as B,y as V,yt as H,z as be}from"./control-BZ1UIqQU.js";import"./modulepreload-polyfill-Dezn_h7o.js";var U=v(d()),xe=v(t(),1),W={v:[]},Se=()=>W.v.forEach(e=>e()),Ce=e=>(W.v.push(e)===1&&addEventListener(`hashchange`,Se),()=>{W.v=W.v.filter(t=>t!==e),W.v.length||removeEventListener(`hashchange`,Se)}),we=()=>`/`+location.hash.replace(/^#?\/?/,``),Te=(e,{state:t=null,replace:n=!1}={})=>{let r=location.href,[i,a]=e.replace(/^#?\/?/,``).split(`?`),o=new URL(location.href);o.hash=`/${i}`,a&&(o.search=a);let s=o.href;n?history.replaceState(t,``,s):history.pushState(t,``,s);let c=typeof HashChangeEvent<`u`?new HashChangeEvent(`hashchange`,{oldURL:r,newURL:s}):new Event(`hashchange`,{detail:{oldURL:r,newURL:s}});dispatchEvent(c)},Ee=({ssrPath:e=`/`}={})=>[(0,a.useSyncExternalStore)(Ce,we,()=>e),Te];Ee.hrefs=e=>`#`+e;var G;(function(e){e.maroon=`#800000`,e.red=`#FF0000`,e.orange=`#FFA500`,e.yellow=`#FFFF00`,e.olive=`#808000`,e.green=`#008000`,e.purple=`#800080`,e.fuchsia=`#FF00FF`,e.lime=`#00FF00`,e.teal=`#008080`,e.aqua=`#00FFFF`,e.blue=`#0000FF`,e.navy=`#000080`,e.black=`#000000`,e.gray=`#808080`,e.silver=`#C0C0C0`,e.white=`#FFFFFF`})(G||={});var De=function(e,t){if(e.includes(`/`))return e.replace(`rgb(`,`rgba(`);var n=e.substring(e.startsWith(`rgba(`)?5:4,e.length-1).trim(),r=n.split(`,`);return r.length===4?e.replace(`rgb(`,`rgba(`):r.length===3?`rgba(${n}, ${t})`:`rgba(${n} / ${t})`},Oe=function(e,t){if(e.startsWith(`rgb`))return De(e,t);if(Object.keys(G).includes(e)&&(e=G[e]),e[0]===`#`&&(e=e.slice(1)),e.length===3){var n=``;e.split(``).forEach(function(e){n+=e,n+=e}),e=n}return`rgba(${(e.match(/.{2}/g)||[]).map(function(e){return parseInt(e,16)}).join(`, `)}, ${t})`},ke={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function K(e){if(typeof e==`number`)return{value:e,unit:`px`};var t,n=(e.match(/^[0-9.]*/)||``).toString();t=n.includes(`.`)?parseFloat(n):parseInt(n,10);var r=(e.match(/[^0-9]*$/)||``).toString();return ke[r]?{value:t,unit:r}:(console.warn(`React Spinners: ${e} is not a valid css value. Defaulting to ${t}px.`),{value:t,unit:`px`})}function q(e){var t=K(e);return`${t.value}${t.unit}`}var Ae=function(e,t,n){var r=`react-spinners-${e}-${n}`;if(typeof window>`u`||!window.document)return r;var i=document.createElement(`style`);document.head.appendChild(i);var a=i.sheet,o=`
    @keyframes ${r} {
      ${t}
    }
  `;return a&&a.insertRule(o,0),r},J=function(){return J=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},J.apply(this,arguments)},je=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Me(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,i=r===void 0?`#000000`:r,a=e.speedMultiplier,o=a===void 0?1:a,s=e.cssOverride,c=s===void 0?{}:s,l=e.size,u=l===void 0?50:l,d=je(e,[`loading`,`color`,`speedMultiplier`,`cssOverride`,`size`]),f=K(u),p=f.value,m=f.unit,h=J({display:`inherit`,position:`relative`,width:q(u),height:q(u),transform:`rotate(165deg)`},c),g=p/5,_=(p-g)/2,v=_-g,y=Oe(i,.75),ee=Ae(`HashLoader`,`0% {width: ${g}px; box-shadow: ${_}px ${-v}px ${y}, ${-_}px ${v}px ${y}}
    35% {width: ${q(u)}; box-shadow: 0 ${-v}px ${y}, 0 ${v}px ${y}}
    70% {width: ${g}px; box-shadow: ${-_}px ${-v}px ${y}, ${_}px ${v}px ${y}}
    100% {box-shadow: ${_}px ${-v}px ${y}, ${-_}px ${v}px ${y}}`,`before`),te=Ae(`HashLoader`,`0% {height: ${g}px; box-shadow: ${v}px ${_}px ${i}, ${-v}px ${-_}px ${i}}
    35% {height: ${q(u)}; box-shadow: ${v}px 0 ${i}, ${-v}px 0 ${i}}
    70% {height: ${g}px; box-shadow: ${v}px ${-_}px ${i}, ${-v}px ${_}px ${i}}
    100% {box-shadow: ${v}px ${_}px ${i}, ${-v}px ${-_}px ${i}}`,`after`),b=function(e){return{position:`absolute`,top:`50%`,left:`50%`,display:`block`,width:`${p/5}${m}`,height:`${p/5}${m}`,borderRadius:`${p/10}${m}`,transform:`translate(-50%, -50%)`,animationFillMode:`none`,animation:`${e===1?ee:te} ${2/o}s infinite`}};return n?U.createElement(`span`,J({style:h},d),U.createElement(`span`,{style:b(1)}),U.createElement(`span`,{style:b(2)})):null}var Y=v(g());function Ne(){let e=L.basic.general,t=S.hooks.usePath(1);return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(x,{path:t,background:`world`,children:(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(A,{}),(0,Y.jsx)(C,{title:[`preset`,`default-language`],explanation:[`text`,S.component.getLanguageLabel()],text:[`preset`,I.check.enableChangeLanguage()?`language-change-enable-general`:`language-change-unenable`]}),(0,Y.jsx)(p,{title:[`preset`,`max-category-level`],explanation:[`text`,F.primitive.toLevel(e.maxCategoryLevels)],event:`hint`}),(0,Y.jsx)(p,{title:[`preset`,`level-common-ratio`],explanation:[`text`,e.levelCommonRatio.toString()],event:`hint`})]})}),(0,Y.jsx)(s,{children:S.hooks.useDefaultRoutes(t)})]})}function Pe(){let e=L,t=e.basic.overview,n=S.hooks.usePath(1),r=t.information,i=I.check.debugMode();return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(x,{path:n,background:`world`,children:[(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`world`,path:n,children:[(0,Y.jsx)(V,{base:r,color:t.information.color}),(0,Y.jsx)(p,{title:[`preset`,`version`],explanation:[`text`,t.version.toString()]}),(0,Y.jsx)(p,{title:[`preset`,`updated`],explanation:[`text`,e.basic.development.timestamp.published]}),(0,Y.jsx)(p,{title:[`preset`,`author`],explanation:[`text`,t.author],event:`hint`}),t.homepage&&(0,Y.jsx)(p,{title:[`preset`,`homepage`],explanation:[`url`,t.homepage],event:`hint`}),(0,Y.jsx)(p,{title:[`preset`,`estimated-playing-time`],explanation:[`text`,`${t.estimatedPlayingTime.value} ${D(t.estimatedPlayingTime.unit).information.name}`],event:`hint`})]})}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`console`,path:n,children:[(0,Y.jsx)(V,{base:D(`console`).information}),(0,Y.jsx)(p,{title:[`preset`,`version`],explanation:[`text`,`0.0.1519`]}),(0,Y.jsx)(p,{title:[`preset`,`updated`],explanation:[`text`,Ie(`2026-08-05T09:09:17.528Z`)]}),(0,Y.jsx)(p,{title:[`preset`,`author`],explanation:[`text`,`Yutori`]}),(0,Y.jsx)(p,{title:[`preset`,`homepage`],explanation:[`url`,`https://idle.yu-to-ri.net/document/index.html`]}),(0,Y.jsx)(Fe,{})]})}),!i&&(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`iconify`,path:n,children:[(0,Y.jsx)(V,{base:D(`iconify`).information}),Object.entries(re).map(([e,t])=>(0,Y.jsx)(ve,{summary:t},e))]})})]}),(0,Y.jsx)(s,{children:S.hooks.useDefaultRoutes(n)})]})}function Fe(){let[e,t]=S.hooks.useConfirm(e=>{e||(S.viewport.normalize(),window.location.hash=``,requestAnimationFrame(()=>window.location.reload()))});return(0,Y.jsxs)(R,{children:[(0,Y.jsx)(k,{id:`force-restart`,event:[`click`,()=>t(),e]}),(0,Y.jsx)(i,{id:`force-restart`})]})}function Ie(e){let t=new Date(e);return`${t.getFullYear()}/${String(t.getMonth()+1).padStart(2,`0`)}/${String(t.getDate()).padStart(2,`0`)} ${String(t.getHours()).padStart(2,`0`)}:${String(t.getMinutes()).padStart(2,`0`)}:${String(t.getSeconds()).padStart(2,`0`)}`}function Le(){let e=S.hooks.usePath(1),t=P.progress.getCoins(),n=(Date.now()-M.playing.time.initialized)/1e3,r=I.check.visibleList(O(!0).items).reduce((e,t)=>(e.now+=t.user.countNow,e.record+=t.user.countRecord,e),{now:0,record:0}),i=F.primitive.toLevel(I.check.visibleList(O(!0).categories).reduce((e,t)=>t.world.numeric?e+Math.floor(t.user.level):e,0)),a=I.check.visibleList(O(!0).actions).reduce((e,t)=>(e+=t.user.count,e),0);return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(x,{path:e,background:`world`,children:[(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsx)(o,{text:`coin`,path:e,children:t.map(e=>(0,Y.jsxs)(U.Fragment,{children:[(0,Y.jsx)(p,{title:[`basic`,e],explanation:[`text`,e.user.countNow.toString()]}),(0,Y.jsx)(p,{title:[`preset`,`amount-earned`],explanation:[`text`,e.user.countRecord.toString()]})]},e.id))})}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsx)(o,{text:`time`,path:e,children:(0,Y.jsx)(p,{title:[`preset`,`playing-time`],explanation:[`seconds`,n]})})}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`item`,path:e,children:[(0,Y.jsx)(p,{title:[`preset`,`count-now`],explanation:[`text`,r.now.toString()]}),(0,Y.jsx)(p,{title:[`preset`,`count-gained`],explanation:[`text`,r.record.toString()]})]})}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`action`,path:e,children:[(0,Y.jsx)(p,{title:[`preset`,`total-level`],explanation:[`text`,i]}),(0,Y.jsx)(p,{title:[`preset`,`count-actioned`],explanation:[`text`,a.toString()]})]})})]}),(0,Y.jsx)(s,{children:S.hooks.useDefaultRoutes(e)})]})}function Re(){let e=S.hooks.usePath(1),t=e=>S.component.sortGroup(e,e=>e.world.group).flat().map(e=>{let t=P.event.getArchived(e).flag??!1;return{basic:e,explanation:``,explanationIcon:D(t?`yes`:`no`).information,flagColor:t,link:`${e.id}.event`,ribbon:P.event.checkUnclaimed(e)}}),n=t(I.check.visibleList(ye).filter(e=>e.categoryId===``)),r=[];for(let e of I.check.visibleList(O(!0).categories)){let n=I.check.visibleList(e.tasks);n.length!=0&&r.push({category:e,indexes:t(n)})}return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(x,{path:e,background:`world`,children:[n.length>0&&(0,Y.jsx)(o,{text:`missions`,path:e,children:(0,Y.jsx)(B,{indexes:n,layerDepth:1})}),r.map(e=>(0,Y.jsx)(B,{categoryId:e.category.id,indexes:e.indexes,layerDepth:1},e.category.id))]}),(0,Y.jsx)(s,{children:S.hooks.useDefaultRoutes(e)})]})}function ze(){let e=S.hooks.usePath(1),t=[];for(let e of I.check.visibleList(O(!0).categories)){let n=I.check.visibleList(e.actions);if(n.length==0)continue;let r=e.user.progressing?E(e.user.progressing.general.id):void 0,i=n.map(e=>({basic:e,explanation:F.primitive.toLevel(e.world.level),flagColor:I.check.matchedLevel(e),link:`${e.id}.action`,ribbon:P.progress.checkSingleCompleted(void 0,e.id)||e.id===r?.id})),a=P.progress.checkSingleCompleted(e.id);t.push({category:e,actions:i,progress:r,ribbonCategory:a})}let n;try{n=N(L.basic.general.queue.information.id)}catch{n=null}let r=P.progress.getSingletonProgressing(),i=r?E(r.general.id):void 0;return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(x,{path:e,background:`world`,children:[n&&n.user&&I.trade.getMaxQueue()>=1&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(A,{}),(0,Y.jsx)(h,{href:`${e.path}/${i?.id}.action`,active:!!i,children:(0,Y.jsx)(p,{title:[`basic`,n],explanation:[`text`,`${I.trade.getWaitingCount()} / ${I.trade.getMaxQueue()}`],color:n.information.color,flagColor:I.trade.hasQueueRoom()})})]}),(0,Y.jsx)(Y.Fragment,{children:t.map(t=>(0,Y.jsx)(B,{categoryId:t.category.id,indexes:t.actions,layerDepth:1,event:[`hold`,P.progress.toggleAct],children:t.progress&&(0,Y.jsxs)(h,{href:`${e.path}/${t.progress.id}.action`,children:[(0,Y.jsx)(p,{title:[`basic`,t.progress],ribbon:t.ribbonCategory,event:[`hold`,P.progress.toggleAct]}),(0,Y.jsx)(ee,{categoryId:t.category.id,type:`progress`})]})},t.category.id))})]}),(0,Y.jsx)(s,{children:S.hooks.useDefaultRoutes(e)})]})}function Be(){let e=S.hooks.usePath(2),[t,n]=U.useState(new globalThis.Set),r=O(!0).items.filter(e=>e.user.countNow>=1&&e.world.sellingValue>0&&I.check.locked(e)===`released`),i=e=>{n(t=>{let n=new globalThis.Set(t);return n.has(e.id)?n.delete(e.id):n.add(e.id),n})},a=r.map(e=>{let n=e.world.sellingValue*e.user.countNow;return{basic:e,explanation:F.primitive.toStandardCount(n),flagColor:!0,link:void 0,ribbon:t.has(e.id)}}),c=r.filter(e=>t.has(e.id)),l=c.length,u=c.reduce((e,t)=>e+t.user.countNow,0),d=new globalThis.Map;for(let e of c){let t=I.trade.resolveCoin(e),n=e.world.sellingValue*e.user.countNow,r=d.get(t.id);r?r.value+=n:d.set(t.id,{coin:t,value:n})}let f=()=>{let e=[];for(let t of c){let n=t.world.sellingValue,r=t.user.countNow;if(r<=0||n===0)continue;let i=I.trade.resolveCoin(t),a=I.trade.addAcquisitions([{id:i.id,count:n,chance:1,type:`item`}],r),o=I.trade.reduceRequirements([{type:`item`,id:t.id,count:1,chance:1,equipment:!1}],r);e=[...e,...a,...o]}P.progress.unequipZeroItems(),S.component.forceUpdate(),e.length>0&&S.toaster.showTrade(I.trade.summarizeTrades(e)),n(new globalThis.Set)},[m,h]=S.hooks.useConfirm(e=>!e&&f());return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(x,{path:e,children:[(0,Y.jsx)(o,{text:`items`,path:e,children:(0,Y.jsx)(B,{indexes:a,layerDepth:2,event:[`click`,i]})}),(0,Y.jsxs)(o,{text:`selected`,path:e,children:[(0,Y.jsx)(p,{title:[`preset`,`kind`],explanation:[`text`,l.toString()]}),(0,Y.jsx)(p,{title:[`preset`,`count`],explanation:[`text`,u.toString()]}),[...d.values()].map(({coin:e,value:t})=>(0,Y.jsx)(p,{title:[`preset`,`value`],explanation:[`text`,F.primitive.toStandardCount(t)],inlineIcon:[`information`,e.information],flagColor:!0},e.id)),(0,Y.jsx)(k,{id:`sell`,event:[`click`,()=>h(),m],active:l>0})]})]}),(0,Y.jsx)(s,{children:S.hooks.useDefaultRoutes(e)})]})}function Ve(){let e=S.hooks.usePath(1),t=[];for(let e of I.check.visibleList(O(!0).categories)){let n=I.check.visibleList(e.items);if(n.length==0)continue;let r=S.component.sortGroup(n,e=>e.world.group).map(t=>{let n=t[0].world.group,r=e.world.equipmentGroups.includes(n),i=e.user.equipments.find(e=>t.some(t=>t.id===e));return{nodes:t.map(e=>({basic:e,explanation:e.user.countNow.toString(),link:`${e.id}.item`,ribbon:i===e.id})),groupId:n,equipmentable:r,equippingId:i}});t.push({category:e,groups:r})}let n=P.progress.getCoins(),r;try{let e=L.basic.general.capacity.information.id;r=N(e)}catch{r=null}let i;try{let e=L.basic.general.queue.information.id;i=N(e)}catch{i=null}return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(x,{path:e,background:`world`,children:[(0,Y.jsx)(A,{}),n.map((t,n)=>(n==0||t.user.countRecord>0)&&(0,Y.jsx)(h,{href:`${e.path}/${t.id}.item`,children:(0,Y.jsx)(p,{title:[`basic`,t],explanation:[`text`,t.user.countNow.toString()],color:t.information.color})},t.id)),r&&r.user&&I.trade.getMaxCapacity()>0&&(0,Y.jsx)(h,{href:`${e.path}/${r.id}.item`,children:(0,Y.jsx)(p,{title:[`basic`,r],explanation:[`text`,`${I.trade.getCurrentItemTypesCount()} / ${I.trade.getMaxCapacity()}`],color:r.information.color,flagColor:I.trade.hasCapacityRoom()})}),i&&i.user&&(0,Y.jsx)(h,{href:`${e.path}/${i.id}.item`,children:(0,Y.jsx)(p,{title:[`basic`,i],explanation:[`text`,`${I.trade.getWaitingCount()} / ${I.trade.getMaxQueue()}`],color:i.information.color,flagColor:I.trade.hasQueueRoom()})}),(0,Y.jsx)(h,{href:`${e.path}/selling.character`,children:(0,Y.jsx)(p,{title:[`preset`,`selling`]})}),t.map(t=>(0,Y.jsx)(o,{text:t.category,path:e,children:t.groups.map((n,r)=>(0,Y.jsx)(B,{indexes:n.nodes,layerDepth:1,event:[`hold`,P.progress.toggleEquip],children:F.primitive.switches([n.equippingId!==void 0,n.equipmentable,!0],[n.equippingId&&(0,Y.jsx)(h,{href:`${e.path}/${n.equippingId}.item`,children:(0,Y.jsx)(p,{title:[`type`,n.equippingId,`item`],explanation:[`preset`,`equipping`],inlineIcon:`explanation`,event:[`hold`,P.progress.toggleEquip],flagColor:!0})}),(0,Y.jsx)(p,{title:[`preset`,`equipment`],explanation:[`preset`,`unequipping`],inlineIcon:`explanation`,flagColor:!1}),(0,Y.jsx)(Y.Fragment,{})])},`${t.category.id}-${r}`))},t.category.id))]}),(0,Y.jsxs)(s,{children:[(0,Y.jsx)(z,{path:`${e.path}/selling.character/*?`,children:(0,Y.jsx)(Be,{})}),S.hooks.useDefaultRoutes(e)]})]})}function He(){let e=S.hooks.usePath(1),t=[];for(let e of I.check.visibleList(O(!0).categories)){let n=e.summerizedProperties;if(n.size==0)continue;let r=[];for(let e of n.values()){if(e.value==0)continue;let t={basic:D(e.id),explanation:F.primitive.getWithSign(e.value),flagColor:S.style.getSignFlag(e.value),link:`${e.categoryId}_${e.id}.correction`,ribbon:!1};r.push(t)}r.sort((e,t)=>fe.indexOf(e.basic.id)-fe.indexOf(t.basic.id)),t.push({category:e,indexes:r})}return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(x,{path:e,background:`world`,children:t.length>0?(0,Y.jsx)(Y.Fragment,{children:t.map(e=>(0,Y.jsx)(B,{categoryId:e.category.id,indexes:e.indexes,layerDepth:1},e.category.id))}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(A,{}),(0,Y.jsx)(i,{id:`no-status`})]})}),(0,Y.jsxs)(s,{children:[(0,Y.jsx)(z,{path:`${e.path}/:type.correction/*?`,children:(0,Y.jsx)(se,{layerDepth:2})}),S.hooks.useDefaultRoutes(e)]})]})}function Ue(){let e=S.hooks.usePath(1),t=I.check.debugMode();return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(x,{path:e,background:`world`,children:(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(A,{}),(0,Y.jsx)(We,{path:e}),(0,Y.jsx)(A,{}),(0,Y.jsx)(Ge,{}),(0,Y.jsx)(A,{}),(0,Y.jsx)(Ke,{}),(0,Y.jsx)(A,{}),(0,Y.jsx)(qe,{}),(0,Y.jsx)(A,{}),(0,Y.jsx)(Je,{}),(0,Y.jsx)(A,{}),!t&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(Xe,{}),(0,Y.jsx)(A,{})]}),(0,Y.jsx)(Ye,{}),(0,Y.jsx)(A,{}),(0,Y.jsx)(Ze,{})]})}),(0,Y.jsxs)(s,{children:[(0,Y.jsx)(z,{path:`${e.path}/language.world/*?`,children:(0,Y.jsx)(ce,{layerDepth:2})}),S.hooks.useDefaultRoutes(e)]})]})}function We({path:e}){let t=I.check.enableChangeLanguage();return(0,Y.jsx)(h,{href:`${e.path}/language.world`,active:t,children:(0,Y.jsx)(C,{title:[`preset`,`language`],explanation:[`text`,S.component.getLanguageLabel()],text:[`preset`,t?`language-change-enable`:`language-change-unenable`],inlineIcon:[`preset`,`language-${M.config.language}`]})})}function Ge(){let[e,t]=(0,U.useState)(M.config.categoryShortcut);return(0,Y.jsx)(C,{title:[`preset`,`category-shortcut`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{M.config.categoryShortcut=!e,t(!e),S.component.forceUpdate()}],text:[`preset`,`category-shortcut`],inlineIcon:`explanation`})}function Ke(){let[e,t]=(0,U.useState)(M.config.showingHint);return(0,Y.jsx)(C,{title:[`preset`,`showing-hint`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{M.config.showingHint=!e,t(!e),S.component.forceUpdate()}],text:[`preset`,`showing-hint`],inlineIcon:`explanation`})}function qe(){let[e,t]=(0,U.useState)(M.config.showingNavigation);return(0,Y.jsx)(C,{title:[`preset`,`showing-navigation`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{M.config.showingNavigation=!e,t(!e),S.component.forceUpdate()}],text:[`preset`,`showing-navigation`],inlineIcon:`explanation`})}function Je(){let[e,t]=(0,U.useState)(M.config.performingHighly);return(0,Y.jsx)(C,{title:[`preset`,`performing-highly`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{M.config.performingHighly=!e,t(!e)}],text:[`preset`,`performing-highly`],inlineIcon:`explanation`})}function Ye(){let[,e]=S.hooks.useLocation(),t=()=>{let e=JSON.parse(JSON.stringify(M)).world,t=JSON.stringify(M,null,2),n=new Blob([t],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`),a=D(`export-game`);i.href=r,i.download=`yutori-idle-${e.id}-${e.version}.json`,i.click(),URL.revokeObjectURL(r),S.toaster.showTip(a.information.explanation,a,!1)},n=()=>{let e=D(`import-mistake`);S.toaster.showTip(e.information.explanation,e,!1)};return(0,Y.jsxs)(R,{children:[(0,Y.jsx)(k,{id:`export-game`,event:[`click`,t,!1]}),(0,Y.jsx)(k,{id:`import-game`,event:[`click`,()=>{let t=document.createElement(`input`);t.type=`file`,t.accept=`.json`,t.onchange=t=>{let r=t.target.files?.[0];if(r){let t=new FileReader;t.onload=t=>{try{let r=JSON.parse(t.target?.result);if(r.world?.id!==L.basic.overview.information.id||r.world?.version!==L.basic.overview.version){n();return}le.userData.handle.importUserData(r);let i=D(`import-game`);S.toaster.showTip(i.information.explanation,i,!1),e(`/`,{replace:!0})}catch{n()}},t.readAsText(r)}},t.click()},!1]})]})}function Xe(){let[e,t]=(0,U.useState)(null);return(0,U.useEffect)(()=>{let e=e=>{e.preventDefault(),t(e)};return window.addEventListener(`beforeinstallprompt`,e),()=>{window.removeEventListener(`beforeinstallprompt`,e)}},[]),(0,Y.jsxs)(R,{children:[(0,Y.jsx)(k,{id:`pwa`,event:[`click`,async()=>{if(!e){S.toaster.showResult(!1);return}try{await e.prompt();let{outcome:n}=await e.userChoice;S.toaster.showResult(n===`accepted`),t(null)}catch{S.toaster.showResult(!1)}},!1]}),(0,Y.jsx)(i,{id:`pwa`})]})}function Ze(){let[t,n]=S.hooks.useConfirm(e=>{if(e){let e=D(`reset-alert`);S.toaster.showTip(e.information.explanation,e)}else{if(r!=`DELETE`&&!I.check.debugMode())return;he.player.disableUnloadAndReset(),le.userData.handle.resetLocal(),S.toaster.hideAll(!0),window.location.hash=``,window.location.reload()}}),[r,a]=(0,U.useState)(`*`),o=e=>{a(e)},s=I.check.debugMode();return(0,Y.jsxs)(R,{children:[(0,Y.jsx)(k,{id:`reset-game`,event:[`click`,()=>n(),t]}),(0,Y.jsx)(e,{id:`reset-really`,value:r,changeHandler:o,placeholder:`*`}),(0,Y.jsx)(i,{id:`reset-game`}),s&&(0,Y.jsx)(i,{id:`reset-debug-mode`})]})}function Qe(){let e=S.hooks.usePath(1);return I.check.debugMode()?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(x,{path:e,background:`world`,children:[(0,Y.jsx)(A,{}),(0,Y.jsx)($e,{}),(0,Y.jsx)(A,{}),(0,Y.jsx)(et,{})]}),(0,Y.jsx)(s,{children:S.hooks.useDefaultRoutes(e)})]}):(0,Y.jsx)(Y.Fragment,{})}function $e(){let[e,t]=(0,U.useState)(M.config.acceleration.multiplier),[n,i]=(0,U.useState)(M.config.acceleration.active);return(0,Y.jsxs)(R,{children:[(0,Y.jsx)(C,{title:[`preset`,`acceleration`],explanation:[`preset`,n?`yes`:`no`],event:[`click`,()=>{let e=M.config.acceleration.active;M.config.acceleration.active=!e,i(!e)}],text:`title`,inlineIcon:`explanation`,flagColor:n}),(0,Y.jsx)(r,{id:`multiplier`,value:e,changeHandler:e=>{t(e),M.config.acceleration.multiplier=e},placeholder:`-`,max:100,min:1})]})}function et(){let[t,n]=(0,U.useState)(`category`),a=()=>{n(T[(T.indexOf(t)+1)%T.length])},[o,s]=(0,U.useState)(``),c=e=>{s(e)},[l,u]=(0,U.useState)(`plus`),d=()=>{u(e=>e===`plus`?`minus`:`plus`)},[f,p]=(0,U.useState)(1),m=e=>{p(e)},[h,g]=S.hooks.useConfirm(e=>!e&&I.trade.adjust(t,o,l,f));return(0,Y.jsxs)(R,{children:[(0,Y.jsx)(C,{title:[`preset`,`adjustment`],text:`title`}),(0,Y.jsx)(C,{title:[`preset`,`adjustment-type`],explanation:[`preset`,`adjustment-${t}`],inlineIcon:[`preset`,t],event:[`click`,a],bold:!0,text:`explanation`}),(0,Y.jsx)(e,{id:`adjustment-id`,value:o,changeHandler:c,placeholder:`all`}),(0,Y.jsx)(i,{id:`adjustment-id`}),(0,Y.jsx)(C,{title:[`preset`,`adjustment-sign`],explanation:[`preset`,`adjustment-${l}`],inlineIcon:`explanation`,event:[`click`,d],bold:!0,text:`explanation`}),(0,Y.jsx)(r,{id:`adjustment-count`,value:f,changeHandler:m,placeholder:`1`,max:1e3}),(0,Y.jsx)(i,{id:`adjustment-count`}),(0,Y.jsx)(k,{id:`adjustment-adjust`,event:[`click`,()=>g(),h]})]})}function tt(){let e=I.check.debugMode(),t=S.hooks.usePath(0),n=S.component.sortGroup(I.check.visibleList(O(!0).categories),e=>e.world.group);return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(x,{path:t,background:`world`,children:[(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`character`,path:t,children:[(0,Y.jsx)(h,{href:`/activity.character`,children:(0,Y.jsx)(p,{title:[`preset`,`activity`],bold:!0})}),(0,Y.jsx)(h,{href:`/inventory.character`,children:(0,Y.jsx)(p,{title:[`preset`,`inventory`],bold:!0})}),(0,Y.jsx)(h,{href:`/status.character`,children:(0,Y.jsx)(p,{title:[`preset`,`status`],bold:!0})}),I.check.visibleList(ye).length>0&&(0,Y.jsx)(h,{href:`/missions.character`,children:(0,Y.jsx)(p,{title:[`preset`,`missions`],bold:!0})})]})}),(0,Y.jsx)(Y.Fragment,{children:n.map(e=>(0,Y.jsx)(y,{categories:e,path:t},e[0].world.group))}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`world`,path:t,children:[(0,Y.jsx)(h,{href:`/overview.world`,children:(0,Y.jsx)(p,{title:[`preset`,`overview`],bold:!0})}),(0,Y.jsx)(h,{href:`/general.world`,children:(0,Y.jsx)(p,{title:[`preset`,`general`],bold:!0})}),(0,Y.jsx)(h,{href:`/statistics.world`,children:(0,Y.jsx)(p,{title:[`preset`,`statistics`],bold:!0})}),(0,Y.jsx)(h,{href:`/config.world`,children:(0,Y.jsx)(p,{title:[`preset`,`config`],bold:!0})}),e&&(0,Y.jsx)(h,{href:`/debug.world`,children:(0,Y.jsx)(p,{title:[`preset`,`debug`],bold:!0})})]})})]}),(0,Y.jsxs)(s,{children:[(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(z,{path:`/activity.character/*?`,children:(0,Y.jsx)(ze,{})}),(0,Y.jsx)(z,{path:`/inventory.character/*?`,children:(0,Y.jsx)(Ve,{})}),(0,Y.jsx)(z,{path:`/status.character/*?`,children:(0,Y.jsx)(He,{})}),(0,Y.jsx)(z,{path:`/missions.character/*?`,children:(0,Y.jsx)(Re,{})})]}),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(z,{path:`/overview.world/*?`,children:(0,Y.jsx)(Pe,{})}),(0,Y.jsx)(z,{path:`/general.world/*?`,children:(0,Y.jsx)(Ne,{})}),(0,Y.jsx)(z,{path:`/statistics.world/*?`,children:(0,Y.jsx)(Le,{})}),(0,Y.jsx)(z,{path:`/config.world/*?`,children:(0,Y.jsx)(Ue,{})}),(0,Y.jsx)(z,{path:`/debug.world/*?`,children:(0,Y.jsx)(Qe,{})})]}),S.hooks.useDefaultRoutes(t)]})]})}function nt({children:e}){let t=rt();return l(`span`,{id:`grider`,css:[t.base,t.scrollbarStyle],children:e})}function rt(){return{base:j`
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
		`,scrollbarStyle:j`
			/* Firefox対応: auto（標準）スタイル、色はbarColorと透明トラック */
			scrollbar-width: auto;
			scrollbar-color: ${H.colors.bar} transparent;

			/* Chrome, Safari, Edge対応 */
			::-webkit-scrollbar-thumb {
				background: ${H.colors.bar};
			}
			::-webkit-scrollbar-thumb:hover {
				background: ${H.colors.actived};
			}
		`}}var it={duration:300,snappingDown:!0};function at(){let e=(0,U.useRef)(null),t=S.hooks.useSmoothRef(()=>{let e=P.progress.getSingletonProgressing();return e?me(E(e.general.id).categoryId).user.level%1:0},it);return S.hooks.useUpdate(()=>{let n=e.current;if(!n)return;let r=P.progress.getSingletonProgressing(),i=F.primitive.clamp(t.current,0,1);n.style.setProperty(`--header-percentage`,`${i*100}%`),n.style.setProperty(`--header-color`,r?S.style.geFadedColor(E(r.general.id).information.color):`transparent`)}),l(`div`,{css:ot(),ref:e})}function ot(){return j`
		position: fixed;
		top: ${H.constants.barHeight}px;
		left: 0;
		width: 100svw;
		height: ${H.constants.headerLineHeight}px;
		--header-percentage: 0%;
		--header-color: transparent;
		background: linear-gradient(to right, var(--header-color) var(--header-percentage), transparent var(--header-percentage));
		z-index: 20;
	`}var st={},ct={duration:300};function lt(){let[e,t]=(0,U.useState)(()=>S.scroll.getScrolledPosition().x>0),[n,r]=(0,U.useState)(()=>P.progress.getSingletonProgressing()?.general.id),i=(0,U.useRef)(null),[,a]=S.hooks.useLocation(),o=()=>{S.scroll.slideTop()},s=()=>{let e=S.component.getSingletonProgressingPath();e&&(a(e),S.scroll.slideBottom())},c=S.hooks.useSmoothRef(()=>{let e=P.progress.getSingletonProgressing();return e?P.progress.caluculateBarProgresing(e):0},()=>P.progress.getSingletonProgressing()?.combat?ct:st);return S.hooks.useUpdate(()=>{r(P.progress.getSingletonProgressing()?.general.id),t(S.scroll.getScrolledPosition().x>0);let e=i.current;e&&(e.style.transform=`scaleX(${F.primitive.clamp(c.current,0,1)})`)}),_(`span`,{css:[ut(8).base],children:[l(f,{height:8,fillRef:i,color:n?S.style.getActionProgressColor(n):void 0}),e&&l(u,{id:`go-top`,leftern:!0,handler:o,size:26}),n&&l(u,{id:n,leftern:!1,handler:s,size:26})]})}function ut(e){return{base:j`
			/* display: flex; */
			position: relative;
			width: 100svw;
			height: ${e}px;
			/* bottom: 0; */
			z-index: 20;
			background-color: transparent;
		`}}var X,dt,ft=2/3,Z=.15;function pt(){let[e]=S.hooks.useLocation();return X?null:(S.component.setBackgroundHandler(mt),mt(ht(e)),null)}function mt(e){if(gt(X,e))return;X=e;let t=(e==`world`?``:me(e[1]).world.background)||L.basic.design.background||``;if(dt===t)return;dt=t;let n=H.colors.background,{h:r,s:i,l:a}=w(n).hsl().object(),o=_t(r*(1-Z),i*(1-Z),a*(1-Z)),s=_t(r*1.15,i*1.15,a*1.15),c=e=>`linear-gradient(
		to top,
		${w(o).alpha(e).rgb().string()},
		${w(n).alpha(e).rgb().string()},
		${w(s).alpha(e).rgb().string()}
	)`;window.document.body.style.background=t?`${c(ft)}, url(${t}) center / cover no-repeat fixed`:c(1),window.document.body.style.backgroundColor=H.colors.bar}function ht(e){let t=e.split(`/`).reverse();for(let e of t){let[t,n]=e.split(`.`);if(!(!t||!n)){if(n==`category`)return[`category`,t];if(n==`action`)return[`category`,E(t).categoryId];if(n==`item`){let e=N(t).categoryId;return e?[`category`,e]:`world`}}}return`world`}function gt(e,t){return e?e==`world`?t==`world`:t==`world`?!1:e[1]==t[1]:!1}function _t(e,t,n){return`hsl(${e}, ${t}%, ${n}%)`}function vt(){let[e,t]=(0,U.useState)(!1),n=(0,U.useRef)(!1);(0,U.useEffect)(()=>{(async()=>{if(!n.current){n.current=!0;try{await ie(),_e(),ae(),P.event.check(),t(!0)}catch(e){console.error(`Initialization error:`,e)}}})()},[]);let[r,i]=S.hooks.useLocation();(0,U.useEffect)(()=>{if(!e)return;let t=pe(r);t&&i(t,{replace:!0})},[e,r,i]),(0,U.useEffect)(()=>{e&&(ge(),oe())},[e]);let a=()=>{if(I.check.debugMode())return{background:`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,color:`white`};let e=document.querySelector(`meta[name="bar-color"]`),t=document.querySelector(`meta[name="text-color"]`);return{background:e?.content||`#667eea`,color:t?.content||`white`}};if(!e){let e=a();return _(`div`,{css:Ot(e.background,e.color),children:[l(Me,{color:e.color,size:80,cssOverride:{display:`block`}}),l(`h2`,{children:`Loading Game...`}),l(`p`,{children:`Initializing world data and assets`})]})}return l(b,{children:l(yt,{})})}function yt(){return ne(),_(c,{children:[l(`div`,{style:{display:ue?`block`:`none`},children:`This game was interrupted because it was opened in another tab.`}),_(`div`,{style:{display:ue?`none`:`block`},children:[l(m,{styles:Et}),l(te,{base:`/`,hook:Ee,children:_(`div`,{css:Dt,children:[l(at,{}),l(nt,{children:l(tt,{})}),l(lt,{})]})}),l(be,{gutter:xt,containerClassName:Q,children:e=>l(n,{toast:e,style:e.visible?wt:Tt})}),l(de,{}),l(pt,{})]})]})}var bt={fontSize:`11px`,padding:`5px 7px`},xt=5,Q=`playerToaster`,St=`playerToastFadeIn`,Ct=`playerToastFadeOut`,$=`0.3s`,wt={...bt,animation:`${St} ${$} ease-out forwards`},Tt={...bt,animation:`${Ct} ${$} ease-out forwards`},Et=j`
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

	@keyframes ${St} {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes ${Ct} {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	/* 本文まわりの余白（ライブラリ標準は margin 4px 10px）。本文はライブラリ内部の要素で
	   style を渡せないため、要素セレクタを重ねて標準のクラス指定より詳細度を上げる。
	   DOM構造は コンテナ > 位置調整 > トースト本体 > 本文（本文は常に最後の子） */
	.${Q} > div > div > div:last-child {
		margin: 3px 7px;
	}

	/* 本文以外の子＝showResult の成功/失敗アイコン。ライブラリ内で 20px 固定なので、
	   他のアイコンに合わせて縮小する */
	.${Q} > div > div > div:not(:last-child) {
		transform: scale(0.67);
	}
`,Dt=j`
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
`,Ot=(e,t)=>j`
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
`;console.log(`🎮 Player Build Version: 0.0.1519`),console.log(`📅 Player Build Date: ${new Date(`2026-08-05T09:09:17.528Z`).toLocaleString(`ja-JP`)}`),xe.createRoot(document.getElementById(`root`)).render((0,Y.jsx)(U.StrictMode,{children:(0,Y.jsx)(vt,{})}));
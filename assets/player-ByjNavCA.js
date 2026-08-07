import{$ as e,A as t,At as n,B as r,C as i,D as a,Dt as o,E as s,Et as c,I as l,L as u,M as d,Mt as f,N as p,O as m,Ot as h,P as g,Q as _,R as v,Rt as y,S as ee,T as te,Tt as b,X as x,Z as S,_ as C,_t as w,a as T,b as E,bt as ne,c as re,ct as ie,d as ae,dt as D,et as oe,f as se,ft as O,g as ce,gt as k,h as le,ht as ue,i as de,j as A,k as j,kt as M,l as fe,m as pe,mt as N,n as P,nt as F,o as I,p as me,r as he,s as ge,t as L,u as _e,v as ve,vt as R,w as z,wt as B,x as V,y as H,yt as ye,z as be}from"./control-D6Ad6ddN.js";import"./modulepreload-polyfill-Dezn_h7o.js";var U=y(f()),xe=y(n(),1),W={v:[]},Se=()=>W.v.forEach(e=>e()),Ce=e=>(W.v.push(e)===1&&addEventListener(`hashchange`,Se),()=>{W.v=W.v.filter(t=>t!==e),W.v.length||removeEventListener(`hashchange`,Se)}),we=()=>`/`+location.hash.replace(/^#?\/?/,``),Te=(e,{state:t=null,replace:n=!1}={})=>{let r=location.href,[i,a]=e.replace(/^#?\/?/,``).split(`?`),o=new URL(location.href);o.hash=`/${i}`,a&&(o.search=a);let s=o.href;n?history.replaceState(t,``,s):history.pushState(t,``,s);let c=typeof HashChangeEvent<`u`?new HashChangeEvent(`hashchange`,{oldURL:r,newURL:s}):new Event(`hashchange`,{detail:{oldURL:r,newURL:s}});dispatchEvent(c)},Ee=({ssrPath:e=`/`}={})=>[(0,o.useSyncExternalStore)(Ce,we,()=>e),Te];Ee.hrefs=e=>`#`+e;var G;(function(e){e.maroon=`#800000`,e.red=`#FF0000`,e.orange=`#FFA500`,e.yellow=`#FFFF00`,e.olive=`#808000`,e.green=`#008000`,e.purple=`#800080`,e.fuchsia=`#FF00FF`,e.lime=`#00FF00`,e.teal=`#008080`,e.aqua=`#00FFFF`,e.blue=`#0000FF`,e.navy=`#000080`,e.black=`#000000`,e.gray=`#808080`,e.silver=`#C0C0C0`,e.white=`#FFFFFF`})(G||={});var De=function(e,t){if(e.includes(`/`))return e.replace(`rgb(`,`rgba(`);var n=e.substring(e.startsWith(`rgba(`)?5:4,e.length-1).trim(),r=n.split(`,`);return r.length===4?e.replace(`rgb(`,`rgba(`):r.length===3?`rgba(${n}, ${t})`:`rgba(${n} / ${t})`},Oe=function(e,t){if(e.startsWith(`rgb`))return De(e,t);if(Object.keys(G).includes(e)&&(e=G[e]),e[0]===`#`&&(e=e.slice(1)),e.length===3){var n=``;e.split(``).forEach(function(e){n+=e,n+=e}),e=n}return`rgba(${(e.match(/.{2}/g)||[]).map(function(e){return parseInt(e,16)}).join(`, `)}, ${t})`},ke={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function Ae(e){if(typeof e==`number`)return{value:e,unit:`px`};var t,n=(e.match(/^[0-9.]*/)||``).toString();t=n.includes(`.`)?parseFloat(n):parseInt(n,10);var r=(e.match(/[^0-9]*$/)||``).toString();return ke[r]?{value:t,unit:r}:(console.warn(`React Spinners: ${e} is not a valid css value. Defaulting to ${t}px.`),{value:t,unit:`px`})}function K(e){var t=Ae(e);return`${t.value}${t.unit}`}var je=function(e,t,n){var r=`react-spinners-${e}-${n}`;if(typeof window>`u`||!window.document)return r;var i=document.createElement(`style`);document.head.appendChild(i);var a=i.sheet,o=`
    @keyframes ${r} {
      ${t}
    }
  `;return a&&a.insertRule(o,0),r},q=function(){return q=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},q.apply(this,arguments)},Me=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Ne(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,i=r===void 0?`#000000`:r,a=e.speedMultiplier,o=a===void 0?1:a,s=e.cssOverride,c=s===void 0?{}:s,l=e.size,u=l===void 0?50:l,d=Me(e,[`loading`,`color`,`speedMultiplier`,`cssOverride`,`size`]),f=Ae(u),p=f.value,m=f.unit,h=q({display:`inherit`,position:`relative`,width:K(u),height:K(u),transform:`rotate(165deg)`},c),g=p/5,_=(p-g)/2,v=_-g,y=Oe(i,.75),ee=je(`HashLoader`,`0% {width: ${g}px; box-shadow: ${_}px ${-v}px ${y}, ${-_}px ${v}px ${y}}
    35% {width: ${K(u)}; box-shadow: 0 ${-v}px ${y}, 0 ${v}px ${y}}
    70% {width: ${g}px; box-shadow: ${-_}px ${-v}px ${y}, ${_}px ${v}px ${y}}
    100% {box-shadow: ${_}px ${-v}px ${y}, ${-_}px ${v}px ${y}}`,`before`),te=je(`HashLoader`,`0% {height: ${g}px; box-shadow: ${v}px ${_}px ${i}, ${-v}px ${-_}px ${i}}
    35% {height: ${K(u)}; box-shadow: ${v}px 0 ${i}, ${-v}px 0 ${i}}
    70% {height: ${g}px; box-shadow: ${v}px ${-_}px ${i}, ${-v}px ${_}px ${i}}
    100% {box-shadow: ${v}px ${_}px ${i}, ${-v}px ${-_}px ${i}}`,`after`),b=function(e){return{position:`absolute`,top:`50%`,left:`50%`,display:`block`,width:`${p/5}${m}`,height:`${p/5}${m}`,borderRadius:`${p/10}${m}`,transform:`translate(-50%, -50%)`,animationFillMode:`none`,animation:`${e===1?ee:te} ${2/o}s infinite`}};return n?U.createElement(`span`,q({style:h},d),U.createElement(`span`,{style:b(1)}),U.createElement(`span`,{style:b(2)})):null}var J=y(oe());function Pe(){let e=O.basic.general,t=T.hooks.usePath(1);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(C,{path:t,background:`world`,children:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(j,{}),(0,J.jsx)(E,{title:[`preset`,`default-language`],explanation:[`text`,T.component.getLanguageLabel()],text:[`preset`,L.check.enableChangeLanguage()?`language-change-enable-general`:`language-change-unenable`]}),(0,J.jsx)(m,{title:[`preset`,`max-category-level`],explanation:[`text`,I.primitive.toLevel(e.maxCategoryLevels)],event:`hint`}),(0,J.jsx)(m,{title:[`preset`,`level-common-ratio`],explanation:[`text`,e.levelCommonRatio.toString()],event:`hint`})]})}),(0,J.jsx)(c,{children:T.hooks.useDefaultRoutes(t)})]})}function Fe(){let e=O,t=e.basic.overview,n=T.hooks.usePath(1),r=t.information,i=L.check.debugMode();return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(C,{path:n,background:`world`,children:[(0,J.jsx)(J.Fragment,{children:(0,J.jsxs)(s,{text:`world`,path:n,children:[(0,J.jsx)(H,{base:r,color:t.information.color}),(0,J.jsx)(m,{title:[`preset`,`version`],explanation:[`text`,t.version.toString()]}),(0,J.jsx)(m,{title:[`preset`,`updated`],explanation:[`text`,e.basic.development.timestamp.published]}),(0,J.jsx)(m,{title:[`preset`,`author`],explanation:[`text`,t.author],event:`hint`}),t.homepage&&(0,J.jsx)(m,{title:[`preset`,`homepage`],explanation:[`url`,t.homepage],event:`hint`}),(0,J.jsx)(m,{title:[`preset`,`estimated-playing-time`],explanation:[`text`,`${t.estimatedPlayingTime.value} ${R(t.estimatedPlayingTime.unit).information.name}`],event:`hint`})]})}),(0,J.jsx)(J.Fragment,{children:(0,J.jsxs)(s,{text:`console`,path:n,children:[(0,J.jsx)(H,{base:R(`console`).information}),(0,J.jsx)(m,{title:[`preset`,`version`],explanation:[`text`,`0.0.1525`]}),(0,J.jsx)(m,{title:[`preset`,`updated`],explanation:[`text`,Le(`2026-08-07T10:00:04.725Z`)]}),(0,J.jsx)(m,{title:[`preset`,`author`],explanation:[`text`,`Yutori`]}),(0,J.jsx)(m,{title:[`preset`,`homepage`],explanation:[`url`,`https://idle.yu-to-ri.net/document/index.html`]}),(0,J.jsx)(Ie,{})]})}),!i&&(0,J.jsx)(J.Fragment,{children:(0,J.jsxs)(s,{text:`iconify`,path:n,children:[(0,J.jsx)(H,{base:R(`iconify`).information}),Object.entries(ye).map(([e,t])=>(0,J.jsx)(ve,{summary:t},e))]})})]}),(0,J.jsx)(c,{children:T.hooks.useDefaultRoutes(n)})]})}function Ie(){let[e,t]=T.hooks.useConfirm(e=>{e||(T.viewport.normalize(),window.location.hash=``,requestAnimationFrame(()=>window.location.reload()))});return(0,J.jsxs)(z,{children:[(0,J.jsx)(A,{id:`force-restart`,event:[`click`,()=>t(),e]}),(0,J.jsx)(a,{id:`force-restart`})]})}function Le(e){let t=new Date(e);return`${t.getFullYear()}/${String(t.getMonth()+1).padStart(2,`0`)}/${String(t.getDate()).padStart(2,`0`)} ${String(t.getHours()).padStart(2,`0`)}:${String(t.getMinutes()).padStart(2,`0`)}:${String(t.getSeconds()).padStart(2,`0`)}`}function Re(){let e=T.hooks.usePath(1),t=P.progress.getCoins(),n=(Date.now()-D.playing.time.initialized)/1e3,r=L.check.visibleList(w(!0).items).reduce((e,t)=>(e.now+=t.user.countNow,e.record+=t.user.countRecord,e),{now:0,record:0}),i=I.primitive.toLevel(L.check.visibleList(w(!0).categories).reduce((e,t)=>t.world.numeric?e+Math.floor(t.user.level):e,0)),a=L.check.visibleList(w(!0).actions).reduce((e,t)=>(e+=t.user.count,e),0);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(C,{path:e,background:`world`,children:[(0,J.jsx)(J.Fragment,{children:(0,J.jsx)(s,{text:`coin`,path:e,children:t.map(e=>(0,J.jsxs)(U.Fragment,{children:[(0,J.jsx)(m,{title:[`basic`,e],explanation:[`text`,e.user.countNow.toString()]}),(0,J.jsx)(m,{title:[`preset`,`amount-earned`],explanation:[`text`,e.user.countRecord.toString()]})]},e.id))})}),(0,J.jsx)(J.Fragment,{children:(0,J.jsx)(s,{text:`time`,path:e,children:(0,J.jsx)(m,{title:[`preset`,`playing-time`],explanation:[`seconds`,n]})})}),(0,J.jsx)(J.Fragment,{children:(0,J.jsxs)(s,{text:`item`,path:e,children:[(0,J.jsx)(m,{title:[`preset`,`count-now`],explanation:[`text`,r.now.toString()]}),(0,J.jsx)(m,{title:[`preset`,`count-gained`],explanation:[`text`,r.record.toString()]})]})}),(0,J.jsx)(J.Fragment,{children:(0,J.jsxs)(s,{text:`action`,path:e,children:[(0,J.jsx)(m,{title:[`preset`,`total-level`],explanation:[`text`,i]}),(0,J.jsx)(m,{title:[`preset`,`count-actioned`],explanation:[`text`,a.toString()]})]})})]}),(0,J.jsx)(c,{children:T.hooks.useDefaultRoutes(e)})]})}function ze(){let e=T.hooks.usePath(1),t=e=>T.component.sortGroup(e,e=>e.world.group).flat().map(e=>{let t=P.event.getArchived(e).flag??!1;return{basic:e,explanation:``,explanationIcon:R(t?`yes`:`no`).information,flagColor:t,link:`${e.id}.event`,ribbon:P.event.checkUnclaimed(e)}}),n=t(L.check.visibleList(ne).filter(e=>e.categoryId===``)),r=[];for(let e of L.check.visibleList(w(!0).categories)){let n=L.check.visibleList(e.tasks);n.length!=0&&r.push({category:e,indexes:t(n)})}return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(C,{path:e,background:`world`,children:[n.length>0&&(0,J.jsx)(s,{text:`missions`,path:e,children:(0,J.jsx)(V,{indexes:n,layerDepth:1})}),r.map(e=>(0,J.jsx)(V,{categoryId:e.category.id,indexes:e.indexes,layerDepth:1},e.category.id))]}),(0,J.jsx)(c,{children:T.hooks.useDefaultRoutes(e)})]})}function Be(){let e=T.hooks.usePath(1),t=[];for(let e of L.check.visibleList(w(!0).categories)){let n=L.check.visibleList(e.actions);if(n.length==0)continue;let r=e.user.progressing?N(e.user.progressing.general.id):void 0,i=n.map(e=>({basic:e,explanation:I.primitive.toLevel(e.world.level),flagColor:L.check.matchedLevel(e),link:`${e.id}.action`,ribbon:P.progress.checkSingleCompleted(void 0,e.id)||e.id===r?.id})),a=P.progress.checkSingleCompleted(e.id);t.push({category:e,actions:i,progress:r,ribbonCategory:a})}let n;try{n=k(O.basic.general.queue.information.id)}catch{n=null}let r=P.progress.getSingletonProgressing(),i=r?N(r.general.id):void 0;return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(C,{path:e,background:`world`,children:[n&&n.user&&L.trade.getMaxQueue()>=1&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(j,{}),(0,J.jsx)(g,{href:`${e.path}/${i?.id}.action`,active:!!i,children:(0,J.jsx)(m,{title:[`basic`,n],explanation:[`text`,`${L.trade.getWaitingCount()} / ${L.trade.getMaxQueue()}`],color:n.information.color,flagColor:L.trade.hasQueueRoom()})})]}),(0,J.jsx)(J.Fragment,{children:t.map(t=>(0,J.jsx)(V,{categoryId:t.category.id,indexes:t.actions,layerDepth:1,event:[`hold`,P.progress.toggleAct],children:t.progress&&(0,J.jsxs)(g,{href:`${e.path}/${t.progress.id}.action`,children:[(0,J.jsx)(m,{title:[`basic`,t.progress],ribbon:t.ribbonCategory,event:[`hold`,P.progress.toggleAct]}),(0,J.jsx)(te,{categoryId:t.category.id,type:`progress`})]})},t.category.id))})]}),(0,J.jsx)(c,{children:T.hooks.useDefaultRoutes(e)})]})}function Ve(){let e=T.hooks.usePath(2),[t,n]=U.useState(new globalThis.Set),r=w(!0).items.filter(e=>e.user.countNow>=1&&e.world.sellingValue>0&&L.check.locked(e)===`released`),i=e=>{n(t=>{let n=new globalThis.Set(t);return n.has(e.id)?n.delete(e.id):n.add(e.id),n})},a=r.map(e=>{let n=e.world.sellingValue*e.user.countNow;return{basic:e,explanation:I.primitive.toStandardCount(n),flagColor:!0,link:void 0,ribbon:t.has(e.id)}}),o=r.filter(e=>t.has(e.id)),l=o.length,u=o.reduce((e,t)=>e+t.user.countNow,0),d=new globalThis.Map;for(let e of o){let t=L.trade.resolveCoin(e),n=e.world.sellingValue*e.user.countNow,r=d.get(t.id);r?r.value+=n:d.set(t.id,{coin:t,value:n})}let f=()=>{let e=[];for(let t of o){let n=t.world.sellingValue,r=t.user.countNow;if(r<=0||n===0)continue;let i=L.trade.resolveCoin(t),a=L.trade.addAcquisitions([{id:i.id,count:n,chance:1,type:`item`}],r),o=L.trade.reduceRequirements([{type:`item`,id:t.id,count:1,chance:1,equipment:!1}],r);e=[...e,...a,...o]}P.progress.unequipZeroItems(),T.component.forceUpdate(),e.length>0&&T.toaster.showTrade(L.trade.summarizeTrades(e)),n(new globalThis.Set)},[p,h]=T.hooks.useConfirm(e=>!e&&f());return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(C,{path:e,children:[(0,J.jsx)(s,{text:`items`,path:e,children:(0,J.jsx)(V,{indexes:a,layerDepth:2,event:[`click`,i]})}),(0,J.jsxs)(s,{text:`selected`,path:e,children:[(0,J.jsx)(m,{title:[`preset`,`kind`],explanation:[`text`,l.toString()]}),(0,J.jsx)(m,{title:[`preset`,`count`],explanation:[`text`,u.toString()]}),[...d.values()].map(({coin:e,value:t})=>(0,J.jsx)(m,{title:[`preset`,`value`],explanation:[`text`,I.primitive.toStandardCount(t)],inlineIcon:[`information`,e.information],flagColor:!0},e.id)),(0,J.jsx)(A,{id:`sell`,event:[`click`,()=>h(),p],active:l>0})]})]}),(0,J.jsx)(c,{children:T.hooks.useDefaultRoutes(e)})]})}function He(){let e=T.hooks.usePath(1),t=[];for(let e of L.check.visibleList(w(!0).categories)){let n=L.check.visibleList(e.items);if(n.length==0)continue;let r=T.component.sortGroup(n,e=>e.world.group).map(t=>{let n=t[0].world.group,r=e.world.equipmentGroups.includes(n),i=e.user.equipments.find(e=>t.some(t=>t.id===e));return{nodes:t.map(e=>({basic:e,explanation:e.user.countNow.toString(),link:`${e.id}.item`,ribbon:i===e.id})),groupId:n,equipmentable:r,equippingId:i}});t.push({category:e,groups:r})}let n=P.progress.getCoins(),r;try{let e=O.basic.general.capacity.information.id;r=k(e)}catch{r=null}let i;try{let e=O.basic.general.queue.information.id;i=k(e)}catch{i=null}return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(C,{path:e,background:`world`,children:[(0,J.jsx)(j,{}),n.map((t,n)=>(n==0||t.user.countRecord>0)&&(0,J.jsx)(g,{href:`${e.path}/${t.id}.item`,children:(0,J.jsx)(m,{title:[`basic`,t],explanation:[`text`,t.user.countNow.toString()],color:t.information.color})},t.id)),r&&r.user&&L.trade.getMaxCapacity()>0&&(0,J.jsx)(g,{href:`${e.path}/${r.id}.item`,children:(0,J.jsx)(m,{title:[`basic`,r],explanation:[`text`,`${L.trade.getCurrentItemTypesCount()} / ${L.trade.getMaxCapacity()}`],color:r.information.color,flagColor:L.trade.hasCapacityRoom()})}),i&&i.user&&(0,J.jsx)(g,{href:`${e.path}/${i.id}.item`,children:(0,J.jsx)(m,{title:[`basic`,i],explanation:[`text`,`${L.trade.getWaitingCount()} / ${L.trade.getMaxQueue()}`],color:i.information.color,flagColor:L.trade.hasQueueRoom()})}),(0,J.jsx)(g,{href:`${e.path}/selling.character`,children:(0,J.jsx)(m,{title:[`preset`,`selling`]})}),t.map(t=>(0,J.jsx)(s,{text:t.category,path:e,children:t.groups.map((n,r)=>(0,J.jsx)(V,{indexes:n.nodes,layerDepth:1,event:[`hold`,P.progress.toggleEquip],children:I.primitive.switches([n.equippingId!==void 0,n.equipmentable,!0],[n.equippingId&&(0,J.jsx)(g,{href:`${e.path}/${n.equippingId}.item`,children:(0,J.jsx)(m,{title:[`type`,n.equippingId,`item`],explanation:[`preset`,`equipping`],inlineIcon:`explanation`,event:[`hold`,P.progress.toggleEquip],flagColor:!0})}),(0,J.jsx)(m,{title:[`preset`,`equipment`],explanation:[`preset`,`unequipping`],inlineIcon:`explanation`,flagColor:!1}),(0,J.jsx)(J.Fragment,{})])},`${t.category.id}-${r}`))},t.category.id))]}),(0,J.jsxs)(c,{children:[(0,J.jsx)(B,{path:`${e.path}/selling.character/*?`,children:(0,J.jsx)(Ve,{})}),T.hooks.useDefaultRoutes(e)]})]})}function Ue(){let e=T.hooks.usePath(1),t=[];for(let e of L.check.visibleList(w(!0).categories)){let n=e.summerizedProperties;if(n.size==0)continue;let r=[];for(let e of n.values()){if(e.value==0)continue;let t={basic:R(e.id),explanation:I.primitive.getWithSign(e.value),flagColor:T.style.getSignFlag(e.value),link:`${e.categoryId}_${e.id}.correction`,ribbon:!1};r.push(t)}r.sort((e,t)=>ie.indexOf(e.basic.id)-ie.indexOf(t.basic.id)),t.push({category:e,indexes:r})}return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(C,{path:e,background:`world`,children:t.length>0?(0,J.jsx)(J.Fragment,{children:t.map(e=>(0,J.jsx)(V,{categoryId:e.category.id,indexes:e.indexes,layerDepth:1},e.category.id))}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(j,{}),(0,J.jsx)(a,{id:`no-status`})]})}),(0,J.jsxs)(c,{children:[(0,J.jsx)(B,{path:`${e.path}/:type.correction/*?`,children:(0,J.jsx)(ce,{layerDepth:2})}),T.hooks.useDefaultRoutes(e)]})]})}function We(){let e=T.hooks.usePath(1),t=L.check.debugMode();return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(C,{path:e,background:`world`,children:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(j,{}),(0,J.jsx)(Ge,{path:e}),(0,J.jsx)(j,{}),(0,J.jsx)(Ke,{}),(0,J.jsx)(j,{}),(0,J.jsx)(qe,{}),(0,J.jsx)(j,{}),(0,J.jsx)(Je,{}),(0,J.jsx)(j,{}),(0,J.jsx)(Ye,{}),(0,J.jsx)(j,{}),!t&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Ze,{}),(0,J.jsx)(j,{})]}),(0,J.jsx)(Xe,{}),(0,J.jsx)(j,{}),(0,J.jsx)(Qe,{})]})}),(0,J.jsxs)(c,{children:[(0,J.jsx)(B,{path:`${e.path}/language.world/*?`,children:(0,J.jsx)(le,{layerDepth:2})}),T.hooks.useDefaultRoutes(e)]})]})}function Ge({path:e}){let t=L.check.enableChangeLanguage();return(0,J.jsx)(g,{href:`${e.path}/language.world`,active:t,children:(0,J.jsx)(E,{title:[`preset`,`language`],explanation:[`text`,T.component.getLanguageLabel()],text:[`preset`,t?`language-change-enable`:`language-change-unenable`],inlineIcon:[`preset`,`language-${D.config.language}`]})})}function Ke(){let[e,t]=(0,U.useState)(D.config.categoryShortcut);return(0,J.jsx)(E,{title:[`preset`,`category-shortcut`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{D.config.categoryShortcut=!e,t(!e),T.component.forceUpdate()}],text:[`preset`,`category-shortcut`],inlineIcon:`explanation`})}function qe(){let[e,t]=(0,U.useState)(D.config.showingHint);return(0,J.jsx)(E,{title:[`preset`,`showing-hint`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{D.config.showingHint=!e,t(!e),T.component.forceUpdate()}],text:[`preset`,`showing-hint`],inlineIcon:`explanation`})}function Je(){let[e,t]=(0,U.useState)(D.config.showingNavigation);return(0,J.jsx)(E,{title:[`preset`,`showing-navigation`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{D.config.showingNavigation=!e,t(!e),T.component.forceUpdate()}],text:[`preset`,`showing-navigation`],inlineIcon:`explanation`})}function Ye(){let[e,t]=(0,U.useState)(D.config.performingHighly);return(0,J.jsx)(E,{title:[`preset`,`performing-highly`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{D.config.performingHighly=!e,t(!e)}],text:[`preset`,`performing-highly`],inlineIcon:`explanation`})}function Xe(){let[,e]=T.hooks.useLocation(),t=()=>{let e=JSON.parse(JSON.stringify(D)).world,t=JSON.stringify(D,null,2),n=new Blob([t],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`),a=R(`export-game`);i.href=r,i.download=`yutori-idle-${e.id}-${e.version}.json`,i.click(),URL.revokeObjectURL(r),T.toaster.showTip(a.information.explanation,a,!1)},n=()=>{let e=R(`import-mistake`);T.toaster.showTip(e.information.explanation,e,!1)};return(0,J.jsxs)(z,{children:[(0,J.jsx)(A,{id:`export-game`,event:[`click`,t,!1]}),(0,J.jsx)(A,{id:`import-game`,event:[`click`,()=>{let t=document.createElement(`input`);t.type=`file`,t.accept=`.json`,t.onchange=t=>{let r=t.target.files?.[0];if(r){let t=new FileReader;t.onload=t=>{try{let r=JSON.parse(t.target?.result);if(r.world?.id!==O.basic.overview.information.id||r.world?.version!==O.basic.overview.version){n();return}de.userData.handle.importUserData(r);let i=R(`import-game`);T.toaster.showTip(i.information.explanation,i,!1),e(`/`,{replace:!0})}catch{n()}},t.readAsText(r)}},t.click()},!1]})]})}function Ze(){let[e,t]=(0,U.useState)(null);return(0,U.useEffect)(()=>{let e=e=>{e.preventDefault(),t(e)};return window.addEventListener(`beforeinstallprompt`,e),()=>{window.removeEventListener(`beforeinstallprompt`,e)}},[]),(0,J.jsxs)(z,{children:[(0,J.jsx)(A,{id:`pwa`,event:[`click`,async()=>{if(!e){T.toaster.showResult(!1);return}try{await e.prompt();let{outcome:n}=await e.userChoice;T.toaster.showResult(n===`accepted`),t(null)}catch{T.toaster.showResult(!1)}},!1]}),(0,J.jsx)(a,{id:`pwa`})]})}function Qe(){let[e,n]=T.hooks.useConfirm(e=>{if(e){let e=R(`reset-alert`);T.toaster.showTip(e.information.explanation,e)}else{if(r!=`DELETE`&&!L.check.debugMode())return;he.player.disableUnloadAndReset(),de.userData.handle.resetLocal(),T.toaster.hideAll(!0),window.location.hash=``,window.location.reload()}}),[r,i]=(0,U.useState)(`*`),o=e=>{i(e)},s=L.check.debugMode();return(0,J.jsxs)(z,{children:[(0,J.jsx)(A,{id:`reset-game`,event:[`click`,()=>n(),e]}),(0,J.jsx)(t,{id:`reset-really`,value:r,changeHandler:o,placeholder:`*`}),(0,J.jsx)(a,{id:`reset-game`}),s&&(0,J.jsx)(a,{id:`reset-debug-mode`})]})}function $e(){let e=T.hooks.usePath(1);return L.check.debugMode()?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(C,{path:e,background:`world`,children:[(0,J.jsx)(j,{}),(0,J.jsx)(et,{}),(0,J.jsx)(j,{}),(0,J.jsx)(tt,{})]}),(0,J.jsx)(c,{children:T.hooks.useDefaultRoutes(e)})]}):(0,J.jsx)(J.Fragment,{})}function et(){let[e,t]=(0,U.useState)(D.config.acceleration.multiplier),[n,r]=(0,U.useState)(D.config.acceleration.active);return(0,J.jsxs)(z,{children:[(0,J.jsx)(E,{title:[`preset`,`acceleration`],explanation:[`preset`,n?`yes`:`no`],event:[`click`,()=>{let e=D.config.acceleration.active;D.config.acceleration.active=!e,r(!e)}],text:`title`,inlineIcon:`explanation`,flagColor:n}),(0,J.jsx)(i,{id:`multiplier`,value:e,changeHandler:e=>{t(e),D.config.acceleration.multiplier=e},placeholder:`-`,max:100,min:1})]})}function tt(){let[e,n]=(0,U.useState)(`category`),r=()=>{n(F[(F.indexOf(e)+1)%F.length])},[o,s]=(0,U.useState)(``),c=e=>{s(e)},[l,u]=(0,U.useState)(`plus`),d=()=>{u(e=>e===`plus`?`minus`:`plus`)},[f,p]=(0,U.useState)(1),m=e=>{p(e)},[h,g]=T.hooks.useConfirm(t=>!t&&L.trade.adjust(e,o,l,f));return(0,J.jsxs)(z,{children:[(0,J.jsx)(E,{title:[`preset`,`adjustment`],text:`title`}),(0,J.jsx)(E,{title:[`preset`,`adjustment-type`],explanation:[`preset`,`adjustment-${e}`],inlineIcon:[`preset`,e],event:[`click`,r],bold:!0,text:`explanation`}),(0,J.jsx)(t,{id:`adjustment-id`,value:o,changeHandler:c,placeholder:`all`}),(0,J.jsx)(a,{id:`adjustment-id`}),(0,J.jsx)(E,{title:[`preset`,`adjustment-sign`],explanation:[`preset`,`adjustment-${l}`],inlineIcon:`explanation`,event:[`click`,d],bold:!0,text:`explanation`}),(0,J.jsx)(i,{id:`adjustment-count`,value:f,changeHandler:m,placeholder:`1`,max:1e3}),(0,J.jsx)(a,{id:`adjustment-count`}),(0,J.jsx)(A,{id:`adjustment-adjust`,event:[`click`,()=>g(),h]})]})}function nt(){let e=L.check.debugMode(),t=T.hooks.usePath(0),n=T.component.sortGroup(L.check.visibleList(w(!0).categories),e=>e.world.group);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(C,{path:t,background:`world`,children:[(0,J.jsx)(J.Fragment,{children:(0,J.jsxs)(s,{text:`character`,path:t,children:[(0,J.jsx)(g,{href:`/activity.character`,children:(0,J.jsx)(m,{title:[`preset`,`activity`],bold:!0})}),(0,J.jsx)(g,{href:`/inventory.character`,children:(0,J.jsx)(m,{title:[`preset`,`inventory`],bold:!0})}),(0,J.jsx)(g,{href:`/status.character`,children:(0,J.jsx)(m,{title:[`preset`,`status`],bold:!0})}),L.check.visibleList(ne).length>0&&(0,J.jsx)(g,{href:`/missions.character`,children:(0,J.jsx)(m,{title:[`preset`,`missions`],bold:!0})})]})}),(0,J.jsx)(J.Fragment,{children:n.map(e=>(0,J.jsx)(ee,{categories:e,path:t},e[0].world.group))}),(0,J.jsx)(J.Fragment,{children:(0,J.jsxs)(s,{text:`world`,path:t,children:[(0,J.jsx)(g,{href:`/overview.world`,children:(0,J.jsx)(m,{title:[`preset`,`overview`],bold:!0})}),(0,J.jsx)(g,{href:`/general.world`,children:(0,J.jsx)(m,{title:[`preset`,`general`],bold:!0})}),(0,J.jsx)(g,{href:`/statistics.world`,children:(0,J.jsx)(m,{title:[`preset`,`statistics`],bold:!0})}),(0,J.jsx)(g,{href:`/config.world`,children:(0,J.jsx)(m,{title:[`preset`,`config`],bold:!0})}),e&&(0,J.jsx)(g,{href:`/debug.world`,children:(0,J.jsx)(m,{title:[`preset`,`debug`],bold:!0})})]})})]}),(0,J.jsxs)(c,{children:[(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(B,{path:`/activity.character/*?`,children:(0,J.jsx)(Be,{})}),(0,J.jsx)(B,{path:`/inventory.character/*?`,children:(0,J.jsx)(He,{})}),(0,J.jsx)(B,{path:`/status.character/*?`,children:(0,J.jsx)(Ue,{})}),(0,J.jsx)(B,{path:`/missions.character/*?`,children:(0,J.jsx)(ze,{})})]}),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(B,{path:`/overview.world/*?`,children:(0,J.jsx)(Fe,{})}),(0,J.jsx)(B,{path:`/general.world/*?`,children:(0,J.jsx)(Pe,{})}),(0,J.jsx)(B,{path:`/statistics.world/*?`,children:(0,J.jsx)(Re,{})}),(0,J.jsx)(B,{path:`/config.world/*?`,children:(0,J.jsx)(We,{})}),(0,J.jsx)(B,{path:`/debug.world/*?`,children:(0,J.jsx)($e,{})})]}),T.hooks.useDefaultRoutes(t)]})]})}function rt({children:e}){let t=it();return u(`span`,{id:`grider`,css:[t.base,t.scrollbarStyle],children:e})}function it(){return{base:M`
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
		`,scrollbarStyle:M`
			/* Firefox対応: auto（標準）スタイル、色はbarColorと透明トラック */
			scrollbar-width: auto;
			scrollbar-color: ${x.colors.bar} transparent;

			/* Chrome, Safari, Edge対応 */
			::-webkit-scrollbar-thumb {
				background: ${x.colors.bar};
			}
			::-webkit-scrollbar-thumb:hover {
				background: ${x.colors.actived};
			}
		`}}var at={duration:300,snappingDown:!0};function ot(){let e=(0,U.useRef)(null),t=T.hooks.useSmoothRef(()=>{let e=P.progress.getSingletonProgressing();return e?ue(N(e.general.id).categoryId).user.level%1:0},at);return T.hooks.useUpdate(()=>{let n=e.current;if(!n)return;let r=P.progress.getSingletonProgressing(),i=I.primitive.clamp(t.current,0,1);n.style.setProperty(`--header-percentage`,`${i*100}%`),n.style.setProperty(`--header-color`,r?T.style.geFadedColor(N(r.general.id).information.color):`transparent`)}),u(`div`,{css:st(),ref:e})}function st(){return M`
		position: fixed;
		top: ${x.constants.barHeight}px;
		left: 0;
		width: 100svw;
		height: ${x.constants.headerLineHeight}px;
		--header-percentage: 0%;
		--header-color: transparent;
		background: linear-gradient(to right, var(--header-color) var(--header-percentage), transparent var(--header-percentage));
		z-index: 20;
	`}var ct={},lt={duration:300};function ut(){let[e,t]=(0,U.useState)(()=>T.scroll.getScrolledPosition().x>0),[n,r]=(0,U.useState)(()=>P.progress.getSingletonProgressing()?.general.id),i=(0,U.useRef)(null),[,a]=T.hooks.useLocation(),o=()=>{T.scroll.slideTop()},s=()=>{let e=T.component.getSingletonProgressingPath();e&&(a(e),T.scroll.slideBottom())},c=T.hooks.useSmoothRef(()=>{let e=P.progress.getSingletonProgressing();return e?P.progress.caluculateBarProgresing(e):0},()=>P.progress.getSingletonProgressing()?.combat?lt:ct);return T.hooks.useUpdate(()=>{r(P.progress.getSingletonProgressing()?.general.id),t(T.scroll.getScrolledPosition().x>0);let e=i.current;e&&(e.style.transform=`scaleX(${I.primitive.clamp(c.current,0,1)})`)}),v(`span`,{css:[dt(8).base],children:[u(p,{height:8,fillRef:i,color:n?T.style.getActionProgressColor(n):void 0}),e&&u(d,{id:`go-top`,leftern:!0,handler:o,size:26}),n&&u(d,{id:n,leftern:!1,handler:s,size:26})]})}function dt(e){return{base:M`
			/* display: flex; */
			position: relative;
			width: 100svw;
			height: ${e}px;
			/* bottom: 0; */
			z-index: 20;
			background-color: transparent;
		`}}var Y,ft,pt=2/3,X=.15;function mt(){let[e]=T.hooks.useLocation();return Y?null:(T.component.setBackgroundHandler(ht),ht(gt(e)),null)}function ht(e){if(_t(Y,e))return;Y=e;let t=(e==`world`?``:ue(e[1]).world.background)||O.basic.design.background||``;if(ft===t)return;ft=t;let n=x.colors.background,{h:r,s:i,l:a}=S(n).hsl().object(),o=vt(r*(1-X),i*(1-X),a*(1-X)),s=vt(r*1.15,i*1.15,a*1.15),c=e=>`linear-gradient(
		to top,
		${S(o).alpha(e).rgb().string()},
		${S(n).alpha(e).rgb().string()},
		${S(s).alpha(e).rgb().string()}
	)`;window.document.body.style.background=t?`${c(pt)}, url(${t}) center / cover no-repeat fixed`:c(1),window.document.body.style.backgroundColor=x.colors.bar}function gt(e){let t=e.split(`/`).reverse();for(let e of t){let[t,n]=e.split(`.`);if(!(!t||!n)){if(n==`category`)return[`category`,t];if(n==`action`)return[`category`,N(t).categoryId];if(n==`item`){let e=k(t).categoryId;return e?[`category`,e]:`world`}}}return`world`}function _t(e,t){return e?e==`world`?t==`world`:t==`world`?!1:e[1]==t[1]:!1}function vt(e,t,n){return`hsl(${e}, ${t}%, ${n}%)`}function yt(){let[e,t]=(0,U.useState)(!1),n=(0,U.useRef)(!1);(0,U.useEffect)(()=>{(async()=>{if(!n.current){n.current=!0;try{await re(),_e(),ae(),P.event.check(),t(!0)}catch(e){console.error(`Initialization error:`,e)}}})()},[]);let[r,i]=T.hooks.useLocation();(0,U.useEffect)(()=>{if(!e)return;let t=me(r);t&&i(t,{replace:!0})},[e,r,i]),(0,U.useEffect)(()=>{e&&(ge(),se())},[e]);let a=()=>{if(L.check.debugMode())return{background:`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,color:`white`};let e=document.querySelector(`meta[name="bar-color"]`),t=document.querySelector(`meta[name="text-color"]`);return{background:e?.content||`#667eea`,color:t?.content||`white`}};if(!e){let e=a();return v(`div`,{css:Pt(e.background,e.color),children:[u(Ne,{color:e.color,size:80,cssOverride:{display:`block`}}),u(`h2`,{children:`Loading Game...`}),u(`p`,{children:`Initializing world data and assets`})]})}return u(_,{children:u(bt,{})})}function bt(){return e(),v(l,{children:[u(`div`,{style:{display:fe?`block`:`none`},children:`This game was interrupted because it was opened in another tab.`}),v(`div`,{style:{display:fe?`none`:`block`},children:[u(h,{styles:Mt}),u(b,{base:`/`,hook:Ee,children:v(`div`,{css:Nt,children:[u(ot,{}),u(rt,{children:u(nt,{})}),u(ut,{})]})}),u(be,{gutter:xt,containerClassName:Q,children:e=>u(r,{toast:e,style:jt(e)})}),u(pe,{}),u(mt,{})]})]})}var Z={fontSize:`12px`,padding:`5px 7px`},xt=5,Q=`playerToaster`,St=`playerToastFadeIn`,Ct=`playerToastFadeOut`,wt=`playerToastPopInTop`,Tt=`playerToastPopInBottom`,$=`0.3s`,Et=3e3,Dt={...Z,animation:`${St} ${$} ease-in-out forwards`},Ot={...Z,animation:`${Ct} ${$} ease-in-out forwards`},kt={...Z,animation:`${wt} ${$} ease-in-out forwards`},At={...Z,animation:`${Tt} ${$} ease-in-out forwards`};function jt(e){return e.visible?(e.duration??0)<Et?Dt:(e.position??`top-center`).startsWith(`top`)?kt:At:Ot}var Mt=M`
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

	/* 画面上側に出るトースト（showLeveled / showAchieved）の登場。上の画面外から降りてくる */
	@keyframes ${wt} {
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
	@keyframes ${Tt} {
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
	   DOM構造は コンテナ > 位置調整 > トースト本体 > 本文（本文は常に最後の子） */
	.${Q} > div > div > div:last-child {
		margin: 3px 7px;
	}

	/* 本文以外の子＝showResult の成功/失敗アイコン。ライブラリ内で 20px 固定なので、
	   他のアイコンに合わせて縮小する */
	.${Q} > div > div > div:not(:last-child) {
		transform: scale(0.67);
	}
`,Nt=M`
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
`,Pt=(e,t)=>M`
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
`;console.log(`🎮 Player Build Version: 0.0.1525`),console.log(`📅 Player Build Date: ${new Date(`2026-08-07T10:00:04.725Z`).toLocaleString(`ja-JP`)}`),xe.createRoot(document.getElementById(`root`)).render((0,J.jsx)(U.StrictMode,{children:(0,J.jsx)(yt,{})}));
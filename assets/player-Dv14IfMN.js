import{$ as e,A as t,At as n,B as r,C as i,D as a,Dt as o,E as s,Et as c,I as l,L as u,M as d,Mt as f,N as p,O as m,Ot as h,P as g,Q as _,R as v,Rt as y,S as b,T as x,Tt as S,X as C,Z as w,_ as T,_t as E,a as D,b as O,bt as ee,c as te,ct as k,d as ne,dt as A,et as re,f as ie,ft as j,g as ae,gt as M,h as oe,ht as se,i as ce,j as N,k as P,kt as F,l as le,m as ue,mt as I,n as L,nt as R,o as z,p as de,r as fe,s as pe,t as B,u as me,v as he,vt as V,w as H,wt as U,x as W,y as G,yt as ge,z as _e}from"./control-qapw6Mc2.js";import"./modulepreload-polyfill-Dezn_h7o.js";var K=y(f()),ve=y(n(),1),q={v:[]},ye=()=>q.v.forEach(e=>e()),be=e=>(q.v.push(e)===1&&addEventListener(`hashchange`,ye),()=>{q.v=q.v.filter(t=>t!==e),q.v.length||removeEventListener(`hashchange`,ye)}),xe=()=>`/`+location.hash.replace(/^#?\/?/,``),Se=(e,{state:t=null,replace:n=!1}={})=>{let r=location.href,[i,a]=e.replace(/^#?\/?/,``).split(`?`),o=new URL(location.href);o.hash=`/${i}`,a&&(o.search=a);let s=o.href;n?history.replaceState(t,``,s):history.pushState(t,``,s);let c=typeof HashChangeEvent<`u`?new HashChangeEvent(`hashchange`,{oldURL:r,newURL:s}):new Event(`hashchange`,{detail:{oldURL:r,newURL:s}});dispatchEvent(c)},Ce=({ssrPath:e=`/`}={})=>[(0,o.useSyncExternalStore)(be,xe,()=>e),Se];Ce.hrefs=e=>`#`+e;var J;(function(e){e.maroon=`#800000`,e.red=`#FF0000`,e.orange=`#FFA500`,e.yellow=`#FFFF00`,e.olive=`#808000`,e.green=`#008000`,e.purple=`#800080`,e.fuchsia=`#FF00FF`,e.lime=`#00FF00`,e.teal=`#008080`,e.aqua=`#00FFFF`,e.blue=`#0000FF`,e.navy=`#000080`,e.black=`#000000`,e.gray=`#808080`,e.silver=`#C0C0C0`,e.white=`#FFFFFF`})(J||={});var we=function(e,t){if(e.includes(`/`))return e.replace(`rgb(`,`rgba(`);var n=e.substring(e.startsWith(`rgba(`)?5:4,e.length-1).trim(),r=n.split(`,`);return r.length===4?e.replace(`rgb(`,`rgba(`):r.length===3?`rgba(${n}, ${t})`:`rgba(${n} / ${t})`},Te=function(e,t){if(e.startsWith(`rgb`))return we(e,t);if(Object.keys(J).includes(e)&&(e=J[e]),e[0]===`#`&&(e=e.slice(1)),e.length===3){var n=``;e.split(``).forEach(function(e){n+=e,n+=e}),e=n}return`rgba(${(e.match(/.{2}/g)||[]).map(function(e){return parseInt(e,16)}).join(`, `)}, ${t})`},Ee={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function De(e){if(typeof e==`number`)return{value:e,unit:`px`};var t,n=(e.match(/^[0-9.]*/)||``).toString();t=n.includes(`.`)?parseFloat(n):parseInt(n,10);var r=(e.match(/[^0-9]*$/)||``).toString();return Ee[r]?{value:t,unit:r}:(console.warn(`React Spinners: ${e} is not a valid css value. Defaulting to ${t}px.`),{value:t,unit:`px`})}function Y(e){var t=De(e);return`${t.value}${t.unit}`}var Oe=function(e,t,n){var r=`react-spinners-${e}-${n}`;if(typeof window>`u`||!window.document)return r;var i=document.createElement(`style`);document.head.appendChild(i);var a=i.sheet,o=`
    @keyframes ${r} {
      ${t}
    }
  `;return a&&a.insertRule(o,0),r},X=function(){return X=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},X.apply(this,arguments)},ke=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Ae(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,i=r===void 0?`#000000`:r,a=e.speedMultiplier,o=a===void 0?1:a,s=e.cssOverride,c=s===void 0?{}:s,l=e.size,u=l===void 0?50:l,d=ke(e,[`loading`,`color`,`speedMultiplier`,`cssOverride`,`size`]),f=De(u),p=f.value,m=f.unit,h=X({display:`inherit`,position:`relative`,width:Y(u),height:Y(u),transform:`rotate(165deg)`},c),g=p/5,_=(p-g)/2,v=_-g,y=Te(i,.75),b=Oe(`HashLoader`,`0% {width: ${g}px; box-shadow: ${_}px ${-v}px ${y}, ${-_}px ${v}px ${y}}
    35% {width: ${Y(u)}; box-shadow: 0 ${-v}px ${y}, 0 ${v}px ${y}}
    70% {width: ${g}px; box-shadow: ${-_}px ${-v}px ${y}, ${_}px ${v}px ${y}}
    100% {box-shadow: ${_}px ${-v}px ${y}, ${-_}px ${v}px ${y}}`,`before`),x=Oe(`HashLoader`,`0% {height: ${g}px; box-shadow: ${v}px ${_}px ${i}, ${-v}px ${-_}px ${i}}
    35% {height: ${Y(u)}; box-shadow: ${v}px 0 ${i}, ${-v}px 0 ${i}}
    70% {height: ${g}px; box-shadow: ${v}px ${-_}px ${i}, ${-v}px ${_}px ${i}}
    100% {box-shadow: ${v}px ${_}px ${i}, ${-v}px ${-_}px ${i}}`,`after`),S=function(e){return{position:`absolute`,top:`50%`,left:`50%`,display:`block`,width:`${p/5}${m}`,height:`${p/5}${m}`,borderRadius:`${p/10}${m}`,transform:`translate(-50%, -50%)`,animationFillMode:`none`,animation:`${e===1?b:x} ${2/o}s infinite`}};return n?K.createElement(`span`,X({style:h},d),K.createElement(`span`,{style:S(1)}),K.createElement(`span`,{style:S(2)})):null}var Z=y(re());function je(){let e=j.basic.general,t=D.hooks.usePath(1);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(T,{path:t,background:`world`,children:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(P,{}),(0,Z.jsx)(O,{title:[`preset`,`default-language`],explanation:[`text`,D.component.getLanguageLabel()],text:[`preset`,B.check.enableChangeLanguage()?`language-change-enable-general`:`language-change-unenable`]}),(0,Z.jsx)(m,{title:[`preset`,`max-category-level`],explanation:[`text`,z.primitive.toLevel(e.maxCategoryLevels)],event:`hint`}),(0,Z.jsx)(m,{title:[`preset`,`level-common-ratio`],explanation:[`text`,e.levelCommonRatio.toString()],event:`hint`})]})}),(0,Z.jsx)(c,{children:D.hooks.useDefaultRoutes(t)})]})}function Me(){let e=j,t=e.basic.overview,n=D.hooks.usePath(1),r=t.information,i=B.check.debugMode();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(T,{path:n,background:`world`,children:[(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(s,{text:`world`,path:n,children:[(0,Z.jsx)(G,{base:r,color:t.information.color}),(0,Z.jsx)(m,{title:[`preset`,`version`],explanation:[`text`,t.version.toString()]}),(0,Z.jsx)(m,{title:[`preset`,`updated`],explanation:[`text`,e.basic.development.timestamp.published]}),(0,Z.jsx)(m,{title:[`preset`,`author`],explanation:[`text`,t.author],event:`hint`}),t.homepage&&(0,Z.jsx)(m,{title:[`preset`,`homepage`],explanation:[`url`,t.homepage],event:`hint`}),(0,Z.jsx)(m,{title:[`preset`,`estimated-playing-time`],explanation:[`text`,`${t.estimatedPlayingTime.value} ${V(t.estimatedPlayingTime.unit).information.name}`],event:`hint`})]})}),(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(s,{text:`console`,path:n,children:[(0,Z.jsx)(G,{base:V(`console`).information}),(0,Z.jsx)(m,{title:[`preset`,`version`],explanation:[`text`,`0.0.1519`]}),(0,Z.jsx)(m,{title:[`preset`,`updated`],explanation:[`text`,Pe(`2026-08-04T03:45:37.000Z`)]}),(0,Z.jsx)(m,{title:[`preset`,`author`],explanation:[`text`,`Yutori`]}),(0,Z.jsx)(m,{title:[`preset`,`homepage`],explanation:[`url`,`https://idle.yu-to-ri.net/document/index.html`]}),(0,Z.jsx)(Ne,{})]})}),!i&&(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(s,{text:`iconify`,path:n,children:[(0,Z.jsx)(G,{base:V(`iconify`).information}),Object.entries(ge).map(([e,t])=>(0,Z.jsx)(he,{summary:t},e))]})})]}),(0,Z.jsx)(c,{children:D.hooks.useDefaultRoutes(n)})]})}function Ne(){let[e,t]=D.hooks.useConfirm(e=>{e||(D.viewport.normalize(),window.location.hash=``,requestAnimationFrame(()=>window.location.reload()))});return(0,Z.jsxs)(H,{children:[(0,Z.jsx)(N,{id:`force-restart`,event:[`click`,()=>t(),e]}),(0,Z.jsx)(a,{id:`force-restart`})]})}function Pe(e){let t=new Date(e);return`${t.getFullYear()}/${String(t.getMonth()+1).padStart(2,`0`)}/${String(t.getDate()).padStart(2,`0`)} ${String(t.getHours()).padStart(2,`0`)}:${String(t.getMinutes()).padStart(2,`0`)}:${String(t.getSeconds()).padStart(2,`0`)}`}function Fe(){let e=D.hooks.usePath(1),t=L.progress.getCoins(),n=(Date.now()-A.playing.time.initialized)/1e3,r=B.check.visibleList(E(!0).items).reduce((e,t)=>(e.now+=t.user.countNow,e.record+=t.user.countRecord,e),{now:0,record:0}),i=z.primitive.toLevel(B.check.visibleList(E(!0).categories).reduce((e,t)=>t.world.numeric?e+Math.floor(t.user.level):e,0)),a=B.check.visibleList(E(!0).actions).reduce((e,t)=>(e+=t.user.count,e),0);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(T,{path:e,background:`world`,children:[(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(s,{text:`coin`,path:e,children:t.map(e=>(0,Z.jsxs)(K.Fragment,{children:[(0,Z.jsx)(m,{title:[`basic`,e],explanation:[`text`,e.user.countNow.toString()]}),(0,Z.jsx)(m,{title:[`preset`,`amount-earned`],explanation:[`text`,e.user.countRecord.toString()]})]},e.id))})}),(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(s,{text:`time`,path:e,children:(0,Z.jsx)(m,{title:[`preset`,`playing-time`],explanation:[`seconds`,n]})})}),(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(s,{text:`item`,path:e,children:[(0,Z.jsx)(m,{title:[`preset`,`count-now`],explanation:[`text`,r.now.toString()]}),(0,Z.jsx)(m,{title:[`preset`,`count-gained`],explanation:[`text`,r.record.toString()]})]})}),(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(s,{text:`action`,path:e,children:[(0,Z.jsx)(m,{title:[`preset`,`total-level`],explanation:[`text`,i]}),(0,Z.jsx)(m,{title:[`preset`,`count-actioned`],explanation:[`text`,a.toString()]})]})})]}),(0,Z.jsx)(c,{children:D.hooks.useDefaultRoutes(e)})]})}function Ie(){let e=D.hooks.usePath(1),t=e=>D.component.sortGroup(e,e=>e.world.group).flat().map(e=>{let t=L.event.getArchived(e).flag??!1;return{basic:e,explanation:``,explanationIcon:V(t?`yes`:`no`).information,flagColor:t,link:`${e.id}.event`,ribbon:L.event.checkUnclaimed(e)}}),n=t(B.check.visibleList(ee).filter(e=>e.categoryId===``)),r=[];for(let e of B.check.visibleList(E(!0).categories)){let n=B.check.visibleList(e.tasks);n.length!=0&&r.push({category:e,indexes:t(n)})}return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(T,{path:e,background:`world`,children:[n.length>0&&(0,Z.jsx)(s,{text:`missions`,path:e,children:(0,Z.jsx)(W,{indexes:n,layerDepth:1})}),r.map(e=>(0,Z.jsx)(W,{categoryId:e.category.id,indexes:e.indexes,layerDepth:1},e.category.id))]}),(0,Z.jsx)(c,{children:D.hooks.useDefaultRoutes(e)})]})}function Le(){let e=D.hooks.usePath(1),t=[];for(let e of B.check.visibleList(E(!0).categories)){let n=B.check.visibleList(e.actions);if(n.length==0)continue;let r=e.user.progressing?I(e.user.progressing.general.id):void 0,i=n.map(e=>({basic:e,explanation:z.primitive.toLevel(e.world.level),flagColor:B.check.matchedLevel(e),link:`${e.id}.action`,ribbon:L.progress.checkSingleCompleted(void 0,e.id)||e.id===r?.id})),a=L.progress.checkSingleCompleted(e.id);t.push({category:e,actions:i,progress:r,ribbonCategory:a})}let n;try{n=M(j.basic.general.queue.information.id)}catch{n=null}let r=L.progress.getSingletonProgressing(),i=r?I(r.general.id):void 0;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(T,{path:e,background:`world`,children:[n&&n.user&&B.trade.getMaxQueue()>=1&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(P,{}),(0,Z.jsx)(g,{href:`${e.path}/${i?.id}.action`,active:!!i,children:(0,Z.jsx)(m,{title:[`basic`,n],explanation:[`text`,`${B.trade.getWaitingCount()} / ${B.trade.getMaxQueue()}`],color:n.information.color,flagColor:B.trade.hasQueueRoom()})})]}),(0,Z.jsx)(Z.Fragment,{children:t.map(t=>(0,Z.jsx)(W,{categoryId:t.category.id,indexes:t.actions,layerDepth:1,event:[`hold`,L.progress.toggleAct],children:t.progress&&(0,Z.jsxs)(g,{href:`${e.path}/${t.progress.id}.action`,children:[(0,Z.jsx)(m,{title:[`basic`,t.progress],ribbon:t.ribbonCategory,event:[`hold`,L.progress.toggleAct]}),(0,Z.jsx)(x,{categoryId:t.category.id,type:`progress`})]})},t.category.id))})]}),(0,Z.jsx)(c,{children:D.hooks.useDefaultRoutes(e)})]})}function Re(){let e=D.hooks.usePath(2),[t,n]=K.useState(new globalThis.Set),r=E(!0).items.filter(e=>e.user.countNow>=1&&e.world.sellingValue>0&&B.check.locked(e)===`released`),i=e=>{n(t=>{let n=new globalThis.Set(t);return n.has(e.id)?n.delete(e.id):n.add(e.id),n})},a=r.map(e=>{let n=e.world.sellingValue*e.user.countNow;return{basic:e,explanation:z.primitive.toStandardCount(n),flagColor:!0,link:void 0,ribbon:t.has(e.id)}}),o=r.filter(e=>t.has(e.id)),l=o.length,u=o.reduce((e,t)=>e+t.user.countNow,0),d=new globalThis.Map;for(let e of o){let t=B.trade.resolveCoin(e),n=e.world.sellingValue*e.user.countNow,r=d.get(t.id);r?r.value+=n:d.set(t.id,{coin:t,value:n})}let f=()=>{let e=[];for(let t of o){let n=t.world.sellingValue,r=t.user.countNow;if(r<=0||n===0)continue;let i=B.trade.resolveCoin(t),a=B.trade.addAcquisitions([{id:i.id,count:n,chance:1,type:`item`}],r),o=B.trade.reduceRequirements([{type:`item`,id:t.id,count:1,chance:1,equipment:!1}],r);e=[...e,...a,...o]}L.progress.unequipZeroItems(),D.component.forceUpdate(),e.length>0&&D.toaster.showTrade(B.trade.summarizeTrades(e)),n(new globalThis.Set)},[p,h]=D.hooks.useConfirm(e=>!e&&f());return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(T,{path:e,children:[(0,Z.jsx)(s,{text:`items`,path:e,children:(0,Z.jsx)(W,{indexes:a,layerDepth:2,event:[`click`,i]})}),(0,Z.jsxs)(s,{text:`selected`,path:e,children:[(0,Z.jsx)(m,{title:[`preset`,`kind`],explanation:[`text`,l.toString()]}),(0,Z.jsx)(m,{title:[`preset`,`count`],explanation:[`text`,u.toString()]}),[...d.values()].map(({coin:e,value:t})=>(0,Z.jsx)(m,{title:[`preset`,`value`],explanation:[`text`,z.primitive.toStandardCount(t)],inlineIcon:[`information`,e.information],flagColor:!0},e.id)),(0,Z.jsx)(N,{id:`sell`,event:[`click`,()=>h(),p],active:l>0})]})]}),(0,Z.jsx)(c,{children:D.hooks.useDefaultRoutes(e)})]})}function ze(){let e=D.hooks.usePath(1),t=[];for(let e of B.check.visibleList(E(!0).categories)){let n=B.check.visibleList(e.items);if(n.length==0)continue;let r=D.component.sortGroup(n,e=>e.world.group).map(t=>{let n=t[0].world.group,r=e.world.equipmentGroups.includes(n),i=e.user.equipments.find(e=>t.some(t=>t.id===e));return{nodes:t.map(e=>({basic:e,explanation:e.user.countNow.toString(),link:`${e.id}.item`,ribbon:i===e.id})),groupId:n,equipmentable:r,equippingId:i}});t.push({category:e,groups:r})}let n=L.progress.getCoins(),r;try{let e=j.basic.general.capacity.information.id;r=M(e)}catch{r=null}let i;try{let e=j.basic.general.queue.information.id;i=M(e)}catch{i=null}return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(T,{path:e,background:`world`,children:[(0,Z.jsx)(P,{}),n.map((t,n)=>(n==0||t.user.countRecord>0)&&(0,Z.jsx)(g,{href:`${e.path}/${t.id}.item`,children:(0,Z.jsx)(m,{title:[`basic`,t],explanation:[`text`,t.user.countNow.toString()],color:t.information.color})},t.id)),r&&r.user&&B.trade.getMaxCapacity()>0&&(0,Z.jsx)(g,{href:`${e.path}/${r.id}.item`,children:(0,Z.jsx)(m,{title:[`basic`,r],explanation:[`text`,`${B.trade.getCurrentItemTypesCount()} / ${B.trade.getMaxCapacity()}`],color:r.information.color,flagColor:B.trade.hasCapacityRoom()})}),i&&i.user&&(0,Z.jsx)(g,{href:`${e.path}/${i.id}.item`,children:(0,Z.jsx)(m,{title:[`basic`,i],explanation:[`text`,`${B.trade.getWaitingCount()} / ${B.trade.getMaxQueue()}`],color:i.information.color,flagColor:B.trade.hasQueueRoom()})}),(0,Z.jsx)(g,{href:`${e.path}/selling.character`,children:(0,Z.jsx)(m,{title:[`preset`,`selling`]})}),t.map(t=>(0,Z.jsx)(s,{text:t.category,path:e,children:t.groups.map((n,r)=>(0,Z.jsx)(W,{indexes:n.nodes,layerDepth:1,event:[`hold`,L.progress.toggleEquip],children:z.primitive.switches([n.equippingId!==void 0,n.equipmentable,!0],[n.equippingId&&(0,Z.jsx)(g,{href:`${e.path}/${n.equippingId}.item`,children:(0,Z.jsx)(m,{title:[`type`,n.equippingId,`item`],explanation:[`preset`,`equipping`],inlineIcon:`explanation`,event:[`hold`,L.progress.toggleEquip],flagColor:!0})}),(0,Z.jsx)(m,{title:[`preset`,`equipment`],explanation:[`preset`,`unequipping`],inlineIcon:`explanation`,flagColor:!1}),(0,Z.jsx)(Z.Fragment,{})])},`${t.category.id}-${r}`))},t.category.id))]}),(0,Z.jsxs)(c,{children:[(0,Z.jsx)(U,{path:`${e.path}/selling.character/*?`,children:(0,Z.jsx)(Re,{})}),D.hooks.useDefaultRoutes(e)]})]})}function Be(){let e=D.hooks.usePath(1),t=[];for(let e of B.check.visibleList(E(!0).categories)){let n=e.summerizedProperties;if(n.size==0)continue;let r=[];for(let e of n.values()){if(e.value==0)continue;let t={basic:V(e.id),explanation:z.primitive.getWithSign(e.value),flagColor:D.style.getSignFlag(e.value),link:`${e.categoryId}_${e.id}.correction`,ribbon:!1};r.push(t)}r.sort((e,t)=>k.indexOf(e.basic.id)-k.indexOf(t.basic.id)),t.push({category:e,indexes:r})}return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(T,{path:e,background:`world`,children:t.length>0?(0,Z.jsx)(Z.Fragment,{children:t.map(e=>(0,Z.jsx)(W,{categoryId:e.category.id,indexes:e.indexes,layerDepth:1},e.category.id))}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(P,{}),(0,Z.jsx)(a,{id:`no-status`})]})}),(0,Z.jsxs)(c,{children:[(0,Z.jsx)(U,{path:`${e.path}/:type.correction/*?`,children:(0,Z.jsx)(ae,{layerDepth:2})}),D.hooks.useDefaultRoutes(e)]})]})}function Ve(){let e=D.hooks.usePath(1),t=B.check.debugMode();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(T,{path:e,background:`world`,children:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(P,{}),(0,Z.jsx)(He,{path:e}),(0,Z.jsx)(P,{}),(0,Z.jsx)(Ue,{}),(0,Z.jsx)(P,{}),(0,Z.jsx)(We,{}),(0,Z.jsx)(P,{}),(0,Z.jsx)(Ge,{}),(0,Z.jsx)(P,{}),(0,Z.jsx)(Ke,{}),(0,Z.jsx)(P,{}),!t&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Je,{}),(0,Z.jsx)(P,{})]}),(0,Z.jsx)(qe,{}),(0,Z.jsx)(P,{}),(0,Z.jsx)(Ye,{})]})}),(0,Z.jsxs)(c,{children:[(0,Z.jsx)(U,{path:`${e.path}/language.world/*?`,children:(0,Z.jsx)(oe,{layerDepth:2})}),D.hooks.useDefaultRoutes(e)]})]})}function He({path:e}){let t=B.check.enableChangeLanguage();return(0,Z.jsx)(g,{href:`${e.path}/language.world`,active:t,children:(0,Z.jsx)(O,{title:[`preset`,`language`],explanation:[`text`,D.component.getLanguageLabel()],text:[`preset`,t?`language-change-enable`:`language-change-unenable`],inlineIcon:[`preset`,`language-${A.config.language}`]})})}function Ue(){let[e,t]=(0,K.useState)(A.config.categoryShortcut);return(0,Z.jsx)(O,{title:[`preset`,`category-shortcut`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{A.config.categoryShortcut=!e,t(!e),D.component.forceUpdate()}],text:[`preset`,`category-shortcut`],inlineIcon:`explanation`})}function We(){let[e,t]=(0,K.useState)(A.config.showingHint);return(0,Z.jsx)(O,{title:[`preset`,`showing-hint`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{A.config.showingHint=!e,t(!e),D.component.forceUpdate()}],text:[`preset`,`showing-hint`],inlineIcon:`explanation`})}function Ge(){let[e,t]=(0,K.useState)(A.config.showingNavigation);return(0,Z.jsx)(O,{title:[`preset`,`showing-navigation`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{A.config.showingNavigation=!e,t(!e),D.component.forceUpdate()}],text:[`preset`,`showing-navigation`],inlineIcon:`explanation`})}function Ke(){let[e,t]=(0,K.useState)(A.config.performingHighly);return(0,Z.jsx)(O,{title:[`preset`,`performing-highly`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{A.config.performingHighly=!e,t(!e)}],text:[`preset`,`performing-highly`],inlineIcon:`explanation`})}function qe(){let[,e]=D.hooks.useLocation(),t=()=>{let e=JSON.parse(JSON.stringify(A)).world,t=JSON.stringify(A,null,2),n=new Blob([t],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`),a=V(`export-game`);i.href=r,i.download=`yutori-idle-${e.id}-${e.version}.json`,i.click(),URL.revokeObjectURL(r),D.toaster.showTip(a.information.explanation,a,!1)},n=()=>{let e=V(`import-mistake`);D.toaster.showTip(e.information.explanation,e,!1)};return(0,Z.jsxs)(H,{children:[(0,Z.jsx)(N,{id:`export-game`,event:[`click`,t,!1]}),(0,Z.jsx)(N,{id:`import-game`,event:[`click`,()=>{let t=document.createElement(`input`);t.type=`file`,t.accept=`.json`,t.onchange=t=>{let r=t.target.files?.[0];if(r){let t=new FileReader;t.onload=t=>{try{let r=JSON.parse(t.target?.result);if(r.world?.id!==j.basic.overview.information.id||r.world?.version!==j.basic.overview.version){n();return}ce.userData.handle.importUserData(r);let i=V(`import-game`);D.toaster.showTip(i.information.explanation,i,!1),e(`/`,{replace:!0})}catch{n()}},t.readAsText(r)}},t.click()},!1]})]})}function Je(){let[e,t]=(0,K.useState)(null);return(0,K.useEffect)(()=>{let e=e=>{e.preventDefault(),t(e)};return window.addEventListener(`beforeinstallprompt`,e),()=>{window.removeEventListener(`beforeinstallprompt`,e)}},[]),(0,Z.jsxs)(H,{children:[(0,Z.jsx)(N,{id:`pwa`,event:[`click`,async()=>{if(!e){D.toaster.showResult(!1);return}try{await e.prompt();let{outcome:n}=await e.userChoice;D.toaster.showResult(n===`accepted`),t(null)}catch{D.toaster.showResult(!1)}},!1]}),(0,Z.jsx)(a,{id:`pwa`})]})}function Ye(){let[e,n]=D.hooks.useConfirm(e=>{if(e){let e=V(`reset-alert`);D.toaster.showTip(e.information.explanation,e)}else{if(r!=`DELETE`&&!B.check.debugMode())return;fe.player.disableUnloadAndReset(),ce.userData.handle.resetLocal(),D.toaster.hideAll(!0),window.location.hash=``,window.location.reload()}}),[r,i]=(0,K.useState)(`*`),o=e=>{i(e)},s=B.check.debugMode();return(0,Z.jsxs)(H,{children:[(0,Z.jsx)(N,{id:`reset-game`,event:[`click`,()=>n(),e]}),(0,Z.jsx)(t,{id:`reset-really`,value:r,changeHandler:o,placeholder:`*`}),(0,Z.jsx)(a,{id:`reset-game`}),s&&(0,Z.jsx)(a,{id:`reset-debug-mode`})]})}function Xe(){let e=D.hooks.usePath(1);return B.check.debugMode()?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(T,{path:e,background:`world`,children:[(0,Z.jsx)(P,{}),(0,Z.jsx)(Ze,{}),(0,Z.jsx)(P,{}),(0,Z.jsx)(Qe,{})]}),(0,Z.jsx)(c,{children:D.hooks.useDefaultRoutes(e)})]}):(0,Z.jsx)(Z.Fragment,{})}function Ze(){let[e,t]=(0,K.useState)(A.config.acceleration.multiplier),[n,r]=(0,K.useState)(A.config.acceleration.active);return(0,Z.jsxs)(H,{children:[(0,Z.jsx)(O,{title:[`preset`,`acceleration`],explanation:[`preset`,n?`yes`:`no`],event:[`click`,()=>{let e=A.config.acceleration.active;A.config.acceleration.active=!e,r(!e)}],text:`title`,inlineIcon:`explanation`,flagColor:n}),(0,Z.jsx)(i,{id:`multiplier`,value:e,changeHandler:e=>{t(e),A.config.acceleration.multiplier=e},placeholder:`-`,max:100,min:1})]})}function Qe(){let[e,n]=(0,K.useState)(`category`),r=()=>{n(R[(R.indexOf(e)+1)%R.length])},[o,s]=(0,K.useState)(``),c=e=>{s(e)},[l,u]=(0,K.useState)(`plus`),d=()=>{u(e=>e===`plus`?`minus`:`plus`)},[f,p]=(0,K.useState)(1),m=e=>{p(e)},[h,g]=D.hooks.useConfirm(t=>!t&&B.trade.adjust(e,o,l,f));return(0,Z.jsxs)(H,{children:[(0,Z.jsx)(O,{title:[`preset`,`adjustment`],text:`title`}),(0,Z.jsx)(O,{title:[`preset`,`adjustment-type`],explanation:[`preset`,`adjustment-${e}`],inlineIcon:[`preset`,e],event:[`click`,r],bold:!0,text:`explanation`}),(0,Z.jsx)(t,{id:`adjustment-id`,value:o,changeHandler:c,placeholder:`all`}),(0,Z.jsx)(a,{id:`adjustment-id`}),(0,Z.jsx)(O,{title:[`preset`,`adjustment-sign`],explanation:[`preset`,`adjustment-${l}`],inlineIcon:`explanation`,event:[`click`,d],bold:!0,text:`explanation`}),(0,Z.jsx)(i,{id:`adjustment-count`,value:f,changeHandler:m,placeholder:`1`,max:1e3}),(0,Z.jsx)(a,{id:`adjustment-count`}),(0,Z.jsx)(N,{id:`adjustment-adjust`,event:[`click`,()=>g(),h]})]})}function $e(){let e=B.check.debugMode(),t=D.hooks.usePath(0),n=D.component.sortGroup(B.check.visibleList(E(!0).categories),e=>e.world.group);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(T,{path:t,background:`world`,children:[(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(s,{text:`character`,path:t,children:[(0,Z.jsx)(g,{href:`/activity.character`,children:(0,Z.jsx)(m,{title:[`preset`,`activity`],bold:!0})}),(0,Z.jsx)(g,{href:`/inventory.character`,children:(0,Z.jsx)(m,{title:[`preset`,`inventory`],bold:!0})}),(0,Z.jsx)(g,{href:`/status.character`,children:(0,Z.jsx)(m,{title:[`preset`,`status`],bold:!0})}),B.check.visibleList(ee).length>0&&(0,Z.jsx)(g,{href:`/missions.character`,children:(0,Z.jsx)(m,{title:[`preset`,`missions`],bold:!0})})]})}),(0,Z.jsx)(Z.Fragment,{children:n.map(e=>(0,Z.jsx)(b,{categories:e,path:t},e[0].world.group))}),(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(s,{text:`world`,path:t,children:[(0,Z.jsx)(g,{href:`/overview.world`,children:(0,Z.jsx)(m,{title:[`preset`,`overview`],bold:!0})}),(0,Z.jsx)(g,{href:`/general.world`,children:(0,Z.jsx)(m,{title:[`preset`,`general`],bold:!0})}),(0,Z.jsx)(g,{href:`/statistics.world`,children:(0,Z.jsx)(m,{title:[`preset`,`statistics`],bold:!0})}),(0,Z.jsx)(g,{href:`/config.world`,children:(0,Z.jsx)(m,{title:[`preset`,`config`],bold:!0})}),e&&(0,Z.jsx)(g,{href:`/debug.world`,children:(0,Z.jsx)(m,{title:[`preset`,`debug`],bold:!0})})]})})]}),(0,Z.jsxs)(c,{children:[(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(U,{path:`/activity.character/*?`,children:(0,Z.jsx)(Le,{})}),(0,Z.jsx)(U,{path:`/inventory.character/*?`,children:(0,Z.jsx)(ze,{})}),(0,Z.jsx)(U,{path:`/status.character/*?`,children:(0,Z.jsx)(Be,{})}),(0,Z.jsx)(U,{path:`/missions.character/*?`,children:(0,Z.jsx)(Ie,{})})]}),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(U,{path:`/overview.world/*?`,children:(0,Z.jsx)(Me,{})}),(0,Z.jsx)(U,{path:`/general.world/*?`,children:(0,Z.jsx)(je,{})}),(0,Z.jsx)(U,{path:`/statistics.world/*?`,children:(0,Z.jsx)(Fe,{})}),(0,Z.jsx)(U,{path:`/config.world/*?`,children:(0,Z.jsx)(Ve,{})}),(0,Z.jsx)(U,{path:`/debug.world/*?`,children:(0,Z.jsx)(Xe,{})})]}),D.hooks.useDefaultRoutes(t)]})]})}function et({children:e}){let t=tt();return u(`span`,{id:`grider`,css:[t.base,t.scrollbarStyle],children:e})}function tt(){return{base:F`
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
		`,scrollbarStyle:F`
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
		`}}var nt={duration:300,snappingDown:!0};function rt(){let e=(0,K.useRef)(null),t=D.hooks.useSmoothRef(()=>{let e=L.progress.getSingletonProgressing();return e?se(I(e.general.id).categoryId).user.level%1:0},nt);return D.hooks.useUpdate(()=>{let n=e.current;if(!n)return;let r=L.progress.getSingletonProgressing(),i=z.primitive.clamp(t.current,0,1);n.style.setProperty(`--header-percentage`,`${i*100}%`),n.style.setProperty(`--header-color`,r?D.style.geFadedColor(I(r.general.id).information.color):`transparent`)}),u(`div`,{css:it(),ref:e})}function it(){return F`
		position: fixed;
		top: ${C.constants.barHeight}px;
		left: 0;
		width: 100svw;
		height: ${C.constants.headerLineHeight}px;
		--header-percentage: 0%;
		--header-color: transparent;
		background: linear-gradient(to right, var(--header-color) var(--header-percentage), transparent var(--header-percentage));
		z-index: 20;
	`}var at={},ot={duration:300};function st(){let[e,t]=(0,K.useState)(()=>D.scroll.getScrolledPosition().x>0),[n,r]=(0,K.useState)(()=>L.progress.getSingletonProgressing()?.general.id),i=(0,K.useRef)(null),[,a]=D.hooks.useLocation(),o=()=>{D.scroll.slideTop()},s=()=>{let e=D.component.getSingletonProgressingPath();e&&(a(e),D.scroll.slideBottom())},c=D.hooks.useSmoothRef(()=>{let e=L.progress.getSingletonProgressing();return e?L.progress.caluculateBarProgresing(e):0},()=>L.progress.getSingletonProgressing()?.combat?ot:at);return D.hooks.useUpdate(()=>{r(L.progress.getSingletonProgressing()?.general.id),t(D.scroll.getScrolledPosition().x>0);let e=i.current;e&&(e.style.transform=`scaleX(${z.primitive.clamp(c.current,0,1)})`)}),v(`span`,{css:[ct(8).base],children:[u(p,{height:8,fillRef:i,color:n?D.style.getActionProgressColor(n):void 0}),e&&u(d,{id:`go-top`,leftern:!0,handler:o,size:26}),n&&u(d,{id:n,leftern:!1,handler:s,size:26})]})}function ct(e){return{base:F`
			/* display: flex; */
			position: relative;
			width: 100svw;
			height: ${e}px;
			/* bottom: 0; */
			z-index: 20;
			background-color: transparent;
		`}}var Q;function lt(){if(!Q)return D.component.setBackgroundHandler(ut),ut(`world`),null}function ut(e){let t,n=B.check.debugMode();if(e==`world`){if(Q==`world`)return;t=j.basic.design.background,Q=e}else{if(Q&&Q[0]==`category`&&Q[1]==e[1])return;t=se(e[1]).world.background,t?Q=e:(t=j.basic.design.background,Q=`world`)}t&&!n&&(t.startsWith(`./`)||t.startsWith(`data:`));let r=C.colors.background,{h:i,s:a,l:o}=w(r).hsl().object(),s=.15,c=dt(i*(1-s),a*(1-s),o*(1-s)),l=dt(i*1.15,a*1.15,o*1.15);if(window.document.body.style.backgroundColor=C.colors.bar,t){let e=`linear-gradient(
			to top,
			${w(c).alpha(.5).rgb().string()},
			${w(r).alpha(.5).rgb().string()},
			${w(l).alpha(.5).rgb().string()}
		)`;window.document.body.style.background=`${e}, url(${t}) center / cover no-repeat fixed`}else window.document.body.style.background=`linear-gradient(
			to top,
			${c},
			${r},
			${l}
		)`}function dt(e,t,n){return`hsl(${e}, ${t}%, ${n}%)`}function ft(){let[e,t]=(0,K.useState)(!1),n=(0,K.useRef)(!1);(0,K.useEffect)(()=>{(async()=>{if(!n.current){n.current=!0;try{await te(),me(),ne(),L.event.check(),t(!0)}catch(e){console.error(`Initialization error:`,e)}}})()},[]);let[r,i]=D.hooks.useLocation();(0,K.useEffect)(()=>{if(!e)return;let t=de(r);t&&i(t,{replace:!0})},[e,r,i]),(0,K.useEffect)(()=>{e&&(pe(),ie())},[e]);let a=()=>{if(B.check.debugMode())return{background:`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,color:`white`};let e=document.querySelector(`meta[name="bar-color"]`),t=document.querySelector(`meta[name="text-color"]`);return{background:e?.content||`#667eea`,color:t?.content||`white`}};if(!e){let e=a();return v(`div`,{css:Ct(e.background,e.color),children:[u(Ae,{color:e.color,size:80,cssOverride:{display:`block`}}),u(`h2`,{children:`Loading Game...`}),u(`p`,{children:`Initializing world data and assets`})]})}return u(_,{children:u(pt,{})})}function pt(){return e(),v(l,{children:[u(`div`,{style:{display:le?`block`:`none`},children:`This game was interrupted because it was opened in another tab.`}),v(`div`,{style:{display:le?`none`:`block`},children:[u(h,{styles:xt}),u(S,{base:`/`,hook:Ce,children:v(`div`,{css:St,children:[u(rt,{}),u(et,{children:u($e,{})}),u(st,{})]})}),u(_e,{gutter:ht,containerClassName:$,children:e=>u(r,{toast:e,style:e.visible?yt:bt})}),u(ue,{}),u(lt,{})]})]})}var mt={fontSize:`11px`,padding:`5px 7px`},ht=5,$=`playerToaster`,gt=`playerToastFadeIn`,_t=`playerToastFadeOut`,vt=`0.3s`,yt={...mt,animation:`${gt} ${vt} ease-out forwards`},bt={...mt,animation:`${_t} ${vt} ease-out forwards`},xt=F`
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

	@keyframes ${gt} {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes ${_t} {
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
	.${$} > div > div > div:last-child {
		margin: 3px 7px;
	}

	/* 本文以外の子＝showResult の成功/失敗アイコン。ライブラリ内で 20px 固定なので、
	   他のアイコンに合わせて縮小する */
	.${$} > div > div > div:not(:last-child) {
		transform: scale(0.67);
	}
`,St=F`
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
`,Ct=(e,t)=>F`
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
`;console.log(`🎮 Player Build Version: 0.0.1519`),console.log(`📅 Player Build Date: ${new Date(`2026-08-04T03:45:37.000Z`).toLocaleString(`ja-JP`)}`),ve.createRoot(document.getElementById(`root`)).render((0,Z.jsx)(K.StrictMode,{children:(0,Z.jsx)(ft,{})}));
import{$ as e,A as t,At as n,B as r,C as i,Ct as a,D as o,E as s,F as c,Ft as l,H as u,I as d,Lt as f,M as p,Mt as m,N as h,Nt as g,O as _,P as v,Pt as y,R as b,S as x,St as S,T as C,Tt as ee,U as te,Ut as w,_ as T,a as E,at as D,b as O,bt as k,c as ne,d as re,dt as ie,et as A,f as ae,g as oe,gt as j,h as se,ht as M,i as ce,j as le,jt as N,k as P,kt as F,l as ue,m as de,mt as I,n as L,nt as fe,o as R,p as pe,r as me,rt as he,s as ge,t as z,tt as _e,u as ve,v as ye,vt as B,w as be,wt as xe,x as V,xt as H,y as U,yt as Se,z as W}from"./control-BJlWjrXC.js";import"./modulepreload-polyfill-Dezn_h7o.js";var G=w(f()),Ce=w(l(),1),K={v:[]},we=()=>K.v.forEach(e=>e()),Te=e=>(K.v.push(e)===1&&addEventListener(`hashchange`,we),()=>{K.v=K.v.filter(t=>t!==e),K.v.length||removeEventListener(`hashchange`,we)}),Ee=()=>`/`+location.hash.replace(/^#?\/?/,``),De=(e,{state:t=null,replace:n=!1}={})=>{let r=location.href,[i,a]=e.replace(/^#?\/?/,``).split(`?`),o=new URL(location.href);o.hash=`/${i}`,a&&(o.search=a);let s=o.href;n?history.replaceState(t,``,s):history.pushState(t,``,s);let c=typeof HashChangeEvent<`u`?new HashChangeEvent(`hashchange`,{oldURL:r,newURL:s}):new Event(`hashchange`,{detail:{oldURL:r,newURL:s}});dispatchEvent(c)},Oe=({ssrPath:e=`/`}={})=>[(0,m.useSyncExternalStore)(Te,Ee,()=>e),De];Oe.hrefs=e=>`#`+e;var ke;(function(e){e.maroon=`#800000`,e.red=`#FF0000`,e.orange=`#FFA500`,e.yellow=`#FFFF00`,e.olive=`#808000`,e.green=`#008000`,e.purple=`#800080`,e.fuchsia=`#FF00FF`,e.lime=`#00FF00`,e.teal=`#008080`,e.aqua=`#00FFFF`,e.blue=`#0000FF`,e.navy=`#000080`,e.black=`#000000`,e.gray=`#808080`,e.silver=`#C0C0C0`,e.white=`#FFFFFF`})(ke||={});var Ae=function(e,t){if(e.includes(`/`))return e.replace(`rgb(`,`rgba(`);var n=e.substring(e.startsWith(`rgba(`)?5:4,e.length-1).trim(),r=n.split(`,`);return r.length===4?e.replace(`rgb(`,`rgba(`):r.length===3?`rgba(${n}, ${t})`:`rgba(${n} / ${t})`},je=function(e,t){if(e.startsWith(`rgb`))return Ae(e,t);if(Object.keys(ke).includes(e)&&(e=ke[e]),e[0]===`#`&&(e=e.slice(1)),e.length===3){var n=``;e.split(``).forEach(function(e){n+=e,n+=e}),e=n}return`rgba(${(e.match(/.{2}/g)||[]).map(function(e){return parseInt(e,16)}).join(`, `)}, ${t})`},Me={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function Ne(e){if(typeof e==`number`)return{value:e,unit:`px`};var t,n=(e.match(/^[0-9.]*/)||``).toString();t=n.includes(`.`)?parseFloat(n):parseInt(n,10);var r=(e.match(/[^0-9]*$/)||``).toString();return Me[r]?{value:t,unit:r}:(console.warn(`React Spinners: ${e} is not a valid css value. Defaulting to ${t}px.`),{value:t,unit:`px`})}function q(e){var t=Ne(e);return`${t.value}${t.unit}`}var Pe=function(e,t,n){var r=`react-spinners-${e}-${n}`;if(typeof window>`u`||!window.document)return r;var i=document.createElement(`style`);document.head.appendChild(i);var a=i.sheet,o=`
    @keyframes ${r} {
      ${t}
    }
  `;return a&&a.insertRule(o,0),r},J=function(){return J=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},J.apply(this,arguments)},Fe=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Ie(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,i=r===void 0?`#000000`:r,a=e.speedMultiplier,o=a===void 0?1:a,s=e.cssOverride,c=s===void 0?{}:s,l=e.size,u=l===void 0?50:l,d=Fe(e,[`loading`,`color`,`speedMultiplier`,`cssOverride`,`size`]),f=Ne(u),p=f.value,m=f.unit,h=J({display:`inherit`,position:`relative`,width:q(u),height:q(u),transform:`rotate(165deg)`},c),g=p/5,_=(p-g)/2,v=_-g,y=je(i,.75),b=Pe(`HashLoader`,`0% {width: ${g}px; box-shadow: ${_}px ${-v}px ${y}, ${-_}px ${v}px ${y}}
    35% {width: ${q(u)}; box-shadow: 0 ${-v}px ${y}, 0 ${v}px ${y}}
    70% {width: ${g}px; box-shadow: ${-_}px ${-v}px ${y}, ${_}px ${v}px ${y}}
    100% {box-shadow: ${_}px ${-v}px ${y}, ${-_}px ${v}px ${y}}`,`before`),x=Pe(`HashLoader`,`0% {height: ${g}px; box-shadow: ${v}px ${_}px ${i}, ${-v}px ${-_}px ${i}}
    35% {height: ${q(u)}; box-shadow: ${v}px 0 ${i}, ${-v}px 0 ${i}}
    70% {height: ${g}px; box-shadow: ${v}px ${-_}px ${i}, ${-v}px ${_}px ${i}}
    100% {box-shadow: ${v}px ${_}px ${i}, ${-v}px ${-_}px ${i}}`,`after`),S=function(e){return{position:`absolute`,top:`50%`,left:`50%`,display:`block`,width:`${p/5}${m}`,height:`${p/5}${m}`,borderRadius:`${p/10}${m}`,transform:`translate(-50%, -50%)`,animationFillMode:`none`,animation:`${e===1?b:x} ${2/o}s infinite`}};return n?G.createElement(`span`,J({style:h},d),G.createElement(`span`,{style:S(1)}),G.createElement(`span`,{style:S(2)})):null}var Y=w(he());function Le(){let e=M,n=e.basic.overview,r=e.basic.general,i=E.hooks.usePath(1),s=n.information,c=z.check.debugMode();return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(T,{path:i,background:`world`,children:[(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(t,{}),(0,Y.jsx)(U,{base:k(i).information})]}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`world`,path:i,children:[(0,Y.jsx)(U,{base:s,color:n.information.color}),(0,Y.jsx)(P,{title:[`preset`,`version`],explanation:[`text`,n.version.toString()]}),(0,Y.jsx)(P,{title:[`preset`,`updated`],explanation:[`text`,e.basic.development.timestamp.published]}),(0,Y.jsx)(P,{title:[`preset`,`author`],explanation:[`text`,n.author],event:`hint`}),n.homepage&&(0,Y.jsx)(P,{title:[`preset`,`homepage`],explanation:[`url`,n.homepage],event:`hint`}),(0,Y.jsx)(P,{title:[`preset`,`estimated-playing-time`],explanation:[`text`,`${n.estimatedPlayingTime.value} ${a(n.estimatedPlayingTime.unit).information.name}`],event:`hint`})]})}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`detail`,path:i,children:[(0,Y.jsx)(O,{title:[`preset`,`default-language`],explanation:[`text`,E.component.getLanguageLabel()],text:[`preset`,z.check.enableChangeLanguage()?`language-change-enable-general`:`language-change-unenable`]}),(0,Y.jsx)(P,{title:[`preset`,`max-category-level`],explanation:[`text`,R.primitive.toLevel(r.maxCategoryLevels)],event:`hint`}),(0,Y.jsx)(P,{title:[`preset`,`level-common-ratio`],explanation:[`text`,r.levelCommonRatio.toString()],event:`hint`})]})}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`console`,path:i,children:[(0,Y.jsx)(U,{base:a(`console`).information}),(0,Y.jsx)(P,{title:[`preset`,`version`],explanation:[`text`,`0.0.1647`]}),(0,Y.jsx)(P,{title:[`preset`,`updated`],explanation:[`text`,R.primitive.toDateTimeText(`2026-08-15T05:05:11.910Z`)]}),(0,Y.jsx)(P,{title:[`preset`,`author`],explanation:[`text`,`Yutori`]}),(0,Y.jsx)(P,{title:[`preset`,`homepage`],explanation:[`url`,`https://idle.yu-to-ri.net/document/index.html`]})]})}),!c&&(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`iconify`,path:i,children:[(0,Y.jsx)(U,{base:a(`iconify`).information}),Object.entries(xe).map(([e,t])=>(0,Y.jsx)(ye,{summary:t},e))]})})]}),(0,Y.jsx)(N,{children:E.hooks.useDefaultRoutes(i)})]})}function Re(){let e=E.hooks.usePath(1),n=L.progress.getCoins(),[r]=G.useState(()=>(Date.now()-I.playing.time.initialized)/1e3),i=z.trade.getMaxCapacity(),a=z.trade.getMaxQueue(),s=S(!0),c=s.items.filter(e=>e.itemType==`normal`),l=s.categories.filter(e=>e.world.numeric),u=s.categories.filter(e=>!z.check.unreleased(e)),f=l.filter(e=>!z.check.unreleased(e)),m=X(s.categories),h=ze(f.reduce((e,t)=>e+Math.floor(t.user.level),0),l.length*M.basic.general.maxCategoryLevels),g=X(s.actions),_=s.actions.reduce((e,t)=>e+t.user.count,0),v=X(c),y=c.reduce((e,t)=>e+t.user.countRecord,0),b=f,C=u.filter(e=>e.actions.length>0),te=u.filter(e=>e.items.length>0),w=X(ee),D=s.events.reduce((e,t)=>e+t.user.count,0);return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(T,{path:e,background:`world`,children:[(0,Y.jsx)(t,{}),(0,Y.jsx)(U,{base:k(e).information}),(0,Y.jsxs)(o,{text:`play-time`,path:e,children:[(0,Y.jsx)(P,{title:[`preset`,`play-started`],explanation:[`text`,R.primitive.toDateTimeText(I.playing.time.initialized)]}),(0,Y.jsx)(P,{title:[`preset`,`play-duration`],explanation:[`seconds`,r]})]}),(0,Y.jsx)(o,{text:`coins-earned`,path:e,children:n.map(e=>(0,Y.jsx)(P,{title:[`basic`,e],explanation:[`text`,e.user.countRecord.toString()]},e.id))}),(0,Y.jsxs)(o,{text:`unique-count`,path:e,children:[(0,Y.jsx)(P,{title:[`preset`,`max-capacity`],explanation:[`text`,i>0?i.toString():`∞`]}),(0,Y.jsx)(P,{title:[`preset`,`max-queue`],explanation:[`text`,a.toString()]})]}),(0,Y.jsxs)(o,{text:`statistics-category`,path:e,children:[(0,Y.jsx)(P,{title:[`preset`,`count-unlocked`],explanation:[`text`,m.text],flagColor:m.flag}),(0,Y.jsx)(P,{title:[`preset`,`level-total`],explanation:[`text`,h.text],flagColor:h.flag}),b.length>0&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(t,{height:j.md}),(0,Y.jsx)(x,{children:b.map(t=>(0,Y.jsx)(d,{href:`${e.path}/${t.id}.category`,children:(0,Y.jsx)(p,{basic:t,explanation:Math.floor(t.user.level).toString()})},t.id))})]})]}),(0,Y.jsxs)(o,{text:`statistics-action`,path:e,children:[(0,Y.jsx)(P,{title:[`preset`,`count-unlocked`],explanation:[`text`,g.text],flagColor:g.flag}),(0,Y.jsx)(P,{title:[`preset`,`count-performed`],explanation:[`text`,_.toString()]}),C.length>0&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(t,{height:j.md}),(0,Y.jsx)(x,{children:C.map(t=>(0,Y.jsx)(d,{href:`${e.path}/${t.id}.category`,children:(0,Y.jsx)(p,{basic:t,explanation:t.actions.reduce((e,t)=>e+t.user.count,0).toString()})},t.id))})]})]}),(0,Y.jsxs)(o,{text:`statistics-item`,path:e,children:[(0,Y.jsx)(P,{title:[`preset`,`count-unlocked`],explanation:[`text`,v.text],flagColor:v.flag}),(0,Y.jsx)(P,{title:[`preset`,`count-earned`],explanation:[`text`,y.toString()]}),te.length>0&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(t,{height:j.md}),(0,Y.jsx)(x,{children:te.map(t=>(0,Y.jsx)(d,{href:`${e.path}/${t.id}.category`,children:(0,Y.jsx)(p,{basic:t,explanation:t.items.reduce((e,t)=>e+t.user.countRecord,0).toString()})},t.id))})]})]}),(0,Y.jsxs)(o,{text:`statistics-event`,path:e,children:[(0,Y.jsx)(P,{title:[`preset`,`count-unlocked`],explanation:[`text`,w.text],flagColor:w.flag}),(0,Y.jsx)(P,{title:[`preset`,`count-triggered`],explanation:[`text`,D.toString()]})]})]}),(0,Y.jsx)(N,{children:E.hooks.useDefaultRoutes(e)})]})}function ze(e,t){return{text:`${e} / ${t}`,flag:E.style.getMaxedFlag(e,t)}}function X(e){return ze(e.filter(e=>!z.check.unreleased(e)).length,e.length)}function Be(){let e=E.hooks.usePath(1),n=e=>E.component.sortGroup(e,e=>e.world.group).flat().map(e=>{let t=L.event.getArchived(e).flag??!1;return{basic:e,explanation:``,explanationIcon:a(t?`yes`:`no`).information,flagColor:t,link:`${e.id}.event`,ribbon:L.event.checkUnclaimed(e)}}),r=z.check.visibleList(ee),i=L.event.getAchievedSummary(r),s=n(r.filter(e=>e.categoryId===``)),c=[];for(let e of z.check.visibleList(S(!0).categories)){let t=z.check.visibleList(e.tasks);t.length!=0&&c.push({category:e,indexes:n(t)})}return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(T,{path:e,background:`world`,children:[(0,Y.jsx)(t,{}),(0,Y.jsx)(U,{base:k(e).information}),(0,Y.jsx)(P,{title:[`preset`,`achieved`],explanation:[`text`,i.text],flagColor:i.flag}),s.length>0&&(0,Y.jsx)(o,{text:`missions`,path:e,children:(0,Y.jsx)(V,{indexes:s,layerDepth:1})}),c.map(e=>(0,Y.jsx)(V,{categoryId:e.category.id,indexes:e.indexes,layerDepth:1},e.category.id))]}),(0,Y.jsx)(N,{children:E.hooks.useDefaultRoutes(e)})]})}function Ve(){let e=E.hooks.usePath(1),n=[];for(let e of z.check.visibleList(S(!0).categories)){let t=z.check.visibleList(e.actions);if(t.length==0)continue;let r=e.user.progressing?B(e.user.progressing.general.id):void 0,i=t.map(e=>({basic:e,explanation:R.primitive.toLevel(e.world.level),flagColor:z.check.matchedLevel(e),link:`${e.id}.action`,ribbon:L.progress.checkSingleCompleted(void 0,e.id)||e.id===r?.id})),a=L.progress.checkSingleCompleted(e.id);n.push({category:e,actions:i,progress:r,ribbonCategory:a})}let r;try{r=H(M.basic.general.queue.information.id)}catch{r=null}let i=z.trade.getQueueSummary(),a=L.progress.getSingletonProgressing(),o=a?B(a.general.id):void 0;return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(T,{path:e,background:`world`,children:[(0,Y.jsx)(t,{}),(0,Y.jsx)(U,{base:k(e).information}),r&&r.user&&(0,Y.jsx)(d,{href:`${e.path}/${o?.id}.action`,active:!!o,children:(0,Y.jsx)(P,{title:[`basic`,r],explanation:[`text`,i.text],color:r.information.color,flagColor:i.flag})}),(0,Y.jsx)(Y.Fragment,{children:n.map(n=>(0,Y.jsx)(V,{categoryId:n.category.id,indexes:n.actions,layerDepth:1,event:[`hold`,L.progress.toggleAct],children:n.progress&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(d,{href:`${e.path}/${n.progress.id}.action`,children:[(0,Y.jsx)(P,{title:[`basic`,n.progress],ribbon:n.ribbonCategory,event:[`hold`,L.progress.toggleAct]}),(0,Y.jsx)(s,{categoryId:n.category.id,type:`progress`})]}),(0,Y.jsx)(t,{height:j.md})]})},n.category.id))})]}),(0,Y.jsx)(N,{children:E.hooks.useDefaultRoutes(e)})]})}function He(){let e=E.hooks.usePath(2),[n,r]=G.useState(new globalThis.Set),i=S(!0).items.filter(e=>e.user.countNow>=1&&e.world.sellingValue>0&&z.check.locked(e)===`released`),a=e=>{r(t=>{let n=new globalThis.Set(t);return n.has(e.id)?n.delete(e.id):n.add(e.id),n})},s=i.map(e=>{let t=e.world.sellingValue*e.user.countNow;return{basic:e,explanation:R.primitive.toStandardCount(t),flagColor:!0,link:void 0,ribbon:n.has(e.id)}}),c=i.filter(e=>n.has(e.id)),l=c.length,u=c.reduce((e,t)=>e+t.user.countNow,0),d=new globalThis.Map;for(let e of c){let t=z.trade.resolveCoin(e),n=e.world.sellingValue*e.user.countNow,r=d.get(t.id);r?r.value+=n:d.set(t.id,{coin:t,value:n})}let f=()=>{let e=[];for(let t of c){let n=t.world.sellingValue,r=t.user.countNow;if(r<=0||n===0)continue;let i=z.trade.resolveCoin(t),a=z.trade.addAcquisitions([{id:i.id,count:n,chance:1,type:`item`}],r),o=z.trade.reduceRequirements([{type:`item`,id:t.id,count:1,chance:1,equipment:!1}],r);e=[...e,...a,...o]}L.progress.unequipZeroItems(),E.component.forceUpdate(),e.length>0&&E.toaster.showTrade(z.trade.summarizeTrades(e)),r(new globalThis.Set)},[p,m]=E.hooks.useConfirm(e=>!e&&f());return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(T,{path:e,children:[(0,Y.jsx)(t,{}),(0,Y.jsx)(U,{base:k(e).information}),(0,Y.jsx)(o,{text:`items`,path:e,children:(0,Y.jsx)(V,{indexes:s,layerDepth:2,event:[`click`,a]})}),(0,Y.jsxs)(o,{text:`selected`,path:e,children:[(0,Y.jsx)(P,{title:[`preset`,`kind`],explanation:[`text`,l.toString()]}),(0,Y.jsx)(P,{title:[`preset`,`count`],explanation:[`text`,u.toString()]}),[...d.values()].map(({coin:e,value:t})=>(0,Y.jsx)(P,{title:[`preset`,`value`],explanation:[`text`,R.primitive.toStandardCount(t)],inlineIcon:[`information`,e.information],flagColor:!0},e.id)),(0,Y.jsx)(h,{id:`sell`,event:[`click`,()=>m(),p],active:l>0})]})]}),(0,Y.jsx)(N,{children:E.hooks.useDefaultRoutes(e)})]})}function Ue(){let e=E.hooks.usePath(1),n=[];for(let e of z.check.visibleList(S(!0).categories)){let t=z.check.visibleList(e.items);if(t.length==0)continue;let r=E.component.sortGroup(t,e=>e.world.group).map(t=>{let n=t[0].world.group,r=e.world.equipmentGroups.includes(n),i=e.user.equipments.find(e=>t.some(t=>t.id===e));return{nodes:t.map(e=>({basic:e,explanation:e.user.countNow.toString(),link:`${e.id}.item`,ribbon:i===e.id})),groupId:n,equipmentable:r,equippingId:i}});n.push({category:e,groups:r})}let r=L.progress.getCoins(),i;try{let e=M.basic.general.capacity.information.id;i=H(e)}catch{i=null}let a;try{let e=M.basic.general.queue.information.id;a=H(e)}catch{a=null}let s=z.trade.getCapacitySummary(),c=z.trade.getQueueSummary();return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(T,{path:e,background:`world`,children:[(0,Y.jsx)(t,{}),(0,Y.jsx)(U,{base:k(e).information}),r.map((t,n)=>(n==0||t.user.countRecord>0)&&(0,Y.jsx)(d,{href:`${e.path}/${t.id}.item`,children:(0,Y.jsx)(P,{title:[`basic`,t],explanation:[`text`,t.user.countNow.toString()],color:t.information.color})},t.id)),i&&i.user&&z.trade.getMaxCapacity()>0&&(0,Y.jsx)(d,{href:`${e.path}/${i.id}.item`,children:(0,Y.jsx)(P,{title:[`basic`,i],explanation:[`text`,s.text],color:i.information.color,flagColor:s.flag})}),a&&a.user&&(0,Y.jsx)(d,{href:`${e.path}/${a.id}.item`,children:(0,Y.jsx)(P,{title:[`basic`,a],explanation:[`text`,c.text],color:a.information.color,flagColor:c.flag})}),(0,Y.jsx)(d,{href:`${e.path}/selling.character`,children:(0,Y.jsx)(P,{title:[`preset`,`selling`]})}),n.map(n=>(0,Y.jsx)(o,{text:n.category,path:e,children:n.groups.map((r,i)=>(0,Y.jsx)(V,{indexes:r.nodes,layerDepth:1,event:[`hold`,L.progress.toggleEquip],children:R.primitive.switches([r.equippingId!==void 0,r.equipmentable,!0],[r.equippingId&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(d,{href:`${e.path}/${r.equippingId}.item`,children:(0,Y.jsx)(P,{title:[`type`,r.equippingId,`item`],explanation:[`preset`,`equipping`],inlineIcon:`explanation`,event:[`hold`,L.progress.toggleEquip],flagColor:!0})}),(0,Y.jsx)(t,{height:j.md})]}),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(P,{title:[`preset`,`equipment`],explanation:[`preset`,`unequipping`],inlineIcon:`explanation`,flagColor:!1}),(0,Y.jsx)(t,{height:j.md})]}),void 0])},`${n.category.id}-${i}`))},n.category.id))]}),(0,Y.jsxs)(N,{children:[(0,Y.jsx)(F,{path:`${e.path}/selling.character/*?`,children:(0,Y.jsx)(He,{})}),E.hooks.useDefaultRoutes(e)]})]})}function We(){let e=E.hooks.usePath(1),n=[];for(let e of z.check.visibleList(S(!0).categories)){let t=e.summerizedProperties;if(t.size==0)continue;let r=[];for(let e of t.values()){if(e.value==0)continue;let t={basic:a(e.id),explanation:R.primitive.getWithSign(e.value),flagColor:E.style.getSignFlag(e.value),link:`${e.categoryId}_${e.id}.correction`,ribbon:!1};r.push(t)}r.sort((e,t)=>ie.indexOf(e.basic.id)-ie.indexOf(t.basic.id)),n.push({category:e,indexes:r})}return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(T,{path:e,background:`world`,children:[(0,Y.jsx)(t,{}),(0,Y.jsx)(U,{base:k(e).information}),n.length>0?(0,Y.jsx)(Y.Fragment,{children:n.map(e=>(0,Y.jsx)(V,{categoryId:e.category.id,indexes:e.indexes,layerDepth:1},e.category.id))}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(t,{}),(0,Y.jsx)(_,{id:`no-status`})]})]}),(0,Y.jsxs)(N,{children:[(0,Y.jsx)(F,{path:`${e.path}/:type.correction/*?`,children:(0,Y.jsx)(oe,{layerDepth:2})}),E.hooks.useDefaultRoutes(e)]})]})}function Ge(){let e=E.hooks.usePath(1),n=z.check.debugMode();return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(T,{path:e,background:`world`,children:[(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(t,{}),(0,Y.jsx)(U,{base:k(e).information})]}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`display`,path:e,children:[(0,Y.jsx)(Ke,{path:e}),(0,Y.jsx)(qe,{}),(0,Y.jsx)(Je,{}),(0,Y.jsx)(Ye,{})]})}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`performance`,path:e,children:[(0,Y.jsx)(Xe,{}),!n&&(0,Y.jsx)(Qe,{})]})}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`data`,path:e,children:[(0,Y.jsx)(Ze,{}),(0,Y.jsx)($e,{})]})})]}),(0,Y.jsxs)(N,{children:[(0,Y.jsx)(F,{path:`${e.path}/language.world/*?`,children:(0,Y.jsx)(se,{layerDepth:2})}),E.hooks.useDefaultRoutes(e)]})]})}function Ke({path:e}){let t=z.check.enableChangeLanguage();return(0,Y.jsx)(d,{href:`${e.path}/language.world`,active:t,children:(0,Y.jsx)(O,{title:[`preset`,`language`],explanation:[`text`,E.component.getLanguageLabel()],text:[`preset`,t?`language-change-enable`:`language-change-unenable`],inlineIcon:[`preset`,`language-${I.config.language}`]})})}function qe(){let[e,t]=(0,G.useState)(I.config.categoryShortcut);return(0,Y.jsx)(O,{title:[`preset`,`category-shortcut`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{I.config.categoryShortcut=!e,t(!e),E.component.forceUpdate()}],text:[`preset`,`category-shortcut`],inlineIcon:`explanation`,flagColor:e})}function Je(){let[e,t]=(0,G.useState)(I.config.showingHint);return(0,Y.jsx)(O,{title:[`preset`,`showing-hint`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{I.config.showingHint=!e,t(!e),E.component.forceUpdate()}],text:[`preset`,`showing-hint`],inlineIcon:`explanation`,flagColor:e})}function Ye(){let[e,t]=(0,G.useState)(I.config.showingNavigation);return(0,Y.jsx)(O,{title:[`preset`,`showing-navigation`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{I.config.showingNavigation=!e,t(!e),E.component.forceUpdate()}],text:[`preset`,`showing-navigation`],inlineIcon:`explanation`,flagColor:e})}function Xe(){let[e,t]=(0,G.useState)(I.config.performingHighly);return(0,Y.jsx)(O,{title:[`preset`,`performing-highly`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{I.config.performingHighly=!e,t(!e)}],text:[`preset`,`performing-highly`],inlineIcon:`explanation`,flagColor:e})}function Ze(){let e=()=>{let e=JSON.parse(JSON.stringify(I)).world,t=JSON.stringify(I,null,2),n=new Blob([t],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`),o=a(`export-game`);i.href=r,i.download=`yutori-idle-${e.id}-${e.version}.json`,i.click(),URL.revokeObjectURL(r),E.toaster.showTip(o.information.explanation,o,!1)},t=()=>{let e=a(`import-mistake`);E.toaster.showTip(e.information.explanation,e,!1)};return(0,Y.jsxs)(C,{children:[(0,Y.jsx)(h,{id:`export-game`,event:[`click`,e,!1]}),(0,Y.jsx)(h,{id:`import-game`,event:[`click`,()=>{let e=document.createElement(`input`);e.type=`file`,e.accept=`.json`,e.onchange=e=>{let n=e.target.files?.[0];if(n){let e=new FileReader;e.onload=e=>{try{let n=JSON.parse(e.target?.result);if(n.world?.id!==M.basic.overview.information.id||n.world?.version!==M.basic.overview.version){t();return}ce.userData.handle.importUserData(n),window.location.hash=`/`,window.location.reload()}catch{t()}},e.readAsText(n)}},e.click()},!1]})]})}function Qe(){let[e,t]=(0,G.useState)(null);return(0,G.useEffect)(()=>{let e=e=>{e.preventDefault(),t(e)};return window.addEventListener(`beforeinstallprompt`,e),()=>{window.removeEventListener(`beforeinstallprompt`,e)}},[]),(0,Y.jsxs)(C,{children:[(0,Y.jsx)(h,{id:`pwa`,event:[`click`,async()=>{if(!e){E.toaster.showResult(!1);return}try{await e.prompt();let{outcome:n}=await e.userChoice;E.toaster.showResult(n===`accepted`),t(null)}catch{E.toaster.showResult(!1)}},!1]}),(0,Y.jsx)(_,{id:`pwa`})]})}function $e(){let[e,t]=(0,G.useState)(`*`),n=e=>{t(e)},[r,i]=E.hooks.useConfirm(t=>{if(t){let e=a(`reset-alert`);E.toaster.showTip(e.information.explanation,e)}else{if(e!=`DELETE`&&!z.check.debugMode())return;me.player.disableUnloadAndReset(),ce.userData.handle.resetLocal(),E.toaster.hideAll(!0),window.location.hash=``,window.location.reload()}}),o=z.check.debugMode();return(0,Y.jsxs)(C,{children:[(0,Y.jsx)(h,{id:`reset-game`,event:[`click`,()=>i(),r]}),(0,Y.jsx)(le,{id:`reset-really`,value:e,changeHandler:n,placeholder:`*`}),(0,Y.jsx)(_,{id:`reset-game`}),o&&(0,Y.jsx)(_,{id:`reset-debug-mode`})]})}function et(){let e=E.hooks.usePath(1);return z.check.debugMode()?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(T,{path:e,background:`world`,children:[(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(t,{}),(0,Y.jsx)(U,{base:k(e).information})]}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsx)(o,{text:`acceleration`,path:e,children:(0,Y.jsx)(nt,{})})}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsx)(o,{text:`skip`,path:e,children:(0,Y.jsx)(rt,{})})}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsx)(o,{text:`adjustment`,path:e,children:(0,Y.jsx)(it,{})})}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsx)(o,{text:`restart`,path:e,children:(0,Y.jsx)(at,{})})})]}),(0,Y.jsx)(N,{children:E.hooks.useDefaultRoutes(e)})]}):(0,Y.jsx)(Y.Fragment,{})}var tt=3600*1e3;function nt(){let[e,t]=(0,G.useState)(I.config.acceleration.multiplier),[n,r]=(0,G.useState)(I.config.acceleration.active);return(0,Y.jsxs)(C,{children:[(0,Y.jsx)(O,{title:[`preset`,`acceleration`],explanation:[`preset`,n?`on`:`off`],event:[`click`,()=>{let e=I.config.acceleration.active;I.config.acceleration.active=!e,r(!e)}],text:`title`,inlineIcon:`explanation`,flagColor:n}),(0,Y.jsx)(be,{id:`multiplier`,value:e,changeHandler:e=>{t(e),I.config.acceleration.multiplier=e},placeholder:`-`,max:100,min:1})]})}function rt(){return(0,Y.jsx)(C,{children:(0,Y.jsx)(h,{id:`skip-hour`,event:[`click`,()=>{let e=L.update.skipOffline(tt);E.component.forceUpdate();let t=a(`skip-hour`);E.toaster.showTip(t.information.name,t,!0),E.toaster.showTrade(e)},!1]})})}function it(){let[e,t]=(0,G.useState)(`category`),n=()=>{t(D[(D.indexOf(e)+1)%D.length])},[r,i]=(0,G.useState)(``),a=e=>{i(e)},[o,s]=(0,G.useState)(`plus`),c=()=>{s(e=>e===`plus`?`minus`:`plus`)},[l,u]=(0,G.useState)(1),d=e=>{u(e)},[f,p]=E.hooks.useConfirm(t=>!t&&z.trade.adjust(e,r,o,l));return(0,Y.jsxs)(C,{children:[(0,Y.jsx)(O,{title:[`preset`,`adjustment-type`],explanation:[`preset`,`adjustment-${e}`],inlineIcon:[`preset`,e],event:[`click`,n],text:`explanation`}),(0,Y.jsx)(le,{id:`adjustment-id`,value:r,changeHandler:a,placeholder:`all`}),(0,Y.jsx)(_,{id:`adjustment-id`}),(0,Y.jsx)(O,{title:[`preset`,`adjustment-sign`],explanation:[`preset`,`adjustment-${o}`],inlineIcon:`explanation`,event:[`click`,c],text:`explanation`}),(0,Y.jsx)(be,{id:`adjustment-count`,value:l,changeHandler:d,placeholder:`1`,max:1e3}),(0,Y.jsx)(_,{id:`adjustment-count`}),(0,Y.jsx)(h,{id:`adjustment-adjust`,event:[`click`,()=>p(),f]})]})}function at(){let[e,t]=E.hooks.useConfirm(e=>{e||(E.viewport.normalize(),window.location.hash=``,requestAnimationFrame(()=>window.location.reload()))});return(0,Y.jsxs)(C,{children:[(0,Y.jsx)(P,{title:[`preset`,`updated`],explanation:[`text`,R.primitive.toDateTimeText(`2026-08-15T05:05:11.910Z`)]}),(0,Y.jsx)(h,{id:`restart`,event:[`click`,()=>t(),e]})]})}function ot(){let e=z.check.debugMode(),n=E.hooks.usePath(0),r=k(n),a=E.component.sortGroup(z.check.visibleList(S(!0).categories),e=>e.world.group),s=z.trade.getQueueSummary(),c=z.trade.getCapacitySummary(),l=z.check.visibleList(ee),u=L.event.getAchievedSummary(l),f=L.property.getStatusSummary();return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(T,{path:n,background:`world`,children:[(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(t,{}),(0,Y.jsx)(U,{base:r.information,color:r.information.color})]}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`character`,path:n,children:[(0,Y.jsx)(d,{href:`/activity.character`,children:(0,Y.jsx)(P,{title:[`preset`,`activity`],explanation:[`text`,s.text],flagColor:s.flag})}),(0,Y.jsx)(d,{href:`/inventory.character`,children:(0,Y.jsx)(P,{title:[`preset`,`inventory`],explanation:[`text`,c.text],flagColor:c.flag})}),(0,Y.jsx)(d,{href:`/status.character`,children:(0,Y.jsx)(P,{title:[`preset`,`status`],explanation:[`text`,f.text],flagColor:f.flag})}),l.length>0&&(0,Y.jsx)(d,{href:`/missions.character`,children:(0,Y.jsx)(P,{title:[`preset`,`missions`],explanation:[`text`,u.text],flagColor:u.flag})})]})}),(0,Y.jsx)(Y.Fragment,{children:a.map(e=>(0,Y.jsx)(i,{categories:e,path:n},e[0].world.group))}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`world`,path:n,children:[(0,Y.jsx)(d,{href:`/overview.world`,children:(0,Y.jsx)(P,{title:[`preset`,`overview`]})}),(0,Y.jsx)(d,{href:`/statistics.world`,children:(0,Y.jsx)(P,{title:[`preset`,`statistics`]})}),(0,Y.jsx)(d,{href:`/config.world`,children:(0,Y.jsx)(P,{title:[`preset`,`config`]})}),e&&(0,Y.jsx)(d,{href:`/debug.world`,children:(0,Y.jsx)(P,{title:[`preset`,`debug`]})})]})})]}),(0,Y.jsxs)(N,{children:[(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(F,{path:`/activity.character/*?`,children:(0,Y.jsx)(Ve,{})}),(0,Y.jsx)(F,{path:`/inventory.character/*?`,children:(0,Y.jsx)(Ue,{})}),(0,Y.jsx)(F,{path:`/status.character/*?`,children:(0,Y.jsx)(We,{})}),(0,Y.jsx)(F,{path:`/missions.character/*?`,children:(0,Y.jsx)(Be,{})})]}),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(F,{path:`/overview.world/*?`,children:(0,Y.jsx)(Le,{})}),(0,Y.jsx)(F,{path:`/statistics.world/*?`,children:(0,Y.jsx)(Re,{})}),(0,Y.jsx)(F,{path:`/config.world/*?`,children:(0,Y.jsx)(Ge,{})}),(0,Y.jsx)(F,{path:`/debug.world/*?`,children:(0,Y.jsx)(et,{})})]}),E.hooks.useDefaultRoutes(n)]})]})}function st({children:e}){let t=ct();return W(`span`,{id:`grider`,css:[t.base,t.scrollbarStyle],children:e})}function ct(){return{base:y`
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
		`,scrollbarStyle:y`
			/* Firefox対応: auto（標準）スタイル、色はbarColorと透明トラック */
			scrollbar-width: auto;
			scrollbar-color: ${e.colors.bar} transparent;

			/* Chrome, Safari, Edge対応 */
			::-webkit-scrollbar-thumb {
				background: ${e.colors.bar};
			}
			::-webkit-scrollbar-thumb:hover {
				background: ${e.colors.actived};
			}
		`}}var lt={duration:300,snappingDown:!0};function ut(){let e=(0,G.useRef)(null),t=E.hooks.useSmoothRef(()=>{let e=L.progress.getSingletonProgressing();return e?Se(B(e.general.id).categoryId).user.level%1:0},lt);return E.hooks.useUpdate(()=>{let n=e.current;if(!n)return;let r=L.progress.getSingletonProgressing(),i=R.primitive.clamp(t.current,0,1);n.style.setProperty(`--header-percentage`,`${i*100}%`),n.style.setProperty(`--header-color`,r?E.style.geFadedColor(B(r.general.id).information.color):`transparent`)}),W(`div`,{css:dt(),ref:e})}function dt(){return y`
		position: fixed;
		top: ${e.constants.barHeight}px;
		left: 0;
		width: 100svw;
		height: ${e.constants.headerLineHeight}px;
		--header-percentage: 0%;
		--header-color: transparent;
		background: linear-gradient(to right, var(--header-color) var(--header-percentage), transparent var(--header-percentage));
		z-index: 20;
	`}var ft={},pt={duration:300};function mt(){let[e,t]=(0,G.useState)(()=>E.scroll.getScrolledPosition().x>0),[n,i]=(0,G.useState)(()=>L.progress.getSingletonProgressing()?.general.id),a=(0,G.useRef)(null),[,o]=E.hooks.useLocation(),s=()=>{E.scroll.slideTop()},l=()=>{let e=E.component.getSingletonProgressingPath();e&&(o(e),E.scroll.slideBottom())},u=E.hooks.useSmoothRef(()=>{let e=L.progress.getSingletonProgressing();return e?L.progress.caluculateBarProgresing(e):0},()=>L.progress.getSingletonProgressing()?.combat?pt:ft);return E.hooks.useUpdate(()=>{i(L.progress.getSingletonProgressing()?.general.id),t(E.scroll.getScrolledPosition().x>0);let e=a.current;e&&(e.style.transform=`scaleX(${R.primitive.clamp(u.current,0,1)})`)}),r(`span`,{css:[ht(8).base],children:[W(c,{height:8,fillRef:a,color:n?E.style.getActionProgressColor(n):void 0}),e&&W(v,{id:`go-top`,leftern:!0,handler:s,size:26}),n&&W(v,{id:n,leftern:!1,handler:l,size:26})]})}function ht(e){return{base:y`
			/* display: flex; */
			position: relative;
			width: 100svw;
			height: ${e}px;
			/* bottom: 0; */
			z-index: 20;
			background-color: transparent;
		`}}var gt,_t,vt=2/3,yt=.15;function bt(){let[e]=E.hooks.useLocation();return gt?null:(E.component.setBackgroundHandler(xt),xt(St(e)),null)}function xt(t){if(Ct(gt,t))return;gt=t;let n=(t==`world`?``:Se(t[1]).world.background)||M.basic.design.background||``;if(_t===n)return;_t=n;let r=e.colors.background,{h:i,s:a,l:o}=A(r).hsl().object(),s=wt(i*(1-yt),a*(1-yt),o*(1-yt)),c=wt(i*1.15,a*1.15,o*1.15),l=e=>`linear-gradient(
		to top,
		${A(s).alpha(e).rgb().string()},
		${A(r).alpha(e).rgb().string()},
		${A(c).alpha(e).rgb().string()}
	)`;window.document.body.style.background=n?`${l(vt)}, url(${n}) center / cover no-repeat fixed`:l(1),window.document.body.style.backgroundColor=e.colors.bar}function St(e){let t=e.split(`/`).reverse();for(let e of t){let[t,n]=e.split(`.`);if(!(!t||!n)){if(n==`category`)return[`category`,t];if(n==`action`)return[`category`,B(t).categoryId];if(n==`item`){let e=H(t).categoryId;return e?[`category`,e]:`world`}}}return`world`}function Ct(e,t){return e?e==`world`?t==`world`:t==`world`?!1:e[1]==t[1]:!1}function wt(e,t,n){return`hsl(${e}, ${t}%, ${n}%)`}function Tt(){let[e,t]=(0,G.useState)(!1),n=(0,G.useRef)(!1);(0,G.useEffect)(()=>{(async()=>{if(!n.current){n.current=!0;try{await ne(),ve(),re(),L.event.check(),t(!0)}catch(e){console.error(`Initialization error:`,e)}}})()},[]);let[i,a]=E.hooks.useLocation();(0,G.useEffect)(()=>{if(!e)return;let t=pe(i);t&&a(t)},[e,i,a]),(0,G.useEffect)(()=>{e&&(ge(),ae())},[e]);let o=()=>{if(z.check.debugMode())return{background:`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,color:`white`};let e=document.querySelector(`meta[name="bar-color"]`),t=document.querySelector(`meta[name="text-color"]`);return{background:e?.content||`#667eea`,color:t?.content||`white`}};if(!e){let e=o();return r(`div`,{css:Qt(e.background,e.color),children:[W(Ie,{color:e.color,size:80,cssOverride:{display:`block`}}),W(`h2`,{children:`Loading Game...`}),W(`p`,{children:`Initializing world data and assets`})]})}return W(_e,{children:W(Et,{})})}function Et(){return fe(),r(b,{children:[W(`div`,{style:{display:ue?`block`:`none`},children:`This game was interrupted because it was opened in another tab.`}),r(`div`,{style:{display:ue?`none`:`block`},children:[W(g,{styles:Xt}),W(n,{base:`/`,hook:Oe,children:r(`div`,{css:Zt,children:[W(ut,{}),W(st,{children:W(ot,{})}),W(mt,{})]})}),W(Dt,{}),W(de,{}),W(bt,{})]})]})}function Dt(){let{toasts:e,handlers:t}=te(Ut),n=new Map;for(let t of e){let e=t.position||jt,r=n.get(e);r?r.push(t):n.set(e,[t])}let r=n.has(`bottom-left`)||n.has(`bottom-right`);return W(`div`,{className:At,style:Mt,children:[...n].map(([e,n])=>W(`div`,{style:Lt(e,r&&e==`bottom-center`),children:(e.startsWith(`top`)?n:[...n].reverse()).map(n=>W(Ot,{item:n,position:e,onHeightUpdate:t.updateHeight},n.id))},e))})}function Ot({item:e,position:t,onHeightUpdate:n}){return W(`div`,{ref:(0,G.useCallback)(t=>{t&&n(e.id,t.getBoundingClientRect().height)},[e.id,n]),style:e.className==E.toaster.inlineClassName?Pt:Ft(t),children:W(u,{toast:e,style:Yt(e)})})}var Z={fontSize:`12px`,padding:`5px 7px`},kt=5,At=`playerToaster`,jt=`top-center`,Q=16,Mt={position:`fixed`,zIndex:9999,top:Q,left:Q,right:Q,bottom:Q,pointerEvents:`none`},Nt=100,Pt={display:`flex`};function Ft(e){return{display:`flex`,flexBasis:`100%`,justifyContent:It(e)}}function It(e){return e.endsWith(`left`)?`flex-start`:e.endsWith(`right`)?`flex-end`:`center`}function Lt(e,t){return{position:`absolute`,left:0,right:0,...e.startsWith(`top`)?{top:0}:{bottom:0},display:`flex`,flexFlow:`row wrap`,alignItems:`center`,justifyContent:It(e),gap:`${kt}px`,...t?{paddingLeft:`${Nt}px`,paddingRight:`${Nt}px`}:{}}}var Rt=`playerToastFadeIn`,zt=`playerToastFadeOut`,Bt=`playerToastPopInTop`,Vt=`playerToastPopInBottom`,Ht=300,$=`${Ht}ms`,Ut={removeDelay:Ht},Wt=3e3,Gt={...Z,pointerEvents:`auto`,animation:`${Rt} ${$} ease-in-out forwards`},Kt={...Z,pointerEvents:`none`,animation:`${zt} ${$} ease-in-out forwards`},qt={...Z,pointerEvents:`auto`,animation:`${Bt} ${$} ease-in-out forwards`},Jt={...Z,pointerEvents:`auto`,animation:`${Vt} ${$} ease-in-out forwards`};function Yt(e){return e.visible?(e.duration??0)<Wt?Gt:(e.position??`top-center`).startsWith(`top`)?qt:Jt:Kt}var Xt=y`
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

	@keyframes ${Rt} {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes ${zt} {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	/* 画面上側に出るトースト（showLeveled / showAchieved）の登場。上の画面外から降りてくる */
	@keyframes ${Bt} {
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
	@keyframes ${Vt} {
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
	.${At} > div > div > div > div:last-child {
		margin: 3px 7px;
	}

	/* 本文以外の子＝showResult の成功/失敗アイコン。ライブラリ内で 20px 固定なので、
	   他のアイコンに合わせて縮小する */
	.${At} > div > div > div > div:not(:last-child) {
		transform: scale(0.67);
	}
`,Zt=y`
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
`,Qt=(e,t)=>y`
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
`;console.log(`🎮 Player Build Version: 0.0.1647`),console.log(`📅 Player Build Date: ${new Date(`2026-08-15T05:05:11.910Z`).toLocaleString(`ja-JP`)}`),Ce.createRoot(document.getElementById(`root`)).render((0,Y.jsx)(G.StrictMode,{children:(0,Y.jsx)(Tt,{})}));
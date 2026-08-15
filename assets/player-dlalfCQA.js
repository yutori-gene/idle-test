import{$ as e,A as t,At as n,B as r,C as i,Ct as a,D as o,E as s,Et as c,F as l,Ft as u,H as d,I as f,It as p,M as m,Mt as h,N as g,Nt as _,O as v,P as y,Pt as b,R as x,Rt as S,S as C,St as w,T,Tt as ee,U as te,Wt as E,_ as D,_t as O,a as k,at as A,b as j,bt as ne,c as re,d as ie,et as M,f as ae,ft as oe,g as se,gt as N,h as ce,ht as P,i as le,j as ue,jt as de,k as F,l as fe,m as pe,n as I,nt as me,o as L,p as he,r as ge,rt as _e,s as ve,st as ye,t as R,tt as be,u as xe,v as Se,w as Ce,wt as z,x as B,xt as V,y as H,yt as U,z as W}from"./control-BEQHYRRA.js";import"./modulepreload-polyfill-Dezn_h7o.js";var G=E(S()),we=E(p(),1),K={v:[]},Te=()=>K.v.forEach(e=>e()),Ee=e=>(K.v.push(e)===1&&addEventListener(`hashchange`,Te),()=>{K.v=K.v.filter(t=>t!==e),K.v.length||removeEventListener(`hashchange`,Te)}),De=()=>`/`+location.hash.replace(/^#?\/?/,``),Oe=(e,{state:t=null,replace:n=!1}={})=>{let r=location.href,[i,a]=e.replace(/^#?\/?/,``).split(`?`),o=new URL(location.href);o.hash=`/${i}`,a&&(o.search=a);let s=o.href;n?history.replaceState(t,``,s):history.pushState(t,``,s);let c=typeof HashChangeEvent<`u`?new HashChangeEvent(`hashchange`,{oldURL:r,newURL:s}):new Event(`hashchange`,{detail:{oldURL:r,newURL:s}});dispatchEvent(c)},ke=({ssrPath:e=`/`}={})=>[(0,_.useSyncExternalStore)(Ee,De,()=>e),Oe];ke.hrefs=e=>`#`+e;var Ae;(function(e){e.maroon=`#800000`,e.red=`#FF0000`,e.orange=`#FFA500`,e.yellow=`#FFFF00`,e.olive=`#808000`,e.green=`#008000`,e.purple=`#800080`,e.fuchsia=`#FF00FF`,e.lime=`#00FF00`,e.teal=`#008080`,e.aqua=`#00FFFF`,e.blue=`#0000FF`,e.navy=`#000080`,e.black=`#000000`,e.gray=`#808080`,e.silver=`#C0C0C0`,e.white=`#FFFFFF`})(Ae||={});var je=function(e,t){if(e.includes(`/`))return e.replace(`rgb(`,`rgba(`);var n=e.substring(e.startsWith(`rgba(`)?5:4,e.length-1).trim(),r=n.split(`,`);return r.length===4?e.replace(`rgb(`,`rgba(`):r.length===3?`rgba(${n}, ${t})`:`rgba(${n} / ${t})`},Me=function(e,t){if(e.startsWith(`rgb`))return je(e,t);if(Object.keys(Ae).includes(e)&&(e=Ae[e]),e[0]===`#`&&(e=e.slice(1)),e.length===3){var n=``;e.split(``).forEach(function(e){n+=e,n+=e}),e=n}return`rgba(${(e.match(/.{2}/g)||[]).map(function(e){return parseInt(e,16)}).join(`, `)}, ${t})`},Ne={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function Pe(e){if(typeof e==`number`)return{value:e,unit:`px`};var t,n=(e.match(/^[0-9.]*/)||``).toString();t=n.includes(`.`)?parseFloat(n):parseInt(n,10);var r=(e.match(/[^0-9]*$/)||``).toString();return Ne[r]?{value:t,unit:r}:(console.warn(`React Spinners: ${e} is not a valid css value. Defaulting to ${t}px.`),{value:t,unit:`px`})}function q(e){var t=Pe(e);return`${t.value}${t.unit}`}var Fe=function(e,t,n){var r=`react-spinners-${e}-${n}`;if(typeof window>`u`||!window.document)return r;var i=document.createElement(`style`);document.head.appendChild(i);var a=i.sheet,o=`
    @keyframes ${r} {
      ${t}
    }
  `;return a&&a.insertRule(o,0),r},J=function(){return J=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},J.apply(this,arguments)},Ie=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Le(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,i=r===void 0?`#000000`:r,a=e.speedMultiplier,o=a===void 0?1:a,s=e.cssOverride,c=s===void 0?{}:s,l=e.size,u=l===void 0?50:l,d=Ie(e,[`loading`,`color`,`speedMultiplier`,`cssOverride`,`size`]),f=Pe(u),p=f.value,m=f.unit,h=J({display:`inherit`,position:`relative`,width:q(u),height:q(u),transform:`rotate(165deg)`},c),g=p/5,_=(p-g)/2,v=_-g,y=Me(i,.75),b=Fe(`HashLoader`,`0% {width: ${g}px; box-shadow: ${_}px ${-v}px ${y}, ${-_}px ${v}px ${y}}
    35% {width: ${q(u)}; box-shadow: 0 ${-v}px ${y}, 0 ${v}px ${y}}
    70% {width: ${g}px; box-shadow: ${-_}px ${-v}px ${y}, ${_}px ${v}px ${y}}
    100% {box-shadow: ${_}px ${-v}px ${y}, ${-_}px ${v}px ${y}}`,`before`),x=Fe(`HashLoader`,`0% {height: ${g}px; box-shadow: ${v}px ${_}px ${i}, ${-v}px ${-_}px ${i}}
    35% {height: ${q(u)}; box-shadow: ${v}px 0 ${i}, ${-v}px 0 ${i}}
    70% {height: ${g}px; box-shadow: ${v}px ${-_}px ${i}, ${-v}px ${_}px ${i}}
    100% {box-shadow: ${v}px ${_}px ${i}, ${-v}px ${-_}px ${i}}`,`after`),S=function(e){return{position:`absolute`,top:`50%`,left:`50%`,display:`block`,width:`${p/5}${m}`,height:`${p/5}${m}`,borderRadius:`${p/10}${m}`,transform:`translate(-50%, -50%)`,animationFillMode:`none`,animation:`${e===1?b:x} ${2/o}s infinite`}};return n?G.createElement(`span`,J({style:h},d),G.createElement(`span`,{style:S(1)}),G.createElement(`span`,{style:S(2)})):null}var Y=E(_e());function Re(){let e=N,n=e.basic.overview,r=e.basic.general,i=k.hooks.usePath(1),a=n.information,s=R.check.debugMode();return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(D,{path:i,background:`world`,children:[(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(t,{}),(0,Y.jsx)(H,{base:V(i).information})]}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`world`,path:i,children:[(0,Y.jsx)(H,{base:a,color:n.information.color}),(0,Y.jsx)(F,{title:[`preset`,`version`],explanation:[`text`,n.version.toString()]}),(0,Y.jsx)(F,{title:[`preset`,`updated`],explanation:[`text`,e.basic.development.timestamp.published]}),(0,Y.jsx)(F,{title:[`preset`,`author`],explanation:[`text`,n.author],event:`hint`}),n.homepage&&(0,Y.jsx)(F,{title:[`preset`,`homepage`],explanation:[`url`,n.homepage],event:`hint`}),(0,Y.jsx)(F,{title:[`preset`,`estimated-playing-time`],explanation:[`text`,`${L.primitive.toStandardCount(n.estimatedPlayingTime.value)} ${z(n.estimatedPlayingTime.unit).information.name}`],event:`hint`})]})}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`detail`,path:i,children:[(0,Y.jsx)(j,{title:[`preset`,`default-language`],explanation:[`text`,k.component.getLanguageLabel()],text:[`preset`,R.check.enableChangeLanguage()?`language-change-enable-general`:`language-change-unenable`]}),(0,Y.jsx)(F,{title:[`preset`,`max-category-level`],explanation:[`text`,L.primitive.toLevel(r.maxCategoryLevels)],event:`hint`}),(0,Y.jsx)(F,{title:[`preset`,`level-common-ratio`],explanation:[`text`,r.levelCommonRatio.toString()],event:`hint`})]})}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`console`,path:i,children:[(0,Y.jsx)(H,{base:z(`console`).information}),(0,Y.jsx)(F,{title:[`preset`,`version`],explanation:[`text`,`0.0.1652`]}),(0,Y.jsx)(F,{title:[`preset`,`updated`],explanation:[`text`,L.primitive.toDateTimeText(`2026-08-15T12:40:06.821Z`)]}),(0,Y.jsx)(F,{title:[`preset`,`author`],explanation:[`text`,`Yutori`]}),(0,Y.jsx)(F,{title:[`preset`,`homepage`],explanation:[`url`,`https://idle.yu-to-ri.net/document/index.html`]})]})}),!s&&(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`iconify`,path:i,children:[(0,Y.jsx)(H,{base:z(`iconify`).information}),Object.entries(ee).map(([e,t])=>(0,Y.jsx)(Se,{summary:t},e))]})})]}),(0,Y.jsx)(h,{children:k.hooks.useDefaultRoutes(i)})]})}function ze(){let e=k.hooks.usePath(1),n=I.progress.getCoins(),[r]=G.useState(()=>(Date.now()-P.playing.time.initialized)/1e3),i=R.trade.getMaxCapacity(),s=R.trade.getMaxQueue(),l=a(!0),u=l.items.filter(e=>e.itemType==`normal`),d=l.categories.filter(e=>e.world.numeric),p=l.categories.filter(e=>!R.check.unreleased(e)),g=d.filter(e=>!R.check.unreleased(e)),_=X(l.categories),v=Be(g.reduce((e,t)=>e+Math.floor(t.user.level),0),d.length*N.basic.general.maxCategoryLevels),y=X(l.actions),b=l.actions.reduce((e,t)=>e+t.user.count,0),x=X(u),S=u.reduce((e,t)=>e+t.user.countRecord,0),w=g,T=p.filter(e=>e.actions.length>0),ee=p.filter(e=>e.items.length>0),te=X(c),E=l.events.reduce((e,t)=>e+t.user.count,0),A=ye.map(e=>({preset:z(`timing-${e}`),count:l.events.filter(t=>t.world.timing===e).reduce((e,t)=>e+t.user.count,0)}));return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(D,{path:e,background:`world`,children:[(0,Y.jsx)(t,{}),(0,Y.jsx)(H,{base:V(e).information}),(0,Y.jsxs)(o,{text:`play-time`,path:e,children:[(0,Y.jsx)(F,{title:[`preset`,`play-started`],explanation:[`text`,L.primitive.toDateTimeText(P.playing.time.initialized)]}),(0,Y.jsx)(F,{title:[`preset`,`play-duration`],explanation:[`seconds`,r]})]}),(0,Y.jsx)(o,{text:`coins-earned`,path:e,children:n.map(e=>(0,Y.jsx)(F,{title:[`basic`,e],explanation:[`text`,L.primitive.toStandardCount(e.user.countRecord)]},e.id))}),(0,Y.jsxs)(o,{text:`unique-count`,path:e,children:[(0,Y.jsx)(F,{title:[`preset`,`max-capacity`],explanation:[`text`,i>0?L.primitive.toStandardCount(i):`∞`]}),(0,Y.jsx)(F,{title:[`preset`,`max-queue`],explanation:[`text`,L.primitive.toStandardCount(s)]})]}),(0,Y.jsxs)(o,{text:`statistics-category`,path:e,children:[(0,Y.jsx)(F,{title:[`preset`,`count-unlocked`],explanation:[`text`,_.text],flagColor:_.flag}),(0,Y.jsx)(F,{title:[`preset`,`level-total`],explanation:[`text`,v.text],flagColor:v.flag}),w.length>0&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(t,{height:O.md}),(0,Y.jsx)(C,{children:w.map(t=>(0,Y.jsx)(f,{href:`${e.path}/${t.id}.category`,children:(0,Y.jsx)(m,{basic:t,explanation:L.primitive.toStandardCount(Math.floor(t.user.level))})},t.id))})]})]}),(0,Y.jsxs)(o,{text:`statistics-action`,path:e,children:[(0,Y.jsx)(F,{title:[`preset`,`count-unlocked`],explanation:[`text`,y.text],flagColor:y.flag}),(0,Y.jsx)(F,{title:[`preset`,`count-performed`],explanation:[`text`,L.primitive.toStandardCount(b)]}),T.length>0&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(t,{height:O.md}),(0,Y.jsx)(C,{children:T.map(t=>(0,Y.jsx)(f,{href:`${e.path}/${t.id}.category`,children:(0,Y.jsx)(m,{basic:t,explanation:L.primitive.toStandardCount(t.actions.reduce((e,t)=>e+t.user.count,0))})},t.id))})]})]}),(0,Y.jsxs)(o,{text:`statistics-item`,path:e,children:[(0,Y.jsx)(F,{title:[`preset`,`count-unlocked`],explanation:[`text`,x.text],flagColor:x.flag}),(0,Y.jsx)(F,{title:[`preset`,`count-earned`],explanation:[`text`,L.primitive.toStandardCount(S)]}),ee.length>0&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(t,{height:O.md}),(0,Y.jsx)(C,{children:ee.map(t=>(0,Y.jsx)(f,{href:`${e.path}/${t.id}.category`,children:(0,Y.jsx)(m,{basic:t,explanation:L.primitive.toStandardCount(t.items.reduce((e,t)=>e+t.user.countRecord,0))})},t.id))})]})]}),(0,Y.jsxs)(o,{text:`statistics-event`,path:e,children:[(0,Y.jsx)(F,{title:[`preset`,`count-unlocked`],explanation:[`text`,te.text],flagColor:te.flag}),(0,Y.jsx)(F,{title:[`preset`,`count-triggered`],explanation:[`text`,L.primitive.toStandardCount(E)]}),(0,Y.jsx)(t,{height:O.md}),(0,Y.jsx)(C,{children:A.map(({preset:e,count:t})=>(0,Y.jsx)(m,{basic:e,explanation:L.primitive.toStandardCount(t),event:[`click`,e=>{e.information.name!==``&&k.toaster.showTip(e.information.name,e,!1)}]},e.id))})]})]}),(0,Y.jsx)(h,{children:k.hooks.useDefaultRoutes(e)})]})}function Be(e,t){return{text:L.primitive.toCountSummary(e,t),flag:k.style.getMaxedFlag(e,t)}}function X(e){return Be(e.filter(e=>!R.check.unreleased(e)).length,e.length)}function Ve(){let e=k.hooks.usePath(1),n=e=>k.component.sortGroup(e,e=>e.world.group).flat().map(e=>{let t=I.event.getArchived(e).flag??!1;return{basic:e,explanation:``,explanationIcon:z(t?`yes`:`no`).information,flagColor:t,link:`${e.id}.event`,ribbon:I.event.checkUnclaimed(e)}}),r=R.check.visibleList(c),i=I.event.getAchievedSummary(r),s=n(r.filter(e=>e.categoryId===``)),l=[];for(let e of R.check.visibleList(a(!0).categories)){let t=R.check.visibleList(e.tasks);t.length!=0&&l.push({category:e,indexes:n(t)})}return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(D,{path:e,background:`world`,children:[(0,Y.jsx)(t,{}),(0,Y.jsx)(H,{base:V(e).information}),(0,Y.jsx)(F,{title:[`preset`,`achieved`],explanation:[`text`,i.text],flagColor:i.flag}),s.length>0&&(0,Y.jsx)(o,{text:`missions`,path:e,children:(0,Y.jsx)(B,{indexes:s,layerDepth:1})}),l.map(e=>(0,Y.jsx)(B,{categoryId:e.category.id,indexes:e.indexes,layerDepth:1},e.category.id))]}),(0,Y.jsx)(h,{children:k.hooks.useDefaultRoutes(e)})]})}function He(){let e=k.hooks.usePath(1),n=[];for(let e of R.check.visibleList(a(!0).categories)){let t=R.check.visibleList(e.actions);if(t.length==0)continue;let r=e.user.progressing?U(e.user.progressing.general.id):void 0,i=t.map(e=>({basic:e,explanation:L.primitive.toLevel(e.world.level),flagColor:R.check.matchedLevel(e),link:`${e.id}.action`,ribbon:I.progress.checkSingleCompleted(void 0,e.id)||e.id===r?.id})),a=I.progress.checkSingleCompleted(e.id);n.push({category:e,actions:i,progress:r,ribbonCategory:a})}let r;try{r=w(N.basic.general.queue.information.id)}catch{r=null}let i=R.trade.getQueueSummary(),o=I.progress.getSingletonProgressing(),c=o?U(o.general.id):void 0;return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(D,{path:e,background:`world`,children:[(0,Y.jsx)(t,{}),(0,Y.jsx)(H,{base:V(e).information}),r&&r.user&&(0,Y.jsx)(f,{href:`${e.path}/${c?.id}.action`,active:!!c,children:(0,Y.jsx)(F,{title:[`basic`,r],explanation:[`text`,i.text],color:r.information.color,flagColor:i.flag})}),(0,Y.jsx)(Y.Fragment,{children:n.map(n=>(0,Y.jsx)(B,{categoryId:n.category.id,indexes:n.actions,layerDepth:1,event:[`hold`,I.progress.toggleAct],children:n.progress&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(f,{href:`${e.path}/${n.progress.id}.action`,children:[(0,Y.jsx)(F,{title:[`basic`,n.progress],ribbon:n.ribbonCategory,event:[`hold`,I.progress.toggleAct]}),(0,Y.jsx)(s,{categoryId:n.category.id,type:`progress`})]}),(0,Y.jsx)(t,{height:O.md})]})},n.category.id))})]}),(0,Y.jsx)(h,{children:k.hooks.useDefaultRoutes(e)})]})}function Ue(){let e=k.hooks.usePath(2),[n,r]=G.useState(new globalThis.Set),i=a(!0).items.filter(e=>e.user.countNow>=1&&e.world.sellingValue>0&&R.check.locked(e)===`released`),s=e=>{r(t=>{let n=new globalThis.Set(t);return n.has(e.id)?n.delete(e.id):n.add(e.id),n})},c=i.map(e=>{let t=e.world.sellingValue*e.user.countNow;return{basic:e,explanation:L.primitive.toStandardCount(t),flagColor:!0,link:void 0,ribbon:n.has(e.id)}}),l=i.filter(e=>n.has(e.id)),u=l.length,d=l.reduce((e,t)=>e+t.user.countNow,0),f=new globalThis.Map;for(let e of l){let t=R.trade.resolveCoin(e),n=e.world.sellingValue*e.user.countNow,r=f.get(t.id);r?r.value+=n:f.set(t.id,{coin:t,value:n})}let p=()=>{let e=[];for(let t of l){let n=t.world.sellingValue,r=t.user.countNow;if(r<=0||n===0)continue;let i=R.trade.resolveCoin(t),a=R.trade.addAcquisitions([{id:i.id,count:n,chance:1,type:`item`}],r),o=R.trade.reduceRequirements([{type:`item`,id:t.id,count:1,chance:1,equipment:!1}],r);e=[...e,...a,...o]}I.progress.unequipZeroItems(),k.component.forceUpdate(),e.length>0&&k.toaster.showTrade(R.trade.summarizeTrades(e)),r(new globalThis.Set)},[m,_]=k.hooks.useConfirm(e=>!e&&p());return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(D,{path:e,children:[(0,Y.jsx)(t,{}),(0,Y.jsx)(H,{base:V(e).information}),(0,Y.jsx)(o,{text:`items`,path:e,children:(0,Y.jsx)(B,{indexes:c,layerDepth:2,event:[`click`,s]})}),(0,Y.jsxs)(o,{text:`selected`,path:e,children:[(0,Y.jsx)(F,{title:[`preset`,`kind`],explanation:[`text`,L.primitive.toStandardCount(u)]}),(0,Y.jsx)(F,{title:[`preset`,`count`],explanation:[`text`,L.primitive.toStandardCount(d)]}),[...f.values()].map(({coin:e,value:t})=>(0,Y.jsx)(F,{title:[`preset`,`value`],explanation:[`text`,L.primitive.toStandardCount(t)],inlineIcon:[`information`,e.information],flagColor:!0},e.id)),(0,Y.jsx)(g,{id:`sell`,event:[`click`,()=>_(),m],active:u>0})]})]}),(0,Y.jsx)(h,{children:k.hooks.useDefaultRoutes(e)})]})}function We(){let e=k.hooks.usePath(1),r=[];for(let e of R.check.visibleList(a(!0).categories)){let t=R.check.visibleList(e.items);if(t.length==0)continue;let n=k.component.sortGroup(t,e=>e.world.group).map(t=>{let n=t[0].world.group,r=e.world.equipmentGroups.includes(n),i=e.user.equipments.find(e=>t.some(t=>t.id===e));return{nodes:t.map(e=>({basic:e,explanation:L.primitive.toStandardCount(e.user.countNow),link:`${e.id}.item`,ribbon:i===e.id})),groupId:n,equipmentable:r,equippingId:i}});r.push({category:e,groups:n})}let i=I.progress.getCoins(),s;try{let e=N.basic.general.capacity.information.id;s=w(e)}catch{s=null}let c;try{let e=N.basic.general.queue.information.id;c=w(e)}catch{c=null}let l=R.trade.getCapacitySummary(),u=R.trade.getQueueSummary();return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(D,{path:e,background:`world`,children:[(0,Y.jsx)(t,{}),(0,Y.jsx)(H,{base:V(e).information}),i.map((t,n)=>(n==0||t.user.countRecord>0)&&(0,Y.jsx)(f,{href:`${e.path}/${t.id}.item`,children:(0,Y.jsx)(F,{title:[`basic`,t],explanation:[`text`,L.primitive.toStandardCount(t.user.countNow)],color:t.information.color})},t.id)),s&&s.user&&R.trade.getMaxCapacity()>0&&(0,Y.jsx)(f,{href:`${e.path}/${s.id}.item`,children:(0,Y.jsx)(F,{title:[`basic`,s],explanation:[`text`,l.text],color:s.information.color,flagColor:l.flag})}),c&&c.user&&(0,Y.jsx)(f,{href:`${e.path}/${c.id}.item`,children:(0,Y.jsx)(F,{title:[`basic`,c],explanation:[`text`,u.text],color:c.information.color,flagColor:u.flag})}),(0,Y.jsx)(f,{href:`${e.path}/selling.character`,children:(0,Y.jsx)(F,{title:[`preset`,`selling`]})}),r.map(n=>(0,Y.jsx)(o,{text:n.category,path:e,children:n.groups.map((r,i)=>(0,Y.jsx)(B,{indexes:r.nodes,layerDepth:1,event:[`hold`,I.progress.toggleEquip],children:L.primitive.switches([r.equippingId!==void 0,r.equipmentable,!0],[r.equippingId&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(f,{href:`${e.path}/${r.equippingId}.item`,children:(0,Y.jsx)(F,{title:[`type`,r.equippingId,`item`],explanation:[`preset`,`equipping`],inlineIcon:`explanation`,event:[`hold`,I.progress.toggleEquip],flagColor:!0})}),(0,Y.jsx)(t,{height:O.md})]}),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(F,{title:[`preset`,`equipment`],explanation:[`preset`,`unequipping`],inlineIcon:`explanation`,flagColor:!1}),(0,Y.jsx)(t,{height:O.md})]}),void 0])},`${n.category.id}-${i}`))},n.category.id))]}),(0,Y.jsxs)(h,{children:[(0,Y.jsx)(n,{path:`${e.path}/selling.character/*?`,children:(0,Y.jsx)(Ue,{})}),k.hooks.useDefaultRoutes(e)]})]})}function Ge(){let e=k.hooks.usePath(1),r=[];for(let e of R.check.visibleList(a(!0).categories)){let t=e.summerizedProperties;if(t.size==0)continue;let n=[];for(let e of t.values()){if(e.value==0)continue;let t={basic:z(e.id),explanation:L.primitive.getWithSign(e.value),flagColor:k.style.getSignFlag(e.value),link:`${e.categoryId}_${e.id}.correction`,ribbon:!1};n.push(t)}n.sort((e,t)=>oe.indexOf(e.basic.id)-oe.indexOf(t.basic.id)),r.push({category:e,indexes:n})}return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(D,{path:e,background:`world`,children:[(0,Y.jsx)(t,{}),(0,Y.jsx)(H,{base:V(e).information}),r.length>0?(0,Y.jsx)(Y.Fragment,{children:r.map(e=>(0,Y.jsx)(B,{categoryId:e.category.id,indexes:e.indexes,layerDepth:1},e.category.id))}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(t,{}),(0,Y.jsx)(v,{id:`no-status`})]})]}),(0,Y.jsxs)(h,{children:[(0,Y.jsx)(n,{path:`${e.path}/:type.correction/*?`,children:(0,Y.jsx)(se,{layerDepth:2})}),k.hooks.useDefaultRoutes(e)]})]})}function Ke(){let e=k.hooks.usePath(1),r=R.check.debugMode();return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(D,{path:e,background:`world`,children:[(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(t,{}),(0,Y.jsx)(H,{base:V(e).information})]}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`display`,path:e,children:[(0,Y.jsx)(qe,{path:e}),(0,Y.jsx)(Je,{}),(0,Y.jsx)(Ye,{}),(0,Y.jsx)(Xe,{})]})}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`performance`,path:e,children:[(0,Y.jsx)(Ze,{}),!r&&(0,Y.jsx)($e,{})]})}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`data`,path:e,children:[(0,Y.jsx)(Qe,{}),(0,Y.jsx)(et,{})]})})]}),(0,Y.jsxs)(h,{children:[(0,Y.jsx)(n,{path:`${e.path}/language.world/*?`,children:(0,Y.jsx)(ce,{layerDepth:2})}),k.hooks.useDefaultRoutes(e)]})]})}function qe({path:e}){let t=R.check.enableChangeLanguage();return(0,Y.jsx)(f,{href:`${e.path}/language.world`,active:t,children:(0,Y.jsx)(j,{title:[`preset`,`language`],explanation:[`text`,k.component.getLanguageLabel()],text:[`preset`,t?`language-change-enable`:`language-change-unenable`],inlineIcon:[`preset`,`language-${P.config.language}`]})})}function Je(){let[e,t]=(0,G.useState)(P.config.categoryShortcut);return(0,Y.jsx)(j,{title:[`preset`,`category-shortcut`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{P.config.categoryShortcut=!e,t(!e),k.component.forceUpdate()}],text:[`preset`,`category-shortcut`],inlineIcon:`explanation`,flagColor:e})}function Ye(){let[e,t]=(0,G.useState)(P.config.showingHint);return(0,Y.jsx)(j,{title:[`preset`,`showing-hint`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{P.config.showingHint=!e,t(!e),k.component.forceUpdate()}],text:[`preset`,`showing-hint`],inlineIcon:`explanation`,flagColor:e})}function Xe(){let[e,t]=(0,G.useState)(P.config.showingNavigation);return(0,Y.jsx)(j,{title:[`preset`,`showing-navigation`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{P.config.showingNavigation=!e,t(!e),k.component.forceUpdate()}],text:[`preset`,`showing-navigation`],inlineIcon:`explanation`,flagColor:e})}function Ze(){let[e,t]=(0,G.useState)(P.config.performingHighly);return(0,Y.jsx)(j,{title:[`preset`,`performing-highly`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{P.config.performingHighly=!e,t(!e)}],text:[`preset`,`performing-highly`],inlineIcon:`explanation`,flagColor:e})}function Qe(){let e=()=>{let e=JSON.parse(JSON.stringify(P)).world,t=JSON.stringify(P,null,2),n=new Blob([t],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`),a=z(`export-game`);i.href=r,i.download=`yutori-idle-${e.id}-${e.version}.json`,i.click(),URL.revokeObjectURL(r),k.toaster.showTip(a.information.explanation,a,!1)},t=()=>{let e=z(`import-mistake`);k.toaster.showTip(e.information.explanation,e,!1)};return(0,Y.jsxs)(T,{children:[(0,Y.jsx)(g,{id:`export-game`,event:[`click`,e,!1]}),(0,Y.jsx)(g,{id:`import-game`,event:[`click`,()=>{let e=document.createElement(`input`);e.type=`file`,e.accept=`.json`,e.onchange=e=>{let n=e.target.files?.[0];if(n){let e=new FileReader;e.onload=e=>{try{let n=JSON.parse(e.target?.result);if(n.world?.id!==N.basic.overview.information.id||n.world?.version!==N.basic.overview.version){t();return}le.userData.handle.importUserData(n),window.location.hash=`/`,window.location.reload()}catch{t()}},e.readAsText(n)}},e.click()},!1]})]})}function $e(){let[e,t]=(0,G.useState)(null);return(0,G.useEffect)(()=>{let e=e=>{e.preventDefault(),t(e)};return window.addEventListener(`beforeinstallprompt`,e),()=>{window.removeEventListener(`beforeinstallprompt`,e)}},[]),(0,Y.jsxs)(T,{children:[(0,Y.jsx)(g,{id:`pwa`,event:[`click`,async()=>{if(!e){k.toaster.showResult(!1);return}try{await e.prompt();let{outcome:n}=await e.userChoice;k.toaster.showResult(n===`accepted`),t(null)}catch{k.toaster.showResult(!1)}},!1]}),(0,Y.jsx)(v,{id:`pwa`})]})}function et(){let[e,t]=(0,G.useState)(`*`),n=e=>{t(e)},[r,i]=k.hooks.useConfirm(t=>{if(t){let e=z(`reset-alert`);k.toaster.showTip(e.information.explanation,e)}else{if(e!=`DELETE`&&!R.check.debugMode())return;ge.player.disableUnloadAndReset(),le.userData.handle.resetLocal(),k.toaster.hideAll(!0),window.location.hash=``,window.location.reload()}}),a=R.check.debugMode();return(0,Y.jsxs)(T,{children:[(0,Y.jsx)(g,{id:`reset-game`,event:[`click`,()=>i(),r]}),(0,Y.jsx)(ue,{id:`reset-really`,value:e,changeHandler:n,placeholder:`*`}),(0,Y.jsx)(v,{id:`reset-game`}),a&&(0,Y.jsx)(v,{id:`reset-debug-mode`})]})}function tt(){let e=k.hooks.usePath(1);return R.check.debugMode()?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(D,{path:e,background:`world`,children:[(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(t,{}),(0,Y.jsx)(H,{base:V(e).information})]}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsx)(o,{text:`acceleration`,path:e,children:(0,Y.jsx)(rt,{})})}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsx)(o,{text:`skip`,path:e,children:(0,Y.jsx)(it,{})})}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsx)(o,{text:`adjustment`,path:e,children:(0,Y.jsx)(at,{})})}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsx)(o,{text:`restart`,path:e,children:(0,Y.jsx)(ot,{})})})]}),(0,Y.jsx)(h,{children:k.hooks.useDefaultRoutes(e)})]}):(0,Y.jsx)(Y.Fragment,{})}var nt=3600*1e3;function rt(){let[e,t]=(0,G.useState)(P.config.acceleration.multiplier),[n,r]=(0,G.useState)(P.config.acceleration.active);return(0,Y.jsxs)(T,{children:[(0,Y.jsx)(j,{title:[`preset`,`acceleration`],explanation:[`preset`,n?`on`:`off`],event:[`click`,()=>{let e=P.config.acceleration.active;P.config.acceleration.active=!e,r(!e)}],text:`title`,inlineIcon:`explanation`,flagColor:n}),(0,Y.jsx)(Ce,{id:`multiplier`,value:e,changeHandler:e=>{t(e),P.config.acceleration.multiplier=e},placeholder:`-`,max:100,min:1})]})}function it(){return(0,Y.jsx)(T,{children:(0,Y.jsx)(g,{id:`skip-hour`,event:[`click`,()=>{let e=I.update.skipOffline(nt);k.component.forceUpdate();let t=z(`skip-hour`);k.toaster.showTip(t.information.name,t,!0),k.toaster.showTrade(e)},!1]})})}function at(){let[e,t]=(0,G.useState)(`category`),n=()=>{t(A[(A.indexOf(e)+1)%A.length])},[r,i]=(0,G.useState)(``),a=e=>{i(e)},[o,s]=(0,G.useState)(`plus`),c=()=>{s(e=>e===`plus`?`minus`:`plus`)},[l,u]=(0,G.useState)(1),d=e=>{u(e)},[f,p]=k.hooks.useConfirm(t=>!t&&R.trade.adjust(e,r,o,l));return(0,Y.jsxs)(T,{children:[(0,Y.jsx)(j,{title:[`preset`,`adjustment-type`],explanation:[`preset`,`adjustment-${e}`],inlineIcon:[`preset`,e],event:[`click`,n],text:`explanation`}),(0,Y.jsx)(ue,{id:`adjustment-id`,value:r,changeHandler:a,placeholder:`all`}),(0,Y.jsx)(v,{id:`adjustment-id`}),(0,Y.jsx)(j,{title:[`preset`,`adjustment-sign`],explanation:[`preset`,`adjustment-${o}`],inlineIcon:`explanation`,event:[`click`,c],text:`explanation`}),(0,Y.jsx)(Ce,{id:`adjustment-count`,value:l,changeHandler:d,placeholder:`1`,max:1e3}),(0,Y.jsx)(v,{id:`adjustment-count`}),(0,Y.jsx)(g,{id:`adjustment-adjust`,event:[`click`,()=>p(),f]})]})}function ot(){let[e,t]=k.hooks.useConfirm(e=>{e||(k.viewport.normalize(),window.location.hash=``,requestAnimationFrame(()=>window.location.reload()))});return(0,Y.jsxs)(T,{children:[(0,Y.jsx)(F,{title:[`preset`,`updated`],explanation:[`text`,L.primitive.toDateTimeText(`2026-08-15T12:40:06.821Z`)]}),(0,Y.jsx)(g,{id:`restart`,event:[`click`,()=>t(),e]})]})}function st(){let e=R.check.debugMode(),r=k.hooks.usePath(0),s=V(r),l=k.component.sortGroup(R.check.visibleList(a(!0).categories),e=>e.world.group),u=R.trade.getQueueSummary(),d=R.trade.getCapacitySummary(),p=R.check.visibleList(c),m=I.event.getAchievedSummary(p),g=I.property.getStatusSummary();return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(D,{path:r,background:`world`,children:[(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(t,{}),(0,Y.jsx)(H,{base:s.information,color:s.information.color})]}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`character`,path:r,children:[(0,Y.jsx)(f,{href:`/activity.character`,children:(0,Y.jsx)(F,{title:[`preset`,`activity`],explanation:[`text`,u.text],flagColor:u.flag})}),(0,Y.jsx)(f,{href:`/inventory.character`,children:(0,Y.jsx)(F,{title:[`preset`,`inventory`],explanation:[`text`,d.text],flagColor:d.flag})}),(0,Y.jsx)(f,{href:`/status.character`,children:(0,Y.jsx)(F,{title:[`preset`,`status`],explanation:[`text`,g.text],flagColor:g.flag})}),p.length>0&&(0,Y.jsx)(f,{href:`/missions.character`,children:(0,Y.jsx)(F,{title:[`preset`,`missions`],explanation:[`text`,m.text],flagColor:m.flag})})]})}),(0,Y.jsx)(Y.Fragment,{children:l.map(e=>(0,Y.jsx)(i,{categories:e,path:r},e[0].world.group))}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o,{text:`world`,path:r,children:[(0,Y.jsx)(f,{href:`/overview.world`,children:(0,Y.jsx)(F,{title:[`preset`,`overview`]})}),(0,Y.jsx)(f,{href:`/statistics.world`,children:(0,Y.jsx)(F,{title:[`preset`,`statistics`]})}),(0,Y.jsx)(f,{href:`/config.world`,children:(0,Y.jsx)(F,{title:[`preset`,`config`]})}),e&&(0,Y.jsx)(f,{href:`/debug.world`,children:(0,Y.jsx)(F,{title:[`preset`,`debug`]})})]})})]}),(0,Y.jsxs)(h,{children:[(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(n,{path:`/activity.character/*?`,children:(0,Y.jsx)(He,{})}),(0,Y.jsx)(n,{path:`/inventory.character/*?`,children:(0,Y.jsx)(We,{})}),(0,Y.jsx)(n,{path:`/status.character/*?`,children:(0,Y.jsx)(Ge,{})}),(0,Y.jsx)(n,{path:`/missions.character/*?`,children:(0,Y.jsx)(Ve,{})})]}),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(n,{path:`/overview.world/*?`,children:(0,Y.jsx)(Re,{})}),(0,Y.jsx)(n,{path:`/statistics.world/*?`,children:(0,Y.jsx)(ze,{})}),(0,Y.jsx)(n,{path:`/config.world/*?`,children:(0,Y.jsx)(Ke,{})}),(0,Y.jsx)(n,{path:`/debug.world/*?`,children:(0,Y.jsx)(tt,{})})]}),k.hooks.useDefaultRoutes(r)]})]})}function ct({children:e}){let t=lt();return W(`span`,{id:`grider`,css:[t.base,t.scrollbarStyle],children:e})}function lt(){return{base:u`
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
		`,scrollbarStyle:u`
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
		`}}var ut={duration:300,snappingDown:!0};function dt(){let e=(0,G.useRef)(null),t=k.hooks.useSmoothRef(()=>{let e=I.progress.getSingletonProgressing();return e?ne(U(e.general.id).categoryId).user.level%1:0},ut);return k.hooks.useUpdate(()=>{let n=e.current;if(!n)return;let r=I.progress.getSingletonProgressing(),i=L.primitive.clamp(t.current,0,1);n.style.setProperty(`--header-percentage`,`${i*100}%`),n.style.setProperty(`--header-color`,r?k.style.geFadedColor(U(r.general.id).information.color):`transparent`)}),W(`div`,{css:ft(),ref:e})}function ft(){return u`
		position: fixed;
		top: ${e.constants.barHeight}px;
		left: 0;
		width: 100svw;
		height: ${e.constants.headerLineHeight}px;
		--header-percentage: 0%;
		--header-color: transparent;
		background: linear-gradient(to right, var(--header-color) var(--header-percentage), transparent var(--header-percentage));
		z-index: 20;
	`}var pt={},mt={duration:300};function ht(){let[e,t]=(0,G.useState)(()=>k.scroll.getScrolledPosition().x>0),[n,i]=(0,G.useState)(()=>I.progress.getSingletonProgressing()?.general.id),a=(0,G.useRef)(null),[,o]=k.hooks.useLocation(),s=()=>{k.scroll.slideTop()},c=()=>{let e=k.component.getSingletonProgressingPath();e&&(o(e),k.scroll.slideBottom())},u=k.hooks.useSmoothRef(()=>{let e=I.progress.getSingletonProgressing();return e?I.progress.caluculateBarProgresing(e):0},()=>I.progress.getSingletonProgressing()?.combat?mt:pt);return k.hooks.useUpdate(()=>{i(I.progress.getSingletonProgressing()?.general.id),t(k.scroll.getScrolledPosition().x>0);let e=a.current;e&&(e.style.transform=`scaleX(${L.primitive.clamp(u.current,0,1)})`)}),r(`span`,{css:[gt(8).base],children:[W(l,{height:8,fillRef:a,color:n?k.style.getActionProgressColor(n):void 0}),e&&W(y,{id:`go-top`,leftern:!0,handler:s,size:26}),n&&W(y,{id:n,leftern:!1,handler:c,size:26})]})}function gt(e){return{base:u`
			/* display: flex; */
			position: relative;
			width: 100svw;
			height: ${e}px;
			/* bottom: 0; */
			z-index: 20;
			background-color: transparent;
		`}}var _t,vt,yt=2/3,bt=.15;function xt(){let[e]=k.hooks.useLocation();return _t?null:(k.component.setBackgroundHandler(St),St(Ct(e)),null)}function St(t){if(wt(_t,t))return;_t=t;let n=(t==`world`?``:ne(t[1]).world.background)||N.basic.design.background||``;if(vt===n)return;vt=n;let r=e.colors.background,{h:i,s:a,l:o}=M(r).hsl().object(),s=Tt(i*(1-bt),a*(1-bt),o*(1-bt)),c=Tt(i*1.15,a*1.15,o*1.15),l=e=>`linear-gradient(
		to top,
		${M(s).alpha(e).rgb().string()},
		${M(r).alpha(e).rgb().string()},
		${M(c).alpha(e).rgb().string()}
	)`;window.document.body.style.background=n?`${l(yt)}, url(${n}) center / cover no-repeat fixed`:l(1),window.document.body.style.backgroundColor=e.colors.bar}function Ct(e){let t=e.split(`/`).reverse();for(let e of t){let[t,n]=e.split(`.`);if(!(!t||!n)){if(n==`category`)return[`category`,t];if(n==`action`)return[`category`,U(t).categoryId];if(n==`item`){let e=w(t).categoryId;return e?[`category`,e]:`world`}}}return`world`}function wt(e,t){return e?e==`world`?t==`world`:t==`world`?!1:e[1]==t[1]:!1}function Tt(e,t,n){return`hsl(${e}, ${t}%, ${n}%)`}function Et(){let[e,t]=(0,G.useState)(!1),n=(0,G.useRef)(!1);(0,G.useEffect)(()=>{(async()=>{if(!n.current){n.current=!0;try{await re(),xe(),ie(),I.event.check(),t(!0)}catch(e){console.error(`Initialization error:`,e)}}})()},[]);let[i,a]=k.hooks.useLocation();(0,G.useEffect)(()=>{if(!e)return;let t=he(i);t&&a(t)},[e,i,a]),(0,G.useEffect)(()=>{e&&(ve(),ae())},[e]);let o=()=>{if(R.check.debugMode())return{background:`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,color:`white`};let e=document.querySelector(`meta[name="bar-color"]`),t=document.querySelector(`meta[name="text-color"]`);return{background:e?.content||`#667eea`,color:t?.content||`white`}};if(!e){let e=o();return r(`div`,{css:$t(e.background,e.color),children:[W(Le,{color:e.color,size:80,cssOverride:{display:`block`}}),W(`h2`,{children:`Loading Game...`}),W(`p`,{children:`Initializing world data and assets`})]})}return W(be,{children:W(Dt,{})})}function Dt(){return me(),r(x,{children:[W(`div`,{style:{display:fe?`block`:`none`},children:`This game was interrupted because it was opened in another tab.`}),r(`div`,{style:{display:fe?`none`:`block`},children:[W(b,{styles:Zt}),W(de,{base:`/`,hook:ke,children:r(`div`,{css:Qt,children:[W(dt,{}),W(ct,{children:W(st,{})}),W(ht,{})]})}),W(Ot,{}),W(pe,{}),W(xt,{})]})]})}function Ot(){let{toasts:e,handlers:t}=te(Wt),n=new Map;for(let t of e){let e=t.position||Mt,r=n.get(e);r?r.push(t):n.set(e,[t])}let r=n.has(`bottom-left`)||n.has(`bottom-right`);return W(`div`,{className:jt,style:Nt,children:[...n].map(([e,n])=>W(`div`,{style:Rt(e,r&&e==`bottom-center`),children:(e.startsWith(`top`)?n:[...n].reverse()).map(n=>W(kt,{item:n,position:e,onHeightUpdate:t.updateHeight},n.id))},e))})}function kt({item:e,position:t,onHeightUpdate:n}){return W(`div`,{ref:(0,G.useCallback)(t=>{t&&n(e.id,t.getBoundingClientRect().height)},[e.id,n]),style:e.className==k.toaster.inlineClassName?Ft:It(t),children:W(d,{toast:e,style:Xt(e)})})}var Z={fontSize:`12px`,padding:`5px 7px`},At=5,jt=`playerToaster`,Mt=`top-center`,Q=16,Nt={position:`fixed`,zIndex:9999,top:Q,left:Q,right:Q,bottom:Q,pointerEvents:`none`},Pt=100,Ft={display:`flex`};function It(e){return{display:`flex`,flexBasis:`100%`,justifyContent:Lt(e)}}function Lt(e){return e.endsWith(`left`)?`flex-start`:e.endsWith(`right`)?`flex-end`:`center`}function Rt(e,t){return{position:`absolute`,left:0,right:0,...e.startsWith(`top`)?{top:0}:{bottom:0},display:`flex`,flexFlow:`row wrap`,alignItems:`center`,justifyContent:Lt(e),gap:`${At}px`,...t?{paddingLeft:`${Pt}px`,paddingRight:`${Pt}px`}:{}}}var zt=`playerToastFadeIn`,Bt=`playerToastFadeOut`,Vt=`playerToastPopInTop`,Ht=`playerToastPopInBottom`,Ut=300,$=`${Ut}ms`,Wt={removeDelay:Ut},Gt=3e3,Kt={...Z,pointerEvents:`auto`,animation:`${zt} ${$} ease-in-out forwards`},qt={...Z,pointerEvents:`none`,animation:`${Bt} ${$} ease-in-out forwards`},Jt={...Z,pointerEvents:`auto`,animation:`${Vt} ${$} ease-in-out forwards`},Yt={...Z,pointerEvents:`auto`,animation:`${Ht} ${$} ease-in-out forwards`};function Xt(e){return e.visible?(e.duration??0)<Gt?Kt:(e.position??`top-center`).startsWith(`top`)?Jt:Yt:qt}var Zt=u`
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

	@keyframes ${zt} {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes ${Bt} {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	/* 画面上側に出るトースト（showLeveled / showAchieved）の登場。上の画面外から降りてくる */
	@keyframes ${Vt} {
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
	@keyframes ${Ht} {
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
	.${jt} > div > div > div > div:last-child {
		margin: 3px 7px;
	}

	/* 本文以外の子＝showResult の成功/失敗アイコン。ライブラリ内で 20px 固定なので、
	   他のアイコンに合わせて縮小する */
	.${jt} > div > div > div > div:not(:last-child) {
		transform: scale(0.67);
	}
`,Qt=u`
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
`,$t=(e,t)=>u`
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
`;console.log(`🎮 Player Build Version: 0.0.1652`),console.log(`📅 Player Build Date: ${new Date(`2026-08-15T12:40:06.821Z`).toLocaleString(`ja-JP`)}`),we.createRoot(document.getElementById(`root`)).render((0,Y.jsx)(G.StrictMode,{children:(0,Y.jsx)(Et,{})}));
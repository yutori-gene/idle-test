import{A as e,B as t,C as n,Ct as r,D as i,Dt as a,E as o,Et as s,F as c,Ft as l,I as u,It as d,L as f,Lt as p,M as m,Mt as h,N as g,Nt as _,O as v,Ot as y,P as b,Pt as x,Rt as S,S as C,St as ee,T as w,Tt as T,U as te,V as E,W as ne,Wt as D,_ as O,_t as k,a as A,b as j,c as re,ct as ie,d as ae,et as M,f as oe,g as se,h as ce,i as le,it as ue,j as N,k as de,l as fe,m as pe,mt as me,n as P,nt as he,o as F,ot as I,p as ge,pt as _e,r as ve,rt as ye,s as be,t as L,tt as R,u as xe,v as Se,vt as z,w as Ce,wt as we,x as B,xt as V,y as H,yt as U,z as W}from"./control-D4C1iX-8.js";import{t as Te}from"./client-Sqw-rsGu.js";var G=D(S()),Ee=D(Te(),1),K={v:[]},De=()=>K.v.forEach(e=>e()),Oe=e=>(K.v.push(e)===1&&addEventListener(`hashchange`,De),()=>{K.v=K.v.filter(t=>t!==e),K.v.length||removeEventListener(`hashchange`,De)}),ke=()=>`/`+location.hash.replace(/^#?\/?/,``),Ae=(e,{state:t=null,replace:n=!1}={})=>{let r=location.href,[i,a]=e.replace(/^#?\/?/,``).split(`?`),o=new URL(location.href);o.hash=`/${i}`,a&&(o.search=a);let s=o.href;n?history.replaceState(t,``,s):history.pushState(t,``,s);let c=typeof HashChangeEvent<`u`?new HashChangeEvent(`hashchange`,{oldURL:r,newURL:s}):new Event(`hashchange`,{detail:{oldURL:r,newURL:s}});dispatchEvent(c)},je=({ssrPath:e=`/`}={})=>[(0,l.useSyncExternalStore)(Oe,ke,()=>e),Ae];je.hrefs=e=>`#`+e;var Me;(function(e){e.maroon=`#800000`,e.red=`#FF0000`,e.orange=`#FFA500`,e.yellow=`#FFFF00`,e.olive=`#808000`,e.green=`#008000`,e.purple=`#800080`,e.fuchsia=`#FF00FF`,e.lime=`#00FF00`,e.teal=`#008080`,e.aqua=`#00FFFF`,e.blue=`#0000FF`,e.navy=`#000080`,e.black=`#000000`,e.gray=`#808080`,e.silver=`#C0C0C0`,e.white=`#FFFFFF`})(Me||={});var Ne=function(e,t){if(e.includes(`/`))return e.replace(`rgb(`,`rgba(`);var n=e.substring(e.startsWith(`rgba(`)?5:4,e.length-1).trim(),r=n.split(`,`);return r.length===4?e.replace(`rgb(`,`rgba(`):r.length===3?`rgba(${n}, ${t})`:`rgba(${n} / ${t})`},Pe=function(e,t){if(e.startsWith(`rgb`))return Ne(e,t);if(Object.keys(Me).includes(e)&&(e=Me[e]),e[0]===`#`&&(e=e.slice(1)),e.length===3){var n=``;e.split(``).forEach(function(e){n+=e,n+=e}),e=n}return`rgba(${(e.match(/.{2}/g)||[]).map(function(e){return parseInt(e,16)}).join(`, `)}, ${t})`},Fe={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function Ie(e){if(typeof e==`number`)return{value:e,unit:`px`};var t,n=(e.match(/^[0-9.]*/)||``).toString();t=n.includes(`.`)?parseFloat(n):parseInt(n,10);var r=(e.match(/[^0-9]*$/)||``).toString();return Fe[r]?{value:t,unit:r}:(console.warn(`React Spinners: ${e} is not a valid css value. Defaulting to ${t}px.`),{value:t,unit:`px`})}function q(e){var t=Ie(e);return`${t.value}${t.unit}`}var Le=function(e,t,n){var r=`react-spinners-${e}-${n}`;if(typeof window>`u`||!window.document)return r;var i=document.createElement(`style`);document.head.appendChild(i);var a=i.sheet,o=`
    @keyframes ${r} {
      ${t}
    }
  `;return a&&a.insertRule(o,0),r},J=function(){return J=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},J.apply(this,arguments)},Re=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function ze(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,i=r===void 0?`#000000`:r,a=e.speedMultiplier,o=a===void 0?1:a,s=e.cssOverride,c=s===void 0?{}:s,l=e.size,u=l===void 0?50:l,d=Re(e,[`loading`,`color`,`speedMultiplier`,`cssOverride`,`size`]),f=Ie(u),p=f.value,m=f.unit,h=J({display:`inherit`,position:`relative`,width:q(u),height:q(u),transform:`rotate(165deg)`},c),g=p/5,_=(p-g)/2,v=_-g,y=Pe(i,.75),b=Le(`HashLoader`,`0% {width: ${g}px; box-shadow: ${_}px ${-v}px ${y}, ${-_}px ${v}px ${y}}
    35% {width: ${q(u)}; box-shadow: 0 ${-v}px ${y}, 0 ${v}px ${y}}
    70% {width: ${g}px; box-shadow: ${-_}px ${-v}px ${y}, ${_}px ${v}px ${y}}
    100% {box-shadow: ${_}px ${-v}px ${y}, ${-_}px ${v}px ${y}}`,`before`),x=Le(`HashLoader`,`0% {height: ${g}px; box-shadow: ${v}px ${_}px ${i}, ${-v}px ${-_}px ${i}}
    35% {height: ${q(u)}; box-shadow: ${v}px 0 ${i}, ${-v}px 0 ${i}}
    70% {height: ${g}px; box-shadow: ${v}px ${-_}px ${i}, ${-v}px ${_}px ${i}}
    100% {box-shadow: ${v}px ${_}px ${i}, ${-v}px ${-_}px ${i}}`,`after`),S=function(e){return{position:`absolute`,top:`50%`,left:`50%`,display:`block`,width:`${p/5}${m}`,height:`${p/5}${m}`,borderRadius:`${p/10}${m}`,transform:`translate(-50%, -50%)`,animationFillMode:`none`,animation:`${e===1?b:x} ${2/o}s infinite`}};return n?G.createElement(`span`,J({style:h},d),G.createElement(`span`,{style:S(1)}),G.createElement(`span`,{style:S(2)})):null}var Y=D(ue());function Be(){let t=z,n=t.basic.overview,o=t.basic.general,c=A.hooks.usePath(1),l=n.information,u=L.check.debugMode(),d=me.map(e=>({active:!0,mainIcon:s(e).information,text:`${F.primitive.toStandardCount(o.defaultCombat[e])}%`,subIcons:[]}));return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(O,{path:c,background:`world`,children:[(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(N,{}),(0,Y.jsx)(H,{base:r(c).information,path:c})]}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(i,{text:`world`,path:c,children:[(0,Y.jsx)(H,{base:l,color:n.information.color}),(0,Y.jsx)(e,{title:[`preset`,`version`],explanation:[`text`,n.version.toString()]}),(0,Y.jsx)(e,{title:[`preset`,`updated`],explanation:[`text`,t.basic.development.timestamp.published]}),(0,Y.jsx)(e,{title:[`preset`,`author`],explanation:[`text`,n.author],event:`hint`}),n.homepage&&(0,Y.jsx)(e,{title:[`preset`,`homepage`],explanation:[`url`,n.homepage],event:`hint`}),(0,Y.jsx)(e,{title:[`preset`,`estimated-playing-time`],explanation:[`text`,`${F.primitive.toStandardCount(n.estimatedPlayingTime.value)} ${s(n.estimatedPlayingTime.unit).information.name}`],event:`hint`})]})}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(i,{text:`detail`,path:c,children:[(0,Y.jsx)(j,{title:[`preset`,`default-language`],explanation:[`text`,A.component.getLanguageLabel()],text:[`preset`,L.check.enableChangeLanguage()?`language-change-enable-general`:`language-change-unenable`],inlineIcon:[`preset`,`language-${k.config.language}`]}),(0,Y.jsx)(e,{title:[`preset`,`offline-max-hours`],explanation:[`text`,`${F.primitive.toStandardCount(o.offlineMaxHours)} ${s(`hours`).information.name}`],event:`hint`}),(0,Y.jsx)(e,{title:[`preset`,`max-category-level`],explanation:[`text`,F.primitive.toLevel(o.maxCategoryLevels)],event:`hint`}),(0,Y.jsx)(e,{title:[`preset`,`level-common-ratio`],explanation:[`text`,o.levelCommonRatio.toString()],event:`hint`}),(0,Y.jsx)(e,{title:[`preset`,`property-ratio`],explanation:[`text`,o.propertyRatio.toString()],event:`hint`}),(0,Y.jsxs)(w,{children:[(0,Y.jsx)(e,{title:[`preset`,`default-action-stamina`],event:`hint`}),(0,Y.jsx)(de,{tags:d})]})]})}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(i,{text:`console`,path:c,children:[(0,Y.jsx)(H,{base:s(`console`).information}),(0,Y.jsx)(e,{title:[`preset`,`version`],explanation:[`text`,`0.0.1743`]}),(0,Y.jsx)(e,{title:[`preset`,`updated`],explanation:[`text`,F.primitive.toDateTimeText(`2026-08-28T07:45:03.810Z`)]}),(0,Y.jsx)(e,{title:[`preset`,`author`],explanation:[`text`,`Yutori`]}),(0,Y.jsx)(e,{title:[`preset`,`homepage`],explanation:[`url`,`https://idle.yu-to-ri.net/document/index.html`]})]})}),!u&&(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(i,{text:`iconify`,path:c,children:[(0,Y.jsx)(H,{base:s(`iconify`).information}),Object.entries(a).map(([e,t])=>(0,Y.jsx)(Se,{summary:t},e))]})})]}),(0,Y.jsx)(x,{children:A.hooks.useDefaultRoutes(c)})]})}function Ve(){let t=A.hooks.usePath(1),n=P.progress.getCoins(),[a]=G.useState(()=>(Date.now()-k.playing.time.initialized)/1e3),o=L.trade.getMaxCapacity(),c=L.trade.getMaxQueue(),l=L.trade.getCapacityItem(),u=L.trade.getQueueItem(),d=T(!0),p=d.items.filter(e=>e.itemType==`normal`),m=d.categories.filter(e=>e.world.numeric),h=d.categories.filter(e=>!L.check.unreleased(e)),_=m.filter(e=>!L.check.unreleased(e)),v=X(d.categories),b=He(_.reduce((e,t)=>e+Math.floor(t.user.level),0),m.length*z.basic.general.maxCategoryLevels),S=X(d.actions),ee=d.actions.reduce((e,t)=>e+t.user.count,0),w=X(p),te=p.reduce((e,t)=>e+t.user.countRecord,0),E=_,ne=h.filter(e=>e.actions.length>0),D=h.filter(e=>e.items.length>0),j=X(y),re=d.events.filter(e=>e.world.timing!==`changed`).reduce((e,t)=>e+t.user.count,0),ae=ie.filter(e=>e!==`changed`).map(e=>({preset:s(`timing-${e}`),count:d.events.filter(t=>t.world.timing===e).reduce((e,t)=>e+t.user.count,0)}));return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(O,{path:t,background:`world`,children:[(0,Y.jsx)(N,{}),(0,Y.jsx)(H,{base:r(t).information,path:t}),(0,Y.jsxs)(i,{text:`play-time`,path:t,children:[(0,Y.jsx)(e,{title:[`preset`,`play-started`],explanation:[`text`,F.primitive.toDateTimeText(k.playing.time.initialized)]}),(0,Y.jsx)(e,{title:[`preset`,`play-duration`],explanation:[`seconds`,a]})]}),(0,Y.jsx)(i,{text:`coins-earned`,path:t,children:n.map(n=>(0,Y.jsx)(f,{href:`${t.path}/${n.id}.item`,children:(0,Y.jsx)(e,{title:[`basic`,n],explanation:[`text`,F.primitive.toStandardCount(n.user.countRecord)]})},n.id))}),(0,Y.jsxs)(i,{text:`unique-count`,path:t,children:[(0,Y.jsx)(f,{href:l?`${t.path}/${l.id}.item`:``,active:l!=null,children:(0,Y.jsx)(e,{title:[`preset`,`max-capacity`],explanation:[`text`,o>0?F.primitive.toStandardCount(o):`∞`]})}),(0,Y.jsx)(f,{href:u?`${t.path}/${u.id}.item`:``,active:u!=null,children:(0,Y.jsx)(e,{title:[`preset`,`max-queue`],explanation:[`text`,F.primitive.toStandardCount(c)]})})]}),(0,Y.jsxs)(i,{text:`statistics-category`,path:t,children:[(0,Y.jsx)(e,{title:[`preset`,`count-unlocked`],explanation:[`text`,v.text],flagColor:v.flag}),(0,Y.jsx)(e,{title:[`preset`,`level-total`],explanation:[`text`,b.text],flagColor:b.flag}),E.length>0&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(N,{height:U.md}),(0,Y.jsx)(C,{children:E.map(e=>(0,Y.jsx)(f,{href:`${t.path}/${e.id}.category`,children:(0,Y.jsx)(g,{basic:e,explanation:F.primitive.toStandardCount(Math.floor(e.user.level))})},e.id))})]})]}),(0,Y.jsxs)(i,{text:`statistics-action`,path:t,children:[(0,Y.jsx)(e,{title:[`preset`,`count-unlocked`],explanation:[`text`,S.text],flagColor:S.flag}),(0,Y.jsx)(e,{title:[`preset`,`count-performed`],explanation:[`text`,F.primitive.toStandardCount(ee)]}),ne.length>0&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(N,{height:U.md}),(0,Y.jsx)(C,{children:ne.map(e=>(0,Y.jsx)(f,{href:`${t.path}/${e.id}.category`,children:(0,Y.jsx)(g,{basic:e,explanation:F.primitive.toStandardCount(e.actions.reduce((e,t)=>e+t.user.count,0))})},e.id))})]})]}),(0,Y.jsxs)(i,{text:`statistics-item`,path:t,children:[(0,Y.jsx)(e,{title:[`preset`,`count-unlocked`],explanation:[`text`,w.text],flagColor:w.flag}),(0,Y.jsx)(e,{title:[`preset`,`count-earned`],explanation:[`text`,F.primitive.toStandardCount(te)]}),D.length>0&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(N,{height:U.md}),(0,Y.jsx)(C,{children:D.map(e=>(0,Y.jsx)(f,{href:`${t.path}/${e.id}.category`,children:(0,Y.jsx)(g,{basic:e,explanation:F.primitive.toStandardCount(e.items.reduce((e,t)=>e+t.user.countRecord,0))})},e.id))})]})]}),(0,Y.jsxs)(i,{text:`statistics-event`,path:t,children:[(0,Y.jsx)(e,{title:[`preset`,`count-unlocked`],explanation:[`text`,j.text],flagColor:j.flag}),(0,Y.jsx)(e,{title:[`preset`,`count-triggered`],explanation:[`text`,F.primitive.toStandardCount(re)]}),(0,Y.jsx)(N,{height:U.md}),(0,Y.jsx)(C,{children:ae.map(({preset:e,count:t})=>(0,Y.jsx)(g,{basic:e,explanation:F.primitive.toStandardCount(t),event:[`click`,e=>{e.information.name!==``&&A.toaster.showTip(e.information.name,e,!1)}]},e.id))})]})]}),(0,Y.jsx)(x,{children:A.hooks.useDefaultRoutes(t)})]})}function He(e,t){return{text:F.primitive.toCountSummary(e,t),flag:A.style.getMaxedFlag(e,t)}}function X(e){return He(e.filter(e=>!L.check.unreleased(e)).length,e.length)}function Ue(){let t=A.hooks.usePath(1),n=e=>A.component.sortGroup(e,e=>e.world.group).flat().map(e=>{let t=P.event.getArchived(e).flag??!1;return{basic:e,explanation:``,explanationIcon:s(t?`yes`:`no`).information,flagColor:t,link:`${e.id}.event`,ribbon:P.event.checkUnclaimed(e)}}),a=L.check.visibleList(y),o=P.event.getAchievedSummary(a),c=n(a.filter(e=>e.categoryId===``)),l=[];for(let e of L.check.visibleList(T(!0).categories)){let t=L.check.visibleList(e.tasks);t.length!=0&&l.push({category:e,indexes:n(t)})}return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(O,{path:t,background:`world`,children:[(0,Y.jsx)(N,{}),(0,Y.jsx)(H,{base:r(t).information,path:t}),(0,Y.jsx)(e,{title:[`preset`,`achieved`],explanation:[`text`,o.text],flagColor:o.flag}),c.length>0&&(0,Y.jsx)(i,{text:`missions`,path:t,children:(0,Y.jsx)(B,{indexes:c,layerDepth:1})}),l.map(e=>(0,Y.jsx)(B,{categoryId:e.category.id,indexes:e.indexes,layerDepth:1},e.category.id))]}),(0,Y.jsx)(x,{children:A.hooks.useDefaultRoutes(t)})]})}function We(){let t=A.hooks.usePath(1),n=[];for(let e of L.check.visibleList(T(!0).categories)){let t=L.check.visibleList(e.actions);if(t.length==0)continue;let r=e.user.progressing?.general.flag?V(e.user.progressing.general.id):void 0,i=t.map(e=>({basic:e,explanation:F.primitive.toLevel(e.world.level),flagColor:L.check.matchedLevel(e),link:`${e.id}.action`,ribbon:P.progress.checkSingleCompleted(void 0,e.id)||e.id===r?.id})),a=P.progress.checkSingleCompleted(e.id);n.push({category:e,actions:i,progress:r,ribbonCategory:a})}let i;try{i=we(z.basic.general.queue.information.id)}catch{i=null}let a=L.trade.getQueueSummary(),s=P.progress.getSingletonProgressing(),c=s?V(s.general.id):void 0;return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(O,{path:t,background:`world`,children:[(0,Y.jsx)(N,{}),(0,Y.jsx)(H,{base:r(t).information,path:t}),i&&i.user&&(0,Y.jsx)(f,{href:`${t.path}/${c?.id}.action`,active:!!c,children:(0,Y.jsx)(e,{title:[`basic`,i],explanation:[`text`,a.text],color:i.information.color,flagColor:a.flag})}),(0,Y.jsx)(Y.Fragment,{children:n.map(n=>(0,Y.jsx)(B,{categoryId:n.category.id,indexes:n.actions,layerDepth:1,event:[`hold`,e=>P.progress.toggleAct(e,0,!0)],children:n.progress&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(f,{href:`${t.path}/${n.progress.id}.action`,children:[(0,Y.jsx)(e,{title:[`basic`,n.progress],ribbon:n.ribbonCategory,event:[`hold`,P.progress.toggleAct]}),(0,Y.jsx)(o,{categoryId:n.category.id,type:`progress`})]}),(0,Y.jsx)(N,{height:U.md})]})},n.category.id))})]}),(0,Y.jsx)(x,{children:A.hooks.useDefaultRoutes(t)})]})}function Ge(){let t=A.hooks.usePath(2),[n,a]=G.useState(new globalThis.Set),o=T(!0).items.filter(e=>e.user.countNow>=1&&e.world.sellingValue>0&&L.check.locked(e)===`released`),s=e=>{a(t=>{let n=new globalThis.Set(t);return n.has(e.id)?n.delete(e.id):n.add(e.id),n})},c=o.map(e=>{let t=e.world.sellingValue*e.user.countNow;return{basic:e,explanation:F.primitive.toStandardSignedCount(t),flagColor:!0,link:void 0,ribbon:n.has(e.id)}}),l=o.filter(e=>n.has(e.id)),u=l.length,d=l.reduce((e,t)=>e+t.user.countNow,0),f=new globalThis.Map;for(let e of l){let t=L.trade.resolveCoin(e),n=e.world.sellingValue*e.user.countNow,r=f.get(t.id);r?r.value+=n:f.set(t.id,{coin:t,value:n})}let p=()=>{let e=[];for(let t of l){let n=t.world.sellingValue,r=t.user.countNow;if(r<=0||n===0)continue;let i=L.trade.resolveCoin(t),a=L.trade.addAcquisitions([{id:i.id,count:n,chance:1,type:`item`}],r),o=L.trade.reduceRequirements([{type:`item`,id:t.id,count:1,chance:1,equipment:!1}],r);e=[...e,...a,...o]}P.progress.unequipZeroItems(),A.component.forceUpdate(),e.length>0&&A.toaster.showTrade(L.trade.summarizeTrades(e)),a(new globalThis.Set)},[m,h,g]=A.hooks.useConfirm(e=>!e&&p());return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(O,{path:t,children:[(0,Y.jsx)(N,{}),(0,Y.jsx)(H,{base:r(t).information,path:t}),(0,Y.jsx)(i,{text:`selling-items`,path:t,children:(0,Y.jsx)(B,{indexes:c,layerDepth:2,event:[`click`,s]})}),(0,Y.jsxs)(i,{text:`selected`,path:t,children:[(0,Y.jsx)(e,{title:[`preset`,`kind`],explanation:[`text`,F.primitive.toStandardCount(u)]}),(0,Y.jsx)(e,{title:[`preset`,`count`],explanation:[`text`,F.primitive.toStandardCount(d)]}),[...f.values()].map(({coin:t,value:n})=>(0,Y.jsx)(e,{title:[`preset`,`value`],explanation:[`text`,F.primitive.toStandardSignedCount(n)],inlineIcon:[`information`,t.information],flagColor:!0},t.id)),(0,Y.jsx)(b,{id:`sell`,event:[`click`,()=>h(),m,g],active:u>0})]})]}),(0,Y.jsx)(x,{children:A.hooks.useDefaultRoutes(t)})]})}function Ke(){let t=A.hooks.usePath(1),n=[];for(let e of L.check.visibleList(T(!0).categories)){let t=L.check.visibleList(e.items);if(t.length==0)continue;let r=A.component.sortGroup(t,e=>e.world.group).map(t=>{let n=t[0].world.group,r=e.world.equipmentGroups.includes(n),i=e.user.equipments.find(e=>t.some(t=>t.id===e));return{nodes:t.map(e=>({basic:e,explanation:F.primitive.toStandardCount(e.user.countNow),link:`${e.id}.item`,ribbon:i===e.id})),groupId:n,equipmentable:r,equippingId:i}});n.push({category:e,groups:r})}let a=P.progress.getCoins(),o=L.trade.getCapacityItem(),s=L.trade.getQueueItem(),c=L.trade.getCapacitySummary(),l=L.trade.getQueueSummary();return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(O,{path:t,background:`world`,children:[(0,Y.jsx)(N,{}),(0,Y.jsx)(H,{base:r(t).information,path:t}),a.map((n,r)=>(r==0||n.user.countRecord>0)&&(0,Y.jsx)(f,{href:`${t.path}/${n.id}.item`,children:(0,Y.jsx)(e,{title:[`basic`,n],explanation:[`text`,F.primitive.toStandardCount(n.user.countNow)],color:n.information.color})},n.id)),o&&o.user&&L.trade.getMaxCapacity()>0&&(0,Y.jsx)(f,{href:`${t.path}/${o.id}.item`,children:(0,Y.jsx)(e,{title:[`basic`,o],explanation:[`text`,c.text],color:o.information.color,flagColor:c.flag})}),s&&s.user&&(0,Y.jsx)(f,{href:`${t.path}/${s.id}.item`,children:(0,Y.jsx)(e,{title:[`basic`,s],explanation:[`text`,l.text],color:s.information.color,flagColor:l.flag})}),(0,Y.jsx)(f,{href:`${t.path}/selling.character`,children:(0,Y.jsx)(e,{title:[`preset`,`selling`]})}),n.map(n=>(0,Y.jsx)(i,{text:n.category,path:t,children:n.groups.map((r,i)=>(0,Y.jsx)(B,{indexes:r.nodes,layerDepth:1,event:[`hold`,P.progress.toggleEquip],children:F.primitive.switches([r.equippingId!==void 0,r.equipmentable,!0],[r.equippingId&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(f,{href:`${t.path}/${r.equippingId}.item`,children:(0,Y.jsx)(e,{title:[`type`,r.equippingId,`item`],explanation:[`preset`,`equipping`],inlineIcon:`explanation`,event:[`hold`,P.progress.toggleEquip],flagColor:!0})}),(0,Y.jsx)(N,{height:U.md})]}),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(e,{title:[`preset`,`equipment`],explanation:[`preset`,`unequipping`],inlineIcon:`explanation`,flagColor:!1}),(0,Y.jsx)(N,{height:U.md})]}),void 0])},`${n.category.id}-${i}`))},n.category.id))]}),(0,Y.jsxs)(x,{children:[(0,Y.jsx)(h,{path:`${t.path}/selling.character/*?`,children:(0,Y.jsx)(Ge,{})}),A.hooks.useDefaultRoutes(t)]})]})}function qe(){let e=A.hooks.usePath(1),t=[];for(let e of L.check.visibleList(T(!0).categories)){let n=e.summerizedProperties;if(n.size==0)continue;let r=[];for(let e of n.values()){if(e.value==0)continue;let t={basic:s(e.id),explanation:F.primitive.getWithSign(e.value),flagColor:A.style.getSignFlag(e.value),link:`${e.categoryId}_${e.id}.property`,ribbon:!1};r.push(t)}r.sort((e,t)=>_e.indexOf(e.basic.id)-_e.indexOf(t.basic.id)),t.push({category:e,indexes:r})}return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(O,{path:e,background:`world`,children:[(0,Y.jsx)(N,{}),(0,Y.jsx)(H,{base:r(e).information,path:e}),t.length>0?(0,Y.jsx)(Y.Fragment,{children:t.map(e=>(0,Y.jsx)(B,{categoryId:e.category.id,indexes:e.indexes,layerDepth:1},e.category.id))}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(N,{}),(0,Y.jsx)(v,{id:`no-status`})]})]}),(0,Y.jsxs)(x,{children:[(0,Y.jsx)(h,{path:`${e.path}/:type.property/*?`,children:(0,Y.jsx)(se,{layerDepth:2})}),A.hooks.useDefaultRoutes(e)]})]})}function Je(){let e=A.hooks.usePath(1),t=P.skill.listEffectiveCategorySkills().map(e=>({category:e.category,indexes:e.skills.map(e=>({basic:e,explanation:F.primitive.toPercentageText(e.world.chance),link:`${e.id}.skill`,ribbon:!1}))}));return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(O,{path:e,background:`world`,children:[(0,Y.jsx)(N,{}),(0,Y.jsx)(H,{base:r(e).information,path:e}),t.length>0?(0,Y.jsx)(Y.Fragment,{children:t.map(e=>(0,Y.jsx)(B,{categoryId:e.category.id,indexes:e.indexes,layerDepth:1},e.category.id))}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(N,{}),(0,Y.jsx)(v,{id:`no-ability`})]})]}),(0,Y.jsx)(x,{children:A.hooks.useDefaultRoutes(e)})]})}function Ye(){let e=A.hooks.usePath(1),n=L.check.debugMode();return E(W,{children:[E(O,{path:e,background:`world`,children:[E(W,{children:[t(N,{}),t(H,{base:r(e).information,path:e})]}),t(W,{children:t(i,{text:`operation`,path:e,children:t(Xe,{})})}),t(W,{children:E(i,{text:`display`,path:e,children:[t(Ze,{path:e}),t(Qe,{}),t($e,{}),t(et,{})]})}),t(W,{children:E(i,{text:`performance`,path:e,children:[t(tt,{}),!n&&t(rt,{})]})}),t(W,{children:E(i,{text:`data`,path:e,children:[t(nt,{}),t(it,{})]})})]}),E(x,{children:[t(h,{path:`${e.path}/language.world/*?`,children:t(ce,{layerDepth:2})}),A.hooks.useDefaultRoutes(e)]})]})}function Xe(){let[e,n]=(0,G.useState)(k.config.autoClearQueue);return t(j,{title:[`preset`,`auto-clear-queue`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{k.config.autoClearQueue=!e,n(!e)}],text:[`preset`,`auto-clear-queue`],inlineIcon:`explanation`,flagColor:e})}function Ze({path:e}){let n=L.check.enableChangeLanguage();return t(f,{href:`${e.path}/language.world`,active:n,children:t(j,{title:[`preset`,`language`],explanation:[`text`,A.component.getLanguageLabel()],text:[`preset`,n?`language-change-enable`:`language-change-unenable`],inlineIcon:[`preset`,`language-${k.config.language}`]})})}function Qe(){let[e,n]=(0,G.useState)(k.config.categoryShortcut);return t(j,{title:[`preset`,`category-shortcut`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{k.config.categoryShortcut=!e,n(!e),A.component.forceUpdate()}],text:[`preset`,`category-shortcut`],inlineIcon:`explanation`,flagColor:e})}function $e(){let[e,n]=(0,G.useState)(k.config.showingHint);return t(j,{title:[`preset`,`showing-hint`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{k.config.showingHint=!e,n(!e),A.component.forceUpdate()}],text:[`preset`,`showing-hint`],inlineIcon:`explanation`,flagColor:e})}function et(){let[e,n]=(0,G.useState)(k.config.showingNavigation);return t(j,{title:[`preset`,`showing-navigation`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{k.config.showingNavigation=!e,n(!e),A.component.forceUpdate()}],text:[`preset`,`showing-navigation`],inlineIcon:`explanation`,flagColor:e})}function tt(){let[e,n]=(0,G.useState)(k.config.performingHighly);return t(j,{title:[`preset`,`performing-highly`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{k.config.performingHighly=!e,n(!e)}],text:[`preset`,`performing-highly`],inlineIcon:`explanation`,flagColor:e})}function nt(){let e=()=>{let e=JSON.parse(JSON.stringify(k)).world,t=JSON.stringify(k,null,2),n=new Blob([t],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`),a=s(`export-game`);i.href=r,i.download=`yutori-idle-${e.id}-${e.version}.json`,i.click(),URL.revokeObjectURL(r),A.toaster.showTip(a.information.explanation,a,!1)},n=()=>{let e=s(`import-mistake`);A.toaster.showTip(e.information.explanation,e,!1)};return E(w,{children:[t(`span`,{css:M.gapBottom,children:t(b,{id:`export-game`,event:[`click`,e,!1]})}),t(b,{id:`import-game`,event:[`click`,()=>{let e=document.createElement(`input`);e.type=`file`,e.accept=`.json`,e.onchange=e=>{let t=e.target.files?.[0];if(t){let e=new FileReader;e.onload=e=>{try{let t=JSON.parse(e.target?.result);if(t.world?.id!==z.basic.overview.information.id||t.world?.version!==z.basic.overview.version){n();return}le.userData.handle.importUserData(t),window.location.hash=`/`,window.location.reload()}catch{n()}},e.readAsText(t)}},e.click()},!1]}),t(N,{})]})}function rt(){let[e,n]=(0,G.useState)(null);return(0,G.useEffect)(()=>{let e=e=>{e.preventDefault(),n(e)};return window.addEventListener(`beforeinstallprompt`,e),()=>{window.removeEventListener(`beforeinstallprompt`,e)}},[]),E(w,{children:[t(b,{id:`pwa`,event:[`click`,async()=>{if(!e){A.toaster.showResult(!1);return}try{await e.prompt();let{outcome:t}=await e.userChoice;A.toaster.showResult(t===`accepted`),n(null)}catch{A.toaster.showResult(!1)}},!1]}),t(v,{id:`pwa`})]})}function it(){let[e,n]=(0,G.useState)(`*`),r=e=>{n(e)},[i,a,o]=A.hooks.useConfirm(t=>{if(t){let e=s(`reset-alert`);A.toaster.showTip(e.information.explanation,e)}else{if(e!=`DELETE`&&!L.check.debugMode())return;ve.player.disableUnloadAndReset(),le.userData.handle.resetLocal(),A.toaster.hideAll(!0),window.location.hash=``,window.location.reload()}}),c=L.check.debugMode();return E(w,{children:[t(`span`,{css:M.gapBottom,children:t(b,{id:`reset-game`,event:[`click`,()=>a(),i,o]})}),t(m,{id:`reset-really`,value:e,changeHandler:r,placeholder:`*`}),t(v,{id:`reset-game`}),c&&t(v,{id:`reset-debug-mode`})]})}function at(){let e=A.hooks.usePath(1);return L.check.debugMode()?E(W,{children:[E(O,{path:e,background:`world`,children:[E(W,{children:[t(N,{}),t(H,{base:r(e).information,path:e})]}),t(W,{children:t(i,{text:`acceleration`,path:e,children:t(st,{})})}),t(W,{children:t(i,{text:`skip`,path:e,children:t(ct,{})})}),t(W,{children:t(i,{text:`adjustment`,path:e,children:t(lt,{})})}),t(W,{children:t(i,{text:`restart`,path:e,children:t(ft,{})})})]}),t(x,{children:A.hooks.useDefaultRoutes(e)})]}):t(W,{})}var ot=3600*1e3;function st(){let[e,n]=(0,G.useState)(k.config.acceleration.multiplier),[r,i]=(0,G.useState)(k.config.acceleration.active);return E(w,{children:[t(j,{title:[`preset`,`acceleration`],explanation:[`preset`,r?`on`:`off`],event:[`click`,()=>{let e=k.config.acceleration.active;k.config.acceleration.active=!e,i(!e)}],text:`title`,inlineIcon:`explanation`,flagColor:r}),t(Ce,{id:`multiplier`,value:e,changeHandler:e=>{n(e),k.config.acceleration.multiplier=e},placeholder:`-`,max:100,min:1})]})}function ct(){return t(w,{children:t(b,{id:`skip-hour`,event:[`click`,()=>{let e=P.update.skipOffline(ot);A.component.forceUpdate();let t=s(`skip-hour`);A.toaster.showTip(t.information.name,t,!0),A.toaster.showTrade(e)},!1]})})}function lt(){let[e,n]=(0,G.useState)(`category`),r=()=>{n(I[(I.indexOf(e)+1)%I.length])},[i,a]=(0,G.useState)(``),o=e=>{a(e)},[s,c]=(0,G.useState)(`plus`),l=()=>{c(e=>e===`plus`?`minus`:`plus`)},[u,d]=(0,G.useState)(1),f=e=>{d(e)},[p,h,g]=A.hooks.useConfirm(t=>!t&&L.trade.adjust(e,i,s,u));return E(w,{children:[t(j,{title:[`preset`,`adjustment-type`],explanation:[`preset`,`adjustment-${e}`],inlineIcon:[`preset`,e],event:[`click`,r],text:`explanation`}),t(m,{id:`adjustment-id`,value:i,changeHandler:o,placeholder:`all`}),t(v,{id:`adjustment-id`}),t(j,{title:[`preset`,`adjustment-sign`],explanation:[`preset`,`adjustment-${s}`],inlineIcon:`explanation`,event:[`click`,l],text:`explanation`}),t(`span`,{css:ut,children:t(Ce,{id:`adjustment-count`,value:u,changeHandler:f,placeholder:`1`,max:1e3})}),t(`span`,{css:[dt,M.gapBottom],children:t(v,{id:`adjustment-count`})}),t(b,{id:`adjustment-adjust`,event:[`click`,()=>h(),p,g]})]})}var ut=p`
	& > span > span:last-child {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
`,dt=p`
	display: block;
	margin-top: -${U.xs}px;
	& > span {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
`;function ft(){let[n,r,i]=A.hooks.useConfirm(e=>{e||(A.viewport.normalize(),window.location.hash=``,requestAnimationFrame(()=>window.location.reload()))});return E(w,{children:[t(`span`,{css:M.gapBottom,children:t(e,{title:[`preset`,`updated`],explanation:[`text`,F.primitive.toDateTimeText(`2026-08-28T07:45:03.810Z`)]})}),t(b,{id:`restart`,event:[`click`,()=>r(),n,i]})]})}function pt(){let t=L.check.debugMode(),a=A.hooks.usePath(0),o=r(a),s=A.component.sortGroup(L.check.visibleList(T(!0).categories),e=>e.world.group),c=L.trade.getQueueSummary(),l=L.trade.getCapacitySummary(),u=L.check.visibleList(y),d=P.event.getAchievedSummary(u),p=P.property.getStatusSummary(),m=P.skill.countEffectiveSkills();return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(O,{path:a,background:`world`,children:[(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(N,{}),(0,Y.jsx)(H,{base:o.information,path:a,color:o.information.color})]}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(i,{text:`character`,path:a,children:[(0,Y.jsx)(f,{href:`/activity.character`,children:(0,Y.jsx)(e,{title:[`preset`,`activity`],explanation:[`text`,c.text],flagColor:c.flag})}),(0,Y.jsx)(f,{href:`/inventory.character`,children:(0,Y.jsx)(e,{title:[`preset`,`inventory`],explanation:[`text`,l.text],flagColor:l.flag})}),(0,Y.jsx)(f,{href:`/status.character`,children:(0,Y.jsx)(e,{title:[`preset`,`status`],explanation:[`text`,p.text],flagColor:p.flag})}),(0,Y.jsx)(f,{href:`/ability.character`,children:(0,Y.jsx)(e,{title:[`preset`,`ability`],explanation:[`text`,F.primitive.toStandardCount(m)]})}),u.length>0&&(0,Y.jsx)(f,{href:`/missions.character`,children:(0,Y.jsx)(e,{title:[`preset`,`missions`],explanation:[`text`,d.text],flagColor:d.flag})})]})}),(0,Y.jsx)(Y.Fragment,{children:s.map(e=>(0,Y.jsx)(n,{categories:e,path:a},e[0].world.group))}),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(i,{text:`world`,path:a,children:[(0,Y.jsx)(f,{href:`/overview.world`,children:(0,Y.jsx)(e,{title:[`preset`,`overview`]})}),(0,Y.jsx)(f,{href:`/statistics.world`,children:(0,Y.jsx)(e,{title:[`preset`,`statistics`]})}),(0,Y.jsx)(f,{href:`/config.world`,children:(0,Y.jsx)(e,{title:[`preset`,`config`]})}),t&&(0,Y.jsx)(f,{href:`/debug.world`,children:(0,Y.jsx)(e,{title:[`preset`,`debug`]})})]})})]}),(0,Y.jsxs)(x,{children:[(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(h,{path:`/activity.character/*?`,children:(0,Y.jsx)(We,{})}),(0,Y.jsx)(h,{path:`/inventory.character/*?`,children:(0,Y.jsx)(Ke,{})}),(0,Y.jsx)(h,{path:`/status.character/*?`,children:(0,Y.jsx)(qe,{})}),(0,Y.jsx)(h,{path:`/ability.character/*?`,children:(0,Y.jsx)(Je,{})}),(0,Y.jsx)(h,{path:`/missions.character/*?`,children:(0,Y.jsx)(Ue,{})})]}),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(h,{path:`/overview.world/*?`,children:(0,Y.jsx)(Be,{})}),(0,Y.jsx)(h,{path:`/statistics.world/*?`,children:(0,Y.jsx)(Ve,{})}),(0,Y.jsx)(h,{path:`/config.world/*?`,children:(0,Y.jsx)(Ye,{})}),(0,Y.jsx)(h,{path:`/debug.world/*?`,children:(0,Y.jsx)(at,{})})]}),A.hooks.useDefaultRoutes(a)]})]})}function mt({children:e}){let n=ht();return t(`span`,{id:`grider`,css:[n.base,n.scrollbarStyle],children:e})}function ht(){return{base:p`
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
			scrollbar-color: ${M.colors.bar} transparent;

			/* Chrome, Safari, Edge対応 */
			::-webkit-scrollbar-thumb {
				background: ${M.colors.bar};
			}
			::-webkit-scrollbar-thumb:hover {
				background: ${M.colors.actived};
			}
		`}}var gt={duration:300,snappingDown:!0};function _t(){let e=(0,G.useRef)(null),n=A.hooks.useSmoothRef(()=>{let e=P.progress.getSingletonProgressing();return e?ee(V(e.general.id).categoryId).user.level%1:0},gt);return A.hooks.useUpdate(()=>{let t=e.current;if(!t)return;let r=P.progress.getSingletonProgressing(),i=F.primitive.clamp(n.current,0,1);t.style.setProperty(`--header-percentage`,`${i*100}%`),t.style.setProperty(`--header-color`,r?A.style.geFadedColor(V(r.general.id).information.color):`transparent`)}),t(`div`,{css:vt(),ref:e})}function vt(){return p`
		position: fixed;
		top: ${M.constants.barHeight}px;
		left: 0;
		width: 100svw;
		height: ${M.constants.headerLineHeight}px;
		--header-percentage: 0%;
		--header-color: transparent;
		background: linear-gradient(to right, var(--header-color) var(--header-percentage), transparent var(--header-percentage));
		z-index: 20;
	`}var yt={},bt={duration:300};function xt(){let[e,n]=(0,G.useState)(()=>A.scroll.getScrolledPosition().x>0),[r,i]=(0,G.useState)(()=>P.progress.getSingletonProgressing()?.general.id),a=(0,G.useRef)(null),[,o]=A.hooks.useLocation(),s=()=>{A.scroll.slideTop()},l=()=>{let e=A.component.getSingletonProgressingPath();e&&(o(e),A.scroll.slideBottom())},d=A.hooks.useSmoothRef(()=>{let e=P.progress.getSingletonProgressing();return e?P.progress.caluculateBarProgresing(e):0},()=>P.progress.getSingletonProgressing()?.combat?bt:yt);return A.hooks.useUpdate(()=>{i(P.progress.getSingletonProgressing()?.general.id),n(A.scroll.getScrolledPosition().x>0);let e=a.current;e&&(e.style.transform=`scaleX(${F.primitive.clamp(d.current,0,1)})`)}),E(`span`,{css:[St(8).base],children:[t(u,{height:8,fillRef:a,color:r?A.style.getActionProgressColor(r):void 0}),e&&t(c,{id:`go-top`,leftern:!0,handler:s,size:26}),r&&t(c,{id:r,leftern:!1,handler:l,size:26})]})}function St(e){return{base:p`
			/* display: flex; */
			position: relative;
			width: 100svw;
			height: ${e}px;
			/* bottom: 0; */
			z-index: 20;
			background-color: transparent;
		`}}var Ct,wt,Tt=2/3,Et=.15;function Dt(){let[e]=A.hooks.useLocation();return Ct?null:(A.component.setBackgroundHandler(Ot),Ot(kt(e)),null)}function Ot(e){if(At(Ct,e))return;Ct=e;let t=(e==`world`?``:ee(e[1]).world.background)||z.basic.design.background||``;if(wt===t)return;wt=t;let n=M.colors.background,{h:r,s:i,l:a}=R(n).hsl().object(),o=jt(r*(1-Et),i*(1-Et),a*(1-Et)),s=jt(r*1.15,i*1.15,a*1.15),c=e=>`linear-gradient(
		to top,
		${R(o).alpha(e).rgb().string()},
		${R(n).alpha(e).rgb().string()},
		${R(s).alpha(e).rgb().string()}
	)`;window.document.body.style.background=t?`${c(Tt)}, url(${t}) center / cover no-repeat fixed`:c(1),window.document.body.style.backgroundColor=M.colors.bar}function kt(e){let t=e.split(`/`).reverse();for(let e of t){let[t,n]=e.split(`.`);if(!(!t||!n)){if(n==`category`)return[`category`,t];if(n==`action`)return[`category`,V(t).categoryId];if(n==`item`){let e=we(t).categoryId;return e?[`category`,e]:`world`}}}return`world`}function At(e,t){return e?e==`world`?t==`world`:t==`world`?!1:e[1]==t[1]:!1}function jt(e,t,n){return`hsl(${e}, ${t}%, ${n}%)`}function Mt(){let[e,n]=(0,G.useState)(!1),r=(0,G.useRef)(!1);(0,G.useEffect)(()=>{(async()=>{if(!r.current){r.current=!0;try{await re(),xe(),ae(),P.event.check(),n(!0)}catch(e){console.error(`Initialization error:`,e)}}})()},[]);let[i,a]=A.hooks.useLocation();(0,G.useEffect)(()=>{if(!e)return;let t=ge(i);t&&a(t)},[e,i,a]),(0,G.useEffect)(()=>{e&&(be(),oe())},[e]);let o=()=>{if(L.check.debugMode())return{background:`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,color:`white`};let e=document.querySelector(`meta[name="bar-color"]`),t=document.querySelector(`meta[name="text-color"]`);return{background:e?.content||`#667eea`,color:t?.content||`white`}};if(!e){let e=o();return E(`div`,{css:dn(e.background,e.color),children:[t(ze,{color:e.color,size:80,cssOverride:{display:`block`}}),t(`h2`,{children:`Loading Game...`}),t(`p`,{children:`Initializing world data and assets`})]})}return t(he,{children:t(Nt,{})})}function Nt(){return ye(),E(W,{children:[t(`div`,{style:{display:fe?`block`:`none`},children:`This game was interrupted because it was opened in another tab.`}),E(`div`,{style:{display:fe?`none`:`block`},children:[t(d,{styles:ln}),t(_,{base:`/`,hook:je,children:E(`div`,{css:un,children:[t(_t,{}),t(mt,{children:t(pt,{})}),t(xt,{})]})}),t(Pt,{}),t(pe,{}),t(Dt,{})]})]})}function Pt(){let{toasts:e,handlers:n}=ne($t),r=new Map(Ft.map(e=>[e,[]]));for(let t of e)r.get(t.position||Bt).push(t);let i=r.get(`bottom-left`).length>0||r.get(`bottom-right`).length>0;return t(`div`,{className:zt,style:Vt,children:[...r].filter(([,e])=>e.length>0).map(([e,r])=>t(`div`,{style:Kt(e,i&&e==`bottom-center`),children:It(e,r).map(r=>t(Lt,{item:r,position:e,onHeightUpdate:n.updateHeight},r.id))},e))})}var Ft=[`top-left`,`top-center`,`top-right`,`bottom-left`,`bottom-center`,`bottom-right`];function It(e,t){if(e.startsWith(`top`))return t;let n=[...t].reverse();if(e!=`bottom-left`&&e!=`bottom-right`)return n;let r=e=>e.className==A.toaster.cornerPopClassName?0:1;return n.sort((e,t)=>r(e)-r(t))}function Lt({item:e,position:n,onHeightUpdate:r}){return t(`div`,{ref:(0,G.useCallback)(t=>{t&&r(e.id,t.getBoundingClientRect().height)},[e.id,r]),style:e.className==A.toaster.inlineClassName?Ut:Wt(n),children:t(te,{toast:e,style:sn(e)})})}var Z={fontSize:`12px`,padding:`5px 7px`},Rt=5,zt=`playerToaster`,Bt=`top-center`,Q=16,Vt={position:`fixed`,zIndex:9999,top:Q,left:Q,right:Q,bottom:Q,pointerEvents:`none`},Ht=100,Ut={display:`flex`};function Wt(e){return{display:`flex`,flexBasis:`100%`,justifyContent:Gt(e)}}function Gt(e){return e.endsWith(`left`)?`flex-start`:e.endsWith(`right`)?`flex-end`:`center`}function Kt(e,t){return{position:`absolute`,left:0,right:0,...e.startsWith(`top`)?{top:0}:{bottom:0},display:`flex`,flexFlow:`row wrap`,alignItems:`center`,justifyContent:Gt(e),gap:`${Rt}px`,...t?{paddingLeft:`${Ht}px`,paddingRight:`${Ht}px`}:{}}}var qt=`playerToastFadeIn`,Jt=`playerToastFadeOut`,Yt=`playerToastPopInTop`,Xt=`playerToastPopInBottom`,Zt=`playerToastPopOutBottom`,Qt=300,$=`${Qt}ms`,$t={removeDelay:Qt},en=3e3,tn={...Z,pointerEvents:`auto`,animation:`${qt} ${$} ease-in-out forwards`},nn={...Z,pointerEvents:`none`,animation:`${Jt} ${$} ease-in-out forwards`},rn={...Z,pointerEvents:`auto`,animation:`${Yt} ${$} ease-in-out forwards`},an={...Z,pointerEvents:`auto`,animation:`${Xt} ${$} ease-in-out forwards`},on={...Z,pointerEvents:`none`,animation:`${Zt} ${$} ease-in-out forwards`};function sn(e){let t=cn(e);return e.position==`bottom-left`||e.position==`bottom-right`?{...t,pointerEvents:`none`}:t}function cn(e){return e.position==`bottom-left`||e.position==`bottom-right`?e.visible?an:on:e.visible?(e.duration??0)<en?tn:(e.position??`top-center`).startsWith(`top`)?rn:an:nn}var ln=p`
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

	@keyframes ${qt} {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes ${Jt} {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	/* 画面上側に出るトースト（showLeveled / showAchieved）の登場。上の画面外から降りてくる */
	@keyframes ${Yt} {
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
	@keyframes ${Xt} {
		from {
			opacity: 0;
			transform: translate3d(0, 120%, 0) scale(0.6);
		}
		to {
			opacity: 1;
			transform: translate3d(0, 0, 0) scale(1);
		}
	}

	/* 体力インジケータ（showStatusSide/showStatusPop）の退出。上と対になる形で、下の画面外へ沈んで消える */
	@keyframes ${Zt} {
		from {
			opacity: 1;
			transform: translate3d(0, 0, 0) scale(1);
		}
		to {
			opacity: 0;
			transform: translate3d(0, 120%, 0) scale(0.6);
		}
	}

	/* 本文まわりの余白（ライブラリ標準は margin 4px 10px）。本文はライブラリ内部の要素で
	   style を渡せないため、要素セレクタを重ねて標準のクラス指定より詳細度を上げる。
	   DOM構造は コンテナ > 表示位置ごとの箱 > トースト1枚の枠 > トースト本体 > 本文（本文は常に最後の子） */
	.${zt} > div > div > div > div:last-child {
		margin: 3px 7px;
	}

	/* 本文以外の子＝showResult の成功/失敗アイコン。ライブラリ内で 20px 固定なので、
	   他のアイコンに合わせて縮小する */
	.${zt} > div > div > div > div:not(:last-child) {
		transform: scale(0.67);
	}
`,un=p`
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
`,dn=(e,t)=>p`
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
`;console.log(`🎮 Player Build Version: 0.0.1743`),console.log(`📅 Player Build Date: ${new Date(`2026-08-28T07:45:03.810Z`).toLocaleString(`ja-JP`)}`),Ee.createRoot(document.getElementById(`root`)).render((0,Y.jsx)(G.StrictMode,{children:(0,Y.jsx)(Mt,{})}));
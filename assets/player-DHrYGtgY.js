import{$ as e,A as t,B as n,C as r,Ct as i,D as a,Dt as o,E as s,Et as c,I as l,L as u,Lt as d,M as f,N as p,O as m,Ot as h,P as g,Q as _,R as v,S as y,T as b,Tt as x,X as S,Z as C,_ as w,_t as T,a as E,b as D,bt as O,c as ee,ct as te,d as ne,dt as k,et as re,f as ie,ft as A,g as ae,gt as j,h as oe,ht as M,i as se,j as N,jt as ce,k as P,kt as le,l as ue,m as de,mt as F,n as I,nt as L,o as R,p as fe,r as pe,s as me,t as z,u as he,v as ge,vt as B,w as V,wt as _e,x as H,y as U,yt as ve,z as ye}from"./control-BMsi_seL.js";import"./modulepreload-polyfill-Dezn_h7o.js";var W=d(ce()),be=d(le(),1),G={v:[]},K=()=>G.v.forEach(e=>e()),xe=e=>(G.v.push(e)===1&&addEventListener(`hashchange`,K),()=>{G.v=G.v.filter(t=>t!==e),G.v.length||removeEventListener(`hashchange`,K)}),Se=()=>`/`+location.hash.replace(/^#?\/?/,``),Ce=(e,{state:t=null,replace:n=!1}={})=>{let r=location.href,[i,a]=e.replace(/^#?\/?/,``).split(`?`),o=new URL(location.href);o.hash=`/${i}`,a&&(o.search=a);let s=o.href;n?history.replaceState(t,``,s):history.pushState(t,``,s);let c=typeof HashChangeEvent<`u`?new HashChangeEvent(`hashchange`,{oldURL:r,newURL:s}):new Event(`hashchange`,{detail:{oldURL:r,newURL:s}});dispatchEvent(c)},we=({ssrPath:e=`/`}={})=>[(0,c.useSyncExternalStore)(xe,Se,()=>e),Ce];we.hrefs=e=>`#`+e;var q;(function(e){e.maroon=`#800000`,e.red=`#FF0000`,e.orange=`#FFA500`,e.yellow=`#FFFF00`,e.olive=`#808000`,e.green=`#008000`,e.purple=`#800080`,e.fuchsia=`#FF00FF`,e.lime=`#00FF00`,e.teal=`#008080`,e.aqua=`#00FFFF`,e.blue=`#0000FF`,e.navy=`#000080`,e.black=`#000000`,e.gray=`#808080`,e.silver=`#C0C0C0`,e.white=`#FFFFFF`})(q||={});var Te=function(e,t){if(e.includes(`/`))return e.replace(`rgb(`,`rgba(`);var n=e.substring(e.startsWith(`rgba(`)?5:4,e.length-1).trim(),r=n.split(`,`);return r.length===4?e.replace(`rgb(`,`rgba(`):r.length===3?`rgba(${n}, ${t})`:`rgba(${n} / ${t})`},Ee=function(e,t){if(e.startsWith(`rgb`))return Te(e,t);if(Object.keys(q).includes(e)&&(e=q[e]),e[0]===`#`&&(e=e.slice(1)),e.length===3){var n=``;e.split(``).forEach(function(e){n+=e,n+=e}),e=n}return`rgba(${(e.match(/.{2}/g)||[]).map(function(e){return parseInt(e,16)}).join(`, `)}, ${t})`},De={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function Oe(e){if(typeof e==`number`)return{value:e,unit:`px`};var t,n=(e.match(/^[0-9.]*/)||``).toString();t=n.includes(`.`)?parseFloat(n):parseInt(n,10);var r=(e.match(/[^0-9]*$/)||``).toString();return De[r]?{value:t,unit:r}:(console.warn(`React Spinners: ${e} is not a valid css value. Defaulting to ${t}px.`),{value:t,unit:`px`})}function J(e){var t=Oe(e);return`${t.value}${t.unit}`}var ke=function(e,t,n){var r=`react-spinners-${e}-${n}`;if(typeof window>`u`||!window.document)return r;var i=document.createElement(`style`);document.head.appendChild(i);var a=i.sheet,o=`
    @keyframes ${r} {
      ${t}
    }
  `;return a&&a.insertRule(o,0),r},Y=function(){return Y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Y.apply(this,arguments)},Ae=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function je(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,i=r===void 0?`#000000`:r,a=e.speedMultiplier,o=a===void 0?1:a,s=e.cssOverride,c=s===void 0?{}:s,l=e.size,u=l===void 0?50:l,d=Ae(e,[`loading`,`color`,`speedMultiplier`,`cssOverride`,`size`]),f=Oe(u),p=f.value,m=f.unit,h=Y({display:`inherit`,position:`relative`,width:J(u),height:J(u),transform:`rotate(165deg)`},c),g=p/5,_=(p-g)/2,v=_-g,y=Ee(i,.75),b=ke(`HashLoader`,`0% {width: ${g}px; box-shadow: ${_}px ${-v}px ${y}, ${-_}px ${v}px ${y}}
    35% {width: ${J(u)}; box-shadow: 0 ${-v}px ${y}, 0 ${v}px ${y}}
    70% {width: ${g}px; box-shadow: ${-_}px ${-v}px ${y}, ${_}px ${v}px ${y}}
    100% {box-shadow: ${_}px ${-v}px ${y}, ${-_}px ${v}px ${y}}`,`before`),x=ke(`HashLoader`,`0% {height: ${g}px; box-shadow: ${v}px ${_}px ${i}, ${-v}px ${-_}px ${i}}
    35% {height: ${J(u)}; box-shadow: ${v}px 0 ${i}, ${-v}px 0 ${i}}
    70% {height: ${g}px; box-shadow: ${v}px ${-_}px ${i}, ${-v}px ${_}px ${i}}
    100% {box-shadow: ${v}px ${_}px ${i}, ${-v}px ${-_}px ${i}}`,`after`),S=function(e){return{position:`absolute`,top:`50%`,left:`50%`,display:`block`,width:`${p/5}${m}`,height:`${p/5}${m}`,borderRadius:`${p/10}${m}`,transform:`translate(-50%, -50%)`,animationFillMode:`none`,animation:`${e===1?b:x} ${2/o}s infinite`}};return n?W.createElement(`span`,Y({style:h},d),W.createElement(`span`,{style:S(1)}),W.createElement(`span`,{style:S(2)})):null}var X=d(re());function Me(){let e=A.basic.general,t=E.hooks.usePath(1);return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(w,{path:t,background:`world`,children:(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(P,{}),(0,X.jsx)(D,{title:[`preset`,`default-language`],explanation:[`text`,E.component.getLanguageLabel()],text:[`preset`,z.check.enableChangeLanguage()?`language-change-enable-general`:`language-change-unenable`]}),(0,X.jsx)(m,{title:[`preset`,`max-category-level`],explanation:[`text`,R.primitive.toLevel(e.maxCategoryLevels)],event:`hint`}),(0,X.jsx)(m,{title:[`preset`,`level-common-ratio`],explanation:[`text`,e.levelCommonRatio.toString()],event:`hint`})]})}),(0,X.jsx)(x,{children:E.hooks.useDefaultRoutes(t)})]})}function Ne(){let e=A,t=e.basic.overview,n=E.hooks.usePath(1),r=t.information,i=z.check.debugMode();return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(w,{path:n,background:`world`,children:[(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(s,{text:`world`,path:n,children:[(0,X.jsx)(U,{base:r,color:t.information.color}),(0,X.jsx)(m,{title:[`preset`,`version`],explanation:[`text`,t.version.toString()]}),(0,X.jsx)(m,{title:[`preset`,`updated`],explanation:[`text`,e.basic.development.timestamp.published]}),(0,X.jsx)(m,{title:[`preset`,`author`],explanation:[`text`,t.author],event:`hint`}),t.homepage&&(0,X.jsx)(m,{title:[`preset`,`homepage`],explanation:[`url`,t.homepage],event:`hint`}),(0,X.jsx)(m,{title:[`preset`,`estimated-playing-time`],explanation:[`text`,`${t.estimatedPlayingTime.value} ${B(t.estimatedPlayingTime.unit).information.name}`],event:`hint`})]})}),(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(s,{text:`console`,path:n,children:[(0,X.jsx)(U,{base:B(`console`).information}),(0,X.jsx)(m,{title:[`preset`,`version`],explanation:[`text`,`0.0.1493`]}),(0,X.jsx)(m,{title:[`preset`,`updated`],explanation:[`text`,Fe(`2026-08-01T12:14:14.208Z`)]}),(0,X.jsx)(m,{title:[`preset`,`author`],explanation:[`text`,`Yutori`]}),(0,X.jsx)(m,{title:[`preset`,`homepage`],explanation:[`url`,`https://idle.yu-to-ri.net/document/index.html`]}),(0,X.jsx)(Pe,{})]})}),!i&&(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(s,{text:`iconify`,path:n,children:[(0,X.jsx)(U,{base:B(`iconify`).information}),Object.entries(ve).map(([e,t])=>(0,X.jsx)(ge,{summary:t},e))]})})]}),(0,X.jsx)(x,{children:E.hooks.useDefaultRoutes(n)})]})}function Pe(){let[e,t]=E.hooks.useConfirm(e=>{e||(E.viewport.normalize(),window.location.hash=``,requestAnimationFrame(()=>window.location.reload()))});return(0,X.jsxs)(V,{children:[(0,X.jsx)(N,{id:`force-restart`,event:[`click`,()=>t(),e]}),(0,X.jsx)(a,{id:`force-restart`})]})}function Fe(e){let t=new Date(e);return`${t.getFullYear()}/${String(t.getMonth()+1).padStart(2,`0`)}/${String(t.getDate()).padStart(2,`0`)} ${String(t.getHours()).padStart(2,`0`)}:${String(t.getMinutes()).padStart(2,`0`)}:${String(t.getSeconds()).padStart(2,`0`)}`}function Ie(){let e=E.hooks.usePath(1),t=I.progress.getCoins(),n=(Date.now()-k.playing.time.initialized)/1e3,r=z.check.visibleList(T(!0).items).reduce((e,t)=>(e.now+=t.user.countNow,e.record+=t.user.countRecord,e),{now:0,record:0}),i=R.primitive.toLevel(z.check.visibleList(T(!0).categories).reduce((e,t)=>t.world.numeric?e+Math.floor(t.user.level):e,0)),a=z.check.visibleList(T(!0).actions).reduce((e,t)=>(e+=t.user.count,e),0);return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(w,{path:e,background:`world`,children:[(0,X.jsx)(X.Fragment,{children:(0,X.jsx)(s,{text:`coin`,path:e,children:t.map(e=>(0,X.jsxs)(W.Fragment,{children:[(0,X.jsx)(m,{title:[`basic`,e],explanation:[`text`,e.user.countNow.toString()]}),(0,X.jsx)(m,{title:[`preset`,`amount-earned`],explanation:[`text`,e.user.countRecord.toString()]})]},e.id))})}),(0,X.jsx)(X.Fragment,{children:(0,X.jsx)(s,{text:`time`,path:e,children:(0,X.jsx)(m,{title:[`preset`,`playing-time`],explanation:[`seconds`,n]})})}),(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(s,{text:`item`,path:e,children:[(0,X.jsx)(m,{title:[`preset`,`count-now`],explanation:[`text`,r.now.toString()]}),(0,X.jsx)(m,{title:[`preset`,`count-gained`],explanation:[`text`,r.record.toString()]})]})}),(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(s,{text:`action`,path:e,children:[(0,X.jsx)(m,{title:[`preset`,`total-level`],explanation:[`text`,i]}),(0,X.jsx)(m,{title:[`preset`,`count-actioned`],explanation:[`text`,a.toString()]})]})})]}),(0,X.jsx)(x,{children:E.hooks.useDefaultRoutes(e)})]})}function Le(){let e=E.hooks.usePath(1),t=e=>e.map(e=>({basic:e,explanation:``,explanationIcon:B(I.event.getArchived(e).flag?`yes`:`no`).information,link:`${e.id}.event`,ribbon:!1})),n=e=>E.component.sortGroup(e,e=>e.world.group).map(t),r=n(z.check.visibleList(O).filter(e=>e.categoryId===``)),i=[];for(let e of z.check.visibleList(T(!0).categories)){let t=z.check.visibleList(e.tasks);t.length!=0&&i.push({category:e,groups:n(t)})}return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(w,{path:e,background:`world`,children:[r.length>0&&(0,X.jsx)(s,{text:`missions`,path:e,children:r.map((e,t)=>(0,X.jsx)(H,{indexes:e,layerDepth:1},`uncategorized-${t}`))}),i.map((e,t)=>e.groups.map((n,r)=>(0,X.jsx)(H,{categoryId:r==0?e.category.id:void 0,indexes:n,layerDepth:1},`${t}-${r}`)))]}),(0,X.jsx)(x,{children:E.hooks.useDefaultRoutes(e)})]})}function Re(){let e=E.hooks.usePath(1),t=[];for(let e of z.check.visibleList(T(!0).categories)){let n=z.check.visibleList(e.actions);if(n.length==0)continue;let r=e.user.progressing?F(e.user.progressing.general.id):void 0,i=n.map(e=>({basic:e,explanation:R.primitive.toLevel(e.world.level),link:`${e.id}.action`,ribbon:I.progress.checkSingleCompleted(void 0,e.id)||e.id===r?.id})),a=I.progress.checkSingleCompleted(e.id);t.push({category:e,actions:i,progress:r,ribbonCategory:a})}let n;try{n=j(A.basic.general.queue.information.id)}catch{n=null}let r=I.progress.getSingletonProgressing(),i=r?F(r.general.id):void 0;return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(w,{path:e,background:`world`,children:[n&&n.user&&z.trade.getMaxQueue()>=1&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(P,{}),(0,X.jsx)(g,{href:`${e.path}/${i?.id}.action`,active:!!i,children:(0,X.jsx)(m,{title:[`basic`,n],explanation:[`text`,`${z.trade.getWaitingCount()} / ${z.trade.getMaxQueue()}`],color:n.information.color})})]}),(0,X.jsx)(X.Fragment,{children:t.map(t=>(0,X.jsx)(H,{categoryId:t.category.id,indexes:t.actions,layerDepth:1,event:[`hold`,I.progress.toggleAct],children:t.progress&&(0,X.jsxs)(g,{href:`${e.path}/${t.progress.id}.action`,children:[(0,X.jsx)(m,{title:[`basic`,t.progress],ribbon:t.ribbonCategory,event:[`hold`,I.progress.toggleAct]}),(0,X.jsx)(b,{categoryId:t.category.id,type:`progress`})]})},t.category.id))})]}),(0,X.jsx)(x,{children:E.hooks.useDefaultRoutes(e)})]})}function ze(){let e=E.hooks.usePath(2),[t,n]=W.useState(new globalThis.Set),r=T(!0).items.filter(e=>e.user.countNow>=1&&e.world.sellingValue>0&&z.check.locked(e)===`released`),i=e=>{n(t=>{let n=new globalThis.Set(t);return n.has(e.id)?n.delete(e.id):n.add(e.id),n})},a=r.map(e=>{let n=e.world.sellingValue*e.user.countNow;return{basic:e,explanation:R.primitive.toStandardCount(n),link:void 0,ribbon:t.has(e.id)}}),o=r.filter(e=>t.has(e.id)),c=o.length,l=o.reduce((e,t)=>e+t.user.countNow,0),u=new globalThis.Map;for(let e of o){let t=z.trade.resolveCoin(e),n=e.world.sellingValue*e.user.countNow,r=u.get(t.id);r?r.value+=n:u.set(t.id,{coin:t,value:n})}let d=()=>{let e=[];for(let t of o){let n=t.world.sellingValue,r=t.user.countNow;if(r<=0||n===0)continue;let i=z.trade.resolveCoin(t),a=z.trade.addAcquisitions([{id:i.id,count:n,chance:1,type:`item`}],r),o=z.trade.reduceRequirements([{type:`item`,id:t.id,count:1,chance:1,equipment:!1}],r);e=[...e,...a,...o]}I.progress.unequipZeroItems(),E.component.forceUpdate(),e.length>0&&E.toaster.showTrade(z.trade.summarizeTrades(e)),n(new globalThis.Set)},[f,p]=E.hooks.useConfirm(e=>!e&&d());return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(w,{path:e,children:[(0,X.jsx)(s,{text:`items`,path:e,children:(0,X.jsx)(H,{indexes:a,layerDepth:2,event:[`click`,i]})}),(0,X.jsxs)(s,{text:`selected`,path:e,children:[(0,X.jsx)(m,{title:[`preset`,`kind`],explanation:[`text`,c.toString()]}),(0,X.jsx)(m,{title:[`preset`,`count`],explanation:[`text`,l.toString()]}),[...u.values()].map(({coin:e,value:t})=>(0,X.jsx)(m,{title:[`preset`,`value`],explanation:[`text`,R.primitive.toStandardCount(t)],inlineIcon:[`information`,e.information]},e.id)),(0,X.jsx)(N,{id:`sell`,event:[`click`,()=>p(),f],active:c>0})]})]}),(0,X.jsx)(x,{children:E.hooks.useDefaultRoutes(e)})]})}function Be(){let e=E.hooks.usePath(1),t=[];for(let e of z.check.visibleList(T(!0).categories)){let n=z.check.visibleList(e.items);if(n.length==0)continue;let r=E.component.sortGroup(n,e=>e.world.group).map(t=>{let n=t[0].world.group,r=e.world.equipmentGroups.includes(n),i=e.user.equipments.find(e=>t.some(t=>t.id===e));return{nodes:t.map(e=>({basic:e,explanation:e.user.countNow.toString(),link:`${e.id}.item`,ribbon:i===e.id})),groupId:n,equipmentable:r,equippingId:i}});t.push({category:e,groups:r})}let n=I.progress.getCoins(),r;try{let e=A.basic.general.capacity.information.id;r=j(e)}catch{r=null}let a;try{let e=A.basic.general.queue.information.id;a=j(e)}catch{a=null}return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(w,{path:e,background:`world`,children:[(0,X.jsx)(P,{}),n.map((t,n)=>(n==0||t.user.countRecord>0)&&(0,X.jsx)(g,{href:`${e.path}/${t.id}.item`,children:(0,X.jsx)(m,{title:[`basic`,t],explanation:[`text`,t.user.countNow.toString()],color:t.information.color})},t.id)),r&&r.user&&z.trade.getMaxCapacity()>0&&(0,X.jsx)(g,{href:`${e.path}/${r.id}.item`,children:(0,X.jsx)(m,{title:[`basic`,r],explanation:[`text`,`${z.trade.getCurrentItemTypesCount()} / ${z.trade.getMaxCapacity()}`],color:r.information.color})}),a&&a.user&&(0,X.jsx)(g,{href:`${e.path}/${a.id}.item`,children:(0,X.jsx)(m,{title:[`basic`,a],explanation:[`text`,`${z.trade.getWaitingCount()} / ${z.trade.getMaxQueue()}`],color:a.information.color})}),(0,X.jsx)(g,{href:`${e.path}/selling.character`,children:(0,X.jsx)(m,{title:[`preset`,`selling`]})}),t.map((t,n)=>t.groups.map((r,i)=>(0,X.jsx)(H,{categoryId:i==0?t.category.id:void 0,indexes:r.nodes,layerDepth:1,event:[`hold`,I.progress.toggleEquip],children:R.primitive.switches([r.equippingId!==void 0,r.equipmentable,!0],[r.equippingId&&(0,X.jsx)(g,{href:`${e.path}/${r.equippingId}.item`,children:(0,X.jsx)(m,{title:[`type`,r.equippingId,`item`],explanation:[`preset`,`equipping`],inlineIcon:`explanation`,event:[`hold`,I.progress.toggleEquip]})}),(0,X.jsx)(m,{title:[`preset`,`equipment`],explanation:[`preset`,`unequipping`],inlineIcon:`explanation`}),(0,X.jsx)(X.Fragment,{})])},`${n}-${i}`)))]}),(0,X.jsxs)(x,{children:[(0,X.jsx)(i,{path:`${e.path}/selling.character/*?`,children:(0,X.jsx)(ze,{})}),E.hooks.useDefaultRoutes(e)]})]})}function Ve(){let e=E.hooks.usePath(1),t=[];for(let e of z.check.visibleList(T(!0).categories)){let n=e.summerizedProperties;if(n.size==0)continue;let r=[];for(let e of n.values()){if(e.value==0)continue;let t={basic:B(e.id),explanation:R.primitive.getWithSign(e.value),link:`${e.categoryId}_${e.id}.correction`,ribbon:!1};r.push(t)}r.sort((e,t)=>te.indexOf(e.basic.id)-te.indexOf(t.basic.id)),t.push({category:e,indexes:r})}return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(w,{path:e,background:`world`,children:t.length>0?(0,X.jsx)(X.Fragment,{children:t.map(e=>(0,X.jsx)(H,{categoryId:e.category.id,indexes:e.indexes,layerDepth:1},e.category.id))}):(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(P,{}),(0,X.jsx)(a,{id:`no-status`})]})}),(0,X.jsxs)(x,{children:[(0,X.jsx)(i,{path:`${e.path}/:type.correction/*?`,children:(0,X.jsx)(ae,{layerDepth:2})}),E.hooks.useDefaultRoutes(e)]})]})}function He(){let e=E.hooks.usePath(1),t=z.check.debugMode();return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(w,{path:e,background:`world`,children:(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(P,{}),(0,X.jsx)(Ue,{path:e}),(0,X.jsx)(P,{}),(0,X.jsx)(We,{}),(0,X.jsx)(P,{}),(0,X.jsx)(Ge,{}),(0,X.jsx)(P,{}),(0,X.jsx)(Ke,{}),(0,X.jsx)(P,{}),(0,X.jsx)(qe,{}),(0,X.jsx)(P,{}),!t&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Ye,{}),(0,X.jsx)(P,{})]}),(0,X.jsx)(Je,{}),(0,X.jsx)(P,{}),(0,X.jsx)(Xe,{})]})}),(0,X.jsxs)(x,{children:[(0,X.jsx)(i,{path:`${e.path}/language.world/*?`,children:(0,X.jsx)(oe,{layerDepth:2})}),E.hooks.useDefaultRoutes(e)]})]})}function Ue({path:e}){let t=z.check.enableChangeLanguage();return(0,X.jsx)(g,{href:`${e.path}/language.world`,active:t,children:(0,X.jsx)(D,{title:[`preset`,`language`],explanation:[`text`,E.component.getLanguageLabel()],text:[`preset`,t?`language-change-enable`:`language-change-unenable`],inlineIcon:[`preset`,`language-${k.config.language}`]})})}function We(){let[e,t]=(0,W.useState)(k.config.categoryShortcut);return(0,X.jsx)(D,{title:[`preset`,`category-shortcut`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{k.config.categoryShortcut=!e,t(!e),E.component.forceUpdate()}],text:[`preset`,`category-shortcut`],inlineIcon:`explanation`})}function Ge(){let[e,t]=(0,W.useState)(k.config.showingHint);return(0,X.jsx)(D,{title:[`preset`,`showing-hint`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{k.config.showingHint=!e,t(!e),E.component.forceUpdate()}],text:[`preset`,`showing-hint`],inlineIcon:`explanation`})}function Ke(){let[e,t]=(0,W.useState)(k.config.showingNavigation);return(0,X.jsx)(D,{title:[`preset`,`showing-navigation`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{k.config.showingNavigation=!e,t(!e),E.component.forceUpdate()}],text:[`preset`,`showing-navigation`],inlineIcon:`explanation`})}function qe(){let[e,t]=(0,W.useState)(k.config.performingHighly);return(0,X.jsx)(D,{title:[`preset`,`performing-highly`],explanation:[`preset`,e?`on`:`off`],event:[`click`,()=>{k.config.performingHighly=!e,t(!e)}],text:[`preset`,`performing-highly`],inlineIcon:`explanation`})}function Je(){let[,e]=E.hooks.useLocation(),t=()=>{let e=JSON.parse(JSON.stringify(k)).world,t=JSON.stringify(k,null,2),n=new Blob([t],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`),a=B(`export-game`);i.href=r,i.download=`yutori-idle-${e.id}-${e.version}.json`,i.click(),URL.revokeObjectURL(r),E.toaster.showTip(a.information.explanation,a,!1)},n=()=>{let e=B(`import-mistake`);E.toaster.showTip(e.information.explanation,e,!1)};return(0,X.jsxs)(V,{children:[(0,X.jsx)(N,{id:`export-game`,event:[`click`,t,!1]}),(0,X.jsx)(N,{id:`import-game`,event:[`click`,()=>{let t=document.createElement(`input`);t.type=`file`,t.accept=`.json`,t.onchange=t=>{let r=t.target.files?.[0];if(r){let t=new FileReader;t.onload=t=>{try{let r=JSON.parse(t.target?.result);if(r.world?.id!==A.basic.overview.information.id||r.world?.version!==A.basic.overview.version){n();return}se.userData.handle.importUserData(r);let i=B(`import-game`);E.toaster.showTip(i.information.explanation,i,!1),e(`/`,{replace:!0})}catch{n()}},t.readAsText(r)}},t.click()},!1]})]})}function Ye(){let[e,t]=(0,W.useState)(null);return(0,W.useEffect)(()=>{let e=e=>{e.preventDefault(),t(e)};return window.addEventListener(`beforeinstallprompt`,e),()=>{window.removeEventListener(`beforeinstallprompt`,e)}},[]),(0,X.jsxs)(V,{children:[(0,X.jsx)(N,{id:`pwa`,event:[`click`,async()=>{if(!e){E.toaster.showResult(!1);return}try{await e.prompt();let{outcome:n}=await e.userChoice;E.toaster.showResult(n===`accepted`),t(null)}catch{E.toaster.showResult(!1)}},!1]}),(0,X.jsx)(a,{id:`pwa`})]})}function Xe(){let[e,n]=E.hooks.useConfirm(e=>{if(e){let e=B(`reset-alert`);E.toaster.showTip(e.information.explanation,e)}else{if(r!=`DELETE`&&!z.check.debugMode())return;pe.player.disableUnloadAndReset(),se.userData.handle.resetLocal(),E.toaster.hideAll(!0),window.location.hash=``,window.location.reload()}}),[r,i]=(0,W.useState)(`*`),o=e=>{i(e)},s=z.check.debugMode();return(0,X.jsxs)(V,{children:[(0,X.jsx)(N,{id:`reset-game`,event:[`click`,()=>n(),e]}),(0,X.jsx)(t,{id:`reset-really`,value:r,changeHandler:o,placeholder:`*`}),(0,X.jsx)(a,{id:`reset-game`}),s&&(0,X.jsx)(a,{id:`reset-debug-mode`})]})}function Ze(){let e=E.hooks.usePath(1);return z.check.debugMode()?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(w,{path:e,background:`world`,children:[(0,X.jsx)(P,{}),(0,X.jsx)(Qe,{}),(0,X.jsx)(P,{}),(0,X.jsx)($e,{})]}),(0,X.jsx)(x,{children:E.hooks.useDefaultRoutes(e)})]}):(0,X.jsx)(X.Fragment,{})}function Qe(){let[e,t]=(0,W.useState)(k.config.acceleration.multiplier),[n,i]=(0,W.useState)(k.config.acceleration.active);return(0,X.jsxs)(V,{children:[(0,X.jsx)(D,{title:[`preset`,`acceleration`],explanation:[`preset`,n?`yes`:`no`],event:[`click`,()=>{let e=k.config.acceleration.active;k.config.acceleration.active=!e,i(!e)}],text:`title`,inlineIcon:`explanation`}),(0,X.jsx)(r,{id:`multiplier`,value:e,changeHandler:e=>{t(e),k.config.acceleration.multiplier=e},placeholder:`-`,max:100,min:1})]})}function $e(){let[e,n]=(0,W.useState)(`category`),i=()=>{n(L[(L.indexOf(e)+1)%L.length])},[o,s]=(0,W.useState)(``),c=e=>{s(e)},[l,u]=(0,W.useState)(`plus`),d=()=>{u(e=>e===`plus`?`minus`:`plus`)},[f,p]=(0,W.useState)(1),m=e=>{p(e)},[h,g]=E.hooks.useConfirm(t=>!t&&z.trade.adjust(e,o,l,f));return(0,X.jsxs)(V,{children:[(0,X.jsx)(D,{title:[`preset`,`adjustment`],text:`title`}),(0,X.jsx)(D,{title:[`preset`,`adjustment-type`],explanation:[`preset`,`adjustment-${e}`],inlineIcon:[`preset`,e],event:[`click`,i],bold:!0,text:`explanation`}),(0,X.jsx)(t,{id:`adjustment-id`,value:o,changeHandler:c,placeholder:`all`}),(0,X.jsx)(a,{id:`adjustment-id`}),(0,X.jsx)(D,{title:[`preset`,`adjustment-sign`],explanation:[`preset`,`adjustment-${l}`],inlineIcon:`explanation`,event:[`click`,d],bold:!0,text:`explanation`}),(0,X.jsx)(r,{id:`adjustment-count`,value:f,changeHandler:m,placeholder:`1`,max:1e3}),(0,X.jsx)(a,{id:`adjustment-count`}),(0,X.jsx)(N,{id:`adjustment-adjust`,event:[`click`,()=>g(),h]})]})}function et(){let e=z.check.debugMode(),t=E.hooks.usePath(0),n=E.component.sortGroup(z.check.visibleList(T(!0).categories),e=>e.world.group);return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(w,{path:t,background:`world`,children:[(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(s,{text:`character`,path:t,children:[(0,X.jsx)(g,{href:`/activity.character`,children:(0,X.jsx)(m,{title:[`preset`,`activity`],bold:!0})}),(0,X.jsx)(g,{href:`/inventory.character`,children:(0,X.jsx)(m,{title:[`preset`,`inventory`],bold:!0})}),(0,X.jsx)(g,{href:`/status.character`,children:(0,X.jsx)(m,{title:[`preset`,`status`],bold:!0})}),z.check.visibleList(O).length>0&&(0,X.jsx)(g,{href:`/missions.character`,children:(0,X.jsx)(m,{title:[`preset`,`missions`],bold:!0})})]})}),(0,X.jsx)(X.Fragment,{children:n.map(e=>(0,X.jsx)(y,{categories:e,path:t},e[0].world.group))}),(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(s,{text:`world`,path:t,children:[(0,X.jsx)(g,{href:`/overview.world`,children:(0,X.jsx)(m,{title:[`preset`,`overview`],bold:!0})}),(0,X.jsx)(g,{href:`/general.world`,children:(0,X.jsx)(m,{title:[`preset`,`general`],bold:!0})}),(0,X.jsx)(g,{href:`/statistics.world`,children:(0,X.jsx)(m,{title:[`preset`,`statistics`],bold:!0})}),(0,X.jsx)(g,{href:`/config.world`,children:(0,X.jsx)(m,{title:[`preset`,`config`],bold:!0})}),e&&(0,X.jsx)(g,{href:`/debug.world`,children:(0,X.jsx)(m,{title:[`preset`,`debug`],bold:!0})})]})})]}),(0,X.jsxs)(x,{children:[(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(i,{path:`/activity.character/*?`,children:(0,X.jsx)(Re,{})}),(0,X.jsx)(i,{path:`/inventory.character/*?`,children:(0,X.jsx)(Be,{})}),(0,X.jsx)(i,{path:`/status.character/*?`,children:(0,X.jsx)(Ve,{})}),(0,X.jsx)(i,{path:`/missions.character/*?`,children:(0,X.jsx)(Le,{})})]}),(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(i,{path:`/overview.world/*?`,children:(0,X.jsx)(Ne,{})}),(0,X.jsx)(i,{path:`/general.world/*?`,children:(0,X.jsx)(Me,{})}),(0,X.jsx)(i,{path:`/statistics.world/*?`,children:(0,X.jsx)(Ie,{})}),(0,X.jsx)(i,{path:`/config.world/*?`,children:(0,X.jsx)(He,{})}),(0,X.jsx)(i,{path:`/debug.world/*?`,children:(0,X.jsx)(Ze,{})})]}),E.hooks.useDefaultRoutes(t)]})]})}function tt({children:e}){let t=nt();return u(`span`,{id:`grider`,css:[t.base,t.scrollbarStyle],children:e})}function nt(){return{base:h`
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
		`,scrollbarStyle:h`
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
		`}}var rt={duration:300,snappingDown:!0};function it(){let e=(0,W.useRef)(null),t=E.hooks.useSmoothRef(()=>{let e=I.progress.getSingletonProgressing();return e?M(F(e.general.id).categoryId).user.level%1:0},rt);return E.hooks.useUpdate(()=>{let n=e.current;if(!n)return;let r=I.progress.getSingletonProgressing(),i=R.primitive.clamp(t.current,0,1);n.style.setProperty(`--header-percentage`,`${i*100}%`),n.style.setProperty(`--header-color`,r?E.style.geFadedColor(F(r.general.id).information.color):`transparent`)}),u(`div`,{css:at(),ref:e})}function at(){return h`
		position: fixed;
		top: ${S.constants.barHeight}px;
		left: 0;
		width: 100svw;
		height: ${S.constants.headerLineHeight}px;
		--header-percentage: 0%;
		--header-color: transparent;
		background: linear-gradient(to right, var(--header-color) var(--header-percentage), transparent var(--header-percentage));
		z-index: 20;
	`}var ot={},st={duration:300};function ct(){let[e,t]=(0,W.useState)(()=>E.scroll.getScrolledPosition().x>0),[n,r]=(0,W.useState)(()=>I.progress.getSingletonProgressing()?.general.id),i=(0,W.useRef)(null),[,a]=E.hooks.useLocation(),o=()=>{E.scroll.slideTop()},s=()=>{let e=E.component.getSingletonProgressingPath();e&&(a(e),E.scroll.slideBottom())},c=E.hooks.useSmoothRef(()=>{let e=I.progress.getSingletonProgressing();return e?I.progress.caluculateBarProgresing(e):0},()=>I.progress.getSingletonProgressing()?.combat?st:ot);return E.hooks.useUpdate(()=>{r(I.progress.getSingletonProgressing()?.general.id),t(E.scroll.getScrolledPosition().x>0);let e=i.current;e&&(e.style.transform=`scaleX(${R.primitive.clamp(c.current,0,1)})`)}),v(`span`,{css:[lt(8).base],children:[u(p,{height:8,fillRef:i,color:n?E.style.getActionProgressColor(n):void 0}),e&&u(f,{id:`go-top`,leftern:!0,handler:o,size:26}),n&&u(f,{id:n,leftern:!1,handler:s,size:26})]})}function lt(e){return{base:h`
			/* display: flex; */
			position: relative;
			width: 100svw;
			height: ${e}px;
			/* bottom: 0; */
			z-index: 20;
			background-color: transparent;
		`}}var Z;function ut(){if(!Z)return E.component.setBackgroundHandler(dt),dt(`world`),null}function dt(e){let t,n=z.check.debugMode();if(e==`world`){if(Z==`world`)return;t=A.basic.design.background,Z=e}else{if(Z&&Z[0]==`category`&&Z[1]==e[1])return;t=M(e[1]).world.background,t?Z=e:(t=A.basic.design.background,Z=`world`)}t&&!n&&(t.startsWith(`./`)||t.startsWith(`data:`));let r=S.colors.background,{h:i,s:a,l:o}=C(r).hsl().object(),s=.15,c=ft(i*(1-s),a*(1-s),o*(1-s)),l=ft(i*1.15,a*1.15,o*1.15);if(window.document.body.style.backgroundColor=S.colors.bar,t){let e=`linear-gradient(
			to top,
			${C(c).alpha(.5).rgb().string()},
			${C(r).alpha(.5).rgb().string()},
			${C(l).alpha(.5).rgb().string()}
		)`;window.document.body.style.background=`${e}, url(${t}) center / cover no-repeat fixed`}else window.document.body.style.background=`linear-gradient(
			to top,
			${c},
			${r},
			${l}
		)`}function ft(e,t,n){return`hsl(${e}, ${t}%, ${n}%)`}function pt(){let[e,t]=(0,W.useState)(!1),n=(0,W.useRef)(!1);(0,W.useEffect)(()=>{(async()=>{if(!n.current){n.current=!0;try{await ee(),he(),ne(),I.event.check(),t(!0)}catch(e){console.error(`Initialization error:`,e)}}})()},[]);let[r,i]=E.hooks.useLocation();(0,W.useEffect)(()=>{if(!e)return;let t=fe(r);t&&i(t,{replace:!0})},[e,r,i]),(0,W.useEffect)(()=>{e&&(me(),ie())},[e]);let a=()=>{if(z.check.debugMode())return{background:`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,color:`white`};let e=document.querySelector(`meta[name="bar-color"]`),t=document.querySelector(`meta[name="text-color"]`);return{background:e?.content||`#667eea`,color:t?.content||`white`}};if(!e){let e=a();return v(`div`,{css:Ct(e.background,e.color),children:[u(je,{color:e.color,size:80,cssOverride:{display:`block`}}),u(`h2`,{children:`Loading Game...`}),u(`p`,{children:`Initializing world data and assets`})]})}return u(_,{children:u(mt,{})})}function mt(){return e(),v(l,{children:[u(`div`,{style:{display:ue?`block`:`none`},children:`This game was interrupted because it was opened in another tab.`}),v(`div`,{style:{display:ue?`none`:`block`},children:[u(o,{styles:xt}),u(_e,{base:`/`,hook:we,children:v(`div`,{css:St,children:[u(it,{}),u(tt,{children:u(et,{})}),u(ct,{})]})}),u(ye,{gutter:gt,containerClassName:Q,children:e=>u(n,{toast:e,style:e.visible?yt:bt})}),u(de,{}),u(ut,{})]})]})}var ht={fontSize:`11px`,padding:`5px 7px`},gt=5,Q=`playerToaster`,_t=`playerToastFadeIn`,vt=`playerToastFadeOut`,$=`0.3s`,yt={...ht,animation:`${_t} ${$} ease-out forwards`},bt={...ht,animation:`${vt} ${$} ease-out forwards`},xt=h`
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

	@keyframes ${_t} {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes ${vt} {
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
`,St=h`
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
`,Ct=(e,t)=>h`
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
`;console.log(`🎮 Player Build Version: 0.0.1493`),console.log(`📅 Player Build Date: ${new Date(`2026-08-01T12:14:14.208Z`).toLocaleString(`ja-JP`)}`),be.createRoot(document.getElementById(`root`)).render((0,X.jsx)(W.StrictMode,{children:(0,X.jsx)(pt,{})}));
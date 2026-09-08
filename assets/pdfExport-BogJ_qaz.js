const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/html2canvas-CLVA0Ark.js","assets/rolldown-runtime-DAXXjFlN.js","assets/jspdf.es.min-DbnNxFEl.js","assets/preload-helper-D-S8J-u5.js","assets/typeof-B5XbjTb1.js","assets/browser-BoJ3s3kw.js"])))=>i.map(i=>d[i]);
import{o as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./preload-helper-D-S8J-u5.js";import{p as n,t as r}from"./status-Ct-Fg1e9.js";import{n as i,r as a}from"./exportWorkbook-DAxTvWNR.js";var o={primary:`#2A9090`,primaryDark:`#1B6B6B`,text:`#1A2B2B`,muted:`#5C7070`,border:`#D8E4E4`,headerBg:`#EEF6F6`,danger:`#B4451F`,page:`#FFFFFF`};function s(e){return e==null?``:String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function c(e){if(!e)return`—`;let t=new Date(e);return Number.isNaN(t.getTime())?`—`:t.toLocaleDateString(`he-IL`)}function l(e,t=``){return`<section data-pdf-block style="margin:0 0 14px;${t}">${e}</section>`}function u(e){return`<h2 style="margin:0 0 8px;font-size:13px;font-weight:700;color:${o.primaryDark};
    border-bottom:2px solid ${o.primary};padding-bottom:4px;">${s(e)}</h2>`}var d=`padding:6px 8px;border:1px solid ${o.border};font-size:11px;color:${o.text};vertical-align:top;text-align:right;`,f=`${d}background:${o.headerBg};color:${o.primaryDark};font-weight:700;`;function p(e,t,n){return`<table style="width:100%;border-collapse:collapse;table-layout:fixed;">${n?`<colgroup>${n.map(e=>`<col style="width:${e}">`).join(``)}</colgroup>`:``}
    <thead><tr>${e.map(e=>`<th style="${f}">${s(e)}</th>`).join(``)}</tr></thead>
    <tbody>${t.map(e=>`<tr>${e.map(e=>`<td style="${d}">${e}</td>`).join(``)}</tr>`).join(``)}</tbody>
  </table>`}function m(e){let t=s(e);return t?`<span style="white-space:pre-wrap;word-break:break-word;">${t}</span>`:`—`}function h(e){let{assignment:t,cycle:n}=e;return l(`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:16px;
      border-bottom:3px solid ${o.primary};padding-bottom:10px;">
      <div>
        <div style="font-size:18px;font-weight:800;color:${o.primaryDark};">הערכת עובד/ת שנתית</div>
        <div style="font-size:12px;color:${o.muted};margin-top:2px;">
          ${s(n?.title??t.cycleId)}${n?` · שנת ${s(n.evaluationYear)}`:``}
        </div>
      </div>
      <div style="text-align:left;font-size:11px;color:${o.muted};">
        <div style="font-weight:700;color:${o.primaryDark};font-size:13px;">עיריית מגדל העמק</div>
        <div>פורטל עובדים · Migdal 365</div>
      </div>
    </div>`)}function g(e){let{assignment:t,meeting:i}=e,a=(e,t)=>`
    <div style="border:1px solid ${o.border};border-radius:4px;padding:6px 8px;">
      <div style="font-size:9px;color:${o.muted};">${s(e)}</div>
      <div style="font-size:11px;color:${o.text};font-weight:600;">${s(t)||`—`}</div>
    </div>`;return l(`
    ${u(`פרטי המוערך/ת`)}
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;">
      ${a(`שם`,t.employeeName)}
      ${a(`תפקיד`,t.employeeRoleSnapshot)}
      ${a(`אגף`,t.employeeDepartmentSnapshot)}
      ${a(`יחידה`,t.employeeUnitSnapshot)}
      ${a(`מנהל/ת מעריך/ה`,t.managerNameSnapshot)}
      ${a(`שלב בתהליך`,r[n(t)])}
      ${a(`הוגש ע"י העובד/ת`,c(t.employeeSubmittedDate))}
      ${a(`הוגש ע"י המנהל/ת`,c(t.managerSubmittedDate))}
      ${a(`שיחת משוב`,c(t.feedbackMeetingDate??i?.meetingDate))}
    </div>
    ${t.isExcluded?`<div style="margin-top:8px;font-size:11px;color:${o.danger};">
      הוחרג/ה מהמחזור${t.exclusionReason?` — ${s(t.exclusionReason)}`:``}</div>`:``}`)}var _={none:`תואם`,moderate:`פער קל`,significant:`פער משמעותי`};function v(e){return e.comparison.groups.length===0?l(`${u(`השוואת הערכות`)}
      <div style="font-size:11px;color:${o.muted};">לא נמצאו שאלות להשוואה בין השאלונים.</div>`):e.comparison.groups.map((e,t)=>{let n=e.rows.map(e=>{let t=(e,t,n,r)=>{let i=e===null?n?m(n):`—`:`<b>${s(t??e)}</b>${t?` <span style="color:${o.muted};">(${s(e)})</span>`:``}`;return r?`${i}<div style="margin-top:3px;color:${o.muted};font-size:10px;white-space:pre-wrap;">${s(r)}</div>`:i},n=e.gap===null?`<span style="color:${o.muted};">—</span>`:`${e.gap>0?`+`:``}${s(e.gap)}<div style="font-size:9px;color:${o.muted};">${s(_[e.severity]??``)}</div>`,r=e.employeeQuestion?.title,i=e.managerQuestion?.title;return[r&&i&&r!==i?`${m(r)}<div style="margin-top:3px;font-size:9px;color:${o.muted};">נוסח המנהל/ת: ${s(i)}</div>`:m(r??i??``),t(e.employeeRating,e.employeeRatingLabel,e.employeeText,e.employeeComment),t(e.managerRating,e.managerRatingLabel,e.managerText,e.managerComment),n]});return l(`
      ${t===0?u(`השוואת הערכות — עובד/ת מול מנהל/ת`):``}
      <h3 style="margin:0 0 6px;font-size:12px;font-weight:700;color:${o.text};">${s(e.sectionTitle)}</h3>
      ${p([`שאלה / כשירות`,`הערכה עצמית`,`הערכת המנהל/ת`,`פער`],n,[`40%`,`24%`,`24%`,`12%`])}`)}).join(``)}function y(e){let t=e.summary;if(!t)return``;let n=[[`סיכום השיחה`,t.generalFeedbackSummary??t.managerSummary],[`חוזקות ונקודות לשימור`,a(t.strengthsItems,t.strengths)],[`תחומים לשיפור`,a(t.improvementItems,t.improvementAreas)],[`צורכי למידה והתפתחות`,t.learningNeeds],[`משוב המוערך/ת`,t.employeeComments],[`סיכום / התייחסות מנהל/ת האגף`,t.departmentManagerSummary]].filter(e=>!!e[1]?.trim());return n.length===0?``:l(`
    ${u(`סיכום שיחת המשוב`)}
    ${n.map(([e,t])=>`
      <div style="margin-bottom:8px;">
        <div style="font-size:11px;font-weight:700;color:${o.primaryDark};margin-bottom:2px;">${s(e)}</div>
        <div style="font-size:11px;color:${o.text};white-space:pre-wrap;word-break:break-word;
          border-right:3px solid ${o.border};padding-right:8px;">${s(t)}</div>
      </div>`).join(``)}`)}function b(e){if(e.goals.length===0)return``;let t={open:`פתוח`,inProgress:`בתהליך`,achieved:`הושג`,cancelled:`בוטל`},n=e.goals.map(e=>[m(e.title),m(e.successMeasure),m(e.employeeActions??(e.managerActions?``:e.requiredActions)),m(e.managerActions),s(c(e.targetDate)),s(t[e.goalStatus]??e.goalStatus)]);return l(`
    ${u(`יעדים לשנה הבאה`)}
    ${p([`יעד`,`מדד הצלחה`,`פעולות מהעובד/ת`,`פעולות מהמנהל/ת`,`תאריך יעד`,`סטטוס`],n,[`22%`,`18%`,`20%`,`20%`,`10%`,`10%`])}`)}function x(){return l(`
    <div style="border-top:1px solid ${o.border};padding-top:6px;display:flex;justify-content:space-between;
      font-size:9px;color:${o.muted};">
      <span>הופק מפורטל העובדים · ${s(new Date().toLocaleDateString(`he-IL`))}</span>
      <span>מסמך פנימי — חסוי</span>
    </div>`)}function S(e){return`<!doctype html><html lang="he" dir="rtl"><head><meta charset="utf-8">
    <title>${s(e.assignment.employeeName)}</title></head>
    <body style="margin:0;padding:28px;background:${o.page};color:${o.text};
      font-family:'Segoe UI','Arial','Noto Sans Hebrew','David',sans-serif;direction:rtl;text-align:right;">
      ${h(e)}
      ${g(e)}
      ${v(e)}
      ${y(e)}
      ${b(e)}
      ${x()}
    </body></html>`}var C=18,w=.9;async function T(n,r){let i=document.createElement(`iframe`);i.setAttribute(`aria-hidden`,`true`),i.setAttribute(`sandbox`,`allow-same-origin`),i.style.cssText=`position:fixed;left:-10000px;top:0;border:0;width:794px;height:600px;`,document.body.appendChild(i);try{let a=i.contentDocument;if(!a)throw Error(`לא ניתן היה להכין את מסמך ההערכה להורדה.`);a.open(),a.write(n),a.close(),await new Promise(e=>setTimeout(e,60)),a.fonts?.ready&&await a.fonts.ready,i.style.height=`${Math.max(a.body.scrollHeight,600)}px`;let{default:o}=await t(async()=>{let{default:t}=await import(`./html2canvas-CLVA0Ark.js`).then(t=>e(t.default,1));return{default:t}},__vite__mapDeps([0,1])),s=[...a.querySelectorAll(`[data-pdf-block]`)],c=[];for(let e of s)c.push(await o(e,{scale:r,backgroundColor:`#FFFFFF`,logging:!1,useCORS:!1,windowWidth:794,width:e.scrollWidth,height:e.scrollHeight}));return c}finally{i.remove()}}async function E(e){let{jsPDF:n}=await t(async()=>{let{jsPDF:e}=await import(`./jspdf.es.min-DbnNxFEl.js`);return{jsPDF:e}},__vite__mapDeps([2,1,3,4,5])),r=new n({unit:`pt`,format:`a4`,orientation:`portrait`,compress:!0}),i=r.internal.pageSize.getWidth(),a=r.internal.pageSize.getHeight(),o=i-C*2,s=a-C*2,c=C,l=!0;for(let t of e){if(t.width===0||t.height===0)continue;let e=o/t.width,n=t.height*e;if(n>s){let n=Math.floor(s/e);for(let i=0;i<t.height;i+=n){let a=Math.min(n,t.height-i),s=document.createElement(`canvas`);s.width=t.width,s.height=a;let u=s.getContext(`2d`);if(!u)break;u.fillStyle=`#FFFFFF`,u.fillRect(0,0,s.width,s.height),u.drawImage(t,0,i,t.width,a,0,0,t.width,a),l||r.addPage(),r.addImage(s.toDataURL(`image/jpeg`,w),`JPEG`,C,C,o,a*e),l=!1,c=C+a*e}continue}!l&&c+n>a-C&&(r.addPage(),c=C),r.addImage(t.toDataURL(`image/jpeg`,w),`JPEG`,C,c,o,n),c+=n,l=!1}return r.output(`blob`)}async function D(e,t=2){let n=await T(S(e),t);if(n.length===0)throw Error(`לא נמצא תוכן להפקת מסמך ההערכה.`);return E(n)}async function O(e,t){let n=await D(e),r=URL.createObjectURL(n),a=document.createElement(`a`);a.href=r,a.download=`${i(t)}.pdf`,a.click(),URL.revokeObjectURL(r)}export{O as downloadEvaluationPdf};
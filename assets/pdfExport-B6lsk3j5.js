const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/html2canvas-CLVA0Ark.js","assets/rolldown-runtime-DAXXjFlN.js","assets/jspdf.es.min-C0hr2k1b.js","assets/preload-helper-D-S8J-u5.js","assets/typeof-B5XbjTb1.js","assets/browser-BoJ3s3kw.js"])))=>i.map(i=>d[i]);
import{o as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./preload-helper-D-S8J-u5.js";import{p as n,t as r}from"./status-Ct-Fg1e9.js";import{safeFileName as i}from"./exportWorkbook-BE6sqYR0.js";var a={primary:`#2A9090`,primaryDark:`#1B6B6B`,text:`#1A2B2B`,muted:`#5C7070`,border:`#D8E4E4`,headerBg:`#EEF6F6`,danger:`#B4451F`,page:`#FFFFFF`};function o(e){return e==null?``:String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function s(e){if(!e)return`—`;let t=new Date(e);return Number.isNaN(t.getTime())?`—`:t.toLocaleDateString(`he-IL`)}function c(e,t=``){return`<section data-pdf-block style="margin:0 0 14px;${t}">${e}</section>`}function l(e){return`<h2 style="margin:0 0 8px;font-size:13px;font-weight:700;color:${a.primaryDark};
    border-bottom:2px solid ${a.primary};padding-bottom:4px;">${o(e)}</h2>`}var u=`padding:6px 8px;border:1px solid ${a.border};font-size:11px;color:${a.text};vertical-align:top;text-align:right;`,d=`${u}background:${a.headerBg};color:${a.primaryDark};font-weight:700;`;function f(e,t,n){return`<table style="width:100%;border-collapse:collapse;table-layout:fixed;">${n?`<colgroup>${n.map(e=>`<col style="width:${e}">`).join(``)}</colgroup>`:``}
    <thead><tr>${e.map(e=>`<th style="${d}">${o(e)}</th>`).join(``)}</tr></thead>
    <tbody>${t.map(e=>`<tr>${e.map(e=>`<td style="${u}">${e}</td>`).join(``)}</tr>`).join(``)}</tbody>
  </table>`}function p(e){let t=o(e);return t?`<span style="white-space:pre-wrap;word-break:break-word;">${t}</span>`:`—`}function m(e){let{assignment:t,cycle:n}=e;return c(`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:16px;
      border-bottom:3px solid ${a.primary};padding-bottom:10px;">
      <div>
        <div style="font-size:18px;font-weight:800;color:${a.primaryDark};">הערכת עובד/ת שנתית</div>
        <div style="font-size:12px;color:${a.muted};margin-top:2px;">
          ${o(n?.title??t.cycleId)}${n?` · שנת ${o(n.evaluationYear)}`:``}
        </div>
      </div>
      <div style="text-align:left;font-size:11px;color:${a.muted};">
        <div style="font-weight:700;color:${a.primaryDark};font-size:13px;">עיריית מגדל העמק</div>
        <div>פורטל עובדים · Migdal 365</div>
      </div>
    </div>`)}function h(e){let{assignment:t,meeting:i}=e,u=(e,t)=>`
    <div style="border:1px solid ${a.border};border-radius:4px;padding:6px 8px;">
      <div style="font-size:9px;color:${a.muted};">${o(e)}</div>
      <div style="font-size:11px;color:${a.text};font-weight:600;">${o(t)||`—`}</div>
    </div>`;return c(`
    ${l(`פרטי המוערך/ת`)}
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;">
      ${u(`שם`,t.employeeName)}
      ${u(`תפקיד`,t.employeeRoleSnapshot)}
      ${u(`אגף`,t.employeeDepartmentSnapshot)}
      ${u(`יחידה`,t.employeeUnitSnapshot)}
      ${u(`מנהל/ת מעריך/ה`,t.managerNameSnapshot)}
      ${u(`שלב בתהליך`,r[n(t)])}
      ${u(`הוגש ע"י העובד/ת`,s(t.employeeSubmittedDate))}
      ${u(`הוגש ע"י המנהל/ת`,s(t.managerSubmittedDate))}
      ${u(`שיחת משוב`,s(t.feedbackMeetingDate??i?.meetingDate))}
    </div>
    ${t.isExcluded?`<div style="margin-top:8px;font-size:11px;color:${a.danger};">
      הוחרג/ה מהמחזור${t.exclusionReason?` — ${o(t.exclusionReason)}`:``}</div>`:``}`)}var g={none:`תואם`,moderate:`פער קל`,significant:`פער משמעותי`};function _(e){return e.comparison.groups.length===0?c(`${l(`השוואת הערכות`)}
      <div style="font-size:11px;color:${a.muted};">לא נמצאו שאלות להשוואה בין השאלונים.</div>`):e.comparison.groups.map((e,t)=>{let n=e.rows.map(e=>{let t=(e,t,n,r)=>{let i=e===null?n?p(n):`—`:`<b>${o(t??e)}</b>${t?` <span style="color:${a.muted};">(${o(e)})</span>`:``}`;return r?`${i}<div style="margin-top:3px;color:${a.muted};font-size:10px;white-space:pre-wrap;">${o(r)}</div>`:i},n=e.gap===null?`<span style="color:${a.muted};">—</span>`:`${e.gap>0?`+`:``}${o(e.gap)}<div style="font-size:9px;color:${a.muted};">${o(g[e.severity]??``)}</div>`,r=e.employeeQuestion?.title,i=e.managerQuestion?.title;return[r&&i&&r!==i?`${p(r)}<div style="margin-top:3px;font-size:9px;color:${a.muted};">נוסח המנהל/ת: ${o(i)}</div>`:p(r??i??``),t(e.employeeRating,e.employeeRatingLabel,e.employeeText,e.employeeComment),t(e.managerRating,e.managerRatingLabel,e.managerText,e.managerComment),n]});return c(`
      ${t===0?l(`השוואת הערכות — עובד/ת מול מנהל/ת`):``}
      <h3 style="margin:0 0 6px;font-size:12px;font-weight:700;color:${a.text};">${o(e.sectionTitle)}</h3>
      ${f([`שאלה / כשירות`,`הערכה עצמית`,`הערכת המנהל/ת`,`פער`],n,[`40%`,`24%`,`24%`,`12%`])}`)}).join(``)}function v(e){let t=e.summary;if(!t)return``;let n=[[`סיכום השיחה`,t.generalFeedbackSummary??t.managerSummary],[`חוזקות ונקודות לשימור`,t.strengths],[`תחומים לשיפור`,t.improvementAreas],[`צורכי למידה והתפתחות`,t.learningNeeds],[`התייחסות העובד/ת`,t.employeeComments]].filter(e=>!!e[1]?.trim());return n.length===0?``:c(`
    ${l(`סיכום שיחת המשוב`)}
    ${n.map(([e,t])=>`
      <div style="margin-bottom:8px;">
        <div style="font-size:11px;font-weight:700;color:${a.primaryDark};margin-bottom:2px;">${o(e)}</div>
        <div style="font-size:11px;color:${a.text};white-space:pre-wrap;word-break:break-word;
          border-right:3px solid ${a.border};padding-right:8px;">${o(t)}</div>
      </div>`).join(``)}`)}function y(e){if(e.goals.length===0)return``;let t={open:`פתוח`,inProgress:`בתהליך`,achieved:`הושג`,cancelled:`בוטל`},n=e.goals.map(e=>[p(e.title),p(e.successMeasure),p(e.requiredActions),o(s(e.targetDate)),o(t[e.goalStatus]??e.goalStatus)]);return c(`
    ${l(`יעדים לשנה הבאה`)}
    ${f([`יעד`,`מדד הצלחה`,`פעולות נדרשות`,`תאריך יעד`,`סטטוס`],n,[`28%`,`24%`,`26%`,`12%`,`10%`])}`)}function b(){return c(`
    <div style="border-top:1px solid ${a.border};padding-top:6px;display:flex;justify-content:space-between;
      font-size:9px;color:${a.muted};">
      <span>הופק מפורטל העובדים · ${o(new Date().toLocaleDateString(`he-IL`))}</span>
      <span>מסמך פנימי — חסוי</span>
    </div>`)}function x(e){return`<!doctype html><html lang="he" dir="rtl"><head><meta charset="utf-8">
    <title>${o(e.assignment.employeeName)}</title></head>
    <body style="margin:0;padding:28px;background:${a.page};color:${a.text};
      font-family:'Segoe UI','Arial','Noto Sans Hebrew','David',sans-serif;direction:rtl;text-align:right;">
      ${m(e)}
      ${h(e)}
      ${_(e)}
      ${v(e)}
      ${y(e)}
      ${b()}
    </body></html>`}var S=18,C=.9;async function w(n,r){let i=document.createElement(`iframe`);i.setAttribute(`aria-hidden`,`true`),i.setAttribute(`sandbox`,`allow-same-origin`),i.style.cssText=`position:fixed;left:-10000px;top:0;border:0;width:794px;height:600px;`,document.body.appendChild(i);try{let a=i.contentDocument;if(!a)throw Error(`לא ניתן היה להכין את מסמך ההערכה להורדה.`);a.open(),a.write(n),a.close(),await new Promise(e=>setTimeout(e,60)),a.fonts?.ready&&await a.fonts.ready,i.style.height=`${Math.max(a.body.scrollHeight,600)}px`;let{default:o}=await t(async()=>{let{default:t}=await import(`./html2canvas-CLVA0Ark.js`).then(t=>e(t.default,1));return{default:t}},__vite__mapDeps([0,1])),s=[...a.querySelectorAll(`[data-pdf-block]`)],c=[];for(let e of s)c.push(await o(e,{scale:r,backgroundColor:`#FFFFFF`,logging:!1,useCORS:!1,windowWidth:794,width:e.scrollWidth,height:e.scrollHeight}));return c}finally{i.remove()}}async function T(e){let{jsPDF:n}=await t(async()=>{let{jsPDF:e}=await import(`./jspdf.es.min-C0hr2k1b.js`);return{jsPDF:e}},__vite__mapDeps([2,1,3,4,5])),r=new n({unit:`pt`,format:`a4`,orientation:`portrait`,compress:!0}),i=r.internal.pageSize.getWidth(),a=r.internal.pageSize.getHeight(),o=i-S*2,s=a-S*2,c=S,l=!0;for(let t of e){if(t.width===0||t.height===0)continue;let e=o/t.width,n=t.height*e;if(n>s){let n=Math.floor(s/e);for(let i=0;i<t.height;i+=n){let a=Math.min(n,t.height-i),s=document.createElement(`canvas`);s.width=t.width,s.height=a;let u=s.getContext(`2d`);if(!u)break;u.fillStyle=`#FFFFFF`,u.fillRect(0,0,s.width,s.height),u.drawImage(t,0,i,t.width,a,0,0,t.width,a),l||r.addPage(),r.addImage(s.toDataURL(`image/jpeg`,C),`JPEG`,S,S,o,a*e),l=!1,c=S+a*e}continue}!l&&c+n>a-S&&(r.addPage(),c=S),r.addImage(t.toDataURL(`image/jpeg`,C),`JPEG`,S,c,o,n),c+=n,l=!1}return r.output(`blob`)}async function E(e,t=2){let n=await w(x(e),t);if(n.length===0)throw Error(`לא נמצא תוכן להפקת מסמך ההערכה.`);return T(n)}async function D(e,t){let n=await E(e),r=URL.createObjectURL(n),a=document.createElement(`a`);a.href=r,a.download=`${i(t)}.pdf`,a.click(),URL.revokeObjectURL(r)}export{D as downloadEvaluationPdf};
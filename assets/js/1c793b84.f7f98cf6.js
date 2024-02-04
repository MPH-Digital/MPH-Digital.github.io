"use strict";(self.webpackChunkmph_digital_github_io=self.webpackChunkmph_digital_github_io||[]).push([[952],{4508:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var r=n(7624),c=n(2172),i=n(6332);const t={sidebar_position:1,id:"bubble-process"},o="Bubble General Development Process",a={id:"technical-docs/process/bubble-process",title:"Bubble General Development Process",description:"1. All development is done on Main development branch",source:"@site/docs/technical-docs/process/bubble-process.mdx",sourceDirName:"technical-docs/process",slug:"/technical-docs/process/bubble-process",permalink:"/technical-docs/process/bubble-process",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"bubble-process"},sidebar:"techDocsSidebar",previous:{title:"Environments",permalink:"/technical-docs/environments"},next:{title:"Plugin Development Process",permalink:"/technical-docs/process/plugin-process"}},l={},d=[];function h(e){const s={a:"a",em:"em",h1:"h1",li:"li",ol:"ol",strong:"strong",...(0,c.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"bubble-general-development-process",children:"Bubble General Development Process"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"All development is done on Main development branch"}),"\n",(0,r.jsxs)(s.li,{children:["Once dev is ready for testing, a request is entered into the Slack channel ",(0,r.jsx)(s.a,{href:"https://trackkingworkspace.slack.com/archives/C05JA4EF0F6",children:(0,r.jsx)(s.strong,{children:"#staging-requests"})})]}),"\n",(0,r.jsxs)(s.li,{children:["Once staging request is approved, ",(0,r.jsx)(s.em,{children:"Dev Lead"})," creates a Save Point in bubble and adds it to the ",(0,r.jsx)(s.a,{href:"https://www.notion.so/1e913710276147f09aceb4a8267fe5ee?pvs=21",children:(0,r.jsx)(s.strong,{children:"Save Points table"})})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:"Dev Lead"})," pushes changes to a staging branch for ",(0,r.jsx)(s.em,{children:"Business"})," review"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:"Dev Lead"})," confirms push in ",(0,r.jsx)(s.a,{href:"https://trackkingworkspace.slack.com/archives/C05JA4EF0F6",children:(0,r.jsx)(s.strong,{children:"#staging-requests"})})," Slack channel"]}),"\n",(0,r.jsxs)(s.li,{children:["Related tasks are moved from ",(0,r.jsx)(i.c,{children:"Development"})," to ",(0,r.jsx)(i.c,{children:"Staging/Testing"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:"Team"})," tests and runs full QA cycle on staging branch"]}),"\n",(0,r.jsxs)(s.li,{children:["Once ",(0,r.jsx)(s.em,{children:"Team"})," confirms successful QA testing, related tasks are moved from ",(0,r.jsx)(i.c,{children:"Staging/Testing"})," to In ",(0,r.jsx)(i.c,{children:"Review/Approval"})]}),"\n",(0,r.jsxs)(s.li,{children:["Tasks are added to Slack channel ",(0,r.jsx)(s.a,{href:"https://trackkingworkspace.slack.com/archives/C053FBSB8HG",children:(0,r.jsx)(s.strong,{children:"#task-approval-signoff"})})," for ",(0,r.jsx)(s.em,{children:"Business"})," to be notified they are ready for review"]}),"\n",(0,r.jsxs)(s.li,{children:["Unapproved tasks are updated with feedback notes and moved from ",(0,r.jsx)(i.c,{children:"Review/Approval"})," to ",(0,r.jsx)(i.c,{children:"Development"})]}),"\n",(0,r.jsxs)(s.li,{children:["Approved tasks are updated with any feedback and ",(0,r.jsx)(i.c,{children:"Business Approval checkbox"})," is checked in task properties"]}),"\n",(0,r.jsxs)(s.li,{children:["If there are tasks checked as ",(0,r.jsx)(i.c,{children:"Business Approved"}),", ",(0,r.jsx)(s.em,{children:"Dev Lead"})," creates a Save Point in bubble and adds it to the ",(0,r.jsx)(s.a,{href:"https://www.notion.so/1e913710276147f09aceb4a8267fe5ee?pvs=21",children:(0,r.jsx)(s.strong,{children:"Save Points table"})})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:"Dev Lead"})," pushes changes to the ",(0,r.jsx)(s.a,{href:"https://vip.trackking.app/",children:(0,r.jsx)(s.strong,{children:"Production environment"})})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:"Dev Lead"})," pushes changes to Sub Apps"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:"Dev Lead"})," confirms push in ",(0,r.jsx)(s.a,{href:"https://trackkingworkspace.slack.com/archives/C05M52E81ST",children:(0,r.jsx)(s.strong,{children:"#production-pushes"})})," Slack channel"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:"Team"})," runs full QA cycle on ",(0,r.jsx)(s.a,{href:"https://vip.trackking.app/",children:(0,r.jsx)(s.strong,{children:"Production"})})]}),"\n",(0,r.jsxs)(s.li,{children:["If there are any defects or major issues are found during the Production QA testing, Production environment is reverted back to last Save Point and related tasks are updated with appropriate feedback, ",(0,r.jsx)(i.c,{children:"Business Approval checkbox"})," is unchecked, and moved from ",(0,r.jsx)(i.c,{children:"Review/Approval"})," to ",(0,r.jsx)(i.c,{children:"Development"})]}),"\n",(0,r.jsxs)(s.li,{children:["If team approves full QA cycle, related tasks are moved from ",(0,r.jsx)(i.c,{children:"Review/Approval"})," to ",(0,r.jsx)(i.c,{children:"Done/Production"})]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,c.M)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},6332:(e,s,n)=>{n.d(s,{c:()=>i});n(1504);var r=n(6528),c=n(7624);function i(e){let{children:s}=e;const{colorMode:n,setColorMode:i}=(0,r.U)(),t="dark"===n?"#555":"#ddd",o="dark"===n?"#eee":"#444";return(0,c.jsx)("span",{style:{backgroundColor:t,borderRadius:"4px",color:o,padding:"2px 5px",fontWeight:"bold"},children:s})}},2172:(e,s,n)=>{n.d(s,{I:()=>o,M:()=>t});var r=n(1504);const c={},i=r.createContext(c);function t(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);
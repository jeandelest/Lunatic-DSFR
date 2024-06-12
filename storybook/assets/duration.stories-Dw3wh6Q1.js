import{O as m}from"./Orchestrator-DGO3vES6.js";import"./___vite-browser-external_commonjs-proxy-CbhpTJ3e.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./i18n-Dz2osCXP.js";import"./inheritsLoose-au4_wMgD.js";const T={cleaning:{},components:[{id:"kxi788",componentType:"Duration",mandatory:!1,format:"PnYnM",page:"1",label:{value:'"➡ 1. " || "Duration (format: PnYnM) "',type:"VTL|MD"},description:{value:'"Description"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"DUREE"}}],variables:[{variableType:"COLLECTED",name:"DUREE",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}}],pagination:"question",resizing:{},label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",missing:!1,id:"lsvuvtbg",maxPage:"1"},d={cleaning:{},components:[{id:"kxi788",componentType:"Duration",mandatory:!1,format:"PTnHnM",page:"1",label:{value:'"➡ 1. " || "Duration (format: PTnHnM) "',type:"VTL|MD"},description:{value:'"Description"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"DUREE"}}],variables:[{variableType:"COLLECTED",name:"DUREE",values:{PREVIOUS:null,COLLECTED:"PT12H50M",FORCED:null,EDITED:null,INPUTTED:null}}],pagination:"question",resizing:{},label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",missing:!1,id:"lsvuvtbg",maxPage:"1"},D={cleaning:{},maxPage:"1",variables:[],components:[{componentType:"Question",id:"idQuestion",page:"1",label:{type:"VTL|MD",value:'"Label de la Question"'},description:{type:"VTL|MD",value:'"Description de la question"'},declarations:[{declarationType:"HELP",id:"idQuestion-help1",label:{type:"VTL|MD",value:'"Label de la déclaration en position : `BEFORE_QUESTION_TEXT`"'},position:"BEFORE_QUESTION_TEXT"},{declarationType:"HELP",id:"idQuestion-help3",label:{type:"VTL|MD",value:'"Label de la déclaration en position  en position : `AFTER_QUESTION_TEXT`"'},position:"AFTER_QUESTION_TEXT"}],components:[{id:"kxi788",componentType:"Duration",mandatory:!1,format:"PnYnM",page:"1",label:{value:'"Label du composant Duration"',type:"VTL|MD"},description:{value:'"Description du composant Duration"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"DUREE"}}]}],pagination:"question",resizing:{},label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",missing:!1,id:"lsvuvtbg"},M={title:"Components/Duration",component:m,parameters:{docs:{description:{component:"This component should be used when you want the user to enter a duration. We support duration in Year and month or Hours and minutes"}}}},e={args:{source:T}},o={args:{source:d}},n={args:{source:D}};var a,t,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    source: dateSource
  }
} satisfies Story`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};var s,i,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    source: timeSource
  }
} satisfies Story`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var u,p,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    source: questionSource
  }
} satisfies Story`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const S=["DateStory","TimeStory","Question"];export{e as DateStory,n as Question,o as TimeStory,S as __namedExportsOrder,M as default};
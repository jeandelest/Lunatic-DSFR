import{O as o}from"./Orchestrator-BulEV6K8.js";import"./jsx-runtime-2xDJh5tt.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./index-BtM5VmRH.js";import"./i18n-Cg-UD1N1.js";import"./inheritsLoose-Cay3MKMD.js";const n={cleaning:{},components:[{id:"j4nw5cqz",page:"1",componentType:"Dropdown",mandatory:!1,label:{value:'"In which state do The Simpsons reside?"',type:"VTL|MD"},description:{value:'"The state is within the USA"',type:"VTL|MD"},response:{name:"STATE"},controls:[{id:"j4nw5cqz",typeOfControl:"CONSISTENCY",criticality:"WARN",control:{value:'not(nvl(STATE,"") = "")',type:"VTL"},errorMessage:{value:'"Please choose a state!"',type:"VTL|MD"},bindingDependencies:["STATE"]}],options:[{value:"1",label:{value:'"Washington"',type:"VTL"}},{value:"2",label:{value:'"Kentucky"',type:"VTL"}},{value:"3",label:{value:'"Ohio"',type:"VTL"}},{value:"4",label:{value:'"Maine"',type:"VTL"}},{value:"5",label:{value:'"North Dakota"',type:"VTL"}},{value:"6",label:{value:'"Florida"',type:"VTL"}},{value:"7",label:{value:'"North Takoma"',type:"VTL"}},{value:"8",label:{value:'"California"',type:"VTL"}},{value:"9",label:{value:'"Texas"',type:"VTL"}},{value:"10",label:{value:'"Massachusetts"',type:"VTL"}},{value:"11",label:{value:'"Nevada"',type:"VTL"}},{value:"12",label:{value:'"Illinois"',type:"VTL"}},{value:"13",label:{value:'"Not in any state, you fool!"',type:"VTL"}}]}],variables:[{variableType:"COLLECTED",name:"STATE",values:{PREVIOUS:null,COLLECTED:"1",FORCED:null,EDITED:null,INPUTED:null}}],pagination:"question",resizing:{},label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",missing:!1,id:"lsvuvtbg",maxPage:"1"},m={title:"Components/Dropdown",component:o,parameters:{docs:{description:{story:"This component should be used when you want the user to select an option in a list of more than 3 options."}}}},e={args:{source:n}};var a,l,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    source: source
  }
}`,...(t=(l=e.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};const y=["Default"];export{e as Default,y as __namedExportsOrder,m as default};
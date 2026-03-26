import"./ActionForm-DRM2RLbl.js";import"./iframe-BqycbGKP.js";import"./index-BtahwR3x.js";import{P as u}from"./PdfViewerToolbar-e09vVh2q.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DZKsod9G.js";import"./constants-jcylpP1k.js";import"./minus-BUKhjUen.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,S={title:"Components/PdfViewer/Building Blocks/Toolbar",component:u,args:{currentPage:1,numPages:14,scale:1,sidebarOpen:!1,enableDownload:!1,onPageChange:e(),onScaleChange:e(),onSearchOpen:e(),onSidebarToggle:e(),onDownload:e(),onRotateLeft:e(),onRotateRight:e()},argTypes:{currentPage:{description:"Current page number (1-indexed)",control:{type:"number",min:1}},numPages:{description:"Total number of pages in the document",control:{type:"number",min:1}},scale:{description:"Current zoom scale",control:{type:"number",min:.25,max:5,step:.25}},sidebarOpen:{description:"Whether the sidebar toggle is in the open state",control:"boolean"},enableDownload:{description:"Whether the download button is visible",control:"boolean"}}},o={},r={args:{enableDownload:!0}},n={args:{currentPage:7,numPages:14,scale:1.5,sidebarOpen:!0}};var a,t,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(s=(t=o.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var c,i,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    enableDownload: true
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,p,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    currentPage: 7,
    numPages: 14,
    scale: 1.5,
    sidebarOpen: true
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const T=["Default","WithDownload","MidDocument"];export{o as Default,n as MidDocument,r as WithDownload,T as __namedExportsOrder,S as default};

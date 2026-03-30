import{R as r,O as M,j as m,M as D}from"./iframe-BTOHwx6L.js";import"./ActionForm-BHRVklnA.js";import"./index-_OMlzbwr.js";import{P as u}from"./PdfRenderer-QnZuu4Tm.js";import{a as j,E as w}from"./Employee-C27Uj4FP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dex-jsjV.js";import"./PdfViewer-DQ6Ux59D.js";import"./PdfViewerAnnotationLayer-BXG27plW.js";import"./PdfViewerOutlineSidebar-Besthrpq.js";import"./PdfViewerSidebarHeader-BKAypPpK.js";import"./CompositeItem-Cs7DETWA.js";import"./PdfViewerSearchBar-CuezXrsM.js";import"./chevron-down-CahOuiAC.js";import"./PdfViewerSidebar-DtO6RdLa.js";import"./index-DFul6YL9.js";import"./constants-rggtfkKZ.js";import"./PdfViewerToolbar-C-3s62Zt.js";import"./minus-BdxrYAiq.js";import"./PdfViewer.module.css-wDwYMsB8.js";import"./error-CvJwZ3-F.js";function v(...t){const{observableClient:c}=r.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,y=o==null?void 0:o.$select,a=o==null?void 0:o.$loadPropertySecurityMetadata,f=n?"offline":void 0,i=n?t[0].$objectType:t[0],b=n?t[0].$primaryKey:t[1],P=typeof i=="string"?i:i.apiName,l=r.useMemo(()=>y,[JSON.stringify(y)]),{subscribe:S,getSnapShot:k}=r.useMemo(()=>p?j(s=>c.observeObject(i,b,{mode:f,...l?{select:l}:{},...a?{$loadPropertySecurityMetadata:a}:{}},s)):j(()=>({unsubscribe:()=>{}})),[p,c,i,P,b,f,l,a]),e=r.useSyncExternalStore(S,k),O=r.useCallback(()=>{throw new Error("not implemented")},[]);return r.useMemo(()=>{let s;return e&&"error"in e&&e.error?s=e.error:(e==null?void 0:e.status)==="error"&&(s=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:s,forceUpdate:O}},[e,p,O])}const H={title:"Components/PdfViewer",component:u,render:t=>m.jsx("div",{style:{height:"600px"},children:m.jsx(u,{...t})})},d={render:()=>{const{object:t,isLoading:c}=v(w,D);return c||!(t!=null&&t.employeeDocuments)?m.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):m.jsx("div",{style:{height:"600px"},children:m.jsx(u,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var x,E,h;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(h=(E=d.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};const Q=["WithOsdkMedia"];export{d as WithOsdkMedia,Q as __namedExportsOrder,H as default};

import{R as c,O as Le,i as De,r as d,j as O,h as Ie,M as ze}from"./iframe-C2Phw60Z.js";import{c as Te}from"./ActionForm-BuXpqmDH.js";import{r as Fe}from"./index-CnY_gqeo.js";import{P as We}from"./PdfViewerAnnotationLayer-DJCN8iDE.js";import{P as Ue}from"./PdfViewerOutlineSidebar-Cp67zHZa.js";import{P as Be}from"./PdfViewerSearchBar-BZqD1pdw.js";import{P as Ke}from"./PdfViewerSidebar-V5Yw3gAQ.js";import{P as He}from"./PdfViewerToolbar-B_KB4SSi.js";import{O as $e,b as Ye,c as V,F as Y,U as q,d as G,S as Q,M as qe,e as Ge,E as Qe,a as Xe}from"./constants-jcylpP1k.js";import{u as Je,s as P,S as _e}from"./PdfViewer.module.css-Co317Hc9.js";import{E as Ae}from"./error-DCYuXSfc.js";import{a as X,E as Ze}from"./Employee-C27Uj4FP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-eeqr7CDX.js";import"./PdfViewerSidebarHeader-BG9kp38y.js";import"./CompositeItem-CgKWWgoL.js";import"./chevron-down-DpkSvvvU.js";import"./index-DTUnl0DM.js";import"./minus-BaM4bvsp.js";function et(...e){const{observableClient:a}=c.useContext(Le),i="$objectType"in e[0],o=!i&&e[2]!=null&&typeof e[2]=="object"?e[2]:void 0,m=i?typeof e[1]=="boolean"?e[1]:!0:o?o.enabled??!0:typeof e[2]=="boolean"?e[2]:!0,p=o==null?void 0:o.$select,n=o==null?void 0:o.$loadPropertySecurityMetadata,h=i?"offline":void 0,f=i?e[0].$objectType:e[0],y=i?e[0].$primaryKey:e[1],S=typeof f=="string"?f:f.apiName,t=c.useMemo(()=>p,[JSON.stringify(p)]),{subscribe:r,getSnapShot:l}=c.useMemo(()=>m?X(E=>a.observeObject(f,y,{mode:h,...t?{select:t}:{},...n?{$loadPropertySecurityMetadata:n}:{}},E)):X(()=>({unsubscribe:()=>{}})),[m,a,f,S,y,h,t,n]),s=c.useSyncExternalStore(r,l),w=c.useCallback(()=>{throw new Error("not implemented")},[]);return c.useMemo(()=>{let E;return s&&"error"in s&&s.error?E=s.error:(s==null?void 0:s.status)==="error"&&(E=new Error("Failed to load object")),{object:s==null?void 0:s.object,isLoading:m?(s==null?void 0:s.status)==="loading"||(s==null?void 0:s.status)==="init"||!s:!1,isOptimistic:!!(s!=null&&s.isOptimistic),error:E,forceUpdate:w}},[s,m,w])}const tt=2147483647,J=100,nt=400,rt=5;function at(){return De()?rt:Math.floor(Math.random()*(nt-J)+J)}async function ot(e){let a;switch(e){case"infinite":{a=tt;break}case"real":{a=at();break}default:throw new Error(`Failed to delay a response: unknown delay mode "${e}". Please make sure you provide one of the supported modes ("real", "infinite") or a number.`)}return new Promise(i=>setTimeout(i,a))}const v=[];function st(e){const[a,i]=d.useState(v);return d.useEffect(function(){if(e==null){i(v);return}let o=!1;return(async()=>{try{const m=await e.getOutline();if(o)return;if(m!=null&&m.length>0){const n=await it(e,m);o||i(n);return}const p=await ct(e);o||i(p.length>0?p:v)}catch{o||i(v)}})(),()=>{o=!0}},[e]),a}async function it(e,a){const i=[],o=async(m,p)=>{for(const n of m){let h=1;try{if(typeof n.dest=="string"){const f=await e.getDestination(n.dest);f!=null&&(h=await e.getPageIndex(f[0])+1)}else Array.isArray(n.dest)&&n.dest.length>0&&(h=await e.getPageIndex(n.dest[0])+1)}catch{}i.push({title:n.title,depth:p,pageNumber:h,bold:n.bold,italic:n.italic}),n.items.length>0&&await o(n.items,p+1)}};return await o(a,0),i}function Z(e){return"str"in e&&"transform"in e}function K(e){return Math.round(e*10)/10}function ee(e){if(e.height>0)return e.height;const a=e.transform;return Array.isArray(a)&&a.length>=4?Math.sqrt(a[2]*a[2]+a[3]*a[3]):0}async function ct(e){const a=e.numPages,i=await Promise.all(Array.from({length:a},(r,l)=>e.getPage(l+1).then(s=>s.getTextContent()))),o=new Map;for(const r of i)for(const l of r.items){const s=l;if(!Z(s)||s.str.trim().length===0)continue;const w=ee(s);if(w>0){const E=K(w);o.set(E,(o.get(E)??0)+1)}}let m=0,p=0;for(const[r,l]of o)l>p&&(p=l,m=r);if(m===0)return[];const n=m*Ye,h=new Set;for(const[r]of o)r>=n&&h.add(r);if(h.size===0)return[];const f=[...h].sort((r,l)=>l-r),y=new Map;for(let r=0;r<f.length;r++)y.set(f[r],r);const S=[];for(let r=0;r<i.length;r++){const l=i[r],s=r+1;let w=[],E=s,N="",g=0,x=!1;const M=()=>{if(w.length===0)return;let u=0,b=0;for(const k of w){const C=k.text.trim().length;b+=C,y.has(K(k.fontSize))&&(u+=C)}if(b>0&&u/b>.5){const k=w.map(C=>C.text).join("").trim();k.length>0&&S.push({text:k,fontSize:g,pageNumber:E,fontName:N,contiguous:x}),x=!0}else x=!1;w=[],g=0};for(const u of l.items){const b=u;if(!Z(b))continue;const k=ee(b),C=K(k);y.has(C)&&g===0&&(g=C,E=s,N=b.fontName),g>0&&w.push({text:b.str,fontSize:k}),b.hasEOL&&M()}M()}const t=[];for(const r of S){const l=t[t.length-1];l!=null&&r.contiguous&&Math.abs(l.fontSize-r.fontSize)<.1?l.text+=" "+r.text:t.push({...r})}return t.filter(r=>r.text.trim().length<=$e).map(r=>({title:r.text.trim(),depth:y.get(r.fontSize)??0,pageNumber:r.pageNumber,bold:!1,italic:!1}))}function dt(e,a,i){const[o,m]=d.useState(V),[p,n]=d.useState(0),[h,f]=d.useState(0),[y,S]=d.useState(!1),t=d.useCallback((g,x)=>{var M;(M=e.current)==null||M.dispatch(Y,{source:void 0,type:"",query:g,caseSensitive:!1,highlightAll:!0,phraseSearch:!0,findPrevious:x})},[e]),r=d.useCallback(g=>{var x;(x=e.current)==null||x.dispatch(Y,{source:void 0,type:"again",query:o,caseSensitive:!1,highlightAll:!0,phraseSearch:!0,findPrevious:g})},[e,o]),l=d.useCallback(g=>{if(m(g),g===V){n(0),f(0),t(V,!1);return}t(g,!1)},[t]),s=d.useCallback(()=>{r(!1)},[r]),w=d.useCallback(()=>{r(!0)},[r]),E=d.useCallback(()=>{S(!0)},[]),N=d.useCallback(()=>{S(!1),m(V),n(0),f(0),t(V,!1)},[t]);return d.useEffect(function(){const g=e.current;if(g==null)return;const x=u=>{n(u.matchesCount.total),f(u.matchesCount.current>0?u.matchesCount.current-1:0)},M=u=>{n(u.matchesCount.total),f(u.matchesCount.current>0?u.matchesCount.current-1:0)};return g.on(q,x),g.on(G,M),()=>{g.off(q,x),g.off(G,M)}},[e,a,i]),{query:o,totalMatches:p,currentMatchIndex:h,isSearchOpen:y,setQuery:l,nextMatch:s,prevMatch:w,openSearch:E,closeSearch:N}}function lt({src:e,initialPage:a,initialScale:i,initialSidebarOpen:o=!1,sidebarMode:m="thumbnails",onDownload:p}){const n=Je({src:e,initialPage:a,initialScale:i}),[h,f]=d.useState(0),[y,S]=d.useState(o),[t,r]=d.useState(m),l=dt(n.eventBusRef,n.findControllerRef,n.document),s=st(n.document);d.useEffect(function(){r(m)},[m]),d.useEffect(function(){const u=n.pdfViewerRef.current;u!=null&&(u.pagesRotation=h)},[n.pdfViewerRef,h]),d.useEffect(function(){const u=b=>{(b.ctrlKey||b.metaKey)&&b.key==="f"&&(b.preventDefault(),l.openSearch())};return window.addEventListener("keydown",u),()=>{window.removeEventListener("keydown",u)}},[l.openSearch]);const w=d.useCallback(()=>{n.setScale(Math.min(n.scale+Q,qe))},[n.scale,n.setScale]),E=d.useCallback(()=>{n.setScale(Math.max(n.scale-Q,Ge))},[n.scale,n.setScale]),N=d.useCallback(()=>{f(u=>(u-90+360)%360)},[]),g=d.useCallback(()=>{f(u=>(u+90)%360)},[]),x=d.useCallback(()=>{S(u=>!u)},[]),M=d.useCallback(u=>{n.document!=null&&n.document.getData().then(b=>{const k=new Blob([b.buffer],{type:"application/pdf"}),C=URL.createObjectURL(k),U=mt(e,u),B=globalThis.document.createElement("a");B.href=C,B.download=U,B.click(),URL.revokeObjectURL(C),p==null||p({success:!0,filename:U})}).catch(b=>{p==null||p({success:!1,error:b instanceof Error?b:new Error("Failed to download PDF")})})},[n.document,e,p]);return{...n,zoomIn:w,zoomOut:E,rotation:h,rotateLeft:N,rotateRight:g,sidebarOpen:y,sidebarMode:t,setSidebarMode:r,toggleSidebar:x,search:l,outlineItems:s,download:M}}function mt(e,a){var i;return a??(typeof e=="string"&&((i=e.split("/").pop())==null?void 0:i.split("?")[0])||"document.pdf")}function W({src:e,annotations:a=Qe,onAnnotationClick:i,onDownload:o,initialPage:m=1,initialScale:p=1,initialSidebarOpen:n=!1,enableDownload:h=!1,sidebarMode:f="thumbnails",outlineIcons:y,className:S}){const t=lt({src:e,initialPage:m,initialScale:p,initialSidebarOpen:n,sidebarMode:f,onDownload:o}),r=Te(P.pdfViewer,S);return t.loading?c.createElement("div",{className:r},c.createElement("div",{className:P.loadingContainer},c.createElement(_e,{className:P.spinnerIcon}),"Loading…")):t.error!=null?c.createElement("div",{className:r},c.createElement("div",{className:P.errorContainer},c.createElement(Ae,{className:P.errorIcon}),"Failed to load PDF: ",t.error.message)):t.document==null?c.createElement("div",{className:r},c.createElement("div",{className:P.loadingContainer},"No document")):c.createElement("div",{className:r},c.createElement(He,{currentPage:t.currentPage,numPages:t.numPages,scale:t.scale,sidebarOpen:t.sidebarOpen,onPageChange:t.scrollToPage,onScaleChange:t.setScale,onSearchOpen:t.search.openSearch,onSidebarToggle:t.toggleSidebar,onDownload:t.download,enableDownload:h,onRotateLeft:t.rotateLeft,onRotateRight:t.rotateRight}),t.search.isSearchOpen&&c.createElement(Be,{query:t.search.query,totalMatches:t.search.totalMatches,currentMatchIndex:t.search.currentMatchIndex,onQueryChange:t.search.setQuery,onNext:t.search.nextMatch,onPrev:t.search.prevMatch,onClose:t.search.closeSearch}),c.createElement("div",{className:P.contentArea},t.sidebarOpen&&t.sidebarMode==="thumbnails"&&c.createElement(Ke,{document:t.document,numPages:t.numPages,currentPage:t.currentPage,onPageClick:t.scrollToPage,sidebarMode:t.sidebarMode,onSidebarModeChange:t.setSidebarMode}),t.sidebarOpen&&t.sidebarMode==="outline"&&c.createElement(Ue,{outlineItems:t.outlineItems,currentPage:t.currentPage,onItemClick:t.scrollToPage,sidebarMode:t.sidebarMode,onSidebarModeChange:t.setSidebarMode,outlineIcons:y}),c.createElement("div",{className:P.scrollContainerWrapper},c.createElement("div",{ref:t.containerRef,className:P.scrollContainer},c.createElement("div",{ref:t.viewerRef,className:"pdfViewer"}),t.portalTargets.map(l=>{const s=a[l.pageNumber]??Xe;return s.length===0?null:Fe.createPortal(c.createElement(We,{key:l.pageNumber,annotations:s,pageHeight:l.pageHeight,scale:l.scale,onAnnotationClick:i}),l.container)})))))}function H(){return H=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var o in i)({}).hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},H.apply(null,arguments)}async function ut(e){return(await e.fetchContents()).arrayBuffer()}function $({media:e,className:a,...i}){const[o,m]=d.useState(void 0),[p,n]=d.useState(!0),[h,f]=d.useState(void 0);d.useEffect(function(){let S=!1;return n(!0),f(void 0),m(void 0),ut(e).then(t=>{S||(m(t),n(!1))}).catch(t=>{S||(f(t instanceof Error?t:new Error(String(t))),n(!1))}),()=>{S=!0}},[e]);const y=Te(P.pdfViewer,a);return p?c.createElement("div",{className:y},c.createElement("div",{className:P.loadingContainer},c.createElement(_e,{className:P.spinnerIcon}),"Loading…")):h!=null?c.createElement("div",{className:y},c.createElement("div",{className:P.errorContainer},c.createElement(Ae,{className:P.errorIcon}),"Failed to load PDF: ",h.message)):o==null?c.createElement("div",{className:y},c.createElement("div",{className:P.loadingContainer},"No document")):c.createElement(W,H({src:o,className:a},i))}const{fn:pt}=__STORYBOOK_MODULE_TEST__,je="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",ft="https://raw.githubusercontent.com/mozilla/pdf.js/master/test/pdfs/nested_outline.pdf";function Re(e,a){return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:a,sizeBytes:1024e3,mediaType:"application/pdf"}),getMediaReference:()=>({mimeType:"application/pdf",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-pdf",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const ht=Re(je,"compressed.tracemonkey-pldi-09.pdf"),gt=Re(ft,"pdf-example-bookmarks.pdf"),Rt={title:"Components/PdfViewer",component:$,args:{media:ht},render:e=>O.jsx("div",{style:{height:"600px"},children:O.jsx($,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The Media object to fetch PDF contents from",control:!1},annotations:{description:"Annotations to overlay on the PDF, keyed by page number (1-indexed)",control:"object"},onAnnotationClick:{description:"Callback fired when an annotation is clicked",control:!1,table:{category:"Events"}},initialPage:{description:"Page to display on first render (1-indexed)",control:"number",table:{defaultValue:{summary:"1"}}},initialScale:{description:"Initial zoom scale",control:"number",table:{defaultValue:{summary:"1.0"}}},initialSidebarOpen:{description:"Whether the thumbnail sidebar is initially open",control:"boolean",table:{defaultValue:{summary:"false"}}},enableDownload:{description:"Whether the download button is shown in the toolbar",control:"boolean",table:{defaultValue:{summary:"false"}}},sidebarMode:{description:"Which sidebar panel to show when the sidebar is open",control:"radio",options:["thumbnails","outline"],table:{defaultValue:{summary:'"thumbnails"'}}},outlineIcons:{description:"Custom icon components for each outline depth level (0-indexed)",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},I={render:()=>{const{object:e,isLoading:a}=et(Ze,ze);return a||!(e!=null&&e.employeeDocuments)?O.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):O.jsx("div",{style:{height:"600px"},children:O.jsx($,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}},T={args:{src:je},render:e=>O.jsx("div",{style:{height:"600px"},children:O.jsx(W,{...e})}),parameters:{docs:{source:{code:`import { BasePdfViewer } from "@osdk/react-components/experimental";

<BasePdfViewer src="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf" />`}}}},_={args:{onAnnotationClick:pt(),annotations:{1:[{id:"h1",type:"highlight",page:1,rect:{x:100,y:700,width:200,height:20},label:"Important text"},{id:"u1",type:"underline",page:1,rect:{x:100,y:650,width:150,height:2}},{id:"c1",type:"comment",page:1,rect:{x:400,y:600,width:24,height:24},label:"Review this section"},{id:"p1",type:"pin",page:1,rect:{x:300,y:500,width:16,height:16},label:"Pin marker"}]}},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer
  media={myMediaObject}
  annotations={{
    1: [
      { id: "h1", type: "highlight", page: 1, rect: { x: 100, y: 700, width: 200, height: 20 }, label: "Important text" },
      { id: "u1", type: "underline", page: 1, rect: { x: 100, y: 650, width: 150, height: 2 } },
      { id: "c1", type: "comment", page: 1, rect: { x: 400, y: 600, width: 24, height: 24 }, label: "Review this" },
      { id: "p1", type: "pin", page: 1, rect: { x: 300, y: 500, width: 16, height: 16 }, label: "Pin" },
    ],
  }}
  onAnnotationClick={(annotation) => handleAnnotationClick(annotation)}
/>`}}}},A={args:{initialSidebarOpen:!0},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer media={myMediaObject} initialSidebarOpen />`}}}},j={args:{initialScale:1.5},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer media={myMediaObject} initialScale={1.5} />`}}}},R={args:{enableDownload:!0},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer media={myMediaObject} enableDownload />`}}}},L={args:{initialSidebarOpen:!0,sidebarMode:"outline"},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer media={myMediaObject} initialSidebarOpen sidebarMode="outline" />`}}}},D={args:{src:"/loading.pdf"},render:e=>O.jsx("div",{style:{height:"600px"},children:O.jsx(W,{...e})}),parameters:{msw:{handlers:[Ie.get("/loading.pdf",async()=>{await ot("infinite")})]}}},z={args:{src:"/error.pdf"},render:e=>O.jsx("div",{style:{height:"600px"},children:O.jsx(W,{...e})}),parameters:{msw:{handlers:[Ie.get("/error.pdf",()=>new Response("Server Error",{status:500}))]}}},F={args:{media:gt,initialSidebarOpen:!0,sidebarMode:"outline"}};var te,ne,re;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ae,oe,se;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    src: SAMPLE_PDF_URL
  },
  render: (args: PdfViewerProps) => <div style={{
    height: "600px"
  }}>
      <BasePdfViewer {...args} />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`import { BasePdfViewer } from "@osdk/react-components/experimental";

<BasePdfViewer src="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf" />\`
      }
    }
  }
}`,...(se=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,ce,de;_.parameters={..._.parameters,docs:{...(ie=_.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    onAnnotationClick: fn(),
    annotations: {
      1: [{
        id: "h1",
        type: "highlight",
        page: 1,
        rect: {
          x: 100,
          y: 700,
          width: 200,
          height: 20
        },
        label: "Important text"
      }, {
        id: "u1",
        type: "underline",
        page: 1,
        rect: {
          x: 100,
          y: 650,
          width: 150,
          height: 2
        }
      }, {
        id: "c1",
        type: "comment",
        page: 1,
        rect: {
          x: 400,
          y: 600,
          width: 24,
          height: 24
        },
        label: "Review this section"
      }, {
        id: "p1",
        type: "pin",
        page: 1,
        rect: {
          x: 300,
          y: 500,
          width: 16,
          height: 16
        },
        label: "Pin marker"
      }]
    }
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer
  media={myMediaObject}
  annotations={{
    1: [
      { id: "h1", type: "highlight", page: 1, rect: { x: 100, y: 700, width: 200, height: 20 }, label: "Important text" },
      { id: "u1", type: "underline", page: 1, rect: { x: 100, y: 650, width: 150, height: 2 } },
      { id: "c1", type: "comment", page: 1, rect: { x: 400, y: 600, width: 24, height: 24 }, label: "Review this" },
      { id: "p1", type: "pin", page: 1, rect: { x: 300, y: 500, width: 16, height: 16 }, label: "Pin" },
    ],
  }}
  onAnnotationClick={(annotation) => handleAnnotationClick(annotation)}
/>\`
      }
    }
  }
}`,...(de=(ce=_.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var le,me,ue;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    initialSidebarOpen: true
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer media={myMediaObject} initialSidebarOpen />\`
      }
    }
  }
}`,...(ue=(me=A.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var pe,fe,he;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    initialScale: 1.5
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer media={myMediaObject} initialScale={1.5} />\`
      }
    }
  }
}`,...(he=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ge,be,ye;R.parameters={...R.parameters,docs:{...(ge=R.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    enableDownload: true
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer media={myMediaObject} enableDownload />\`
      }
    }
  }
}`,...(ye=(be=R.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var Se,we,Ee;L.parameters={...L.parameters,docs:{...(Se=L.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    initialSidebarOpen: true,
    sidebarMode: "outline"
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer media={myMediaObject} initialSidebarOpen sidebarMode="outline" />\`
      }
    }
  }
}`,...(Ee=(we=L.parameters)==null?void 0:we.docs)==null?void 0:Ee.source}}};var Pe,xe,Oe;D.parameters={...D.parameters,docs:{...(Pe=D.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    src: "/loading.pdf"
  },
  render: (args: PdfViewerProps) => <div style={{
    height: "600px"
  }}>
      <BasePdfViewer {...args} />
    </div>,
  parameters: {
    msw: {
      handlers: [http.get("/loading.pdf", async () => {
        await delay("infinite");
      })]
    }
  }
}`,...(Oe=(xe=D.parameters)==null?void 0:xe.docs)==null?void 0:Oe.source}}};var Me,ke,Ce;z.parameters={...z.parameters,docs:{...(Me=z.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    src: "/error.pdf"
  },
  render: (args: PdfViewerProps) => <div style={{
    height: "600px"
  }}>
      <BasePdfViewer {...args} />
    </div>,
  parameters: {
    msw: {
      handlers: [http.get("/error.pdf", () => {
        return new Response("Server Error", {
          status: 500
        });
      })]
    }
  }
}`,...(Ce=(ke=z.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var Ne,Ve,ve;F.parameters={...F.parameters,docs:{...(Ne=F.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    media: mockBookmarkedMedia,
    initialSidebarOpen: true,
    sidebarMode: "outline"
  }
}`,...(ve=(Ve=F.parameters)==null?void 0:Ve.docs)==null?void 0:ve.source}}};const Lt=["WithOsdkMedia","WithPdfUrl","WithAnnotations","WithSidebar","CustomScale","WithDownload","WithOutlineSidebar","Loading","Error","WithEmbeddedOutline"];export{j as CustomScale,z as Error,D as Loading,_ as WithAnnotations,R as WithDownload,F as WithEmbeddedOutline,I as WithOsdkMedia,L as WithOutlineSidebar,T as WithPdfUrl,A as WithSidebar,Lt as __namedExportsOrder,Rt as default};

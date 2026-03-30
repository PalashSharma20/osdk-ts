import{i as ne,j as n,h as Z}from"./iframe-BTOHwx6L.js";import"./ActionForm-BHRVklnA.js";import"./index-_OMlzbwr.js";import{B as i}from"./PdfViewer-DQ6Ux59D.js";import{P as b}from"./PdfRenderer-QnZuu4Tm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dex-jsjV.js";import"./PdfViewerAnnotationLayer-BXG27plW.js";import"./PdfViewerOutlineSidebar-Besthrpq.js";import"./PdfViewerSidebarHeader-BKAypPpK.js";import"./CompositeItem-Cs7DETWA.js";import"./PdfViewerSearchBar-CuezXrsM.js";import"./chevron-down-CahOuiAC.js";import"./PdfViewerSidebar-DtO6RdLa.js";import"./index-DFul6YL9.js";import"./constants-rggtfkKZ.js";import"./PdfViewerToolbar-C-3s62Zt.js";import"./minus-BdxrYAiq.js";import"./PdfViewer.module.css-wDwYMsB8.js";import"./error-CvJwZ3-F.js";const te=2147483647,x=100,re=400,ie=5;function oe(){return ne()?ie:Math.floor(Math.random()*(re-x)+x)}async function ae(e){let t;switch(e){case"infinite":{t=te;break}case"real":{t=oe();break}default:throw new Error(`Failed to delay a response: unknown delay mode "${e}". Please make sure you provide one of the supported modes ("real", "infinite") or a number.`)}return new Promise(u=>setTimeout(u,t))}const{fn:r}=__STORYBOOK_MODULE_TEST__,w="/compressed.tracemonkey-pldi-09.pdf",se="/nested_outline.pdf";function ee(e,t){return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:t,sizeBytes:1024e3,mediaType:"application/pdf"}),getMediaReference:()=>({mimeType:"application/pdf",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-pdf",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const de=ee(w,"compressed.tracemonkey-pldi-09.pdf"),ce=ee(se,"pdf-example-bookmarks.pdf"),He={title:"Components/PdfViewer/Features",component:b,args:{media:de},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(b,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The Media object to fetch PDF contents from",control:!1},annotations:{description:"Annotations to overlay on the PDF",control:"object"},onAnnotationClick:{description:"Callback fired when an annotation is clicked",control:!1,table:{category:"Events"}},initialPage:{description:"Page to display on first render (1-indexed)",control:"number",table:{defaultValue:{summary:"1"}}},initialScale:{description:"Initial zoom scale",control:"number",table:{defaultValue:{summary:"1.0"}}},initialSidebarOpen:{description:"Whether the thumbnail sidebar is initially open",control:"boolean",table:{defaultValue:{summary:"false"}}},enableDownload:{description:"Whether the download button is shown in the toolbar",control:"boolean",table:{defaultValue:{summary:"false"}}},sidebarMode:{description:"Which sidebar panel to show when the sidebar is open",control:"radio",options:["thumbnails","outline"],table:{defaultValue:{summary:'"thumbnails"'}}},outlineIcons:{description:"Custom icon components for each outline depth level (0-indexed)",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},o={args:{src:w},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(i,{...e})}),parameters:{docs:{source:{code:`import { BasePdfViewer } from "@osdk/react-components/experimental";

<BasePdfViewer src="/compressed.tracemonkey-pldi-09.pdf" />`}}}},a={args:{onAnnotationClick:r(),annotations:[{id:"h1",type:"highlight",page:1,rect:{x:55,y:696,width:480,height:24},label:"Title highlight"},{id:"u1",type:"underline",page:1,rect:{x:88,y:614,width:440,height:2}},{id:"c1",type:"comment",page:1,rect:{x:538,y:400,width:24,height:24},label:"Review this section"},{id:"p1",type:"pin",page:1,rect:{x:44,y:446,width:16,height:16},label:"Pin marker"}]},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer
  media={myMediaObject}
  annotations={[
    { id: "h1", type: "highlight", page: 1, rect: { x: 55, y: 696, width: 480, height: 24 }, label: "Title highlight" },
    { id: "u1", type: "underline", page: 1, rect: { x: 88, y: 614, width: 440, height: 2 } },
    { id: "c1", type: "comment", page: 1, rect: { x: 538, y: 400, width: 24, height: 24 }, label: "Review this" },
    { id: "p1", type: "pin", page: 1, rect: { x: 44, y: 446, width: 16, height: 16 }, label: "Pin" },
  ]}
  onAnnotationClick={(annotation) => handleAnnotationClick(annotation)}
/>`}}}},s={args:{initialSidebarOpen:!0},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer media={myMediaObject} initialSidebarOpen />`}}}},d={args:{initialScale:1.5},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer media={myMediaObject} initialScale={1.5} />`}}}},c={args:{enableDownload:!0},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer media={myMediaObject} enableDownload />`}}}},l={args:{initialSidebarOpen:!0,sidebarMode:"outline"},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer media={myMediaObject} initialSidebarOpen sidebarMode="outline" />`}}}},m={args:{src:"/loading.pdf"},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(i,{...e})}),parameters:{msw:{handlers:[Z.get("/loading.pdf",async()=>{await ae("infinite")})]}}},p={args:{src:"/error.pdf"},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(i,{...e})}),parameters:{msw:{handlers:[Z.get("/error.pdf",()=>new Response("Server Error",{status:500}))]}}};function le({src:e,onTextHighlight:t,onHighlightDelete:u}){return n.jsx("div",{style:{height:"600px"},children:n.jsx(i,{src:e,enableHighlight:!0,onTextHighlight:t,onHighlightDelete:u})})}const h={args:{onTextHighlight:r(),onHighlightDelete:r()},render:e=>n.jsx(le,{src:w,onTextHighlight:e.onTextHighlight,onHighlightDelete:e.onHighlightDelete}),parameters:{docs:{source:{code:`import { useState, useCallback } from "react";
import { BasePdfViewer } from "@osdk/react-components/experimental";
import type { PdfAnnotation, PdfTextHighlightEvent } from "@osdk/react-components/experimental";

function MyPdfViewer({ src }: { src: string }) {
  const [annotations, setAnnotations] = useState<PdfAnnotation[]>([]);

  const handleTextHighlight = useCallback((event: PdfTextHighlightEvent) => {
    setAnnotations((prev) => [...prev, {
      id: crypto.randomUUID(),
      type: "highlight",
      page: event.page,
      rect: event.rects[0],
      rects: event.rects,
      color: event.color,
      label: event.selectedText,
    }]);
  }, []);

  // Click a highlight to remove it
  const handleAnnotationClick = useCallback((annotation: PdfAnnotation) => {
    setAnnotations((prev) => prev.filter((a) => a.id !== annotation.id));
  }, []);

  return (
    <BasePdfViewer
      src={src}
      enableHighlight
      onTextHighlight={handleTextHighlight}
      annotations={annotations}
      onAnnotationClick={handleAnnotationClick}
    />
  );
}`}}}},g={args:{media:ce,initialSidebarOpen:!0,sidebarMode:"outline"}},f={args:{src:"/interactive-form-pdf.pdf",onFormSubmit:r(),onFormChange:r()},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(i,{...e})}),parameters:{docs:{source:{code:`import { BasePdfViewer } from "@osdk/react-components/experimental";

<BasePdfViewer
  src="https://example.com/interactive-form.pdf"
  onFormChange={(fieldName, value) => console.log(fieldName, value)}
  onFormSubmit={(data) => console.log("Form submitted:", data)}
/>`}}}};var y,P,k;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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

<BasePdfViewer src="/compressed.tracemonkey-pldi-09.pdf" />\`
      }
    }
  }
}`,...(k=(P=o.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var S,v,V;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    onAnnotationClick: fn(),
    annotations: [{
      id: "h1",
      type: "highlight",
      page: 1,
      rect: {
        x: 55,
        y: 696,
        width: 480,
        height: 24
      },
      label: "Title highlight"
    }, {
      id: "u1",
      type: "underline",
      page: 1,
      rect: {
        x: 88,
        y: 614,
        width: 440,
        height: 2
      }
    }, {
      id: "c1",
      type: "comment",
      page: 1,
      rect: {
        x: 538,
        y: 400,
        width: 24,
        height: 24
      },
      label: "Review this section"
    }, {
      id: "p1",
      type: "pin",
      page: 1,
      rect: {
        x: 44,
        y: 446,
        width: 16,
        height: 16
      },
      label: "Pin marker"
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer
  media={myMediaObject}
  annotations={[
    { id: "h1", type: "highlight", page: 1, rect: { x: 55, y: 696, width: 480, height: 24 }, label: "Title highlight" },
    { id: "u1", type: "underline", page: 1, rect: { x: 88, y: 614, width: 440, height: 2 } },
    { id: "c1", type: "comment", page: 1, rect: { x: 538, y: 400, width: 24, height: 24 }, label: "Review this" },
    { id: "p1", type: "pin", page: 1, rect: { x: 44, y: 446, width: 16, height: 16 }, label: "Pin" },
  ]}
  onAnnotationClick={(annotation) => handleAnnotationClick(annotation)}
/>\`
      }
    }
  }
}`,...(V=(v=a.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var M,T,E;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(E=(T=s.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var O,A,H;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(H=(A=d.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var C,_,D;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(_=c.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var R,j,B;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(j=l.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var F,W,I;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(I=(W=m.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var L,N,U;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(U=(N=p.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var K,z,X;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    onTextHighlight: fn(),
    onHighlightDelete: fn()
  },
  render: args => <HighlightModeDemo src={SAMPLE_PDF_URL} onTextHighlight={args.onTextHighlight} onHighlightDelete={args.onHighlightDelete} />,
  parameters: {
    docs: {
      source: {
        code: \`import { useState, useCallback } from "react";
import { BasePdfViewer } from "@osdk/react-components/experimental";
import type { PdfAnnotation, PdfTextHighlightEvent } from "@osdk/react-components/experimental";

function MyPdfViewer({ src }: { src: string }) {
  const [annotations, setAnnotations] = useState<PdfAnnotation[]>([]);

  const handleTextHighlight = useCallback((event: PdfTextHighlightEvent) => {
    setAnnotations((prev) => [...prev, {
      id: crypto.randomUUID(),
      type: "highlight",
      page: event.page,
      rect: event.rects[0],
      rects: event.rects,
      color: event.color,
      label: event.selectedText,
    }]);
  }, []);

  // Click a highlight to remove it
  const handleAnnotationClick = useCallback((annotation: PdfAnnotation) => {
    setAnnotations((prev) => prev.filter((a) => a.id !== annotation.id));
  }, []);

  return (
    <BasePdfViewer
      src={src}
      enableHighlight
      onTextHighlight={handleTextHighlight}
      annotations={annotations}
      onAnnotationClick={handleAnnotationClick}
    />
  );
}\`
      }
    }
  }
}`,...(X=(z=h.parameters)==null?void 0:z.docs)==null?void 0:X.source}}};var $,Y,q;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    media: mockBookmarkedMedia,
    initialSidebarOpen: true,
    sidebarMode: "outline"
  }
}`,...(q=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var G,J,Q;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    src: "/interactive-form-pdf.pdf",
    onFormSubmit: fn(),
    onFormChange: fn()
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

<BasePdfViewer
  src="https://example.com/interactive-form.pdf"
  onFormChange={(fieldName, value) => console.log(fieldName, value)}
  onFormSubmit={(data) => console.log("Form submitted:", data)}
/>\`
      }
    }
  }
}`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Ce=["WithPdfUrl","WithAnnotations","WithSidebar","CustomScale","WithDownload","WithOutlineSidebar","Loading","Error","WithHighlightMode","WithEmbeddedOutline","InteractiveForm"];export{d as CustomScale,p as Error,f as InteractiveForm,m as Loading,a as WithAnnotations,c as WithDownload,g as WithEmbeddedOutline,h as WithHighlightMode,l as WithOutlineSidebar,o as WithPdfUrl,s as WithSidebar,Ce as __namedExportsOrder,He as default};

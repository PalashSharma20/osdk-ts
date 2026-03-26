import{f as Ue,j as n,r as s}from"./iframe-C2Phw60Z.js";import{U as qe}from"./ActionForm-BuXpqmDH.js";import{O as o}from"./ObjectTable-CpqMLE2X.js";import{h as Ge}from"./Table-yGC_m-CJ.js";import"./index-CnY_gqeo.js";import{E as t}from"./Employee-C27Uj4FP.js";import"./preload-helper-Dp1pzeXC.js";import"./error-DCYuXSfc.js";import"./minus-BaM4bvsp.js";import"./CompositeItem-CgKWWgoL.js";import"./chevron-down-DpkSvvvU.js";import"./index-DTUnl0DM.js";import"./index-eeqr7CDX.js";const cn={title:"Components/ObjectTable",component:o,parameters:{msw:{handlers:[...Ue.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object or interface type of the object",control:!1},columnDefinitions:{description:"Ordered list of column definitions to show in the table. If not provided, all of the properties of the object type will be shown in default order.",control:"object"},filter:{description:"The current where clause to filter the objects in the table. If provided, the filter is controlled.",control:"object"},enableOrdering:{description:"Whether the table is sortable by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnPinning:{description:"Whether columns can be pinned by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnResizing:{description:"Whether columns can be resized by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnConfig:{description:"Whether the column configuration dialog for column visibility and ordering is available to the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},editMode:{description:"Controls the edit mode behavior of the table. 'always': Table is always in edit mode. 'manual': User can toggle edit mode on/off.",control:"select",options:["manual","always"],defaultValue:"manual",table:{defaultValue:{summary:"manual"}}},defaultOrderBy:{description:"The default order by clause to sort the objects in the table. If provided without orderBy prop, the sorting is uncontrolled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",control:"object"},orderBy:{description:"The current order by clause to sort the objects in the table. If provided, the sorting is controlled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",control:"object"},onOrderByChanged:{description:"Called when the order by clause is changed. Required when sorting is controlled.",control:!1,table:{category:"Events"}},onColumnVisibilityChanged:{description:"Called when the column visibility or ordering changed. If provided, the table will allow the user to show/hide columns.",control:!1,table:{category:"Events"}},onColumnsPinnedChanged:{description:"Called when the pinned columns change. If provided, the table will allow the user to pin/unpin columns.",control:!1,table:{category:"Events"}},onColumnResize:{description:"Called when a column is resized. Parameters: columnId - The ID of the resized column, newWidth - The new width of the column. When newWidth = null, the column size is reset.",control:!1,table:{category:"Events"}},onRowClick:{description:"Called when a row is clicked.",control:!1,table:{category:"Events"}},selectionMode:{description:"Selection mode for the table rows. If multiple, a checkbox will be shown for each row to allow selecting multiple rows as well as a top-level checkbox in the header to select all rows.",control:{type:"select"},options:["single","multiple","none"],defaultValue:"none",table:{defaultValue:{summary:"none"}}},selectedRows:{description:"The currently selected rows in the table. If provided, the row selection is controlled.",control:"object"},onRowSelection:{description:"Called when the row selection changes. Required when row selection is controlled.",control:!1,table:{category:"Events"}},renderCellContextMenu:{description:"If provided, will render this context menu when right clicking on a cell",control:!1,table:{category:"Advanced"}},rowHeight:{description:"The height of each row in pixels.",control:"number",defaultValue:40,table:{defaultValue:{summary:"40"}}},className:{description:"Additional CSS class name for the table",control:"text"}}},M=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"emailPrimaryWork"},renderHeader:()=>"Email"},{locator:{type:"property",id:"jobTitle"},isVisible:!1},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"firstFullTimeStartDate"},width:200,renderHeader:()=>"Start Date",renderCell:e=>n.jsx("div",{children:e.firstFullTimeStartDate?new Date(e.firstFullTimeStartDate).toLocaleDateString():"No date"})},{locator:{type:"rdp",id:"managerName",creator:e=>e.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager",renderCell:e=>"managerName"in e?n.jsx("span",{children:e.managerName}):n.jsx("span",{style:{color:"#999"},children:"No Manager"})}],p={args:{objectType:t},parameters:{docs:{source:{code:"<ObjectTable objectType={Employee} />"}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(o,{...e})})},m={args:{objectType:t},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:e=>{const i=qe()(t).where({jobProfile:"Marketing Manager"});return n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(o,{...e,objectType:t,objectSet:i})})}},u={args:{objectType:t,columnDefinitions:M},parameters:{docs:{source:{code:`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    renderHeader: () => "Email",
  },
  {
    locator: { type: "property", id: "jobTitle" },
    isVisible: false,
  },
  {
    locator: { type: "property", id: "department" },
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    width: 200,
    renderHeader: () => "Start Date",
    renderCell: (object) => {
      return (
        <div>
          {object["firstFullTimeStartDate"]
            ? new Date(object["firstFullTimeStartDate"]).toLocaleDateString()
            : "No date"}
        </div>
      );
    },
  },
  {
    locator: {
      type: "rdp",
      id: "managerName",
      creator: (baseObjectSet) =>
        baseObjectSet.pivotTo("lead").selectProperty("fullName"),
    },
    renderHeader: () => "Manager",
    renderCell: (object) => {
      if ("managerName" in object) {
        return <span>{object["managerName"]}</span>;
      }
      return <span style={{ color: "#999" }}>No Manager</span>;
    },
  },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(o,{...e})})},y={args:{objectType:t,selectionMode:"single"},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="single" />'}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(o,{...e})})},b={args:{objectType:t,selectionMode:"multiple"},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="multiple" />'}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(o,{...e})})},f={args:{objectType:t,renderCellContextMenu:(e,r)=>n.jsxs("div",{style:{background:"white",padding:8,border:"1px solid #d1d5db",boxShadow:"0 2px 8px 0 rgba(0, 0, 0, 0.1)",fontSize:13,borderRadius:4},children:[n.jsx("div",{style:{fontWeight:"bold",marginBottom:4},children:"Cell Value:"}),n.jsx("div",{children:r?String(r):"No Value"})]})},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  renderCellContextMenu={(_, cellValue) => (
    <div
      style={{
        background: "white",
        padding: 8,
        border: "1px solid #d1d5db",
        boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
        fontSize: 13,
        borderRadius: 4,
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: 4 }}>Cell Value:</div>
      <div>{cellValue ? String(cellValue) : "No Value"}</div>
    </div>
  )}
/>`}}},render:e=>n.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[n.jsx("div",{style:{padding:"12px"},children:"Right click on any cell"}),n.jsx(o,{...e})]})},g={args:{objectType:t,columnDefinitions:M.map((e,r)=>({...e,width:r===0?250:r===1?300:150}))},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(o,{...e})})},h={args:{objectType:t,defaultOrderBy:[{property:"fullName",direction:"desc"}]},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  defaultOrderBy={[{
    property: "fullName",
    direction: "desc",
  }]}
/>`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(o,{...e})})},j={args:{objectType:t,columnDefinitions:[{locator:{type:"property",id:"fullName"},pinned:"left"},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"}},{locator:{type:"property",id:"department"},pinned:"right"},{locator:{type:"property",id:"firstFullTimeStartDate"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
    ...columnDefinitions,
   {
      locator: { type: "property", id: "fullName" },
      pinned: "left",
    },
    {
      locator: { type: "property", id: "department" },
      pinned: "right",
    },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(o,{...e})})},C={parameters:{docs:{source:{code:`const customColumnDefinition = [
      ...columnDefinitions,
      {
        locator: {
          type: "custom",
          id: "actions",
        },
        renderHeader: () => "Actions",
        renderCell: (object: any) => {
          return (
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => {}}
              >
                View
              </button>
              <button
                onClick={() => {}}
              >
                Edit
              </button>
            </div>
          );
        },
        orderable: false,
        width: 120,
      },
    ]
    
    return  <ObjectTable objectType={Employee} columnDefinitions={customColumnDefinition} />
    `}}},args:{objectType:t,columnDefinitions:[...M.slice(0,3),{locator:{type:"custom",id:"actions"},renderHeader:()=>"Actions",renderCell:e=>n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`View ${e.fullName}`),children:"View"}),n.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`Edit ${e.fullName}`),children:"Edit"})]}),orderable:!1,width:120}]},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(o,{...e})})},v={args:{objectType:t,onRowClick:e=>{alert(`Clicked on ${e.fullName}`)}},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  onRowClick={(employee) => {
    alert(\`Clicked on \${employee["fullName"]}\`);
  }}
/>`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(o,{...e})})},x={parameters:{docs:{source:{code:`const [orderBy, setOrderBy] = useState<any>([
  { property: "fullName", direction: "asc" },
]);

return (
  <ObjectTable
    objectType={Employee}
    orderBy={orderBy}
    onOrderByChanged={setOrderBy}
  />
);`}}},render:()=>{const[e,r]=s.useState([{property:"fullName",direction:"asc"}]);return n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsx("strong",{children:"Current Sort:"})," ",e.map((i,l)=>n.jsxs("span",{children:[i.property," (",i.direction,")",l<e.length-1&&", "]},l))]}),n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(o,{objectType:t,orderBy:e,onOrderByChanged:r})})]})}},T={parameters:{docs:{source:{code:`const [selectedRows, setSelectedRows] = useState<any[]>([]);

return (
  <ObjectTable
    objectType={Employee}
    selectionMode="multiple"
    selectedRows={selectedRows}
    onRowSelection={setSelectedRows}
  />
);`}}},render:()=>{const[e,r]=s.useState([]),[i,l]=s.useState(!1),R=s.useCallback((V,d)=>{r(V),d!==void 0&&l(d)},[]);return n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsx("strong",{children:"Selected:"})," ",i?"All Employees":`${e.length} employees`,e.length>0&&n.jsx("button",{style:{marginLeft:"16px",padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>{r([]),l(!1)},children:"Clear Selection"})]}),n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(o,{objectType:t,selectionMode:"multiple",selectedRows:e,onRowSelection:R})})]})}},D={args:{objectType:t,enableOrdering:!1,enableColumnPinning:!1,enableColumnResizing:!1,enableColumnConfig:!1},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  enableOrdering={false}
  enableColumnPinning={false}
  enableColumnResizing={false}
  enableColumnConfig={false}
/>`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(o,{...e})})},w={args:{objectType:t,rowHeight:56},parameters:{docs:{source:{code:"<ObjectTable objectType={Employee} rowHeight={56} />"}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(o,{...e})})},S={args:{objectType:t,columnDefinitions:[{locator:{type:"property",id:"fullName"},renderHeader:()=>n.jsx("a",{href:"#",className:"header-link",onClick:e=>{e.preventDefault(),alert("Employee Name column clicked!")},children:"Employee Name"})},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"},renderHeader:()=>"Job Title"},{locator:{type:"custom",id:"employment-status"},renderHeader:()=>"Employment Status",renderCell:e=>{const r=e.firstFullTimeStartDate,i=r&&new Date(r)<=new Date;return n.jsx("span",{className:`status-tag ${i?"active":"inactive"}`,children:i?"Active":"Inactive"})},width:140},{locator:{type:"property",id:"department"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    renderHeader: () => (
      <a
        href="#"
        className="header-link"
        onClick={(e) => {
          e.preventDefault();
          alert("Employee Name column clicked!");
        }}
      >
        Employee Name
      </a>
    ),
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
  },
  {
    locator: { type: "property", id: "jobTitle" },
    renderHeader: () => "Job Title",
  },
  {
    locator: {
      type: "custom",
      id: "employment-status",
    },
    renderHeader: () => "Employment Status",
    renderCell: (employee) => {
      const startDate = employee["firstFullTimeStartDate"];
      const isActive = startDate && new Date(startDate) <= new Date();

      return (
        <span className={\`status-tag \${isActive ? "active" : "inactive"}\`}>
          {isActive ? "Active" : "Inactive"}
        </span>
      );
    },
    width: 140,
  },
  {
    locator: { type: "property", id: "department" },
  },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(o,{...e})})},E={parameters:{docs:{source:{code:`const [isColumnConfigOpen, setIsColumnConfigOpen] = useState(false);
const [columnDefinitions, setColumnDefinitions] = useState(initialColumnDefinitions);

const handleApplyColumnConfig = useCallback(
  (columns: Array<{ columnId: string; isVisible: boolean }>) => {
    const newColumnDefinitions = [];
    columns.forEach(({ columnId, isVisible }) => {
      if (isVisible) {
        const colDef = initialColumnDefinitions.find(def => def.locator.id === columnId);
        if (colDef) {
          newColumnDefinitions.push(colDef);
        }
      }
    });
    setColumnDefinitions(newColumnDefinitions);
    setIsColumnConfigOpen(false);
  },
  [],
);

return (
  <>
    <button onClick={() => setIsColumnConfigOpen(true)}>
      Configure Columns
    </button>
    <ObjectTable
      objectType={Employee}
      columnDefinitions={columnDefinitions}
      enableColumnConfig={false}
    />
    <ColumnConfigDialog
      isOpen={isColumnConfigOpen}
      onClose={() => setIsColumnConfigOpen(false)}
      columnOptions={columnOptions}
      currentVisibility={currentVisibility}
      currentColumnOrder={currentColumnOrder}
      onApply={handleApplyColumnConfig}
    />
  </>
);`}}},render:()=>{const e=[{locator:{type:"property",id:"fullName"},columnName:"Full Name"},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job Title"},{locator:{type:"property",id:"department"},columnName:"Department"}],[r,i]=s.useState(!1),[l,R]=s.useState(e),V=s.useMemo(()=>e.map(a=>({id:a.locator.id,name:a.columnName||a.locator.id})),[]),d=s.useMemo(()=>{const a={};return e.forEach(c=>{a[c.locator.id]=l.some(W=>W.locator.id===c.locator.id)}),a},[l]),$e=s.useMemo(()=>l.map(a=>a.locator.id),[l]),Je=s.useCallback(a=>{const c=[];a.forEach(({columnId:W,isVisible:_e})=>{if(_e){const A=e.find(Le=>Le.locator.id===W);A&&c.push(A)}}),R(c),i(!1)},[]);return n.jsxs("div",{style:{height:"600px",display:"flex",flexDirection:"column"},children:[n.jsx("div",{style:{padding:"8px 0",marginBottom:8},children:n.jsx("button",{onClick:()=>i(!0),style:{padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Configure Columns"})}),n.jsx(o,{objectType:t,columnDefinitions:l,enableColumnConfig:!1}),n.jsx(Ge,{isOpen:r,onClose:()=>i(!1),columnOptions:V,currentVisibility:d,currentColumnOrder:$e,onApply:Je})]})}},O={args:{objectType:t,columnDefinitions:[{locator:{type:"property",id:"fullName"},editable:!0},{locator:{type:"property",id:"emailPrimaryWork"},editable:!0},{locator:{type:"property",id:"jobTitle"},editable:!0},{locator:{type:"property",id:"department"},editable:!1}],editMode:"manual"},parameters:{docs:{source:{code:`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    editable: true,
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    editable: true,
  },
  {
    locator: { type: "property", id: "jobTitle" },
    editable: true,
  },
  {
    locator: { type: "property", id: "department" },
    editable: false, // Read-only column
  },
];

return (
  <ObjectTable 
    objectType={Employee} 
    columnDefinitions={columnDefinitions} 
    editMode="manual" 
  />
);`}}},render:e=>n.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[n.jsx("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:'Try changing edit mode to "always" to enable inline editing without needing to toggle edit mode on.'}),n.jsx(o,{...e,objectType:t})]})},N={args:{objectType:t,columnDefinitions:[{locator:{type:"property",id:"fullName"},editable:!0},{locator:{type:"property",id:"emailPrimaryWork"},editable:!0},{locator:{type:"property",id:"jobTitle"},editable:!0}],editMode:"manual",onSubmitEdits:async e=>(await new Promise(r=>setTimeout(r,1e3)),alert(`Successfully submitted ${e.length} edits`),!0)},parameters:{docs:{source:{code:`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    editable: true,
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    editable: true,
  },
  {
    locator: { type: "property", id: "jobTitle" },
    editable: true,
  },
];

return (
  <ObjectTable 
    objectType={Employee} 
    columnDefinitions={columnDefinitions}
    editMode="manual"
    onCellValueChanged={(info) => {
      console.log("Cell value changed:", info);
    }}
    onSubmitEdits={async (edits) => {
      // Call your API or action here
      await submitEmployeeUpdates(edits);
      // Return true to indicate success and clear edits
      return true;
    }}
  />
);`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(o,{...e,objectType:t})})},k={args:{objectType:t,columnDefinitions:[{locator:{type:"property",id:"fullName"},editable:!0,validateEdit:async e=>String(e??"").trim().length>=2?void 0:"Name must be at least 2 characters long"},{locator:{type:"property",id:"emailPrimaryWork"},editable:!0,validateEdit:async e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e??""))?void 0:"Please enter a valid email address"},{locator:{type:"property",id:"employeeNumber"},editable:!0,validateEdit:async e=>Number(e)>0?void 0:"Employee number must be positive"}],editMode:"always",onSubmitEdits:async e=>!0},parameters:{docs:{source:{code:`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    editable: true,
    validateEdit: async (value: string) => {
      return value.trim().length >= 2 ? undefined : "Name must be at least 2 characters long";
    },
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    editable: true,
    validateEdit: async (value: string) => {
      const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
      return emailRegex.test(value) ? undefined : "Please enter a valid email address";
    },
  },
  {
    locator: { type: "property", id: "employeeNumber" },
    editable: true,
    validateEdit: async (value: number) => {
      return value > 0 ? undefined : "Employee number must be positive";
    },
];

return (
  <ObjectTable 
    objectType={Employee} 
    columnDefinitions={columnDefinitions}
    editMode="always" // Always in edit mode
    // Submit Edits button disabled when there are validation errors
    onSubmitEdits={async (edits) => {
      return true;
    }}
  />
);`}}},render:e=>n.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[n.jsxs("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:["Try editing cells with invalid values to see validation in action:",n.jsxs("ul",{style:{margin:"8px 0 0 20px"},children:[n.jsx("li",{children:"Name must be at least 2 characters"}),n.jsx("li",{children:"Email must be a valid format"}),n.jsx("li",{children:"Employee number must be positive"})]})]}),n.jsx(o,{...e,objectType:t})]})};var B,I,P;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    objectType: Employee
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(P=(I=p.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var H,z,F;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    objectType: Employee
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  }
}`,...(F=(z=m.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var $,J,_;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: columnDefinitions as ColumnDefinition<Employee>[]
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    renderHeader: () => "Email",
  },
  {
    locator: { type: "property", id: "jobTitle" },
    isVisible: false,
  },
  {
    locator: { type: "property", id: "department" },
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    width: 200,
    renderHeader: () => "Start Date",
    renderCell: (object) => {
      return (
        <div>
          {object["firstFullTimeStartDate"]
            ? new Date(object["firstFullTimeStartDate"]).toLocaleDateString()
            : "No date"}
        </div>
      );
    },
  },
  {
    locator: {
      type: "rdp",
      id: "managerName",
      creator: (baseObjectSet) =>
        baseObjectSet.pivotTo("lead").selectProperty("fullName"),
    },
    renderHeader: () => "Manager",
    renderCell: (object) => {
      if ("managerName" in object) {
        return <span>{object["managerName"]}</span>;
      }
      return <span style={{ color: "#999" }}>No Manager</span>;
    },
  },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(_=(J=u.parameters)==null?void 0:J.docs)==null?void 0:_.source}}};var L,U,q;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    selectionMode: "single"
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable objectType={Employee} selectionMode="single" />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(q=(U=y.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var G,K,Q;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    selectionMode: "multiple"
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable objectType={Employee} selectionMode="multiple" />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    renderCellContextMenu: (_: any, cellValue: unknown) => {
      return <div style={{
        background: "white",
        padding: 8,
        border: "1px solid #d1d5db",
        boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
        fontSize: 13,
        borderRadius: 4
      }}>
          <div style={{
          fontWeight: "bold",
          marginBottom: 4
        }}>Cell Value:</div>
          <div>{cellValue ? String(cellValue) : "No Value"}</div>
        </div>;
    }
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable
  objectType={Employee}
  renderCellContextMenu={(_, cellValue) => (
    <div
      style={{
        background: "white",
        padding: 8,
        border: "1px solid #d1d5db",
        boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
        fontSize: 13,
        borderRadius: 4,
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: 4 }}>Cell Value:</div>
      <div>{cellValue ? String(cellValue) : "No Value"}</div>
    </div>
  )}
/>\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <div style={{
      padding: "12px"
    }}>Right click on any cell</div>
      <ObjectTable {...args} />
    </div>
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: columnDefinitions.map((col, index) => ({
      ...col,
      width: index === 0 ? 250 : index === 1 ? 300 : 150
    })) as any
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(te=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,re,ie;h.parameters={...h.parameters,docs:{...(oe=h.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    defaultOrderBy: [{
      property: "fullName",
      direction: "desc"
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable
  objectType={Employee}
  defaultOrderBy={[{
    property: "fullName",
    direction: "desc",
  }]}
/>\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(ie=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var le,ae,se;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      },
      pinned: "left"
    }, {
      locator: {
        type: "property",
        id: "emailPrimaryWork"
      }
    }, {
      locator: {
        type: "property",
        id: "jobTitle"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      },
      pinned: "right"
    }, {
      locator: {
        type: "property",
        id: "firstFullTimeStartDate"
      }
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
    ...columnDefinitions,
   {
      locator: { type: "property", id: "fullName" },
      pinned: "left",
    },
    {
      locator: { type: "property", id: "department" },
      pinned: "right",
    },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(se=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ce,de,pe;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const customColumnDefinition = [
      ...columnDefinitions,
      {
        locator: {
          type: "custom",
          id: "actions",
        },
        renderHeader: () => "Actions",
        renderCell: (object: any) => {
          return (
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => {}}
              >
                View
              </button>
              <button
                onClick={() => {}}
              >
                Edit
              </button>
            </div>
          );
        },
        orderable: false,
        width: 120,
      },
    ]
    
    return  <ObjectTable objectType={Employee} columnDefinitions={customColumnDefinition} />
    \`
      }
    }
  },
  args: {
    objectType: Employee,
    columnDefinitions: [...(columnDefinitions.slice(0, 3) as ColumnDefinition<Employee>[]), {
      locator: {
        type: "custom",
        id: "actions"
      },
      renderHeader: () => "Actions",
      renderCell: (object: any) => {
        return <div style={{
          display: "flex",
          gap: "8px"
        }}>
              <button style={{
            padding: "4px 8px",
            fontSize: "12px",
            border: "1px solid #d1d5db",
            borderRadius: "4px",
            background: "white",
            cursor: "pointer"
          }} onClick={() => alert(\`View \${object["fullName"]}\`)}>
                View
              </button>
              <button style={{
            padding: "4px 8px",
            fontSize: "12px",
            border: "1px solid #d1d5db",
            borderRadius: "4px",
            background: "white",
            cursor: "pointer"
          }} onClick={() => alert(\`Edit \${object["fullName"]}\`)}>
                Edit
              </button>
            </div>;
      },
      orderable: false,
      width: 120
    }]
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(pe=(de=C.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,ue,ye;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    onRowClick: (employee: any) => {
      alert(\`Clicked on \${employee["fullName"]}\`);
    }
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable
  objectType={Employee}
  onRowClick={(employee) => {
    alert(\\\`Clicked on \\\${employee["fullName"]}\\\`);
  }}
/>\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(ye=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:ye.source}}};var be,fe,ge;x.parameters={...x.parameters,docs:{...(be=x.parameters)==null?void 0:be.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const [orderBy, setOrderBy] = useState<any>([
  { property: "fullName", direction: "asc" },
]);

return (
  <ObjectTable
    objectType={Employee}
    orderBy={orderBy}
    onOrderByChanged={setOrderBy}
  />
);\`
      }
    }
  },
  render: () => {
    const [orderBy, setOrderBy] = useState<any>([{
      property: "fullName",
      direction: "asc"
    }]);
    return <div>
        <div style={{
        marginBottom: "16px"
      }}>
          <strong>Current Sort:</strong>{" "}
          {orderBy.map((o: any, i: number) => <span key={i}>
              {o.property} ({o.direction})
              {i < orderBy.length - 1 && ", "}
            </span>)}
        </div>
        <div className="object-table-container" style={{
        height: "600px"
      }}>
          <ObjectTable objectType={Employee} orderBy={orderBy} onOrderByChanged={setOrderBy} />
        </div>
      </div>;
  }
}`,...(ge=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var he,je,Ce;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const [selectedRows, setSelectedRows] = useState<any[]>([]);

return (
  <ObjectTable
    objectType={Employee}
    selectionMode="multiple"
    selectedRows={selectedRows}
    onRowSelection={setSelectedRows}
  />
);\`
      }
    }
  },
  render: () => {
    const [selectedRows, setSelectedRows] = useState<any[]>([]);
    const [isSelectAll, setIsSelectAll] = useState<boolean>(false);
    const handleRowSelection = useCallback((selectedRows: any[], isSelectAll?: boolean) => {
      setSelectedRows(selectedRows);
      if (isSelectAll !== undefined) {
        setIsSelectAll(isSelectAll);
      }
    }, []);
    return <div>
        <div style={{
        marginBottom: "16px"
      }}>
          <strong>Selected:</strong>{" "}
          {isSelectAll ? "All Employees" : \`\${selectedRows.length} employees\`}
          {selectedRows.length > 0 && <button style={{
          marginLeft: "16px",
          padding: "4px 8px",
          fontSize: "12px",
          border: "1px solid #d1d5db",
          borderRadius: "4px",
          background: "white",
          cursor: "pointer"
        }} onClick={() => {
          setSelectedRows([]);
          setIsSelectAll(false);
        }}>
              Clear Selection
            </button>}
        </div>
        <div className="object-table-container" style={{
        height: "600px"
      }}>
          <ObjectTable objectType={Employee} selectionMode="multiple" selectedRows={selectedRows} onRowSelection={handleRowSelection} />
        </div>
      </div>;
  }
}`,...(Ce=(je=T.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var ve,xe,Te;D.parameters={...D.parameters,docs:{...(ve=D.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    enableOrdering: false,
    enableColumnPinning: false,
    enableColumnResizing: false,
    enableColumnConfig: false
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable
  objectType={Employee}
  enableOrdering={false}
  enableColumnPinning={false}
  enableColumnResizing={false}
  enableColumnConfig={false}
/>\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(Te=(xe=D.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var De,we,Se;w.parameters={...w.parameters,docs:{...(De=w.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    rowHeight: 56
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable objectType={Employee} rowHeight={56} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(Se=(we=w.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var Ee,Oe,Ne;S.parameters={...S.parameters,docs:{...(Ee=S.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      },
      renderHeader: () => <a href="#" className="header-link" onClick={e => {
        e.preventDefault();
        alert("Employee Name column clicked!");
      }}>
            Employee Name
          </a>
    }, {
      locator: {
        type: "property",
        id: "emailPrimaryWork"
      }
    }, {
      locator: {
        type: "property",
        id: "jobTitle"
      },
      renderHeader: () => "Job Title"
    }, {
      locator: {
        type: "custom",
        id: "employment-status"
      },
      renderHeader: () => "Employment Status",
      renderCell: (employee: any) => {
        const startDate = employee["firstFullTimeStartDate"];
        const isActive = startDate && new Date(startDate) <= new Date();
        return <span className={\`status-tag \${isActive ? "active" : "inactive"}\`}>
              {isActive ? "Active" : "Inactive"}
            </span>;
      },
      width: 140
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    renderHeader: () => (
      <a
        href="#"
        className="header-link"
        onClick={(e) => {
          e.preventDefault();
          alert("Employee Name column clicked!");
        }}
      >
        Employee Name
      </a>
    ),
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
  },
  {
    locator: { type: "property", id: "jobTitle" },
    renderHeader: () => "Job Title",
  },
  {
    locator: {
      type: "custom",
      id: "employment-status",
    },
    renderHeader: () => "Employment Status",
    renderCell: (employee) => {
      const startDate = employee["firstFullTimeStartDate"];
      const isActive = startDate && new Date(startDate) <= new Date();

      return (
        <span className={\\\`status-tag \\\${isActive ? "active" : "inactive"}\\\`}>
          {isActive ? "Active" : "Inactive"}
        </span>
      );
    },
    width: 140,
  },
  {
    locator: { type: "property", id: "department" },
  },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(Ne=(Oe=S.parameters)==null?void 0:Oe.docs)==null?void 0:Ne.source}}};var ke,Re,Ve;E.parameters={...E.parameters,docs:{...(ke=E.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const [isColumnConfigOpen, setIsColumnConfigOpen] = useState(false);
const [columnDefinitions, setColumnDefinitions] = useState(initialColumnDefinitions);

const handleApplyColumnConfig = useCallback(
  (columns: Array<{ columnId: string; isVisible: boolean }>) => {
    const newColumnDefinitions = [];
    columns.forEach(({ columnId, isVisible }) => {
      if (isVisible) {
        const colDef = initialColumnDefinitions.find(def => def.locator.id === columnId);
        if (colDef) {
          newColumnDefinitions.push(colDef);
        }
      }
    });
    setColumnDefinitions(newColumnDefinitions);
    setIsColumnConfigOpen(false);
  },
  [],
);

return (
  <>
    <button onClick={() => setIsColumnConfigOpen(true)}>
      Configure Columns
    </button>
    <ObjectTable
      objectType={Employee}
      columnDefinitions={columnDefinitions}
      enableColumnConfig={false}
    />
    <ColumnConfigDialog
      isOpen={isColumnConfigOpen}
      onClose={() => setIsColumnConfigOpen(false)}
      columnOptions={columnOptions}
      currentVisibility={currentVisibility}
      currentColumnOrder={currentColumnOrder}
      onApply={handleApplyColumnConfig}
    />
  </>
);\`
      }
    }
  },
  render: () => {
    const initialColumnDefinitions: Array<ColumnDefinition<Employee, {}, {}>> = [{
      locator: {
        type: "property",
        id: "fullName"
      },
      columnName: "Full Name"
    }, {
      locator: {
        type: "property",
        id: "emailPrimaryWork"
      },
      columnName: "Email"
    }, {
      locator: {
        type: "property",
        id: "jobTitle"
      },
      columnName: "Job Title"
    }, {
      locator: {
        type: "property",
        id: "department"
      },
      columnName: "Department"
    }];
    const [isColumnConfigOpen, setIsColumnConfigOpen] = useState(false);
    const [columnDefinitions, setColumnDefinitions] = useState<Array<ColumnDefinition<Employee, {}, {}>>>(initialColumnDefinitions);
    const columnOptions = useMemo(() => initialColumnDefinitions.map(colDef => ({
      id: colDef.locator.id,
      name: colDef.columnName || colDef.locator.id
    })), []);
    const currentVisibility = useMemo(() => {
      const visibility: Record<string, boolean> = {};
      initialColumnDefinitions.forEach(colDef => {
        visibility[colDef.locator.id] = columnDefinitions.some(def => def.locator.id === colDef.locator.id);
      });
      return visibility;
    }, [columnDefinitions]);
    const currentColumnOrder = useMemo(() => columnDefinitions.map(colDef => colDef.locator.id), [columnDefinitions]);
    const handleApplyColumnConfig = useCallback((columns: Array<{
      columnId: string;
      isVisible: boolean;
    }>) => {
      const newColumnDefinitions: Array<ColumnDefinition<Employee, {}, {}>> = [];
      columns.forEach(({
        columnId,
        isVisible
      }) => {
        if (isVisible) {
          const colDef = initialColumnDefinitions.find(def => def.locator.id === columnId);
          if (colDef) {
            newColumnDefinitions.push(colDef);
          }
        }
      });
      setColumnDefinitions(newColumnDefinitions);
      setIsColumnConfigOpen(false);
    }, []);
    return <div style={{
      height: "600px",
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        padding: "8px 0",
        marginBottom: 8
      }}>
          <button onClick={() => setIsColumnConfigOpen(true)} style={{
          padding: "8px 16px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}>
            Configure Columns
          </button>
        </div>
        <ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} enableColumnConfig={false} />
        <ColumnConfigDialog isOpen={isColumnConfigOpen} onClose={() => setIsColumnConfigOpen(false)} columnOptions={columnOptions} currentVisibility={currentVisibility} currentColumnOrder={currentColumnOrder} onApply={handleApplyColumnConfig} />
      </div>;
  }
}`,...(Ve=(Re=E.parameters)==null?void 0:Re.docs)==null?void 0:Ve.source}}};var We,Me,Ae;O.parameters={...O.parameters,docs:{...(We=O.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      },
      editable: true
    }, {
      locator: {
        type: "property",
        id: "emailPrimaryWork"
      },
      editable: true
    }, {
      locator: {
        type: "property",
        id: "jobTitle"
      },
      editable: true
    }, {
      locator: {
        type: "property",
        id: "department"
      },
      editable: false // Read-only column
    }],
    editMode: "manual"
  } as any,
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    editable: true,
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    editable: true,
  },
  {
    locator: { type: "property", id: "jobTitle" },
    editable: true,
  },
  {
    locator: { type: "property", id: "department" },
    editable: false, // Read-only column
  },
];

return (
  <ObjectTable 
    objectType={Employee} 
    columnDefinitions={columnDefinitions} 
    editMode="manual" 
  />
);\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <div style={{
      padding: "12px",
      backgroundColor: "#fff3cd",
      marginBottom: "8px",
      borderRadius: "4px"
    }}>
        Try changing edit mode to "always" to enable inline editing without
        needing to toggle edit mode on.
      </div>
      <ObjectTable {...args} objectType={Employee} />
    </div>
}`,...(Ae=(Me=O.parameters)==null?void 0:Me.docs)==null?void 0:Ae.source}}};var Be,Ie,Pe;N.parameters={...N.parameters,docs:{...(Be=N.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      },
      editable: true
    }, {
      locator: {
        type: "property",
        id: "emailPrimaryWork"
      },
      editable: true
    }, {
      locator: {
        type: "property",
        id: "jobTitle"
      },
      editable: true
    }],
    editMode: "manual",
    onSubmitEdits: async (edits: CellEditInfo<Osdk.Instance<Employee>>[]) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert(\`Successfully submitted \${edits.length} edits\`);
      return true;
    }
  } as any,
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    editable: true,
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    editable: true,
  },
  {
    locator: { type: "property", id: "jobTitle" },
    editable: true,
  },
];

return (
  <ObjectTable 
    objectType={Employee} 
    columnDefinitions={columnDefinitions}
    editMode="manual"
    onCellValueChanged={(info) => {
      console.log("Cell value changed:", info);
    }}
    onSubmitEdits={async (edits) => {
      // Call your API or action here
      await submitEmployeeUpdates(edits);
      // Return true to indicate success and clear edits
      return true;
    }}
  />
);\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} objectType={Employee} />
    </div>
}`,...(Pe=(Ie=N.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};var He,ze,Fe;k.parameters={...k.parameters,docs:{...(He=k.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      },
      editable: true,
      validateEdit: async (value: unknown) => {
        const str = String(value ?? "");
        return str.trim().length >= 2 ? undefined : "Name must be at least 2 characters long";
      }
    }, {
      locator: {
        type: "property",
        id: "emailPrimaryWork"
      },
      editable: true,
      validateEdit: async (value: unknown) => {
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        return emailRegex.test(String(value ?? "")) ? undefined : "Please enter a valid email address";
      }
    }, {
      locator: {
        type: "property",
        id: "employeeNumber"
      },
      editable: true,
      validateEdit: async (value: unknown) => {
        return Number(value) > 0 ? undefined : "Employee number must be positive";
      }
    }],
    editMode: "always",
    onSubmitEdits: async (edits: CellEditInfo<Osdk.Instance<Employee>>[]) => {
      return true;
    }
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    editable: true,
    validateEdit: async (value: string) => {
      return value.trim().length >= 2 ? undefined : "Name must be at least 2 characters long";
    },
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    editable: true,
    validateEdit: async (value: string) => {
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      return emailRegex.test(value) ? undefined : "Please enter a valid email address";
    },
  },
  {
    locator: { type: "property", id: "employeeNumber" },
    editable: true,
    validateEdit: async (value: number) => {
      return value > 0 ? undefined : "Employee number must be positive";
    },
];

return (
  <ObjectTable 
    objectType={Employee} 
    columnDefinitions={columnDefinitions}
    editMode="always" // Always in edit mode
    // Submit Edits button disabled when there are validation errors
    onSubmitEdits={async (edits) => {
      return true;
    }}
  />
);\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <div style={{
      padding: "12px",
      backgroundColor: "#fff3cd",
      marginBottom: "8px",
      borderRadius: "4px"
    }}>
        Try editing cells with invalid values to see validation in action:
        <ul style={{
        margin: "8px 0 0 20px"
      }}>
          <li>Name must be at least 2 characters</li>
          <li>Email must be a valid format</li>
          <li>Employee number must be positive</li>
        </ul>
      </div>
      <ObjectTable {...args} objectType={Employee} />
    </div>
}`,...(Fe=(ze=k.parameters)==null?void 0:ze.docs)==null?void 0:Fe.source}}};const dn=["Default","WithObjectSet","WithColumnDefinitions","SingleSelection","MultipleSelection","WithContextMenu","CustomColumnWidths","WithDefaultSorting","WithDefaultColumnPinning","WithCustomColumn","WithRowClickHandler","ControlledSorting","ControlledSelection","DisableAllHeaderMenuFeatures","CustomRowHeight","WithCustomRenderers","WithColumnConfigDialog","EditableTable","WithSubmitEditsButton","EditableWithValidation"];export{T as ControlledSelection,x as ControlledSorting,g as CustomColumnWidths,w as CustomRowHeight,p as Default,D as DisableAllHeaderMenuFeatures,O as EditableTable,k as EditableWithValidation,b as MultipleSelection,y as SingleSelection,E as WithColumnConfigDialog,u as WithColumnDefinitions,f as WithContextMenu,C as WithCustomColumn,S as WithCustomRenderers,j as WithDefaultColumnPinning,h as WithDefaultSorting,m as WithObjectSet,v as WithRowClickHandler,N as WithSubmitEditsButton,dn as __namedExportsOrder,cn as default};

exports.id=254,exports.ids=[254],exports.modules={5205:(e,t,s)=>{Promise.resolve().then(s.bind(s,1696)),Promise.resolve().then(s.t.bind(s,4121,23))},8773:(e,t,s)=>{Promise.resolve().then(s.bind(s,4276)),Promise.resolve().then(s.t.bind(s,1389,23))},6197:()=>{},9349:()=>{},4765:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,6821,23)),Promise.resolve().then(s.t.bind(s,3477,23)),Promise.resolve().then(s.t.bind(s,1325,23)),Promise.resolve().then(s.t.bind(s,4140,23)),Promise.resolve().then(s.t.bind(s,4404,23)),Promise.resolve().then(s.t.bind(s,9936,23)),Promise.resolve().then(s.t.bind(s,6839,23))},3325:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,3945,23)),Promise.resolve().then(s.t.bind(s,9009,23)),Promise.resolve().then(s.t.bind(s,9561,23)),Promise.resolve().then(s.t.bind(s,7864,23)),Promise.resolve().then(s.t.bind(s,408,23)),Promise.resolve().then(s.t.bind(s,5836,23)),Promise.resolve().then(s.t.bind(s,619,23))},4276:(e,t,s)=>{"use strict";s.d(t,{default:()=>u});var r=s(358),o=s(5562),n=s(8413),i=s(4553),a=s(1389),c=s.n(a),l=s(304),d=s(3075);let m=[{name:"Home",href:"/dashboard",icon:o.A},{name:"Invoices",href:"/dashboard/invoices",icon:n.A},{name:"Customers",href:"/dashboard/customers",icon:i.A}];function u(){let e=(0,l.usePathname)();return(0,r.jsx)(r.Fragment,{children:m.map(t=>{let s=t.icon;return(0,r.jsxs)(c(),{href:t.href,className:(0,d.A)("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",{"bg-sky-100 text-blue-600":e===t.href}),children:[(0,r.jsx)(s,{className:"w-6"}),(0,r.jsx)("p",{className:"hidden md:block",children:t.name})]},t.name)})})}},6960:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m,experimental_ppr:()=>d});var r=s(3538),o=s(4121),n=s.n(o),i=s(1696),a=s(6828),c=s(1438);function l(){return(0,r.jsxs)("div",{className:"flex h-full flex-col px-3 py-4 md:px-2",children:[(0,r.jsx)(n(),{className:"mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40",href:"/",children:(0,r.jsx)("div",{className:"w-32 text-white md:w-40",children:(0,r.jsx)(a.A,{})})}),(0,r.jsxs)("div",{className:"flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2",children:[(0,r.jsx)(i.default,{}),(0,r.jsx)("div",{className:"hidden h-auto w-full grow rounded-md bg-gray-50 md:block"}),(0,r.jsx)("form",{children:(0,r.jsxs)("button",{className:"flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",children:[(0,r.jsx)(c.A,{className:"w-6"}),(0,r.jsx)("div",{className:"hidden md:block",children:"Sign Out"})]})})]})]})}let d=!0;function m({children:e}){return(0,r.jsxs)("div",{className:"flex h-screen flex-col md:flex-row md:overflow-hidden",children:[(0,r.jsx)("div",{className:"w-full flex-none md:w-64",children:(0,r.jsx)(l,{})}),(0,r.jsx)("div",{className:"flex-grow p-6 md:overflow-y-auto md:p-12",children:e})]})}},5979:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(3538);s(2722);var o=s(8649),n=s.n(o);function i({children:e}){return(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)("body",{className:`${n().className} antialiased`,children:e})})}},8647:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.d(t,{MX:()=>l,Pt:()=>d,Q5:()=>a,gn:()=>m,nr:()=>i,zP:()=>c});var o=s(6995),n=s(1810);let e=await o.db.connect();async function i(){try{console.log("Fetching revenue data..."),await new Promise(e=>setTimeout(e,3e3));let t=await e.sql`SELECT * FROM revenue`;return console.log("Data fetch completed after 3 seconds."),t.rows}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch revenue data.")}}async function a(){try{return(await e.sql`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`).rows.map(e=>({...e,amount:(0,n.vv)(e.amount)}))}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch the latest invoices.")}}async function c(){try{let t=e.sql`SELECT COUNT(*) FROM invoices`,s=e.sql`SELECT COUNT(*) FROM customers`,r=e.sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`,o=await Promise.all([t,s,r]),i=Number(o[0].rows[0].count??"0"),a=Number(o[1].rows[0].count??"0"),c=(0,n.vv)(o[2].rows[0].paid??"0"),l=(0,n.vv)(o[2].rows[0].pending??"0");return{numberOfCustomers:a,numberOfInvoices:i,totalPaidInvoices:c,totalPendingInvoices:l}}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch card data.")}}async function l(t,s){try{return(await e.sql`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${t}%`} OR
        customers.email ILIKE ${`%${t}%`} OR
        invoices.amount::text ILIKE ${`%${t}%`} OR
        invoices.date::text ILIKE ${`%${t}%`} OR
        invoices.status ILIKE ${`%${t}%`}
      ORDER BY invoices.date DESC
      LIMIT ${6} OFFSET ${(s-1)*6}
    `).rows}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoices.")}}async function d(t){try{let s=await e.sql`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${t}%`} OR
      customers.email ILIKE ${`%${t}%`} OR
      invoices.amount::text ILIKE ${`%${t}%`} OR
      invoices.date::text ILIKE ${`%${t}%`} OR
      invoices.status ILIKE ${`%${t}%`}
  `;return Math.ceil(Number(s.rows[0].count)/6)}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch total number of invoices.")}}async function m(){try{return(await e.sql`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `).rows}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch all customers.")}}r()}catch(e){r(e)}},1)},1810:(e,t,s)=>{"use strict";s.d(t,{YL:()=>n,c6:()=>o,vv:()=>r});let r=e=>(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"}),o=(e,t="en-US")=>{let s=new Date(e);return new Intl.DateTimeFormat(t,{day:"numeric",month:"short",year:"numeric"}).format(s)},n=e=>{let t=[],s=1e3*Math.ceil(Math.max(...e.map(e=>e.revenue))/1e3);for(let e=s;e>=0;e-=1e3)t.push(`$${e/1e3}K`);return{yAxisLabels:t,topLabel:s}}},6828:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var r=s(3538),o=s(545),n=s(3758),i=s.n(n);function a(){return(0,r.jsxs)("div",{className:`${i().className} flex flex-row items-center leading-none text-white`,children:[(0,r.jsx)(o.A,{className:"h-12 w-12 rotate-[15deg]"}),(0,r.jsx)("p",{className:"text-[44px]",children:"Acme"})]})}},1696:(e,t,s)=>{"use strict";s.d(t,{default:()=>r});let r=(0,s(9570).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/strk/Sites/nextjs-dashboard/app/ui/dashboard/nav-links.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/strk/Sites/nextjs-dashboard/app/ui/dashboard/nav-links.tsx","default")},2722:()=>{}};
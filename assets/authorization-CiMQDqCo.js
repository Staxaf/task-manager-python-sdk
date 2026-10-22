import{t as e}from"./jsx-runtime-DiK4U9sA.js";import{n as t}from"./lib-BabpNGtX.js";var n=e(),r=`Per the OpenAPI document (sdk/openapi.yaml) and the generated Python SDK, endpoints do not require authorization.`,i=[{depth:2,text:`Overview`,id:`overview`},{depth:2,text:`Using the Python client`,id:`using-the-python-client`},{depth:2,text:`Error responses (from OpenAPI)`,id:`error-responses-from-openapi`}],a={title:`Authorization`,lastModifiedTime:`2026-10-22T13:25:58.000Z`},o=`pages/authorization.mdx`;function s(e){let r={code:`code`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:`overview`,children:`Overview`}),`
`,(0,n.jsxs)(r.p,{children:[`Per the OpenAPI document (`,(0,n.jsx)(r.code,{inline:`true`,children:`sdk/openapi.yaml`}),`) and the generated Python SDK, `,(0,n.jsx)(r.strong,{children:`endpoints do not require authorization`}),`.`]}),`
`,(0,n.jsxs)(r.p,{children:[`There are no `,(0,n.jsx)(r.code,{inline:`true`,children:`security`}),` requirements on operations and no `,(0,n.jsx)(r.code,{inline:`true`,children:`securitySchemes`}),` defined in the specification. You can call the API and use the Python client without API keys, Bearer tokens, or other credentials.`]}),`
`,(0,n.jsx)(r.h2,{id:`using-the-python-client`,children:`Using the Python client`}),`
`,(0,n.jsx)(r.p,{children:`No auth configuration is needed:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`language-python shiki shiki-themes github-light github-dark`,inline:`false`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,children:[(0,n.jsxs)(r.span,{className:`line`,children:[(0,n.jsx)(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`import`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` acme_api`})]}),`
`,(0,n.jsx)(r.span,{className:`line`}),`
`,(0,n.jsxs)(r.span,{className:`line`,children:[(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`configuration `}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` acme_api.Configuration(`})]}),`
`,(0,n.jsxs)(r.span,{className:`line`,children:[(0,n.jsx)(r.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`    host`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"http://localhost:3000"`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`})}),`
`,(0,n.jsx)(r.span,{className:`line`}),`
`,(0,n.jsxs)(r.span,{className:`line`,children:[(0,n.jsx)(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`with`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` acme_api.ApiClient(configuration) `}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`as`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` api_client:`})]}),`
`,(0,n.jsxs)(r.span,{className:`line`,children:[(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    api `}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` acme_api.ProjectsApi(api_client)`})]}),`
`,(0,n.jsxs)(r.span,{className:`line`,children:[(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    projects `}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` api.list_projects_projects_get()`})]})]})})}),`
`,(0,n.jsx)(r.h2,{id:`error-responses-from-openapi`,children:`Error responses (from OpenAPI)`}),`





















`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Status`}),(0,n.jsx)(r.th,{children:`Meaning`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`404`})}),(0,n.jsx)(r.td,{children:`User, project, task, comment, or related FK target not found`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`409`})}),(0,n.jsx)(r.td,{children:`Conflict (duplicate user email)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`422`})}),(0,n.jsx)(r.td,{children:`Request validation failed (body / path / query)`})]})]})]}),`
`,(0,n.jsx)(r.p,{children:`These are validation and resource errors, not authentication failures.`})]})}function c(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}export{o as __filepath,c as default,r as excerpt,a as frontmatter,i as tableOfContents};
//# sourceMappingURL=authorization-CiMQDqCo.js.map
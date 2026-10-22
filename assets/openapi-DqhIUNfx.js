const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./createServer-C0M2aHxB.js","./rolldown-runtime-CNC7AqOf.js","./preload-helper-HclGiUj8.js","./slugify-bXvLWs_E.js","./constants-DezTRlnT.js","./OasProvider-qvCGE944.js","./react-C57LBNjW.js","./joinUrl-cBKii6Ct.js","./dist-CIY70iDv.js","./jsx-runtime-DiK4U9sA.js","./cn-4jUIYOBc.js","./components-wjFQqiwe.js","./OperationList-iDmMHLe5.js","./Heading-D4oDNXt3.js","./ViewportAnchorContext-CSz7lchN.js","./createLucideIcon-1u2rI85o.js","./DropdownMenu-EBVN1Foh.js","./dist-DZfWRZgM.js","./Button-D0YJgTV9.js","./dist-DzSpbsRm.js","./dist-Sf3SxwBE.js","./dist-DQGrPUfW2.js","./lib-Cf81p4Va.js","./schemas-BubvuIXE.js","./utils-D2u0kSpI.js","./useQuery-B7YtUOLW.js","./PlaygroundDialog-CECLeomY.js","./react-nprogress.esm-Di-ee1me.js","./dist-UtbjK60W.js","./copy-DMQDtwbT.js","./chevron-down-B6TqmFrK.js","./Select-D2qotq_2.js","./dist-BDV4X8Wh.js","./Dialog-CKz_NFSF.js","./Input-B-ZNMKKc.js","./dist-CWY-WHw5.js","./eye-N0uoVt0U.js","./shield-check-DvXK0jnV.js","./Alert-DEyxW1iD.js","./lock-DW1bjuuC.js","./log-out-HyepfHDl.js","./securityCredentialsStore-BfYI-3CK.js","./Popover-DsdLQ5Ok.js","./Markdown-DCOtY1ft.js","./lib-BabpNGtX.js","./lib-CE19foDD.js","./shiki-DZmfbuc-.js","./shiki-constants-Cbz7E3qi.js","./useHighlighter-BK66dtbU.js","./Typography-B5tosptE.js","./dist-B2NKqqb2.js","./Tooltip-D7sf5MmW.js","./useCopyToClipboard-B3uS_AW_.js","./Collapsible-CoAzBCHM.js","./state-nMMKr-Jq.js","./Card-Bpmph1wp.js","./SyntaxHighlight-DRrjsvWz.js","./CodeBlock-BL-uOsT5.js","./Pagination-B6JKHvGp.js","./sanitizeMarkdownForMetatag-DeGTFUbD.js","./Callout-fo2K2sx8.js","./Badge-xFBITINz.js","./InlineCode-CRZG2XZV.js","./SchemaView-BVYBCc44.js","./Item-DJ1W5jMM.js","./Separator-B-7HAXpe.js","./useApiIdentitySelection-6VzBV5Vx.js","./ApiHeader-A3vIsvzf.js","./AiAssistantMenuItems-Dz-kKP2l.js","./dist-BE1gYRrZ.js","./useWarmupSchema-m2PCYAc9.js","./SchemaList-BtEHzQ0r.js","./Toc-BgSYdvzX.js","./AnchorLink-C8K_7Nmh.js","./es-DgAtWTG-.js","./InputGroup-C_aefuVw.js","./SchemaInfo-Cjj-WCQt.js","./sidebarStore-CEeYj1H3.js","./McpCatalog-CfgG8mpZ.js","./PlaygroundDialog-QPHSZWHH.js"])))=>i.map(i=>d[i]);
import{a as e}from"./rolldown-runtime-CNC7AqOf.js";import{t}from"./react-C57LBNjW.js";import{G as n,H as r,L as i,g as a,n as o,t as s,u as c}from"./joinUrl-cBKii6Ct.js";import{t as l}from"./components-wjFQqiwe.js";import{t as u}from"./preload-helper-HclGiUj8.js";import{t as d}from"./jsx-runtime-DiK4U9sA.js";import{t as f}from"./createLucideIcon-1u2rI85o.js";import{t as p}from"./Button-D0YJgTV9.js";import{t as m}from"./invariant-Btg-HG37.js";var h={name:`circle-play`,size:24,node:[[`path`,{d:`M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z`,key:`kmsa83`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]],aliases:[`play-circle`]};h.node;var g=f(h),_,v={},y=e=>{if(e.errors?.[0])throw new m(e.errors[0].message,{developerHint:"Check your configuration value `apis.type` and `apis.input` in the Zudoku config."})},b=class{config;constructor(e){e.schemaImports&&Object.assign(v,e.schemaImports),this.config=e}#e=async()=>(_||=u(()=>import(`./createServer-C0M2aHxB.js`).then(e=>e.createServer({...this.config,schemaImports:v})),__vite__mapDeps([0,1,2,3,4]),import.meta.url),_);#t=async e=>this.config.server?fetch(this.config.server,e):(await this.#e()).fetch(`http://localhost/graphql`,e);fetch=async(e,t)=>{let n=e.match(/query (\w+)/)?.[1],r=await this.#t({method:`POST`,body:JSON.stringify({query:e,variables:t,operationName:n}),headers:{"Content-Type":`application/json`}});if(!r.ok)throw Error(`Network response was not ok`);let i=await r.json();return y(i),i.data}},x=e(t(),1),S=d(),C=(0,x.createContext)(void 0),w=({children:e,client:t})=>(0,S.jsx)(C.Provider,{value:t,children:e}),T=(e,t,...[n])=>({queryFn:()=>e.fetch(t,n),queryKey:[t.toString().replace(/\s+/g,` `).trim(),n]}),E=(e,...[t])=>{let n=(0,x.use)(C);if(n===void 0)throw Error(`useGraphQL must be used within a GraphQLProvider`);return T(n,e,...t===void 0?[]:[t])},D=class extends String{__apiType;value;__meta__;constructor(e,t){super(e),this.value=e,this.__meta__=t}toString(){return this.value}},O=new D(`
    fragment OperationsFragment on OperationItem {
  slug
  summary
  method
  description
  operationId
  contentTypes
  path
  deprecated
  extensions
  servers {
    url
    name
    description
    variables {
      name
      default
      enum
      description
    }
  }
  parameters {
    name
    in
    description
    required
    schema
    style
    explode
    allowReserved
    examples {
      name
      description
      externalValue
      value
      summary
    }
  }
  security {
    schemes {
      scopes
      scheme {
        name
        type
        description
        in
        paramName
        scheme
        bearerFormat
        openIdConnectUrl
        flows {
          implicit {
            authorizationUrl
            scopes {
              name
              description
            }
          }
          password {
            tokenUrl
            scopes {
              name
              description
            }
          }
          clientCredentials {
            tokenUrl
            scopes {
              name
              description
            }
          }
          authorizationCode {
            authorizationUrl
            tokenUrl
            scopes {
              name
              description
            }
          }
        }
      }
    }
  }
  requestBody {
    content {
      mediaType
      encoding {
        name
      }
      examples {
        name
        description
        externalValue
        value
        summary
      }
      schema
    }
    description
    required
  }
  responses {
    statusCode
    links
    description
    content {
      examples {
        name
        description
        externalValue
        value
        summary
      }
      mediaType
      encoding {
        name
      }
      schema
    }
  }
}
    `,{fragmentName:`OperationsFragment`}),k={"\n  query ServersQuery($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      url\n      servers {\n        url\n        name\n        description\n        variables {\n          name\n          default\n          enum\n          description\n        }\n      }\n    }\n  }\n":new D(`
    query ServersQuery($input: JSON!, $type: SchemaType!) {
  schema(input: $input, type: $type) {
    url
    servers {
      url
      name
      description
      variables {
        name
        default
        enum
        description
      }
    }
  }
}
    `),"\n  query GetMcpCatalog($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      title\n      description\n      tags {\n        name\n        slug\n        operations {\n          slug\n          summary\n          description\n          operationId\n          path\n          extensions\n          servers {\n            url\n            variables {\n              name\n              default\n              enum\n            }\n          }\n        }\n      }\n    }\n  }\n":new D(`
    query GetMcpCatalog($input: JSON!, $type: SchemaType!) {
  schema(input: $input, type: $type) {
    title
    description
    tags {
      name
      slug
      operations {
        slug
        summary
        description
        operationId
        path
        extensions
        servers {
          url
          variables {
            name
            default
            enum
          }
        }
      }
    }
  }
}
    `),"\n  fragment OperationsFragment on OperationItem {\n    slug\n    summary\n    method\n    description\n    operationId\n    contentTypes\n    path\n    deprecated\n    extensions\n    servers {\n      url\n      name\n      description\n      variables {\n        name\n        default\n        enum\n        description\n      }\n    }\n    parameters {\n      name\n      in\n      description\n      required\n      schema\n      style\n      explode\n      allowReserved\n      examples {\n        name\n        description\n        externalValue\n        value\n        summary\n      }\n    }\n    security {\n      schemes {\n        scopes\n        scheme {\n          name\n          type\n          description\n          in\n          paramName\n          scheme\n          bearerFormat\n          openIdConnectUrl\n          flows {\n            implicit {\n              authorizationUrl\n              scopes {\n                name\n                description\n              }\n            }\n            password {\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n            clientCredentials {\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n            authorizationCode {\n              authorizationUrl\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n          }\n        }\n      }\n    }\n    requestBody {\n      content {\n        mediaType\n        encoding {\n          name\n        }\n        examples {\n          name\n          description\n          externalValue\n          value\n          summary\n        }\n        schema\n      }\n      description\n      required\n    }\n    responses {\n      statusCode\n      links\n      description\n      content {\n        examples {\n          name\n          description\n          externalValue\n          value\n          summary\n        }\n        mediaType\n        encoding {\n          name\n        }\n        schema\n      }\n    }\n  }\n":O,"\n  query OperationsForTag(\n    $input: JSON!\n    $type: SchemaType!\n    $tag: String\n    $untagged: Boolean\n  ) {\n    schema(input: $input, type: $type) {\n      servers {\n        url\n        name\n        description\n        variables {\n          name\n          default\n          enum\n          description\n        }\n      }\n      description\n      summary\n      title\n      url\n      version\n      tag(slug: $tag, untagged: $untagged) {\n        name\n        description\n        operations {\n          slug\n          ...OperationsFragment\n        }\n        extensions\n        next {\n          name\n          slug\n          extensions\n        }\n        prev {\n          name\n          slug\n          extensions\n        }\n      }\n    }\n  }\n":new D(`
    query OperationsForTag($input: JSON!, $type: SchemaType!, $tag: String, $untagged: Boolean) {
  schema(input: $input, type: $type) {
    servers {
      url
      name
      description
      variables {
        name
        default
        enum
        description
      }
    }
    description
    summary
    title
    url
    version
    tag(slug: $tag, untagged: $untagged) {
      name
      description
      operations {
        slug
        ...OperationsFragment
      }
      extensions
      next {
        name
        slug
        extensions
      }
      prev {
        name
        slug
        extensions
      }
    }
  }
}
    fragment OperationsFragment on OperationItem {
  slug
  summary
  method
  description
  operationId
  contentTypes
  path
  deprecated
  extensions
  servers {
    url
    name
    description
    variables {
      name
      default
      enum
      description
    }
  }
  parameters {
    name
    in
    description
    required
    schema
    style
    explode
    allowReserved
    examples {
      name
      description
      externalValue
      value
      summary
    }
  }
  security {
    schemes {
      scopes
      scheme {
        name
        type
        description
        in
        paramName
        scheme
        bearerFormat
        openIdConnectUrl
        flows {
          implicit {
            authorizationUrl
            scopes {
              name
              description
            }
          }
          password {
            tokenUrl
            scopes {
              name
              description
            }
          }
          clientCredentials {
            tokenUrl
            scopes {
              name
              description
            }
          }
          authorizationCode {
            authorizationUrl
            tokenUrl
            scopes {
              name
              description
            }
          }
        }
      }
    }
  }
  requestBody {
    content {
      mediaType
      encoding {
        name
      }
      examples {
        name
        description
        externalValue
        value
        summary
      }
      schema
    }
    description
    required
  }
  responses {
    statusCode
    links
    description
    content {
      examples {
        name
        description
        externalValue
        value
        summary
      }
      mediaType
      encoding {
        name
      }
      schema
    }
  }
}`),"\n  query SchemaInfo($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      servers {\n        url\n        description\n      }\n      license {\n        name\n        url\n        identifier\n      }\n      termsOfService\n      externalDocs {\n        description\n        url\n      }\n      contact {\n        name\n        url\n        email\n      }\n      description\n      summary\n      title\n      url\n      version\n      tags {\n        name\n        description\n        extensions\n      }\n      components {\n        securitySchemes {\n          name\n          type\n          description\n          in\n          paramName\n          scheme\n          bearerFormat\n          openIdConnectUrl\n          flows {\n            implicit {\n              authorizationUrl\n              scopes {\n                name\n                description\n              }\n            }\n            password {\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n            clientCredentials {\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n            authorizationCode {\n              authorizationUrl\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n          }\n        }\n      }\n      webhooks {\n        name\n        method\n        summary\n        description\n      }\n    }\n  }\n":new D(`
    query SchemaInfo($input: JSON!, $type: SchemaType!) {
  schema(input: $input, type: $type) {
    servers {
      url
      description
    }
    license {
      name
      url
      identifier
    }
    termsOfService
    externalDocs {
      description
      url
    }
    contact {
      name
      url
      email
    }
    description
    summary
    title
    url
    version
    tags {
      name
      description
      extensions
    }
    components {
      securitySchemes {
        name
        type
        description
        in
        paramName
        scheme
        bearerFormat
        openIdConnectUrl
        flows {
          implicit {
            authorizationUrl
            scopes {
              name
              description
            }
          }
          password {
            tokenUrl
            scopes {
              name
              description
            }
          }
          clientCredentials {
            tokenUrl
            scopes {
              name
              description
            }
          }
          authorizationCode {
            authorizationUrl
            tokenUrl
            scopes {
              name
              description
            }
          }
        }
      }
    }
    webhooks {
      name
      method
      summary
      description
    }
  }
}
    `),"\n  query GetSchemas($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      title\n      description\n      summary\n      components {\n        schemas {\n          name\n          schema\n          extensions\n        }\n      }\n    }\n  }\n":new D(`
    query GetSchemas($input: JSON!, $type: SchemaType!) {
  schema(input: $input, type: $type) {
    title
    description
    summary
    components {
      schemas {
        name
        schema
        extensions
      }
    }
  }
}
    `),"\n  query getServerQuery($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      url\n      servers {\n        url\n        name\n        description\n        variables {\n          name\n          default\n          enum\n          description\n        }\n      }\n    }\n  }\n":new D(`
    query getServerQuery($input: JSON!, $type: SchemaType!) {
  schema(input: $input, type: $type) {
    url
    servers {
      url
      name
      description
      variables {
        name
        default
        enum
        description
      }
    }
  }
}
    `),"\n  query GetNavigationOperations($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      extensions\n      description\n      tags {\n        slug\n        name\n        extensions\n        operations {\n          summary\n          slug\n          method\n          operationId\n          path\n          isMcpServer\n        }\n      }\n      components {\n        schemas {\n          __typename\n        }\n      }\n    }\n  }\n":new D(`
    query GetNavigationOperations($input: JSON!, $type: SchemaType!) {
  schema(input: $input, type: $type) {
    extensions
    description
    tags {
      slug
      name
      extensions
      operations {
        summary
        slug
        method
        operationId
        path
        isMcpServer
      }
    }
    components {
      schemas {
        __typename
      }
    }
  }
}
    `),"\n  query SchemaWarmup($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      openapi\n    }\n  }\n":new D(`
    query SchemaWarmup($input: JSON!, $type: SchemaType!) {
  schema(input: $input, type: $type) {
    openapi
  }
}
    `)};function A(e){return k[e]??{}}var j=({tagCategories:e,tagGroups:t,expandAllTags:n})=>{let r=new Set,i=t.flatMap(t=>{let i=e.get(t.name),a=i?.type===`category`?i:void 0;a&&r.add(t.name);let o=t.tags.flatMap(n=>{if(n===t.name)return[];let i=e.get(n);return i?(r.add(n),i):[]});return!a&&o.length===0?[]:{...a,type:`category`,label:a?.label??t.name,items:[...a?.items??[],...o],collapsible:a?.collapsible??!0,collapsed:a?.collapsed??!n}}),a=Array.from(e.entries()).filter(([e])=>!r.has(e)).map(([,e])=>e);return[...i,...a]},M={get:`green`,post:`blue`,put:`yellow`,delete:`red`,patch:`purple`,options:`gray`,head:`gray`},N=({label:e,path:t,operations:n,collapsible:r,collapsed:i})=>({type:`category`,label:e,link:{type:`doc`,path:t,file:t,label:e},collapsible:r,collapsed:i,items:n.map(e=>({type:`link`,label:e.summary??e.path,to:`${t}#${e.slug}`,badge:e.isMcpServer?{label:`MCP`,color:`indigo`,invert:!0}:{label:e.method,color:M[e.method.toLowerCase()],invert:!0}}))}),P=(0,x.createContext)(void 0),F=P.Provider,I=()=>{let e=(0,x.useContext)(P);if(!e)throw Error(`useOasConfig must be used within a OasConfigProvider`);return e.config},L=e=>({path:e.routePath,async lazy(){let{OasProvider:t}=await u(async()=>{let{OasProvider:e}=await import(`./OasProvider-qvCGE944.js`);return{OasProvider:e}},__vite__mapDeps([5,1,6,7,8,9,10,11]),import.meta.url);return{element:(0,S.jsx)(t,{basePath:e.basePath,version:e.version,client:e.client,config:e.config})}},children:e.routes}),R=({path:e,tag:t,untagged:n})=>({path:e,async lazy(){let{OperationList:e}=await u(async()=>{let{OperationList:e}=await import(`./OperationList-iDmMHLe5.js`);return{OperationList:e}},__vite__mapDeps([12,1,6,13,9,8,10,14,15,16,17,18,19,20,21,7,11,22,2,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,3,64,65,4,66,67,68,69,70]),import.meta.url);return{element:(0,S.jsx)(e,{tag:t,untagged:n})}}}),z=({render:e,path:t})=>{let{type:n,input:r}=I(),{tag:s}=a(),u=c(),{data:{schema:d}}=o(E(J,{type:n,input:r})),f=d.tags.at(0);return!s&&f?.slug?(0,S.jsx)(l,{to:{pathname:i(t,{tag:f.slug}),search:u.search}}):s&&d.tags.some(e=>e.slug===s)?e(s):null},B=({path:e})=>({path:e,async lazy(){let{OperationList:t}=await u(async()=>{let{OperationList:e}=await import(`./OperationList-iDmMHLe5.js`);return{OperationList:e}},__vite__mapDeps([12,1,6,13,9,8,10,14,15,16,17,18,19,20,21,7,11,22,2,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,3,64,65,4,66,67,68,69,70]),import.meta.url);return{element:(0,S.jsx)(z,{path:e,render:e=>(0,S.jsx)(t,{tag:e})})}}}),V=({basePath:e,hasUntaggedOperations:t=!0})=>[...t?[R({path:s(e,Y),untagged:!0})]:[],{path:s(e,`~schemas`),lazy:async()=>{let{SchemaList:e}=await u(async()=>{let{SchemaList:e}=await import(`./SchemaList-BtEHzQ0r.js`);return{SchemaList:e}},__vite__mapDeps([71,13,1,6,9,8,10,14,15,16,17,18,19,20,21,7,63,22,11,2,28,24,25,30,31,29,32,36,61,43,44,45,46,47,48,49,62,3,64,65,4,72,73,34,51,74,75,53,67,52,68]),import.meta.url);return{element:(0,S.jsx)(e,{})}}}],H=({versionPath:e,tagPages:t,hasUntaggedOperations:r=!0,showInfoPage:i})=>{let a=t.at(0)??(r?`~endpoints`:void 0),o=a?s(e,a):void 0;return[i===!1?o?{index:!0,loader:()=>n(o)}:R({path:e}):{index:!0,path:e,lazy:async()=>{let{SchemaInfo:e}=await u(async()=>{let{SchemaInfo:e}=await import(`./SchemaInfo-Cjj-WCQt.js`);return{SchemaInfo:e}},__vite__mapDeps([76,13,1,6,9,8,10,14,15,16,17,18,19,20,21,7,11,22,2,61,37,39,42,43,24,25,44,45,46,47,48,49,65,77,3,67,29,30,31,32,52,68,55,64,70]),import.meta.url);return{element:(0,S.jsx)(e,{showInfoPage:i,redirectTo:o})}}},...t.map(t=>R({path:s(e,t),tag:t})),...V({basePath:e,hasUntaggedOperations:r})]},U=e=>e.type===`raw`||!Array.isArray(e.input)?{versions:[],versionMap:{}}:{versions:e.input.map(e=>e.path),versionMap:Object.fromEntries(e.input.map(e=>[e.path,{label:e.label??e.path,downloadUrl:e.downloadUrl,tagPages:e.tagPages}]))},W=(e,t)=>t&&(!e.tagPages||e.tagPages.includes(t))?s(e.path,t):e.path,G=({basePath:e,config:t,client:n})=>{if(t.documentType===`mcp-catalog`)return[L({basePath:e,routePath:e,routes:[{index:!0,async lazy(){let{McpCatalog:e}=await u(async()=>{let{McpCatalog:e}=await import(`./McpCatalog-CfgG8mpZ.js`);return{McpCatalog:e}},__vite__mapDeps([78,1,6,13,9,8,10,14,15,16,17,18,19,20,21,7,22,11,2,59,29,60,33,34,35,61,39,49,62,55,56,24,25,46,45,47,48,57,52,31,30,32,43,44,75,67,68,54]),import.meta.url);return{element:(0,S.jsx)(e,{})}}}],client:n,config:t})];let r=t.tagPages,{versions:i}=U(t),a=Array.isArray(t.input)?t.input:void 0;return(i.length>1?[void 0,...i]:[void 0]).map(i=>{let o=s(e,i),c=i?a?.find(e=>e.path===i):a?.[0],l=c?.hasUntaggedOperations??!0,u=c?.tagPages??r;return L({basePath:e,version:i,routePath:o,routes:u?H({versionPath:o,tagPages:u,hasUntaggedOperations:l,showInfoPage:t.options?.showInfoPage}):[B({path:`${o}/:tag?`}),...V({basePath:o,hasUntaggedOperations:l})],client:n,config:t})})},K=(e,t)=>e===!0||e!==!1&&t,q=(0,x.lazy)(()=>u(()=>import(`./PlaygroundDialog-QPHSZWHH.js`).then(e=>({default:e.PlaygroundDialog})),__vite__mapDeps([79,26,1,6,17,9,18,8,10,24,7,25,27,28,15,29,30,19,31,20,21,32,33,34,35,36,37,16,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,2]),import.meta.url)),J=A(`
  query GetNavigationOperations($input: JSON!, $type: SchemaType!) {
    schema(input: $input, type: $type) {
      extensions
      description
      tags {
        slug
        name
        extensions
        operations {
          summary
          slug
          method
          operationId
          path
          isMcpServer
        }
      }
      components {
        schemas {
          __typename
        }
      }
    }
  }
`),Y=`~endpoints`,X=e=>{let t=s(e.path),n=new b(e);return{getHead:()=>{if(e.type===`url`&&!e.skipPreload)return(Array.isArray(e.input)?e.input.map(e=>e.input):[e.input]).map(e=>(0,S.jsx)(`link`,{href:e,rel:`preload`,as:`fetch`,crossOrigin:`anonymous`},e));if(e.server)return(0,S.jsx)(`link`,{rel:`preconnect`,href:e.server})},getMdxComponents:()=>({OpenPlaygroundButton:({server:e,method:t=`get`,url:n=`/`,children:r,...i})=>{if(!e)throw Error(`Server is required`);return(0,S.jsx)(x.Suspense,{children:(0,S.jsx)(q,{url:n,method:t,server:e,...i,children:(0,S.jsx)(p,{className:`gap-2 items-center`,variant:`outline`,children:r??(0,S.jsxs)(S.Fragment,{children:[`Open in Playground`,(0,S.jsx)(g,{size:16,"aria-hidden":`true`})]})})})})}}),getNavigation:async(i,a)=>{if(e.documentType===`mcp-catalog`||!r({path:t,end:!1},i))return[];try{let{versions:o}=U(e),c=o.find(e=>r({path:s(t,e),end:!1},i)),l=c??o.at(0),{type:u}=e,d=Array.isArray(e.input)?e.input.find(e=>e.path===l)?.input??e.input[0]?.input:e.input,f=T(n,J,{type:u,input:d}),p=await a.queryClient.ensureQueryData(f),m=j({tagCategories:new Map(p.schema.tags.filter(e=>e.name&&e.operations.length>0).map(n=>{if(!n.name)throw Error(`Tag ${n.slug} has no name`);let r=s(t,c,n.slug),i=n.extensions?.[`x-zudoku-collapsed`]??!e.options?.expandAllTags,a=n.extensions?.[`x-zudoku-collapsible`]??!0;return[n.name,N({label:n.extensions?.[`x-displayName`]??n.name,path:r,operations:n.operations,collapsed:i,collapsible:a})]})),tagGroups:p.schema.extensions?.[`x-tagGroups`]??[],expandAllTags:e.options?.expandAllTags});K(e.options?.showInfoPage,!!p.schema.description)&&m.unshift({type:`link`,to:s(t,c),label:`Information`});let h=p.schema.tags.find(e=>!e.name)?.operations;return h&&h.length>0&&m.push(N({label:m.length===0?`Endpoints`:`Other endpoints`,path:s(t,c,Y),operations:h,collapsed:!e.options?.expandAllTags})),p.schema.components?.schemas?.length&&m.push({type:`link`,label:`Schemas`,to:s(t,c,`~schemas`)}),m}catch{return[]}},getRoutes:()=>G({basePath:t,config:e,client:n})}};export{U as a,A as c,W as i,E as l,X as n,F as o,K as r,I as s,Y as t,w as u};
//# sourceMappingURL=openapi-DqhIUNfx.js.map
import{r as e}from"./Heading-D4oDNXt3.js";import{n as t,u as n}from"./joinUrl-cBKii6Ct.js";import{t as r}from"./components-wjFQqiwe.js";import{t as i}from"./lib-Cf81p4Va.js";import{t as a}from"./jsx-runtime-DiK4U9sA.js";import{t as o}from"./createLucideIcon-1u2rI85o.js";import{c as s,l as c,r as l,s as u}from"./openapi-DqhIUNfx.js";import{n as d,t as f}from"./Badge-xFBITINz.js";import{n as p,t as m}from"./shield-check-DvXK0jnV.js";import{t as h}from"./lock-DW1bjuuC.js";import{t as g}from"./Button-D0YJgTV9.js";import{t as _}from"./cn-4jUIYOBc.js";import{n as v,r as y,t as b}from"./Popover-DsdLQ5Ok.js";import{t as x}from"./Markdown-DCOtY1ft.js";import{t as S}from"./Separator-B-7HAXpe.js";import{t as C}from"./sidebarStore-CEeYj1H3.js";import{t as w}from"./slugify-bXvLWs_E.js";import{n as T,t as E}from"./ApiHeader-A3vIsvzf.js";import{n as D,t as O}from"./Card-Bpmph1wp.js";import{i as k,n as A,r as j,s as M,t as N}from"./Item-DJ1W5jMM.js";import{t as P}from"./useWarmupSchema-m2PCYAc9.js";var F={name:`globe`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]};F.node;var I=o(F),L={name:`mail`,size:24,node:[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]};L.node;var R=o(L),z={name:`tag`,size:24,node:[[`path`,{d:`M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`,key:`vktsd0`}],[`circle`,{cx:`7.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`kqv944`}]]};z.node;var B=o(z),V={name:`webhook`,size:24,node:[[`path`,{d:`M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2`,key:`q3hayz`}],[`path`,{d:`m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06`,key:`1go1hn`}],[`path`,{d:`m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8`,key:`qlwsc0`}]]};V.node;var H=o(V),U=a(),W=s(`
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
`),G=({href:e,icon:t,children:n})=>(0,U.jsxs)(`a`,{href:e,className:`inline-flex items-center gap-2 opacity-65 hover:opacity-100 [&_svg]:shrink-0 [&_svg]:size-3.5`,target:`_blank`,rel:`noopener noreferrer`,children:[t,(0,U.jsx)(`span`,{className:`truncate grow-0`,children:n})]}),K=({schema:e})=>{let t=!!(e.license||e.termsOfService||e.externalDocs),n=!!(e.contact?.name||e.contact?.email||e.contact?.url),r=e.servers.length>0;return(0,U.jsxs)(D,{className:`flex flex-col gap-3 text-sm`,children:[t&&(0,U.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[e.license&&(0,U.jsx)(G,{href:e.license.url??void 0,children:e.license.name}),e.termsOfService&&(0,U.jsx)(G,{href:e.termsOfService,children:`Terms of Service`}),e.externalDocs&&(0,U.jsx)(G,{href:e.externalDocs.url,children:e.externalDocs.description??`Documentation`})]}),t&&(n||r)&&(0,U.jsx)(S,{}),n&&(0,U.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,U.jsx)(`span`,{className:`text-xs text-muted-foreground font-medium uppercase tracking-wide`,children:`Contact`}),e.contact?.name&&(0,U.jsx)(`span`,{children:e.contact.name}),e.contact?.email&&(0,U.jsx)(G,{href:`mailto:${e.contact.email}`,icon:(0,U.jsx)(R,{}),children:e.contact.email}),e.contact?.url&&(0,U.jsx)(G,{href:e.contact.url,icon:(0,U.jsx)(I,{}),children:e.contact.url})]}),n&&r&&(0,U.jsx)(S,{}),r&&(0,U.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,U.jsx)(`span`,{className:`text-xs text-muted-foreground font-medium uppercase tracking-wide`,children:`Servers`}),e.servers.map(e=>(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`code`,{className:`text-xs select-all break-all`,children:e.url}),e.description&&(0,U.jsx)(`p`,{className:`text-muted-foreground text-xs`,children:e.description})]},e.url))]})]})},q=e=>{switch(e){case`apiKey`:return(0,U.jsx)(p,{size:14});case`http`:return(0,U.jsx)(h,{size:14});case`oauth2`:return(0,U.jsx)(m,{size:14});case`openIdConnect`:return(0,U.jsx)(m,{size:14});case`mutualTLS`:return(0,U.jsx)(h,{size:14})}},J=e=>{switch(e.type){case`apiKey`:return`API Key in ${e.in??`header`} (${e.paramName??`key`})`;case`http`:return e.scheme===`bearer`?`Bearer token${e.bearerFormat?` (${e.bearerFormat})`:``}`:`HTTP ${e.scheme??`authentication`}`;case`oauth2`:return`OAuth 2.0 authorization`;case`openIdConnect`:return`OpenID Connect`;case`mutualTLS`:return`Mutual TLS authentication`}},Y=({showInfoPage:a,redirectTo:o}={})=>{let{input:s,type:p,options:m}=u(),S=n(),{data:{schema:D}}=t(c(W,{input:s,type:p})),{title:F,description:I}=D,L=C(e=>e.isCollapsed);if(P(),!l(a,!!I)&&o)return(0,U.jsx)(r,{to:{pathname:o,search:S.search},replace:!0});let R=!!(D.contact?.name||D.contact?.email||D.contact?.url||D.servers.length>0||D.license||D.termsOfService||D.externalDocs),z=D.tags.flatMap(({name:e,description:t,extensions:n})=>e?{name:e,description:t,extensions:n}:[]);return(0,U.jsxs)(`div`,{className:`pt-(--padding-content-top)`,"data-pagefind-filter":`section:openapi`,"data-pagefind-meta":`section:openapi`,children:[(0,U.jsx)(T,{name:`category`,children:F}),(0,U.jsxs)(e,{children:[F&&(0,U.jsx)(`title`,{children:F}),I&&(0,U.jsx)(`meta`,{name:`description`,content:I})]}),(0,U.jsxs)(`div`,{className:`mb-8 flex flex-col gap-4`,children:[(0,U.jsx)(E,{heading:F}),(0,U.jsxs)(`div`,{className:`grid grid-cols-1 xl:grid-cols-[1fr_minmax(250px,380px)] gap-8`,children:[R&&(0,U.jsx)(`div`,{className:`xl:hidden sticky top-(--top-nav-height) lg:top-(--scroll-padding) z-10 row-start-1 col-start-1 justify-self-end self-start`,children:(0,U.jsxs)(b,{children:[(0,U.jsx)(y,{asChild:!0,children:(0,U.jsx)(g,{variant:`outline`,size:`icon`,className:`shadow-sm rounded-full`,children:(0,U.jsx)(d,{})})}),(0,U.jsx)(v,{align:`end`,className:`xl:hidden w-full max-w-full md:max-w-sm`,children:(0,U.jsx)(K,{schema:D})})]})}),(0,U.jsxs)(`div`,{className:`flex flex-col gap-6 row-start-1 col-start-1`,children:[D.summary&&(0,U.jsx)(`p`,{className:`text-lg text-muted-foreground`,children:D.summary}),D.description&&(0,U.jsx)(x,{className:_(`prose-img:max-w-prose prose-sm max-w-full`,L?`lg:max-w-4xl`:`lg:max-w-2xl`),content:D.description}),z.length>1&&(0,U.jsxs)(`div`,{children:[(0,U.jsxs)(`div`,{className:`flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground mb-4`,children:[(0,U.jsx)(B,{size:14}),`Tags`]}),(0,U.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:z.map(e=>(0,U.jsx)(N,{variant:`outline`,asChild:!0,children:(0,U.jsx)(i,{to:w(e.name),children:(0,U.jsxs)(j,{children:[(0,U.jsx)(M,{children:e.extensions?.[`x-displayName`]??e.name}),e.description&&(0,U.jsx)(k,{asChild:!0,children:(0,U.jsx)(x,{components:{p:({children:e})=>e,a:e=>(0,U.jsx)(`span`,{...e})},content:e.description,className:`prose-sm text-pretty`})})]})})},e.name))})]}),!m?.disableSecurity&&(D.components?.securitySchemes?.length??0)>0&&(0,U.jsxs)(`div`,{children:[(0,U.jsxs)(`div`,{className:`flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground mb-4`,children:[(0,U.jsx)(h,{size:14}),`Security Schemes`]}),(0,U.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:D.components?.securitySchemes?.map(e=>(0,U.jsxs)(N,{variant:`outline`,children:[(0,U.jsxs)(j,{children:[(0,U.jsxs)(M,{className:`flex items-center gap-2`,children:[q(e.type),e.name]}),(0,U.jsx)(k,{asChild:!0,children:(0,U.jsx)(x,{content:e.description??J(e),className:`prose-sm text-pretty`,components:{p:({children:e})=>e,a:e=>(0,U.jsx)(`span`,{...e})}})})]}),(0,U.jsx)(A,{children:(0,U.jsx)(f,{variant:`muted`,className:`text-[10px] font-mono`,children:e.type})})]},e.name))})]}),D.webhooks.length>0&&(0,U.jsxs)(`div`,{children:[(0,U.jsxs)(`div`,{className:`flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground mb-4`,children:[(0,U.jsx)(H,{size:14}),`Webhooks`]}),(0,U.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:D.webhooks.map(e=>(0,U.jsxs)(N,{variant:`outline`,children:[(0,U.jsxs)(j,{children:[(0,U.jsx)(M,{children:e.name}),(e.summary||e.description)&&(0,U.jsx)(k,{children:e.summary??e.description})]}),(0,U.jsx)(A,{children:(0,U.jsx)(f,{variant:`muted`,className:`text-[10px] font-mono`,children:e.method})})]},`${e.name}-${e.method}`))})]})]}),R&&(0,U.jsx)(`div`,{className:`hidden xl:block`,children:(0,U.jsx)(O,{className:`sticky top-(--scroll-padding)`,children:(0,U.jsx)(K,{schema:D})})})]})]})]})};export{Y as SchemaInfo};
//# sourceMappingURL=SchemaInfo-Cjj-WCQt.js.map
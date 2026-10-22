# Authorization

## Overview

Per the OpenAPI document (`sdk/openapi.yaml`) and the generated Python SDK, **endpoints do not require authorization**.

There are no `security` requirements on operations and no `securitySchemes` defined in the specification. You can call the API and use the Python client without API keys, Bearer tokens, or other credentials.

## Using the Python client

No auth configuration is needed:

```python
import acme_api

configuration = acme_api.Configuration(
    host="http://localhost:3000",
)

with acme_api.ApiClient(configuration) as api_client:
    api = acme_api.ProjectsApi(api_client)
    projects = api.list_projects_projects_get()
```

## Error responses (from OpenAPI)

| Status | Meaning |
|--------|---------|
| **404** | User, project, task, comment, or related FK target not found |
| **409** | Conflict (duplicate user email) |
| **422** | Request validation failed (body / path / query) |

These are validation and resource errors, not authentication failures.

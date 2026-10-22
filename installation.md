# Installation

Install and run the **Task Management API** (OpenAPI `1.0`) and its generated Python client.

## API server

From the repository root:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 3000
```

The server listens on `http://localhost:3000`. Interactive OpenAPI/Swagger UI is at
[http://localhost:3000/api/docs](http://localhost:3000/api/docs).

## Python SDK (`acme_api`)

The client package under `sdk/python` is generated from
[`sdk/openapi.yaml`](../openapi.yaml). Requires **Python 3.10+**.

### Local install

```bash
cd sdk/python
python -m pip install .
```

Then import the package:

```python
import acme_api
```

### Setuptools

```bash
python setup.py install --user
```

### Configure the client

```python
import acme_api

configuration = acme_api.Configuration(
    host="http://localhost:3000",
)

with acme_api.ApiClient(configuration) as api_client:
    users_api = acme_api.UsersApi(api_client)
    users = users_api.list_users_users_get()
```

## OpenAPI document

The canonical specification used by this documentation site:

- File: `sdk/openapi.yaml`
- Title: **Task Management API**
- Version: **1.0**

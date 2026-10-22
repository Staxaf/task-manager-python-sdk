# acme_api.ProjectsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_project_projects_post**](ProjectsApi.md#create_project_projects_post) | **POST** /projects | Create Project
[**create_project_task_projects_project_id_tasks_post**](ProjectsApi.md#create_project_task_projects_project_id_tasks_post) | **POST** /projects/{project_id}/tasks | Create Project Task
[**delete_project_projects_project_id_delete**](ProjectsApi.md#delete_project_projects_project_id_delete) | **DELETE** /projects/{project_id} | Delete Project
[**get_project_projects_project_id_get**](ProjectsApi.md#get_project_projects_project_id_get) | **GET** /projects/{project_id} | Get Project
[**list_project_tasks_projects_project_id_tasks_get**](ProjectsApi.md#list_project_tasks_projects_project_id_tasks_get) | **GET** /projects/{project_id}/tasks | List Project Tasks
[**list_projects_projects_get**](ProjectsApi.md#list_projects_projects_get) | **GET** /projects | List Projects
[**update_project_projects_project_id_patch**](ProjectsApi.md#update_project_projects_project_id_patch) | **PATCH** /projects/{project_id} | Update Project


# **create_project_projects_post**
> ProjectRead create_project_projects_post(create_project)

Create Project

Create a project.

### Example


```python
import acme_api
from acme_api.models.create_project import CreateProject
from acme_api.models.project_read import ProjectRead
from acme_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = acme_api.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with acme_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = acme_api.ProjectsApi(api_client)
    create_project = acme_api.CreateProject() # CreateProject | 

    try:
        # Create Project
        api_response = api_instance.create_project_projects_post(create_project)
        print("The response of ProjectsApi->create_project_projects_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->create_project_projects_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_project** | [**CreateProject**](CreateProject.md)|  | 

### Return type

[**ProjectRead**](ProjectRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Request validation failed (invalid body fields, bad enum value, malformed email, empty required string, etc.). |  -  |
**404** | Resource not found. Returned when a path id or related FK (owner_id, assignee_id, author_id, project_id, task_id) does not match an existing row. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_project_task_projects_project_id_tasks_post**
> TaskRead create_project_task_projects_project_id_tasks_post(project_id, create_task)

Create Project Task

Create a task in a project.

### Example


```python
import acme_api
from acme_api.models.create_task import CreateTask
from acme_api.models.task_read import TaskRead
from acme_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = acme_api.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with acme_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = acme_api.ProjectsApi(api_client)
    project_id = 'project_id_example' # str | 
    create_task = acme_api.CreateTask() # CreateTask | 

    try:
        # Create Project Task
        api_response = api_instance.create_project_task_projects_project_id_tasks_post(project_id, create_task)
        print("The response of ProjectsApi->create_project_task_projects_project_id_tasks_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->create_project_task_projects_project_id_tasks_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 
 **create_task** | [**CreateTask**](CreateTask.md)|  | 

### Return type

[**TaskRead**](TaskRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Request validation failed (invalid body fields, bad enum value, malformed email, empty required string, etc.). |  -  |
**404** | Resource not found. Returned when a path id or related FK (owner_id, assignee_id, author_id, project_id, task_id) does not match an existing row. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_project_projects_project_id_delete**
> delete_project_projects_project_id_delete(project_id)

Delete Project

Delete a project and its tasks.

### Example


```python
import acme_api
from acme_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = acme_api.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with acme_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = acme_api.ProjectsApi(api_client)
    project_id = 'project_id_example' # str | 

    try:
        # Delete Project
        api_instance.delete_project_projects_project_id_delete(project_id)
    except Exception as e:
        print("Exception when calling ProjectsApi->delete_project_projects_project_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Request validation failed (invalid body fields, bad enum value, malformed email, empty required string, etc.). |  -  |
**404** | Resource not found. Returned when a path id or related FK (owner_id, assignee_id, author_id, project_id, task_id) does not match an existing row. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_project_projects_project_id_get**
> ProjectRead get_project_projects_project_id_get(project_id)

Get Project

Retrieve a project by ID.

### Example


```python
import acme_api
from acme_api.models.project_read import ProjectRead
from acme_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = acme_api.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with acme_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = acme_api.ProjectsApi(api_client)
    project_id = 'project_id_example' # str | 

    try:
        # Get Project
        api_response = api_instance.get_project_projects_project_id_get(project_id)
        print("The response of ProjectsApi->get_project_projects_project_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->get_project_projects_project_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 

### Return type

[**ProjectRead**](ProjectRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Request validation failed (invalid body fields, bad enum value, malformed email, empty required string, etc.). |  -  |
**404** | Resource not found. Returned when a path id or related FK (owner_id, assignee_id, author_id, project_id, task_id) does not match an existing row. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_project_tasks_projects_project_id_tasks_get**
> List[TaskRead] list_project_tasks_projects_project_id_tasks_get(project_id)

List Project Tasks

Retrieve all tasks belonging to a project.

### Example


```python
import acme_api
from acme_api.models.task_read import TaskRead
from acme_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = acme_api.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with acme_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = acme_api.ProjectsApi(api_client)
    project_id = 'project_id_example' # str | 

    try:
        # List Project Tasks
        api_response = api_instance.list_project_tasks_projects_project_id_tasks_get(project_id)
        print("The response of ProjectsApi->list_project_tasks_projects_project_id_tasks_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->list_project_tasks_projects_project_id_tasks_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 

### Return type

[**List[TaskRead]**](TaskRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Request validation failed (invalid body fields, bad enum value, malformed email, empty required string, etc.). |  -  |
**404** | Resource not found. Returned when a path id or related FK (owner_id, assignee_id, author_id, project_id, task_id) does not match an existing row. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_projects_projects_get**
> List[ProjectRead] list_projects_projects_get()

List Projects

Retrieve all projects.

### Example


```python
import acme_api
from acme_api.models.project_read import ProjectRead
from acme_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = acme_api.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with acme_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = acme_api.ProjectsApi(api_client)

    try:
        # List Projects
        api_response = api_instance.list_projects_projects_get()
        print("The response of ProjectsApi->list_projects_projects_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->list_projects_projects_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ProjectRead]**](ProjectRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_project_projects_project_id_patch**
> ProjectRead update_project_projects_project_id_patch(project_id, update_project)

Update Project

Update a project.

### Example


```python
import acme_api
from acme_api.models.project_read import ProjectRead
from acme_api.models.update_project import UpdateProject
from acme_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = acme_api.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with acme_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = acme_api.ProjectsApi(api_client)
    project_id = 'project_id_example' # str | 
    update_project = acme_api.UpdateProject() # UpdateProject | 

    try:
        # Update Project
        api_response = api_instance.update_project_projects_project_id_patch(project_id, update_project)
        print("The response of ProjectsApi->update_project_projects_project_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->update_project_projects_project_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 
 **update_project** | [**UpdateProject**](UpdateProject.md)|  | 

### Return type

[**ProjectRead**](ProjectRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Request validation failed (invalid body fields, bad enum value, malformed email, empty required string, etc.). |  -  |
**404** | Resource not found. Returned when a path id or related FK (owner_id, assignee_id, author_id, project_id, task_id) does not match an existing row. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


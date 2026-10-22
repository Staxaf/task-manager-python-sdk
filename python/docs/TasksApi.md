# acme_api.TasksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_task_comment_tasks_task_id_comments_post**](TasksApi.md#create_task_comment_tasks_task_id_comments_post) | **POST** /tasks/{task_id}/comments | Create Task Comment
[**delete_task_tasks_task_id_delete**](TasksApi.md#delete_task_tasks_task_id_delete) | **DELETE** /tasks/{task_id} | Delete Task
[**get_task_tasks_task_id_get**](TasksApi.md#get_task_tasks_task_id_get) | **GET** /tasks/{task_id} | Get Task
[**list_task_comments_tasks_task_id_comments_get**](TasksApi.md#list_task_comments_tasks_task_id_comments_get) | **GET** /tasks/{task_id}/comments | List Task Comments
[**list_tasks_tasks_get**](TasksApi.md#list_tasks_tasks_get) | **GET** /tasks | List Tasks
[**update_task_tasks_task_id_patch**](TasksApi.md#update_task_tasks_task_id_patch) | **PATCH** /tasks/{task_id} | Update Task


# **create_task_comment_tasks_task_id_comments_post**
> CommentRead create_task_comment_tasks_task_id_comments_post(task_id, create_comment)

Create Task Comment

Create a comment on a task.

### Example


```python
import acme_api
from acme_api.models.comment_read import CommentRead
from acme_api.models.create_comment import CreateComment
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
    api_instance = acme_api.TasksApi(api_client)
    task_id = 'task_id_example' # str | 
    create_comment = acme_api.CreateComment() # CreateComment | 

    try:
        # Create Task Comment
        api_response = api_instance.create_task_comment_tasks_task_id_comments_post(task_id, create_comment)
        print("The response of TasksApi->create_task_comment_tasks_task_id_comments_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->create_task_comment_tasks_task_id_comments_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**|  | 
 **create_comment** | [**CreateComment**](CreateComment.md)|  | 

### Return type

[**CommentRead**](CommentRead.md)

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

# **delete_task_tasks_task_id_delete**
> delete_task_tasks_task_id_delete(task_id)

Delete Task

Delete a task.

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
    api_instance = acme_api.TasksApi(api_client)
    task_id = 'task_id_example' # str | 

    try:
        # Delete Task
        api_instance.delete_task_tasks_task_id_delete(task_id)
    except Exception as e:
        print("Exception when calling TasksApi->delete_task_tasks_task_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**|  | 

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

# **get_task_tasks_task_id_get**
> TaskRead get_task_tasks_task_id_get(task_id)

Get Task

Retrieve a task by ID.

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
    api_instance = acme_api.TasksApi(api_client)
    task_id = 'task_id_example' # str | 

    try:
        # Get Task
        api_response = api_instance.get_task_tasks_task_id_get(task_id)
        print("The response of TasksApi->get_task_tasks_task_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->get_task_tasks_task_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**|  | 

### Return type

[**TaskRead**](TaskRead.md)

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

# **list_task_comments_tasks_task_id_comments_get**
> List[CommentRead] list_task_comments_tasks_task_id_comments_get(task_id)

List Task Comments

Retrieve all comments belonging to a task.

### Example


```python
import acme_api
from acme_api.models.comment_read import CommentRead
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
    api_instance = acme_api.TasksApi(api_client)
    task_id = 'task_id_example' # str | 

    try:
        # List Task Comments
        api_response = api_instance.list_task_comments_tasks_task_id_comments_get(task_id)
        print("The response of TasksApi->list_task_comments_tasks_task_id_comments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->list_task_comments_tasks_task_id_comments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**|  | 

### Return type

[**List[CommentRead]**](CommentRead.md)

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

# **list_tasks_tasks_get**
> List[TaskRead] list_tasks_tasks_get()

List Tasks

Retrieve all tasks.

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
    api_instance = acme_api.TasksApi(api_client)

    try:
        # List Tasks
        api_response = api_instance.list_tasks_tasks_get()
        print("The response of TasksApi->list_tasks_tasks_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->list_tasks_tasks_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_task_tasks_task_id_patch**
> TaskRead update_task_tasks_task_id_patch(task_id, update_task)

Update Task

Update a task.

### Example


```python
import acme_api
from acme_api.models.task_read import TaskRead
from acme_api.models.update_task import UpdateTask
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
    api_instance = acme_api.TasksApi(api_client)
    task_id = 'task_id_example' # str | 
    update_task = acme_api.UpdateTask() # UpdateTask | 

    try:
        # Update Task
        api_response = api_instance.update_task_tasks_task_id_patch(task_id, update_task)
        print("The response of TasksApi->update_task_tasks_task_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->update_task_tasks_task_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**|  | 
 **update_task** | [**UpdateTask**](UpdateTask.md)|  | 

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
**200** | Successful Response |  -  |
**422** | Request validation failed (invalid body fields, bad enum value, malformed email, empty required string, etc.). |  -  |
**404** | Resource not found. Returned when a path id or related FK (owner_id, assignee_id, author_id, project_id, task_id) does not match an existing row. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


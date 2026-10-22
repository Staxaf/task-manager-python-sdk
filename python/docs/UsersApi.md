# acme_api.UsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_user_users_post**](UsersApi.md#create_user_users_post) | **POST** /users | Create User
[**delete_user_users_user_id_delete**](UsersApi.md#delete_user_users_user_id_delete) | **DELETE** /users/{user_id} | Delete User
[**get_user_users_user_id_get**](UsersApi.md#get_user_users_user_id_get) | **GET** /users/{user_id} | Get User
[**list_user_comments_users_user_id_comments_get**](UsersApi.md#list_user_comments_users_user_id_comments_get) | **GET** /users/{user_id}/comments | List User Comments
[**list_user_projects_users_user_id_projects_get**](UsersApi.md#list_user_projects_users_user_id_projects_get) | **GET** /users/{user_id}/projects | List User Projects
[**list_user_tasks_users_user_id_tasks_get**](UsersApi.md#list_user_tasks_users_user_id_tasks_get) | **GET** /users/{user_id}/tasks | List User Tasks
[**list_users_users_get**](UsersApi.md#list_users_users_get) | **GET** /users | List Users
[**update_user_users_user_id_patch**](UsersApi.md#update_user_users_user_id_patch) | **PATCH** /users/{user_id} | Update User


# **create_user_users_post**
> UserRead create_user_users_post(create_user)

Create User

Create a user.

### Example


```python
import acme_api
from acme_api.models.create_user import CreateUser
from acme_api.models.user_read import UserRead
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
    api_instance = acme_api.UsersApi(api_client)
    create_user = acme_api.CreateUser() # CreateUser | 

    try:
        # Create User
        api_response = api_instance.create_user_users_post(create_user)
        print("The response of UsersApi->create_user_users_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->create_user_users_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_user** | [**CreateUser**](CreateUser.md)|  | 

### Return type

[**UserRead**](UserRead.md)

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
**409** | Conflict — e.g. another user already has this email. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_user_users_user_id_delete**
> delete_user_users_user_id_delete(user_id)

Delete User

Delete a user.

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
    api_instance = acme_api.UsersApi(api_client)
    user_id = 'user_id_example' # str | 

    try:
        # Delete User
        api_instance.delete_user_users_user_id_delete(user_id)
    except Exception as e:
        print("Exception when calling UsersApi->delete_user_users_user_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 

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

# **get_user_users_user_id_get**
> UserRead get_user_users_user_id_get(user_id)

Get User

Retrieve a user by ID.

### Example


```python
import acme_api
from acme_api.models.user_read import UserRead
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
    api_instance = acme_api.UsersApi(api_client)
    user_id = 'user_id_example' # str | 

    try:
        # Get User
        api_response = api_instance.get_user_users_user_id_get(user_id)
        print("The response of UsersApi->get_user_users_user_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_user_users_user_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 

### Return type

[**UserRead**](UserRead.md)

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

# **list_user_comments_users_user_id_comments_get**
> List[CommentRead] list_user_comments_users_user_id_comments_get(user_id)

List User Comments

Retrieve comments authored by a user.

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
    api_instance = acme_api.UsersApi(api_client)
    user_id = 'user_id_example' # str | 

    try:
        # List User Comments
        api_response = api_instance.list_user_comments_users_user_id_comments_get(user_id)
        print("The response of UsersApi->list_user_comments_users_user_id_comments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->list_user_comments_users_user_id_comments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 

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

# **list_user_projects_users_user_id_projects_get**
> List[ProjectRead] list_user_projects_users_user_id_projects_get(user_id)

List User Projects

Retrieve projects owned by a user.

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
    api_instance = acme_api.UsersApi(api_client)
    user_id = 'user_id_example' # str | 

    try:
        # List User Projects
        api_response = api_instance.list_user_projects_users_user_id_projects_get(user_id)
        print("The response of UsersApi->list_user_projects_users_user_id_projects_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->list_user_projects_users_user_id_projects_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 

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
**422** | Request validation failed (invalid body fields, bad enum value, malformed email, empty required string, etc.). |  -  |
**404** | Resource not found. Returned when a path id or related FK (owner_id, assignee_id, author_id, project_id, task_id) does not match an existing row. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_user_tasks_users_user_id_tasks_get**
> List[TaskRead] list_user_tasks_users_user_id_tasks_get(user_id)

List User Tasks

Retrieve tasks assigned to a user.

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
    api_instance = acme_api.UsersApi(api_client)
    user_id = 'user_id_example' # str | 

    try:
        # List User Tasks
        api_response = api_instance.list_user_tasks_users_user_id_tasks_get(user_id)
        print("The response of UsersApi->list_user_tasks_users_user_id_tasks_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->list_user_tasks_users_user_id_tasks_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 

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

# **list_users_users_get**
> List[UserRead] list_users_users_get()

List Users

Retrieve all users.

### Example


```python
import acme_api
from acme_api.models.user_read import UserRead
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
    api_instance = acme_api.UsersApi(api_client)

    try:
        # List Users
        api_response = api_instance.list_users_users_get()
        print("The response of UsersApi->list_users_users_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->list_users_users_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[UserRead]**](UserRead.md)

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

# **update_user_users_user_id_patch**
> UserRead update_user_users_user_id_patch(user_id, update_user)

Update User

Update a user.

### Example


```python
import acme_api
from acme_api.models.update_user import UpdateUser
from acme_api.models.user_read import UserRead
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
    api_instance = acme_api.UsersApi(api_client)
    user_id = 'user_id_example' # str | 
    update_user = acme_api.UpdateUser() # UpdateUser | 

    try:
        # Update User
        api_response = api_instance.update_user_users_user_id_patch(user_id, update_user)
        print("The response of UsersApi->update_user_users_user_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->update_user_users_user_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 
 **update_user** | [**UpdateUser**](UpdateUser.md)|  | 

### Return type

[**UserRead**](UserRead.md)

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
**409** | Conflict — e.g. another user already has this email. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


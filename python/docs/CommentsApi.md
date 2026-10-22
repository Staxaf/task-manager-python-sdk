# acme_api.CommentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_comment_comments_comment_id_delete**](CommentsApi.md#delete_comment_comments_comment_id_delete) | **DELETE** /comments/{comment_id} | Delete Comment
[**get_comment_comments_comment_id_get**](CommentsApi.md#get_comment_comments_comment_id_get) | **GET** /comments/{comment_id} | Get Comment
[**list_comments_comments_get**](CommentsApi.md#list_comments_comments_get) | **GET** /comments | List Comments
[**update_comment_comments_comment_id_patch**](CommentsApi.md#update_comment_comments_comment_id_patch) | **PATCH** /comments/{comment_id} | Update Comment


# **delete_comment_comments_comment_id_delete**
> delete_comment_comments_comment_id_delete(comment_id)

Delete Comment

Delete a comment.

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
    api_instance = acme_api.CommentsApi(api_client)
    comment_id = 'comment_id_example' # str | 

    try:
        # Delete Comment
        api_instance.delete_comment_comments_comment_id_delete(comment_id)
    except Exception as e:
        print("Exception when calling CommentsApi->delete_comment_comments_comment_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **comment_id** | **str**|  | 

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

# **get_comment_comments_comment_id_get**
> CommentRead get_comment_comments_comment_id_get(comment_id)

Get Comment

Retrieve a comment by ID.

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
    api_instance = acme_api.CommentsApi(api_client)
    comment_id = 'comment_id_example' # str | 

    try:
        # Get Comment
        api_response = api_instance.get_comment_comments_comment_id_get(comment_id)
        print("The response of CommentsApi->get_comment_comments_comment_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->get_comment_comments_comment_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **comment_id** | **str**|  | 

### Return type

[**CommentRead**](CommentRead.md)

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

# **list_comments_comments_get**
> List[CommentRead] list_comments_comments_get()

List Comments

Retrieve all comments.

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
    api_instance = acme_api.CommentsApi(api_client)

    try:
        # List Comments
        api_response = api_instance.list_comments_comments_get()
        print("The response of CommentsApi->list_comments_comments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->list_comments_comments_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_comment_comments_comment_id_patch**
> CommentRead update_comment_comments_comment_id_patch(comment_id, update_comment)

Update Comment

Update a comment.

### Example


```python
import acme_api
from acme_api.models.comment_read import CommentRead
from acme_api.models.update_comment import UpdateComment
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
    api_instance = acme_api.CommentsApi(api_client)
    comment_id = 'comment_id_example' # str | 
    update_comment = acme_api.UpdateComment() # UpdateComment | 

    try:
        # Update Comment
        api_response = api_instance.update_comment_comments_comment_id_patch(comment_id, update_comment)
        print("The response of CommentsApi->update_comment_comments_comment_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->update_comment_comments_comment_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **comment_id** | **str**|  | 
 **update_comment** | [**UpdateComment**](UpdateComment.md)|  | 

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
**200** | Successful Response |  -  |
**422** | Request validation failed (invalid body fields, bad enum value, malformed email, empty required string, etc.). |  -  |
**404** | Resource not found. Returned when a path id or related FK (owner_id, assignee_id, author_id, project_id, task_id) does not match an existing row. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


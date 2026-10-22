# CommentRead

Comment response model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**body** | **str** |  | 
**author_id** | **str** |  | [optional] 
**task_id** | **str** |  | 
**created_at** | **datetime** |  | 

## Example

```python
from acme_api.models.comment_read import CommentRead

# TODO update the JSON string below
json = "{}"
# create an instance of CommentRead from a JSON string
comment_read_instance = CommentRead.from_json(json)
# print the JSON string representation of the object
print(CommentRead.to_json())

# convert the object into a dict
comment_read_dict = comment_read_instance.to_dict()
# create an instance of CommentRead from a dict
comment_read_from_dict = CommentRead.from_dict(comment_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



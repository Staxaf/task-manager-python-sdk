# CreateComment

Payload for creating a comment under a task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** |  | 
**author_id** | **str** |  | [optional] 

## Example

```python
from acme_api.models.create_comment import CreateComment

# TODO update the JSON string below
json = "{}"
# create an instance of CreateComment from a JSON string
create_comment_instance = CreateComment.from_json(json)
# print the JSON string representation of the object
print(CreateComment.to_json())

# convert the object into a dict
create_comment_dict = create_comment_instance.to_dict()
# create an instance of CreateComment from a dict
create_comment_from_dict = CreateComment.from_dict(create_comment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ProjectRead

Project response model (optionally includes nested tasks).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**name** | **str** |  | 
**description** | **str** |  | 
**status** | [**ProjectStatus**](ProjectStatus.md) |  | 
**owner_id** | **str** |  | [optional] 
**created_at** | **datetime** |  | 
**tasks** | [**List[TaskRead]**](TaskRead.md) |  | [optional] [default to []]

## Example

```python
from acme_api.models.project_read import ProjectRead

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectRead from a JSON string
project_read_instance = ProjectRead.from_json(json)
# print the JSON string representation of the object
print(ProjectRead.to_json())

# convert the object into a dict
project_read_dict = project_read_instance.to_dict()
# create an instance of ProjectRead from a dict
project_read_from_dict = ProjectRead.from_dict(project_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



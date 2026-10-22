# CreateTask

Payload for creating a task under a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | 
**description** | **str** |  | [optional] [default to '']
**status** | [**TaskStatus**](TaskStatus.md) |  | [optional] 
**priority** | [**TaskPriority**](TaskPriority.md) |  | [optional] 
**due_date** | **datetime** |  | [optional] 
**assignee_id** | **str** |  | [optional] 

## Example

```python
from acme_api.models.create_task import CreateTask

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTask from a JSON string
create_task_instance = CreateTask.from_json(json)
# print the JSON string representation of the object
print(CreateTask.to_json())

# convert the object into a dict
create_task_dict = create_task_instance.to_dict()
# create an instance of CreateTask from a dict
create_task_from_dict = CreateTask.from_dict(create_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



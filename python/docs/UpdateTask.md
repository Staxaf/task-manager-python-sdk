# UpdateTask

Payload for partially updating a task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**status** | [**TaskStatus**](TaskStatus.md) |  | [optional] 
**priority** | [**TaskPriority**](TaskPriority.md) |  | [optional] 
**project_id** | **str** |  | [optional] 
**due_date** | **datetime** |  | [optional] 
**assignee_id** | **str** |  | [optional] 

## Example

```python
from acme_api.models.update_task import UpdateTask

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTask from a JSON string
update_task_instance = UpdateTask.from_json(json)
# print the JSON string representation of the object
print(UpdateTask.to_json())

# convert the object into a dict
update_task_dict = update_task_instance.to_dict()
# create an instance of UpdateTask from a dict
update_task_from_dict = UpdateTask.from_dict(update_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



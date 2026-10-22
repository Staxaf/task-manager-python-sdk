# TaskRead

Task response model (optionally includes nested comments).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**title** | **str** |  | 
**description** | **str** |  | 
**status** | [**TaskStatus**](TaskStatus.md) |  | 
**priority** | [**TaskPriority**](TaskPriority.md) |  | 
**project_id** | **str** |  | 
**assignee_id** | **str** |  | [optional] 
**created_at** | **datetime** |  | 
**due_date** | **datetime** |  | [optional] 
**comments** | [**List[CommentRead]**](CommentRead.md) |  | [optional] [default to []]

## Example

```python
from acme_api.models.task_read import TaskRead

# TODO update the JSON string below
json = "{}"
# create an instance of TaskRead from a JSON string
task_read_instance = TaskRead.from_json(json)
# print the JSON string representation of the object
print(TaskRead.to_json())

# convert the object into a dict
task_read_dict = task_read_instance.to_dict()
# create an instance of TaskRead from a dict
task_read_from_dict = TaskRead.from_dict(task_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



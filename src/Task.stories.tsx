import {Task, TaskPropsType} from "./state/Task";
import {Meta, Story} from "@storybook/react/types-6-0";
import {action} from "@storybook/addon-actions";

import React from "react";
import {TaskStatuses, TodoTaskPriorities} from "./api/todolist-api";


export default {
    title: 'Todolist/Task',
    component: Task

} as Meta;

const changeTaskStatusCallback = action('Status changed inside Task')
const changeTaskTitleCallback = action('Title changed inside Task')
const removeTaskCallback = action('Remove button inside Task clicked')

const Template: Story<TaskPropsType> = (args) => <Task {...args}/>

const baseArgs = {
    changeTaskStatusCallback,
    changeTaskTitleCallback,
    removeTaskCallback
}

export const TaskIsDoneExample = Template.bind({})
TaskIsDoneExample.args = {
    ...baseArgs,
    task: {
        id: '1', status: TaskStatuses.Completed, title: 'JS', order: 0,
        addedDate: '', priority: TodoTaskPriorities.Low, startDate: '', todoListId: 'todoListId1',
        description: '', deadline: ''
    },
    todoListId: 'todoListId1'
}

export const TaskIsNotDoneExample = Template.bind({})
TaskIsNotDoneExample.args = {
    ...baseArgs,
    task: {
        id: '2', status: TaskStatuses.New, title: 'HTML', order: 0,
        addedDate: '', priority: TodoTaskPriorities.Low, startDate: '', todoListId: 'todoListId2',
        description: '', deadline: ''
    },
    todoListId: 'todoListId1'
}
import {Task, TaskPropsType} from "./state/Task";
import {Meta, Story} from "@storybook/react/types-6-0";
import {action} from "@storybook/addon-actions";

import React from "react";




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
    task: {id: '1', isDone: true, title: 'JS'},
    todoListId: 'todoListId1'
}

export const TaskIsNotDoneExample = Template.bind({})
TaskIsNotDoneExample.args = {
    ...baseArgs,
    task: {id: '2', isDone: false, title: 'HTML'},
    todoListId: 'todoListId1'
}
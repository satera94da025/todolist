import React, {ChangeEvent, useCallback} from "react";
import {Checkbox, IconButton} from "@material-ui/core";
import EditableSpan from "../EditableSpan";
import {Delete} from "@material-ui/icons";
import {TaskType} from "../Todolist";

type TaskPropsType = {
    todoListId: string;
    changeStatus: (taskId: string, isDone: boolean, todoListId: string) => void
    removeTask: (taskId: string, todoListId: string) => void
    changeTaskTitle: (taskId: string, title: string, todoListId: string) => void
    task: TaskType
}

export const Task = React.memo ((props: TaskPropsType) => {
    const removeTask = useCallback (() => props.removeTask(props.task.id, props.todoListId),[props.removeTask,props.task.id,props.todoListId])
    const changeStatus = useCallback ((e: ChangeEvent<HTMLInputElement>) => {
        props.changeStatus(props.task.id, e.currentTarget.checked, props.todoListId)
    },[props.changeStatus,props.task.id,props.todoListId])
    const changeTaskTitle = useCallback ((title: string) => {
        props.changeTaskTitle(props.task.id, title, props.todoListId)
    },[props.changeTaskTitle,props.task.id,props.todoListId])
    return <li key={props.task.id} className={props.task.isDone ? 'is-done' : ''}>
        <Checkbox
            onChange={changeStatus}
            color={'primary'}
            checked={props.task.isDone}/>
        <EditableSpan value={props.task.title} getNewTitle={changeTaskTitle}/>
        <IconButton onClick={removeTask}>
            <Delete/>
        </IconButton>
    </li>

})

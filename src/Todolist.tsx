import React, {ChangeEvent} from 'react'
import {FilterValuesType} from "./App";
import AddItemForm from "./AddItemForm";
import EditableSpan from "./EditableSpan";
import {Button, ButtonGroup, Checkbox, IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    filter: FilterValuesType
    addTask: (title: string, todoListId: string) => void
    removeTask: (taskId: string, todoListId: string) => void
    changeFilter: (filterValue: FilterValuesType, todoListId: string) => void
    changeStatus: (taskId: string, isDone: boolean, todoListId: string) => void
    changeTaskTitle: (taskId: string, title: string, todoListId: string) => void
    changeTodoListTitle: (title: string, todoListId: string) => void
    removeTodoList: (id: string) => void
}


export function Todolist(props: PropsType) {


    const tasks = props.tasks.map(taskObj => {
        const removeTask = () => props.removeTask(taskObj.id, props.id)
        const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeStatus(taskObj.id, e.currentTarget.checked, props.id)
        }
        const changeTaskTitle = (title: string) => {
            props.changeTaskTitle(taskObj.id, title, props.id)
        }
        return <li key={taskObj.id} className={taskObj.isDone ? 'is-done' : ''}>
            <Checkbox
                onChange={changeStatus}
                color={'primary'}
                checked={taskObj.isDone}/>
            <EditableSpan value={taskObj.title} getNewTitle={changeTaskTitle}/>
            <IconButton onClick={removeTask}>
                <Delete/>
            </IconButton>
        </li>
    })
    const removeTodoList = () => props.removeTodoList(props.id)
    const onClickHandler = () => props.changeFilter('all', props.id)
    const onClickHandlerActive = () => props.changeFilter('active', props.id)
    const onClickHandlerCompleted = () => props.changeFilter('completed', props.id)
    const addTask = (title: string) => {
        props.addTask(title, props.id)
    }
    const changeTodoListTitle = (title: string) => {
        props.changeTodoListTitle(title, props.id)
    }
    return (
        <div>
            <h3>
                <EditableSpan value={props.title} getNewTitle={changeTodoListTitle}/>
                <Button onClick={removeTodoList}>
                    <Delete/>
                </Button>
            </h3>
            <AddItemForm addItem={addTask}/>
            <div>
                {tasks}
            </div>
            <div>
                <ButtonGroup size={'small'}>
                    <Button variant={props.filter === 'all' ? 'contained' : 'outlined'}
                            onClick={onClickHandler}>All</Button>
                    <Button color={'primary'} variant={props.filter === 'active' ? 'contained' : 'outlined'}
                            onClick={onClickHandlerActive}>Active
                    </Button>
                    <Button color={'secondary'} variant={props.filter === 'completed' ? 'contained' : 'outlined'}
                            onClick={onClickHandlerCompleted}>Completed
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    )
}


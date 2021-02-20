import React, {useCallback, useEffect} from 'react'

import AddItemForm from "../../../components/AddItemForm/AddItemForm";
import EditableSpan from "../../../components/EtitableSpan/EditableSpan";
import {Button, ButtonGroup} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {Task} from "./Task/Task";
import {TaskStatuses, TaskType} from "../../../api/todolist-api";
import {FilterValuesType} from "../todolists-reducer";
import {useDispatch} from "react-redux";
import {fetchTasksTC} from "../tasks-reducer";


type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    filter: FilterValuesType
    addTask: (title: string, todoListId: string) => void
    changeStatus: (taskId: string, status: TaskStatuses, todoListId: string) => void
    removeTask: (taskId: string, todoListId: string) => void
    changeTaskTitle: (taskId: string, title: string, todoListId: string) => void
    changeFilter: (filterValue: FilterValuesType, todoListId: string) => void
    changeTodoListTitle: (title: string, todoListId: string) => void
    removeTodoList: (id: string) => void
}


export const Todolist = React.memo((props: PropsType) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTasksTC(props.id))
    })

    let tasksForTodoList = props.tasks
    if (props.filter === 'active') {
        tasksForTodoList = props.tasks.filter(task => task.status === TaskStatuses.New)
    }
    if (props.filter === 'completed') {
        tasksForTodoList = props.tasks.filter(task => task.status === TaskStatuses.Completed)
    }

    const tasks = tasksForTodoList.map(taskObj => <Task todoListId={props.id} changeStatus={props.changeStatus}
                                                   removeTask={props.removeTask} changeTaskTitle={props.changeTaskTitle}
                                                   task={taskObj}
                                                   key={props.id}/>)

    const removeTodoList = useCallback(() => props.removeTodoList(props.id), [props.removeTodoList, props.id])
    const onClickHandler = useCallback(() => props.changeFilter('all', props.id), [props.changeFilter, props.id])
    const onClickHandlerActive = useCallback(() => props.changeFilter('active', props.id), [props.changeFilter, props.id])
    const onClickHandlerCompleted = useCallback(() => props.changeFilter('completed', props.id), [props.changeFilter, props.id])
    const addTask = useCallback((title: string) => {
        props.addTask(title, props.id)
    }, [props.addTask, props.id])
    const changeTodoListTitle = useCallback((title: string) => {
        props.changeTodoListTitle(title, props.id)
    }, [props.changeTodoListTitle, props.id])


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
})


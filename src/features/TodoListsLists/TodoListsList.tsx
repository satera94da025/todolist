import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {
    addTodoListTC, ChangeTodoListFilterAC,
    changeTodoListTC,
    fetchTodolistTC, FilterValuesType,
     removeTodolistTC,
    TodolistDomainType
} from "./todolists-reducer";
import {addTaskTC, removeTasksTC, TasksStateType, updateTaskTC} from "./tasks-reducer";
import {TaskStatuses} from "../../api/todolist-api";
import {Grid, Paper} from "@material-ui/core";
import AddItemForm from "../../components/AddItemForm/AddItemForm";
import {Todolist} from "./TodoList/Todolist";
import {Redirect} from "react-router-dom";




const TodoListsList: React.FC = React.memo(() => {


    let todoLists = useSelector<AppRootStateType, Array<TodolistDomainType>>(state => state.todoLists)
    let tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)
    const IsLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)

    const dispatch = useDispatch()

    useEffect(() => {
        if(!IsLoggedIn){
            return
        }
        dispatch(fetchTodolistTC())
    }, [])

    const removeTask = useCallback((Id: string, todoListId: string) => {
        dispatch(removeTasksTC(Id, todoListId))
    }, [dispatch])

    const addTask = useCallback((title: string, todolistId: string) => {
        dispatch(addTaskTC(title, todolistId))
    }, [dispatch])

    const changeStatus = useCallback((taskId: string, status: TaskStatuses, todoListId: string) => {
        dispatch(updateTaskTC(taskId, {status}, todoListId))
    }, [dispatch])

    const changeTaskTitle = useCallback((taskId: string, title: string, todoListId: string) => {
        dispatch(updateTaskTC(taskId, {title}, todoListId))
    }, [dispatch])

    const removeTodoList = useCallback((id: string) => {
        dispatch(removeTodolistTC(id))

    }, [dispatch])

    const addTodoList = useCallback((title: string) => {
        dispatch(addTodoListTC(title))
    }, [dispatch])

    const changeTodoListTitle = useCallback((title: string, todoListId: string) => {
        dispatch(changeTodoListTC(title, todoListId))
    }, [dispatch])

    const changeFilter = useCallback((filterValue: FilterValuesType, todoListId: string) => {
        dispatch(ChangeTodoListFilterAC(filterValue, todoListId))
    }, [dispatch])

    if(!IsLoggedIn){
        return  <Redirect to={'/login'}/>
    }

    return <>
        <Grid container style={{padding: '20px'}}>
            <AddItemForm addItem={addTodoList}   />
        </Grid>
        <Grid container spacing={3}>
            {
                todoLists.map(tl => {
                    let taskForTodolist = tasks[tl.id]

                    return (< Grid item key={tl.id}>
                            <Paper key={tl.id} style={{padding: '10px'}}>
                                <Todolist
                                    key={tl.id}
                                    id={tl.id}
                                    title={tl.title}
                                    entityStatus={tl.entityStatus}
                                    tasks={taskForTodolist}
                                    removeTask={removeTask}
                                    removeTodoList={removeTodoList}
                                    changeFilter={changeFilter}
                                    addTask={addTask}
                                    changeStatus={changeStatus}
                                    filter={tl.filter}
                                    changeTaskTitle={changeTaskTitle}
                                    changeTodoListTitle={changeTodoListTitle}
                                />
                            </Paper>
                        </Grid>
                    )
                })
            }
        </Grid>
    </>
})

export default TodoListsList
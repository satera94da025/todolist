import React, {useCallback} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import AddItemForm from "./AddItemForm";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Container, Grid, Paper} from "@material-ui/core";
import {
    AddTodolistAC,
    ChangeTodoListAC,
    ChangeTodoListFilterAC,
    RemoveTodolistAC,
} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/tasks-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";

export type FilterValuesType = 'all' | 'active' | 'completed'

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function App() {


    let todoLists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todoLists)
    let tasks = useSelector<AppRootStateType,TasksStateType>(state => state.tasks)

    const dispatch = useDispatch()

    const removeTask= useCallback((taskId: string, todoListId: string) =>{
        dispatch(removeTaskAC(taskId, todoListId))
    },[dispatch])

    const addTask= useCallback((title: string, todoListId: string) =>{
        dispatch(addTaskAC(title, todoListId))
    },[dispatch])

    const changeStatus= useCallback((taskId: string, isDone: boolean, todoListId: string) =>{
        dispatch(changeTaskStatusAC(taskId, isDone, todoListId))
    },[dispatch])

    const changeTaskTitle= useCallback((taskId: string, title: string, todoListId: string) =>{
        dispatch(changeTaskTitleAC(taskId, title, todoListId))
    },[dispatch])

    const removeTodoList= useCallback((id: string)=> {
        dispatch(RemoveTodolistAC(id))

    },[dispatch])

    const addTodoList = useCallback ((title: string) =>{
        let action = AddTodolistAC(title)
        dispatch(action)
    },[dispatch])

    const changeTodoListTitle = useCallback((title: string, todoListId: string) => {
        dispatch(ChangeTodoListAC(title, todoListId))},[dispatch])

    const changeFilter = useCallback((filterValue: FilterValuesType, todoListId: string) => {
        dispatch(ChangeTodoListFilterAC(filterValue, todoListId))
    },[dispatch])

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: '20px'}}>
                    <AddItemForm addItem={addTodoList}/>
                </Grid>
                <Grid container spacing={3}>
                    {
                        todoLists.map(tl => {
                            let taskForTodolist = tasks[tl.id]


                            return (< Grid item>
                                    <Paper style={{padding: '10px'}}>
                                        <Todolist
                                            key={tl.id}
                                            id={tl.id}
                                            title={tl.title}
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
            </Container>
        </div>
    )
}

export default App;

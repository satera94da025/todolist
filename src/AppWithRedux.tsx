import React, {useReducer} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from 'uuid'
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
    todoListsReducer
} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./state/tasks-reducer";

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

    const todoListId1 = v1()
    const todoListId2 = v1()


    const [todoLists, dispatchToTodoLists] = useReducer(todoListsReducer, [
        {id: todoListId1, title: 'What to learn', filter: 'all'},
        {id: todoListId2, title: 'What to buy', filter: 'all'}
    ])


    const [tasks, dispatchToTasks] = useReducer(tasksReducer, {
        [todoListId1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
        ],
        [todoListId2]: [
            {id: v1(), title: 'Beer', isDone: true},
            {id: v1(), title: 'Fish', isDone: true},
            {id: v1(), title: 'Chips', isDone: false},
        ]

    })


    function removeTask(taskId: string, todoListId: string) {
        dispatchToTasks(removeTaskAC(taskId, todoListId))
    }

    function addTask(title: string, todoListId: string) {
        dispatchToTasks(addTaskAC(title, todoListId))
    }

    function changeStatus(taskId: string, isDone: boolean, todoListId: string) {
        dispatchToTasks(changeTaskStatusAC(taskId, isDone, todoListId))
    }

    function changeTaskTitle(taskId: string, title: string, todoListId: string) {
        dispatchToTasks(changeTaskTitleAC(taskId, title, todoListId))
    }

    function removeTodoList(id: string) {
        dispatchToTodoLists(RemoveTodolistAC(id))
        dispatchToTasks(RemoveTodolistAC(id))
    }

    function addTodoList(title: string) {
        let action = AddTodolistAC(title)
        dispatchToTasks(action)
        dispatchToTodoLists(action)

    }

    function changeTodoListTitle(title: string, todoListId: string) {
        dispatchToTodoLists(ChangeTodoListAC(title, todoListId))

    }

    function changeFilter(filterValue: FilterValuesType, todoListId: string) {
        dispatchToTodoLists(ChangeTodoListFilterAC(filterValue, todoListId))
    }

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
                            if (tl.filter === 'active') {
                                taskForTodolist = tasks[tl.id].filter(task => !task.isDone)
                            }
                            if (tl.filter === 'completed') {
                                taskForTodolist = tasks[tl.id].filter(task => task.isDone)
                            }

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
    );
}

export default App;

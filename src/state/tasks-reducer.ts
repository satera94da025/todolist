import {TasksStateType} from "../AppWithRedux";
import {v1} from "uuid";
import {AddTodoListActionType, RemoveTodolistActionType} from "./todolists-reducer";
import {TaskStatuses, TodoTaskPriorities} from "../api/todolist-api";

export type removeActionType = {
    type: 'REMOVE-TASK'
    taskId: string
    todolistId: string
}

export type addTaskActionType = {
    type: 'ADD-TASK'
    title: string
    todolistId: string
}

export type changeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS'
    taskId: string
    status: TaskStatuses
    todolistId: string
}

export type changeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE'
    taskId: string
    title: string
    todolistId: string
}


const initialState: TasksStateType = {}

type ActionsType = removeActionType |
    addTaskActionType |
    changeTaskStatusActionType |
    changeTaskTitleActionType |
    AddTodoListActionType |
    RemoveTodolistActionType


export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            let copyState = {...state}
            copyState[action.todolistId] = copyState[action.todolistId].filter(task => task.id !== action.taskId)
            return copyState
        }
        case "ADD-TASK": {
            let copyState = {...state}
            let newTask = { description: '',
                title: action.title,
                status: TaskStatuses.New,
                priority: TodoTaskPriorities.Low,
                startDate: '',
                deadline: '',
                id: v1(),
                todoListId: action.todolistId,
                order: 0,
                addedDate: ''}
            copyState[action.todolistId] = [newTask, ...copyState[action.todolistId]]
            return copyState
        }
        case "CHANGE-TASK-STATUS": {
            state[action.todolistId] = state[action.todolistId]
                .map(t => t.id === action.taskId ? {...t, status: action.status} : t)
            return ({...state})
        }
        case "CHANGE-TASK-TITLE": {
            {
                state[action.todolistId] = state[action.todolistId]
                    .map(t => t.id === action.taskId ? {...t, title: action.title} : t)
                return ({...state})
            }
        }
        case "ADD-TODOLIST": {
            return {
                ...state,
                [action.todolistId]: []
            }
        }
        case "REMOVE-TODOLIST":
            let copyState = {...state}
            delete copyState[action.id]
            return copyState
        default:
            return state
    }
}


export const removeTaskAC = (taskId: string, todolistId: string): removeActionType => {
    return {type: 'REMOVE-TASK', taskId: taskId, todolistId: todolistId}
}

export const addTaskAC = (title: string, todolistId: string): addTaskActionType => {
    return {type: 'ADD-TASK', title, todolistId}
}

export const changeTaskStatusAC = (taskId: string, status: TaskStatuses, todolistId: string): changeTaskStatusActionType => {
    return {type: 'CHANGE-TASK-STATUS', taskId, status, todolistId}
}

export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string): changeTaskTitleActionType => {
    return {type: 'CHANGE-TASK-TITLE', taskId, title, todolistId}
}


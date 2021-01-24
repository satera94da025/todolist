import {FilterValuesType, TodolistType} from "../AppWithRedux";
import {v1} from "uuid";

export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}

export type AddTodoListActionType = {
    type: 'ADD-TODOLIST'
    title: string
    todolistId: string
}

export type ChangeTodoListActionType = {
    type: 'CHANGE-TODOLIST-TITLE'
    title: string
    todoListId: string
}

export type ChangeTodoListActionFilter = {
    type: 'CHANGE-TODOLIST-FILTER'
    filter: FilterValuesType
    todoListId: string
}



type ActionType =
    RemoveTodolistActionType
    | AddTodoListActionType
    | ChangeTodoListActionType
    | ChangeTodoListActionFilter

const initialState: Array<TodolistType> = []

export const todoListsReducer = (state: Array<TodolistType> = initialState, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(tl => tl.id !== action.id)
        case 'ADD-TODOLIST':
            const newTodolistId = action.todolistId
            const newTodoList: TodolistType = {
                id: newTodolistId,
                title: action.title,
                filter: 'all'
            }
            return [...state, newTodoList]
        case 'CHANGE-TODOLIST-TITLE':
            const todoList = state.find(tl => tl.id === action.todoListId)
            if (todoList) {
                todoList.title = action.title
                return [...state]
            }
            return state
        case 'CHANGE-TODOLIST-FILTER': {
            const todoList = state.find(tl => tl.id === action.todoListId)
            if (todoList) {
                todoList.filter = action.filter
                return [...state]
            }
        }
            return state
        default:
            return state
    }
}

export const RemoveTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return {type: 'REMOVE-TODOLIST', id: todolistId}
}

export const AddTodolistAC = (title: string): AddTodoListActionType => {
    return {type: 'ADD-TODOLIST', title: title, todolistId: v1()}
}
export const ChangeTodoListAC = (title: string, todoListId: string): ChangeTodoListActionType => {
    return {type: 'CHANGE-TODOLIST-TITLE', title: title, todoListId: todoListId}

}
export const ChangeTodoListFilterAC = (filter: FilterValuesType, todoListId: string): ChangeTodoListActionFilter => {
    return {type: 'CHANGE-TODOLIST-FILTER', filter: filter, todoListId: todoListId}
}
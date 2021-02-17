import {v1} from "uuid";
import {todolistAPI, TodolistType} from "../api/todolist-api";
import {Dispatch} from "redux";

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

export type SetTodoListsActionType = {
    type: 'SET-TODOLIST'
    todolist: Array<TodolistType>
}


type ActionType =
    RemoveTodolistActionType
    | AddTodoListActionType
    | ChangeTodoListActionType
    | ChangeTodoListActionFilter
    | SetTodoListsActionType

const initialState: Array<TodolistDomainType> = []
export type FilterValuesType = 'all' | 'active' | 'completed'
export type TodolistDomainType = TodolistType & {
    filter: FilterValuesType
}

export const todoListsReducer = (state: Array<TodolistDomainType> = initialState, action: ActionType): Array<TodolistDomainType> => {
    switch (action.type) {
        case 'SET-TODOLIST': {
            return action.todolist.map(tl => {
                return {
                    ...tl,
                    filter: 'all'
                }
            })
        }
        case 'REMOVE-TODOLIST':
            return state.filter(tl => tl.id !== action.id)
        case 'ADD-TODOLIST':
            return [{
                id: action.todolistId,
                title: action.title,
                filter: 'all',
                addedDate: '',
                order: 0
            }, ...state]
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

export const setTodolistAC = (todolist: Array<TodolistType>): SetTodoListsActionType => {
    return {type: 'SET-TODOLIST', todolist}
}

export const fetchTodolistTC = () => {
    return (dispatch: Dispatch) => {
        todolistAPI.getTodolist()
            .then((res) => {
                dispatch(setTodolistAC(res.data))
            })
    }
}

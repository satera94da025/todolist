import {todolistAPI, TodolistType} from "../../api/todolist-api";
import {Dispatch} from "redux";
import {RequestStatusType, setAppErrorAC, SetAppStatusAC} from "../../app/app-reducer";
import {handleServerAppError, handleServerNetworkError} from "../../utils/error-utils";

type ActionType =
    | ReturnType<typeof RemoveTodolistAC>
    | ReturnType<typeof AddTodolistAC>
    | ReturnType<typeof ChangeTodoListAC>
    | ReturnType<typeof ChangeTodoListFilterAC>
    | ReturnType<typeof setTodolistAC>
    | ReturnType<typeof SetAppStatusAC>
    | ReturnType<typeof setAppErrorAC>
    | ReturnType<typeof changeTodolistEntityStatusAC>



const initialState: Array<TodolistDomainType> = []
export type FilterValuesType = 'all' | 'active' | 'completed'
export type TodolistDomainType = TodolistType & {
    filter: FilterValuesType
    entityStatus: RequestStatusType
}

export const todoListsReducer = (state: Array<TodolistDomainType> = initialState, action: ActionType): Array<TodolistDomainType> => {
    switch (action.type) {
        case 'SET-TODOLIST':
            return action.todolist.map(tl => ({...tl, filter: 'all', entityStatus: 'idle'}))
        case 'REMOVE-TODOLIST':
            return state.filter(tl => tl.id !== action.id)
        case 'ADD-TODOLIST':
            return [{...action.todoList, filter: "all", entityStatus:  'idle'}, ...state]
        case 'CHANGE-TODOLIST-TITLE':
            return state.map(tl => tl.id === action.todoListId ? {...tl, title: action.title} : tl)
        case 'CHANGE-TODOLIST-FILTER':
            return state.map(tl => tl.id === action.todoListId ? {...tl, filter: action.filter} : tl)
        case 'CHANGE-TODOLIST-ENTITY-STATUS':
            return state.map(tl => tl.id === action.todoListId ? {...tl, entityStatus: action.entityStatus} : tl)
        default:
            return state
    }
}

export const RemoveTodolistAC = (id: string) => ({type: 'REMOVE-TODOLIST', id} as const)

export const AddTodolistAC = (todoList: TodolistType) => ({type: 'ADD-TODOLIST', todoList} as const)

export const ChangeTodoListAC = (title: string, todoListId: string) => ({
    type: 'CHANGE-TODOLIST-TITLE',
    title,
    todoListId
} as const)

export const ChangeTodoListFilterAC = (filter: FilterValuesType, todoListId: string) => ({
    type: 'CHANGE-TODOLIST-FILTER',
    filter,
    todoListId
} as const)

export const changeTodolistEntityStatusAC  = (todoListId: string, entityStatus: RequestStatusType) => ({
    type: 'CHANGE-TODOLIST-ENTITY-STATUS',
    todoListId,
    entityStatus
} as const)

export const setTodolistAC = (todolist: Array<TodolistType>) => ({type: 'SET-TODOLIST', todolist} as const)

export const fetchTodolistTC = () => (dispatch: Dispatch<ActionType>) => {
    dispatch(SetAppStatusAC('loading'))
    todolistAPI.getTodolist()
        .then((res) => {
            dispatch(setTodolistAC(res.data))
            dispatch(SetAppStatusAC('succeeded'))
        }).catch((error) => {
        handleServerNetworkError(error,dispatch)
    })
}

export const addTodoListTC = (title: string) => (dispatch: Dispatch<ActionType>) => {
    dispatch(SetAppStatusAC('loading'))
    todolistAPI.createTodoListId(title)
        .then((res) => {
            if (res.data.resultCode === 0){
                dispatch(AddTodolistAC(res.data.data.item))
                dispatch(SetAppStatusAC('succeeded'))
            } else {
                handleServerAppError(res.data,dispatch)
            }
        }).catch((error) => {
        handleServerNetworkError(error,dispatch)
    })
}

export const changeTodoListTC = (title: string, todoListId: string) => (dispatch: Dispatch<ActionType>) => {
    dispatch(SetAppStatusAC('loading'))
    todolistAPI.updateTodolist(todoListId, title)
        .then(() => {
            dispatch(ChangeTodoListAC(title, todoListId))
            dispatch(SetAppStatusAC('succeeded'))
        }).catch((error) => {
        handleServerNetworkError(error,dispatch)
    })
}


export const removeTodolistTC = (todolistId: string) =>
    (dispatch: Dispatch<ActionType>) => {
        dispatch(changeTodolistEntityStatusAC(todolistId,'loading'))
        dispatch(SetAppStatusAC('loading'))
        todolistAPI.deleteTodoList(todolistId)
            .then(() => {
                dispatch(RemoveTodolistAC(todolistId))
                dispatch(SetAppStatusAC('succeeded'))
                dispatch(changeTodolistEntityStatusAC(todolistId,'succeeded'))
            }).catch((error) => {
            handleServerNetworkError(error,dispatch)
        })

}
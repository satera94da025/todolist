import {todolistAPI, TodolistType} from "../../api/todolist-api";
import {Dispatch} from "redux";
import {SetAppStatusAC} from "../../app/app-reducer";

type ActionType =
    | ReturnType<typeof RemoveTodolistAC>
    | ReturnType<typeof AddTodolistAC>
    | ReturnType<typeof ChangeTodoListAC>
    | ReturnType<typeof ChangeTodoListFilterAC>
    | ReturnType<typeof setTodolistAC>
    | ReturnType<typeof SetAppStatusAC>

const initialState: Array<TodolistDomainType> = []
export type FilterValuesType = 'all' | 'active' | 'completed'
export type TodolistDomainType = TodolistType & {
    filter: FilterValuesType
}

export const todoListsReducer = (state: Array<TodolistDomainType> = initialState, action: ActionType): Array<TodolistDomainType> => {
    switch (action.type) {
        case 'SET-TODOLIST':
            return action.todolist.map(tl => ({...tl, filter: 'all'}))
        case 'REMOVE-TODOLIST':
            return state.filter(tl => tl.id !== action.id)
        case 'ADD-TODOLIST':
            return [{...action.todoList, filter: "all"}, ...state]
        case 'CHANGE-TODOLIST-TITLE':
            return state.map(tl => tl.id === action.todoListId ? {...tl, title: action.title} : tl)
        case 'CHANGE-TODOLIST-FILTER':
            return state.map(tl => tl.id === action.todoListId ? {...tl, filter: action.filter} : tl)
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

export const setTodolistAC = (todolist: Array<TodolistType>) => ({type: 'SET-TODOLIST', todolist} as const)

export const fetchTodolistTC = () => (dispatch: Dispatch<ActionType>) => { debugger
    dispatch(SetAppStatusAC('loading'))
    todolistAPI.getTodolist()
        .then((res) => { debugger
            dispatch(setTodolistAC(res.data))
            dispatch(SetAppStatusAC('succeeded'))
        })
}

export const addTodoListTC = (title: string) => (dispatch: Dispatch<ActionType>) => {
    dispatch(SetAppStatusAC('loading'))
    todolistAPI.createTodoListId(title)
        .then((res) => {
            dispatch(AddTodolistAC(res.data.data.item))
            dispatch(SetAppStatusAC('succeeded'))
        })
}

export const changeTodoListTC = (title: string, todoListId: string) => (dispatch: Dispatch<ActionType>) => {
    dispatch(SetAppStatusAC('loading'))
    todolistAPI.updateTodolist(todoListId, title)
        .then(() => {
            dispatch(ChangeTodoListAC(title, todoListId))
            dispatch(SetAppStatusAC('succeeded'))
        })
}


export const removeTodolistTC = (todolistId: string) =>
    (dispatch: Dispatch<ActionType>) => {
        dispatch(SetAppStatusAC('loading'))
        todolistAPI.deleteTodoList(todolistId)
            .then(() => {
                dispatch(RemoveTodolistAC(todolistId))
                dispatch(SetAppStatusAC('succeeded'))
            })

}
import {Dispatch} from "redux";
import {authAPI} from "../api/todolist-api";
import {setIsLoggedInAC} from "../features/Login/auth-reducer";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";


export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
    isInitialized: false as boolean
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsTypeAPP): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case 'APP/SET-INITIALIZED':
            return {...state, isInitialized: action.isInitialized}
        default:
            return state
    }
}

export type ActionsTypeAPP = ReturnType<typeof SetAppStatusAC> | ReturnType<typeof setAppErrorAC> | ReturnType<typeof setAppInitializedAC>

export const SetAppStatusAC = (status: RequestStatusType) =>  ({type: 'APP/SET-STATUS', status} as const)
export const setAppErrorAC = (error: string | null) =>  ({type: 'APP/SET-ERROR', error} as const)
export const setAppInitializedAC = (isInitialized: boolean) =>  ({type: 'APP/SET-INITIALIZED', isInitialized} as const)

export const initializeAppTC = () => (dispatch: Dispatch) => {
    authAPI.me().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC(true))
            dispatch(setAppInitializedAC(true))
        } else {
            handleServerAppError(res.data, dispatch)
        }
        dispatch(setAppInitializedAC(true))
    }).catch((error) => {
        handleServerNetworkError(error, dispatch)
    })
}


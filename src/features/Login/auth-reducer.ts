import { Dispatch } from 'redux'
import { setAppErrorAC, setAppInitializedAC, SetAppStatusAC} from '../../app/app-reducer'
import {authAPI, LoginParamsType} from "../../api/todolist-api";
import {handleServerAppError, handleServerNetworkError} from "../../utils/error-utils";


const initialState = {
    isLoggedIn: false
}
type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}


export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)


export const loginTC = (data: LoginParamsType ) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(SetAppStatusAC('loading'))
    authAPI.login(data)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(true))
                dispatch(SetAppStatusAC('succeeded'))
            } else {
                handleServerAppError(res.data,dispatch)
            }
        }).catch((error) => {
        handleServerNetworkError(error,dispatch)
    })
}

export const logOutTC = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(SetAppStatusAC('loading'))
    authAPI.logOut()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(false))
                dispatch(SetAppStatusAC('succeeded'))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
}


type ActionsType = ReturnType<typeof setIsLoggedInAC> | ReturnType<typeof SetAppStatusAC> | ReturnType<typeof setAppErrorAC> |ReturnType<typeof setAppInitializedAC>
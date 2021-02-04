
import React, {useEffect, useState} from 'react'

import { todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}





export const GetTodoLists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolist()
            .then((res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.createTodoListId('NewTITLE').then( (res) => {
            setState(res.data);
        } )

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '30636063-8228-4bd2-bcd0-e7d3d1aedc41';
        todolistAPI.deleteTodoList(`${todolistId}`).then( (res) => {
            setState(res.data);
        })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '30636063-8228-4bd2-bcd0-e7d3d1aedc41'
        todolistAPI.updateTodolist(todolistId, 'SOME NEW TITLE!!!')
            .then((res) => {

                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}


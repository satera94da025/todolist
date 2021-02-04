import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/todo-lists',
    withCredentials: true,
    headers: {
        'API-KEY': '63e080d1-f004-48f7-ae2d-df9d85d2ae65'
    }
})

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}


type ResponseType< D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}


export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseType>(`/${todolistId}`, {title})
    },
    getTodolist() {
        return instance.get<Array<TodolistType>>('')
    },
    deleteTodoList(todolistId: string) {
        return instance.delete<ResponseType>(`/${todolistId}`)
    },
    createTodoListId(title: string) {
        return instance.post<ResponseType<{ title: TodolistType }>>('', {title})
    }
}

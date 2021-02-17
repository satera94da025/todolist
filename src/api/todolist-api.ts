import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/todo-lists',
    withCredentials: true,
    headers: {
        'API-KEY': '63e080d1-f004-48f7-ae2d-df9d85d2ae65'
    }
})

export type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}


type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

export enum TaskStatuses {
    New,
    InProgress,
    Completed,
    Draft
}

export enum TodoTaskPriorities {
    Low,
    Middle,
    Hi,
    Urgently,
    Later
}


export type TaskType = {
    description: string
    title: string
    status: TaskStatuses
    priority: TodoTaskPriorities
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}

type UpdateTaskType = {
    title: string
    description: string
    status: number
    priority: number
    startDate: string
    deadline: string
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
    },
    getTasks(todoListId: string) {
        return instance.get<GetTasksResponse>(`/${todoListId}/tasks`)
    },
    createTask(todoListId: string, title: string){
        return instance.post<ResponseType<{ title: TaskType }>>(`/${todoListId}/tasks`, {title})
    },
    deleteTask(todolistId: string,taskId: string) {
        return instance.delete<ResponseType>(`/${todolistId}/tasks/${taskId}`)
    },
    updateTask(todolistId: string, taskId: string, model: UpdateTaskType ) {
        return instance.put<UpdateTaskType>(`/${todolistId}/tasks/${taskId}`,model)
    }
}

import {AddTodolistAC, RemoveTodolistAC, setTodolistAC} from "./todolists-reducer";
import {TaskStatuses, TaskType, todolistAPI, TodoTaskPriorities} from "../../api/todolist-api";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../app/store";

const initialState: TasksStateType = {}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-TASKS':
            return {...state, [action.todolistId]: action.tasks}

        case 'SET-TODOLIST': {
            const copyState = {...state}
            action.todolist.forEach(tl => {
                copyState[tl.id] = []
            })
            return copyState
        }

        case 'REMOVE-TASK':
            return {...state, [action.todolistId]: state[action.todolistId].filter(task => task.id !== action.taskId)}

        case 'ADD-TASK':
            return {...state, [action.task.todoListId]: [action.task, ...state[action.task.todoListId]]}

        case "UPDATE-TASK":
            return ({
                ...state,
                [action.todolistId]: state[action.todolistId].map(t => t.id === action.taskId ? {...t, ...action.model} : t)
            })

        case "ADD-TODOLIST":
            return {...state, [action.todoList.id]: []}

        case "REMOVE-TODOLIST":
            let copyState = {...state}
            delete copyState[action.id]
            return copyState
        default:
            return state
    }
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

type ActionsType =
    | ReturnType<typeof addTaskAC>
    | ReturnType<typeof updateTaskAC>
    | ReturnType<typeof AddTodolistAC>
    | ReturnType<typeof setTasksAC>
    | ReturnType<typeof RemoveTodolistAC>
    | ReturnType<typeof removeTaskAC>
    | ReturnType<typeof setTodolistAC>

export const removeTaskAC = (taskId: string, todolistId: string) => ({type: 'REMOVE-TASK', taskId, todolistId} as const)

export const addTaskAC = (task: TaskType) => ({type: 'ADD-TASK', task} as const)

export const updateTaskAC = (taskId: string, model: UpdateDomainTaskModelType, todolistId: string) => ({
    type: 'UPDATE-TASK',
    taskId,
    model,
    todolistId
} as const)

export const setTasksAC = (tasks: Array<TaskType>, todolistId: string) => ({
    type: 'SET-TASKS',
    tasks,
    todolistId
} as const)

export const fetchTasksTC = (todolistId: string) => (dispatch: Dispatch) => {
    todolistAPI.getTasks(todolistId)
        .then((res) => {
            const tasks = res.data.items
            const action = setTasksAC(tasks, todolistId)
            dispatch(action)
        })
}

export const removeTasksTC = (taskId: string, todolistId: string) => (dispatch: Dispatch) => {
    todolistAPI.deleteTask(todolistId, taskId)
        .then(res => {
            dispatch(removeTaskAC(taskId, todolistId))
        })
}

export const addTaskTC = (title: string, todolistId: string) => (dispatch: Dispatch) => {
    todolistAPI.createTask(todolistId, title).then(res => {
        const task = res.data.data.item
        dispatch(addTaskAC(task))
    })
}

type UpdateDomainTaskModelType = {
    title?: string
    description?: string
    status?: TaskStatuses
    priority?: TodoTaskPriorities
    startDate?: string
    deadline?: string
}

export const updateTaskTC = (taskId: string, DomainModel: UpdateDomainTaskModelType, todolistId: string) => (dispatch: Dispatch, getState: () => AppRootStateType) => {

// так как мы обязаны на сервер отправить все св-ва, которые сервер ожидает, а не только
// те, которые мы хотим обновить, соответственно нам нужно в этом месте взять таску целиком  // чтобы у неё отобрать остальные св-ва

    const allTasksFromState = getState().tasks;
    const tasksForCurrentTodolist = allTasksFromState[todolistId]
    const task = tasksForCurrentTodolist.find(t => {
        return t.id === taskId
    })

    if (task) {
        todolistAPI.updateTask(todolistId, taskId, {
            title: task.title,
            startDate: task.startDate,
            priority: task.priority,
            description: task.description,
            deadline: task.deadline,
            status: task.status,
            ...DomainModel
        }).then(() => {

            const action = updateTaskAC(taskId, {}, todolistId)
            dispatch(action)
        })
    }
}





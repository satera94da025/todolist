import React, {useEffect, useState} from 'react'

import {todolistAPI} from "../api/todolist-api";

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

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todoListId, setTodoListId] = useState<string>('')
    const getTasks = () => {
        todolistAPI.getTasks(todoListId)
            .then((res) => {
                setState(res.data);
            })

    }

    return <div>
        <input placeholder={'todolistId'} type="text" value={todoListId} onChange={(e) => {
            setTodoListId(e.currentTarget.value)
        }}/>

        <button onClick={getTasks}>get tasks</button>


        {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.createTodoListId('NewTITLE').then((res) => {
            setState(res.data);
        })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [todoListId, setTodoListId] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const createTask = () => {
        todolistAPI.createTask(todoListId, title).then((res) => {
            setState(res.data);
        })

    }

    return <div>
        <div>
            <input placeholder={'todolistId'} type="text" value={todoListId} onChange={(e) => {
                setTodoListId(e.currentTarget.value)
            }}/>
            <input placeholder={'title'} type="text" value={title} onChange={(e) => {
                setTitle(e.currentTarget.value)
            }}/>
            <button onClick={createTask}>create task</button>
        </div>
        {JSON.stringify(state)}
    </div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'e91c17ee-9263-457c-ba34-dd4448283ef5';
        todolistAPI.deleteTodoList(`${todolistId}`).then((res) => {
            setState(res.data);
        })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTask = () => {

    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')
    const [taskId, setTaskId] = useState<string>('')

    const deleteTask = () => {
        todolistAPI.deleteTask(todolistId, taskId).then((res) => {
            setState(res.data);
        })
    }

    return <div>
        <div>
            <input placeholder={'todolistId'} type="text" value={todolistId} onChange={(e) => {
                setTodolistId(e.currentTarget.value)
            }}/>
            <input placeholder={'taskId'} type="text" value={taskId} onChange={(e) => {
                setTaskId(e.currentTarget.value)
            }}/>
            <button onClick={deleteTask}>delete task</button>
        </div>
        {JSON.stringify(state)}
    </div>

}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')
    const [taskTitle, setTaskTitle] = useState<string>('')


    const updateTodolist = () => {
        todolistAPI.updateTodolist(todolistId, taskTitle)
            .then((res) => {
                setState(res.data)
            })
    }

    return (<div>
        <input placeholder={'todolistId'} value={todolistId} onChange={(e) => {
            setTodolistId(e.currentTarget.value)
        }}/>
        <input placeholder={'taskTitle'} value={taskTitle} onChange={(e) => {
            setTaskTitle(e.currentTarget.value)
        }}/>
        <button onClick={updateTodolist}>updateTodolist</button>

        <div>{JSON.stringify(state)}</div>
    </div>)
}

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')
    const [taskTitle, setTaskTitle] = useState<string>('')
    const [taskId, setTaskId] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [status, setStatus] = useState<number>(0)
    const [priority, setPriority] = useState<number>(0)
    const [deadLine, setDeadLine] = useState<string>('')

    const updateTask = () => {
        todolistAPI.updateTask(todolistId, taskId, {
            deadline: deadLine,
            description: description,
            priority: priority,
            startDate: '',
            status: status,
            title: taskTitle

        })
            .then((res) => {
                setState(res.data)
            })
    }

    return <div>
        <input placeholder={'todolistId'} value={todolistId} onChange={(e) => {
            setTodolistId(e.currentTarget.value)
        }}/>
        <input placeholder={'taskTitle'} value={taskTitle} onChange={(e) => {
            setTaskTitle(e.currentTarget.value)
        }}/>
        <input placeholder={'taskId'} value={taskId} onChange={(e) => {
            setTaskId(e.currentTarget.value)
        }}/>
        <input placeholder={'description'} value={description} onChange={(e) => {
            setDescription(e.currentTarget.value)
        }}/>
        <input placeholder={'status'} value={status} type={'number'} onChange={(e) => {
            setStatus(e.currentTarget.valueAsNumber)
        }}/>
        <input placeholder={'priority'} value={priority} type={'number'} onChange={(e) => {
            setPriority(e.currentTarget.valueAsNumber)
        }}/>

        <input placeholder={'deadLine'} value={deadLine} onChange={(e) => {
            setDeadLine(e.currentTarget.value)
        }}/>
        <button onClick={updateTask}>updateTask</button>

        {JSON.stringify(state)}
    </div>
}



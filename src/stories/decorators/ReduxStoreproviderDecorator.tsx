import {Provider} from "react-redux";
import React from "react";
import {combineReducers, createStore} from 'redux'
import {tasksReducer} from '../../features/TodoListsLists/tasks-reducer'
import {todoListsReducer} from '../../features/TodoListsLists/todolists-reducer'
import {v1} from 'uuid'

import {TaskStatuses, TodoTaskPriorities} from "../../api/todolist-api";

import {appReducer} from "../../app/app-reducer";

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todoLists: todoListsReducer,
    app: appReducer
})

const initialGlobalState: any = {

    todoLists: [
        {id: "todolistId1", title: "What to learn", filter: "all", addedDate: '', order: 0},
        {id: "todolistId2", title: "What to buy", filter: "all", addedDate: '', order: 1}
    ],
    tasks: {
        ["todolistId1"]: [
            {
                id: v1(), title: "HTML&CSS", status: TaskStatuses.Completed, order: 0,
                addedDate: '', priority: TodoTaskPriorities.Low, startDate: '', todoListId: 'todoListId1',
                description: '', deadline: ''
            },
            {
                id: v1(), title: "CSS", status: TaskStatuses.Completed, order: 0,
                addedDate: '', priority: TodoTaskPriorities.Low, startDate: '', todoListId: 'todoListId1',
                description: '', deadline: ''
            }
        ],
        ["todolistId2"]: [
            {
                id: v1(), title: "HTML", status: TaskStatuses.Completed, order: 0,
                addedDate: '', priority: TodoTaskPriorities.Low, startDate: '', todoListId: 'todoListId2',
                description: '', deadline: ''
            },
            {
                id: v1(), title: "React", status: TaskStatuses.Completed, order: 0,
                addedDate: '', priority: TodoTaskPriorities.Low, startDate: '', todoListId: 'todoListId2',
                description: '', deadline: ''
            }
        ]
    }
};

export const storyBookStore = createStore(rootReducer, initialGlobalState);

export const ReduxStoreProviderDecorator = (storyFn: any) => {
    return <Provider store={storyBookStore}>{storyFn()}</Provider>
}


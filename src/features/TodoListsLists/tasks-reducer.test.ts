

import {addTaskAC, removeTaskAC, tasksReducer, TasksStateType, updateTaskAC} from './tasks-reducer';
import {AddTodolistAC, RemoveTodolistAC} from "./todolists-reducer";
import {TaskStatuses, TodoTaskPriorities} from "../../api/todolist-api";

let startState: TasksStateType = {}
beforeEach(() =>{
    startState =  {
        "todolistId1": [
            { id: "1", title: "CSS", status: TaskStatuses.New, order: 0,
                addedDate: '', priority: TodoTaskPriorities.Low, startDate: '', todoListId: 'todoListId1',
                description: '', deadline: '' },
            { id: "2", title: "JS", status: TaskStatuses.Completed, order: 0,
                addedDate: '', priority: TodoTaskPriorities.Low, startDate: '', todoListId: 'todoListId1',
                description: '', deadline: ''},
            { id: "3", title: "React", status: TaskStatuses.New, order: 0,
                addedDate: '', priority: TodoTaskPriorities.Low, startDate: '', todoListId: 'todoListId1',
                description: '', deadline: ''}
        ],
        "todolistId2": [
            { id: "1", title: "bread", status: TaskStatuses.New, order: 0,
                addedDate: '', priority: TodoTaskPriorities.Low, startDate: '', todoListId: 'todoListId2',
                description: '', deadline: '' },
            { id: "2", title: "milk", status: TaskStatuses.Completed, order: 0,
                addedDate: '', priority: TodoTaskPriorities.Low, startDate: '', todoListId: 'todoListId2',
                description: '', deadline: ''},
            { id: "3", title: "tea", status: TaskStatuses.New, order: 0,
                addedDate: '', priority: TodoTaskPriorities.Low, startDate: '', todoListId: 'todoListId2',
                description: '', deadline: '' }
        ]
    };
})
test('correct task should be deleted from correct array', () => {

    const action = removeTaskAC("2", "todolistId2");

    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(2);

});





test('correct task should be added to correct array', () => {


    const action = addTaskAC( "todolistId2");

    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(4);
    expect(endState["todolistId2"][0].id).toBeDefined();
    expect(endState["todolistId2"][0].title).toBe('juice');
    expect(endState["todolistId2"][0].status).toBe(TaskStatuses.New);
})


test('status of specified task should be changed', () => {


    const action = updateTaskAC("2", TaskStatuses.New, "todolistId2");

    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"][1].status).toBe(TaskStatuses.New);
    expect(endState["todolistId2"][1].status).toBe(TaskStatuses.Completed);
});

test('status of specified task should be changed', () => {


    const action = updateTaskAC("2", 'false', "todolistId2");

    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"][1].title).toBe('JS');
    expect(endState["todolistId2"][1].title).toBe('false');
});


test('new array should be added when new todolist is added', () => {

    const action = AddTodolistAC("new todolist");

    const endState = tasksReducer(startState, action)


    const keys = Object.keys(endState);
    const newKey = keys.find(k => k != "todolistId1" && k != "todolistId2");
    if (!newKey) {
        throw Error("new key should be added")
    }

    expect(keys.length).toBe(3);
    expect(endState[newKey]).toEqual([]);
});



test('property with todolistId should be deleted', () => {

    const action = RemoveTodolistAC("todolistId2");

    const endState = tasksReducer(startState, action)


    const keys = Object.keys(endState);

    expect(keys.length).toBe(1);
    expect(endState["todolistId2"]).toBeUndefined()
});
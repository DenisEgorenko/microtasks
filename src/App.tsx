import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v4} from 'uuid'

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v4(), title: "HTML&CSS", isDone: true},
    //     {id: v4(), title: "JS", isDone: true},
    //     {id: v4(), title: "ReactJS", isDone: false},
    //     {id: v4(), title: "Rest API", isDone: false},
    //     {id: v4(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    type todolistsType = {
        id: string,
        title: string,
        filter: FilterValuesType
    }

    let todolistID1 = v4();
    let todolistID2 = v4();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v4(), title: 'HTML&CSS', isDone: true},
            {id: v4(), title: 'JS', isDone: true},
            {id: v4(), title: 'ReactJS', isDone: false},
            {id: v4(), title: 'Rest API', isDone: false},
            {id: v4(), title: 'GraphQL', isDone: false},
        ],
        [todolistID2]: [
            {id: v4(), title: 'HTML&CSS2', isDone: true},
            {id: v4(), title: 'JS2', isDone: true},
            {id: v4(), title: 'ReactJS2', isDone: false},
            {id: v4(), title: 'Rest API2', isDone: false},
            {id: v4(), title: 'GraphQL2', isDone: false},
        ]
    });


    function removeTaskItem(listId: string, taskId: string) {
        setTasks({...tasks, [listId]:tasks[listId].filter(t => t.id !== taskId)});
    }

    function addTaskItem(listId: string, title: string) {
        setTasks({...tasks, [listId]:[{id: v4(), title: title, isDone: false}, ...tasks[listId]]})
    }

    function changeItemStatus(listId: string, taskId: string, isDone: boolean) {
        // let task = tasks[listId].find(t => t.id === taskId)
        // if (task) {
        //     task.isDone = isDone;
        // }
        // setTasks({...tasks});

        setTasks({...tasks, [listId]: tasks[listId].map(t => t.id === taskId ? {...t, isDone: isDone} : t)})
    }

    function changeFilterInList(listId: string, value: FilterValuesType) {
        setTodolists(todolists.map(l => l.id === listId ? {...l, filter:value} : l))
    }


    return (
        <div className="App">

            {todolists.map(list => {

                // const changeFilter = (value: FilterValuesType) => {
                //     changeFilterInList(list.id, value)
                // }
                //
                // const removeTask = (taskId: string) => {
                //     removeTaskItem(list.id, taskId)
                // }
                //
                // const addTask = (title: string) => {
                //     addTaskItem(list.id, title)
                // }
                //
                // const changeStatus = (taskId: string, isDone: boolean) => {
                //     changeItemStatus(list.id, taskId, isDone)
                // }

                let tasksForTodolist = tasks[list.id]
                if (list.filter === 'active') {
                    tasksForTodolist = tasks[list.id].filter(t => t.isDone === false);
                }
                if (list.filter === 'completed') {
                    tasksForTodolist = tasks[list.id].filter(t => t.isDone === true);
                }

                return <Todolist key={list.id}
                                 listId={list.id}
                                 title= {list.title}
                                 tasks={tasksForTodolist}
                                 removeTask={removeTaskItem}
                                 changeFilter={changeFilterInList}
                                 addTask={addTaskItem}
                                 changeTaskStatus={changeItemStatus}
                                 filter={list.filter}
                />
            })}

        </div>
    );
}

export default App;

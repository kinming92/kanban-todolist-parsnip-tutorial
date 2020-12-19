import * as api from '../api'
import tasks from '../reducers'

export function fetchTasksSucceeded(tasks){
    return {
        type: 'FETCH_TASKS_SUCCEEDED',
        payload: {
            tasks
        }
    }
}

export function fetchTasks(){
    return dispatch => {
        api.fetchTasks()
        .then(res => {
            dispatch(fetchTasksSucceeded(res.data))
        })
    }
}

export function createTaskSucceeded(task) {
    return {
        type: 'CREATE_TASK_SUCCEEDED',
        payload: {
            task
        }
    }
}

export function createTask ({title, description, status = 'Unstarted'}) {
    return dispatch => {
        api.createTask({title, description, status}).then(res =>{
            dispatch(createTaskSucceeded(res.data))
        })
    }
}

function editTaskSucceeded(task){
    return {
        type: 'EDIT_TASK_SUCCEEDED',
        payload: {
            task
        }
    }
}
export function editTask(id, params={}) {
    return (dispatch, getState) => {
        console.log(getState().tasks)
        const task = getTaskById(getState().tasks, id)
        const updatedTask = Object.assign({}, task, {status: params})
        
        api.editTask(id, updatedTask).then(res => {
            dispatch(editTaskSucceeded(res.data))
        })

    }
}
function getTaskById(tasks, id){
    return tasks.find(task => task.id == id)
}
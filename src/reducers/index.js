import { uniqueId } from '../actions/index'

const mockTasks = [
    {
    id: uniqueId(),
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!',
    status: 'In Progress',
    },
    {
    id: uniqueId(),
    title: 'Peace on Earth',
    description: 'No big deal.',
    status: 'In Progress',
    },
];
export default function tasks(state = { tasks: mockTasks }, action) {
    if(action.type === 'CREATE_TASK'){
        console.log(action.payload, "hello there")
        return {tasks: state.tasks.concat(action.payload)}
    }
    if(action.type === 'EDIT_TASK'){
        const {payload} = action
        return {
            tasks: state.tasks.map(task => {
                if(task.id === payload.id){
                    
                    let obj = Object.assign({ }, task, {status: payload.params});
                    return obj
                }
                return task
            })
        }
    }

    return state;
}
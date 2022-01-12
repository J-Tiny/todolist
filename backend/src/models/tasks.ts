import bookshelf from "../config/database";
const Task =  bookshelf.model('Task',{
    tableName: 'tasks'
})

export default Task;
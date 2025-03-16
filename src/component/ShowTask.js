import React from 'react'

export const ShowTask = ({taskList,setTaskList,task,setTask}) => {

    const handleEdit = (id) => {
        const selectedtaskList = taskList.find(todo => todo.id === id);
        setTask(selectedtaskList)

    };
    const handleDelete = (id) => {
        const UpdatedtaskList = taskList.filter(todo => todo.id !== id);
        setTaskList(UpdatedtaskList);

    };
  
  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Todo</span>
                <span className="count">{taskList.length}</span>
            </div>
            <button onClick={()=> setTaskList([])} className="clearAll" >Clear All</button>
        </div>
        <ul>
            {taskList.map((todo) => (
                <li key={todo.id}>
                    <p>
                     <span className="name">{todo.name}</span>
                     <span className="time">{todo.time}</span>
                    </p>
                     <i onClick={() => handleEdit(todo.id)} class="bi bi-pen-fill"></i>
                     <i onClick={() => handleDelete(todo.id)} class="bi bi-trash-fill"></i>
                </li>
            ))}
        </ul>
    </section>
  )
}

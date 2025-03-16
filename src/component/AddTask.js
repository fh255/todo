import React from 'react';

export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();

    if (task.id) {
      // Update existing task
      const updatedTaskList = taskList.map((todo) =>
        todo.id === task.id
          ? { id: task.id, name: task.name, time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}` }
          : todo
      );

      setTaskList(updatedTaskList);
      setTask({ name: "" }); // Clear input after update
    } else {
      // Add new task
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
      };
      setTaskList([...taskList, newTask]);
      setTask({ name: "" }); // Clear input after adding
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="task" 
          value={task.name || ""} 
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          autoComplete="off" 
          placeholder="Add task"
          maxLength="25"
        />
        <button type="submit">{task.id ? 'Update' : 'Add'}</button>
      </form>
    </section>
  );
};

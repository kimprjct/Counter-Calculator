import React, { useState, useEffect } from "react";

function Todolist() {
  const [todos, setTodos] = useState([]);

 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.slice(0, 10)); 
      })
      .catch((error) => console.error("Error fetching todos:", error));
  }, []); 

  return (
    <div className="card">
      <h2>To Do List</h2>
      <table className="todo-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.userId}</td>
              <td>{todo.title}</td>
              <td className={todo.completed ? "completed" : "in-progress"}>
                {todo.completed ? "✅ Completed" : "❌ In Progress"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todolist;

import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]); // Add the new todo to the list
      setNewTodo(""); // Clear the input after adding the todo
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index)); // Filter out the todo at the given index
  };

  const removeAllTodos = () => {
    setTodos([]); // Clear all todos
  };

  return (
    <>
      <h2 className=" py-4">TodoList</h2>

      <input
        className="form-control-lg me-2"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />

      <button
        type="button"
        className="btn btn-success btn-lg"
        onClick={addTodo}
      >
        Add Todo
      </button>
      {/* remove all todos if more than one */}
      {todos.length > 1 && (
        <button className="btn btn-danger btn-lg" onClick={removeAllTodos}>
          Remove All Todos
        </button>
      )}
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="p-2">
            <span className="p-2">{todo}</span>
            <button
              type="button"
              className="btn btn-danger btn-lg"
              onClick={() => removeTodo(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;

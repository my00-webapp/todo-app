"use client"
import { useState } from 'react';


export default function TodoApp() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input) return;
    setTodos([...todos, input]);
    setInput("");
  
  };

return (
  
   <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Todo App</h1>
      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {if (e.key === 'Enter') {
            addTodo();
            }
          }}
          className="border p-2 flex-1"
          placeholder="タスクを入力"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          追加
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li key={index} className="border p-2 rounded">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

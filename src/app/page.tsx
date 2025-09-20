"use client";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";


export default function Page() {
const { todos, add, remove, toggle, edit } = useTodos();


return (
<div className="p-4 max-w-md mx-auto">
<h1 className="text-2xl font-bold mb-4">My Todo App</h1>


<TodoInput onAdd={add} />


<TodoList todos={todos} onToggle={toggle} onDelete={remove} onEdit={edit} />
</div>
);
}
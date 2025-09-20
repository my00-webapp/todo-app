"use client";
import type { Todo } from "../types/todo";
import { TodoItem } from "./TodoItem";


type Props = {
todos: Todo[];
onToggle: (id: string) => void;
onDelete: (id: string) => void;
onEdit: (id: string, text: string) => void;
};


export function TodoList({ todos, onToggle, onDelete, onEdit }: Props) {
if (todos.length === 0) {
return <p className="text-gray-500">まだタスクがありません</p>;
}


return (
<ul className="space-y-2">
{todos.map((todo) => (
<TodoItem
key={todo.id}
todo={todo}
onToggle={onToggle}
onDelete={onDelete}
onEdit={onEdit}
/>
))}
</ul>
);
}
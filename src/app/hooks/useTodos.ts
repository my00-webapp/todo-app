"use client";
import { useCallback, useState } from "react";
import type { Todo } from "../types/todo";


// 乱数ベースの簡易UUID（crypto.randomUUIDが無い環境用のフォールバック）
const uuid = () =>
(globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2));


export function useTodos(initial: Todo[] = []) {
const [todos, setTodos] = useState<Todo[]>(initial);


const add = useCallback((text: string) => {
const t = text.trim();
if (!t) return;
setTodos((prev) => [
...prev,
{
id: uuid(),
text: t,
done: false,
createdAt: Date.now(),
},
]);
}, []);


const remove = useCallback((id: string) => {
setTodos((prev) => prev.filter((todo) => todo.id !== id));
}, []);


const toggle = useCallback((id: string) => {
setTodos((prev) =>
prev.map((todo) =>
todo.id === id
? { ...todo, done: !todo.done, updatedAt: Date.now() }
: todo
)
);
}, []);


const edit = useCallback((id: string, nextText: string) => {
const t = nextText.trim();
if (!t) return; // 空編集は無視
setTodos((prev) =>
prev.map((todo) =>
todo.id === id ? { ...todo, text: t, updatedAt: Date.now() } : todo
)
);
}, []);


return { todos, add, remove, toggle, edit, setTodos };
}
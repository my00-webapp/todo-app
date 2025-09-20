"use client";
import { useEffect, useRef, useState } from "react";
import type { Todo } from "../types/todo";

type Props = {
todo: Todo;
onToggle: (id: string) => void;
onDelete: (id: string) => void;
onEdit: (id: string, text: string) => void;
};

export function TodoItem({ todo, onToggle, onDelete, onEdit }: Props) {
const [editing, setEditing] = useState(false);
const [draft, setDraft] = useState(todo.text);
const inputRef = useRef<HTMLInputElement>(null);


// 編集開始時にフォーカス
useEffect(() => {
if (editing) {
inputRef.current?.focus();
// 末尾にキャレット移動
const el = inputRef.current;
if (el) {
const len = el.value.length;
el.setSelectionRange(len, len);
}
}
}, [editing]);

const commit = () => {
const t = draft.trim();
if (!t || t === todo.text) {
setEditing(false);
setDraft(todo.text);
return;
}
onEdit(todo.id, t);
setEditing(false);
};


const cancel = () => {
setDraft(todo.text);
setEditing(false);
};

return (
<li className="border p-2 rounded flex items-center gap-3">
<input
type="checkbox"
checked={todo.done}
onChange={() => onToggle(todo.id)}
className="size-4"
aria-label="完了"
/>


{editing ? (
<input
ref={inputRef}
value={draft}
onChange={(e) => setDraft(e.target.value)}
onBlur={commit}
onKeyDown={(e) => {
if (e.key === "Enter") commit();
if (e.key === "Escape") cancel();
}}
className="flex-1 border p-1 rounded"
/>
) : (
<span
className={`flex-1 ${todo.done ? "line-through text-gray-500" : ""}`}
>
{todo.text}
</span>
)}

{editing ? (
<div className="flex gap-2">
<button
onClick={commit}
className="px-2 py-1 text-sm bg-green-500 text-white rounded"
>
保存
</button>
<button
onClick={cancel}
className="px-2 py-1 text-sm bg-gray-200 rounded"
>
取消
</button>
</div>
) : (
<div className="flex gap-2">
<button
onClick={() => setEditing(true)}
className="px-2 py-1 text-sm bg-yellow-500 text-white rounded"
>
編集
</button>
<button
onClick={() => onDelete(todo.id)}
className="px-2 py-1 text-sm bg-red-500 text-white rounded"
>
削除
</button>
</div>
)}
</li>
);
}
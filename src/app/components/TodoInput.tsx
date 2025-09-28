"use client";
import { useState } from "react";


type Props = {
onAdd: (text: string) => void;
};


export function TodoInput({ onAdd }: Props) {
const [input, setInput] = useState("");


const handleAdd = () => {
if (!input.trim()) return;
onAdd(input);
setInput("");
};


return (
<div className="flex gap-2 mb-4">
<input
value={input}
onChange={(e) => setInput(e.target.value)}
onKeyDown={(e) => {
if (e.key === "Enter") handleAdd();
}}
className="border p-2 flex-1 rounded"
placeholder="タスクを入力"
/>
<button onClick={handleAdd} 
className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
disabled={!input.trim()}
>
追加
</button>
</div>
);
}
export type Todo = {
id: string;
text: string;
done: boolean;
createdAt: number;
updatedAt?: number;
// 将来用のフィールド（まだ未使用）
dueDate?: string; // ISO文字列など
tags?: string[]; // ["買い物", "仕事"] など
priority?: "low" | "medium" | "high";
};
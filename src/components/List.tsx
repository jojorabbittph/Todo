import React from "react";

interface ListProps {
  todos: string[];
  onDelete: (id: number) => void;
  onChecked: (id: number) => void;
}

const List: React.FC<ListProps> = ({ todos, onDelete, onChecked }) => {
  return (
    <ul className="w-full max-w-md">
      {todos.map((todo, id) => (
        <li className="flex justify-between border py-3 px-7 mb-4" key={id}>
          <span
            style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
          >
            {todo.data}
          </span>
          <div className="flex gap-2">
            <button className="text-red-500" onClick={() => onChecked(todo.id)}>
              ✅
            </button>
            <button className="text-red-500" onClick={() => onDelete(id)}>
              🗑️
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;

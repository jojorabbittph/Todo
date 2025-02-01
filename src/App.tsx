import { useEffect, useState } from "react";
import { ChangeEvent, FormEvent, ClickEvent } from "./types/type";
import Input from "./components/Input";
import List from "./components/List";
const App: React.FC = () => {
  interface Todo {
    id: number;
    data: string;
    isDone: boolean;
  }
  const [value, setValue] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);

  const handleChange = (e: ChangeEvent) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      data: value,
      isDone: false,
    };
    setTodos((prev) => {
      const newEntry = [...prev, newTodo];
      setFilteredTodos(newEntry);
      return newEntry;
    });
    setValue("");
  };

  const handleDelete = (id: ClickEvent) => {
    setTodos((prev) => {
      const deletedData = prev.filter((e, index) => index !== id);
      setFilteredTodos(deletedData);
      return deletedData;
    });
  };

  const handleCheckTodo = (id: number) => {
    setTodos((prev) => {
      const filtered = prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      );
      setFilteredTodos(filtered);
      return filtered;
    });
  };

  const handleDone = () => {
    setFilteredTodos((prev) => prev.filter((todo) => todo.isDone === true));
  };

  const handleAll = () => {
    setFilteredTodos([...todos]);
  };

  useEffect(() => {
    console.log("log for todos: ", todos, "log for filtered: ", filteredTodos);
  }, [todos, filteredTodos]);
  return (
    <div className="flex justify-center flex-col items-center gap-4">
      <h2 className="text-3xl font-bold">Todo Input</h2>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          placeholder="Input details"
          onChange={handleChange}
          value={value}
        />
        <button className="bg-[#0077D4] text-white px-4 rounded-md">
          Add new task
        </button>
      </form>

      <h3 className="text-2xl font-bold mt-4">Todo list</h3>
      <div className="flex gap-4 mb-4">
        <button
          onClick={handleAll}
          className="bg-[#0077D4] text-white px-24 active:bg-[#005A9C]"
        >
          All
        </button>
        <button
          onClick={handleDone}
          className="bg-[#0077D4] text-white px-24 active:bg-[#005A9C]"
        >
          Done
        </button>
        <button className="bg-[#0077D4] text-white px-24 active:bg-[#005A9C]">
          Todo
        </button>
      </div>
      <List
        todos={filteredTodos}
        onDelete={handleDelete}
        onChecked={handleCheckTodo}
      />
    </div>
  );
};

export default App;

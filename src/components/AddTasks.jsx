import { useState } from "react";
import Input from "./Input";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="bg-slate-200 space-y-6 rounded-mb shadow p-6 flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa."
        className="border
      border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa."
        className="border
      border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencher o título e a descrção da tarefa.");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}
export default AddTasks;

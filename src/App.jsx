// import { useState } from "react";

// function App() {
//   //state
//   const [message, setMessage] = useState("Olá mundo");

//   // let message = "Olá mundo Walmer";
//   return (
//     <div>
//       <h1>{message}</h1>
//       <button
//         onClick={() => {
//           setMessage("mensagem alterada.");
//         }}
//       >
//         Mudar mensagem
//       </button>
//     </div>
//   );
// }

// export default App;
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { useEffect, useState } from "react";
import Title from "./components/Title";
// import { WatchIcon } from "lucide-react";

function App() {
  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     title: "Estudar programação",
  //     description:
  //       " Estudar programação para se tornar um desenvolvedor full stack.",
  //     isComplete: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Estudar programação",
  //     description:
  //       " Estudar programação para se tornar um desenvolvedor full stack.",
  //     isComplete: false,
  //   },
  //   {
  //     id: 3,
  //     title: "Estudar Iglês",
  //     description: " Estudar ingles para se tornar fluente.",
  //     isComplete: false,
  //   },
  //   {
  //     id: 4,
  //     title: "Estudar Matemática",
  //     description:
  //       " Estudar matemática para se tornar um desenvolvedor full stack.",
  //     isComplete: false,
  //   },
  // ]);
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    // chamar a api
    const fetchTasks = async () => {
      const reponse = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );

      //pegar os dados qe ela retorna
      const data = await reponse.json();

      //armazenar/persistir esses dados no state
      setTasks(data);
    };
    fetchTasks();
  }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;

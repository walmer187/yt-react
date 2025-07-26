import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  function onBackClick() {
    navigate(-1);
  }

  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[500] space-y-4 mx-auto">
        <div className="felx">
          <button
            // onClick={() => navigate(-1)}
            onClick={onBackClick}
            className="flex justify-center relative mb-6 text-slate-100"
          >
            <ChevronLeftIcon />
            <Title>Detalhe da Tarefa</Title>
          </button>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <h2 className="text-slate-600">{description}</h2>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;

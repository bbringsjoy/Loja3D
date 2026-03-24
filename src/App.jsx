import { Header, Slidebar } from "./layout";
import { ProdutoCard } from "./componentes";

function App() {
  return (
    <div>
      <Header />
      <div className="flex w-full">
        <div className="w-[30%] bg-gray-700">
          Lado 30%
        </div>

        <div className="w-[70%] bg-gray-400">
          Lado 70%
        </div>
      </div>
      <h1 className="text-red-500 text-3xl">
  Teste Tailwind 🚀
</h1>
    </div>
  )
}

export default App;
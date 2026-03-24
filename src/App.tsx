import { Header, Slidebar } from "./layout";
import { ProdutoCard } from "./componentes";

function App() {
  return (
    <div>
      <Header/>

      <div className="flex min-h-screen">
        <Slidebar />

        <div className="flex-1 p-4">
          <ProdutoCard />
        </div>
      </div>
    </div>
  );
}

export default App;
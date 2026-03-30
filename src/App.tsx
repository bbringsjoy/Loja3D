import { Header, Slidebar, Footer } from "./layout"; 
import { ProdutoCard } from "./componentes";

function App() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Header/>

      <div className="flex flex-1">
        <Slidebar />

        <main className="flex-1 p-8">
          <ProdutoCard />
        </main>
      </div>

      <Footer /> 
    </div>
  );
}

export default App;
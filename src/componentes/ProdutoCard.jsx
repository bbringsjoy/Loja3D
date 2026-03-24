export default function ProdutoCard() {
  const nome = "Escultura 3D de Dragão";
  const preco = 199.9;

  return (
    <div>
      <h2>{nome}</h2>
      <p>Preço: R$ {preco}</p>
      <button>Ver detalhes</button>
    </div>
  );
}
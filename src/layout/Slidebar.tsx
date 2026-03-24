export default function Slidebar() {
  return (
    <aside className="w-[250px] bg-[#1E1E24] text-white p-4">
      <h2 className="text-lg font-bold mb-4">Categorias</h2>

      <ul className="space-y-2">
        <li><a href="#" className="hover:text-gray-300">Acessórios para Impressora 3D</a></li>
        <li><a href="#" className="hover:text-gray-300">Filamentos</a></li>
        <li><a href="#" className="hover:text-gray-300">Peças de Reposição</a></li>
        <li><a href="#" className="hover:text-gray-300">Kits de Montagem</a></li>
        <li><a href="#" className="hover:text-gray-300">Ferramentas e Manutenção</a></li>
        <li><a href="#" className="hover:text-gray-300">Eletrônicos para Impressão 3D</a></li>
      </ul>
    </aside>
  );
}
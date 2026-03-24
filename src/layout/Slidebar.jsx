import './Slidebar.css';

export default function Slidebar(){
    return(
        <aside className="slidebar">
            <h2 className="sidebar-titulo">Categorias</h2>
            <ul className="sidebar-lista">
                <li><a href="#">Acessórios para Impressora 3D</a></li>
                <li><a href="#">Filamentos</a></li>
                <li><a href="#">Peças de Reposição</a></li>
                <li><a href="#">Kits de Montagem</a></li>
                <li><a href="#">Ferramentas e Manutenção</a></li>
                <li><a href="#">Eletrônicos para Impressão 3D</a></li>
            </ul>
        </aside>
    )
}


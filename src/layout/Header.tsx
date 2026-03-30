import './Headers.css';
import { Link } from 'react-router-dom';

export default function Header(){
  return(
    <header className="header" >

      <div >
         <h1>Loja de Impressão 3D</h1>
      </div>
      <nav className="menu_header">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/carrinho">Carrinho</Link>
      </nav>
    </header>
  )
}
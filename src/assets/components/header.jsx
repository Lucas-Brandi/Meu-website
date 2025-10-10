import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="site-header">
      <nav>
        <h1 className="logo">Meu Website</h1>
        <ul className="nav-links">
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export { Header };

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>RH Digital</h2>
      </div>

      <ul className="navbar-links">
        <li>Home</li>
        <li>Vagas</li>
        <li>Sobre nós</li>
        <li>Serviços</li>
      </ul>

      <button className="navbar-button">
        Contate-nos
      </button>
    </nav>
  );
}

export default Navbar;
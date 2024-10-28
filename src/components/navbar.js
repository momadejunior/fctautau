import { Link } from 'react-router-dom'; // Use this if you're using react-router-dom
import { FaHome, FaNewspaper, FaFutbol, FaEnvelope } from 'react-icons/fa'; // Font Awesome Icons
import { TbPlayFootball } from "react-icons/tb";

export default function Navbar() {
  return (
    <header className="site-navbar py-4" role="banner">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="images/logo.png" className="logo" alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto d-flex">
              <Link className="nav-link active" aria-current="page" to="/">
                <FaHome /> Inicio
              </Link>
              <Link className="nav-link" to="/blog">
                <FaNewspaper /> Jornal
              </Link>
              <Link className="nav-link" to="/matches">
                <FaFutbol /> Jogos
              </Link>

              <Link className="nav-link" to="/players">
              <TbPlayFootball /> Jogadores
              </Link>
              <Link className="nav-link" to="/contact">
                <FaEnvelope /> Contacto
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Tab Menu */}
      <div className="mobile-tab-menu d-lg-none">
        <Link to="/" className="tab-item">
          <FaHome />
          <span>Inicio</span>
        </Link>
        <Link to="/blog" className="tab-item">
          <FaNewspaper />
          <span>Jornal</span>
        </Link>
        <Link to="/matches" className="tab-item">
          <FaFutbol />
          <span>Jogos</span>
        </Link>

        <Link to="/players" className="tab-item">
        <TbPlayFootball /> 
          <span>Jogadores</span>
        </Link>
        <Link to="/contact" className="tab-item">
          <FaEnvelope />
          <span>Contacto</span>
        </Link>
      </div>
    </header>
  );
}

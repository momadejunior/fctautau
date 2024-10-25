import { Link } from 'react-router-dom'; // Use this if you're using react-router-dom

export default function Navbar() {
    return (
        <header className="site-navbar py-4" role="banner">
            <div className="container">
                <div className="d-flex align-items-center">
                    <div className="site-logo">
                        <Link to="/">
                            <img src="images/logo.png" alt="bolinha.com" className="logo" />
                        </Link>
                    </div>
                    <div className="ml-auto">
                        <nav className="site-navigation position-relative text-right" role="navigation">
                            <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                <li className="active">
                                    <Link to="/" className="nav-link">Pagina Inicial</Link>
                                </li>
                                <li>
                                    <Link to="/matches" className="nav-link">Jogos</Link>
                                </li>
                                <li>
                                    <Link to="/players" className="nav-link">Jogadores</Link>
                                </li>
                                <li>
                                    <Link to="/blog" className="nav-link">Jornal</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="nav-link">Contacto</Link>
                                </li>
                                
                            </ul>
                        </nav>

                        <button
                            className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white"
                        >
                            <span className="icon-menu h3 text-white"></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

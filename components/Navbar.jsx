import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light mb-3 sombra">
      <div className="container-fluid">
        <Link href="/"><a className="navbar-brand">
          <Image
            src="/logo_claro_200px.png"
            alt="Logo Claro"
            width="50"
            height="50"
          ></Image>
        </a></Link>
        <form className="d-flex" action="/search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
            name="search"
          >
          </input>
          <button className="btn btn-outline-success" type="submit">
            Buscar
          </button>
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/devices"><a
                className="nav-link active"
                aria-current="page"
              >
                Equipos
              </a></Link>
            </li>
            <li className="nav-item">
              <Link href="/versions"><a className="nav-link">
                Versiones
              </a></Link>
            </li>
            <li className="nav-item">
              <Link href="/nodes"><a className="nav-link">
                Nodos
              </a></Link>
            </li>
            <li className="nav-item">
              <Link href="/capex"><a className="nav-link">
                Solicitud CAPEX
              </a></Link>
            </li>
          </ul>
        </div>
        <div className="navbar_buttons">
          <span></span>{" "}
          <a href="/users/logout">
            <i className="fas fa-sign-out-alt">Salir</i>
          </a>
        </div>
      </div>
      <style jsx>
          {`
              .sombra {
                box-shadow: 0 5px 6px -2px gray;
              }
          `}
      </style>
    </nav>
  );
}

export default Navbar;

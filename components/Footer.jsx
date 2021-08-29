function Footer() {
  return (
    <footer className="page-footer font-small bg-light pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Ingenería BBIP MPLS</h5>
            <p>
              Esta WEB fue diseñada para ser el Source of Truth del CORE MPLS de
              Claro Argentina.
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3"></hr>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="http://colaboracion.claro.amx/sites/gciaingtxip/jefingipmpls/Ingenieras/Forms/AllItems.aspx?View=%7B43534895%2D481E%2D4957%2D8F55%2D64F309849C1B%7D"
                >
                  IRs Emitidas
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="http://colaboracion.claro.amx/sites/gciaingtxip/jefingipmpls/_layouts/15/start.aspx#/Documentos%20de%20Criterios"
                >
                  Documento Criterio
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="http://colaboracion.claro.amx/sites/gciaingtxip/jefingipmpls/_layouts/15/start.aspx#/NSO%20Wiki/NSO.aspx"
                >
                  NSO WIKI
                </a>
              </li>
              <li>
                <a href="#">Link 1</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Herramientas</h5>

            <ul className="list-unstyled">
              <li>
                <a target="_blank" rel="noreferrer" href="https://nso.claro.amx/login.html">
                  NSO
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://ipam.claro.amx/">
                  IPAM
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://deepfield.claro.com.ar/login?next=%2F"
                >
                  DeepField
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://authorize.radb.net/?redirect_to_id=153&redirect_to=/my"
                >
                  Radb
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center bg-info py-3">
        © 2021 Copyright: Made with <i className="fas fa-heart"></i> by{" "}
        <a href="mailto:erosico@claro.com.ar">Emiliano Rosico</a>
      </div>
    </footer>
  );
}

export default Footer;

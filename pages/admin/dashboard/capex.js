
import LargeContainer from 'components/dashboard/LargeContainer'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'

function capex() {
    return (
    <div className="d-flex">
    <Sidebar />
    <div className="container p-0">
      <Navbar />
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Capex Dashboard</h1>
        </div>
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div
                      className="
                        text-xs
                        font-weight-bold
                        text-primary text-uppercase
                        mb-1
                      "
                    >
                      Solicitudes
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      Loading...
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div
                      className="
                        text-xs
                        font-weight-bold
                        text-success text-uppercase
                        mb-1
                      "
                    >
                      Puertos El??ctricos
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800" id="puertosElectricos">
                      Loading...
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-ethernet fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div
                      className="
                        text-xs
                        font-weight-bold
                        text-warning text-uppercase
                        mb-1
                      "
                    >
                      Puertos ??pticos 10G
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800" id="puertosOpticos10">
                      Loading...
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-compress fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div
                      className="
                        text-xs
                        font-weight-bold
                        text-warning text-uppercase
                        mb-1
                      "
                    >
                      Puertos ??pticos 100G
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800" id="puertosOpticos100">
                      Loading...
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-compress fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <LargeContainer title="Solicitudes x Nodo" url="/api/dashboard/solxnodo/" />
          <LargeContainer title="Solicitudes x ??rea" url="/api/dashboard/solxnodo/"/>
        </div>
        <div className="container min-height">
          <table className="table table-hover">
            <thead>
              <tr className="fw-bold">
                <th>ID</th>
                <th>Fecha pedido</th>
                <th>T??tulo proyecto</th>
                <th>CellID</th>
                <th>Solicitante</th>
                <th>Puertos el??ctricos</th>
                <th>Puertos ??pticos</th>
                <th>Fecha objetivo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="/capex/<%= element.id %>"> </a>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
    )
}

export default capex

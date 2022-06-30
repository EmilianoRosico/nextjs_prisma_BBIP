import DeviceGrid from "components/DeviceGrid";
import Layout from "components/Layout";
import Link from "next/link";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    renderCell: function link({ id }) {
      return (
        <Link href={`/nodes/${id}`}>
          <a>{id}</a>
        </Link>
      );
    },
  },
  {
    field: "Name",
    headerName: "Acrónimo",
    width: 150,
    editable: true,
  },
  {
    field: "cellId",
    headerName: "Ip Mgmt",
    width: 150,
    editable: true,
  },
  /*{
    field: "nodes",
    headerName: "Nodo",
    width: 150,
    editable: true,
    valueGetter: (params) => {
      let result = [];
      result.push(params.value.Name);
      return result.join(", ");
    },
  },
  {
    field: "devicemodels",
    headerName: "Vendedor",
    width: 150,
    editable: true,
    valueGetter: (params) => {
      let result = [];
      result.push(params.value.vendor);
      return result.join(", ");
    },
  },
  {
    field: "devicemodels",
    headerName: "Modelo",
    width: 150,
    editable: true,
    valueGetter: (params) => {
      let result = [];
      result.push(params.value.model);
      return result.join(", ");
    },
  },*/
  {
    field: "status",
    headerName: "Estado",
    width: 150,
    editable: true,
  },
];

const api = "/api/nodes/";

function index() {
  return (
    <Layout>
      <main>
        <div className="d-flex justify-content-between ps-3">
          <h1>TEST</h1>
          <div className="d-flex align-items-center">
            <a href="/devices/add">
              <span className="btn btn-primary ">Agregar Equipo</span>
            </a>
          </div>
        </div>
        <DeviceGrid columns={columns} api={api} />
      </main>
    </Layout>
  );
}

export default index;

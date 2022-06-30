import useSWR from "swr";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { DataGrid } from "@material-ui/data-grid";
import Link from "next/link"

const fetcher = (url) => fetch(url).then((res) => res.json());

function RequestGrid() {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 95,
      renderCell: function link({ id }) {
        return (
          <Link href={`/capex/${id}`}>
            <a>{id}</a>
          </Link>
        );
      },
    },
    {
      field: "tituloProyecto",
      headerName: "Título",
      width: 150,
      editable: true,
    },
    {
      field: "cellId",
      headerName: "Nodo",
      width: 120,
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
      field: "redundancia",
      headerName: "Redundancia",
      width: 150,
      editable: true,
    },
    {
      field: "bandwidth",
      headerName: "Bandwidth",
      width: 150,
      editable: true,
    },
    {
      field: "puertosElectricos",
      headerName: "UTP",
      width: 120,
      editable: true,
    },
    {
      field: "puertosOpticos1gb",
      headerName: "1gb",
      width: 120,
      editable: true,
    },
    {
      field: "puertosOpticos10gb",
      headerName: "10gb",
      width: 120,
      editable: true,
    },
    {
      field: "puertosOpticos100gb",
      headerName: "100gb",
      width: 120,
      editable: true,
    },
    {
      field: "fechaObjetivo",
      headerName: "Fecha Objetivo",
      width: 150,
      editable: true,
    },
  ];
  
  const api = "/api/capex/";

  const [pageSize, setPageSize] = useState(10);
  const { data, error } = useSWR(api, fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );

  return (
    <>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20, 100]}
          disableSelectionOnClick
        />
      </div>
    </>
  );
}

export default RequestGrid;

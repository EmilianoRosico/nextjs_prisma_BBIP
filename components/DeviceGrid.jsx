import useSWR from "swr";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { DataGrid } from "@material-ui/data-grid";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Grid({columns , api}) {
  const [pageSize, setPageSize] = useState(5);
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
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </>
  );
}

export default Grid;

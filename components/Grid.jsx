import useSWR from "swr";
import { useState } from "react";
import Link from "next/link"

const fetcher = (url) => fetch(url).then((res) => res.json());

function Grid() {
  const [pageIndex, setPageIndex] = useState(0);
  const { data, error } = useSWR(
    `/api/equipment/devices/${pageIndex}`,
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className="container min-height">
        <table className="table table-hover">
          <thead>
            <tr className="fw-bold">
              <th>Acrónimo</th>
              <th>IPMgmt</th>
              <th>Nodo</th>
              <th>Vendedor</th>
              <th>Modelo</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {data.map((device) => (
              <tr key={device.id}>
                <td>
                  <Link href={`/device/${device.id}`}><a>{device.id}</a></Link>
                </td>
                <td>{device.ipMgmt}</td>
                <td>
                  <a href="/nodes/">{device.nodesId}</a>
                </td>
                <td>Huawei</td>
                <td>NE40-X16</td>
                <td>En Servicio</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination justify-content-center">
        <button
          className="page-link"
          onClick={() => setPageIndex(pageIndex == 0 ? 0 : pageIndex - 1)}
        >
          Previous
        </button>
        <button
          className="page-link"
          onClick={() => setPageIndex(pageIndex + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Grid;

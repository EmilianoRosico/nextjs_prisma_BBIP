import useSWR from "swr";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

function LargeContainer({ title }) {
  const [pageIndex, setPageIndex] = useState(0);
  const { data, error } = useSWR(
    `/api/dashboard/solxnodo/${pageIndex}`,
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
        </div>
        <div className="card-body">
          <div className="row">
            {data.map((data) => (
              <div className="col-lg-6 mb-4" key={data.cellId}>
                <div className="card bg-info text-white shadow">
                  <div className="card-body d-flex justify-content-between">
                    <span>{data.cellId}</span>
                    <span>{data._count.id}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
      </div>
    </div>
  );
}

export default LargeContainer;

import React from "react";

const Page = ({ previousPage, nextPage }) => {
  return (
    <div className="d-block align-center py-3">
      <div className="row">
        <div className="col-6 text-left" style={{textAlign: "left"}}>
          <button
            onClick={() => previousPage()}
            type="button"
            className="btn btn-info mr-1"
          >
            &larr; Anterior
          </button>
        </div>
        <div className="col-6 text-right" style={{textAlign: "right"}}>
          <button
            onClick={() => nextPage()}
            type="button"
            className="btn btn-info"
          >
            Siguiente &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;

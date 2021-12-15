import React from "react";
import Image from "./Image";
import Page from "./Page";

const Result = ({ images, previousPage, nextPage }) => {
  if (!images.length) return null;
  return (
    <>
      <Page previousPage={previousPage} nextPage={nextPage} />
      <div className="col-12 p-5 row">
        {images.length && images.map((i) => <Image key={i.id} img={i} />)}
        <Image />
      </div>
      <Page previousPage={previousPage} nextPage={nextPage} />
    </>
  );
};

export default Result;

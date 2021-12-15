import React, { useRef } from "react";

const Search = ({dataSearch}) => {
    
  const searchRef = useRef(null);

  const getData = (e) => {
    e.preventDefault();
    const textToSearch = searchRef.current?.value;
    dataSearch(textToSearch);
  };

  return (
    <form onSubmit={getData}>
      <div className="row">
        <div className="form-group col-md-10">
          <input
            ref={searchRef}
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca tu imágen.   Ej: Perros"
          />
        </div>
        <div className="form-group col-md-2">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Buscar"
          />
        </div>
      </div>
    </form>
  );
};

export default Search;

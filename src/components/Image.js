import React from "react";

const Image = ({ img }) => {
  if (!img) return null;
  const { largeImageURL, likes, previewURL, tags, views } = img;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img className="card-img-top" src={previewURL} alt={tags} />
        <div className="card-body">
        <b className="card-text">{tags.toUpperCase()}</b>
        <p className="card-text">{likes} Me gusta</p>
          <p className="card-text">Visto {views} veces</p>
          <a href={largeImageURL} target="_blank" className="btn btn-primary btn-block" rel="noreferrer noopener">Ver imágen</a>
        </div>
      </div>
    </div>
  );
};

export default Image;

import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Result from "./components/Result";

function App() {
  const [text, setText] = useState(null);
  const [urls, setUrls] = useState([]);
  const [pag, setPag] = useState(1);

  const getApi = () => {
    const url = `https://pixabay.com/api/?key=24679634-80162e5c7b19f85103f6ff0a9&q=${text}&per_page=10&page=${pag}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => setUrls(res.hits));
  };

  const dataSearch = (text) => {
    setText(text);
  };

  useEffect(() => {
    text && getApi();
  }, [text]);

  const scrollTop = () => {
    const element = document.querySelector("#jumbotron");
    element.scrollIntoView("smooth", "end");
  };

  const previousPage = () => {
    if (pag === 1) return null;
    let page = pag;
    page -= 1;
    setPag(page);
  };

  const nextPage = () => {
    let page = pag;
    page += 1;
    setPag(page);
    scrollTop();
  };

  useEffect(() => {
    getApi();
  }, [pag]);

  useEffect(() => {
    /* fetch("https://google-translate1.p.rapidapi.com/language/translate/v2", {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "accept-encoding": "application/gzip",
        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
        "x-rapidapi-key": "0b12934df4mshfbd09212223c5fbp19a7abjsn28c02acf2020",
      },
      body: {
        source: "en",
        target: "es",
        q: "Hello, world!",
      },
    })
      .then((response) => response.json())
      .then((res) => console.log("res", res))
      .catch((err) => {
        console.error(err);
      }); */
      fetch("https://google-translate1.p.rapidapi.com/language/translate/v2", {
        "method": "POST",
        "headers": {
          "content-type": "application/x-www-form-urlencoded",
          "accept-encoding": "application/gzip",
          "x-rapidapi-host": "google-translate1.p.rapidapi.com",
          "x-rapidapi-key": "0b12934df4mshfbd09212223c5fbp19a7abjsn28c02acf2020"
        },
        "body": {
          "source": "en",
          "target": "es",
          "q": "Hello, world!"
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container">
      <div id="jumbotron" className="p-5 bg-primary text-white rounded d-grid">
        <span className="lead text-center">Buscador de imágenes</span>
        <Search dataSearch={dataSearch} />
      </div>
      <div className="row justify-content-center">
        <Result images={urls} previousPage={previousPage} nextPage={nextPage} />
      </div>
    </div>
  );
}

export default App;

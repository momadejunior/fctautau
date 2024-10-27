import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const url = 'https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clsx9i67q0mac07uneq5zcr5x/master';
  const query = `query Noticia {
  noticias {
    id
    titulo
    imagem {
      url
    }
  }
}`;

  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query })
    })
      .then(res => res.json())
      .then(data => {
        setNoticias(data.data.noticias);
        console.log(data.data.noticias)
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []); // Add empty dependency array to run effect once

  return (
    <>
      <div className="hero overlay" style={{ backgroundImage: `url('images/news-01.jpg')` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mx-auto text-center">
              <h1 className="text-white">Jornal Desportivo</h1>
              <p>O Jornal Desportivo é uma publicação dedicada a cobrir as últimas notícias, resultados e análises sobre futebol e outros esportes. Com foco em clubes locais e regionais, como o FC Tau-Tau, o jornal busca aproximar torcedores dos bastidores do esporte, destacando competições, jogadores e histórias inspiradoras.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container site-section">
        <div className="row">
          <div className="col-6 title-section">
            <h2 className="heading">Últimas notícias</h2>
          </div>
        </div>
        <div className="row">
          {noticias.map((noticia, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="custom-media d-block">
                <div className="img mb-4">
                  <Link to={`/noticia/${noticia.id}`}>
                    <img src={noticia.imagem.url} alt={noticia.titulo} className="img-fluid" />
                  </Link>
                </div>
                <div className="text">
                  <h3 className="mb-4">
                    <Link className="white" to={`/noticia/${noticia.id}`}>{noticia.titulo}</Link>
                  </h3>
                  <p><Link to={`/noticia/${noticia.id}`} className="link">ler  mais</Link></p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className="custom-pagination">
              <a href="#">1</a>
              <span>2</span>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

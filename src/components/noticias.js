import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Noticias() {
  const url = 'https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clsx9i67q0mac07uneq5zcr5x/master';
  const query = `
    query Noticia {
      noticias {
        id
        titulo
        imagem {
          url
        }
      }
    }
  `;

  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((data) => {
        setNoticias(data.data.noticias);
        console.log(data.data.noticias);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container site-section">
      <div className="row">
        <div className="col-6 title-section">
          <h2 className="heading">Jornal</h2>
        </div>
      </div>
      <div className="row">
        {noticias.map((noticia) => (
          <div key={noticia.id} className="col-lg-6">
            <div className="custom-media d-flex">
              <div className="img mr-4 mb-2">
                <img
                  src={noticia.imagem.url}
                  alt={noticia.titulo}
                  className="img-fluid"
                />
              </div>
              <div className="text">
                <h3 className="mb-4">
                  <a href="#">{noticia.titulo}</a>
                </h3>
                <p>{/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. */}</p>
                <p><Link to={`/noticia/${noticia.id}`} className="link">ler  mais</Link></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

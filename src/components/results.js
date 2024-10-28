import { useEffect, useState } from 'react';

export default function ResultMach() {
  const [resultados, setResultados] = useState([]);
  const url = 'https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clsx9i67q0mac07uneq5zcr5x/master';
  
  const query = `query Resultados {
    resultados {
      equipa1
      equipa2
      golosDaEquipa1
      golosDaEquipa2
      logoDaEquipa1 {
        url
      }
      logoDaEquipe2 {
        url
      }
      marcadorDaEquipe1
      marcadorDaEquipe2
    }
  }`;

  useEffect(() => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then((data) => setResultados(data.data.resultados))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {resultados.map((resultado, index) => (
          <div className="col-lg-12" key={index}>
            <div className="d-flex team-vs">
              <span className="score">
                {resultado.golosDaEquipa1}-{resultado.golosDaEquipa2}
              </span>
              <div className="team-1 w-50">
                <div className="team-details w-100 text-center">
                  <img 
                    src={resultado.logoDaEquipa1.url} 
                    alt={resultado.equipa1} 
                    className="img-fluid"
                  />
                  <h3>{resultado.equipa1}</h3>
                  <ul className="list-unstyled">
                    <li>{resultado.marcadorDaEquipe1}</li>
                  </ul>
                </div>
              </div>
              <div className="team-2 w-50">
                <div className="team-details w-100 text-center">
                  <img 
                    src={resultado.logoDaEquipe2.url} 
                    alt={resultado.equipa2} 
                    className="img-fluid"
                  />
                  <h3>{resultado.equipa2}</h3>
                  <ul className="list-unstyled">
                    <li>{resultado.marcadorDaEquipe2}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

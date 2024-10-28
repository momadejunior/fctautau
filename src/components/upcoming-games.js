import { useEffect, useState } from 'react';

export default function UpcomingGames() {
  const [games, setGames] = useState([]);
  const url = 'https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clsx9i67q0mac07uneq5zcr5x/master'; // Replace with your GraphQL endpoint

  const query = `query Jogos {
    jogos {
      id
      equipe01
      equipe02
      horaDoJogo
      localDoJogo
      logoDaEquipe01 {
        url
      }
      logoDaEquipe02 {
        url
      }
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
      .then((res) => res.json())
      .then(data=>{
        console.log(data)
      })
      .catch((error) => console.error('Error fetching games:', error));
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-12 title-section">
          <h2 className="heading">Próximos Jogos</h2>
        </div>
        {games.map((game) => (
          <div className="col-lg-6 mb-4" key={game.id}>
            <div className="bg-light p-4 rounded">
              <div className="widget-body">
                <div className="widget-vs">
                  <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
                    <div className="team-1 text-center">
                      <img src={game.logoDaEquipe01.url} alt={game.equipe01} />
                      <h3>{game.equipe01}</h3>
                    </div>
                    <div>
                      <span className="vs"><span>VS</span></span>
                    </div>
                    <div className="team-2 text-center">
                      <img src={game.logoDaEquipe02.url} alt={game.equipe02} />
                      <h3>{game.equipe02}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center widget-vs-contents mb-4">
                <h4>{game.localDoJogo}</h4>
                <p className="mb-5">
                  <span className="d-block">{new Date(game.horaDoJogo).toLocaleDateString()}</span>
                  <span className="d-block">{new Date(game.horaDoJogo).toLocaleTimeString()}</span>
                  <strong className="text-primary">{game.localDoJogo}</strong>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

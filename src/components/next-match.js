import { useState, useEffect } from 'react';

export default function NextMatch() {
  const [games, setGames] = useState([]);
  const url =
    'https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clsx9i67q0mac07uneq5zcr5x/master'; // Replace with your GraphQL endpoint

  const query = `query MyQuery {
    jogos {
      id
      equipe01
      equipe02
      horaDoJogo
      dataDoJogo
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
      .then((data) => {
        if (data.data && data.data.jogos) {
          setGames(data.data.jogos);
        }
      })
      .catch((error) => console.error('Error fetching games:', error));
  }, []);

  const fallbackImage = 'https://via.placeholder.com/150'; // Placeholder image URL

  // Helper function to format date
  const formatDate = (isoDate) => {
    if (!isoDate) return 'Data desconhecida';
    const date = new Date(isoDate);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString('pt-BR', options);
  };

  if (games.length === 0) {
    return <p>Loading next match...</p>; // Handle loading state
  }

  const nextGame = games[0]; // Assuming the first game is the next match

  return (
    <div className="site-section bg-dark">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="widget-next-match">
              <div className="widget-title">
                <h3>Próximo Jogo</h3>
              </div>
              <div className="widget-body mb-3">
                <div className="widget-vs">
                  <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
                    <div className="team-1 text-center">
                      <img
                        src={nextGame.logoDaEquipe01?.url || fallbackImage}
                        alt={nextGame.equipe01}
                        width="100"
                      />
                      <h3>{nextGame.equipe01}</h3>
                    </div>
                    <div>
                      <span className="vs">
                        <span>VS</span>
                      </span>
                    </div>
                    <div className="team-2 text-center">
                      <img
                        src={nextGame.logoDaEquipe02?.url || fallbackImage}
                        alt={nextGame.equipe02}
                        width="100"
                      />
                      <h3>{nextGame.equipe02}</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center widget-vs-contents mb-4">
                <h4>{nextGame.localDoJogo}</h4>
                <p className="mb-5">
                  <span className="d-block">{formatDate(nextGame.dataDoJogo)}</span>
                  <span className="d-block">{nextGame.horaDoJogo}</span>
                  <strong className="text-primary">{nextGame.localDoJogo}</strong>
                </p>

                <div id="date-countdown2" className="pb-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

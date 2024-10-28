import { useEffect, useState } from 'react';

export default function UpcomingGames() {
  const [games, setGames] = useState([]);
  const url = 'https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clsx9i67q0mac07uneq5zcr5x/master'; // Replace with your GraphQL endpoint

<<<<<<< HEAD
  const query = `query MyQuery {
=======
  const query = `query Jogos {
>>>>>>> 11b810f6dc92591827a805667e594e31bbeea472
    jogos {
      id
      equipe01
      equipe02
      horaDoJogo
<<<<<<< HEAD
      dataDoJogo
=======
>>>>>>> 11b810f6dc92591827a805667e594e31bbeea472
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
<<<<<<< HEAD
      .then((data) => {
        
        if (data.data && data.data.jogos) {
          setGames(data.data.jogos);
        }
=======
      .then(data=>{
        console.log(data)
>>>>>>> 11b810f6dc92591827a805667e594e31bbeea472
      })
      .catch((error) => console.error('Error fetching games:', error));
  }, []);

<<<<<<< HEAD
  const fallbackImage = 'https://via.placeholder.com/150'; // Placeholder image URL

  // Helper function to format date for each game
  const formatDate = (isoDate) => {
    if (!isoDate) return 'Data desconhecida';
    const date = new Date(isoDate);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
  };

  return (
    <div className="row">
      <div className="col-12 title-section">
        <h2 className="heading">Próximos Jogos</h2>
      </div>
      {games.map((game) => (
        <div className="col-lg-6 mb-4" key={game.id}>
          <div className="card-match p-4">
            <div className="widget-body">
              <div className="widget-vs">
                <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
                  <div className="team-1 text-center">
                    <img 
                      src={game.logoDaEquipe01?.url || fallbackImage} 
                      alt={game.equipe01 || 'Equipe 1'} 
                    />
                    <h3>{game.equipe01 || 'Equipe 1'}</h3>
                  </div>
                  <div>
                    <span className="vs"><span>VS</span></span>
                  </div>
                  <div className="team-2 text-center">
                    <img 
                      src={game.logoDaEquipe02?.url || fallbackImage} 
                      alt={game.equipe02 || 'Equipe 2'} 
                    />
                    <h3>{game.equipe02 || 'Equipe 2'}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center widget-vs-contents mb-4">
              <h4>Jogo Amigável</h4>
              <p className="mb-5">
                <span className="d-block">
                  {formatDate(game.dataDoJogo)}
                </span>
                <span className="d-block">
                  {game.horaDoJogo || 'Horário desconhecido'}
                </span>
                <strong className="white">
                  {game.localDoJogo || 'Local desconhecido'}
                </strong>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
=======
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
>>>>>>> 11b810f6dc92591827a805667e594e31bbeea472
  );
}

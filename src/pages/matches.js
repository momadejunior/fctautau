import VideoSlider from "../components/video-slider";
import Noticias from "../components/noticias";
import UpcomingGames from "../components/upcoming-games";
import NextMatch from "../components/next-match";
import ResultMach from "../components/results";

export default function Matches(){
    return(
        <>
        

    <div className="hero overlay" style={{backgroundImage: "url('images/bg_3.jpg')"}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 mx-auto text-center">
            <h1 className="text-white">Jogos</h1>
            <p>O FC Tau-Tau disputa partidas regularmente, participando de competições locais e regionais, além de amistosos para manter o elenco em ritmo de jogo.</p>
          </div>
        </div>
      </div>
    </div>

    
 <ResultMach/>
  

    
    <div className="site-section bg-dark">
      <div className="container">
      <NextMatch/>

       <UpcomingGames />
      </div>
    </div> {/* <!--Proximo jogo--> */}

   
{/* Videos */}

<VideoSlider/>
<Noticias/>
        </>
    )
}
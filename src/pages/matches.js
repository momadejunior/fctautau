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

<<<<<<< HEAD
       <UpcomingGames />
      </div>
    </div> {/* <!--Proximo jogo--> */}
=======
              <div class="text-center widget-vs-contents mb-4">
                <h4>World Cup League</h4>
                <p class="mb-5">
                  <span class="d-block">December 20th, 2020</span>
                  <span class="d-block">9:30 AM GMT+0</span>
                  <strong class="text-primary">New Euro Arena</strong>
                </p>

                <div id="date-countdown2" class="pb-1"></div>
              </div>
            </div>
          </div>
        </div>

{/*upcoming games*/}

>>>>>>> 11b810f6dc92591827a805667e594e31bbeea472

{/*<UpcomingGames/>*/}
   
{/* Videos */}

<VideoSlider/>
<<<<<<< HEAD
<Noticias/>
=======
{/*news*/}
            <Noticias/>
>>>>>>> 11b810f6dc92591827a805667e594e31bbeea472
        </>
    )
}

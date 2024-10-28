import VideoSlider from "../components/video-slider"

export default function Matches(){
    return(
        <>
        

    <div class="hero overlay" style={{backgroundImage: "url('images/bg_3.jpg')"}}>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 mx-auto text-center">
            <h1 class="text-white">Jogos</h1>
            <p>O FC Tau-Tau disputa partidas regularmente, participando de competições locais e regionais, além de amistosos para manter o elenco em ritmo de jogo.</p>
          </div>
        </div>
      </div>
    </div>

    
    
    <div class="container">
      

      <div class="row">
        <div class="col-lg-12">
          
          <div class="d-flex team-vs">
            <span class="score">6-2</span>
            <div class="team-1 w-50">
              <div class="team-details w-100 text-center">
                <img src="images/logo_1.png" alt="Image" class="img-fluid"/>
                <h3>FC TAUTAU<span></span></h3>
                <ul class="list-unstyled">
                  <li>Jerry (1)</li>
                  <li>Ider P'(1)</li>
                  <li>Pascoalito (2)</li>
                  <li>Ginho (1)</li>
                  <li>Manuel AG''(1)</li>
                </ul>
              </div>
            </div>
            <div class="team-2 w-50">
              <div class="team-details w-100 text-center">
                <img src="images/logo_2.png" alt="Image" class="img-fluid"/>
                <h3>FC GRANDE MAPUTO <span></span></h3>
                <ul class="list-unstyled">
                  <li>Bundlhaja (2)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  

    
    <div class="site-section bg-dark">
      <div class="container">
        
        <div class="row mb-5">
          <div class="col-lg-12">
            <div class="widget-next-match">
              <div class="widget-title">
                <h3>Next Match</h3>
              </div>
              <div class="widget-body mb-3">
                <div class="widget-vs">
                  <div class="d-flex align-items-center justify-content-around justify-content-between w-100">
                    <div class="team-1 text-center">
                      <img src="images/logo_1.png" alt="Image"/>
                      <h3>Football League</h3>
                    </div>
                    <div>
                      <span class="vs"><span>VS</span></span>
                    </div>
                    <div class="team-2 text-center">
                      <img src="images/logo_2.png" alt="Image"/>
                      <h3>Soccer</h3>
                    </div>
                  </div>
                </div>
              </div>

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


{/*<UpcomingGames/>*/}
   
{/* Videos */}

<VideoSlider/>
{/*news*/}
            <Noticias/>
        </>
    )
}

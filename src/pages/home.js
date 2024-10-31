import Noticias from "../components/noticias";
import Video from "../components/video";
import VideoSlider from "../components/video-slider";

export default function Home(){
  return(
    <>

        <div className="hero overlay" style={{backgroundImage:"url('../images/bg.jpg')"}}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 ml-auto">
                <h1 className="text-white">FC TAU-TAU</h1>
                <p>O FC Tau-Tau é um clube esportivo conhecido por sua paixão pelo futebol e pela promoção de talentos locais. Com raízes fortes na comunidade, o clube se destaca por envolver não apenas jogadores, mas também torcedores e moradores da região, criando uma atmosfera acolhedora e unida.</p>
                <div id="date-countdown"></div>
                <p>
                  <a href="#" className="btn support py-3 px-4 mr-3">Apoiar</a>
                  <a href="/about" className="more light">Ler mais</a>
                </p>
              </div>
            </div>
          </div>
        </div>
    
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
    
              <div className="d-flex team-vs">
                <span className="score">6-2</span>
                <div className="team-1 w-50">
                  <div className="team-details w-100 text-center">
                    <img src="images/logo_1.png" alt="Image" className="img-fluid"/>
                    <h3>FC TAU-TAU<span></span></h3>
                  
                  </div>
                </div>
                <div className="team-2 w-50">
                  <div className="team-details w-100 text-center">
                    <img src="images/logo_2.png" alt="Image" className="img-fluid"/>
                    <h3>FC GRANDE MAPUTO<span></span></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    
        <div className="latest-news">
          <div className="container">
            <div className="row">
              <div className="col-12 title-section">
                <h2 className="heading">Ultímas notícias</h2>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-md-4">
                <div className="post-entry">
                  <a href="#">
                    <img src="images/lgc_01.jpg" alt="Image" className="img-fluid"/>
                  </a>
                  <div className="caption">
                    <div className="caption-inner">
                      <h3 className="mb-3">SoBradas Rendem-se ao talento do FC tau-tau</h3>
                      <div className="author d-flex align-items-center">
                        <div className="img mb-2 mr-3">
                          <img src="images/person_1.jpg" alt=""/>
                        </div>
                        <div className="text">
                          <h4>Mellissa</h4>
                          <span>AUG 19, 2024 &bullet; Sports</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="post-entry">
                  <a href="#">
                    <img src="images/lgc_01.jpg" alt="Image" className="img-fluid"/>
                  </a>
                  <div className="caption">
                    <div className="caption-inner">
                      <h3 className="mb-3">CFC consegue sair da cova dos leões por pouco</h3>
                      <div className="author d-flex align-items-center">
                        <div className="img mb-2 mr-3">
                          <img src="images/person_1.jpg" alt=""/>
                        </div>
                        <div className="text">
                          <h4>Melissa</h4>
                          <span>Marc 28, 2024 &bullet; Sports</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="post-entry">
                  <a href="#">
                    <img src="images/lgc_01.jpg" alt="Image" className="img-fluid"/>
                  </a>
                  <div className="caption">
                    <div className="caption-inner">
                      <h3 className="mb-3">Mailha FC Treme sua estrutura dia FC Tau-Tau</h3>
                      <div className="author d-flex align-items-center">
                        <div className="img mb-2 mr-3">
                          <img src="images/person_1.jpg" alt=""/>
                        </div>
                        <div className="text">
                          <h4>Mellissa</h4>
                          <span>May 19, 2020 &bullet; Sports</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
          </div>
        </div>
    
       {/*  <div className="site-section bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="widget-next-match">
                  <div className="widget-title">
                    <h3>Next Match</h3>
                  </div>
                  <div className="slider">
                  
                    <!--here will display the games of the week-->
                  <div id="plays" className="item"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
    
                <div className="widget-next-match">
                  <table className="table custom-table">
                    <thead>
                      <tr>
                        <th>P</th>
                        <th>Team</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>PTS</th>
                      </tr>
                    </thead>
                    <tbody id="gamesTable">
    
                    </tbody>
                  </table>
                </div>
    
    
              </div>
            </div>
          </div>
        </div>*/}
    
        {/* Video here */}
            <VideoSlider/>
        {/* Video here */}
        <Noticias/>
  
    </>
  ); 
}
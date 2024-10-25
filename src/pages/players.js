import PlayersSlider from "../components/players-slider";
import Noticias from "../components/noticias";

export default function Players(){
    return(
        <>
            

    <div class="hero overlay" style={{backgroundImage:" url('images/bg_3.jpg')"}}>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 mx-auto text-center">
            <h1 class="text-white">Jogadores</h1>
            <p>O elenco do FC Tau-Tau é formado por uma mistura de jogadores experientes e jovens promessas, com foco em desenvolver talentos da comunidade e fortalecer a competitividade do time.</p>
          </div>
        </div>
      </div>
    </div>

    
    
   <PlayersSlider/>
    {/* Bloco de Noticias previas */}
    <Noticias/>



   
        </>
    )
}
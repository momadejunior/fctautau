import { FaFootballBall, FaUsers, FaAward, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; 

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero overlay"
        style={{ backgroundImage: "url('../images/about-bg.jpg')" }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="text-white">Sobre o FC Tau-Tau</h1>
              <p className="text-white-50">
                Nosso clube não é apenas sobre futebol – é sobre paixão,
                comunidade e um compromisso com o desenvolvimento de talentos locais.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb3RiYWxsJTIwY29tbXVuaXR5fGVufDB8fDB8fHww"
              alt="Missão FC Tau-Tau"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2>Nossa Missão</h2>
            <p>
              No FC Tau-Tau, acreditamos no poder do esporte para unir as pessoas
              e promover mudanças positivas. Nossa missão é desenvolver e apoiar
              talentos locais, oferecendo a eles uma plataforma para crescer e brilhar.
            </p>
            <p>
              Também estamos comprometidos em envolver nossa comunidade,
              proporcionando oportunidades para que todos participem por meio do futebol.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-dark pd">
        <div className="container ">
          <div className="row text-center">
            <div className="col-md-4">
              <FaFootballBall size={50} className="mb-3 text-primary" />
              <h3>Paixão</h3>
              <p>
                A paixão pelo futebol é o que nos move. Cada treino, jogo e evento
                são realizados com dedicação e entusiasmo.
              </p>
            </div>
            <div className="col-md-4">
              <FaUsers size={50} className="mb-3 text-success" />
              <h3>Inclusão</h3>
              <p>
                Acreditamos em um ambiente inclusivo, onde todos são bem-vindos
                para participar e crescer juntos.
              </p>
            </div>
            <div className="col-md-4">
              <FaAward size={50} className="mb-3 text-warning" />
              <h3>Excelência</h3>
              <p>
                Buscamos sempre a excelência em tudo o que fazemos, tanto nos resultados
                esportivos quanto no impacto na comunidade.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Impact Section */}
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2>Impacto na Comunidade</h2>
            <p>
              O FC Tau-Tau tem orgulho de ser uma peça central na comunidade.
              Organizamos eventos beneficentes, campanhas de arrecadação e programas
              de treinamento para jovens, incentivando o desenvolvimento pessoal e esportivo.
            </p>
            <p>
              Nosso objetivo é continuar inspirando e apoiando as futuras gerações,
              proporcionando a todos uma chance de fazer parte da nossa história.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1494177310973-4841f7d5a882?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
              alt="Impacto na Comunidade"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-dark text-white py-5">
        <div className="container text-center">
          <h2>Entre em Contato</h2>
          <p>Quer saber mais sobre o FC Tau-Tau ou se envolver com nossas atividades?</p>
          <p>
            <FaPhoneAlt className="me-2" /> +258 869 460 702
          </p>
          <p>
            <FaEnvelope className="me-2" /> contato@fctautau.com
          </p>
          <a href="#" className="btn support py-2 px-4">
            Fale Conosco
          </a>
        </div>
      </div>
    </>
  );
}

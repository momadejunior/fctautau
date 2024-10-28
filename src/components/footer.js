export default function Footer(){
  return(
      <>
          
  <footer className="footer-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="widget mb-3">
            <h3>Notícias</h3>
            <ul className="list-unstyled links">
              <li><a href="#">Todas</a></li>
              <li><a href="#">Notícias do Clube</a></li>
              <li><a href="#">Centro de Mídia</a></li>
              <li><a href="#">Vídeo</a></li>
              <li><a href="#">RSS</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="widget mb-3">
            <h3>Ingressos</h3>
            <ul className="list-unstyled links">
              <li><a href="#">Ingressos Online</a></li>
              <li><a href="#">Pagamentos e Preços</a></li>
              <li><a href="#">Contato e Reservas</a></li>
              <li><a href="#">Ingressos</a></li>
              <li><a href="#">Cupom</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="widget mb-3">
            <h3>Partidas</h3>
            <ul className="list-unstyled links">
              <li><a href="#">Classificação</a></li>
              <li><a href="#">Copa do Mundo</a></li>
              <li><a href="#">La Lega</a></li>
              <li><a href="#">Copa Hyper</a></li>
              <li><a href="#">Liga Mundial</a></li>
            </ul>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="widget mb-3">
            <h3>Redes Sociais</h3>
            <ul className="list-unstyled links">
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Youtube</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div className="row text-center">
        <div className="col-md-12">
          <div className="pt-5">
            <p>
             {/*  <!-- O link para Colorlib não pode ser removido. O template é licenciado sob CC BY 3.0. --> */}
              Copyright &copy;
              <script>
                document.write(new Date().getFullYear());
              </script> Todos os direitos reservados <i className="icon-heart"
                aria-hidden="true"></i> por <a href="https://fctautau.vercel.app/" target="_blank">fctautau</a>
              {/* <!-- O link para Colorlib não pode ser removido. O template é licenciado sob CC BY 3.0. --> */}
            </p>
          </div>
        </div>

      </div>
    </div>
  </footer>

      </>
  )
}

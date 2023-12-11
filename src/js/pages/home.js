import '../../css/style.css';
import '../../css/queries.css';
import NavBar from '../components/nav-bar.js';
import GymImg1 from '../../image/gym-imag2.png';

function Home() {
  return (
    <div className="container">
      {NavBar()}
      <section className="main-content-section">
        <div className="main-content-container">
          <div className="main-background-img">
            <img src={GymImg1} alt="Imagem de Academia" />
          </div>

          <div className="main-content-content">
            <h1>Nome da Pessoa</h1>
          </div>
        </div>
      </section>
      <section className="consultoria-main-explaining-section">
        <div className="main-explaining-container">
          <h1>Por que Fazer Consultoria?</h1>
          <p>
            Veja bem os melhores motivos para fazer você mudar de vida e começar
            a trabalhar para desenvolver a si conosco!
          </p>
          <button>
            <a href="">Clique Aqui</a>
          </button>
        </div>
      </section>
      <section className="apresentation-section">
        <div className="apresentation-section-container">
          <div>
            <h1>Formação e Experiência</h1>
            <p>- Graduação em XXXX</p>
            <p>- Formação completa em tal coisa</p>
            <p>- Estudos dedicados a isso</p>
            <p>- Aprofundamento em conhecimento de coisa</p>
            <p>- Palestrante</p>
          </div>
          <div>
            <h1>Quem sou eu?</h1>
            <div className="apresentation-video">
              <video src="">
                <source />
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  );
}
export default Home;

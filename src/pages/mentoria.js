import '../styles/styles.css';
import '../styles/queries.css';
import NavBar from '../components/nav-bar.js';
import GymImg1 from '../images/gym-imag3.jpg';

function Mentoria() {
  return (
    <div className="container">
      {NavBar()}
      <div className="main-content-container">
        <div className="main-background-img">
          <img src={GymImg1} alt="" />
        </div>

        <div className="main-content-content">
          <h1>Nome da Pessoa</h1>
        </div>
      </div>
      <section className="mentoria-start-section">
        <div className="mentoria-start-container">
          <div className="mentoria-start-content">
            <h1>MENTORIA</h1>
            <h4>
              QUER FAZER PARTE DA LEGIÃO DE TREINADORES QUE VÃO SE TORNAR
              PROFISSIONAIS EM CONSULTORIA FITNESS?
            </h4>
            <p>
              Deixe seu email e tenha acesso com antecedência a todas as
              novidades sobre a mentoria , além de exclusividade na compra.
            </p>
          </div>
          <div className="mentoria-start-form">
            <form action="">
              <input type="text" placeholder="Digite aqui seu e-mail..." />
              <button type="submit">Enviar</button>
            </form>
          </div>
          <h1 style={{ fontSize: 80, paddingTop: 60 }}>MENTORIA</h1>
        </div>
      </section>
    </div>
  );
}
export default Mentoria;

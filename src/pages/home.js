import '../styles/styles.css';
import '../styles/queries.css';
import NavBar from '../components/nav-bar.js';
import GymImg1 from '../images/gym-img2.png';

function Home() {
  return (
    <div className="container">
      {NavBar()}
      <section className="main-content-section">
        <div className="main-content-container">
          <div className="main-background-img">
            <img src={GymImg1} alt="" />
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
            Clique e deixe os resultados te convencerem que o por quê você deve
            fazer parte desse time.​
          </p>
          <button>
            <a href="">Clique Aqui</a>
          </button>
        </div>
      </section>
    </div>
  );
}
export default Home;

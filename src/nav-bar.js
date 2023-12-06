import './styles.css';
import './queries.css';
import { FaShoppingCart } from 'react-icons/fa';
import GymImg1 from './gym-img2.png';
function App() {
  return (
    <div className="container">
      <nav className="nav-bar">
        <a href="">
          <div className="nav-bar-laterals lat1">
            <p>Login/Registro</p>
          </div>
        </a>
        <ul>
          <a href="" className="Item1">
            Página Inicial
          </a>
          <a href="" className="Item2">
            Mentoria
          </a>
          <a href="" className="Item3">
            Loja
          </a>
          <a href="" className="Item4">
            Consultoria Online
          </a>
          <a href="" className="Item5">
            Anamnese
          </a>
          <a href="" className="Item6">
            Resultados
          </a>
          <a href="" className="Item7">
            Como Funciona?
          </a>
        </ul>
        <a href="">
          <div className="nav-bar-laterals lat2">
            <FaShoppingCart size={25} />
          </div>
        </a>
      </nav>
      <section className="main-content">
        <div className="main-content-container">
          <div className="main-background-img">
            <img src={GymImg1} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;

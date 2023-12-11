import '../../css/style.css';
import '../../css/queries.css';
import NavBar from '../components/nav-bar.js';
function Loja() {
  return (
    <div className="container">
      {NavBar()}
      <section>
        <h1>Loja</h1>
      </section>
    </div>
  );
}

export default Loja;

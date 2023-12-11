import '../../css/style.css';
import '../../css/queries.css';
import { FaShoppingCart } from 'react-icons/fa';
import { RiAccountCircleFill } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const handleTabClick = (path) => {
    setActiveTab(path);
  };
  return (
    <nav className="nav-bar">
      <button>
        <div className="nav-bar-laterals lat1">
          <RiAccountCircleFill size={25} style={{ marginRight: '10px' }} />
          <p>Login/Registro</p>
        </div>
      </button>
      <ul>
        <a
          href="home"
          to="/"
          id="home"
          className={activeTab === '/' ? 'active' : ''}
          onClick={() => handleTabClick('/')}
        >
          Página Inicial
        </a>
        <a
          href="mentoria"
          to="/mentoria"
          id="mentoria"
          className={activeTab === '/mentoria' ? 'active' : ''}
          onClick={() => handleTabClick('/mentoria')}
        >
          Mentoria
        </a>
        <a
          href="loja"
          to="/loja"
          id="loja"
          className={activeTab === '/loja' ? 'active' : ''}
          onClick={() => handleTabClick('/loja')}
        >
          Loja
        </a>{' '}
        <a
          href="consultoria"
          to="/consultoria"
          id="consultoria"
          className={activeTab === '/consultoria' ? 'active' : ''}
          onClick={() => handleTabClick('/consultoria')}
        >
          Consultoria Online
        </a>
        <a
          href="anamnese"
          to="/anamnese"
          id="anamnese"
          className={activeTab === '/anamnese' ? 'active' : ''}
          onClick={() => handleTabClick('/anamnese')}
        >
          Anamnese
        </a>
        <a
          href="resultados"
          to="/resultados"
          id="resultados"
          className={activeTab === '/resultados' ? 'active' : ''}
          onClick={() => handleTabClick('/resultados')}
        >
          Resultados
        </a>
        <a
          href="funciona"
          to="/funciona"
          id="funciona"
          className={activeTab === '/funciona' ? 'active' : ''}
          onClick={() => handleTabClick('/funciona')}
        >
          Como Funciona?
        </a>
      </ul>
      <button href="#">
        <div className="nav-bar-laterals lat2">
          <p>Carrinho</p>
          <FaShoppingCart size={25} style={{ marginLeft: '10px' }} />
        </div>
      </button>
    </nav>
  );
};
export default Navbar;

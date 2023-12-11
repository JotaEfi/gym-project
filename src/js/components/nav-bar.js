import '../../css/style.css';
import '../../css/queries.css';
import { FaShoppingCart } from 'react-icons/fa';
import { RiAccountCircleFill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
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
      <a href="#">
        <div className="nav-bar-laterals lat1">
          <RiAccountCircleFill size={25} />
          <p>Login/Registro</p>
        </div>
      </a>
      <ul>
        <a
          href="home"
          to="/"
          className={activeTab === '/' ? 'active' : ''}
          onClick={() => handleTabClick('/')}
        >
          Página Inicial
        </a>
        <a
          href="mentoria"
          to="/mentoria"
          className={activeTab === '/mentoria' ? 'active' : ''}
          onClick={() => handleTabClick('/mentoria')}
        >
          Mentoria
        </a>
        <a
          href="loja"
          to="/loja"
          className={activeTab === '/loja' ? 'active' : ''}
          onClick={() => handleTabClick('/loja')}
        >
          Loja
        </a>{' '}
        <a
          href="consultoria"
          to="/consultoria"
          className={activeTab === '/consultoria' ? 'active' : ''}
          onClick={() => handleTabClick('/consultoria')}
        >
          Consultoria Online
        </a>
        <a href="#" className="Item5">
          Anamnese
        </a>
        <a href="#" className="Item6">
          Resultados
        </a>
        <a href="#" className="Item7">
          Como Funciona?
        </a>
      </ul>
      <a href="#">
        <div className="nav-bar-laterals lat2">
          <p>Carrinho</p>
          <FaShoppingCart size={25} />
        </div>
      </a>
    </nav>
  );
};
export default Navbar;

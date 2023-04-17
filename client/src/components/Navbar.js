import React from 'react';
import { Link } from 'react-router-dom';
import '../HomePage.css';
import { useState, useEffect } from 'react';

function Navbar() {
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString());
  }, []);

  return (

    <nav className="navbar">
      <Link to="/">
        <img src={require("../sources/poste.svg.png")} height={100} alt="banner-image" className="navbar-logo" />
      </Link>
      <Link to="/offre">
        <img src={require("../sources/ban_header.jpg")} height={100} width={370} alt="banner-image" className="navbar-logo" />
      </Link>
      <ul>
        <li><a href="/offre?type=Emploi">Emploi</a></li>
        <li><a href="/offre?type=Formation">Formation</a></li>

        <li><a href="/offre?type=Stage">Stage</a></li>
        <li class="dropdown">
          <a href="#" class="dropbtn">Emploi par métier</a>
          <div class="dropdown-content">
            <a href="/offre?keyword=Developpement">Emploi  developpement</a>
            <a href="/offre?keyword=marketing">Emploi  marketing</a>
            <a href="/offre?keyword=ingenieur">Emploi ingenieur</a>
            <a href="/offre?keyword=Industrie">Emploi Industrie</a>

            <a href="/offre?keyword=Commerce">Emploi Commerce</a>

            <a href="/offre?keyword=Automobile">Emploi Automobile</a>

            <a href="/offre?keyword=Marketing">Emploi Marketing</a>

            <a href="/offre?keyword=Télécommunications">Emploi Télécommunications</a>

            <a href="/offre?keyword=Comptabilité">Emploi  Comptabilité</a>

            <a href="/offre?keyword=Electronique">Emploi Electronique</a>

            <a href="/offre?keyword=Assurances">Emploi Assurances</a>

            <a href="/offre?keyword=Mécanique">Emploi Mécanique</a>

            <a href="/offre?keyword=Pharmaceutiques">Emploi Pharmaceutiques</a>
          </div>
        </li>
        <li class="dropdown">
          <a href="#" class="dropbtn">Emploi par Ville</a>
          <div class="dropdown-content emploi-par-ville ">
            <a href="/offre?location=mourouj">Emploi au mourouj</a>
            <a href="/offre?location=lac">Emploi à lac</a>
            <a href="/offre?location=Tunis">Emploi à Tunis</a>
            <a href="/offre?location=Kram">Emploi à Le Kram</a>

            <a href="/offre?location=Monastir">Emploi à Monastir</a>

            <a href="/offre?location=Soukra">Emploi à La Soukra</a>

            <a href="/offre?location=Ben Arous">Emploi à Ben Arous</a>

            <a href="/offre?location=Sahloul">Emploi à Sahloul</a>

            <a href="/offre?location=Megrine">Emploi à Megrine</a>

            <a href="/offre?location=Manouba">Emploi à Manouba</a>

            <a href="/offre?location=Mghira">Emploi à Zone Industrielle El Mghira</a>

            <a href="/offre?location=Bizerte">Emploi à Bizerte</a>

            <a href="/offre?location=Marsa">Emploi à La Marsa</a>

            <a href="/offre?location=Lafayette">Emploi à Lafayette</a>
          </div>
        </li>

      </ul>


      <Link to="/register"><button class="inscription-button">Inscription</button></Link>
      <Link to="/login"><button class="login-button" >Log in</button></Link>


    </nav>

  );
}

export default Navbar;
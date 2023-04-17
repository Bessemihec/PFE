import React, { useState, useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import "../offresdetails.css";


const OffreDetails = () => {
    const { id } = useParams();
    const [offre, setOffre] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
      axios.get(`/api/offres/${id}`)
        .then(response => {
          setOffre(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, [id]);

    const handleDelete = () => {
        axios
          .delete(`/api/offres/${id}`)
          .then(() => {
            window.location.href = '/offre';

          })
          .catch(error => {
            console.log(error);
          });
        }
        const handleUpdate = () => {
            window.location.href = `/offres/${id}/edit`;
          };
          const handlePostuler = () => {
            navigate(`/offres/${id}/postuler`);
          };
          const handleKeywordClick = (mot_cle) => {
            navigate(`/offre?keyword=${mot_cle}`);
          }
  return (
   
    <div class = "card-wrapper">
   
      
     
      <div class = "product-content">
        <h2 class = "product-title">{offre.name}</h2>


      
        <div class = "product-detail">
          <h2>Description </h2>
          <p>{offre.Description}</p>
       
          <ul>
            <li>Date: {offre.date}</li>
            <li>Education level: {offre.niveau_etude}</li>
            <li>Salary: {offre.salaire}</li>
            <li>Languages: {offre.langues}</li>
            <li>Location: {offre.lieu}</li>
            <li>Expiration date: {offre.date_dexpiration}</li>
           
          </ul>
        </div>

        <div className="purchase-info">
  {offre.mot_cles && offre.mot_cles.split(',').map((mot_cle, index) => (
    <button key={index} className="btn" onClick={() => handleKeywordClick(mot_cle)}>{mot_cle}</button>
  ))}


   </div>
        
  
      
          
          </div>
          <button className=" btn-primary" onClick={handleUpdate}>
            Edit
          </button>
          <button className=" btn-danger" onClick={handleDelete}>
            Delete
          </button>
          <button className="btn-success" onClick={handlePostuler}>
      Postuler
    </button>
          </div>
          
   
   
  );
};

export default OffreDetails;
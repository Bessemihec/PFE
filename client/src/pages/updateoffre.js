import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import axios from 'axios';
import "../updateoffre.css"

const EditOffre = () => {
  
  const { id } = useParams();

  const [form, setForm] = useState({});

  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get(`/api/offres/${id}`)
      .then(response => {
        setForm(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/offres/${id}`, form)
      .then(response => {
        window.location.href =`/offres/${id}`;
      })
      .catch(error => {
        
         
        
        console.log(error);
      });
  };

  return (
     <div class="container-fluid">
		<div class="row main-content bg-success text-center">
			<div class="col-md-4 text-center company__info">
				<span class="company__logo"><h2><span class="fa fa-android"></span></h2></span>
        
        <img src={require("../sources/poste.svg.png")} />
			</div>
			<div class="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div class="container-fluid">
					<div class="row">
						<h2>Update offre</h2>
					</div>
					<div class="row">
              <form onSubmit={handleSubmit} className="form-group">
                      <div className="row">

                  <label htmlFor="type">Type</label>
                  <input
                    type="text"
                    name="type"
                    id="type"
                     className="form__input"
                    placeholder="Enter type"
                    value={form.type}
                    onChange={handleChange}
                  />
                  {errors.type && (
                    <div className="invalid-feedback">{errors.type}</div>
                  )}
                </div>
                <div className="row">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form__input"

                    placeholder="Enter name"
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="row">
                  <label htmlFor="Description">Description</label>
                  <textarea
                    name="Description"
                    id="Description"
                    className="form__input"

                    placeholder="Enter Description"
                    value={form.Description}
                    onChange={handleChange}
                  ></textarea>
                  {errors.Description && (
                    <div className="invalid-feedback">{errors.Description}</div>
                  )}
                </div>
                <div className="row">
                  <label htmlFor="date">Date</label>
                  <input
                    type="text"
                    name="date"
                    id="date"
                    
                    className="form__input"

                    placeholder="Enter date"
                    value={form.date}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.date}</div>
                  )}
                  </div>
                    <div className="row">
                        <label htmlFor="niveau_etude">Education level</label>
                        <input
                            type="text"
                            name="niveau_etude"
                            id="niveau_etude"
                            className="form__input"

                            placeholder="Enter education level"
                            value={form.niveau_etude}
                            onChange={handleChange}
                        />
                        {errors.niveau_etude && (
                            <div className="invalid-feedback">{errors.niveau_etude}</div>
                        )}
                        </div>
                        <div className="row">
                        <label htmlFor="salaire">Salary</label>
                        <input
                            type="text"
                            name="salaire"
                            id="salaire"
                            className="form__input"

                            placeholder="Enter salary"
                            value={form.salaire}
                            onChange={handleChange}
                        />
                        {errors.salaire && (
                            <div className="invalid-feedback">{errors.salaire}</div>
                        )}
                        </div>
                        <div className="form-group">
                        <label htmlFor="langues">Languages</label>
                        <input
                            type="text"
                            name="langues"
                            id="langues"
                            className="form__input"

                            placeholder="Enter languages"
                            value={form.langues}
                            onChange={handleChange}
                        />
                        {errors.langues && (
                            <div className="invalid-feedback">{errors.langues}</div>
                        )}
                        </div>
                        <div className="row">
                        <label htmlFor="lieu">Location</label>
                        <input
                            type="text"
                            name="lieu"
                            id="lieu"
                            className="form__input"

                            placeholder="Enter location"
                            value={form.lieu}
                            onChange={handleChange}
                        />
                        {errors.lieu && (
                            <div className="invalid-feedback">{errors.lieu}</div>
                        )}
                        </div>
                        <div className="row">
                        <label htmlFor="mot_cles">Keywords</label>
                        <textarea
                            type="text"
                            name="mot_cles"
                            id="mot_cles"
                            className="form__input"

                            placeholder="Enter keywords"
                            value={form.mot_cles}
                            onChange={handleChange}
                        />
                        {errors.mot_cles && (
                            <div className="invalid-feedback">{errors.mot_cles}</div>
                        )}
                        </div>
                        <div className="row">
                        <label htmlFor="date_dexpiration">Expiration date</label>
                        <input
                            type="text"
                            name="date_dexpiration"
                            id="date_dexpiration"
                            className="form__input"

                            placeholder="Enter expiration date"
                            value={form.date_dexpiration}
                            onChange={handleChange}
                        />
                        {errors.date_dexpiration && (
                            <div className="invalid-feedback">{errors.date_dexpiration}</div>
                        )}
                        </div>
                        <div class="row">
                        <button type="submit" className=" btn-primary">
                            Submit
                        </button>
                        </div>
                        </form>
                </div>
            </div>
        </div>
    </div>
</div>
                      );
};

export default EditOffre;
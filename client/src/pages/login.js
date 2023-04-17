import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import "../Login.css"
import ComboBox from '../components/Combobox';
import { Link } from 'react-router-dom';





const LoginForm = () => {
  const navigate = useNavigate();

  const [Email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();
   
    if (!Email.includes('@') || !Email.includes('.')) {
      setMessage('Please enter a valid email address.');
      return;
     }
      if (!Email || !password) {
        setMessage('Please enter your email and password.');
      return;
      }
    
    console.log('Email:', Email);
    console.log('Password:', password);
    axios.post("/api/login", { Email, password })
    .then((response) => {
      
      const { token, Role ,userId} = response.data;
      localStorage.setItem("token", token);
      setMessage(response.data.message);
      if(Role=="employee"){
        if (Role === "employee") {
          if (password === "aaaa") {
            navigate(`/changepassword/${userId}`);
          } else {
            navigate(`/offre`);
          }
        }
        
          
        
       
       
      }
      if (Role === "candidat") {
        window.location.href = "/";

      } else if (Role === "admin") {
        window.location.href = "/user";

      }
    })
    .catch((error) => {
      setError(error.response.data.message);
      setMessage("La combinaison d'adresse e-mail et de mot de passe que vous avez saisie n'est pas reconnue ou n'existe pas. Veuillez réessayer.")
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
						<h2>Log In</h2>
					</div>
					<div class="row">
     
      <form onSubmit={handleSubmit} class="form-group" >
      <div class="row">
        <FormInput
        
          description="Email"
          placeholder="Enter your Email"
          type="Email"
          value={Email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="form__input"
        />
        </div>
        <div class="row">
        <FormInput
          description="Password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          className="form__input"
        />
        </div>
        <ComboBox/>
        <div class="row">
       <button  type="submit" className="bttn" >Login</button>
       {message && <div> {message}</div>}
       </div>
      </form>
    </div>
    <div class="row">
						<p>Don't have an account? <a href="/register">Register Here</a></p>
					</div>
        
          </div>
          </div>
          </div>
          </div>
  );
};

const FormHeader = ({ title }) => <h2 id="headerTitle">{title}</h2>;

const Form = () => (
  <div>
    <FormInput description="Email"  placeholder="Enter your email" type="text"  />
    <FormInput description="Password"  placeholder="Enter your password"  type="password"  />
 
   
  </div>
);




const FormInput = ({ description, placeholder, type, value, onChange,style }) => (
  <div class="row">
    <label>{description}</label>
    <input type={type} placeholder={placeholder} value={value}  onChange={onChange} />
  </div>
);




const Login = () => {
  return <LoginForm />;
};

export default Login;
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Router
} from "react-router-dom";



import Register from './pages/Register';


import HomePage from './pages/mainhome';


import UserList from './pages/ShowUser';

import UserProfile from './pages/profile';
import MyForm from './pages/CandidatFormulare';

import Education from './pages/education';
import Experience from './pages/experience';
import Information from './pages/informationsgenerales';
import InformationProfessionelles from './pages/informationprofessionelles';
import UpdateUser from './pages/UpdateUsers';

import Footerpage from './components/footer';
import Navbar from './components/Navbar';
import Login from './pages/login';
import ProtectedRoute from './components/Protectedroutes';
import ChangePasswordPage from './pages/profile';
import OffresList from './pages/offres';
import OffreDetails from './pages/offredetails';
import AddOffre from './pages/Addoffres';
import EditOffre from './pages/updateoffre';
import CandidatureForm from './pages/Candidatureform';
import AddEntretien from './pages/ajouterentretiens';

import EntretienList from './pages/afficherentretien';
import EditEntretien from './pages/updateentretien';


function App() {


  return (

    <BrowserRouter>
    <Navbar />
    <Routes>
       
       <Route path="/register" element={<Register />} />
       <Route path="/" element={<HomePage />} />
      <Route path="/User/:id" element={<UpdateUser/>}/>
      <Route path="/user" element={ <UserList /> }/>
      <Route path="/profile" element={<UserProfile />}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/education" element={<Education/>}/>
       <Route path="/experience/:id" element={<Experience/>}/>
       <Route path="/experience/" element={<Experience/>}/>
        <Route path="/informationsgenerales/:id" element={<Information/>}/>
       <Route path="/informationsgenerales" element={<Information/>}/>
       <Route path="/changepassword/:userId" element={<ChangePasswordPage/>} />
      
       <Route  path="/formulaire" element={<ProtectedRoute><MyForm /></ProtectedRoute>} />
     
       <Route  path="/offre" element={ <OffresList /> }/>
       <Route exact path="/offres/:id" element={<OffreDetails/>} />
       <Route exact path="/offres/:id/edit" element={<EditOffre/>} />
       <Route  path="/addoffre" element={ <AddOffre /> }/>
       <Route path="/offres/:id/postuler" element={<CandidatureForm/>}/>
       <Route path="/informationsprofessionelles/:id" element={<InformationProfessionelles/>}/>
       <Route path="/informationsprofessionnelles" element={<InformationProfessionelles/>}/>
       <Route exact path="/entretiens" element={<EntretienList/>} />
       <Route path="/entretien/:id" element={<EditEntretien/>}/>
       <Route path="/addentretien" element={<AddEntretien />}/>
      <Route path="/education/:id" element={<Education/>} />
      <Route path="/education" element={<Education/>} />
      
    </Routes>
    
    <Footerpage />
  </BrowserRouter>

  
  );
}

export default App;

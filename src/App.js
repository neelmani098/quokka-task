import "./App.css";
import Login from "./components/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import AuthContext from "./store/auth-context";
import { useLocalStorage } from "react-use";
import UnauthorisedPage from "./components/UnauthorisedPage";

function App() {

  const[isLoggedIn, setIsLoggedIn, removeIsLoggedIn] = useLocalStorage('loggedIn', false);
  const[email, setEmail, removeEmail] = useLocalStorage('email' , '');
  const[password, setPassword, removePassword] = useLocalStorage('password', '');


  //set the values in local storage once the user is succesfully logged in
  const loginClickHandler=(email, password)=>{
    setIsLoggedIn(true);
    setEmail(email);
    setPassword(password);
  }

  //remove values from the local storage if user logs out
  const logoutClickHandler=()=>{
    removeIsLoggedIn();
    removeEmail();
    removePassword();
  }


  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      email: email,
      password: password
    }}>
      <Routes>
        {/*Routes->
          //path-> "/" => If user is logged in and have data in local storage root url will direct redirect to Dashboard pages
          //path->"/" => If user is not logged in and no data is present in local storage root url will redirect to Login Page
          //path->"/dashboard" => If user is logged in Dashbboard page will show else he/she will be redirected to Login Page 
          //path->"/profile" => Is user is logged in Profile page will show or else will be redirected to Login page after 3 seconds
        */}
      <Route path="/" element={!isLoggedIn ? <Navigate to='/login' /> : <Navigate to='/dashboard'/>} />
      {isLoggedIn ? <Route path="/dashboard" element={<Dashboard logout={logoutClickHandler}/>}/>:<Route path="/dashboard" element={<Navigate to='/login'/>}/>}
      <Route path="/profile" element={isLoggedIn ? <Profile/> : <UnauthorisedPage/>}/>
      <Route path="/login" element={<Login login={loginClickHandler}/>}/>
    </Routes>
    </AuthContext.Provider>
    
  );
}

export default App;

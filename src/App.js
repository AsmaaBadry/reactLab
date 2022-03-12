import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Register from "./pages/Register";
import LoginFormik from "./pages/LoginFormik";
import Favourites from "./pages/Favourites";
import MoviesList from "./pages/MoviesList";
import NotFound from "./pages/NotFound";
import MovieDetails from "./pages/MovieDetails";


import Navbar from "./components/Navbar/Navbar";
import FunctionalComponentExample from "./containers/FunctionalComponentExample";
import AddUser from "./containers/AddUser";
// import LoginFormik from "./containers/LoginFormik";
// import Register from './containers/Register';
import "./App.css";


function App() {
  return (
    // <>
    //   <Header />
    //   <div className="container my-5">
    //     {/* <h1>HEllo</h1>
    //     <div class="alert alert-primary" role="alert">
    //       A simple primary alert—check it out!
    //     </div>
    //     <FunctionalComponentExample /> */}
    //     {/* <AddUser /> */}
    //     {/* <LoginFormik /> */}
    //     <Register />
    //   </div>
    // </>
    <BrowserRouter>
      <Header />
      <div className="container my-5">
        <Switch>
          <Route path={"/"} exact component={MoviesList} />
          <Route path={"/Favourites"} exact component={Favourites} />
          <Route path={"/LoginFormik"} exact component={LoginFormik} />
          <Route path={"/Register"} exact component={Register} />
          <Route path={"/Movie-details/:id"} exact component={MovieDetails} />
          <Route path={"*"} component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import {Route, Switch} from 'react-router-dom';

import Home from "./screens/Home/Home";
import MyMovies from "./screens/MyMovies/MyMovies";
import TopRated from "./screens/TopRated/TopRated";
import Releases from "./screens/Latest/Latest";
import NotFound from "./screens/NotFound/NotFound";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Movies from "./components/Movies/Movies";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
      <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/MyMovies' component={MyMovies}/>
          <Route path='/TopRated' exact component={TopRated}/>
          <Route path='/Latest' component={Releases}/>
          <Route path='' component={NotFound}/>
          
        </Switch>

        <h2>Movies</h2>

        <Movies/>    

        </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;

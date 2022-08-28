import React from "react";
import {Route, Switch} from 'react-router-dom';

import Home from "./screens/Home/Home";
import MyMovies from "./screens/MyMovies/MyMovies";
import TopRated from "./screens/TopRated/TopRated";
import Releases from "./screens/Latest/Latest";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/MyMovies' component={MyMovies}/>
          <Route path='/TopRated' exact component={TopRated}/>
          <Route path='/Latest' component={Releases}/>
        </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;

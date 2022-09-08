import React from "react";
import {Route, Switch} from 'react-router-dom';

import Home from "./screens/Home/Home";
import MyMovies from "./screens/MyMovies/MyMovies";
import Popular from "./screens/Popular/Popular";
import Upcoming from "./screens/Latest/Latest";
import NotFound from "./screens/NotFound/NotFound";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <React.Fragment>

      <Navbar />

      <main>
      <Switch>
          <Route path='/' exact={true} component={Home}/>

          <Route path='/MyMovies' component={MyMovies}/>

          <Route path='/Popular' component={Popular}/>

          <Route path='/Upcoming' component={Upcoming}/>

          <Route path='' component={NotFound}/>

        </Switch>
        </main>

      <Footer />

    </React.Fragment>
  );
}

export default App;

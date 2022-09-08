import React from "react";
import {Route, Switch} from 'react-router-dom';

import Home from "./screens/Home/Home";
import Favoritos from "./screens/Favoritos/Favoritos";
import Peliculas from "./screens/Peliculas/Peliculas";
import Series from "./screens/Series/Series";
import Detalle from "./screens/Detalle/Detalle";

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

          <Route path='/favoritos' component={Favoritos}/>

          <Route path='/peliculas' component={Peliculas}/>

          <Route path='/detalle/id/:id' component={Detalle}/>

          <Route path='/Series' component={Series}/>

          <Route path='' component={NotFound}/>

        </Switch>
        </main>

      <Footer />

    </React.Fragment>
  );
}

export default App;

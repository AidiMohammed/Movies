import NavBar from "./components/NavBar";
//pages
import homepage from "./pages/home"
import nowPlayingMovies from "./pages/movies/nowPlayingMovies";
import popularMovies from "./pages/movies/popularMovies";
import topRatedMovies from "./pages/movies/topRatedMovies";
import upComingMovies from "./pages/movies/upComingMovies";
import PopularPersons from "./pages/persons/popularPersons";
import pageNotfound from "./pages/pageNotfound";

import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import store from './store'
import './styles/App.css'

function App() {
  return (
    <Router>
      <Switch>
        <div className="container">
          <Provider store={store}>
            <NavBar/>
            <Route exact path="/" component={homepage}/>
            <Route exact path="/Movies/nowPlaying" component={nowPlayingMovies}/>
            <Route exact path="/Movies/popular" component={popularMovies}/>
            <Route exact path="/Movies/topRated" component={topRatedMovies}/>
            <Route exact path="/Movies/upComing" component={upComingMovies}/>
            <Route exact path="/Person/popular" component={PopularPersons}/>
          </Provider>
        </div>
      </Switch>
    </Router>
  );
}

export default App;

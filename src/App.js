//pages
import homepage from "./pages/home"
import nowPlayingMovies from "./pages/movies/nowPlayingMovies";
import popularMovies from "./pages/movies/popularMovies";
import topRatedMovies from "./pages/movies/topRatedMovies";
import upComingMovies from "./pages/movies/upComingMovies";
import PopularPersons from "./pages/persons/popularPersons";
import movieDetails from "./pages/movies/movieDetails";
import personDetails from "./pages/persons/personDetails";
import airingToDayTV from "./pages/TVShows/airingToDayTV";
import onTheAirTV from "./pages/TVShows/onTheAirTV";
import popularTV from "./pages/TVShows/popularTV";
import topRatedTV from "./pages/TVShows/topRatedTV";
import pageNotfound from "./pages/pageNotfound";
import Sidebar from './components/Sidebar'

import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import store from './store'
import './styles/App.css'
import TVShowDetails from "./pages/TVShows/TVShowDetails";

function App() {
  return (
      <Router>
        <Switch>
            <Provider store={store}>
              <Sidebar/>
              <Route exact path="/" component={homepage}/>
              <Route exact path="/Movies/nowPlaying" component={nowPlayingMovies}/>
              <Route exact path="/Movies/popular" component={popularMovies}/>
              <Route exact path="/Movies/topRated" component={topRatedMovies}/>
              <Route exact path="/Movies/upComing" component={upComingMovies}/>
              <Route exact path="/Movies/movieDetails/:id" component={movieDetails}/>
              <Route exact path="/Person/popular" component={PopularPersons}/>
              <Route exact path="/Person/personDetails/:id" component={personDetails}/>
              <Route exact path="/TV/airingToDay" component={airingToDayTV}/>
              <Route exact path="/TV/onTheAir" component={onTheAirTV}/>
              <Route exact path="/TV/popular" component={popularTV}/>
              <Route exact path="/TV/topRated" component={topRatedTV}/>
              <Route exact path="/TV/TVShowDetailes/:id" component={TVShowDetails}/>
            </Provider>
        </Switch>
      </Router>
  );
}

export default App;

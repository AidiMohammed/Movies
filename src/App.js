import NavBar from "./components/NavBar";
import homepage from "./pages/home"
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
          </Provider>
        </div>
      </Switch>
    </Router>
  );
}

export default App;

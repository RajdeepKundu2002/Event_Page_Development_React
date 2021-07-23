import './App.css';
import Home from './Home'
import About from './About'
import Speakers from './Speakers'
import Sponsors from './Sponsors'
import Contact from './Contact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './NAVBAR/NavBar'
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Route render={({location})=>(
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={350} classNames='fade'>
              <Switch location={location}>
                <Route exact path='/' component={Home} />
                <Route exact path='/About' component={About} />
                <Route exact path='/Contact' component={Contact} />
                <Route exact path='/Sponsors' component={Sponsors} />
                <Route exact path='/Speakers' component={Speakers} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          )}></Route>
        </div>
      </Router>
    </>
  );
}
export default App;
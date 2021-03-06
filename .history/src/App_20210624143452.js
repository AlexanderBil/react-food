import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Header} from './components/Header';
import {Footer} from './components/Footer';

import {Home} from './components/pages/Home';
import {About} from './components/pages/About';
import {Contact} from './components/pages/Contact';

function App() {
  return (
<>
  <Header/>
    <main className = "container content">
      <Router>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/about" component = {About}/>
          <Route path = "/contacts" component = {Contact}/>
        </Switch>
      </Router>
    </main>
  <Footer/>
</>
  );
}

export default App;

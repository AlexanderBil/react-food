import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Header} from './components/Header';
import {Footer} from './components/Footer';

import {Home} from './components/pages/Home';
import {About} from './components/pages/About';
import {Contact} from './components/pages/Contact';
import {Error} from './components/pages/Error';

function App() {
  return (
<>
<Router>
  <Header/>
    <main className = "container content">
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/about" component = {About}/>
          <Route path = "/contacts" component = {Contact}/>
          <Route path = "/contacts" component = {Contact}/>
          <Route  component = {Error}/>
        </Switch>
    </main>
  <Footer/>
</Router>
</>
  );
}

export default App;

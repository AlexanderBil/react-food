import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Header} from './components/Header';
import {Footer} from './components/Footer';

import {Home} from './pages/Home';
import {About} from './pages/About';
import {Contact} from './pages/Contact';
import {Category} from './pages/Category';
import {Error} from './pages/Error';
import {} from ''

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
          <Route path = "/category/:name" component = {Category}/>
          <Route  component = {Error}/>
        </Switch>
    </main>
  <Footer/>
</Router>
</>
  );
}

export default App;

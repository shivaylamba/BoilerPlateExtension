import Home from './pages/Home';
import Helpers from './pages/Helpers';
import HelpersAngular from './pages/HelpersAngular';
import HelpersVue from './pages/HelpersVue';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
        <BrowserRouter>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/helpers/react' exact component={Helpers}/>
              <Route path='/helpers/angular' exact component={HelpersAngular}/>
              <Route path='/helpers/vue' exact component={HelpersVue}/>

            </Switch>
        </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import ClientesCadastrados from './pages/ClientesCadastrados';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/clientes" component={ClientesCadastrados} />
    <Route exact path="/cadastro" component={Cadastro} />
    </Switch>    
    </BrowserRouter>
  
  );
}

export default App;

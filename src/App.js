import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
/* import Clientes from './pages/Clientes'; */

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    {/* <Route exact path="/clientes" component={Clientes} /> */}
    <Route exact path="/cadastro" component={Cadastro} />
    </Switch>    
    </BrowserRouter>
  
  );
}

export default App;

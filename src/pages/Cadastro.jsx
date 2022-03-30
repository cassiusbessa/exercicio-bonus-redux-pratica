import React, { Component } from 'react';
import { addCliente} from '../redux/actions/';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {cadastroNome: '', cadastroEmail: '', cadastroIdade: '', cadastroId: ''};
    }; 

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      }
  
      handleSubmit = (event) => { 
          const {history, cadastrar} = this.props;
          event.preventDefault();
          cadastrar(this.state);
          history.push('/clientes');
      }
    render() {
         
        return (
            <form>
                <label>Nome
                    <input name="cadastroNome" type="text" onChange={this.handleChange} />
                </label>
                <label>Email
                    <input name="cadastroEmail" type="email" onChange={this.handleChange} />
                </label>
                <label>Idade
                    <input name="cadastroIdade" type="number" onChange={this.handleChange} />
                </label>
                <button type="submit" onClick={this.handleSubmit} >Cadastrar</button>
            </form>
        );
    }
}
 
const mapDispatchToProps = (dispatch) => ({    
    cadastrar: (state) => dispatch(addCliente(state))
})

Cadastro.propTypes = {
    cadastrar: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
}

export default connect(null, mapDispatchToProps)(Cadastro);
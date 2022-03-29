import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addCliente} from '../actions/index';
import PropTypes from 'prop-types';
class Cadastro extends Component {
    state = { cadastroNome: '', cadastroEmail: '', cadastroIdade: ''   } 

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      }
  
      handleSubmit = (event) => { 
          const {history, cadastrar} = this.props;
          event.preventDefault();
          this.setState({ login: true });
          cadastrar(this.state);
          history.push('/clientes');
      }
    render() {
         
        return (
            <form>
                <label>Nome
                    <input name="cadastroNome" type="text" />
                </label>
                <label>Email
                    <input name="cadastroEmail" type="email" />
                </label>
                <label>Idade
                    <input name="cadastroIdade" type="number" />
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
import React, { Component } from 'react';
class Login extends Component {
    state = { 
        inputEmail: '',
        inputSenha: '',
        login: false   } 

    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }

    handleSubmit = (event) => { 
        const {history} = this.props;
        event.preventDefault();
        this.setState({ login: true });
        history.push('/clientes');
    }


    render() { 
        const { inputEmail, inputSenha } = this.state;
        return (
            <>
            <form>
                <label>email
                    <input 
                    type="email" 
                    name="inputEmail" 
                    onChange={this.handleChange}
                    value={inputEmail}
                    />
                </label>
                <label>senha
                    <input 
                    type="password"
                    name="inputSenha" 
                    onChange={this.handleChange}
                    value={inputSenha}
                    />
                </label>
                <button type="submit" onClick={this.handleSubmit}>Entrar</button>
            </form>
            </>
        );
    }
}
 
export default Login;
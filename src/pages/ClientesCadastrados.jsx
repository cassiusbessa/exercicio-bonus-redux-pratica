import React, {Component} from 'react';
import { connect } from 'react-redux';
import { removeCliente } from '../redux/actions/';

class ClientesCadastrados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order:false,
            cadastrado: [...this.props.clientes],
        }
    }
    
    handleRegister = () =>{
        const {history} = this.props;
        history.push('/cadastro');
    }
    
    handleSort = () => {
        console.log('chamaram?');
        this.setState((prevState) => ({order: !prevState.order}))
    }

    
      

    render() { 
       const {clientes, dispatch} = this.props;
       const {order, cadastrado} = this.state;
       const orderClientes = clientes.sort((a, b) => {
           if(a.payLoad.cadastroNome > b.payLoad.cadastroNome) {
               return 1;
            };
            if(a.payLoad.cadastroNome < b.payLoad.cadastroNome) {
                return -1;
            };
            return 0
        });
        const arrayClientes = order ? orderClientes : cadastrado;
        return (
            <>
            <h1>Clientes Cadastrados</h1>
            <button type='button' onClick={this.handleSort}>Ordenar</button>
            <div className='clientes'>
                <ul>
                    {clientes.length !== 0 ?

                    arrayClientes.map(({payLoad: {cadastroNome, cadastroEmail, cadastroIdade}, id}) => {
                        return (
                            <li key={id}>
                                <button 
                                id={id}
                                onClick={() => dispatch(removeCliente(id))}
                                type='button'>X
                                </button>
                                <p>{cadastroNome}</p>
                                <p>{cadastroEmail}</p>
                                <p>{cadastroIdade}</p>
                            </li>
                        )
                    } ) : <h2>Nenhum cliente cadastrado</h2>}
                </ul>
            </div>
            <button onClick={this.handleRegister}>Cadastrar Cliente</button>
            </>
            
        );
    }
}

const mapStateToProps = (state) => ({
    clientes: state.clientesReducer.clientes,

})
 
export default connect(mapStateToProps)( ClientesCadastrados);
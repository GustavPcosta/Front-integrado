
import './styles.css';
import Merket from '../../assets/Market.svg';
import logo from '../../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import api from '../../Services/api';
import {useState} from 'react';
function SignUp() {
const [nome,setNome] = useState('');
const [email,setEmail] = useState('');
const [senha, setSenha] = useState('');
const [confirmSenha,setConfirmSenha] = useState()
const navigate = useNavigate();

async function handleSubmit(e){
  e.preventDefault()

  try {
    if(!nome || !senha || !email){
      return;
    }
    if(senha !== confirmSenha){
      return;
    }
    const response = await api.post('produtos',{
      name:nome,
      email:email,
      senha:senha

    });
    if(response.data > 204){
      return;
    }
    navigate('/');
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className="container-signUp">
        <div className='signUp'>
        <img src={Merket} alt='logo'></img>
        <img className='logo' src={logo} alt='logo'></img>
          <h1>Market Cubos</h1>
          <h2>Cadastre-se</h2>
          <form onSubmit={handleSubmit}>
            <label
            class
            >
              Nome da loja
            </label>
            <input
            onChange={(e) =>setNome(e.target.value)}
            type='text' 
            placeholder='exemplo@email.com'
            className='input-form'
            >
            </input>
            <label
            >
              E-mail
            </label>
            <input
            onChange={(e) =>setEmail(e.target.value)}
            type='text' 
            placeholder='Insira sua senha'
            className='input-form'
            >
            </input>

            <label
            >
              Senha
            </label>
            <input
            onChange={(e) =>setSenha(e.target.value)}
            type='password' 
            placeholder='Insira sua senha'
            className='input-form'
            >
            </input>

            <label
            >
              Confirme sua senha
            </label>
            <input
            onChange={(e) =>setConfirmSenha(e.target.value)}
            type='password' 
            placeholder='Insira sua senha'
            className='input-form'
            >
            </input>
            <p>Ao criar uma conta, você concorda com a nossa <span className='btn-color-text'>Política de Privacidade </span>e <span className='btn-color-text'>Termos de serviço</span></p>
            <button 
            className='btn-pink-color  button-form'
           
            >
              Criar conta
              </button>
          
          </form>
          <span>Já tem uma conta? <Link to='/'>Fazer login</Link></span>
      </div>
    </div>
  );
}

export default SignUp;

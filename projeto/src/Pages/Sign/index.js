
import './styles.css';
import Merket from '../../assets/Market.svg';
import logo from '../../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../Services/api';
import { useEffect, useState } from 'react';
import useGlobalContexts from '../../Hooks/useGlobalContexts';

function Sign() {
const navigate = useNavigate('');
const [email,setEmail] = useState('');
const [senha,setSenha] = useState('');
const{token,setToken,setUser} = useGlobalContexts


async function handleSubmit(e){
  e.preventDefault();
  navigate('/main');

  try {
    if(!email || !senha){
      return;
    }
    const response = await api.post('/login',{
      email:email,
      senha:senha
    })
    if(response.status > 204){
      return;
    }
    const {usuario,token} = response.data;
    navigate('/main')
    setToken(token);
    setUser(usuario)
    
  } catch (error) {
      console.log(error)
  }
}
useEffect(()=>{
  if(token){
    navigate('/main')
  }
},[])
  return (
    <div className="container-sign">
        <div className='sign'>
        <img src={Merket} alt='logo'></img>
        <img className='logo' src={logo} alt='logo'></img>
          <h1>Market Cubos</h1>
          <h2>Boas vindas</h2>
          <p>Use seu e-mail e senha para acessar a conta</p>
          <form onSubmit={handleSubmit}>
            <label
            >
              E-mail
            </label>
            <input 
            type='text' 
            placeholder='exemplo@email.com'
            className='input-form'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            >
            </input>
            <label>senha</label>
            <input 
            type='password' 
            placeholder='Insira sua senha'
            className='input-form'
            value={senha}
            onChange={(e)=>setSenha(e.target.value)}
            >
            </input>
            <button 
          className='btn-pink-color  button-form'
            >
              Fazer login
              </button>
          
          </form>
          <span>Não posssui conta? <Link to='/cadastro'>Cadastrar</Link></span>
      </div>
    </div>
  );
}

export default Sign;

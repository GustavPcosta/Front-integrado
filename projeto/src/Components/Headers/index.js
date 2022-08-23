import './styles.css'
import Users from '../../assets/users.svg';
import Merket from '../../assets/Market.svg'
import Logo from '../../assets/logo.svg';
import Carrinho from '../../assets/carrinho.svg';
import Casa from '../../assets/casa.svg'
function Headers(){
    return(
        <header>
            <div className='width-limit content-header'>
            <img src={Merket} alt='Merket'></img>
                 <img className='logo-2' src={Logo} alt='Logo'></img>
                 <h1>Market Cubos</h1>
                <div className='header-second'>
                    <div className='profile'>
                    <img className='img-second' src={Carrinho} alt='carro'></img>
                    <span>Meu carrinho</span>
                    <img className='img-second' src={Casa} alt='carro'></img>
                    <span>Meus anúncios</span>
                    <img className='img-second' src={Users} alt='users'>  
                    </img>
                    <strong>Users</strong>   
                    </div>
                    <button className='btn-pink-color button-big'>Quero vender</button>
                </div>
            </div>
        </header>
     )
}
export default Headers
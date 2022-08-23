import './styles.css'
import preview from '../../assets/preview.svg';
import logo from '../../assets/logo.svg';
import market from '../../assets/Market.svg'
import user from '../../assets/users.svg'
function TwoHeader(){
    return(
    <header className='container-hearder-two'>
        <img src={preview} alt='img'></img>
        <img className='hearde-logo' src={logo} alt='img'></img>
        <img className='market-header'src={market} alt='img'></img>
        <img className='user-two' src={user} alt='img'></img>
        <strong>Loja Ac</strong>
    </header>
    )
}

export default TwoHeader;
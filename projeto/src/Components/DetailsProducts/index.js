import './styles.css'
import api from '../../Services/api';
import {useGlobalContexts} from '../../Hooks/useGlobalContexts'
import {useParams,useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import User from '../../assets/users.svg';
import preview from '../../assets/preview.svg'
import pagamento from '../../assets/pagamento.svg'
import pagamento2 from '../../assets/pagamento2.svg'
import pagamento3 from '../../assets/pagamento3.svg'
import cart from '../../assets/carrinho.svg'
import logo from '../../logo.svg'
import Error from '../Error';
import Cards from '../Card';

function DetailsProducts(){
    const {id} = useParams();
    const navigate = useNavigate()
    const [produtos,setProdutos] = useState([]);
    const [produtosCurrents,setCurrentsProdutos] = useState({});
    const {user,setUser,clearUser} = useGlobalContexts()

    async function loadProducts(){
        try {
            const response = await api.get(`/produtos/procurarProduto?`);
            setProdutos([...response.data]);
        } catch (error) {
            console.log(error)
        }
    }
    async function loadProduct(){
        try {
           const response = await api.get(`produtos detail/${id}`);
           setCurrentsProdutos([...response.data])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        loadProduct();
        loadProducts();
    },[])
    return(
        <>
        <header>
          <div className='container-header' >
            <img onClick={() => navigate(-1)} className='return-arrow' src={preview} alt='return'></img>
  
            <img className='container-logo' src={logo} alt='logo' ></img>
  
            <div className='container-user' >
              <img src={User} alt="avatar" />
              <span>{user.email ? `${(user.email.split('@')[0])[0].toUpperCase()}${(user.email.split('@')[0]).substr(1).toLowerCase()}` : 'Usuário'}</span>
            </div>
          </div>
        </header>
  
        <div className='container-main-detail' >
          <div className='container-routes-span' >
            <span>{`Página inicial > ${produtosCurrents.name} - Produto Original C/ Nota Fiscal`}</span>
          </div>
  
          <div className='container-card-detail' >
            <div className='left' style={{ backgroundImage: `url(${produtosCurrents.image})` }} />
  
            <div className='right' >
              <h3>{`${produtos.name} - Produto Original C/ Nota Fiscal`}</h3>
  
              <span className='sell-by'>Vendido e entregue por | <strong>{produtosCurrents.store_name}</strong></span>
  
              <span className='price'>{(produtosCurrents.preco)}</span>
  
              <span className='txt'>Formas de pagamento</span>
  
              <div className='payments-types' >
                <img src={pagamento} alt='bills' />
                <img src={pagamento2} alt='credit-card' />
                <img src={pagamento3} alt='pix' />
              </div>
  
              <span className='txt'>Quantidade</span>
  
              <div className='amount'>
                <div className='choose-amount'><b>-</b> <span>1</span> <b>+</b></div>
  
                <span className='quantity'>{produtosCurrents.quantidade} disponíveis</span>
              </div>
  
              <span className='txt'>Calcular frete e prazo</span>
  
              <input className='input-cep' type="text" placeholder='Digite o CEP' />
  
              <div classname='container-buttons' >
                <button className='btn-cart' >
                  <img src={cart} alt='cart' style={{ marginRight: '6px'}} />
                  Adicionar ao carrinho
                </button>
  
                <button className='btn' >Comprar agora</button>
              </div>
            </div>
          </div>
  
          <div className='card-description' >
            <h3>Descrição do produto</h3>
  
            <p>{produtosCurrents.descricao}</p>
          </div>
  
          <h3 className='display-p-title'>Outros produtos</h3>
  
          <div className='container-display-products' >
            {produtos.sort((a, b) => b.id - a.id).map((product) => (
              <Cards
                key={product.id}
                {...product}
              />
            ))}
          </div>
  
          {alert &&
            <Error
              text={clearUser}
              handleClose={() => setUser('')}
            />
          }
        </div>
      </>
    );
  }
    


export default DetailsProducts;
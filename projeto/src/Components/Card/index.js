import './styles.css'
import {useNavigate} from 'react-router-dom';

function Cards({...props}){
    const{id,image,name,preco} = props;
    const navigate = useNavigate('')

    return(
        <div 
        className='container-card'
        onClick={() => navigate(`/produto/${id}`)}
        >
        <div className='card-image' style={{backgroundImage: `url(${image})`}}></div>
        <div className='card-name'>{name}</div>
        <div className='card-preco'>{preco}</div>
        </div>
    )
}

export default Cards
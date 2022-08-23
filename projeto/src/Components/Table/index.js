import './styles.css'
import caneta from '../../assets/caneta.svg';
import lixeira from '../../assets/lixeira.svg';
import api from '../../Services/api';
import useGlobalContexts from '../../Hooks/useGlobalContexts';
import TwoHeader from '../HearderTwo';
import moletom from '../../assets/moletom-cubos.png'
import ModalConfirm from '../ModalConfirm';
import { useState } from 'react';

function Table(){
const [openModalConfirm,setOpenModal] = useState('');
function handleClose(){
    setOpenModal(false)
}
async function handleConfirm(){
    setOpenModal(true)
}
    return(
        <>
        <TwoHeader/>
        <div className='container-table'>
            <div className='table-head'>
                <h3>Meus produtos</h3>
                <button className='btn-pink-color  button-big'>Criar anúncio</button>
            </div>
            <div className='table-body'>
            </div>
            <div className='linha-vertical'></div>
            <div className='table-row'>
                <span className='container-big'>nome</span>
                <span className='container-middle'>estoque</span>
                <span className='container-small'>vendidos</span>
                <span className='container-small'>valor</span>
                <div className='container-small'></div>
            </div>
            <div className='table-body-two'>
                <img className='container-middle img-photo' src={moletom} alt='png'></img>
                <span className='container-big'>Caneca de Cerâmica - Estampa de Cachorro (Cor: Branca) </span>
                <span className='container-small number'>30</span>
                <span className='container-middle number-one'>8</span>
                <span className='container-big number-three'>$35</span>
                <img className='img-actions'  src={caneta} alt='logo'></img>
                <img
                className='img-actions'
                src={lixeira} 
                alt='logo'
                onClick={() => handleConfirm(1)}
                
                >
                    </img> 
                <div className='container-small'></div>
            </div>
            <ModalConfirm
            open={openModalConfirm}
            handleConfirm={handleConfirm}
            handleClose={handleClose}
            />
        </div>     
    </>
    )
}

export default Table
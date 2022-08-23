import TwoHeader from '../HearderTwo';
import Photo from '../../assets/photo.svg'
import './styles.css'
import ModalConfirmPubli from '../ModalConfirmPubli';
import { useState } from 'react';

 function AddProductos(){
const [ openProducts,setProduductsOpen] = useState('');

function handleClose(){
    setProduductsOpen(false)
}
function handleConfirm(){
    setProduductsOpen(true)
}

async function handleSubmit(e){
    e.preventDefault()
}
    return(
        <>
        <TwoHeader/>
        <div className='container-add-products'>
            <div className='add-modal'>
                <h3>Adiconar novo produto</h3>
                <form onSubmit={handleSubmit}>
                    
                    <label>Título</label>
                    <div className='input-select'>
                    <input className='input-right' placeholder='Nome do produto'></input>
                    <div className='select-and-label'>
                    <label className=''>Categoria</label>
                    <select className='label-add-select'>
                        <option>Selecionar</option>
                    </select>
                    </div>
                    </div>
                    <div className='input-description'>
                    <label>Descrição do produto</label>
                    <input placeholder='Ex.: Camiseta branca, Tamanho G'></input>
                    </div>
                    <div className='input-buy'>
                    <label>Preço</label>
                    <input placeholder='R$'></input>
                    <label className='estoque'>estoque</label>
                    <input className='estoque' placeholder='Ex: 10'></input>
                    </div>
                    <div className='add-photo'>
                    <label>Adicionar foto</label>
                    <input ></input>
                    </div>
                    <div className='btn-buttons'>
                    <button className='btn-pink-ligth button-big '
                    onClick={() =>handleConfirm()}
                    >
                        Publicar anúncio
                        </button>
                    <button className='button-small btn-clear-color btn-cancelar'>Cancelar</button>
                    </div>
                </form>
                <ModalConfirmPubli
                open={openProducts}
                handleClose={handleClose}
                handleConfirm={handleConfirm}
                />
            </div>
        </div>
        </>
    )
}

export default AddProductos;
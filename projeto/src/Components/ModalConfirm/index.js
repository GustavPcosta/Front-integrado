import './styles.css'
import CloseIcon from '../../assets/X.svg'
function ModalConfirm({open,handleClose}){
    return(
        <>
        {open &&
        <div className=' backdrop'>
        <div className='container-modal modal-small'>
        <img 
        src={CloseIcon} 
        alt='Modal'
        onClick={handleClose}
        >

        </img>
        <strong>Remover produto</strong>
        <p>
        Tem certeza que deseja remover esse produto do estoque? A ação não poderá ser desfeita.  
        </p>
        <div className='button-modal'>
        <button className='btn-pink-color button-small buttons-action' >Remover</button>
        <button 
        className='btn-pink-ligth button-small buttons-action'
        onClick={handleClose}
        >
            Cancelar</button>
        </div>
        </div>
        </div>
        }
    </>
    )
}

export default ModalConfirm
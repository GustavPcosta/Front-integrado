import './styles.css'
import CloseIcon from '../../assets/X.svg'
function ModalConfirmPubli({open,handleClose}){
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
        <strong>O anúncio foi publicado</strong>
        <p>
        O anúncio está ativo e o produto disponível para venda.
        </p>
        <div className='button-modal'>
        <button className='btn-pink-color button-small  buttons-action'
        onClick={handleClose}
        >
            Fechar
        </button>
        </div>
        </div>
        </div>
        }
    </>
    )
}

export default ModalConfirmPubli
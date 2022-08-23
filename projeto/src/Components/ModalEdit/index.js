import './styles.css'
import CloseIcon from '../../assets/X.svg'
function ModalEdit({open,handleClose}){
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
        <strong>Descartar alterações</strong>
        <p>
            As alterações realizadas não foram salvas, deseja descartá-las? 
        </p>
        <div className='button-modal'>
        <button className='btn-pink-color button-small buttons-action' >Descartar</button>
        <button 
        className='btn-pink-ligth button-big buttons-action'
        onClick={handleClose}
        >
            Continuar editando</button>
        </div>
        </div>
        </div>
        }
    </>
    )
}

export default ModalEdit
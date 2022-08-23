import './styles.css'
import { useEffect } from 'react'

function Error({text,handleClose}){
   useEffect(()=>{
        if(text){
        setTimeout(()=>{
            handleClose('')
        },3000)
        }
    },[text])

    return(
        <div className='error'>
        <p>{text}</p>
        </div>
    )
}
export default Error

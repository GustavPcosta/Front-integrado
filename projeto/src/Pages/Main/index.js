
import Headers from '../../Components/Headers'
import './styles.css'
import Filter from '../../Components/Filtros';
import { useEffect, useState } from 'react';


function Main(){
    const [text,setText] = useState()

    useEffect(()=>{
        
    })
    return(
        <div className='content-main'>
            <Headers/>
            <main>
              <Filter
              value={text}
              onChange={(search) =>setText(search)}
              />
            </main>
        </div>
    )
}
export default Main;
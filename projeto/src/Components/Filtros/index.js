import './styles.css'
function Filter({value,onChange}){
    function handleChange(event){
        onChange(event.target.value)
    }
    return(
       <input

       placeholder='pesquise o seu produto'
       className='input-search'
       type='search' 
       value={value} 
       onChange={handleChange}

       >

       </input>
    )
}

export default Filter
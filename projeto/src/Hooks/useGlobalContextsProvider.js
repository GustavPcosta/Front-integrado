import { useState } from 'react';
import {useLocalStorage} from 'react-use';

function useGlobalContextsProvider(){
    const[token,setToken,clearToken] = useLocalStorage('token');
    const [user,setUser,clearUser] = useLocalStorage('user');
    const [produtos,setProdutos] = useState([]);
    const [produtosCurrents,setCurrentsProdutos,clearProdutosCurrents] = useLocalStorage('current_produtos');

    return(
        token,
        setToken,
        clearToken,
        user,
        setUser,
        clearUser,
        produtos,
        setProdutos,
        produtosCurrents,
        setCurrentsProdutos,
        clearProdutosCurrents
    )
}

export default useGlobalContextsProvider
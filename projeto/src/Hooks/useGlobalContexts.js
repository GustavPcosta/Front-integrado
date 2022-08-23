import { useContext } from "react";
import GlobalContexts from'../Contexts/GlobalContexts';

function useGlobalContexts(){
    return useContext(GlobalContexts);
}

export default useGlobalContexts;
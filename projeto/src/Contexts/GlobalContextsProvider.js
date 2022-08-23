
import useGlobalContextsProvider from "../Hooks/useGlobalContextsProvider";
import GlobalContexts from "./GlobalContexts";

function GlobalContextProvider(props){
    const valueProvider = useGlobalContextsProvider();

    return(
        <GlobalContexts.Provider value={valueProvider}>
            {props.children}
        </GlobalContexts.Provider>
    )
}

export default GlobalContextProvider
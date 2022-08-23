import { Route,Routes } from "react-router-dom";
import Sign from "./Pages/Sign";
import SignUp from './Pages/SignUp';
import Main from "./Pages/Main";
import Table from "./Components/Table";
import AddProductos from "./Components/AddProdutos";

function MainRouts(){
    return(
        <Routes>
            <Route path="/" element={<Sign/>}></Route>
            <Route path="/cadastro" element={<SignUp/>}></Route>
            <Route path="/main" element={<Main/>}></Route>
            <Route path="/table" element={<Table/>}></Route>
            <Route path="/add" element={<AddProductos/>}></Route>
        </Routes>
    )
}

export default MainRouts;
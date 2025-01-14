import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const AppHeader = () => {

//GLOBAL CONTEXT
const {apiUrl, apiKey, searchValue, setSearchValue} = useContext(GlobalContext);
    
    return (
        <header>
            <nav>
            <div className="d-flex ">
                <h1 className="title">BOOLFLIX</h1>
                <input type="search" value={searchValue} onChange={(event) => setSearchValue(event.target.value)}/>
                <button>Search</button>
            </div>
            </nav>
        </header>
    )
}

export default AppHeader;
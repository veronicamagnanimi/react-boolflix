import { useContext } from "react";
import axios from "axios";
import GlobalContext from "../context/GlobalContext";

const AppHeader = () => {

//GLOBAL CONTEXT
const {apiUrl, apiKey, searchValue, setSearchValue} = useContext(GlobalContext);

//AXIOS
const getMovies = () => {
    axios.get(`${apiUrl}/movie`, {
        params: {
            api_key: apiKey, 
            query: searchValue
        }
    }).then((resp) => {
        console.log(resp);
    });
}
    
    return (
        <header>
            <nav>
            <div className="d-flex">
                <h1 className="title">BOOLFLIX</h1>
                <input type="search" value={searchValue} onChange={(event) => setSearchValue(event.target.value)}/>
                <button onClick={getMovies}>Search</button>
            </div>
            </nav>
        </header>
    )
}

export default AppHeader;
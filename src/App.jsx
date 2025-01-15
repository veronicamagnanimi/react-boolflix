import GlobalContext from "./context/GlobalContext";
import { useState } from "react";
import AppHeader from "./component/AppHeader";
import AppMain from "./component/AppMain";
import axios from "axios";


function App() {
//STATE
const [searchValue, setSearchValue] = useState("");
const [movies, setMovies] = useState([]);
const [series, setSeries] = useState([]);

//API
const apiUrl = "https://api.themoviedb.org/3/search"
const apiKey = "4fc9382334271edcdf3039924423d9a6"

 //CHIAMATA API PER I FILM
 const getContent = () => {
  axios
    .get(`${apiUrl}/movie`, {
      params: {
        api_key: apiKey,
        query: searchValue,
      },
    })
    .then((resp) => {
      setMovies(resp.data.results);
    });
  //CHIAMATA API SERIE TV
  axios
    .get(`${apiUrl}/tv`, {
      params: {
        api_key: apiKey,
        query: searchValue,
      },
    })
    .then((resp) => {
      setSeries(resp.data.results);
    });
};
 
const globalProviderValue = {
  apiUrl, apiKey, searchValue, setSearchValue, movies, setMovies, series, setSeries, getContent
}

 return (
    <>
     <GlobalContext.Provider value={globalProviderValue}>
      <AppHeader />
      <AppMain />
     </GlobalContext.Provider>
    </>
  )
}

export default App;
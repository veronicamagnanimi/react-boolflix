import GlobalContext from "./context/GlobalContext";
import { useState } from "react";
import AppHeader from "./component/AppHeader";
import AppMain from "./component/AppMain";

function App() {
//STATE
const [searchValue, setSearchValue] = useState("");
const [movies, setMovies] = useState([]);
const [series, setSeries] = useState([]);

//API
const apiUrl = "https://api.themoviedb.org/3/search"
const apiKey = "4fc9382334271edcdf3039924423d9a6"
 
const globalProviderValue = {
  apiUrl, apiKey, searchValue, setSearchValue, movies, setMovies, series, setSeries
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
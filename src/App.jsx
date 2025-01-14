import GlobalContext from "./context/GlobalContext";
import { useState } from "react";
import AppHeader from "./component/AppHeader";

function App() {
//STATE
const [searchValue, setSearchValue] = useState("");

//API
const apiUrl = "https://api.themoviedb.org/3/search/"
const apiKey = "4fc9382334271edcdf3039924423d9a6"
 
const globalProviderValue = {
  apiUrl, apiKey, searchValue, setSearchValue
}
  return (
    <>
     <GlobalContext.Provider value={globalProviderValue}>
      <AppHeader />
     </GlobalContext.Provider>
    </>
  )
}

export default App

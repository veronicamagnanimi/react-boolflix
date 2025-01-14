import { useContext } from "react";
import axios from "axios";
import GlobalContext from "../context/GlobalContext";

const AppHeader = () => {
  //GLOBAL CONTEXT
  const { apiUrl, apiKey, searchValue, setSearchValue, setMovies, setSeries } =
    useContext(GlobalContext);

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

  return (
    <header>
      <nav>
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="title">BOOLFLIX</h1>
          <div>
          <input className="py-1"
            type="search"
            placeholder="  Titolo"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <button onClick={getContent} className="button py-1">Search</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;

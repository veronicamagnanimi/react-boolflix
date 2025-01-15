import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const AppHeader = () => {
  //GLOBAL CONTEXT
  const { getContent, searchValue, setSearchValue, handleEnterKey } = useContext(GlobalContext);

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
            onKeyUp={handleEnterKey}
          />
          <button onClick={getContent} className="button py-1">Search</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;

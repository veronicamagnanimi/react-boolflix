import { useContext } from "react";
import ListItems from "./ListItems";
import GlobalContext from "../context/GlobalContext";

const AppMain = () => {
  //STATE
  const {movies, series, showContent} = useContext(GlobalContext);

  return (
    <main className="main">
      {!showContent ? (
        <div className="welcome-main">
          <h1 className="text-black">Benvenuto su <strong className="title">Boolflix!</strong>🎬</h1>
          <h5 className="text-black">Cerca un film o una serie tv</h5>
          </div>
      ) : ( 
<div className="d-flex">
      <section className="main-title">
        <h2 className="card-title bg-secondary">Film🍿</h2>
        <ListItems list={movies} />
      </section>
      <section className="main-title">
        <h2 className="card-title bg-secondary">Serie Tv🍿</h2>
        <ListItems list={series} />
      </section>
      </div>
      )}
        
    </main>
  );
};

export default AppMain;


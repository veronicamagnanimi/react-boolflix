import { useContext } from "react";
import ListItems from "./ListItems";
import GlobalContext from "../context/GlobalContext";

const AppMain = () => {
  //STATE
  const {movies, series} = useContext(GlobalContext);

  return (
    <main className="main">
        <div className="d-flex justify-content-between p-3">
      <section className="main-title">
        <h2 className="mb-4">Film</h2>
        <ListItems list={movies} />
      </section>
      <section className="main-title">
        <h2 className="mb-4">Serie Tv</h2>
        <ListItems list={series} />
      </section>
      </div>
    </main>
  );
};

export default AppMain;


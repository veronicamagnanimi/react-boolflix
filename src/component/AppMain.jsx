import { useContext } from "react";
import ListItems from "./ListItems";
import GlobalContext from "../context/GlobalContext";

const AppMain = () => {
  //STATE
  const {movies, series} = useContext(GlobalContext);

  return (
    <main>
        <div className="d-flex justify-content-between p-3">
      <section>
        <h2>Film</h2>
        <ListItems list={movies} />
      </section>
      <section>
        <h2>Serie Tv</h2>
        <ListItems list={series} />
      </section>
      </div>
    </main>
  );
};

export default AppMain;

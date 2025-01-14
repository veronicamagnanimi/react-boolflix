import { useState } from "react";
import MovieList from "./MovieList";

const AppMain = () => {

//STATE
const [movies, setMovies] = useState([]);

return (
    <main>
        <MovieList movies={movies} />
    </main>
)

}

export default AppMain;
import { FaStar, FaRegStar } from "react-icons/fa";

const ListItems = ({ list }) => {
  const imgCover = "https://image.tmdb.org/t/p";
  const stars = (vote) => Math.ceil(vote / 2);
  const defaultImage = "./default.jpg";

  return (
    <div className="row">
      {list.map((item) => (
        <div key={item.id} className="col">
          <div className="card">
          <img
              src={item.poster_path ? `${imgCover}/w200/${item.poster_path}` : defaultImage}
              alt={item.title || item.name}
            />
            <div className="overlay">
              <div className="overlay-content">
                <h4>{item.title || item.name}</h4>
                <p>
                  <strong>Titolo originale:</strong>{" "}
                  {item.original_title || item.original_name}
                </p>
                <p>
                  <strong>Lingua:</strong>
                  <img
                    className="flag"
                    src={
                      item.original_language === "en"
                        ? "./en.png"
                        : item.original_language === "it"
                        ? "./it.png"
                        : "./placeholder.png"
                    }
                    alt={`${item.original_language}`}
                    style={{ width: "1.6rem", height: "1.2rem" }}
                  />
                </p>
                <p>
                  <strong>Voto:</strong>
                  <span className="star">
                    {Array.from({ length: 5 }, (_, i) =>
                      i < stars(item.vote_average) ? (
                        <FaStar key={i} />
                      ) : (
                        <FaRegStar key={i} />
                      )
                    )}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default ListItems;



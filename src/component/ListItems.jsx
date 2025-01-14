import { FaStar, FaRegStar } from "react-icons/fa";

const ListItems = ({ list }) => {
  const imgCover = "https://image.tmdb.org/t/p";
  const stars = (vote) => Math.ceil(vote / 2);

  return (
    <div className="list">
      {list.map((item) => (
        <div key={item.id} className="list-item">

          {/* title + img */}
          <h4>{item.title || item.name}</h4>{" "}
          <img src={`${imgCover}/w200/${item.poster_path}`} alt="" />
          <p>
            <strong>Titolo originale:</strong>{" "}
            {item.original_title || item.original_name}
          </p>

          {/* language */}
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
          
          {/* vote stars */}
          <p>
            <strong>Voto:</strong>{" "}
            <p className="star">
              {""}{" "}
              {(() => {
                const starsVote = stars(item.vote_average); //calcolo le stelle piene
                const starsElement = [];
                for (let i = 0; i < 5; i++) {
                  if (i < starsVote) {
                    starsElement.push(<FaStar key={i} />);
                  } else {
                    starsElement.push(<FaRegStar key={i} />);
                  }
                }
                return starsElement;
              })()}
            </p>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ListItems;



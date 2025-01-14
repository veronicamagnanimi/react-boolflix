const ListItems = ({ list }) => {

    return (
      <div className="list">
        {list.length > 0 ? (
          list.map((item) => (
            <div key={item.id} className="list-item">
              <h3>{item.title || item.name}</h3>
              <p><strong>Titolo originale:</strong> {item.original_title || item.original_name}</p>
              <p><strong>Lingua:</strong><img className="flag"src={
                item.original_language === "en" ? "./public/en.png" : item.original_language === "it" ? "./public/it.png"
            : "./public/placeholder.png"} alt={`${item.original_language}`} style={{width: "1.6rem", height: "1.2rem"}} /></p>
              <p><strong>Voto:</strong> {item.vote_average}</p>
            </div>
          ))
        ) : (
          <p>Nessun risultato trovato</p>
        )}
      </div>
    );
  };
  
  export default ListItems;
  
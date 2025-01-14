const ListItems = ({ list }) => {

    return (
      <div className="list">
        {list.length > 0 ? (
          list.map((item) => (
            <div key={item.id} className="list-item">
              <h3>{item.title || item.name}</h3>
              <p><strong>Titolo originale:</strong> {item.original_title || item.original_name}</p>
              <p><strong>Lingua:</strong> {item.original_language}</p>
              <p><strong>Voto:</strong> {item.vote_average}</p>
            </div>
          ))
        ) : (
          <p>Scrivi il nome di un film o serie tv</p>
        )}
      </div>
    );
  };
  
  export default ListItems;
  
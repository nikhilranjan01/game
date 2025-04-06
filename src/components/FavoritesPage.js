import { useSelector } from 'react-redux';

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.items);

  return (
    <div className="container mt-5">
      <h2>Your Favorite Games</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet!</p>
      ) : (
        <div className="row">
          {favorites.map((game) => (
            <div key={game.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5>{game.name}</h5>
                  <p>Rating: {game.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;

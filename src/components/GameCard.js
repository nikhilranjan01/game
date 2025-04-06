import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';

const GameCard = ({ game }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some(fav => fav.id === game.id);

  const toggleFavorite = () => {
    isFavorite
      ? dispatch(removeFavorite(game.id))
      : dispatch(addFavorite(game));
  };

  return (
    <div>
      {/* Your existing game card layout */}
      <button className="btn btn-warning mt-2" onClick={toggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

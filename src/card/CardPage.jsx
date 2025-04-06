import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../redux/favoritesSlice';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">⭐ Your Favorite Games</h2>

      {favorites.length === 0 ? (
        <p className="text-muted text-center">You have no favorite games yet.</p>
      ) : (
        <Row className="g-4">
          {favorites.map((game) => (
            <Col md={4} key={game.id}>
              <Card className="shadow border-0 rounded-4">
                <Card.Img
                  variant="top"
                  src={game.background_image}
                  alt={game.name}
                  className="rounded-top-4"
                />
                <Card.Body className="text-center d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title>{game.name}</Card.Title>
                    <Card.Text className="text-muted small">
                      <strong>⭐ Rating:</strong> {game.rating}
                    </Card.Text>
                  </div>
                  <Link to={`/library/${game.id}`} className="btn btn-dark rounded-pill mt-2">
                    🎮 View Details
                  </Link>
                  <Button
                    variant="danger"
                    className="rounded-pill mt-2"
                    onClick={() => dispatch(removeFavorite(game.id))}
                  >
                    💔 Remove from Favorites
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default CardPage;

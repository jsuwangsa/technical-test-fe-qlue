import "./Product.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Loading from "../spinner/Loading";
import ReactPaginate from "react-paginate";

function Product() {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);
  const [genre, setGenre] = useState("");
  const genres = [
    "action",
    "arcade",
    "strategy",
    "shooter",
    "adventure",
    "puzzle",
    "racing",
    "sports",
  ];

  const BASE_URL = "https://api.rawg.io/api/";
  const key = "5e59f9523b404f11a5dd5cc736f182db";

  const getGames = async () => {
    setLoading(true);
    const response = await axios
      .get(
        `${BASE_URL}games?%3Fpage=1&%3Fpage_size=20${
          genre !== "" ? `&genres=${genre}` : null
        }&key=${key}&page=${page === 0 ? "1" : `${page}`}`
      )
      .catch((error) => console.log(error));
    if (response?.data) {
      setGames(response.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genre, page]);

  const renderGameCard = (game) => {
    return (
      <div key={game.id} className="game">
        <img
          src={game.background_image}
          alt={game.name}
          className="game__img"
        />
        <h5 className="game__title">{game.name}</h5>
        <div className="details">
          <div className="genres">
            <h6>Genres:</h6>
            {game.genres.map((genre) => (
              <div className="genres__item" key={`key-${genre.name}`}>
                {genre.name}
              </div>
            ))}
          </div>
          <div className="ratings">
            <h6>Ratings:</h6> {game.rating}
          </div>
        </div>
      </div>
    );
  };

  const changeGenre = (genre) => {
    setGenre(genre);
  };

  const changePage = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <>
      {loading === true ? <Loading /> : null}
      {games?.results ? (
        <Container className="main-content">
          <div className="category">
            <h2 className="category-title">Browse by genre</h2>
            <div className="genre-container">
              <button
                onClick={() => changeGenre("")}
                className={`button-category ${
                  "" === genre ? "btn-active" : null
                }`}
              >
                All
              </button>
              {genres.map((gen) => (
                <button
                  key={Math.ceil(Math.random() * 1000 + 1)}
                  onClick={() => changeGenre(gen)}
                  className={`button-category ${
                    gen === genre ? "btn-active" : null
                  }`}
                >
                  {gen}
                </button>
              ))}
            </div>
          </div>
          <div className="games">
            {games?.results &&
              games?.results.map((game) => renderGameCard(game))}
          </div>
          <ReactPaginate
            pageCount={10}
            nextLabel="Next >>"
            previousLabel="<< Prev"
            onPageChange={changePage}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            nextClassName={`page-item ${
              games.next === null ? "disabled" : null
            }`}
            previousClassName={`page-item ${
              games.previous === null ? "disabled" : null
            }`}
            disabledClassName="pagination-disabled"
            activeClassName="pagination-active"
          />
        </Container>
      ) : null}
    </>
  );
}

export default Product;

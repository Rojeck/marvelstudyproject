import "./singleComicPage.scss";

import { Link, useParams } from "react-router-dom";
import useMarvelService from "../../services/MarvelService";

import { useState, useEffect } from "react";
import Spinner from "../spinner/Spinner";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Error from "../error/Error";

const SingleComicPage = () => {
  const { comicId } = useParams();
  const [comic, setComic] = useState({});
  const { loading, error, getComicsById } = useMarvelService();

  const loadComic = () => {
    getComicsById(comicId).then((comic) => {
      setComic(comic);
    });
  };

  useEffect(() => {
    loadComic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comicId]);

  return (
    <ErrorBoundary>
      {loading ? <Spinner /> : null}
      {error ? <Error /> : null}
      {!loading && !error ? <View comic={comic} /> : null}
    </ErrorBoundary>
  );
};

const View = ({ comic }) => {
  const { title, price, description, thumbnail } = comic;
  return (
    <div className="single-comic">
      <img src={thumbnail} alt="comic" className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{title}</h2>
        <p className="single-comic__descr">{description}</p>
        <div className="single-comic__price">{price}$</div>
      </div>
      <Link to="/comics" className="single-comic__back">
        Back to all
      </Link>
    </div>
  );
};
export default SingleComicPage;

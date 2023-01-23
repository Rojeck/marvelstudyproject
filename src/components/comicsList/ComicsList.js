import { useEffect, useState } from "react";
import useMarvelService from "../../services/MarvelService";
import ComicsItem from "../comicsItem/ComicsItem";
import Spinner from "../spinner/Spinner";
import Error from "../error/Error";
import "./comicsList.scss";

const ComicsList = () => {
  const { loading, error, getAllComics } = useMarvelService(),
    [loadingNewComics, setLoadingNewComics] = useState(false),
    [comics, setComics] = useState([]),
    [offset, setOffset] = useState(210),
    [comicsListEnded, setComicsListEnded] = useState(false);

  useEffect(() => {
    requestLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const requestLoad = (offset) => {
    getAllComics(offset).then(onLoadComics);
  };

  const onComicsListLoading = () => {
    setLoadingNewComics(true);
    requestLoad(offset);
  };
  const onLoadComics = (newComics) => {
    let comicsListEnd = false;
    if (newComics.length < 8) {
      comicsListEnd = true;
    }
    setComics((comics) => [...comics, ...newComics]);
    setLoadingNewComics(false);
    setOffset((offset) => offset + 8);
    setComicsListEnded(comicsListEnd);
  };

  const items = comics.map((comics, index) => {
    return <ComicsItem key={index} comics={comics} />;
  });

  return (
    <div className="comics__list">
      {loading ? <Spinner /> : null}
      {error ? <Error /> : null}
      <View comics={items} />
      <button
        disabled={loadingNewComics}
        style={{ display: comicsListEnded ? "none" : "block" }}
        className="button button__main button__long"
        onClick={() => onComicsListLoading()}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

const View = ({ comics }) => {
  return <ul className="comics__grid">{comics}</ul>;
};

export default ComicsList;

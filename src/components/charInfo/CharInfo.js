import "./charInfo.scss";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import useMarvelService from "../../services/MarvelService";

import Skeleton from "../skeleton/Skeleton";
import Spinner from "../spinner/Spinner";
import Error from "../error/Error";

const CharInfo = (props) => {
  const { getCharacterById, loading, error } = useMarvelService();

  const [char, setChar] = useState(null);

  useEffect(() => {
    loadChar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.selectedChar]);

  const updateChar = (char) => {
    setChar(char);
  };

  const loadChar = () => {
    const { selectedChar } = props;

    if (selectedChar) {
      getCharacterById(selectedChar).then(updateChar);
    }
  };

  const loadingView = loading ? <Spinner /> : null;
  const errorView = error ? <Error /> : null;

  const skeleton = !(loading || error || char) ? <Skeleton /> : null;
  const content = loading || error || !char ? null : <View char={char} />;

  return (
    <div className="char__info">
      {loadingView}
      {errorView}
      {skeleton}
      {content}
    </div>
  );
};

const View = ({ char }) => {
  const { name, description, thumbnail, wiki, homepage, comics } = char;
  let imgStyle = { objectFit: "cover" };
  if (
    thumbnail ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
  ) {
    imgStyle = { objectFit: "unset" };
  }
  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} style={imgStyle} alt="abyss" />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">
        {description
          ? description
          : "There is no description for this character"}
      </div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {comics.length === 0 ? "There is no comics for this character" : null}
        {comics.map((item, index) => {
          // eslint-disable-next-line array-callback-return
          if (index > 9) return;
          return (
            <li key={index} className="char__comics-item">
              {item.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

CharInfo.propTypes = {
  selectedChar: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CharInfo;

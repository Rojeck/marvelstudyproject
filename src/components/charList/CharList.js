import "./charList.scss";
import { useEffect, useRef, useState } from "react";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import Error from "../error/Error";
import CharItem from "../charItem/CharItem";
import PropTypes from "prop-types";

const CharList = (props) => {
  const {loading, error, getAllCharacters} = useMarvelService();
  const [chars, setChars] = useState([]);
  const [loadingNewChars, setLoadingNewChars] = useState(false);
  const [offset, setOffset] = useState(550);
  const [charsListEnd, setCharsListEnd] = useState(false);
  const refs = useRef([]);

  useEffect(() => {
    requestLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const requestLoad = (offset) => {
      getAllCharacters(offset)
      .then(onLoadCharacters)
  };
  const onCharListLoading = () => {
    setLoadingNewChars(true);
    requestLoad(offset);
  };
  const onLoadCharacters = (newChars) => {
    let charsListEnd = false;
    if (newChars.length < 9) {
      charsListEnd = true;
    }
    setChars((chars) => [...chars, ...newChars]);
    setLoadingNewChars(false);
    setOffset((offset) => offset + 9);
    setCharsListEnd(charsListEnd);
  };


  const focusOnItem = (index) => {
    refs.current.forEach((item) =>
      item?.classList.remove("char__item_selected")
    );
    refs.current[index]?.classList.add("char__item_selected");
    refs[index]?.focus();
  };

  const setRef = (ref, index) => {
    refs.current[index] = ref;
  };

  const items = chars.map((char, index) => {
    return (
      <CharItem
        key={char.id}
        char={char}
        onCharSelect={props.onCharSelect}
        setRef={(ref) => setRef(ref, index)}
        focusOnItem={() => focusOnItem(index)}
      />
    );
  });

  return (
    <div className="char__list">
      {loading && !loadingNewChars ? <Spinner /> : null}
      {error ? <Error /> : null}
      <View chars={items} /> 
      <button
        disabled={loadingNewChars}
        style={{ display: charsListEnd ? "none" : "block" }}
        className="button button__main button__long"
      >
        <div className="inner" onClick={() => onCharListLoading(offset)}>
          load more
        </div>
      </button>
    </div>
  );
};

const View = ({ chars }) => {
  return <ul className="char__grid">{chars}</ul>;
};

CharList.propTypes = {
  onCharSelect: PropTypes.func,
};

export default CharList;

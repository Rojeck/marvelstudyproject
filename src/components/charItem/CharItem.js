import "./charItem.scss";

const CharItem = ({ char, onCharSelect, setRef, focusOnItem }) => {
  const { name, thumbnail } = char;
  let imgStyle = { objectFit: "cover" };
  if (
    thumbnail ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
  ) {
    imgStyle = { objectFit: "unset" };
  }
  return (
    <li
      ref={(ref) => setRef(ref)}
      tabIndex={0}
      onClick={() => {
        onCharSelect(char.id);
        focusOnItem();
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onCharSelect(char.id);
          focusOnItem();
        }
      }}
      className="char__item"
    >
      <img style={imgStyle} src={thumbnail} alt="char" />
      <div className="char__name">{name}</div>
    </li>
  );
};

export default CharItem;

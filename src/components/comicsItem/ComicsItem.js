
import { Link } from 'react-router-dom';
import './comicsItem.scss';

const ComicsItem = ({comics}) => {
  const {title, thumbnail, price, id} = comics;
  return (
    <li className="comics__item">
      <Link to={`${id}`}>
        <img src={thumbnail} alt="comics" className="comics__item-img" />
        <div className="comics__item-name">{title}</div>
        <div className="comics__item-price">{price}</div>
      </Link>
    </li>
  );
};

export default ComicsItem;

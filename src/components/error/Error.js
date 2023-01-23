import error from "../../resources/gif/error.gif";
import "./error.scss";

const Error = () => {
  return (
    <div className="error-img-block">
      <img src={error} alt="Error" />
    </div>
  );
};

export default Error;

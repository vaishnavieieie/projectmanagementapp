import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5 bg-light pt-5 pb-5 rounded">
      <FaExclamationTriangle className="text-danger" size="5rem" />
      <h1>404</h1>
      <p className="lead">Sorry this page doesn't exist :'-(</p>
      <Link to="/" className="btn btn-primary">
        Go back
      </Link>
    </div>
  );
};

export default NotFound;

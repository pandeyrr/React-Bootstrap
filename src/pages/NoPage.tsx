import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 text-center">
            <h1 className="py-5">404 - Page Not Found</h1>
            <p>We're sorry, but the page you requested does not exist.</p>
            <p>
              You can go back to the <Link to="/">Home</Link> or
              <Link to="/contact"> contact us</Link> if you need further
              assistance.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoPage;

function Card() {
  const cardTitle = ["Card Title"];
  const cardText = [
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
  ];
  //const goSomewhere = ["Go Somewhere"];
  return (
    <>
      <h1>Card</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img
              src={"https://placehold.co/600x400"}
              className="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">{cardTitle}</h5>
              <p className="card-text">{cardText}</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={"https://placehold.co/600x400"}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{cardTitle}</h5>
              <p className="card-text">{cardText}</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={"https://placehold.co/600x400"}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{cardTitle}</h5>
              <p className="card-text">{cardText}</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={"https://placehold.co/600x400"}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{cardTitle}</h5>
              <p className="card-text">{cardText}</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={"https://placehold.co/600x400"}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{cardTitle}</h5>
              <p className="card-text">{cardText}</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={"https://placehold.co/600x400"}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{cardTitle}</h5>
              <p className="card-text">{cardText}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;

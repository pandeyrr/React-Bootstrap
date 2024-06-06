function ListGroup() {
  const items = ["Edinburgh", "London", "Glasgow", "Paris", "New York"];
  let selectedIndex = 0;
  return (
    <>
      <div className="row">
        <div className="col">
          <h2 className="py-4">List Group</h2>
          <ul className="list-group">
            {items.map((item, index) => (
              <li
                className={
                  selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={item}
                onClick={() => {
                  selectedIndex = index;
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ListGroup;

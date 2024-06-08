import { useState } from "react";

function ListGroup() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const items = ["Edinburgh", "London", "Glasgow", "Paris", "New York"];
  const orderedListItems = [
    {
      subheading: "Subheading 1",
      content: "Content for list item 1",
      badge: 14,
    },
    {
      subheading: "Subheading 2",
      content: "Content for list item 2",
      badge: 14,
    },
    {
      subheading: "Subheading 3",
      content: "Content for list item 3",
      badge: 14,
    },
  ];

  return (
    <>
      {/* Unordered List */}
      <div className="row">
        <div className="col-6">
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
                  setSelectedIndex(index);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Ordered List */}
        <div className="col-6">
          <h2 className="py-4">Numbered List Group</h2>
          <ol className="list-group list-group-numbered">
            {orderedListItems.map((item, index) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-start"
                key={index}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.subheading}</div>
                  {item.content}
                </div>
                <span className="badge text-bg-primary rounded-pill">
                  {item.badge}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default ListGroup;

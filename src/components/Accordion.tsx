const Accordion = () => {
  const accordionData = [
    {
      id: 1,
      title: "Accordion Item #1",
      content: "Content for Accordion Item #1 goes here.",
    },
    {
      id: 2,
      title: "Accordion Item #2",
      content: "Content for Accordion Item #2 goes here.",
    },
    {
      id: 3,
      title: "Accordion Item #3",
      content: "Content for Accordion Item #3 goes here.",
    },
  ];
  return (
    <>
      <h1>Accordion</h1>
      <div className="accordion" id="accordionExample">
        {accordionData.map((item, index) => (
          <div className="accordion-item" key={item.id}>
            <h2 className="accordion-header" id={`heading${item.id}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${item.id}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`collapse${item.id}`}
              >
                {item.title}
              </button>
            </h2>
            <div
              id={`collapse${item.id}`}
              className={`accordion-collapse collapse ${
                index === 0 ? "show" : ""
              }`}
              data-bs-parent="#accordionExample"
              aria-labelledby={`heading${item.id}`}
            >
              <div className="accordion-body">{item.content} </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;

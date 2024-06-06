const Card = () => {
  const cardData = [
    {
      id: 1,
      title: "Card Title 1",
      content: "Card content goes here",
      image:
        "https://images.unsplash.com/photo-1716908952387-0b1128538b68?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    },
    {
      id: 2,
      title: "Card Title 2",
      content: "Card 2 content goes here",
      image:
        "https://plus.unsplash.com/premium_photo-1664361480872-6416aab14696?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      title: "Card Title 3",
      content: "Card 3 content goes here",
      image:
        "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      title: "Card Title 4",
      content: "Card 5 content goes here",
      image:
        "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      title: "Card Title 5",
      content: "Card 5 content goes here",
      image:
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      title: "Card Title 6",
      content: "Card 5 content goes here",
      image:
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  return (
    <>
      <h1 className=" pb-5">Featured places</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cardData.map((item) => (
          <div className="col" key={item.id}>
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.title} />

              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;

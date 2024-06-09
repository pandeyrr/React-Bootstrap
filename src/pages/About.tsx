interface SubSection {
  subTitle: string;
  subContent: string;
}

interface TeamMember {
  name: string;
  role: string;
}

interface Section {
  title: string;
  content: string | SubSection[] | TeamMember[];
}

const About = () => {
  const sections: Section[] = [
    {
      title: "Welcome to our website!",
      content:
        "We are passionate about Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Our goal is to provide Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Our Mission",
      content:
        "At Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., our mission is to Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Whether it's Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., we strive to Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "What We Offer",
      content: [
        {
          subTitle: "Informative Articles",
          subContent:
            "We publish Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. From Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. to Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., our articles cover Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          subTitle: "Helpful Resources",
          subContent:
            "In addition to articles, we also provide Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. These resources are designed to Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
    {
      title: "Our Team",
      content: [
        {
          name: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          role: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          role: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          role: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
    {
      title: "Contact Us",
      content:
        "Have a question or suggestion? We'd love to hear from you! You can reach out to us via email at contact@email.com or through our contact form. Thank you for visiting Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.! We hope you find our website helpful and informative.",
    },
  ];

  return (
    <>
      <div className="row m-5">
        <div className="col">
          <h1 className="pb-5">About us</h1>
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="py-2">{section.title}</h3>
              {typeof section.content === "string" ? (
                <p>{section.content}</p>
              ) : Array.isArray(section.content) ? (
                section.title === "Our Team" ? (
                  <ul>
                    {section.content.map((item, subIndex) => (
                      <li key={subIndex}>
                        <strong>{(item as TeamMember).name}</strong>:{" "}
                        {(item as TeamMember).role}
                      </li>
                    ))}
                  </ul>
                ) : (
                  section.content.map((item, subIndex) => (
                    <div key={subIndex}>
                      {/* Check if it's a SubSection or TeamMember */}
                      {"subTitle" in item ? (
                        <>
                          <h4>{item.subTitle}</h4>
                          <p>{item.subContent}</p>
                        </>
                      ) : (
                        <p>
                          <strong>{(item as TeamMember).name}</strong>:{" "}
                          {(item as TeamMember).role}
                        </p>
                      )}
                    </div>
                  ))
                )
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;

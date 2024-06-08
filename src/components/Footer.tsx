import socialLinks from "./socialLinks";
function Footer() {
  const sections = [
    {
      title: "Section 1",
      links: [
        { text: "Home", url: "#" },
        { text: "Features", url: "#" },
        { text: "Pricing", url: "#" },
        { text: "FAQs", url: "#" },
        { text: "About", url: "#" },
      ],
    },
    {
      title: "Section 2",
      links: [
        { text: "Service 1", url: "#" },
        { text: "Service 2", url: "#" },
        { text: "Service 3", url: "#" },
        { text: "Service 4", url: "#" },
      ],
    },
    {
      title: "Section 3",
      links: [
        { text: "Portfolio", url: "#" },
        { text: "Testimonials", url: "#" },
        { text: "Contact", url: "#" },
      ],
    },
    // More sections can be added
  ];

  return (
    <>
      <div className="container-fluid bg-primary-subtle">
        <footer className="p-5 mt-5">
          <div className="row">
            {sections.map((section, index) => (
              <div key={index} className="col-6 col-md-2 mb-3">
                <h5>{section.title}</h5>
                <ul className="nav flex-column">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="nav-item mb-2">
                      <a
                        href={link.url}
                        className="nav-link p-0 text-body-secondary"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>
              © {new Date().getFullYear()} Company, Inc. All rights reserved.
            </p>
            <ul className="list-unstyled d-flex">
              {socialLinks.map((socialLink, index) => (
                <li key={index} className="ms-3">
                  <a className="link-body-emphasis" href={socialLink.url}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className={`bi bi-${socialLink.icon}`}
                      viewBox="0 0 16 16"
                    >
                      <path d={socialLink.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;

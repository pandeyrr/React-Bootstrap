import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  signUp: boolean;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  signUp?: string;
  subject?: string;
  message?: string;
}

const Forms: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    signUp: false,
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", formData);
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        signUp: false,
        subject: "",
        message: "",
      }); // Clear form data
    }
  };

  const handleClose = () => setIsSubmitted(false);

  return (
    <>
      <h1 className="pb-5">Contact</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                }`}
                id="floatingFirstName"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <label htmlFor="floatingFirstName">First Name</label>
              <div className="invalid-feedback">{errors.firstName}</div>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
                id="floatingLastName"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              <label htmlFor="floatingLastName">Last Name</label>
              <div className="invalid-feedback">{errors.lastName}</div>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="floatingEmail"
                placeholder="name@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="floatingEmail">Email</label>
              <div className="invalid-feedback">{errors.email}</div>
              <div className="form-check py-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  name="signUp"
                  checked={formData.signUp}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Sign up for news and updates
                </label>
              </div>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                id="floatingSubject"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <label htmlFor="floatingSubject">Subject</label>
              <div className="invalid-feedback">{errors.subject}</div>
            </div>
            <div className="col-md-12">
              <div className="form-floating">
                <textarea
                  className={`form-control ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="floatingTextarea2">Message</label>
                <div className="invalid-feedback">{errors.message}</div>
              </div>
            </div>
            <div className="col-12 py-4">
              <button type="submit" className="btn btn-primary btn-lg px-5">
                Submit
              </button>
            </div>
          </form>

          {isSubmitted && (
            <div
              className="modal fade show d-block"
              tabIndex={-1}
              role="dialog"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Thank You!</h5>
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={handleClose}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>Thank you for your submission!</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleClose}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="col-12 col-md-6">
          <div className="embed-responsive">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71503.12218365961!2d-3.287738625853735!3d55.94118085867851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887b800a5982623%3A0x64f2147b7ce71727!2sEdinburgh!5e0!3m2!1sen!2suk!4v1717926047699!5m2!1sen!2suk"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forms;

import React, { useState } from "react";

const RadioButton: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Selected option: ${selectedOption}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className=" py-4">Radio Button</h2>
      <h3>Select an option:</h3>
      <div className="form-check">
        <input
          className="form-check-input"
          name="exampleRadios"
          id="exampleRadios1"
          type="radio"
          value="Option 1"
          checked={selectedOption === "Option 1"}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="exampleRadios1">
          Option 1
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          name="exampleRadios"
          id="exampleRadios2"
          type="radio"
          value="Option 2"
          checked={selectedOption === "Option 2"}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="exampleRadios2">
          Option 1
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          name="exampleRadios"
          id="exampleRadios3"
          type="radio"
          value="Option 3"
          checked={selectedOption === "Option 3"}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="exampleRadios3">
          Option 1
        </label>
      </div>
      <button type="submit" className="btn btn-primary my-3">
        Submit
      </button>
    </form>
  );
};

export default RadioButton;

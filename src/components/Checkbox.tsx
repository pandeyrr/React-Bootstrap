import React, { useState } from "react";

const Checkbox: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(value)) {
        return prevSelectedOptions.filter((option) => option !== value);
      } else {
        return [...prevSelectedOptions, value];
      }
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Selected options: ${selectedOptions.join(", ")}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className=" py-4">Checkbox</h2>
      <h3>Select options:</h3>
      <div className="form-check">
        <input
          className="form-check-input"
          id="defaultCheck1"
          type="checkbox"
          value="Option 1"
          checked={selectedOptions.includes("Option 1")}
          onChange={handleChange}
        />
        <label htmlFor="defaultCheck1" className="form-check-label">
          Option 1
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="defaultCheck2"
          type="checkbox"
          value="Option 2"
          checked={selectedOptions.includes("Option 2")}
          onChange={handleChange}
        />
        <label htmlFor="defaultCheck2" className="form-check-label">
          Option 2
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="defaultCheck3"
          type="checkbox"
          value="Option 3"
          checked={selectedOptions.includes("Option 3")}
          onChange={handleChange}
        />
        <label htmlFor="defaultCheck3" className="form-check-label">
          Option 3
        </label>
      </div>
      <button type="submit" className="btn btn-secondary my-3">
        Submit
      </button>
    </form>
  );
};

export default Checkbox;

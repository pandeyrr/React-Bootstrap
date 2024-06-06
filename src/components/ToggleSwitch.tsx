import { useState } from "react";

const ToggleSwitch = () => {
  const [isChecked, setisChecked] = useState(false);

  return (
    <>
      <h2 className="py-4">Checkbox</h2>
      <label>
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={() => setisChecked(!isChecked)}
          id="flexCheckDefault"
        />
        {isChecked ? " Checked" : " Unckecked"}
      </label>
    </>
  );
};

export default ToggleSwitch;

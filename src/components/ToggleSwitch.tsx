import { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <h1>Checkbox</h1>
      <label>
        <input
          className="form-check-input"
          type="checkbox"
          checked={isOn}
          onChange={() => setIsOn(!isOn)}
        />
        {isOn ? " Checked" : " Unckecked"}
      </label>
    </>
  );
};

export default ToggleSwitch;

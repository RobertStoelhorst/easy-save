import React, { useState } from 'react';
import cx from 'classnames';

const Switch = ({ checked, rounded = false, onToggle, ...props }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleSwitch = () => {
    setIsChecked((prevState) => !prevState);
    if (onToggle) {
      onToggle(!isChecked);
    }
  };

  const sliderCX = cx('slider', {
    rounded: rounded,
  });

  return (
    <div className="toggle">
      <p id="autosave-heading">Autosave option</p>
      <label className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleSwitch}
          {...props}
        />
        <span className={sliderCX} />
      </label>
    </div>
  );
};

export default Switch;

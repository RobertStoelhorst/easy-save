import React from 'react';
import cx from 'classnames';

const Switch = ({ rounded = false }, props) => {

  const sliderCX = cx('slider', {
    'rounded': rounded
  });

  return (
    <div className="toggle">
     <p id="autosave-heading">Autosave option</p>
      <label className="switch">
        <input type="checkbox" />
        <span className={sliderCX} />
      </label>
    </div>
  );
}



 export default Switch;

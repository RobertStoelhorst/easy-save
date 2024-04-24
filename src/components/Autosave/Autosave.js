import React from 'react';
import Switch from '../ToggleSwitch/Switch';

const Autosave = ({ isSaving, onToggle }) => {
  return (
    <div className="autosave">
      <Switch
        style={{ display: 'inline' }}
        rounded={true}
        checked={isSaving}
        onToggle={(val) => {
          onToggle(val);
        }}
      />
      <p>
        The budget planner will automatically save your data onto your computer
        or mobile device. Disable the autosave function by switching to "off".
      </p>
    </div>
  );
};

export default Autosave;

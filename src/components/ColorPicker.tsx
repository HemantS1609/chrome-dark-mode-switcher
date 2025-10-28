import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { setColor } from "../features/theme/themeSlice";

const ColorPicker: React.FC = () => {
  const dispatch = useDispatch();
  const color = useSelector((state: RootState) => state.theme.color);

  return (
    <div className="color-picker">
      <label>Accent Color:</label>
      <input
        type="color"
        value={color}
        onChange={(e) => dispatch(setColor(e.target.value))}
      />
    </div>
  );
};

export default ColorPicker;

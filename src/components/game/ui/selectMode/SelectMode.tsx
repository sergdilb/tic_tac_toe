import { Dispatch, FC } from "react";
import { BoardMode } from "../../types/types";
import cls from "./SelectMode.module.css";
const items = [
  { label: "3*3", value: BoardMode._3x3 },
  { label: "5*5", value: BoardMode._5x5 },
  { label: "7*7", value: BoardMode._7x7 },
];

type SelectMode = {
  setMode: Dispatch<React.SetStateAction<BoardMode>>;
};

export const SelectMode: FC<SelectMode> = ({ setMode }) => {
  return (
    <div className={cls.SelectMode}>
      <label>Выберите режим:</label>
      <select
        name="Mods"
        onChange={(e) => setMode(e.target.value as BoardMode)}
      >
        {items.map((item) => (
          <option key={item.label} label={item.label}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
};

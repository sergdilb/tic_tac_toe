import { useState } from "react";
import { BoardMode } from "../../types/types";
import { Board } from "../board/Board";
import { SelectMode } from "../selectMode/SelectMode";
import cls from "./TicTacToe.module.css";
export const TicTacToe = () => {
  const [mode, setMode] = useState<BoardMode>(BoardMode._3x3);
  return (
    <div className={cls.TicTacToe}>
      <SelectMode setMode={setMode} />
      <Board mode={mode} />
    </div>
  );
};

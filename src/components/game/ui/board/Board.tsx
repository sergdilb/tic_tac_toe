import { classNames } from "@/components/utils/classNames";
import { FC } from "react";
import { BoardMode } from "../../types/types";
import cls from "./Board.module.css";

type BoardProps = {
  mode: BoardMode;
};

export const Board: FC<BoardProps> = ({ mode = BoardMode._3x3 }) => {
  const mods = {
    [cls[mode]]: true,
  };

  return (
    <div className={classNames(cls.Board, mods, [])}>
      <div className={cls.BoardsCell}></div>
      <div className={cls.BoardsCell}></div>
      <div className={cls.BoardsCell}></div>
      <div className={cls.BoardsCell}></div>
      <div className={cls.BoardsCell}></div>
      <div className={cls.BoardsCell}></div>
      <div className={cls.BoardsCell}></div>
      <div className={cls.BoardsCell}></div>
      <div className={cls.BoardsCell}></div>
    </div>
  );
};

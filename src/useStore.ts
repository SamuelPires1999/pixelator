import create from "zustand";
import { colors } from "./colorList";

type Color = {
  name: string;
  code: string;
};

type Store = {
  selectedColor: Color;
  colorList: Color[];
  boardColumns: number;
  boardRows: number;
  setBoardRows: (arg: number) => void;
  setBoardCols: (arg: number) => void;
  setSelectedColor: (arg: Color) => void;
  setColorList?: (arg: Color[]) => void;
};

const useStore = create<Store>((set) => ({
  selectedColor: {
    name: "white",
    code: "white",
  },
  colorList: colors,
  boardColumns: 4,
  boardRows: 4,
  setSelectedColor: (color: Color) =>
    set((state) => ({
      ...state,
      selectedColor: color,
    })),
  setBoardCols: (cols: number) =>
    set((state) => ({
      ...state,
      boardColumns: cols,
    })),
  setBoardRows: (rows: number) =>
    set((state) => ({
      ...state,
      boardRows: rows,
    })),
}));

export default useStore;

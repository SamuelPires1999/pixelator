import { Box } from "@chakra-ui/react";
import { useState } from "react";
import useStore from "../../useStore";
import { TileProps } from "./types";

const Tile = ({ borders }: TileProps) => {
  const state = useStore();
  const [bgColor, setBgColor] = useState("white");

  return (
    <Box
      w={5}
      h={5}
      backgroundColor={bgColor}
      border={borders ? "1px solid gray" : ""}
      _hover={{
        backgroundColor: state.selectedColor.code,
      }}
      onClick={() => setBgColor(state.selectedColor.code)}
    />
  );
};

export default Tile;

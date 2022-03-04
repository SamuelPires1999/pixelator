import { Box } from "@chakra-ui/react";
import { useState } from "react";
import useStore from "../../useStore";
import { TileProps } from "./types";

const Tile = ({ borders }: TileProps) => {
  const state = useStore();
  const [bgColor, setBgColor] = useState("white");

	const handleMouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
			event.preventDefault()
			if(event.buttons === 1){
				setBgColor(state.selectedColor.code)
			}
	}

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
			onMouseOver={handleMouseOver}
    />
  );
};

export default Tile;

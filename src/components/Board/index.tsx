import { Button, Grid, GridItem, HStack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import {exportComponentAsPNG} from "react-component-export-image";
import Tile from "../Tile";
import { BoardProps } from "./types";

const Board = ({ rowCount, colCount }: BoardProps) => {
  const size = Array.from({ length: rowCount * colCount });
  const [borders, setBorders] = useState(false);
	const boardRef = useRef(null)

  return (
    <>
      <Grid
				ref={boardRef}
        templateRows={`repeat(${rowCount}, 1fr)`}
        templateColumns={`repeat(${colCount}, 1fr)`}
      >
        {size.map((_, index) => (
          <GridItem key={index}>
            <Tile borders={borders} />
          </GridItem>
        ))}
      </Grid>
      <HStack>
        <Button
          colorScheme={"red"}
          size="sm"
          onClick={() => {
            setBorders(!borders);
          }}
        >
          Toogle tile borders
        </Button>
        <Button
          colorScheme={"red"}
          size="sm"
					onClick={() => {
						exportComponentAsPNG(boardRef, {fileName: "My drawing"})
          }}
        >
				Save Drawing
        </Button>
      </HStack>
    </>
  );
};

export default Board;

import { border, Box, Button, Grid, GridItem, HStack } from "@chakra-ui/react";
import { useState } from "react";
import useStore from "../../useStore";
import Tile from "../Tile";
import { BoardProps } from "./types";

const Board = ({ rowCount, colCount }: BoardProps) => {
  const size = Array.from({ length: rowCount * colCount });
  const [borders, setBorders] = useState(false);
  const state = useStore();

  return (
    <>
      <Grid
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
      </HStack>
    </>
  );
};

export default Board;

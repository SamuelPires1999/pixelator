import { Box, Grid, GridItem } from "@chakra-ui/react";
import { BoardProps } from "./types";

const Board = ({ rowCount, colCount }: BoardProps) => {
  const size = Array.from({ length: rowCount * colCount });

  return (
    <Grid
      templateRows={`repeat(${rowCount}, 1fr)`}
      templateColumns={`repeat(${colCount}, 1fr)`}
    >
      {size.map((_, index) => (
        <GridItem key={index}>
          <Box w={10} h={10} backgroundColor="white" />
        </GridItem>
      ))}
    </Grid>
  );
};

export default Board;

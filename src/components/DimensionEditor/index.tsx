import {
  HStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
} from "@chakra-ui/react";
import useStore from "../../useStore";

const DimensionEditor = () => {
  const state = useStore();

  return (
    <>
      <Text>Choose a board size</Text>
      <HStack>
        <NumberInput
          onChange={(value) => {
            state.setBoardRows(parseInt(value));
          }}
          min={4}
					max={30}
          maxW={"100px"}
          defaultValue={4}
          value={state.boardRows}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text fontSize={"48px"}>/</Text>
        <NumberInput
          onChange={(value) => {
            state.setBoardCols(parseInt(value));
          }}
          min={4}
					max={80}
          maxW={"100px"}
          value={state.boardColumns}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </HStack>
    </>
  );
};

export default DimensionEditor;

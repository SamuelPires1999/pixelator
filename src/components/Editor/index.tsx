import {
  Box,
  Button,
  Flex,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import useStore from "../../useStore";
import Board from "../Board";
import ColorList from "../ColorList";
import DimensionEditor from "../DimensionEditor";

const Editor = () => {
  const [editorOn, setEditorOn] = useState(false);
  const state = useStore();

  const toggleEditor = () => {
    setEditorOn(!editorOn);
  };

  return (
    <VStack
      borderWidth={"3px"}
      borderStyle="solid"
      borderColor={state.selectedColor.code}
      rounded="2xl"
      padding={"20px"}
      backgroundColor="#404040"
      color="white"
      justifyContent={"center"}
      display="flex"
      width={"fit-content"}
    >
      <Text fontSize={"24px"} fontWeight={"bold"}>
        Pixelator
      </Text>

      {!editorOn && <DimensionEditor />}
      {editorOn && (
        <>
          <Button size={"sm"} onClick={toggleEditor} colorScheme={"red"}>
            <Text>Generate New Board</Text>
          </Button>
          <Text fontWeight={"bold"} fontSize="xs">
            Note that generating a new board will ERASE your drawing, so beware
          </Text>
          <Flex gap={4}>
            <Text>Selected Color</Text>
            <Box
              backgroundColor={state.selectedColor.code}
              title={state.selectedColor.name}
              w={6}
              height={6}
              rounded="full"
              border={"1px solid gray"}
            />
          </Flex>
          <ColorList />
          <Board rowCount={state.boardRows} colCount={state.boardColumns} />
        </>
      )}
      <Button size={"sm"} onClick={toggleEditor} colorScheme={"red"}>
        <Text>{editorOn ? "Save Drawing" : "Generate Board"}</Text>
      </Button>
    </VStack>
  );
};
export default Editor;

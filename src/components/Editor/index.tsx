import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
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
    <Box width="auto" height="auto">
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
          <Text>{editorOn ? "Generate new board" : "Generate board"}</Text>
        </Button>
        {editorOn ? (
          <Text fontWeight={"bold"} fontSize="xs">
            Note that generating a new board will ERASE your drawing, so beware
          </Text>
        ) : null}
      </VStack>
    </Box>
  );
};
export default Editor;

import { Box, Flex } from "@chakra-ui/react";
import useStore from "../../useStore";

const ColorList = () => {
  const state = useStore();

  return (
    <Flex
      align={"center"}
      justify={"center"}
      gap={2}
      maxW="300px"
      wrap={"wrap"}
    >
      {state.colorList.map((color, index) => (
        <Box
          backgroundColor={color.code}
          title={color.name}
          w={6}
          height={6}
          rounded="full"
          border={"1px solid gray"}
          key={index}
          onClick={() => state.setSelectedColor(color)}
        />
      ))}
    </Flex>
  );
};

export default ColorList;

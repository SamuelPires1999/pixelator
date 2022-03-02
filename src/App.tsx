import { Box } from "@chakra-ui/react";
import Editor from "./components/Editor";

function App() {
  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      display="flex"
      justifyContent={"center"}
      alignItems="center"
    >
      <Editor />
    </Box>
  );
}

export default App;

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "navy.100",
        color: "navy.500"
      }
    }
  }
});

export default theme; 
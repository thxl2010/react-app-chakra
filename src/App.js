import { Box, Stack, HStack, Button, Center } from '@chakra-ui/react';

function App() {
  return (
    <Box bg="#f3f3f3" w="100%" p={4} color="#333" borderRadius="lg">
      <HStack spacing="24px">
        <Box w="100px" h="40px" bg="yellow.200">
          HStack Box 1
        </Box>
        <Box p="1em" bg="tomato">
          HStack Box 2
        </Box>
        <Box h="40px" bg="pink.100">
          HStack Box 3
        </Box>
      </HStack>
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="blue">按钮</Button>
        <Button colorScheme="blue" size="xs">
          按钮 xs
        </Button>
        <Button colorScheme="blue" size="sm">
          按钮 sm
        </Button>
        <Button colorScheme="blue" size="md">
          按钮 md
        </Button>
        <Button colorScheme="blue" size="lg">
          按钮 lg
        </Button>
      </Stack>
      <Center bg="tomato" h="100px" color="white" margin="1em">
        This is the Center
      </Center>
      <Box m={2} bg="skyblue">
        m={2} refers to the value of `theme.space[2]`
      </Box>
      <Box maxW="960px" mx="auto" bg="skyblue">
        You can also use custom values
      </Box>
      <Box m={[2, 3]} px="12px" py="24px" bg="skyblue" shadow="2xl">
        sets margin `8px` on all viewports and `12px` from the first breakpoint
        and up
      </Box>
    </Box>
  );
}

export default App;

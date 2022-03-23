import {
  Box,
  Stack,
  HStack,
  Button,
  Center,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('skyblue', 'tomato');

  return (
    <Box w="100%" p={4} borderRadius="lg">
      <header>
        切换颜色模式 colorMode ：{colorMode}
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </header>
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
      <Center
        bg={colorMode === 'light' ? 'skyblue' : 'tomato'}
        h="100px"
        color="white"
        margin="1em"
      >
        This is the Center
      </Center>
      <Box m={2} bg={bg}>
        m={2} refers to the value of `theme.space[2]`
      </Box>
      <Box maxW="960px" mx="auto" bg={bg}>
        You can also use custom values
      </Box>
      <Box m={[2, 3]} px="12px" py="24px" bg={bg} shadow="2xl">
        sets margin `8px` on all viewports and `12px` from the first breakpoint
        and up
      </Box>
    </Box>
  );
}

export default App;

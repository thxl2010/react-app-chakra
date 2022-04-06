import {
  Box,
  Stack,
  HStack,
  Button,
  Center,
  useColorMode,
  useColorModeValue,
  LightMode,
  DarkMode,
  Flex,
} from '@chakra-ui/react';
import Person from './components/Person';
import Form from './components/Form';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('skyblue', 'tomato');

  return (
    <Box w="100%" p={4} borderRadius="lg">
      <header>
        切换颜色模式 colorMode ：{colorMode}
        <LightMode>
          <Button colorScheme="blue" onClick={toggleColorMode}>
            LightMode Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
        </LightMode>
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
        <LightMode>
          <Button colorScheme="blue">按钮 LightMode</Button>
        </LightMode>
        <DarkMode>
          <Button colorScheme="blue" size="xs">
            按钮 xs DarkMode
          </Button>
        </DarkMode>
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
      <Stack direction="row" spacing={4} align="center">
        <h2>variant:</h2>
        <Button colorScheme="teal" variant="solid">
          Button solid
        </Button>
        <Button colorScheme="teal" variant="outline">
          Button outline
        </Button>
        <Button colorScheme="teal" variant="ghost">
          Button ghost
        </Button>
        <Button colorScheme="teal" variant="link">
          Button link
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
      <Box mb={5} bg={bg}>
        `mb={5}` <p>5 => 1.25rem</p>
      </Box>
      <Box maxW="960px" mx="auto" bg={bg}>
        You can also use custom values
      </Box>
      <Box
        w={[300, 400, 500]}
        m={[2, 3]}
        px="12px"
        py="24px"
        bg={bg}
        shadow="2xl"
      >
        sets margin `8px` on all viewports and `12px` from the first breakpoint
        and up
      </Box>
      <Box>
        <h2>自定义组件样式：</h2>
        <Box>
          <span>size="xl" variant="with-shadow"</span>
          <Button size="xl" variant="with-shadow">
            Welcome
          </Button>
          <span>variant="solid" </span>
          <Button variant="solid">Welcome</Button>
        </Box>
      </Box>
      <Box>
        <h2>自定义组件（非内置组件）：</h2>
        <Flex>
          <Person />
          <Person />
        </Flex>
      </Box>
      <Box>
        <h2>构建注册表单：</h2>
        <Box w={500} bg="white" px={12} py={6} mx="auto" my={6}>
          <Form />
        </Box>
      </Box>
    </Box>
  );
}

export default App;

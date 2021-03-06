import { Box, Stack, Image, Button, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box h="60px" bg={colorMode === 'light' ? 'gray.200' : 'gray.700'}>
      <Box w="80%" m="auto" overflow="hidden">
        <Image float="left" mt="10px" w="40px" src={logo} />
        <Stack direction="row" ml={8} h="60px" float="left" align="center">
          <Link to="/">首页</Link>
          <Link to="/login">登录</Link>
          <Link to="/card">卡片</Link>
          <Link to="/jianshu">登录·简书</Link>
        </Stack>
        <Button
          colorScheme="teal"
          float="right"
          mt="10px"
          onClick={toggleColorMode}
        >
          切换模式
        </Button>
      </Box>
    </Box>
  );
}

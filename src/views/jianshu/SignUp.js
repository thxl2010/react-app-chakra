import {
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  FormControl,
  FormHelperText,
  Flex,
  Button,
} from '@chakra-ui/react';
import { FaUserAlt, FaMobileAlt, FaLock } from 'react-icons/fa';

export default function SignUp() {
  return (
    <form>
      <Stack spacing="8">
        <FormControl isInvalid isRequired>
          <InputGroup>
            <InputLeftAddon children={<FaUserAlt />} />
            <Input placeholder="你的昵称" />
          </InputGroup>
          <FormHelperText>请输入昵称</FormHelperText>
        </FormControl>
        <FormControl isInvalid isRequired>
          <InputGroup>
            <InputLeftAddon children={<FaMobileAlt />} />
            <Input placeholder="手机号" />
          </InputGroup>
          <FormHelperText>请输入手机号</FormHelperText>
        </FormControl>
        <InputGroup>
          <InputLeftAddon children={<FaLock />} />
          <Input type="password" placeholder="设置密码" />
        </InputGroup>
        <Button colorScheme="green" w="100%">
          注册
        </Button>
        <Stack textAlign="center" fontSize={12}>
          <p>点击 “注册” 即表示您同意并愿意遵守简书</p>
          <Flex justify="center">
            <a
              target="_blank"
              href="http://www.jianshu.com/p/c44d171298ce"
              rel="noreferrer"
            >
              用户协议
            </a>
            <span>&nbsp;和&nbsp;</span>
            <a
              target="_blank"
              href="http://www.jianshu.com/p/2ov8x3"
              rel="noreferrer"
            >
              隐私政策
            </a>
          </Flex>
        </Stack>
      </Stack>
    </form>
  );
}

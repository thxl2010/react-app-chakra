import {
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  FormControl,
  FormHelperText,
  Button,
} from '@chakra-ui/react';
import { FaUserAlt, FaLock, FaCheck } from 'react-icons/fa';

export default function SignIn() {
  return (
    <form>
      <Stack spacing="8">
        <FormControl isDisabled isInvalid isRequired>
          <InputGroup>
            <InputLeftAddon children={<FaUserAlt />} />
            <Input placeholder="请输入用户名" />
          </InputGroup>
          <FormHelperText>请输入用户名</FormHelperText>
        </FormControl>
        <InputGroup>
          <InputLeftAddon children={<FaLock />} />
          <Input type="password" placeholder="请输入密码" />
          <InputRightAddon children={<FaCheck />} />
        </InputGroup>
        <Button colorScheme="teal" w="100%">
          登录
        </Button>
      </Stack>
    </form>
  );
}

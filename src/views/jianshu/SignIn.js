import {
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  FormControl,
  FormHelperText,
  Checkbox,
  Button,
} from '@chakra-ui/react';
import { FaUserAlt, FaLock } from 'react-icons/fa';

export default function SignIn() {
  return (
    <form>
      <Stack spacing="8">
        <FormControl isInvalid isRequired>
          <InputGroup>
            <InputLeftAddon children={<FaUserAlt />} />
            <Input placeholder="手机号或邮箱" />
          </InputGroup>
          <FormHelperText>请输入手机号或邮箱</FormHelperText>{' '}
          <InputGroup>
            <InputLeftAddon children={<FaLock />} />
            <Input type="password" placeholder="密码" />
          </InputGroup>
          <FormHelperText>请输入密码</FormHelperText>{' '}
        </FormControl>
        <Stack direction="row" justify="space-between">
          <Checkbox>记住我</Checkbox>
          <a href="https://www.jianshu.com/sessions">登陆遇到问题？</a>
        </Stack>
        <Button colorScheme="blue" w="100%" borderRadius="20px">
          登录
        </Button>
      </Stack>
    </form>
  );
}

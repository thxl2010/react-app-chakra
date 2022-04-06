import {
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  FormControl,
  FormHelperText,
  RadioGroup,
  Radio,
  Select,
  Switch,
  FormLabel,
  Flex,
  Button,
} from '@chakra-ui/react';
import { FaUserAlt, FaLock, FaCheck } from 'react-icons/fa';

export default function Form() {
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
        <RadioGroup defaultValue="1">
          <Stack direction="horizontal" spacing="4">
            <Radio value="1" mr="4">
              男
            </Radio>
            <Radio value="0">女</Radio>
          </Stack>
        </RadioGroup>
        <Select placeholder="请选择学科">
          <option value="Java">Java</option>
          <option value="JavaScript">JavaScript</option>
        </Select>
        <Flex>
          <Switch id="agree" mr="3" />
          <FormLabel htmlFor="agree">是否同意协议</FormLabel>
        </Flex>
        <Button colorScheme="teal" w="100%">
          注册
        </Button>
      </Stack>
    </form>
  );
}

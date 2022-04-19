import {
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  FormControl,
  FormHelperText,
  Flex,
  Button,
  useToast,
} from '@chakra-ui/react';
import { FaUserAlt, FaEnvelope, FaLock } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../api/jianshu';

export default function SignUp() {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      console.log(JSON.stringify(values, null, 2));
      setLoading(true);
      try {
        const { user } = await signUp(values);
        const { username } = user;
        console.log('user :', user);
        navigate(`/jianshu/${username}`, { state: user });
      } catch (error) {
        console.log('error :', error);
        toast({
          title: '昵称或密码错误，请重试！',
          status: 'error',
          isClosable: true,
          position: 'top',
        });
      }
      setLoading(false);
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(
          2,
          '昵称格式不正确，需要是2-15个字符，只能包含英文中文下划线，不能包含空格。'
        )
        .max(
          15,
          '昵称格式不正确，需要是2-15个字符，只能包含英文中文下划线，不能包含空格。'
        )
        .required('请输入昵称'),
      email: Yup.string().email('请输入合法的邮箱地址').required('请输入邮箱'),
      password: Yup.string().min(6, '密码长度不能小于6').required('请输入密码'),
    }),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing="8">
        <FormControl
          isInvalid={!!formik.errors.username && formik.touched.username}
          isRequired
        >
          <InputGroup>
            <InputLeftAddon children={<FaUserAlt />} />
            <Input
              colorScheme="blue"
              placeholder="你的昵称"
              id="signup-username"
              type="text"
              name="username"
              {...formik.getFieldProps('username')}
            />
          </InputGroup>
          <FormHelperText>
            {formik.touched.username && formik.errors.username
              ? formik.errors.username
              : null}
          </FormHelperText>
        </FormControl>
        <FormControl
          isInvalid={!!formik.errors.email && formik.touched.email}
          isRequired
        >
          <InputGroup>
            <InputLeftAddon children={<FaEnvelope />} />
            <Input
              placeholder="邮箱"
              id="signup-email"
              type="email"
              name="email"
              {...formik.getFieldProps('email')}
            />
          </InputGroup>
          <FormHelperText>
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null}
          </FormHelperText>
        </FormControl>
        <FormControl
          isInvalid={!!formik.errors.password && formik.touched.password}
          isRequired
        >
          <InputGroup>
            <InputLeftAddon children={<FaLock />} />
            <Input
              type="password"
              placeholder="设置密码"
              id="signup-password"
              name="password"
              {...formik.getFieldProps('password')}
            />
          </InputGroup>
          <FormHelperText>
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null}
          </FormHelperText>
        </FormControl>
        <Button
          colorScheme="green"
          w="100%"
          borderRadius="20px"
          type="submit"
          isLoading={loading}
        >
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

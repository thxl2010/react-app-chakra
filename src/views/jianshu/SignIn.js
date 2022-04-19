import {
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  FormControl,
  FormHelperText,
  Checkbox,
  Button,
  useToast,
} from '@chakra-ui/react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { sigIn } from '../../api/jianshu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    onSubmit: async (values) => {
      console.log(JSON.stringify(values, null, 2));
      setLoading(true);
      try {
        const { user } = await sigIn(values);
        const { username } = user;
        console.log('user :', user);
        navigate(`/jianshu/${username}`, { state: user });
      } catch (error) {
        console.log('error :', error);
        toast({
          title: '邮箱或密码错误，请重试！',
          status: 'error',
          isClosable: true,
          position: 'top',
        });
      }
      setLoading(false);
    },
    validationSchema: Yup.object({
      email: Yup.string().email('请输入合法的邮箱地址').required('请输入邮箱'),
      password: Yup.string().min(6, '密码长度不能小于6').required('请输入密码'),
    }),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing="8">
        <FormControl
          isInvalid={!!formik.errors.email && formik.touched.email}
          isRequired
        >
          <InputGroup>
            <InputLeftAddon children={<FaUserAlt />} />
            <Input
              placeholder="邮箱"
              id="email"
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
              placeholder="密码"
              id="password"
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
        <Stack direction="row" justify="space-between">
          <Checkbox
            id="rememberMe"
            name="rememberMe"
            {...formik.getFieldProps('rememberMe')}
          >
            记住我
          </Checkbox>
          <a href="https://www.jianshu.com/sessions">登陆遇到问题？</a>
        </Stack>
        <Button
          colorScheme="blue"
          w="100%"
          borderRadius="20px"
          type="submit"
          isLoading={loading}
        >
          登录
        </Button>
      </Stack>
    </form>
  );
}

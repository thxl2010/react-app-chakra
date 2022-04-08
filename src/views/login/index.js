/*
 * 登录页
 * @Author: Duyb
 * @Date: 2022-04-06 18:02:20
 * @Last Modified by: Duyb
 * @Last Modified time: 2022-04-08 18:21:49
 */
import {
  Box,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import SignUp from './SignUp';
import SignIn from './SignIn';

import logoLight from '../../assets/images/chakra-ui-light.png';
import logoDark from '../../assets/images/chakra-ui-dark.png';

export default function Login() {
  const bgColor = useColorModeValue('white', 'gray.700');
  const logo = useColorModeValue(logoLight, logoDark);

  return (
    <>
      <Box
        bgColor={bgColor}
        px={12}
        py={6}
        w="50%"
        minW="375px"
        boxShadow="lg"
        borderRadius="lg"
      >
        <Image src={logo} h="50px" mx="auto" mb="12px" />

        <Tabs variant="enclosed" isFitted>
          <TabList>
            <Tab>注册</Tab>
            <Tab>登录</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SignUp />
            </TabPanel>
            <TabPanel>
              <SignIn />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

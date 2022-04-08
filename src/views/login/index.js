/*
 * 登录页
 * @Author: Duyb
 * @Date: 2022-04-06 18:02:20
 * @Last Modified by: Duyb
 * @Last Modified time: 2022-04-08 15:34:26
 */
import {
  Box,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Image,
} from '@chakra-ui/react';
import SignUp from './SignUp';
import SignIn from './SignIn';

import logo from '../../assets/images/logo.jpg';

export default function Login() {
  return (
    <>
      <Box
        bg="#fff"
        px={12}
        py={6}
        w="50%"
        minW="375px"
        boxShadow="lg"
        borderRadius="lg"
      >
        <Image src={logo} w="50px" mx="auto" mb="12px" borderRadius="50%" />

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

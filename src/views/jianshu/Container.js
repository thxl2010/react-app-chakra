/**
 * 简书
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

export default function Container() {
  const bgColor = useColorModeValue('white', 'gray.700');

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
        <Tabs variant="enclosed" isFitted>
          <TabList>
            <Tab>登录</Tab>
            <Tab>注册</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SignIn />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

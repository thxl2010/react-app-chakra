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
        padding={50}
        w={400}
        boxShadow="lg"
        borderRadius="lg"
      >
        <Tabs align="center" colorScheme="orange">
          <TabList alignItems="center" border="none">
            <Tab _focus={{ boxShadow: 'none' }} fontWeight="bold">
              登录
            </Tab>
            <b>·</b>
            <Tab _focus={{ boxShadow: 'none' }} fontWeight="bold">
              注册
            </Tab>
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

/*
 * @Author: Duyb
 * @Date: 2022-04-08 15:47:32
 * @Last Modified by: Duyb
 * @Last Modified time: 2022-04-08 18:25:20
 */
import {
  Box,
  Image,
  Badge,
  Text,
  Stack,
  Heading,
  Flex,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import chakraUI from '../../assets/images/chakra-ui.png';

export default function Card() {
  const bgColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.100');

  return (
    <Box
      w="400px"
      borderRadius="lg"
      boxShadow="lg"
      bgColor={bgColor}
      overflow="hidden"
    >
      <Image src={chakraUI} />
      <Box p={3}>
        <Stack direction="row" spacing={2} align="center">
          <Badge variant="solid" colorScheme="teal" borderRadius="full" px={2}>
            CSS
          </Badge>
          <Badge variant="solid" colorScheme="teal" borderRadius="full" px={2}>
            React
          </Badge>
          <Badge variant="solid" colorScheme="teal" borderRadius="full" px={2}>
            Chakra-UI
          </Badge>
          <Text color={textColor}>CSS in JS by Chakra-UI</Text>
        </Stack>
        <Heading as="h3" pt={3} pb={2} color="gray.500" fontSize="xl">
          Chakra-UI 专题课程
        </Heading>
        <Text
          fontWeight="light"
          fontSize="sm"
          lineHeight="tall"
          color={textColor}
        >
          Chakra UI 是一个简单的, 模块化的易于理解的 UI 组件库. 提供了丰富的构建
          React
          应用所需的UI组件。在整个应用程序中，在任何组件上快速、轻松地引用主题中的值。组件的构建考虑到了组合。你可以利用任何组件来创造新事物。Chakra-UI
          严格遵循WAI-ARIA标准。所有组件都有适当的属性和现成的键盘交互。
        </Text>

        <Flex align="center" mt={2}>
          <Flex color="teal.500">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </Flex>
          <StarIcon />
          <Text ml={1}>100 评论</Text>
        </Flex>
      </Box>
      <Button w="100%" colorScheme="teal" bg="teal.500">
        登录
      </Button>
    </Box>
  );
}

import Card from './Card';
import { Image, Heading, Text } from '@chakra-ui/react';

export default function Person() {
  return (
    <Card>
      <Image
        src="http://chakra-ui.com/eric.jpg"
        rounded="full"
        w={32}
        h={32}
        boxShadow="md"
      />
      <Heading mt={6} maxW={60} size="lg" textAlign="center" color="gray.700">
        Welcome back, Eric
      </Heading>
      <Text mt={6} mb={6} size="sm" color="blackAlpha.500">
        Use your fingerprint to continue.
      </Text>
      <Image src="/fingerprint.png" w={32} h={32} />
    </Card>
  );
}

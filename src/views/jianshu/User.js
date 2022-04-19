import { useParams, useLocation } from 'react-router-dom';
import { Image, Text } from '@chakra-ui/react';
export default function User(props) {
  const params = useParams();
  const localtion = useLocation();
  console.log('params :', params);
  console.log('props :', props);
  console.log('localtion :', localtion);

  const { username, image } = localtion.state;

  return (
    <div>
      <Image src={image} w={120} />
      <Text align="center">{username}</Text>
    </div>
  );
}

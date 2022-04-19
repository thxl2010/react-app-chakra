import { useParams } from 'react-router-dom';

export default function User(props) {
  const params = useParams();
  console.log('params :', params);
  console.log('props :', props);
  return <div>User</div>;
}

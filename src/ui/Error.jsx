import { useRouteError } from 'react-router-dom';
import LinkButton from '../utils/LinkButton';
// APPLayout children -menu and order/:orderId

function Error() {
  const error = useRouteError();
  console.log('error in <Error/>==>', error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;

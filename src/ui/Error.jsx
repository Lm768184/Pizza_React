import { useNavigate, useRouteError } from 'react-router-dom';
// APPLayout children -menu and order/:orderId

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log("error==>",error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      {/* <p>{error.data}</p> */}
      <p>{error.data || error.message}</p>
      {/* <p>{error.error.message}</p> */}

      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
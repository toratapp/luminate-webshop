import { Button } from "react-daisyui";
import FirstHeading from "../common/FirstHeading";
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();
  const returnHome = () => navigate('/');

  return (
    <section className="flex flex-col items-center p-4">
      <FirstHeading>404 Page not found</FirstHeading>
      <p className="mt-1 mb-20">The page you are looking for does not exist or an error occured.</p>
      <Button color="primary" onClick={returnHome}>Return home</Button>
    </section>
  );
}

export default NotFoundPage;

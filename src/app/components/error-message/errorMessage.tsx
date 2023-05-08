import { Button } from "src/app/components/button/Button";
import { RoutePaths } from "src/app/routes/route-paths";

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <>
    <p>Error: {message}</p>
    <br />
    <Button to={RoutePaths.HOME} text="Home" />
  </>
);

import { ErrorMessage } from "src/app/components/error-message/errorMessage";
import { withAppWrapper } from "src/app/shared/appWrapper";

interface ErrorProps {
  message: string;
}

export const Error = ({ message }: ErrorProps) => (
  <ErrorMessage message={message} />
);

export default withAppWrapper(Error);

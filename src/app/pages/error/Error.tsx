import { Button } from "src/app/components/button/Button";
import { RoutePaths } from "src/app/routes/route-paths";
import { withAppWrapper } from "src/app/shared/appWrapper";

const Error = () => (
  <>
    <p>No Route found!</p>
    <br />
    <Button to={RoutePaths.HOME} text="Home" />
  </>
);

export default withAppWrapper(Error);

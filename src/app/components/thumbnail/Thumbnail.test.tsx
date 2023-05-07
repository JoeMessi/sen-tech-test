import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Thumbnail } from "./Thumbnail";
import { RoutePaths } from "src/app/routes/route-paths";

jest.mock("src/app/routes/route-paths", () => {
  return {
    RoutePaths: {
      PLAYER: (id: string) => `/player/${id}`,
    },
  };
});

const defaultProps = {
  id: "mockId",
  title: "mockTitle",
  img: "mockImgUrl",
};

describe("Thumbnail - component", () => {
  const renderThumbnail = () =>
    render(
      <MemoryRouter>
        <Thumbnail {...defaultProps} />
      </MemoryRouter>
    );

  it("should render the Thumbnail with no errors", () => {
    const { getByTestId } = renderThumbnail();
    expect(getByTestId("thumbnail")).toBeInTheDocument();
  });

  it("should render the img with the right src attribute", () => {
    const { getByAltText } = renderThumbnail();
    expect(getByAltText("mockTitle")).toHaveAttribute("src", "mockImgUrl");
  });

  it("should render the link with the correct href", () => {
    const { getByRole } = renderThumbnail();
    expect(getByRole("link")).toHaveAttribute(
      "href",
      RoutePaths.PLAYER(defaultProps.id)
    );
  });
});

import { render, waitFor } from "@testing-library/react";
import { VideoPlayer } from "./VideoPlayer";
import { MemoryRouter } from "react-router-dom";
import { RoutePaths } from "src/app/routes/route-paths";

jest.mock("src/app/routes/route-paths", () => {
  return {
    RoutePaths: {
      HOME: "/",
    },
  };
});

const defaultProps = {
  id: "mockId",
  title: "mockTitle",
  tags: ["mockTag1", "mockTag2"],
  viewCount: "123",
  likeCount: "123",
};

describe("VideoPlayer - component", () => {
  const renderVideoPlayer = () =>
    render(
      <MemoryRouter>
        <VideoPlayer {...defaultProps} />
      </MemoryRouter>
    );

  it("should render the go to home page button with the right href", async () => {
    const { getByRole } = renderVideoPlayer();

    await waitFor(() => {
      expect(getByRole("link")).toHaveAttribute("href", RoutePaths.HOME);
    });
  });
});

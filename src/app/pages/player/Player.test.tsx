import { render, waitFor } from "@testing-library/react";
import Player from "./Player";
import { videoStore } from "src/app/store/videoStore";

jest.mock("src/app/components/video-player/VideoPlayer", () => ({
  VideoPlayer: () => <div data-testid="player"></div>,
}));

jest.mock("src/app/store/videoStore");
const mockVideoStore = videoStore as jest.MockedFunction<typeof videoStore>;

const defaultStoreValues = {
  isLoading: false,
  error: null,
  fetchVideoById: jest.fn(),
};

describe("Player - component", () => {
  const renderPlayer = () => render(<Player />);

  it("should render Player with no errors", async () => {
    mockVideoStore.mockReturnValue(defaultStoreValues);
    const { getByTestId } = renderPlayer();
    await waitFor(() => {
      expect(getByTestId("player")).toBeInTheDocument();
    });
  });
  it("should render Loading view when isLoading is true", async () => {
    mockVideoStore.mockReturnValue({ ...defaultStoreValues, isLoading: true });
    const { getByTestId } = renderPlayer();
    await waitFor(() => {
      expect(getByTestId("loading")).toBeInTheDocument();
    });
  });

  it("should call fetchVideos", async () => {
    mockVideoStore.mockReturnValue(defaultStoreValues);
    renderPlayer();
    await waitFor(() => {
      expect(defaultStoreValues.fetchVideoById).toHaveBeenCalled();
    });
  });
});

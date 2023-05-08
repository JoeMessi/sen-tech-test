import { render, waitFor } from "@testing-library/react";
import Home from "./Home";
import { videoStore } from "src/app/store/videoStore";

jest.mock("src/app/components/gallery/Gallery", () => ({
  Gallery: () => <div data-testid="gallery"></div>,
}));

jest.mock("src/app/store/videoStore");
const mockVideoStore = videoStore as jest.MockedFunction<typeof videoStore>;

const defaultStoreValues = {
  videos: [],
  isLoading: false,
  error: null,
  fetchVideos: jest.fn(),
};

describe("Home - component", () => {
  const renderHome = () => render(<Home />);

  beforeEach(() => {
    mockVideoStore.mockReset();
  });

  it("should render Home with no errors", async () => {
    mockVideoStore.mockReturnValue(defaultStoreValues);
    const { getByTestId } = renderHome();
    await waitFor(() => {
      expect(getByTestId("gallery")).toBeInTheDocument();
    });
  });

  it("should render Loading view when isLoading is true", async () => {
    mockVideoStore.mockReturnValue({ ...defaultStoreValues, isLoading: true });
    const { getByTestId } = renderHome();
    await waitFor(() => {
      expect(getByTestId("loading")).toBeInTheDocument();
    });
  });

  it("should call fetchVideos", async () => {
    mockVideoStore.mockReturnValue(defaultStoreValues);
    renderHome();
    await waitFor(() => {
      expect(defaultStoreValues.fetchVideos).toHaveBeenCalled();
    });
  });
});

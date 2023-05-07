import { render } from "@testing-library/react";
import { Gallery } from "./Gallery";

jest.mock("../thumbnail/Thumbnail", () => {
  return {
    Thumbnail: () => <div data-testid="thumbnail"></div>,
  };
});

const videos = [
  {
    id: "mockId",
    snippet: {
      title: "mockTitle",
      tags: ["mocktag1", "mocktag2"],
      thumbnails: {
        medium: {
          url: "mockUrl",
        },
      },
    },
    statistics: {
      viewCount: "123",
      likeCount: "123",
    },
  },
];

describe("Gallery - component", () => {
  const renderGallery = () => render(<Gallery videos={videos} />);

  it("should render with the same number of thumbnails as the video array length prop", () => {
    const { getAllByTestId } = renderGallery();
    expect(getAllByTestId("thumbnail")).toHaveLength(videos.length);
  });
});

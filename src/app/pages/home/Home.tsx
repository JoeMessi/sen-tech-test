import { Gallery } from "src/app/components/gallery/Gallery";
import { videoStore } from "src/app/store/videoStore";
import { useEffect } from "react";
import { withAppWrapper } from "src/app/shared/appWrapper";

const Home = () => {
  const { videos, isLoading, error, fetchVideos } = videoStore();

  useEffect(() => {
    fetchVideos();
  }, []);

  if (isLoading) {
    return <div data-testid="loading">Loading...</div>;
  }

  if (error) {
    return <div data-testid="error">Error: {error.message}</div>;
  }

  return <Gallery videos={videos} data-testid="gallery" />;
};
export default withAppWrapper(Home);

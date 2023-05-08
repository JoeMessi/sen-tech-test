import { Gallery } from "src/app/components/gallery/Gallery";
import { videoStore } from "src/app/store/videoStore";
import { useEffect, useMemo } from "react";
import { withAppWrapper } from "src/app/shared/appWrapper";
import { ErrorMessage } from "src/app/components/error-message/errorMessage";

const Home = () => {
  const { videos, isLoading, error, fetchVideos } = videoStore();

  useEffect(() => {
    fetchVideos();
  }, []);

  const cachedVideos = useMemo(() => videos, [videos]);

  if (isLoading) {
    return <div data-testid="loading">Loading...</div>;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return <Gallery videos={cachedVideos} data-testid="gallery" />;
};
export default withAppWrapper(Home);

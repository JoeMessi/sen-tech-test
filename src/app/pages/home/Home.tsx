import { Gallery } from "src/app/components/gallery/Gallery";
import { Thumbnail } from "src/app/components/thumbnail/Thumbnail";
import * as S from "./Home.styles";
import { videoStore } from "src/app/store/videoStore";
import { useEffect } from "react";
import { withAppWrapper } from "src/app/shared/appWrapper";

const Home = () => {
  const { videos, isLoading, error, fetchVideos } = videoStore();

  useEffect(() => {
    fetchVideos();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <Gallery videos={videos} />;
};
export default withAppWrapper(Home);

import { Gallery } from "src/components/gallery/Gallery";
import { Thumbnail } from "src/components/thumbnail/Thumbnail";
import * as S from "./Home.styles";
import { videoStore } from "src/store/videoStore";
import { useEffect } from "react";

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

  return (
    <S.Wrap>
      <Gallery videos={videos} />
    </S.Wrap>
  );
};
export default Home;

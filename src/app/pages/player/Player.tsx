import { useParams } from "react-router-dom";
import { Video, videoStore } from "src/app/store/videoStore";
import { useEffect } from "react";
import { VideoPlayer } from "src/app/components/video-player/VideoPlayer";
import { withAppWrapper } from "src/app/shared/appWrapper";

const Player = () => {
  let { id } = useParams();

  const { video, fetchVideoById, error, isLoading } = videoStore();

  const title = video?.snippet?.title;
  const tags = video?.snippet?.tags;
  const statistics = video?.statistics;
  const viewCount = video?.statistics?.viewCount;
  const likeCount = video?.statistics?.likeCount;

  console.log(title, tags, statistics, viewCount, likeCount);

  useEffect(() => {
    fetchVideoById(id!);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <VideoPlayer
        id={id}
        title={title}
        viewCount={viewCount}
        likeCount={likeCount}
      />
    </>
  );
};
export default withAppWrapper(Player);

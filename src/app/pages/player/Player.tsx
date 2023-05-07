import { useParams } from "react-router-dom";
import { videoStore } from "src/app/store/videoStore";
import { FC, ReactNode, useEffect } from "react";
import { VideoPlayer } from "src/app/components/video-player/VideoPlayer";
import { withAppWrapper } from "src/app/shared/appWrapper";

const Player = () => {
  const { id } = useParams();

  const { video, fetchVideoById, error, isLoading } = videoStore();

  const title = video?.snippet?.title;
  const tags = video?.snippet?.tags;
  const viewCount = video?.statistics?.viewCount;
  const likeCount = video?.statistics?.likeCount;

  useEffect(() => {
    fetchVideoById(id!);
  }, [id]);

  if (isLoading) {
    return <div data-testid="loading">Loading...</div>;
  }

  if (error) {
    return <div data-testid="error">Error: {error.message}</div>;
  }

  return (
    <>
      <VideoPlayer
        id={id}
        title={title}
        tags={tags}
        viewCount={viewCount}
        likeCount={likeCount}
        data-testid="player"
      />
    </>
  );
};
export default withAppWrapper(Player);

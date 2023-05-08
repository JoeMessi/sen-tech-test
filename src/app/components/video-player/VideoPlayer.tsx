import ReactPlayer from "react-player/youtube";
import * as S from "./VideoPlayer.styles";
import { RoutePaths } from "src/app/routes/route-paths";
import { Button } from "../button/Button";

interface VideoPlayerProps {
  id?: string;
  title?: string;
  tags?: string[];
  viewCount?: string;
  likeCount?: string;
}

export const VideoPlayer = ({
  id,
  title,
  tags,
  viewCount,
  likeCount,
}: VideoPlayerProps) => {
  const mappedTags = tags?.map((t, i) => <li key={i}>{t}</li>);

  return (
    <S.Card data-testid="player">
      <Button to={RoutePaths.HOME} text="Home" />
      <S.PlayerBox>
        <ReactPlayer
          data-testid="videoPlayer"
          url={`https://www.youtube.com/watch?v=${id}`}
          width="100%"
          controls={true}
          playsinline={true}
          config={{
            playerVars: {
              autoplay: 1,
              controls: 1,
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
              playsinline: 1,
              origin: window.location.origin,
              // Enable adaptive bitrate
              hls: {
                adaptive: true,
              },
              // Enable hardware acceleration
              playerVars: {
                hardwareAcceleration: 1,
              },
              // Choose the best video format for the web
              // 22: 720p, 43: 360p, 18: 360p, 36: 240p, 17: 144p
              fmt: "22+251/43+251/18+251/36+251/17",
              // Use video compression to improve load time
              // 1: Fast Start, 3: Use GPU, 15: Use compression
              iv_load_policy: 1,
              ecver: 3,
              enablejsapi: 1,
            },
          }}
        />
      </S.PlayerBox>
      <S.InnerBox>
        <div>
          <h3>{title}</h3>
          <S.TagsUl>{mappedTags}</S.TagsUl>
        </div>
        <div>
          <p>
            <b>view:</b> {viewCount}
          </p>
          <p>
            <b>likes:</b> {likeCount}
          </p>
        </div>
      </S.InnerBox>
    </S.Card>
  );
};

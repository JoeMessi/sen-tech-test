import * as S from "./Gallery.styles";
import { Thumbnail } from "../thumbnail/Thumbnail";
import { Video } from "src/store/videoStore";

interface GalleryProps {
  videos: Video[];
}

export const Gallery = ({ videos }: GalleryProps) => {
  return (
    <S.Gallery>
      {videos?.map((video) => {
        const { id, snippet, statistics } = video;
        const { title, thumbnails, tags } = snippet;
        const { viewCount, likeCount } = statistics;
        return (
          <Thumbnail
            key={id}
            id={id}
            title={title}
            img={thumbnails.medium.url}
            tags={tags}
            viewCount={viewCount}
            likeCount={likeCount}
          />
        );
      })}
    </S.Gallery>
  );
};

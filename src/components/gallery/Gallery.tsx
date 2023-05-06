import { Video } from "src/api/hooks/useFetchVideos";
import * as S from "./Gallery.styles";
import { Thumbnail } from "../thumbnail/Thumbnail";

interface GalleryProps {
  videos: Video[];
}

export const Gallery = ({ videos }: GalleryProps) => {
  return (
    <S.Gallery>
      {videos?.map((video) => {
        const { id, snippet } = video;
        const { title, thumbnails } = snippet;
        return (
          <Thumbnail
            key={id}
            id={id}
            title={title}
            img={thumbnails.medium.url}
          />
        );
      })}
    </S.Gallery>
  );
};

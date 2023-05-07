import * as S from "./Gallery.styles";
import { Thumbnail } from "../thumbnail/Thumbnail";
import { Video } from "src/app/store/videoStore";
import { memo } from "react";

interface GalleryProps {
  videos: Video[];
}

export const Gallery = memo(({ videos }: GalleryProps) => {
  return (
    <S.Gallery data-testid="gallery">
      {videos?.map(({ id, snippet: { title, thumbnails } }) => {
        return (
          <Thumbnail
            key={id}
            id={id}
            title={title}
            img={thumbnails.medium.url}
            data-testid="thumbnail"
          />
        );
      })}
    </S.Gallery>
  );
});

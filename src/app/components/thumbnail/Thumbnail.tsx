import { Link } from "react-router-dom";
import * as S from "./Thumbnail.styles";
import { RoutePaths } from "src/app/routes/route-paths";

interface ThumbnailProps {
  id: string;
  title: string;
  img: string;
}

const titleLength = 50;

export const Thumbnail = ({ id, title, img }: ThumbnailProps) => {
  const trimTitle =
    title.length > titleLength ? `${title.slice(0, titleLength)}...` : title;

  return (
    <Link to={RoutePaths.PLAYER(id)} data-testid="thumbnail">
      <S.Card id={id}>
        <img src={img} alt={title} />
        <S.Para>{trimTitle}</S.Para>
      </S.Card>
    </Link>
  );
};

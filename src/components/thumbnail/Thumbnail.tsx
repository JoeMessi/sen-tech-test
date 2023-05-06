import { Link } from "react-router-dom";
import * as S from "./Thumbnail.styles";
import { RoutePaths } from "src/app/routes/route-paths";

interface ThumbnailProps {
  id: string;
  title: string;
  img: string;
}

export const Thumbnail = ({ id, title, img }: ThumbnailProps) => {
  return (
    <Link to={RoutePaths.PLAYER(id)}>
      <S.Card id={id}>
        <img src={img} alt="alt" />
        <p>{title}</p>
      </S.Card>
    </Link>
  );
};

import { Link } from "react-router-dom";
import * as S from "./Thumbnail.styles";
import { RoutePaths } from "src/app/routes/route-paths";

interface ThumbnailProps {
  id: string;
  title: string;
  img: string;
  tags: string[];
  viewCount: string;
  likeCount: string;
}

export const Thumbnail = ({
  id,
  title,
  img,
  tags,
  viewCount,
  likeCount,
}: ThumbnailProps) => {
  console.log(title, tags);

  const setSessionStorage = () => {
    sessionStorage.setItem("title", title);
    sessionStorage.setItem("tags", tags.join(","));
    sessionStorage.setItem("viewCount", viewCount);
    sessionStorage.setItem("likeCount", likeCount);
  };

  return (
    <Link to={RoutePaths.PLAYER(id)} onClick={setSessionStorage}>
      <S.Card id={id}>
        <img src={img} alt="alt" />
        <p>{title}</p>
      </S.Card>
    </Link>
  );
};

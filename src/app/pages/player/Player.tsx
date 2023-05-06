import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

const Player = () => {
  let { id } = useParams();
  console.log(id);
  return (
    <>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} config={{}} />
    </>
  );
};
export default Player;
